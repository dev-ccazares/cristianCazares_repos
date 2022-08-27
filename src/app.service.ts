import { Injectable } from '@nestjs/common';
import { IRepositorie, IResponseVerification } from './app.interface';
import * as constansRepositories from './constansRepositories.json';

@Injectable()
export class AppService {
  getConstantsRepositories(): IResponseVerification {
    const result: IRepositorie[] = constansRepositories.repositories;
    return { repositories: result };
  }
}
