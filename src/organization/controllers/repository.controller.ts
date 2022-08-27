import { Controller, Get, Param, Res } from '@nestjs/common';
import { RepositoryService } from '../services/repository.service';
import { Response } from 'express';
import { ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('repository')
@Controller('repository')
export class RepositoryController {
  constructor(private readonly repositoryService: RepositoryService) {}

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Get metrics by tribe',
  })
  findOne(@Param('id') id: number) {
    return this.repositoryService.findOne(id);
  }
  @Get('download/:id')
  @ApiResponse({
    status: 200,
    description: 'Download csv get metrics by tribe',
  })
  async getRepositoryDownloadMetrics(
    @Param('id') id: number,
    @Res() res: Response,
  ) {
    const result = await this.repositoryService.getDownloadMetrics(id);
    res.header('Content-Type', 'text/csv');
    res.header('Content-Disposition', 'attachment; filename=pichincha.csv');
    res.status(200).end(result);
  }
}
