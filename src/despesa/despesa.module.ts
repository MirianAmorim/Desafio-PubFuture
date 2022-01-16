import { Module } from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { DespesaController } from './despesa.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; //importar dentro do module criado

@Module({
  controllers: [DespesaController],
  providers: [DespesaService],
  imports: [PrismaModule], //importar
})
export class DespesaModule {}