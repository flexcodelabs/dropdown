import React from "react";
import ReactDOM from "react-dom";
import Dropdown from "@flexcodelabs/dropdown";

const Test = () => {
  const [open, setOpen] = React.useState(false);
  const Children = () => {
    return (
      <div
        style={{
          backgroundColor: "white",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          width: "200px",
        }}
      >
        <button
          onClick={() => setOpen(!open)}
          style={{
            backgroundColor: "transparent",
            border: "none",
            fontSize: 16,
            padding: 0,
          }}
        >
          Closes dropdown
        </button>
        <li
          style={{
            backgroundColor: "transparent",
            border: "none",
            listStyle: "none",
            fontSize: 16,
          }}
        >
          List Item
        </li>
      </div>
    );
  };
  const Toggle = (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle</button>
    </div>
  );

  return (
    <div>
      <div
        style={{
          position: "relative",
        }}
      >
        <Dropdown
          open="up"
          Toggle={Toggle}
          isOpen={open}
          close={() => setOpen(false)}
        >
          <Children />
        </Dropdown>
      </div>
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>,
  document.getElementById("root")
);
