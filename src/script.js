//positioning section when clicking dropdown_img // scrolling down
$("#dropdown_img, #about_link, #contact_link").click(function () {
  let height;
  if (window.innerWidth > 768) {
    height = $("#navbar").height();
  } else {
    height = 40;
  }

  var id = $(this).attr("href");
  $("html, body").animate(
    {
      scrollTop: $(id).offset().top - height,
    },
    100
  );
});
