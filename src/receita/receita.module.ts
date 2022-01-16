import { Module } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { ReceitaController } from './receita.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; //importar dentro do module criado

@Module({
  controllers: [ReceitaController],
  providers: [ReceitaService],
  imports: [PrismaModule], //importar
})
export class ReceitaModule {}