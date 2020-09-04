import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// layout with global css
const defaultStyles = {
  backgroundColor: "#f2f2f2"
};

export default function Layout({ children }) {
  return <div style={defaultStyles}>{children}</div>
}