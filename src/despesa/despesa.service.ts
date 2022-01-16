import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Despesa, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Injectable()
export class DespesaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.DespesaUncheckedCreateInput): Promise<Despesa> {
    return await this.prisma.despesa.create({ data });
  }

  async findAll(): Promise<Despesa[]> {
    return await this.prisma.despesa.findMany();
  }

  async findOne(id: number): Promise<Despesa> {
    return await this.prisma.despesa.findUnique({where: {id}});
  }

  async update(id: number, data: UpdateDespesaDto): Promise<Despesa> {
    return await this.prisma.despesa.update({data, where: {id}});
  }

  async remove(id: number): Promise<Despesa> {
    return await this.prisma.despesa.delete({where: {id}});
  }
}