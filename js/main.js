
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    
    
    /*==================================================================
    [ Simple slide100 ]*/

    $('.simpleslide100').each(function(){
        var delay = 7000;
        var speed = 1000;
        var itemSlide = $(this).find('.simpleslide100-item');
        var nowSlide = 0;

        $(itemSlide).hide();
        $(itemSlide[nowSlide]).show();
        nowSlide++;
        if(nowSlide >= itemSlide.length) {nowSlide = 0;}

        setInterval(function(){
            $(itemSlide).fadeOut(speed);
            $(itemSlide[nowSlide]).fadeIn(speed);
            nowSlide++;
            if(nowSlide >= itemSlide.length) {nowSlide = 0;}
        },delay);
    });


    // Email Subscriber
    $(document).ready(function () {
        // Handle form submission
        $('#subscribeForm').submit(function (event) {
            event.preventDefault(); // Prevent default form submission behavior
    
            // Get the email input value
            var email = $('#email').val();
    
            // You can perform some validation here before submitting the form data to the server.
            // For simplicity, we are not doing server-side validation in this example.
    
            // Simulate a successful response from the server (replace this with actual AJAX call)
            var response = {
                success: true,
                message: 'You have successfully subscribed to our newsletter.'
            };
    
            // Show the response message
            showResponse(response);
        });
    
        // Function to show the response message
        function showResponse(response) {
            var responseMsg = $('#responseMsg');
            responseMsg.text(response.message);
    
            // If the subscription was successful, show a success message with green color
            // Otherwise, show an error message with red color
            if (response.success) {
                responseMsg.css('color', 'green');
            } else {
                responseMsg.css('color', 'red');
            }
        }
    });
    


})(jQuery);