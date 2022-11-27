//positioning section when clicking dropdown_img
$("#dropdown_img").click(function () {
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
    1000
  );
  console.log(height);
});
