import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToHashEffect() {
  const { hash } = useLocation();
  
  useEffect(() => {
    if (!hash) return;
    
    const id = hash.replace("#", "");
    const element = document.getElementById(id);
    
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth", 
        block: "start" 
      });
    }
  }, [hash]);
  
  return null;
}