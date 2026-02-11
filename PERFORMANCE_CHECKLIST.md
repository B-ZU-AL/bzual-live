# Performance checklist (Safari + Chrome)

Usa este checklist antes de publicar cambios en `main`.

## A. Basico de render

- [ ] Abre en Safari y Chrome.
- [ ] Cambia entre `Glitch Live`, `3D Live`, `Particulas Live` sin canvas negro.
- [ ] Cambia webcam <-> imagen y el render se actualiza al instante.

## B. FPS y estabilidad

- [ ] En presets por defecto: se siente fluido y estable (>30 FPS percibido).
- [ ] Random no cuelga el canvas.
- [ ] Cambiar fondo/modos no congela fotograma.

## C. Audio reactivo

- [ ] Mic funciona al primer intento con permisos.
- [ ] Sin audio: animacion baja/casi quieta (sin jitter falso).
- [ ] Con audio: reaccion clara en puntos/malla/particulas.

## D. Domo

- [ ] Equirect -> Domo sin costura visible fuerte.
- [ ] Rotacion domo suave.
- [ ] En Glitch y 3D el domo renderiza sin corte negro.

## E. UX Live/Studio

- [ ] Pestañas `Live` y `Edit` responden.
- [ ] `Studio` muestra controles avanzados correctos por modulo.
- [ ] En Glitch no se muestran controles de camara 3D innecesarios.

## F. Grabacion/Export

- [ ] Grabar inicia y detiene con el mismo boton.
- [ ] Guardar grabacion produce archivo reproducible.
- [ ] Foto HQ exporta captura limpia.

## G. Shortcuts

- [ ] `R` random general.
- [ ] `F` fondo random (sin romper modo flat/light).
- [ ] `G`, `T`, `Y`, `V`, `X`, `Z`, `U`, `M`, `C`, `Q` funcionan sin conflictos.

## H. Aspect ratio

- [ ] 21:9 por defecto.
- [ ] 1:1 y 9:16 no deforman imagen.
