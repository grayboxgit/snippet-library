$(document).ready(function() {

    codeToggle.on('click', function(e) {
      e.preventDefault();
      console.log("Figure out why this isn't running");
    });

    var menuToggle = $('#js-mobile-menu').unbind();
    $('#js-navigation-menu').removeClass("show");

    menuToggle.on('click', function(e) {
        e.preventDefault();
        $('#js-navigation-menu').slideToggle(function(){
            if($('#js-navigation-menu').is(':hidden')) {
                $('#js-navigation-menu').removeAttr('style');
            }
        });
    });
});
