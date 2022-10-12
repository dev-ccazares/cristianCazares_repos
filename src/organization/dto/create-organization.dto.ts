import {
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  Max,
  IsNotEmpty,
  Matches,
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

  @ApiProperty()
  @MaxLength(50)
  @Matches(
    '^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  )
  url: string;
}
