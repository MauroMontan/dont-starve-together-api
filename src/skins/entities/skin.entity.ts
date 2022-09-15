import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Collection } from '../enums/enums';
import { Survivor } from 'src/survivors/entities/entities';

@Entity()
export class Skin {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  bigportrait: string;

  @Column({ type: 'enum', enum: Collection })
  collection: Collection;

  @ManyToOne(() => Survivor, (survivor) => survivor.skins)
  @JoinColumn({ name: 'skin_id' })
  survivor: Survivor;
}
