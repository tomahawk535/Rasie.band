$(document).ready(function(){
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow(){
    $("#pop-up-form").show();

}
$('#pop-up').click(PopUpShow)

//Функция скрытия PopUp
function PopUpHide() {
    $("#pop-up-form").hide();
}
$('#pop-up-close').click(PopUpHide);