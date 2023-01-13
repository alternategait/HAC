module.exports = function Collection(allActivities){
    this.activities = allActivities.activities || {};

    this.add = function(activity){
        // var storedActivity = this.activities[activity._id];
        console.dir(this.activities)
        if ( !(activity._id in this.activities) ){
            this.activities[activity._id] =  activity
                }
        console.log(activity._id)
        }


    this.generateArray = function(){
        var activitiesArr = [];
        for (var actid in this.activities){
            activitiesArr.push(this.activities[actid]);
        }
        return activitiesArr;
    }
};