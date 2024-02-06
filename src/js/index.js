function chamar() {
   let shareIcon = document.getElementById("moreShare");

   if (shareIcon.style.visibility == "hidden") {
    shareIcon.style.visibility = "visible";
    shareIcon.style.animation = "minhaAnimacao 3s 1";
   } else {
    shareIcon.style.visibility = "hidden";
   }
}