$(document).ready(function($){
  // Highlight the top nav as scrolling occurs
  $('body').scrollspy({
    target: '.navbar-fixed-top',
    offset: 51
  });

  $(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).position().top -45
        }, 1000, function(){
   
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash-45;
        });
      } // End if
    });
  });


  // Validates the contact form and submits it using Formspree.
  $.validator.setDefaults({
    highlight: function(element) {
        $(element).closest('.form-group').addClass('has-error');
    },
    unhighlight: function(element) {
        $(element).closest('.form-group').removeClass('has-error');
    },
    errorElement: 'span',
    errorClass: 'help-block',
    errorPlacement: function(error, element) {
        if(element.parent('.input-group').length) {
            error.insertAfter(element.parent());
        } else {
            error.insertAfter(element);
        }
    }
  });

  $("#contactForm").validate({
    submitHandler: function(form) {
      $.ajax({
        url: "//formspree.io/ramarit@gmail.com", 
        method: "POST",
        data: {
          name: $(form).find("input[name='name']").val(),
          _replyto: $(form).find("input[name='_replyto']").val(),
          message: $(form).find("textarea[name='message']").val()
        },
        dataType: "json",
        success: function() {
          $("#submit-success").fadeIn();
          $("#contactForm").fadeOut();
        },
        error: function() {
          $("#submit-errors").fadeIn();        
        }
      });
    }
  });

});



