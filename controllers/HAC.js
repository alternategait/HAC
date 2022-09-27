const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const User = require("../models/User");
const Activity = require("../models/Activity");
module.exports = {
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

    getPost: async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        res.render("post.ejs", { post: post, user: req.user });
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

    likePost: async (req, res) => {
        try {
        await Post.findOneAndUpdate(
            { _id: req.params.id },
            {
            $inc: { likes: 1 },
            }
        );
        console.log("Likes +1");
        res.redirect(`/post/${req.params.id}`);
        } catch (err) {
        console.log(err);
        }
    },

    deletePost: async (req, res) => {
        try {
        // Find post by id
        let post = await Post.findById({ _id: req.params.id });
        // Delete image from cloudinary
        await cloudinary.uploader.destroy(post.cloudinaryId);
        // Delete post from db
        await Post.remove({ _id: req.params.id });
        console.log("Deleted Post");
        res.redirect("/profile");
        } catch (err) {
        res.redirect("/profile");
        }
    },
};
