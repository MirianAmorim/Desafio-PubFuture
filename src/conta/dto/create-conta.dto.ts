import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateContaDto {
  @IsNotEmpty()
  @IsString()
  instFinanc: string;
  
  @IsNotEmpty()
  @IsString()
  tipo: string;
}