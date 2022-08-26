import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Organization } from './organization.entity';
import { Repository } from './respository.entity';

@Entity()
export class Tribe {
  @PrimaryGeneratedColumn({ name: 'id_tribe' }) idTribe: number;
  @Column({ name: 'name', type: 'varchar', length: 50, nullable: false })
  name: string;
  @Column({ name: 'status', type: 'int', width: 10 })
  status: number;
  @ManyToOne(() => Organization, (organization) => organization.tribe)
  @JoinColumn({ name: 'id_organization' })
  organization: Organization;
  @OneToMany(() => Repository, (repository) => repository.tribe)
  repository: Repository[];

  @CreateDateColumn() created_at: Date;
  @UpdateDateColumn() updated_at: Date;
}
