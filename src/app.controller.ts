import { Controller, Get } from '@nestjs/common';
import { IResponseVerification } from './app.interface';
import { AppService } from './app.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('repository')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/verification/repositories')
  @ApiResponse({
    status: 200,
    description: 'Get simulate validation repositories',
  })
  getConstantsRepositories(): IResponseVerification {
    return this.appService.getConstantsRepositories();
  }
}
