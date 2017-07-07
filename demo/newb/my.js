import $ from 'jquery'
import 'normalize.css'
import './my.css'

$(function(){
  var item = $('.item-container');
  $('.right').append(item.clone());
  $('.right').append(item.clone());

  $('.right').scroll(function(event){
    let offsetTop = $(this).scrollTop();
    if (offsetTop > 50){
      $('#scrolltop').fadeIn()
    }else{
      $('#scrolltop').fadeOut()
    }
  });
  $('#scrolltop').click(function(){
    $('.right').animate({ scrollTop: 0 });
  })
})
