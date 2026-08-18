import { TaskDto } from '@app/common/dto';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
    constructor(
        private readonly taskService: TasksService
    ) { }
    // get all tasks
    @Get('/')
    getAllTasks() {
        return this.taskService.getAllTasks();
    }

    // create a new task
    @Post('create')
    createNewTask(@Body() task: TaskDto) {
        return this.taskService.createNewTask(task);
    }
}
