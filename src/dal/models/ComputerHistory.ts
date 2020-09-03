import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  Column,
  ObjectType,
  OneToMany,
  BeforeUpdate,
  getConnection,
} from "typeorm";
import moment from "moment";
import { isNull } from "util";
import ComputerData from "./ComputerData";

@Entity({ name: "computerHistory" })
class ComputerHistory {
  @PrimaryGeneratedColumn()
  id: Number;

  // @Column()
  // computerId: Number;

  @Column({ nullable: true })
  changedBy: String;

  @Column({ nullable: true })
  lastChangedAt: Date;

  @Column({ nullable: true })
  key: Number;

  @Column({ nullable: true })
  from: Number;

  @Column({ nullable: true })
  to: Number;

  @ManyToOne(() => ComputerData, (data) => data.computerHistory, {
    onDelete: "CASCADE",
    primary: true,
    nullable: true,
  })
  @JoinColumn([{ name: "computer_data_id", referencedColumnName: "id" }])
  computerDataId: ComputerData;
}

export default ComputerHistory;
