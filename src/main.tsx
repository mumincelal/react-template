import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { AuthProvider } from "@/context/auth-context";
import { router } from "@/routes";
import "@/styles/globals.css";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root does not exist");
}

createRoot(root).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
