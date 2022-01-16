import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { DespesaService } from './despesa.service';
import { CreateDespesaDto } from './dto/create-despesa.dto';
import { UpdateDespesaDto } from './dto/update-despesa.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('despesa')
export class DespesaController {
  constructor(private readonly DespesaService: DespesaService) {}

  @Post()
  create(@Body() createDespesaDto: CreateDespesaDto) {
    return this.DespesaService.create(createDespesaDto);
  }

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.DespesaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.DespesaService.findOne(+id);
  }

  @Patch(':id')  
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateDespesaDto: UpdateDespesaDto) {
    return this.DespesaService.update(+id, updateDespesaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.DespesaService.remove(+id);
  }
}
