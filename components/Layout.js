import Footer from "./Footer";
import Navbar from "./Navbar";

import style from "../styles/Layout.module.css";

function Layout({ children }) {
  return (
    <div className={style.content}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
