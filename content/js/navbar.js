$(document).ready(function () {
    $(".navbar-left li").on("click", function () {
        $('.navbar-collapse.in').collapse('hide');                              // Hide the menu on click   
        $(".nav li").removeClass("active");                                     // Remove previously active tab
        $(this).addClass("active");                                             // Add Active style to selected tab
    });

    $(".navbar-brand").on("click", function () {
        $(".nav li").removeClass("active");                                     // Remove previously active tab
        $(".navbar-left li:first-child").addClass("active");                    // Clicking on the "website name" will set the first tab as active
    });

    selectActiveTab();
});


window.onscroll = function (e) {  
    //if ($("#avbar-collapse").is(":visible"))
    $('.navbar-collapse.in').collapse('hide');
} 



function filterMatchingHeaders(header){
    var link = location.pathname.slice( 1 );                                    // Get current path name and remove the leading slash
    return header.link.toLowerCase() == link.toLowerCase();                 
}

function selectActiveTab(){
    var matchingHeaders = navbarScope.headers.filter(filterMatchingHeaders)     // Filter the array based on the current location
    if (matchingHeaders.length > 0)
        matchingHeaders[0].class = "active";                                    // Add Active class to the active tab.
}