import * as ver from './ver.js'
import { interalApi } from './modloader.js'
import {Mod} from './typeclasses.js'
import { AddModElement } from './addModEl.js'
import { CodeSandbox } from './codesandbox.js'

// Register Mod
// I used AI to clean this code up lol. it did do a pretty good job tho
export function RegisterMod(code, referAs = "the mod", replaceDupeAuto = false) {
  try{
  const { mods } = interalApi;
  const sandbox = new CodeSandbox();

  sandbox.eval(code);
  const manifest = sandbox.eval('GetManifest()');
  console.log("manifest", manifest)

  if (!isValidManifest(manifest)) {
    console.log(code)
    alert(`"${referAs}" failed to register due to malformed manifest or lack of one.`);
    return;
  }

  const dupeModIndex = mods.findIndex(mod => mod.uuid === manifest.uuid);
  if (dupeModIndex !== -1) {
    const dupeMod = mods[dupeModIndex];
    Object.defineProperty(dupeMod, "configurable", true)
    if (!shouldReplaceDupeMod(dupeMod, manifest, replaceDupeAuto)) return;
    mods.splice(dupeModIndex, 1);
  }

  const mod = new Mod(
    manifest.name,
    manifest.description,
    manifest.author,
    manifest.websiteURL,
    manifest.imageURL,
    manifest.modVersion,
    manifest.uuid,
    code
  );

  mods.push(mod);
  interalApi.updateData()
  sandbox.destroy();

  AddModElement(mod);
  }catch(err){
    console.warn(err)
    console.log(code)
    alert(`Error occured when registering the mod!
    Please go to our discord server and send us the mod link in bug reports.
    If you are a mod developer try asking for help in our discord server.`.replace("\n"," "))
  }
}

function isValidManifest(manifest) {
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

function shouldReplaceDupeMod(dupeMod, manifest, replaceDupeAuto) {
  if (replaceDupeAuto) return true;
  if (ver.greater(manifest.modVersion, dupeMod.version)) return true;

  const replaceDupeString = ModApi.prompt(
    `You already have a mod with the same ID and version. Would you like to replace it? (Type in "yes" if you do)`
  );
  return replaceDupeString?.toLowerCase() === "yes";
}
