import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity({ name: "parameters" })
class Parameters {
  @PrimaryColumn()
  id: String;

  @Column()
  value: String;
}

export default Parameters;
