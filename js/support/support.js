//<![CDATA[
let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
    toggles[i].addEventListener("click", () => {
        if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].style.transition = "all 1s";
            toggles[i].style.color = "#e4122c";
            icons[i].classList.remove("fa-plus-circle");
            icons[i].classList.add("fa-times-circle");
        } else {
            contentDiv[i].style.height = "0px";
            icons[i].style.transition = "all 1s";
            toggles[i].style.color = "#e4122c";
            icons[i].classList.remove("fa-times-circle");
            icons[i].classList.add("fa-plus-circle");
        }

        for (let j = 0; j < contentDiv.length; j++) {
            if (j !== i) {
                contentDiv[j].style.height = 0;
                icons[j].style.transition = "all 1s";
                toggles[j].style.color = "#e4122c";
                icons[j].classList.remove("fa-times-circle");
                icons[j].classList.add("fa-plus-circle");
            }
        }
    });
}

$(".wrapper")
    .slice(0, 5) // select the first 2
    .show();
if ($(".wrapper:hidden").length != 0) {
    $("#loadMore").show();
}

$("#loadMore").on("click", function(e) {
    e.preventDefault();
    $(".wrapper:hidden")
        .slice(0, 5) // select next hidden 2 & show them
        .slideDown();
    if ($(".wrapper:hidden").length == 0) { // check if any hidden divs still exist
        $("#loadMore").fadeOut("slow");
    }
});
//]]>