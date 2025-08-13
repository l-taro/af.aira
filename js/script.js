$(document).ready(function() {  

    $(document).on("click", ".tab-item", function() {
        $('body').removeAttr('class');
        var cl = $(this).attr('data-class');
        $('body').addClass(cl);
        $('.tab-item').toggleClass('active');
    }); 

    $(document).on("click", ".cb__cart_button", function() {        
        $('.cb__content').toggleClass('cart');
        $(this).toggleClass('active');
    }); 
});