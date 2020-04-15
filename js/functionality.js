
// The hook function to call
function hook() {

    // Setup collapses
    setup_collapse();

}

function setup_collapse() {

    // Fetch all collapse buttons
    var collapse_buttons = document.getElementsByClassName("aa-collapse-button");

    // Loop through all the buttons
    for (var i = 0; i < collapse_buttons.length; i++) {
        collapse_buttons[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var content = this.nextElementSibling;
          if (content.style.maxHeight){
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = content.scrollHeight + "px";
          }
        });
    }

}

function clear_and_set(htmlnode, from) {

    // The content node we'll be clearing
    var content_node = document.getElementById(htmlnode);

    // clean it
    content_node.innerHTML = "";

    // Create Http request
    var xmlHttp = new XMLHttpRequest();

    // Set content
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            content_node.innerHTML = xmlHttp.responseText;
        } else{
            content_node.innerHTML = "Unable to load file.";
        }
    };

    // Execute
    xmlHttp.open("GET", from, true); // true for asynchronous
    xmlHttp.send(null);

}
