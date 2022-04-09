// import { useContext } from "react";

import { useTheme } from "../context/ThemeContext";

// import ThemeContext from "../context/ThemeContext"; // import ettiğimiz context'i aşağıda kullandık.

function Header() {
  // const { theme, setTheme } = useContext(ThemeContext);
  const { theme, setTheme } = useTheme();

  return (
    <div>
      Active Theme: {theme}
      <br />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        Change Theme
      </button>
    </div>
  );
}

export default Header;

// Eğer biz burda context'i kullanmıyor olsaydık ne yapacaktık? app üzerinde bir tane state'imiz olacaktı o state'de theme state'i duracaktı, sonrasında bu datayı hem header'a hem de butona tek tek geçecektik. Aynı zamanda bu state'e atama yapacak olan setTheme fonksiyonunuda geçmemiz gerekecekti. Böyle böyle uzayacaktı, aynı state'i biz onlarca farklı componentte kullanmaya başladığımız zaman çok çok fazla uğraş çıkmış oluyor.
