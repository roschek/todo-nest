import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppController} from "../../app.controller";
import {AppService} from "../../app.service";
import {Todo} from "./entities/todo.entity";

@Module({
    imports: [
        TypeOrmModule.forFeature([Todo]),
        TodoModule,
    ],
    controllers: [],
    providers: [],
})
export class TodoModule {}
