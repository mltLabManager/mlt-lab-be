import { Entity, PrimaryColumn, Column, OneToMany } from "typeorm";
import SystemData from "./SystemData";

@Entity({ name: "parameters" })
class Parameters {
  @PrimaryColumn({ name: "pram_id" })
  id: String;

  @Column()
  value: String;

  @OneToMany(() => SystemData, (systemData) => systemData.key)
  systemData: SystemData[];
}

export default Parameters;
