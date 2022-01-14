import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe()); //necessario para usar o @decorators
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Despesas Pessoais - Desafio Pub Future')
    .setDescription('API com conta, receita, despesas, saldo total e transferência entre contas')
    .setVersion('2.0')
    .addTag('conta')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT || 3000);
}
bootstrap();