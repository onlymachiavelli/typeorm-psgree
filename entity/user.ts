import { Entity, Column, PrimaryColumn } from "typeorm"
@Entity()
export default class test {
  @PrimaryColumn()
  id: String

  @Column()
  fname: String

  @Column()
  age: number
}
