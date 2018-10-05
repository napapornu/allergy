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


    if (sex == null || age == null || work == null || family == null || congenital==null || atopen==null ||chemicals==null
    || food==null || alcohol==null || home==null || bedroom==null || cigarettes==null || exercise ==null ||sleep==null
  || shelter==null) {
        alert('กรุณากรอกข้อมูลให้ครบถ้วน')
    }
    else if (atopen =="atopen6"){
          alret('ไม่เป็น มีโอกาสน้อยมาก')
    }
    else if (atopen =="atopen3" ){
          alret('Allergic')
    }
    else if (atopen =="atopen4" && atopen=="atopen3" && bedroom=="bedroom1" && sex=="sex1") {
          alret('Astham')
    }
    else if (atopen =="atopen4" && atopen=="atopen3" && bedroom=="bedroom1" && sex=="sex2") {
          alret('ไม่เป็น มีโอกาส ')
    else if (atopen =="atopen4" && atopen=="atopen3" && bedroom=="bedroom3" ) {
          alret('Allergic ')
    }
    else if (atopen =="atopen4" && atopen=="atopen3" && bedroom=="bedroom2" ) {
          alret('Allergic ')
    }
    else if (atopen =="atopen4" && atopen=="atopen3" && bedroom=="bedroom4" ) {
          alret('Allergic ')
    }
    else if (atopen =="atopen1" && atopen=="atopen3" && atopen=="atopen4" && atopen=="atopen5" && bedroom=="bedroom4" ) {
                alret('ไม่เป็น มีโอกาส  ')
    }
    else if (atopen =="atopen1" && atopen=="atopen3" && atopen=="atopen4" && atopen=="atopen5" && bedroom !="bedroom4"
     && work == "work3" ) {
                alret('ไม่เป็น มีโอกาส  ')
    }
    else if (atopen =="atopen1" && atopen=="atopen3" && atopen=="atopen4" && atopen=="atopen5" && bedroom !="bedroom4"
     && work != "work3" exercise =="exercise3" ) {
                alret('ไม่เป็น มีโอกาส  ')
    }
    else if (atopen =="atopen1" && atopen=="atopen3" && atopen=="atopen4" && atopen=="atopen5" && bedroom !="bedroom4"
     && work != "work3" exercise !="exercise3" ) {
                alret('ไม่เป็น มีโอกาส  ')
    }
      });


});
