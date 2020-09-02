import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, PrimaryColumn } from "typeorm";

import Parameters from "./Parameters";

@Entity({ name: "systemData" })
class SystemData {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => Parameters, { primary: true })
  @JoinColumn([{ name: "key", referencedColumnName: "id" }])
  key: Parameters;

  @Column()
  value: String;
}

export default SystemData;
