export default function(context) {
  console.log("[Middleware] auth");
  if (!context.store.getters["auth/isAuthenticated"]) {
    context.redirect("/");
  }
}
