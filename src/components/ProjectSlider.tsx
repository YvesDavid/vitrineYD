import useEmblaCarousel from "embla-carousel-react";

type Props = {
  images?: string[];
};

export default function ProjectSlider({
  images = [],
}: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  });

  if (!images.length) {
    return (
      <div className="h-56 md:h-64 bg-stone-100 flex items-center justify-center text-stone-400">
        Aucune image
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Slider */}
      <div
        className="overflow-hidden rounded-t-[28px]"
        ref={emblaRef}
      >
        <div className="flex">
          {images.map((img, i) => (
            <div key={i} className="min-w-full">
              <img
                src={img}
                alt={`Projet ${i + 1}`}
                className="h-56 md:h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={() => emblaApi?.scrollPrev()}
        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/85 backdrop-blur border border-stone-200 shadow-sm z-10"
      >
        ←
      </button>

      <button
        onClick={() => emblaApi?.scrollNext()}
        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white/85 backdrop-blur border border-stone-200 shadow-sm z-10"
      >
        →
      </button>
    </div>
  );
}