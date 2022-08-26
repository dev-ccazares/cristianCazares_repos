import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository as Repo } from 'typeorm';
import { Repository } from '../entities/respository.entity';
@Injectable()
export class RepositoryService {
  constructor(
    @InjectRepository(Repository)
    private repoRepository: Repo<Repository>,
  ) {}

  findOne(id: number) {
    return this.repoRepository.findOne(id);
  }
}
