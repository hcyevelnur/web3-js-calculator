VanillaTilt.init(document.querySelector(".container"), {
  max: 15,
  speed: 1000,
  glare: true,
  "max-glare": 0.2
});



function insrt(num) {
  $('.calculator').val($('.calculator').val()+num);
}

function eql(){
  $('.calculator').val(eval($('.calculator').val()))
}

function c(){
  $('.calculator').val('');
}

// function del() {
//     value = $('.calculator').val();
//     $('.calculator').val(value.substring(0, value.lenght - 1 ));
// }

function del() {
value = $('.calculator').val();
$('.calculator').val(value.substring(0, value.length - 1));
  
}


function cle() {
  document.form.result.value = 0;
}
