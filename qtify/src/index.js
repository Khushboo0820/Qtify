// import React from "react";
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
// import ErrorBoundary from "./components/ErrorBoundary";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import HomePage from "./pages/Homepage/HomePage";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//     ],
//   },
// ]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ErrorBoundary>
//       <RouterProvider router={router} />
//     </ErrorBoundary>
//   </React.StrictMode>
// );
import React from "react";
import HomePage from "./pages/Homepage/HomePage";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);