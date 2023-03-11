import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ReservationDetail } from './reservation.entity';
import { Guest } from './guest.entity';

@Entity('booking_room')
export class FolioReservation {
  @PrimaryGeneratedColumn()
  folionum: number;

  @Column()
  room_number: number;

  @Column()
  booking_id: number;

  @OneToOne(() => Guest, (guest) => guest.bookingRoom)
  guest: Guest;

  @ManyToOne(() => ReservationDetail, (booking) => booking.bookingRooms)
  booking: ReservationDetail;
}
