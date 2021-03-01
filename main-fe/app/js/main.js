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
//Cмена текста для блока  шаги написаня
$('#step_nav_item_click_first').click(function(){
    $(this).data('clicked', true);
    if ($('#step_nav_item_click_first').data('clicked')) {
        $('.step_nav_item_text').html(
            '                    <h4>Die Einleitung enthält diese Elemente:</h4>\n' +
            '                    <p><span>1.</span> Einführung in das Thema und die Frage, die behandelt wird.</p>\n' +
            '                    <p><span>2.</span> Übersicht über die inhaltliche Vorgehensweise und die Struktur der Arbeit.</p>\n' +
            '                    <p><span>3.</span> Formulierung des Ziels der Arbeit und Erläuterung der notwendigen Schritte, um dieses zu erreichen.</p>\n' +
            '                    <p><span>Übrigens:</span> <br/>\n' +
            '                        Die Einleitung macht fünf bis zehn Prozent der Facharbeit aus.</p>\n'
                           );
    }
    else {

    }
});

$('#step_nav_item_click_second').click(function(){
    $(this).data('clicked', true);
    if ($('#step_nav_item_click_second').data('clicked')) {
        $('.step_nav_item_text').html(
            '                    <h4>Einführung wird bestehen diese Elemente:</h4>\n' +
            '                    <p><span>1.</span> Einführung in das Thema und die Frage, die behandelt wird.</p>\n' +
            '                    <p><span>2.</span> Übersicht über die inhaltliche Vorgehensweise und die Struktur der Arbeit.</p>\n' +
            '                    <p><span>3.</span> Formulierung des Ziels der Arbeit und Erläuterung der notwendigen Schritte, um dieses zu erreichen.</p>\n' +
            '                    <p><span>Übrigens:</span> <br/>\n' +
            '                        Die Einleitung macht fünf bis zehn Prozent der Facharbeit aus.</p>\n'
        );
    }
    else {

    }
});

$('#step_nav_item_click_third').click(function(){
    $(this).data('clicked', true);
    if ($('#step_nav_item_click_third').data('clicked')) {
        $('.step_nav_item_text').html(
            '                    <h4>Den Hauptteil verfassen diese Elemente:</h4>\n' +
            '                    <p><span>1.</span> Einführung in das Thema und die Frage, die behandelt wird.</p>\n' +
            '                    <p><span>2.</span> Übersicht über die inhaltliche Vorgehensweise und die Struktur der Arbeit.</p>\n' +
            '                    <p><span>Übrigens:</span> <br/>\n' +
            '                        Die Einleitung macht fünf bis zehn Prozent der Facharbeit aus.</p>\n'
        );
    }
    else {

    }
});

$('#step_nav_item_click_fours').click(function(){
    $(this).data('clicked', true);
    if ($('#step_nav_item_click_fours').data('clicked')) {
        $('.step_nav_item_text').html(
            '                    <h4>Das Fazit schreiben diese Elemente:</h4>\n' +
            '                    <p><span>1.</span> Einführung in das Thema und die Frage, die behandelt wird.</p>\n' +
            '                    <p><span>Übrigens:</span> <br/>\n' +
            '                        Die Einleitung macht fünf bis zehn Prozent der Facharbeit aus.</p>\n'
        );
    }
    else {

    }
});

$('#step_nav_item_click_fifth').click(function(){
    $(this).data('clicked', true);
    if ($('#step_nav_item_click_fifth').data('clicked')) {
        $('.step_nav_item_text').html(
            '                    <h4>Richtig zitieren will gelernt sein</h4>\n' +
            '                    <p> Einführung in das Thema und die Frage, die behandelt wird.</p>\n' +
            '                    <p>Übersicht über die inhaltliche Vorgehensweise und die Struktur der Arbeit.</p>\n' +
            '                    <p>Formulierung des Ziels der Arbeit und Erläuterung der notwendigen Schritte, um dieses zu erreichen.</p>\n' +
            '                    <p><span>Übrigens:</span> <br/>\n' +
            '                        Die Einleitung macht fünf bis zehn Prozent der Facharbeit aus.</p>\n'
        );
    }
    else {

    }
});

//Смена текста для блока про авторов

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


