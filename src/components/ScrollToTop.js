import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// ScrollToTop
// Minimal component to scroll the window to top whenever the route changes.
// Keeps design and components untouched; only ensures the browser scroll position
// is at the top of the page on load and on route change.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use 'auto' to jump instantly. If you prefer smooth transition, change to 'smooth'.
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}
