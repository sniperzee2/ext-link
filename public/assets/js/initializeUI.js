(async () => {
  const app = document.createElement("div");
  app.id = "ext_root";
  app.style.position = "fixed";
  app.style.top = "50%";
  app.style.transform = "translateY(-50%)";
  app.style.width = "100%";
  app.style.zIndex = "10000";

  document.body.append(app);
  const src = chrome?.runtime?.getURL("/react/index.js");

  await import(src);
})();
