import { IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateReceitaDto {
  @IsNotEmpty()
  @IsString()
  valor: number;
  
  @IsNotEmpty()
  @IsString()
  dataRec: string;
  
  @IsNotEmpty()
  @IsString()
  dataRecEsp: string;

  @IsNotEmpty()
  @IsString()
  descricao: string;
 
  @IsNotEmpty()
  @IsInt()
  tipo: string;
}