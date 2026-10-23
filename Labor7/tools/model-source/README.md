# Fonte dos modelos 3D

Os GLBs comprimidos com Draco são usados apenas pela ferramenta de manutenção para regenerar o Base64 embutido em `index.html`; a página não os baixa separadamente.

Depois de substituir os arquivos fonte, atualize o HTML pela raiz do projeto:

```sh
node tools/embed-labor7-models.mjs
```

O Three.js r128, o GLTFLoader e o decodificador Draco usados pela página são carregados pela CDN.
