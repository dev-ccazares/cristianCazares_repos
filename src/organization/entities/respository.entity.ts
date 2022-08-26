import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Metrics } from './metrics.entity';

import { Tribe } from './tribe.entity';

export enum StateTypeEnum {
  ENABLED = 'E',
  DISABLE = 'D',
  ARCHIVE = 'A',
}
export enum StatusTypeEnum {
  ACTIVE = 'A',
  INACTIVE = 'I',
}
@Entity()
export class Repository {
  @PrimaryGeneratedColumn({ name: 'id_repository' }) idRepository: number;
  @Column({ name: 'name', type: 'varchar', length: 50 })
  name: string;
  @Column({
    name: 'state',
    type: 'varchar',
    length: 1,
    default: 'E',
  })
  state: string;

  @Column({
    name: 'status',
    type: 'varchar',
    length: 1,
    default: 'A',
  })
  status: string;

  @Column({ name: 'create_time', type: 'timestamp' })
  createTime: Date;

  @ManyToOne(() => Tribe, (tribe) => tribe.repository)
  @JoinColumn({ name: 'id_tribe' })
  tribe: Tribe;

  @OneToOne(() => Metrics, (metrics) => metrics.repository)
  metrics: Metrics;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
