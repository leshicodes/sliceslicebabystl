import ImageFallback from "@/helpers/ImageFallback";
import SeoMeta from "@/partials/SeoMeta";

const GalleryPage = () => {
  // Gallery images
  const galleryImages = [
    {
      src: "/images/gallery/pizza1.jpg",
      alt: "Freshly baked margherita pizza",
      caption: "Our signature margherita fresh from the oven"
    },
    {
      src: "/images/gallery/pizza2.jpg",
      alt: "Chef preparing pizza",
      caption: "Handcrafted with care"
    },
    {
      src: "/images/gallery/kitchen.jpg",
      alt: "Our pizza kitchen",
      caption: "Where the magic happens"
    },
    {
      src: "/images/menu/margherita.jpg",
      alt: "Classic margherita pizza",
      caption: "The timeless favorite"
    },
    {
      src: "/images/menu/pepperoni.jpg",
      alt: "Pepperoni pizza",
      caption: "Loaded with pepperoni"
    },
    {
      src: "/images/about/restaurant.jpg",
      alt: "Restaurant interior",
      caption: "Our cozy dining space"
    }
  ];

  return (
    <>
      <SeoMeta
        title="Gallery | Slice Slice Baby"
        description="Take a visual tour of our pizzas, our kitchen, and our restaurant."
      />
      <section className="section pt-14">
        <div className="container">
          <div className="text-center mb-12">
            <h1 className="font-heading text-4xl lg:text-5xl text-primary mb-4">Gallery</h1>
            <p className="text-lg max-w-2xl mx-auto">
              Feast your eyes on our delicious pizzas and get a glimpse behind the scenes at Slice Slice Baby.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={`gallery-${index}`} className="relative group overflow-hidden rounded-lg shadow-lg">
                <ImageFallback
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  src={image.src}
                  width={400}
                  height={300}
                  alt={image.alt}
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <p className="text-white p-4 font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Customer Photos */}
          <div className="mt-16">
            <h2 className="font-heading text-3xl text-primary mb-8 text-center">Customer Photos</h2>
            <p className="text-center mb-6">
              Share your Slice Slice Baby experience on social media with the hashtag <span className="font-bold">#SliceSliceBaby</span>
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {/* This would be populated from social media API in a real implementation */}
              <div className="bg-tertiary w-full h-64 sm:w-72 rounded-lg flex items-center justify-center">
                <p className="text-primary font-medium text-center px-6">
                  Share your pizza photos on Instagram and tag us @sliceslicebaby to be featured here!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryPage;
