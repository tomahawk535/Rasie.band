$(document).ready(function(){
    PopUpHide();
    $('.desktop-carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true,
        slidesToShow: 3,
        adaptiveHeight: true,
        centerMode: false,
        mobileFirst: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    centerMode: false
                }
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                }
            }
        ]
    });
    FaqHide();
    $('.calendar').datepicker({
        autoClose: true,
    })
});

//

$('#click_nav_item_first').click(function(){
    $(this).data('clicked', true);
    if ($('#click_nav_item_first').data('clicked')) {
        console.log('first');
        $('.author_nav_item_text').text('In der Vorbereitungsphase findet der Ghostwriter ein geeignetes Thema und er' +
            ' recherchiert nach wissenschaftlicher Literatur. Darauf aufbauend erstellt er die Gliederung für Deine ' +
            'Facharbeit.');
    }
    else {

    }

});
$('#click_nav_item_second').click(function(){
    $(this).data('clicked', true);
    if ($('#click_nav_item_second').data('clicked')) {
        console.log('second')
        $('.author_nav_item_text').text('In der zweiten Phase nach der Schaffung der Struktur und Forschung der Literatur. ' +
            'Ihr Schriftsteller macht sich an die Arbeit.');
    }
    else {

    }

});
$('#click_nav_item_third').click(function(){
    $(this).data('clicked', true);
    if ($('#click_nav_item_third').data('clicked')) {
        console.log('third')
        $('.author_nav_item_text').text('In der dritten Phase wird die Arbeit verifiziert, eine Rezension von Forschern' +
            ' auf diesem Gebiet wird darauf geschrieben. Außerdem werden Abstracts für ihre Rede geschrieben. und eine ' +
            'Liste von Fragen und zusätzlicher Literatur für die Verteidigung wird vorbereitet.');
    }
    else {

    }

});






// function ChangeText() {
//     var $clickText = $('.authors_text');
//     if($clickText::first-child).
// }
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

// отправка формы
function SendForm (){
    var $data = {};
    $('#form').find('input, select, #count').map(function (){
        $data[this.name]=$(this).val();
    });
    console.log($data);
}

$('.submit').click(SendForm);


