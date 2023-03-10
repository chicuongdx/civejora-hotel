import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('room')
export class Room {
  @PrimaryColumn({ type: 'int' })
  room_number: number;

  @Column({ type: 'int' })
  floor: number;

  @Column({ type: 'int' })
  roomtype_id: number;

  @Column({ default: true })
  available: boolean;

  @Column()
  inspected: boolean;
}
