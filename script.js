document.getElementById("checkUpdate").onclick = () => {
  const choice = confirm("Use Phone version?\nCancel = Bluestacks");
  const url = choice ? "version.json" : "version-emu.json";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const filename = data.platform === "emu" ? "signed-emu.apk" : "signed.apk";
      const baseTag = `${data.version}-release`;

      const versionPage = `https://github.com/egordebug/eonloader_pc_mobile/releases/tag/${baseTag}`;
      const downloadLink = `https://github.com/egordebug/eonloader_pc_mobile/releases/download/${baseTag}/${filename}`;

      alert(
        `Latest version (${data.platform}): ${data.version}\n\n` +
        `Release notes:\n${versionPage}\n\n` +
        `Download:\n${downloadLink}`
      );
    })
    .catch(() => alert("Failed to check updates."));
};

document.getElementById("downloadSources").onclick = () => {
  alert("Sources are in development...");
};