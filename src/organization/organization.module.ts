import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationService } from './organization.service';
import { OrganizationController } from './organization.controller';
import { Organization } from './entities/organization.entity';
import { Tribe } from './entities/tribe.entity';
import { Repository } from './entities/respository.entity';
import { Metrics } from './entities/metrics.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, Tribe, Repository, Metrics]),
  ],
  controllers: [OrganizationController],
  providers: [OrganizationService],
})
export class OrganizationModule {}
