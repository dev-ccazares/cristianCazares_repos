import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationService } from './services/organization.service';
import { OrganizationController } from './controllers/organization.controller';
import { RepositoryService } from './services/repository.service';
import { RepositoryController } from './controllers/repository.controller';
import { Organization } from './entities/organization.entity';
import { Tribe } from './entities/tribe.entity';
import { Repository } from './entities/respository.entity';
import { Metrics } from './entities/metrics.entity';
import { HttpExternalService } from '../core/http/http.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, Tribe, Repository, Metrics]),
    HttpModule,
  ],
  controllers: [OrganizationController, RepositoryController],
  providers: [OrganizationService, RepositoryService, HttpExternalService],
})
export class OrganizationModule {}
