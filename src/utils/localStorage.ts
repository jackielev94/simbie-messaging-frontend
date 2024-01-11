
export function getLocalStorage(key: string): string | null {
  return window.localStorage.getItem(key);
}


export function setLocalStorage(key: string, value: string): void {
  window.localStorage.setItem(key, value);
}
