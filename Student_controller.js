const del = (req, res) => {
  res.send("This is first hello world program");
};

const delstu = (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id == 10) {
    res.send("This is the new student in our list");
  }
  res.send("Already existing student in ourlist");
};

export { del, delstu };
