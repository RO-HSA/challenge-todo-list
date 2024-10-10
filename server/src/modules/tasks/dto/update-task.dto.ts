import { PartialType } from '@nestjs/mapped-types';
import { CreateTaskDto } from './create-task.dto';
import { Status } from '@prisma/client';

export class UpdateTaskDto extends PartialType(CreateTaskDto) {
  description: string;
  updatedAt?: string;
}

export class UpdateTaskStatusDto {
  status: Status;
}
