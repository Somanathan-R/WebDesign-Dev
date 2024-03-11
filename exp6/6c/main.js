function loadXMLDoc() {

    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE) {
            if (xmlhttp.status == 200) {
                // Once the request is successful
                var xmlDoc = xmlhttp.responseXML;
                var objects = xmlDoc.getElementsByTagName("object");
                var content = "";
                for (var i = 0; i < objects.length; i++) {
                    var type = objects[i].getAttribute("type");
                    var details = objects[i].childNodes;
                    content += "<h3>" + type.charAt(0).toUpperCase() + type.slice(1) + "</h3>";
                    content += "<ul>";
                    for (var j = 0; j < details.length; j++) {
                        if (details[j].nodeType == 1) {
                            content += "<li><strong>" + details[j].nodeName + ":</strong> " + details[j].childNodes[0].nodeValue + "</li>";
                        }
                    }
                    content += "</ul>";
                }
                document.getElementById("content").innerHTML = content;
            } else {
                // If there's an error
                alert('Error: ' + xmlhttp.status);
            }
        }
    };
    // Open and send the request
    xmlhttp.open("GET", "data.xml", true);
    xmlhttp.send();
}