import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: "systemData" })
class SystemData {
  @PrimaryGeneratedColumn()
  id: String;

  @Column()
  key: String;

  @Column()
  value: String;
}

export default SystemData;
