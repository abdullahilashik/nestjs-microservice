import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { TaskDto } from '@app/common/dto';

@Controller()
export class TasksController {
  constructor(private readonly tasksService: TasksService) { }

  // event pattern that grabs the task created event
  @EventPattern('task-created')
  createTask(@Payload() taskDto: TaskDto) {
    this.tasksService.createTask(taskDto);
  }

  // message pattern that listens for a message and returns a value
  @MessagePattern({ cmd: 'get-tasks' })
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }
}
