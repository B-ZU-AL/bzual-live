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
  - Compact top bar focused on canvas-first flow:
    1. `Entrada` first (`Imagen`, `Webcam`, `N/I`).
    2. `Audio` optional (`Audio`, `Load`, `Skip`).
    3. `Aspect` selector + small `Setup` button.
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
  - Same compact top bar (`Entrada` -> `Audio/Skip` -> `Aspect` + `Setup`) without blocking controls.
  - Left: Scenes.
  - Center: Canvas + quick actions + optional Builder panel.
    - Includes same Module Switcher (modules + `RND` + `KAL`) near shortcuts.
  - Right: Macros.

## iOS behavior
- Safe areas applied with `env(safe-area-inset-top)` / `env(safe-area-inset-bottom)`.
- Canvas and XY pads use `touch-action: none` to avoid accidental scrolling.
- Bottom sheet content scrolls when overflowed.
- Keyboard handling uses `VisualViewport` resize to adjust sheet max height.
