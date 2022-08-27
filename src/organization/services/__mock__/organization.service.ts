import { CreateOrganizationDto } from '../../dto/create-organization.dto';

import { OrganizationFactory } from './factory/organization';

export const organizationDataMok = [
  OrganizationFactory({
    idOrganization: 1,
    name: 'Test 1',
    status: 604,
  }),
];

export const organizationDataMokRespose = [
  {
    idOrganization: 1,
    name: 'Test 1',
    status: 604,
  },
  {
    idOrganization: 2,
    name: 'Test 2',
    status: 604,
  },
];
export class OrganizationServiceFake {
  async create(obj: CreateOrganizationDto) {
    const { name } = obj;
    const nameSearch = organizationDataMokRespose.find(
      (org) => org.name === name,
    )?.name;
    return !nameSearch
      ? {
          ...obj,
          idOrganization: 777,
        }
      : 'Error';
  }
  async update(idOrganization: number, obj: CreateOrganizationDto) {
    const { name, status } = obj;
    let result = organizationDataMokRespose.find(
      (org) => org.idOrganization === idOrganization,
    );

    result = result ? { ...result, name, status } : result;
    return result && result.name === name && result.status === status
      ? 'Update Success'
      : 'Error';
  }

  async findOne(idOrganization: number) {
    return organizationDataMokRespose.find(
      (org) => org.idOrganization === idOrganization,
    );
  }
  async findAll() {
    return organizationDataMokRespose;
  }

  async remove(idOrganization: number) {
    return organizationDataMokRespose.filter(
      (org) => org.idOrganization === idOrganization,
    )?.length
      ? 'Delete Success'
      : 'Error';
  }
}
