import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Room } from './roominfor.entity';
import { RoomService } from './roominfor.service';

@Controller('roominfor')
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  @Get()
  findAll(): Promise<Room[]> {
    return this.roomService.findAll();
  }

  @Get(':room_number')
  findOne(@Param('room_number') room_number: number): Promise<Room> {
    return this.roomService.findOne(room_number);
  }

  @Post()
  create(@Body() room: Room): Promise<Room> {
    return this.roomService.create(room);
  }
}
