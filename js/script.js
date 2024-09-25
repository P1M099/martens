$(document).ready(function () {
  $(".bxslider").bxSlider({
    pager: false,
    slideWidth: 930
  });
  panelControl();
  toggleButton("input[value='person']");
  // toggleButton("input[value='shopping_bag']");
  arcodianToggle("[class^='check']>div:last-child>div:nth-child(2)>ul li b");
  arcodianToggle(".shoppingBagContainer>div:last-child ul li b");
  arcodianToggle(".questionTab ul li b");
  productWishIcon();
  productSizeActive();
  togglePw();
  changeCost();
  selectChange();
  faqTab();

  if($(window).width() < 1279){
    arcodianToggle("footer .footerTop div:not(:first-child) h3");
    arcodianToggle("[class*='ProductDetailContainer'] aside dl");
  }
});

function panelControl(){
  var panel = null;
  $(".openBtn").click(function () {
    if($(this).is("[data-name]")){
      panel = "#" + $(this).attr("data-name") + "Panel";
      console.log(panel);
    }else{
      panel = "#" + $(this).val() + "Panel";
    }
    $(panel).addClass("active");
    if($(window).width() < 1279){
      if(panel == "#menuPanel"){
        $(".gnb>div:first-of-type>ul").hide();
      }
    }
  });
  $(".closeBtn").click(function () {
    $(panel).removeClass("active");
    if($(window).width() < 1279){
      $(".gnb>div:first-of-type>ul").show();
    }
  });
}
function toggleButton(target){
  var currentPanel = null;
  $(target).click(function(){
    currentPanel = "#" + $(this).val() + 'Panel';
    $(currentPanel).toggleClass("active");
  });
}
function arcodianToggle(target){
  $(target).click(function(){
    $(this).parent().toggleClass("active");
  });
}

function productWishIcon(){
  var $icon = $("ul[class*='productList']>li:not(.justImage) div ol li:first-child input[type='button']");
  $icon.click(function(){
    $(this).toggleClass("active");
  });
}

function productSizeActive(){
  var $size = $("ol.size li input[type='button']");
  $($size).click(function(){
    $size.removeClass("active");
    $(this).addClass("active");
  });
}

function togglePw(){
  var $visibleBtn = $(".pwVisible");
  var $visibleType = null;
  var visibleStatus = false;
  $visibleBtn.click(function(){
    $visibleType = $(this).siblings(":first-child");
    $visibleBtn = $(this);
    console.log($visibleType);
    visibleStatus=!visibleStatus
    if(visibleStatus == true){
      $visibleBtn.text("visibility_off")
      $visibleType.attr("type","text");
    }else{
      $visibleBtn.text("visibility")
      $visibleType.attr("type","password");
    }
  });
}

function changeCost(){
  var $shippingCost = $(".price li:nth-of-type(2) b");
  var $totalCost = $(".price li:nth-of-type(3) b");
  var $totalCostMo = $(".muicheckBtn b"); 
  var $optionRadio = $("legend+ol li input[type='radio']");
  var costOption = null;
  var changeNumber = null;

  if($(window).width() < 1279){
  }

  $optionRadio.click(function(){
    costOption = $(this).siblings(":last-child").text();
    $shippingCost.text(costOption);
    switch(costOption){
      case "Free":
        changeNumber = 0;
        break;
      case "$9.95":
        changeNumber = 9.95;
        break;
      case "$24.95":
        changeNumber = 24.95;
        break;
      case "$29.95":
        changeNumber = 29.95;
        break;
    }
    $totalCost.text("$" + (220 + changeNumber));
    $totalCostMo.text("$" + (220 + changeNumber));
  });
}

function selectChange(){
  var $selectText = $(".selectBox span");
  var $selectOption = $(".selectBox ul li");
  var changeText = null;
  
  $selectOption.parent().hide();

  $selectText.click(function(){
    $(this).toggleClass('selected');
    if($(this).hasClass('selected')){
      $selectOption.parent().show();
      $selectOption.click(function(){
        changeText = $(this).text();
        $selectText.text(changeText);
        $selectText.removeClass('selected')
        $selectOption.parent().hide();
      });
    }else{
      $selectOption.parent().hide();
    }
  });
}

function faqTab(){
  var $category = $(".faqCategory li input[type='button']");
  var $questionTab = $(".questionTab");
  var activeTab = null;

  $category.click(function(){
    activeTab = "#" + $(this).attr("data-name");
    $($category).removeClass("active");
    $(this).addClass("active");
    $($questionTab).removeClass("active");
    $(activeTab).addClass("active");
  });
}