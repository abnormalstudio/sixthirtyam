import React from "react";

const useLazy = (base64, src) => {
  const [ref, setRef] = React.useState(null);
  const [imageSrc, setImageSrc] = React.useState(base64);

  React.useEffect(() => {
    let active = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const image = new Image();
          image.onload = () => {
            if (active) {
              setImageSrc(image.src);
            }
          };
          image.src = src;
        }
      },
      {
        rootMargin: "-100px"
      }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      active = false;
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [src, ref]);

  return { imageSrc, setRef };
};

const slugify = str => {
  return str
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase()
    .replace(/[^a-z-0-9]/g, "");
};

export { useLazy, slugify };
