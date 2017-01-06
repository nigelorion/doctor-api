var apiKey = require('./../.env').apiKey;

$(function() {

  console.log(apiKey);

  $("form").submit(function(){
    $(".main__results").empty();

    event.preventDefault();

    var issue = $("#issue").val();

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=30&user_key=' + apiKey).then(function(response){

      var doctors = response.data;

      console.log(doctors);

      doctors.forEach(function(doctor) {
        var name = doctor.profile.first_name + " " + doctor.profile.last_name;
        var img = doctor.profile.image_url;
        console.log(name);

        $(".main__results").append("<div class='main__results__doctors'>" + "<h1>" + name + "</h1>" + "<img src=" + img + " />" + "<div>");


      });


    });

  });

});
