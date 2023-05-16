console.log("Your index.js file is loaded correctly!")

$("#myID").on("click", function () {
    console.log("you clicked on #myID");
});

function contact() {
    document.getElementById("contact").scrollIntoView();
    $("#hiddenfooter").css("display", "block");
}
function projects() {
    document.getElementById("projectspage").scrollIntoView();
    $("#projectspage").css("display", "block");
 }
function about() {
    document.getElementById("aboutpage").scrollIntoView();
    $("#aboutpage").css("display", "block");
}

  $("#hiddenfooter").hover(function(){
  },
  function(){
    $("#hiddenfooter").css("display", "none");
  });
  $(".footer").click(function(){
    $("#hiddenfooter").css("display", "block");
  });

  $("#hamburgericon").click(function(){
    $("#navlinks").css("display", "block");
    $("#closeicon").css("display", "block");
    $("#hamburgericon").css("display", "none");
  });
  $("#closeicon").click(function(){
    $("#navlinks").css("display", "none");
    $("#closeicon").css("display", "none");
    $("#hamburgericon").css("display", "block");
  });
  