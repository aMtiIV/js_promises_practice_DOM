var e=new Promise(function(e,t){document.addEventListener("mousedown",function(t){0===t.button&&e("First promise was resolved")}),setTimeout(function(){t(Error("First promise was rejected"))},3e3)}),t=new Promise(function(e,t){document.addEventListener("mousedown",function(t){(0===t.button||2===t.button)&&e("Second promise was resolved")})}),n=new Promise(function(e,t){var n=!1,o=!1;document.addEventListener("mousedown",function(t){0===t.button?n=!0:2===t.button&&(o=!0),n&&o&&e("Third promise was resolved")})}),o=function(e){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.className="success",t.textContent=e,document.body.appendChild(t)},i=function(e){var t=document.createElement("div");t.setAttribute("data-qa","notification"),t.className="error",t.textContent=e.message,document.body.appendChild(t)};e.then(o).catch(i),t.then(o).catch(i),n.then(o).catch(i);
//# sourceMappingURL=index.d6257938.js.map
