import { Injectable } from '@nestjs/common';
import { RoomType } from './interfaces/roomtype.interface';

@Injectable()
export class RoomTypeService {
  private readonly roomtypes: RoomType[] = [
    {
      roomtype_id: 1,
      name: 'Single Room',
      description: 'A room with a single bed.',
      capacity: 1,
      price: 50.0,
    },
    {
      roomtype_id: 2,
      name: 'Double Room',
      description: 'A room with a double bed.',
      capacity: 2,
      price: 75.0,
    },
    {
      roomtype_id: 3,
      name: 'Twin Room',
      description: 'A room with two single beds.',
      capacity: 2,
      price: 80.0,
    },
    {
      roomtype_id: 4,
      name: 'Family Room',
      description: 'A larger room suitable for families with children.',
      capacity: 4,
      price: 120.0,
    },
    {
      roomtype_id: 5,
      name: 'Suite',
      description: 'A luxurious suite with a separate living area.',
      capacity: 2,
      price: 150.0,
    },
  ];

  findAll(): RoomType[] {
    return this.roomtypes;
  }
}
