$(document).ready(function(){
    PopUpHide();
    $('.carousel_slick').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        adaptiveHeight: true
    });
    FaqHide();
});

//Функция отображения PopUp
function PopUpShow(){
    $("#pop-up-form").fadeIn();
}
$('#pop-up').click(PopUpShow)

//Функция скрытия PopUp
function PopUpHide() {
    $("#pop-up-form").fadeOut();
}
$('#pop-up-close').click(PopUpHide);

// Функция скритыи FAQ
function FaqHide () {
    $('.faq-hidden-text').hide();
}
// Функция открытия FAQ
function FaqOpen () {
   $(this).siblings('.faq-hidden-text').toggle();
}
$('.faq-toggle').click(FaqOpen);

// Counter
$('#count-minus').click(function () {
    var $input = $('#count');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    return false;
});
$('#count-plus').click(function () {
    var $input = $('#count');
    $input.val(parseInt($input.val()) + 1);
    return false;
});

// форма
function SubmitForm () {
    let $form = $('#form');
    $.post(
        $form.attr('action'),
        $form.serialize()
    );
    return false;
}

$('form').submit (SubmitForm);