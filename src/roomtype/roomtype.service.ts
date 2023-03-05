import { Injectable } from '@nestjs/common';
import { RoomType } from './interfaces/roomtype.interface';

@Injectable()
export class RoomTypeService {
  private readonly roomtypes: RoomType[] = [];

  findAll(): RoomType[] {
    return this.roomtypes;
  }
}
