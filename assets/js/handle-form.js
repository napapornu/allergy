$(document).ready(function () {

    $('#allergens6').on('click', function () {
        var num = $("input[id*='allergens']").length;

        if ($("#allergens6").prop("checked")) {
            removeChecked("allergens", num);
        }
    });

    $("input[id*='allergens']").on('click', function () {
        if ($(this).attr("id") != "allergens6") {
            $("#allergens6").prop("checked", false);
        }
    });

    function removeChecked(id, num) {
        for (let index = 0; index < num ; index++) {
            $("#" + id + index).prop("checked", false);
        }
        
    }

});