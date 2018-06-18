export default function(ctx) {
  if (ctx.route.path == "/ev1") return ctx.redirect("/ev1/info")
  if (ctx.route.path == "/ev2") return ctx.redirect("/ev2/info")
  if (ctx.route.path == "/ev3") return ctx.redirect("/ev3/info")
  if (ctx.route.path == "/route3") return ctx.redirect("/route3/child3")
}
