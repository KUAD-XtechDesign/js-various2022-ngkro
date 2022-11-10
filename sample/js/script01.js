$(function(){

  $("#intro p").hide().fadeIn(1000)
  //setTimeout(introAnime,2000);//2秒経った時にintroAnimeを実行
  $("#intro").on("click",introAnime)//クリックしたらintroAnimeを実行

  function introAnime(){//jqueryでフェードアウト、終わったらcontentAnime実行
    $("#intro").fadeOut(1000,contentAnime);
  }

  function contentAnime(){
    setTimeout(backAnime,300);//0.3秒後backAnime実行
    setTimeout(space04_moonAnime,2000);//2秒後space04_moon実行
    setTimeout(carAnime,2000);//2秒後carAnime実行
    setTimeout(foodAnime,3000);//3秒後foodAnime実行
  }
  
  //以下のアニメはCSSでやってみる
  //ここではanimeクラスつけるだけ
  function backAnime(){
    $("#back").addClass("anime")
  }

  function space04_moonAnime(){
    $("#space04_moon").addClass("anime")
  }

  function carAnime(){
    $("#car").addClass("anime")
  }

  function foodAnime(){
    $("#food").addClass("anime")
  }

})