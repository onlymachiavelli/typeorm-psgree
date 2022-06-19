import { Entity, Column, PrimaryColumn } from "typeorm"
@Entity()
export default class User {
  @PrimaryColumn()
  id: String

  @Column()
  fname: String

  @Column()
  age: number
}
