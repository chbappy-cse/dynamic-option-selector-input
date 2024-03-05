$(document).ready(function () {
    $("#selectBox").change(function () {
        var selectValue = $(this).val();
        if (selectValue === "other") {
            $("#otherInput").show();
            $("#selectBox").hide();
            $("#textInput").focus();
        } else {
            $("#otherInput").hide();
        }
    });

    $("#textInput").keypress(function (event) {
        if (event.which === 13) { // Enter key code
            var inputValue = $(this).val().trim();
            if (inputValue !== "") {
                $("option[value='other']").text(inputValue).prop("selected", true);
                $("#otherInput").hide();
                $("#selectBox").show();
                $(this).val(""); // Clear input field
            }
            return false; // Prevent form submission
        }
    });
});