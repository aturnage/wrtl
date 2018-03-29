// Places the navi html into index
$.get("navigation.html", function(data){
    $(".navigationBar").replaceWith(data);
});
// Places the about html into index
$.get("about.html", function(data){
    $(".about").replaceWith(data);
});
