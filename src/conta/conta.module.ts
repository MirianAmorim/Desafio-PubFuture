import { Module } from '@nestjs/common';
import { ContaService } from './conta.service';
import { ContaController } from './conta.controller';
import { PrismaModule } from 'src/prisma/prisma.module'; //importar dentro do module criado

@Module({
  controllers: [ContaController],
  providers: [ContaService],
  imports: [PrismaModule], //importar
})
export class ContaModule {}