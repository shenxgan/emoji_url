
function copy(){
    url = this.getAttribute("data-url");
    document.getElementById("text").innerHTML = '<input type="text" id="url" value="'+url+'">'
    document.getElementById("url").select()
    document.execCommand("Copy")
    document.getElementById("url").style.display = "none";
}

//Add Event Listeners to Button Click
document.addEventListener("DOMContentLoaded", function () {
    x = document.getElementsByTagName("span");
    i = x.length;
    while(i--) {
        x[i].onclick = copy;
    }
});

