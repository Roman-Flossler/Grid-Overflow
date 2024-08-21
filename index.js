// header buttons functionality - mostly toggling of CSS classes

toggleThumbnailsLayout = function () {
  document.getElementById("grid").classList.toggle("go-masonry");
  ["codeMasonry", "codeGrid"].forEach((idCls) => {
    document.getElementById(idCls).classList.toggle(idCls);
  });
};

function showResponsivity() {
  ["expand", "shrink"].forEach((cls) => {
    document.getElementById("fenceBox").classList.toggle(cls);
  });
}

function toggleHoverEffect(that) {
  document.getElementById("grid").classList.toggle("go-zoomFx");
  that.classList.toggle("zoomFx");
  ["#codeMasonry", "#codeGrid"].forEach((id) => {
    document.querySelector(id + " ins").classList.toggle("hidden");
  });
}

function toggleGalleryTheme(that) {
  SSG.cfg.theme = SSG.cfg.theme === "light" ? "dark" : "light";
  that.innerText = "◑ theme: " + SSG.cfg.theme.toUpperCase();
  document.getElementById("ssgrun").classList.toggle("dark");
}

function runStoryShowGallery() {
  SSG.run({ fs: false, initImgName: ["klaksvik-sheeps", 1] });
}

setTimeout(() => {
  document.getElementById("fenceBox").classList.remove("delay");
}, 3333);
