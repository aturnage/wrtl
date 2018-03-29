// Places the navi html into index
$.get("navigation.html", function(data){
    $(".navigationBar").replaceWith(data);
});
// Places the about html into index
$.get("about.html", function(data){
    $(".about").replaceWith(data);
});
// Places the options html into index
$.get("options.html", function(data){
    $(".options").replaceWith(data);
});
