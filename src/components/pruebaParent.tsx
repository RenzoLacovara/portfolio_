import ImageGallery from "./pruebaChild";

export default function Parent() {
  const images = [
    "https://ejemplo.com/imagen1.jpg",
    "https://ejemplo.com/imagen2.jpg",
    "https://ejemplo.com/imagen3.jpg",
  ];

  return (
    <div>
      <ImageGallery images={images} />
    </div>
  );
}
