
// Simple search for projects grid
function setupSearch() {
  const q = document.getElementById('search');
  const grid = document.getElementById('projectsGrid');
  if (!q || !grid) return;
  const cards = Array.from(grid.querySelectorAll('.card'));
  q.addEventListener('input', (e)=>{
    const v = e.target.value.toLowerCase();
    cards.forEach(c=>{
      const text = c.innerText.toLowerCase();
      c.style.display = text.includes(v) ? '' : 'none';
    });
  });
}

// Lightweight lightbox
function setupLightbox(){
  const lb = document.getElementById('lightbox');
  if(!lb) return;
  const imgs = document.querySelectorAll('[data-lightbox]');
  imgs.forEach(img => {
    img.addEventListener('click', ()=>{
      lb.querySelector('img').src = img.src;
      lb.classList.add('active');
    });
  });
  lb.addEventListener('click', ()=> lb.classList.remove('active'));
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupSearch();
  setupLightbox();
});
