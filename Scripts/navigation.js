(function($) {
    $(document).ready(function(){
        $(window).scroll(function(){

            if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1)  {

            /** SAFARI **/

            if ($(this).scrollTop() > 320) {
                $('.navigation').css({borderBottom:"5px solid #C2A642"});
            }

            else {
                $('.navigation').css({borderBottom:"none"});
            }

            }

            /** CHROME **/

            else {

            if ($(this).scrollTop() > 320) {
                $('.navigation').css({borderBottom:"5px solid #C2A642"});
            }

            else {
                $('.navigation').css({borderBottom:"none"});
            }

            }

        });
    });
})(jQuery);
