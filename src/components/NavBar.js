import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
    <nav>
      {/* display an <a> tag for each link here */}
      {links.map((data) => (
        <a key={data} href={`#${data}`}>{data}</a>
      ))}
    </nav>
  );
}

export default NavBar;
