import { create } from "zustand";

interface Navbar {
    isOpen: boolean;
    toggleIsOpen: () => void;
    setClose: () => void;
    setOpen: () => void;
}

const useNavbar = create<Navbar>((set) => ({
    isOpen: false,
    toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    setClose: () => set(() => ({ isOpen: false })),
    setOpen: () => set(() => ({ isOpen: true }))
}));
export default useNavbar;