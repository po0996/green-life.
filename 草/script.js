// カート機能
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  alert(productName + " がカートに追加されました！");
}







const tooltip = document.querySelector('.cursor-tooltip');
const target = document.querySelector('.shop-button-area');

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;
let isHovered = false;

function animate() {
  const ease = 0.05; // アニメーションのsokudo
  currentX += (mouseX - currentX) * ease;
  currentY += (mouseY - currentY) * ease;

  if (isHovered && tooltip) {
    tooltip.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  requestAnimationFrame(animate);
}
animate();

if (target && tooltip) {
  target.addEventListener('mouseenter', () => {
    isHovered = true;
    tooltip.style.opacity = '1';
  });

  target.addEventListener('mouseleave', () => {
    isHovered = false;
    tooltip.style.opacity = '0';
  });

  target.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });
}



