import { create } from "zustand";

interface Navbar {
    isOpen: boolean;
    toggleIsOpen: () => void;
    setClose: () => void;
}

const useNavbar = create<Navbar>((set) => ({
    isOpen: false,
    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    setClose: () => set((_state) => ({ isOpen: false }))
}));
export default useNavbar;