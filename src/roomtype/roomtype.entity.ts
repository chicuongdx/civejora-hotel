import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('roomtype')
export class RoomType {
  @PrimaryGeneratedColumn()
  roomtype_id: number;

  @Column({ type: 'varchar', length: 50 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column()
  capacity: number;

  @Column({ type: 'numeric', precision: 10, scale: 2 })
  price: number;
}
