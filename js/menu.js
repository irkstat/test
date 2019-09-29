let hMenu = document.querySelector("#h_menu");
let mobileMenu = document.querySelector("#m_menu");
let mClose = document.querySelector("#m_close");

hMenu.onclick = function(){
   mobileMenu.style.display = "flex";
}
mClose.onclick = function(){
   mobileMenu.style.display = "none";
}