// import { ExcludeNullInterceptor } from './exclude-null.interceptor';
import { TransformInterceptor } from './transform.interceptor';
import { AuthGuard } from './auth.guard';
import { HttpExceptionFilter } from './http-exception.filter';
import { HttpAdapterHost, NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { logger } from './logger.middleware';
import { AllExceptionsFilter } from './all-exceptions.filter';
import { ValidationPipe } from '@nestjs/common';
import 'reflect-metadata';
// import { LoggingInterceptor } from './logging.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(logger);
  app.useGlobalFilters(new HttpExceptionFilter());

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter));

  app.useGlobalPipes(new ValidationPipe());

  app.useGlobalGuards(new AuthGuard());

  // app.useGlobalInterceptors(new LoggingInterceptor());
  app.useGlobalInterceptors(new TransformInterceptor());
  // app.useGlobalInterceptors(new ExcludeNullInterceptor());

  await app.listen(3000);
}
bootstrap();
