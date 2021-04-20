export default function(context) {
  console.log("[Middleware] isAuthenticated");
  if (context.store.getters["auth/user"] && context.store.getters["auth/user"].userType !== "student") {
    context.redirect(`/${context.store.getters["auth/user"].userType}/dashboard`);
  }
}
