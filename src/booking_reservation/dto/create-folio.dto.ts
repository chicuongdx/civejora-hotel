import { IsNotEmpty } from 'class-validator';

export class CreateBookingRoomDto {
  @IsNotEmpty()
  roomNumber: number;

  @IsNotEmpty()
  bookingId: number;
}
