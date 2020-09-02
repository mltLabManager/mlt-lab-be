import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
  ObjectType,
  BeforeUpdate,
  AfterUpdate,
  getConnection,
  PrimaryColumn,
} from "typeorm";
import moment from "moment";
import { isNull } from "util";
import ComputerHistory from "./ComputerHistory";

@Entity({ name: "computerData" })
class ComputerData {
  @PrimaryColumn()
  id: string;

  @OneToMany((): ObjectType<ComputerHistory> => ComputerHistory, ({ computerDataId }): ComputerData => computerDataId, {
    onDelete: "CASCADE",
    cascade: true,
    nullable: true,
  })
  computerHistory: ComputerHistory[];

  @Column({ nullable: true })
  currentLocation: Number;

  @Column({ nullable: true })
  currentStatus: Number;

  @Column({ nullable: true })
  provider: Number;

  @Column({ nullable: true })
  donatedBy: String;

  @Column({ nullable: true })
  destination: String;

  @Column({ nullable: true })
  computerType: Number;

  @Column({ nullable: true })
  computerModel: String;

  @Column({ default: new Date(moment().format("YYYY-MM-DD HH:mm:ss")) })
  lastUpdateDate: Date;

  @Column({ default: new Date(moment().format("YYYY-MM-DD HH:mm:ss")) })
  entryDate: Date;

  @Column({ nullable: true })
  deliveryId: String;

  @Column({ nullable: true })
  deliveryDate: Date;

  @Column({ nullable: true })
  cpu: Number;

  @Column({ nullable: true })
  ram: Number;

  @Column({ nullable: true })
  sdd: Number;

  @Column({ default: false })
  isImageInstalled: Boolean;

  @Column({ nullable: true })
  screenSize: Number;

  @BeforeUpdate()
  updateTime() {
    this.lastUpdateDate = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  }
}

export default ComputerData;
