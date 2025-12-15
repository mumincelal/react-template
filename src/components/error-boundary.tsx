import { isRouteErrorResponse, Link, useRouteError } from "react-router";

export default function ErrorBoundary() {
  const error = useRouteError();

  let title = "An unexpected error occurred";
  let message = "Something went wrong. Please try again later.";

  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = "Page Not Found";
      message = "The page you are looking for does not exist.";
    } else {
      title = `${error.status} - ${error.statusText}`;
      message = error.data?.message || message;
    }
  } else if (error instanceof Error) {
    message = error.message;
  }

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-background text-foreground">
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-muted-foreground">{message}</p>
      <Link to="/">Go back home</Link>
    </div>
  );
}
