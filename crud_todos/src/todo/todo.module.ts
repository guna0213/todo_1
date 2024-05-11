import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { MongooseModule }  from '@nestjs/mongoose'
import { TodoSchema } from './entities/todo.entity';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://1ts4s3cur3p4ssw0rd:1ts4s3cur3p4ssw0rd@wobot-cluster.e6vwm.mongodb.net/guna?retryWrites=true&w=majority'),
  MongooseModule.forFeature([{name:'Todo',schema:TodoSchema}])
  ],
  controllers: [TodoController],
  providers: [TodoService]
})
export class TodoModule {}
