import { Controller, Get, Param } from '@nestjs/common';
import { RepositoryService } from '../services/repository.service';

@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.repositoryService.findOne(id);
  }
}
