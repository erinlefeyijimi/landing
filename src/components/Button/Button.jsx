import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

function Button({ title, icon, url }) {
  return (
    <div className="button__wrapper">
      <Link to={url}>
        <button>
          <span>{title}</span>

        </button>
      </Link>
    </div>
  );
}

export default Button;