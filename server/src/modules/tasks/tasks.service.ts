import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto, UpdateTaskStatusDto } from './dto/update-task.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService) {}

  async create(createTaskDto: CreateTaskDto, userId: string) {
    if (!createTaskDto.description) {
      throw new BadRequestException();
    }

    const { description } = createTaskDto;

    const task = await this.prisma.task.create({
      data: { description, userId },
    });

    return task;
  }

  async findAll(userId: string) {
    const tasks = await this.prisma.task.findMany({ where: { userId } });

    return tasks;
  }

  async findOne(id: string) {
    const task = await this.prisma.task.findFirst({ where: { id } });

    if (!task) {
      throw new NotFoundException();
    }

    return task;
  }

  async updateDescription(id: string, updateTaskDto: UpdateTaskDto) {
    const { description } = updateTaskDto;
    const task = await this.prisma.task.findFirst({ where: { id } });

    if (!task) {
      throw new NotFoundException();
    }

    const updatedTask = await this.prisma.task.update({
      data: { ...task, description },
      where: { id },
    });

    return updatedTask;
  }

  async updateStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto) {
    const { status } = updateTaskStatusDto;
    const task = await this.prisma.task.findFirst({ where: { id } });

    if (!task) {
      throw new NotFoundException();
    }

    const updatedTask = await this.prisma.task.update({
      data: { ...task, status },
      where: { id },
    });

    return updatedTask;
  }

  async remove(id: string) {
    const task = await this.prisma.task.findFirst({ where: { id } });

    if (!task) {
      throw new NotFoundException();
    }

    return `OK`;
  }
}
