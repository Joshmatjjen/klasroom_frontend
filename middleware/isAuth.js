export default function(context) {
  console.log("[Middleware] isAuth");
  if (context.store.getters["auth/isAuthenticated"]) {
    context.redirect("/student/dashboard");
  }
}