import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Room } from './roominfor.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  findAll(): Promise<{ [key: number]: Omit<Room, 'floor'>[] }> {
    return this.roomRepository.find().then((roomInfos) => {
      const roomsByFloor = roomInfos.reduce((accumulator, currentValue) => {
        const floor = currentValue.floor;
        if (!accumulator[floor]) {
          accumulator[floor] = [];
        }
        const roomWithoutFloor = {
          room_id: currentValue.roomtype_id,
          room_number: currentValue.room_number,
          available: currentValue.available,
          inspected: currentValue.inspected,
        };
        accumulator[floor].push(roomWithoutFloor);
        return accumulator;
      }, {});

      return roomsByFloor;
    });
  }
}
