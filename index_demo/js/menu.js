$(document).ready(function () {

  // 將 nav_box 與下拉統一 hover
  $('.nav_box').on('mouseenter', function () {
    $(this).find('.sub_menu').addClass('active');
    $(this)
      .find('.sub_menu_box:first-child .sub_sub_menu_wrap')
      .addClass('active');
    $(this)
      .find('.sub_menu_box:first-child .sub_menu_title span')
      .addClass('active');
    $(this).find('.under_line').addClass('active');
  });

  $('.nav_box').on('mouseleave', function () {
    $(this).find('.sub_menu').removeClass('active');
    $(this).find('.sub_sub_menu_wrap').removeClass('active');
    $(this).find('.sub_menu_title span').removeClass('active');
    $(this).find('.under_line').removeClass('active');
  });

  // 子選單 hover，切換其他 sub_menu_box
  $('.sub_menu_box').hover(
    function () {
      // 加上 active
      $(this).find('.sub_sub_menu_wrap').addClass('active');
      $(this).find('.sub_menu_title span').addClass('active');

      // 如果不是第一個，移除第一個 active
      if ($(this).index() > 0) {
        $(this).siblings('.sub_menu_box:first-child').find('.sub_sub_menu_wrap').removeClass('active');
        $(this).siblings('.sub_menu_box:first-child').find('.sub_menu_title span').removeClass('active');
      }
    },
    function () {
      // 移出時不移除第一個，保持第一個仍然 active
      if ($(this).index() > 0) {
        $(this).find('.sub_sub_menu_wrap').removeClass('active');
        $(this).find('.sub_menu_title span').removeClass('active');
      }
    }
  );

});

/*
document.addEventListener('DOMContentLoaded', function () {
  var menuLists = document.querySelectorAll('.sub_menu_list');

  menuLists.forEach(function (menuList) {
    var listItems = menuList.querySelectorAll('li');
    var containerSpan = menuList.querySelector('span');
    if (listItems.length >= 8 && listItems.length <= 16) {
      menuList.classList.add('if-over-8');
      containerSpan.classList.add('if-over-8-span');
    } else if (listItems.length > 16 && listItems.length <= 24) {
      menuList.classList.add('if-over-16');
      containerSpan.classList.add('if-over-8-span');
    } else if (listItems.length > 24) {
      menuList.classList.add('if-over-24');
      containerSpan.classList.add('if-over-8-span');
    }
  });
});*/
document.addEventListener('DOMContentLoaded', function () {
  var menuLists = document.querySelectorAll('.sub_menu_list');

  menuLists.forEach(function (menuList) {
    var listItems = menuList.querySelectorAll('li');
    var containerSpan = menuList.querySelector('span');
    if (listItems.length >= 8 && listItems.length <= 16) {
      //menuList.classList.add('if-over-8');
      containerSpan.classList.add('two_column');
    } else if (listItems.length>16) {
      //menuList.classList.add('if-over-16');
      containerSpan.classList.add('three_column');
    }
  });
});
