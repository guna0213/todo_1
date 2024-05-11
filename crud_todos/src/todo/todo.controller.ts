import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';

@Controller('todos')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Post()
  create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }
  @Get()
  findAll() {
    return this.todoService.findAll();
  }
  @Get(':id')
  findOne(
    @Param('id') id:string
  ) {
    return this.todoService.findOne(id);
  }

  @Put()
  updateFull() {
    return this.todoService.updateFull();
  }
  @Patch()
  updatePartial() {
    return this.todoService.updatePartial();
  }
  @Delete()
  remove() {
    return this.todoService.remove();
  }

  //controller -we write only logic here
}
