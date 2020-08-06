$(function () {
    $('#xname').keyup(function () {
        val = $(this).val();
        console.error(val);
        $("#h2").text('hello ' + val);
    })
}) 