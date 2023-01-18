import React from "react";
import PuffLoader from "react-spinners/PuffLoader";
import "./index.css";

function CustomLoader({ loading }) {
  return (
    <div className="loading">
      <PuffLoader color={"#83B2E7"} loading={loading} size={60} />
    </div>
  );
}

export default CustomLoader;
