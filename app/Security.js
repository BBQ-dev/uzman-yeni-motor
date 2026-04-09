"use client";

import { useEffect } from "react";

export default function Security() {
  useEffect(() => {
    // Sağ tık menüsünü engelle
    const handleContextMenu = (e) => e.preventDefault();
    
    // F12, Ctrl+Shift+I, Ctrl+U engelle (Modern e.key kullanımı)
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" || 
        (e.ctrlKey && e.shiftKey && e.key === "I") || 
        (e.ctrlKey && e.key === "u")
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return null;
}