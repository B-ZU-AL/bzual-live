# B.ZU.AL Live - Deploy y actualizaciones continuas

## 1) Estructura de ramas

- `main`: version estable/publicada.
- `dev`: experimentacion y cambios en curso.

## 2) Primer publish (una sola vez)

1. Crea un repo en GitHub.
2. Conecta este proyecto local al repo:
```bash
git remote add origin <URL_DEL_REPO>
git push -u origin main
git push -u origin dev
```
3. En Vercel o Netlify: "Import Project" desde GitHub.
4. Selecciona `main` como rama de produccion.

Listo: tendras una URL publica estable.

## 3) Actualizar sin cambiar URL

Para iterar:
```bash
git checkout dev
# haces cambios
git add .
git commit -m "mejora: ... "
git push
```

Cuando validas que esta bien:
```bash
git checkout main
git merge dev
git push
```

La URL publica se actualiza automaticamente.

## 4) Compartir en Squarespace

Opcion A (recomendada): boton/enlace hacia la URL de Vercel/Netlify.

Opcion B (embed iframe):
```html
<iframe
  src="https://TU-URL-PUBLICA"
  style="width:100%;height:78vh;border:0;"
  allow="camera; microphone; fullscreen; display-capture"
></iframe>
```

Nota: algunos navegadores restringen camara/microfono dentro de iframes. Si pasa, abrir en URL directa.

## 5) Requisitos para webcam/mic

- Siempre usar `https` (o `localhost` en local).
- Dar permisos de camara/microfono en navegador y sistema operativo.
- Si usas camara externa, debe aparecer como dispositivo de video del sistema.
