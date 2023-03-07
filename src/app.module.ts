import { RoomTypeModule } from './roomtype/roomtype.module';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { AuthGuard } from './auth.guard';

@Module({
  imports: [RoomTypeModule],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(logger).forRoutes(RoomTypeController);
//   }
// }
