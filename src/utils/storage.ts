export const storageSave = (key: string, payload: any) => {
  localStorage.setItem(key, JSON.stringify(payload));
};

export const storageGet = (key: string): any => {
  try {
    const data = localStorage.getItem(key);

    if (!data) {
      return;
    }

    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};
