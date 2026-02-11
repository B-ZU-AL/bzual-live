# Start here (Mac)

## Abrir localmente rapido

1. Abre Terminal.
2. Entra al proyecto:
```bash
cd "/Users/nico/Documents/New project"
```
3. Inicia servidor local:
```bash
python3 -m http.server 8080
```
4. Abre:
`http://localhost:8080`

## Flujo recomendado de trabajo

1. Probar cambios en rama `dev`.
2. Validar con `PERFORMANCE_CHECKLIST.md`.
3. Pasar a `main` solo lo que este estable.
4. Publicar automatico por Vercel/Netlify conectado a `main`.
