module.exports = function Collection(allActivities){
    this.activities = allActivities.activities || {};

    this.add = function(activity, actid){
        var storedActivity = this.activities[actid];
        if (!storedActivity){
            storedActivity = this.activies[actid] = { activities: activity}}
        }


    this.generateArray = function(){
        var activitiesArr = [];
        for (var actid in this.activities){
            activitiesArr.push(this.activities[actid]);
        }
        return activitiesArr;
    }
};