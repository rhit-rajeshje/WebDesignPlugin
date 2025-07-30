import "./style.css";

// get the current theme from the URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

// document.querySelector("[id = 'img1']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img1')?.dataset.handler, "*");
// });
// document.querySelector("[id = 'img2']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img2')?.dataset.handler, "*");
// });
// document.querySelector("[id = 'img3']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img3')?.dataset.handler, "*");
// });
// document.querySelector("[id = 'img4']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img4')?.dataset.handler, "*");
// });
// document.querySelector("[id = 'img5']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img5')?.dataset.handler, "*");
// });
// document.querySelector("[id = 'img6']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img6')?.dataset.handler, "*");
// });
// document.querySelector("[id = 'img7']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img7')?.dataset.handler, "*");
// });
// document.querySelector("[id = 'img8']")?.addEventListener("click", () => {
//   // send message to plugin.ts
//   parent.postMessage(document.getElementById('img8')?.dataset.handler, "*");
// });
document.querySelector("[id = 'submit']")?.addEventListener("click", () => {
  // send message to plugin.ts
  const width = document.getElementById('submit')?.dataset.width;
  const height = document.getElementById('submit')?.dataset.height;
  const borderRadius = document.getElementById('submit')?.dataset.radius;
  const fillColor = document.getElementById('submit')?.dataset.fillcolor;
  const iconColor = document.getElementById('submit')?.dataset.iconcolor;
  const textColor = document.getElementById('submit')?.dataset.textcolor;
  const items = document.getElementById('submit')?.dataset.items;
  const version = document.getElementById('submit')?.dataset.version;
  const iconListNames = document.getElementById('submit')?.dataset.icons;

  const dataMap = new Map([["data-width",width],["data-height",height],["data-borderRadius",borderRadius],["data-fillColor",fillColor],["data-iconColor",iconColor],["data-textColor",textColor],["data-items", items],["data-version",version], ["data-icons",iconListNames]]);

  parent.postMessage(dataMap, "*");
  console.table(dataMap);
});


// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});
