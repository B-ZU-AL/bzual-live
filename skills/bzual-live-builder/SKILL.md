---
name: bzual-live-builder
description: Build and iterate a live visual instrument app (Glitch Live, 3D Live, Particles Live, Dome output) with stable UX-first workflow, performance safeguards, and bilingual ES/EN UI.
---

# B.ZU.AL Live Builder

Use this skill when the user is building or debugging the B.ZU.AL live visual app.

## Product intent

- Treat the app as a performance instrument, not a timeline editor.
- Prioritize real-time response and stable behavior over experimental complexity.
- Keep UX minimal in Live mode, advanced controls in Studio mode.

## Iteration protocol

1. Work in small slices: one feature or one bug per iteration.
2. Define a concrete acceptance check before coding.
3. Implement with fallback paths first, then optimize.
4. Verify module switching does not break render loop or input state.
5. Report what changed and what was validated.

## Rendering safety rules

- Keep independent pipelines by module:
  - `glitch`: 2D FX pipeline.
  - `depth` (3D Live): point/mesh/depth pipeline.
  - `particles`: dedicated particle pipeline.
- If GPU path fails, auto-fallback to CPU path without blank canvas.
- Preserve input aspect ratio in preview and output.
- Never block render loop waiting for optional subsystems (tracking/audio/webcam).

## UX rules

- Live UI: only essential controls visible.
- Studio UI: advanced controls always available and logically grouped.
- Hide camera-mode controls when module does not use 3D camera.
- Keep shortcuts conflict-free; document each shortcut in one place.
- Preserve bilingual labels (`es`/`en`) for new controls and messages.

## Debug priority order

1. No output/black canvas
2. Frozen frame or stalled real-time loop
3. Broken mode switch behavior
4. Input source issues (webcam/image/audio)
5. Performance drops and adaptive quality
6. UX polish and presets

## Release checklist (quick)

- Module switch works: Glitch <-> 3D <-> Particles.
- Webcam and image input both render.
- Dome output has no seam break on equirect mapping.
- Record and snapshot actions produce valid files.
- Shortcuts work without collisions.
- Live mode remains usable for first-time users in under 30 seconds.

