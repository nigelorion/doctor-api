var apiKey = require('./../.env').apiKey;

function Search(issue) {

  this.issue = issue;

}

Search.prototype.searchIssue = function (issue) {

  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=30&user_key=' + apiKey).then(function(response){

    var doctors = response.data;

    doctors.forEach(function(doctor) {

      var name = doctor.profile.first_name + " " + doctor.profile.last_name;
      var img = doctor.profile.image_url;
      var title = doctor.specialties[0].actor;

      $(".main__results").append("<div class='main__results__doctors'>" + "<h1>" + name + "</h1>" + "<img src=" + img + " />" + "<p>" + title + "</p>" + "<div>");

    });

  });

};

exports.searchModule = Search;
