$(document).ready(function() {
    $(".button_wrapper button").click(function() {
        var id = $(this).text();
        var top = $("#" + id).offset().top;
        $("body,html").animate({
            scrollTop: top
        }, 500);
    });
  
   $("#back-to-top").click(function() {
     $("body,html").animate({
       scrollTop: 0
     }, 500);
   });




    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function() {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
      backToTop();
       $(window).on('scroll', function () {
        backToTop();
    });

    }
});
