import React from "react";

function Footer() {
  const newYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>
          @ copyrights {newYear} {">_<"}{" "}
        </p>
      </footer>
    </>
  );
}

export default Footer;
