import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateContaDto {
  @IsNotEmpty()
  @IsString()
  instFinanc: string;
  
  @IsNotEmpty()
  @IsString()
  tipo: string;
  
  @IsNotEmpty()
  @IsString()
  despesaid: number;
 
  @IsNotEmpty()
  @IsInt()
  receitaid: number;
}