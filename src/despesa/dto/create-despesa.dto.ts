import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateDespesaDto {
  @IsNotEmpty()
  @IsString()
  valor: number;
  
  @IsNotEmpty()
  @IsString()
  dataPag: string;
  
  @IsNotEmpty()
  @IsString()
  dataPagEsp: string;
 
  @IsNotEmpty()
  @IsInt()
  tipo: string;
}