module.exports = function Collection(initActivity){
    this.activity = initActivity;
    this.totalQty = 0

    this.add =function(activity, id){
        var storedActivity = this.activity[id];
        if (!storedActivity){
            storedActivity = this.activity[id] = 
        }
    }
};