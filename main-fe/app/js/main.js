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


// форма


function SubmitForm () {
    let $form = $(this);
    $.post(
        $form.attr('action'),
        $form.serialize()
    );
    return false;
}

$('form').submit (SubmitForm);