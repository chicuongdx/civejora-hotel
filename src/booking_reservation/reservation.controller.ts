import { Body, Controller, Post } from '@nestjs/common';
import { object } from 'joi';
@Controller('newbooking')
export class ReservationDeitalsController {
  @Post()
  async createReservationDetails(@Body() object): Promise<any> {
    return null;
  }
}
