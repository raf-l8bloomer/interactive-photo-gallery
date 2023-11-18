baguetteBox.run('.gallery', {
    // Custom options
});

const search = document.querySelector('#search');
const images = document.querySelectorAll('a.image')
console.log(images)

search.addEventListener('keyup', (e) => {
    let currentValue = e.target.value.toLowerCase();
    console.log('This is the search value:', currentValue);

    images.forEach(image => {
        console.log(image.dataset.caption)
        if (image.dataset.caption.toLowerCase().includes(currentValue)) {
            image.style.display = "flex"
        } else {
            image.style.display = "none";
        }
    })
})