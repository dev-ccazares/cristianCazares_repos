import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as dayjs from 'dayjs';
import { ITribe } from '../interfaces/all.interface';
import { Tribe } from '../entities/tribe.entity';
import { responseMetricsErrors } from '../constants.all';
@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(Tribe)
    private tribeRepository: Repository<Tribe>,
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
    return tribe;
  }

  async queryTribeRepository(): Promise<Partial<ITribe>[] | null> {
    const result = await this.tribeRepository
      .createQueryBuilder('tribe')
      .getMany();

    return result;
  }
}
