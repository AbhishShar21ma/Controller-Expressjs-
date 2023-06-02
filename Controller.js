import express from "express";
const app = express();
const port = 3000;

import stu from "./Controlers file/Student.js";

app.use("/S", stu);
app.listen(port, () => {
  console.log(`Your server is running at the port http://localhost:${port}`);
});
