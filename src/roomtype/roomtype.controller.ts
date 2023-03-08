import {
  Controller,
  Get,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { RoomType } from './interfaces/roomtype.interface';
import { RoomTypeService } from './roomtype.service';

@Controller('roomtype')
export class RoomTypeController {
  constructor(private readonly roomtypeService: RoomTypeService) {}

  @Get()
  async findAll(): Promise<RoomType[]> {
    return this.roomtypeService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param(
      'id',
      new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE }),
    )
    id: number,
  ): Promise<RoomType> {
    return this.roomtypeService.findOne(id);
  }
}
