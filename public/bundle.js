


window.addEventListener("load",function(){
    const button = document.querySelector("#my_nav_btn"); // Hamburger Icon
    const menu = document.querySelector('#my-navbar'); // Menu
    
  if(button){  button.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });}
})
