import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";

import Parameters from './Parameters';

@Entity({ name: "systemData" })
class SystemData {

  @PrimaryGeneratedColumn()
  private id: String;

  @ManyToOne(() => Parameters, { primary: true })
  @JoinColumn([{ name: "key", referencedColumnName: "id" }])
  key: Parameters;

  @Column()
  value: String;
}

export default SystemData;
