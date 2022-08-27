import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as dayjs from 'dayjs';
import { Parser } from 'json2csv';
import { Repository } from 'typeorm';
import { HttpExternalService } from '../../core/http/http.service';
import { listStatusRepository, responseMetricsErrors } from '../constants.all';
import { Tribe } from '../entities/tribe.entity';
import {
  IDataRequest,
  IResponseHttpStatus,
  ITribe,
} from '../interfaces/all.interface';
import { ResponseMetricsModel } from '../models/organization.model';

@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(Tribe)
    private tribeRepository: Repository<Tribe>,
    private httpExternalService: HttpExternalService,
  ) {}

  async findOne(id: number) {
    const tribe = await this.tribeRepository.findOne({
      idTribe: id,
    });
    if (!tribe) {
      return responseMetricsErrors.notMetrics;
    }
    const result = await this.queryTribeRepository(id);
    if (!result.length) {
      return responseMetricsErrors.notCoverage;
    }

    const { repositories } = await this.httpExternalService.getStatesList();
    const resync: any = { ...result[0] };
    return await this.transFormatData(resync, repositories);
  }

  async getDownloadMetrics(id: number) {
    const result = await this.findOne(id);
    if (!Array.isArray(result) || !result.length) {
      return !Array.isArray(result) && !result.length
        ? responseMetricsErrors.notMetrics
        : result;
    }
    const fileDownload = [];
    result.forEach((r) => {
      fileDownload.push({ ...r });
    });
    const csvFields = Object.keys(result[0]);
    const csvParser = new Parser({ csvFields });
    return csvParser.parse(fileDownload);
  }

  async queryTribeRepository(id: number): Promise<Partial<ITribe>[] | null> {
    const after: Date = new Date(dayjs().startOf('year').toString());
    const before: Date = new Date(dayjs().endOf('year').toString());
    const result = await this.tribeRepository
      .createQueryBuilder('tribe')
      .leftJoinAndSelect('tribe.organization', 'organization')
      .leftJoinAndSelect('tribe.repository', 'repository')
      .leftJoinAndSelect('repository.metrics', 'metrics')
      .select([
        'organization.name',
        'organization.status',
        'repository.name',
        'repository.state',
        'tribe.idTribe',
        'tribe.name',
        'tribe.status',
        'metrics.coverage',
        'metrics.bugs',
        'metrics.vulnerabilities',
        'metrics.hotspots',
        'metrics.codeSmells',
        'metrics.createTime',
      ])
      .where("repository.state = 'E'")
      .andWhere('metrics.coverage > 73')
      .andWhere('tribe.id_tribe = :id', { id })
      .andWhere('metrics.createTime >= :after', { after })
      .andWhere('repository.createTime < :before', { before })
      .getMany();

    return result;
  }

  async transFormatData(
    data: Partial<IDataRequest>,
    repositories: IResponseHttpStatus[],
  ): Promise<Partial<ResponseMetricsModel>[]> {
    const obj = data.repository.map((element) => {
      return {
        id: data.idTribe,
        name: element.name,
        tribe: data.name,
        organization: data?.organization?.name,
        coverage: element?.metrics?.coverage + ' %',
        codeSmells: element?.metrics?.codeSmells,
        bugs: element?.metrics?.bugs,
        vulnerabilities: element?.metrics?.vulnerabilities,
        hotspots: element?.metrics?.hotspots,
        verificationState: repositories.find((res) => res.state == data.status)
          ?.name,
        state: listStatusRepository.find((lr) => lr.id === element.state)?.name,
      };
    });
    return obj;
  }
}
