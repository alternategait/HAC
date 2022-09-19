const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const HACController = require("../controllers/HAC");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
router.get("/:hacid", ensureAuth, HACController.getHAC);

router.get("/myHac/:userid", ensureAuth, HACController.getMyHAC);

router.get("/previewAct/:actid", HACController.getAct);

router.put("/editAct/:actid", HACController.editAct);

router.put("editHac/ :hacid", HACController.putHAC);

router.post("/createAct", upload.single("file"), HACController.createAct);

// router.put("/likePost/:id", postsController.likePost);
router.delete("/deleteAct/:actid", HACController.deleteAct); 

router.delete("/deleteHac/:hacid", HACController.deleteHAC); 

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
