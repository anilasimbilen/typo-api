
var express = require("express");
var router = express.Router();

var users = [];

router.get("/", function(req, res, next) {
  res.send(
    users
      .slice(0, 10)
  );
});

router.post("/score", function(req, res, next) {
  const { score, userName, text} = req.body;
  users.push({ score: Number(score), userName, text});
  users = users
  .sort((user1, user2) => {
    if (user1.score < user2.score) {
      return 1;
    }
    if (user1.score > user2.score) {
      return -1;
    }
    return 0;
  });
  res.send({ success: true });
});

module.exports = router;