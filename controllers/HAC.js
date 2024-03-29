const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User");
const Activity = require("../models/Activity");
const Collection = require("../models/Collection");
const { image } = require("../middleware/cloudinary");
const session = require("express-session");
module.exports = {

    // getAct: async (req, res) => {
    // try {
    //     const activity = await Activity.findById(req.params.actid);
    //     res.render("post.ejs", { activity: activity,});
    // } catch (err) {
    //     console.log(err);
    // }

    getStorage: async (req, res) => {
        try{
            const actid = req.params.actid;
            const collection = new Collection(req.session.collection || {});
            await Activity.findById(actid, function (err, activity){
                if(err){console.log(err)}
                collection.add(activity);
            })
            req.session.collection = collection;
            console.log(collection);
            res.redirect("/hac/collection");
        }catch(err){
            console.log(err)}

        },

    getCollection: async (req, res) => {
        try{
            const collection = new Collection(req.session.collection|| {});
            let actArray = collection.generateArray();
            res.render("collection.ejs", { activities: actArray })
        }catch(err){
            console.log(err);
        }
    },

    getRemove: async(req, res) =>{
        try{
            const actid = req.params.actid;
            const collection = new Collection(req.session.collection || {});
            collection.remove(actid)
            res.redirect("/hac/collection");
        }catch(err){
            console.error(err);
            res.status(500).send("Internal Server Error");
        }
    },

    getProfile: async (req, res) => {
        try {
        const posts = await User.find({ user: req.user.id });
        res.render("profile.ejs");
        ({user: req.user });
    } catch (err) {
        console.log(err);
    }
    },

    getHAC: async (req, res)=>{
        try{
            const hac = await HAC.find({ hac: req.hac.hacid})
            res.render("HAC.ejs")
        }catch (err) {
        console.log(err);
        }
    },

    getMyHAC: async (req, res)=>{
        try{
            const user = await User.find({ user: req.user.userid})
            res.render("collection.ejs")
        }catch (err) {
        console.log(err);
        }
    },

    getCreateAct: (req, res) =>{
        res.render("createAct.ejs");
    },

    getActivities: async (req, res) => {
        try {
        const activities = await Activity.find().lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },


    getBedMob: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "bed" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },


    getGait: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "gait" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    getTransfer: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "transfer" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    getSelfCare: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "selfCare" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    getDressing: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "dressing" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    gethygiene: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "hygiene" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    getToileting: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "toilet" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    getMed: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "medManage" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    getEat: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "eat" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },

    getMealPrep: async (req, res) => {
        try {
        const activities = await Activity.find({ actType: { $in: [ "mealPrep" ] } } ).lean();
        res.render("activities.ejs", { activities: activities });
    } catch (err) {
        console.log(err);
    }
    },



    getAct: async (req, res) => {
    try {
        const activity = await Activity.findById(req.params.actid);
        res.render("post.ejs", { activity: activity,});
    } catch (err) {
        console.log(err);
    }
    },
    postCreateAct: async (req, res) => {
        try {
      // Upload image to cloudinary
            // const result = await cloudinary.uploader.upload(req.file.path);

        await Activity.create({
            activityName: req.body.activityName,
            image: " ",
            cloudinaryId: " ",
            actDescription: req.body.actDescription,
            updateActDescription: " ",
            assistanceLevel: req.body.assistanceLevel,
            actType: req.body.actType,
            patientType: req.body.patientType,
            original: true,
        });
        console.log("Post has been added!");
        res.redirect("./createAct");
        } catch (err) {
            console.log(err);
    }
    },

};
