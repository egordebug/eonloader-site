const modal = document.getElementById("modal");
const checkUpdateBtn = document.getElementById("checkUpdate");
const modalBtns = document.querySelectorAll(".modal-btn");

checkUpdateBtn.onclick = () => {
  modal.classList.remove("hidden");
};

modalBtns.forEach(button => {
  button.onclick = () => {
    const platform = button.dataset.platform;
    const jsonFile = platform === "emu" ? "version-emu.json" : "version.json";

    fetch(jsonFile)
      .then(response => response.json())
      .then(data => {
        const filename = platform === "emu" ? "signed-emu.apk" : "signed.apk";
        const baseTag = `${data.version}-release`;
        const downloadLink = `https://github.com/egordebug/eonloader_pc_mobile/releases/download/${baseTag}/${filename}`;

        window.location.href = downloadLink;
      })
      .catch(() => {
        alert("Failed to fetch update info.");
      });

    modal.classList.add("hidden");
  };
});

document.getElementById("downloadSources").onclick = () => {
  alert("Sources are in development...");
};