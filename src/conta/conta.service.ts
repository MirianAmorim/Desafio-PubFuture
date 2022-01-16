import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateContaDto } from './dto/create-conta.dto';
import { UpdateContaDto } from './dto/update-conta.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Conta, Prisma } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { PrismaModule } from 'src/prisma/prisma.module';

@Injectable()
export class ContaService {
  constructor(private prisma: PrismaService) {}

  async create(data: Prisma.ContaUncheckedCreateInput): Promise<Conta> {
    return await this.prisma.conta.create({ data });
  }

  async findAll(): Promise<Conta[]> {
    return await this.prisma.conta.findMany();
  }

  async findOne(id: number): Promise<Conta> {
    return await this.prisma.conta.findUnique({where: {id}});
  }

  async update(id: number, data: UpdateContaDto): Promise<Conta> {
    return await this.prisma.conta.update({data, where: {id}});
  }

  async remove(id: number): Promise<Conta> {
    return await this.prisma.conta.delete({where: {id}});
  }
}