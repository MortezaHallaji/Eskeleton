let eskeleton = document.querySelectorAll(".eskeleton");

eskeleton.forEach((el) => {
  let img = document.createElement("img");
  let classes = el.getAttribute("data-class");
  if (classes != "" && classes != null && classes != undefined) {
    classes = classes.split(" ");
    classes.forEach((element) => {
      img.classList.add(element);
    });
  }

  img.setAttribute("src", el.getAttribute("data-image"));
  img.setAttribute("alt", el.getAttribute("data-alt"));
  img.setAttribute("title", el.getAttribute("data-title"));

  el.parentElement.insertBefore(img, el.nextSibling);
  el.remove();
});
