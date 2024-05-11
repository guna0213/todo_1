import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TodoDocument } from './entities/todo.entity';
import { CreateTodoDto } from './dto/create-todo.dto';
//write only db logic
@Injectable()
export class TodoService {
    findOne(id:string) {
        return this.todoModel.findById(id).exec();
    }

constructor(
    @InjectModel('Todo') private readonly todoModel: Model<TodoDocument>,
) {}

    remove() {
        throw new Error('Method not implemented.');
    }
    updatePartial() {
        throw new Error('Method not implemented.');
    }
    updateFull() {
        throw new Error('Method not implemented.');
    }
    findAll() {
        return this.todoModel.find().exec();
    }
    create(createTodoDto: CreateTodoDto) {
        const createdTodo = new this.todoModel(createTodoDto);
        return createdTodo.save();
        
    }
}
