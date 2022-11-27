//positioning section when clicking dropdown_img
$("#dropdown_img").click(function () {
  var width = window.innerWidth;
  var id = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - width,
    },
    1000
  );
});
