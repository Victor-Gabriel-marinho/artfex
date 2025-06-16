import { createContext, useState, useEffect } from "react";
import axios from "axios"

export const UserContext = createContext();

export const Userprovider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser === 'undefined' || storedUser === 'null') {
    localStorage.removeItem('user');
  }
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const handlelogout =  () => {
    const api_url = process.env.REACT_APP_API_URL
    try{
      axios.post(`${api_url}/logout`,{
        access_token:user.session.access_token
      });

      setUser(null)
      localStorage.removeItem('user');
      
      window.location.href = '/';
      
    } catch(error) {
      console.error("erro ao fazer logout", error.response?.data?.message || error.message)
    }
  }

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser, handlelogout}}>
      {children}
    </UserContext.Provider>
  );
};