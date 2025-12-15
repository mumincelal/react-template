import { createBrowserRouter } from "react-router";
import { PageUrls } from "@/common/constants";
import ProtectedRoute from "@/components/auth/protected-route";
import ErrorBoundary from "@/components/error-boundary";
import Layout from "@/components/layout/layout";
import { ProtectedPage } from "@/pages/protected";
import UnprotectedPage from "@/pages/unprotected";

export const router = createBrowserRouter([
  {
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: PageUrls.UNPROTECTED_PAGE,
        element: <UnprotectedPage />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <Layout />,
            children: [
              {
                index: true,
                element: <ProtectedPage />
              },
              {
                path: PageUrls.PROTECTED_PAGE,
                element: <ProtectedPage />
              }
            ]
          }
        ]
      }
    ]
  }
]);
