import { resultMetrics } from './data.fake.repository';
import { TribeFactory } from './factory/tribe';
export const tribeMockInfo = [
  TribeFactory({
    idTribe: 1,
    name: 'TCazares',
    status: 640,
    created_at: new Date(),
    updated_at: new Date(),
  }),
];

export class RepositoryServiceFake {
  async findOne(id: number) {
    return resultMetrics.filter((r) => r.id === id);
  }
  async getDownloadMetrics(id: number) {
    return resultMetrics.filter((r) => r.id === id)?.length ? true : false;
  }
}
