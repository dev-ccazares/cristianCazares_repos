import { Injectable, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

@Injectable()
export class AppService {
  getHello(): string {
    return 'hola';
  }
}
