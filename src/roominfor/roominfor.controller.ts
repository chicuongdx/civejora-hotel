import { Controller, Get } from '@nestjs/common';
import { Room } from './roominfor.entity';
import { RoomService } from './roominfor.service';

@Controller('roominfor')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  findAll(): Promise<{ [key: number]: Omit<Room, 'floor'>[] }> {
    return this.roomService.findAll();
  }
}
