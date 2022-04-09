// Burada userContext'den aldığımız bilgileri kullanacağız.

import { useState } from "react";
// import UserContext from "../context/UserContext";

import { useUser } from "../context/UserContext";

function Profile() {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState("");

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({
        id: 1,
        userName: "mseven",
        bio: "lorem ipsum doler",
      });
      setLoading(false);
    }, 1500);
  };

  const handleLogOut = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && ( // user yoksa aşağıdakini yap varsa yapma dedik.
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Login"}
        </button>
        // Burda loading true ise loading göster değilse Login'i göster demiş olduk.
      )}
      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogOut}>Log Out</button>}
      {/* user varsa logout'da olsun dedik */}
    </div>
  );
}

export default Profile;

// JSON.stringify(data) data objesini JSON'a çevirir.
// JSON.parse(data) JSON'dan objeye çevirmeye yarar.
