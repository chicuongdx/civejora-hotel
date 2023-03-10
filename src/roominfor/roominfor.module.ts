import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomController } from './roominfor.controller';
import { Room } from './roominfor.entity';
import { RoomService } from './roominfor.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room])],
  controllers: [RoomController],
  providers: [RoomService],
  exports: [TypeOrmModule],
})
export class RoomModule {}
