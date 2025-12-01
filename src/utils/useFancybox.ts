import { useRef, useEffect } from "react";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

// O uzun import satırını sildik.
// options parametresine ': any' diyerek TypeScript'e "buna karışma" diyoruz.
export default function useFancybox(options: any = {}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const delegate = "[data-fancybox]";

    // Fancybox'ı başlatıyoruz
    Fancybox.bind(container, delegate, options);

    return () => {
      Fancybox.unbind(container);
      Fancybox.close();
    };
  }, [options]);

  return containerRef;
}
