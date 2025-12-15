import { Navigate, Outlet } from "react-router";
import { PageUrls } from "@/common/constants";
import { useAuth } from "@/context/auth-context";

export default function ProtectedRoute() {
  const { session, isLoading } = useAuth();

  if (!isLoading && !session) {
    return <Navigate to={PageUrls.UNPROTECTED_PAGE} replace />;
  }

  return <Outlet />;
}
