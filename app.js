// function openNav() {
//     document.getElementById("mySidebar").style.width = "250px";
//     document.getElementById("main").style.marginLeft = "250px";
//   }
  
//   function closeNav() {
//     document.getElementById("mySidebar").style.width = "0";
//     document.getElementById("main").style.marginLeft= "0";
//   }

$(document).ready(function(){
  $(".get-custom").click(function(){
    $(".custom-cls").slidToggle();
  });
  // $(".btn2").click(function(){
  //   $("p").slideDown();
  // });
});