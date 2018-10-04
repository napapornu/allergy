 function fncSubmit() {

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

    if (sex == "" && age ==  "" && work ==  "" && congenital == ""
     && family == "" && atopen == "" && alcohol == "" && food ==  ""
     && home == ""  && bedroom == "" && chemicals ==  "" && cigarettes == ""
      && sleep ==  "" && shelter ==  ""  && exercise ==  "") {
          alert("กรุณากรอกข้อมูลให้ครบถ้วน")
    }


}
