import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);

    root.render(<StrictMode><h1>hello world</h1></StrictMode>);
}