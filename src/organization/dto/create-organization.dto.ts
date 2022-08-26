import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Max,
  IsNotEmpty,
} from 'class-validator';

export class CreateOrganizationDto {
  @IsNumber()
  @IsNotEmpty()
  @IsOptional()
  idOrganization: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Max(9999999999)
  status: number;
}
