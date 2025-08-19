import "./style.css";

// get the current theme from the URL
const searchParams = new URLSearchParams(window.location.search);
document.body.dataset.theme = searchParams.get("theme") ?? "light";

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
  const xTitle = document.getElementById('submit')?.dataset.xtitle;
  const yTitle = document.getElementById('submit')?.dataset.ytitle;
  const xData = document.getElementById('submit')?.dataset.xdata;
  const yData = document.getElementById('submit')?.dataset.ydata;

  const dataMap = new Map([["data-width",width],
    ["data-height",height],
    ["data-borderRadius",borderRadius],
    ["data-fillColor",fillColor],
    ["data-iconColor",iconColor],
    ["data-textColor",textColor],
    ["data-items", items],
    ["data-version",version], 
    ["data-icons",iconListNames],
    ["data-xtitle",xTitle],
    ["data-ytitle",yTitle],
    ["data-xdata",xData],
    ["data-ydata",yData]
  ]);

  parent.postMessage(dataMap, "*");
  console.table(dataMap);
});


// Listen plugin.ts messages
window.addEventListener("message", (event) => {
  if (event.data.source === "penpot") {
    document.body.dataset.theme = event.data.theme;
  }
});
