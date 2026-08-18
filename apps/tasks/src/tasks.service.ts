import { TaskDto } from '@app/common/dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {

  tasks: TaskDto[] = [];

  // get all tasks
  getAllTasks() {
    return this.tasks;
  }

  // create a new task
  createTask(task: TaskDto) {
    console.log('A new task assigned ' + task.name);
    this.tasks.push(task);
  }
}
