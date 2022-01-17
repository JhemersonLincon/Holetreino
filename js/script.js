function activeToggle(button, element){
  const btn = document.querySelector(button);
  const el = document.querySelector(element);
  btn.addEventListener('click', ()=>{
    el.classList.toggle('active')
  })
}

activeToggle('.btn-mobile', '.nav-aside')
activeToggle(".search i", ".search")