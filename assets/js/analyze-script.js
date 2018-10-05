$(document).ready(function() {

	$('#submitForm').on('click', function() {
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
		$("input[id*='atopen']:checked").each(function(i) {
			atopen[i] = $(this).val();
		});
		var chemicals = [];
		$("input[id*='chemicals']:checked").each(function(i) {
			chemicals[i] = $(this).val();
		});
		var food = [];
		$("input[id*='food']:checked").each(function(i) {
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
    // alert(result)
		// alert(atopen)
		// var =al,de,as,alde,alas,deas,n;
		//   al  = 'Allergic';
		//   de  = 'Dermatitis';
		//   as=    Asthma
		//   alde= Allergic-Dermatitis
		//   alas=Allergic=Asthma
		//   deas=Dermatitis-Asthma
		//   n=      noAllerg

    var result = '';

		console.log(atopen);
		if (sex == null || age == null || work == null || family == null || congenital == null || atopen == null || chemicals == null || food == null || alcohol == null || home == null || bedroom == null || cigarettes == null || exercise == null || sleep == null || shelter == null) {
			alert('กรุณากรอกข้อมูลให้ครบถ้วน')
      // result = 'กรุณากรอกข้อมูลให้ครบถ้วน';
			if (atopen == "atopen6") {
	      result = 'noAllerg';
			} else if (atopen == "atopen3") {
				result = 'Allergic';
			}
			else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom1" && sex == "sex1") {

				result = 'Asthma';
			} else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom1" && sex == "sex2") {
			  result = 'noAllerg';
			} else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom3") {
				result = 'Allergic';
			} else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom2") {
				result ='Allergic';
			} else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom4") {
				result ='Allergic';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom == "bedroom4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work == "work3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise == "exercise3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals == "chemicals8") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals8") {
				result ='Allergic';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && Sexercise != "exercise3" && chemicals != "chemicals8") {
				result ='Allergic';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3") {
				result ='Allergic';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom == "bedroom4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && cigarettes == "cigarettes3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home == "home4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work == "work3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise == "exercise3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise == "exercise3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals == "chemicals5" && chemicals == "chemicals6" && chemicals == "chemicals7") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals == "chemicals6") {
				result ='Allergic';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals == "chemicals8") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital == "congenital8") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter == "shelter4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter == "shelter1") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter != "shelter1" && age == "age4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter != "shelter1" && age != "age4") {
				result ='Dermatitis';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4") {
				result ='Allergic';
			} else if (atopen == "atopen5") {
				result ='Dermatitis';
			} else if (atopen == "atopen4") {
				result ='Allergic';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5") {
				result ='Allergic';
			} else if (atopen == "atopen3") {
				result ='Allergic';
			} else if (atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5") {
				result ='Dermatitis';
			} else if (atopen == "atopen1") {
				result ='Allergic-Dermatitis';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen5") {
				result ='Allergic-Asthma';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom == "bedroom4") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work == "work3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work != "work3" && exercise == "exercise3") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals == "chemicals8") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals8") {
				result ='Allergic';
			} else if (atopen == "atopen3" && atopen == "atopen5") {
			  result = 'noAllerg';
			} else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4") {
				result ='Allergic-Dermatitis';
			} else {
				result ='ข้อมูลอยู่นอกเหนือกฏ';
			}

		}
	console.log(result);

    // var nan ='แนนนน'
    // resultFunction(nan);

    // window.alert();

    });


	});
