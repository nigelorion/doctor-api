var Search = require('./../js/scripts.js').searchModule;

$(function() {

  $("form").submit(function(){
    $(".main__results").empty();

    event.preventDefault();

    var issue = $("#issue").val();

    var search = new Search();

    search.searchIssue(issue);

    // results.forEach(function(doctor){
    //   $(".main__results").append(doctor);
    //
    // });

  });

});
