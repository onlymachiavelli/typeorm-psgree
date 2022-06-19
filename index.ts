import express from "express"

import { DataSource, Entity, PrimaryColumn, Column } from "typeorm"

import  User  from "./entity/user"
const app = express()

const appDataSrouce = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 42069,
  username: "postgres",
  password: "root",
  database: "helloworld",
  entities: [__dirname + "/entity/*.js"],
})

appDataSrouce
  .initialize()
  .then(async () => {
    console.log("DataSource initialized and listening on port 42069")

    //doing my own shits
    const user = new User()
    user.id = "01"
    user.fname = "Alaa Barka"
    user.age = 30
    await appDataSrouce.manager
      .save(user)
      .then(() => {
        console.log("user saved")
      })
      .catch((err: any) => {
        console.log(err)
      })
      .finally(() => {
        //
      })
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
