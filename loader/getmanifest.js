import { CodeSandbox } from './codesandbox.js'

// Register Mod
// I used AI to clean this code up lol. it did do a pretty good job tho
export function GetModManifest(code, referAs="the mod"){
  const sandbox = new CodeSandbox();

  sandbox.eval(code);
  const manifest = sandbox.eval('GetManifest()');
  console.log("manifest", manifest)

  if (!isValidManifest(manifest)) {
    console.log(code)
    alert(`"${referAs}" failed to register due to maliformed manifest or lack of one.`);
    return;
  }
  sandbox.destroy();


  return manifest
}

export function isValidManifest(manifest) {
    return (
      manifest &&
      manifest.name &&
      manifest.description &&
      manifest.author &&
      manifest.websiteURL &&
      manifest.imageURL &&
      manifest.uuid &&
      manifest.modVersion
    );
  }