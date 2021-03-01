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


