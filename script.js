const modal = document.getElementById("modal");
const checkUpdateBtn = document.getElementById("checkUpdate");
const modalBtns = document.querySelectorAll(".modal-btn");
const downloadDiv = document.getElementById("downloadLink");

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

        downloadDiv.innerHTML = \`<a href="\${downloadLink}" target="_blank">⬇️ Download \${filename}</a>\`;
        downloadDiv.classList.remove("hidden");
        modal.classList.add("hidden");
      })
      .catch(() => {
        alert("Failed to check updates.");
        modal.classList.add("hidden");
      });
  };
});

document.getElementById("downloadSources").onclick = () => {
  alert("Sources are in development...");
};