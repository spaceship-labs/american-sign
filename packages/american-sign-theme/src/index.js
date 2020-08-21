import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\american-sign-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "american-sign-theme",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
