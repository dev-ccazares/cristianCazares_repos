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
@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, Tribe, Repository, Metrics]),
  ],
  controllers: [OrganizationController, RepositoryController],
  providers: [OrganizationService, RepositoryService],
})
export class OrganizationModule {}
