import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Receita, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Injectable()
export class ReceitaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ReceitaUncheckedCreateInput): Promise<Receita> {
    return await this.prisma.receita.create({ data });
  }

  async findAll(): Promise<Receita[]> {
    return await this.prisma.receita.findMany();
  }

  async findOne(id: number): Promise<Receita> {
    return await this.prisma.receita.findUnique({where: {id}});
  }

  async update(id: number, data: UpdateReceitaDto): Promise<Receita> {
    return await this.prisma.receita.update({data, where: {id}});
  }

  async remove(id: number): Promise<Receita> {
    return await this.prisma.receita.delete({where: {id}});
  }
}