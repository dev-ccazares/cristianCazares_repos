import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { OrganizationService } from '../services/organization.service';
import { CreateOrganizationDto } from '../dto/create-organization.dto';
import { UpdateOrganizationDto } from '../dto/update-organization.dto';
import { Organization } from '../entities/organization.entity';
import { ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';

@ApiTags('organization')
@Controller('organization')
export class OrganizationController {
  constructor(private readonly organizationService: OrganizationService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Organization All',
  })
  findAll() {
    return this.organizationService.findAll();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'Organization Find Id',
  })
  findOne(@Param('id') id: number) {
    return this.organizationService.findOne(id);
  }

  @Post()
  @ApiBody({ type: CreateOrganizationDto })
  @ApiResponse({
    status: 201,
    description: 'Organization Created',
  })
  create(@Body() createOrganizationDto: CreateOrganizationDto) {
    return this.organizationService.create(createOrganizationDto);
  }

  @Patch(':id')
  @ApiBody({ type: UpdateOrganizationDto })
  @ApiResponse({ status: 200, description: 'Organization Update' })
  update(
    @Param('id') id: number,
    @Body() updateOrganizationDto: UpdateOrganizationDto,
  ) {
    return this.organizationService.update(+id, updateOrganizationDto);
  }

  @Delete(':id')
  @ApiResponse({ status: 200, description: 'Organization Delete' })
  remove(@Param('id') id: string) {
    return this.organizationService.remove(+id);
  }
}
