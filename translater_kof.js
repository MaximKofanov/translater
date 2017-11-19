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

$('.ltCount').css('font-weight','normal');
objL['lt0'] = document.title;
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

var funcL = function(){
  $('.wrapLT').prepend('var newTranslateObj = {');
  for(var key in objL){
    $('.wrapLT').append('<div>'+key+' : \''+objL[key]+'\',</div>');
  }
  $('.wrapLT').append('};');
}

$('body').append('<div class="wrapLT" style="position:absolute;top:0;left:0;border:3px solid #00DDFF;padding:3px;color:#005EFF;background-color:#fff;z-index:999999999999;"><span class="closeWrapLT" style="font-size:20px;position:absolute;top:0;right:0;color:Red;cursor:pointer;">x</span></div>');
$('.wrapLT').append(funcL());
$('.closeWrapLT').click(function(){
  $('.wrapLT').remove();
});
//Выводим объект для копирования

// ========== Конец кода вставки ============

 //Все элементы полученного объекта вставляем в новый объект в код страницы
//И добавляем код добавления классов с номерами итерации

//Пример:

//var newTranslateObj = {
  //lt10: "text1",
  //lt14: "text6"}
                                         
// for(var key in newTranslateObj){
//   $('.'+key+'').text(newTranslateObj[key]);                             
// }             
