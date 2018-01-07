/**
 * Callback function provided to the IntersectionObserver
 * in order to lazy load images that appear in the viewport.
 * It relies on the `data-src` attribute of the images
 * to work.
 * @param {Array} entries - Items being observed
 * @param {Object} observer - Intersection Observer instance
 */
export default function lazyLoadImage(entries, observer) {
    entries.forEach(entry => {
        const isInViewport = entry.isIntersecting
        console.log(isInViewport)

        if (isInViewport) {
            observer.unobserve(entry.target)
            entry.target.src = entry.target.dataset.src
        }
    })
}

/**
 * Default config for the intersection observer
 */
export const config = {
    rootMargin: '288px',
    threshold: 0.5
}
