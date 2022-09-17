import { Survivor } from 'src/survivors/entities/entities';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ItemCategory } from '../enums/enums';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  asset: string;

  @Column()
  description: string;

  @Column('simple-array')
  category: ItemCategory[];

  @ManyToOne(() => Survivor, (survivor) => survivor.entersTheConstantWith)
  @JoinColumn({ name: 'survivor_id' })
  survivor: Survivor;
}
