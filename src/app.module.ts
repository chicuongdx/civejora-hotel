import { RoomModule } from './roominfor/roominfor.module';
import { RoomTypeModule } from './roomtype/roomtype.module';
import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { AuthGuard } from './auth.guard';
// import { LoggingInterceptor } from './logging.interceptor';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RoomType } from './roomtype/roomtype.entity';
import { DataSource } from 'typeorm';
// import Connection from 'mysql2/typings/mysql/lib/Connection';
import { TransformInterceptor } from './transform.interceptor';
import { ExcludeNullInterceptor } from './exclude-null.interceptor';

@Module({
  imports: [
    RoomModule,
    RoomTypeModule,
    ConfigModule.forRoot({
      envFilePath: '.env.development',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'aneicer123',
      database: 'civejora',
      entities: [RoomType],
      synchronize: true,
      autoLoadEntities: true,
    }),
    RoomTypeModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: ExcludeNullInterceptor,
    },
  ],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(logger).forRoutes(RoomTypeController);
//   }
// }
