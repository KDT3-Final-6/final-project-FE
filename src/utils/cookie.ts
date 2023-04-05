import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const getCookie = (name: string) => {
  try {
    return cookies.get(name)
  } catch(error) {
    console.error(error);
    return ''
  }
}

export const setCookie = (name: string, value: string, option?: object) => {
  try {
    cookies.set(name, value, { ...option })
  } catch (error) {
    console.error(error);
    
  }
}

export const removeCookie = (name: string, option?: object) => {
  try {
    cookies.remove(name, { ...option });
  } catch (error) {
    console.error(error);
    
  }
}