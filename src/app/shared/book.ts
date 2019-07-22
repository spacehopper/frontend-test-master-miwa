export interface Book {
  id: string;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image_url: string;
  abv: string;
  ibu: string;
  target_fg:string;
  target_og:string;
  ebc:string;
  srm:string;
  ph:string;
  attenuation_level:string;
}

export interface Thumbnail {
  url: string;
  title?: string;
}
