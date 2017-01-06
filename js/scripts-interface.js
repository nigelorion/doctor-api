var apiKey = require('./../.env').apiKey;

$(function() {

  console.log(apiKey);

  $("form").submit(function(){
    $(".main__results").empty();

    event.preventDefault();

    var issue = $("#issue").val();

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=30&user_key=' + apiKey).then(function(response){

      var doctors = response.data;

      console.log(doctors);

      doctors.forEach(function(doctor) {
        var name = doctor.profile.first_name + " " + doctor.profile.last_name;
        var img = doctor.profile.image_url;
        var star = doctor.rating.image_url_large_2x ;
        console.log(star);

        $(".main__results").append("<div class='main__results__doctors'>" + "<h1>" + name + "</h1>" + "<img src=" + img + " />" + "<img src=" + star + " />" + "<div>");


      });


    });

  });

});
