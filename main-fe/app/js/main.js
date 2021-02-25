$(document).ready(function(){
    PopUpHide();
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

