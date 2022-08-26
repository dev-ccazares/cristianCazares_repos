import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
} from 'typeorm';
import { Repository } from './respository.entity';

@Entity()
export class Metrics {
  @PrimaryGeneratedColumn({ name: 'id_repository' }) idRepository: number;
  @Column({ name: 'coverage', type: 'float8' })
  coverage: string;
  @Column({ name: 'bugs', type: 'int', width: 20 })
  bugs: number;
  @Column({ name: 'vulnerabilities', type: 'int', width: 20 })
  vulnerabilities: number;
  @Column({ name: 'hotspots', type: 'int', width: 20 })
  hotspots: number;
  @Column({ name: 'code_smells', type: 'int', width: 20 })
  codeSmells: number;
  @Column({ name: 'create_time', type: 'timestamp' })
  createTime: Date;
  @OneToOne(() => Repository, (repository) => repository.metrics)
  @JoinColumn({ name: 'id_repository' })
  repository: Repository;

  @CreateDateColumn() created_at: Date;
  @UpdateDateColumn() updated_at: Date;
}
