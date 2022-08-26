import { Expose } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
export class CreateOrganizationDto {
  @Expose()
  @IsNumber()
  @IsOptional()
  readonly idOrganization: number;
  @Expose()
  @IsString()
  readonly name: string;
  @Expose()
  @IsNumber()
  readonly status: number;
}
