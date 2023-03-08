import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomTypeService } from './roomtype.service';
import { RoomTypeController } from './roomtype.controller';
import { Module } from '@nestjs/common';
import { RoomType } from './roomtype.entity';

@Module({
  imports: [TypeOrmModule.forFeature([RoomType])],
  controllers: [RoomTypeController],
  providers: [RoomTypeService],
  exports: [TypeOrmModule],
})
export class RoomTypeModule {}
