import { useEffect } from "react";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { SectionName, SectionNameEs } from "@/lib/types";

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
