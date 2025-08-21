$(document).ready(function() { 

    $(document).on("click", ".cb__cart_button", function() {        
        $('.cb__content').toggleClass('cart');
        $(this).toggleClass('active');
    }); 

    $(document).on("click", ".search_close", function() { 
        $(this).next('.search_results').slideToggle('fast');
        $(this).toggleClass('open');
    }); 
    
    
});