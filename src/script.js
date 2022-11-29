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
  console.log(height);
});

// faq accordion
$(".accordion__header").click(function (e) {
  e.preventDefault();
  var currentIsActive = $(this).hasClass("is-active");
  $(this).parent(".accordion").find("> *").removeClass("is-active");
  if (currentIsActive != 1) {
    $(this).addClass("is-active");
    $(this).next(".accordion__body").addClass("is-active");
  }
});

///search panel
function search_animal() {
  let input = document.getElementById("searchbar").value;
  input = input.toLowerCase();
  let x = document.getElementsByClassName("animals");

  for (i = 0; i < x.length; i++) {
    if (!x[i].innerHTML.toLowerCase().includes(input)) {
      x[i].style.display = "none";
    } else {
      x[i].style.display = "list-item";
    }
  }
}
