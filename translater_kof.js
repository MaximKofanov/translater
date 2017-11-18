// ========= Код для вставки в консоль ==========
// autor : mkofanov, webkofanov@yandex.ru

var objL = {};
//Поиск всех элементов в body
for(var i = $("body *").length+1 ; i !== -1 ; i--){  

  $("body *").eq(i).contents()
    .filter(function() {
    return this.nodeType === 3;
  })
    .wrap( "<b class='ltCount'></b>" )
    .end();
}//Добавляем всему тексту класс ltCount

$("body").contents()
  .filter(function() {
  return this.nodeType === 3;
})
  .wrap( "<b class='ltCount'></b>" )
  .end();//Так же ищем текст в самом body и добавляем им класс

var countLTcount = $('.ltCount').length;
for(var a = 1 ; a < countLTcount+1 ; a++){
  var trimElem = $.trim($('.ltCount').eq(a-1).text());
  objL['lt'+a] = trimElem;
  $('.ltCount').eq(a-1).addClass('lt'+a);
}//Каждому элементу с классом ltCount присваиваем свой класс lt с итерацией и добавлем в объект

for(var key in objL){
  if(objL[key] === "" || ~objL[key].indexOf("function(") || ~objL[key].indexOf("<script")){
    delete objL[key];
  }
}//Удаляем все пустые элементы обьекта и элементы кода

console.log(objL); //Выводим объект в консоль     

// ========== Конец кода вставки ============

 //Все элементы полученного объекта вставляем в новый объект в код страницы
//И добавляем код добавления классов с номерами итерации

//Пример:

//var newTranslateObj = {
  //lt10: "text1",
  //lt14: "text6"}
                                         
//for(var key in newTranslateObj){
  //$('.'+key+'').text(newTranslateObj[key]);                             
//}             