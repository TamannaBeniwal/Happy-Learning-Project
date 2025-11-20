import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [parentInfo, setParentInfo] = useState(null);
  const [childInfo, setChildInfo] = useState(null);

  return (
    <AuthContext.Provider value={{ parentInfo, setParentInfo, childInfo, setChildInfo }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
