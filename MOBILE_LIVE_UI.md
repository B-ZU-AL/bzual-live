# Mobile Live UI

## What it does
- Adds a dedicated live-performance UI for iPhone (`< 768`) and iPad (`>= 768 && < 1024` or iPad UA).
- Keeps desktop UI untouched.
- Reuses the existing app actions/state (`applySnapshot`, `captureSnapshot`, `toggleFreeze`, `randomizeActiveMode`, `panicReset`, `toggleLiveRecording`, existing control inputs).

## Activation
- Default: `Use Mobile Live UI = Auto` (ON for iPhone/iPad, OFF for desktop).
- Override in **Settings** tab inside Mobile Live UI:
  - `On`: force mobile UI.
  - `Off`: disable mobile UI.
  - `Auto`: use breakpoint/UA detection.

The preference is stored in `localStorage` under `bzual.mobileLiveUi`.

## iPhone
- `MobileLiveShell` with:
  - Canvas entry is the same desktop overlay (`Start Input` with Image/Webcam/No Input) and remains the primary first interaction.
  - Small utility bar (non-blocking): `Audio`, `Skip`, `Aspect`, `Setup`.
  - `QuickActionsBar`: Freeze, Panic, Rec.
  - `Module Switcher` always near shortcuts:
    - Fast jump between modules (GL, FR, 3D, PT, LN, TN, IR, MO, MB, CD)
    - `RND` button for frequent random usage
    - `KAL` button to toggle Kaleidoscope on/off
  - `BottomDock`: Scenes, Macros, FX, Audio, Settings.
  - `BottomSheet`: one active panel at a time.
    - Starts collapsed by default to maximize canvas area.
- `ScenesGrid`: tap to load, long-press (450ms) to save.
- `MacrosPanel`: 8 dynamic macros + 2 XY pads.

## iPad (landscape)
- `TabletLiveShell` with 3-column layout:
  - Same non-blocking utility bar (`Audio`, `Skip`, `Aspect`, `Setup`) without replacing the canvas entry overlay.
  - Left: Scenes.
  - Center: Canvas + quick actions + optional Builder panel.
    - Includes same Module Switcher (modules + `RND` + `KAL`) near shortcuts.
  - Right: Macros.

## iOS behavior
- Safe areas applied with `env(safe-area-inset-top)` / `env(safe-area-inset-bottom)`.
- Canvas and XY pads use `touch-action: none` to avoid accidental scrolling.
- Bottom sheet content scrolls when overflowed.
- Keyboard handling uses `VisualViewport` resize to adjust sheet max height.
