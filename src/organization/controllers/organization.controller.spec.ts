import { Test, TestingModule } from '@nestjs/testing';
import { OrganizationController } from './organization.controller';
import { OrganizationService } from '../services/organization.service';
import {
  OrganizationServiceFake,
  organizationDataMokRespose,
} from '../services/__mock__/organization.service';

describe('OrganizationController', () => {
  let controller: OrganizationController;
  let service: OrganizationService;
  const organizationMock = {
    idOrganization: 0,
    name: 'Test Organization',
    status: 605,
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [OrganizationController],
      providers: [
        {
          provide: OrganizationService,
          useClass: OrganizationServiceFake,
        },
      ],
    }).compile();

    controller = module.get<OrganizationController>(OrganizationController);
    service = module.get<OrganizationService>(OrganizationService);
  });

  it('should be defined controller', () => {
    expect(controller).toBeDefined();
  });

  it('should be defined service', () => {
    expect(service).toBeDefined();
  });

  it('Create Organization Fail', async () => {
    jest.spyOn(service, 'create');
    const result = await controller.create({
      ...organizationMock,
      name: 'Test 1',
    });
    expect(result).toEqual('Error');
  });

  it('Create Organization', async () => {
    jest.spyOn(service, 'create');
    const result = await controller.create(organizationMock);

    expect(result).toEqual({ ...organizationMock, idOrganization: 777 });
  });
  it('Update Organization', async () => {
    jest.spyOn(service, 'create');
    const result = await controller.update(1, organizationMock);

    expect(result).toEqual('Update Success');
  });
  it('Update Organization Fail', async () => {
    jest.spyOn(service, 'create');
    const result = await controller.update(3, organizationMock);

    expect(result).toEqual('Error');
  });
  it('Get Organization', async () => {
    jest.spyOn(service, 'findOne');
    const result = await controller.findOne(2);

    expect(result).toEqual(organizationDataMokRespose[1]);
  });
  it('List Organizations', async () => {
    jest.spyOn(service, 'findAll');
    const result = await controller.findAll();

    expect(result.length).toEqual(2);
  });
  it('Delete  Organization', async () => {
    jest.spyOn(service, 'remove');
    const result = await controller.remove(1);

    expect(result).toEqual('Delete Success');
  });
  it('Delete  Organization Fail', async () => {
    jest.spyOn(service, 'remove');
    const result = await controller.remove(3);

    expect(result).toEqual('Error');
  });
});
