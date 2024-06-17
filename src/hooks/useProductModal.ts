import { create } from "zustand";

interface Product {
  id?: number;
  price?: number;
  name?: string;
  description?: string;
  thumbnail?: string;
  images?: string[];
  featured?: boolean;
}

interface storeModal {
  isOpen: boolean;
  onOpen: (data: Product) => void;
  onClose: () => void;
  data: Product | null;
}

export const useAdminProductModal = create<storeModal>((set) => ({
  isOpen: false,
  onOpen: (data = {}) => set({ data, isOpen: true }),
  onClose: () => set({ isOpen: false }),
  data: {},
}));
