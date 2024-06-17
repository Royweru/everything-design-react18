export type Product = {
  name: string;
  images?: string[];
  thumbnail: string;
  description: string;
  price: number;
  slug: string;
  featured?: boolean;
  id: number;
  creator: number;
};

export type UserDetails = {
  id: number;
  username: string;
  email?: string;
};
