import { createContext, useState, useContext } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const values = { user, setUser };

  return (
    <UserContext.Provider value={values}> {children}</UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };

// Ben artık bu context'i herhangi bir componentimde kullanabiliyor durumdayım. Bunun için bu context'i import app.js'e import ediyoruz.
