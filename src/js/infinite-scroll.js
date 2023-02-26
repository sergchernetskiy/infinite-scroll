const galleryRef = document.querySelectorAll('.gallery img');

function lazyLoad(targets) {
  const options = {
    rootMargin: '10px',
  };
  const onEntry = function (entries, observer) {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) {
        const dataSrc = target.dataset.src;
        target.src = dataSrc;
        console.log(dataSrc);
        observer.unobserve(target);
      }
    });
  };
  const io = new IntersectionObserver(onEntry, options);
  targets.forEach(target => io.observe(target));
}

lazyLoad(galleryRef);

// galleryRef.forEach(img => {
//   img.addEventListener('load', () => {
//     console.log('load');
//     img.classList.add('appear');
//   });
// });
