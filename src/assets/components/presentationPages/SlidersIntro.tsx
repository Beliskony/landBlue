import useEmblaCarousel from 'embla-carousel-react'
import "../Carrousel.css"
import Autoplay from 'embla-carousel-autoplay';

export function SliderIntro() {
  const [emblaRef] = useEmblaCarousel({ loop: true}, [Autoplay()]);

  const imagesSlides =[
     "https://i.pinimg.com/736x/2e/2b/ca/2e2bcab7d7b8948025884e496a0fdb34.jpg",
     "https://i.pinimg.com/736x/00/7c/c3/007cc321ffc1bf0e368d9d650b23f1bc.jpg",
     "https://i.pinimg.com/736x/86/6c/d2/866cd2867f9f2b7e6e3594fb1b8230dd.jpg",
     "https://i.pinimg.com/736x/6d/b9/30/6db9303d5a7639302a04f40b5717a97e.jpg",
     "https://i.pinimg.com/736x/1c/82/6b/1c826b6aa7fb4ec23ea91c260de383de.jpg",
     "https://i.pinimg.com/736x/7b/b7/b4/7bb7b486768990d88401730af637c2d9.jpg"
  ]

  return (
    <div className="embla my-4" ref={emblaRef}>
      <div className="embla__container">
        {imagesSlides.map((src, index) => (
              <div className="embla__slide  h-[450px] w-full object-cover" key={index}>
                <img src={src} alt={`Slide ${index + 1}`} className="embla__slide  h-[450px] w-full items-center justify-center"/>
              </div>
        ))}
      </div>
    </div>
  )
}
