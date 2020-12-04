/* <====== Password show =======> */
function show() {
  var show = document.querySelector('.form__sign_in-password');
  var i = $('.show-pass');
  if(show.type === "password"){
    show.type = 'text';
  }else{
    show.type = 'password'
  }

}
/* <====== Password Icon Show & Hide =======> */
var i1 = $('.show-pass-1');
var i2 = $('.show-pass-2');
i2.hide();
i1.on('click', function() {
  i2.show();
  i1.hide();
})
i2.on('click', function() {
  i1.show();
  i2.hide();
})
/* <====== Account Slider =======> */
$('.account__slider').slick({
  infinite: true,
  slidesToShow: 5,
  arrows:false,
});
