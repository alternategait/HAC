const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const hacController = require("../controllers/hac");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/", ensureAuth, homeController.getIndex);

    router.get("/createAct", ensureAuth, hacController.getCreateAct);

// router.get("/:hacid", ensureAuth, hacController.getHAC);

// router.get("/myHac/:userid", ensureAuth, hacController.getMyHAC);

// router.get("/previewAct/:actid", hacController.getAct);

// router.put("/editAct/:actid", HACController.editAct); for further refactoring, not MVC

// router.put("editHac/ :hacid", hacController.putHAC);

// router.post("/createAct", upload.single("file"), hacController.createAct);

// router.put("/likePost/:id", postsController.likePost);
// router.delete("/deleteAct/:actid", hacController.deleteAct); 

// router.delete("/deleteHac/:hacid", hacController.deleteHAC); 

// router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
