import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Tribe } from './tribe.entity';
@Entity()
export class Organization {
  @PrimaryGeneratedColumn({ name: 'id_organization' }) idOrganization: number;
  @Column({
    name: 'name',
    type: 'varchar',
    length: 50,
    nullable: false,
    unique: true,
  })
  name: string;
  @Column({ name: 'status', type: 'int', width: 10 })
  status: number;

  @Column({ name: 'url', type: 'varchar', length: 50, nullable: true })
  url: string;

  @OneToMany(() => Tribe, (tribe) => tribe.organization)
  tribe: Tribe[];
}
