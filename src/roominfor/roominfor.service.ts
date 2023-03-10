import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Room } from './roominfor.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';

@Injectable()
export class RoomService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}
  findAll(): Promise<Room[]> {
    return this.roomRepository.find();
  }

  findOne(room_number: number): Promise<Room> {
    return this.roomRepository.findOneBy({ room_number });
  }

  create(room: Room): Promise<Room> {
    return this.roomRepository.save(room);
  }
}
