
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
