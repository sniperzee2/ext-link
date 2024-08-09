; (async () => {
  const app = document.createElement('div')
  app.id = 'ext_root'

  // Apply styles directly to the div
  app.style.position = 'fixed';
  app.style.top = '50%';
  app.style.transform = 'translateY(-50%)';
  app.style.width = '300px'; // Adjust width as needed
  app.style.zIndex = '1000'; // Ensure it stays on top

  document.body.append(app)

  const src = chrome?.runtime?.getURL('/react/index.js')
  await import(src)
})()
