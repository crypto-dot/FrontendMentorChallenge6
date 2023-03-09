export const navMenu = (() => {
  console.log('test')
  const btn : HTMLElement | null = document.querySelector('#navBtn');
  const navMenu : HTMLElement | null = document.querySelector('#navMenu');
 
  if(!navMenu || !btn) {
    console.error('Warning Button or Nav Menu cannot be found in DOM');
    return;
    } 
  btn.addEventListener('click', () => 
  {

    const isOpen = navMenu.getAttribute('aria-expanded') === 'true'; 
    if(isOpen) {
      navMenu.style.display = 'none';
      navMenu.setAttribute('aria-expanded','false');
    } else {
      navMenu.style.display = 'block';
      navMenu.setAttribute('aria-expanded','true');
    }
  });
})();

