//business logic

function Movie(name,time,age){
  this.name=name;
  this.time=time;
  this.age=age;
}


  Movie.prototype.Ticket=function(time){
    var price;

    if(time="afternoon"){
      price=21;
    }else if(time="morning"){
      price=15;
    }else{
      price=25;
    }

    return  price;

}

$(document).ready(function(){
$("#movie-ticket").submit(function(event) {
  event.preventDefault();





  var movieName = $(".form-control#movieName").val();
  var movieTime = $(".form-control#movieTime").val();
  var movieAge = $(".form-control#movieAge").val();


  var myMoive=new Movie(movieName,movieTime,movieAge);
  var price=Ticket(movieTime);
//  Movie(movieName,movieTime,);


  //var newMovie = new Movie(m);


  //alert(movieName);
//  var moviePrice=movieName+movieTime+movieAge;
  $("#show-price").show();
  $(".movie-name").text(myMoive.name);
  $(".movie-time").text(myMoive.time);
  $(".movie-age").text(myMoive.age);
  $(".movie-price").text(myMoive.Ticket());

});
});
