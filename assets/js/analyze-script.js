$(document).ready(function () {

  $('#submitForm').on('click', function(){
    var sex = $('#sex').val();
    var age = $('#age').val();
    var work = $('#work').val();
    var family = $('#family').val();
    var congenital = $('#congenital').val();
    var alcohol = $('#alcohol').val();
    var home = $('#home').val();
    var bedroom = $('#bedroom').val();
    var cigarettes = $('#cigarettes').val();
    var exercise = $('#exercise').val();
    var sleep = $('#sleep').val();
    var shelter = $('#shelter').val();

    var atopen = [];
    $("input[id*='atopen']:checked").each(function(i){
      atopen[i] = $(this).val();
    });

    var chemicals = [];
    $("input[id*='chemicals']:checked").each(function(i){
      chemicals[i] = $(this).val();
    });

    var food = [];
    $("input[id*='food']:checked").each(function(i){
      food[i] = $(this).val();
    });

    console.log(sex);
    console.log(age);
    console.log(work);
    console.log(family);
    console.log(congenital);
    console.log(atopen);
    console.log(chemicals);
    console.log(food);
    console.log(alcohol);
    console.log(home);
    console.log(bedroom);
    console.log(cigarettes);
    console.log(exercise);
    console.log(sleep);
    console.log(shelter);


    // alert(atopen)


    if (sex == null && age == null) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }else {
      rule
    }
  });


});
