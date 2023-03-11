import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FolioReservation } from './folio.entity';

@Entity('booking_reservation')
export class ReservationDetail {
  @PrimaryGeneratedColumn()
  booking_id: number;

  @Column()
  checkin_date: Date;

  @Column()
  checkout_date: Date;

  @OneToMany(() => FolioReservation, (bookingRoom) => bookingRoom.booking)
  bookingRooms: FolioReservation[];
}
