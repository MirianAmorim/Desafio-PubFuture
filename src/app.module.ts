import { PrismaClient } from '@prisma/client'
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContaModule } from './conta/conta.module';
import { ReceitaModule } from './receita/receita.module';
import { DespesaModule } from './despesa/despesa.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [ContaModule, ReceitaModule, DespesaModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
