import { generateRandom } from './random';
import { Tribe } from '../../../entities/tribe.entity';
import { httpMock } from '../data.fake.repository';

export const TribeFactory = (params = {}): Tribe => {
  const tribe = new Tribe();
  tribe.idTribe = params['idTribe'] || generateRandom();
  tribe.name = params['name'] || 'Test7777';
  tribe.status = params['status'] || 604;
  return tribe;
};

export class HttpExternalServiceFake {
  async getStatesList() {
    return httpMock;
  }
}
