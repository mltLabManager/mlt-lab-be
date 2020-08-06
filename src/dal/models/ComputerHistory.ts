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
  from: Number;

  @Column({ nullable: true })
  to: Number;

  @ManyToOne(
    (): ObjectType<ComputerData> => ComputerData,
    ({ compuetrHistorys }): ComputerHistory[] => compuetrHistorys,
    {
      onDelete: "CASCADE",
    }
  )
  @JoinColumn([{ referencedColumnName: "id" }])
  computerDataId: ComputerData;

  // @ManyToOne(
  //   (): ObjectType<ComputerData> => ComputerData,
  //   ({ identifierLines }): IdentifierLine[] => identifierLines,
  //   { onDelete: "CASCADE" }
  // )
  // @JoinColumn([{ referencedColumnName: "id" }])
  // countDocLine: CountDocLine;

  // @BeforeUpdate()
  // updateTime() {
  //   this.lastChangedAt = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  // }

  // @ManyToOne(
  //   () => StorageLocation,
  //   (storageLocation) => storageLocation.countDocs,
  //   {
  //     onDelete: "CASCADE",
  //   }
  // )
  // @JoinColumn([
  //   {
  //     referencedColumnName: "name",
  //   },
  // ])
  // storageLocation: StorageLocation;

  // @OneToMany((type) => CountDocLine, (countDocLine) => countDocLine.countDoc)
  // countDocLines: CountDocLine[];

  // @Column({ nullable: true })
  // countStartTime: Date;

  // @Column({ default: true })
  // isOpen: Boolean;

  // @ManyToOne(
  //   (type) => Quartermaster,
  //   (quartermaster) => quartermaster.quartermasterId,
  //   { nullable: true }
  // )
  // @JoinColumn([{ referencedColumnName: "quartermasterId" }])
  // lastQuartermasterUpdateId: String;

  // @Column({ nullable: true })
  // lastUpdate?: Date;

  // @BeforeUpdate()
  // updateTime() {
  //   if (isNull(this.lastUpdate)) {
  //     this.countStartTime = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  //   }
  //   this.lastUpdate = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  // }
}

export default ComputerHistory;
