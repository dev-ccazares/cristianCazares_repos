import { Test, TestingModule } from '@nestjs/testing';
import { RepositoryController } from './repository.controller';
import { RepositoryService } from '../services/repository.service';
import { RepositoryServiceFake } from '../services/__mock__/repository.service';

describe('RepositoryController', () => {
  let controller: RepositoryController;
  let service: RepositoryService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepositoryController],
      providers: [
        {
          provide: RepositoryService,
          useClass: RepositoryServiceFake,
        },
      ],
    }).compile();
    controller = module.get<RepositoryController>(RepositoryController);
    service = module.get<RepositoryService>(RepositoryService);
  });
  it('RepositoryController should be defines', () => {
    expect(controller).toBeDefined();
  });
  it('RepositoryService should be defines', () => {
    expect(service).toBeDefined();
  });
  it('Get Repository Metrics List', async () => {
    const result = await service.findOne(1);

    expect(result.length).toEqual(3);
  });
  it('Get Repository Metrics List Fail', async () => {
    const result = await service.findOne(2);

    expect(result.length).toEqual(0);
  });
  it('Get Verify', async () => {
    const result = await service.getDownloadMetrics(1);

    expect(result).toEqual(true);
  });
  it('Get Download Fail', async () => {
    const result = await service.getDownloadMetrics(2);

    expect(result).toEqual(false);
  });
});
