import express from "express";

const postRouter = express.Router();

postRouter.get("/posts", (req, res) => {
  console.log(req.query);
  res.send("Get all posts");
});

postRouter.post("/posts", (req, res) => {
  res.send(
    `${req.body.firstname} ${req.body.lastname} ${req.body.email} ${req.body.birthday} ${req.body.password} ${req.body.position} ${req.body.address}`
  );
});

postRouter.put("/posts", (req, res) => {
  res.send("Update a post");
});

postRouter.delete("/posts", (req, res) => {
  res.send("Delete a post");
});

export { postRouter };
