var $ul = $('ul');
var $input = $('input[type="text"]');
var $toggleInput = $('.toggle-input');

$ul.on('click', 'li', function(event) {
    $(event.target).toggleClass('completed');
});

$ul.on('click', 'li > span', function(event) {
    var $li = $(event.target).parents('li');

    $li.fadeOut(500, function() {
        $li.remove();
    });
});

$input.on('keypress', function(event) {
    var value = $input.val();

    if (isKey(event, 13)) {
        $input.val('');
        $('ul').append('<li><span><i class="far fa-trash-alt"></i></span> ' + value + '</li>');
    }
});

$toggleInput.on('click', function() {
    ($input.css('display') === 'none') ?
    $input.slideDown():
        $input.slideUp();
});

function isKey(event, code) {
    return event.charCode === code || event.which === code;
}