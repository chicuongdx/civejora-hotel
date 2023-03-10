import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RoomType } from './roomtype.entity';

@Injectable()
export class RoomTypeService {
  constructor(
    @InjectRepository(RoomType)
    private roomtypesRepository: Repository<RoomType>,
  ) {}

  findAll(): Promise<RoomType[]> {
    return this.roomtypesRepository.find();
  }

  findOne(roomtype_id: number): Promise<RoomType> {
    return this.roomtypesRepository.findOneBy({ roomtype_id });
  }

  create(roomtype: RoomType): Promise<RoomType> {
    return this.roomtypesRepository.save(roomtype);
  }
}
