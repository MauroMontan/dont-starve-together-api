import { Survivor } from './survivor.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
  Column,
} from 'typeorm';

@Entity()
export class Perks {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  perk: string;

  @ManyToOne(() => Survivor, (survivor) => survivor.perks)
  @JoinColumn({ name: 'survivor_id' })
  survivor: Survivor;
}
