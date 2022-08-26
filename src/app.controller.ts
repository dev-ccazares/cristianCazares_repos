import { Controller, Get } from '@nestjs/common';
import { IResponseVerification } from './app.interface';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/verification/repositories')
  getConstantsRepositories(): IResponseVerification {
    return this.appService.getConstantsRepositories();
  }
}
