export default (async function registerWorklets() {
  if (typeof window === "undefined") return;

  function register() {
    // @ts-ignore
    window.CSS.paintWorklet.addModule(`/worklets/borderPolygon.js`);
  }

  register();
})();
