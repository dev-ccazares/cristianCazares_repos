import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IResponseVerification } from './app.interface';
import * as constansRepositories from './constansRepositories.json';

describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
    appService = app.get<AppService>(AppService);
  });

  describe('find', () => {
    it('should return an array of repositories', async () => {
      const result = {
        repositories: [
          { id: 1, state: 604, name: ' Verificado' },
          { id: 2, state: 605, name: 'En espera' },
          { id: 3, state: 606, name: 'Aprobado' },
        ],
      };
      jest
        .spyOn(appService, 'getConstantsRepositories')
        .mockImplementation(() => result);

      expect(await appController.getConstantsRepositories()).toBe(result);
    });
  });
});
