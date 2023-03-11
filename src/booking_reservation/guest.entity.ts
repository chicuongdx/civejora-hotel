import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { FolioReservation } from './folio.entity';

@Entity('guest')
export class Guest {
  @PrimaryGeneratedColumn()
  guest_id: number;

  @Column()
  folionum: number;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column()
  email: string;

  @Column()
  phone_number: string;

  @Column()
  status_num: number;

  @OneToOne(() => FolioReservation, (bookingRoom) => bookingRoom.guest)
  bookingRoom: FolioReservation;
}
