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
  id?: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  bigportrait: string;

  @Column()
  vignette: string;

  @Column({ type: 'enum', enum: Collection })
  collection: Collection;

  @Column({ nullable: false })
  survivorId: number;

  @ManyToOne(() => Survivor, (survivor) => survivor.skins)
  @JoinColumn({ name: 'survivorId' })
  survivor?: Survivor;
}
