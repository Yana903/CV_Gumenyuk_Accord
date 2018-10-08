$(document).ready(function() {
    $('.js_down').on('click', function (e) {
       myFunction(1);
    });
});


$(document).ready(function() {
    $('.js_up').on('click', function (e) {
        myFunction(0);
    });
});

function myFunction (flagDown) {
    var items = $('.accordeon-item');
    var item = $('.accordeon-item');
    var content = item.find('.accordeon-inner');
    var is_down = true;

    items.stop(true, true).removeClass('active');

    if (flagDown === 1) {
        content.stop(true, true).slideDown(300);
    }
    else {
        content.stop(true, true).slideUp(300);
    }
   }
