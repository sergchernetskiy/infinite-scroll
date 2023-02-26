var galleryRef=document.querySelectorAll(".gallery img");function lazyLoad(e){var r=new IntersectionObserver((function(e,r){e.forEach((function(e){var n=e.target;if(e.isIntersecting){var o=n.dataset.src;n.src=o,console.log(o),r.unobserve(n)}}))}),{rootMargin:"10px"});e.forEach((function(e){return r.observe(e)}))}lazyLoad(galleryRef);
//# sourceMappingURL=index.75abca9b.js.map
