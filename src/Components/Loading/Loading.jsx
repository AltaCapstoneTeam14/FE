import React from "react";
import Spinner from "react-spinner-material";
import "../Loading/Loading.css"

function Loading() {
  return (
    <div>
      <div className="loadingComponent">
      <Spinner
        size={120}
        spinnercolor={"#0000ff"}
        spinnerwidth={2}
        visible={true}
      />
      </div>
    </div>
  );
}

export default Loading;
