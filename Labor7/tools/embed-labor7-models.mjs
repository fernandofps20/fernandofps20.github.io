import { readFileSync, writeFileSync, renameSync } from 'node:fs';

const htmlPath = 'index.html';
const inputs = {
  upper: 'tools/model-source/upper-arch-draco.glb',
  lower: 'tools/model-source/lower-arch-draco.glb',
};
const marker = /<!-- BEGIN LABOR7 GLB BASE64 -->[\s\S]*?<!-- END LABOR7 GLB BASE64 -->/;
const html = readFileSync(htmlPath, 'utf8');

if (!marker.test(html)) throw new Error(`Marcadores Base64 não encontrados em ${htmlPath}`);

const models = {};
for (const [name, path] of Object.entries(inputs)) {
  const glb = readFileSync(path);
  if (glb.toString('ascii', 0, 4) !== 'glTF' || glb.readUInt32LE(4) !== 2) {
    throw new Error(`${path} não é um GLB versão 2 válido`);
  }
  models[name] = glb.toString('base64');
}

const payload = `<!-- BEGIN LABOR7 GLB BASE64 -->\n<script id="labor7-3d-base64" type="application/json">${JSON.stringify(models)}</script>\n<!-- END LABOR7 GLB BASE64 -->`;
const output = html.replace(marker, payload);
writeFileSync(`${htmlPath}.tmp`, output);
renameSync(`${htmlPath}.tmp`, htmlPath);
console.log(`Modelos embutidos: ${(Buffer.byteLength(output) / 1024 / 1024).toFixed(2)} MB de HTML`);
