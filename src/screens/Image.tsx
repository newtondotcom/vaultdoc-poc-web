import React from "react";
import Back from "../ui/Back";

import ImageGallery from "react-image-gallery";
// import stylesheet if you're not already using CSS @import
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "https://picsum.photos/id/1018/1000/600/",
    thumbnail: "https://picsum.photos/id/1018/250/150/",
    /*
    fullscreen: "https://picsum.photos/id/1018/1000/600/",
    originalHeight: 600,
    originalWidth: 1000,
    loading: "lazy",
    thumbnailHeight: 150,
    thumbnailWidth: 250,
    thumbnailLoading: "eager",
    originalClass: "featured-slide",
    thumbnailClass: "featured-thumb",
    originalAlt: "original-alt",
    thumbnailAlt: "thumbnail-alt",
    originalTitle: "original-title",
    thumbnailTitle: "thumbnail-title",
    description : "description",
    srcSet : "srcSet",
    sizes : "sizes",
    bulletClass : "bullet-class",
    */
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

export const Image = () => {

  const [width, setWidth] = React.useState<number>(window.innerWidth);

  function handleWindowSizeChange() {
      setWidth(window.innerWidth);
  }
  React.useEffect(() => {
      window.addEventListener('resize', handleWindowSizeChange);
      return () => {
          window.removeEventListener('resize', handleWindowSizeChange);
      }
  }, []);

  const isMobile = width <= 768;

    return (
    <div className="w-full h-full align-middle">
      <Back isMobile={isMobile} />
        <ImageGallery 
        items={images}
        showPlayButton={false}
        />
    </div>
    );
        
}
