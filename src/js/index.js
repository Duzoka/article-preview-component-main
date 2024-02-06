function chamar() {
   let shareIcon = document.getElementById("moreShare");

   if (shareIcon.style.visibility == "hidden") {
    shareIcon.style.visibility = "visible";
   } else {
    shareIcon.style.visibility = "hidden";
   }
}