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
        if (entry.isIntersecting) {
            observer.unobserve(entry.target)
            entry.target.src = entry.target.dataset.src
        }
    })
}

/**
 * Default config for the intersection observer
 */
export const config = {
    /**
     *  Considering 96px for sprite, 288px = 3 sprites below the viewport
     */
    rootMargin: '288px',
    /**
     * Triggers the callback when half of the sprite intersects the point
     * at 288px below the lower margin of the viewport
     */
    threshold: 0.5
}
