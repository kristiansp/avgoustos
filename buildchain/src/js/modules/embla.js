import EmblaCarousel from 'embla-carousel'

export class Embla {

    constructor(emblaNode) {
        // Options
        const options = {
            loop: true,
            centerSlides: false,
            dragFree: true,
        }

        const emblaApi = EmblaCarousel(emblaNode, options)
    }
}
