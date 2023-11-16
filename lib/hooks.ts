import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { SectionName, SectionNameEs } from "@/lib/types";
import toast from "react-hot-toast";
import { useTheme } from "@/context/theme-context";

export function useSectionInView(
  sectionName: SectionName | SectionNameEs,
  threshold = 0.75
) {
  const { ref, inView } = useInView({ threshold: threshold });
  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}

export function useToast(
  message: string,
  type: "error" | "success",
  theme: "light" | "dark"
) {
  const toastOptions = {
    style: {
      borderRadius: "10px",
      backdropFilter: "blur(4px)",
      background:
        theme === "light"
          ? "rgba(240, 240, 240, 0.8)"
          : "rgba(50, 50, 50, 0.7)",
      color: theme === "light" ? "#000" : "#fff",
    },
  };

  if (type === "success") {
    toast.success(message, toastOptions);
  } else if (type === "error") {
    toast.error(message, toastOptions);
  }
}
