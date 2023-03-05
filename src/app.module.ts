import { RoomTypeModule } from './roomtype/roomtype.module';
import { Module } from '@nestjs/common';

@Module({
  imports: [RoomTypeModule],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(logger).forRoutes(RoomTypeController);
//   }
// }
