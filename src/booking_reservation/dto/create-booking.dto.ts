import { IsNotEmpty, IsDate } from 'class-validator';

export class CreateBookingReservationDto {
  @IsNotEmpty()
  @IsDate()
  checkinDate: Date;

  @IsNotEmpty()
  @IsDate()
  checkoutDate: Date;
}
