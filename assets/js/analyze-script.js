function message() {

    var s = document.getElementById('s');
    var sex = s.options[s.selectedIndex].value;

    var a = document.getElementById('a');
    var age = a.options[a.selectedIndex].value;

    var w = document.getElementById('w');
    var work = w.options[w.selectedIndex].value;

    var con = document.getElementById('con');
    var congenital = con.options[con.selectedIndex].value;

    var f = document.getElementById('f');
    var family = f.options[f.selectedIndex].value;

    var at = document.getElementById('at');
    var atopen = at.options[at.selectedIndex].value;

    var al = document.getElementById('al');
    var alcohol = al.options[al.selectedIndex].value;

    var fo = document.getElementById('fo');
    var food = fo.options[fo.selectedIndex].value;

    var h = document.getElementById('h');
    var home = h.options[h.selectedIndex].value;

    var b = document.getElementById('b');
    var bedroom = b.options[b.selectedIndex].value;

    var ch = document.getElementById('ch');
    var chemicals = ch.options[ch.selectedIndex].value;

    var ci = document.getElementById('ci');
    var cigarettes = ci.options[ci.selectedIndex].value;

    var sl = document.getElementById('sl');
    var sleep = sl.options[sl.selectedIndex].value;

    var sh = document.getElementById('sh');
    var shelter = sh.options[sh.selectedIndex].value;

    var e = document.getElementById('e');
    var exercise = e.options[e.selectedIndex].value;

    if (sex == '0' && age == '0' && work == '0' && congenital == '0' && family == '0'
    && atopen == '0' && alcohol == '0' && food == '0' && home == '0' && bedroom == '0'
    && chemicals == '0' && cigarettes == '0' && sleep == '0' && shelter == '0' && exercise == '0') {
        alert("กรุณาใส่ข้อมูลให้ครบ");
    }

    //เริ่มต้นกฏ
    else if (atopen == 'atopen6') {
        window.location = "No"
    } else if (atopen == 'atopen3') {
        window.location = "allergic"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom1' && sex == 'sex1') {
        window.location = "asthma"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom1' && sex == 'sex2') {
        window.location = "No"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom3') {
        window.location = "allergic"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom2') {
        window.location = "allergic"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom4') {
        window.location = "allergic"
    } else if (atopen == 'atopen1' && atopen == 'atopen3' && atopen == 'atopen5' && bedroom != 'bedroom4') {
        window.location = "no"
    }
    // else if(atopen == 'atopen1' && atopen =='atopen3' && 'atopen5' && bedroom == '__' && work =='work3')
    //{
    // window.location= "no"
    // }
    // else if(atopen == 'atopen1' && atopen =='atopen3' && 'atopen5' && bedroom == '__' && work =='work3')
    //{
    // window.location= "no"
    // }
    else if (document.p1.bedroom.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.bedroom.focus();
        return false;
    } else if (document.p1.chemicals.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.chemicals.focus();
        return false;
    } else if (document.p1.sleep.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.sleep.focus();
        return false;
    } else if (document.p1.cigarettes.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.cigarettes.focus();
        return false;
    } else if (document.p1.shelter.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.shelter.focus();
        return false;
    } else if (document.p1.exercise.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.exercise.focus();
        return false;
    } else {
        document.p1.submit();
        return false;
    }
} function message() {

    var s = document.getElementById('s');
    var sex = s.options[s.selectedIndex].value;

    var a = document.getElementById('a');
    var age = a.options[a.selectedIndex].value;

    var w = document.getElementById('w');
    var work = w.options[w.selectedIndex].value;

    var con = document.getElementById('con');
    var congenital = con.options[con.selectedIndex].value;

    var f = document.getElementById('f');
    var family = f.options[f.selectedIndex].value;

    var at = document.getElementById('at');
    var atopen = at.options[at.selectedIndex].value;

    var al = document.getElementById('al');
    var alcohol = al.options[al.selectedIndex].value;

    var fo = document.getElementById('fo');
    var food = fo.options[fo.selectedIndex].value;

    var h = document.getElementById('h');
    var home = h.options[h.selectedIndex].value;

    var b = document.getElementById('b');
    var bedroom = b.options[b.selectedIndex].value;

    var ch = document.getElementById('ch');
    var chemicals = ch.options[ch.selectedIndex].value;

    var ci = document.getElementById('ci');
    var cigarettes = ci.options[ci.selectedIndex].value;

    var sl = document.getElementById('sl');
    var sleep = sl.options[sl.selectedIndex].value;

    var sh = document.getElementById('sh');
    var shelter = sh.options[sh.selectedIndex].value;

    var e = document.getElementById('e');
    var exercise = e.options[e.selectedIndex].value;

    if (sex == '0' && age == '0' && work == '0' && congenital == '0' && family == '0' && atopen == '0' && alcohol == '0' && food == '0' && home == '0' && bedroom == '0' && chemicals == '0' && cigarettes == '0' && sleep == '0' && shelter == '0' && exercise == '0') {
        alert("กรุณาใส่ข้อมูลให้ครบ");
    }

    //เริ่มต้นกฏ
    else if (atopen == 'atopen6') {
        window.location = "No"
    } else if (atopen == 'atopen3') {
        window.location = "allergic"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom1' && sex == 'sex1') {
        window.location = "asthma"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom1' && sex == 'sex2') {
        window.location = "No"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom3') {
        window.location = "allergic"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom2') {
        window.location = "allergic"
    } else if (atopen == 'atopen3' && atopen == 'atopen2' && bedroom == 'bedroom4') {
        window.location = "allergic"
    } else if (atopen == 'atopen1' && atopen == 'atopen3' && atopen == 'atopen5' && bedroom != 'bedroom4') {
        window.location = "no"
    }
    // else if(atopen == 'atopen1' && atopen =='atopen3' && 'atopen5' && bedroom == '__' && work =='work3')
    //{
    // window.location= "no"
    // }
    // else if(atopen == 'atopen1' && atopen =='atopen3' && 'atopen5' && bedroom == '__' && work =='work3')
    //{
    // window.location= "no"
    // }
    else if (document.p1.bedroom.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.bedroom.focus();
        return false;
    } else if (document.p1.chemicals.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.chemicals.focus();
        return false;
    } else if (document.p1.sleep.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.sleep.focus();
        return false;
    } else if (document.p1.cigarettes.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.cigarettes.focus();
        return false;
    } else if (document.p1.shelter.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.shelter.focus();
        return false;
    } else if (document.p1.exercise.value == "0") {
        alert('กรุณาใส่ข้อมูลให้ครบ');
        document.p1.exercise.focus();
        return false;
    } else {
        document.p1.submit();
        return false;
    }
}
