const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const hacController = require("../controllers/hac");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/", ensureAuth, homeController.getIndex);

    router.get("/createAct", ensureAuth, hacController.getCreateAct);

    router.post("/createAct", upload.single("file"), hacController.postCreateAct);

    router.get("/activities", ensureAuth, hacController.getActivities);

    router.get("/bedmob", hacController.getBedMob);

    router.get("/transfer", hacController.getTransfer);

    router.get("/gait", hacController.getGait);

    router.get("/selfcare", hacController.getSelfCare);

    router.get("/dressing", hacController.getDressing);

    router.get("/hygine", hacController.getHygine);

    router.get("/toilet", hacController.getToileting);

    router.get("/med", hacController.getMed);

    router.get("/eat", hacController.getEat);

    router.get("/meals", hacController.getMealPrep);

// router.get("/:hacid", ensureAuth, hacController.getHAC);

// router.get("/myHac/:userid", ensureAuth, hacController.getMyHAC);

    router.get("/previewAct/:actid", hacController.getAct);

// router.put("/editAct/:actid", HACController.editAct); for further refactoring, not MVC

// router.put("editHac/ :hacid", hacController.putHAC);


// router.delete("/deleteAct/:actid", hacController.deleteAct); 

// router.delete("/deleteHac/:hacid", hacController.deleteHAC); 


module.exports = router;
