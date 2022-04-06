import React from "react";

function Footer() {
  return (
    <footer>
      <p>
        {" "}
        &copy; Ninjas List, {new Date().getFullYear()}. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
