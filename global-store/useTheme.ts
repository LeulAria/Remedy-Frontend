import { PaletteMode } from "@mui/material";
import create from "zustand";

type Store = {
  mode: PaletteMode;
  toggleMode: () => void;
};

const useTheme = create<Store>((set) => ({
  mode: "dark",
  toggleMode() {
    set((state) => ({
      ...state,
      mode: state.mode === "dark" ? "light" : "dark",
    }));
  },
}));

export default useTheme;
