document.addEventListener("DOMContentLoaded", function(){
    this.getElementById("refreshButton").addEventListener("click", function(){
        var xhttp = new XMLHttpRequest();
	xhttp.onload = function () {
            connectionData = this.responseText;
	}
	xhttp.open("GET", "/data", true);
	xhttp.send();
    });
});
