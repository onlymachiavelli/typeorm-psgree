import express from "express"

import { DataSource, Entity, PrimaryColumn, Column } from "typeorm"

const app = express()

//classes

@Entity()
export class User {
  @PrimaryColumn()
  id: String

  @Column()
  fname: String

  @Column()
  age: number
}
const appDataSrouce = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 42069,
  username: "postgres",
  password: "root",
  database: "helloworld",
})

appDataSrouce
  .initialize()
  .then(() => {
    console.log("DataSource initialized and listening on port 42069")

    //doing my own shits
  })
  .catch((e) => {
    console.log(e)
  })

app.get("/", (req, res) => {
  res.send("Hello World")
})

app.listen(3000, () => {
  console.log("Server is running on port 3000")
})
