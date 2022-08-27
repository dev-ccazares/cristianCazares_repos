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
});
