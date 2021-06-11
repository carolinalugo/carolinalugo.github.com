let links = document.querySelectorAll(".Close");

links.forEach(function (link) {

  link.addEventListener("Click", function(ev) {

    ev.preventDefault();

    let content = document.querySelector('.content');

    content.classList.remove("animate_slideInDown");
    content.classList.remove("animate_animated");

    content.classList.add("animate_fadeOutUp");
    content.classList.add("animate_animated");

    setTimeout(function() {
      window.history.go(-1);
    }, 600);
    setInternal

    return false;

  ));
));
