import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ReceitaService } from './receita.service';
import { CreateReceitaDto } from './dto/create-receita.dto';
import { UpdateReceitaDto } from './dto/update-receita.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('receita')
export class ReceitaController {
  constructor(private readonly ReceitaService: ReceitaService) {}

  @Post()
  create(@Body() createReceitaDto: CreateReceitaDto) {
    return this.ReceitaService.create(createReceitaDto);
  }

  @Get()
  // @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.ReceitaService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string) {
    return this.ReceitaService.findOne(+id);
  }

  @Patch(':id')  
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateReceitaDto: UpdateReceitaDto) {
    return this.ReceitaService.update(+id, updateReceitaDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.ReceitaService.remove(+id);
  }
}
