"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function usePageLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    setIsLoading(true);

    // Loading muncul minimal 1 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return isLoading;
}