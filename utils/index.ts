import { ImageLoaderProps } from "next/image";

export const OptimizeLoader = ({ src, width, quality = 20 }: ImageLoaderProps) => {
  return `https://img2.storyblok.com/${width}x0/filters:quality(${quality}):format(webp)/${src}`;
};

export const OptimizeImageURL = (src: string, width: number, quality = 20) => {
  src = src.replace("https://a.storyblok.com", "");
  src = src.replace("//a.storyblok.com/", "");

  return `https://img2.storyblok.com/${width}x0/filters:quality(${quality}):format(webp)/${src}`;
};

/*
/ Formateador de number a PESOS argentinos
/*/
export function parseCurrency(value: number): string {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
  }).format(value);
}
