$('#submit-btn').click(function() {
    // Prevent form submission.
    event.preventDefault();

    // Get user input.
    var city = $('#city-type').val();

    // Get rid of any extra spaces.
    city = $.trim(city);

    // Validate user input both input and city name converted to lower case.
    if (city.toLowerCase() == "NYC".toLowerCase() || 
        city.toLowerCase() == "New York".toLowerCase() || 
        city.toLowerCase() == "New York City".toLowerCase())
    {
        // Change background image to match the city.
        // New York image below.
        $('body').css('background-image','url(images/nyc.jpg');
    }
    else if (city.toLowerCase() == "SF".toLowerCase() || 
    city.toLowerCase() == "San Francisco".toLowerCase() || 
    city.toLowerCase() == "Bay Area".toLowerCase())
    {   
        // Change background image to match the city.
        // San Francisco image below
        $('body').css('background-image','url(images/sf.jpg');
    }
    else if (city.toLowerCase() == "LA".toLowerCase() || 
    city.toLowerCase() == "Los Angeles".toLowerCase() || 
    city.toLowerCase() == "LAX".toLowerCase())
    {
        // Change background image to match the city.
        // Los Angeles image below
        $('body').css('background-image','url(images/la.jpg');  
    }
    else if (city.toLowerCase() == "ATX".toLowerCase() ||  
    city.toLowerCase() == "AUSTIN".toLowerCase())
    {   // Change background image to match the city.
        // Austin image below
        $('body').css('background-image','url(images/austin.jpg'); 
    }
    else if (city.toLowerCase() == "SYD".toLowerCase() ||  
    city.toLowerCase() == "Sydney".toLowerCase())
    {   // Change background image to match the city.
        // Sydney image below
        $('body').css('background-image','url(images/sydney.jpg'); 
    }

});
//     // Reset user input field.
$("#city-type").click(function() {
    $(this).closest('#city-type').find("input[type=text], textarea").val("");
});