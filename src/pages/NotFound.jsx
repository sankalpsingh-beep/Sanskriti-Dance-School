import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <Link className="button button-primary" to="/">Back to Home</Link>
    </main>
  );
}
