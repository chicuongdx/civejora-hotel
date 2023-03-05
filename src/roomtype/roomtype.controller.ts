import { Controller, Get } from '@nestjs/common';
import { RoomType } from './interfaces/roomtype.interface';
import { RoomTypeService } from './roomtype.service';

@Controller('roomtype')
export class RoomTypeController {
  constructor(private readonly roomtypeService: RoomTypeService) {}

  @Get()
  findAll(): RoomType[] {
    return this.roomtypeService.findAll();
  }
}
