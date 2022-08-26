import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HttpExternalService {
  constructor(private http: HttpService) {}

  public async getStatesList() {
    const response = await this.http.axiosRef({
      method: 'GET',
      baseURL: process.env.SERVICE_URL,
      url: `/verification/repositories`,
    });

    return response.data;
  }
}
