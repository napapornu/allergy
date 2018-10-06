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

		if (sex == null || age == null || work == null || family == null || congenital == null || atopen == null || chemicals == null || food == null || alcohol == null || home == null || bedroom == null || cigarettes == null || exercise == null || sleep == null || shelter == null) {
			alert('กรุณากรอกข้อมูลให้ครบถ้วน')
      	// result = 'กรุณากรอกข้อมูลให้ครบถ้วน';
	  	} else{
			  if (atopen == "atopen6") {
					result = {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3") {
				  result = {"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  }
			  else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom1" && sex == "sex1") {
				  result =  {"type": 1,"th": "โรคหืด", "en":"Asthma"};
			  } else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom1" && sex == "sex2") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom3") {
				  result = {"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom2") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen4" && atopen == "atopen3" && bedroom == "bedroom4") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom == "bedroom4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work == "work3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise == "exercise3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals == "chemicals8") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals8") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5" && bedroom != "bedroom4" && work != "work3" && Sexercise != "exercise3" && chemicals != "chemicals8") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom == "bedroom4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && cigarettes == "cigarettes3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home == "home4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work == "work3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise == "exercise3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise == "exercise3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals == "chemicals5" && chemicals == "chemicals6" && chemicals == "chemicals7") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals == "chemicals6") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals == "chemicals8") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital == "congenital8") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter == "shelter4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter == "shelter1") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter != "shelter1" && age == "age4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen3" && atopen == "atopen4" && bedroom !== "bedroom4" && cigarettes != "cigarettes3" && home != "home4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals5" && chemicals != "chemicals6" && chemicals != "chemicals7" && chemicals != "chemicals6" && chemicals != "chemicals8" && congenital != "congenital8" && shelter != "shelter1" && age != "age4") {
				  result = {"type": 1,"th": "ภูมิแพ้ผิวหนัง", "en":"Dermatitis"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen5") {
				  result = {"type": 1,"th": "ภูมิแพ้ผิวหนัง", "en":"Dermatitis"};
			  } else if (atopen == "atopen4") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen3") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && atopen == "atopen5") {
				  result = {"type": 1,"th": "ภูมิแพ้ผิวหนัง", "en":"Dermatitis"};
			  } else if (atopen == "atopen1") {
				  result = {"type": 1,"th": "แพ้อากาศ และ ภูมิแพ้ผิวหนัง", "en":"Allergic-Dermatitis"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen5") {
				  result ={"type": 1,"th": "แพ้อากาศ และ โรคหืด", "en":"Allergic-Asthma"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom == "bedroom4") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work == "work3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work != "work3" && exercise == "exercise3") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals == "chemicals8") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen2" && atopen == "atopen3" && atopen == "atopen4" && bedroom != "bedroom4" && work != "work3" && exercise != "exercise3" && chemicals != "chemicals8") {
				  result ={"type": 1,"th": "แพ้อากาศ", "en":"Allergic"};
			  } else if (atopen == "atopen3" && atopen == "atopen5") {
				result =  {"type": 0,"th": "ไม่อยู่ในความเสี่ยง", "en":"noAllerg"};
			  } else if (atopen == "atopen1" && atopen == "atopen3" && atopen == "atopen4") {
				  result ={"type": 1,"th": "แพ้อากาศ และ ภูมิแพ้ผิวหนัง", "en":"Allergic-Dermatitis"};
			  } else {
				  result = {"type": 0 ,"th": "ข้อมูลอยู่นอกเหนือกฏ", "en": "Out of Rule"};
			  }

				var jsonData = JSON.stringify(result);
				sessionStorage.setItem('result', jsonData);
				window.location.href = 'output.html';
	  }

    });


	});
