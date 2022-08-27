import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Max,
  IsNotEmpty,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateOrganizationDto {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  idOrganization: number;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  @Max(9999999999)
  status: number;
}
