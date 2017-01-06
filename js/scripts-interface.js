var apiKey = require('./../.env').apiKey;

$(function() {

  console.log(apiKey);

  $("form").submit(function(){

    event.preventDefault();

    var issue = $("#issue").val();

    $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + issue + '&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=30&user_key=' + apiKey).then(function(response){
      console.log(response);

    });

  });

});
