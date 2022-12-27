// document.getElementById("myBtn").addEventListener("click", displayDate);
document.getElementById("saveMe").addEventListener("click", saveItem);

// to check browser support though may be redundant
function checkBrowser(){
    if ('sessionStorage' in window && window ['sessionStorage'] !== null){
        return true;
    } else { return false;}
}

function doShowAll(){
    if (checkBrowser()){
    //     let key = "";
    //     let list = "<tr><th>Item</th><th>Value</th></tr>\n";
    //     var i = 0;
    //     for (i = 0; i<= sessionStorage.length-1; i++){
    //         key = sessionStorage.key(i);
    //         list += "<tr><td>" + key + "</td>\n<td>"
    //             + sessionStorage.getItem(key) + "</td></tr>\n";
    //     }
    //     //If no item exists in the cart.
    //     if (list == "<tr><th>Item</th><th>Value</th></tr>\n") {
    //         list += "<tr><td><i>empty</i></td>\n<td><i>empty</i></td></tr>\n";
    //     }        //Bind the data to HTML table.
    //     //You can use jQuery, too.
    //     document.getElementById('list').innerHTML = list;
            console.log("success");
    } else{
        alert("Cannot save activity to collection as your browser does not support HTML 5 and session storage")
    }
}

function saveItem() {
    var key = document.forms.activity.name.value;
    var value = document.forms.activity.data.value;
    sessionStorage.setItem(key, value);

}

function RemoveItem()
{
var name=document.forms.shoppingList.name.value;
document.forms.shoppingList.data.value=sessionStorage.removeItem(name);
doShowAll();
}

function ClearAll() {
    sessionStorage.clear();
    doShowAll();
}
