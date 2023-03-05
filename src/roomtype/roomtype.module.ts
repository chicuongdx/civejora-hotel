import { RoomTypeService } from './roomtype.service';
import { RoomTypeController } from './roomtype.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [RoomTypeController],
  providers: [RoomTypeService],
  exports: [RoomTypeModule],
})
export class RoomTypeModule {}
