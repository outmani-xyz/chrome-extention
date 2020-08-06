$(function () {
    chrome.storage.sync.get('total', function (budget) {

        total = 0;
        console.error(total);
        if (budget.total) {
            total = parseInt(budget.total);
            console.error(total);
        }
        $('#total').html(total)

    })
    $("#btn").click(function () {

        chrome.storage.sync.get('total', function (budget) {
            total = 0;
            if (budget.total) {
                total = parseInt(budget.total);
            }

            amount = $("#amount").val();
            if (amount) {
                total += parseInt(amount)
            }
            console.warn(total);

            chrome.storage.sync.set({total: total})
            $('#total').html(total)
        })
    })
}) 