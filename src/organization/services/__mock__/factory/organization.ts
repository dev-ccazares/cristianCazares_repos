import { Organization } from '../../../entities/organization.entity';
import { generateRandom } from './random';

export const OrganizationFactory = (params = {}): Organization => {
  const org = new Organization();
  org.idOrganization = params['idOrganization'] || generateRandom();
  org.name = params['name'] || 'TCristian';
  org.status = params['status'] || 604;
  return org;
};
