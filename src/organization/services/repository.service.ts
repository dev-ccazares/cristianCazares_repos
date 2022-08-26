import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';
import { ITribe } from '../interfaces/all.interface';
import { Tribe } from '../entities/tribe.entity';
import { responseMetricsErrors } from '../constants.all';
import { HttpExternalService } from '../../core/http/http.service';

@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(Tribe)
    private tribeRepository: Repository<Tribe>,
    private readonly httpExternalService: HttpExternalService,
  ) {}

  async findOne(id: number) {
    const tribe = await this.tribeRepository.findOne({
      idTribe: id,
    });
    if (!tribe) {
      return responseMetricsErrors.notMetrics;
    }
    const result = await this.queryTribeRepository();
    if (!result.length) {
      return responseMetricsErrors.notCoverage;
    }

    const { repositories } = await this.httpExternalService.getStatesList();

    return tribe;
  }

  async queryTribeRepository(): Promise<Partial<ITribe>[] | null> {
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
      .andWhere('metrics.createTime >= :after', { after })
      .andWhere('repository.createTime < :before', { before })
      .getMany();

    return result;
  }
}
