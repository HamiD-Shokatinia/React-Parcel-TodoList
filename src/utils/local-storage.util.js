export function setItem(key, value) {
    const v = typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, v);
  }
  
  export function getItem(key, defaultValue) {
    const value = localStorage.getItem(key);
  
    if(value) {
      try{
        return JSON.parse(value);
      }catch(e) {
        return value;
      }
    }
  
    return defaultValue;
  }