const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const hacController = require("../controllers/HAC");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Post Routes - simplified for now
// router.get("/", ensureAuth, homeController.getIndex);
    router.get("/storage/:actid", hacController.getStorage);

    router.get("/createAct", ensureAuth, hacController.getCreateAct);

    router.post("/createAct", upload.single("file"), hacController.postCreateAct);

    router.get("/activities", ensureAuth, hacController.getActivities);

    router.get("/bedmob", hacController.getBedMob);

    router.get("/transfer", hacController.getTransfer);

    router.get("/gait", hacController.getGait);

    router.get("/selfcare", hacController.getSelfCare);

    router.get("/dressing", hacController.getDressing);

    router.get("/hygiene", hacController.gethygiene);

    router.get("/toilet", hacController.getToileting);

    router.get("/med", hacController.getMed);

    router.get("/eat", hacController.getEat);

    router.get("/meals", hacController.getMealPrep);

// router.get("/:hacid", ensureAuth, hacController.getHAC);

// router.get("/myHac/:userid", ensureAuth, hacController.getMyHAC);
    router.get("/collection", hacController.getCollection);

    router.get("/remove/:actid", hacController.getRemove);


    router.get("/previewAct/:actid", hacController.getAct);

    router.get("/save", hacController.getSave);

    router.post("/save", hacController.postSave);

// router.put("/editAct/:actid", HACController.editAct); for further refactoring, not MVC

// router.put("editHac/ :hacid", hacController.putHAC);


// router.delete("/deleteAct/:actid", hacController.deleteAct); 

// router.delete("/deleteHac/:hacid", hacController.deleteHAC); 


module.exports = router;
