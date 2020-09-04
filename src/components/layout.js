import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// layout with global css
const defaultStyles = (PageBg) => ({
  backgroundColor: PageBg
});

export default function Layout({ children, PageBg = "#f2f2f2" }) {
  return <div style={defaultStyles(PageBg)}>{children}</div>
}