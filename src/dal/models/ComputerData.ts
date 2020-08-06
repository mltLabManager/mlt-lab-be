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
} from "typeorm";
import moment from "moment";
import { isNull } from "util";
import ComputerHistory from "./ComputerHistory";

@Entity({ name: "computerData" })
class ComputerData {
  @PrimaryGeneratedColumn()
  id: Number;

  @OneToMany(
    (): ObjectType<ComputerHistory> => ComputerHistory,
    ({ computerDataId }): ComputerData => computerDataId,
    { onDelete: "CASCADE", cascade: true, nullable: true }
  )
  compuetrHistorys: ComputerHistory[];

  @Column()
  oldId: Number;

  @Column({ nullable: true })
  currentLocation: Number;

  @Column({ nullable: true })
  currentStatus: Number;

  @Column({ nullable: true })
  provider: String;

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
  deliveryDate: Date;

  @Column({ nullable: true })
  cpu: Number;

  @Column({ nullable: true })
  ram: Number;

  @Column({ nullable: true })
  sdd: Number;

  @Column({ default: false })
  isImageInstalled: Boolean;

  @BeforeUpdate()
  updateTime() {
    this.lastUpdateDate = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  }

  // @ManyToOne((type) => CountDoc, (countDoc) => countDoc.countDocLines, {
  //   onDelete: "CASCADE",
  // })
  // @JoinColumn([{ referencedColumnName: "id" }])
  // countDoc: CountDoc;

  // @OneToMany(
  //   (): ObjectType<IdentifierLine> => IdentifierLine,
  //   ({ countDocLine }): CountDocLine => countDocLine,
  //   { onDelete: "CASCADE", cascade: true, nullable: true }
  // )
  // identifierLines: IdentifierLine[];

  // @Column({ nullable: true })
  // itemName: String;

  // @Column()
  // materialNumber: String;

  // @Column({ nullable: true })
  // amount: Number;

  // @Column({ nullable: true })
  // batchNumber: Number;

  // @Column({ nullable: true, default: true })
  // isUnlock: Boolean;

  // @Column({ nullable: true })
  // lastUpdateInDB?: Date;

  // @BeforeUpdate()
  // updateTime() {
  //   this.lastUpdateInDB = new Date(moment().format("YYYY-MM-DD HH:mm:ss"));
  // }

  // @AfterUpdate()
  // async closeCountDoc() {
  //   // Get the count doc of the current line
  //   const countDoc = (
  //     await getConnection()
  //       .getRepository(CountDocLine)
  //       .findOne({ relations: ["countDoc"], where: { id: this.id } })
  //   )?.countDoc;

  //   // Check if we need to close the count doc
  //   let isDone = false;
  //   if (!isNull(this.amount) && this.isUnlock) {
  //     isDone =
  //       (await getConnection()
  //         .getRepository(CountDocLine)
  //         .createQueryBuilder("countDocLine")
  //         .where('"countDocId" = :countDocId AND id != :id', {
  //           countDocId: countDoc?.id,
  //           id: this.id,
  //         })
  //         .andWhere('"amount" IS NULL OR "isUnlock" != true')
  //         .getCount()) === 0;
  //   }

  //   // Close the count doc if needed
  //   if (isDone) {
  //     const countDocRepo = await getConnection().getRepository(CountDoc);
  //     let currentCountDoc = await countDocRepo.findOne({
  //       id: countDoc?.id,
  //     });
  //     if (currentCountDoc) {
  //       currentCountDoc.isOpen = false;
  //       countDocRepo.save(currentCountDoc);
  //     }
  //   }
  // }
}

export default ComputerData;
