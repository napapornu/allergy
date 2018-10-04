$(document).ready(function () {

// atopen
    $('#atopen6').on('click', function() {    
        var num = $("input[id*='atopen']").length;

        if ($("#atopen6").prop("checked")) {
              removeChecked("atopen", num);
        }
    });

    $("input[id*='atopen']").on('click', function () {
        if ($(this).attr("id") != 'atopen6') {
            $("#atopen6").prop("checked", false);
        }
    });
// food
    $('#food9').on('click', function() {
        var num = $("input[id*='food']").length;
        if ($("#food9").prop("checked")) {
              removeChecked("food", num);
        }
    });

    $("input[id*='food']").on('click', function () {
        if ($(this).attr("id") != 'food9') {
            $("#food9").prop("checked", false);
        }
    });
//  chemicals
$('#chemicals8').on('click', function() {
    var num = $("input[id*='chemicals']").length;
    if ($("#chemicals8").prop("checked")) {
          removeChecked("chemicals", num);
    }
});

$("input[id*='chemicals']").on('click', function () {
    if ($(this).attr("id") != 'chemicals8') {
        $("#chemicals8").prop("checked", false);
    }
});
    function removeChecked(id, num) {
      for (var i = 1; i < num; i++) {
        $("#" + id + i).prop("checked", false);
      }
    }





});
