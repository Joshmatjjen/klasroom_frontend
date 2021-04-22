export default function(context) {
  console.log("[Middleware] isTutor");
  if (context.store.getters["auth/user"] && !context.store.getters["auth/user"].isTutor) {
    context.redirect(`/student/dashboard`);
  }
}
