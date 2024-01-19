const router = require("express").Router();

const salamControllers = require("./../controllers/productControllers");

router.get("/salam", salamControllers.getAllsalam);
router.get("/salam/:id", salamControllers.getsalamid);
router.delete("/salam/:id", salamControllers.deletesalam);
router.post("/salam", salamControllers.postsalam);

module.exports = router;
