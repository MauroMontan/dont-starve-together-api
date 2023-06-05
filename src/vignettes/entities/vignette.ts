import { Collection } from 'src/skins/enums/enums';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Vignette {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  name: string;

  @Column()
  asset: string;

  @Column({ type: 'enum', enum: Collection })
  collection: Collection;
}
