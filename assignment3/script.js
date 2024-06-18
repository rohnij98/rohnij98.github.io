document.addEventListener('DOMContentLoaded', () => {
    const products = document.querySelectorAll('.product');
products.forEach(product => {
        product.addEventListener('mouseover', () => {
            const name = product.getAttribute('data-name');
            const price = product.getAttribute('data-price');
            const description = product.getAttribute('data-description');
            const info = product.querySelector('.product-info');
            info.innerHTML = `
                <h3>${name}</h3>
                <p>Price: ${price}</p>
                <p>Description: ${description}</p>
            `;
        });
    });
});
