import { useCallback, useSyncExternalStore } from 'react';

type Theme = 'light' | 'dark';

const STORAGE_KEY = 'portfolio-theme';
const ATTR = 'data-theme';

function applyTheme(next: Theme) {
  document.documentElement.setAttribute(ATTR, next);
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // storage unavailable (private mode etc.) - attribute still applies
  }
}

function getSnapshot(): Theme {
  return document.documentElement.getAttribute(ATTR) === 'light'
    ? 'light'
    : 'dark';
}

function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: [ATTR],
  });
  return () => observer.disconnect();
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, () => 'dark');

  const toggleTheme = useCallback(() => {
    applyTheme(getSnapshot() === 'dark' ? 'light' : 'dark');
  }, []);

  return { theme, toggleTheme };
}
