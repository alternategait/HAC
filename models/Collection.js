class Collection {
    constructor(allActivities) {
        this.activities = allActivities?.activities || {};
    }

    add(activity) {
        console.dir(this.activities);
        if (!(activity._id in this.activities)) {
        this.activities[activity._id] = activity;
        }
        console.log(activity._id);
    }
    generateArray() {
        const activitiesArr = [];
        for (const actid in this.activities) {
        activitiesArr.push(this.activities[actid]);
        }
        console.log(activitiesArr)
        return activitiesArr;
    }
    remove(actid) {
        if (actid in this.activities) {
            delete this.activities[actid];
        }
    }
    
}

module.exports = Collection;