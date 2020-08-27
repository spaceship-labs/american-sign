import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\americansign-theme\src\index.js</pre>
    </>
  );
};

export default {
  name: "americansign-theme",
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
