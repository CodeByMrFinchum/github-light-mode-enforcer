function enforceLightMode() {
  const html = document.documentElement;

  if (html.getAttribute("data-color-mode") === "auto") {
    html.setAttribute("data-color-mode", "light");
    console.log("GitHub Light Mode Enforced ✅");
  }
}

// Run initially in case it's already set
enforceLightMode();

// Watch for changes to the `html` element and enforce light mode if needed
const observer = new MutationObserver(() => enforceLightMode());

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ["data-color-mode"],
});
