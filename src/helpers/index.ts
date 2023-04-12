export const useLocalStorage = {
  save(key: string, data: any) {
    window.localStorage.setItem(key, JSON.stringify(data));
  },
};
