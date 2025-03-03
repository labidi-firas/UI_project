document.addEventListener('DOMContentLoaded', () => {
  // Quantity selector functionality
  const decreaseBtn = document.getElementById('decrease');
  const increaseBtn = document.getElementById('increase');
  const quantityDisplay = document.getElementById('quantity');
  
  let quantity = 0;
  
  decreaseBtn.addEventListener('click', () => {
    if (quantity > 0) {
      quantity--;
      quantityDisplay.textContent = quantity;
    }
  });
  
  increaseBtn.addEventListener('click', () => {
    quantity++;
    quantityDisplay.textContent = quantity;
  });

  // Product image hover effect
  const productImages = document.querySelectorAll('.product-image');
  productImages.forEach(img => {
    img.addEventListener('mouseenter', () => {
      img.classList.add('scale-105');
    });
    img.addEventListener('mouseleave', () => {
      img.classList.remove('scale-105');
    });
  });

  console.log('Product page initialized!');
});