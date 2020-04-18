//!HEre the code is written with both simple vanilla js and wiht jQuery

//! *********************using vanilla js***************
//?uncomment the below lines to get this working

// var lis = document.querySelectorAll("li");
// for (let i = 0; i < lis.length; i++) {
//   lis[i].addEventListener("click", function () {
//     if (this.style.color === "gray") {
//       this.style.color = "black";
//       this.style.textDecoration = "none";
//     } else {
//       this.style.color = "gray";
//       this.style.textDecoration = "line-through";
//     }
//   });
// }

//?------------simple way using class--------
// var lis = document.querySelectorAll("li");
// for (let i = 0; i < lis.length; i++) {
//   lis[i].addEventListener("click", function () {
//     this.classList.toggle("completed");
//   });
// }

//* Deleting by clicking on x
//TODO:
// var span = document.querySelectorAll("span");
// for (var i = 0; i < span.length; i++) {
//   span[i].addEventListener("click", function (event) {
//     event.stopPropagation();
//   });
// }

//! **********************---------------******************
//! ****************jquery******************

//using jquery
//adding the line thorugh effect and colour changing effect
// $("li").click(function () {
//  if its gray
//   if ($(this).css("color") === "rgb(128, 128, 128)") {
//     $(this).css({
//       color: "black",
//       textDecoration: "none",
//     });
//   } else {
//     $(this).css({
//       color: "gray",
//       textDecoration: "line-through",
//     });
//   }
// });

//-------------------SImple way----------------
//?anotherSimple way using css
//l is definately there so we use this and not li directoly
$("ul").on("click", "li", function () {
  $(this).toggleClass("completed");
});

//* Click on x to delete todo

$("ul").on("click", "span", function (event) {
  $(this)
    .parent()
    .fadeOut(500, function () {
      $(this).remove();
    });
  event.stopPropagation();
});

//! here event.stopPropagation means it will stop then and there and will not reach to its parent element , for now its div, body , and the li iself in which we are applying the different jquery methos
//Same is for vanilla js

//* Taking the input
$("input[type='text']").keypress(function (event) {
  if (event.which === 13) {
    //grab a new input
    let todotext = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    todotext =
      '<li><span><i class="fa fa-trash"></i></span> ' + todotext + "</li>";
    $("ul").append(todotext);
  }
});

$("#toggle-form").click(function () {
  $("input[type='text']").fadeToggle();
});
