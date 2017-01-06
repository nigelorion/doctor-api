var apiKey = require('./../.env').apiKey;

function Search(issue) {
  this.issue = issue;
}

Search.prototype.searchIssue = function (issue) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=30&user_key=' + apiKey).then(function(response){

    var doctors = response.data;

    console.log(response);

    doctors.forEach(function(doctor) {

      var name = doctor.profile.first_name + " " + doctor.profile.last_name;

      var img = doctor.profile.image_url;

      var specialties = doctor.specialties;

      console.log(specialties);

      specialties.forEach(function(titles){
        var title = titles.actor;

      });


      $(".main__results").append("<div class='main__results__doctors'>" + "<h1>" + name + "</h1>" + "<img src=" + img + " />" + "<div>");

    });

  });

};

exports.searchModule = Search;
