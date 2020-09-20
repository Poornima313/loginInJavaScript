function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// jQuery("button").click(function () {
//   jQuery(this)
//     .parents("tr")
//     .closest("tbody")
//     .next(".section")
//     .toggle("slow")
//     .addClass("lightblue");

//   // jQuery("tbody").addClass("lightblue");
// });

// jQuery("table").on("click", "tr.parent .fa-chevron-down", function () {
//   jQuery(this).closet("tbody").toggleClass("open");
// });

$("table").on("click", "tr.parent .fa-chevron-down", function () {
  $(this).closest("tbody").toggleClass("open");
});
