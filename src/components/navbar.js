import React from "react";

function NavBar() {
  return (
      <div class="container">
        <nav class="navbar sticky-top navbar-dark bg-dark">
          <ul>
            <li>
              <a class="navbar-brand" href="https://github.com/BarbaraHernandez/clickygame">Click Click Boom</a>
            </li>
            <li>Dynamic Game Text!</li>
            <li>Dynamic: score | Text: !</li>
          </ul>
        </nav>
      </div>
  );
}

export default NavBar;