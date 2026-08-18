import { TaskDto } from '@app/common/dto';
import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class TasksService {
    constructor(
        @Inject('TASK_SERVICE') private readonly taskClient: ClientProxy
    ) { }

    // get all tasks
    getAllTasks() {
        return this.taskClient.send({ cmd: 'get-tasks' }, {});
    }

    // create new task
    createNewTask(dto: TaskDto) {
        this.taskClient.emit('task-created', dto);
        return { msg: 'new task assigned' };
    }
}
