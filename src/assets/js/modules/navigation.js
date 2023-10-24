
window.addEventListener("load",function(){
  const button = document.querySelector("#my_nav_btn"); // Hamburger Icon
  const menu = document.querySelector('#my-navbar'); // Menu
  console.log(button);
  
  button.addEventListener('click', () => {
      console.log("clicking mememem");
    menu.classList.toggle('hidden');
  });
})

export {window}