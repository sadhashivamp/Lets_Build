import React from "react";
import "./Logo.css";
// import Home from "../../Assets/Home.jpg";

function Logo() {
  return (
    <div className="logo_c">
      <main>
        <section>
          <h3>Welcome to Letsbuild</h3>
          <h1>
            COME & VISIT <span>LETS BUILD</span> WORLD
          </h1>
          <p>
            "Lets build is a platform, where users share their projects and get
            good results"
          </p>
          <button>
            <a href="/signup">Signup</a>
          </button>
        </section>
      </main>
    </div>
  );
}

export default Logo;
