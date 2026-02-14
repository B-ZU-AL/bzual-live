const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d", { willReadFrequently: true });
const canvasEntryOverlay = document.getElementById("canvasEntryOverlay");
const canvasOverlayImageBtn = document.getElementById("canvasOverlayImageBtn");
const canvasOverlayWebcamBtn = document.getElementById("canvasOverlayWebcamBtn");
const canvasOverlayNoInputBtn = document.getElementById("canvasOverlayNoInputBtn");
const canvasFullscreenBtn = document.getElementById("canvasFullscreenBtn");
const moduleRouteHint = document.getElementById("moduleRouteHint");
let moduleRouteButtons = [...document.querySelectorAll(".module-route-btn")];
const quickInputSelect = document.getElementById("quickInputSelect");
const quickInputActiveText = document.getElementById("quickInputActiveText");

const imageInput = document.getElementById("imageInput");
const inputSpecs = document.getElementById("inputSpecs");
const presetSelect = document.getElementById("presetSelect");
const fractalPattern = document.getElementById("fractalPattern");
const fractalSource = document.getElementById("fractalSource");
const webcamBtn = document.getElementById("webcamBtn");
const cameraDeviceSelect = document.getElementById("cameraDeviceSelect");
const refreshCamsBtn = document.getElementById("refreshCamsBtn");
const quick3dBtn = document.getElementById("quick3dBtn");
const quick3dCleanBtn = document.getElementById("quick3dCleanBtn");
const randomBtn = document.getElementById("randomBtn");
const reseedBtn = document.getElementById("reseedBtn");
const exportVideoBtn = document.getElementById("exportVideoBtn");
const exportGifBtn = document.getElementById("exportGifBtn");
const exportPhotoBtn = document.getElementById("exportPhotoBtn");
const resetBtn = document.getElementById("resetBtn");
const downloadBtn = document.getElementById("downloadBtn");
const webcamVideo = document.getElementById("webcam");
const camStaticBtn = document.getElementById("camStaticBtn");
const camCursorBtn = document.getElementById("camCursorBtn");
const camOrbitBtn = document.getElementById("camOrbitBtn");
const camSweepBtn = document.getElementById("camSweepBtn");
const camPulseBtn = document.getElementById("camPulseBtn");
const camHelixBtn = document.getElementById("camHelixBtn");
const camDriftBtn = document.getElementById("camDriftBtn");
const camLiquidBtn = document.getElementById("camLiquidBtn");
const cameraMoveSpeed = document.getElementById("cameraMoveSpeed");
const cameraControlsDetails = document.getElementById("cameraControlsDetails");
const micBtn = document.getElementById("micBtn");
const audioFileInput = document.getElementById("audioFileInput");
const audioFilePlayerWrap = document.getElementById("audioFilePlayerWrap");
const audioFilePlayer = document.getElementById("audioFilePlayer");
const audioFileClearBtn = document.getElementById("audioFileClearBtn");
const audioInputSource = document.getElementById("audioInputSource");
const audioTarget = document.getElementById("audioTarget");
const audioAnimation = document.getElementById("audioAnimation");
const bgMode = document.getElementById("bgMode");
const bgPalette = document.getElementById("bgPalette");
const bgColorA = document.getElementById("bgColorA");
const bgColorB = document.getElementById("bgColorB");
const recordStartBtn = document.getElementById("recordStartBtn");
const recordStartIcon = document.getElementById("recordStartIcon");
const recordPauseBtn = document.getElementById("recordPauseBtn");
const recordSaveBtn = document.getElementById("recordSaveBtn");
const recordSource = document.getElementById("recordSource");
const recordQuality = document.getElementById("recordQuality");
const recordResolution = document.getElementById("recordResolution");
const recordingIndicator = document.getElementById("recordingIndicator");
const recordingStatusText = document.getElementById("recordingStatusText");
const recordNameModal = document.getElementById("recordNameModal");
const recordNameInput = document.getElementById("recordNameInput");
const recordNameCancelBtn = document.getElementById("recordNameCancelBtn");
const recordNameSaveBtn = document.getElementById("recordNameSaveBtn");
if (recordNameModal) recordNameModal.hidden = true;
const infoLegalBtn = document.getElementById("infoLegalBtn");
const infoLegalModal = document.getElementById("infoLegalModal");
const infoLegalCloseBtn = document.getElementById("infoLegalCloseBtn");
if (infoLegalModal) infoLegalModal.hidden = true;
const learnBtn = document.getElementById("learnBtn");
const learnModal = document.getElementById("learnModal");
const learnCloseBtn = document.getElementById("learnCloseBtn");
if (learnModal) learnModal.hidden = true;
const aspectRatioSelect = document.getElementById("aspectRatioSelect");
const cameraDeckControls = document.getElementById("cameraDeckControls");
const openCleanOutputBtn = document.getElementById("openCleanOutputBtn");
const closeCleanOutputBtn = document.getElementById("closeCleanOutputBtn");
const uiLiveBtn = document.getElementById("uiLiveBtn");
const uiEditBtn = document.getElementById("uiEditBtn");
const modSource = document.getElementById("modSource");
const modTarget = document.getElementById("modTarget");
const modAmount = document.getElementById("modAmount");
const modSmoothing = document.getElementById("modSmoothing");
const modClamp = document.getElementById("modClamp");
const performanceStatus = document.getElementById("performanceStatus");
const canvasMiniResolution = document.getElementById("canvasMiniResolution");
const canvasMiniFps = document.getElementById("canvasMiniFps");
const canvasMiniLoad = document.getElementById("canvasMiniLoad");
function ensureLiveRouteButtons() {
  const container = document.querySelector("#moduleRouteHint .module-route-switch");
  if (!container) return;
  const defs = [
    { route: "glitch", icon: "GL", label: "Glitch" },
    { route: "fractal", icon: "FR", label: "Fractal" },
    { route: "depth", icon: "3D", label: "3D" },
    { route: "particles", icon: "PT", label: "Particles" },
    { route: "lines", icon: "LN", label: "Lines" },
    { route: "tunnel", icon: "TN", label: "Tunnel" },
    { route: "interior", icon: "IR", label: "Interior" },
    { route: "atlas", icon: "MO", label: "Morpho" },
    { route: "materia", icon: "MB", label: "Materia" },
    { route: "code", icon: "CD", label: "Code" },
  ];
  defs.forEach(({ route, icon, label }) => {
    if (container.querySelector(`.module-route-btn[data-module-route="${route}"]`)) return;
    const btn = document.createElement("button");
    btn.className = "btn module-route-btn";
    btn.dataset.moduleRoute = route;
    const iconSpan = document.createElement("span");
    iconSpan.className = "live-mode-icon";
    iconSpan.textContent = icon;
    const labelSpan = document.createElement("span");
    labelSpan.textContent = label;
    btn.append(iconSpan, labelSpan);
    container.appendChild(btn);
  });
  moduleRouteButtons = [...document.querySelectorAll(".module-route-btn")];
}
ensureLiveRouteButtons();
const performanceHint = document.getElementById("performanceHint");
const moduleLoadStatus = document.getElementById("moduleLoadStatus");
const webcamSetupControls = document.getElementById("webcamSetupControls");
const webcamFramingSelect = document.getElementById("webcamFramingSelect");
const canvasRenderQualitySelect = document.getElementById("canvasRenderQualitySelect");
const freezeBtn = document.getElementById("freezeBtn");
const panicBtn = document.getElementById("panicBtn");
const snapshotSaveBtn = document.getElementById("snapshotSaveBtn");
const snapshotLoadBtn = document.getElementById("snapshotLoadBtn");
const snapshotClearBtn = document.getElementById("snapshotClearBtn");
const snapshotSlots = [...document.querySelectorAll(".snapshot-slot")];
const depthPad = document.getElementById("depthPad");
const depthPadDot = document.getElementById("depthPadDot");
const liveModeGlitchBtn = document.getElementById("liveModeGlitchBtn");
const liveModeFractalBtn = document.getElementById("liveModeFractalBtn");
const liveMode3dBtn = document.getElementById("liveMode3dBtn");
const liveModeParticlesBtn = document.getElementById("liveModeParticlesBtn");
const liveModeLinesBtn = document.getElementById("liveModeLinesBtn");
const liveModeReadout = document.getElementById("liveModeReadout");
const liveModeReadoutText = document.getElementById("liveModeReadoutText");
const liveAudioStartBtn = document.getElementById("liveAudioStartBtn");
const liveAudioPauseBtn = document.getElementById("liveAudioPauseBtn");
const liveAudioInputPicker = document.getElementById("liveAudioInputPicker");
const liveAudioInputQuick = document.getElementById("liveAudioInputQuick");
const liveAudioTargetQuick = document.getElementById("liveAudioTargetQuick");
const liveAudioSensitivityQuick = document.getElementById("liveAudioSensitivityQuick");
const liveAudioToleranceQuick = document.getElementById("liveAudioToleranceQuick");
const liveAudioPad = document.getElementById("liveAudioPad");
const liveAudioPadDot = document.getElementById("liveAudioPadDot");
const liveAudioPadScope = document.getElementById("liveAudioPadScope");
const liveAudioPadScopeCtx = liveAudioPadScope ? liveAudioPadScope.getContext("2d") : null;
const liveAudioStatusQuick = document.getElementById("liveAudioStatusQuick");
const liveAudioFileMini = document.getElementById("liveAudioFileMini");
const liveAudioFileControls = document.getElementById("liveAudioFileControls");
const liveAudioFileName = document.getElementById("liveAudioFileName");
const liveAudioPlayPauseBtn = document.getElementById("liveAudioPlayPauseBtn");
const liveAudioSeek = document.getElementById("liveAudioSeek");
const liveAudioTime = document.getElementById("liveAudioTime");
const liveAudioClearBtn = document.getElementById("liveAudioClearBtn");
const liveAudioWaveform = document.getElementById("liveAudioWaveform");
const liveAudioWaveCtx = liveAudioWaveform ? liveAudioWaveform.getContext("2d") : null;
const livePaneGlitch = document.getElementById("livePaneGlitch");
const livePaneFractal = document.getElementById("livePaneFractal");
const livePane3d = document.getElementById("livePane3d");
const livePaneParticles = document.getElementById("livePaneParticles");
const livePaneLines = document.getElementById("livePaneLines");
const livePaneTunnel = document.getElementById("livePaneTunnel");
const livePaneInterior = document.getElementById("livePaneInterior");
const livePaneAtlas = document.getElementById("livePaneAtlas");
const livePaneMateria = document.getElementById("livePaneMateria");
const livePaneCode = document.getElementById("livePaneCode");
const livePaneSynth = document.getElementById("livePaneSynth");
const liveLinesDensity = document.getElementById("liveLinesDensity");
const liveLinesPreset = document.getElementById("liveLinesPreset");
const liveLinesStyle = document.getElementById("liveLinesStyle");
const liveLinesPattern = document.getElementById("liveLinesPattern");
const liveLinesGeometry = document.getElementById("liveLinesGeometry");
const liveLinesCameraMode = document.getElementById("liveLinesCameraMode");
const liveLinesBeatFlip = document.getElementById("liveLinesBeatFlip");
const liveLinesMacro = document.getElementById("liveLinesMacro");
const liveLinesThickness = document.getElementById("liveLinesThickness");
const liveLinesCurvature = document.getElementById("liveLinesCurvature");
const liveLinesDepth = document.getElementById("liveLinesDepth");
const liveLinesLayerOffset = document.getElementById("liveLinesLayerOffset");
const liveLinesColorShift = document.getElementById("liveLinesColorShift");
const liveLinesSpeed = document.getElementById("liveLinesSpeed");
const liveLinesCamDrift = document.getElementById("liveLinesCamDrift");
const liveLinesInsideDepth = document.getElementById("liveLinesInsideDepth");
const liveLinesStringVibe = document.getElementById("liveLinesStringVibe");
const liveLinesConstellation = document.getElementById("liveLinesConstellation");
const liveTunnelPreset = document.getElementById("liveTunnelPreset");
const liveTunnelCameraMode = document.getElementById("liveTunnelCameraMode");
const liveTunnelAudio = document.getElementById("liveTunnelAudio");
const liveTunnelDensity = document.getElementById("liveTunnelDensity");
const liveTunnelDepth = document.getElementById("liveTunnelDepth");
const liveTunnelSpeed = document.getElementById("liveTunnelSpeed");
const liveTunnelTwist = document.getElementById("liveTunnelTwist");
const liveTunnelMesh = document.getElementById("liveTunnelMesh");
const liveTunnelPoints = document.getElementById("liveTunnelPoints");
const liveTunnelGlow = document.getElementById("liveTunnelGlow");
const liveTunnelAudioAmount = document.getElementById("liveTunnelAudioAmount");
const liveInteriorPreset = document.getElementById("liveInteriorPreset");
const liveInteriorCameraMode = document.getElementById("liveInteriorCameraMode");
const liveInteriorAudio = document.getElementById("liveInteriorAudio");
const liveInteriorDensity = document.getElementById("liveInteriorDensity");
const liveInteriorDepth = document.getElementById("liveInteriorDepth");
const liveInteriorSpeed = document.getElementById("liveInteriorSpeed");
const liveInteriorWave = document.getElementById("liveInteriorWave");
const liveInteriorGlitch = document.getElementById("liveInteriorGlitch");
const liveInteriorGlow = document.getElementById("liveInteriorGlow");
const liveInteriorAudioAmount = document.getElementById("liveInteriorAudioAmount");
const liveAtlasPreset = document.getElementById("liveAtlasPreset");
const liveAtlasSeed = document.getElementById("liveAtlasSeed");
const liveAtlasVariation = document.getElementById("liveAtlasVariation");
const liveAtlasComposition = document.getElementById("liveAtlasComposition");
const liveAtlasComplexity = document.getElementById("liveAtlasComplexity");
const liveAtlasMotion = document.getElementById("liveAtlasMotion");
const liveAtlasContrast = document.getElementById("liveAtlasContrast");
const liveAtlasColorMod = document.getElementById("liveAtlasColorMod");
const liveAtlasMesh = document.getElementById("liveAtlasMesh");
const liveAtlasSpheres = document.getElementById("liveAtlasSpheres");
const liveAtlasAudio = document.getElementById("liveAtlasAudio");
const liveAtlasAudioAmount = document.getElementById("liveAtlasAudioAmount");
const liveMateriaPreset = document.getElementById("liveMateriaPreset");
const liveMateriaSeed = document.getElementById("liveMateriaSeed");
const liveMateriaFlow = document.getElementById("liveMateriaFlow");
const liveMateriaPorosity = document.getElementById("liveMateriaPorosity");
const liveMateriaLayers = document.getElementById("liveMateriaLayers");
const liveMateriaDrift = document.getElementById("liveMateriaDrift");
const liveMateriaContrast = document.getElementById("liveMateriaContrast");
const liveMateriaAudio = document.getElementById("liveMateriaAudio");
const liveMateriaAudioAmount = document.getElementById("liveMateriaAudioAmount");
const liveCodePreset = document.getElementById("liveCodePreset");
const liveCodeCameraMode = document.getElementById("liveCodeCameraMode");
const liveCodeDensity = document.getElementById("liveCodeDensity");
const liveCodeSpeed = document.getElementById("liveCodeSpeed");
const liveCodeZoom = document.getElementById("liveCodeZoom");
const liveCodeLetters = document.getElementById("liveCodeLetters");
const liveCodeFigure = document.getElementById("liveCodeFigure");
const liveCodeLanguage = document.getElementById("liveCodeLanguage");
const liveCodeGlow = document.getElementById("liveCodeGlow");
const liveCodeBrightness = document.getElementById("liveCodeBrightness");
const liveCodeCamTolerance = document.getElementById("liveCodeCamTolerance");
const liveCodeAudio = document.getElementById("liveCodeAudio");
const liveCodeAudioAmount = document.getElementById("liveCodeAudioAmount");
const liveFractalPreset = document.getElementById("liveFractalPreset");
const liveFractalQuality = document.getElementById("liveFractalQuality");
const liveFractalBehavior = document.getElementById("liveFractalBehavior");
const liveFractalAudioMode = document.getElementById("liveFractalAudioMode");
const liveFractalCameraMode = document.getElementById("liveFractalCameraMode");
const liveFractalDomeMode = document.getElementById("liveFractalDomeMode");
const liveFractalVariant = document.getElementById("liveFractalVariant");
const liveFractalCamSpeed = document.getElementById("liveFractalCamSpeed");
const liveFractalDistance = document.getElementById("liveFractalDistance");
const liveFractalShape = document.getElementById("liveFractalShape");
const liveFractalShapeB = document.getElementById("liveFractalShapeB");
const liveFractalShapeMorph = document.getElementById("liveFractalShapeMorph");
const liveFractalSymmetry = document.getElementById("liveFractalSymmetry");
const liveFractalPower = document.getElementById("liveFractalPower");
const liveFractalFog = document.getElementById("liveFractalFog");
const liveFractalGlow = document.getElementById("liveFractalGlow");
const liveFractalLight = document.getElementById("liveFractalLight");
const liveFractalSpin = document.getElementById("liveFractalSpin");
const liveFractalBreath = document.getElementById("liveFractalBreath");
const liveFractalFlow = document.getElementById("liveFractalFlow");
const liveFractalWarmth = document.getElementById("liveFractalWarmth");
const liveFractalTexture = document.getElementById("liveFractalTexture");
const liveFractalTexture2 = document.getElementById("liveFractalTexture2");
const liveFractalTextureBlend = document.getElementById("liveFractalTextureBlend");
const liveFractalOverlayLock = document.getElementById("liveFractalOverlayLock");
const liveFractalTextureMix = document.getElementById("liveFractalTextureMix");
const liveFractalPalette = document.getElementById("liveFractalPalette");
const liveFractalRenderMode = document.getElementById("liveFractalRenderMode");
const liveFractalOptical = document.getElementById("liveFractalOptical");
const liveFractalOpticalAmount = document.getElementById("liveFractalOpticalAmount");
const liveFractalPolygonize = document.getElementById("liveFractalPolygonize");
const liveFractalWireStrength = document.getElementById("liveFractalWireStrength");
const liveFractalPointOverlay = document.getElementById("liveFractalPointOverlay");
const liveFractalStyle = document.getElementById("liveFractalStyle");
const liveFractalBackground = document.getElementById("liveFractalBackground");
const liveFractalFlatColor = document.getElementById("liveFractalFlatColor");
const liveFractalAudio = document.getElementById("liveFractalAudio");
const liveFractalAudioGain = document.getElementById("liveFractalAudioGain");
const liveGlitchIntensity = document.getElementById("liveGlitchIntensity");
const liveGlitchColor = document.getElementById("liveGlitchColor");
const liveGlitchError = document.getElementById("liveGlitchError");
const liveGlitchTracking = document.getElementById("liveGlitchTracking");
const liveGlitchTrail = document.getElementById("liveGlitchTrail");
const liveGlitchAnim = document.getElementById("liveGlitchAnim");
const live3dPoints = document.getElementById("live3dPoints");
const live3dMesh = document.getElementById("live3dMesh");
const live3dPointOpacity = document.getElementById("live3dPointOpacity");
const live3dMeshOpacity = document.getElementById("live3dMeshOpacity");
const live3dDepthWarp = document.getElementById("live3dDepthWarp");
const live3dSeparation = document.getElementById("live3dSeparation");
const live3dBackground = document.getElementById("live3dBackground");
const live3dOrganic = document.getElementById("live3dOrganic");
const live3dLightingMode = document.getElementById("live3dLightingMode");
const live3dLight = document.getElementById("live3dLight");
const live3dExposure = document.getElementById("live3dExposure");
const live3dAmbient = document.getElementById("live3dAmbient");
const live3dLightAzimuth = document.getElementById("live3dLightAzimuth");
const live3dLightElevation = document.getElementById("live3dLightElevation");
const live3dFxMode = document.getElementById("live3dFxMode");
const live3dFxAmount = document.getElementById("live3dFxAmount");
const live3dAudioSync = document.getElementById("live3dAudioSync");
const live3dAnaglyph = document.getElementById("live3dAnaglyph");
const live3dAnaglyphStrength = document.getElementById("live3dAnaglyphStrength");
const liveModeRandomBtn = document.getElementById("liveModeRandomBtn");
const masterFxDetails = document.getElementById("masterFxDetails");
const masterFxMode = document.getElementById("masterFxMode");
const masterFxSummaryStatus = document.getElementById("masterFxSummaryStatus");
const masterFxAmount = document.getElementById("masterFxAmount");
const masterFxSpeed = document.getElementById("masterFxSpeed");
const masterFxColor = document.getElementById("masterFxColor");
const masterFxPad = document.getElementById("masterFxPad");
const masterFxPadDot = document.getElementById("masterFxPadDot");
const kaleidoFxDetails = document.getElementById("kaleidoFxDetails");
const kaleidoFxEnabled = document.getElementById("kaleidoFxEnabled");
const kaleidoFxType = document.getElementById("kaleidoFxType");
const kaleidoFxSummaryStatus = document.getElementById("kaleidoFxSummaryStatus");
const kaleidoFxAmount = document.getElementById("kaleidoFxAmount");
const kaleidoFxSpeed = document.getElementById("kaleidoFxSpeed");
const kaleidoFxSmooth = document.getElementById("kaleidoFxSmooth");
const kaleidoFxSegments = document.getElementById("kaleidoFxSegments");
const kaleidoFxZoom = document.getElementById("kaleidoFxZoom");
const kaleidoFxPad = document.getElementById("kaleidoFxPad");
const kaleidoFxPadDot = document.getElementById("kaleidoFxPadDot");
const liveCameraMode = document.getElementById("liveCameraMode");
const live3dRenderEngine = document.getElementById("live3dRenderEngine");
const liveGlitchPad = document.getElementById("liveGlitchPad");
const liveGlitchPadDot = document.getElementById("liveGlitchPadDot");
const liveGlitchPadB = document.getElementById("liveGlitchPadB");
const liveGlitchPadBDot = document.getElementById("liveGlitchPadBDot");
const liveGlitchPadC = document.getElementById("liveGlitchPadC");
const liveGlitchPadCDot = document.getElementById("liveGlitchPadCDot");
const live3dPointsPad = document.getElementById("live3dPointsPad");
const live3dPointsPadDot = document.getElementById("live3dPointsPadDot");
const live3dMeshPad = document.getElementById("live3dMeshPad");
const live3dMeshPadDot = document.getElementById("live3dMeshPadDot");
const live3dPadB = document.getElementById("live3dPadB");
const live3dPadBDot = document.getElementById("live3dPadBDot");
const live3dCamPad = document.getElementById("live3dCamPad");
const live3dCamPadDot = document.getElementById("live3dCamPadDot");
const live3dRotPad = document.getElementById("live3dRotPad");
const live3dRotPadDot = document.getElementById("live3dRotPadDot");
const live3dColorPad = document.getElementById("live3dColorPad");
const live3dColorPadDot = document.getElementById("live3dColorPadDot");
const live3dBgMode = document.getElementById("live3dBgMode");
const live3dBgPalette = document.getElementById("live3dBgPalette");
const live3dBgColorA = document.getElementById("live3dBgColorA");
const live3dBgColorB = document.getElementById("live3dBgColorB");
const liveParticlesCount = document.getElementById("liveParticlesCount");
const liveParticlesEmitter = document.getElementById("liveParticlesEmitter");
const liveParticlesSize = document.getElementById("liveParticlesSize");
const liveParticlesDepth = document.getElementById("liveParticlesDepth");
const liveParticlesNoise = document.getElementById("liveParticlesNoise");
const liveParticlesAttractor = document.getElementById("liveParticlesAttractor");
const liveParticlesFlow = document.getElementById("liveParticlesFlow");
const liveParticlesCamMode = document.getElementById("liveParticlesCamMode");
const liveParticlesCamSpeed = document.getElementById("liveParticlesCamSpeed");
const liveParticlesCamX = document.getElementById("liveParticlesCamX");
const liveParticlesCamY = document.getElementById("liveParticlesCamY");
const liveParticlesCamZ = document.getElementById("liveParticlesCamZ");
const liveParticlesColorMode = document.getElementById("liveParticlesColorMode");
const liveParticlesHue = document.getElementById("liveParticlesHue");
const liveParticlesAudio = document.getElementById("liveParticlesAudio");
const liveParticlesAudioAmount = document.getElementById("liveParticlesAudioAmount");
const liveParticlesFaceTrack = document.getElementById("liveParticlesFaceTrack");
const liveParticlesFaceDelay = document.getElementById("liveParticlesFaceDelay");
const liveParticlesFaceAmount = document.getElementById("liveParticlesFaceAmount");
const liveParticlesTrail = document.getElementById("liveParticlesTrail");
const liveParticlesFxStyle = document.getElementById("liveParticlesFxStyle");
const liveParticlesFxAmount = document.getElementById("liveParticlesFxAmount");
const liveParticlesStructure = document.getElementById("liveParticlesStructure");
const liveParticlesAudioSplit = document.getElementById("liveParticlesAudioSplit");
const liveParticlesOrder = document.getElementById("liveParticlesOrder");
const liveParticlesDamping = document.getElementById("liveParticlesDamping");
const liveParticlesVortex = document.getElementById("liveParticlesVortex");
const liveParticlesSpawn = document.getElementById("liveParticlesSpawn");
const liveParticlesMotionThreshold = document.getElementById("liveParticlesMotionThreshold");
const liveParticlesDrift = document.getElementById("liveParticlesDrift");
const liveParticlesFocus = document.getElementById("liveParticlesFocus");
const liveParticlesGradientMode = document.getElementById("liveParticlesGradientMode");
const liveParticlesColorMix = document.getElementById("liveParticlesColorMix");
const liveParticlesGradientSpread = document.getElementById("liveParticlesGradientSpread");
const liveParticlesGradientA = document.getElementById("liveParticlesGradientA");
const liveParticlesGradientB = document.getElementById("liveParticlesGradientB");
const liveSynthPreset = document.getElementById("liveSynthPreset");
const liveSynthBlend = document.getElementById("liveSynthBlend");
const liveSynthEcho = document.getElementById("liveSynthEcho");
const liveSynthSlit = document.getElementById("liveSynthSlit");
const liveSynthAxis = document.getElementById("liveSynthAxis");
const liveSynthDrift = document.getElementById("liveSynthDrift");
const liveSynthColor = document.getElementById("liveSynthColor");
const liveSynthAudio = document.getElementById("liveSynthAudio");
const liveSynthAudioAmount = document.getElementById("liveSynthAudioAmount");
const liveSynthPad = document.getElementById("liveSynthPad");
const liveSynthPadDot = document.getElementById("liveSynthPadDot");
const liveParticlesBgMode = document.getElementById("liveParticlesBgMode");
const liveParticlesBgPalette = document.getElementById("liveParticlesBgPalette");
const liveParticlesBgColorA = document.getElementById("liveParticlesBgColorA");
const liveParticlesBgColorB = document.getElementById("liveParticlesBgColorB");
const liveOutputView = document.getElementById("liveOutputView");
const domePreset = document.getElementById("domePreset");
const domeAutoTuneByMode = document.getElementById("domeAutoTuneByMode");
const domeSourceMap = document.getElementById("domeSourceMap");
const domeProjection = document.getElementById("domeProjection");
const domeWarp = document.getElementById("domeWarp");
const domeOverscan = document.getElementById("domeOverscan");
const domeEdgeFeather = document.getElementById("domeEdgeFeather");
const domeRimClamp = document.getElementById("domeRimClamp");
const domeSeamBlend = document.getElementById("domeSeamBlend");
const domeTilt = document.getElementById("domeTilt");
let domeRotate = document.getElementById("domeRotate");
let domeAutoRotate = document.getElementById("domeAutoRotate");
let domeAutoRotateSpeed = document.getElementById("domeAutoRotateSpeed");
const domeGrid = document.getElementById("domeGrid");
const modCurve = document.getElementById("modCurve");
const liveModPad = document.getElementById("liveModPad");
const liveModPadDot = document.getElementById("liveModPadDot");
const languageSelect = document.getElementById("languageSelect");
const themeModeSelect = document.getElementById("themeModeSelect");
const workflowTabs = [...document.querySelectorAll(".workflow-tab")];
const studioModeGlitchBtn = document.getElementById("studioModeGlitchBtn");
const studioModeFractalBtn = document.getElementById("studioModeFractalBtn");
const studioMode3dBtn = document.getElementById("studioMode3dBtn");
const studioModeParticlesBtn = document.getElementById("studioModeParticlesBtn");
const studioParticlesStructure = document.getElementById("studioParticlesStructure");
const studioParticlesAudioSplit = document.getElementById("studioParticlesAudioSplit");
const studioParticlesOrder = document.getElementById("studioParticlesOrder");
const studioParticlesDrift = document.getElementById("studioParticlesDrift");
const studioParticlesFocus = document.getElementById("studioParticlesFocus");
const studioParticlesDamping = document.getElementById("studioParticlesDamping");
const studioParticlesVortex = document.getElementById("studioParticlesVortex");
const studioParticlesSpawn = document.getElementById("studioParticlesSpawn");
const studioParticlesMotionThreshold = document.getElementById("studioParticlesMotionThreshold");
const studioParticlesGradientMode = document.getElementById("studioParticlesGradientMode");
const studioParticlesColorMix = document.getElementById("studioParticlesColorMix");
const studioParticlesGradientSpread = document.getElementById("studioParticlesGradientSpread");
const studioParticlesGradientA = document.getElementById("studioParticlesGradientA");
const studioParticlesGradientB = document.getElementById("studioParticlesGradientB");
const studioFractalPadA = document.getElementById("studioFractalPadA");
const studioFractalPadADot = document.getElementById("studioFractalPadADot");
const studioFractalPadB = document.getElementById("studioFractalPadB");
const studioFractalPadBDot = document.getElementById("studioFractalPadBDot");
const workspacePanels = {
  setup: document.getElementById("panelSetup"),
  live: document.getElementById("panelLive"),
  studio: document.getElementById("panelStudio"),
};
const audioHelpText = document.getElementById("audioHelpText");
const audioRouteStatus = document.getElementById("audioRouteStatus");
const modeInputs = [...document.querySelectorAll('input[name="mode"]')];
const modeGroups = [...document.querySelectorAll(".mode-group")];

const glitchIds = [
  "rgbShift",
  "lineJitter",
  "noiseAmount",
  "saltPepper",
  "pixelSize",
  "waveDistort",
  "blockShift",
  "dataBands",
  "byteCorrupt",
  "chromaBleed",
  "pixelSort",
  "ditherAmount",
  "colorBlend",
  "pixelMelt",
  "subjectGhost",
  "ghostCopies",
  "ghostShift",
  "polygonTrack",
  "scanlineIntensity",
  "bloom",
  "posterize",
  "hueShift",
  "saturation",
  "contrast",
  "invertBlend",
  "solarize",
  "motionTrail",
  "trailDecay",
  "trailThreshold",
  "trailSoftness",
  "trailMotionOnly",
  "animDistort",
  "animSpeed",
  "vhsDrift",
  "tapeNoise",
  "headSwitch",
  "errorComplexity",
];

const fractalIds = [
  "kaleidoSegments",
  "kaleidoLayers",
  "layerEcho",
  "kaleidoTwist",
  "fractalZoom",
  "fractalPulse",
  "spiralAmount",
  "spiralTurns",
  "mandalaPetals",
  "mandalaBloom",
  "psychedelic",
  "colorCycle",
];

const depthIds = [
  "depthStrength",
  "depthShift",
  "depthView",
  "pointMap",
  "pointDensity",
  "pointSize",
  "live3dPointOpacity",
  "live3dMeshOpacity",
  "live3dDepthWarp",
  "pointFloat",
  "pointOrganic",
  "pointLift",
  "pointRotateX",
  "pointRotateY",
  "pointRotateZ",
  "meshMap",
  "meshDensity",
  "meshLift",
  "glitch3d",
  "ambientLight",
  "lightEnabled",
  "flatIllustrated",
  "lightIntensity",
  "live3dExposure",
  "live3dAmbient",
  "live3dLightAzimuth",
  "live3dLightElevation",
  "lightAzimuth",
  "lightElevation",
  "sceneExposure",
  "cameraZoom",
  "cameraFollow",
  "autoRotate",
  "pointColorShift",
  "meshColorShift",
  "meshGlow",
  "pointColorPulse",
  "depthColorWave",
  "depthExaggeration",
  "pointSpread",
  "bgMotion",
  "audioSensitivity",
  "audioTolerance",
  "audioPointsIntensity",
  "audioMeshIntensity",
  "audioAnimVariation",
];

const allIds = [...glitchIds, ...fractalIds, ...depthIds];
const controls = Object.fromEntries(allIds.map((id) => [id, document.getElementById(id)]));
const metaControls = [modAmount, modSmoothing, modClamp].filter(Boolean);

const defaults = {
  rgbShift: 0,
  lineJitter: 0,
  noiseAmount: 0,
  saltPepper: 0,
  pixelSize: 1,
  waveDistort: 0,
  blockShift: 0,
  dataBands: 0,
  byteCorrupt: 0,
  chromaBleed: 0,
  pixelSort: 0,
  ditherAmount: 0,
  colorBlend: 0,
  pixelMelt: 0,
  subjectGhost: 0,
  ghostCopies: 1,
  ghostShift: 0,
  polygonTrack: 0,
  scanlineIntensity: 0,
  bloom: 0,
  posterize: 40,
  hueShift: 0,
  saturation: 100,
  contrast: 100,
  invertBlend: 0,
  solarize: 0,
  motionTrail: 0,
  trailDecay: 68,
  trailThreshold: 42,
  trailSoftness: 40,
  trailMotionOnly: 80,
  animDistort: 0,
  animSpeed: 40,
  vhsDrift: 0,
  tapeNoise: 0,
  headSwitch: 0,
  errorComplexity: 0,
  kaleidoSegments: 1,
  kaleidoLayers: 1,
  layerEcho: 0,
  kaleidoTwist: 0,
  fractalZoom: 100,
  fractalPulse: 0,
  spiralAmount: 0,
  spiralTurns: 8,
  mandalaPetals: 8,
  mandalaBloom: 0,
  psychedelic: 0,
  colorCycle: 0,
  depthStrength: 0,
  depthShift: 0,
  depthView: 0,
  pointMap: 0,
  pointDensity: 20,
  pointSize: 2,
  live3dPointOpacity: 100,
  live3dMeshOpacity: 100,
  live3dDepthWarp: 0,
  pointFloat: 0,
  pointOrganic: 0,
  pointLift: 0,
  pointRotateX: 0,
  pointRotateY: 0,
  pointRotateZ: 0,
  meshMap: 0,
  meshDensity: 34,
  meshLift: 0,
  glitch3d: 0,
  ambientLight: 35,
  lightEnabled: 100,
  flatIllustrated: 0,
  lightIntensity: 80,
  live3dExposure: 110,
  live3dAmbient: 35,
  live3dLightAzimuth: -40,
  live3dLightElevation: 30,
  lightAzimuth: -40,
  lightElevation: 30,
  sceneExposure: 110,
  cameraZoom: 86,
  cameraFollow: 35,
  autoRotate: 0,
  pointColorShift: 0,
  meshColorShift: 0,
  meshGlow: 0,
  pointColorPulse: 0,
  depthColorWave: 0,
  depthExaggeration: 100,
  pointSpread: 0,
  bgMotion: 0,
  audioSensitivity: 52,
  audioTolerance: 32,
  audioPointsIntensity: 120,
  audioMeshIntensity: 120,
  audioAnimVariation: 100,
};

const ranges = Object.fromEntries(
  allIds.map((id) => [id, [Number(controls[id].min), Number(controls[id].max)]])
);

const modulableTargets = [
  "pointLift",
  "pointFloat",
  "meshLift",
  "depthExaggeration",
  "pointColorPulse",
  "depthColorWave",
  "glitch3d",
  "rgbShift",
  "noiseAmount",
  "lineJitter",
  "colorBlend",
  "pixelMelt",
  "polygonTrack",
  "depthStrength",
  "pointMap",
  "lightIntensity",
];

const parameterStore = Object.fromEntries(
  allIds.map((id) => [
    id,
    {
      name: id,
      min: ranges[id][0],
      max: ranges[id][1],
      defaultValue: defaults[id],
      isModulable: modulableTargets.includes(id),
      smoothingDefault: 0.6,
    },
  ])
);

const presets = {
  none: [{ label: "Clean", values: {} }],
  glitch: [
    {
      label: "VHS degrade",
      values: {
        rgbShift: 14,
        lineJitter: 18,
        noiseAmount: 22,
        saltPepper: 8,
        pixelSize: 3,
        waveDistort: 20,
        blockShift: 25,
        dataBands: 20,
        byteCorrupt: 10,
        chromaBleed: 18,
        pixelSort: 18,
        ditherAmount: 10,
        colorBlend: 14,
        pixelMelt: 10,
        vhsDrift: 34,
        tapeNoise: 28,
        headSwitch: 22,
        subjectGhost: 12,
        ghostCopies: 2,
        ghostShift: 22,
        polygonTrack: 16,
        scanlineIntensity: 24,
        bloom: 14,
        posterize: 14,
        hueShift: -8,
        saturation: 126,
        contrast: 118,
        errorComplexity: 28,
      },
    },
    {
      label: "Datamosh hard",
      values: {
        rgbShift: 32,
        lineJitter: 45,
        noiseAmount: 44,
        saltPepper: 24,
        pixelSize: 6,
        waveDistort: 28,
        blockShift: 74,
        dataBands: 56,
        byteCorrupt: 44,
        chromaBleed: 48,
        pixelSort: 42,
        ditherAmount: 24,
        colorBlend: 34,
        pixelMelt: 30,
        vhsDrift: 18,
        tapeNoise: 24,
        headSwitch: 14,
        subjectGhost: 36,
        ghostCopies: 4,
        ghostShift: 60,
        polygonTrack: 38,
        scanlineIntensity: 36,
        bloom: 22,
        posterize: 8,
        hueShift: 18,
        saturation: 142,
        contrast: 148,
        errorComplexity: 74,
      },
    },
  ],
  fractal: [
    {
      label: "Kaleido classic",
      pattern: "kaleido",
      source: "original",
      values: {
        kaleidoSegments: 8,
        kaleidoLayers: 2,
        layerEcho: 22,
        kaleidoTwist: 18,
        fractalZoom: 96,
        fractalPulse: 22,
        spiralAmount: 8,
        spiralTurns: 9,
        mandalaPetals: 8,
        mandalaBloom: 10,
        psychedelic: 26,
        colorCycle: 25,
      },
    },
    {
      label: "Sacred geometry",
      pattern: "hybrid",
      source: "glitch",
      values: {
        kaleidoSegments: 12,
        kaleidoLayers: 4,
        layerEcho: 44,
        kaleidoTwist: 46,
        fractalZoom: 120,
        fractalPulse: 74,
        spiralAmount: 32,
        spiralTurns: 15,
        mandalaPetals: 14,
        mandalaBloom: 56,
        psychedelic: 68,
        colorCycle: 108,
      },
    },
  ],
  depth: [
    {
      label: "3D starter",
      values: {
        depthStrength: 64,
        depthShift: 24,
        depthView: 8,
        pointMap: 76,
        pointDensity: 16,
        pointSize: 3,
        pointFloat: 24,
        pointLift: 56,
        pointRotateX: 10,
        pointRotateY: -10,
        pointRotateZ: 0,
        meshMap: 42,
        meshDensity: 28,
        meshLift: 48,
        glitch3d: 10,
        ambientLight: 38,
        lightIntensity: 110,
        lightAzimuth: -30,
        lightElevation: 26,
        sceneExposure: 122,
        cameraZoom: 82,
        cameraFollow: 35,
        autoRotate: 12,
        pointColorShift: 32,
        pointColorPulse: 28,
        depthColorWave: 34,
        depthExaggeration: 128,
        pointSpread: 18,
        bgMotion: 42,
      },
    },
    {
      label: "Scanner mesh",
      values: {
        depthStrength: 76,
        depthShift: 32,
        depthView: 18,
        pointMap: 44,
        pointDensity: 20,
        pointSize: 2,
        pointFloat: 30,
        pointLift: 66,
        pointRotateX: 18,
        pointRotateY: 14,
        pointRotateZ: 8,
        meshMap: 88,
        meshDensity: 20,
        meshLift: 72,
        glitch3d: 26,
        ambientLight: 28,
        lightIntensity: 124,
        lightAzimuth: 38,
        lightElevation: 22,
        sceneExposure: 138,
        cameraZoom: 90,
        cameraFollow: 24,
        autoRotate: 24,
        pointColorShift: 88,
        pointColorPulse: 46,
        depthColorWave: 52,
        depthExaggeration: 172,
        pointSpread: 34,
        bgMotion: 58,
      },
    },
  ],
  mix: [
    {
      label: "Neo rave total",
      pattern: "hybrid",
      source: "glitch",
      values: {
        rgbShift: 18,
        lineJitter: 24,
        noiseAmount: 24,
        saltPepper: 12,
        pixelSize: 3,
        waveDistort: 14,
        blockShift: 30,
        dataBands: 24,
        byteCorrupt: 18,
        chromaBleed: 20,
        pixelSort: 24,
        ditherAmount: 18,
        colorBlend: 26,
        pixelMelt: 20,
        vhsDrift: 20,
        tapeNoise: 16,
        headSwitch: 14,
        subjectGhost: 18,
        ghostCopies: 3,
        ghostShift: 38,
        polygonTrack: 24,
        scanlineIntensity: 20,
        bloom: 14,
        posterize: 16,
        hueShift: 22,
        saturation: 162,
        contrast: 132,
        errorComplexity: 46,
        kaleidoSegments: 10,
        kaleidoLayers: 3,
        layerEcho: 30,
        kaleidoTwist: 30,
        fractalZoom: 104,
        fractalPulse: 48,
        spiralAmount: 26,
        spiralTurns: 12,
        mandalaPetals: 10,
        mandalaBloom: 38,
        psychedelic: 52,
        colorCycle: 74,
        depthStrength: 56,
        depthShift: 22,
        depthView: 6,
        pointMap: 58,
        pointDensity: 18,
        pointSize: 3,
        pointFloat: 18,
        pointLift: 56,
        pointRotateX: 10,
        pointRotateY: -12,
        pointRotateZ: 7,
        meshMap: 48,
        meshDensity: 30,
        meshLift: 46,
        glitch3d: 14,
        ambientLight: 34,
        lightIntensity: 108,
        lightAzimuth: -25,
        lightElevation: 24,
        sceneExposure: 130,
        cameraZoom: 86,
        cameraFollow: 35,
        autoRotate: 14,
        pointColorShift: 60,
        pointColorPulse: 32,
        depthColorWave: 28,
        depthExaggeration: 142,
        pointSpread: 22,
        bgMotion: 46,
      },
    },
  ],
};

let mode = "none";
let originalImageData = null;
let renderPending = false;
let randomSeed = 1;
let pointerTiltX = 0;
let pointerTiltY = 0;
let dragRotateX = 0;
let dragRotateY = 0;
let isDragging3D = false;
let lastDragX = 0;
let lastDragY = 0;
let linesCamYaw = 0;
let linesCamPitch = 0;
let linesCamDist = 1.1;
let linesCamYawTarget = 0;
let linesCamPitchTarget = 0;
let linesCamDistTarget = 1.1;
let linesAudioBassSmooth = 0;
let linesAudioMidSmooth = 0;
let linesAudioHighSmooth = 0;
let linesAudioEnergySmooth = 0;
let linesStringVibeSmooth = 0;
let linesBeatCooldown = 0;
let linesBeatPulse = 0;
let linesInvertSign = 1;
let linesInvertBlend = 1;
let linesConstellationNodes = [];
let linesConstellationCacheKey = "";
let linesConstellationTick = 0;
let linesGlowSmooth = 0;
let linesNeonSmooth = 0;
let atlasCamYaw = 0;
let atlasCamPitch = 0;
let atlasCamDist = 1.04;
let atlasCamYawTarget = 0;
let atlasCamPitchTarget = 0;
let atlasCamDistTarget = 1.04;
let atlasMorphTween = null;
let atlasSeedSmooth = 52;
let atlasVariationSmooth = 58;
let atlasCompositionSmooth = 58;
let atlasComplexitySmooth = 22;
let atlasMotionSmooth = 46;
let atlasContrastSmooth = 56;
let atlasColorModSmooth = 62;
let atlasMeshSmooth = 46;
let atlasSpheresSmooth = 36;
let atlasAudioBassSmooth = 0;
let atlasAudioMidSmooth = 0;
let atlasAudioHighSmooth = 0;
let atlasAudioEnergySmooth = 0;
let atlasCamRig = 0;
let atlasCamRigTarget = 0;
let materiaCamYaw = 0;
let materiaCamPitch = 0;
let materiaCamDist = 1.02;
let materiaCamYawTarget = 0;
let materiaCamPitchTarget = 0;
let materiaCamDistTarget = 1.02;
let materiaMorphTween = null;
let materiaSeedSmooth = 2424;
let materiaFlowSmooth = 58;
let materiaPorositySmooth = 48;
let materiaLayersSmooth = 52;
let materiaDriftSmooth = 42;
let materiaContrastSmooth = 54;
let materiaAudioBassSmooth = 0;
let materiaAudioMidSmooth = 0;
let materiaAudioHighSmooth = 0;
let materiaAudioEnergySmooth = 0;
let codeRainDrops = new Float32Array(0);
let codeRainSpeeds = new Float32Array(0);
let codeRainSeeds = new Float32Array(0);
let codeRainCols = 0;
let codeRainFontPx = 14;
let codeRainCharStep = 12;
let codeRainCamX = 0;
let codeRainCamY = 0;
let codeRainCamXTarget = 0;
let codeRainCamYTarget = 0;
let codeRainEnergySmooth = 0;
let codeRainFigurePhase = 0;
let codeRainPresetTween = null;
let codeRainTextMaskCanvas = null;
let codeRainTextMaskCtx = null;
let codeRainTextMaskW = 0;
let codeRainTextMaskH = 0;
let tunnelCamYaw = 0;
let tunnelCamPitch = 0;
let tunnelCamDist = 1.08;
let tunnelCamYawTarget = 0;
let tunnelCamPitchTarget = 0;
let tunnelCamDistTarget = 1.08;
let tunnelAudioBassSmooth = 0;
let tunnelAudioMidSmooth = 0;
let tunnelAudioHighSmooth = 0;
let tunnelAudioEnergySmooth = 0;
let tunnelMorphTween = null;
let tunnelDiameterTarget = 1;
let tunnelDiameterSmooth = 1;
let tunnelDiameterCursorActive = false;
let interiorCamYaw = 0;
let interiorCamPitch = 0;
let interiorCamDist = 1.04;
let interiorCamYawTarget = 0;
let interiorCamPitchTarget = 0;
let interiorCamDistTarget = 1.04;
let interiorAudioBassSmooth = 0;
let interiorAudioMidSmooth = 0;
let interiorAudioHighSmooth = 0;
let interiorAudioEnergySmooth = 0;
let interiorAudioSeparationSmooth = 0;
let interiorGlitchDriveSmooth = 0;
let interiorDensitySmooth = 22;
let interiorDepthSmooth = 78;
let interiorSpeedSmooth = 34;
let interiorWaveSmooth = 56;
let interiorGlitchSmooth = 42;
let interiorGlowSmooth = 44;
let interiorMorphTween = null;
let interiorCursorX = 0.5;
let interiorCursorY = 0.5;
let interiorCursorXTarget = 0.5;
let interiorCursorYTarget = 0.5;
let interiorLayerZDisp = new Float32Array(0);
let interiorLayerZVel = new Float32Array(0);
let interiorLayerNoise = new Float32Array(0);
let isDraggingDome = false;
let lastDomeDragX = 0;
let lastDomeDragY = 0;
let domeViewYaw = 0;
let domeViewPitch = 0;
let domeAutoSeamU = 0.5;
let domeSeamCacheKey = "";
let domeAutoYaw = 0;
let domeAutoYawVel = 0;
let lastDomeAnimTs = performance.now();
let domePresetApplying = false;
let domeWarpScaleSmooth = 1;
let domeWarpFrameCounter = 0;
let particlesBufferN = 0;
let particlesBufferW = 0;
let particlesBufferH = 0;
let particlesX = null;
let particlesY = null;
let particlesZ = null;
let particlesVX = null;
let particlesVY = null;
let particlesVZ = null;
let particlesLife = null;
let particlesU = null;
let particlesV = null;
let particlesSeed = null;
let particlesActiveN = 0;
let particlesDrawStride = 1;
let particlesPerfStreak = 0;
let particlesCamXSmooth = 0;
let particlesCamYSmooth = 0;
let particlesCamZSmooth = 0;
let particlesCamAnimTime = 0;
let particlesCamLastTs = performance.now();
let particlesCamModePrev = "static";
let particlesCamModeBlendStart = 0;
let particlesCamSpeedSmooth = 0;
let synthEchoSmooth = 0;
let synthSlitSmooth = 0;
let particlesRandomTween = null;
let particlesCameraTween = null;
let particlesWarmupUntil = 0;
let depthMorphTween = null;
let fractalMorphTween = null;
let fractalCameraTween = null;
let fractalAudioBassSmooth = 0;
let fractalAudioMidSmooth = 0;
let fractalAudioHighSmooth = 0;
let fractalAudioEnergySmooth = 0;
let kaleidoMorphTween = null;
let kaleidoSegSmooth = 12;
let kaleidoFxScaleSmooth = 0.66;
const KALEIDO_TYPES = ["tunnel", "mirror", "radial", "spiral", "mandala", "yantra", "organic", "petals", "moire", "lotus", "lattice"];
const KALEIDO_DEFAULT_TYPE = "tunnel";
const DOME_PRESETS = {
  "live-safe": {
    sourceMap: "standard",
    projection: "equisolid",
    warp: 70,
    overscan: 6,
    edgeFeather: 18,
    rimClamp: 28,
    seamBlend: 22,
    tilt: 0,
    rotate: 0,
    autoRotate: false,
    autoSpeed: 18,
    grid: 0,
  },
  glitch: {
    sourceMap: "standard",
    projection: "equisolid",
    warp: 74,
    overscan: 8,
    edgeFeather: 24,
    rimClamp: 38,
    seamBlend: 30,
    tilt: 0,
    rotate: 0,
    autoRotate: false,
    autoSpeed: 16,
    grid: 0,
  },
  depth: {
    sourceMap: "standard",
    projection: "equisolid",
    warp: 68,
    overscan: 5,
    edgeFeather: 16,
    rimClamp: 24,
    seamBlend: 18,
    tilt: 0,
    rotate: 0,
    autoRotate: false,
    autoSpeed: 14,
    grid: 0,
  },
  particles: {
    sourceMap: "standard",
    projection: "equisolid",
    warp: 72,
    overscan: 7,
    edgeFeather: 20,
    rimClamp: 34,
    seamBlend: 24,
    tilt: 0,
    rotate: 0,
    autoRotate: false,
    autoSpeed: 16,
    grid: 0,
  },
  fractal: {
    sourceMap: "standard",
    projection: "equisolid",
    warp: 76,
    overscan: 8,
    edgeFeather: 26,
    rimClamp: 40,
    seamBlend: 24,
    tilt: 0,
    rotate: 0,
    autoRotate: false,
    autoSpeed: 12,
    grid: 0,
  },
  equirect180: {
    sourceMap: "equirect",
    projection: "equisolid",
    warp: 72,
    overscan: 8,
    edgeFeather: 22,
    rimClamp: 32,
    seamBlend: 48,
    tilt: 0,
    rotate: 0,
    autoRotate: false,
    autoSpeed: 18,
    grid: 0,
  },
};
let particlesGpuReady = false;
let particlesGpuTriedInit = false;
let particlesGpu = null;
let particlesGpuForcedOff = false;
const fractalGlCanvas = document.createElement("canvas");
let fractalGl = null;
let smoothCamFollow = null;
let smoothCamZoom = null;
let smoothRotX = null;
let smoothRotY = null;
let smoothRotZ = null;
let smoothMotionRx = null;
let smoothMotionRy = null;
let smoothMotionRz = null;
let smoothMotionZoom = null;
let smoothMotionPanX = null;
let smoothMotionPanY = null;
let targetPanX = null;
let targetPanY = null;
let targetCamFollow = null;
let targetCamZoom = null;
let targetRotX = null;
let targetRotY = null;
let targetRotZ = null;
let cameraFlowEase = 0;
let gestureBaseZoom = null;
let targetPointHue = null;
let targetMeshHue = null;
let smoothPointHue = null;
let smoothMeshHue = null;
let targetMeshAmount = null;
let targetMeshLift = null;
let smoothMeshAmount = null;
let smoothMeshLift = null;
let webcamStream = null;
let webcamActive = false;
let selectedCameraDeviceId = "";
let recordingActive = false;
let cameraMode = "static";
let cameraModePrev = "static";
let cameraModeBlendStart = 0;
let micStream = null;
let micActive = false;
let audioFileActive = false;
let audioFileUrl = "";
let audioFileElementSource = null;
let audioSourceNode = null;
let audioAnalyserMonitor = false;
let audioCtx = null;
let analyser = null;
let audioData = null;
let audioTimeData = null;
let audioLevel = 0;
let liveRecorder = null;
let liveRecordingStream = null;
let liveDisplayStream = null;
let liveRecordingChunks = [];
let liveRecordingState = "idle";
let liveRecordingExt = "webm";
let liveRecordingMimeType = "";
let liveRecordingVideoBitrate = 8_000_000;
let liveRecordingAudioBitrate = 192_000;
let liveRecordCanvas = null;
let liveRecordCtx = null;
let liveRecordDrawTimer = null;
let recordNameDialogResolve = null;
let livePausePending = false;
let liveFinalizePending = false;
let faceDetector = null;
let handDetector = null;
let detectedFaces = [];
let detectedHands = [];
let particlesFaceHistory = [];
let lastFaceDetectTs = 0;
let trackingDetectBusy = false;
let cleanOutputWindow = null;
let cleanOutputCanvas = null;
let cleanOutputCtx = null;
let cleanOutputLastTs = 0;
let cleanOutputFrameSkip = 1;
let loadedImage = null;
let noInputModeActive = false;
const noInputCanvas = document.createElement("canvas");
const noInputCtx = noInputCanvas.getContext("2d", { willReadFrequently: true });
let noInputLastRefreshMs = 0;
let placeholderAnimRaf = 0;
let locale = "es";
let uiMode = "live";
let liveActiveTab = "glitch";
let studioActiveTab = "glitch";
let currentWorkspacePanel = "setup";
let liveGlitchPadDragging = false;
let liveGlitchPadBDragging = false;
let liveGlitchPadCDragging = false;
let liveSynthPadDragging = false;
let freezeFrame = false;
let frozenImageData = null;
let fps = 60;
let lastFpsTs = performance.now();
let fpsFrames = 0;
let lastRenderTs = performance.now();
let perfScale = 1;
let adaptivePostFxScale = 1;
let postFxFrameCounter = 0;
let masterFxAmountSmooth = 0;
let masterFxSpeedSmooth = 0;
let masterFxColorSmooth = 0;
let masterFxSmoothMode = "";
let depthRenderEngine = "gpu";
let depthGpuAvailable = false;
let gpu3dWarned = false;
let modSignalSmoothed = 0;
let transientEnergy = 0;
let lastBandEnergy = 0;
let audioNoiseFloor = 0.02;
let audioReactiveEnv = 0;
let liveAudioWaveLevels = new Float32Array(32);
let liveAudioWaveLastDrawMs = 0;
let currentSnapshotSlot = 1;
let bgSyncMode = false;
const snapshots = new Array(8).fill(null);
const audioFeatures = {
  rms: 0,
  bands: [0, 0, 0, 0],
  transient: 0,
};
const visualFeatures = {
  luma: 0,
  motion: 0,
};
let prevVisualProbe = null;
const cameraKeyState = { up: false, down: false, left: false, right: false };
let cameraPanX = 0;
let cameraPanY = 0;
let smoothCameraModeSpeed = 1;
let cameraAnimTime = 0;
let lastCameraAnimTs = performance.now();
let stageGeomPrevCx = null;
let stageGeomPrevCy = null;
let stageGeomMotionX = 0;
let stageGeomMotionY = 0;
let bgColorTween = null;
let glitchTrailBuffer = null;
let glitchPrevFrame = null;
let glitchTrailW = 0;
let glitchTrailH = 0;
let glitchScratchLen = 0;
let glitchScratchA = null;
let glitchScratchB = null;
let glitchMaskScratch = null;
const glitchSortLum = new Float32Array(64);
const glitchSortR = new Uint8Array(64);
const glitchSortG = new Uint8Array(64);
const glitchSortB = new Uint8Array(64);
let cleanFront3dActive = false;
let cleanFront3dSnapshot = null;
let lastCameraShuffleTs = 0;
let cameraShufflePhase = Math.random() * Math.PI * 2;
let fractalCamYaw = 0;
let fractalCamPitch = 0;
let fractalCamYawTarget = 0;
let fractalCamPitchTarget = 0;
let fractalCamDistSmooth = 3.9;
let renderErrorCount = 0;

const LIVE_CANVAS_MAX_W = 1180;
const LIVE_CANVAS_MAX_H = 760;
const EXPORT_CANVAS_MAX_W = 3840;
const EXPORT_CANVAS_MAX_H = 2160;
const THEME_STORAGE_KEY = "bzual.theme.mode";
let runtimeIsTouch = false;
let runtimeIsTablet = false;
let runtimeIsPhone = false;
let viewportResizeTimer = null;
let lastAudioPadVisualTs = 0;

const i18n = {
  es: {
    brand_left: "PIXEL ERROR LAB 2000",
    brand_right: "B.ZU.AL Studios",
    info_btn: "Info",
    info_title: "B.ZU.AL Studios · Info legal",
    info_subtitle: "Términos y avisos clave para uso de la app en visuales en vivo.",
    info_identity: "Identidad del proyecto: Pixel Error Lab 2000 es creación de B.ZU.AL Estudio (B.ZU.AL Studios).",
    info_author: "Autoría: B.ZU.AL Studios. Todos los derechos reservados sobre marca, diseño y código no licenciado explícitamente.",
    info_use: "Uso: Permitido para pruebas, rehearsals y shows. No redistribuir ni revender esta versión sin autorización escrita.",
    info_privacy: "Privacidad: Cámara/micrófono/audio se procesan localmente en el navegador; no se suben por defecto a servidores de la app.",
    info_media: "Contenido: El usuario es responsable de derechos de imagen, audio, video y material importado.",
    info_health: "Salud visual: Algunos modos pueden incluir destellos/contraste alto. Úsalo con precaución en personas fotosensibles.",
    info_thirdparty: "Terceros: La app puede usar APIs/librerías del navegador y servicios externos de hosting/deploy.",
    info_version: "Estado: Versión beta en evolución continua para performance visual en vivo.",
    info_close: "Cerrar",
    learn_btn: "Aprender",
    learn_title: "Guía rápida · Shortcuts",
    learn_subtitle: "Atajos para empezar rápido y jugar en vivo.",
    learn_intro: "Cómo jugar: Carga imagen/webcam, activa audio reactivo, elige módulo y prueba atajos.",
    learn_shortcut_r: "R: Random del módulo actual (no afecta AudioPad).",
    learn_shortcut_t: "T: Cambio de cámara rápido (salto).",
    learn_shortcut_y: "Y: Cambio de cámara suave (morph).",
    learn_shortcut_o: "O: Morph visual del módulo activo.",
    learn_shortcut_j: "J: Cambiar tipo de Kaleidoscopio.",
    learn_shortcut_k: "K: Activar/Desactivar Kaleidoscopio.",
    learn_shortcut_arrows_ud: "Flechas Arriba/Abajo: Cambiar Master FX.",
    learn_shortcut_arrows_lr: "Flechas Izquierda/Derecha: Cambiar módulo Live.",
    learn_shortcut_b: "B: Baseline Live Safe (estable).",
    learn_shortcut_space: "Espacio: Freeze/Unfreeze.",
    learn_shortcut_p: "P: Panic reset seguro.",
    learn_shortcut_snap: "1-8: Cargar sesión · Shift+1-8: Guardar sesión.",
    learn_tip: "Tip: Usa el AudioPad (X sensibilidad, Y tolerancia) para afinar cuánto se mueve con la música.",
    learn_close: "Cerrar",
    aspect_ratio: "Relación de aspecto",
    webcam_framing: "Encuadre webcam",
    framing_smart: "Relleno inteligente",
    framing_contain: "Completa (sin recorte)",
    framing_cover: "Llenar (recorte)",
    render_quality: "Calidad render",
    quality_auto: "Auto",
    quality_high: "Alta",
    quality_ultra: "Ultra",
    language: "Idioma",
    ui_live: "Live",
    ui_edit: "Edit",
    tab_setup: "Setup",
    tab_live: "Live",
    tab_studio: "Studio",
    setup_title: "Entrada + Ruteo",
    live_title: "Performance Rack",
    live_audio_quick: "Audio Inicio Rápido",
    live_audio_toggle: "Activar audio reactivo",
    live_audio_load: "Cargar archivo de audio",
    now_playing: "Reproduciendo",
    play: "Play",
    studio_title: "Studio Avanzado",
    studio_glitch: "Studio Glitch",
    studio_fractal: "Studio Fractal",
    studio_3d: "Studio 3D",
    studio_particles: "Studio Partículas",
    load_image: "Cargar Imagen",
    preset: "Preset",
    enable_webcam: "Activar webcam",
    camera_device: "Dispositivo de cámara",
    camera_auto: "Automática",
    refresh_cameras: "Refrescar cámaras",
    theme_mode: "Tema de interfaz",
    theme_light: "Claro",
    theme_dark: "Oscuro",
    enable_mic: "Activar mic",
    load_audio: "Cargar audio",
    clear_audio: "Quitar audio",
    mode_clean: "Clean",
    mode_glitch: "Glitch",
    mode_fractal: "Fractal",
    mode_depth: "3D Stage",
    mode_particles: "Partículas",
    mode_mix: "Mix All",
    audio_reactive: "Audio Reactivo",
    audio_input: "Entrada de Audio",
    audio_input_mic: "Micrófono",
    audio_input_file: "Archivo de audio",
    audio_input_system: "Audio interno / dispositivo",
    audio_target: "Objetivo",
    audio_target_points: "Puntos",
    audio_target_mesh: "Malla",
    audio_target_both: "Todos los módulos",
    audio_animation: "Animación",
    audio_anim_lift: "Elevación",
    audio_anim_wave: "Onda",
    audio_anim_color: "Color",
    audio_anim_all: "Todo",
    audio_sensitivity: "Sensibilidad de Audio",
    audio_tolerance: "Tolerancia de Audio",
    active_filter: "Filtro activo",
    audio_points_intensity: "Intensidad Audio en Puntos",
    audio_mesh_intensity: "Intensidad Audio en Malla",
    audio_anim_variation: "Variación de Animación Audio",
    audio_help:
      "El audio del sistema usa compartir pantalla/pestaña en navegadores. Activa 'Share audio' en el selector.",
    status_realtime: "Realtime ON. Clean mode = imagen original.",
    module_load: "Carga módulo",
    load_low: "BAJA",
    load_medium: "MEDIA",
    load_high: "ALTA",
    quick3d: "3D Starter",
    quick3d_clean: "3D Limpio Frontal (M)",
    modulation: "Modulación",
    mod_source: "Fuente",
    mod_target: "Destino",
    mod_amount: "Cantidad",
    mod_smoothing: "Suavizado",
    mod_clamp: "Clamp",
    freeze: "Freeze",
    panic: "Panic",
    live_safe_btn: "Live Safe (B)",
    snapshot_save: "Snapshot Save",
    sessions_title: "Sesiones",
    sessions_hint: "Shift+1..8 guardar, 1..8 cargar",
    sessions_save: "Guardar sesión",
    sessions_load: "Cargar sesión",
    sessions_clear: "Borrar slot",
    random: "Random",
    reseed: "Re-seed",
    reset: "Reset",
    save_png: "Guardar PNG",
    visualization_deck: "Visualization Deck",
    camera_modes: "Modos de Cámara",
    camera_controls: "Controles de cámara",
    cam_static: "Static",
    cam_cursor: "Cursor",
    cam_orbit: "Orbit",
    cam_sweep: "Sweep X",
    cam_pulse: "Dolly Pulse",
    cam_helix: "Helix",
    cam_drift: "Drift Glitch",
    cam_liquid: "Líquido",
    camera_move_speed: "Velocidad de Cámara",
    fx3d_filter: "Filtro FX 3D",
    fx3d_amount: "Cantidad FX 3D",
    recording: "Grabación",
    record_source: "Fuente de Grabación",
    record_source_canvas: "Canva limpio",
    record_source_screen: "Pantalla",
    record_quality: "Calidad de grabación",
    record_quality_low: "Baja",
    record_quality_medium: "Media",
    record_quality_high: "Alta",
    record_resolution: "Resolución de grabación",
    record_resolution_auto: "Auto (canvas)",
    record_name_title: "B.ZU.AL Studios",
    record_name_subtitle: "¿Cómo quieres guardar esta grabación?",
    record_name_label: "Nombre del archivo",
    record_name_hint: "Se agregará automáticamente: - B.ZU.AL Studios Clip",
    record_name_cancel: "Cancelar",
    record_name_save: "Guardar",
    record: "Grabar",
    record_start: "Grabar",
    record_pause: "Pausar",
    record_resume: "Reanudar",
    record_status_idle: "IDLE",
    record_status_recording: "REC",
    record_status_paused: "PAUSA",
    record_short: "Rec",
    save_short: "Guardar",
    save_recording: "Guardar Grabación",
    exports: "Exportes",
    export_video: "Exportar Video 5s",
    export_gif: "Exportar GIF 5s*",
    export_photo: "Foto HQ",
    clean_output: "Salida Limpia LIVE HQ",
    clean_output_note: "Señal LIVE optimizada para proyección limpia en máxima calidad.",
    open_clean_output: "Abrir Salida Limpia LIVE",
    close_clean_output: "Cerrar Salida Limpia LIVE",
    footer_mouse: "Mouse: inclinación 3D + arrastre orbital",
    footer_engine: "Render Engine 2K",
    footer_legal_short: "Pixel Error Lab 2000 · Creación de B.ZU.AL Estudio",
    pause: "Pausar",
    webcam_enable: "Activar webcam",
    webcam_disable: "Desactivar webcam",
    mic_enable: "Activar mic",
    mic_disable: "Desactivar mic",
    resume: "Reanudar",
    no_preset: "Sin preset",
    placeholder_title: "CARGA IMAGEN // MODO CLEAN",
    placeholder_subtitle: "Deck listo: glitch / 3d stage / live",
    popup_blocked: "No pude abrir la salida limpia. Permite popups para este sitio.",
    image_load_error: "No pude cargar esa imagen.",
    webcam_unavailable: "Tu navegador no permite cámara aquí. Abre la app en https:// o en http://localhost.",
    webcam_secure: "La webcam requiere contexto seguro. Usa https:// o http://localhost (no file://).",
    webcam_fail: "No se pudo activar la webcam",
    mic_unavailable: "Tu navegador no permite micrófono aquí. Usa https:// o http://localhost.",
    mic_secure: "El micrófono requiere contexto seguro. Usa https:// o http://localhost.",
    mic_fail: "No se pudo activar el micrófono",
    mic_hint_system:
      "Para audio del sistema: usa Chrome/Edge, comparte pantalla/pestaña y activa 'Share audio'. En macOS no siempre hay audio de sistema disponible.",
    mic_hint_regular: "Revisa permisos del navegador y del sistema.",
    export_unsupported: "Tu navegador no soporta exportar video desde canvas.",
    export_gif_fallback: "GIF no está soportado por este navegador; exporté WebM.",
    export_mp4_fallback: "MP4 no está soportado en este navegador para MediaRecorder; exporté WebM.",
    recording_unsupported: "Tu navegador no soporta grabación desde canvas.",
    recording_screen_fail:
      "No se pudo iniciar grabación de pantalla. En Safari debes permitir compartir pantalla y elegir la ventana/pantalla correcta.",
    recording_mp4_required:
      "MP4 no está disponible en este navegador/configuración. En Safari actualizado suele estar disponible; si no, prueba la opción de Canvas o usa Chrome.",
    recording_webm_notice: "Tu navegador grabó en WebM; MP4 no está habilitado por MediaRecorder en este entorno.",
    audio_help_mic: "Micrófono normal: toma audio de tu entrada física.",
    audio_help_system:
      "Audio del sistema: el navegador pide compartir pantalla/pestaña para capturar sonido interno.",
    audio_status_idle: "Audio: inactivo",
    audio_status_mic: "Audio: micrófono activo",
    audio_status_file: "Audio: archivo activo",
    audio_status_system: "Audio: captura de sistema/pestaña activa",
    input_none: "Entrada: ninguna",
    input_webcam: "Entrada: Webcam",
    input_image: "Entrada: Imagen",
    input_frame: "Entrada: Frame",
    input_active: "Entrada activa",
    input_active_none: "Ninguna",
    input_active_webcam: "Webcam",
    input_active_image: "Imagen",
    input_active_noinput: "Sin input",
    auto_performance: "Auto rendimiento",
    slot_saved: "guardado",
    slot_empty: "vacío",
  },
  en: {
    brand_left: "PIXEL ERROR LAB 2000",
    brand_right: "B.ZU.AL Studios",
    info_btn: "Info",
    info_title: "B.ZU.AL Studios · Legal Info",
    info_subtitle: "Key terms and notices for using the app in live visuals.",
    info_identity: "Project identity: Pixel Error Lab 2000 is a creation by B.ZU.AL Estudio (B.ZU.AL Studios).",
    info_author: "Authorship: B.ZU.AL Studios. All rights reserved on brand, design, and code not explicitly licensed.",
    info_use: "Use: Allowed for tests, rehearsals, and shows. Do not redistribute or resell this version without written authorization.",
    info_privacy: "Privacy: Camera/microphone/audio are processed locally in the browser; they are not uploaded to app servers by default.",
    info_media: "Content: The user is responsible for image, audio, video, and imported media rights.",
    info_health: "Visual health: Some modes may include flashes/high contrast. Use with caution for photosensitive audiences.",
    info_thirdparty: "Third parties: The app may rely on browser APIs/libraries and external hosting/deploy services.",
    info_version: "Status: Beta version in continuous evolution for live visual performance.",
    info_close: "Close",
    learn_btn: "Learn",
    learn_title: "Quick Guide · Shortcuts",
    learn_subtitle: "Shortcuts to start fast and play live.",
    learn_intro: "How to play: Load image/webcam, enable audio reactive, pick a module, and try shortcuts.",
    learn_shortcut_r: "R: Random on current module (AudioPad is preserved).",
    learn_shortcut_t: "T: Quick camera jump.",
    learn_shortcut_y: "Y: Smooth camera morph.",
    learn_shortcut_o: "O: Visual morph on active module.",
    learn_shortcut_j: "J: Change Kaleidoscope type.",
    learn_shortcut_k: "K: Toggle Kaleidoscope.",
    learn_shortcut_arrows_ud: "Up/Down arrows: Change Master FX.",
    learn_shortcut_arrows_lr: "Left/Right arrows: Change Live module.",
    learn_shortcut_b: "B: Live Safe baseline (stable).",
    learn_shortcut_space: "Space: Freeze/Unfreeze.",
    learn_shortcut_p: "P: Safe panic reset.",
    learn_shortcut_snap: "1-8: Load session · Shift+1-8: Save session.",
    learn_tip: "Tip: Use AudioPad (X sensitivity, Y tolerance) to tune movement against the music.",
    learn_close: "Close",
    aspect_ratio: "Aspect Ratio",
    webcam_framing: "Webcam Framing",
    framing_smart: "Smart Fill",
    framing_contain: "Contain (no crop)",
    framing_cover: "Cover (crop)",
    render_quality: "Render Quality",
    quality_auto: "Auto",
    quality_high: "High",
    quality_ultra: "Ultra",
    language: "Language",
    ui_live: "Live",
    ui_edit: "Edit",
    tab_setup: "Setup",
    tab_live: "Live",
    tab_studio: "Studio",
    setup_title: "Input + Routing",
    live_title: "Performance Rack",
    live_audio_quick: "Audio Quick Start",
    live_audio_toggle: "Enable Audio React",
    live_audio_load: "Load Audio File",
    now_playing: "Now Playing",
    play: "Play",
    studio_title: "Advanced Studio",
    studio_glitch: "Glitch Studio",
    studio_fractal: "Fractal Studio",
    studio_3d: "3D Studio",
    studio_particles: "Particles Studio",
    load_image: "Load Image",
    preset: "Preset",
    enable_webcam: "Enable Webcam",
    camera_device: "Camera Device",
    camera_auto: "Auto",
    refresh_cameras: "Refresh Cameras",
    theme_mode: "Interface Theme",
    theme_light: "Light",
    theme_dark: "Dark",
    enable_mic: "Enable Mic",
    load_audio: "Load Audio",
    clear_audio: "Clear Audio",
    mode_clean: "Clean",
    mode_glitch: "Glitch",
    mode_fractal: "Fractal",
    mode_depth: "3D Stage",
    mode_particles: "Particles",
    mode_mix: "Mix All",
    audio_reactive: "Audio Reactive",
    audio_input: "Audio Input",
    audio_input_mic: "Microphone",
    audio_input_file: "Audio File",
    audio_input_system: "System / Device Audio",
    audio_target: "Target",
    audio_target_points: "Points",
    audio_target_mesh: "Mesh",
    audio_target_both: "All modules",
    audio_animation: "Animation",
    audio_anim_lift: "Lift",
    audio_anim_wave: "Wave",
    audio_anim_color: "Color",
    audio_anim_all: "All",
    audio_sensitivity: "Audio Sensitivity",
    audio_tolerance: "Audio Tolerance",
    active_filter: "Active Filter",
    audio_points_intensity: "Points Audio Intensity",
    audio_mesh_intensity: "Mesh Audio Intensity",
    audio_anim_variation: "Audio Animation Variation",
    audio_help: "System audio uses screen/tab sharing on browsers. Enable 'Share audio' in the picker.",
    status_realtime: "Realtime ON. Clean mode = original image.",
    module_load: "Module load",
    load_low: "LOW",
    load_medium: "MED",
    load_high: "HIGH",
    quick3d: "3D Starter",
    quick3d_clean: "3D Clean Front (M)",
    modulation: "Modulation",
    mod_source: "Source",
    mod_target: "Target",
    mod_amount: "Amount",
    mod_smoothing: "Smoothing",
    mod_clamp: "Clamp",
    freeze: "Freeze",
    panic: "Panic",
    live_safe_btn: "Live Safe (B)",
    snapshot_save: "Snapshot Save",
    sessions_title: "Sessions",
    sessions_hint: "Shift+1..8 save, 1..8 load",
    sessions_save: "Save Session",
    sessions_load: "Load Session",
    sessions_clear: "Clear Slot",
    random: "Random",
    reseed: "Re-seed",
    reset: "Reset",
    save_png: "Save PNG",
    visualization_deck: "Visualization Deck",
    camera_modes: "Camera Modes",
    camera_controls: "Camera Controls",
    cam_static: "Static",
    cam_cursor: "Cursor",
    cam_orbit: "Orbit",
    cam_sweep: "Sweep X",
    cam_pulse: "Dolly Pulse",
    cam_helix: "Helix",
    cam_drift: "Drift Glitch",
    cam_liquid: "Liquid",
    camera_move_speed: "Camera Speed",
    fx3d_filter: "3D FX Filter",
    fx3d_amount: "3D FX Amount",
    recording: "Recording",
    record_source: "Record Source",
    record_source_canvas: "Clean Canvas",
    record_source_screen: "Screen",
    record_quality: "Record Quality",
    record_quality_low: "Low",
    record_quality_medium: "Medium",
    record_quality_high: "High",
    record_resolution: "Record Resolution",
    record_resolution_auto: "Auto (canvas)",
    record_name_title: "B.ZU.AL Studios",
    record_name_subtitle: "How do you want to save this recording?",
    record_name_label: "File name",
    record_name_hint: "Will append automatically: - B.ZU.AL Studios Clip",
    record_name_cancel: "Cancel",
    record_name_save: "Save",
    record: "Record",
    record_start: "Record",
    record_pause: "Pause",
    record_resume: "Resume",
    record_status_idle: "IDLE",
    record_status_recording: "REC",
    record_status_paused: "PAUSED",
    record_short: "Rec",
    save_short: "Save",
    save_recording: "Save Recording",
    exports: "Exports",
    export_video: "Export 5s Video",
    export_gif: "Export 5s GIF*",
    export_photo: "Photo HQ",
    clean_output: "Clean Output LIVE HQ",
    clean_output_note: "LIVE signal optimized for maximum clean projection quality.",
    open_clean_output: "Open Clean Output LIVE",
    close_clean_output: "Close Clean Output LIVE",
    footer_mouse: "Mouse: 3D tilt + drag orbit",
    footer_engine: "Render Engine 2K",
    footer_legal_short: "Pixel Error Lab 2000 · Created by B.ZU.AL Estudio",
    pause: "Pause",
    webcam_enable: "Enable Webcam",
    webcam_disable: "Disable Webcam",
    mic_enable: "Enable Mic",
    mic_disable: "Disable Mic",
    resume: "Resume",
    no_preset: "No preset",
    placeholder_title: "LOAD IMAGE // CLEAN MODE",
    placeholder_subtitle: "Deck ready: glitch / 3d stage / live",
    popup_blocked: "Could not open clean output. Please allow popups for this site.",
    image_load_error: "Could not load that image.",
    webcam_unavailable: "Your browser cannot access camera here. Open the app on https:// or http://localhost.",
    webcam_secure: "Webcam needs a secure context. Use https:// or http://localhost (not file://).",
    webcam_fail: "Could not enable webcam",
    mic_unavailable: "Your browser cannot access microphone here. Use https:// or http://localhost.",
    mic_secure: "Microphone needs a secure context. Use https:// or http://localhost.",
    mic_fail: "Could not enable microphone",
    mic_hint_system:
      "For system audio: use Chrome/Edge, share screen or tab, and enable 'Share audio'. On macOS, system audio is not always available.",
    mic_hint_regular: "Check browser and OS permissions.",
    export_unsupported: "Your browser does not support canvas video export.",
    export_gif_fallback: "GIF is not supported in this browser; exported WebM instead.",
    export_mp4_fallback: "MP4 is not supported by MediaRecorder here; exported WebM instead.",
    recording_unsupported: "Your browser does not support recording from canvas.",
    recording_screen_fail:
      "Could not start screen recording. In Safari, allow screen sharing and select the correct window/screen.",
    recording_mp4_required:
      "MP4 is not available in this browser/setup. Updated Safari usually supports it; if not, try Canvas source or Chrome.",
    recording_webm_notice: "Your browser recorded WebM; MP4 is not available via MediaRecorder in this environment.",
    audio_help_mic: "Regular mic mode: captures sound from your physical microphone.",
    audio_help_system:
      "System audio mode: browser asks for screen/tab sharing to capture internal audio.",
    audio_status_idle: "Audio: idle",
    audio_status_mic: "Audio: microphone active",
    audio_status_file: "Audio: file active",
    audio_status_system: "Audio: system/tab capture active",
    input_none: "Input: none",
    input_webcam: "Input: Webcam",
    input_image: "Input: Image",
    input_frame: "Input: Frame",
    input_active: "Active input",
    input_active_none: "None",
    input_active_webcam: "Webcam",
    input_active_image: "Image",
    input_active_noinput: "No input",
    auto_performance: "Auto performance",
    slot_saved: "saved",
    slot_empty: "empty",
  },
};

const fxCanvas = document.createElement("canvas");
const fxCtx = fxCanvas.getContext("2d", { willReadFrequently: true });
const glitchWorkCanvas = document.createElement("canvas");
const glitchWorkCtx = glitchWorkCanvas.getContext("2d", { willReadFrequently: true });
const fractalCanvas = document.createElement("canvas");
const fractalCtx = fractalCanvas.getContext("2d", { willReadFrequently: true });
const tileCanvas = document.createElement("canvas");
const tileCtx = tileCanvas.getContext("2d", { willReadFrequently: true });
const stageFxCanvas = document.createElement("canvas");
const stageFxCtx = stageFxCanvas.getContext("2d", { willReadFrequently: true });
const stagePrevCanvas = document.createElement("canvas");
const stagePrevCtx = stagePrevCanvas.getContext("2d", { willReadFrequently: true });
const masterFxCanvas = document.createElement("canvas");
const masterFxCtx = masterFxCanvas.getContext("2d", { willReadFrequently: true });
const masterPrevCanvas = document.createElement("canvas");
const masterPrevCtx = masterPrevCanvas.getContext("2d", { willReadFrequently: true });
const kaleidoFxCanvas = document.createElement("canvas");
const kaleidoFxCtx = kaleidoFxCanvas.getContext("2d", { willReadFrequently: true });
const kaleidoPrevCanvas = document.createElement("canvas");
const kaleidoPrevCtx = kaleidoPrevCanvas.getContext("2d", { willReadFrequently: true });
const glitchTrailCanvas = document.createElement("canvas");
const glitchTrailCtx = glitchTrailCanvas.getContext("2d", { willReadFrequently: true });
const glitchTrailTempCanvas = document.createElement("canvas");
const glitchTrailTempCtx = glitchTrailTempCanvas.getContext("2d", { willReadFrequently: true });
const synthFrameCanvas = document.createElement("canvas");
const synthFrameCtx = synthFrameCanvas.getContext("2d", { willReadFrequently: true });
const synthPrevCanvas = document.createElement("canvas");
const synthPrevCtx = synthPrevCanvas.getContext("2d", { willReadFrequently: true });
const depthGpuCanvas = document.createElement("canvas");
let depthGpuGl = null;
let depthGpuProgram = null;
let depthGpuQuadBuffer = null;
let depthGpuSrcTex = null;
let depthGpuDstTex = null;
let depthGpuFramebuffer = null;
let depthGpuPixelBuffer = null;
let depthGpuUniforms = null;
const kaleidoGpuCanvas = document.createElement("canvas");
let kaleidoGpuGl = null;
let kaleidoGpuProgram = null;
let kaleidoGpuQuadBuffer = null;
let kaleidoGpuSrcTex = null;
let kaleidoGpuUniforms = null;

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function ensureGlitchScratch(length) {
  if (glitchScratchLen === length && glitchScratchA && glitchScratchB && glitchMaskScratch) return;
  glitchScratchLen = length;
  glitchScratchA = new Uint8ClampedArray(length);
  glitchScratchB = new Uint8ClampedArray(length);
  glitchMaskScratch = new Uint8Array(length >> 2);
}

function copyToGlitchScratch(srcData, useB = false) {
  ensureGlitchScratch(srcData.length);
  const dst = useB ? glitchScratchB : glitchScratchA;
  dst.set(srcData);
  return dst;
}

function detectGpu3dSupport() {
  try {
    const test = document.createElement("canvas");
    const gl2 = test.getContext("webgl2", { antialias: false, alpha: false });
    if (gl2) return true;
    const gl = test.getContext("webgl", { antialias: false, alpha: false }) ||
      test.getContext("experimental-webgl", { antialias: false, alpha: false });
    return Boolean(gl);
  } catch {
    return false;
  }
}

function setDepthRenderEngine(modeName) {
  const requested = modeName === "gpu" ? "gpu" : "classic";
  if (requested === "gpu" && !depthGpuAvailable) {
    depthRenderEngine = "classic";
    if (live3dRenderEngine) live3dRenderEngine.value = "classic";
    if (!gpu3dWarned) {
      gpu3dWarned = true;
      console.warn("[3D Engine] GPU Beta no disponible en este navegador/equipo. Se usa Classic CPU.");
    }
    return;
  }
  depthRenderEngine = requested;
  if (live3dRenderEngine) live3dRenderEngine.value = requested;
}

function depthGpuCompileShader(gl, type, source) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function ensureDepthGpuPrepass(width, height) {
  if (!depthGpuAvailable) return false;
  if (!depthGpuGl) {
    try {
      depthGpuGl =
        depthGpuCanvas.getContext("webgl2", { antialias: false, alpha: false, premultipliedAlpha: false }) ||
        depthGpuCanvas.getContext("webgl", { antialias: false, alpha: false, premultipliedAlpha: false }) ||
        depthGpuCanvas.getContext("experimental-webgl", { antialias: false, alpha: false, premultipliedAlpha: false });
    } catch {
      depthGpuGl = null;
    }
    if (!depthGpuGl) return false;
  }
  const gl = depthGpuGl;
  if (!depthGpuProgram) {
    const vsSource = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;
    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform sampler2D uTex;
      uniform vec2 uRes;
      uniform float uDepthStrength;
      uniform float uDepthShift;
      uniform float uDepthView;
      uniform vec2 uTilt;

      float luma(vec3 c) {
        return dot(c, vec3(0.299, 0.587, 0.114));
      }

      void main() {
        vec2 texel = 1.0 / max(uRes, vec2(1.0));
        vec3 c = texture2D(uTex, vUv).rgb;
        float lum = luma(c);
        float lr = luma(texture2D(uTex, clamp(vUv + vec2(texel.x, 0.0), vec2(0.0), vec2(1.0))).rgb);
        float ld = luma(texture2D(uTex, clamp(vUv + vec2(0.0, texel.y), vec2(0.0), vec2(1.0))).rgb);
        float edge = clamp((abs(lum - lr) + abs(lum - ld)) * 0.75, 0.0, 1.0);
        float d = clamp(lum * (0.65 + uDepthStrength * 0.45) + edge * uDepthStrength * 0.8, 0.0, 1.0);

        vec2 dispPx = vec2(
          (d - 0.5) * uDepthShift * 1.4 + uTilt.x * uDepthShift * 0.65,
          (d - 0.5) * uDepthShift * 0.8 + uTilt.y * uDepthShift * 0.55
        );
        vec2 suv = clamp(vUv + dispPx * texel, vec2(0.0), vec2(1.0));
        vec3 col = texture2D(uTex, suv).rgb;
        col = mix(col, vec3(d), clamp(uDepthView, 0.0, 1.0));
        // Encode depth in alpha for CPU-side geometry reuse (Phase 3 hybrid).
        gl_FragColor = vec4(col, d);
      }
    `;
    const vs = depthGpuCompileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = depthGpuCompileShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return false;
    const prog = gl.createProgram();
    if (!prog) return false;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      gl.deleteProgram(prog);
      return false;
    }
    depthGpuProgram = prog;
    depthGpuUniforms = {
      aPos: gl.getAttribLocation(prog, "aPos"),
      uTex: gl.getUniformLocation(prog, "uTex"),
      uRes: gl.getUniformLocation(prog, "uRes"),
      uDepthStrength: gl.getUniformLocation(prog, "uDepthStrength"),
      uDepthShift: gl.getUniformLocation(prog, "uDepthShift"),
      uDepthView: gl.getUniformLocation(prog, "uDepthView"),
      uTilt: gl.getUniformLocation(prog, "uTilt"),
    };
    depthGpuQuadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, depthGpuQuadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );
    depthGpuSrcTex = gl.createTexture();
    depthGpuDstTex = gl.createTexture();
    depthGpuFramebuffer = gl.createFramebuffer();
    if (!depthGpuSrcTex || !depthGpuDstTex || !depthGpuFramebuffer) return false;
  }

  if (depthGpuCanvas.width !== width || depthGpuCanvas.height !== height) {
    depthGpuCanvas.width = width;
    depthGpuCanvas.height = height;
    depthGpuPixelBuffer = new Uint8Array(width * height * 4);
    gl.bindTexture(gl.TEXTURE_2D, depthGpuSrcTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.bindTexture(gl.TEXTURE_2D, depthGpuDstTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, depthGpuFramebuffer);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, depthGpuDstTex, 0);
    const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    if (!ok) return false;
  }
  return true;
}

function runDepthGpuPrepass(baseImageData, settings) {
  if (!baseImageData || !ensureDepthGpuPrepass(baseImageData.width, baseImageData.height)) return null;
  const gl = depthGpuGl;
  if (!gl || !depthGpuProgram || !depthGpuUniforms || !depthGpuFramebuffer) return null;
  const w = baseImageData.width;
  const h = baseImageData.height;
  gl.viewport(0, 0, w, h);
  gl.bindFramebuffer(gl.FRAMEBUFFER, depthGpuFramebuffer);
  gl.useProgram(depthGpuProgram);
  gl.bindTexture(gl.TEXTURE_2D, depthGpuSrcTex);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, baseImageData.data);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, depthGpuSrcTex);
  gl.uniform1i(depthGpuUniforms.uTex, 0);
  gl.uniform2f(depthGpuUniforms.uRes, w, h);
  gl.uniform1f(depthGpuUniforms.uDepthStrength, clamp((settings.depthStrength || 0) / 100, 0, 1.8));
  gl.uniform1f(depthGpuUniforms.uDepthShift, clamp(settings.depthShift || 0, 0, 120));
  gl.uniform1f(depthGpuUniforms.uDepthView, clamp((settings.depthView || 0) / 100, 0, 1));
  gl.uniform2f(depthGpuUniforms.uTilt, pointerTiltX || 0, pointerTiltY || 0);
  gl.bindBuffer(gl.ARRAY_BUFFER, depthGpuQuadBuffer);
  const aPosLoc = depthGpuUniforms.aPos;
  if (aPosLoc === -1) return null;
  gl.enableVertexAttribArray(aPosLoc);
  gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  if (!depthGpuPixelBuffer || depthGpuPixelBuffer.length !== w * h * 4) {
    depthGpuPixelBuffer = new Uint8Array(w * h * 4);
  }
  gl.readPixels(0, 0, w, h, gl.RGBA, gl.UNSIGNED_BYTE, depthGpuPixelBuffer);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);

  // WebGL readPixels returns bottom-up rows; flip to top-down ImageData.
  const out = new Uint8ClampedArray(w * h * 4);
  const depthOut = new Float32Array(w * h);
  for (let y = 0; y < h; y++) {
    const srcY = h - 1 - y;
    const srcOff = srcY * w * 4;
    const dstOff = y * w * 4;
    for (let x = 0; x < w; x++) {
      const si = srcOff + x * 4;
      const di = dstOff + x * 4;
      out[di] = depthGpuPixelBuffer[si];
      out[di + 1] = depthGpuPixelBuffer[si + 1];
      out[di + 2] = depthGpuPixelBuffer[si + 2];
      out[di + 3] = 255;
      depthOut[y * w + x] = depthGpuPixelBuffer[si + 3] / 255;
    }
  }
  return {
    imageData: new ImageData(out, w, h),
    depthMap: depthOut,
  };
}

function ensureKaleidoGpuPass(width, height) {
  if (!depthGpuAvailable) return false;
  if (!kaleidoGpuGl) {
    try {
      kaleidoGpuGl =
        kaleidoGpuCanvas.getContext("webgl2", { antialias: false, alpha: false, premultipliedAlpha: false }) ||
        kaleidoGpuCanvas.getContext("webgl", { antialias: false, alpha: false, premultipliedAlpha: false }) ||
        kaleidoGpuCanvas.getContext("experimental-webgl", { antialias: false, alpha: false, premultipliedAlpha: false });
    } catch {
      kaleidoGpuGl = null;
    }
    if (!kaleidoGpuGl) return false;
  }
  const gl = kaleidoGpuGl;
  if (!kaleidoGpuProgram) {
    const vsSource = `
      attribute vec2 aPos;
      varying vec2 vUv;
      void main() {
        vUv = aPos * 0.5 + 0.5;
        gl_Position = vec4(aPos, 0.0, 1.0);
      }
    `;
    const fsSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform sampler2D uTex;
      uniform vec2 uRes;
      uniform float uTime;
      uniform float uAmount;
      uniform float uSpeed;
      uniform float uSmooth;
      uniform float uSegments;
      uniform float uType;
      uniform float uSeamSoft;
      uniform float uZoom;

      vec2 mirrorWrap(vec2 uv) {
        vec2 m = mod(uv, 2.0);
        return 1.0 - abs(m - 1.0);
      }

      vec3 sampleWrap(vec2 uv) {
        return texture2D(uTex, mirrorWrap(uv)).rgb;
      }

      void main() {
        float aspect = max(uRes.x / max(uRes.y, 1.0), 0.0001);
        vec2 p = (vUv - 0.5) * 2.0;
        p.x *= aspect;
        float r = length(p);
        float maxRNorm = max(length(vec2(aspect, 1.0)), 0.0001);
        float a = atan(p.y, p.x);
        float seg = max(4.0, uSegments);
        float sector = 6.28318530718 / seg;
        float spin = uTime * (0.08 + uSpeed * 0.45);
        a += spin;
        a = abs(mod(a + 0.5 * sector, sector) - 0.5 * sector);

        float zoom = clamp(uZoom, 0.72, 2.8);
        float rn = clamp(r / maxRNorm, 0.0, 1.0);
        float rr = rn;
        // type mapping:
        // 0 tunnel, 1 mirror, 2 radial, 3 spiral, 4 mandala,
        // 5 yantra, 6 organic, 7 petals, 8 moire, 9 lotus, 10 lattice
        if (uType < 0.5) {
          rr = pow(rn, 0.72 + uAmount * 0.34);
        } else if (uType < 1.5) {
          a = abs(mod(a + 0.5 * sector, sector) - 0.5 * sector);
          rr = rn;
        } else if (uType < 2.5) {
          a *= 0.72 + uAmount * 0.7;
        } else if (uType < 3.5) {
          a += rn * (0.25 + uAmount * 0.9);
        } else if (uType < 4.5) {
          a += sin(a * (2.0 + uSmooth * 3.2) + uTime * (0.2 + uSpeed * 0.55)) * (0.14 + uAmount * 0.55);
        } else if (uType < 5.5) {
          a += sin(a * 6.0 + rn * 8.0 + uTime * (0.15 + uSpeed * 0.4)) * (0.06 + uAmount * 0.2);
          rr *= 0.9 + 0.14 * sin(rn * 18.0 - uTime * (0.12 + uSpeed * 0.3));
        } else if (uType < 6.5) {
          a += sin(rn * 16.0 + uTime * (0.2 + uSpeed * 0.5)) * (0.18 + uAmount * 0.48);
          rr *= 0.86 + 0.2 * abs(sin(rn * 10.0 + uTime * 0.24));
        } else if (uType < 7.5) {
          rr *= 0.88 + 0.2 * abs(sin(rn * 9.0 + uTime * (0.16 + uSpeed * 0.4)));
        } else if (uType < 8.5) {
          a += sin(rn * (10.0 + uAmount * 28.0) + uTime * (0.3 + uSpeed * 0.9)) * (0.12 + uSmooth * 0.5);
        } else if (uType < 9.5) {
          rr *= 0.9 + 0.16 * sin(rn * 14.0 + uTime * (0.18 + uSpeed * 0.5));
        } else {
          a += sin(a * 8.0 - rn * 6.0 + uTime * (0.15 + uSpeed * 0.36)) * (0.08 + uAmount * 0.25);
          rr *= 0.92 + 0.12 * sin(rn * 10.0 + uTime * 0.2);
        }

        float edgeStab = smoothstep(0.72, 1.0, rn);
        float aFoldBase = abs(mod(a + 0.5 * sector, sector) - 0.5 * sector);
        a = mix(a, aFoldBase, edgeStab * 0.42);
        rr = mix(rr, rn, edgeStab * 0.58);
        rr = clamp(rr / zoom, 0.0, 1.2);
        vec2 dirA = vec2(cos(a), sin(a));
        vec2 dirB = vec2(cos(a + sector * (0.02 + uSmooth * 0.06)), sin(a + sector * (0.02 + uSmooth * 0.06)));
        vec2 uvA = vec2((dirA.x * rr) / aspect, dirA.y * rr) * 0.5 + 0.5;
        vec2 uvB = vec2((dirB.x * rr) / aspect, dirB.y * rr) * 0.5 + 0.5;
        vec3 cA = sampleWrap(uvA);
        vec3 cB = sampleWrap(uvB);
        vec3 col = mix(cA, cB, clamp(0.08 + uSmooth * 0.38, 0.08, 0.46));

        // Seam-safe blend near kaleido fold boundaries to avoid visible stitching lines.
        float seamDist = min(abs(a), abs(0.5 * sector - a));
        float seamBand = max(0.0001, sector * (0.08 + 0.18 * uSeamSoft));
        float seamMix = (1.0 - smoothstep(0.0, seamBand, seamDist)) * clamp(uSeamSoft, 0.0, 1.0);
        if (seamMix > 0.0001) {
          float seamEps = sector * (0.012 + 0.05 * uSeamSoft);
          vec2 dirP = vec2(cos(a + seamEps), sin(a + seamEps));
          vec2 dirN = vec2(cos(a - seamEps), sin(a - seamEps));
          vec2 uvP = vec2((dirP.x * rr) / aspect, dirP.y * rr) * 0.5 + 0.5;
          vec2 uvN = vec2((dirN.x * rr) / aspect, dirN.y * rr) * 0.5 + 0.5;
          vec3 seamCol = 0.5 * (sampleWrap(uvP) + sampleWrap(uvN));
          col = mix(col, seamCol, seamMix * 0.75);
        }
        gl_FragColor = vec4(col, 1.0);
      }
    `;
    const vs = depthGpuCompileShader(gl, gl.VERTEX_SHADER, vsSource);
    const fs = depthGpuCompileShader(gl, gl.FRAGMENT_SHADER, fsSource);
    if (!vs || !fs) return false;
    const prog = gl.createProgram();
    if (!prog) return false;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    gl.deleteShader(vs);
    gl.deleteShader(fs);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
      gl.deleteProgram(prog);
      return false;
    }
    kaleidoGpuProgram = prog;
    kaleidoGpuUniforms = {
      aPos: gl.getAttribLocation(prog, "aPos"),
      uTex: gl.getUniformLocation(prog, "uTex"),
      uRes: gl.getUniformLocation(prog, "uRes"),
      uTime: gl.getUniformLocation(prog, "uTime"),
      uAmount: gl.getUniformLocation(prog, "uAmount"),
      uSpeed: gl.getUniformLocation(prog, "uSpeed"),
      uSmooth: gl.getUniformLocation(prog, "uSmooth"),
      uSegments: gl.getUniformLocation(prog, "uSegments"),
      uType: gl.getUniformLocation(prog, "uType"),
      uSeamSoft: gl.getUniformLocation(prog, "uSeamSoft"),
      uZoom: gl.getUniformLocation(prog, "uZoom"),
    };
    kaleidoGpuQuadBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, kaleidoGpuQuadBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );
    kaleidoGpuSrcTex = gl.createTexture();
    if (!kaleidoGpuSrcTex) return false;
    gl.bindTexture(gl.TEXTURE_2D, kaleidoGpuSrcTex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);
  }
  if (kaleidoGpuCanvas.width !== width || kaleidoGpuCanvas.height !== height) {
    kaleidoGpuCanvas.width = width;
    kaleidoGpuCanvas.height = height;
    gl.viewport(0, 0, width, height);
  }
  return true;
}

function getKaleidoTypeCode(typeName) {
  const map = {
    tunnel: 0,
    mirror: 1,
    radial: 2,
    spiral: 3,
    mandala: 4,
    yantra: 5,
    organic: 6,
    petals: 7,
    moire: 8,
    lotus: 9,
    lattice: 10,
  };
  return map[typeName] ?? 0;
}

function applyKaleidoFxGlobalGpu(tSec, opts) {
  const { w, h, outW, outH, amount, speed, smooth, seg, selectedType, seamSoft = 0.5, zoom = 1 } = opts;
  if (!ensureKaleidoGpuPass(w, h)) return false;
  const gl = kaleidoGpuGl;
  if (!gl || !kaleidoGpuProgram || !kaleidoGpuUniforms || !kaleidoGpuSrcTex) return false;
  gl.viewport(0, 0, w, h);
  gl.useProgram(kaleidoGpuProgram);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, kaleidoGpuSrcTex);
  gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, canvas);
  gl.uniform1i(kaleidoGpuUniforms.uTex, 0);
  gl.uniform2f(kaleidoGpuUniforms.uRes, w, h);
  gl.uniform1f(kaleidoGpuUniforms.uTime, tSec || 0);
  gl.uniform1f(kaleidoGpuUniforms.uAmount, amount);
  gl.uniform1f(kaleidoGpuUniforms.uSpeed, speed);
  gl.uniform1f(kaleidoGpuUniforms.uSmooth, smooth);
  gl.uniform1f(kaleidoGpuUniforms.uSegments, seg);
  gl.uniform1f(kaleidoGpuUniforms.uType, getKaleidoTypeCode(selectedType));
  if (kaleidoGpuUniforms.uSeamSoft) gl.uniform1f(kaleidoGpuUniforms.uSeamSoft, clamp(seamSoft, 0, 1));
  if (kaleidoGpuUniforms.uZoom) gl.uniform1f(kaleidoGpuUniforms.uZoom, clamp(zoom, 0.72, 2.8));
  gl.bindBuffer(gl.ARRAY_BUFFER, kaleidoGpuQuadBuffer);
  const aPosLoc = kaleidoGpuUniforms.aPos;
  if (aPosLoc === -1) return false;
  gl.enableVertexAttribArray(aPosLoc);
  gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

  if (kaleidoFxCanvas.width !== w || kaleidoFxCanvas.height !== h) {
    kaleidoFxCanvas.width = w;
    kaleidoFxCanvas.height = h;
  }
  if (kaleidoPrevCanvas.width !== w || kaleidoPrevCanvas.height !== h) {
    kaleidoPrevCanvas.width = w;
    kaleidoPrevCanvas.height = h;
    kaleidoPrevCtx.clearRect(0, 0, w, h);
  }
  kaleidoFxCtx.clearRect(0, 0, w, h);
  kaleidoFxCtx.drawImage(kaleidoGpuCanvas, 0, 0, w, h);

  // Keep legacy temporal soft blend for continuity in look.
  if (smooth > 0.08 && fps > 30 && !recordingActive && !kaleidoMorphTween) {
    kaleidoFxCtx.save();
    kaleidoFxCtx.globalCompositeOperation = "screen";
    kaleidoFxCtx.globalAlpha = clamp(0.03 + smooth * 0.12, 0.03, 0.15);
    kaleidoFxCtx.filter = `blur(${0.45 + smooth * 1.9}px)`;
    kaleidoFxCtx.drawImage(kaleidoPrevCanvas, 0, 0, w, h);
    kaleidoFxCtx.restore();
  }
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(kaleidoFxCanvas, 0, 0, w, h, 0, 0, outW, outH);
  ctx.restore();
  kaleidoPrevCtx.clearRect(0, 0, w, h);
  kaleidoPrevCtx.drawImage(kaleidoFxCanvas, 0, 0, w, h);
  return true;
}

function hexToRgb01(hex) {
  if (typeof hex !== "string") return [0.05, 0.06, 0.11];
  const raw = hex.trim().replace("#", "");
  const s =
    raw.length === 3
      ? `${raw[0]}${raw[0]}${raw[1]}${raw[1]}${raw[2]}${raw[2]}`
      : raw.length === 6
        ? raw
        : "0d0f1b";
  const n = Number.parseInt(s, 16);
  if (!Number.isFinite(n)) return [0.05, 0.06, 0.11];
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function t(key) {
  return i18n[locale]?.[key] || i18n.es[key] || key;
}

const extendedLocaleTexts = {
  es: {
    selectors: {
      "#liveModeGlitchBtn span:last-child": "Glitch Live",
      "#liveModeFractalBtn span:last-child": "Fractal Live",
      "#liveMode3dBtn span:last-child": "3D Live",
      "#liveModeParticlesBtn span:last-child": "Partículas Live",
      "#livePaneGlitch h2": "Esenciales Glitch",
      "#livePaneFractal h2": "Esenciales Fractal",
      "#livePane3d h2": "Esenciales 3D",
      "#livePaneParticles h2": "Esenciales Partículas",
      "#livePane3d .micro-tip": "Tip: usa WASD para paneo 3D, arrastra para orbitar, ←/→ para módulo y ↑/↓ para FX.",
      "#livePaneGlitch .micro-tip": "Tip: webcam + tracking FX da glitch facial/manos en tiempo real.",
      "#livePaneParticles .micro-tip": "Tip: módulo independiente con partículas XYZ audio-reactivas y auto performance.",
      "#liveOutputGroup h2": "Vista de salida",
      "#liveDomeSummary": "Domo Máster (Todos los filtros)",
      "#liveGlitchPadLabel": "GL Glitch Pad (X=Intensidad / Y=Color)",
      "#liveGlitchPadBLabel": "FX2 Glitch Pad B (X=Error / Y=Tracking)",
      "#liveGlitchPadCLabel": "FX3 Glitch Pad C (X=Estela / Y=Dist. animada)",
      "#live3dPointsPadLabel": "PTS Points Pad (X=Cantidad / Y=Tamaño)",
      "#live3dMeshPadLabel": "MSH Mesh Pad (X=Cantidad / Y=Elevación)",
      "#live3dPadBLabel": "SEP Pad B (X=Separación / Y=Fondo)",
      "#live3dCamPadLabel": "CAM Camera Pad (X=Follow / Y=Zoom)",
      "#live3dRotPadLabel": "ROT Rotation Pad (X=Rotate Y / Y=Rotate X)",
      "#live3dColorPadLabel": "CLR Color Mix Pad (X=Tono Punto / Y=Tono Malla)",
      "#liveModPadLabel": "Pad Mod (X=Cantidad / Y=Suavizado)",
      "#panelStudio .group[data-modes='glitch'] > h2": "Rack Glitch",
      "#panelStudio .group.legacy-fractal > h2": "Rack Fractal",
      "#panelStudio #depthControlsGroup > h2": "Escenario 3D",
      "#panelStudio #depthControlsGroup .micro-tip": "Tip: empieza con \"3D Starter\" y mueve el mouse en el viewport.",
      "#panelStudio #depthControlsGroup details summary": "3D Avanzado",
      "#panelStudio #depthControlsGroup details h3": "Iluminación",
      "#panelStudio .group[data-modes='glitch'] .subgroup-title:nth-of-type(1)": "Pixel Art / Mezcla de Color",
      "#panelStudio .group[data-modes='glitch'] .subgroup-title:nth-of-type(2)": "Glitch con Máscara de Sujeto",
      "#panelStudio .group[data-modes='glitch'] .subgroup-title:nth-of-type(3)": "Color / Acabado",
      "#panelStudio .group.legacy-fractal .subgroup-title:nth-of-type(1)": "Espiral / Mandala",
      "#panelStudio .group.legacy-fractal .subgroup-title:nth-of-type(2)": "Color Psicodélico",
      "#studioFractalPadALabel": "FRA A Pad (X=Simetría / Y=Power)",
      "#studioFractalPadBLabel": "FRA B Pad (X=Glow / Y=Óptico)",
      "#panelStudio #depthControlsGroup .subgroup-title:nth-of-type(1)": "Geometría 3D / Movimiento",
      "#panelStudio #depthControlsGroup .subgroup-title:nth-of-type(2)": "Estética / FX de Luz",
      "#panelStudio #depthControlsGroup .subgroup-title:nth-of-type(3)": "Fondo 3D",
      "#canvasEntryOverlay .canvas-entry-title": "Iniciar entrada",
      "#canvasEntryOverlay .canvas-entry-sub": "Elige una entrada para comenzar el performance visual",
      "#canvasOverlayImageBtn span:last-child": "Imagen",
      "#canvasOverlayWebcamBtn span:last-child": "Webcam",
      "#canvasOverlayNoInputBtn span:last-child": "Sin input",
      ".live-input-box-label": "Entrada activa",
      "#quickInputSelect option[value='image']": "Imagen",
      "#quickInputSelect option[value='webcam']": "Webcam",
      "#quickInputSelect option[value='noinput']": "Sin input",
      "#quickInputSelect option[value='clear']": "Quitar",
      "#quickInputActiveText": "Entrada activa: Ninguna",
      "#moduleRouteHint .module-route-title": "Elige camino visual",
      "#moduleRouteHint .module-route-sub": "Después de cargar la entrada, comienza por Glitch, Fractal, 3D o Partículas.",
      "#moduleRouteHint .module-route-btn[data-module-route='glitch'] span:last-child": "Glitch",
      "#moduleRouteHint .module-route-btn[data-module-route='fractal'] span:last-child": "Fractal",
      "#moduleRouteHint .module-route-btn[data-module-route='depth'] span:last-child": "3D",
      "#moduleRouteHint .module-route-btn[data-module-route='particles'] span:last-child": "Partículas",
      "#moduleRouteHint .module-route-btn[data-module-route='tunnel'] span:last-child": "Tunnel",
      "#moduleRouteHint .module-route-btn[data-module-route='interior'] span:last-child": "Interior",
      "#moduleRouteHint .module-route-btn[data-module-route='atlas'] span:last-child": "Morpho",
      "#moduleRouteHint .module-route-btn[data-module-route='materia'] span:last-child": "Materia",
      "#moduleRouteHint .module-route-btn[data-module-route='code'] span:last-child": "Code",
      "#livePaneInterior h2": "Esenciales Interior Black",
      "#livePaneAtlas h2": "Esenciales Morpho Live",
      "#livePaneMateria h2": "Esenciales Materia Live",
      "#livePaneCode h2": "Esenciales Code Rain",
    },
    labels: {
      liveGlitchIntensity: "Intensidad",
      liveGlitchColor: "Mezcla de color",
      liveGlitchError: "Complejidad de error",
      liveGlitchTracking: "Tracking FX",
      liveGlitchTrail: "Estela de movimiento",
      liveGlitchAnim: "Distorsión animada",
      liveFractalPreset: "Preset",
      liveFractalQuality: "Calidad",
      liveFractalBehavior: "Comportamiento",
      liveFractalAudioMode: "Movimiento audio",
      liveFractalCameraMode: "Cámara fractal",
      liveFractalDomeMode: "Domo fractal",
      liveFractalVariant: "Variante fractal",
      liveFractalCamSpeed: "Velocidad de cámara",
      liveFractalDistance: "Distancia de cámara",
      liveFractalShape: "Forma matemática A",
      liveFractalShapeB: "Forma matemática",
      liveFractalShapeMorph: "Morph de forma",
      liveFractalSymmetry: "Simetría",
      liveFractalPower: "Poder fractal",
      liveFractalFog: "Densidad de niebla",
      liveFractalGlow: "Glow",
      liveFractalLight: "Intensidad de luz",
      liveFractalSpin: "Spin",
      liveFractalBreath: "Respiración",
      liveFractalFlow: "Flujo suave",
      liveFractalWarmth: "Calidez de color",
      liveFractalTexture: "Textura fractal",
      liveFractalTexture2: "Textura capa 2",
      liveFractalTextureBlend: "Mezcla de textura",
      liveFractalOverlayLock: "Bloquear overlay en random",
      liveFractalTextureMix: "Mezcla capa 2",
      liveFractalPalette: "Paleta",
      liveFractalRenderMode: "Render fractal",
      liveFractalOptical: "Pack óptico",
      liveFractalOpticalAmount: "Cantidad óptica",
      liveFractalPolygonize: "Polygonize",
      liveFractalWireStrength: "Fuerza de malla",
      liveFractalPointOverlay: "Capa de puntos",
      liveFractalStyle: "Estilo fractal",
      liveFractalBackground: "Fondo fractal",
      liveFractalFlatColor: "Color plano",
      liveFractalAudio: "Usar audio",
      liveFractalAudioGain: "Ganancia de audio",
      liveCameraMode: "Movimiento de cámara",
      live3dRenderEngine: "Motor de render",
      live3dPoints: "Puntos",
      live3dMesh: "Malla",
      live3dPointOpacity: "Opacidad de puntos",
      live3dMeshOpacity: "Opacidad de malla",
      live3dDepthWarp: "Distorsión de profundidad",
      live3dSeparation: "Separación Punto/Malla",
      live3dBackground: "Energía de fondo",
      live3dOrganic: "Interacción orgánica",
      live3dLightingMode: "Modo de iluminación",
      live3dLight: "Potencia de iluminación",
      live3dExposure: "Exposición",
      live3dAmbient: "Luz ambiente",
      live3dLightAzimuth: "Azimut de luz",
      live3dLightElevation: "Elevación de luz",
      live3dFxMode: "Filtro FX 3D",
      live3dFxAmount: "Cantidad FX 3D",
      live3dAnaglyph: "Anaglifo 3D",
      live3dAnaglyphStrength: "Profundidad anaglifo",
      liveParticlesCount: "Cantidad de partículas",
      liveParticlesEmitter: "Emisor",
      liveParticlesSize: "Tamaño",
      liveParticlesDepth: "Profundidad / Z",
      liveParticlesNoise: "Ruido",
      liveParticlesAttractor: "Atracción",
      liveParticlesFlow: "Flujo",
      liveParticlesCamMode: "Modo de cámara",
      liveParticlesCamSpeed: "Velocidad de cámara",
      liveParticlesCamX: "Cámara X",
      liveParticlesCamY: "Cámara Y",
      liveParticlesCamZ: "Cámara Z",
      liveParticlesColorMode: "Modo de color",
      liveParticlesHue: "Desfase de tono",
      liveParticlesAudio: "Audio reactivo",
      liveParticlesAudioAmount: "Cantidad de audio",
      liveParticlesFaceTrack: "Rastro facial",
      liveParticlesFaceDelay: "Delay facial",
      liveParticlesFaceAmount: "Cantidad facial",
      liveParticlesTrail: "Estela de luz",
      liveParticlesFxStyle: "Estilo FX",
      liveParticlesFxAmount: "Cantidad FX",
      liveParticlesDamping: "Damping",
      liveParticlesVortex: "Vórtice",
      liveParticlesSpawn: "Tasa de spawn",
      liveParticlesMotionThreshold: "Umbral de movimiento",
      liveParticlesDrift: "Reposo / deriva",
      liveParticlesFocus: "Puntos focales",
      liveParticlesGradientMode: "Modo gradiente",
      liveParticlesColorMix: "Mezcla color-gradiente",
      liveParticlesGradientSpread: "Extensión gradiente",
      liveParticlesGradientA: "Color gradiente A",
      liveParticlesGradientB: "Color gradiente B",
      studioParticlesStructure: "Estructura",
      studioParticlesAudioSplit: "Audio split",
      studioParticlesOrder: "Orden / forma",
      studioParticlesDrift: "Reposo (menos movimiento)",
      studioParticlesFocus: "Puntos focales",
      studioParticlesDamping: "Damping",
      studioParticlesVortex: "Vórtice",
      studioParticlesSpawn: "Spawn rate",
      studioParticlesMotionThreshold: "Umbral de movimiento",
      studioParticlesGradientMode: "Modo gradiente",
      studioParticlesColorMix: "Mezcla color-gradiente",
      studioParticlesGradientSpread: "Extensión gradiente",
      studioParticlesGradientA: "Color gradiente A",
      studioParticlesGradientB: "Color gradiente B",
      liveOutputView: "Vista de salida",
      domePreset: "Preset Domo",
      domeAutoTuneByMode: "Auto ajustar por módulo",
      domeSourceMap: "Mapa de fuente Domo",
      domeProjection: "Proyección Domo",
      domeWarp: "Warp Domo",
      domeOverscan: "Overscan Domo",
      domeEdgeFeather: "Suavizado de borde Domo",
      domeRimClamp: "Clamp del borde Domo",
      domeSeamBlend: "Mezcla de costura Domo",
      domeTilt: "Tilt Domo",
      domeRotate: "Rotación Domo",
      domeAutoRotate: "Auto rotación Domo",
      domeAutoRotateSpeed: "Velocidad auto Domo",
      domeGrid: "Guía de grilla Domo",
      modCurve: "Curva",
      rgbShift: "Desfase RGB",
      lineJitter: "Jitter de líneas",
      noiseAmount: "Ruido",
      saltPepper: "Sal y pimienta",
      pixelSize: "Pixelado",
      waveDistort: "Distorsión de onda",
      blockShift: "Desplazamiento de bloques",
      dataBands: "Bandas de datos",
      byteCorrupt: "Corrupción de bytes",
      chromaBleed: "Sangrado cromático",
      pixelSort: "Pixel sort",
      ditherAmount: "Matriz dither",
      colorBlend: "Mezcla neón",
      pixelMelt: "Derretido de píxel",
      subjectGhost: "Fantasma de máscara",
      ghostCopies: "Copias fantasma",
      ghostShift: "Desplazamiento fantasma",
      polygonTrack: "Tracking poligonal",
      scanlineIntensity: "Scanlines",
      bloom: "Bloom",
      posterize: "Posterizado",
      hueShift: "Desplazamiento de tono",
      saturation: "Saturación",
      contrast: "Contraste",
      invertBlend: "Mezcla invertida",
      solarize: "Solarizar",
      motionTrail: "FX estela de movimiento",
      trailDecay: "Decaimiento de estela",
      trailThreshold: "Umbral de movimiento",
      trailSoftness: "Suavizado de máscara",
      trailMotionOnly: "Solo movimiento",
      animDistort: "Distorsión animada",
      animSpeed: "Velocidad de animación",
      vhsDrift: "Deriva VHS",
      tapeNoise: "Ruido de cinta",
      headSwitch: "Head switch",
      errorComplexity: "Complejidad de error",
      fractalPattern: "Patrón",
      fractalSource: "Fuente fractal",
      kaleidoSegments: "Segmentos (espejo)",
      kaleidoLayers: "Capas",
      layerEcho: "Eco de capa",
      kaleidoTwist: "Giro",
      fractalZoom: "Zoom fractal",
      fractalPulse: "Pulso fractal",
      spiralAmount: "Cantidad espiral",
      spiralTurns: "Vueltas espiral",
      mandalaPetals: "Pétalos mandala",
      mandalaBloom: "Bloom mandala",
      psychedelic: "Psicodélico",
      colorCycle: "Ciclo de color",
      depthStrength: "Fuerza de profundidad",
      pointMap: "Mapa de puntos",
      pointDensity: "Densidad de puntos",
      pointSize: "Tamaño de puntos",
      pointFloat: "Flotación de puntos",
      pointOrganic: "Interacción orgánica",
      pointLift: "Elevación Z de puntos",
      meshMap: "Mapa de malla",
      meshDensity: "Densidad de malla",
      meshLift: "Elevación Z de malla",
      pointColorShift: "Desfase de color de puntos",
      meshColorShift: "Desfase de color de malla",
      meshGlow: "Brillo de malla",
      ambientLight: "Luz ambiente",
      lightIntensity: "Potencia de luz",
      sceneExposure: "Exposición",
      depthExaggeration: "Exageración de profundidad",
      pointSpread: "Separación de puntos",
      depthShift: "Desplazamiento de profundidad",
      depthView: "Vista de profundidad",
      pointRotateX: "Rotación X",
      pointRotateY: "Rotación Y",
      pointRotateZ: "Rotación Z",
      glitch3d: "Jitter glitch 3D",
      lightEnabled: "Iluminación activa",
      flatIllustrated: "Plano ilustrado",
      lightAzimuth: "Azimut de luz",
      lightElevation: "Elevación de luz",
      cameraZoom: "Zoom de cámara",
      cameraFollow: "Cámara con cursor",
      autoRotate: "Auto rotación",
      pointColorPulse: "Pulso de color de puntos",
      depthColorWave: "Onda de color en profundidad",
      bgMode: "Modo de fondo",
      bgPalette: "Paleta de fondo",
      bgColorA: "Color A de fondo",
      bgColorB: "Color B de fondo",
      bgMotion: "Movimiento de fondo",
    },
    options: {
      liveCameraMode: {
        static: "Estática",
        cursor: "Cursor",
        orbit: "Órbita",
        sweep: "Barrido",
        pulse: "Pulso Dolly",
        helix: "Hélice",
        drift: "Deriva",
        liquid: "Líquido",
      },
      live3dRenderEngine: {
        classic: "Clásico CPU",
        gpu: "GPU Beta",
      },
      live3dLightingMode: { lit: "Iluminado", flat: "Plano / Ilustrado" },
      live3dFxMode: {
        none: "Ninguno",
        delay: "Delay",
        echo: "Eco visual",
        colortrail: "Estela acentuada",
        prism: "Deriva prisma",
        psychedelic: "Psicodélico",
        kaleido: "Caleidoscopio",
        flatfx: "Plano",
        neon: "Neón",
      },
      masterFxMode: {
        none: "Ninguno",
        chromatic: "Cromático",
        interlace: "Deriva Interlace",
        datamosh: "Datamosh Trail",
        pixelart: "Pixel Art",
        crt: "CRT",
        trail: "Estela acentuada",
        psychedelic: "Psicodélico",
        psygrad: "Gradiente Psy",
        luminous: "Flujo Luminoso",
        visionpass: "Paso Alto Visionario",
        neon: "Neón Glow",
        neongrad: "Neón Gradiente",
        matrix: "Matrix",
      },
      liveParticlesCount: {
        low: "Baja",
        med: "Media",
        high: "Alta",
        ultra: "Ultra",
      },
      liveFractalQuality: {
        low: "Baja",
        med: "Media",
        high: "Alta",
      },
      liveFractalBehavior: {
        stable: "Estable",
        performance: "Rendimiento",
        aggressive: "Agresivo",
      },
      liveFractalAudioMode: {
        balanced: "Balanceado",
        bass: "Pulso de bajos",
        spectral: "Flujo espectral",
        rhythmic: "Rítmico",
      },
      liveFractalPreset: {
        sacred: "Sagrado",
        ether: "Éter",
        inside: "Centro 360",
        flat: "Plano ilustración",
      },
      liveFractalCameraMode: {
        orbit: "Órbita planeta",
        inside: "Centro 360",
      },
      liveFractalDomeMode: {
        off: "Off",
        "dome-standard": "Domo estándar",
        "dome-equirect": "Domo equirect",
      },
      liveFractalVariant: {
        a: "Variante A",
        b: "Variante B",
      },
      liveFractalShape: {
        mandel: "Mandelbulb",
        torus: "Toro",
        gyroid: "Giroide",
        poly: "Poliédrica",
      },
      liveFractalShapeB: {
        mandel: "Mandelbulb",
        torus: "Toro",
        gyroid: "Giroide",
        poly: "Poliédrica",
      },
      liveFractalTexture: {
        smooth: "Suave",
        crystal: "Cristal",
        ink: "Tinta",
        contour: "Contorno",
      },
      liveFractalTexture2: {
        none: "Ninguna",
        noise: "Ruido velo",
        ripples: "Ondas",
        cells: "Celular",
      },
      liveFractalTextureBlend: {
        add: "Añadir",
        screen: "Screen",
        multiply: "Multiplicar",
        difference: "Diferencia",
      },
      liveFractalPalette: {
        warm: "Sagrada cálida",
        neon: "Neón",
        cosmic: "Cósmica",
        mono: "Mono tinta",
        input: "Entrada",
      },
      liveFractalRenderMode: {
        shaded: "Sombreado",
        wire: "Malla",
        points: "Mapa de puntos",
        hybrid: "Malla + puntos",
      },
      liveFractalOptical: {
        off: "Off",
        moire: "Moiré",
        tunnel: "Túnel",
        sacred: "Mandala sagrado",
        opart: "Op Art",
      },
      liveFractalStyle: {
        lit: "Iluminado",
        flat: "Plano / Ilustración",
      },
      liveFractalBackground: {
        ethereal: "Etéreo",
        sunset: "Atardecer",
        cosmic: "Cósmico",
        solid: "Plano sólido",
      },
      liveParticlesEmitter: {
        grid: "Grid",
        volume: "Volumen",
        motion: "Movimiento",
      },
      liveParticlesCamMode: {
        static: "Estática",
        orbit: "Órbita",
        sweep: "Barrido",
        helix: "Hélice",
        inside: "Interior",
      },
      liveParticlesColorMode: {
        source: "Desde fuente",
        palette: "Paleta",
        audio: "Mapa calor audio",
      },
      liveParticlesGradientMode: {
        radial: "Radial",
        "axis-x": "Eje X",
        "axis-y": "Eje Y",
        spiral: "Espiral",
      },
      liveParticlesFxStyle: {
        none: "Off",
        neon: "Neón",
        datamosh: "Datamosh",
      },
      studioParticlesStructure: {
        cloud: "Nube",
        grid: "Grid",
        ring: "Anillo",
        helix: "Hélice",
        mandala: "Mandala",
        torus: "Toro",
        lissajous: "Lissajous",
        attractor: "Atractor",
      },
      studioParticlesAudioSplit: {
        off: "Off",
        basic: "Básico",
        zones: "Zonas",
      },
      studioParticlesGradientMode: {
        radial: "Radial",
        "axis-x": "Eje X",
        "axis-y": "Eje Y",
        spiral: "Espiral",
      },
      liveOutputView: { normal: "Normal", dome: "Domo" },
      domePreset: {
        custom: "Personalizado",
        "live-safe": "Live seguro",
        glitch: "Glitch",
        depth: "3D Live",
        particles: "Partículas",
        fractal: "Fractal",
        equirect180: "360 -> 180 Domo",
      },
      domeSourceMap: {
        standard: "Warp estándar",
        equirect: "360 Equirect -> 180 Domo",
      },
      domeProjection: {
        equisolid: "Equisolid (Fulldome)",
        equidistant: "Equidistante",
        stereographic: "Estereográfica",
        orthographic: "Ortográfica",
      },
      modCurve: { smooth: "Suave", linear: "Lineal", punch: "Punch", step: "Step" },
      bgMode: {
        black: "Negro",
        solid: "Sólido",
        "gradient-linear": "Degradado lineal",
        "gradient-radial": "Degradado radial",
        animated: "Animado",
        grid: "Grilla en movimiento",
        "psychedelic-fractal": "Fractal psicodélico",
      },
      bgPalette: {
        custom: "Personalizada",
        cyber: "Cyber",
        sunset: "Atardecer",
        ocean: "Océano",
        toxic: "Tóxico",
      },
      fractalPattern: {
        kaleido: "Kaleido Espejo",
        spiral: "Espiral",
        mandala: "Mandala",
        hybrid: "Híbrido",
      },
      fractalSource: {
        original: "Imagen original",
        glitch: "Imagen base glitch",
      },
    },
  },
  en: {
    selectors: {
      "#liveModeGlitchBtn span:last-child": "Glitch Live",
      "#liveModeFractalBtn span:last-child": "Fractal Live",
      "#liveMode3dBtn span:last-child": "3D Live",
      "#liveModeParticlesBtn span:last-child": "Particles Live",
      "#livePaneGlitch h2": "Glitch Essentials",
      "#livePaneFractal h2": "Fractal Essentials",
      "#livePane3d h2": "3D Essentials",
      "#livePaneParticles h2": "Particles Essentials",
      "#livePane3d .micro-tip": "Tip: use WASD for 3D panning, drag to orbit, ←/→ switch modules, and ↑/↓ cycle FX.",
      "#livePaneGlitch .micro-tip": "Tip: webcam + tracking FX gives real-time face/hand glitch.",
      "#livePaneParticles .micro-tip": "Tip: independent module with XYZ audio-reactive particles and auto performance.",
      "#liveOutputGroup h2": "Output View",
      "#liveDomeSummary": "Dome Master (All filters)",
      "#liveGlitchPadLabel": "GL Glitch Pad (X=Intensity / Y=Color)",
      "#liveGlitchPadBLabel": "FX2 Glitch Pad B (X=Error / Y=Tracking)",
      "#liveGlitchPadCLabel": "FX3 Glitch Pad C (X=Trail / Y=Anim Distort)",
      "#live3dPointsPadLabel": "PTS Points Pad (X=Amount / Y=Size)",
      "#live3dMeshPadLabel": "MSH Mesh Pad (X=Amount / Y=Lift)",
      "#live3dPadBLabel": "SEP Pad B (X=Separation / Y=Background)",
      "#live3dCamPadLabel": "CAM Camera Pad (X=Follow / Y=Zoom)",
      "#live3dRotPadLabel": "ROT Rotation Pad (X=Rotate Y / Y=Rotate X)",
      "#live3dColorPadLabel": "CLR Color Mix Pad (X=Point Hue / Y=Mesh Hue)",
      "#liveModPadLabel": "Mod Pad (X=Amount / Y=Smoothing)",
      "#panelStudio .group[data-modes='glitch'] > h2": "Glitch Rack",
      "#panelStudio .group.legacy-fractal > h2": "Fractal Rack",
      "#panelStudio #depthControlsGroup > h2": "3D Stage",
      "#panelStudio #depthControlsGroup .micro-tip": "Tip: start with \"3D Starter\" and move the mouse in the viewport.",
      "#panelStudio #depthControlsGroup details summary": "Advanced 3D",
      "#panelStudio #depthControlsGroup details h3": "Lighting",
      "#panelStudio .group[data-modes='glitch'] .subgroup-title:nth-of-type(1)": "Pixel Art / Color Blend",
      "#panelStudio .group[data-modes='glitch'] .subgroup-title:nth-of-type(2)": "Subject Mask Glitch",
      "#panelStudio .group[data-modes='glitch'] .subgroup-title:nth-of-type(3)": "Color / Finish",
      "#panelStudio .group.legacy-fractal .subgroup-title:nth-of-type(1)": "Spiral / Mandala",
      "#panelStudio .group.legacy-fractal .subgroup-title:nth-of-type(2)": "Psychedelic Color",
      "#studioFractalPadALabel": "FRA A Pad (X=Symmetry / Y=Power)",
      "#studioFractalPadBLabel": "FRA B Pad (X=Glow / Y=Optical)",
      "#panelStudio #depthControlsGroup .subgroup-title:nth-of-type(1)": "3D Geometry / Motion",
      "#panelStudio #depthControlsGroup .subgroup-title:nth-of-type(2)": "Aesthetic / Light FX",
      "#panelStudio #depthControlsGroup .subgroup-title:nth-of-type(3)": "3D Background",
      "#canvasEntryOverlay .canvas-entry-title": "Start Input",
      "#canvasEntryOverlay .canvas-entry-sub": "Choose an input to begin visual performance",
      "#canvasOverlayImageBtn span:last-child": "Image",
      "#canvasOverlayWebcamBtn span:last-child": "Webcam",
      "#canvasOverlayNoInputBtn span:last-child": "No Input",
      ".live-input-box-label": "Active input",
      "#quickInputSelect option[value='image']": "Image",
      "#quickInputSelect option[value='webcam']": "Webcam",
      "#quickInputSelect option[value='noinput']": "No Input",
      "#quickInputSelect option[value='clear']": "Clear",
      "#quickInputActiveText": "Active input: None",
      "#moduleRouteHint .module-route-title": "Choose Visual Path",
      "#moduleRouteHint .module-route-sub": "After loading input, start with Glitch, Fractal, 3D or Particles.",
      "#moduleRouteHint .module-route-btn[data-module-route='glitch'] span:last-child": "Glitch",
      "#moduleRouteHint .module-route-btn[data-module-route='fractal'] span:last-child": "Fractal",
      "#moduleRouteHint .module-route-btn[data-module-route='depth'] span:last-child": "3D",
      "#moduleRouteHint .module-route-btn[data-module-route='particles'] span:last-child": "Particles",
      "#moduleRouteHint .module-route-btn[data-module-route='tunnel'] span:last-child": "Tunnel",
      "#moduleRouteHint .module-route-btn[data-module-route='interior'] span:last-child": "Interior",
      "#moduleRouteHint .module-route-btn[data-module-route='atlas'] span:last-child": "Morpho",
      "#moduleRouteHint .module-route-btn[data-module-route='materia'] span:last-child": "Materia",
      "#moduleRouteHint .module-route-btn[data-module-route='code'] span:last-child": "Code",
      "#livePaneInterior h2": "Interior Black Essentials",
      "#livePaneAtlas h2": "Morpho Live Essentials",
      "#livePaneMateria h2": "Materia Live Essentials",
      "#livePaneCode h2": "Code Rain Essentials",
    },
    labels: {
      liveGlitchIntensity: "Intensity",
      liveGlitchColor: "Color Mix",
      liveGlitchError: "Error Complexity",
      liveGlitchTracking: "Tracking FX",
      liveGlitchTrail: "Motion Trail",
      liveGlitchAnim: "Anim Distort",
      liveFractalPreset: "Preset",
      liveFractalQuality: "Quality",
      liveFractalBehavior: "Behavior",
      liveFractalAudioMode: "Audio motion",
      liveFractalCameraMode: "Fractal camera",
      liveFractalDomeMode: "Fractal dome",
      liveFractalVariant: "Fractal variant",
      liveFractalCamSpeed: "Camera speed",
      liveFractalDistance: "Camera distance",
      liveFractalShape: "Math shape A",
      liveFractalShapeB: "Math shape",
      liveFractalShapeMorph: "Shape morph",
      liveFractalSymmetry: "Symmetry",
      liveFractalPower: "Fractal Power",
      liveFractalFog: "Fog Density",
      liveFractalGlow: "Glow",
      liveFractalLight: "Light Intensity",
      liveFractalSpin: "Spin",
      liveFractalBreath: "Breath",
      liveFractalFlow: "Flow smooth",
      liveFractalWarmth: "Color Warmth",
      liveFractalTexture: "Fractal texture",
      liveFractalTexture2: "Texture layer 2",
      liveFractalTextureBlend: "Texture blend",
      liveFractalOverlayLock: "Lock overlay on random",
      liveFractalTextureMix: "Layer 2 mix",
      liveFractalPalette: "Palette",
      liveFractalRenderMode: "Fractal render",
      liveFractalOptical: "Optical pack",
      liveFractalOpticalAmount: "Optical amount",
      liveFractalPolygonize: "Polygonize",
      liveFractalWireStrength: "Wire strength",
      liveFractalPointOverlay: "Point overlay",
      liveFractalStyle: "Fractal style",
      liveFractalBackground: "Fractal background",
      liveFractalFlatColor: "Flat color",
      liveFractalAudio: "Use Audio",
      liveFractalAudioGain: "Audio Gain",
      liveCameraMode: "Camera Move",
      live3dRenderEngine: "Render Engine",
      live3dPoints: "Points",
      live3dMesh: "Mesh",
      live3dPointOpacity: "Point Opacity",
      live3dMeshOpacity: "Mesh Opacity",
      live3dDepthWarp: "Depth Distortion",
      live3dSeparation: "Point/Mesh Separation",
      live3dBackground: "Background Energy",
      live3dOrganic: "Organic Interaction",
      live3dLightingMode: "Lighting Mode",
      live3dLight: "Lighting Power",
      live3dExposure: "Exposure",
      live3dAmbient: "Ambient",
      live3dLightAzimuth: "Light Azimuth",
      live3dLightElevation: "Light Elevation",
      live3dFxMode: "3D FX Filter",
      live3dFxAmount: "3D FX Amount",
      live3dAnaglyph: "3D Anaglyph",
      live3dAnaglyphStrength: "Anaglyph Depth",
      liveParticlesCount: "Particle Count",
      liveParticlesEmitter: "Emitter",
      liveParticlesSize: "Size",
      liveParticlesDepth: "Depth / Z",
      liveParticlesNoise: "Noise",
      liveParticlesAttractor: "Attractor",
      liveParticlesFlow: "Flow",
      liveParticlesCamMode: "Camera mode",
      liveParticlesCamSpeed: "Camera speed",
      liveParticlesCamX: "Camera X",
      liveParticlesCamY: "Camera Y",
      liveParticlesCamZ: "Camera Z",
      liveParticlesColorMode: "Color Mode",
      liveParticlesHue: "Hue Shift",
      liveParticlesAudio: "Audio React",
      liveParticlesAudioAmount: "Audio Amount",
      liveParticlesFaceTrack: "Face Trace",
      liveParticlesFaceDelay: "Face Delay",
      liveParticlesFaceAmount: "Face Amount",
      liveParticlesTrail: "Light Trail",
      liveParticlesFxStyle: "FX Style",
      liveParticlesFxAmount: "FX Amount",
      liveParticlesDamping: "Damping",
      liveParticlesVortex: "Vortex",
      liveParticlesSpawn: "Spawn Rate",
      liveParticlesMotionThreshold: "Motion Threshold",
      liveParticlesDrift: "Drift / stillness",
      liveParticlesFocus: "Focal points",
      liveParticlesGradientMode: "Gradient mode",
      liveParticlesColorMix: "Color-gradient mix",
      liveParticlesGradientSpread: "Gradient spread",
      liveParticlesGradientA: "Gradient color A",
      liveParticlesGradientB: "Gradient color B",
      studioParticlesStructure: "Structure",
      studioParticlesAudioSplit: "Audio split",
      studioParticlesOrder: "Order / form",
      studioParticlesDrift: "Stillness (less motion)",
      studioParticlesFocus: "Focal points",
      studioParticlesDamping: "Damping",
      studioParticlesVortex: "Vortex",
      studioParticlesSpawn: "Spawn rate",
      studioParticlesMotionThreshold: "Motion threshold",
      studioParticlesGradientMode: "Gradient mode",
      studioParticlesColorMix: "Color-gradient mix",
      studioParticlesGradientSpread: "Gradient spread",
      studioParticlesGradientA: "Gradient color A",
      studioParticlesGradientB: "Gradient color B",
      liveOutputView: "Output View",
      domePreset: "Dome Preset",
      domeAutoTuneByMode: "Auto tune by module",
      domeSourceMap: "Dome Source Map",
      domeProjection: "Dome Projection",
      domeWarp: "Dome Warp",
      domeOverscan: "Dome Overscan",
      domeEdgeFeather: "Dome Edge Feather",
      domeRimClamp: "Dome Rim Clamp",
      domeSeamBlend: "Dome Seam Blend",
      domeTilt: "Dome Tilt",
      domeRotate: "Dome Rotation",
      domeAutoRotate: "Dome Auto Rotate",
      domeAutoRotateSpeed: "Dome Auto Speed",
      domeGrid: "Dome Grid Guide",
      modCurve: "Curve",
      rgbShift: "RGB Shift",
      lineJitter: "Line Jitter",
      noiseAmount: "Noise",
      saltPepper: "Salt & Pepper",
      pixelSize: "Pixelate",
      waveDistort: "Wave Distort",
      blockShift: "Block Shift",
      dataBands: "Data Bands",
      byteCorrupt: "Byte Corrupt",
      chromaBleed: "Chroma Bleed",
      pixelSort: "Pixel Sort",
      ditherAmount: "Dither Matrix",
      colorBlend: "Neon Blend",
      pixelMelt: "Pixel Melt",
      subjectGhost: "Mask Ghost",
      ghostCopies: "Ghost Copies",
      ghostShift: "Ghost Shift",
      polygonTrack: "Polygon Tracking",
      scanlineIntensity: "Scanlines",
      bloom: "Bloom",
      posterize: "Posterize",
      hueShift: "Hue Shift",
      saturation: "Saturation",
      contrast: "Contrast",
      invertBlend: "Invert Blend",
      solarize: "Solarize",
      motionTrail: "Motion Trail FX",
      trailDecay: "Trail Decay",
      trailThreshold: "Motion Threshold",
      trailSoftness: "Mask Softness",
      trailMotionOnly: "Motion Only",
      animDistort: "Animated Distortion",
      animSpeed: "Animation Speed",
      vhsDrift: "VHS Drift",
      tapeNoise: "Tape Noise",
      headSwitch: "Head switch",
      errorComplexity: "Error Complexity",
      fractalPattern: "Pattern",
      fractalSource: "Fractal Source",
      kaleidoSegments: "Segments (mirror)",
      kaleidoLayers: "Layers",
      layerEcho: "Layer Echo",
      kaleidoTwist: "Twist",
      fractalZoom: "Fractal Zoom",
      fractalPulse: "Fractal Pulse",
      spiralAmount: "Spiral Amount",
      spiralTurns: "Spiral Turns",
      mandalaPetals: "Mandala Petals",
      mandalaBloom: "Mandala Bloom",
      psychedelic: "Psychedelic",
      colorCycle: "Color Cycle",
      depthStrength: "Depth Strength",
      pointMap: "Point Map",
      pointDensity: "Point Density",
      pointSize: "Point Size",
      pointFloat: "Point Float",
      pointOrganic: "Organic Interaction",
      pointLift: "Point Lift Z",
      meshMap: "Mesh Map",
      meshDensity: "Mesh Density",
      meshLift: "Mesh Lift Z",
      pointColorShift: "Point Color Shift",
      meshColorShift: "Mesh Color Shift",
      meshGlow: "Mesh Glow",
      ambientLight: "Ambient",
      lightIntensity: "Light Power",
      sceneExposure: "Exposure",
      depthExaggeration: "Depth Exaggeration",
      pointSpread: "Point Spread",
      depthShift: "Depth Shift",
      depthView: "Depth View",
      pointRotateX: "Rotate X",
      pointRotateY: "Rotate Y",
      pointRotateZ: "Rotate Z",
      glitch3d: "3D Glitch Jitter",
      lightEnabled: "Lighting Enable",
      flatIllustrated: "Flat Illustrated",
      lightAzimuth: "Light Azimuth",
      lightElevation: "Light Elevation",
      cameraZoom: "Camera Zoom",
      cameraFollow: "Cursor Camera",
      autoRotate: "Auto Rotate",
      pointColorPulse: "Point Color Pulse",
      depthColorWave: "Depth Color Wave",
      bgMode: "Background Mode",
      bgPalette: "Background Palette",
      bgColorA: "Background Color A",
      bgColorB: "Background Color B",
      bgMotion: "Background Motion",
    },
    options: {
      liveCameraMode: {
        static: "Static",
        cursor: "Cursor",
        orbit: "Orbit",
        sweep: "Sweep",
        pulse: "Dolly Pulse",
        helix: "Helix",
        drift: "Drift",
        liquid: "Liquid",
      },
      live3dRenderEngine: {
        classic: "Classic CPU",
        gpu: "GPU Beta",
      },
      live3dLightingMode: { lit: "Lit", flat: "Flat / Illustrated" },
      live3dFxMode: {
        none: "None",
        delay: "Delay",
        echo: "Visual Echo",
        colortrail: "Accented Trail",
        prism: "Prism Drift",
        psychedelic: "Psychedelic",
        kaleido: "Kaleidoscope",
        flatfx: "Flat",
        neon: "Neon",
      },
      masterFxMode: {
        none: "None",
        chromatic: "Chromatic",
        interlace: "Interlace Drift",
        datamosh: "Datamosh Trail",
        pixelart: "Pixel Art",
        crt: "CRT",
        trail: "Trail (Accented)",
        psychedelic: "Psychedelic",
        psygrad: "Psy Gradient",
        luminous: "Luminous Flux",
        visionpass: "Visionary High Pass",
        neon: "Neon Glow",
        neongrad: "Neon Gradient",
        matrix: "Matrix",
      },
      liveParticlesCount: {
        low: "Low",
        med: "Med",
        high: "High",
        ultra: "Ultra",
      },
      liveFractalQuality: {
        low: "Low",
        med: "Med",
        high: "High",
      },
      liveFractalBehavior: {
        stable: "Stable",
        performance: "Performance",
        aggressive: "Aggressive",
      },
      liveFractalAudioMode: {
        balanced: "Balanced",
        bass: "Bass pulse",
        spectral: "Spectral flow",
        rhythmic: "Rhythmic",
      },
      liveFractalPreset: {
        sacred: "Sacred Bloom",
        ether: "Ether Orbit",
        inside: "Inside 360",
        flat: "Flat Illustration",
      },
      liveFractalCameraMode: {
        orbit: "Orbit Planet",
        inside: "Center 360",
      },
      liveFractalDomeMode: {
        off: "Off",
        "dome-standard": "Dome Standard",
        "dome-equirect": "Dome Equirect",
      },
      liveFractalVariant: {
        a: "Variant A",
        b: "Variant B",
      },
      liveFractalShape: {
        mandel: "Mandelbulb",
        torus: "Torus Field",
        gyroid: "Gyroid Field",
        poly: "Polyhedral",
      },
      liveFractalShapeB: {
        mandel: "Mandelbulb",
        torus: "Torus Field",
        gyroid: "Gyroid Field",
        poly: "Polyhedral",
      },
      liveFractalTexture: {
        smooth: "Smooth",
        crystal: "Crystal",
        ink: "Ink Lines",
        contour: "Contour",
      },
      liveFractalTexture2: {
        none: "None",
        noise: "Noise Veil",
        ripples: "Ripples",
        cells: "Cellular",
      },
      liveFractalTextureBlend: {
        add: "Add",
        screen: "Screen",
        multiply: "Multiply",
        difference: "Difference",
      },
      liveFractalPalette: {
        warm: "Warm Sacred",
        neon: "Neon",
        cosmic: "Cosmic",
        mono: "Mono Ink",
        input: "Input Driven",
      },
      liveFractalRenderMode: {
        shaded: "Shaded",
        wire: "Wire Mesh",
        points: "Point Map",
        hybrid: "Mesh + Points",
      },
      liveFractalOptical: {
        off: "Off",
        moire: "Moire Lines",
        tunnel: "Tunnel Rings",
        sacred: "Sacred Mandala",
        opart: "Op Art Grid",
      },
      liveFractalStyle: {
        lit: "Lit",
        flat: "Flat / Illustration",
      },
      liveFractalBackground: {
        ethereal: "Ethereal",
        sunset: "Sunset",
        cosmic: "Cosmic",
        solid: "Solid Flat",
      },
      liveParticlesEmitter: {
        grid: "Grid",
        volume: "Volume",
        motion: "Motion",
      },
      liveParticlesCamMode: {
        static: "Static",
        orbit: "Orbit",
        sweep: "Sweep",
        helix: "Helix",
        inside: "Inside",
      },
      liveParticlesColorMode: {
        source: "From Source",
        palette: "Palette",
        audio: "Audio Heatmap",
      },
      liveParticlesGradientMode: {
        radial: "Radial",
        "axis-x": "Axis X",
        "axis-y": "Axis Y",
        spiral: "Spiral",
      },
      liveParticlesFxStyle: {
        none: "Off",
        neon: "Neon",
        datamosh: "Datamosh",
      },
      studioParticlesStructure: {
        cloud: "Cloud",
        grid: "Grid",
        ring: "Ring",
        helix: "Helix",
        mandala: "Mandala",
        torus: "Torus",
        lissajous: "Lissajous",
        attractor: "Attractor",
      },
      studioParticlesAudioSplit: {
        off: "Off",
        basic: "Basic",
        zones: "Zones",
      },
      studioParticlesGradientMode: {
        radial: "Radial",
        "axis-x": "Axis X",
        "axis-y": "Axis Y",
        spiral: "Spiral",
      },
      liveOutputView: { normal: "Normal", dome: "Dome" },
      domePreset: {
        custom: "Custom",
        "live-safe": "Live Safe",
        glitch: "Glitch",
        depth: "3D Live",
        particles: "Particles",
        fractal: "Fractal",
        equirect180: "360 -> 180 Dome",
      },
      domeSourceMap: {
        standard: "Standard Warp",
        equirect: "360 Equirect -> 180 Dome",
      },
      domeProjection: {
        equisolid: "Equisolid (Fulldome)",
        equidistant: "Equidistant",
        stereographic: "Stereographic",
        orthographic: "Orthographic",
      },
      modCurve: { smooth: "Smooth", linear: "Linear", punch: "Punch", step: "Step" },
      bgMode: {
        black: "Black",
        solid: "Solid",
        "gradient-linear": "Gradient Linear",
        "gradient-radial": "Gradient Radial",
        animated: "Animated",
        grid: "Grid Motion",
        "psychedelic-fractal": "Psychedelic Fractal",
      },
      bgPalette: {
        custom: "Custom",
        cyber: "Cyber",
        sunset: "Sunset",
        ocean: "Ocean",
        toxic: "Toxic",
      },
      fractalPattern: {
        kaleido: "Kaleido Mirror",
        spiral: "Spiral",
        mandala: "Mandala",
        hybrid: "Hybrid",
      },
      fractalSource: {
        original: "Original Image",
        glitch: "Glitch Base Image",
      },
    },
  },
};

function setControlLabel(controlId, text) {
  const control = document.getElementById(controlId);
  if (!control || !text) return;
  const label = control.closest("label");
  if (!label) return;
  const span = label.querySelector("span");
  if (span) span.textContent = text;
}

function setSelectOptionTexts(selectId, mapping) {
  if (!mapping) return;
  const select = document.getElementById(selectId);
  if (!select) return;
  [...select.options].forEach((opt) => {
    if (mapping[opt.value]) opt.textContent = mapping[opt.value];
  });
}

function ensureMasterFxOptions() {
  // Keep option list stable from HTML; dynamic rebuilding caused runtime UX issues.
}

function applyExtendedLocaleTexts() {
  const pack = extendedLocaleTexts[locale] || extendedLocaleTexts.es;
  if (pack.selectors) {
    Object.entries(pack.selectors).forEach(([selector, text]) => {
      const node = document.querySelector(selector);
      if (node && text) node.textContent = text;
    });
  }
  if (pack.labels) {
    Object.entries(pack.labels).forEach(([controlId, text]) => setControlLabel(controlId, text));
  }
  if (pack.options) {
    Object.entries(pack.options).forEach(([selectId, mapping]) => setSelectOptionTexts(selectId, mapping));
  }
}

function applyLocaleTexts() {
  document.documentElement.lang = locale;
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    const text = i18n[locale]?.[key];
    if (text) node.textContent = text;
  });
  applyExtendedLocaleTexts();
  updateDynamicUiTexts();
  updateLiveModeReadout(liveActiveTab || "glitch");
  updateInputSpecs();
  updatePerformanceUI();
  refreshSnapshotUi();
  refreshCameraDeviceList(true);
}

function applyThemeMode(nextMode, persist = true) {
  const mode = nextMode === "dark" ? "dark" : "light";
  document.body.classList.toggle("theme-dark", mode === "dark");
  if (themeModeSelect && themeModeSelect.value !== mode) {
    themeModeSelect.value = mode;
  }
  if (persist) {
    try {
      localStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch {}
  }
}

function loadSavedThemeMode() {
  let mode = "dark";
  try {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === "dark" || saved === "light") mode = saved;
  } catch {}
  applyThemeMode(mode, false);
}

function getRuntimeTouchProfile() {
  const vvW = Math.round(window.visualViewport ? window.visualViewport.width : window.innerWidth || 0);
  const vvH = Math.round(window.visualViewport ? window.visualViewport.height : window.innerHeight || 0);
  const w = Math.max(1, vvW || window.innerWidth || 1);
  const h = Math.max(1, vvH || window.innerHeight || 1);
  const shortest = Math.min(w, h);
  const ua = navigator.userAgent || "";
  const touchPoints = Math.max(0, navigator.maxTouchPoints || 0);
  const coarse = window.matchMedia ? window.matchMedia("(pointer: coarse)").matches : touchPoints > 0;
  const iPadUA = /iPad/i.test(ua) || (/Macintosh/i.test(ua) && touchPoints > 1);
  const phoneUA = /iPhone|Android.+Mobile|Windows Phone|iPod/i.test(ua);
  const isTouch = coarse || touchPoints > 0 || iPadUA || phoneUA;
  const isTablet = isTouch && (iPadUA || (!phoneUA && shortest >= 760));
  const isPhone = isTouch && !isTablet;
  return { isTouch, isTablet, isPhone, w, h };
}

function applyTouchUiProfile() {
  const p = getRuntimeTouchProfile();
  runtimeIsTouch = p.isTouch;
  runtimeIsTablet = p.isTablet;
  runtimeIsPhone = p.isPhone;
  document.body.classList.toggle("touch-ui", runtimeIsTouch);
  document.body.classList.toggle("touch-tablet", runtimeIsTablet);
  document.body.classList.toggle("touch-phone", runtimeIsPhone);
}

function setWorkspacePanel(name) {
  currentWorkspacePanel = name;
  Object.entries(workspacePanels).forEach(([key, panel]) => {
    if (!panel) return;
    const active = key === name;
    panel.hidden = !active;
    panel.classList.toggle("active", active);
  });
  workflowTabs.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.panel === name);
  });
  if (name === "studio") {
    setStudioTab(
      mode === "depth" || mode === "mix"
        ? "depth"
        : mode === "particles"
          ? "particles"
          : mode === "fractal"
            ? "fractal"
        : "glitch",
    );
    return;
  }
  // Recompute mode-group visibility whenever the workspace tab changes.
  // Without this, Studio can keep stale hidden states from Live/Setup.
  syncModeUi();
  if (name === "live") updateDomeControlsVisibility();
}

function syncStudioGroupVisibility() {
  const panel = workspacePanels.studio;
  if (!panel) return;
  const groups = [...panel.querySelectorAll("[data-studio-group]")];
  groups.forEach((group) => {
    const tag = group.dataset.studioGroup || "";
    group.hidden = tag !== studioActiveTab;
  });
}

function setStudioTab(tabName) {
  studioActiveTab =
    tabName === "depth" ? "depth" : tabName === "particles" ? "particles" : tabName === "fractal" ? "fractal" : "glitch";
  if (studioModeGlitchBtn) studioModeGlitchBtn.classList.toggle("active", studioActiveTab === "glitch");
  if (studioModeFractalBtn) studioModeFractalBtn.classList.toggle("active", studioActiveTab === "fractal");
  if (studioMode3dBtn) studioMode3dBtn.classList.toggle("active", studioActiveTab === "depth");
  if (studioModeParticlesBtn) studioModeParticlesBtn.classList.toggle("active", studioActiveTab === "particles");
  syncStudioGroupVisibility();
  syncModeUi();
  if (studioActiveTab === "fractal") {
    syncLegacyFractalRackToLive();
  }
}

function updateAudioRoutingUi() {
  if (!audioHelpText || !audioRouteStatus) return;
  const usingSystem = audioInputSource && audioInputSource.value === "system";
  const usingFile = audioInputSource && audioInputSource.value === "file";
  audioHelpText.textContent = usingSystem ? t("audio_help_system") : t("audio_help_mic");
  if (usingFile) audioHelpText.textContent = t("audio_help_mic");

  if (!micActive && !audioFileActive) {
    audioRouteStatus.textContent = t("audio_status_idle");
    return;
  }
  if (audioFileActive) {
    audioRouteStatus.textContent = t("audio_status_file");
    return;
  }
  audioRouteStatus.textContent = usingSystem ? t("audio_status_system") : t("audio_status_mic");
}

function hasAudioReactiveInput() {
  return Boolean((micActive || audioFileActive) && analyser && audioData);
}

function isAudioPlaybackActive() {
  const filePlaying = Boolean(audioFilePlayer && audioFilePlayer.src && !audioFilePlayer.paused);
  return Boolean(filePlaying || micActive);
}

function teardownAudioPipeline() {
  if (audioSourceNode) {
    try {
      audioSourceNode.disconnect();
    } catch {}
  }
  if (analyser) {
    try {
      if (audioAnalyserMonitor && audioCtx?.destination) analyser.disconnect(audioCtx.destination);
      analyser.disconnect();
    } catch {}
  }
  audioSourceNode = null;
  analyser = null;
  audioData = null;
  audioTimeData = null;
  audioAnalyserMonitor = false;
}

async function ensureAudioContext() {
  if (!audioCtx) audioCtx = new AudioContext();
  if (audioCtx.state === "suspended") {
    try {
      await audioCtx.resume();
    } catch {}
  }
}

function attachAnalyserFromSource(sourceNode, monitor = false) {
  teardownAudioPipeline();
  analyser = audioCtx.createAnalyser();
  analyser.fftSize = 512;
  analyser.smoothingTimeConstant = 0.72;
  audioSourceNode = sourceNode;
  audioAnalyserMonitor = monitor;
  sourceNode.connect(analyser);
  if (monitor && audioCtx?.destination) analyser.connect(audioCtx.destination);
  audioData = new Uint8Array(analyser.frequencyBinCount);
  audioTimeData = new Uint8Array(analyser.fftSize);
}

function stopMicInput() {
  if (micStream) micStream.getTracks().forEach((t) => t.stop());
  micStream = null;
  micActive = false;
}

function deactivateAudioFileSource() {
  audioFileActive = false;
  teardownAudioPipeline();
  audioLevel = 0;
  liveAudioWaveLevels.fill(0);
  if (audioFilePlayer) audioFilePlayer.pause();
  updateLiveAudioFileMini();
}

function stopAudioFileInput() {
  deactivateAudioFileSource();
  if (audioFilePlayer) {
    audioFilePlayer.removeAttribute("src");
    audioFilePlayer.load();
  }
  if (audioFileUrl) {
    URL.revokeObjectURL(audioFileUrl);
    audioFileUrl = "";
  }
  if (audioFilePlayerWrap) audioFilePlayerWrap.hidden = true;
  if (liveAudioFileName) {
    liveAudioFileName.textContent = "-";
    liveAudioFileName.dataset.text = "";
  }
  if (liveAudioTime) liveAudioTime.textContent = "00:00 / 00:00";
  if (liveAudioSeek) liveAudioSeek.value = "0";
  drawLiveAudioWaveform();
}

function updateDynamicUiTexts() {
  if (webcamBtn) {
    webcamBtn.innerHTML = `${webcamActive ? t("webcam_disable") : t("webcam_enable")} <span class="input-entry-icon">CAM</span>`;
  }
  if (micBtn) micBtn.textContent = micActive ? t("mic_disable") : t("mic_enable");
  syncAspectRatioControlForInput();
  updateRecordSettingsUi();
  updateRecordingButtons();
  updateAudioRoutingUi();
  syncLiveAudioQuickUi();
  syncLiveBackgroundQuickUi();
  updateQuickInputIndicator();
  updateCanvasEntryOverlay();
}

function setButtonActionLabel(btn, text) {
  if (!btn) return;
  const label = btn.querySelector(".action-label");
  if (label) label.textContent = text;
  else btn.textContent = text;
}

function syncLiveAudioQuickUi() {
  if (liveAudioInputQuick && audioInputSource) liveAudioInputQuick.value = audioInputSource.value;
  if (liveAudioTargetQuick && audioTarget) liveAudioTargetQuick.value = audioTarget.value;
  if (liveAudioSensitivityQuick && controls.audioSensitivity) {
    liveAudioSensitivityQuick.value = controls.audioSensitivity.value;
    const out = liveAudioSensitivityQuick.parentElement?.querySelector("output");
    if (out) out.textContent = String(liveAudioSensitivityQuick.value);
  }
  if (liveAudioToleranceQuick && controls.audioTolerance) {
    liveAudioToleranceQuick.value = controls.audioTolerance.value;
    const out = liveAudioToleranceQuick.parentElement?.querySelector("output");
    if (out) out.textContent = String(liveAudioToleranceQuick.value);
  }
  if (liveAudioStatusQuick) {
    liveAudioStatusQuick.textContent = audioRouteStatus ? audioRouteStatus.textContent : t("audio_status_idle");
  }
  if (liveAudioInputPicker) {
    const isActiveRoute = hasAudioReactiveInput() || micActive || audioFileActive;
    liveAudioInputPicker.hidden = isActiveRoute;
  }
  if (liveAudioStartBtn) {
    const startLabel = hasAudioReactiveInput() || micActive || audioFileActive ? t("pause") : t("audio_input");
    setButtonActionLabel(liveAudioStartBtn, startLabel);
    liveAudioStartBtn.classList.toggle("audio-active", hasAudioReactiveInput());
  }
  if (liveAudioPauseBtn) {
    setButtonActionLabel(liveAudioPauseBtn, t("load_audio"));
    liveAudioPauseBtn.classList.remove("audio-active");
    liveAudioPauseBtn.disabled = false;
  }
  const inputMode = audioInputSource ? audioInputSource.value : "mic";
  const isFileMode = Boolean(inputMode === "file" && audioFilePlayer && audioFilePlayer.src);
  const hasLiveRoute = Boolean(hasAudioReactiveInput() || micActive || audioFileActive);
  const showAudioMini = Boolean(liveAudioFileMini && (isFileMode || hasLiveRoute));
  if (liveAudioFileMini) liveAudioFileMini.hidden = !showAudioMini;

  if (liveAudioFileControls) liveAudioFileControls.hidden = !isFileMode;
  if (liveAudioPlayPauseBtn) liveAudioPlayPauseBtn.hidden = !isFileMode;
  if (liveAudioSeek) liveAudioSeek.hidden = !isFileMode;
  if (liveAudioTime) liveAudioTime.hidden = !isFileMode;
  if (liveAudioClearBtn) liveAudioClearBtn.hidden = !isFileMode;
  if (liveAudioPlayPauseBtn) liveAudioPlayPauseBtn.disabled = !isFileMode;
  if (liveAudioSeek) liveAudioSeek.disabled = !isFileMode;
  if (liveAudioClearBtn) liveAudioClearBtn.disabled = !isFileMode;

  if (liveAudioFileName) {
    if (isFileMode) {
      const name = liveAudioFileName.dataset.text || liveAudioFileName.textContent || "-";
      liveAudioFileName.textContent = name;
      liveAudioFileName.dataset.text = name;
    } else if (hasLiveRoute) {
      const routeText = inputMode === "system" ? t("audio_input_system") : t("audio_input_mic");
      liveAudioFileName.textContent = routeText;
      liveAudioFileName.dataset.text = routeText;
    } else {
      liveAudioFileName.textContent = "-";
      liveAudioFileName.dataset.text = "";
    }
  }

  if (liveAudioPlayPauseBtn && audioFilePlayer && isFileMode) {
    liveAudioPlayPauseBtn.textContent = audioFilePlayer.paused ? t("play") : t("pause");
  }

  if (isFileMode) {
    updateLiveAudioFileMini();
  } else {
    if (liveAudioPlayPauseBtn) {
      liveAudioPlayPauseBtn.classList.remove("audio-rhythm-active");
      liveAudioPlayPauseBtn.style.setProperty("--audio-pulse", "0");
    }
    if (liveAudioTime) liveAudioTime.textContent = hasLiveRoute ? "LIVE" : "00:00 / 00:00";
    updateLiveAudioPlayPausePulse();
    drawLiveAudioWaveform(true);
  }
  updateLiveAudioPadDot();
}

function updateLiveAudioPadDot() {
  if (!liveAudioPad || !liveAudioPadDot || !controls.audioSensitivity || !controls.audioTolerance) return;
  const x = clamp(Number(controls.audioSensitivity.value) / 120, 0, 1);
  const y = clamp(1 - Number(controls.audioTolerance.value) / 120, 0, 1);
  liveAudioPadDot.style.left = `${x * 100}%`;
  liveAudioPadDot.style.top = `${y * 100}%`;
}

function updateLiveAudioPadVisual() {
  if (!liveAudioPad) return;
  const sensN = controls.audioSensitivity ? clamp(Number(controls.audioSensitivity.value) / 120, 0, 1) : 0;
  const tolN = controls.audioTolerance ? clamp(Number(controls.audioTolerance.value) / 120, 0, 1) : 0;
  const tolBoost = Math.pow(tolN, 0.82);
  const controlDrive = clamp(sensN * 0.56 + tolBoost * 0.86, 0, 1.45);
  const rawLevel = hasAudioReactiveInput()
    ? clamp(audioFeatures.rms * 0.72 + audioFeatures.bands[1] * 0.42 + audioFeatures.transient * 0.34, 0, 1.2)
    : 0;
  const level = clamp(rawLevel * controlDrive, 0, 1.4);
  const phase = (performance.now() * (0.035 + level * 0.11 + controlDrive * 0.03)) % 360;
  liveAudioPad.style.setProperty("--audio-react-level", level.toFixed(3));
  liveAudioPad.style.setProperty("--audio-react-phase", `${phase.toFixed(2)}deg`);
  if (!liveAudioPadScope || !liveAudioPadScopeCtx) return;
  const ctxScope = liveAudioPadScopeCtx;
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const cssW = Math.max(180, Math.floor(liveAudioPadScope.clientWidth || 420));
  const cssH = Math.max(72, Math.floor(liveAudioPadScope.clientHeight || 104));
  const rw = Math.floor(cssW * dpr);
  const rh = Math.floor(cssH * dpr);
  if (liveAudioPadScope.width !== rw || liveAudioPadScope.height !== rh) {
    liveAudioPadScope.width = rw;
    liveAudioPadScope.height = rh;
  }
  ctxScope.setTransform(1, 0, 0, 1, 0, 0);
  ctxScope.clearRect(0, 0, rw, rh);
  ctxScope.scale(dpr, dpr);
  ctxScope.fillStyle = "rgba(2,10,20,0.38)";
  ctxScope.fillRect(0, 0, cssW, cssH);
  const centerY = cssH * 0.5;
  ctxScope.strokeStyle = `rgba(120,190,255,${0.14 + controlDrive * 0.12})`;
  ctxScope.lineWidth = 1;
  ctxScope.beginPath();
  ctxScope.moveTo(0, centerY);
  ctxScope.lineTo(cssW, centerY);
  ctxScope.stroke();

  const hasData = Boolean(audioTimeData && audioTimeData.length && hasAudioReactiveInput());
  const samples = Math.min(160, Math.max(48, Math.floor(cssW * 0.45)));
  const amp = cssH * (0.025 + controlDrive * 0.14) + level * cssH * (0.28 + controlDrive * 0.52);
  const grad = ctxScope.createLinearGradient(0, 0, cssW, 0);
  grad.addColorStop(0, `rgba(115,244,255,${0.35 + controlDrive * 0.35 + level * 0.14})`);
  grad.addColorStop(1, `rgba(169,255,67,${0.32 + controlDrive * 0.32 + level * 0.16})`);

  ctxScope.shadowBlur = 5 + controlDrive * 10 + level * 10;
  ctxScope.shadowColor = `rgba(115,244,255,${0.12 + controlDrive * 0.18 + level * 0.16})`;
  ctxScope.strokeStyle = grad;
  ctxScope.lineWidth = 1.5 + controlDrive * 1.1 + level * 1.0;
  ctxScope.beginPath();
  for (let i = 0; i < samples; i += 1) {
    const p = i / Math.max(1, samples - 1);
    const x = p * cssW;
    let y = centerY;
    if (hasData && controlDrive > 0.01) {
      const idx = Math.floor(p * (audioTimeData.length - 1));
      const v = (audioTimeData[idx] - 128) / 128;
      y += v * amp;
    }
    y = clamp(y, 3, cssH - 3);
    if (i === 0) ctxScope.moveTo(x, y);
    else ctxScope.lineTo(x, y);
  }
  ctxScope.stroke();
  ctxScope.shadowBlur = 0;
}

function applyLiveAudioPadFromPointer(clientX, clientY) {
  if (!liveAudioPad || !controls.audioSensitivity || !controls.audioTolerance) return;
  const rect = liveAudioPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
  const ny = clamp((clientY - rect.top) / Math.max(1, rect.height), 0, 1);

  const sens = Math.round(nx * 120);
  const tol = Math.round((1 - ny) * 120);
  controls.audioSensitivity.value = String(sens);
  controls.audioTolerance.value = String(tol);

  if (liveAudioSensitivityQuick) {
    liveAudioSensitivityQuick.value = String(sens);
    const out = liveAudioSensitivityQuick.parentElement?.querySelector("output");
    if (out) out.textContent = String(sens);
  }
  if (liveAudioToleranceQuick) {
    liveAudioToleranceQuick.value = String(tol);
    const out = liveAudioToleranceQuick.parentElement?.querySelector("output");
    if (out) out.textContent = String(tol);
  }
  updateLiveAudioPadDot();
  updateOutputs();
  scheduleRender();
}

function syncLiveBackgroundQuickUi() {
  const modeVal = bgMode ? bgMode.value : "black";
  const paletteVal = bgPalette ? bgPalette.value : "custom";
  const colorAVal = bgColorA ? bgColorA.value : "#0b1026";
  const colorBVal = bgColorB ? bgColorB.value : "#30103d";

  if (live3dBgMode && document.activeElement !== live3dBgMode) live3dBgMode.value = modeVal;
  if (live3dBgPalette && document.activeElement !== live3dBgPalette) live3dBgPalette.value = paletteVal;
  if (live3dBgColorA && document.activeElement !== live3dBgColorA) live3dBgColorA.value = colorAVal;
  if (live3dBgColorB && document.activeElement !== live3dBgColorB) live3dBgColorB.value = colorBVal;

  if (liveParticlesBgMode && document.activeElement !== liveParticlesBgMode) liveParticlesBgMode.value = modeVal;
  if (liveParticlesBgPalette && document.activeElement !== liveParticlesBgPalette) liveParticlesBgPalette.value = paletteVal;
  if (liveParticlesBgColorA && document.activeElement !== liveParticlesBgColorA) liveParticlesBgColorA.value = colorAVal;
  if (liveParticlesBgColorB && document.activeElement !== liveParticlesBgColorB) liveParticlesBgColorB.value = colorBVal;
}

function applyLiveBackgroundQuickFrom(source) {
  if (!bgMode || !bgPalette || !bgColorA || !bgColorB || !source) return;
  if (source.mode && source.mode.value) bgMode.value = source.mode.value;
  if (source.palette && source.palette.value) bgPalette.value = source.palette.value;
  if (source.colorA && source.colorA.value) bgColorA.value = source.colorA.value;
  if (source.colorB && source.colorB.value) bgColorB.value = source.colorB.value;
  syncLiveBackgroundQuickUi();
  scheduleRender();
}

function formatMediaTime(sec) {
  if (!Number.isFinite(sec) || sec < 0) return "00:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function updateLiveAudioPlayPausePulse() {
  const hasReactive = hasAudioReactiveInput();
  const routeActive = Boolean(micActive || audioFileActive);
  const tNow = performance.now() / 1000;
  const energy = hasReactive
    ? clamp(audioFeatures.rms * 0.75 + audioFeatures.bands[1] * 0.38 + audioFeatures.transient * 0.34, 0, 1.25)
    : routeActive
      ? 0.08 + 0.06 * (0.5 + 0.5 * Math.sin(tNow * 2.4))
      : 0;

  // Main Live toggle pulse: reacts for file, mic, or system audio.
  if (liveAudioStartBtn) {
    liveAudioStartBtn.classList.toggle("audio-rhythm-active", routeActive);
    liveAudioStartBtn.style.setProperty("--audio-pulse", String(energy));
  }
  updateLiveAudioPadVisual();

  // Mini file play/pause pulse: only for file playback controls.
  if (!liveAudioPlayPauseBtn || !audioFilePlayer || !audioFilePlayer.src) {
    if (liveAudioPlayPauseBtn) {
      liveAudioPlayPauseBtn.classList.remove("audio-rhythm-active");
      liveAudioPlayPauseBtn.style.setProperty("--audio-pulse", "0");
    }
    return;
  }
  const fileActive = !audioFilePlayer.paused;
  liveAudioPlayPauseBtn.classList.toggle("audio-rhythm-active", fileActive);
  liveAudioPlayPauseBtn.style.setProperty("--audio-pulse", String(fileActive ? energy : 0));
}

function drawLiveAudioWaveform(force = false) {
  if (!liveAudioWaveform || !liveAudioWaveCtx) return;
  if (!force && liveAudioFileMini && liveAudioFileMini.hidden) return;
  const now = performance.now();
  if (!force && now - liveAudioWaveLastDrawMs < 33) return;
  liveAudioWaveLastDrawMs = now;
  const ctxWave = liveAudioWaveCtx;
  const dpr = Math.max(1, window.devicePixelRatio || 1);
  const cssW = Math.max(120, Math.floor(liveAudioWaveform.clientWidth || 520));
  const cssH = Math.max(24, Math.floor(liveAudioWaveform.clientHeight || 34));
  const rw = Math.floor(cssW * dpr);
  const rh = Math.floor(cssH * dpr);
  if (liveAudioWaveform.width !== rw || liveAudioWaveform.height !== rh) {
    liveAudioWaveform.width = rw;
    liveAudioWaveform.height = rh;
  }
  ctxWave.setTransform(1, 0, 0, 1, 0, 0);
  ctxWave.clearRect(0, 0, rw, rh);
  ctxWave.scale(dpr, dpr);
  ctxWave.fillStyle = "rgba(8, 12, 24, 0.78)";
  ctxWave.fillRect(0, 0, cssW, cssH);

  const bars = liveAudioWaveLevels.length;
  const gap = 2;
  const barW = Math.max(2, Math.floor((cssW - gap * (bars - 1)) / bars));
  const hasData = Boolean(audioData && audioData.length && hasAudioReactiveInput());

  for (let i = 0; i < bars; i += 1) {
    let vTarget = 0;
    if (hasData) {
      const idx = Math.floor((i / bars) * (audioData.length - 1));
      vTarget = clamp((audioData[idx] / 255) * 1.25, 0, 1);
    }
    liveAudioWaveLevels[i] = liveAudioWaveLevels[i] * 0.82 + vTarget * 0.18;
    const v = liveAudioWaveLevels[i];
    const h = Math.max(1, Math.round((cssH - 6) * (0.08 + v * 0.92)));
    const x = i * (barW + gap);
    const y = cssH - h - 3;
    const grad = ctxWave.createLinearGradient(x, y, x, cssH);
    grad.addColorStop(0, "rgba(115, 244, 255, 0.92)");
    grad.addColorStop(1, "rgba(169, 255, 67, 0.9)");
    ctxWave.fillStyle = grad;
    ctxWave.fillRect(x, y, barW, h);
  }
}

function updateLiveAudioFileMini() {
  if (!audioFilePlayer) return;
  if (liveAudioPlayPauseBtn) {
    liveAudioPlayPauseBtn.textContent = audioFilePlayer.paused ? t("play") : t("pause");
  }
  if (liveAudioSeek) {
    const dur = Number.isFinite(audioFilePlayer.duration) ? audioFilePlayer.duration : 0;
    const curr = Number.isFinite(audioFilePlayer.currentTime) ? audioFilePlayer.currentTime : 0;
    const ratio = dur > 0 ? clamp(curr / dur, 0, 1) : 0;
    liveAudioSeek.value = String(Math.round(ratio * 1000));
  }
  if (liveAudioTime) {
    const curr = Number.isFinite(audioFilePlayer.currentTime) ? audioFilePlayer.currentTime : 0;
    const dur = Number.isFinite(audioFilePlayer.duration) ? audioFilePlayer.duration : 0;
    liveAudioTime.textContent = `${formatMediaTime(curr)} / ${formatMediaTime(dur)}`;
  }
  updateLiveAudioPlayPausePulse();
  drawLiveAudioWaveform(true);
}

function updateQuickInputIndicator() {
  let activeValue = "clear";
  let activeLabel = t("input_active_none");
  if (webcamActive && webcamVideo && webcamVideo.videoWidth && webcamVideo.videoHeight) {
    activeValue = "webcam";
    activeLabel = t("input_active_webcam");
  } else if (loadedImage && (loadedImage.naturalWidth || loadedImage.width)) {
    activeValue = "image";
    activeLabel = t("input_active_image");
  } else if (noInputModeActive || (originalImageData && !loadedImage && !webcamActive)) {
    activeValue = "noinput";
    activeLabel = t("input_active_noinput");
  }
  if (quickInputActiveText) {
    quickInputActiveText.textContent = `${t("input_active")}: ${activeLabel}`;
    quickInputActiveText.dataset.activeInput = activeValue;
  }
  if (quickInputSelect && quickInputSelect.value !== activeValue) {
    quickInputSelect.value = activeValue;
  }
  if (webcamSetupControls) {
    webcamSetupControls.hidden = activeValue !== "webcam";
  }
}

function updateInputSpecs() {
  updateQuickInputIndicator();
  if (!inputSpecs) return;
  if (webcamActive && webcamVideo && webcamVideo.videoWidth && webcamVideo.videoHeight) {
    inputSpecs.textContent = `${t("input_webcam")} ${webcamVideo.videoWidth}x${webcamVideo.videoHeight}`;
    return;
  }
  if (loadedImage && (loadedImage.naturalWidth || loadedImage.width)) {
    const w = loadedImage.naturalWidth || loadedImage.width;
    const h = loadedImage.naturalHeight || loadedImage.height;
    inputSpecs.textContent = `${t("input_image")} ${w}x${h}`;
    return;
  }
  if (canvas.width && canvas.height && originalImageData) {
    inputSpecs.textContent = `${t("input_frame")} ${canvas.width}x${canvas.height}`;
    return;
  }
  inputSpecs.textContent = t("input_none");
}

function hasActiveInput() {
  return Boolean(webcamActive || loadedImage || originalImageData || noInputModeActive);
}

function updateModuleRouteHint() {
  if (!moduleRouteHint) return;
  // Show the 3 module paths once an input exists, hide on cold start.
  moduleRouteHint.classList.toggle("hidden", !hasActiveInput());
}

function updateCanvasEntryOverlay() {
  if (!canvasEntryOverlay) return;
  const hasInput = hasActiveInput();
  canvasEntryOverlay.classList.toggle("hidden", hasInput);
  if (hasInput) stopPlaceholderAnimation();
  else startPlaceholderAnimation();
  updateModuleRouteHint();
}

function updateRecordSettingsUi() {
  const isScreen = recordSource && recordSource.value === "screen";
  if (recordResolution) recordResolution.disabled = Boolean(isScreen);
}

function syncAspectRatioControlForInput() {
  if (!aspectRatioSelect) return;
  // Keep ratio selectable for webcam and image inputs.
  aspectRatioSelect.disabled = false;
}

async function refreshCameraDeviceList(preserveSelection = true) {
  if (!cameraDeviceSelect || !navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) return;
  const prevSelection = preserveSelection
    ? (cameraDeviceSelect.value || selectedCameraDeviceId || "")
    : "";
  let videoInputs = [];
  try {
    const devices = await navigator.mediaDevices.enumerateDevices();
    videoInputs = devices.filter((d) => d.kind === "videoinput");
  } catch {
    videoInputs = [];
  }

  const activeId = webcamStream?.getVideoTracks?.()[0]?.getSettings?.().deviceId || "";
  cameraDeviceSelect.innerHTML = "";
  const autoOpt = document.createElement("option");
  autoOpt.value = "";
  autoOpt.textContent = t("camera_auto");
  cameraDeviceSelect.appendChild(autoOpt);

  videoInputs.forEach((dev, idx) => {
    const opt = document.createElement("option");
    opt.value = dev.deviceId;
    opt.textContent = dev.label || `${t("camera_device")} ${idx + 1}`;
    cameraDeviceSelect.appendChild(opt);
  });

  const desired = activeId || prevSelection;
  if (desired && videoInputs.some((d) => d.deviceId === desired)) {
    cameraDeviceSelect.value = desired;
  } else {
    cameraDeviceSelect.value = "";
  }
  selectedCameraDeviceId = cameraDeviceSelect.value || "";
  if (refreshCamsBtn) refreshCamsBtn.disabled = false;
}

function setUiMode(nextMode) {
  uiMode = nextMode === "edit" ? "edit" : "live";
  document.body.classList.toggle("ui-live", uiMode === "live");
  if (uiLiveBtn) uiLiveBtn.classList.toggle("active", uiMode === "live");
  if (uiEditBtn) uiEditBtn.classList.toggle("active", uiMode === "edit");
}

function getModulableIdsForMode(activeMode) {
  if (activeMode === "glitch") return glitchIds;
  if (activeMode === "depth") return depthIds;
  if (activeMode === "mix") return [...glitchIds, ...depthIds];
  return [];
}

function populateModTargets() {
  if (!modTarget) return;
  const prev = modTarget.value || "none";
  const allowed = new Set(getModulableIdsForMode(mode));
  modTarget.innerHTML = "";
  const none = document.createElement("option");
  none.value = "none";
  none.textContent = "None";
  modTarget.appendChild(none);
  Object.values(parameterStore)
    .filter((p) => p.isModulable && allowed.has(p.name))
    .forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p.name;
      opt.textContent = p.name;
      modTarget.appendChild(opt);
    });
  modTarget.value = [...modTarget.options].some((opt) => opt.value === prev) ? prev : "none";
}

function estimateActiveModuleLoad() {
  const n = (v, min = 0, max = 100) => clamp((Number(v) - min) / Math.max(1, max - min), 0, 1);
  let score = 0;

  if (mode === "glitch") {
    score += n(controls.pixelSort?.value) * 1.25;
    score += n(controls.byteCorrupt?.value) * 1.2;
    score += n(controls.motionTrail?.value) * 1.2;
    score += n(controls.animDistort?.value) * 1.15;
    score += n(controls.errorComplexity?.value) * 1.35;
    score += n(controls.polygonTrack?.value) * 1.3;
    score += n(controls.vhsDrift?.value) * 0.6;
    score += n(controls.tapeNoise?.value) * 0.5;
    score += n(controls.headSwitch?.value) * 0.5;
    score /= 7.2;
  } else if (mode === "depth" || mode === "mix") {
    score += n(controls.pointDensity?.value, 6, 40) * 1.2;
    score += n(controls.meshDensity?.value, 12, 90) * 1.15;
    score += n(controls.pointMap?.value) * 0.85;
    score += n(controls.meshMap?.value) * 0.85;
    score += n(controls.pointFloat?.value) * 0.6;
    score += n(controls.pointOrganic?.value) * 0.7;
    score /= 5.35;
  } else if (mode === "particles") {
    const countMap = { low: 0.25, med: 0.5, high: 0.8, ultra: 1 };
    const countKey = liveParticlesCount ? String(liveParticlesCount.value || "med").toLowerCase() : "med";
    score += countMap[countKey] ?? 0.5;
    score += n(liveParticlesTrail ? liveParticlesTrail.value : 0) * 0.85;
    score += n(liveParticlesFxAmount ? liveParticlesFxAmount.value : 0) * 0.7;
    score += n(liveParticlesNoise ? liveParticlesNoise.value : 0) * 0.7;
    score += n(liveParticlesFlow ? liveParticlesFlow.value : 0) * 0.7;
    score += n(liveParticlesAudioAmount ? liveParticlesAudioAmount.value : 0) * 0.55;
    score /= 4.4;
  } else if (mode === "fractal") {
    const qualityMap = { low: 0.35, med: 0.62, high: 1 };
    const qualityKey = liveFractalQuality ? String(liveFractalQuality.value || "med").toLowerCase() : "med";
    score += qualityMap[qualityKey] ?? 0.62;
    score += n(liveFractalGlow ? liveFractalGlow.value : 0) * 0.65;
    score += n(liveFractalFog ? liveFractalFog.value : 0) * 0.45;
    score += n(liveFractalSymmetry ? liveFractalSymmetry.value : 0, 8, 24) * 0.75;
    score += n(liveFractalPower ? liveFractalPower.value : 0) * 0.65;
    score += n(liveFractalOpticalAmount ? liveFractalOpticalAmount.value : 0) * 0.55;
    score += n(liveFractalPolygonize ? liveFractalPolygonize.value : 0) * 0.45;
    score += n(liveFractalWireStrength ? liveFractalWireStrength.value : 0) * 0.35;
    score += n(liveFractalPointOverlay ? liveFractalPointOverlay.value : 0) * 0.35;
    score /= 4.6;
  } else if (mode === "lines") {
    score += n(liveLinesDensity ? liveLinesDensity.value : 12, 6, 30) * 1.1;
    score += n(liveLinesThickness ? liveLinesThickness.value : 5, 1, 24) * 0.5;
    score += n(liveLinesCurvature ? liveLinesCurvature.value : 34) * 0.7;
    score += n(liveLinesDepth ? liveLinesDepth.value : 54) * 0.75;
    score += n(liveLinesLayerOffset ? liveLinesLayerOffset.value : 48) * 0.55;
    score += n(liveLinesSpeed ? liveLinesSpeed.value : 42) * 0.35;
    score += n(liveLinesInsideDepth ? liveLinesInsideDepth.value : 62) * 0.25;
    score += n(liveLinesStringVibe ? liveLinesStringVibe.value : 58, 0, 200) * 0.28;
    score += n(liveLinesConstellation ? liveLinesConstellation.value : 56) * 0.62;
    score /= 3.95;
  } else if (mode === "tunnel") {
    score += n(liveTunnelDensity ? liveTunnelDensity.value : 22, 8, 44) * 1.1;
    score += n(liveTunnelDepth ? liveTunnelDepth.value : 74) * 0.75;
    score += n(liveTunnelSpeed ? liveTunnelSpeed.value : 42) * 0.45;
    score += n(liveTunnelTwist ? liveTunnelTwist.value : 36) * 0.58;
    score += n(liveTunnelMesh ? liveTunnelMesh.value : 78) * 0.84;
    score += n(liveTunnelPoints ? liveTunnelPoints.value : 68) * 0.76;
    score += n(liveTunnelGlow ? liveTunnelGlow.value : 38) * 0.42;
    score += n(liveTunnelAudioAmount ? liveTunnelAudioAmount.value : 70) * 0.3;
    score /= 4.25;
  } else if (mode === "interior") {
    score += n(liveInteriorDensity ? liveInteriorDensity.value : 22, 8, 48) * 1.05;
    score += n(liveInteriorDepth ? liveInteriorDepth.value : 78) * 0.74;
    score += n(liveInteriorSpeed ? liveInteriorSpeed.value : 34) * 0.44;
    score += n(liveInteriorWave ? liveInteriorWave.value : 56) * 0.58;
    score += n(liveInteriorGlitch ? liveInteriorGlitch.value : 42) * 0.72;
    score += n(liveInteriorGlow ? liveInteriorGlow.value : 44) * 0.42;
    score += n(liveInteriorAudioAmount ? liveInteriorAudioAmount.value : 68) * 0.3;
    score /= 3.95;
  } else if (mode === "atlas") {
    score += n(liveAtlasComplexity ? liveAtlasComplexity.value : 22, 0, 30) * 1.08;
    score += n(liveAtlasVariation ? liveAtlasVariation.value : 58) * 0.64;
    score += n(liveAtlasComposition ? liveAtlasComposition.value : 58) * 0.52;
    score += n(liveAtlasMotion ? liveAtlasMotion.value : 46) * 0.58;
    score += n(liveAtlasContrast ? liveAtlasContrast.value : 56) * 0.36;
    score += n(liveAtlasColorMod ? liveAtlasColorMod.value : 62) * 0.2;
    score += n(liveAtlasMesh ? liveAtlasMesh.value : 46) * 0.24;
    score += n(liveAtlasSpheres ? liveAtlasSpheres.value : 36) * 0.24;
    score += n(liveAtlasAudioAmount ? liveAtlasAudioAmount.value : 72) * 0.34;
    score /= 3.96;
  } else if (mode === "materia") {
    score += n(liveMateriaLayers ? liveMateriaLayers.value : 52) * 0.95;
    score += n(liveMateriaFlow ? liveMateriaFlow.value : 58) * 0.76;
    score += n(liveMateriaPorosity ? liveMateriaPorosity.value : 48) * 0.66;
    score += n(liveMateriaDrift ? liveMateriaDrift.value : 42) * 0.58;
    score += n(liveMateriaContrast ? liveMateriaContrast.value : 54) * 0.35;
    score += n(liveMateriaAudioAmount ? liveMateriaAudioAmount.value : 66) * 0.33;
    score /= 3.3;
  } else if (mode === "code") {
    score += n(liveCodeDensity ? liveCodeDensity.value : 58) * 0.9;
    score += n(liveCodeSpeed ? liveCodeSpeed.value : 44) * 0.62;
    score += n(liveCodeZoom ? liveCodeZoom.value : 38) * 0.46;
    score += n(liveCodeLetters ? liveCodeLetters.value : 62) * 0.86;
    score += n(liveCodeFigure ? liveCodeFigure.value : 62) * 0.66;
    score += n(liveCodeLanguage ? liveCodeLanguage.value : 52) * 0.34;
    score += n(liveCodeGlow ? liveCodeGlow.value : 54) * 0.46;
    score += n(liveCodeAudioAmount ? liveCodeAudioAmount.value : 72) * 0.34;
    score /= 4.72;
  } else if (mode === "synth") {
    score += n(liveSynthBlend ? liveSynthBlend.value : 58) * 0.55;
    score += n(liveSynthEcho ? liveSynthEcho.value : 48) * 0.9;
    score += n(liveSynthSlit ? liveSynthSlit.value : 22) * 1.05;
    score += n(liveSynthDrift ? liveSynthDrift.value : 34) * 0.62;
    score += n(liveSynthColor ? liveSynthColor.value : 24) * 0.52;
    score += n(liveSynthAudioAmount ? liveSynthAudioAmount.value : 64) * 0.35;
    score /= 3.35;
  }

  if (isKaleidoFxActive()) score += 0.22 + n(kaleidoFxAmount ? kaleidoFxAmount.value : 38) * 0.28;
  if (masterFxMode && (masterFxMode.value || "none") !== "none") score += 0.18 + n(masterFxAmount ? masterFxAmount.value : 28) * 0.2;
  if (liveOutputView && liveOutputView.value === "dome") score += 0.16;
  if (webcamActive && (mode === "glitch" || mode === "particles" || mode === "synth" || mode === "lines" || mode === "tunnel" || mode === "interior" || mode === "atlas" || mode === "materia" || mode === "code")) score += 0.08;

  const fpsPressure = clamp((30 - fps) / 18, 0, 1);
  const finalScore = clamp(score * 0.72 + fpsPressure * 0.6, 0, 1);

  if (finalScore < 0.36) return { key: "low", score: finalScore };
  if (finalScore < 0.7) return { key: "medium", score: finalScore };
  return { key: "high", score: finalScore };
}

function updatePerformanceUI() {
  if (performanceStatus) performanceStatus.textContent = `FPS: ${fps.toFixed(1)}`;
  if (performanceHint) performanceHint.textContent = `${t("auto_performance")}: ${perfScale < 0.99 ? "ON" : "OFF"}`;
  if (canvasMiniResolution) {
    const w = canvas && canvas.width ? canvas.width : 0;
    const h = canvas && canvas.height ? canvas.height : 0;
    canvasMiniResolution.textContent = `Canvas ${w}x${h}`;
  }
  if (canvasMiniFps) {
    canvasMiniFps.textContent = `${fps.toFixed(1)} FPS`;
  }
  const load = estimateActiveModuleLoad();
  const loadText = load.key === "high" ? t("load_high") : load.key === "medium" ? t("load_medium") : t("load_low");
  if (moduleLoadStatus) {
    moduleLoadStatus.textContent = `${t("module_load")}: ${loadText}`;
    moduleLoadStatus.classList.remove("perf-load-low", "perf-load-medium", "perf-load-high");
    moduleLoadStatus.classList.add(load.key === "high" ? "perf-load-high" : load.key === "medium" ? "perf-load-medium" : "perf-load-low");
  }
  if (canvasMiniLoad) {
    canvasMiniLoad.textContent = `Load ${loadText}`;
    canvasMiniLoad.classList.remove("perf-load-low", "perf-load-medium", "perf-load-high");
    canvasMiniLoad.classList.add(load.key === "high" ? "perf-load-high" : load.key === "medium" ? "perf-load-medium" : "perf-load-low");
  }
}

function updatePerfScale() {
  let target = perfScale;
  if (fps < 22) target = 0.32;
  else if (fps < 24) target = 0.38;
  else if (fps < 28) target = 0.5;
  else if (fps < 32) target = 0.62;
  else if (fps < 40) target = 0.76;
  else if (fps < 48) target = 0.9;
  else target = 1;
  perfScale += (target - perfScale) * 0.18;
  perfScale = clamp(perfScale, 0.32, 1);
}

function updateAdaptivePostFxScale() {
  let target = 1;
  if (fps < 22) target = 0.3;
  else if (fps < 24) target = 0.38;
  else if (fps < 28) target = 0.5;
  else if (fps < 34) target = 0.62;
  else if (fps < 40) target = 0.76;
  else if (fps < 48) target = 0.88;
  const heavyStack = isKaleidoFxActive() && masterFxMode && (masterFxMode.value || "none") !== "none";
  if (heavyStack) target = Math.min(target, fps < 24 ? 0.34 : 0.62);
  adaptivePostFxScale += (target - adaptivePostFxScale) * 0.18;
  adaptivePostFxScale = clamp(adaptivePostFxScale, 0.28, 1);
}

function getAdaptivePostFxScale() {
  return adaptivePostFxScale;
}

function updateAudioAnalysis() {
  if (!hasAudioReactiveInput()) {
    audioFeatures.rms = 0;
    audioFeatures.bands = [0, 0, 0, 0];
    audioFeatures.transient = 0;
    transientEnergy = 0;
    audioReactiveEnv = 0;
    return;
  }
  analyser.getByteFrequencyData(audioData);
  if (audioTimeData) analyser.getByteTimeDomainData(audioTimeData);
  const n = audioData.length;
  let freqSumSq = 0;
  for (let i = 0; i < n; i++) {
    const v = audioData[i] / 255;
    freqSumSq += v * v;
  }
  const rmsFreq = Math.sqrt(freqSumSq / n);
  let rmsTime = 0;
  if (audioTimeData && audioTimeData.length) {
    let sum = 0;
    for (let i = 0; i < audioTimeData.length; i++) {
      const v = (audioTimeData[i] - 128) / 128;
      sum += v * v;
    }
    rmsTime = Math.sqrt(sum / audioTimeData.length);
  }
  const rmsRaw = rmsFreq * 0.45 + rmsTime * 0.55;

  const bins = [
    [0, Math.floor(n * 0.1)],
    [Math.floor(n * 0.1), Math.floor(n * 0.28)],
    [Math.floor(n * 0.28), Math.floor(n * 0.6)],
    [Math.floor(n * 0.6), n],
  ];
  const bands = bins.map(([a, b]) => {
    let s = 0;
    const len = Math.max(1, b - a);
    for (let i = a; i < b; i++) s += audioData[i] / 255;
    return s / len;
  });
  const bandEnergy = bands[1] * 0.55 + bands[2] * 0.3 + bands[3] * 0.15;
  const delta = Math.max(0, bandEnergy - lastBandEnergy);
  lastBandEnergy = bandEnergy * 0.84 + lastBandEnergy * 0.16;
  transientEnergy = transientEnergy * 0.82 + delta * 2.2;

  const floorTarget = clamp(rmsRaw * 0.7 + bands[0] * 0.22, 0.004, 0.24);
  audioNoiseFloor = audioNoiseFloor * 0.985 + floorTarget * 0.015;
  const gatedRms = Math.max(0, rmsRaw - audioNoiseFloor * 0.9);
  const normRms = clamp(gatedRms / Math.max(0.02, 1 - audioNoiseFloor), 0, 1.6);

  audioFeatures.rms = audioFeatures.rms * 0.7 + normRms * 0.3;
  audioFeatures.bands = audioFeatures.bands.map((prev, i) => prev * 0.7 + bands[i] * 0.3);
  audioFeatures.transient = clamp(transientEnergy, 0, 1.4);
}

function updateVisualAnalysis(imageData) {
  if (!imageData || !imageData.data) {
    visualFeatures.luma = visualFeatures.luma * 0.88;
    visualFeatures.motion = visualFeatures.motion * 0.82;
    return;
  }
  const { width, height, data } = imageData;
  const sampleX = Math.max(4, Math.floor(width / 20));
  const sampleY = Math.max(4, Math.floor(height / 20));
  const probe = [];
  let lsum = 0;
  let count = 0;
  for (let y = 0; y < height; y += sampleY) {
    for (let x = 0; x < width; x += sampleX) {
      const i = (y * width + x) * 4;
      const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;
      probe.push(lum);
      lsum += lum;
      count += 1;
    }
  }
  const lumaNow = count ? lsum / count : 0;
  let motionNow = 0;
  if (prevVisualProbe && prevVisualProbe.length === probe.length) {
    let md = 0;
    for (let i = 0; i < probe.length; i++) {
      md += Math.abs(probe[i] - prevVisualProbe[i]);
    }
    motionNow = md / probe.length;
  }
  prevVisualProbe = probe;
  visualFeatures.luma = visualFeatures.luma * 0.8 + lumaNow * 0.2;
  visualFeatures.motion = visualFeatures.motion * 0.72 + clamp(motionNow * 4.5, 0, 1.2) * 0.28;
}

function getModSignal(tSec) {
  if (!modSource) return 0;
  const source = modSource.value;
  if (source === "none") return 0;
  if (source === "manual") return 1;
  if (source === "lfo") return 0.5 + Math.sin(tSec * 1.2) * 0.5;
  if (source === "rms") return audioFeatures.rms;
  if (source === "band1") return audioFeatures.bands[0];
  if (source === "band2") return audioFeatures.bands[1];
  if (source === "band3") return audioFeatures.bands[2];
  if (source === "band4") return audioFeatures.bands[3];
  if (source === "transient") return audioFeatures.transient;
  if (source === "visual_luma") return visualFeatures.luma;
  if (source === "visual_motion") return visualFeatures.motion;
  return 0;
}

function applyModulation(settings, tSec) {
  if (!modSource || !modTarget) return settings;
  const target = modTarget.value;
  if (!target || target === "none" || !parameterStore[target]) return settings;
  const allowed = new Set(getModulableIdsForMode(mode));
  if (!allowed.has(target)) return settings;
  const amount = Number(modAmount ? modAmount.value : 0) / 100;
  const smooth = Number(modSmoothing ? modSmoothing.value : 60) / 100;
  const clampPct = Number(modClamp ? modClamp.value : 100) / 100;
  const signal = clamp(getModSignal(tSec), 0, 1.5);
  modSignalSmoothed = modSignalSmoothed * smooth + signal * (1 - smooth);
  const norm = clamp(modSignalSmoothed / 1.5, 0, 1);
  const curve = modCurve ? modCurve.value : "smooth";
  let curved = norm;
  if (curve === "smooth") curved = norm * norm * (3 - 2 * norm);
  else if (curve === "punch") curved = Math.pow(norm, 0.55);
  else if (curve === "step") curved = Math.round(norm * 6) / 6;
  const signalShaped = clamp(curved * 1.5, 0, 1.5);
  const [mn, mx] = [parameterStore[target].min, parameterStore[target].max];
  const base = settings[target];
  const span = mx - mn;
  const delta = signalShaped * amount * span * clampPct;
  settings[target] = clamp(base + delta, mn, mx);
  return settings;
}

function updateDepthPadDot() {
  if (!depthPad || !depthPadDot || !controls.pointRotateX || !controls.pointRotateY) return;
  const nx = clamp((Number(controls.pointRotateY.value) + 90) / 180, 0, 1);
  const ny = clamp(0.5 - Number(controls.pointRotateX.value) / 180, 0, 1);
  depthPadDot.style.left = `${nx * 100}%`;
  depthPadDot.style.top = `${ny * 100}%`;
}

function updateLiveModPadDot() {
  if (!liveModPad || !liveModPadDot || !modAmount || !modSmoothing) return;
  const x = clamp((Number(modAmount.value) + 100) / 200, 0, 1);
  const y = clamp(1 - Number(modSmoothing.value) / 100, 0, 1);
  liveModPadDot.style.left = `${x * 100}%`;
  liveModPadDot.style.top = `${y * 100}%`;
}

function updateMasterFxPadDot() {
  if (!masterFxPad || !masterFxPadDot || !masterFxAmount || !masterFxColor) return;
  const x = clamp(Number(masterFxAmount.value) / 100, 0, 1);
  const y = clamp(1 - Number(masterFxColor.value) / 100, 0, 1);
  masterFxPadDot.style.left = `${x * 100}%`;
  masterFxPadDot.style.top = `${y * 100}%`;
}

function updateKaleidoFxPadDot() {
  if (!kaleidoFxPad || !kaleidoFxPadDot || !kaleidoFxAmount || !kaleidoFxSmooth) return;
  const x = clamp(Number(kaleidoFxAmount.value) / 100, 0, 1);
  const y = clamp(1 - Number(kaleidoFxSmooth.value) / 100, 0, 1);
  kaleidoFxPadDot.style.left = `${x * 100}%`;
  kaleidoFxPadDot.style.top = `${y * 100}%`;
}

function applyDepthPadFromPointer(clientX, clientY) {
  if (!depthPad) return;
  const rect = depthPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  if (controls.pointRotateY) controls.pointRotateY.value = Math.round(nx * 180 - 90);
  if (controls.pointRotateX) controls.pointRotateX.value = Math.round((0.5 - ny) * 180);
  if (controls.pointLift) controls.pointLift.value = Math.round(ny * 100);
  if (controls.pointSpread) controls.pointSpread.value = Math.round(Math.abs(nx - 0.5) * 2 * 200);
  updateDepthPadDot();
  updateOutputs();
  scheduleRender();
}

function applyLiveModPadFromPointer(clientX, clientY) {
  if (!liveModPad || !modAmount || !modSmoothing || !modClamp) return;
  const rect = liveModPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  modAmount.value = String(Math.round((nx * 2 - 1) * 100));
  modSmoothing.value = String(Math.round((1 - ny) * 100));
  modClamp.value = String(Math.round(45 + ny * 55));
  updateOutputs();
  scheduleRender();
}

function applyMasterFxPadFromPointer(clientX, clientY) {
  if (!masterFxPad || !masterFxAmount || !masterFxColor || !masterFxSpeed) return;
  const rect = masterFxPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  masterFxAmount.value = String(Math.round(nx * 100));
  masterFxColor.value = String(Math.round((1 - ny) * 100));
  masterFxSpeed.value = String(Math.round(12 + nx * 68 + (1 - ny) * 20));
  updateMasterFxPadDot();
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyKaleidoFxPadFromPointer(clientX, clientY) {
  if (!kaleidoFxPad || !kaleidoFxAmount || !kaleidoFxSmooth || !kaleidoFxSpeed) return;
  const rect = kaleidoFxPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  kaleidoFxAmount.value = String(Math.round(nx * 100));
  kaleidoFxSmooth.value = String(Math.round((1 - ny) * 100));
  kaleidoFxSpeed.value = String(Math.round(10 + nx * 58 + (1 - ny) * 30));
  updateKaleidoFxPadDot();
  updateLiveQuickOutputs();
  scheduleRender();
}

function updateQuickOutputById(id, value) {
  if (!id) return;
  const out = document.querySelector(`output[for="${id}"]`);
  if (out) out.textContent = String(value);
}

function updateMasterFxSummaryStatus() {
  if (!masterFxSummaryStatus || !masterFxMode) return;
  const selected = masterFxMode.options?.[masterFxMode.selectedIndex];
  const label = (selected && selected.textContent ? selected.textContent : "None").trim();
  const active = (masterFxMode.value || "none") !== "none";
  masterFxSummaryStatus.textContent = `${active ? "ON" : "OFF"} · ${label}`;
  masterFxSummaryStatus.classList.toggle("is-active", active);
}

function updateKaleidoFxSummaryStatus() {
  if (!kaleidoFxSummaryStatus || !kaleidoFxType) return;
  const selected = kaleidoFxType.options?.[kaleidoFxType.selectedIndex];
  const label = (selected && selected.textContent ? selected.textContent : "Tunnel").trim();
  const active = Boolean(kaleidoFxEnabled && kaleidoFxEnabled.checked);
  kaleidoFxSummaryStatus.textContent = `${active ? "ON" : "OFF"} · ${label}`;
  kaleidoFxSummaryStatus.classList.toggle("is-active", active);
}

function updateLiveQuickOutputs() {
  updateMasterFxSummaryStatus();
  updateKaleidoFxSummaryStatus();
  updateQuickOutputById("liveAudioSensitivityQuick", liveAudioSensitivityQuick ? liveAudioSensitivityQuick.value : 0);
  updateQuickOutputById("liveAudioToleranceQuick", liveAudioToleranceQuick ? liveAudioToleranceQuick.value : 0);
  updateLiveAudioPadDot();
  const now = performance.now();
  const padVisualStep = runtimeIsTouch ? 66 : 0;
  if (!runtimeIsTouch || now - lastAudioPadVisualTs >= padVisualStep) {
    updateLiveAudioPadVisual();
    lastAudioPadVisualTs = now;
  }
  updateQuickOutputById("liveGlitchIntensity", liveGlitchIntensity ? liveGlitchIntensity.value : 0);
  updateQuickOutputById("liveGlitchColor", liveGlitchColor ? liveGlitchColor.value : 0);
  updateQuickOutputById("liveGlitchError", liveGlitchError ? liveGlitchError.value : 0);
  updateQuickOutputById("liveGlitchTracking", liveGlitchTracking ? liveGlitchTracking.value : 0);
  updateQuickOutputById("liveGlitchTrail", liveGlitchTrail ? liveGlitchTrail.value : 0);
  updateQuickOutputById("liveGlitchAnim", liveGlitchAnim ? liveGlitchAnim.value : 0);
  updateQuickOutputById("liveSynthBlend", liveSynthBlend ? liveSynthBlend.value : 0);
  updateQuickOutputById("liveSynthEcho", liveSynthEcho ? liveSynthEcho.value : 0);
  updateQuickOutputById("liveSynthSlit", liveSynthSlit ? liveSynthSlit.value : 0);
  updateQuickOutputById("liveSynthDrift", liveSynthDrift ? liveSynthDrift.value : 0);
  updateQuickOutputById("liveSynthColor", liveSynthColor ? liveSynthColor.value : 0);
  updateQuickOutputById("liveSynthAudioAmount", liveSynthAudioAmount ? liveSynthAudioAmount.value : 0);
  updateLiveSynthPadDot();
  updateQuickOutputById("liveFractalSymmetry", liveFractalSymmetry ? liveFractalSymmetry.value : 0);
  updateQuickOutputById("liveFractalCamSpeed", liveFractalCamSpeed ? liveFractalCamSpeed.value : 0);
  updateQuickOutputById("liveFractalDistance", liveFractalDistance ? liveFractalDistance.value : 0);
  updateQuickOutputById("liveFractalShapeMorph", liveFractalShapeMorph ? liveFractalShapeMorph.value : 0);
  updateQuickOutputById("liveFractalPower", liveFractalPower ? liveFractalPower.value : 0);
  updateQuickOutputById("liveFractalFog", liveFractalFog ? liveFractalFog.value : 0);
  updateQuickOutputById("liveFractalGlow", liveFractalGlow ? liveFractalGlow.value : 0);
  updateQuickOutputById("liveFractalLight", liveFractalLight ? liveFractalLight.value : 0);
  updateQuickOutputById("liveFractalSpin", liveFractalSpin ? liveFractalSpin.value : 0);
  updateQuickOutputById("liveFractalBreath", liveFractalBreath ? liveFractalBreath.value : 0);
  updateQuickOutputById("liveFractalFlow", liveFractalFlow ? liveFractalFlow.value : 0);
  updateQuickOutputById("liveFractalWarmth", liveFractalWarmth ? liveFractalWarmth.value : 0);
  updateQuickOutputById("liveFractalAudioGain", liveFractalAudioGain ? liveFractalAudioGain.value : 0);
  updateQuickOutputById("liveFractalTextureMix", liveFractalTextureMix ? liveFractalTextureMix.value : 0);
  updateQuickOutputById("liveFractalOpticalAmount", liveFractalOpticalAmount ? liveFractalOpticalAmount.value : 0);
  updateQuickOutputById("liveFractalPolygonize", liveFractalPolygonize ? liveFractalPolygonize.value : 0);
  updateQuickOutputById("liveFractalWireStrength", liveFractalWireStrength ? liveFractalWireStrength.value : 0);
  updateQuickOutputById("liveFractalPointOverlay", liveFractalPointOverlay ? liveFractalPointOverlay.value : 0);
  updateQuickOutputById("live3dPoints", live3dPoints ? live3dPoints.value : 0);
  updateQuickOutputById("live3dMesh", live3dMesh ? live3dMesh.value : 0);
  updateQuickOutputById("live3dPointOpacity", live3dPointOpacity ? live3dPointOpacity.value : 0);
  updateQuickOutputById("live3dMeshOpacity", live3dMeshOpacity ? live3dMeshOpacity.value : 0);
  updateQuickOutputById("live3dDepthWarp", live3dDepthWarp ? live3dDepthWarp.value : 0);
  updateQuickOutputById("live3dSeparation", live3dSeparation ? live3dSeparation.value : 0);
  updateQuickOutputById("live3dBackground", live3dBackground ? live3dBackground.value : 0);
  updateQuickOutputById("live3dOrganic", live3dOrganic ? live3dOrganic.value : 0);
  updateQuickOutputById("live3dLight", live3dLight ? live3dLight.value : 0);
  updateQuickOutputById("live3dExposure", live3dExposure ? live3dExposure.value : 0);
  updateQuickOutputById("live3dAmbient", live3dAmbient ? live3dAmbient.value : 0);
  updateQuickOutputById("live3dLightAzimuth", live3dLightAzimuth ? live3dLightAzimuth.value : 0);
  updateQuickOutputById("live3dLightElevation", live3dLightElevation ? live3dLightElevation.value : 0);
  updateQuickOutputById("live3dFxAmount", live3dFxAmount ? live3dFxAmount.value : 0);
  updateQuickOutputById("masterFxAmount", masterFxAmount ? masterFxAmount.value : 0);
  updateQuickOutputById("masterFxSpeed", masterFxSpeed ? masterFxSpeed.value : 0);
  updateQuickOutputById("masterFxColor", masterFxColor ? masterFxColor.value : 0);
  updateQuickOutputById("kaleidoFxAmount", kaleidoFxAmount ? kaleidoFxAmount.value : 0);
  updateQuickOutputById("kaleidoFxSpeed", kaleidoFxSpeed ? kaleidoFxSpeed.value : 0);
  updateQuickOutputById("kaleidoFxSmooth", kaleidoFxSmooth ? kaleidoFxSmooth.value : 0);
  updateQuickOutputById("kaleidoFxSegments", kaleidoFxSegments ? kaleidoFxSegments.value : 0);
  updateQuickOutputById("kaleidoFxZoom", kaleidoFxZoom ? kaleidoFxZoom.value : 0);
  updateQuickOutputById("live3dAnaglyphStrength", live3dAnaglyphStrength ? live3dAnaglyphStrength.value : 0);
  updateQuickOutputById("liveParticlesSize", liveParticlesSize ? liveParticlesSize.value : 0);
  updateQuickOutputById("liveParticlesDepth", liveParticlesDepth ? liveParticlesDepth.value : 0);
  updateQuickOutputById("liveParticlesNoise", liveParticlesNoise ? liveParticlesNoise.value : 0);
  updateQuickOutputById("liveParticlesAttractor", liveParticlesAttractor ? liveParticlesAttractor.value : 0);
  updateQuickOutputById("liveParticlesFlow", liveParticlesFlow ? liveParticlesFlow.value : 0);
  updateQuickOutputById("liveParticlesCamSpeed", liveParticlesCamSpeed ? liveParticlesCamSpeed.value : 0);
  updateQuickOutputById("liveParticlesCamX", liveParticlesCamX ? liveParticlesCamX.value : 0);
  updateQuickOutputById("liveParticlesCamY", liveParticlesCamY ? liveParticlesCamY.value : 0);
  updateQuickOutputById("liveParticlesCamZ", liveParticlesCamZ ? liveParticlesCamZ.value : 0);
  updateQuickOutputById("liveParticlesHue", liveParticlesHue ? liveParticlesHue.value : 0);
  updateQuickOutputById("liveParticlesAudioAmount", liveParticlesAudioAmount ? liveParticlesAudioAmount.value : 0);
  updateQuickOutputById("liveParticlesTrail", liveParticlesTrail ? liveParticlesTrail.value : 0);
  updateQuickOutputById("liveParticlesFxAmount", liveParticlesFxAmount ? liveParticlesFxAmount.value : 0);
  updateQuickOutputById("liveParticlesOrder", liveParticlesOrder ? liveParticlesOrder.value : 0);
  updateQuickOutputById("liveParticlesDamping", liveParticlesDamping ? liveParticlesDamping.value : 0);
  updateQuickOutputById("liveParticlesVortex", liveParticlesVortex ? liveParticlesVortex.value : 0);
  updateQuickOutputById("liveParticlesSpawn", liveParticlesSpawn ? liveParticlesSpawn.value : 0);
  updateQuickOutputById("liveParticlesMotionThreshold", liveParticlesMotionThreshold ? liveParticlesMotionThreshold.value : 0);
  updateQuickOutputById("liveParticlesDrift", liveParticlesDrift ? liveParticlesDrift.value : 0);
  updateQuickOutputById("liveParticlesFocus", liveParticlesFocus ? liveParticlesFocus.value : 0);
  updateQuickOutputById("liveParticlesColorMix", liveParticlesColorMix ? liveParticlesColorMix.value : 0);
  updateQuickOutputById("liveParticlesGradientSpread", liveParticlesGradientSpread ? liveParticlesGradientSpread.value : 0);
  updateQuickOutputById("liveLinesDensity", liveLinesDensity ? liveLinesDensity.value : 0);
  updateQuickOutputById("liveLinesMacro", liveLinesMacro ? liveLinesMacro.value : 0);
  updateQuickOutputById("liveLinesThickness", liveLinesThickness ? liveLinesThickness.value : 0);
  updateQuickOutputById("liveLinesCurvature", liveLinesCurvature ? liveLinesCurvature.value : 0);
  updateQuickOutputById("liveLinesDepth", liveLinesDepth ? liveLinesDepth.value : 0);
  updateQuickOutputById("liveLinesLayerOffset", liveLinesLayerOffset ? liveLinesLayerOffset.value : 0);
  updateQuickOutputById("liveLinesColorShift", liveLinesColorShift ? liveLinesColorShift.value : 0);
  updateQuickOutputById("liveLinesSpeed", liveLinesSpeed ? liveLinesSpeed.value : 0);
  updateQuickOutputById("liveLinesCamDrift", liveLinesCamDrift ? liveLinesCamDrift.value : 0);
  updateQuickOutputById("liveLinesInsideDepth", liveLinesInsideDepth ? liveLinesInsideDepth.value : 0);
  updateQuickOutputById("liveLinesStringVibe", liveLinesStringVibe ? liveLinesStringVibe.value : 0);
  updateQuickOutputById("liveLinesConstellation", liveLinesConstellation ? liveLinesConstellation.value : 0);
  updateQuickOutputById("liveTunnelDensity", liveTunnelDensity ? liveTunnelDensity.value : 0);
  updateQuickOutputById("liveTunnelDepth", liveTunnelDepth ? liveTunnelDepth.value : 0);
  updateQuickOutputById("liveTunnelSpeed", liveTunnelSpeed ? liveTunnelSpeed.value : 0);
  updateQuickOutputById("liveTunnelTwist", liveTunnelTwist ? liveTunnelTwist.value : 0);
  updateQuickOutputById("liveTunnelMesh", liveTunnelMesh ? liveTunnelMesh.value : 0);
  updateQuickOutputById("liveTunnelPoints", liveTunnelPoints ? liveTunnelPoints.value : 0);
  updateQuickOutputById("liveTunnelGlow", liveTunnelGlow ? liveTunnelGlow.value : 0);
  updateQuickOutputById("liveTunnelAudioAmount", liveTunnelAudioAmount ? liveTunnelAudioAmount.value : 0);
  updateQuickOutputById("liveInteriorDensity", liveInteriorDensity ? liveInteriorDensity.value : 0);
  updateQuickOutputById("liveInteriorDepth", liveInteriorDepth ? liveInteriorDepth.value : 0);
  updateQuickOutputById("liveInteriorSpeed", liveInteriorSpeed ? liveInteriorSpeed.value : 0);
  updateQuickOutputById("liveInteriorWave", liveInteriorWave ? liveInteriorWave.value : 0);
  updateQuickOutputById("liveInteriorGlitch", liveInteriorGlitch ? liveInteriorGlitch.value : 0);
  updateQuickOutputById("liveInteriorGlow", liveInteriorGlow ? liveInteriorGlow.value : 0);
  updateQuickOutputById("liveInteriorAudioAmount", liveInteriorAudioAmount ? liveInteriorAudioAmount.value : 0);
  updateQuickOutputById("liveAtlasSeed", liveAtlasSeed ? liveAtlasSeed.value : 0);
  updateQuickOutputById("liveAtlasVariation", liveAtlasVariation ? liveAtlasVariation.value : 0);
  updateQuickOutputById("liveAtlasComposition", liveAtlasComposition ? liveAtlasComposition.value : 0);
  updateQuickOutputById("liveAtlasComplexity", liveAtlasComplexity ? liveAtlasComplexity.value : 0);
  updateQuickOutputById("liveAtlasMotion", liveAtlasMotion ? liveAtlasMotion.value : 0);
  updateQuickOutputById("liveAtlasContrast", liveAtlasContrast ? liveAtlasContrast.value : 0);
  updateQuickOutputById("liveAtlasColorMod", liveAtlasColorMod ? liveAtlasColorMod.value : 0);
  updateQuickOutputById("liveAtlasMesh", liveAtlasMesh ? liveAtlasMesh.value : 0);
  updateQuickOutputById("liveAtlasSpheres", liveAtlasSpheres ? liveAtlasSpheres.value : 0);
  updateQuickOutputById("liveAtlasAudioAmount", liveAtlasAudioAmount ? liveAtlasAudioAmount.value : 0);
  updateQuickOutputById("liveMateriaSeed", liveMateriaSeed ? liveMateriaSeed.value : 0);
  updateQuickOutputById("liveMateriaFlow", liveMateriaFlow ? liveMateriaFlow.value : 0);
  updateQuickOutputById("liveMateriaPorosity", liveMateriaPorosity ? liveMateriaPorosity.value : 0);
  updateQuickOutputById("liveMateriaLayers", liveMateriaLayers ? liveMateriaLayers.value : 0);
  updateQuickOutputById("liveMateriaDrift", liveMateriaDrift ? liveMateriaDrift.value : 0);
  updateQuickOutputById("liveMateriaContrast", liveMateriaContrast ? liveMateriaContrast.value : 0);
  updateQuickOutputById("liveMateriaAudioAmount", liveMateriaAudioAmount ? liveMateriaAudioAmount.value : 0);
  updateQuickOutputById("liveCodeDensity", liveCodeDensity ? liveCodeDensity.value : 0);
  updateQuickOutputById("liveCodeSpeed", liveCodeSpeed ? liveCodeSpeed.value : 0);
  updateQuickOutputById("liveCodeZoom", liveCodeZoom ? liveCodeZoom.value : 0);
  updateQuickOutputById("liveCodeLetters", liveCodeLetters ? liveCodeLetters.value : 0);
  updateQuickOutputById("liveCodeFigure", liveCodeFigure ? liveCodeFigure.value : 0);
  updateQuickOutputById("liveCodeLanguage", liveCodeLanguage ? liveCodeLanguage.value : 0);
  updateQuickOutputById("liveCodeGlow", liveCodeGlow ? liveCodeGlow.value : 0);
  updateQuickOutputById("liveCodeBrightness", liveCodeBrightness ? liveCodeBrightness.value : 0);
  updateQuickOutputById("liveCodeAudioAmount", liveCodeAudioAmount ? liveCodeAudioAmount.value : 0);
  updateQuickOutputById("studioParticlesOrder", studioParticlesOrder ? studioParticlesOrder.value : 0);
  updateQuickOutputById("studioParticlesDrift", studioParticlesDrift ? studioParticlesDrift.value : 0);
  updateQuickOutputById("studioParticlesFocus", studioParticlesFocus ? studioParticlesFocus.value : 0);
  updateQuickOutputById("studioParticlesDamping", studioParticlesDamping ? studioParticlesDamping.value : 0);
  updateQuickOutputById("studioParticlesVortex", studioParticlesVortex ? studioParticlesVortex.value : 0);
  updateQuickOutputById("studioParticlesSpawn", studioParticlesSpawn ? studioParticlesSpawn.value : 0);
  updateQuickOutputById("studioParticlesMotionThreshold", studioParticlesMotionThreshold ? studioParticlesMotionThreshold.value : 0);
  updateQuickOutputById("studioParticlesColorMix", studioParticlesColorMix ? studioParticlesColorMix.value : 0);
  updateQuickOutputById("studioParticlesGradientSpread", studioParticlesGradientSpread ? studioParticlesGradientSpread.value : 0);
  updateQuickOutputById("domeWarp", domeWarp ? domeWarp.value : 0);
  updateQuickOutputById("domeOverscan", domeOverscan ? domeOverscan.value : 0);
  updateQuickOutputById("domeEdgeFeather", domeEdgeFeather ? domeEdgeFeather.value : 0);
  updateQuickOutputById("domeRimClamp", domeRimClamp ? domeRimClamp.value : 0);
  updateQuickOutputById("domeSeamBlend", domeSeamBlend ? domeSeamBlend.value : 0);
  updateQuickOutputById("domeTilt", domeTilt ? domeTilt.value : 0);
  updateQuickOutputById("domeRotate", domeRotate ? domeRotate.value : 0);
  updateQuickOutputById("domeAutoRotateSpeed", domeAutoRotateSpeed ? domeAutoRotateSpeed.value : 0);
  updateQuickOutputById("domeGrid", domeGrid ? domeGrid.value : 0);
}

function updateLiveFxPadDots() {
  if (liveGlitchPadDot && liveGlitchIntensity && liveGlitchColor) {
    const gx = clamp(Number(liveGlitchIntensity.value) / 100, 0, 1);
    const gy = clamp(1 - Number(liveGlitchColor.value) / 100, 0, 1);
    liveGlitchPadDot.style.left = `${gx * 100}%`;
    liveGlitchPadDot.style.top = `${gy * 100}%`;
  }
  if (liveGlitchPadBDot && liveGlitchError && liveGlitchTracking) {
    const gx = clamp(Number(liveGlitchError.value) / 100, 0, 1);
    const gy = clamp(1 - Number(liveGlitchTracking.value) / 100, 0, 1);
    liveGlitchPadBDot.style.left = `${gx * 100}%`;
    liveGlitchPadBDot.style.top = `${gy * 100}%`;
  }
  if (liveGlitchPadCDot && liveGlitchTrail && liveGlitchAnim) {
    const gx = clamp(Number(liveGlitchTrail.value) / 100, 0, 1);
    const gy = clamp(1 - Number(liveGlitchAnim.value) / 100, 0, 1);
    liveGlitchPadCDot.style.left = `${gx * 100}%`;
    liveGlitchPadCDot.style.top = `${gy * 100}%`;
  }
  if (live3dPointsPadDot && controls.pointMap && controls.pointSize) {
    const dx = clamp(Number(controls.pointMap.value) / 100, 0, 1);
    const dy = clamp(1 - (Number(controls.pointSize.value) - 1) / 9, 0, 1);
    live3dPointsPadDot.style.left = `${dx * 100}%`;
    live3dPointsPadDot.style.top = `${dy * 100}%`;
  }
  if (live3dMeshPadDot && controls.meshMap && controls.meshLift) {
    const mx = clamp(Number(controls.meshMap.value) / 100, 0, 1);
    const my = clamp(1 - Number(controls.meshLift.value) / 100, 0, 1);
    live3dMeshPadDot.style.left = `${mx * 100}%`;
    live3dMeshPadDot.style.top = `${my * 100}%`;
  }
  if (live3dPadBDot && live3dSeparation && live3dBackground) {
    const sx = clamp(Number(live3dSeparation.value) / 100, 0, 1);
    const sy = clamp(1 - Number(live3dBackground.value) / 100, 0, 1);
    live3dPadBDot.style.left = `${sx * 100}%`;
    live3dPadBDot.style.top = `${sy * 100}%`;
  }
  if (live3dCamPadDot && controls.cameraFollow && controls.cameraZoom) {
    const cx = clamp(Number(controls.cameraFollow.value) / 100, 0, 1);
    const cy = clamp(1 - (Number(controls.cameraZoom.value) - 40) / 140, 0, 1);
    live3dCamPadDot.style.left = `${cx * 100}%`;
    live3dCamPadDot.style.top = `${cy * 100}%`;
  }
  if (live3dRotPadDot && controls.pointRotateX && controls.pointRotateY) {
    const rx = clamp((Number(controls.pointRotateY.value) + 90) / 180, 0, 1);
    const ry = clamp(1 - (Number(controls.pointRotateX.value) + 90) / 180, 0, 1);
    live3dRotPadDot.style.left = `${rx * 100}%`;
    live3dRotPadDot.style.top = `${ry * 100}%`;
  }
  if (live3dColorPadDot && controls.pointColorShift && controls.meshColorShift) {
    const px = clamp(Number(controls.pointColorShift.value) / 360, 0, 1);
    const py = clamp(1 - Number(controls.meshColorShift.value) / 360, 0, 1);
    live3dColorPadDot.style.left = `${px * 100}%`;
    live3dColorPadDot.style.top = `${py * 100}%`;
  }
  updateMasterFxPadDot();
  updateKaleidoFxPadDot();
}

function applyLiveGlitchPadFromPointer(clientX, clientY) {
  if (!liveGlitchPad || !liveGlitchIntensity || !liveGlitchColor) return;
  const rect = liveGlitchPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  liveGlitchIntensity.value = String(Math.round(nx * 100));
  liveGlitchColor.value = String(Math.round((1 - ny) * 100));
  applyLiveGlitchMacros();
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLiveGlitchPadBFromPointer(clientX, clientY) {
  if (!liveGlitchPadB || !liveGlitchError || !liveGlitchTracking) return;
  const rect = liveGlitchPadB.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  liveGlitchError.value = String(Math.round(nx * 100));
  liveGlitchTracking.value = String(Math.round((1 - ny) * 100));
  applyLiveGlitchMacros();
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLiveGlitchPadCFromPointer(clientX, clientY) {
  if (!liveGlitchPadC || !liveGlitchTrail || !liveGlitchAnim) return;
  const rect = liveGlitchPadC.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  liveGlitchTrail.value = String(Math.round(nx * 100));
  liveGlitchAnim.value = String(Math.round((1 - ny) * 100));
  applyLiveGlitchMacros();
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLive3dPointsPadFromPointer(clientX, clientY) {
  if (!live3dPointsPad || !controls.pointMap || !controls.pointSize || !live3dPoints) return;
  const rect = live3dPointsPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  controls.pointMap.value = String(Math.round(nx * 100));
  controls.pointSize.value = String(Math.round(1 + (1 - ny) * 9));
  live3dPoints.value = controls.pointMap.value;
  updateOutputs();
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLive3dMeshPadFromPointer(clientX, clientY) {
  if (!live3dMeshPad || !controls.meshMap || !controls.meshLift || !live3dMesh) return;
  const rect = live3dMeshPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  targetMeshAmount = nx * 100;
  targetMeshLift = (1 - ny) * 100;
  if (smoothMeshAmount === null) smoothMeshAmount = Number(controls.meshMap.value);
  if (smoothMeshLift === null) smoothMeshLift = Number(controls.meshLift.value);
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLive3dPadBFromPointer(clientX, clientY) {
  if (!live3dPadB || !live3dSeparation || !live3dBackground) return;
  const rect = live3dPadB.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  live3dSeparation.value = String(Math.round(nx * 100));
  live3dBackground.value = String(Math.round((1 - ny) * 100));
  applyLive3dMacros();
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLive3dCamPadFromPointer(clientX, clientY) {
  if (!live3dCamPad || !controls.cameraFollow || !controls.cameraZoom) return;
  const rect = live3dCamPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  targetCamFollow = nx * 100;
  targetCamZoom = 40 + (1 - ny) * 140;
  if (smoothCamFollow === null) smoothCamFollow = Number(controls.cameraFollow.value);
  if (smoothCamZoom === null) smoothCamZoom = Number(controls.cameraZoom.value);
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLive3dRotPadFromPointer(clientX, clientY) {
  if (!live3dRotPad || !controls.pointRotateX || !controls.pointRotateY) return;
  const rect = live3dRotPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  targetRotY = nx * 180 - 90;
  targetRotX = (1 - ny) * 180 - 90;
  if (smoothRotY === null) smoothRotY = Number(controls.pointRotateY.value);
  if (smoothRotX === null) smoothRotX = Number(controls.pointRotateX.value);
  updateLiveFxPadDots();
  scheduleRender();
}

function applyLive3dColorPadFromPointer(clientX, clientY) {
  if (!live3dColorPad || !controls.pointColorShift || !controls.meshColorShift) return;
  const rect = live3dColorPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  targetPointHue = nx * 360;
  targetMeshHue = (1 - ny) * 360;
  if (smoothPointHue === null) smoothPointHue = Number(controls.pointColorShift.value);
  if (smoothMeshHue === null) smoothMeshHue = Number(controls.meshColorShift.value);
  updateLiveFxPadDots();
  scheduleRender();
}

function applySmoothCameraTargets() {
  let changed = false;
  const lerp = cameraFlowEase > 0.01 ? 0.055 : 0.14;

  if (targetCamFollow !== null && controls.cameraFollow) {
    if (smoothCamFollow === null) smoothCamFollow = Number(controls.cameraFollow.value);
    smoothCamFollow += (targetCamFollow - smoothCamFollow) * lerp;
    if (Math.abs(targetCamFollow - smoothCamFollow) < 0.12) {
      smoothCamFollow = targetCamFollow;
      targetCamFollow = null;
    }
    controls.cameraFollow.value = String(Math.round(smoothCamFollow));
    changed = true;
  }

  if (targetCamZoom !== null && controls.cameraZoom) {
    if (smoothCamZoom === null) smoothCamZoom = Number(controls.cameraZoom.value);
    smoothCamZoom += (targetCamZoom - smoothCamZoom) * lerp;
    if (Math.abs(targetCamZoom - smoothCamZoom) < 0.12) {
      smoothCamZoom = targetCamZoom;
      targetCamZoom = null;
    }
    controls.cameraZoom.value = String(Math.round(smoothCamZoom));
    changed = true;
  }

  if (targetRotY !== null && controls.pointRotateY) {
    if (smoothRotY === null) smoothRotY = Number(controls.pointRotateY.value);
    smoothRotY += (targetRotY - smoothRotY) * lerp;
    if (Math.abs(targetRotY - smoothRotY) < 0.12) {
      smoothRotY = targetRotY;
      targetRotY = null;
    }
    controls.pointRotateY.value = String(Math.round(smoothRotY));
    changed = true;
  }

  if (targetRotX !== null && controls.pointRotateX) {
    if (smoothRotX === null) smoothRotX = Number(controls.pointRotateX.value);
    smoothRotX += (targetRotX - smoothRotX) * lerp;
    if (Math.abs(targetRotX - smoothRotX) < 0.12) {
      smoothRotX = targetRotX;
      targetRotX = null;
    }
    controls.pointRotateX.value = String(Math.round(smoothRotX));
    changed = true;
  }

  if (targetRotZ !== null && controls.pointRotateZ) {
    if (smoothRotZ === null) smoothRotZ = Number(controls.pointRotateZ.value);
    smoothRotZ += (targetRotZ - smoothRotZ) * lerp;
    if (Math.abs(targetRotZ - smoothRotZ) < 0.12) {
      smoothRotZ = targetRotZ;
      targetRotZ = null;
    }
    controls.pointRotateZ.value = String(Math.round(smoothRotZ));
    changed = true;
  }

  if (targetPanX !== null) {
    cameraPanX += (targetPanX - cameraPanX) * (cameraFlowEase > 0.01 ? 0.08 : 0.14);
    if (Math.abs(targetPanX - cameraPanX) < 0.0025) {
      cameraPanX = targetPanX;
      targetPanX = null;
    }
    changed = true;
  }

  if (targetPanY !== null) {
    cameraPanY += (targetPanY - cameraPanY) * (cameraFlowEase > 0.01 ? 0.08 : 0.14);
    if (Math.abs(targetPanY - cameraPanY) < 0.0025) {
      cameraPanY = targetPanY;
      targetPanY = null;
    }
    changed = true;
  }

  if (cameraFlowEase > 0.01) {
    cameraFlowEase *= 0.92;
    changed = true;
  } else {
    cameraFlowEase = 0;
  }

  if (targetPointHue !== null && controls.pointColorShift) {
    if (smoothPointHue === null) smoothPointHue = Number(controls.pointColorShift.value);
    smoothPointHue += (targetPointHue - smoothPointHue) * lerp;
    if (Math.abs(targetPointHue - smoothPointHue) < 0.2) {
      smoothPointHue = targetPointHue;
      targetPointHue = null;
    }
    controls.pointColorShift.value = String(Math.round(clamp(smoothPointHue, 0, 360)));
    changed = true;
  }

  if (targetMeshHue !== null && controls.meshColorShift) {
    if (smoothMeshHue === null) smoothMeshHue = Number(controls.meshColorShift.value);
    smoothMeshHue += (targetMeshHue - smoothMeshHue) * lerp;
    if (Math.abs(targetMeshHue - smoothMeshHue) < 0.2) {
      smoothMeshHue = targetMeshHue;
      targetMeshHue = null;
    }
    controls.meshColorShift.value = String(Math.round(clamp(smoothMeshHue, 0, 360)));
    changed = true;
  }

  if (targetMeshAmount !== null && controls.meshMap) {
    if (smoothMeshAmount === null) smoothMeshAmount = Number(controls.meshMap.value);
    smoothMeshAmount += (targetMeshAmount - smoothMeshAmount) * 0.12;
    if (Math.abs(targetMeshAmount - smoothMeshAmount) < 0.2) {
      smoothMeshAmount = targetMeshAmount;
      targetMeshAmount = null;
    }
    controls.meshMap.value = String(Math.round(clamp(smoothMeshAmount, 0, 100)));
    if (live3dMesh) live3dMesh.value = controls.meshMap.value;
    changed = true;
  }

  if (targetMeshLift !== null && controls.meshLift) {
    if (smoothMeshLift === null) smoothMeshLift = Number(controls.meshLift.value);
    smoothMeshLift += (targetMeshLift - smoothMeshLift) * 0.12;
    if (Math.abs(targetMeshLift - smoothMeshLift) < 0.2) {
      smoothMeshLift = targetMeshLift;
      targetMeshLift = null;
    }
    controls.meshLift.value = String(Math.round(clamp(smoothMeshLift, 0, 100)));
    changed = true;
  }

  return changed;
}

function adjustCanvasZoom(delta, factor = 1) {
  if ((mode !== "depth" && mode !== "mix" && mode !== "particles") || !controls.cameraZoom) return;
  const current = Number(controls.cameraZoom.value);
  const next = clamp(current + delta * factor, 40, 180);
  controls.cameraZoom.value = String(Math.round(next));
  smoothCamZoom = next;
  targetCamZoom = null;
  updateOutputs();
  scheduleRender();
}

function syncLiveQuickControls() {
  const active = document.activeElement;
  const isLiveEditing =
    liveGlitchPadDragging ||
    liveGlitchPadBDragging ||
    liveGlitchPadCDragging ||
    liveSynthPadDragging ||
    active === liveGlitchIntensity ||
    active === liveGlitchColor ||
    active === liveGlitchError ||
    active === liveGlitchTracking ||
    active === liveGlitchTrail ||
    active === liveGlitchAnim ||
    active === liveSynthPreset ||
    active === liveSynthBlend ||
    active === liveSynthEcho ||
    active === liveSynthSlit ||
    active === liveSynthAxis ||
    active === liveSynthDrift ||
    active === liveSynthColor ||
    active === liveSynthAudio ||
    active === liveSynthAudioAmount ||
    active === liveFractalBehavior ||
    active === liveFractalQuality ||
    active === liveFractalPreset ||
    active === liveFractalCameraMode ||
    active === liveFractalAudioMode ||
    active === liveFractalDomeMode ||
    active === liveFractalVariant ||
    active === liveFractalCamSpeed ||
    active === liveFractalDistance ||
    active === liveFractalShape ||
    active === liveFractalShapeB ||
    active === liveFractalShapeMorph ||
    active === liveFractalSymmetry ||
    active === liveFractalPower ||
    active === liveFractalFog ||
    active === liveFractalGlow ||
    active === liveFractalLight ||
    active === liveFractalSpin ||
    active === liveFractalBreath ||
    active === liveFractalFlow ||
    active === liveFractalWarmth ||
    active === liveFractalTexture ||
    active === liveFractalTexture2 ||
    active === liveFractalTextureBlend ||
    active === liveFractalOverlayLock ||
    active === liveFractalTextureMix ||
    active === liveFractalPalette ||
    active === liveFractalRenderMode ||
    active === liveFractalOptical ||
    active === liveFractalOpticalAmount ||
    active === liveFractalPolygonize ||
    active === liveFractalWireStrength ||
    active === liveFractalPointOverlay ||
    active === liveFractalStyle ||
    active === liveFractalBackground ||
    active === liveFractalFlatColor ||
    active === liveFractalAudio ||
    active === liveFractalAudioGain ||
    active === live3dPoints ||
    active === live3dMesh ||
    active === live3dPointOpacity ||
    active === live3dMeshOpacity ||
    active === live3dDepthWarp ||
    active === live3dSeparation ||
    active === live3dBackground ||
    active === live3dOrganic ||
    active === live3dLight ||
    active === live3dRenderEngine ||
    active === live3dExposure ||
    active === live3dAmbient ||
    active === live3dLightAzimuth ||
    active === live3dLightElevation ||
    active === live3dFxMode ||
    active === live3dFxAmount ||
    active === live3dAudioSync ||
    active === live3dAnaglyph ||
    active === live3dAnaglyphStrength ||
    active === live3dLightingMode ||
    active === live3dBgMode ||
    active === live3dBgPalette ||
    active === live3dBgColorA ||
    active === live3dBgColorB ||
    active === liveParticlesCount ||
    active === liveParticlesEmitter ||
    active === liveParticlesSize ||
    active === liveParticlesDepth ||
    active === liveParticlesNoise ||
    active === liveParticlesAttractor ||
    active === liveParticlesFlow ||
    active === liveParticlesColorMode ||
    active === liveParticlesHue ||
    active === liveParticlesAudio ||
    active === liveParticlesAudioAmount ||
    active === liveParticlesStructure ||
    active === liveParticlesAudioSplit ||
    active === liveParticlesOrder ||
    active === liveParticlesDamping ||
    active === liveParticlesVortex ||
    active === liveParticlesSpawn ||
    active === liveParticlesMotionThreshold ||
    active === liveParticlesDrift ||
    active === liveParticlesFocus ||
    active === liveParticlesGradientMode ||
    active === liveParticlesColorMix ||
    active === liveParticlesGradientSpread ||
    active === liveParticlesGradientA ||
    active === liveParticlesGradientB ||
    active === liveParticlesBgMode ||
    active === liveParticlesBgPalette ||
    active === liveParticlesBgColorA ||
    active === liveParticlesBgColorB ||
    active === liveOutputView ||
    active === domePreset ||
    active === domeAutoTuneByMode ||
    active === domeWarp ||
    active === domeOverscan ||
    active === domeEdgeFeather ||
    active === domeRimClamp ||
    active === domeSeamBlend ||
    active === domeTilt ||
    active === domeProjection ||
    active === domeRotate ||
    active === domeAutoRotate ||
    active === domeAutoRotateSpeed ||
    active === domeGrid;

  if (isLiveEditing) {
    updateLiveFxPadDots();
    updateLiveQuickOutputs();
    return;
  }

  if (liveGlitchIntensity) {
    const val =
      (Number(controls.rgbShift.value) * 0.7 +
        Number(controls.noiseAmount.value) * 0.4 +
        Number(controls.blockShift.value) * 0.55) /
      1.65;
    liveGlitchIntensity.value = String(Math.round(clamp(val, 0, 100)));
  }
  if (liveGlitchColor) {
    const hueNorm = (Number(controls.hueShift.value) + 180) / 360;
    const satNorm = Number(controls.saturation.value) / 200;
    liveGlitchColor.value = String(Math.round(clamp(hueNorm * 50 + satNorm * 50, 0, 100)));
  }
  if (liveGlitchError) {
    liveGlitchError.value = String(Math.round(Number(controls.errorComplexity.value)));
  }
  if (liveGlitchTracking) liveGlitchTracking.value = String(Math.round(Number(controls.polygonTrack.value)));
  if (liveGlitchTrail) liveGlitchTrail.value = String(Math.round(Number(controls.motionTrail.value)));
  if (liveGlitchAnim) liveGlitchAnim.value = String(Math.round(Number(controls.animDistort.value)));

  if (live3dPoints) live3dPoints.value = String(Math.round(Number(controls.pointMap.value)));
  if (live3dMesh) live3dMesh.value = String(Math.round(Number(controls.meshMap.value)));
  if (live3dPointOpacity) {
    live3dPointOpacity.value = String(Math.round(Number(controls.live3dPointOpacity.value)));
  }
  if (live3dMeshOpacity) {
    live3dMeshOpacity.value = String(Math.round(Number(controls.live3dMeshOpacity.value)));
  }
  if (live3dDepthWarp) {
    live3dDepthWarp.value = String(Math.round(Number(controls.live3dDepthWarp.value)));
  }
  if (live3dSeparation) {
    const sep = Number(controls.pointSpread.value) * 0.55 + Number(controls.depthExaggeration.value) * 0.2;
    live3dSeparation.value = String(Math.round(clamp(sep / 1.1, 0, 100)));
  }
  if (live3dBackground) live3dBackground.value = String(Math.round(Number(controls.bgMotion.value)));
  if (live3dOrganic) live3dOrganic.value = String(Math.round(Number(controls.pointOrganic.value)));
  if (live3dLight) {
    live3dLight.value = String(Math.round(Number(controls.lightEnabled.value)));
  }
  if (live3dLightingMode) {
    live3dLightingMode.value = Number(controls.flatIllustrated.value) > 45 ? "flat" : "lit";
  }
  if (live3dExposure) {
    live3dExposure.value = String(Math.round(Number(controls.sceneExposure.value)));
  }
  if (live3dAmbient) {
    live3dAmbient.value = String(Math.round(Number(controls.ambientLight.value)));
  }
  if (live3dLightAzimuth) {
    live3dLightAzimuth.value = String(Math.round(Number(controls.lightAzimuth.value)));
  }
  if (live3dLightElevation) {
    live3dLightElevation.value = String(Math.round(Number(controls.lightElevation.value)));
  }
  if (liveCameraMode) liveCameraMode.value = cameraMode;
  syncLiveBackgroundQuickUi();
  updateLiveFxPadDots();
  updateLiveQuickOutputs();
}

function applyLiveGlitchMacros() {
  const i = Number(liveGlitchIntensity ? liveGlitchIntensity.value : 0);
  const c = Number(liveGlitchColor ? liveGlitchColor.value : 50);
  const e = Number(liveGlitchError ? liveGlitchError.value : Number(controls.errorComplexity.value));
  const t = Number(liveGlitchTracking ? liveGlitchTracking.value : 0);
  const tr = Number(liveGlitchTrail ? liveGlitchTrail.value : Number(controls.motionTrail.value));
  const ad = Number(liveGlitchAnim ? liveGlitchAnim.value : Number(controls.animDistort.value));
  const hue = Math.round((c - 50) * 3.6);
  const saturation = Math.round(70 + c * 1.2);
  const contrast = Math.round(84 + i * 0.9);
  setValues({
    rgbShift: Math.round(i * 0.5),
    lineJitter: Math.round(i * 0.66),
    noiseAmount: Math.round(i * 1.2),
    blockShift: Math.round(i * 0.85),
    pixelMelt: Math.round(i * 0.72),
    hueShift: clamp(hue, -180, 180),
    saturation: clamp(saturation, 0, 200),
    contrast: clamp(contrast, 40, 220),
    colorBlend: Math.round(c * 0.85),
    errorComplexity: Math.round(e),
    polygonTrack: t,
    motionTrail: Math.round(clamp(tr, 0, 100)),
    trailDecay: Math.round(clamp(50 + tr * 0.45, 0, 100)),
    trailThreshold: Math.round(clamp(28 + (100 - tr) * 0.55, 0, 100)),
    trailSoftness: Math.round(clamp(22 + tr * 0.62, 0, 100)),
    trailMotionOnly: Math.round(clamp(35 + t * 0.65, 0, 100)),
    animDistort: Math.round(clamp(ad, 0, 100)),
    animSpeed: Math.round(clamp(20 + ad * 0.8 + i * 0.25, 0, 100)),
  });
}

function applyLive3dMacros() {
  const p = Number(live3dPoints ? live3dPoints.value : 55);
  const m = Number(live3dMesh ? live3dMesh.value : 45);
  const dw = Number(live3dDepthWarp ? live3dDepthWarp.value : 0);
  const s = Number(live3dSeparation ? live3dSeparation.value : 30);
  const bg = Number(live3dBackground ? live3dBackground.value : 35);
  const o = Number(live3dOrganic ? live3dOrganic.value : 20);
  const l = Number(live3dLight ? live3dLight.value : 70);
  const exp = Number(live3dExposure ? live3dExposure.value : 110);
  const amb = Number(live3dAmbient ? live3dAmbient.value : 35);
  const az = Number(live3dLightAzimuth ? live3dLightAzimuth.value : -40);
  const el = Number(live3dLightElevation ? live3dLightElevation.value : 30);
  const style = live3dLightingMode ? live3dLightingMode.value : "lit";
  setValues({
    pointMap: Math.round(clamp(p, 0, 100)),
    meshMap: Math.round(clamp(m, 0, 100)),
    live3dDepthWarp: Math.round(clamp(dw, 0, 100)),
    depthStrength: Math.round(clamp(35 + p * 0.65, 0, 100)),
    depthExaggeration: Math.round(clamp(80 + s * 1.8, 40, 320)),
    pointSpread: Math.round(clamp(s * 1.7, 0, 200)),
    sceneExposure: Math.round(clamp(exp, 40, 220)),
    lightIntensity: Math.round(clamp(35 + l * 1.45, 0, 180)),
    ambientLight: Math.round(clamp(amb, 0, 100)),
    lightAzimuth: Math.round(clamp(az, -180, 180)),
    lightElevation: Math.round(clamp(el, -80, 80)),
    lightEnabled: Math.round(l),
    flatIllustrated: style === "flat" ? 100 : 0,
    // Keep default idle stable; add organic motion only when explicitly raised.
    pointFloat: Math.round(clamp(o * 0.22, 0, 48)),
    pointOrganic: Math.round(clamp(o, 0, 100)),
    autoRotate: 0,
    bgMotion: Math.round(clamp(bg, 0, 100)),
  });
}

function applyFractalPreset(presetId) {
  const preset = presetId || (liveFractalPreset ? liveFractalPreset.value : "sacred");
  if (liveFractalShape) liveFractalShape.value = "mandel";
  if (liveFractalShapeB) liveFractalShapeB.value = "mandel";
  if (liveFractalShapeMorph) liveFractalShapeMorph.value = "0";
  if (liveFractalAudioMode) liveFractalAudioMode.value = "balanced";
  if (liveFractalFlow) liveFractalFlow.value = "62";
  if (liveFractalTextureBlend) liveFractalTextureBlend.value = "screen";
  if (liveFractalPalette) liveFractalPalette.value = "cosmic";
  if (liveFractalOptical) liveFractalOptical.value = "off";
  if (liveFractalOpticalAmount) liveFractalOpticalAmount.value = "0";
  if (liveFractalPolygonize) liveFractalPolygonize.value = "0";
  if (liveFractalWireStrength) liveFractalWireStrength.value = "62";
  if (liveFractalPointOverlay) liveFractalPointOverlay.value = "38";
  if (preset === "inside") {
    if (liveFractalCameraMode) liveFractalCameraMode.value = "inside";
    if (liveFractalCamSpeed) liveFractalCamSpeed.value = "18";
    if (liveFractalDistance) liveFractalDistance.value = "28";
    if (liveFractalSymmetry) liveFractalSymmetry.value = "18";
    if (liveFractalPower) liveFractalPower.value = "94";
    if (liveFractalFog) liveFractalFog.value = "20";
    if (liveFractalGlow) liveFractalGlow.value = "70";
    if (liveFractalLight) liveFractalLight.value = "104";
    if (liveFractalTexture) liveFractalTexture.value = "contour";
    if (liveFractalRenderMode) liveFractalRenderMode.value = "hybrid";
    if (liveFractalTexture2) liveFractalTexture2.value = "cells";
    if (liveFractalTextureBlend) liveFractalTextureBlend.value = "screen";
    if (liveFractalTextureMix) liveFractalTextureMix.value = "56";
    if (liveFractalPalette) liveFractalPalette.value = "cosmic";
    if (liveFractalOptical) liveFractalOptical.value = "tunnel";
    if (liveFractalOpticalAmount) liveFractalOpticalAmount.value = "34";
    if (liveFractalAudioMode) liveFractalAudioMode.value = "spectral";
    if (liveFractalFlow) liveFractalFlow.value = "70";
    if (liveFractalPolygonize) liveFractalPolygonize.value = "26";
    if (liveFractalWireStrength) liveFractalWireStrength.value = "72";
    if (liveFractalPointOverlay) liveFractalPointOverlay.value = "44";
    if (liveFractalBackground) liveFractalBackground.value = "cosmic";
    if (liveFractalStyle) liveFractalStyle.value = "lit";
  } else if (preset === "flat") {
    if (liveFractalCameraMode) liveFractalCameraMode.value = "orbit";
    if (liveFractalCamSpeed) liveFractalCamSpeed.value = "20";
    if (liveFractalDistance) liveFractalDistance.value = "82";
    if (liveFractalSymmetry) liveFractalSymmetry.value = "12";
    if (liveFractalPower) liveFractalPower.value = "76";
    if (liveFractalFog) liveFractalFog.value = "6";
    if (liveFractalGlow) liveFractalGlow.value = "26";
    if (liveFractalLight) liveFractalLight.value = "85";
    if (liveFractalTexture) liveFractalTexture.value = "ink";
    if (liveFractalRenderMode) liveFractalRenderMode.value = "wire";
    if (liveFractalTexture2) liveFractalTexture2.value = "none";
    if (liveFractalTextureBlend) liveFractalTextureBlend.value = "multiply";
    if (liveFractalTextureMix) liveFractalTextureMix.value = "28";
    if (liveFractalPalette) liveFractalPalette.value = "mono";
    if (liveFractalOptical) liveFractalOptical.value = "opart";
    if (liveFractalOpticalAmount) liveFractalOpticalAmount.value = "22";
    if (liveFractalAudioMode) liveFractalAudioMode.value = "balanced";
    if (liveFractalFlow) liveFractalFlow.value = "78";
    if (liveFractalPolygonize) liveFractalPolygonize.value = "58";
    if (liveFractalWireStrength) liveFractalWireStrength.value = "84";
    if (liveFractalPointOverlay) liveFractalPointOverlay.value = "22";
    if (liveFractalBackground) liveFractalBackground.value = "solid";
    if (liveFractalStyle) liveFractalStyle.value = "flat";
    if (liveFractalFlatColor) liveFractalFlatColor.value = "#000000";
  } else if (preset === "ether") {
    if (liveFractalCameraMode) liveFractalCameraMode.value = "orbit";
    if (liveFractalCamSpeed) liveFractalCamSpeed.value = "34";
    if (liveFractalDistance) liveFractalDistance.value = "74";
    if (liveFractalSymmetry) liveFractalSymmetry.value = "14";
    if (liveFractalPower) liveFractalPower.value = "84";
    if (liveFractalFog) liveFractalFog.value = "28";
    if (liveFractalGlow) liveFractalGlow.value = "60";
    if (liveFractalLight) liveFractalLight.value = "128";
    if (liveFractalTexture) liveFractalTexture.value = "smooth";
    if (liveFractalRenderMode) liveFractalRenderMode.value = "shaded";
    if (liveFractalTexture2) liveFractalTexture2.value = "noise";
    if (liveFractalTextureBlend) liveFractalTextureBlend.value = "screen";
    if (liveFractalTextureMix) liveFractalTextureMix.value = "44";
    if (liveFractalPalette) liveFractalPalette.value = "warm";
    if (liveFractalOptical) liveFractalOptical.value = "sacred";
    if (liveFractalOpticalAmount) liveFractalOpticalAmount.value = "28";
    if (liveFractalAudioMode) liveFractalAudioMode.value = "rhythmic";
    if (liveFractalFlow) liveFractalFlow.value = "66";
    if (liveFractalPolygonize) liveFractalPolygonize.value = "18";
    if (liveFractalWireStrength) liveFractalWireStrength.value = "54";
    if (liveFractalPointOverlay) liveFractalPointOverlay.value = "42";
    if (liveFractalBackground) liveFractalBackground.value = "ethereal";
    if (liveFractalStyle) liveFractalStyle.value = "lit";
  } else {
    if (liveFractalCameraMode) liveFractalCameraMode.value = "orbit";
    if (liveFractalCamSpeed) liveFractalCamSpeed.value = "28";
    if (liveFractalDistance) liveFractalDistance.value = "76";
    if (liveFractalSymmetry) liveFractalSymmetry.value = "16";
    if (liveFractalPower) liveFractalPower.value = "90";
    if (liveFractalFog) liveFractalFog.value = "24";
    if (liveFractalGlow) liveFractalGlow.value = "58";
    if (liveFractalLight) liveFractalLight.value = "120";
    if (liveFractalTexture) liveFractalTexture.value = "contour";
    if (liveFractalRenderMode) liveFractalRenderMode.value = "hybrid";
    if (liveFractalTexture2) liveFractalTexture2.value = "noise";
    if (liveFractalTextureBlend) liveFractalTextureBlend.value = "screen";
    if (liveFractalTextureMix) liveFractalTextureMix.value = "62";
    if (liveFractalPalette) liveFractalPalette.value = "cosmic";
    if (liveFractalOptical) liveFractalOptical.value = "moire";
    if (liveFractalOpticalAmount) liveFractalOpticalAmount.value = "32";
    if (liveFractalAudioMode) liveFractalAudioMode.value = "bass";
    if (liveFractalFlow) liveFractalFlow.value = "58";
    if (liveFractalPolygonize) liveFractalPolygonize.value = "36";
    if (liveFractalWireStrength) liveFractalWireStrength.value = "68";
    if (liveFractalPointOverlay) liveFractalPointOverlay.value = "48";
    if (liveFractalBackground) liveFractalBackground.value = "sunset";
    if (liveFractalStyle) liveFractalStyle.value = "lit";
  }
  updateLiveQuickOutputs();
  scheduleRender();
}

function syncLegacyFractalRackToLive(options = {}) {
  const { skipRender = false } = options;
  if (!controls.kaleidoSegments || !liveFractalSymmetry) return;

  const segments = Number(controls.kaleidoSegments.value || 8);
  const layers = Number(controls.kaleidoLayers ? controls.kaleidoLayers.value : 1);
  const echo = Number(controls.layerEcho ? controls.layerEcho.value : 0);
  const twist = Number(controls.kaleidoTwist ? controls.kaleidoTwist.value : 0);
  const zoom = Number(controls.fractalZoom ? controls.fractalZoom.value : 100);
  const pulse = Number(controls.fractalPulse ? controls.fractalPulse.value : 0);
  const spiralAmountVal = Number(controls.spiralAmount ? controls.spiralAmount.value : 0);
  const spiralTurnsVal = Number(controls.spiralTurns ? controls.spiralTurns.value : 8);
  const petalsVal = Number(controls.mandalaPetals ? controls.mandalaPetals.value : 8);
  const bloomVal = Number(controls.mandalaBloom ? controls.mandalaBloom.value : 0);
  const psychedelicVal = Number(controls.psychedelic ? controls.psychedelic.value : 0);
  const colorCycleVal = Number(controls.colorCycle ? controls.colorCycle.value : 0);
  const patternVal = fractalPattern ? fractalPattern.value : "kaleido";
  const sourceVal = fractalSource ? fractalSource.value : "original";

  const segNorm = clamp((segments - 1) / 23, 0, 1);
  const zoomNorm = clamp((zoom - 40) / 220, 0, 1);
  const turnsNorm = clamp((spiralTurnsVal - 1) / 27, 0, 1);
  const petalNorm = clamp((petalsVal - 2) / 26, 0, 1);

  if (liveFractalSymmetry) liveFractalSymmetry.value = String(Math.round(clamp(8 + segNorm * 16, 8, 24)));
  if (liveFractalShapeMorph) liveFractalShapeMorph.value = String(Math.round(clamp(((layers - 1) / 7) * 100, 0, 100)));
  if (liveFractalTextureMix) liveFractalTextureMix.value = String(Math.round(clamp(echo * 0.88 + layers * 2, 0, 100)));
  if (liveFractalSpin) liveFractalSpin.value = String(Math.round(clamp(twist * 0.7 + spiralAmountVal * 0.5, 0, 100)));
  if (liveFractalDistance) liveFractalDistance.value = String(Math.round(clamp(180 - zoomNorm * 160, 20, 180)));
  if (liveFractalBreath) liveFractalBreath.value = String(Math.round(clamp(pulse * 0.75 + bloomVal * 0.35, 0, 100)));
  if (liveFractalPower) liveFractalPower.value = String(Math.round(clamp(60 + turnsNorm * 60, 60, 120)));
  if (liveFractalGlow) liveFractalGlow.value = String(Math.round(clamp(bloomVal * 0.72 + psychedelicVal * 0.24, 0, 100)));
  if (liveFractalOpticalAmount) liveFractalOpticalAmount.value = String(Math.round(clamp(psychedelicVal, 0, 100)));
  if (liveFractalPolygonize) liveFractalPolygonize.value = String(Math.round(clamp(psychedelicVal * 0.82, 0, 100)));
  if (liveFractalWarmth) liveFractalWarmth.value = String(Math.round(clamp((colorCycleVal / 360) * 100, 0, 100)));
  if (liveFractalWireStrength) liveFractalWireStrength.value = String(Math.round(clamp(42 + petalNorm * 42, 0, 100)));
  if (liveFractalPointOverlay) liveFractalPointOverlay.value = String(Math.round(clamp(22 + pulse * 0.5, 0, 100)));
  if (liveFractalFlow) liveFractalFlow.value = String(Math.round(clamp(48 + layers * 5 + psychedelicVal * 0.1, 0, 100)));

  if (liveFractalRenderMode && liveFractalOptical && liveFractalTexture) {
    if (patternVal === "spiral") {
      liveFractalRenderMode.value = "wire";
      liveFractalOptical.value = "tunnel";
      liveFractalTexture.value = "ink";
    } else if (patternVal === "mandala") {
      liveFractalRenderMode.value = "hybrid";
      liveFractalOptical.value = "sacred";
      liveFractalTexture.value = "smooth";
    } else if (patternVal === "hybrid") {
      liveFractalRenderMode.value = "hybrid";
      liveFractalOptical.value = "opart";
      liveFractalTexture.value = "crystal";
    } else {
      liveFractalRenderMode.value = "hybrid";
      liveFractalOptical.value = "sacred";
      liveFractalTexture.value = "contour";
    }
  }

  if (liveFractalPalette) {
    liveFractalPalette.value = sourceVal === "glitch" ? "input" : "warm";
  }

  updateStudioFractalPadDots();
  updateLiveQuickOutputs();
  if (!skipRender) scheduleRender();
}

function updateStudioFractalPadDots() {
  if (studioFractalPadADot && controls.kaleidoSegments && controls.spiralTurns) {
    const x = clamp((Number(controls.kaleidoSegments.value) - 1) / 23, 0, 1);
    const y = clamp(1 - (Number(controls.spiralTurns.value) - 1) / 27, 0, 1);
    studioFractalPadADot.style.left = `${x * 100}%`;
    studioFractalPadADot.style.top = `${y * 100}%`;
  }
  if (studioFractalPadBDot && controls.mandalaBloom && controls.psychedelic) {
    const x = clamp(Number(controls.mandalaBloom.value) / 100, 0, 1);
    const y = clamp(1 - Number(controls.psychedelic.value) / 100, 0, 1);
    studioFractalPadBDot.style.left = `${x * 100}%`;
    studioFractalPadBDot.style.top = `${y * 100}%`;
  }
}

function applyStudioFractalPadAFromPointer(clientX, clientY) {
  if (!studioFractalPadA || !controls.kaleidoSegments || !controls.spiralTurns || !controls.mandalaPetals) return;
  const rect = studioFractalPadA.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  controls.kaleidoSegments.value = String(Math.round(clamp(1 + nx * 11, 1, 12)));
  controls.spiralTurns.value = String(Math.round(clamp(1 + (1 - ny) * 27, 1, 28)));
  controls.mandalaPetals.value = String(Math.round(clamp(2 + nx * 18, 2, 20)));
  updateOutputs();
  syncLegacyFractalRackToLive({ skipRender: true });
  scheduleRender();
}

function applyStudioFractalPadBFromPointer(clientX, clientY) {
  if (!studioFractalPadB || !controls.mandalaBloom || !controls.psychedelic || !controls.colorCycle) return;
  const rect = studioFractalPadB.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / rect.width, 0, 1);
  const ny = clamp((clientY - rect.top) / rect.height, 0, 1);
  controls.mandalaBloom.value = String(Math.round(clamp(nx * 100, 0, 100)));
  controls.psychedelic.value = String(Math.round(clamp((1 - ny) * 100, 0, 100)));
  controls.colorCycle.value = String(Math.round(clamp(nx * 360, 0, 360)));
  updateOutputs();
  syncLegacyFractalRackToLive({ skipRender: true });
  scheduleRender();
}

function getLiveModeReadoutText(tab) {
  const hasVisualInput = webcamActive || Boolean(loadedImage) || Boolean(originalImageData);
  const hasActiveFilter =
    hasVisualInput &&
    (mode === "glitch" || mode === "depth" || mode === "particles" || mode === "fractal" || mode === "lines" || mode === "tunnel" || mode === "interior" || mode === "atlas" || mode === "materia" || mode === "code" || mode === "mix");
  if (!hasActiveFilter) return "B.ZU.AL Studio";
  const isEn = locale === "en";
  if (tab === "fractal") return isEn ? "[ FRACTAL // LIVE ]" : "[ FRACTAL // LIVE ]";
  if (tab === "depth") return isEn ? "[ 3D STAGE // LIVE ]" : "[ ESCENARIO 3D // LIVE ]";
  if (tab === "particles") return isEn ? "[ PARTICLES // LIVE ]" : "[ PARTICULAS // LIVE ]";
  if (tab === "lines") return isEn ? "[ LINES // LIVE ]" : "[ LINEAS // LIVE ]";
  if (tab === "tunnel") return isEn ? "[ INFINITE TUNNEL // LIVE ]" : "[ TUNEL INFINITO // LIVE ]";
  if (tab === "interior") return isEn ? "[ INTERIOR BLACK // LIVE ]" : "[ INTERIOR BLACK // LIVE ]";
  if (tab === "atlas") return isEn ? "[ MORPHO // LIVE ]" : "[ MORPHO // LIVE ]";
  if (tab === "materia") return isEn ? "[ MATERIA // LIVE ]" : "[ MATERIA // LIVE ]";
  if (tab === "code") return isEn ? "[ CODE RAIN // LIVE ]" : "[ CODE RAIN // LIVE ]";
  return isEn ? "[ GLITCH // LIVE ]" : "[ GLITCH // LIVE ]";
}

function updateLiveModeReadout(tab) {
  if (!liveModeReadout) return;
  const text = getLiveModeReadoutText(tab);
  if (liveModeReadoutText) {
    const repeated = ` ${text}   //   ${text}   //   ${text}   //   ${text}   //   `;
    liveModeReadoutText.textContent = repeated;
    liveModeReadoutText.dataset.text = repeated;
  }
  liveModeReadout.dataset.mode = tab;
}

function updateModuleRouteButtonStates(tab) {
  if (!moduleRouteButtons || moduleRouteButtons.length === 0) return;
  moduleRouteButtons.forEach((btn) => {
    const route = btn.dataset.moduleRoute || "";
    btn.classList.toggle("active", route === tab);
  });
}

function normalizeLiveTab(tabName) {
  if (tabName === "depth") return "depth";
  if (tabName === "particles") return "particles";
  if (tabName === "fractal") return "fractal";
  if (tabName === "lines") return "lines";
  if (tabName === "tunnel") return "tunnel";
  if (tabName === "interior") return "interior";
  if (tabName === "atlas") return "atlas";
  if (tabName === "materia") return "materia";
  if (tabName === "code") return "code";
  return "glitch";
}

function syncLiveModeTabsFromMode() {
  const tab = normalizeLiveTab(mode);
  liveActiveTab = tab;
  if (liveModeGlitchBtn) liveModeGlitchBtn.classList.toggle("active", tab === "glitch");
  if (liveModeFractalBtn) liveModeFractalBtn.classList.toggle("active", tab === "fractal");
  if (liveMode3dBtn) liveMode3dBtn.classList.toggle("active", tab === "depth");
  if (liveModeParticlesBtn) liveModeParticlesBtn.classList.toggle("active", tab === "particles");
  if (liveModeLinesBtn) liveModeLinesBtn.classList.toggle("active", tab === "lines");
  updateModuleRouteButtonStates(tab);
  updateLiveModeReadout(tab);
  if (livePaneGlitch) livePaneGlitch.hidden = tab !== "glitch";
  if (livePaneFractal) livePaneFractal.hidden = tab !== "fractal";
  if (livePane3d) livePane3d.hidden = tab !== "depth";
  if (livePaneParticles) livePaneParticles.hidden = tab !== "particles";
  if (livePaneLines) livePaneLines.hidden = tab !== "lines";
  if (livePaneTunnel) livePaneTunnel.hidden = tab !== "tunnel";
  if (livePaneInterior) livePaneInterior.hidden = tab !== "interior";
  if (livePaneAtlas) livePaneAtlas.hidden = tab !== "atlas";
  if (livePaneMateria) livePaneMateria.hidden = tab !== "materia";
  if (livePaneCode) livePaneCode.hidden = tab !== "code";
  if (livePaneSynth) livePaneSynth.hidden = true;
}

function setLiveModeTab(tabName) {
  const prevTab = liveActiveTab;
  liveActiveTab = normalizeLiveTab(tabName);
  if (liveModeGlitchBtn) liveModeGlitchBtn.classList.toggle("active", liveActiveTab === "glitch");
  if (liveModeFractalBtn) liveModeFractalBtn.classList.toggle("active", liveActiveTab === "fractal");
  if (liveMode3dBtn) liveMode3dBtn.classList.toggle("active", liveActiveTab === "depth");
  if (liveModeParticlesBtn) liveModeParticlesBtn.classList.toggle("active", liveActiveTab === "particles");
  if (liveModeLinesBtn) liveModeLinesBtn.classList.toggle("active", liveActiveTab === "lines");
  updateModuleRouteButtonStates(liveActiveTab);
  updateLiveModeReadout(liveActiveTab);
  if (livePaneGlitch) livePaneGlitch.hidden = liveActiveTab !== "glitch";
  if (livePaneFractal) livePaneFractal.hidden = liveActiveTab !== "fractal";
  if (livePane3d) livePane3d.hidden = liveActiveTab !== "depth";
  if (livePaneParticles) livePaneParticles.hidden = liveActiveTab !== "particles";
  if (livePaneLines) livePaneLines.hidden = liveActiveTab !== "lines";
  if (livePaneTunnel) livePaneTunnel.hidden = liveActiveTab !== "tunnel";
  if (livePaneInterior) livePaneInterior.hidden = liveActiveTab !== "interior";
  if (livePaneAtlas) livePaneAtlas.hidden = liveActiveTab !== "atlas";
  if (livePaneMateria) livePaneMateria.hidden = liveActiveTab !== "materia";
  if (livePaneCode) livePaneCode.hidden = liveActiveTab !== "code";
  if (livePaneSynth) livePaneSynth.hidden = true;
  const nextMode = normalizeLiveTab(liveActiveTab);
  const radio = modeInputs.find((m) => m.value === nextMode);
  if (radio) radio.checked = true;
  setMode(nextMode);
  if (liveActiveTab === "depth" && prevTab !== "depth") {
    applyLive3dEntryDefaults();
  }
}

function cycleLiveModeTab(direction) {
  const order = ["glitch", "fractal", "depth", "particles", "lines", "tunnel", "interior", "atlas", "materia", "code"];
  const current = liveActiveTab && order.includes(liveActiveTab) ? liveActiveTab : "glitch";
  const idx = order.indexOf(current);
  const step = direction >= 0 ? 1 : -1;
  const next = order[(idx + step + order.length) % order.length];
  setLiveModeTab(next);
}

function applyLive3dEntryDefaults() {
  if (!controls.flatIllustrated || !bgMode || !bgColorA || !bgColorB) return;
  controls.flatIllustrated.value = "100";
  if (controls.lightEnabled) controls.lightEnabled.value = "0";
  if (live3dLightingMode) live3dLightingMode.value = "flat";
  if (live3dLight) live3dLight.value = "0";
  if (bgPalette) bgPalette.value = "custom";
  bgMode.value = "solid";
  bgColorA.value = "#000000";
  bgColorB.value = "#000000";
  updateOutputs();
  scheduleRender();
}

function randHash(x, y, seed) {
  const n = Math.sin(x * 127.1 + y * 311.7 + seed * 13.37) * 43758.5453;
  return n - Math.floor(n);
}

function normalize3(vx, vy, vz) {
  const len = Math.hypot(vx, vy, vz) || 1;
  return [vx / len, vy / len, vz / len];
}

function lerpAngle(current, target, alpha) {
  const diff = Math.atan2(Math.sin(target - current), Math.cos(target - current));
  return current + diff * alpha;
}

if ("FaceDetector" in window) {
  try {
    faceDetector = new FaceDetector({ fastMode: false, maxDetectedFaces: 12 });
  } catch {
    faceDetector = null;
  }
}

if ("HandDetector" in window) {
  try {
    handDetector = new HandDetector({
      maxDetectedHands: 2,
      scoreThreshold: 0.45,
    });
  } catch {
    handDetector = null;
  }
}

function getCameraMotion(settings, tSec) {
  const follow = settings.cameraFollow / 100;
  const speedKnob = cameraMoveSpeed ? Number(cameraMoveSpeed.value) / 100 : 0.28;
  // Keep low-speed precision but allow a slightly higher top speed than before.
  const speedCurve = Math.pow(clamp(speedKnob, 0, 1), 2.6);
  const targetCameraModeSpeed = 0.12 + speedCurve * 0.9;
  smoothCameraModeSpeed += (targetCameraModeSpeed - smoothCameraModeSpeed) * 0.045;
  const speed = (0.28 + settings.autoRotate / 120) * smoothCameraModeSpeed;
  const nowMs = performance.now();
  const dt = clamp((nowMs - lastCameraAnimTs) / 1000, 0, 0.09);
  lastCameraAnimTs = nowMs;
  cameraAnimTime += dt * speed;
  const phase = cameraAnimTime;
  const baseCursorX = pointerTiltX * 26 * follow;
  const baseCursorY = pointerTiltY * 24 * follow;
  const panMul = 0.45 + follow * 0.75;
  const buildByMode = (modeName) => {
    let extraRotX = dragRotateX;
    let extraRotY = dragRotateY;
    let extraRotZ = 0;
    let zoomMul = 1;
    let cursorWeight = 1;
    if (modeName === "static") {
      cursorWeight = 0;
    } else if (modeName === "cursor") {
      cursorWeight = 1;
    } else if (modeName === "orbit") {
      cursorWeight = 0.12;
      extraRotY += phase * 44;
      extraRotX += Math.sin(phase * 0.6) * 12;
    } else if (modeName === "sweep") {
      cursorWeight = 0.2;
      extraRotY += Math.sin(phase * 0.9) * 46;
      extraRotX += Math.sin(phase * 0.45) * 6;
    } else if (modeName === "pulse") {
      cursorWeight = 0.3;
      extraRotZ = Math.sin(phase) * 7;
      zoomMul = 1 + Math.sin(phase * 1.6) * 0.12;
    } else if (modeName === "helix") {
      cursorWeight = 0.18;
      extraRotY += phase * 30;
      extraRotX += Math.sin(phase * 1.4) * 14;
      extraRotZ += Math.cos(phase * 0.7) * 10;
      zoomMul = 1 + Math.sin(phase * 1.1) * 0.08;
    } else if (modeName === "drift") {
      cursorWeight = 0.1;
      const step = Math.floor(phase * 3.2) % 6;
      extraRotY += Math.sin(phase * 0.35) * 22 + (step - 2.5) * 2.3;
      extraRotX += Math.cos(phase * 0.22) * 9;
      extraRotZ += Math.sin(phase * 0.55) * 13;
      zoomMul = 1 + Math.sin(phase * 2.1) * 0.06;
    } else if (modeName === "liquid") {
      cursorWeight = 0.08;
      extraRotY += Math.sin(phase * 0.28) * 18 + Math.cos(phase * 0.16) * 8;
      extraRotX += Math.cos(phase * 0.23) * 11;
      extraRotZ += Math.sin(phase * 0.31) * 7;
      zoomMul = 1 + Math.sin(phase * 0.62) * 0.05;
    }
    return { extraRotX, extraRotY, extraRotZ, zoomMul, cursorWeight };
  };

  const curr = buildByMode(cameraMode);
  let modeBlend = 1;
  if (cameraModeBlendStart > 0 && cameraModePrev !== cameraMode) {
    modeBlend = clamp((nowMs - cameraModeBlendStart) / 920, 0, 1);
  }
  const ease = modeBlend * modeBlend * (3 - 2 * modeBlend);
  const prev = modeBlend < 1 ? buildByMode(cameraModePrev) : curr;
  const mix = (a, b) => a * (1 - ease) + b * ease;
  const extraRotX = mix(prev.extraRotX, curr.extraRotX);
  const extraRotY = mix(prev.extraRotY, curr.extraRotY);
  const extraRotZ = mix(prev.extraRotZ, curr.extraRotZ);
  const zoomMul = mix(prev.zoomMul, curr.zoomMul);
  const cursorWeight = mix(prev.cursorWeight, curr.cursorWeight);
  if (modeBlend >= 1) {
    cameraModePrev = cameraMode;
    cameraModeBlendStart = 0;
  }

  const rawRx = baseCursorY * cursorWeight + extraRotX;
  const rawRy = baseCursorX * cursorWeight + extraRotY;
  const rawRz = extraRotZ;
  const rawZoom = zoomMul;
  const rawPanX = cameraPanX * panMul;
  const rawPanY = cameraPanY * panMul;
  const easeK = clamp(0.16 + cameraFlowEase * 0.06, 0.14, 0.34);
  smoothMotionRx = smoothMotionRx === null ? rawRx : smoothMotionRx + (rawRx - smoothMotionRx) * easeK;
  smoothMotionRy = smoothMotionRy === null ? rawRy : smoothMotionRy + (rawRy - smoothMotionRy) * easeK;
  smoothMotionRz = smoothMotionRz === null ? rawRz : smoothMotionRz + (rawRz - smoothMotionRz) * easeK;
  smoothMotionZoom = smoothMotionZoom === null ? rawZoom : smoothMotionZoom + (rawZoom - smoothMotionZoom) * easeK;
  smoothMotionPanX = smoothMotionPanX === null ? rawPanX : smoothMotionPanX + (rawPanX - smoothMotionPanX) * easeK;
  smoothMotionPanY = smoothMotionPanY === null ? rawPanY : smoothMotionPanY + (rawPanY - smoothMotionPanY) * easeK;

  return {
    rxDeg: smoothMotionRx,
    ryDeg: smoothMotionRy,
    rzDeg: smoothMotionRz,
    zoomMul: smoothMotionZoom,
    panX: smoothMotionPanX,
    panY: smoothMotionPanY,
  };
}

function getLiquidWarp(x, y, depth, tSec, strength, seed, w, h) {
  if (strength <= 0.0001) return [0, 0, 0];
  const nx = x / Math.max(1, w);
  const ny = y / Math.max(1, h);
  const mvx = stageGeomMotionX * (26 + strength * 60);
  const mvy = stageGeomMotionY * (26 + strength * 60);
  const waveA = Math.sin((nx * 7.2 + ny * 4.4) + tSec * (0.75 + strength * 1.7) + depth * 8 + seed * 0.0009);
  const waveB = Math.cos((nx * 4.8 - ny * 6.1) + tSec * (0.6 + strength * 1.35) - depth * 6 + seed * 0.0007);
  const swirl = Math.sin((nx * nx + ny * ny) * 30 + tSec * (0.42 + strength * 1.05) + seed * 0.0004);
  const ampXY = (6 + strength * 28) * (0.65 + depth * 0.7);
  const ampZ = (3 + strength * 36) * (0.6 + depth * 0.8);
  const wx = (waveA * 0.8 + waveB * 0.55) * ampXY + mvx;
  const wy = (waveB * 0.82 - waveA * 0.48) * ampXY + mvy;
  const wz = (swirl * 0.9 + waveA * 0.45) * ampZ;
  return [wx, wy, wz];
}

function setCameraMode(modeName, options = {}) {
  const instant = Boolean(options.instant);
  if (cameraMode === modeName) {
    if (liveCameraMode) liveCameraMode.value = cameraMode;
    [camStaticBtn, camCursorBtn, camOrbitBtn, camSweepBtn, camPulseBtn, camHelixBtn, camDriftBtn, camLiquidBtn]
      .filter(Boolean)
      .forEach((btn) => btn.classList.remove("active"));
    const map = {
      static: camStaticBtn,
      cursor: camCursorBtn,
      orbit: camOrbitBtn,
      sweep: camSweepBtn,
      pulse: camPulseBtn,
      helix: camHelixBtn,
      drift: camDriftBtn,
      liquid: camLiquidBtn,
    };
    if (map[cameraMode]) map[cameraMode].classList.add("active");
    return;
  }
  cameraModePrev = cameraMode;
  cameraModeBlendStart = instant ? 0 : performance.now();
  cameraMode = modeName;
  if (instant) {
    cameraModePrev = cameraMode;
    cameraModeBlendStart = 0;
    lastCameraAnimTs = performance.now();
  }
  const map = {
    static: camStaticBtn,
    cursor: camCursorBtn,
    orbit: camOrbitBtn,
    sweep: camSweepBtn,
    pulse: camPulseBtn,
    helix: camHelixBtn,
    drift: camDriftBtn,
    liquid: camLiquidBtn,
  };
  Object.values(map).forEach((btn) => {
    if (!btn) return;
    btn.classList.remove("active");
  });
  if (map[modeName]) map[modeName].classList.add("active");
  scheduleRender();
}

function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let h = 0;
  let s = 0;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;

    h /= 6;
  }

  return [h, s, l];
}

function hslToRgb(h, s, l) {
  if (s === 0) {
    const v = Math.round(l * 255);
    return [v, v, v];
  }

  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;

  function hue2rgb(t) {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  }

  return [
    Math.round(hue2rgb(h + 1 / 3) * 255),
    Math.round(hue2rgb(h) * 255),
    Math.round(hue2rgb(h - 1 / 3) * 255),
  ];
}

function hexToRgb(hex) {
  const raw = hex.replace("#", "");
  const full = raw.length === 3 ? raw.split("").map((c) => c + c).join("") : raw;
  const n = Number.parseInt(full, 16);
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

function drawPlaceholder() {
  const w = canvas.width;
  const h = canvas.height;
  const tSec = performance.now() / 1000;
  const synthW = Math.max(220, Math.round(w * 0.48));
  const synthH = Math.max(132, Math.round(h * 0.48));
  if (noInputCanvas.width !== synthW || noInputCanvas.height !== synthH) {
    noInputCanvas.width = synthW;
    noInputCanvas.height = synthH;
  }
  const frame = generateNoInputFrame(synthW, synthH, tSec, true);
  ctx.clearRect(0, 0, w, h);
  if (noInputCtx) {
    noInputCtx.putImageData(frame, 0, 0);
    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    ctx.drawImage(noInputCanvas, 0, 0, synthW, synthH, 0, 0, w, h);
    ctx.restore();
  } else {
    ctx.putImageData(frame, 0, 0);
  }

  const panelW = Math.min(w - 32, 640);
  const panelH = 88;
  ctx.fillStyle = "rgba(4, 10, 14, 0.66)";
  ctx.fillRect(16, 18, panelW, panelH);

  ctx.fillStyle = "#49f3ff";
  ctx.font = "700 28px Orbitron";
  ctx.fillText(t("placeholder_title"), 24, 54);

  ctx.fillStyle = "#a9ff43";
  ctx.font = "18px Share Tech Mono";
  ctx.fillText(t("placeholder_subtitle"), 24, 86);
}

function startPlaceholderAnimation() {
  if (placeholderAnimRaf || hasActiveInput()) return;
  const loop = () => {
    placeholderAnimRaf = 0;
    if (hasActiveInput()) return;
    drawPlaceholder();
    placeholderAnimRaf = requestAnimationFrame(loop);
  };
  loop();
}

function stopPlaceholderAnimation() {
  if (!placeholderAnimRaf) return;
  cancelAnimationFrame(placeholderAnimRaf);
  placeholderAnimRaf = 0;
}

function noise2d(x, y, seed = 0) {
  const s = Math.sin(x * 127.1 + y * 311.7 + seed * 17.13) * 43758.5453123;
  return s - Math.floor(s);
}

function smoothNoise2d(x, y, seed = 0) {
  const ix = Math.floor(x);
  const iy = Math.floor(y);
  const fx = x - ix;
  const fy = y - iy;
  const sx = fx * fx * (3 - 2 * fx);
  const sy = fy * fy * (3 - 2 * fy);
  const a = noise2d(ix, iy, seed);
  const b = noise2d(ix + 1, iy, seed);
  const c = noise2d(ix, iy + 1, seed);
  const d = noise2d(ix + 1, iy + 1, seed);
  return (a + (b - a) * sx) * (1 - sy) + (c + (d - c) * sx) * sy;
}

function fbm2d(x, y, octaves = 4) {
  let v = 0;
  let amp = 0.5;
  let freq = 1;
  for (let i = 0; i < octaves; i++) {
    v += amp * smoothNoise2d(x * freq, y * freq, i + 1);
    freq *= 2;
    amp *= 0.5;
  }
  return v;
}

function smoothstepEdge(a, b, x) {
  const t = clamp((x - a) / Math.max(1e-6, b - a), 0, 1);
  return t * t * (3 - 2 * t);
}

function generateNoInputFrame(width, height, tSec = 0, animated = false) {
  const w = Math.max(2, width | 0);
  const h = Math.max(2, height | 0);
  const targetCtx = noInputCtx || ctx;
  const img = targetCtx.createImageData(w, h);
  const d = img.data;
  const invW = 1 / Math.max(1, w - 1);
  const invH = 1 / Math.max(1, h - 1);
  const pulse = animated ? Math.sin(tSec * 0.78) * 0.5 + 0.5 : 0.35;
  const drift = animated ? tSec * 0.42 : 0;
  const sway = animated ? Math.sin(tSec * 0.24) * 0.22 : 0;
  const rot = animated ? Math.sin(tSec * 0.11) * 0.24 : 0;
  const cr = Math.cos(rot);
  const sr = Math.sin(rot);
  const horizon = 0.16 + pulse * 0.04;
  const glowBoost = 0.8 + pulse * 0.32;
  for (let y = 0; y < h; y++) {
    const py = y * invH * 2 - 1;
    for (let x = 0; x < w; x++) {
      const px = x * invW * 2 - 1;
      const i = (y * w + x) * 4;
      const sky = clamp((py + 1) * 0.5, 0, 1);
      const floorMask = clamp((horizon - py + 0.62 + Math.sin(tSec * 0.3) * 0.02) * 1.3, 0, 1);
      const z = 1 / Math.max(0.12, py + 1.22);
      const worldX = (px + sway * 0.12) * z * 4.2;
      const worldZ = z * 6.8 + drift;
      const rx = worldX * cr - worldZ * sr;
      const rz = worldX * sr + worldZ * cr;
      const ripple = Math.sin(rx * 0.14 + tSec * 0.42) * 0.34 + Math.cos(rz * 0.1 - tSec * 0.38) * 0.22;
      const elevA = Math.pow(fbm2d(rx * 0.22, (rz + ripple) * 0.22, 4), 1.2);
      const elevB = fbm2d(rx * 0.42 + 13.7, (rz + ripple * 0.8) * 0.38 + 5.1, 3);
      const slowWave = Math.sin(rz * 0.66 - tSec * 0.62 + Math.sin(rx * 0.22) * 0.5) * 0.28;
      const terrain = (elevA * 1.15 + elevB * 0.7 + slowWave) * 1.48;
      const ridge = Math.abs(py + 0.18 - terrain * 0.28);
      const terrainMask = 1 - smoothstepEdge(0.0, 0.06 + z * 0.01, ridge);
      const gx = Math.abs(rx - Math.floor(rx + 0.5));
      const gz = Math.abs(rz - Math.floor(rz + 0.5));
      const lineWidthX = 0.022 + z * 0.002;
      const lineWidthZ = 0.03 + z * 0.0036;
      const line = Math.max(
        1 - smoothstepEdge(lineWidthX, lineWidthX + 0.018, gx),
        1 - smoothstepEdge(lineWidthZ, lineWidthZ + 0.026, gz)
      );
      const wirePlane = line * floorMask * 0.52;
      const wireTerrain = line * terrainMask * 1.48;
      const wire = Math.max(wirePlane, wireTerrain);
      const scan = 0.88 + 0.12 * Math.sin(y * 0.76 + tSec * 8.8);
      const vignette = clamp(1 - Math.hypot(px * 0.8, py * 0.9), 0, 1);
      const bgR = 0 + 4 * sky + 3 * vignette;
      const bgG = 8 + 18 * sky + 10 * vignette;
      const bgB = 10 + 24 * sky + 16 * vignette;
      const glow = wire * (132 + floorMask * 64 + terrainMask * 58) * scan * glowBoost;
      const haze = floorMask * (10 + 12 * pulse) + terrainMask * (4 + pulse * 5);
      const noise = (randHash(x, y, randomSeed + 71 + Math.floor(tSec * 7)) - 0.5) * 2.2;
      d[i] = clamp(bgR + glow * 0.05 + haze * 0.08 + noise * 0.24, 0, 255);
      d[i + 1] = clamp(bgG + glow * 1.08 + haze * 0.34 + noise * 0.5, 0, 255);
      d[i + 2] = clamp(bgB + glow * 0.22 + haze * 0.5 + noise * 0.34, 0, 255);
      d[i + 3] = 255;
    }
  }
  return img;
}

function activateNoInputMode() {
  stopWebcamInput();
  loadedImage = null;
  noInputModeActive = true;
  if (imageInput) imageInput.value = "";
  if (aspectRatioSelect) {
    aspectRatioSelect.disabled = false;
    if (!aspectRatioSelect.value) aspectRatioSelect.value = "21:9";
  }
  const w = Math.max(2, canvas.width || 1000);
  const h = Math.max(2, canvas.height || 680);
  originalImageData = generateNoInputFrame(w, h, performance.now() / 1000, true);
  noInputLastRefreshMs = 0;
  updateInputSpecs();
  updateCanvasEntryOverlay();
  setWorkspacePanel("live");
  scheduleRender();
}

function clearVisualInput() {
  stopWebcamInput();
  loadedImage = null;
  noInputModeActive = false;
  originalImageData = null;
  frozenImageData = null;
  if (imageInput) imageInput.value = "";
  if (aspectRatioSelect) {
    aspectRatioSelect.disabled = false;
    if (!aspectRatioSelect.value) aspectRatioSelect.value = "21:9";
  }
  resizeWorkingCanvases(1000, 680);
  drawPlaceholder();
  updateInputSpecs();
  updateCanvasEntryOverlay();
  syncCleanOutput();
}

function openCleanOutput() {
  if (cleanOutputWindow && !cleanOutputWindow.closed) {
    cleanOutputWindow.focus();
    return;
  }

  cleanOutputWindow = window.open("", "bzual-clean-output", "width=1280,height=720");
  if (!cleanOutputWindow) {
    alert(t("popup_blocked"));
    return;
  }

  cleanOutputWindow.document.write(`<!doctype html><html><head><title>B.ZU.AL Live Clean Output HQ</title><style>html,body{margin:0;height:100%;background:#000;overflow:hidden}canvas{width:100vw;height:100vh;display:block;object-fit:contain;background:#000}</style></head><body><canvas id="out"></canvas></body></html>`);
  cleanOutputWindow.document.close();
  cleanOutputCanvas = cleanOutputWindow.document.getElementById("out");
  cleanOutputCtx = cleanOutputCanvas.getContext("2d");
  if (cleanOutputCtx) {
    cleanOutputCtx.imageSmoothingEnabled = true;
    cleanOutputCtx.imageSmoothingQuality = "high";
  }
  cleanOutputLastTs = 0;
  cleanOutputFrameSkip = 1;
  syncCleanOutput();
}

function closeCleanOutput() {
  if (cleanOutputWindow && !cleanOutputWindow.closed) cleanOutputWindow.close();
  cleanOutputWindow = null;
  cleanOutputCanvas = null;
  cleanOutputCtx = null;
  cleanOutputLastTs = 0;
  cleanOutputFrameSkip = 1;
}

function syncCleanOutput() {
  if (!cleanOutputWindow || cleanOutputWindow.closed || !cleanOutputCanvas || !cleanOutputCtx) return;
  const w = canvas.width;
  const h = canvas.height;
  if (!w || !h) return;
  // Keep output at full canvas resolution, but adapt sync cadence to protect main FPS.
  const now = performance.now();
  const lowPerf = fps > 0 && fps < 24;
  const midPerf = fps >= 24 && fps < 30;
  cleanOutputFrameSkip = lowPerf ? 3 : midPerf ? 2 : 1;
  if (cleanOutputFrameSkip > 1 && (postFxFrameCounter % cleanOutputFrameSkip) !== 0) return;
  const targetFps = lowPerf ? 20 : midPerf ? 24 : 60;
  const minFrameMs = 1000 / targetFps;
  if (cleanOutputLastTs > 0 && now - cleanOutputLastTs < minFrameMs) return;
  cleanOutputLastTs = now;
  if (cleanOutputCanvas.width !== w || cleanOutputCanvas.height !== h) {
    cleanOutputCanvas.width = w;
    cleanOutputCanvas.height = h;
    cleanOutputCtx.imageSmoothingEnabled = true;
    cleanOutputCtx.imageSmoothingQuality = "high";
  }
  cleanOutputCtx.drawImage(canvas, 0, 0, w, h);
}

function copyImageData(src) {
  return new ImageData(new Uint8ClampedArray(src.data), src.width, src.height);
}

function getSettings() {
  const obj = {};
  allIds.forEach((id) => {
    obj[id] = Number(controls[id].value);
  });
  return obj;
}

function getParticlesSettings() {
  return {
    count: liveParticlesCount ? liveParticlesCount.value : "med",
    emitter: liveParticlesEmitter ? liveParticlesEmitter.value : "grid",
    size: liveParticlesSize ? Number(liveParticlesSize.value) : 42,
    depth: liveParticlesDepth ? Number(liveParticlesDepth.value) : 58,
    noise: liveParticlesNoise ? Number(liveParticlesNoise.value) : 0,
    attractor: liveParticlesAttractor ? Number(liveParticlesAttractor.value) : 26,
    flow: liveParticlesFlow ? Number(liveParticlesFlow.value) : 0,
    camMode: liveParticlesCamMode ? liveParticlesCamMode.value : "static",
    camSpeed: liveParticlesCamSpeed ? Number(liveParticlesCamSpeed.value) : 0,
    camX: liveParticlesCamX ? Number(liveParticlesCamX.value) : 0,
    camY: liveParticlesCamY ? Number(liveParticlesCamY.value) : 0,
    camZ: liveParticlesCamZ ? Number(liveParticlesCamZ.value) : 0,
    colorMode: liveParticlesColorMode ? liveParticlesColorMode.value : "source",
    hue: liveParticlesHue ? Number(liveParticlesHue.value) : 0,
    audioOn: liveParticlesAudio ? liveParticlesAudio.checked : false,
    audioAmount: liveParticlesAudioAmount ? Number(liveParticlesAudioAmount.value) : 54,
    faceTrack: liveParticlesFaceTrack ? liveParticlesFaceTrack.checked : false,
    faceDelay: liveParticlesFaceDelay ? Number(liveParticlesFaceDelay.value) : 24,
    faceAmount: liveParticlesFaceAmount ? Number(liveParticlesFaceAmount.value) : 68,
    trail: liveParticlesTrail ? Number(liveParticlesTrail.value) : 0,
    fxStyle: liveParticlesFxStyle ? liveParticlesFxStyle.value : "neon",
    fxAmount: liveParticlesFxAmount ? Number(liveParticlesFxAmount.value) : 58,
    structure: liveParticlesStructure ? liveParticlesStructure.value : "cloud",
    audioSplit: liveParticlesAudioSplit ? liveParticlesAudioSplit.value : "basic",
    order: liveParticlesOrder ? Number(liveParticlesOrder.value) : 48,
    damping: liveParticlesDamping ? Number(liveParticlesDamping.value) : 18,
    vortex: liveParticlesVortex ? Number(liveParticlesVortex.value) : 22,
    spawn: liveParticlesSpawn ? Number(liveParticlesSpawn.value) : 68,
    motionThreshold: liveParticlesMotionThreshold ? Number(liveParticlesMotionThreshold.value) : 32,
    drift: liveParticlesDrift ? Number(liveParticlesDrift.value) : 0,
    focus: liveParticlesFocus ? Number(liveParticlesFocus.value) : 38,
    gradientMode: liveParticlesGradientMode ? liveParticlesGradientMode.value : "radial",
    colorMix: liveParticlesColorMix ? Number(liveParticlesColorMix.value) : 44,
    gradientSpread: liveParticlesGradientSpread ? Number(liveParticlesGradientSpread.value) : 52,
    gradientA: liveParticlesGradientA ? liveParticlesGradientA.value : "#00d8ff",
    gradientB: liveParticlesGradientB ? liveParticlesGradientB.value : "#ff2ea6",
  };
}

function weightedPick(list) {
  if (!Array.isArray(list) || list.length === 0) return null;
  let total = 0;
  for (let i = 0; i < list.length; i++) total += Math.max(0, Number(list[i].w) || 0);
  if (total <= 0) return list[Math.floor(Math.random() * list.length)].v;
  let r = Math.random() * total;
  for (let i = 0; i < list.length; i++) {
    r -= Math.max(0, Number(list[i].w) || 0);
    if (r <= 0) return list[i].v;
  }
  return list[list.length - 1].v;
}

function tuneParticlesStructureProfile(structure, options = {}) {
  const modeId = String(structure || (liveParticlesStructure ? liveParticlesStructure.value : "cloud"));
  const withJitter = Boolean(options.withJitter);
  const setIf = (el, value, spread = 0) => {
    if (!el) return;
    const v = Number(value);
    if (!Number.isFinite(v)) return;
    const j = withJitter && spread > 0 ? (Math.random() * 2 - 1) * spread : 0;
    const nv = Math.round(clamp(v + j, Number(el.min || -9999), Number(el.max || 9999)));
    el.value = String(nv);
  };
  const setSel = (el, value) => {
    if (el && value) el.value = value;
  };

  // Tuned live-safe profiles for each mathematical structure.
  const profiles = {
    cloud: { order: 44, depth: 60, size: 52, noise: 30, attractor: 24, flow: 34, damping: 34, vortex: 30, drift: 28, focus: 34, trail: 14, cam: "orbit", split: "basic" },
    grid: { order: 58, depth: 56, size: 50, noise: 16, attractor: 34, flow: 20, damping: 38, vortex: 20, drift: 20, focus: 42, trail: 10, cam: "sweep", split: "zones" },
    ring: { order: 64, depth: 64, size: 56, noise: 18, attractor: 30, flow: 26, damping: 36, vortex: 44, drift: 18, focus: 56, trail: 18, cam: "orbit", split: "basic" },
    helix: { order: 68, depth: 74, size: 54, noise: 22, attractor: 36, flow: 30, damping: 35, vortex: 48, drift: 16, focus: 58, trail: 16, cam: "helix", split: "zones" },
    mandala: { order: 72, depth: 62, size: 58, noise: 20, attractor: 34, flow: 30, damping: 34, vortex: 38, drift: 14, focus: 62, trail: 20, cam: "orbit", split: "basic" },
    torus: { order: 70, depth: 74, size: 60, noise: 16, attractor: 38, flow: 24, damping: 36, vortex: 42, drift: 16, focus: 64, trail: 16, cam: "inside", split: "zones" },
    lissajous: { order: 78, depth: 68, size: 58, noise: 18, attractor: 34, flow: 32, damping: 36, vortex: 30, drift: 14, focus: 66, trail: 18, cam: "sweep", split: "zones" },
    attractor: { order: 82, depth: 70, size: 62, noise: 24, attractor: 44, flow: 36, damping: 37, vortex: 36, drift: 12, focus: 74, trail: 22, cam: "inside", split: "zones" },
  };
  const p = profiles[modeId] || profiles.cloud;

  setIf(liveParticlesOrder, p.order, 8);
  setIf(liveParticlesDepth, p.depth, 10);
  setIf(liveParticlesSize, p.size, 10);
  setIf(liveParticlesNoise, p.noise, 14);
  setIf(liveParticlesAttractor, p.attractor, 16);
  setIf(liveParticlesFlow, p.flow, 16);
  setIf(liveParticlesDamping, p.damping, 10);
  setIf(liveParticlesVortex, p.vortex, 16);
  setIf(liveParticlesDrift, p.drift, 14);
  setIf(liveParticlesFocus, p.focus, 14);
  setIf(liveParticlesTrail, p.trail, 14);
  if (liveParticlesAudioAmount && Number(liveParticlesAudioAmount.value) < 38) liveParticlesAudioAmount.value = "54";
  setSel(liveParticlesAudioSplit, p.split);
  setSel(liveParticlesCamMode, p.cam);
}

function getTemporalSynthSettings() {
  return {
    preset: liveSynthPreset ? liveSynthPreset.value : "drift",
    blend: liveSynthBlend ? Number(liveSynthBlend.value) : 58,
    echo: liveSynthEcho ? Number(liveSynthEcho.value) : 48,
    slit: liveSynthSlit ? Number(liveSynthSlit.value) : 22,
    axis: liveSynthAxis ? liveSynthAxis.value : "x",
    drift: liveSynthDrift ? Number(liveSynthDrift.value) : 34,
    color: liveSynthColor ? Number(liveSynthColor.value) : 24,
    audioOn: liveSynthAudio ? liveSynthAudio.checked : true,
    audioAmount: liveSynthAudioAmount ? Number(liveSynthAudioAmount.value) : 64,
  };
}

function updateLiveSynthPadDot() {
  if (!liveSynthPadDot) return;
  const x = clamp((liveSynthEcho ? Number(liveSynthEcho.value) : 48) / 100, 0, 1);
  const y = clamp(1 - (liveSynthSlit ? Number(liveSynthSlit.value) : 22) / 100, 0, 1);
  liveSynthPadDot.style.left = `${x * 100}%`;
  liveSynthPadDot.style.top = `${y * 100}%`;
}

function applyLiveSynthPadFromPointer(clientX, clientY) {
  if (!liveSynthPad || !liveSynthEcho || !liveSynthSlit) return;
  const rect = liveSynthPad.getBoundingClientRect();
  const nx = clamp((clientX - rect.left) / Math.max(1, rect.width), 0, 1);
  const ny = clamp((clientY - rect.top) / Math.max(1, rect.height), 0, 1);
  liveSynthEcho.value = String(Math.round(nx * 100));
  liveSynthSlit.value = String(Math.round((1 - ny) * 100));
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyLiveSynthPreset(preset) {
  if (!preset) return;
  if (preset === "strobe") {
    if (liveSynthBlend) liveSynthBlend.value = "64";
    if (liveSynthEcho) liveSynthEcho.value = "72";
    if (liveSynthSlit) liveSynthSlit.value = "14";
    if (liveSynthAxis) liveSynthAxis.value = "x";
    if (liveSynthDrift) liveSynthDrift.value = "42";
    if (liveSynthColor) liveSynthColor.value = "58";
    if (liveSynthAudioAmount) liveSynthAudioAmount.value = "78";
  } else if (preset === "slitscan") {
    if (liveSynthBlend) liveSynthBlend.value = "52";
    if (liveSynthEcho) liveSynthEcho.value = "34";
    if (liveSynthSlit) liveSynthSlit.value = "78";
    if (liveSynthAxis) liveSynthAxis.value = "y";
    if (liveSynthDrift) liveSynthDrift.value = "18";
    if (liveSynthColor) liveSynthColor.value = "36";
    if (liveSynthAudioAmount) liveSynthAudioAmount.value = "62";
  } else if (preset === "ghost") {
    if (liveSynthBlend) liveSynthBlend.value = "68";
    if (liveSynthEcho) liveSynthEcho.value = "86";
    if (liveSynthSlit) liveSynthSlit.value = "34";
    if (liveSynthAxis) liveSynthAxis.value = "x";
    if (liveSynthDrift) liveSynthDrift.value = "56";
    if (liveSynthColor) liveSynthColor.value = "22";
    if (liveSynthAudioAmount) liveSynthAudioAmount.value = "56";
  } else {
    if (liveSynthBlend) liveSynthBlend.value = "58";
    if (liveSynthEcho) liveSynthEcho.value = "48";
    if (liveSynthSlit) liveSynthSlit.value = "22";
    if (liveSynthAxis) liveSynthAxis.value = "x";
    if (liveSynthDrift) liveSynthDrift.value = "34";
    if (liveSynthColor) liveSynthColor.value = "24";
    if (liveSynthAudioAmount) liveSynthAudioAmount.value = "64";
  }
  updateLiveQuickOutputs();
  scheduleRender();
}

function renderTemporalSynthMode(baseImageData, tSec, settings) {
  if (!baseImageData || !synthFrameCtx || !synthPrevCtx) return;
  const w = baseImageData.width;
  const h = baseImageData.height;
  if (w <= 1 || h <= 1) {
    ctx.putImageData(baseImageData, 0, 0);
    return;
  }
  if (synthFrameCanvas.width !== w || synthFrameCanvas.height !== h) {
    synthFrameCanvas.width = w;
    synthFrameCanvas.height = h;
  }
  if (synthPrevCanvas.width !== w || synthPrevCanvas.height !== h) {
    synthPrevCanvas.width = w;
    synthPrevCanvas.height = h;
    synthPrevCtx.clearRect(0, 0, w, h);
  }
  synthFrameCtx.putImageData(baseImageData, 0, 0);
  const ts = getTemporalSynthSettings();
  const audioState = getReactiveAudioState(settings, ts.audioOn, ts.audioAmount / 100);
  const audioDrive = clamp(audioState.level * 0.72 + audioState.transient * 0.6 + audioState.bands[1] * 0.36, 0, 1.9);
  const blend = clamp(ts.blend / 100, 0, 1);
  const echoTarget = clamp(ts.echo / 100, 0, 1);
  const slitTarget = clamp(ts.slit / 100, 0, 1);
  synthEchoSmooth += (echoTarget - synthEchoSmooth) * 0.08;
  synthSlitSmooth += (slitTarget - synthSlitSmooth) * 0.1;
  const drift = clamp(ts.drift / 100, 0, 1);
  const colorShift = clamp(ts.color / 100, 0, 1);
  const echo = clamp(synthEchoSmooth * (0.58 + audioDrive * 0.22), 0, 0.94);
  const slit = clamp(synthSlitSmooth * (0.75 + audioDrive * 0.3), 0, 1);

  ctx.clearRect(0, 0, w, h);
  if (echo > 0.012) {
    const driftAmp = (2 + drift * 20) * (1 + audioDrive * 0.4);
    const dx = Math.sin(tSec * (0.65 + drift * 1.3)) * driftAmp;
    const dy = Math.cos(tSec * (0.57 + drift * 1.12)) * driftAmp * 0.68;
    const zoom = 1 + (drift * 0.04 + audioDrive * 0.018);
    const zw = w * zoom;
    const zh = h * zoom;
    ctx.save();
    ctx.globalAlpha = clamp(0.12 + echo * 0.72, 0, 0.9);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "low";
    ctx.drawImage(synthPrevCanvas, dx - (zw - w) * 0.5, dy - (zh - h) * 0.5, zw, zh);
    ctx.restore();
  }

  ctx.save();
  ctx.globalAlpha = clamp(0.52 + blend * 0.46, 0, 1);
  ctx.imageSmoothingEnabled = false;
  ctx.drawImage(synthFrameCanvas, 0, 0, w, h);
  ctx.restore();

  if (slit > 0.01) {
    const axisY = ts.axis === "y";
    const stripe = Math.max(2, Math.round((axisY ? w : h) * (0.002 + (1 - slit) * 0.014)));
    const step = Math.max(2, stripe + Math.round((1 - slit) * 6));
    const amplitude = Math.round((2 + slit * 22) * (1 + audioDrive * 0.36));
    ctx.save();
    ctx.globalAlpha = clamp(0.1 + slit * 0.36, 0, 0.72);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "medium";
    if (axisY) {
      for (let x = 0; x < w; x += step) {
        const shift = Math.round(Math.sin(tSec * 1.2 + x * 0.022) * amplitude);
        const sw = Math.min(stripe, w - x);
        if (sw <= 0) continue;
        ctx.drawImage(synthFrameCanvas, x, 0, sw, h, x + shift, 0, sw, h);
      }
    } else {
      for (let y = 0; y < h; y += step) {
        const shift = Math.round(Math.sin(tSec * 1.05 + y * 0.03) * amplitude);
        const sh = Math.min(stripe, h - y);
        if (sh <= 0) continue;
        ctx.drawImage(synthFrameCanvas, 0, y, w, sh, shift, y, w, sh);
      }
    }
    ctx.restore();
  }

  if (colorShift > 0.004) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = clamp(0.03 + colorShift * 0.22 + audioDrive * 0.05, 0, 0.42);
    const hue = (tSec * 28 + colorShift * 240 + audioDrive * 66) % 360;
    ctx.fillStyle = `hsl(${hue.toFixed(1)}deg 86% 58%)`;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  synthPrevCtx.save();
  synthPrevCtx.clearRect(0, 0, w, h);
  synthPrevCtx.globalAlpha = 1;
  synthPrevCtx.drawImage(canvas, 0, 0, w, h);
  synthPrevCtx.restore();
}

function getParticlesCameraMotion(ps, settings, tSec) {
  const base = getCameraMotion(settings, tSec);
  const mode = ps.camMode || "orbit";
  const nowMs = performance.now();
  const dt = clamp((nowMs - particlesCamLastTs) / 1000, 0, 0.09);
  particlesCamLastTs = nowMs;
  const speedKnob = clamp((ps.camSpeed || 0) / 100, 0, 1);
  const speedCurve = Math.pow(speedKnob, 2.1);
  const targetSpeed = 0.12 + speedCurve * 1.35;
  particlesCamSpeedSmooth += (targetSpeed - particlesCamSpeedSmooth) * 0.045;
  particlesCamAnimTime += dt * particlesCamSpeedSmooth;
  const phase = particlesCamAnimTime;

  const build = (m) => {
    if (m === "static") return { rx: 0, ry: 0, rz: 0, zoom: 1, panX: 0, panY: 0 };
    if (m === "sweep") {
      return {
        rx: Math.sin(phase * 0.55) * 8,
        ry: Math.sin(phase * 0.82) * 46,
        rz: Math.sin(phase * 0.31) * 7,
        zoom: 1 + Math.sin(phase * 0.63) * 0.08,
        panX: Math.sin(phase * 0.44) * 0.15,
        panY: Math.cos(phase * 0.38) * 0.12,
      };
    }
    if (m === "helix") {
      return {
        rx: Math.sin(phase * 0.94) * 15,
        ry: (phase * 36) % 360,
        rz: Math.cos(phase * 0.46) * 13,
        zoom: 1 + Math.sin(phase * 0.9) * 0.12,
        panX: Math.sin(phase * 0.52) * 0.2,
        panY: Math.cos(phase * 0.59) * 0.16,
      };
    }
    if (m === "inside") {
      return {
        rx: Math.sin(phase * 0.46) * 9,
        ry: (phase * 24) % 360,
        rz: Math.sin(phase * 0.26) * 6,
        zoom: 1.08 + Math.sin(phase * 0.44) * 0.16,
        panX: 0,
        panY: 0,
      };
    }
    return {
      rx: Math.sin(phase * 0.58) * 11,
      ry: (phase * 42) % 360,
      rz: Math.sin(phase * 0.34) * 4,
      zoom: 1 + Math.sin(phase * 0.68) * 0.07,
      panX: 0,
      panY: 0,
    };
  };

  if (particlesCamModePrev !== mode && particlesCamModeBlendStart === 0) {
    particlesCamModeBlendStart = nowMs;
  }
  let k = 1;
  if (particlesCamModeBlendStart > 0) {
    k = clamp((nowMs - particlesCamModeBlendStart) / 680, 0, 1);
    k = k * k * (3 - 2 * k);
    if (k >= 1) {
      particlesCamModePrev = mode;
      particlesCamModeBlendStart = 0;
    }
  }
  const prev = build(particlesCamModePrev);
  const curr = build(mode);
  const mix = (a, b) => a * (1 - k) + b * k;
  return {
    rxDeg: base.rxDeg + mix(prev.rx, curr.rx),
    ryDeg: base.ryDeg + mix(prev.ry, curr.ry),
    rzDeg: base.rzDeg + mix(prev.rz, curr.rz),
    zoomMul: base.zoomMul * mix(prev.zoom, curr.zoom),
    panX: base.panX + mix(prev.panX, curr.panX),
    panY: base.panY + mix(prev.panY, curr.panY),
  };
}

function getFractalLiveSettings() {
  const quality = liveFractalQuality ? liveFractalQuality.value : "med";
  const qualitySteps = quality === "low" ? 72 : quality === "high" ? 128 : 96;
  const qualityIter = quality === "low" ? 7 : quality === "high" ? 11 : 9;
  const variant = liveFractalVariant ? liveFractalVariant.value : "a";
  const textureMode = liveFractalTexture ? liveFractalTexture.value : "contour";
  const texture2Mode = liveFractalTexture2 ? liveFractalTexture2.value : "noise";
  const renderMode = liveFractalRenderMode ? liveFractalRenderMode.value : "hybrid";
  const bgMode = liveFractalBackground ? liveFractalBackground.value : "solid";
  const camMode = liveFractalCameraMode ? liveFractalCameraMode.value : "orbit";
  const shapeMode = liveFractalShapeB ? liveFractalShapeB.value : "mandel";
  const shapeModeB = shapeMode;
  const shapeMorph = 0;
  const paletteMode = liveFractalPalette ? liveFractalPalette.value : "cosmic";
  const style = liveFractalStyle ? liveFractalStyle.value : "lit";
  return {
    quality,
    variant,
    variantCode: variant === "b" ? 1 : 0,
    camMode,
    camSpeed: liveFractalCamSpeed ? Number(liveFractalCamSpeed.value) / 100 : 0,
    camDistance: liveFractalDistance ? Number(liveFractalDistance.value) / 30 : 2.53,
    symmetry: liveFractalSymmetry ? Number(liveFractalSymmetry.value) : 14,
    power: liveFractalPower ? Number(liveFractalPower.value) / 10 : 8.4,
    fog: liveFractalFog ? Number(liveFractalFog.value) / 1000 : 0.024,
    glow: liveFractalGlow ? Number(liveFractalGlow.value) / 50 : 1.04,
    light: liveFractalLight ? Number(liveFractalLight.value) / 100 : 1.2,
    spin: liveFractalSpin ? Number(liveFractalSpin.value) / 100 : 0,
    breath: liveFractalBreath ? Number(liveFractalBreath.value) / 100 : 0,
    warmth: liveFractalWarmth ? Number(liveFractalWarmth.value) / 100 : 0.66,
    textureMode,
    textureModeCode:
      textureMode === "crystal" ? 1 : textureMode === "ink" ? 2 : textureMode === "contour" ? 3 : 0,
    renderMode,
    renderModeCode:
      renderMode === "wire" ? 1 : renderMode === "points" ? 2 : renderMode === "hybrid" ? 3 : 0,
    shapeModeCode:
      shapeMode === "torus" ? 1 : shapeMode === "gyroid" ? 2 : shapeMode === "poly" ? 3 : 0,
    shapeModeBCode:
      shapeModeB === "torus" ? 1 : shapeModeB === "gyroid" ? 2 : shapeModeB === "poly" ? 3 : 0,
    shapeMorph,
    flow: liveFractalFlow ? Number(liveFractalFlow.value) / 100 : 0.62,
    paletteModeCode:
      paletteMode === "neon" ? 1 : paletteMode === "cosmic" ? 2 : paletteMode === "mono" ? 3 : paletteMode === "input" ? 4 : 0,
    texture2ModeCode:
      texture2Mode === "noise" ? 1 : texture2Mode === "ripples" ? 2 : texture2Mode === "cells" ? 3 : 0,
    texture2Mix: liveFractalTextureMix ? Number(liveFractalTextureMix.value) / 100 : 0.62,
    bgMode,
    bgModeCode: bgMode === "sunset" ? 1 : bgMode === "cosmic" ? 2 : bgMode === "solid" ? 3 : 0,
    style,
    flatMode: style === "flat" ? 1 : 0,
    flatColor: hexToRgb01(liveFractalFlatColor ? liveFractalFlatColor.value : "#000000"),
    useAudio: liveFractalAudio ? liveFractalAudio.checked : true,
    audioGain: liveFractalAudioGain ? Number(liveFractalAudioGain.value) / 100 : 1,
    steps: qualitySteps,
    iter: qualityIter,
    maxDist: quality === "low" ? 18 : quality === "high" ? 30 : 24,
    epsilon: quality === "high" ? 0.0011 : 0.0017,
  };
}

function getFractalInputReactiveState(imageData) {
  const fallback = {
    luma: clamp(visualFeatures.luma, 0, 1),
    motion: clamp(visualFeatures.motion, 0, 1.2),
    contrast: 0.12,
    color: [0.52, 0.46, 0.58],
  };
  if (!imageData || !imageData.data || imageData.width < 2 || imageData.height < 2) return fallback;
  const { width, height, data } = imageData;
  const picks = [
    [0.5, 0.5],
    [0.28, 0.32],
    [0.72, 0.32],
    [0.32, 0.72],
    [0.68, 0.72],
    [0.5, 0.18],
    [0.5, 0.82],
    [0.18, 0.5],
    [0.82, 0.5],
  ];
  let r = 0;
  let g = 0;
  let b = 0;
  let l = 0;
  let l2 = 0;
  for (let i = 0; i < picks.length; i++) {
    const px = clamp(Math.floor(picks[i][0] * (width - 1)), 0, width - 1);
    const py = clamp(Math.floor(picks[i][1] * (height - 1)), 0, height - 1);
    const idx = (py * width + px) * 4;
    const rr = data[idx] / 255;
    const gg = data[idx + 1] / 255;
    const bb = data[idx + 2] / 255;
    const lum = rr * 0.2126 + gg * 0.7152 + bb * 0.0722;
    r += rr;
    g += gg;
    b += bb;
    l += lum;
    l2 += lum * lum;
  }
  const n = picks.length || 1;
  const avgLuma = l / n;
  const variance = Math.max(0, l2 / n - avgLuma * avgLuma);
  const contrastNow = clamp(Math.sqrt(variance) * 2.3, 0, 1);
  const lumaMix = clamp(avgLuma * 0.7 + visualFeatures.luma * 0.3, 0, 1);
  const motionRaw = clamp(visualFeatures.motion, 0, 1.2);
  const motionDead = motionRaw < 0.035 ? 0 : motionRaw;
  const motionSoft = motionDead * motionDead * (3.0 - 2.0 * clamp(motionDead, 0, 1));
  const contrastSoft = contrastNow < 0.03 ? 0 : contrastNow;
  return {
    luma: lumaMix,
    motion: motionSoft,
    contrast: contrastSoft,
    color: [r / n, g / n, b / n],
  };
}

function createFractalProgram(gl, vsSource, fsSource) {
  const compile = (type, src) => {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, src);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      const log = gl.getShaderInfoLog(shader) || "shader compile error";
      gl.deleteShader(shader);
      throw new Error(log);
    }
    return shader;
  };
  const vs = compile(gl.VERTEX_SHADER, vsSource);
  const fs = compile(gl.FRAGMENT_SHADER, fsSource);
  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    const log = gl.getProgramInfoLog(program) || "program link error";
    gl.deleteProgram(program);
    throw new Error(log);
  }
  return program;
}

function ensureFractalRenderer() {
  if (fractalGl) return fractalGl;
  const gl = fractalGlCanvas.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: false });
  if (!gl) return null;

  const vs = `
    attribute vec2 aPos;
    varying vec2 vUv;
    void main() {
      vUv = aPos * 0.5 + 0.5;
      gl_Position = vec4(aPos, 0.0, 1.0);
    }
  `;
  const fs = `
    precision highp float;
    varying vec2 vUv;
    uniform vec2 uResolution;
    uniform float uTime;
    uniform float uBass;
    uniform float uMid;
    uniform float uHigh;
    uniform float uEnergy;
    uniform float uVisualLuma;
    uniform float uVisualMotion;
    uniform float uVisualContrast;
    uniform vec3 uInputColor;
    uniform float uSymmetry;
    uniform float uFractalPower;
    uniform float uIter;
    uniform float uSteps;
    uniform float uMaxDist;
    uniform float uEpsilon;
    uniform float uFogDensity;
    uniform float uGlow;
    uniform float uLightIntensity;
    uniform float uSpin;
    uniform float uBreath;
    uniform float uColorWarmth;
    uniform float uCamMode;
    uniform float uCamYaw;
    uniform float uCamPitch;
    uniform float uCamDist;
    uniform float uCamSpeed;
    uniform float uShapeMode;
    uniform float uTextureMode;
    uniform float uTexture2Mode;
    uniform float uTexture2Mix;
    uniform float uRenderMode;
    uniform float uBgMode;
    uniform float uFlatMode;
    uniform vec3 uFlatColor;
    uniform float uFractalVariant;
    uniform float uShapeModeB;
    uniform float uShapeMorph;
    uniform float uFlow;
    uniform float uPaletteMode;

    mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c,-s,s,c); }

    vec3 applySymmetry(vec3 p) {
      float sym = clamp(floor(uSymmetry + 0.5), 2.0, 48.0);
      float sector = 6.28318530718 / sym;
      float angle = atan(p.z, p.x);
      float r = length(p.xz);
      angle = mod(angle, sector);
      angle = abs(angle - sector * 0.5);
      p.x = cos(angle) * r;
      p.z = sin(angle) * r;
      return p;
    }

    float deMandelbulb(vec3 p) {
      vec3 z = p;
      float dr = 1.0;
      float r = 0.0;
      float power = clamp(
          uFractalPower +
          0.6 * (uEnergy - 0.5) * uBreath +
          (uVisualLuma - 0.5) * 1.1 +
          uVisualMotion * 0.5 +
          uVisualContrast * 0.8,
        6.0,
        12.0
      );
      int iterMax = 12;
      for (int i = 0; i < 12; i++) {
        if (i >= int(clamp(uIter, 1.0, 12.0))) break;
        r = length(z);
        if (!all(equal(z, z)) || r > 8.0) break;
        float theta = acos(clamp(z.y / max(r, 1e-4), -1.0, 1.0));
        float phi = atan(z.z, z.x);
        dr = pow(r, power - 1.0) * power * dr + 1.0;
        float zr = pow(r, power);
        theta *= power;
        phi *= power;
        z = zr * vec3(sin(theta) * cos(phi), cos(theta), sin(theta) * sin(phi));
        z += p;
      }
      return 0.5 * log(max(r, 1e-4)) * r / max(dr, 1e-4);
    }

    float deShapeByMode(vec3 p, float modeCode) {
      float dShape = deMandelbulb(p);
      float mode = floor(modeCode + 0.5);
      if (mode > 0.5 && mode < 1.5) {
        vec2 q = vec2(length(p.xz) - 0.75, p.y * 0.7);
        dShape = length(q) - 0.22;
      } else if (mode > 1.5 && mode < 2.5) {
        float gy = abs(dot(sin(p * 2.4), cos(p.yzx * 2.4))) - 0.22;
        dShape = gy * 0.55;
      } else if (mode > 2.5) {
        float oct = (abs(p.x) + abs(p.y) + abs(p.z) - 1.05) * 0.46;
        dShape = oct;
      }
      return dShape;
    }

    float mapSceneA(vec3 p) {
      float breathRate = max(uBreath, 0.0) * (0.22 + 0.16 * (0.3 + uVisualMotion));
      float breath = (breathRate > 0.0001) ? (0.5 + 0.5 * sin(uTime * breathRate)) : 0.5;
      float spinRate = max(uSpin, 0.0) * (0.22 + 0.18 * (0.2 + uBass) + uVisualMotion * 0.16);
      float spin = uTime * spinRate;
      p.xz *= rot(spin);
      p.xy *= rot(spin * 0.7);
      p *= 0.92 + breath * 0.16;
      p = applySymmetry(p);
      float texMode = floor(uTextureMode + 0.5);
      if (texMode > 0.5) {
        float warp = sin(p.x * 2.7 + uTime * 0.25) * cos(p.y * 3.4 - uTime * 0.22) * 0.04;
        if (texMode > 1.5) warp += sin((p.x + p.z) * 9.0) * 0.02;
        if (texMode > 2.5) warp += cos((p.y - p.z) * 13.0) * 0.01;
        warp += sin((p.x * 5.1 - p.z * 4.2) + uTime * 0.18) * 0.008;
        p += normalize(vec3(p.z, p.x, p.y) + 0.0001) * warp * (1.0 + uVisualContrast * 0.55);
      }
      float dA = deShapeByMode(p, uShapeMode);
      float dB = deShapeByMode(p, uShapeModeB);
      float d = mix(dA, dB, clamp(uShapeMorph, 0.0, 1.0));
      if (!(d > -1e8 && d < 1e8)) return 1e3;
      return d;
    }

    float mapSceneB(vec3 p) {
      float flow = clamp(uFlow, 0.0, 1.0);
      float breathRate = max(uBreath, 0.08) * (0.24 + 0.34 * (0.3 + uVisualMotion) + flow * 0.22);
      float breath = 0.5 + 0.5 * sin(uTime * breathRate + uVisualLuma * 2.6);
      float spinRate = max(uSpin, 0.02) * (0.24 + 0.24 * (0.2 + uBass) + uVisualMotion * 0.2 + flow * 0.28);
      float spin = uTime * spinRate;
      p.xz *= rot(spin);
      p.xy *= rot(spin * 0.43 + sin(uTime * 0.22) * 0.04);
      p *= 0.86 + breath * (0.18 + 0.08 * flow);
      p = applySymmetry(p);

      vec3 q = p;
      q += sin(vec3(p.y, p.z, p.x) * (2.4 + flow * 3.6) + uTime * (0.45 + flow * 0.9)) *
           0.08 * (0.55 + 0.45 * uMid + uVisualContrast * 0.18);

      float dPrimary = deShapeByMode(q, uShapeMode);
      float dSecondary = deShapeByMode(
        q * (1.04 + flow * 0.14) + vec3(0.0, 0.0, 0.08 * sin(uTime * 0.6)),
        uShapeModeB
      );
      float d = mix(dPrimary, dSecondary, clamp(uShapeMorph, 0.0, 1.0));
      if (!(d > -1e8 && d < 1e8)) return 1e3;
      return d;
    }

    float mapScene(vec3 p) {
      if (uFractalVariant > 0.5) return mapSceneB(p);
      return mapSceneA(p);
    }

    vec3 calcNormal(vec3 p) {
      float e = uEpsilon;
      vec2 h = vec2(e, 0.0);
      float dx = mapScene(p + vec3(h.x, h.y, h.y)) - mapScene(p - vec3(h.x, h.y, h.y));
      float dy = mapScene(p + vec3(h.y, h.x, h.y)) - mapScene(p - vec3(h.y, h.x, h.y));
      float dz = mapScene(p + vec3(h.y, h.y, h.x)) - mapScene(p - vec3(h.y, h.y, h.x));
      return normalize(vec3(dx, dy, dz));
    }

    float softShadow(vec3 ro, vec3 rd, float mint, float maxt, float k) {
      float shade = 1.0;
      float t = mint;
      for (int i = 0; i < 48; i++) {
        float h = mapScene(ro + rd * t);
        shade = min(shade, k * h / max(t, 0.0005));
        t += clamp(h, 0.02, 0.35);
        if (t > maxt || shade < 0.01) break;
      }
      return clamp(shade, 0.0, 1.0);
    }

    vec3 paletteIQ(float t, vec3 a, vec3 b, vec3 c, vec3 d) {
      return a + b * cos(6.28318530718 * (c * t + d));
    }

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 345.45));
      p += dot(p, p + 34.345);
      return fract(p.x * p.y);
    }

    vec3 palette(float t) {
      if (uFractalVariant > 0.5) {
        float pal = floor(uPaletteMode + 0.5);
        float flow = clamp(uFlow, 0.0, 1.0);
        float drift = t * (0.64 + flow * 0.55) + uTime * (0.02 + flow * 0.06);
        vec3 col;
        if (pal > 0.5 && pal < 1.5) {
          col = paletteIQ(
            drift,
            vec3(0.54, 0.40, 0.58),
            vec3(0.40, 0.40, 0.34),
            vec3(1.00, 0.90, 0.78),
            vec3(0.02, 0.21, 0.34)
          );
        } else if (pal > 1.5 && pal < 2.5) {
          col = paletteIQ(
            drift,
            vec3(0.26, 0.28, 0.42),
            vec3(0.38, 0.34, 0.46),
            vec3(1.00, 1.08, 0.92),
            vec3(0.18, 0.26, 0.46)
          );
        } else if (pal > 2.5 && pal < 3.5) {
          col = paletteIQ(
            drift,
            vec3(0.52),
            vec3(0.34),
            vec3(1.00, 1.00, 1.00),
            vec3(0.00, 0.10, 0.22)
          );
        } else if (pal > 3.5) {
          float audioTilt = clamp(uBass * 0.65 + uMid * 0.55 + uHigh * 0.45, 0.0, 1.0);
          col = paletteIQ(
            drift,
            mix(vec3(0.26, 0.34, 0.44), vec3(0.46, 0.28, 0.24), audioTilt),
            mix(vec3(0.34, 0.30, 0.24), vec3(0.28, 0.36, 0.42), audioTilt),
            vec3(1.00, 0.95, 0.88),
            vec3(0.12, 0.24, 0.36) + audioTilt * vec3(0.0, 0.12, 0.18)
          );
        } else {
          col = paletteIQ(
            drift,
            vec3(0.56, 0.38, 0.26),
            vec3(0.36, 0.24, 0.18),
            vec3(1.00, 0.90, 0.76),
            vec3(0.00, 0.12, 0.25)
          );
        }
        float warm = clamp(uColorWarmth, 0.0, 1.0);
        return mix(col.zyx, col, 0.25 + warm * 0.75);
      }
      vec3 warmA = mix(vec3(0.94,0.58,0.42), vec3(0.90,0.35,0.58), 0.5 + 0.5 * sin(t + uTime * 0.04));
      vec3 warmB = mix(vec3(0.84,0.76,0.42), vec3(0.52,0.72,0.98), 0.5 + 0.5 * cos(t * 0.8 + uTime * 0.03));
      vec3 warmC = mix(vec3(0.76,0.48,0.95), vec3(0.33,0.89,0.83), 0.5 + 0.5 * sin(t * 0.6 - uTime * 0.028));
      vec3 srcTint = mix(vec3(0.5), uInputColor, 0.72);
      float imgMix = clamp(uVisualLuma * 0.52 + uVisualMotion * 0.2 + uVisualContrast * 0.42, 0.0, 0.86);
      float k = 0.5 + 0.5 * sin(uTime * 0.06 + t * 0.37);
      vec3 base = mix(mix(warmB, warmA, clamp(uColorWarmth, 0.0, 1.0)), warmC, k * 0.34);
      return mix(base, srcTint, imgMix);
    }

    void main() {
      vec2 uv = (vUv * 2.0 - 1.0);
      uv.x *= uResolution.x / max(uResolution.y, 1.0);
      float flow = clamp(uFlow, 0.0, 1.0);
      float insideK = step(0.5, uCamMode);
      float liquidWarp = insideK * (0.24 + flow * 0.34 + uVisualMotion * 0.14 + uEnergy * 0.1);
      if (liquidWarp > 0.0001) {
        vec2 ripple = vec2(
          sin(uv.y * (7.2 + flow * 3.4) + uTime * (1.35 + flow * 1.85) + uMid * 4.6),
          cos(uv.x * (8.1 + flow * 3.1) - uTime * (1.18 + flow * 1.45) + uHigh * 4.2)
        );
        vec2 swell = vec2(
          sin((uv.x + uv.y) * (2.8 + flow * 1.8) + uTime * (0.34 + flow * 0.22)),
          cos((uv.x - uv.y) * (3.1 + flow * 1.5) - uTime * (0.29 + flow * 0.18))
        );
        uv += (ripple * 0.72 + swell * 0.28) * liquidWarp * 0.04;
      }
      float yaw = uCamYaw;
      float pitch = clamp(uCamPitch, -1.45, 1.45);
      float autoYaw = uTime * (uCamSpeed * 0.35) * (uCamMode < 0.5 ? 1.0 : 0.35);
      yaw += autoYaw;
      vec3 orbitPos = vec3(sin(yaw) * uCamDist, sin(uTime * uCamSpeed * 0.12) * (0.24 * uCamSpeed), cos(yaw) * uCamDist);
      vec3 insideDir = normalize(vec3(
        cos(pitch) * sin(yaw),
        sin(pitch),
        cos(pitch) * cos(yaw)
      ));
      vec3 ro = (uCamMode < 0.5) ? orbitPos : insideDir * 0.03;
      vec3 viewDir = (uCamMode < 0.5) ? normalize(-orbitPos) : insideDir;
      vec3 worldUp = abs(viewDir.y) > 0.98 ? vec3(0.0, 0.0, 1.0) : vec3(0.0, 1.0, 0.0);
      vec3 right = normalize(cross(viewDir, worldUp));
      vec3 up = normalize(cross(right, viewDir));
      vec3 rd = normalize(viewDir * 1.35 + right * uv.x + up * uv.y);
      if (insideK > 0.5) {
        vec3 swirl = vec3(
          sin((uv.y + uTime * 0.34) * (4.1 + flow * 3.4)),
          cos((uv.x - uTime * 0.27) * (4.8 + flow * 3.0)),
          sin((uv.x + uv.y + uTime * 0.21) * (5.2 + flow * 2.8))
        );
        rd = normalize(rd + swirl * (0.04 + flow * 0.09) * (0.38 + uVisualMotion * 0.42 + uMid * 0.3));
      }
      float t = 0.0;
      float d = 0.0;
      float glowAcc = 0.0;
      float maxDist = clamp(uMaxDist, 5.0, 60.0);
      for (int i = 0; i < 160; i++) {
        if (i >= int(clamp(uSteps, 8.0, 160.0))) break;
        vec3 p = ro + rd * t;
        d = mapScene(p);
        float absd = abs(d);
        glowAcc += exp(-absd * 18.0) * (0.14 + 0.86 * uMid);
        if (absd < uEpsilon || t > maxDist) break;
        t += clamp(abs(d), 0.001, 1.2);
      }

      vec3 col;
      bool variantB = uFractalVariant > 0.5;
      if (t <= maxDist && abs(d) < uEpsilon * 3.0) {
        vec3 p = ro + rd * t;
        vec3 n = calcNormal(p);
        float az = atan(p.z, p.x);
        float angularFlow = sin(az * 1.0) * 0.42 + cos(az * 1.7) * 0.31;
        float radialFlow = sin(length(p.xz) * 1.9 - uTime * 0.07) * 0.22;
        vec3 base = palette(length(p) * 1.3 + angularFlow + radialFlow);
        if (variantB) {
          float flow = clamp(uFlow, 0.0, 1.0);
          vec3 key = normalize(vec3(0.58, 0.72, -0.42));
          vec3 fill = normalize(vec3(-0.48, 0.24, -0.86));
          vec3 rimDir = normalize(vec3(-rd.x, 0.45, -rd.z));
          float keyDiff = max(dot(n, key), 0.0);
          float fillDiff = max(dot(n, fill), 0.0);
          float rimDiff = max(dot(n, rimDir), 0.0);
          float shadow = softShadow(p + n * max(uEpsilon * 6.0, 0.003), key, 0.03, 4.8, 14.0);
          vec3 h = normalize(key - rd);
          float spec = pow(max(dot(n, h), 0.0), 18.0 + uHigh * 20.0) * (0.18 + 0.72 * uLightIntensity);
          float fres = pow(1.0 - max(dot(n, -rd), 0.0), 2.6);
          float matte = 0.16 + keyDiff * shadow * (0.88 + uVisualContrast * 0.2) + fillDiff * 0.24;
          col = base * matte * (0.68 + uLightIntensity * 0.72);
          col += base * (0.22 + 0.3 * uGlow) * rimDiff * (0.35 + 0.65 * fres);
          col += vec3(spec) * (0.52 + 0.48 * uMid + flow * 0.28);
          col += base * (uVisualMotion * 0.12 + uEnergy * 0.08);
        } else {
          vec3 l1 = normalize(vec3(0.5, 0.7, -0.4));
          vec3 l2 = normalize(vec3(-0.6, 0.3, -0.8));
          float diff1 = max(dot(n, l1), 0.0);
          float diff2 = max(dot(n, l2), 0.0) * 0.45;
          float fres = pow(1.0 - max(dot(n, -rd), 0.0), 2.5);
          float light = (diff1 + diff2 + 0.25 + fres * 0.35) * (uLightIntensity * (0.8 + 0.4 * uHigh + uVisualContrast * 0.2));
          float texMode = floor(uTextureMode + 0.5);
          if (texMode > 0.5) {
            float grain = sin((p.x + p.y + p.z) * 20.0 + uTime * 0.8) * 0.07;
            light *= 1.0 + grain;
          }
          if (texMode > 1.5) {
            float ink = smoothstep(0.35, 0.8, abs(dot(n, rd)));
            base = mix(base, vec3(0.96, 0.92, 0.84), ink * 0.28);
          }
          if (texMode > 2.5) {
            float contour = abs(sin(length(p) * 8.0));
            light *= 0.72 + contour * 0.5;
          }
          float tex2Mode = floor(uTexture2Mode + 0.5);
          float tex2 = 0.0;
          if (tex2Mode > 0.5 && tex2Mode < 1.5) {
            tex2 = 0.5 + 0.5 * sin(dot(p, vec3(7.3, 5.2, 6.1)) + uTime * 0.7);
          } else if (tex2Mode > 1.5 && tex2Mode < 2.5) {
            tex2 = 0.5 + 0.5 * sin(length(p.xy) * 22.0 - uTime * 1.1);
          } else if (tex2Mode > 2.5) {
            vec3 cp = abs(fract(p * 5.0) - 0.5);
            tex2 = 1.0 - smoothstep(0.06, 0.28, min(min(cp.x, cp.y), cp.z));
          }
          float geoFlat = 0.5 + 0.5 * sin((atan(p.y, p.x) * 12.0 + length(p.xz) * 8.0) - uTime * 0.25);
          tex2 = mix(tex2, geoFlat, 0.22);
          if (tex2Mode > 0.5) {
            float mixK = clamp(uTexture2Mix, 0.0, 1.0);
            base = mix(base, base.zyx, tex2 * mixK * 0.45);
            light *= 1.0 + tex2 * mixK * 0.22;
          }
          float renderMode = floor(uRenderMode + 0.5);
          vec3 grid = abs(fract(p * 6.0) - 0.5);
          float gridMin = min(min(grid.x, grid.y), grid.z);
          float wireW = 0.018 + (0.012 + flow * 0.01) * (0.6 + uVisualContrast * 0.6);
          float wire = 1.0 - smoothstep(wireW, wireW * 3.4, gridMin);
          vec3 pg = abs(fract(p * 9.5) - 0.5);
          float dotsLen = length(pg);
          float dotsW = 0.02 + flow * 0.012 + uVisualContrast * 0.006;
          float dots = 1.0 - smoothstep(0.21 + dotsW, 0.35 + dotsW, dotsLen);
          if (uFlatMode > 0.5) {
            float toon = floor(clamp(light * 0.85, 0.0, 1.0) * 4.0) / 4.0;
            col = mix(base * toon, base, 0.18);
          } else {
            col = base * light;
          }
          if (renderMode > 0.5 && renderMode < 1.5) {
            col = mix(base * 0.12, col, wire * 0.9 + 0.1);
            col += base * wire * 0.16;
          } else if (renderMode > 1.5 && renderMode < 2.5) {
            col = mix(base * 0.05, col, dots);
            col += base * dots * 0.28;
          } else if (renderMode > 2.5) {
            float hybrid = max(wire, dots * 0.9);
            col = mix(base * 0.11, col, hybrid * 0.88 + 0.12);
            col += base * hybrid * 0.17;
          }
          float seamBlend = smoothstep(0.0, 1.0, light);
          col = mix(col, base * mix(0.62, 1.08, seamBlend), 0.06 + 0.08 * uVisualContrast);
        }
      } else {
        if (variantB) {
          float bgPulse = 0.5 + 0.5 * sin(uTime * (0.09 + uFlow * 0.12) + uv.x * 1.8 - uv.y * 1.5);
          vec3 nebA = palette(uTime * 0.03 + uv.x * 0.42 + uv.y * 0.22) * 0.28;
          vec3 nebB = palette(uTime * 0.02 - uv.x * 0.31 + uv.y * 0.64) * 0.12;
          col = mix(nebB, nebA, bgPulse);
          col += vec3(pow(max(0.0, 1.0 - length(uv) * 0.92), 2.3)) * (0.05 + uGlow * 0.04);
        } else {
          float bgMode = floor(uBgMode + 0.5);
          float bg = 0.5 + 0.5 * sin(uTime * 0.06 + uv.x * 1.7 + uv.y * 2.3);
          vec3 c1 = vec3(0.03,0.02,0.05);
          vec3 c2 = vec3(0.12,0.05,0.15);
          if (bgMode > 0.5) {
            c1 = vec3(0.12,0.05,0.03);
            c2 = vec3(0.35,0.11,0.12);
          }
          if (bgMode > 1.5) {
            c1 = vec3(0.01,0.03,0.09);
            c2 = vec3(0.16,0.08,0.30);
          }
          if (bgMode > 2.5 || uFlatMode > 0.5) {
            col = uFlatColor;
          } else {
            col = mix(c1, c2, bg);
          }
        }
      }

      float fogDensity = variantB ? (uFogDensity * 1.8 + 0.004 + uFlow * 0.006) : uFogDensity;
      float fog = 1.0 - exp(-t * fogDensity);
      vec3 fogCol = variantB
        ? palette(uTime * 0.04 + uv.x * 0.26 + uv.y * 0.18) * (0.18 + 0.42 * uColorWarmth)
        : mix(vec3(0.28,0.16,0.10), vec3(0.32,0.12,0.28), 0.45 + 0.55 * uColorWarmth);
      if (uFlatMode < 0.5 || variantB) {
        col = mix(col, fogCol, clamp(fog, 0.0, 1.0));
      }
      float glowScale = variantB ? 0.0065 : 0.004;
      float glowBoost = variantB
        ? (1.15 + uFlow * 0.85 + uVisualContrast * 0.25)
        : (uFlatMode > 0.5 ? 0.45 : 1.0);
      col += glowAcc * glowScale * uGlow * (1.0 + uVisualContrast * 0.35) * palette(uTime * 0.06 + uv.x + uv.y) * glowBoost;
      if (insideK > 0.5) {
        float waterWave = 0.5 + 0.5 * sin((uv.x * 17.0 + uv.y * 14.0) - uTime * (2.1 + flow * 1.2));
        float waterWave2 = 0.5 + 0.5 * cos((uv.x * 12.0 - uv.y * 15.0) + uTime * (1.6 + flow));
        float caustic = pow(waterWave * waterWave2, 1.45);
        vec3 waterTint = vec3(0.08, 0.24, 0.32);
        col = mix(col, col * vec3(0.84, 0.95, 1.08) + waterTint * 0.2, 0.2 + flow * 0.16);
        col += palette(uTime * 0.045 + uv.x * 0.4 - uv.y * 0.34) * caustic * (0.06 + flow * 0.08);

        float delayT = uTime - (0.09 + flow * 0.05);
        vec2 trailShift = vec2(
          sin(delayT * (1.2 + flow * 0.55) + uv.y * 4.0),
          cos(delayT * (1.1 + flow * 0.48) - uv.x * 4.6)
        ) * (0.01 + flow * 0.012);
        float trailBand = 0.5 + 0.5 * sin((uv.x - trailShift.x) * 18.0 + (uv.y - trailShift.y) * 16.0 - delayT * (2.2 + flow * 0.9));
        vec3 trailCol = palette(delayT * 0.05 + (uv.x - trailShift.x) * 0.5 - (uv.y - trailShift.y) * 0.38);
        col = mix(col, trailCol, (0.05 + flow * 0.07) * trailBand * (0.5 + 0.5 * uVisualMotion));
      }
      float chromaPhase = (uv.x - uv.y) * (7.2 + flow * 2.1) + uTime * (0.34 + flow * 0.42);
      vec3 chromaSplit = vec3(
        sin(chromaPhase),
        sin(chromaPhase + 2.09439510239),
        sin(chromaPhase + 4.18879020479)
      ) * 0.5 + 0.5;
      vec3 chromaBase = vec3(col.r, col.g * 0.96, col.b * 1.04);
      float chromaMix = 0.11 + clamp(uTexture2Mix, 0.0, 1.0) * 0.15 + uVisualContrast * 0.06 + insideK * (0.08 + flow * 0.12);
      col = mix(chromaBase, chromaBase * (0.86 + 0.26 * chromaSplit), clamp(chromaMix, 0.0, 0.44));
      float dither = (hash21(gl_FragCoord.xy + vec2(uTime * 37.2, uTime * 11.7)) - 0.5) / 255.0;
      col += vec3(dither);
      col = clamp(col, 0.0, 1.0);
      gl_FragColor = vec4(col, 1.0);
    }
  `;

  let program;
  try {
    program = createFractalProgram(gl, vs, fs);
  } catch {
    return null;
  }

  const posBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const aPos = gl.getAttribLocation(program, "aPos");
  const uniforms = {
    uResolution: gl.getUniformLocation(program, "uResolution"),
    uTime: gl.getUniformLocation(program, "uTime"),
    uBass: gl.getUniformLocation(program, "uBass"),
    uMid: gl.getUniformLocation(program, "uMid"),
    uHigh: gl.getUniformLocation(program, "uHigh"),
    uEnergy: gl.getUniformLocation(program, "uEnergy"),
    uVisualLuma: gl.getUniformLocation(program, "uVisualLuma"),
    uVisualMotion: gl.getUniformLocation(program, "uVisualMotion"),
    uVisualContrast: gl.getUniformLocation(program, "uVisualContrast"),
    uInputColor: gl.getUniformLocation(program, "uInputColor"),
    uSymmetry: gl.getUniformLocation(program, "uSymmetry"),
    uFractalPower: gl.getUniformLocation(program, "uFractalPower"),
    uIter: gl.getUniformLocation(program, "uIter"),
    uSteps: gl.getUniformLocation(program, "uSteps"),
    uMaxDist: gl.getUniformLocation(program, "uMaxDist"),
    uEpsilon: gl.getUniformLocation(program, "uEpsilon"),
    uFogDensity: gl.getUniformLocation(program, "uFogDensity"),
    uGlow: gl.getUniformLocation(program, "uGlow"),
    uLightIntensity: gl.getUniformLocation(program, "uLightIntensity"),
    uSpin: gl.getUniformLocation(program, "uSpin"),
    uBreath: gl.getUniformLocation(program, "uBreath"),
    uColorWarmth: gl.getUniformLocation(program, "uColorWarmth"),
    uCamMode: gl.getUniformLocation(program, "uCamMode"),
    uCamYaw: gl.getUniformLocation(program, "uCamYaw"),
    uCamPitch: gl.getUniformLocation(program, "uCamPitch"),
    uCamDist: gl.getUniformLocation(program, "uCamDist"),
    uCamSpeed: gl.getUniformLocation(program, "uCamSpeed"),
    uShapeMode: gl.getUniformLocation(program, "uShapeMode"),
    uTextureMode: gl.getUniformLocation(program, "uTextureMode"),
    uTexture2Mode: gl.getUniformLocation(program, "uTexture2Mode"),
    uTexture2Mix: gl.getUniformLocation(program, "uTexture2Mix"),
    uRenderMode: gl.getUniformLocation(program, "uRenderMode"),
    uBgMode: gl.getUniformLocation(program, "uBgMode"),
    uFlatMode: gl.getUniformLocation(program, "uFlatMode"),
    uFlatColor: gl.getUniformLocation(program, "uFlatColor"),
    uFractalVariant: gl.getUniformLocation(program, "uFractalVariant"),
    uShapeModeB: gl.getUniformLocation(program, "uShapeModeB"),
    uShapeMorph: gl.getUniformLocation(program, "uShapeMorph"),
    uFlow: gl.getUniformLocation(program, "uFlow"),
    uPaletteMode: gl.getUniformLocation(program, "uPaletteMode"),
  };

  fractalGl = { gl, program, posBuffer, aPos, uniforms };
  return fractalGl;
}

function renderFractalLive(tSec, sourceImageData = null) {
  const renderer = ensureFractalRenderer();
  if (!renderer) return false;
  const { gl, program, posBuffer, aPos, uniforms } = renderer;
  if (fractalGlCanvas.width !== canvas.width || fractalGlCanvas.height !== canvas.height) {
    fractalGlCanvas.width = canvas.width;
    fractalGlCanvas.height = canvas.height;
  }
  const fs = getFractalLiveSettings();
  fractalCamYaw = lerpAngle(fractalCamYaw, fractalCamYawTarget, 0.075);
  fractalCamPitch += (fractalCamPitchTarget - fractalCamPitch) * 0.075;
  const camDistTarget = clamp(fs.camDistance, 1.2, 8);
  fractalCamDistSmooth += (camDistTarget - fractalCamDistSmooth) * 0.075;
  const audioState = getReactiveAudioState(getSettings(), fs.useAudio, fs.audioGain);
  const bassTarget = clamp(audioState.bands[0] * 0.85 + audioState.bands[1] * 0.75, 0, 1);
  const midTarget = clamp(audioState.bands[1] * 0.4 + audioState.bands[2] * 0.7, 0, 1);
  const highTarget = clamp(audioState.bands[3] * 0.9 + audioState.transient * 0.35, 0, 1);
  const energyTarget = clamp(audioState.level * 0.8 + audioState.transient * 0.28, 0, 1);
  const audioFollow = fs.useAudio ? 0.08 : 0.18;
  fractalAudioBassSmooth += (bassTarget - fractalAudioBassSmooth) * audioFollow;
  fractalAudioMidSmooth += (midTarget - fractalAudioMidSmooth) * audioFollow;
  fractalAudioHighSmooth += (highTarget - fractalAudioHighSmooth) * audioFollow;
  fractalAudioEnergySmooth += (energyTarget - fractalAudioEnergySmooth) * audioFollow;
  const bass = clamp(fractalAudioBassSmooth, 0, 1);
  const mid = clamp(fractalAudioMidSmooth, 0, 1);
  const high = clamp(fractalAudioHighSmooth, 0, 1);
  const energy = clamp(fractalAudioEnergySmooth, 0, 1);
  const audioMode = liveFractalAudioMode ? liveFractalAudioMode.value : "balanced";
  const organicAudio = fs.useAudio ? energy : 0;
  const morphBias = audioMode === "spectral" ? 1.18 : audioMode === "bass" ? 1.04 : audioMode === "rhythmic" ? 0.9 : 1.0;
  const flowBias = audioMode === "spectral" ? 1.16 : audioMode === "rhythmic" ? 1.08 : audioMode === "bass" ? 0.95 : 1.0;
  const spinBias = audioMode === "rhythmic" ? 0.72 : audioMode === "bass" ? 0.78 : 0.84;
  const fractalPower = clamp(fs.power + organicAudio * 0.42 * morphBias + bass * 0.18, 6.0, 12.0);
  const fractalBreath = clamp(fs.breath * 0.48 + organicAudio * 0.62 * morphBias + mid * 0.12, 0, 1.25);
  const fractalFlow = clamp(fs.flow * (0.78 + organicAudio * 0.28 * flowBias) + mid * 0.18, 0, 1.25);
  const fractalSpin = clamp(fs.spin * (0.28 + spinBias * 0.28) + high * 0.08, 0, 0.55);
  const fractalCamSpeed = clamp(fs.camSpeed * (0.74 + organicAudio * 0.06), 0, 1);
  const visualState = getFractalInputReactiveState(sourceImageData);

  gl.viewport(0, 0, fractalGlCanvas.width, fractalGlCanvas.height);
  gl.useProgram(program);
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  gl.uniform2f(uniforms.uResolution, fractalGlCanvas.width, fractalGlCanvas.height);
  gl.uniform1f(uniforms.uTime, tSec);
  gl.uniform1f(uniforms.uBass, bass);
  gl.uniform1f(uniforms.uMid, mid);
  gl.uniform1f(uniforms.uHigh, high);
  gl.uniform1f(uniforms.uEnergy, energy);
  gl.uniform1f(uniforms.uVisualLuma, visualState.luma);
  gl.uniform1f(uniforms.uVisualMotion, visualState.motion);
  gl.uniform1f(uniforms.uVisualContrast, visualState.contrast);
  gl.uniform3f(uniforms.uInputColor, visualState.color[0], visualState.color[1], visualState.color[2]);
  gl.uniform1f(uniforms.uSymmetry, fs.symmetry);
  gl.uniform1f(uniforms.uFractalPower, fractalPower);
  gl.uniform1f(uniforms.uIter, fs.iter);
  gl.uniform1f(uniforms.uSteps, fs.steps);
  gl.uniform1f(uniforms.uMaxDist, fs.maxDist);
  gl.uniform1f(uniforms.uEpsilon, fs.epsilon);
  gl.uniform1f(uniforms.uFogDensity, fs.fog);
  gl.uniform1f(uniforms.uGlow, fs.glow);
  gl.uniform1f(uniforms.uLightIntensity, fs.light);
  gl.uniform1f(uniforms.uSpin, fractalSpin);
  gl.uniform1f(uniforms.uBreath, fractalBreath);
  gl.uniform1f(uniforms.uColorWarmth, fs.warmth);
  gl.uniform1f(uniforms.uCamMode, fs.camMode === "inside" ? 1 : 0);
  gl.uniform1f(uniforms.uCamYaw, fractalCamYaw);
  gl.uniform1f(uniforms.uCamPitch, fractalCamPitch);
  gl.uniform1f(uniforms.uCamDist, fractalCamDistSmooth);
  gl.uniform1f(uniforms.uCamSpeed, fractalCamSpeed);
  gl.uniform1f(uniforms.uShapeMode, fs.shapeModeCode);
  gl.uniform1f(uniforms.uShapeModeB, fs.shapeModeBCode);
  gl.uniform1f(uniforms.uShapeMorph, fs.shapeMorph);
  gl.uniform1f(uniforms.uTextureMode, fs.textureModeCode);
  gl.uniform1f(uniforms.uTexture2Mode, fs.texture2ModeCode);
  gl.uniform1f(uniforms.uTexture2Mix, fs.texture2Mix);
  gl.uniform1f(uniforms.uRenderMode, fs.renderModeCode);
  gl.uniform1f(uniforms.uFractalVariant, fs.variantCode);
  gl.uniform1f(uniforms.uFlow, fractalFlow);
  gl.uniform1f(uniforms.uPaletteMode, fs.paletteModeCode);
  gl.uniform1f(uniforms.uBgMode, fs.bgModeCode);
  gl.uniform1f(uniforms.uFlatMode, fs.flatMode);
  gl.uniform3f(uniforms.uFlatColor, fs.flatColor[0], fs.flatColor[1], fs.flatColor[2]);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  ctx.drawImage(fractalGlCanvas, 0, 0, canvas.width, canvas.height);
  return true;
}

const particleStudioControlPairs = [
  [studioParticlesStructure, liveParticlesStructure],
  [studioParticlesAudioSplit, liveParticlesAudioSplit],
  [studioParticlesOrder, liveParticlesOrder],
  [studioParticlesDrift, liveParticlesDrift],
  [studioParticlesFocus, liveParticlesFocus],
  [studioParticlesDamping, liveParticlesDamping],
  [studioParticlesVortex, liveParticlesVortex],
  [studioParticlesSpawn, liveParticlesSpawn],
  [studioParticlesMotionThreshold, liveParticlesMotionThreshold],
  [studioParticlesGradientMode, liveParticlesGradientMode],
  [studioParticlesColorMix, liveParticlesColorMix],
  [studioParticlesGradientSpread, liveParticlesGradientSpread],
  [studioParticlesGradientA, liveParticlesGradientA],
  [studioParticlesGradientB, liveParticlesGradientB],
];

function syncStudioParticlesControlsFromLive() {
  particleStudioControlPairs.forEach(([studioControl, liveControl]) => {
    if (!studioControl || !liveControl) return;
    if (document.activeElement === studioControl) return;
    if (studioControl.type === "checkbox") {
      studioControl.checked = Boolean(liveControl.checked);
    } else {
      studioControl.value = liveControl.value;
    }
  });
}

function applyStudioParticlesControl(studioControl, liveControl) {
  if (!studioControl || !liveControl) return;
  const sync = () => {
    if (studioControl.type === "checkbox") {
      liveControl.checked = Boolean(studioControl.checked);
    } else {
      liveControl.value = studioControl.value;
    }
    if (liveControl === liveParticlesStructure || liveControl === liveParticlesCount || liveControl === liveParticlesEmitter) {
      particlesBufferN = 0;
    }
    updateOutputs();
    scheduleRender();
  };
  const evt = studioControl.tagName === "SELECT" || studioControl.type === "checkbox" ? "change" : "input";
  studioControl.addEventListener(evt, sync);
}

function updateOutputs() {
  allIds.forEach((id) => {
    const out = controls[id].parentElement.querySelector("output");
    if (out) out.textContent = controls[id].value;
  });
  metaControls.forEach((control) => {
    const out = control.parentElement.querySelector("output");
    if (out) out.textContent = control.value;
  });
  updateQuickOutputById("cameraMoveSpeed", cameraMoveSpeed ? cameraMoveSpeed.value : 28);
  syncStudioParticlesControlsFromLive();
  updateStudioFractalPadDots();
  updateDepthPadDot();
  updateLiveModPadDot();
  syncLiveQuickControls();
}

function setValues(values) {
  Object.entries(values).forEach(([id, value]) => {
    if (controls[id]) controls[id].value = value;
  });
  updateOutputs();
}

function getAspectRatioValue() {
  return aspectRatioSelect ? aspectRatioSelect.value : "auto";
}

function getCanvasRenderQuality() {
  return canvasRenderQualitySelect ? canvasRenderQualitySelect.value : "auto";
}

function getRenderQualityProfile() {
  const q = getCanvasRenderQuality();
  let profile;
  if (q === "ultra") profile = { scale: 1.75, portraitMinH: 2560, webcamIdealW: 2560, webcamIdealH: 1440 };
  else if (q === "high") profile = { scale: 1.35, portraitMinH: 1920, webcamIdealW: 1920, webcamIdealH: 1080 };
  else profile = { scale: 1, portraitMinH: 1440, webcamIdealW: 1920, webcamIdealH: 1080 };
  if (!runtimeIsTouch) return profile;
  const mobileCap = runtimeIsPhone ? 0.78 : runtimeIsTablet ? 0.9 : 0.84;
  return {
    scale: profile.scale * mobileCap,
    portraitMinH: Math.round(profile.portraitMinH * (runtimeIsPhone ? 0.54 : 0.72)),
    webcamIdealW: runtimeIsPhone ? 1280 : 1600,
    webcamIdealH: runtimeIsPhone ? 720 : 900,
  };
}

function parseAspectRatio(value) {
  if (!value || value === "auto") return null;
  const [w, h] = value.split(":").map((n) => Number(n));
  if (!w || !h) return null;
  return w / h;
}

function getWebcamFramingMode() {
  const modeValue = webcamFramingSelect ? webcamFramingSelect.value : "cover";
  if (modeValue === "cover" || modeValue === "contain" || modeValue === "smart") return modeValue;
  return "cover";
}

function isPortraitAspectSelected() {
  const ratio = parseAspectRatio(getAspectRatioValue());
  return Boolean(ratio && ratio < 1);
}

function resizeWorkingCanvases(width, height) {
  canvas.width = width;
  canvas.height = height;
  fxCanvas.width = width;
  fxCanvas.height = height;
  fractalCanvas.width = width;
  fractalCanvas.height = height;
  tileCanvas.width = width;
  tileCanvas.height = height;
  glitchTrailCanvas.width = width;
  glitchTrailCanvas.height = height;
  glitchTrailTempCanvas.width = width;
  glitchTrailTempCanvas.height = height;
  updateCanvasDisplaySize();
}

function updateCanvasDisplaySize() {
  if (!canvas || !canvas.parentElement) return;
  const w = canvas.width || 1;
  const h = canvas.height || 1;
  const ar = w / h;
  const shell = getCanvasShellElement();
  const fullscreenActive = isCanvasShellFullscreen();
  let parentW;
  let maxH;
  if (fullscreenActive && shell) {
    const rect = shell.getBoundingClientRect();
    // In fullscreen, always fit to the real fullscreen viewport box.
    parentW = Math.max(220, Math.floor(rect.width || window.innerWidth || w));
    maxH = Math.max(220, Math.floor(rect.height || window.innerHeight || h));
  } else {
    parentW = Math.max(220, canvas.parentElement.clientWidth || w);
    const vpH = Math.max(220, Math.floor((window.visualViewport ? window.visualViewport.height : window.innerHeight) || 220));
    const hFactor = runtimeIsPhone ? 0.56 : runtimeIsTablet ? 0.62 : 0.68;
    maxH = Math.max(220, Math.floor(vpH * hFactor));
  }
  let drawW = parentW;
  let drawH = Math.round(drawW / ar);
  if (drawH > maxH) {
    drawH = maxH;
    drawW = Math.round(drawH * ar);
  }
  canvas.style.width = `${drawW}px`;
  canvas.style.height = `${drawH}px`;
}

function getCanvasShellElement() {
  return canvas ? canvas.parentElement : null;
}

function isCanvasShellFullscreen() {
  const shell = getCanvasShellElement();
  if (!shell) return false;
  return (
    document.fullscreenElement === shell ||
    document.webkitFullscreenElement === shell
  );
}

function updateCanvasFullscreenButtonUi() {
  if (!canvasFullscreenBtn) return;
  const active = isCanvasShellFullscreen();
  // Hard lock: do not show button unless canvas shell is actually fullscreen.
  canvasFullscreenBtn.hidden = !active;
  canvasFullscreenBtn.classList.toggle("is-active", active);
  const label = active ? "EXIT" : "FS";
  const hint = active ? "Salir pantalla completa (Shift + F)" : "Pantalla completa (Shift + F)";
  const labelNode = canvasFullscreenBtn.querySelector(".canvas-fullscreen-label");
  if (labelNode) labelNode.textContent = label;
  canvasFullscreenBtn.setAttribute("aria-label", hint);
  canvasFullscreenBtn.title = hint;
}

function requestElementFullscreen(target) {
  if (!target) return Promise.resolve(false);
  try {
    if (target.requestFullscreen) {
      const result = target.requestFullscreen();
      return result && typeof result.then === "function" ? result.then(() => true).catch(() => false) : Promise.resolve(true);
    }
    if (target.webkitRequestFullscreen) {
      target.webkitRequestFullscreen();
      return Promise.resolve(true);
    }
  } catch {
    return Promise.resolve(false);
  }
  return Promise.resolve(false);
}

function exitAnyFullscreen() {
  try {
    if (document.exitFullscreen) {
      const result = document.exitFullscreen();
      return result && typeof result.then === "function" ? result.then(() => true).catch(() => false) : Promise.resolve(true);
    }
    if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
      return Promise.resolve(true);
    }
  } catch {
    return Promise.resolve(false);
  }
  return Promise.resolve(false);
}

function toggleCanvasFullscreen() {
  const shell = getCanvasShellElement();
  if (!shell) return;
  const action = isCanvasShellFullscreen() ? exitAnyFullscreen() : requestElementFullscreen(shell);
  Promise.resolve(action).finally(() => {
    updateCanvasFullscreenButtonUi();
    updateCanvasDisplaySize();
    scheduleRender();
  });
}

function getLiveCanvasLimits() {
  const quality = getRenderQualityProfile();
  let maxW = LIVE_CANVAS_MAX_W;
  let maxH = LIVE_CANVAS_MAX_H;
  maxW = Math.round(maxW * quality.scale);
  maxH = Math.round(maxH * quality.scale);
  if (isPortraitAspectSelected()) {
    maxW = Math.round(maxW * 1.08);
    maxH = Math.round(maxH * 1.22);
  }
  if (mode === "glitch" || mode === "mix") {
    const heavyGlitchStack =
      mode === "glitch" &&
      (isKaleidoFxActive() || Boolean(masterFxMode && (masterFxMode.value || "none") !== "none"));
    const glitchScale = heavyGlitchStack ? 0.74 : 0.82;
    maxW = Math.round(maxW * glitchScale);
    maxH = Math.round(maxH * glitchScale);
  }
  if (webcamActive) {
    const webcamScale = mode === "glitch" ? 0.86 : 0.9;
    maxW = Math.round(maxW * webcamScale);
    maxH = Math.round(maxH * webcamScale);
  }
  if (runtimeIsTouch) {
    const touchScale = runtimeIsPhone ? 0.72 : runtimeIsTablet ? 0.84 : 0.8;
    maxW = Math.round(maxW * touchScale);
    maxH = Math.round(maxH * touchScale);
    const heavyStack =
      isKaleidoFxActive() ||
      Boolean(masterFxMode && (masterFxMode.value || "none") !== "none") ||
      (liveOutputView && liveOutputView.value === "dome") ||
      webcamActive;
    if (heavyStack) {
      maxW = Math.round(maxW * 0.86);
      maxH = Math.round(maxH * 0.86);
    }
  }
  const minW = runtimeIsPhone ? 320 : runtimeIsTablet ? 420 : 480;
  const minH = runtimeIsPhone ? 220 : runtimeIsTablet ? 260 : 300;
  return {
    maxW: Math.max(minW, maxW),
    maxH: Math.max(minH, maxH),
  };
}

function computeCanvasSizeForSource(srcW, srcH, limits = getLiveCanvasLimits()) {
  const quality = getRenderQualityProfile();
  const { maxW, maxH } = limits;
  const ratioOverride =
    shouldKeepEquirectSource(srcW, srcH) ? null : parseAspectRatio(getAspectRatioValue());
  if (!ratioOverride) {
    const scale = Math.min(maxW / srcW, maxH / srcH, 1);
    return {
      width: Math.max(2, Math.floor(srcW * scale)),
      height: Math.max(2, Math.floor(srcH * scale)),
    };
  }
  let width;
  let height;
  // Portrait ratios (e.g. 9:16) need taller internal resolution to avoid soft output.
  if (ratioOverride < 1) {
    height = Math.max(maxH, quality.portraitMinH);
    width = Math.floor(height * ratioOverride);
    if (width > maxW) {
      width = maxW;
      height = Math.floor(width / ratioOverride);
    }
  } else {
    width = Math.min(maxW, Math.floor(maxH * ratioOverride));
    height = Math.floor(width / ratioOverride);
    if (height > maxH) {
      height = maxH;
      width = Math.floor(height * ratioOverride);
    }
  }
  return {
    width: Math.max(2, width),
    height: Math.max(2, height),
  };
}

function drawImageCover(targetCtx, source, width, height) {
  const sw = source.naturalWidth || source.videoWidth || source.width || width;
  const sh = source.naturalHeight || source.videoHeight || source.height || height;
  const scale = Math.max(width / sw, height / sh);
  const dw = sw * scale;
  const dh = sh * scale;
  const dx = (width - dw) * 0.5;
  const dy = (height - dh) * 0.5;
  targetCtx.drawImage(source, dx, dy, dw, dh);
}

function drawImageContain(targetCtx, source, width, height) {
  const sw = source.naturalWidth || source.videoWidth || source.width || width;
  const sh = source.naturalHeight || source.videoHeight || source.height || height;
  const scale = Math.min(width / sw, height / sh);
  const dw = sw * scale;
  const dh = sh * scale;
  const dx = (width - dw) * 0.5;
  const dy = (height - dh) * 0.5;
  targetCtx.drawImage(source, dx, dy, dw, dh);
}

function drawImageSmartFill(targetCtx, source, width, height) {
  const lowPerf = fps > 0 && fps < 24;
  const blurPx = lowPerf ? 7 : 14;
  targetCtx.save();
  targetCtx.imageSmoothingEnabled = true;
  targetCtx.imageSmoothingQuality = "high";
  targetCtx.filter = `blur(${blurPx}px) saturate(1.05)`;
  targetCtx.globalAlpha = 0.9;
  drawImageCover(targetCtx, source, width, height);
  targetCtx.restore();
  targetCtx.save();
  targetCtx.fillStyle = lowPerf ? "rgba(0,0,0,0.26)" : "rgba(0,0,0,0.2)";
  targetCtx.fillRect(0, 0, width, height);
  targetCtx.restore();
  drawImageContain(targetCtx, source, width, height);
}

function isLikelyEquirectSource(srcW, srcH) {
  if (!srcW || !srcH) return false;
  const ar = srcW / srcH;
  return ar > 1.92 && ar < 2.08;
}

function shouldKeepEquirectSource(srcW, srcH) {
  return Boolean(
    domeSourceMap &&
      domeSourceMap.value === "equirect" &&
      liveOutputView &&
      liveOutputView.value === "dome" &&
      isLikelyEquirectSource(srcW, srcH)
  );
}

function renderLoadedImageToCanvas() {
  if (!loadedImage) return;
  const srcW = loadedImage.naturalWidth || loadedImage.width;
  const srcH = loadedImage.naturalHeight || loadedImage.height;
  const keepEqui = shouldKeepEquirectSource(srcW, srcH);
  const { width, height } = computeCanvasSizeForSource(
    srcW,
    srcH
  );
  resizeWorkingCanvases(width, height);
  ctx.clearRect(0, 0, width, height);
  if (keepEqui || isPortraitAspectSelected()) {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
    drawImageContain(ctx, loadedImage, width, height);
  } else {
    drawImageCover(ctx, loadedImage, width, height);
  }
  originalImageData = ctx.getImageData(0, 0, width, height);
  updateInputSpecs();
  updateCanvasEntryOverlay();
}

function applyAspectRatioChange() {
  if (webcamActive && webcamVideo && webcamVideo.readyState >= 2) {
    const { width, height } = computeCanvasSizeForSource(
      webcamVideo.videoWidth || canvas.width,
      webcamVideo.videoHeight || canvas.height
    );
    resizeWorkingCanvases(width, height);
    scheduleRender();
    return;
  }
  if (loadedImage) {
    renderLoadedImageToCanvas();
    scheduleRender();
    return;
  }
  const { width, height } = computeCanvasSizeForSource(canvas.width || 1000, canvas.height || 680);
  resizeWorkingCanvases(width, height);
  drawPlaceholder();
}

function getCurrentSourceDimensions() {
  if (webcamActive && webcamVideo && webcamVideo.readyState >= 2) {
    return {
      width: webcamVideo.videoWidth || canvas.width || 1280,
      height: webcamVideo.videoHeight || canvas.height || 720,
    };
  }
  if (loadedImage) {
    return {
      width: loadedImage.naturalWidth || loadedImage.width || canvas.width || 1280,
      height: loadedImage.naturalHeight || loadedImage.height || canvas.height || 720,
    };
  }
  if (originalImageData) {
    return { width: originalImageData.width, height: originalImageData.height };
  }
  return { width: canvas.width || 1280, height: canvas.height || 720 };
}

function applyCameraKeyPanning() {
  if (mode !== "depth" && mode !== "mix" && mode !== "particles") return false;
  const panStep = 0.022;
  let moved = false;
  if (cameraKeyState.left) {
    cameraPanX = clamp(cameraPanX - panStep, -1.4, 1.4);
    moved = true;
  }
  if (cameraKeyState.right) {
    cameraPanX = clamp(cameraPanX + panStep, -1.4, 1.4);
    moved = true;
  }
  if (cameraKeyState.up) {
    cameraPanY = clamp(cameraPanY - panStep, -1.2, 1.2);
    moved = true;
  }
  if (cameraKeyState.down) {
    cameraPanY = clamp(cameraPanY + panStep, -1.2, 1.2);
    moved = true;
  }
  return moved;
}

function hasCameraPanInput() {
  return cameraKeyState.up || cameraKeyState.down || cameraKeyState.left || cameraKeyState.right;
}

function scheduleRender() {
  if ((!originalImageData && !webcamActive) || renderPending) return;
  renderPending = true;
  requestAnimationFrame(() => {
    renderPending = false;
    try {
      renderFrame();
      renderErrorCount = 0;
    } catch (err) {
      renderErrorCount += 1;
      console.error("Render error", err);
      // Keep webcam/session responsive if a transient frame fails.
      if (renderErrorCount <= 4 && (webcamActive || hasAudioReactiveInput() || recordingActive)) {
        setTimeout(scheduleRender, 16);
      }
    }
  });
}

function loadImageToCanvas(file) {
  const img = new Image();
  const url = URL.createObjectURL(file);

  img.onload = () => {
    noInputModeActive = false;
    if (webcamActive || webcamStream) {
      stopWebcamInput();
    }
    domeSeamCacheKey = "";
    domeAutoSeamU = 0.5;
    domeAutoYaw = 0;
    domeAutoYawVel = 0;
    lastDomeAnimTs = performance.now();
    domeViewYaw = 0;
    domeViewPitch = 0;
    isDraggingDome = false;
    loadedImage = img;
    if (aspectRatioSelect && !webcamActive) {
      // For imported images, default to native ratio once. User can change it afterwards.
      aspectRatioSelect.value = "auto";
      aspectRatioSelect.disabled = false;
    }
    syncAspectRatioControlForInput();
    renderLoadedImageToCanvas();
    updateDynamicUiTexts();
    URL.revokeObjectURL(url);
    scheduleRender();
  };

  img.onerror = () => {
    URL.revokeObjectURL(url);
    alert(t("image_load_error"));
  };

  img.src = url;
}

function getSourceImageData() {
  if (freezeFrame && frozenImageData) return frozenImageData;
  if (webcamActive && webcamVideo && webcamVideo.readyState >= 2) {
    const w = canvas.width;
    const h = canvas.height;
    if (w <= 0 || h <= 0) return null;
    fxCanvas.width = w;
    fxCanvas.height = h;
    const framing = getWebcamFramingMode();
    fxCtx.imageSmoothingEnabled = true;
    fxCtx.imageSmoothingQuality = "high";
    fxCtx.clearRect(0, 0, w, h);
    if (framing === "contain") {
      fxCtx.fillStyle = "#000";
      fxCtx.fillRect(0, 0, w, h);
      drawImageContain(fxCtx, webcamVideo, w, h);
    } else if (framing === "cover") {
      drawImageCover(fxCtx, webcamVideo, w, h);
    } else {
      drawImageSmartFill(fxCtx, webcamVideo, w, h);
    }
    const frame = fxCtx.getImageData(0, 0, w, h);
    if (freezeFrame) frozenImageData = frame;
    return frame;
  }
  if (noInputModeActive) {
    const w = Math.max(2, canvas.width | 0);
    const h = Math.max(2, canvas.height | 0);
    const nowMs = performance.now();
    const active3d = mode === "depth" || mode === "particles" || mode === "fractal" || mode === "lines" || mode === "tunnel" || mode === "interior" || mode === "atlas" || mode === "materia" || mode === "code" || mode === "synth" || mode === "mix";
    const refreshMs = active3d ? 30 : 66;
    const staleSize = !originalImageData || originalImageData.width !== w || originalImageData.height !== h;
    if (staleSize || nowMs - noInputLastRefreshMs >= refreshMs) {
      const scale = active3d ? 0.56 : 0.46;
      const synthW = Math.max(180, Math.round(w * scale));
      const synthH = Math.max(120, Math.round(h * scale));
      if (!noInputCtx) {
        originalImageData = generateNoInputFrame(w, h, nowMs / 1000, true);
      } else {
        if (noInputCanvas.width !== synthW || noInputCanvas.height !== synthH) {
          noInputCanvas.width = synthW;
          noInputCanvas.height = synthH;
        }
        const frame = generateNoInputFrame(synthW, synthH, nowMs / 1000, true);
        noInputCtx.putImageData(frame, 0, 0);
        fxCanvas.width = w;
        fxCanvas.height = h;
        fxCtx.imageSmoothingEnabled = true;
        fxCtx.imageSmoothingQuality = "high";
        fxCtx.clearRect(0, 0, w, h);
        fxCtx.drawImage(noInputCanvas, 0, 0, synthW, synthH, 0, 0, w, h);
        originalImageData = fxCtx.getImageData(0, 0, w, h);
      }
      noInputLastRefreshMs = nowMs;
    }
    return originalImageData;
  }
  return originalImageData;
}

function toggleFreeze() {
  freezeFrame = !freezeFrame;
  if (freezeBtn) freezeBtn.classList.toggle("active", freezeFrame);
  if (!freezeFrame) frozenImageData = null;
  else {
    const src = getSourceImageData();
    if (src) frozenImageData = copyImageData(src);
  }
  scheduleRender();
}

function applyLiveSafeBaseline(options = {}) {
  const { keepMode = true } = options;
  const setVal = (el, value) => {
    if (el) el.value = String(value);
  };
  const setChecked = (el, value) => {
    if (el) el.checked = Boolean(value);
  };
  const safeModes = ["glitch", "fractal", "depth", "particles", "lines", "tunnel", "interior", "atlas", "materia"];
  const currentSafeMode = safeModes.includes(mode) ? mode : "depth";
  const targetMode = keepMode ? currentSafeMode : "depth";

  freezeFrame = false;
  frozenImageData = null;
  if (freezeBtn) freezeBtn.classList.remove("active");
  if (typeof cancelMorphTweensForCurrentMode === "function") cancelMorphTweensForCurrentMode();
  particlesRandomTween = null;
  particlesCameraTween = null;
  depthMorphTween = null;
  fractalMorphTween = null;
  fractalCameraTween = null;
  kaleidoMorphTween = null;
  tunnelMorphTween = null;
  interiorMorphTween = null;
  tunnelMorphTween = null;
  interiorMorphTween = null;
  cameraKeyState.up = false;
  cameraKeyState.down = false;
  cameraKeyState.left = false;
  cameraKeyState.right = false;

  setVal(controls.audioSensitivity, 52);
  setVal(controls.audioTolerance, 32);
  setVal(controls.audioPointsIntensity, 120);
  setVal(controls.audioMeshIntensity, 120);
  setVal(controls.audioAnimVariation, 100);
  syncLiveAudioQuickUi();

  if (masterFxMode) masterFxMode.value = "none";
  setVal(masterFxAmount, 28);
  setVal(masterFxSpeed, 42);
  setVal(masterFxColor, 52);
  setChecked(kaleidoFxEnabled, false);
  if (kaleidoFxType) kaleidoFxType.value = KALEIDO_DEFAULT_TYPE;
  setVal(kaleidoFxAmount, 38);
  setVal(kaleidoFxSpeed, 35);
  setVal(kaleidoFxSmooth, 44);
  setVal(kaleidoFxSegments, 10);
  setVal(kaleidoFxZoom, 200);
  kaleidoSegSmooth = 12;
  kaleidoFxScaleSmooth = 0.66;
  if (masterPrevCanvas.width > 0 && masterPrevCanvas.height > 0) {
    masterPrevCtx.clearRect(0, 0, masterPrevCanvas.width, masterPrevCanvas.height);
  }
  if (kaleidoPrevCanvas.width > 0 && kaleidoPrevCanvas.height > 0) {
    kaleidoPrevCtx.clearRect(0, 0, kaleidoPrevCanvas.width, kaleidoPrevCanvas.height);
  }
  updateMasterFxSummaryStatus();
  updateKaleidoFxSummaryStatus();
  updateMasterFxPadDot();
  updateKaleidoFxPadDot();

  if (liveOutputView) liveOutputView.value = "normal";
  if (domeAutoTuneByMode) domeAutoTuneByMode.checked = true;
  applyDomePreset("live-safe", { silent: true });
  if (domePreset) domePreset.value = "live-safe";
  if (bgMode) bgMode.value = "black";
  setVal(controls.bgMotion, 0);
  syncLiveBackgroundQuickUi();

  if (targetMode !== mode) {
    const nextTab = targetMode === "depth" ? "depth" : targetMode;
    setLiveModeTab(nextTab);
  }

  if (targetMode === "glitch") {
    setVal(liveGlitchIntensity, 36);
    setVal(liveGlitchColor, 54);
    setVal(liveGlitchError, 20);
    setVal(liveGlitchTracking, webcamActive ? 16 : 0);
    setVal(liveGlitchTrail, 18);
    setVal(liveGlitchAnim, 14);
    applyLiveGlitchMacros();
  } else if (targetMode === "depth") {
    setVal(live3dPoints, 58);
    setVal(live3dMesh, 42);
    setVal(live3dDepthWarp, 18);
    setVal(live3dSeparation, 34);
    setVal(live3dBackground, 26);
    setVal(live3dOrganic, 18);
    setVal(live3dLight, 64);
    setVal(live3dLightingMode, "flat");
    setVal(live3dExposure, 108);
    setVal(live3dAmbient, 34);
    setVal(live3dLightAzimuth, -34);
    setVal(live3dLightElevation, 26);
    setVal(live3dFxMode, "none");
    setVal(live3dFxAmount, 18);
    setChecked(live3dAudioSync, false);
    setChecked(live3dAnaglyph, false);
    setCameraMode("static", { instant: true });
    applyLive3dMacros();
  } else if (targetMode === "particles") {
    setVal(liveParticlesCount, "med");
    setVal(liveParticlesEmitter, "grid");
    setVal(liveParticlesColorMode, "source");
    setVal(liveParticlesStructure, "cloud");
    setVal(liveParticlesAudioSplit, "basic");
    setVal(liveParticlesSize, 42);
    setVal(liveParticlesDepth, 58);
    setVal(liveParticlesNoise, 24);
    setVal(liveParticlesAttractor, 24);
    setVal(liveParticlesFlow, 28);
    setVal(liveParticlesCamMode, "static");
    setVal(liveParticlesCamSpeed, 0);
    setVal(liveParticlesCamX, 0);
    setVal(liveParticlesCamY, 0);
    setVal(liveParticlesCamZ, 0);
    setVal(liveParticlesHue, 0);
    setChecked(liveParticlesAudio, true);
    setVal(liveParticlesAudioAmount, 56);
    setChecked(liveParticlesFaceTrack, true);
    setVal(liveParticlesFaceDelay, 24);
    setVal(liveParticlesFaceAmount, 68);
    setVal(liveParticlesTrail, 14);
    setVal(liveParticlesFxStyle, "neon");
    setVal(liveParticlesFxAmount, 58);
    setVal(liveParticlesOrder, 48);
    setVal(liveParticlesDamping, 34);
    setVal(liveParticlesVortex, 22);
    setVal(liveParticlesSpawn, 66);
    setVal(liveParticlesMotionThreshold, 32);
    setVal(liveParticlesDrift, 24);
    setVal(liveParticlesFocus, 38);
    setVal(liveParticlesGradientMode, "radial");
    setVal(liveParticlesColorMix, 44);
    setVal(liveParticlesGradientSpread, 52);
    particlesBufferN = 0;
    particlesFaceHistory = [];
  } else if (targetMode === "fractal") {
    if (liveFractalPreset) liveFractalPreset.value = "sacred";
    applyFractalPreset("sacred");
    setVal(liveFractalQuality, "med");
    setVal(liveFractalBehavior, "stable");
    setVal(liveFractalDomeMode, "off");
    setVal(liveFractalVariant, "a");
    setVal(liveFractalCameraMode, "orbit");
    setVal(liveFractalCamSpeed, 22);
    setVal(liveFractalDistance, 82);
    setVal(liveFractalFlow, 58);
    setVal(liveFractalOptical, "off");
    setVal(liveFractalOpticalAmount, 0);
    setVal(liveFractalPolygonize, 0);
    setChecked(liveFractalAudio, true);
    setVal(liveFractalAudioGain, 58);
  } else if (targetMode === "lines") {
    if (liveLinesStyle) liveLinesStyle.value = "minimal";
    if (liveLinesPreset) liveLinesPreset.value = "ambient";
    applyLinesPreset("ambient", false);
    setVal(liveLinesPattern, "flow");
    setVal(liveLinesGeometry, "ribbon");
    setVal(liveLinesCameraMode, "orbit");
    setVal(liveLinesConstellation, 56);
  } else if (targetMode === "tunnel") {
    if (liveTunnelPreset) liveTunnelPreset.value = "deep";
    applyTunnelPreset("deep", false);
    setVal(liveTunnelCameraMode, "orbit");
    setChecked(liveTunnelAudio, true);
    setVal(liveTunnelDensity, 22);
    setVal(liveTunnelDepth, 74);
    setVal(liveTunnelSpeed, 42);
    setVal(liveTunnelTwist, 36);
    setVal(liveTunnelMesh, 78);
    setVal(liveTunnelPoints, 68);
    setVal(liveTunnelGlow, 38);
    setVal(liveTunnelAudioAmount, 68);
  } else if (targetMode === "interior") {
    if (liveInteriorPreset) liveInteriorPreset.value = "abyss";
    applyInteriorPreset("abyss", false);
    setVal(liveInteriorCameraMode, "orbit");
    setChecked(liveInteriorAudio, true);
    setVal(liveInteriorDensity, 22);
    setVal(liveInteriorDepth, 78);
    setVal(liveInteriorSpeed, 34);
    setVal(liveInteriorWave, 56);
    setVal(liveInteriorGlitch, 42);
    setVal(liveInteriorGlow, 44);
    setVal(liveInteriorAudioAmount, 68);
  } else if (targetMode === "atlas") {
    if (liveAtlasPreset) liveAtlasPreset.value = "ribbon";
    applyAtlasPreset("ribbon", false);
    setChecked(liveAtlasAudio, true);
    setVal(liveAtlasSeed, 52);
    setVal(liveAtlasVariation, 58);
    setVal(liveAtlasComposition, 58);
    setVal(liveAtlasComplexity, 22);
    setVal(liveAtlasMotion, 46);
    setVal(liveAtlasContrast, 56);
    setVal(liveAtlasColorMod, 62);
    setVal(liveAtlasMesh, 46);
    setVal(liveAtlasSpheres, 36);
    setVal(liveAtlasAudioAmount, 72);
  } else if (targetMode === "materia") {
    if (liveMateriaPreset) liveMateriaPreset.value = "mineral";
    applyMateriaPreset("mineral", false);
    setChecked(liveMateriaAudio, true);
    setVal(liveMateriaSeed, 2424);
    setVal(liveMateriaFlow, 58);
    setVal(liveMateriaPorosity, 48);
    setVal(liveMateriaLayers, 52);
    setVal(liveMateriaDrift, 42);
    setVal(liveMateriaContrast, 54);
    setVal(liveMateriaAudioAmount, 66);
  } else if (targetMode === "code") {
    setVal(liveCodePreset, "matrix");
    setVal(liveCodeCameraMode, "wide");
    setChecked(liveCodeAudio, true);
    setVal(liveCodeDensity, 58);
    setVal(liveCodeSpeed, 44);
    setVal(liveCodeZoom, 38);
    setVal(liveCodeLetters, 62);
    setVal(liveCodeFigure, 62);
    setVal(liveCodeLanguage, 52);
    setVal(liveCodeGlow, 54);
    setVal(liveCodeBrightness, 68);
    setVal(liveCodeAudioAmount, 72);
  }

  updateOutputs();
  updateLiveQuickOutputs();
  syncModeUi();
  scheduleRender();
}

function panicReset() {
  setValues({
    ...defaults,
    pointDensity: 20,
    pointFloat: 22,
    sceneExposure: 110,
    pointMap: 55,
    meshMap: 35,
    depthStrength: 45,
    depthExaggeration: 110,
  });
  mode = "depth";
  const depthRadio = modeInputs.find((m) => m.value === "depth");
  if (depthRadio) depthRadio.checked = true;
  freezeFrame = false;
  frozenImageData = null;
  cameraPanX = 0;
  cameraPanY = 0;
  targetPanX = null;
  targetPanY = null;
  cameraFlowEase = 0;
  cameraKeyState.up = false;
  cameraKeyState.down = false;
  cameraKeyState.left = false;
  cameraKeyState.right = false;
  particlesRandomTween = null;
  particlesCameraTween = null;
  depthMorphTween = null;
  fractalMorphTween = null;
  fractalCameraTween = null;
  kaleidoMorphTween = null;
  if (freezeBtn) freezeBtn.classList.remove("active");
  if (masterFxMode) masterFxMode.value = "none";
  if (masterFxAmount) masterFxAmount.value = "28";
  if (masterFxSpeed) masterFxSpeed.value = "42";
  if (masterFxColor) masterFxColor.value = "52";
  if (kaleidoFxEnabled) kaleidoFxEnabled.checked = false;
  if (kaleidoFxType) kaleidoFxType.value = KALEIDO_DEFAULT_TYPE;
  if (kaleidoFxAmount) kaleidoFxAmount.value = "38";
  if (kaleidoFxSpeed) kaleidoFxSpeed.value = "35";
  if (kaleidoFxSmooth) kaleidoFxSmooth.value = "44";
  if (kaleidoFxSegments) kaleidoFxSegments.value = "10";
  if (kaleidoFxZoom) kaleidoFxZoom.value = "200";
  kaleidoSegSmooth = 12;
  kaleidoFxScaleSmooth = 0.66;
  if (liveSynthPreset) liveSynthPreset.value = "drift";
  if (liveSynthBlend) liveSynthBlend.value = "58";
  if (liveSynthEcho) liveSynthEcho.value = "48";
  if (liveSynthSlit) liveSynthSlit.value = "22";
  if (liveSynthAxis) liveSynthAxis.value = "x";
  if (liveSynthDrift) liveSynthDrift.value = "34";
  if (liveSynthColor) liveSynthColor.value = "24";
  if (liveSynthAudio) liveSynthAudio.checked = true;
  if (liveSynthAudioAmount) liveSynthAudioAmount.value = "64";
  if (synthPrevCanvas.width > 0 && synthPrevCanvas.height > 0) {
    synthPrevCtx.clearRect(0, 0, synthPrevCanvas.width, synthPrevCanvas.height);
  }
  synthEchoSmooth = 0;
  synthSlitSmooth = 0;
  if (masterPrevCanvas.width > 0 && masterPrevCanvas.height > 0) {
    masterPrevCtx.clearRect(0, 0, masterPrevCanvas.width, masterPrevCanvas.height);
  }
  if (kaleidoPrevCanvas.width > 0 && kaleidoPrevCanvas.height > 0) {
    kaleidoPrevCtx.clearRect(0, 0, kaleidoPrevCanvas.width, kaleidoPrevCanvas.height);
  }
  updateMasterFxPadDot();
  updateKaleidoFxPadDot();
  syncModeUi();
  scheduleRender();
}

function refreshSnapshotUi() {
  snapshotSlots.forEach((btn) => {
    const slot = Number(btn.dataset.slot);
    const hasData = Boolean(snapshots[slot - 1]);
    btn.classList.toggle("filled", hasData);
    btn.classList.toggle("active", slot === currentSnapshotSlot);
    btn.title = hasData
      ? `Slot ${slot}: ${t("slot_saved")} · dbl-click = ${t("sessions_load")}`
      : `Slot ${slot}: ${t("slot_empty")}`;
  });
}

function captureSnapshot(slot) {
  const idx = clamp(slot - 1, 0, 7);
  snapshots[idx] = {
    mode,
    values: Object.fromEntries(allIds.map((id) => [id, Number(controls[id].value)])),
    cameraMode,
    cameraMoveSpeed: cameraMoveSpeed ? Number(cameraMoveSpeed.value) : 28,
    mod: {
      source: modSource ? modSource.value : "none",
      target: modTarget ? modTarget.value : "none",
      amount: modAmount ? Number(modAmount.value) : 0,
      smoothing: modSmoothing ? Number(modSmoothing.value) : 60,
      clamp: modClamp ? Number(modClamp.value) : 100,
    },
  };
  currentSnapshotSlot = slot;
  refreshSnapshotUi();
}

function applySnapshot(slot) {
  const idx = clamp(slot - 1, 0, 7);
  const snap = snapshots[idx];
  if (!snap) return;
  currentSnapshotSlot = slot;
  setValues(snap.values);
  setCameraMode(snap.cameraMode || "cursor");
  if (cameraMoveSpeed) cameraMoveSpeed.value = String(Math.round(snap.cameraMoveSpeed ?? 28));
  if (modSource) modSource.value = snap.mod.source;
  if (modTarget) modTarget.value = snap.mod.target;
  if (modAmount) modAmount.value = snap.mod.amount;
  if (modSmoothing) modSmoothing.value = snap.mod.smoothing;
  if (modClamp) modClamp.value = snap.mod.clamp;
  const modeRadio = modeInputs.find((m) => m.value === snap.mode);
  if (modeRadio) modeRadio.checked = true;
  mode = snap.mode;
  syncModeUi();
  updateOutputs();
  refreshSnapshotUi();
  scheduleRender();
}

function clearSnapshot(slot) {
  const idx = clamp(slot - 1, 0, 7);
  snapshots[idx] = null;
  currentSnapshotSlot = slot;
  refreshSnapshotUi();
}

async function updateTrackingFromFrame() {
  if ((!faceDetector && !handDetector) || !webcamVideo || !webcamActive) return;
  if (trackingDetectBusy) return;
  const now = performance.now();
  const trackIntervalMs = fps < 24 ? 88 : fps < 30 ? 72 : 52;
  if (now - lastFaceDetectTs < trackIntervalMs) return;
  if (webcamVideo.readyState < 2) return;
  lastFaceDetectTs = now;
  trackingDetectBusy = true;

  try {
    const tasks = [];
    if (faceDetector) tasks.push(faceDetector.detect(webcamVideo));
    else tasks.push(Promise.resolve([]));
    if (handDetector) tasks.push(handDetector.detect(webcamVideo));
    else tasks.push(Promise.resolve([]));
    const [faces, hands] = await Promise.all(tasks);
    const vw = webcamVideo.videoWidth || 1;
    const vh = webcamVideo.videoHeight || 1;
    detectedFaces = faces.map((f) => {
      const b = f.boundingBox;
      return {
        x: b.x / vw,
        y: b.y / vh,
        width: b.width / vw,
        height: b.height / vh,
      };
    });
    detectedHands = hands.map((h) => {
      const points = (h.keypoints || []).map((p) => ({
        x: p.x / vw,
        y: p.y / vh,
      }));
      return { points };
    });
  } catch {
    detectedFaces = [];
    detectedHands = [];
  } finally {
    trackingDetectBusy = false;
  }
}

function shouldRunTracking(settings) {
  if (!webcamActive) return false;
  if (mode === "particles") {
    return Boolean(liveParticlesFaceTrack && liveParticlesFaceTrack.checked);
  }
  if (mode === "code") return true;
  if (mode !== "glitch" && mode !== "mix") return false;
  if (!settings) return false;
  return settings.subjectGhost > 0 || settings.polygonTrack > 0;
}

function isMasterFxAnimated() {
  if (!masterFxMode) return false;
  const v = masterFxMode.value || "none";
  return (
    v === "trail" ||
    v === "chromatic" ||
    v === "interlace" ||
    v === "datamosh" ||
    v === "pixelart" ||
    v === "psychedelic" ||
    v === "psygrad" ||
    v === "luminous" ||
    v === "visionpass" ||
    v === "neon" ||
    v === "neongrad" ||
    v === "matrix"
  );
}

function shouldKeepAnimating(s, keyPanMoved, smoothCameraMoved) {
  return (
    mode === "particles" ||
    mode === "fractal" ||
    mode === "lines" ||
    mode === "tunnel" ||
    mode === "interior" ||
    mode === "atlas" ||
    mode === "materia" ||
    mode === "code" ||
    mode === "synth" ||
    isMasterFxAnimated() ||
    isKaleidoFxActive() ||
    Boolean(kaleidoMorphTween) ||
    Boolean(depthMorphTween) ||
    Boolean(fractalMorphTween) ||
    Boolean(tunnelMorphTween) ||
    Boolean(interiorMorphTween) ||
    Boolean(materiaMorphTween) ||
    webcamActive ||
    recordingActive ||
    hasAudioReactiveInput() ||
    isAudioPlaybackActive() ||
    isDomeAutoRotateActive() ||
    keyPanMoved ||
    smoothCameraMoved ||
    hasCameraPanInput() ||
    ((mode === "depth" || mode === "mix") &&
      (cameraMode !== "static" ||
        s.pointColorPulse > 0 ||
        s.depthColorWave > 0 ||
        s.bgMotion > 0 ||
        bgColorTween ||
        (live3dFxMode && live3dFxMode.value !== "none")))
  );
}

function drawTrackingOverlay(settings) {
  if (!webcamActive || settings.polygonTrack <= 0) return;
  const amount = settings.polygonTrack / 100;
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 0 || h <= 0) return;
  const alpha = clamp(0.2 + amount * 0.72, 0.2, 0.92);
  const lineW = 1 + amount * 2.4;
  const showText = amount > 0.12;
  const textAlpha = clamp(alpha + 0.1, 0.25, 0.95);

  const drawSegment = (ax, ay, bx, by, color) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = lineW;
    ctx.beginPath();
    ctx.moveTo(ax, ay);
    ctx.lineTo(bx, by);
    ctx.stroke();

    if (showText) {
      const dist = Math.hypot(bx - ax, by - ay);
      const mx = (ax + bx) * 0.5;
      const my = (ay + by) * 0.5;
      ctx.fillStyle = `rgba(255,45,45,${textAlpha})`;
      ctx.font = "11px 'Share Tech Mono', monospace";
      ctx.fillText(`${Math.round(dist)} px`, mx + 3, my - 3);
    }
  };

  const drawPoint = (x, y, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x, y, 1.8 + amount * 2.2, 0, Math.PI * 2);
    ctx.fill();
  };

  const faceColor = `rgba(65,255,235,${alpha})`;
  const handColor = `rgba(255,90,220,${alpha})`;
  const ringColor = `rgba(255,40,40,${alpha * 0.8})`;

  for (const f of detectedFaces) {
    const x = f.x * w;
    const y = f.y * h;
    const fw = f.width * w;
    const fh = f.height * h;
    const cx = x + fw * 0.5;
    const cy = y + fh * 0.52;
    const poly = [
      [cx, y - fh * 0.14],
      [x + fw * 0.88, y + fh * 0.1],
      [x + fw * 1.02, cy],
      [x + fw * 0.88, y + fh * 0.9],
      [cx, y + fh * 1.08],
      [x + fw * 0.12, y + fh * 0.9],
      [x - fw * 0.02, cy],
      [x + fw * 0.12, y + fh * 0.1],
    ];
    for (let i = 0; i < poly.length; i++) {
      const a = poly[i];
      const b = poly[(i + 1) % poly.length];
      drawSegment(a[0], a[1], b[0], b[1], faceColor);
      drawPoint(a[0], a[1], ringColor);
    }
  }

  const handEdges = [
    [0, 1], [1, 2], [2, 3], [3, 4],
    [0, 5], [5, 6], [6, 7], [7, 8],
    [5, 9], [9, 10], [10, 11], [11, 12],
    [9, 13], [13, 14], [14, 15], [15, 16],
    [13, 17], [17, 18], [18, 19], [19, 20],
    [0, 17],
  ];

  for (const hand of detectedHands) {
    const pts = hand.points || [];
    for (const [a, b] of handEdges) {
      if (!pts[a] || !pts[b]) continue;
      const ax = pts[a].x * w;
      const ay = pts[a].y * h;
      const bx = pts[b].x * w;
      const by = pts[b].y * h;
      drawSegment(ax, ay, bx, by, handColor);
    }
    for (const p of pts) {
      const px = p.x * w;
      const py = p.y * h;
      drawPoint(px, py, handColor);
    }
  }
}

function stopWebcamInput() {
  if (webcamStream) webcamStream.getTracks().forEach((t) => t.stop());
  webcamStream = null;
  webcamActive = false;
  detectedFaces = [];
  detectedHands = [];
  particlesFaceHistory = [];
  if (webcamVideo) webcamVideo.srcObject = null;
}

async function toggleWebcam() {
  if (webcamActive) {
    stopWebcamInput();
    if (aspectRatioSelect) aspectRatioSelect.disabled = false;
    updateDynamicUiTexts();
    updateInputSpecs();
    refreshCameraDeviceList(true);
    scheduleRender();
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert(t("webcam_unavailable"));
    return;
  }

  if (!window.isSecureContext) {
    alert(t("webcam_secure"));
    return;
  }

  try {
    noInputModeActive = false;
    const selectedId = (cameraDeviceSelect && cameraDeviceSelect.value) || selectedCameraDeviceId || "";
    const quality = getRenderQualityProfile();
    const baseVideo = {
      width: { ideal: quality.webcamIdealW, max: 3840 },
      height: { ideal: quality.webcamIdealH, max: 2160 },
      frameRate: { ideal: 30, max: 60 },
    };
    let stream;
    try {
      stream = await navigator.mediaDevices.getUserMedia({
        video: selectedId ? { ...baseVideo, deviceId: { exact: selectedId } } : baseVideo,
        audio: false,
      });
    } catch (err) {
      if (selectedId) {
        stream = await navigator.mediaDevices.getUserMedia({ video: baseVideo, audio: false });
      } else {
        throw err;
      }
    }
    webcamStream = stream;
    webcamActive = true;
    domeSeamCacheKey = "";
    domeAutoSeamU = 0.5;
    domeAutoYaw = 0;
    domeAutoYawVel = 0;
    lastDomeAnimTs = performance.now();
    const track = stream.getVideoTracks()[0];
    const activeDeviceId = track?.getSettings?.().deviceId || "";
    if (activeDeviceId) selectedCameraDeviceId = activeDeviceId;
    if (webcamVideo) {
      webcamVideo.srcObject = stream;
      const syncWebcamView = () => {
        if (aspectRatioSelect) aspectRatioSelect.disabled = false;
        applyAspectRatioChange();
        updateInputSpecs();
        scheduleRender();
      };
      webcamVideo.onloadedmetadata = syncWebcamView;
      webcamVideo.onloadeddata = syncWebcamView;
      try {
        await webcamVideo.play();
      } catch {
        // Some browsers can reject first play call even with user gesture.
      }
      setTimeout(() => {
        if (!webcamActive || !webcamVideo) return;
        if ((webcamVideo.videoWidth || 0) <= 1 || webcamVideo.readyState < 2) {
          webcamVideo.play().catch(() => {});
        }
      }, 500);
    }
    await refreshCameraDeviceList(true);
    if (cameraDeviceSelect && activeDeviceId) {
      const exists = [...cameraDeviceSelect.options].some((o) => o.value === activeDeviceId);
      if (exists) cameraDeviceSelect.value = activeDeviceId;
    }
    updateDynamicUiTexts();
    updateInputSpecs();
    scheduleRender();
  } catch (err) {
    const reason = err && err.name ? err.name : "Error desconocido";
    alert(`${t("webcam_fail")} (${reason}). ${t("mic_hint_regular")}`);
  }
}

async function toggleMic() {
  if (micActive) {
    stopMicInput();
    teardownAudioPipeline();
    audioLevel = 0;
    updateDynamicUiTexts();
    return;
  }

  if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
    alert(t("mic_unavailable"));
    return;
  }

  if (!window.isSecureContext) {
    alert(t("mic_secure"));
    return;
  }

  try {
    if (audioInputSource && audioInputSource.value === "file") {
      audioInputSource.value = "mic";
    }
    if (audioFileActive) {
      deactivateAudioFileSource();
    }
    if (audioInputSource && audioInputSource.value === "system") {
      const sysStream = await navigator.mediaDevices.getDisplayMedia({
        video: { frameRate: 5 },
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
      });
      const tracks = sysStream.getAudioTracks();
      if (!tracks.length) {
        sysStream.getTracks().forEach((t) => t.stop());
        throw new Error("NoAudioTrack");
      }
      micStream = new MediaStream([tracks[0]]);
    } else {
      micStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
    }
    await ensureAudioContext();
    const source = audioCtx.createMediaStreamSource(micStream);
    attachAnalyserFromSource(source, false);
    micActive = true;
    updateDynamicUiTexts();
    scheduleRender();
  } catch (err) {
    const reason =
      err && err.message === "NoAudioTrack"
        ? "NoAudioTrack"
        : err && err.name
          ? err.name
          : "Error desconocido";
    const modeHint =
      audioInputSource && audioInputSource.value === "system"
        ? t("mic_hint_system")
        : t("mic_hint_regular");
    alert(`${t("mic_fail")} (${reason}). ${modeHint}`);
  }
}

async function activateAudioFileSource() {
  if (!audioFilePlayer || !audioFilePlayer.src) return;
  try {
    stopMicInput();
    await ensureAudioContext();
    if (!audioFileElementSource) {
      audioFileElementSource = audioCtx.createMediaElementSource(audioFilePlayer);
    }
    attachAnalyserFromSource(audioFileElementSource, true);
    audioFileActive = true;
    updateDynamicUiTexts();
    scheduleRender();
  } catch (err) {
    const reason = err && err.name ? err.name : "Error desconocido";
    alert(`${t("mic_fail")} (${reason}). ${t("mic_hint_regular")}`);
  }
}

function loadAudioFile(file) {
  if (!file || !audioFilePlayer) return;
  stopMicInput();
  teardownAudioPipeline();
  if (audioFileUrl) {
    URL.revokeObjectURL(audioFileUrl);
    audioFileUrl = "";
  }
  audioFileUrl = URL.createObjectURL(file);
  audioFilePlayer.src = audioFileUrl;
  audioFilePlayerWrap.hidden = false;
  if (liveAudioFileName) {
    liveAudioFileName.textContent = file.name;
    liveAudioFileName.dataset.text = file.name;
  }
  if (audioInputSource) audioInputSource.value = "file";
  updateDynamicUiTexts();
  updateLiveAudioFileMini();
  activateAudioFileSource();
  audioFilePlayer.play().catch(() => {});
  scheduleRender();
}

function getAudioReactiveControl(settings) {
  const sRaw = settings && Number.isFinite(settings.audioSensitivity)
    ? settings.audioSensitivity
    : controls.audioSensitivity
      ? Number(controls.audioSensitivity.value)
      : 0;
  const tRaw = settings && Number.isFinite(settings.audioTolerance)
    ? settings.audioTolerance
    : controls.audioTolerance
      ? Number(controls.audioTolerance.value)
      : 0;
  const sensNorm = clamp(sRaw / 120, 0, 1);
  const tolNorm = clamp(tRaw / 120, 0, 1);
  // Re-map controls so low-mid values (like 8-35) are already expressive,
  // while high sensitivity does not become chaotic.
  const sensitivity = sensNorm <= 0 ? 0 : clamp(Math.pow(sensNorm, 0.62), 0, 1);
  const tolerance = clamp(Math.pow(tolNorm, 0.85), 0, 1);
  const antiChaos = 1 - Math.pow(sensNorm, 1.85) * 0.28;
  const toleranceGate = 1 - tolerance * 0.74;
  const master = sensNorm <= 0
    ? 0
    : clamp((0.08 + sensitivity * 0.96) * toleranceGate * antiChaos * 1.04, 0, 1.2);
  return { sensitivity, tolerance, master };
}

function getReactiveAudioState(settings, enabled = true, moduleAmount = 1) {
  const ctrl = getAudioReactiveControl(settings);
  const on = Boolean(enabled && hasAudioReactiveInput());
  const amount = clamp(moduleAmount, 0, 2);
  const gain = on ? clamp(ctrl.master * amount, 0, 2) : 0;
  const baseBands = audioFeatures.bands || [0, 0, 0, 0];
  return {
    master: gain,
    level: clamp(audioLevel * gain, 0, 2.4),
    transient: clamp(audioFeatures.transient * gain, 0, 2.4),
    bands: [
      clamp(baseBands[0] * gain, 0, 2.4),
      clamp(baseBands[1] * gain, 0, 2.4),
      clamp(baseBands[2] * gain, 0, 2.4),
      clamp(baseBands[3] * gain, 0, 2.4),
    ],
  };
}

function updateAudioLevel(settings) {
  updateAudioAnalysis();
  if (!hasAudioReactiveInput()) {
    audioLevel = 0;
    audioReactiveEnv = 0;
    return 0;
  }
  const control = getAudioReactiveControl(settings);
  if (control.sensitivity <= 0.001) {
    audioLevel = 0;
    audioReactiveEnv = 0;
    return 0;
  }
  const isFileInput = Boolean(audioInputSource && audioInputSource.value === "file");
  const avg =
    audioFeatures.rms * 0.44 +
    audioFeatures.bands[1] * 0.22 +
    audioFeatures.bands[2] * 0.18 +
    audioFeatures.transient * 0.28;
  const sensitivity = control.sensitivity;
  const tolerance = control.tolerance;
  const gateBase = isFileInput ? 0.0045 : 0.0075;
  const gate = gateBase + audioNoiseFloor * (0.85 + tolerance * 1.55) + tolerance * 0.056;
  const dynamic = Math.max(0, avg - gate);
  const headroom = Math.max(0.06, 0.9 - gate * 0.35);
  const normalized = clamp(dynamic / headroom, 0, 2.4);
  const curve = clamp(0.82 - sensitivity * 0.12 + tolerance * 0.18, 0.5, 1.14);
  const shaped = Math.pow(normalized, curve);
  const sensGain = 0.1 + sensitivity * 0.86;
  const tolAttn = 1 - tolerance * 0.62;
  let target = shaped * sensGain * tolAttn * (isFileInput ? 1.08 : 1);
  const silenceGate = 0.001 + tolerance * 0.004;
  if (dynamic < silenceGate) target = 0;
  const attackBase = isFileInput ? 0.28 : 0.24;
  const releaseBase = isFileInput ? 0.08 : 0.065;
  const attack = attackBase * (1 - tolerance * 0.45) + 0.04;
  const release = releaseBase * (1 - tolerance * 0.35) + 0.025;
  const k = target > audioReactiveEnv ? attack : release;
  audioReactiveEnv += (target - audioReactiveEnv) * k;
  audioLevel = clamp(audioReactiveEnv, 0, 1.7);
  return audioLevel;
}

function applyPixelate(imageData, size) {
  if (size <= 1) return;
  const { width, height, data } = imageData;

  for (let y = 0; y < height; y += size) {
    for (let x = 0; x < width; x += size) {
      const i = (y * width + x) * 4;
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];
      for (let yy = y; yy < y + size && yy < height; yy++) {
        for (let xx = x; xx < x + size && xx < width; xx++) {
          const j = (yy * width + xx) * 4;
          data[j] = r;
          data[j + 1] = g;
          data[j + 2] = b;
          data[j + 3] = a;
        }
      }
    }
  }
}

function applyLineJitter(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);

  for (let y = 0; y < height; y++) {
    const shift = Math.floor((randHash(0, y, seed) * 2 - 1) * amount);
    for (let x = 0; x < width; x++) {
      const srcX = clamp(x + shift, 0, width - 1);
      const src = (y * width + srcX) * 4;
      const dst = (y * width + x) * 4;
      data[dst] = copy[src];
      data[dst + 1] = copy[src + 1];
      data[dst + 2] = copy[src + 2];
      data[dst + 3] = copy[src + 3];
    }
  }
}

function applyWaveDistort(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);
  const amp = amount * 0.6;
  const freq = 0.03 + amount / 2200;

  for (let y = 0; y < height; y++) {
    const wave = Math.sin(y * freq + seed * 0.19) * amp;
    for (let x = 0; x < width; x++) {
      const srcX = clamp(Math.round(x + wave), 0, width - 1);
      const src = (y * width + srcX) * 4;
      const dst = (y * width + x) * 4;
      data[dst] = copy[src];
      data[dst + 1] = copy[src + 1];
      data[dst + 2] = copy[src + 2];
      data[dst + 3] = copy[src + 3];
    }
  }
}

function applyRgbShift(imageData, shift) {
  if (shift <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const rx = clamp(x + shift, 0, width - 1);
      const bx = clamp(x - shift, 0, width - 1);
      const ri = (y * width + rx) * 4;
      const bi = (y * width + bx) * 4;
      data[i] = copy[ri];
      data[i + 2] = copy[bi + 2];
    }
  }
}

function applyBlockShift(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);
  const blocks = Math.floor((amount / 100) * 70);

  for (let b = 0; b < blocks; b++) {
    const bw = Math.floor(8 + randHash(b, 1, seed) * (width * 0.2));
    const bh = Math.floor(3 + randHash(b, 2, seed) * (height * 0.08));
    const sx = Math.floor(randHash(b, 3, seed) * (width - bw));
    const sy = Math.floor(randHash(b, 4, seed) * (height - bh));
    const dx = clamp(sx + Math.floor((randHash(b, 5, seed) * 2 - 1) * amount), 0, width - bw);
    const dy = clamp(sy + Math.floor((randHash(b, 6, seed) * 2 - 1) * (amount * 0.4)), 0, height - bh);

    for (let y = 0; y < bh; y++) {
      for (let x = 0; x < bw; x++) {
        const src = ((sy + y) * width + (sx + x)) * 4;
        const dst = ((dy + y) * width + (dx + x)) * 4;
        data[dst] = copy[src];
        data[dst + 1] = copy[src + 1];
        data[dst + 2] = copy[src + 2];
      }
    }
  }
}

function applyNoise(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const n = (randHash(x, y, seed + 91) * 2 - 1) * amount;
      data[i] = clamp(data[i] + n, 0, 255);
      data[i + 1] = clamp(data[i + 1] + n, 0, 255);
      data[i + 2] = clamp(data[i + 2] + n, 0, 255);
    }
  }
}

function applySaltPepper(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const density = amount / 1000;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (randHash(x, y, seed + 211) > density) continue;
      const i = (y * width + x) * 4;
      const v = randHash(x + 3, y + 5, seed + 333) > 0.5 ? 255 : 0;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
    }
  }
}

function applyDataBands(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);
  const bands = Math.floor((amount / 100) * 26);

  for (let b = 0; b < bands; b++) {
    const y = Math.floor(randHash(b, 9, seed) * height);
    const bandH = Math.max(1, Math.floor(1 + randHash(b, 10, seed) * (height * 0.05)));
    const shift = Math.floor((randHash(b, 11, seed) * 2 - 1) * (amount * 1.2));

    for (let yy = y; yy < y + bandH && yy < height; yy++) {
      for (let x = 0; x < width; x++) {
        const sx = clamp(x + shift, 0, width - 1);
        const src = (yy * width + sx) * 4;
        const dst = (yy * width + x) * 4;
        data[dst] = copy[src];
        data[dst + 1] = copy[src + 1];
        data[dst + 2] = copy[src + 2];
      }
    }
  }
}

function applyChromaBleed(imageData, amount) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);
  const radius = Math.max(1, Math.floor(amount / 12));

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const lx = clamp(x - radius, 0, width - 1);
      const rx = clamp(x + radius, 0, width - 1);
      const li = (y * width + lx) * 4;
      const ri = (y * width + rx) * 4;
      data[i] = copy[ri];
      data[i + 1] = copy[i + 1];
      data[i + 2] = copy[li + 2];
    }
  }
}

function applyByteCorrupt(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const levels = clamp(32 - Math.floor(amount / 4), 2, 32);
  const step = 255 / (levels - 1);

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      if (randHash(x, y, seed + 123) < amount / 190) {
        const r = data[i];
        data[i] = data[i + 1];
        data[i + 1] = data[i + 2];
        data[i + 2] = r;
      }
      data[i] = Math.round(data[i] / step) * step;
      data[i + 1] = Math.round(data[i + 1] / step) * step;
      data[i + 2] = Math.round(data[i + 2] / step) * step;
    }
  }
}

function buildSubjectMask(imageData) {
  const { width, height, data } = imageData;
  const pixels = width * height;
  ensureGlitchScratch(data.length);
  const mask = glitchMaskScratch && glitchMaskScratch.length === pixels ? glitchMaskScratch : new Uint8Array(pixels);
  let avgLum = 0;

  for (let i = 0; i < data.length; i += 4) {
    avgLum += data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
  }
  avgLum /= width * height;

  const cx = width * 0.5;
  const cy = height * 0.5;
  const maxR = Math.hypot(cx, cy) || 1;
  const hasFaces = detectedFaces.length > 0;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const lum = data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114;
      const dx = (x - cx) / maxR;
      const dy = (y - cy) / maxR;
      const centerWeight = 1 - clamp(Math.hypot(dx, dy) * 1.35, 0, 1);
      const sat = Math.max(data[i], data[i + 1], data[i + 2]) - Math.min(data[i], data[i + 1], data[i + 2]);
      let faceBoost = false;
      if (hasFaces) {
        const nx = x / width;
        const ny = y / height;
        for (const f of detectedFaces) {
          const padX = f.width * 0.25;
          const padY = f.height * 0.35;
          if (
            nx >= f.x - padX &&
            nx <= f.x + f.width + padX &&
            ny >= f.y - padY &&
            ny <= f.y + f.height + padY
          ) {
            faceBoost = true;
            break;
          }
        }
      }
      const likelySubject =
        faceBoost ||
        (lum > avgLum * 0.82 && centerWeight > 0.25) ||
        (sat > 48 && centerWeight > 0.2);
      mask[y * width + x] = likelySubject ? 255 : 0;
    }
  }

  return mask;
}

function applySubjectGhost(imageData, strength, copies, shift, seed, preMask = null) {
  if (strength <= 0 || copies <= 0 || shift <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);
  const mask = preMask || buildSubjectMask(imageData);
  const alphaBase = strength / 120;

  for (let c = 1; c <= copies; c++) {
    const offX = Math.round((shift * c) / copies * (randHash(c, 71, seed) > 0.5 ? 1 : -1));
    const offY = Math.round((shift * c * 0.45) / copies * (randHash(c, 72, seed) > 0.5 ? 1 : -1));
    const alpha = clamp(alphaBase / (0.9 + c * 0.55), 0, 1);

    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
        const srcP = y * width + x;
        if (!mask[srcP]) continue;
        const tx = x + offX;
        const ty = y + offY;
        if (tx < 0 || tx >= width || ty < 0 || ty >= height) continue;
        const src = srcP * 4;
        const dst = (ty * width + tx) * 4;
        data[dst] = clamp(data[dst] * (1 - alpha) + copy[src] * alpha, 0, 255);
        data[dst + 1] = clamp(data[dst + 1] * (1 - alpha) + copy[src + 1] * alpha, 0, 255);
        data[dst + 2] = clamp(data[dst + 2] * (1 - alpha) + copy[src + 2] * alpha, 0, 255);
      }
    }
  }
}

function applyPixelSort(imageData, amount) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);
  const perf = clamp((perfScale - 0.35) / 0.65, 0, 1);
  const fpsStress = clamp((24 - fps) / 10, 0, 1);
  const stress = clamp((1 - perf) * 0.55 + fpsStress * 0.9, 0, 1);
  const runMaxBase = 4 + Math.floor((amount / 100) * 28);
  const runMax = clamp(Math.round(runMaxBase * (1 - stress * 0.35)), 4, 36);
  const stepYBase = 1 + Math.floor((100 - amount) / 18);
  const stepY = clamp(stepYBase + (stress > 0.35 ? 1 : 0) + (stress > 0.6 ? 2 : 0), 1, 12);
  const xScanStep = stress > 0.7 ? 2 : 1;
  const threshold = 45 + amount * 1.1;
  const maxSortedPixels = recordingActive
    ? width * height
    : Math.floor(width * height * clamp(0.38 - stress * 0.2, 0.14, 0.38));
  let sortedPixels = 0;

  rowLoop:
  for (let y = 0; y < height; y += stepY) {
    let x = 0;
    while (x < width - 1) {
      const i0 = (y * width + x) * 4;
      const i1 = (y * width + x + 1) * 4;
      const lum0 = copy[i0] * 0.299 + copy[i0 + 1] * 0.587 + copy[i0 + 2] * 0.114;
      const lum1 = copy[i1] * 0.299 + copy[i1 + 1] * 0.587 + copy[i1 + 2] * 0.114;
      if (Math.abs(lum1 - lum0) < threshold * 0.04) {
        x += xScanStep;
        continue;
      }
      const len = clamp(Math.floor(3 + Math.random() * runMax), 3, width - x);
      for (let k = 0; k < len; k++) {
        const ii = (y * width + x + k) * 4;
        glitchSortLum[k] = copy[ii] * 0.299 + copy[ii + 1] * 0.587 + copy[ii + 2] * 0.114;
        glitchSortR[k] = copy[ii];
        glitchSortG[k] = copy[ii + 1];
        glitchSortB[k] = copy[ii + 2];
      }
      for (let k = 1; k < len; k++) {
        const l = glitchSortLum[k];
        const r = glitchSortR[k];
        const g = glitchSortG[k];
        const b = glitchSortB[k];
        let j = k - 1;
        while (j >= 0 && glitchSortLum[j] > l) {
          glitchSortLum[j + 1] = glitchSortLum[j];
          glitchSortR[j + 1] = glitchSortR[j];
          glitchSortG[j + 1] = glitchSortG[j];
          glitchSortB[j + 1] = glitchSortB[j];
          j -= 1;
        }
        glitchSortLum[j + 1] = l;
        glitchSortR[j + 1] = r;
        glitchSortG[j + 1] = g;
        glitchSortB[j + 1] = b;
      }
      for (let k = 0; k < len; k++) {
        const ii = (y * width + x + k) * 4;
        data[ii] = glitchSortR[k];
        data[ii + 1] = glitchSortG[k];
        data[ii + 2] = glitchSortB[k];
      }
      sortedPixels += len;
      if (!recordingActive && sortedPixels >= maxSortedPixels) break rowLoop;
      x += len;
    }
  }
}

function applyOrderedDither(imageData, amount) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const mix = amount / 100;
  const levels = clamp(7 - Math.floor(amount / 22), 2, 8);
  const step = 255 / (levels - 1);
  const m = [
    [0, 8, 2, 10],
    [12, 4, 14, 6],
    [3, 11, 1, 9],
    [15, 7, 13, 5],
  ];

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const d = (m[y & 3][x & 3] / 16 - 0.5) * (step * 0.85 * mix);
      const r = clamp(data[i] + d, 0, 255);
      const g = clamp(data[i + 1] + d, 0, 255);
      const b = clamp(data[i + 2] + d, 0, 255);
      data[i] = Math.round(r / step) * step;
      data[i + 1] = Math.round(g / step) * step;
      data[i + 2] = Math.round(b / step) * step;
    }
  }
}

function applyColorBlend(imageData, amount) {
  if (amount <= 0) return;
  const { data } = imageData;
  const mix = amount / 100;
  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const neonR = clamp(r * (1 - mix * 0.5) + g * mix * 0.28 + b * mix * 0.42, 0, 255);
    const neonG = clamp(g * (1 - mix * 0.58) + b * mix * 0.52 + r * mix * 0.14, 0, 255);
    const neonB = clamp(b * (1 - mix * 0.35) + r * mix * 0.55 + g * mix * 0.2, 0, 255);
    data[i] = neonR;
    data[i + 1] = neonG;
    data[i + 2] = neonB;
  }
}

function applyPixelMelt(imageData, amount, seed) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const copy = copyToGlitchScratch(data);
  const maxDrift = Math.max(2, Math.floor((amount / 100) * (height * 0.16)));
  const colStep = clamp(1 + Math.floor((100 - amount) / 10), 1, 10);

  for (let x = 0; x < width; x += colStep) {
    const phase = randHash(x, 77, seed + 901) * Math.PI * 2;
    const bias = randHash(x, 79, seed + 903);
    for (let y = 0; y < height; y++) {
      const i = (y * width + x) * 4;
      const lum = copy[i] * 0.299 + copy[i + 1] * 0.587 + copy[i + 2] * 0.114;
      const flow = (1 - lum / 255) * 0.7 + bias * 0.3;
      const offset = Math.round((Math.sin(y * 0.08 + phase) * 0.5 + 0.5) * maxDrift * flow);
      const sy = clamp(y - offset, 0, height - 1);
      const src = (sy * width + x) * 4;
      data[i] = copy[src];
      data[i + 1] = copy[src + 1];
      data[i + 2] = copy[src + 2];
    }
  }
}

function drawLineOnImage(data, width, height, x0, y0, x1, y1, color, alpha) {
  let ax = Math.round(x0);
  let ay = Math.round(y0);
  const bx = Math.round(x1);
  const by = Math.round(y1);
  const dx = Math.abs(bx - ax);
  const sx = ax < bx ? 1 : -1;
  const dy = -Math.abs(by - ay);
  const sy = ay < by ? 1 : -1;
  let err = dx + dy;

  while (true) {
    if (ax >= 0 && ax < width && ay >= 0 && ay < height) {
      const i = (ay * width + ax) * 4;
      data[i] = clamp(data[i] * (1 - alpha) + color[0] * alpha, 0, 255);
      data[i + 1] = clamp(data[i + 1] * (1 - alpha) + color[1] * alpha, 0, 255);
      data[i + 2] = clamp(data[i + 2] * (1 - alpha) + color[2] * alpha, 0, 255);
    }
    if (ax === bx && ay === by) break;
    const e2 = 2 * err;
    if (e2 >= dy) {
      err += dy;
      ax += sx;
    }
    if (e2 <= dx) {
      err += dx;
      ay += sy;
    }
  }
}

function applyPolygonTracking(imageData, amount, seed, preMask = null) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const alpha = clamp((amount / 100) * 0.85, 0.1, 0.85);
  const copies = 1 + Math.floor(amount / 40);
  const jitter = (amount / 100) * 12;
  const colA = [50, 255, 215];
  const colB = [255, 70, 210];

  const shapes = [];
  if (detectedFaces.length) {
    for (const f of detectedFaces) {
      const x = f.x * width;
      const y = f.y * height;
      const w = f.width * width;
      const h = f.height * height;
      const cx = x + w * 0.5;
      const cy = y + h * 0.5;
      shapes.push([
        [cx, y - h * 0.16],
        [x + w * 0.9, y + h * 0.1],
        [x + w * 1.02, cy],
        [x + w * 0.9, y + h * 0.9],
        [cx, y + h * 1.08],
        [x + w * 0.1, y + h * 0.9],
        [x - w * 0.02, cy],
        [x + w * 0.1, y + h * 0.1],
      ]);
    }
  } else {
    const mask = preMask || buildSubjectMask(imageData);
    let minX = width;
    let minY = height;
    let maxX = 0;
    let maxY = 0;
    let hits = 0;
    for (let y = 0; y < height; y += 3) {
      for (let x = 0; x < width; x += 3) {
        if (!mask[y * width + x]) continue;
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        hits += 1;
      }
    }
    if (hits > 60) {
      const cx = (minX + maxX) * 0.5;
      const cy = (minY + maxY) * 0.5;
      const w = Math.max(8, maxX - minX);
      const h = Math.max(8, maxY - minY);
      shapes.push([
        [cx, cy - h * 0.62],
        [cx + w * 0.62, cy],
        [cx, cy + h * 0.62],
        [cx - w * 0.62, cy],
      ]);
    }
  }

  if (!shapes.length) return;

  for (const poly of shapes) {
    for (let c = 0; c < copies; c++) {
      const offX = (randHash(c, 501, seed + 12) * 2 - 1) * jitter * c;
      const offY = (randHash(c, 502, seed + 31) * 2 - 1) * jitter * c;
      const col = c % 2 === 0 ? colA : colB;
      for (let i = 0; i < poly.length; i++) {
        const p0 = poly[i];
        const p1 = poly[(i + 1) % poly.length];
        drawLineOnImage(
          data,
          width,
          height,
          p0[0] + offX,
          p0[1] + offY,
          p1[0] + offX,
          p1[1] + offY,
          col,
          alpha / (1 + c * 0.35)
        );
      }
    }
  }
}

function applyErrorComplexity(imageData, amount, seed) {
  if (amount <= 0) return;
  const baseLayers = Math.max(1, Math.floor(amount / 28));
  const layers = Math.max(1, fps < 20 ? baseLayers - 1 : baseLayers);
  const doByteCorrupt = amount > 26 && fps > 20;
  for (let i = 0; i < layers; i++) {
    applyLineJitter(imageData, Math.max(2, Math.round(amount * (0.18 + i * 0.09))), seed + i * 13);
    applyDataBands(imageData, Math.max(5, Math.round(amount * 0.7)), seed + i * 19);
    if (doByteCorrupt) {
      applyByteCorrupt(imageData, Math.max(4, Math.round(amount * 0.45)), seed + i * 23);
    }
  }
}

function applyPosterize(imageData, levels) {
  if (levels >= 63.5) return;
  const safe = clamp(levels, 2, 64);
  const step = 255 / (safe - 1);
  const { data } = imageData;

  for (let i = 0; i < data.length; i += 4) {
    data[i] = Math.round(data[i] / step) * step;
    data[i + 1] = Math.round(data[i + 1] / step) * step;
    data[i + 2] = Math.round(data[i + 2] / step) * step;
  }
}

function applyScanlines(imageData, intensity) {
  if (intensity <= 0.5) return;
  const dark = intensity / 130;
  const { width, height, data } = imageData;

  for (let y = 0; y < height; y += 2) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      data[i] = clamp(data[i] * (1 - dark), 0, 255);
      data[i + 1] = clamp(data[i + 1] * (1 - dark), 0, 255);
      data[i + 2] = clamp(data[i + 2] * (1 - dark), 0, 255);
    }
  }
}

function applyBloom(imageData, amount) {
  if (amount <= 0.5) return;
  const boost = amount / 100;
  const { data } = imageData;

  for (let i = 0; i < data.length; i += 4) {
    const lum = (data[i] + data[i + 1] + data[i + 2]) / 3;
    const factor = 1 + boost * (lum / 255);
    data[i] = clamp(data[i] * factor, 0, 255);
    data[i + 1] = clamp(data[i + 1] * factor, 0, 255);
    data[i + 2] = clamp(data[i + 2] * factor, 0, 255);
  }
}

function applyColorControls(imageData, hueShift, saturation, contrast) {
  if (
    Math.abs(hueShift) < 0.5 &&
    Math.abs(saturation - 100) < 0.5 &&
    Math.abs(contrast - 100) < 0.5
  ) {
    return;
  }
  const satFactor = saturation / 100;
  const conFactor = contrast / 100;
  const conOffset = 128 * (1 - conFactor);
  const hueOffset = hueShift / 360;
  const { data } = imageData;

  for (let i = 0; i < data.length; i += 4) {
    const [h, s, l] = rgbToHsl(data[i], data[i + 1], data[i + 2]);
    const nh = (h + hueOffset + 1) % 1;
    const ns = clamp(s * satFactor, 0, 1);
    const [r, g, b] = hslToRgb(nh, ns, l);
    data[i] = clamp(r * conFactor + conOffset, 0, 255);
    data[i + 1] = clamp(g * conFactor + conOffset, 0, 255);
    data[i + 2] = clamp(b * conFactor + conOffset, 0, 255);
  }
}

function applyInvertBlend(imageData, amount) {
  if (amount <= 0.5) return;
  const mix = amount / 100;
  const { data } = imageData;
  for (let i = 0; i < data.length; i += 4) {
    data[i] = clamp(data[i] * (1 - mix) + (255 - data[i]) * mix, 0, 255);
    data[i + 1] = clamp(data[i + 1] * (1 - mix) + (255 - data[i + 1]) * mix, 0, 255);
    data[i + 2] = clamp(data[i + 2] * (1 - mix) + (255 - data[i + 2]) * mix, 0, 255);
  }
}

function applySolarize(imageData, amount) {
  if (amount <= 0.5) return;
  const threshold = 255 - (amount / 100) * 170;
  const { data } = imageData;
  for (let i = 0; i < data.length; i += 4) {
    if (data[i] > threshold) data[i] = 255 - data[i];
    if (data[i + 1] > threshold) data[i + 1] = 255 - data[i + 1];
    if (data[i + 2] > threshold) data[i + 2] = 255 - data[i + 2];
  }
}

function applyAnimatedDistortion(imageData, amount, speed, seed, tSec) {
  if (amount <= 0) return;
  const w = imageData.width;
  const h = imageData.height;
  const src = copyToGlitchScratch(imageData.data);
  const dst = imageData.data;
  const glitch = amount / 100;
  const perf = clamp((perfScale - 0.35) / 0.65, 0, 1);
  const fpsStress = clamp((24 - fps) / 10, 0, 1);
  const stress = clamp((1 - perf) * 0.5 + fpsStress * 0.95, 0, 1);
  const sampleStepX = !recordingActive && stress > 0.58 ? 2 : 1;
  const sampleStepY = !recordingActive && stress > 0.72 ? 2 : 1;
  const vel = 0.45 + (speed / 100) * 3.4;
  const maxDx = Math.max(3, Math.round(Math.min(w, h) * (0.008 + glitch * 0.08)));
  const maxDy = Math.max(1, Math.round(Math.min(w, h) * (0.003 + glitch * 0.03)));
  const bandH = Math.max(1, Math.round(1 + glitch * 5 + (sampleStepY - 1)));
  const frameSeed = (postFxFrameCounter | 0) + (seed | 0);

  for (let y = 0; y < h; y += bandH) {
    const yN = y / Math.max(1, h - 1);
    const bandNoise =
      Math.sin(tSec * vel * 1.6 + yN * 18 + seed * 0.0021) * 0.58 +
      Math.sin(tSec * vel * 0.9 + yN * 37 + seed * 0.0013) * 0.42;
    const burst = randHash(Math.floor(tSec * vel * 11), y + seed, seed + 911) > 0.9 ? 1 : 0;
    const burstNoise = randHash(y, frameSeed + 29, seed + 611) * 1.2 - 0.2;
    const dxBand = Math.round((bandNoise + burst * burstNoise) * maxDx);
    const dyBand = Math.round(Math.sin(tSec * vel + yN * 9 + seed * 0.003) * maxDy);
    for (let yy = y; yy < Math.min(h, y + bandH); yy += sampleStepY) {
      for (let x = 0; x < w; x += sampleStepX) {
        const sx = clamp(x + dxBand, 0, w - 1);
        const sy = clamp(yy + dyBand, 0, h - 1);
        const si = (sy * w + sx) * 4;
        const yyEnd = Math.min(h, yy + sampleStepY);
        const xxEnd = Math.min(w, x + sampleStepX);
        for (let fy = yy; fy < yyEnd; fy++) {
          for (let fx = x; fx < xxEnd; fx++) {
            const di = (fy * w + fx) * 4;
            dst[di] = src[si];
            dst[di + 1] = src[si + 1];
            dst[di + 2] = src[si + 2];
            dst[di + 3] = src[si + 3];
          }
        }
      }
    }
  }

  if (glitch > 0.15) {
    const blocksBase = Math.max(1, Math.round(glitch * 8));
    const blocks = recordingActive ? blocksBase : Math.max(1, Math.round(blocksBase * (1 - stress * 0.55)));
    for (let i = 0; i < blocks; i++) {
      const rw = randHash(i, frameSeed + 13, seed + 401);
      const rh = randHash(i, frameSeed + 23, seed + 417);
      const rx = randHash(i, frameSeed + 31, seed + 431);
      const ry = randHash(i, frameSeed + 47, seed + 449);
      const rdx = randHash(i, frameSeed + 61, seed + 463);
      const rdy = randHash(i, frameSeed + 79, seed + 487);
      const bw = Math.max(8, Math.round((0.04 + rw * 0.18) * w));
      const bh = Math.max(4, Math.round((0.02 + rh * 0.12) * h));
      const x0 = Math.floor(rx * Math.max(1, w - bw));
      const y0 = Math.floor(ry * Math.max(1, h - bh));
      const sx0 = clamp(x0 + Math.round((rdx * 2 - 1) * maxDx * 2.4), 0, w - bw);
      const sy0 = clamp(y0 + Math.round((rdy * 2 - 1) * maxDy * 2.6), 0, h - bh);
      for (let yy = 0; yy < bh; yy++) {
        for (let xx = 0; xx < bw; xx++) {
          const si = ((sy0 + yy) * w + (sx0 + xx)) * 4;
          const di = ((y0 + yy) * w + (x0 + xx)) * 4;
          dst[di] = src[si];
          dst[di + 1] = src[si + 1];
          dst[di + 2] = src[si + 2];
          dst[di + 3] = src[si + 3];
        }
      }
    }
  }
}

function applyMotionTrailGlitch(imageData, amount, decay, threshold, softness, motionOnly) {
  if (amount <= 0) {
    if (glitchTrailBuffer) glitchTrailBuffer.fill(0);
    if (glitchPrevFrame) glitchPrevFrame.fill(0);
    return;
  }
  const trailSkip = fps < 18 ? 3 : fps < 24 ? 2 : 1;
  if (trailSkip > 1 && postFxFrameCounter % trailSkip !== 0 && !recordingActive) return;
  const w = imageData.width;
  const h = imageData.height;
  const pix = w * h;
  if (glitchTrailW !== w || glitchTrailH !== h || !glitchTrailBuffer || glitchTrailBuffer.length !== pix * 3) {
    glitchTrailW = w;
    glitchTrailH = h;
    glitchTrailBuffer = new Float32Array(pix * 3);
    glitchPrevFrame = new Uint8ClampedArray(pix * 4);
  }

  const src = copyToGlitchScratch(imageData.data, true);
  const dst = imageData.data;
  const buf = glitchTrailBuffer;
  const prev = glitchPrevFrame;
  const blend = clamp(amount / 100, 0, 1);
  const keep = clamp(0.84 + (decay / 100) * 0.15, 0.82, 0.995);
  const gain = clamp(0.5 + blend * 0.8, 0.35, 1.35);
  const th = 6 + (threshold / 100) * 80;
  const soft = 1 + (softness / 100) * 70;
  const mo = clamp(motionOnly / 100, 0, 1);
  const outMix = clamp(0.14 + blend * 0.78, 0.04, 0.95);

  for (let p = 0; p < pix; p++) {
    const i4 = p * 4;
    const i3 = p * 3;
    const r = src[i4];
    const g = src[i4 + 1];
    const b = src[i4 + 2];
    const dr = Math.abs(r - prev[i4]);
    const dg = Math.abs(g - prev[i4 + 1]);
    const db = Math.abs(b - prev[i4 + 2]);
    const diff = dr * 0.299 + dg * 0.587 + db * 0.114;
    const x = clamp((diff - th) / soft, 0, 1);
    const mask = x * x * (3 - 2 * x);
    const feed = (1 - mo) + mask * mo;

    const tr = clamp(buf[i3] * keep + r * gain * feed, 0, 255);
    const tg = clamp(buf[i3 + 1] * keep + g * gain * feed, 0, 255);
    const tb = clamp(buf[i3 + 2] * keep + b * gain * feed, 0, 255);
    buf[i3] = tr;
    buf[i3 + 1] = tg;
    buf[i3 + 2] = tb;

    dst[i4] = clamp(r * (1 - outMix) + tr * outMix, 0, 255);
    dst[i4 + 1] = clamp(g * (1 - outMix) + tg * outMix, 0, 255);
    dst[i4 + 2] = clamp(b * (1 - outMix) + tb * outMix, 0, 255);
    dst[i4 + 3] = 255;
  }

  glitchPrevFrame.set(src);
}

function applyVhsDrift(imageData, amount, seed, tSec) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const src = copyToGlitchScratch(data);
  const amp = (amount / 100) * Math.max(2, Math.min(width, height) * 0.045);
  const freq = 0.006 + (amount / 100) * 0.016;
  const phase = seed * 0.0037 + tSec * (0.7 + amount * 0.02);
  for (let y = 0; y < height; y++) {
    const jitter = Math.sin(y * freq + phase) * amp + Math.sin(y * freq * 2.3 + phase * 1.6) * amp * 0.3;
    const dx = Math.round(jitter);
    for (let x = 0; x < width; x++) {
      const sx = clamp(x + dx, 0, width - 1);
      const si = (y * width + sx) * 4;
      const di = (y * width + x) * 4;
      data[di] = src[si];
      data[di + 1] = src[si + 1];
      data[di + 2] = src[si + 2];
      data[di + 3] = src[si + 3];
    }
  }
}

function applyTapeNoise(imageData, amount, seed, tSec) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const strength = amount / 100;
  const frameStep = Math.floor(tSec * 60);
  const flicker = 1 + (randHash(frameStep, seed + 77, seed + 13) * 2 - 1) * strength * 0.16;
  const lineChance = 0.004 + strength * 0.028;
  const speckChance = 0.0008 + strength * 0.01;
  for (let y = 0; y < height; y++) {
    const lineOn = randHash(y, frameStep + seed, seed + 901) < lineChance;
    const lineBoost = lineOn ? (0.78 + randHash(y, frameStep + 3, seed + 667) * 0.5) : 1;
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const grain = (randHash(x, y + frameStep, seed + 501) * 2 - 1) * (3 + strength * 22);
      data[i] = clamp(data[i] * flicker * lineBoost + grain, 0, 255);
      data[i + 1] = clamp(data[i + 1] * flicker * lineBoost + grain, 0, 255);
      data[i + 2] = clamp(data[i + 2] * flicker * lineBoost + grain, 0, 255);
      if (randHash(x + 17, y + frameStep * 2, seed + 311) < speckChance) {
        const v = randHash(x + 29, y + 13, seed + 129) > 0.5 ? 255 : 0;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
      }
    }
  }
}

function applyHeadSwitch(imageData, amount, seed, tSec) {
  if (amount <= 0) return;
  const { width, height, data } = imageData;
  const src = copyToGlitchScratch(data);
  const strength = amount / 100;
  const bandH = Math.max(2, Math.round(height * (0.04 + strength * 0.12)));
  const yStart = Math.max(0, height - bandH - 1);
  const shift = Math.round(Math.sin(tSec * (1.6 + strength * 1.8) + seed * 0.014) * (4 + strength * 50));
  for (let y = yStart; y < height; y++) {
    const mix = clamp((y - yStart) / Math.max(1, bandH), 0, 1);
    const rowShift = Math.round(shift * (0.2 + mix * 0.8));
    for (let x = 0; x < width; x++) {
      const sx = clamp(x + rowShift, 0, width - 1);
      const si = (y * width + sx) * 4;
      const di = (y * width + x) * 4;
      const bleed = 1 + strength * 0.08;
      data[di] = clamp(src[si] * bleed, 0, 255);
      data[di + 1] = clamp(src[si + 1], 0, 255);
      data[di + 2] = clamp(src[si + 2] * (1 + strength * 0.06), 0, 255);
      data[di + 3] = src[si + 3];
    }
  }
}

function applyGlitchPipeline(imageData, settings, seed, tSec = 0) {
  const perf = clamp((perfScale - 0.45) / 0.55, 0, 1);
  const heavyScale = 0.35 + perf * 0.65;
  const safe = {
    ...settings,
    pixelSort: settings.pixelSort * heavyScale,
    byteCorrupt: settings.byteCorrupt * heavyScale,
    polygonTrack: settings.polygonTrack * heavyScale,
    errorComplexity: settings.errorComplexity * heavyScale,
    motionTrail: settings.motionTrail * heavyScale,
    animDistort: settings.animDistort * (0.45 + perf * 0.55),
    blockShift: settings.blockShift * (0.55 + perf * 0.45),
  };
  if (!webcamActive) safe.polygonTrack = 0;
  const heavyLoad =
    safe.pixelSort * 1.15 +
    safe.byteCorrupt * 1.2 +
    safe.pixelMelt * 0.95 +
    safe.subjectGhost * 1.25 +
    safe.polygonTrack * 1.45 +
    safe.motionTrail * 1.3 +
    safe.animDistort * 1.1 +
    safe.errorComplexity * 1.45 +
    safe.vhsDrift * 0.95 +
    safe.tapeNoise * 0.75 +
    safe.headSwitch * 0.95;
  const budget = 74 + perf * 210;
  if (heavyLoad > budget) {
    const k = clamp(budget / Math.max(1, heavyLoad), 0.35, 1);
    safe.pixelSort *= k;
    safe.byteCorrupt *= k;
    safe.pixelMelt *= k;
    safe.subjectGhost *= k;
    safe.polygonTrack *= k;
    safe.motionTrail *= k;
    safe.animDistort *= k;
    safe.errorComplexity *= k;
    safe.vhsDrift *= k;
    safe.tapeNoise *= k;
    safe.headSwitch *= k;
  }
  const overload = clamp((heavyLoad - budget) / Math.max(1, budget), 0, 1);
  const fpsStress = clamp((24 - fps) / 10, 0, 1);
  const degrade = clamp(overload * 0.75 + fpsStress * 0.95 + (1 - perf) * 0.45, 0, 1);
  const lightMode = degrade > 0.34;
  const ultraLightMode = degrade > 0.62;
  if (lightMode) {
    safe.pixelSort *= 0.55;
    safe.byteCorrupt *= 0.55;
    safe.polygonTrack *= 0.5;
    safe.motionTrail *= 0.6;
    safe.animDistort *= 0.62;
    safe.errorComplexity *= 0.58;
  }
  if (ultraLightMode) {
    safe.pixelSort *= 0.35;
    safe.byteCorrupt *= 0.3;
    safe.polygonTrack *= 0.35;
    safe.motionTrail *= 0.45;
    safe.animDistort *= 0.5;
    safe.errorComplexity *= 0.42;
    safe.pixelMelt *= 0.6;
    safe.vhsDrift *= 0.7;
    safe.tapeNoise *= 0.72;
    safe.headSwitch *= 0.7;
  }
  const needSubjectMask =
    !detectedFaces.length && (safe.subjectGhost > 0.2 || (safe.polygonTrack > 0.2 && !ultraLightMode));
  const subjectMask = needSubjectMask ? buildSubjectMask(imageData) : null;
  const phaseSpan = recordingActive ? 1 : fps < 16 ? 4 : fps < 22 ? 3 : fps < 27 ? 2 : 1;
  const phase = postFxFrameCounter % phaseSpan;
  const runGroupA = phaseSpan === 1 || phase === 0;
  const runGroupB = phaseSpan === 1 ? true : phase === 1;
  const runGroupC = phaseSpan <= 2 ? phase === 0 : phase === 2;
  const pixelSortSkip = !recordingActive && fps < 18 ? 3 : !recordingActive && fps < 24 ? 2 : 1;
  const animSkip = !recordingActive && fps < 18 ? 3 : !recordingActive && fps < 24 ? 2 : 1;
  applyPixelate(imageData, safe.pixelSize);
  if (
    safe.pixelSort > 0.2 &&
    !ultraLightMode &&
    runGroupA &&
    (recordingActive || pixelSortSkip <= 1 || postFxFrameCounter % pixelSortSkip === 0)
  ) {
    applyPixelSort(imageData, safe.pixelSort);
  }
  applyLineJitter(imageData, safe.lineJitter, seed);
  applyWaveDistort(imageData, safe.waveDistort, seed);
  applyRgbShift(imageData, safe.rgbShift);
  applyBlockShift(imageData, safe.blockShift, seed);
  if (runGroupB || safe.pixelMelt <= 18) applyPixelMelt(imageData, safe.pixelMelt, seed);
  applyNoise(imageData, safe.noiseAmount, seed);
  applySaltPepper(imageData, safe.saltPepper, seed);
  applyDataBands(imageData, safe.dataBands, seed);
  if (safe.byteCorrupt > 0.2 && !lightMode && runGroupA) applyByteCorrupt(imageData, safe.byteCorrupt, seed);
  applyChromaBleed(imageData, safe.chromaBleed);
  applyVhsDrift(imageData, safe.vhsDrift, seed, tSec);
  applyTapeNoise(imageData, safe.tapeNoise, seed, tSec);
  applyHeadSwitch(imageData, safe.headSwitch, seed, tSec);
  applyOrderedDither(imageData, safe.ditherAmount);
  applyColorBlend(imageData, safe.colorBlend);
  if (runGroupC || safe.subjectGhost <= 14) {
    applySubjectGhost(imageData, safe.subjectGhost, safe.ghostCopies, safe.ghostShift, seed, subjectMask);
  }
  if ((runGroupC || safe.polygonTrack <= 14) && safe.polygonTrack > 0.2 && !ultraLightMode) {
    applyPolygonTracking(imageData, safe.polygonTrack, seed, subjectMask);
  }
  if ((runGroupB || safe.errorComplexity <= 14) && safe.errorComplexity > 0.2 && !ultraLightMode) {
    applyErrorComplexity(imageData, safe.errorComplexity, seed);
  }
  applyPosterize(imageData, safe.posterize);
  applyScanlines(imageData, safe.scanlineIntensity);
  applyBloom(imageData, safe.bloom);
  applyColorControls(imageData, safe.hueShift, safe.saturation, safe.contrast);
  applyInvertBlend(imageData, safe.invertBlend);
  applySolarize(imageData, safe.solarize);
  if (
    safe.animDistort > 0.2 &&
    runGroupC &&
    (recordingActive || animSkip <= 1 || postFxFrameCounter % animSkip === 0)
  ) {
    applyAnimatedDistortion(imageData, safe.animDistort, safe.animSpeed, seed, tSec);
  }
  if (safe.motionTrail > 0.2 && !ultraLightMode) {
    applyMotionTrailGlitch(
      imageData,
      safe.motionTrail,
      safe.trailDecay,
      safe.trailThreshold,
      safe.trailSoftness,
      safe.trailMotionOnly
    );
  }
}

function getGlitchProcessScale(settings) {
  const perf = clamp((perfScale - 0.32) / 0.68, 0, 1);
  const masterOn = Boolean(masterFxMode && (masterFxMode.value || "none") !== "none");
  const kaleidoOn = isKaleidoFxActive();
  const postFxPenalty = (masterOn ? 0.14 : 0) + (kaleidoOn ? 0.18 : 0);
  const heavy =
    settings.pixelSort * 1.1 +
    settings.byteCorrupt * 1.2 +
    settings.pixelMelt * 0.95 +
    settings.subjectGhost * 1.25 +
    settings.polygonTrack * 1.4 +
    settings.motionTrail * 1.35 +
    settings.animDistort * 1.15 +
    settings.errorComplexity * 1.45 +
    settings.vhsDrift * 0.9 +
    settings.tapeNoise * 0.7 +
    settings.headSwitch * 0.9;
  const heavyNorm = clamp(heavy / 420, 0, 1);
  const stress = clamp(
    (1 - perf) * 0.7 + heavyNorm * 0.75 + clamp((24 - fps) / 10, 0, 1) * 0.9 + postFxPenalty,
    0,
    1
  );
  const scale = 1 - stress * 0.72;
  return clamp(scale, 0.28, 1);
}

function applyKaleidoFractal(imageData, settings, seed) {
  const w = imageData.width;
  const h = imageData.height;
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.hypot(cx, cy);
  const seg = clamp(Math.round(settings.kaleidoSegments), 1, 36);
  const layers = clamp(Math.round(settings.kaleidoLayers), 1, 8);
  const step = (Math.PI * 2) / seg;
  const twist = (settings.kaleidoTwist / 100) * Math.PI;
  const zoom = settings.fractalZoom / 100;
  const pattern = fractalPattern ? fractalPattern.value : "kaleido";
  const layerEcho = settings.layerEcho / 100;
  const pulse = settings.fractalPulse / 100;

  fxCtx.putImageData(imageData, 0, 0);
  fractalCtx.clearRect(0, 0, w, h);

  for (let i = 0; i < seg; i++) {
    fractalCtx.save();
    fractalCtx.translate(cx, cy);
    fractalCtx.rotate(i * step + twist);
    fractalCtx.scale(i % 2 === 0 ? zoom : -zoom, zoom);
    fractalCtx.beginPath();
    fractalCtx.moveTo(0, 0);
    fractalCtx.arc(0, 0, radius, -step / 2, step / 2);
    fractalCtx.closePath();
    fractalCtx.clip();
    fractalCtx.drawImage(fxCanvas, -cx, -cy);
    fractalCtx.restore();
  }

  tileCtx.clearRect(0, 0, w, h);
  for (let oy = -h; oy <= h; oy += h) {
    for (let ox = -w; ox <= w; ox += w) {
      tileCtx.drawImage(fxCanvas, ox, oy, w, h);
    }
  }

  const cols = layers;
  const rows = layers;
  const cellW = w / cols;
  const cellH = h / rows;

  for (let gy = 0; gy < rows; gy++) {
    for (let gx = 0; gx < cols; gx++) {
      const layerI = gy * cols + gx + 1;
      const t = layerI / Math.max(1, cols * rows);
      const localScale = 1 - layerEcho * 0.35 * t;
      const localRot = layerEcho * t * Math.PI * (0.35 + pulse * 0.8);
      const alpha = clamp(1 - t * 0.22 * layerEcho, 0.28, 1);
      tileCtx.save();
      tileCtx.translate((gx + 0.5) * cellW, (gy + 0.5) * cellH);
      tileCtx.rotate(localRot);
      tileCtx.scale((gx % 2 === 0 ? 1 : -1) * localScale, (gy % 2 === 0 ? 1 : -1) * localScale);
      tileCtx.globalAlpha = alpha;
      tileCtx.drawImage(fractalCanvas, -cellW / 2, -cellH / 2, cellW, cellH);
      tileCtx.restore();
    }
  }

  const result = tileCtx.getImageData(0, 0, w, h);
  if (pattern === "spiral" || pattern === "hybrid") {
    applySpiralWarp(result, settings, seed);
  }
  if (pattern === "mandala" || pattern === "hybrid") {
    applyMandalaWarp(result, settings, seed);
  }

  if (settings.fractalPulse > 0 || settings.psychedelic > 0 || settings.colorCycle > 0) {
    applyPsychedelic(result, settings, seed);
  }

  return result;
}

function applySpiralWarp(imageData, settings, seed) {
  const amount = settings.spiralAmount / 100;
  if (amount <= 0) return;
  const turns = Math.max(1, settings.spiralTurns);
  const { width, height, data } = imageData;
  const copy = new Uint8ClampedArray(data);
  const cx = width * 0.5;
  const cy = height * 0.5;
  const maxR = Math.hypot(cx, cy) || 1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const r = Math.hypot(dx, dy) / maxR;
      const baseAngle = Math.atan2(dy, dx);
      const ang = baseAngle + amount * (turns * r * Math.PI * 0.55 + Math.sin(r * 11 + seed * 0.01) * 0.5);
      const sx = clamp(Math.round(cx + Math.cos(ang) * r * maxR), 0, width - 1);
      const sy = clamp(Math.round(cy + Math.sin(ang) * r * maxR), 0, height - 1);
      const src = (sy * width + sx) * 4;
      const dst = (y * width + x) * 4;
      data[dst] = copy[src];
      data[dst + 1] = copy[src + 1];
      data[dst + 2] = copy[src + 2];
    }
  }
}

function applyMandalaWarp(imageData, settings, seed) {
  const bloom = settings.mandalaBloom / 100;
  if (bloom <= 0) return;
  const petals = Math.max(2, settings.mandalaPetals);
  const { width, height, data } = imageData;
  const copy = new Uint8ClampedArray(data);
  const cx = width * 0.5;
  const cy = height * 0.5;
  const maxR = Math.hypot(cx, cy) || 1;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const r = Math.hypot(dx, dy);
      const nr = r / maxR;
      const a = Math.atan2(dy, dx);
      const petalWave = Math.sin(a * petals + seed * 0.01) * bloom * (0.6 + (1 - nr) * 0.8);
      const sampleR = clamp(r * (1 + petalWave * 0.5), 0, maxR);
      const sampleA = a + petalWave * 0.4;
      const sx = clamp(Math.round(cx + Math.cos(sampleA) * sampleR), 0, width - 1);
      const sy = clamp(Math.round(cy + Math.sin(sampleA) * sampleR), 0, height - 1);
      const src = (sy * width + sx) * 4;
      const dst = (y * width + x) * 4;
      data[dst] = copy[src];
      data[dst + 1] = copy[src + 1];
      data[dst + 2] = copy[src + 2];
    }
  }
}

function applyPsychedelic(imageData, settings, seed) {
  const { width, height, data } = imageData;
  const pulse = settings.fractalPulse / 100;
  const psycho = settings.psychedelic / 100;
  const cycle = settings.colorCycle / 360;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const i = (y * width + x) * 4;
      const rNorm = x / width - 0.5;
      const cNorm = y / height - 0.5;
      const angle = Math.atan2(cNorm, rNorm);
      const dist = Math.hypot(rNorm, cNorm);
      const wave = Math.sin(angle * (6 + pulse * 16) + dist * (40 + pulse * 70) + seed * 0.01);
      const hShift = cycle + wave * 0.18 * psycho;
      const sat = 1 + psycho * 1.2;
      const con = 1 + psycho * 0.85;

      const [h, s, l] = rgbToHsl(data[i], data[i + 1], data[i + 2]);
      const [nr, ng, nb] = hslToRgb((h + hShift + 1) % 1, clamp(s * sat, 0, 1), l);
      data[i] = clamp((nr - 128) * con + 128, 0, 255);
      data[i + 1] = clamp((ng - 128) * con + 128, 0, 255);
      data[i + 2] = clamp((nb - 128) * con + 128, 0, 255);
    }
  }
}

function buildDepthMap(imageData, strength) {
  const { width, height, data } = imageData;
  const map = new Float32Array(width * height);
  const w = strength / 100;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      const i = p * 4;
      const lum = (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) / 255;

      const rx = x < width - 1 ? x + 1 : x;
      const dy = y < height - 1 ? y + 1 : y;
      const ri = (y * width + rx) * 4;
      const di = (dy * width + x) * 4;
      const lr = (data[ri] * 0.299 + data[ri + 1] * 0.587 + data[ri + 2] * 0.114) / 255;
      const ld = (data[di] * 0.299 + data[di + 1] * 0.587 + data[di + 2] * 0.114) / 255;

      const edge = clamp((Math.abs(lum - lr) + Math.abs(lum - ld)) * 0.75, 0, 1);
      map[p] = clamp(lum * (0.65 + w * 0.45) + edge * w * 0.8, 0, 1);
    }
  }

  return map;
}

function sampleDepth(depthMap, w, h, x, y) {
  const sx = clamp(Math.round(x), 0, w - 1);
  const sy = clamp(Math.round(y), 0, h - 1);
  return depthMap[sy * w + sx];
}

function getLightDirection(settings) {
  const az = (settings.lightAzimuth * Math.PI) / 180;
  const el = (settings.lightElevation * Math.PI) / 180;
  const x = Math.cos(el) * Math.cos(az);
  const y = Math.sin(el);
  const z = Math.cos(el) * Math.sin(az);
  return normalize3(x, y, z);
}

function applyDepthDisplacement(imageData, depthMap, settings) {
  if (settings.depthShift <= 0) return;
  const { width, height, data } = imageData;
  const copy = new Uint8ClampedArray(data);
  const amt = settings.depthShift;

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const p = y * width + x;
      const d = depthMap[p] - 0.5;
      const dx = Math.round(d * amt * 1.4 + pointerTiltX * amt * 0.65);
      const dy = Math.round(d * amt * 0.8 + pointerTiltY * amt * 0.55);
      const sx = clamp(x + dx, 0, width - 1);
      const sy = clamp(y + dy, 0, height - 1);
      const src = (sy * width + sx) * 4;
      const dst = p * 4;
      data[dst] = copy[src];
      data[dst + 1] = copy[src + 1];
      data[dst + 2] = copy[src + 2];
    }
  }
}

function applyDepthView(imageData, depthMap, amount) {
  if (amount <= 0) return;
  const mix = amount / 100;
  const { data } = imageData;

  for (let p = 0; p < depthMap.length; p++) {
    const i = p * 4;
    const d = depthMap[p] * 255;
    data[i] = data[i] * (1 - mix) + d * mix;
    data[i + 1] = data[i + 1] * (1 - mix) + d * mix;
    data[i + 2] = data[i + 2] * (1 - mix) + d * mix;
  }
}

function rotate3D(x, y, z, rx, ry, rz) {
  let nx = x;
  let ny = y;
  let nz = z;

  const sx = Math.sin(rx);
  const cx = Math.cos(rx);
  const sy = Math.sin(ry);
  const cy = Math.cos(ry);
  const sz = Math.sin(rz);
  const cz = Math.cos(rz);

  let ty = ny * cx - nz * sx;
  let tz = ny * sx + nz * cx;
  ny = ty;
  nz = tz;

  let tx = nx * cy + nz * sy;
  tz = -nx * sy + nz * cy;
  nx = tx;
  nz = tz;

  tx = nx * cz - ny * sz;
  ty = nx * sz + ny * cz;
  nx = tx;
  ny = ty;

  return [nx, ny, nz];
}

function projectPoint3D(x, y, z, w, h, fov, zoom) {
  const p = fov / (fov + z + 0.001);
  return [w * 0.5 + x * p * zoom, h * 0.5 + y * p * zoom, p];
}

function audioEnvelopeGate(level) {
  const x = clamp((level - 0.045) / 0.24, 0, 1);
  return x * x * (3 - 2 * x);
}

function drawSceneBackground(w, h, lightDir, settings, tSec) {
  const rawMode = bgMode ? bgMode.value : "black";
  const mode = rawMode === "gradient" ? "gradient-linear" : rawMode === "neon" ? "animated" : rawMode;
  const palettePresets = {
    custom: null,
    cyber: ["#0b1026", "#30103d"],
    sunset: ["#3a1208", "#ff4f7b"],
    ocean: ["#04131f", "#0a6aa6"],
    toxic: ["#121a05", "#7fff00"],
  };
  const paletteKey = bgPalette ? bgPalette.value : "custom";
  const palette = palettePresets[paletteKey] || palettePresets.custom;
  let cA = hexToRgb(palette ? palette[0] : bgColorA ? bgColorA.value : "#0b1026");
  let cB = hexToRgb(palette ? palette[1] : bgColorB ? bgColorB.value : "#30103d");
  // Keep audio influence on background subtle; prioritize geometry response.
  const bgAudio = Math.max(0, audioLevel - 0.08);
  const motion = (settings.bgMotion / 100) * (0.45 + bgAudio * 0.22);
  const flatMode = settings.flatIllustrated > 45;

  if (bgSyncMode && (mode === "depth" || mode === "mix")) {
    const hueA = ((settings.pointColorShift / 360) + tSec * 0.03) % 1;
    const hueB = ((settings.meshColorShift / 360) + 0.25 + tSec * 0.025) % 1;
    const org = (settings.pointOrganic || 0) / 100;
    const dyn = clamp((settings.pointFloat / 100) * 0.7 + org * 0.7 + (settings.meshMap / 100) * 0.4, 0, 1.6);
    const sat = clamp(0.55 + dyn * 0.22, 0, 1);
    const lA = clamp(0.18 + Math.sin(tSec * (1.2 + dyn * 2.2)) * 0.08 + dyn * 0.06, 0.1, 0.5);
    const lB = clamp(0.2 + Math.cos(tSec * (1.0 + dyn * 1.8) + 1.2) * 0.09 + dyn * 0.05, 0.1, 0.5);
    const rgbA = hslToRgb(hueA, sat, lA);
    const rgbB = hslToRgb(hueB, sat, lB);
    cA = { r: rgbA[0], g: rgbA[1], b: rgbA[2] };
    cB = { r: rgbB[0], g: rgbB[1], b: rgbB[2] };
  }

  if (bgColorTween) {
    const now = performance.now();
    const p = clamp((now - bgColorTween.startedAt) / Math.max(60, bgColorTween.durationMs), 0, 1);
    const ease = p < 0.5 ? 2 * p * p : 1 - Math.pow(-2 * p + 2, 2) / 2;
    cA = {
      r: Math.round(bgColorTween.fromA.r + (bgColorTween.toA.r - bgColorTween.fromA.r) * ease),
      g: Math.round(bgColorTween.fromA.g + (bgColorTween.toA.g - bgColorTween.fromA.g) * ease),
      b: Math.round(bgColorTween.fromA.b + (bgColorTween.toA.b - bgColorTween.fromA.b) * ease),
    };
    cB = {
      r: Math.round(bgColorTween.fromB.r + (bgColorTween.toB.r - bgColorTween.fromB.r) * ease),
      g: Math.round(bgColorTween.fromB.g + (bgColorTween.toB.g - bgColorTween.fromB.g) * ease),
      b: Math.round(bgColorTween.fromB.b + (bgColorTween.toB.b - bgColorTween.fromB.b) * ease),
    };
    if (p >= 1) bgColorTween = null;
  }

  if (mode === "black") {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, w, h);
  } else if (mode === "solid") {
    ctx.fillStyle = `rgb(${cA.r},${cA.g},${cA.b})`;
    ctx.fillRect(0, 0, w, h);
  } else {
    const drift = Math.sin(tSec * (0.6 + motion * 1.8)) * 0.35;
    const lx = w * (0.5 + lightDir[0] * (0.2 + motion * 0.18) + drift * 0.08);
    const ly = h * (0.45 - lightDir[1] * (0.2 + motion * 0.18));
    if (mode === "gradient-linear") {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, `rgb(${cA.r},${cA.g},${cA.b})`);
      grad.addColorStop(1, `rgb(${cB.r},${cB.g},${cB.b})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    } else if (mode === "gradient-radial") {
      const grad = ctx.createRadialGradient(lx, ly, 30, lx, ly, Math.max(w, h) * (0.7 + motion * 0.2));
      grad.addColorStop(0, `rgba(${cA.r},${cA.g},${cA.b},0.9)`);
      grad.addColorStop(0.55, `rgba(${cB.r},${cB.g},${cB.b},0.55)`);
      grad.addColorStop(1, "rgba(0,0,0,0.95)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
    } else if (mode === "animated") {
      const t = tSec * (0.8 + motion * 2.8);
      const mix = 0.5 + Math.sin(t) * 0.5;
      const r1 = Math.round(cA.r * (1 - mix) + cB.r * mix);
      const g1 = Math.round(cA.g * (1 - mix) + cB.g * mix);
      const b1 = Math.round(cA.b * (1 - mix) + cB.b * mix);
      const r2 = Math.round(cB.r * (1 - mix) + cA.r * mix);
      const g2 = Math.round(cB.g * (1 - mix) + cA.g * mix);
      const b2 = Math.round(cB.b * (1 - mix) + cA.b * mix);
      const grad = ctx.createLinearGradient(0, Math.sin(t) * h * 0.18, w, h + Math.cos(t * 0.7) * h * 0.16);
      grad.addColorStop(0, `rgb(${r1},${g1},${b1})`);
      grad.addColorStop(1, `rgb(${r2},${g2},${b2})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      const glow = ctx.createRadialGradient(lx, ly, 24, lx, ly, Math.max(w, h) * 0.5);
      glow.addColorStop(0, `rgba(${cA.r},${cA.g},${cA.b},0.38)`);
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);
    } else if (mode === "grid") {
      const grad = ctx.createLinearGradient(0, 0, w, h);
      grad.addColorStop(0, `rgb(${Math.round(cA.r * 0.7)},${Math.round(cA.g * 0.7)},${Math.round(cA.b * 0.7)})`);
      grad.addColorStop(1, `rgb(${Math.round(cB.r * 0.55)},${Math.round(cB.g * 0.55)},${Math.round(cB.b * 0.55)})`);
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);
      const step = Math.max(16, Math.round(50 - motion * 20));
      const off = (tSec * (18 + motion * 34)) % step;
      ctx.strokeStyle = `rgba(${cA.r},${cA.g},${cA.b},0.2)`;
      ctx.lineWidth = 1;
      for (let x = -step; x < w + step; x += step) {
        ctx.beginPath();
        ctx.moveTo(x + off, 0);
        ctx.lineTo(x + off, h);
        ctx.stroke();
      }
      for (let y = -step; y < h + step; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y + off);
        ctx.lineTo(w, y + off);
        ctx.stroke();
      }
    } else if (mode === "psychedelic-fractal") {
      const dyn = clamp((settings.bgMotion / 100) * 1.2 + bgAudio * 0.3, 0, 2);
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);
      const layers = 5;
      const cx = w * 0.5;
      const cy = h * 0.5;
      const maxR = Math.max(w, h) * 0.72;
      for (let i = 0; i < layers; i++) {
        const p = i / Math.max(1, layers - 1);
        const rot = tSec * (0.16 + dyn * 0.32) * (i % 2 ? 1 : -1);
        const petals = 6 + i * 3;
        const hueA = ((settings.pointColorShift / 360) + p * 0.37 + tSec * 0.03) % 1;
        const hueB = ((settings.meshColorShift / 360) + 0.18 + p * 0.31 - tSec * 0.025) % 1;
        const [rA, gA, bA] = hslToRgb(hueA, 0.82, 0.5);
        const [rB, gB, bB] = hslToRgb(hueB, 0.86, 0.46);
        const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, maxR * (0.35 + p * 0.62));
        grad.addColorStop(0, `rgba(${rA},${gA},${bA},${0.18 + p * 0.12})`);
        grad.addColorStop(1, `rgba(${rB},${gB},${bB},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(rot);
        ctx.strokeStyle = `rgba(${rA},${gA},${bA},${0.2 + p * 0.2})`;
        ctx.lineWidth = 1 + p * 1.3;
        for (let k = 0; k < petals; k++) {
          const a0 = (k / petals) * Math.PI * 2;
          const a1 = ((k + 1) / petals) * Math.PI * 2;
          const r0 = maxR * (0.14 + p * 0.78) * (0.7 + Math.sin(a0 * 3 + tSec * (0.6 + dyn)) * 0.3);
          const r1 = maxR * (0.14 + p * 0.78) * (0.7 + Math.sin(a1 * 3 + tSec * (0.6 + dyn)) * 0.3);
          ctx.beginPath();
          ctx.moveTo(Math.cos(a0) * r0, Math.sin(a0) * r0);
          ctx.lineTo(Math.cos(a1) * r1, Math.sin(a1) * r1);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
  }

  // Keep flat mode cleaner: preserve selected background mode, but skip extra light wash.
  if (!flatMode) {
    const lx = w * (0.5 + lightDir[0] * 0.3);
    const ly = h * (0.42 - lightDir[1] * 0.3);
    const lightLayer = ctx.createRadialGradient(lx, ly, 40, lx, ly, Math.max(w, h) * 0.7);
    lightLayer.addColorStop(0, "rgba(55,76,140,0.45)");
    lightLayer.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = lightLayer;
    ctx.fillRect(0, 0, w, h);
  }
}

function sampleClampNearest(data, w, h, x, y) {
  const xx = clamp(Math.round(x), 0, w - 1);
  const yy = clamp(Math.round(y), 0, h - 1);
  const i = (yy * w + xx) * 4;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
}

function updateStageGeometryMotion(preFxData, bgData) {
  const w = preFxData.width;
  const h = preFxData.height;
  const pd = preFxData.data;
  const bd = bgData.data;
  const step = Math.max(2, Math.floor(Math.min(w, h) / 180));
  let sumX = 0;
  let sumY = 0;
  let count = 0;
  for (let y = 0; y < h; y += step) {
    for (let x = 0; x < w; x += step) {
      const i = (y * w + x) * 4;
      const diff =
        Math.abs(pd[i] - bd[i]) +
        Math.abs(pd[i + 1] - bd[i + 1]) +
        Math.abs(pd[i + 2] - bd[i + 2]);
      if (diff > 16) {
        sumX += x;
        sumY += y;
        count += 1;
      }
    }
  }
  if (count < 8) {
    stageGeomMotionX *= 0.88;
    stageGeomMotionY *= 0.88;
    return;
  }
  const cx = sumX / count;
  const cy = sumY / count;
  if (stageGeomPrevCx !== null && stageGeomPrevCy !== null) {
    const dx = (cx - stageGeomPrevCx) / Math.max(1, w);
    const dy = (cy - stageGeomPrevCy) / Math.max(1, h);
    stageGeomMotionX = stageGeomMotionX * 0.72 + dx * 0.28;
    stageGeomMotionY = stageGeomMotionY * 0.72 + dy * 0.28;
  }
  stageGeomPrevCx = cx;
  stageGeomPrevCy = cy;
}

function apply3dStageFilter(tSec) {
  if (mode !== "depth" && mode !== "mix") return;
  if (!live3dFxMode) return;
  const fxMode = live3dFxMode.value || "none";
  const amount = (live3dFxAmount ? Number(live3dFxAmount.value) : 35) / 100;
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 2 || h <= 2) return;

  if (stageFxCanvas.width !== w || stageFxCanvas.height !== h) {
    stageFxCanvas.width = w;
    stageFxCanvas.height = h;
  }
  if (stagePrevCanvas.width !== w || stagePrevCanvas.height !== h) {
    stagePrevCanvas.width = w;
    stagePrevCanvas.height = h;
    stagePrevCtx.clearRect(0, 0, w, h);
  }

  stageFxCtx.clearRect(0, 0, w, h);
  stageFxCtx.drawImage(canvas, 0, 0, w, h);

  const hasPrev = stagePrevCtx && stagePrevCanvas.width === w && stagePrevCanvas.height === h;
  if (fxMode === "delay" && hasPrev && amount > 0.001) {
    stageFxCtx.save();
    stageFxCtx.globalAlpha = clamp(0.16 + amount * 0.62, 0, 0.82);
    stageFxCtx.drawImage(stagePrevCanvas, 0, 0, w, h);
    stageFxCtx.restore();
  } else if (fxMode === "echo" && hasPrev && amount > 0.001) {
    const mvX = stageGeomMotionX * w;
    const mvY = stageGeomMotionY * h;
    const baseX = 4 + amount * 24;
    const baseY = 3 + amount * 18;
    const copies = 2 + Math.round(amount * 4);
    stageFxCtx.save();
    stageFxCtx.globalCompositeOperation = "screen";
    for (let i = 1; i <= copies; i++) {
      const k = i / copies;
      const dir = i % 2 ? 1 : -1;
      const offX = mvX * (0.8 + k * 1.6) + dir * baseX * k;
      const offY = mvY * (0.8 + k * 1.4) + Math.sin(tSec * 1.7 + i) * baseY * k * 0.35;
      stageFxCtx.globalAlpha = clamp((0.06 + amount * 0.22) * (1 - k * 0.45), 0.04, 0.34);
      stageFxCtx.drawImage(stagePrevCanvas, offX, offY, w, h);
    }
    stageFxCtx.restore();
  } else if (fxMode === "colortrail" && hasPrev && amount > 0.001) {
    const cur = stageFxCtx.getImageData(0, 0, w, h);
    const prev = stagePrevCtx.getImageData(0, 0, w, h);
    const out = stageFxCtx.createImageData(w, h);
    const cd = cur.data;
    const pd = prev.data;
    const od = out.data;
    const shift = Math.max(1, Math.round(4 + amount * 36));
    const shift2 = Math.max(1, Math.round(2 + amount * 20));
    const blend = clamp(0.3 + amount * 0.62, 0.3, 0.92);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const iR = (y * w + clamp(x - shift, 0, w - 1)) * 4;
        const iB = (y * w + clamp(x + shift, 0, w - 1)) * 4;
        const iR2 = (y * w + clamp(x - shift2, 0, w - 1)) * 4;
        const iB2 = (y * w + clamp(x + shift2, 0, w - 1)) * 4;
        od[i] = clamp(cd[i] * (1 - blend) + pd[iR] * blend * 0.7 + pd[iR2] * blend * 0.28, 0, 255);
        od[i + 1] = clamp(cd[i + 1] * (1 - blend * 0.9) + pd[i + 1] * (blend * 0.9), 0, 255);
        od[i + 2] = clamp(cd[i + 2] * (1 - blend) + pd[iB + 2] * blend * 0.7 + pd[iB2 + 2] * blend * 0.28, 0, 255);
        od[i + 3] = 255;
      }
    }
    stageFxCtx.putImageData(out, 0, 0);
    stageFxCtx.save();
    stageFxCtx.globalCompositeOperation = "screen";
    stageFxCtx.globalAlpha = clamp(0.12 + amount * 0.32, 0.12, 0.46);
    stageFxCtx.filter = `blur(${1 + amount * 3.8}px)`;
    stageFxCtx.drawImage(stagePrevCanvas, 0, 0, w, h);
    stageFxCtx.restore();
  } else if (fxMode === "prism" && amount > 0.001) {
    const src = stageFxCtx.getImageData(0, 0, w, h);
    const out = stageFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const amp = 2 + amount * 24;
    const f1 = 0.012 + amount * 0.02;
    const f2 = 0.016 + amount * 0.018;
    for (let y = 0; y < h; y++) {
      const yy = y - h * 0.5;
      for (let x = 0; x < w; x++) {
        const xx = x - w * 0.5;
        const shiftX = Math.sin(yy * f1 + tSec * 1.7) * amp + Math.sin((xx + yy) * f2 + tSec * 2.2) * amp * 0.35;
        const shiftY = Math.cos(xx * f1 + tSec * 1.1) * amp * 0.28;
        const sR = sampleClampNearest(sd, w, h, x - shiftX, y - shiftY);
        const sG = sampleClampNearest(sd, w, h, x + shiftX * 0.15, y);
        const sB = sampleClampNearest(sd, w, h, x + shiftX, y + shiftY);
        const i = (y * w + x) * 4;
        od[i] = sR[0];
        od[i + 1] = sG[1];
        od[i + 2] = sB[2];
        od[i + 3] = 255;
      }
    }
    stageFxCtx.putImageData(out, 0, 0);
  } else if (fxMode === "psychedelic" && amount > 0.001) {
    const src = stageFxCtx.getImageData(0, 0, w, h);
    const out = stageFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const amp = 0.5 + amount * 2.8;
    for (let y = 0; y < h; y++) {
      const yy = y / Math.max(1, h - 1);
      for (let x = 0; x < w; x++) {
        const xx = x / Math.max(1, w - 1);
        const i = (y * w + x) * 4;
        const r = sd[i];
        const g = sd[i + 1];
        const b = sd[i + 2];
        const waveA = 0.5 + 0.5 * Math.sin(tSec * 2.2 + xx * 11.5 + yy * 7.2);
        const waveB = 0.5 + 0.5 * Math.cos(tSec * 1.8 + xx * 9.1 - yy * 8.6);
        od[i] = clamp(r * (0.52 + waveA * amp) + b * 0.28 * waveB, 0, 255);
        od[i + 1] = clamp(g * (0.48 + waveB * amp) + r * 0.22 * waveA, 0, 255);
        od[i + 2] = clamp(b * (0.5 + (1 - waveA) * amp) + g * 0.26 * waveB, 0, 255);
        od[i + 3] = 255;
      }
    }
    stageFxCtx.putImageData(out, 0, 0);
  } else if (fxMode === "kaleido" && amount > 0.001) {
    const src = stageFxCtx.getImageData(0, 0, w, h);
    const out = stageFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const cx = w * 0.5;
    const cy = h * 0.5;
    const sectors = Math.max(4, Math.round(4 + amount * 12));
    const sector = (Math.PI * 2) / sectors;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const dx = x - cx;
        const dy = y - cy;
        const r = Math.hypot(dx, dy);
        let a = Math.atan2(dy, dx) + tSec * (0.08 + amount * 0.24);
        a = ((a % sector) + sector) % sector;
        a = Math.abs(a - sector * 0.5);
        const sx = cx + Math.cos(a) * r;
        const sy = cy + Math.sin(a) * r;
        const s = sampleClampNearest(sd, w, h, sx, sy);
        const i = (y * w + x) * 4;
        od[i] = s[0];
        od[i + 1] = s[1];
        od[i + 2] = s[2];
        od[i + 3] = 255;
      }
    }
    stageFxCtx.putImageData(out, 0, 0);
  } else if (fxMode === "flatfx" && amount > 0.001) {
    const src = stageFxCtx.getImageData(0, 0, w, h);
    const sd = src.data;
    const levels = Math.max(3, Math.round(8 - amount * 5));
    const step = 255 / levels;
    for (let i = 0; i < sd.length; i += 4) {
      const lum = sd[i] * 0.299 + sd[i + 1] * 0.587 + sd[i + 2] * 0.114;
      const q = Math.round(lum / step) * step;
      const sat = clamp(0.65 - amount * 0.42, 0.2, 0.7);
      sd[i] = clamp(q + (sd[i] - q) * sat, 0, 255);
      sd[i + 1] = clamp(q + (sd[i + 1] - q) * sat, 0, 255);
      sd[i + 2] = clamp(q + (sd[i + 2] - q) * sat, 0, 255);
    }
    stageFxCtx.putImageData(src, 0, 0);
  } else if (fxMode === "neon" && amount > 0.001) {
    const src = stageFxCtx.getImageData(0, 0, w, h);
    const out = stageFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const edgeGain = 0.9 + amount * 2.1;
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const i = (y * w + x) * 4;
        const l = (sd[((y * w + (x - 1)) * 4)] + sd[((y * w + (x - 1)) * 4) + 1] + sd[((y * w + (x - 1)) * 4) + 2]) / 3;
        const r = (sd[((y * w + (x + 1)) * 4)] + sd[((y * w + (x + 1)) * 4) + 1] + sd[((y * w + (x + 1)) * 4) + 2]) / 3;
        const u = (sd[(((y - 1) * w + x) * 4)] + sd[(((y - 1) * w + x) * 4) + 1] + sd[(((y - 1) * w + x) * 4) + 2]) / 3;
        const d2 = (sd[(((y + 1) * w + x) * 4)] + sd[(((y + 1) * w + x) * 4) + 1] + sd[(((y + 1) * w + x) * 4) + 2]) / 3;
        const edge = clamp((Math.abs(r - l) + Math.abs(d2 - u)) * edgeGain, 0, 255);
        const base = 0.22;
        od[i] = clamp(sd[i] * base + edge * 0.15, 0, 255);
        od[i + 1] = clamp(sd[i + 1] * base + edge * 0.78, 0, 255);
        od[i + 2] = clamp(sd[i + 2] * base + edge * 1.06, 0, 255);
        od[i + 3] = 255;
      }
    }
    stageFxCtx.putImageData(out, 0, 0);
    stageFxCtx.save();
    stageFxCtx.globalCompositeOperation = "screen";
    stageFxCtx.globalAlpha = clamp(0.18 + amount * 0.44, 0.18, 0.62);
    stageFxCtx.filter = `blur(${1 + amount * 5}px)`;
    stageFxCtx.drawImage(stageFxCanvas, 0, 0, w, h);
    stageFxCtx.restore();
  }

  ctx.drawImage(stageFxCanvas, 0, 0, w, h);
  stagePrevCtx.clearRect(0, 0, w, h);
  stagePrevCtx.drawImage(canvas, 0, 0, w, h);
}

function applyMasterFxGlobal(tSec) {
  if (!masterFxMode || !masterFxAmount) return;
  let fxMode = masterFxMode.value || "none";
  if (![...masterFxMode.options].some((opt) => opt.value === fxMode)) {
    fxMode = "none";
    masterFxMode.value = "none";
  }
  if (fxMode === "bloom") fxMode = "psygrad";
  else if (fxMode === "flatfx") fxMode = "interlace";
  else if (fxMode === "simsecho") fxMode = "neongrad";
  else if (fxMode === "animatrix") fxMode = "pixelart";
  if (masterFxMode.value !== fxMode) {
    masterFxMode.value = fxMode;
    updateMasterFxSummaryStatus();
    updateMasterFxPadDot();
  }
  if (fxMode === "none") {
    if (masterPrevCanvas.width > 0 && masterPrevCanvas.height > 0) {
      masterPrevCtx.clearRect(0, 0, masterPrevCanvas.width, masterPrevCanvas.height);
    }
    return;
  }
  const outW = canvas.width;
  const outH = canvas.height;
  if (outW <= 2 || outH <= 2) return;
  const baseFxScale = getAdaptivePostFxScale();
  const matrixPerfScale = fxMode === "matrix"
    ? (fps < 18 ? 0.62 : fps < 24 ? 0.72 : 0.84)
    : 1;
  const fxScale = clamp(baseFxScale * matrixPerfScale, 0.22, 1);
  const w = Math.max(2, Math.round(outW * fxScale));
  const h = Math.max(2, Math.round(outH * fxScale));
  const amountTarget = clamp(Number(masterFxAmount.value) / 100, 0, 1);
  const speedTarget = clamp(Number(masterFxSpeed ? masterFxSpeed.value : 42) / 100, 0, 1);
  const colorTarget = clamp(Number(masterFxColor ? masterFxColor.value : 52) / 100, 0, 1);
  if (masterFxSmoothMode !== fxMode) {
    masterFxSmoothMode = fxMode;
    masterFxAmountSmooth = amountTarget;
    masterFxSpeedSmooth = speedTarget;
    masterFxColorSmooth = colorTarget;
  } else {
    masterFxAmountSmooth += (amountTarget - masterFxAmountSmooth) * 0.14;
    masterFxSpeedSmooth += (speedTarget - masterFxSpeedSmooth) * 0.14;
    masterFxColorSmooth += (colorTarget - masterFxColorSmooth) * 0.14;
  }
  const amount = clamp(masterFxAmountSmooth, 0, 1);
  const speed = clamp(masterFxSpeedSmooth, 0, 1);
  const colorDrive = clamp(masterFxColorSmooth, 0, 1);
  if (masterFxCanvas.width !== w || masterFxCanvas.height !== h) {
    masterFxCanvas.width = w;
    masterFxCanvas.height = h;
  }
  if (masterPrevCanvas.width !== w || masterPrevCanvas.height !== h) {
    masterPrevCanvas.width = w;
    masterPrevCanvas.height = h;
    masterPrevCtx.clearRect(0, 0, w, h);
  }
  const expensiveMode =
    fxMode === "chromatic" ||
    fxMode === "interlace" ||
    fxMode === "datamosh" ||
    fxMode === "pixelart" ||
    fxMode === "neon" ||
    fxMode === "neongrad" ||
    fxMode === "matrix";
  const perfStress = clamp((24 - fps) / 8, 0, 1);
  let skipEvery = mode === "fractal" ? 1 : perfStress > 0.75 ? 3 : perfStress > 0.35 ? 2 : 1;
  if (mode === "lines") {
    // In lines mode prioritize temporal continuity to avoid visible FX flicker.
    skipEvery = Math.min(skipEvery, 2);
  }
  const canReusePrev = expensiveMode && skipEvery > 1 && !recordingActive;
  if (canReusePrev && postFxFrameCounter % skipEvery !== 0) {
    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";
    // Temporal blend avoids visible flicker when expensive FX are frame-skipped.
    const holdBlend = mode === "lines" ? 0.54 : 0.6;
    ctx.globalAlpha = 1 - holdBlend;
    ctx.drawImage(canvas, 0, 0, w, h, 0, 0, outW, outH);
    ctx.globalAlpha = holdBlend;
    ctx.drawImage(masterPrevCanvas, 0, 0, w, h, 0, 0, outW, outH);
    ctx.restore();
    return;
  }

  masterFxCtx.clearRect(0, 0, w, h);
  masterFxCtx.drawImage(canvas, 0, 0, w, h);

  if (fxMode === "bloom" && amount > 0.001) {
    const passes = 1 + Math.round(amount * 2);
    for (let i = 0; i < passes; i += 1) {
      const k = (i + 1) / passes;
      masterFxCtx.save();
      masterFxCtx.globalCompositeOperation = "screen";
      masterFxCtx.globalAlpha = clamp(0.08 + amount * 0.16 * (1 - k * 0.35), 0.05, 0.34);
      masterFxCtx.filter = `blur(${(1.4 + amount * 12) * k}px) saturate(${1 + amount * 0.32})`;
      masterFxCtx.drawImage(masterFxCanvas, 0, 0, w, h);
      masterFxCtx.restore();
    }
  } else if (fxMode === "chromatic" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const amp = 1 + amount * (3 + Math.min(w, h) * 0.008);
    const wave = Math.sin(tSec * 1.1) * amp;
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const ri = (y * w + clamp(Math.round(x - wave), 0, w - 1)) * 4;
        const bi = (y * w + clamp(Math.round(x + wave), 0, w - 1)) * 4;
        od[i] = sd[ri];
        od[i + 1] = sd[i + 1];
        od[i + 2] = sd[bi + 2];
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
  } else if (fxMode === "interlace" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const shiftAmp = 0.35 + amount * (1.2 + speed * 1.8);
    const phase = tSec * (1.2 + speed * 2.4);
    const colorMix = 0.06 + colorDrive * 0.24;
    const scanDark = 0.03 + amount * 0.1;
    for (let y = 0; y < h; y++) {
      const linePhase = phase + y * 0.072;
      const xShift =
        Math.sin(linePhase) * shiftAmp +
        Math.sin(linePhase * 0.47 + 1.37) * shiftAmp * 0.52 +
        Math.sin(tSec * 0.82 + y * 0.2) * shiftAmp * 0.24;
      const channelShift = 0.32 + amount * (0.9 + colorDrive * 0.9);
      const lineDark = (y & 1) === 0 ? 1 : (1 - scanDark);
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const sR = sampleClampBilinear(sd, w, h, x - xShift - channelShift, y);
        const sG = sampleClampBilinear(sd, w, h, x - xShift * 0.24, y);
        const sB = sampleClampBilinear(sd, w, h, x - xShift + channelShift, y);
        od[i] = clamp(sR[0] * (1 - colorMix * 0.5) + sG[0] * colorMix * 0.25, 0, 255);
        od[i + 1] = clamp(sG[1] * lineDark, 0, 255);
        od[i + 2] = clamp(sB[2] * (1 - colorMix * 0.18) + sG[2] * colorMix * 0.34, 0, 255);
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.06 + amount * 0.22, 0.06, 0.34);
    masterFxCtx.filter = `blur(${0.4 + amount * 1.6}px)`;
    masterFxCtx.drawImage(masterPrevCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "datamosh" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const prev = masterPrevCtx.getImageData(0, 0, w, h);
    const sd = src.data;
    const pd = prev.data;
    const od = out.data;
    const block = Math.max(4, Math.round(4 + amount * 24 + speed * 6));
    const driftBase = 0.8 + amount * (5.6 + speed * 8.4);
    const threshold = clamp(18 - amount * 10, 6, 22);
    const trailMixBase = clamp(0.18 + amount * 0.56, 0.18, 0.84);
    const keepBase = 1 - trailMixBase;
    const t = tSec * (0.6 + speed * 1.8);
    for (let by = 0; by < h; by += block) {
      for (let bx = 0; bx < w; bx += block) {
        const cx = clamp(bx + (block >> 1), 0, w - 1);
        const cy = clamp(by + (block >> 1), 0, h - 1);
        const ci = (cy * w + cx) * 4;
        const lumNow = sd[ci] * 0.299 + sd[ci + 1] * 0.587 + sd[ci + 2] * 0.114;
        const lumPrev = pd[ci] * 0.299 + pd[ci + 1] * 0.587 + pd[ci + 2] * 0.114;
        const motion = Math.abs(lumNow - lumPrev);
        const motionK = clamp((motion - threshold) / (56 + amount * 96), 0, 1);
        const flowA = Math.sin(t + bx * 0.041 + by * 0.023);
        const flowB = Math.cos(t * 0.82 + bx * 0.018 - by * 0.034);
        const dx = Math.round(flowA * driftBase * (0.2 + motionK * 1.2));
        const dy = Math.round(flowB * driftBase * (0.16 + motionK * 0.82));
        const trailMix = clamp(trailMixBase * (0.62 + motionK * 0.9), 0.08, 0.92);
        const keep = clamp(keepBase + (1 - motionK) * 0.16, 0.06, 0.9);
        const yMax = Math.min(h, by + block);
        const xMax = Math.min(w, bx + block);
        for (let y = by; y < yMax; y++) {
          for (let x = bx; x < xMax; x++) {
            const i = (y * w + x) * 4;
            const sPrev = sampleClampBilinear(pd, w, h, x + dx, y + dy);
            const noise = (Math.sin((x * 0.15 + y * 0.11 + t * 5.4)) * 0.5 + 0.5) * (amount * 22);
            od[i] = clamp(sd[i] * keep + sPrev[0] * trailMix + noise * 0.08, 0, 255);
            od[i + 1] = clamp(sd[i + 1] * keep + sPrev[1] * trailMix + noise * 0.05, 0, 255);
            od[i + 2] = clamp(sd[i + 2] * keep + sPrev[2] * trailMix + noise * 0.12, 0, 255);
            od[i + 3] = 255;
          }
        }
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.08 + amount * 0.24, 0.08, 0.36);
    masterFxCtx.filter = `blur(${0.5 + amount * 1.9 + speed * 1.3}px)`;
    masterFxCtx.drawImage(masterPrevCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "pixelart" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const block = Math.max(2, Math.round(2 + amount * 14 + speed * 6));
    const levels = Math.max(3, Math.round(10 - amount * 6 - colorDrive * 2));
    const q = 255 / Math.max(1, levels - 1);
    const t = tSec * (1 + speed * 2.2);
    for (let by = 0; by < h; by += block) {
      for (let bx = 0; bx < w; bx += block) {
        let r = 0;
        let g = 0;
        let b = 0;
        let c = 0;
        const yMax = Math.min(h, by + block);
        const xMax = Math.min(w, bx + block);
        for (let y = by; y < yMax; y++) {
          for (let x = bx; x < xMax; x++) {
            const i = (y * w + x) * 4;
            r += sd[i];
            g += sd[i + 1];
            b += sd[i + 2];
            c += 1;
          }
        }
        if (c < 1) continue;
        const jitter = (Math.sin(t + bx * 0.08 + by * 0.11) * 0.5 + 0.5) * (12 + amount * 44);
        const qr = Math.round(clamp(r / c + jitter * 0.22, 0, 255) / q) * q;
        const qg = Math.round(clamp(g / c + jitter * 0.08, 0, 255) / q) * q;
        const qb = Math.round(clamp(b / c - jitter * 0.18, 0, 255) / q) * q;
        for (let y = by; y < yMax; y++) {
          for (let x = bx; x < xMax; x++) {
            const i = (y * w + x) * 4;
            od[i] = clamp(qr, 0, 255);
            od[i + 1] = clamp(qg, 0, 255);
            od[i + 2] = clamp(qb, 0, 255);
            od[i + 3] = 255;
          }
        }
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "overlay";
    masterFxCtx.globalAlpha = clamp(0.1 + amount * 0.24, 0.1, 0.34);
    const lineStep = Math.max(2, Math.round(block * 0.4));
    masterFxCtx.fillStyle = "rgba(132,228,255,0.18)";
    for (let y = 0; y < h; y += lineStep) masterFxCtx.fillRect(0, y, w, 1);
    masterFxCtx.restore();
  } else if (fxMode === "trail" && amount > 0.001) {
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.2 + amount * 0.62, 0.2, 0.9);
    masterFxCtx.filter = `blur(${1 + amount * 4.4}px)`;
    masterFxCtx.drawImage(masterPrevCanvas, 0, 0, w, h);
    masterFxCtx.restore();
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "lighter";
    masterFxCtx.globalAlpha = clamp(0.1 + amount * 0.3, 0.1, 0.38);
    masterFxCtx.filter = `blur(${amount * 2.2}px)`;
    masterFxCtx.drawImage(masterPrevCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "crt" && amount > 0.001) {
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "multiply";
    masterFxCtx.fillStyle = `rgba(0,0,0,${clamp(0.05 + amount * 0.24, 0.05, 0.28)})`;
    const lineStep = 2;
    for (let y = 0; y < h; y += lineStep) {
      masterFxCtx.fillRect(0, y, w, 1);
    }
    masterFxCtx.restore();
    const vignette = masterFxCtx.createRadialGradient(w * 0.5, h * 0.5, Math.min(w, h) * 0.2, w * 0.5, h * 0.5, Math.max(w, h) * 0.72);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, `rgba(0,0,0,${clamp(0.16 + amount * 0.42, 0.16, 0.54)})`);
    masterFxCtx.fillStyle = vignette;
    masterFxCtx.fillRect(0, 0, w, h);
  } else if (fxMode === "psychedelic" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const amp = 0.55 + amount * (2.2 + speed * 1.4);
    const t = tSec * (1 + speed * 1.8);
    for (let y = 0; y < h; y++) {
      const yy = y / Math.max(1, h - 1);
      for (let x = 0; x < w; x++) {
        const xx = x / Math.max(1, w - 1);
        const i = (y * w + x) * 4;
        const waveA = 0.5 + 0.5 * Math.sin(t * 1.9 + xx * 12.7 + yy * 8.4);
        const waveB = 0.5 + 0.5 * Math.cos(t * 2.3 + xx * 7.5 - yy * 10.2);
        const colorMix = 0.08 + colorDrive * 0.34;
        od[i] = clamp(sd[i] * (0.56 + waveA * amp) + sd[i + 2] * (0.12 + waveB * colorMix), 0, 255);
        od[i + 1] = clamp(sd[i + 1] * (0.5 + waveB * amp) + sd[i] * (0.08 + waveA * colorMix), 0, 255);
        od[i + 2] = clamp(sd[i + 2] * (0.52 + (1 - waveA) * amp) + sd[i + 1] * (0.1 + waveB * colorMix), 0, 255);
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.16 + amount * 0.4, 0.16, 0.62);
    masterFxCtx.filter = `blur(${1 + amount * 3 + speed * 2.2}px)`;
    masterFxCtx.drawImage(masterPrevCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "psygrad" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const t = tSec * (0.64 + speed * 0.9);
    const hA = fract01(0.62 + colorDrive * 0.22 + Math.sin(tSec * 0.24) * 0.08);
    const hB = fract01(hA + 0.28 + Math.sin(tSec * 0.3) * 0.11);
    const cA = hslToRgb(hA, 0.9, 0.58);
    const cB = hslToRgb(hB, 0.88, 0.54);
    const gradMix = clamp(0.16 + amount * 0.44, 0.16, 0.68);
    const amp = 0.42 + amount * (1.35 + speed * 0.7);
    for (let y = 0; y < h; y++) {
      const v = y / Math.max(1, h - 1);
      for (let x = 0; x < w; x++) {
        const u = x / Math.max(1, w - 1);
        const i = (y * w + x) * 4;
        const g1 = 0.5 + 0.5 * Math.sin((u - v) * (7 + amount * 10) + t * 1.2);
        const g2 = 0.5 + 0.5 * Math.cos((u * 1.4 + v * 1.1) * (6 + amount * 8) - t * 1.05);
        const g = clamp(g1 * 0.65 + g2 * 0.35, 0, 1);
        const gr = cA[0] * (1 - g) + cB[0] * g;
        const gg = cA[1] * (1 - g) + cB[1] * g;
        const gb = cA[2] * (1 - g) + cB[2] * g;
        const waveA = 0.5 + 0.5 * Math.sin(t * 1.2 + u * 9.8 + v * 6.7);
        const waveB = 0.5 + 0.5 * Math.cos(t * 1.35 + u * 6.1 - v * 8.4);
        const lum = (sd[i] * 0.299 + sd[i + 1] * 0.587 + sd[i + 2] * 0.114) / 255;
        const il = (y * w + Math.max(0, x - 1)) * 4;
        const ir = (y * w + Math.min(w - 1, x + 1)) * 4;
        const iu = (Math.max(0, y - 1) * w + x) * 4;
        const id = (Math.min(h - 1, y + 1) * w + x) * 4;
        const lLum = (sd[il] * 0.299 + sd[il + 1] * 0.587 + sd[il + 2] * 0.114) / 255;
        const rLum = (sd[ir] * 0.299 + sd[ir + 1] * 0.587 + sd[ir + 2] * 0.114) / 255;
        const uLum = (sd[iu] * 0.299 + sd[iu + 1] * 0.587 + sd[iu + 2] * 0.114) / 255;
        const dLum = (sd[id] * 0.299 + sd[id + 1] * 0.587 + sd[id + 2] * 0.114) / 255;
        const contrast = Math.abs(lum - (lLum + rLum + uLum + dLum) * 0.25);
        const sat = Math.max(sd[i], sd[i + 1], sd[i + 2]) - Math.min(sd[i], sd[i + 1], sd[i + 2]);
        const satN = sat / 255;
        const detailMask = clamp(Math.pow(lum, 0.95) * 0.52 + satN * 0.46 + contrast * 1.05 - 0.22, 0, 1);
        const tint = gradMix * (0.55 + waveA * 0.45) * detailMask;
        od[i] = clamp(sd[i] * (1 - tint) + gr * tint + sd[i + 2] * (0.02 + waveB * 0.03) * detailMask + sd[i] * waveA * amp * 0.08, 0, 255);
        od[i + 1] = clamp(sd[i + 1] * (1 - tint) + gg * tint + sd[i] * (0.02 + waveA * 0.03) * detailMask + sd[i + 1] * waveB * amp * 0.08, 0, 255);
        od[i + 2] = clamp(sd[i + 2] * (1 - tint) + gb * tint + sd[i + 1] * (0.02 + waveB * 0.03) * detailMask + sd[i + 2] * (1 - waveA) * amp * 0.08, 0, 255);
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.06 + amount * 0.12, 0.06, 0.2);
    masterFxCtx.filter = `blur(${0.8 + amount * 1.8 + speed * 1.2}px)`;
    masterFxCtx.drawImage(masterFxCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "luminous" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const t = tSec * (0.62 + speed * 0.86);
    const amp = 0.44 + amount * (1.22 + speed * 0.62);
    const mixAmt = clamp(0.16 + amount * 0.42, 0.16, 0.62);
    for (let y = 0; y < h; y++) {
      const v = y / Math.max(1, h - 1);
      for (let x = 0; x < w; x++) {
        const u = x / Math.max(1, w - 1);
        const i = (y * w + x) * 4;
        const px = (u - 0.5) * 2;
        const py = (v - 0.5) * 2;
        const rr = Math.hypot(px, py);
        const ang = Math.atan2(py, px);
        const warp = Math.sin(ang * 5 + t * 1.75) * (0.1 + amount * 0.24) + Math.cos(rr * 8 - t * 1.25) * (0.08 + amount * 0.18);
        // Avoid angular seam (-PI/PI) by using periodic sin/cos terms instead of raw angle.
        const hue = fract01(0.62 + colorDrive * 0.24 + rr * 0.22 + Math.sin(ang) * 0.045 + Math.cos(ang * 1.3) * 0.03 + warp);
        const satTone = clamp(0.72 + amount * 0.2, 0, 1);
        const lit = clamp(0.5 + (0.5 - rr) * 0.26 + warp * 0.18, 0.16, 0.9);
        const [pr, pg, pb] = hslToRgb(hue, satTone, lit);
        const waveA = 0.5 + 0.5 * Math.sin(t * 1.24 + u * 8.8 + v * 6.3);
        const waveB = 0.5 + 0.5 * Math.cos(t * 1.4 + u * 5.4 - v * 7.2);
        const flow = 0.5 + 0.5 * Math.sin(t * 1.35 + rr * 6.4 - ang * 1.6);
        const lum = (sd[i] * 0.299 + sd[i + 1] * 0.587 + sd[i + 2] * 0.114) / 255;
        const il = (y * w + Math.max(0, x - 1)) * 4;
        const ir = (y * w + Math.min(w - 1, x + 1)) * 4;
        const iu = (Math.max(0, y - 1) * w + x) * 4;
        const id = (Math.min(h - 1, y + 1) * w + x) * 4;
        const lLum = (sd[il] * 0.299 + sd[il + 1] * 0.587 + sd[il + 2] * 0.114) / 255;
        const rLum = (sd[ir] * 0.299 + sd[ir + 1] * 0.587 + sd[ir + 2] * 0.114) / 255;
        const uLum = (sd[iu] * 0.299 + sd[iu + 1] * 0.587 + sd[iu + 2] * 0.114) / 255;
        const dLum = (sd[id] * 0.299 + sd[id + 1] * 0.587 + sd[id + 2] * 0.114) / 255;
        const contrast = Math.abs(lum - (lLum + rLum + uLum + dLum) * 0.25);
        const satSpread = Math.max(sd[i], sd[i + 1], sd[i + 2]) - Math.min(sd[i], sd[i + 1], sd[i + 2]);
        const satN = satSpread / 255;
        const detailMask = clamp(Math.pow(lum, 0.92) * 0.5 + satN * 0.44 + contrast * 1.02 - 0.2, 0, 1);
        const k = mixAmt * (0.48 + flow * 0.52) * detailMask;
        od[i] = clamp(sd[i] * (1 - k) + pr * k + sd[i] * waveA * amp * 0.08 + sd[i + 2] * (0.02 + waveB * 0.02) * detailMask, 0, 255);
        od[i + 1] = clamp(sd[i + 1] * (1 - k) + pg * k + sd[i + 1] * waveB * amp * 0.08 + sd[i] * (0.02 + waveA * 0.02) * detailMask, 0, 255);
        od[i + 2] = clamp(sd[i + 2] * (1 - k) + pb * k + sd[i + 2] * (1 - waveA) * amp * 0.08 + sd[i + 1] * (0.02 + waveB * 0.02) * detailMask, 0, 255);
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.05 + amount * 0.14, 0.05, 0.22);
    masterFxCtx.filter = `blur(${0.7 + amount * 1.9 + speed * 1.2}px)`;
    masterFxCtx.drawImage(masterFxCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "visionpass" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    od.set(sd);
    const t = tSec * (0.28 + speed * 0.46);
    const edgeGain = 0.95 + amount * (1.9 + speed * 0.6);
    for (let y = 1; y < h - 1; y++) {
      const v = y / Math.max(1, h - 1);
      for (let x = 1; x < w - 1; x++) {
        const u = x / Math.max(1, w - 1);
        const i = (y * w + x) * 4;
        const l = (sd[(y * w + (x - 1)) * 4] + sd[(y * w + (x - 1)) * 4 + 1] + sd[(y * w + (x - 1)) * 4 + 2]) / 3;
        const r = (sd[(y * w + (x + 1)) * 4] + sd[(y * w + (x + 1)) * 4 + 1] + sd[(y * w + (x + 1)) * 4 + 2]) / 3;
        const u1 = (sd[((y - 1) * w + x) * 4] + sd[((y - 1) * w + x) * 4 + 1] + sd[((y - 1) * w + x) * 4 + 2]) / 3;
        const d1 = (sd[((y + 1) * w + x) * 4] + sd[((y + 1) * w + x) * 4 + 1] + sd[((y + 1) * w + x) * 4 + 2]) / 3;
        const lum = (sd[i] + sd[i + 1] + sd[i + 2]) / 3;
        const avg = (l + r + u1 + d1) * 0.25;
        const hp = clamp(Math.abs(lum - avg) * edgeGain, 0, 255) / 255;
        const px = (u - 0.5) * 2;
        const py = (v - 0.5) * 2;
        const rr = Math.hypot(px, py);
        const ang = Math.atan2(py, px);
        const wave = 0.5 + 0.5 * Math.sin(t * 1.1 + rr * (7 + amount * 5) - ang * 1.6);
        const hue = fract01(0.63 + colorDrive * 0.2 + rr * 0.16 + Math.sin(ang * 1.5 + t * 0.35) * 0.03);
        const [vr, vg, vb] = hslToRgb(hue, 0.92, 0.58);
        const hpSoft = hp * hp * (3 - 2 * hp);
        const k = clamp(hpSoft * (0.62 + wave * 0.38) * (0.58 + amount * 0.76), 0, 0.82);
        const baseKeep = 1 - clamp(0.12 + amount * 0.18, 0.12, 0.3);
        od[i] = clamp(sd[i] * baseKeep + vr * k * 0.95, 0, 255);
        od[i + 1] = clamp(sd[i + 1] * baseKeep + vg * k * 1.05, 0, 255);
        od[i + 2] = clamp(sd[i + 2] * baseKeep + vb * k * 1.12, 0, 255);
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.06 + amount * 0.16, 0.06, 0.22);
    masterFxCtx.filter = `blur(${0.55 + amount * 1.3 + speed * 0.6}px)`;
    masterFxCtx.drawImage(masterFxCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "flatfx" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const sd = src.data;
    const levels = Math.max(3, Math.round(9 - amount * 6));
    const step = 255 / levels;
    for (let i = 0; i < sd.length; i += 4) {
      const lum = sd[i] * 0.299 + sd[i + 1] * 0.587 + sd[i + 2] * 0.114;
      const q = Math.round(lum / step) * step;
      const sat = clamp(0.68 - amount * 0.44, 0.18, 0.68);
      sd[i] = clamp(q + (sd[i] - q) * sat, 0, 255);
      sd[i + 1] = clamp(q + (sd[i + 1] - q) * sat, 0, 255);
      sd[i + 2] = clamp(q + (sd[i + 2] - q) * sat, 0, 255);
    }
    masterFxCtx.putImageData(src, 0, 0);
  } else if (fxMode === "neon" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const edgeGain = 1 + amount * 2.6 + speed * 1.3;
    const neonHue = (0.45 + colorDrive * 0.35 + Math.sin(tSec * (0.5 + speed * 1.2)) * 0.06 + 1) % 1;
    const [nhR, nhG, nhB] = hslToRgb(neonHue, 0.92, 0.58);
    for (let y = 1; y < h - 1; y++) {
      for (let x = 1; x < w - 1; x++) {
        const i = (y * w + x) * 4;
        const l = (sd[((y * w + (x - 1)) * 4)] + sd[((y * w + (x - 1)) * 4) + 1] + sd[((y * w + (x - 1)) * 4) + 2]) / 3;
        const r = (sd[((y * w + (x + 1)) * 4)] + sd[((y * w + (x + 1)) * 4) + 1] + sd[((y * w + (x + 1)) * 4) + 2]) / 3;
        const u = (sd[(((y - 1) * w + x) * 4)] + sd[(((y - 1) * w + x) * 4) + 1] + sd[(((y - 1) * w + x) * 4) + 2]) / 3;
        const d2 = (sd[(((y + 1) * w + x) * 4)] + sd[(((y + 1) * w + x) * 4) + 1] + sd[(((y + 1) * w + x) * 4) + 2]) / 3;
        const edge = clamp((Math.abs(r - l) + Math.abs(d2 - u)) * edgeGain, 0, 255);
        const glow = edge / 255;
        od[i] = clamp(sd[i] * 0.18 + nhR * glow * (0.5 + amount * 0.9), 0, 255);
        od[i + 1] = clamp(sd[i + 1] * 0.18 + nhG * glow * (0.7 + amount * 1.1), 0, 255);
        od[i + 2] = clamp(sd[i + 2] * 0.18 + nhB * glow * (0.8 + amount * 1.25), 0, 255);
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.22 + amount * 0.46, 0.22, 0.74);
    masterFxCtx.filter = `blur(${1 + amount * 6.4 + speed * 3.2}px)`;
    masterFxCtx.drawImage(masterFxCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "neongrad" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const edgeGain = 1 + amount * 2.4 + speed * 1.2;
    const t = tSec * (0.55 + speed * 1.1);
    for (let y = 1; y < h - 1; y++) {
      const v = y / Math.max(1, h - 1);
      for (let x = 1; x < w - 1; x++) {
        const u = x / Math.max(1, w - 1);
        const i = (y * w + x) * 4;
        const l = (sd[((y * w + (x - 1)) * 4)] + sd[((y * w + (x - 1)) * 4) + 1] + sd[((y * w + (x - 1)) * 4) + 2]) / 3;
        const r = (sd[((y * w + (x + 1)) * 4)] + sd[((y * w + (x + 1)) * 4) + 1] + sd[((y * w + (x + 1)) * 4) + 2]) / 3;
        const u1 = (sd[(((y - 1) * w + x) * 4)] + sd[(((y - 1) * w + x) * 4) + 1] + sd[(((y - 1) * w + x) * 4) + 2]) / 3;
        const d1 = (sd[(((y + 1) * w + x) * 4)] + sd[(((y + 1) * w + x) * 4) + 1] + sd[(((y + 1) * w + x) * 4) + 2]) / 3;
        const edge = clamp((Math.abs(r - l) + Math.abs(d1 - u1)) * edgeGain, 0, 255);
        const edgeK = edge / 255;
        const gh = fract01(0.05 + colorDrive * 0.72 + u * 0.34 - v * 0.24 + Math.sin(t + (u + v) * 2.4) * 0.08);
        const [gr, gg, gb] = hslToRgb(gh, 0.94, 0.58);
        od[i] = clamp(sd[i] * 0.14 + gr * edgeK * (0.6 + amount * 1.1), 0, 255);
        od[i + 1] = clamp(sd[i + 1] * 0.14 + gg * edgeK * (0.7 + amount * 1.2), 0, 255);
        od[i + 2] = clamp(sd[i + 2] * 0.14 + gb * edgeK * (0.78 + amount * 1.3), 0, 255);
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.24 + amount * 0.44, 0.24, 0.76);
    masterFxCtx.filter = `blur(${1.2 + amount * 6 + speed * 2.8}px)`;
    masterFxCtx.drawImage(masterFxCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  } else if (fxMode === "matrix" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const prev = masterPrevCtx.getImageData(0, 0, w, h);
    const sd = src.data;
    const od = out.data;
    const pd = prev.data;
    const audioDrive = hasAudioReactiveInput()
      ? clamp(audioFeatures.rms * 0.95 + audioFeatures.transient * 0.52 + (audioFeatures.bands[1] || 0) * 0.42, 0, 1.8)
      : 0;
    const trailPx = Math.max(1, Math.round(1 + amount * 6 + speed * 4 + audioDrive * 2.2));
    const tintMix = clamp(0.42 + amount * 0.42, 0.32, 0.88);
    const glowMix = clamp(0.14 + amount * 0.34 + colorDrive * 0.18 + audioDrive * 0.08, 0.14, 0.8);
    const jitterAmp = amount * (0.2 + speed * 0.34);
    const block = fps < 18 || amount > 0.66 ? 3 : fps < 26 || amount > 0.42 ? 2 : 1;
    for (let y = 0; y < h; y += block) {
      const v = y / Math.max(1, h - 1);
      const rainLine = 0.5 + 0.5 * Math.sin(tSec * (1.6 + speed * 2.4 + audioDrive * 0.8) + y * 0.065);
      for (let x = 0; x < w; x += block) {
        const u = x / Math.max(1, w - 1);
        const i = (y * w + x) * 4;
        const lum = (sd[i] * 0.299 + sd[i + 1] * 0.587 + sd[i + 2] * 0.114) / 255;
        const trailY = clamp(y - trailPx, 0, h - 1);
        const pi = (trailY * w + x) * 4;
        const prevLum = (pd[pi] * 0.299 + pd[pi + 1] * 0.587 + pd[pi + 2] * 0.114) / 255;
        const xl = Math.max(0, x - 1);
        const xr = Math.min(w - 1, x + 1);
        const yu = Math.max(0, y - 1);
        const yd = Math.min(h - 1, y + 1);
        const il = (y * w + xl) * 4;
        const ir = (y * w + xr) * 4;
        const iu = (yu * w + x) * 4;
        const id = (yd * w + x) * 4;
        const edgeL = (sd[il] * 0.299 + sd[il + 1] * 0.587 + sd[il + 2] * 0.114) / 255;
        const edgeR = (sd[ir] * 0.299 + sd[ir + 1] * 0.587 + sd[ir + 2] * 0.114) / 255;
        const edgeU = (sd[iu] * 0.299 + sd[iu + 1] * 0.587 + sd[iu + 2] * 0.114) / 255;
        const edgeD = (sd[id] * 0.299 + sd[id + 1] * 0.587 + sd[id + 2] * 0.114) / 255;
        const edge = clamp(Math.abs(edgeR - edgeL) * 0.68 + Math.abs(edgeD - edgeU) * 1.12, 0, 1);
        const colPhase = tSec * (0.5 + speed * 0.8) + u * 7.4 - v * 5.8;
        const rainMask = clamp(rainLine * 0.5 + (0.5 + 0.5 * Math.sin(colPhase)) * 0.5, 0, 1);
        const signal = clamp(lum * 0.64 + prevLum * 0.24 + edge * 0.52 + rainMask * 0.14, 0, 1);
        const jitter = Math.sin(tSec * 8.2 + y * 0.08 + x * 0.05) * jitterAmp;
        const base = clamp(signal + jitter * 0.03 + audioDrive * 0.06, 0, 1);
        const g = clamp(base * (110 + tintMix * 130 + audioDrive * 20), 0, 255);
        const r = clamp(base * (8 + tintMix * 28) + edge * 30, 0, 255);
        const b = clamp(base * (10 + tintMix * 34) + rainMask * (18 + audioDrive * 6), 0, 255);
        const yMax = Math.min(h, y + block);
        const xMax = Math.min(w, x + block);
        for (let yy = y; yy < yMax; yy++) {
          for (let xx = x; xx < xMax; xx++) {
            const oi = (yy * w + xx) * 4;
            od[oi] = r;
            od[oi + 1] = g;
            od[oi + 2] = b;
            od[oi + 3] = 255;
          }
        }
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "source-over";
    masterFxCtx.globalAlpha = clamp(0.08 + amount * 0.22, 0.08, 0.32);
    masterFxCtx.drawImage(masterPrevCanvas, 0, 0, w, h);
    masterFxCtx.restore();
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.14 + glowMix * 0.52, 0.14, 0.72);
    masterFxCtx.filter = `blur(${0.8 + amount * 4.6 + speed * 2.4}px)`;
    masterFxCtx.drawImage(masterFxCanvas, 0, 0, w, h);
    masterFxCtx.restore();
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "source-over";
    masterFxCtx.globalAlpha = clamp(0.07 + amount * 0.22 + audioDrive * 0.03, 0.07, 0.38);
    masterFxCtx.fillStyle = "rgba(18,255,114,0.32)";
    const scanStep = Math.max(2, Math.round(2 + (1 - speed) * 3));
    for (let y = 0; y < h; y += scanStep) masterFxCtx.fillRect(0, y, w, 1);
    masterFxCtx.restore();
  } else if (fxMode === "simsecho" && amount > 0.001) {
    const src = masterFxCtx.getImageData(0, 0, w, h);
    const out = masterFxCtx.createImageData(w, h);
    const sd = src.data;
    const od = out.data;
    const prev = masterPrevCtx.getImageData(0, 0, w, h);
    const pd = prev.data;
    const echoMix = clamp(0.12 + amount * 0.62, 0.12, 0.82);
    const drift = 1 + amount * (4 + speed * 6);
    const hue = (0.52 + colorDrive * 0.33 + Math.sin(tSec * (0.4 + speed * 1.6)) * 0.08 + 1) % 1;
    const [tR, tG, tB] = hslToRgb(hue, 0.9, 0.58);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const i = (y * w + x) * 4;
        const offX = Math.round(Math.sin(tSec * (0.9 + speed * 1.7) + y * 0.024) * drift);
        const offY = Math.round(Math.cos(tSec * (0.7 + speed * 1.3) + x * 0.02) * drift * 0.55);
        const pi = (clamp(y + offY, 0, h - 1) * w + clamp(x + offX, 0, w - 1)) * 4;
        const pr = pd[pi];
        const pg = pd[pi + 1];
        const pb = pd[pi + 2];
        const rr = clamp(sd[i] * (1 - echoMix) + pr * echoMix * 0.72 + tR * echoMix * 0.22, 0, 255);
        const rg = clamp(sd[i + 1] * (1 - echoMix) + pg * echoMix * 0.72 + tG * echoMix * 0.22, 0, 255);
        const rb = clamp(sd[i + 2] * (1 - echoMix) + pb * echoMix * 0.72 + tB * echoMix * 0.22, 0, 255);
        od[i] = rr;
        od[i + 1] = rg;
        od[i + 2] = rb;
        od[i + 3] = 255;
      }
    }
    masterFxCtx.putImageData(out, 0, 0);
    masterFxCtx.save();
    masterFxCtx.globalCompositeOperation = "screen";
    masterFxCtx.globalAlpha = clamp(0.08 + amount * 0.28, 0.08, 0.42);
    masterFxCtx.filter = `blur(${0.6 + amount * 2.8}px)`;
    masterFxCtx.drawImage(masterPrevCanvas, 0, 0, w, h);
    masterFxCtx.restore();
  }

  if (mode === "lines") {
    // Keep Lines background matte-black even with aggressive FX color drift.
    const matteCut = clamp(
      10 +
        amount * 22 +
        ((fxMode === "neon" || fxMode === "neongrad" || fxMode === "matrix" || fxMode === "psygrad" || fxMode === "psychedelic") ? 6 : 0),
      8,
      40
    );
    const matteSoft = 24;
    const frame = masterFxCtx.getImageData(0, 0, w, h);
    const d = frame.data;
    for (let i = 0; i < d.length; i += 4) {
      const r = d[i];
      const g = d[i + 1];
      const b = d[i + 2];
      const m = Math.max(r, g, b);
      if (m <= matteCut) {
        d[i] = 0;
        d[i + 1] = 0;
        d[i + 2] = 0;
        continue;
      }
      if (m < matteCut + matteSoft) {
        const k = (m - matteCut) / matteSoft;
        d[i] = Math.round(r * k);
        d[i + 1] = Math.round(g * k);
        d[i + 2] = Math.round(b * k);
      }
    }
    masterFxCtx.putImageData(frame, 0, 0);
  }

  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(masterFxCanvas, 0, 0, w, h, 0, 0, outW, outH);
  ctx.restore();
  masterPrevCtx.clearRect(0, 0, w, h);
  masterPrevCtx.drawImage(masterFxCanvas, 0, 0, w, h);
}

function isKaleidoFxActive() {
  return Boolean(kaleidoFxEnabled && kaleidoFxEnabled.checked && kaleidoFxAmount && Number(kaleidoFxAmount.value) > 0);
}

function applyKaleidoFxGlobal(tSec) {
  if (!isKaleidoFxActive()) {
    if (kaleidoPrevCanvas.width > 0 && kaleidoPrevCanvas.height > 0) {
      kaleidoPrevCtx.clearRect(0, 0, kaleidoPrevCanvas.width, kaleidoPrevCanvas.height);
    }
    kaleidoFxScaleSmooth = 0.66;
    return;
  }
  const outW = canvas.width;
  const outH = canvas.height;
  if (outW <= 2 || outH <= 2) return;
  const amount = clamp(Number(kaleidoFxAmount ? kaleidoFxAmount.value : 38) / 100, 0, 1);
  const speed = clamp(Number(kaleidoFxSpeed ? kaleidoFxSpeed.value : 35) / 100, 0, 1);
  const smooth = clamp(Number(kaleidoFxSmooth ? kaleidoFxSmooth.value : 44) / 100, 0, 1);
  const zoomSlider = clamp(Number(kaleidoFxZoom ? kaleidoFxZoom.value : 200), 150, 320);
  // Keep 200 as neutral full-canvas point, with soft tunnel in/out around it.
  const zoom = clamp(Math.pow(2, (zoomSlider - 200) / 120), 0.72, 2.8);
  const is3dLive = mode === "depth" || mode === "mix";
  const realtimeInput = webcamActive || isAudioPlaybackActive();
  const lowPerf = fps < 24;
  const veryLowPerf = fps < 18;
  const criticalPerf = fps < 14;
  const dynamicFastMode = lowPerf && (amount > 0.24 || smooth > 0.2 || realtimeInput);
  const frameSkip = criticalPerf ? 3 : veryLowPerf ? 2 : 1;
  if (frameSkip > 1 && !recordingActive && kaleidoPrevCanvas.width > 1 && kaleidoPrevCanvas.height > 1) {
    if (postFxFrameCounter % frameSkip !== 0) {
      ctx.save();
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(kaleidoPrevCanvas, 0, 0, kaleidoPrevCanvas.width, kaleidoPrevCanvas.height, 0, 0, outW, outH);
      ctx.restore();
      return;
    }
  }
  const segCap = 12;
  const segBase = clamp(Number(kaleidoFxSegments ? kaleidoFxSegments.value : 10), 4, segCap);
  const segPerfCap = criticalPerf ? 8 : veryLowPerf ? 10 : lowPerf ? 12 : segCap;
  const qualityLoad = clamp(0.52 + (segBase / 12) * 0.32 + smooth * 0.2, 0.52, 1);
  const perfStress = clamp((24 - fps) / 8, 0, 1);
  const portrait = outH > outW;
  const baseScaleFactor = portrait ? 0.98 : is3dLive ? 0.96 : 0.84;
  const realtimeScaleCut = dynamicFastMode ? (portrait ? 0.88 : is3dLive ? 0.86 : 0.8) : 1;
  const stressCut = portrait ? 0.1 : is3dLive ? 0.07 : 0.18;
  const minScale = portrait ? 0.34 : is3dLive ? 0.54 : 0.22;
  const maxScale = portrait ? 0.94 : is3dLive ? 0.98 : 0.86;
  const qualityBoost = is3dLive ? 1.08 : 1;
  const targetFxScale = clamp(
    getAdaptivePostFxScale() * baseScaleFactor * realtimeScaleCut * qualityBoost / qualityLoad * (1 - perfStress * stressCut),
    minScale,
    maxScale
  );
  kaleidoFxScaleSmooth += (targetFxScale - kaleidoFxScaleSmooth) * 0.08;
  const fxScale = clamp(kaleidoFxScaleSmooth, minScale, maxScale);
  const w = Math.max(2, Math.round(outW * fxScale));
  const h = Math.max(2, Math.round(outH * fxScale));
  kaleidoSegSmooth += (segBase - kaleidoSegSmooth) * 0.06;
  const seg = Math.max(4, Math.round(Math.min(dynamicFastMode ? Math.min(kaleidoSegSmooth, 12) : kaleidoSegSmooth, segPerfCap)));
  const selectedType = kaleidoFxType ? kaleidoFxType.value : KALEIDO_DEFAULT_TYPE;
  const baseType = KALEIDO_TYPES.includes(selectedType) ? selectedType : KALEIDO_DEFAULT_TYPE;
  const seamSoftBase = baseType === "tunnel" || baseType === "radial" || baseType === "mirror" ? 0.74 : 0.48;
  const seamSoft = clamp(seamSoftBase + smooth * 0.28 - (criticalPerf ? 0.2 : lowPerf ? 0.1 : 0), 0.22, 1);
  const morphBlend = clamp(kaleidoMorphTween ? Number(kaleidoMorphTween.typeBlend || 0) : 0, 0, 1);
  const morphFromType = kaleidoMorphTween && kaleidoMorphTween.fromType ? kaleidoMorphTween.fromType : baseType;
  const morphToType = kaleidoMorphTween && kaleidoMorphTween.toType ? kaleidoMorphTween.toType : baseType;

  if (kaleidoFxCanvas.width !== w || kaleidoFxCanvas.height !== h) {
    kaleidoFxCanvas.width = w;
    kaleidoFxCanvas.height = h;
  }
  if (kaleidoPrevCanvas.width !== w || kaleidoPrevCanvas.height !== h) {
    kaleidoPrevCanvas.width = w;
    kaleidoPrevCanvas.height = h;
    kaleidoPrevCtx.clearRect(0, 0, w, h);
  }

  // GPU route for Kaleidoscope when 3D engine is on GPU Beta.
  if (depthRenderEngine === "gpu" && depthGpuAvailable) {
    const okGpu = applyKaleidoFxGlobalGpu(tSec, {
      w,
      h,
      outW,
      outH,
      amount,
      speed,
      smooth,
      seg,
      selectedType: baseType,
      seamSoft,
      zoom,
    });
    if (okGpu) return;
  }

  kaleidoFxCtx.clearRect(0, 0, w, h);
  kaleidoFxCtx.drawImage(canvas, 0, 0, w, h);
  const src = kaleidoFxCtx.getImageData(0, 0, w, h);
  const out = kaleidoFxCtx.createImageData(w, h);
  const sd = src.data;
  const od = out.data;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const invCx = 1 / Math.max(cx, 1);
  const invCy = 1 / Math.max(cy, 1);
  const aspectNorm = w / Math.max(h, 1);
  const sector = (Math.PI * 2) / seg;
  const spin = tSec * (0.06 + speed * 0.42);
  const maxRNorm = Math.max(1e-4, Math.hypot(aspectNorm, 1));
  const smoothBlend = clamp(0.08 + smooth * 0.34, 0.08, 0.44);
  const smoothAngle = smooth * 0.1;
  const useDualSample = !dynamicFastMode && (smooth > 0.2 || amount > 0.42);
  const useTripleSample = !dynamicFastMode && is3dLive && fps > 26 && !recordingActive;
  const useNearestSample = dynamicFastMode && !kaleidoMorphTween;
  const aaOffset = clamp(0.025 + smooth * 0.04 + amount * 0.02, 0.02, 0.085);
  const aaBlend = clamp(0.1 + smooth * 0.16 + amount * 0.08, 0.1, 0.32);
  // Kaleidoscope should not inherit dome seam compensation.
  // Keep pure wrapped sampling to avoid artificial border cuts in mirror mode.
  const seamShiftPx = 0;
  const sampleA = [0, 0, 0];
  const sampleB = [0, 0, 0];
  const sampleC = [0, 0, 0];

  const mapAngleByType = (typeName, aFold, rnLocal) => {
    let aa = aFold + Math.sin(rnLocal * Math.PI * 2 + tSec * (0.3 + speed * 1.4)) * smoothAngle;
    if (typeName === "mirror") aa = aFold;
    if (typeName === "spiral") aa += rnLocal * (0.25 + amount * 0.9);
    if (typeName === "radial") aa *= 0.74 + amount * 0.72;
    if (typeName === "mandala") aa += Math.sin(aFold * (1.7 + smooth * 3.2) + tSec * (0.24 + speed * 0.5)) * (0.18 + amount * 0.62);
    if (typeName === "yantra") aa += Math.sin(aFold * 6 + rnLocal * 8 + tSec * (0.16 + speed * 0.4)) * (0.07 + amount * 0.24);
    if (typeName === "organic") aa += Math.sin(rnLocal * (9 + amount * 20) + tSec * (0.26 + speed * 0.66)) * (0.16 + smooth * 0.42);
    if (typeName === "petals") aa += Math.sin(aFold * (3.6 + smooth * 5.2) + tSec * (0.2 + speed * 0.44)) * (0.08 + amount * 0.32);
    if (typeName === "moire") aa += Math.sin(rnLocal * (10 + amount * 26) + tSec * (0.32 + speed * 0.88)) * (0.2 + smooth * 0.52);
    if (typeName === "lotus") aa += Math.sin(aFold * 6 + rnLocal * 7 + tSec * (0.18 + speed * 0.38)) * (0.12 + amount * 0.26);
    if (typeName === "lattice") aa += Math.sin(aFold * 8 - rnLocal * 6 + tSec * (0.16 + speed * 0.34)) * (0.09 + amount * 0.22);
    return aa;
  };

  const mapRadiusByType = (typeName, rnLocal) => {
    const invZoom = 1 / Math.max(zoom, 0.72);
    if (typeName === "tunnel") return Math.pow(clamp(rnLocal, 0, 1), 0.72 + amount * 0.36) * invZoom;
    if (typeName === "mirror") return rnLocal * invZoom;
    if (typeName === "spiral") return rnLocal * (0.98 + Math.sin(rnLocal * 7 + tSec * 0.7) * 0.02 * smooth) * invZoom;
    if (typeName === "mandala") return rnLocal * (0.9 + 0.16 * Math.sin(rnLocal * 11 + tSec * (0.22 + speed * 0.42))) * invZoom;
    if (typeName === "yantra") return rnLocal * (0.9 + 0.13 * Math.sin(rnLocal * 16 + tSec * (0.12 + speed * 0.35))) * invZoom;
    if (typeName === "organic") return rnLocal * (0.84 + 0.24 * Math.abs(Math.sin(rnLocal * 8 + tSec * (0.2 + speed * 0.5)))) * invZoom;
    if (typeName === "petals") return rnLocal * (0.88 + 0.22 * Math.abs(Math.sin(rnLocal * 8 + tSec * (0.15 + speed * 0.38)))) * invZoom;
    if (typeName === "moire") return rnLocal * (0.96 + Math.sin(rnLocal * 24 + tSec * (0.4 + speed * 1.2)) * (0.02 + amount * 0.05)) * invZoom;
    if (typeName === "lotus") return rnLocal * (0.9 + 0.17 * Math.sin(rnLocal * 14 + tSec * (0.2 + speed * 0.52))) * invZoom;
    if (typeName === "lattice") return rnLocal * (0.92 + 0.14 * Math.sin(rnLocal * 10 + tSec * (0.16 + speed * 0.34)) * Math.cos(rnLocal * 7 + tSec * 0.22)) * invZoom;
    return rnLocal * invZoom;
  };

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const dx = x - cx;
      const dy = y - cy;
      const px = dx * invCx * aspectNorm;
      const py = dy * invCy;
      const r = Math.hypot(px, py);
      const rn = clamp(r / maxRNorm, 0, 1);
      // Center offset avoids seam alignment on cardinal axes.
      const a0 = Math.atan2(py, px) + spin + sector * 0.5;
      const aWrapped = Math.atan2(Math.sin(a0), Math.cos(a0));
      const aFold = Math.abs(fract01(aWrapped / sector + 0.5) - 0.5) * sector;
      const aA = mapAngleByType(morphFromType, aFold, rn);
      const aB = mapAngleByType(morphToType, aFold, rn);
      const a = aA * (1 - morphBlend) + aB * morphBlend;
      const rrA = mapRadiusByType(morphFromType, rn);
      const rrB = mapRadiusByType(morphToType, rn);
      const rrNorm = clamp(rrA * (1 - morphBlend) + rrB * morphBlend, 0, 1.2);
      const edgeT = clamp((rn - 0.72) / 0.28, 0, 1);
      const edgeStab = edgeT * edgeT * (3 - 2 * edgeT);
      const aStable = a * (1 - edgeStab * 0.42) + aFold * (edgeStab * 0.42);
      const rrStableNorm = clamp(rrNorm * (1 - edgeStab * 0.58) + rn * (edgeStab * 0.58), 0, 1.2);
      const rr = rrStableNorm * maxRNorm;
      const dirX = Math.cos(aStable) * rr;
      const dirY = Math.sin(aStable) * rr;

      const sx = cx + (dirX / Math.max(aspectNorm, 1e-4)) * cx + seamShiftPx;
      const sy = cy + dirY * cy;
      if (useNearestSample) {
        sampleMirroredNearestTo(sd, w, h, sx, sy, sampleA);
      } else {
        sampleMirroredBilinearTo(sd, w, h, sx, sy, sampleA);
      }
      const i = (y * w + x) * 4;
      if (useDualSample) {
        // Blend a second nearby sample to soften kaleido sector boundaries.
        const dir2X = Math.cos(aStable + sector * aaOffset) * rr;
        const dir2Y = Math.sin(aStable + sector * aaOffset) * rr;
        const sx2 = cx + (dir2X / Math.max(aspectNorm, 1e-4)) * cx + seamShiftPx;
        const sy2 = cy + dir2Y * cy;
        sampleMirroredBilinearTo(sd, w, h, sx2, sy2, sampleB);
        if (useTripleSample) {
          const dir3X = Math.cos(aStable - sector * aaOffset) * rr;
          const dir3Y = Math.sin(aStable - sector * aaOffset) * rr;
          const sx3 = cx + (dir3X / Math.max(aspectNorm, 1e-4)) * cx + seamShiftPx;
          const sy3 = cy + dir3Y * cy;
          sampleMirroredBilinearTo(sd, w, h, sx3, sy3, sampleC);
          od[i] = clamp(sampleA[0] * (1 - aaBlend * 2) + sampleB[0] * aaBlend + sampleC[0] * aaBlend, 0, 255);
          od[i + 1] = clamp(sampleA[1] * (1 - aaBlend * 2) + sampleB[1] * aaBlend + sampleC[1] * aaBlend, 0, 255);
          od[i + 2] = clamp(sampleA[2] * (1 - aaBlend * 2) + sampleB[2] * aaBlend + sampleC[2] * aaBlend, 0, 255);
        } else {
          od[i] = clamp(sampleA[0] * (1 - smoothBlend) + sampleB[0] * smoothBlend, 0, 255);
          od[i + 1] = clamp(sampleA[1] * (1 - smoothBlend) + sampleB[1] * smoothBlend, 0, 255);
          od[i + 2] = clamp(sampleA[2] * (1 - smoothBlend) + sampleB[2] * smoothBlend, 0, 255);
        }
      } else {
        od[i] = clamp(sampleA[0], 0, 255);
        od[i + 1] = clamp(sampleA[1], 0, 255);
        od[i + 2] = clamp(sampleA[2], 0, 255);
      }
      od[i + 3] = 255;
    }
  }

  // No border post-blend: wrapped bilinear + circular angle blend keeps mirror continuous.

  kaleidoFxCtx.putImageData(out, 0, 0);
  if (is3dLive && fps > 28 && !recordingActive) {
    kaleidoFxCtx.save();
    kaleidoFxCtx.globalAlpha = clamp(0.08 + smooth * 0.1, 0.08, 0.18);
    kaleidoFxCtx.filter = "blur(0.55px)";
    kaleidoFxCtx.drawImage(kaleidoFxCanvas, 0, 0, w, h);
    kaleidoFxCtx.restore();
  }
  if (smooth > 0.08 && useDualSample && fps > 30 && !recordingActive && !kaleidoMorphTween) {
    kaleidoFxCtx.save();
    kaleidoFxCtx.globalCompositeOperation = "screen";
    kaleidoFxCtx.globalAlpha = clamp(0.03 + smooth * 0.12, 0.03, 0.15);
    kaleidoFxCtx.filter = `blur(${0.45 + smooth * 1.9}px)`;
    kaleidoFxCtx.drawImage(kaleidoPrevCanvas, 0, 0, w, h);
    kaleidoFxCtx.restore();
  }

  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(kaleidoFxCanvas, 0, 0, w, h, 0, 0, outW, outH);
  ctx.restore();
  kaleidoPrevCtx.clearRect(0, 0, w, h);
  kaleidoPrevCtx.drawImage(kaleidoFxCanvas, 0, 0, w, h);
}

function apply3dAnaglyphStereo() {
  if ((mode !== "depth" && mode !== "mix") || !live3dAnaglyph || !live3dAnaglyph.checked) return;
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 2 || h <= 2) return;
  const amount = live3dAnaglyphStrength ? Number(live3dAnaglyphStrength.value) / 100 : 0.34;
  const pxShift = Math.max(1, Math.round(1 + amount * (2 + w * 0.008)));

  const src = ctx.getImageData(0, 0, w, h);
  const sd = src.data;
  const out = ctx.createImageData(w, h);
  const od = out.data;

  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const i = (y * w + x) * 4;
      const leftX = clamp(x - pxShift, 0, w - 1);
      const rightX = clamp(x + pxShift, 0, w - 1);
      const li = (y * w + leftX) * 4;
      const ri = (y * w + rightX) * 4;
      // Classic red/cyan stereo split, slightly blended to keep details readable.
      od[i] = sd[li];
      od[i + 1] = clamp(sd[ri + 1] * 0.92 + sd[i + 1] * 0.08, 0, 255);
      od[i + 2] = clamp(sd[ri + 2] * 0.92 + sd[i + 2] * 0.08, 0, 255);
      od[i + 3] = 255;
    }
  }
  ctx.putImageData(out, 0, 0);
}

function drawDomeGuideOverlay(w, h, amount) {
  if (amount <= 0) return;
  const alpha = clamp(amount / 100, 0, 1) * 0.38;
  const cx = w * 0.5;
  const cy = h * 0.5;
  const r = Math.min(w, h) * 0.5;
  ctx.save();
  ctx.strokeStyle = `rgba(255,255,255,${alpha})`;
  ctx.lineWidth = 1;
  const rings = 12;
  for (let i = 1; i <= rings; i++) {
    ctx.beginPath();
    ctx.arc(cx, cy, (r * i) / rings, 0, Math.PI * 2);
    ctx.stroke();
  }
  const rays = 24;
  for (let i = 0; i < rays; i++) {
    const a = (i / rays) * Math.PI * 2;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a) * r, cy + Math.sin(a) * r);
    ctx.stroke();
  }
  ctx.restore();
}

function sampleWrappedBilinear(srcData, w, h, x, y) {
  const wrapX = (vx) => {
    let n = vx % w;
    if (n < 0) n += w;
    return n;
  };
  const wrapY = (vy) => {
    let n = vy % h;
    if (n < 0) n += h;
    return n;
  };

  const xx = wrapX(x);
  const yy = wrapY(y);
  const x0 = Math.floor(xx);
  const y0 = Math.floor(yy);
  const x1 = wrapX(x0 + 1);
  const y1 = wrapY(y0 + 1);
  const fx = xx - x0;
  const fy = yy - y0;

  const i00 = (y0 * w + x0) * 4;
  const i10 = (y0 * w + x1) * 4;
  const i01 = (y1 * w + x0) * 4;
  const i11 = (y1 * w + x1) * 4;

  const w00 = (1 - fx) * (1 - fy);
  const w10 = fx * (1 - fy);
  const w01 = (1 - fx) * fy;
  const w11 = fx * fy;

  return [
    srcData[i00] * w00 + srcData[i10] * w10 + srcData[i01] * w01 + srcData[i11] * w11,
    srcData[i00 + 1] * w00 + srcData[i10 + 1] * w10 + srcData[i01 + 1] * w01 + srcData[i11 + 1] * w11,
    srcData[i00 + 2] * w00 + srcData[i10 + 2] * w10 + srcData[i01 + 2] * w01 + srcData[i11 + 2] * w11,
  ];
}

function sampleMirroredBilinear(srcData, w, h, x, y) {
  const mirror = (v, max) => {
    if (max <= 1) return 0;
    const period = (max - 1) * 2;
    let n = v % period;
    if (n < 0) n += period;
    if (n > max - 1) n = period - n;
    return n;
  };
  const xx = mirror(x, w);
  const yy = mirror(y, h);
  const x0 = Math.floor(xx);
  const y0 = Math.floor(yy);
  const x1 = Math.min(w - 1, x0 + 1);
  const y1 = Math.min(h - 1, y0 + 1);
  const fx = xx - x0;
  const fy = yy - y0;

  const i00 = (y0 * w + x0) * 4;
  const i10 = (y0 * w + x1) * 4;
  const i01 = (y1 * w + x0) * 4;
  const i11 = (y1 * w + x1) * 4;

  const w00 = (1 - fx) * (1 - fy);
  const w10 = fx * (1 - fy);
  const w01 = (1 - fx) * fy;
  const w11 = fx * fy;

  return [
    srcData[i00] * w00 + srcData[i10] * w10 + srcData[i01] * w01 + srcData[i11] * w11,
    srcData[i00 + 1] * w00 + srcData[i10 + 1] * w10 + srcData[i01 + 1] * w01 + srcData[i11 + 1] * w11,
    srcData[i00 + 2] * w00 + srcData[i10 + 2] * w10 + srcData[i01 + 2] * w01 + srcData[i11 + 2] * w11,
  ];
}

function sampleMirroredBilinearTo(srcData, w, h, x, y, out) {
  const mirror = (v, max) => {
    if (max <= 1) return 0;
    const period = (max - 1) * 2;
    let n = v % period;
    if (n < 0) n += period;
    if (n > max - 1) n = period - n;
    return n;
  };
  const xx = mirror(x, w);
  const yy = mirror(y, h);
  const x0 = Math.floor(xx);
  const y0 = Math.floor(yy);
  const x1 = Math.min(w - 1, x0 + 1);
  const y1 = Math.min(h - 1, y0 + 1);
  const fx = xx - x0;
  const fy = yy - y0;

  const i00 = (y0 * w + x0) * 4;
  const i10 = (y0 * w + x1) * 4;
  const i01 = (y1 * w + x0) * 4;
  const i11 = (y1 * w + x1) * 4;

  const w00 = (1 - fx) * (1 - fy);
  const w10 = fx * (1 - fy);
  const w01 = (1 - fx) * fy;
  const w11 = fx * fy;

  out[0] = srcData[i00] * w00 + srcData[i10] * w10 + srcData[i01] * w01 + srcData[i11] * w11;
  out[1] = srcData[i00 + 1] * w00 + srcData[i10 + 1] * w10 + srcData[i01 + 1] * w01 + srcData[i11 + 1] * w11;
  out[2] = srcData[i00 + 2] * w00 + srcData[i10 + 2] * w10 + srcData[i01 + 2] * w01 + srcData[i11 + 2] * w11;
}

function sampleMirroredNearestTo(srcData, w, h, x, y, out) {
  const mirror = (v, max) => {
    if (max <= 1) return 0;
    const period = max * 2;
    let n = v % period;
    if (n < 0) n += period;
    if (n >= max) n = period - n - 1;
    return clamp(Math.round(n), 0, max - 1);
  };
  const xx = mirror(x, w);
  const yy = mirror(y, h);
  const i = (yy * w + xx) * 4;
  out[0] = srcData[i];
  out[1] = srcData[i + 1];
  out[2] = srcData[i + 2];
}

function sampleClampBilinear(srcData, w, h, x, y) {
  const xx = clamp(x, 0, w - 1);
  const yy = clamp(y, 0, h - 1);
  const x0 = Math.floor(xx);
  const y0 = Math.floor(yy);
  const x1 = Math.min(w - 1, x0 + 1);
  const y1 = Math.min(h - 1, y0 + 1);
  const fx = xx - x0;
  const fy = yy - y0;

  const i00 = (y0 * w + x0) * 4;
  const i10 = (y0 * w + x1) * 4;
  const i01 = (y1 * w + x0) * 4;
  const i11 = (y1 * w + x1) * 4;

  const w00 = (1 - fx) * (1 - fy);
  const w10 = fx * (1 - fy);
  const w01 = (1 - fx) * fy;
  const w11 = fx * fy;

  return [
    srcData[i00] * w00 + srcData[i10] * w10 + srcData[i01] * w01 + srcData[i11] * w11,
    srcData[i00 + 1] * w00 + srcData[i10 + 1] * w10 + srcData[i01 + 1] * w01 + srcData[i11 + 1] * w11,
    srcData[i00 + 2] * w00 + srcData[i10 + 2] * w10 + srcData[i01 + 2] * w01 + srcData[i11 + 2] * w11,
  ];
}

function sampleClampNearest(srcData, w, h, x, y) {
  const xx = clamp(Math.round(x), 0, w - 1);
  const yy = clamp(Math.round(y), 0, h - 1);
  const i = (yy * w + xx) * 4;
  return [srcData[i], srcData[i + 1], srcData[i + 2]];
}

function sampleWrappedNearest(srcData, w, h, x, y) {
  let xx = Math.round(x) % w;
  if (xx < 0) xx += w;
  let yy = Math.round(y) % h;
  if (yy < 0) yy += h;
  const i = (yy * w + xx) * 4;
  return [srcData[i], srcData[i + 1], srcData[i + 2]];
}

function fract01(v) {
  return v - Math.floor(v);
}

function updateDomeAutoSeamFromImageData(imageData) {
  if (!imageData || !imageData.data) return;
  const w = imageData.width;
  const h = imageData.height;
  if (w < 8 || h < 8) return;
  const key = `${w}x${h}`;
  if (key === domeSeamCacheKey) return;
  domeSeamCacheKey = key;
  const data = imageData.data;
  let bestCol = 0;
  let bestCost = Number.POSITIVE_INFINITY;
  const yEnd = Math.max(2, Math.floor(h * 0.75));
  const yStep = Math.max(2, Math.floor(h / 180));
  const xStep = Math.max(1, Math.floor(w / 240));

  for (let c = 0; c < w; c += xStep) {
    const prev = (c - 1 + w) % w;
    let cost = 0;
    for (let y = 0; y < yEnd; y += yStep) {
      const ia = (y * w + c) * 4;
      const ib = (y * w + prev) * 4;
      const dr = data[ia] - data[ib];
      const dg = data[ia + 1] - data[ib + 1];
      const db = data[ia + 2] - data[ib + 2];
      cost += Math.abs(dr) + Math.abs(dg) + Math.abs(db);
    }
    if (cost < bestCost) {
      bestCost = cost;
      bestCol = c;
    }
  }

  domeAutoSeamU = bestCol / w;
}

function getDomePresetForMode(currentMode = mode) {
  if (currentMode === "fractal") return "fractal";
  if (currentMode === "depth") return "depth";
  if (currentMode === "particles") return "particles";
  if (currentMode === "lines") return "depth";
  if (currentMode === "tunnel") return "depth";
  if (currentMode === "interior") return "depth";
  if (currentMode === "synth") return "particles";
  if (currentMode === "glitch") return "glitch";
  return "live-safe";
}

function applyDomePreset(presetId, options = {}) {
  const { silent = false } = options;
  if (!presetId || presetId === "custom") return;
  const preset = DOME_PRESETS[presetId];
  if (!preset) return;
  domePresetApplying = true;
  if (domeSourceMap && preset.sourceMap) domeSourceMap.value = preset.sourceMap;
  if (domeProjection && preset.projection) domeProjection.value = preset.projection;
  if (domeWarp) domeWarp.value = String(preset.warp);
  if (domeOverscan) domeOverscan.value = String(preset.overscan);
  if (domeEdgeFeather) domeEdgeFeather.value = String(preset.edgeFeather);
  if (domeRimClamp) domeRimClamp.value = String(preset.rimClamp);
  if (domeSeamBlend) domeSeamBlend.value = String(preset.seamBlend);
  if (domeTilt) domeTilt.value = String(preset.tilt);
  if (domeRotate) domeRotate.value = String(preset.rotate);
  if (domeAutoRotate) domeAutoRotate.checked = Boolean(preset.autoRotate);
  if (domeAutoRotateSpeed) domeAutoRotateSpeed.value = String(preset.autoSpeed);
  if (domeGrid) domeGrid.value = String(preset.grid);
  if (domePreset) domePreset.value = presetId;
  domePresetApplying = false;
  if (!silent) {
    updateLiveQuickOutputs();
    scheduleRender();
  }
}

function applyDomePresetForCurrentMode() {
  if (!liveOutputView || liveOutputView.value !== "dome") return;
  if (!domeAutoTuneByMode || !domeAutoTuneByMode.checked) return;
  applyDomePreset(getDomePresetForMode(mode), { silent: true });
  updateLiveQuickOutputs();
}

function isGlitchDomePanMode() {
  if (!liveOutputView || liveOutputView.value !== "dome") return false;
  if (!domeSourceMap || domeSourceMap.value !== "equirect") return false;
  if (mode !== "glitch" && mode !== "fractal" && mode !== "particles") return false;
  return Boolean(loadedImage || originalImageData);
}

function isDomeAutoRotateActive() {
  if (!liveOutputView || liveOutputView.value !== "dome") return false;
  if (!domeAutoRotate || !domeAutoRotate.checked) return false;
  const speed = domeAutoRotateSpeed ? Number(domeAutoRotateSpeed.value) : 0;
  return Math.abs(speed) > 0.01;
}

function getDomeWarpScale() {
  if (!liveOutputView || liveOutputView.value !== "dome") {
    domeWarpScaleSmooth += (1 - domeWarpScaleSmooth) * 0.2;
    return clamp(domeWarpScaleSmooth, 0.58, 1);
  }
  let target = 1;
  if (fps < 18) target = 0.54;
  else if (fps < 22) target = 0.6;
  else if (fps < 26) target = 0.68;
  else if (fps < 30) target = 0.76;
  else if (fps < 36) target = 0.86;
  else if (fps < 44) target = 0.93;
  const heavyStack = isKaleidoFxActive() || (masterFxMode && (masterFxMode.value || "none") !== "none");
  if (heavyStack) target *= 0.92;
  const quality = getCanvasRenderQuality();
  const minScale = quality === "ultra" ? 0.72 : quality === "high" ? 0.64 : 0.58;
  domeWarpScaleSmooth += (target - domeWarpScaleSmooth) * 0.22;
  domeWarpScaleSmooth = clamp(domeWarpScaleSmooth, minScale, 1);
  return domeWarpScaleSmooth;
}

function toggleDomeMasterView() {
  if (!liveOutputView) return;
  if (liveOutputView.value === "dome") {
    liveOutputView.value = "normal";
  } else {
    liveOutputView.value = "dome";
    applyDomePresetForCurrentMode();
  }
  domeWarpScaleSmooth = 1;
  domeWarpFrameCounter = 0;
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyOutputViewWarp() {
  if (!liveOutputView || liveOutputView.value !== "dome") return;
  if (mode !== "depth" && mode !== "mix" && mode !== "glitch" && mode !== "particles" && mode !== "fractal" && mode !== "lines" && mode !== "tunnel" && mode !== "interior" && mode !== "none")
    return;
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 1 || h <= 1) return;
  domeWarpFrameCounter += 1;
  const heavyStack = isKaleidoFxActive() || (masterFxMode && (masterFxMode.value || "none") !== "none");
  const domeFrameSkip = !recordingActive
    ? fps < 18
      ? 3
      : fps < 24 || heavyStack
        ? 2
        : 1
    : 1;
  if (domeFrameSkip > 1 && fxCanvas.width > 1 && fxCanvas.height > 1 && domeWarpFrameCounter % domeFrameSkip !== 0) {
    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "medium";
    ctx.clearRect(0, 0, w, h);
    ctx.drawImage(fxCanvas, 0, 0, fxCanvas.width, fxCanvas.height, 0, 0, w, h);
    ctx.restore();
    drawDomeGuideOverlay(w, h, domeGrid ? Number(domeGrid.value) : 0);
    return;
  }
  const domeScale = getDomeWarpScale();
  const workW = Math.max(320, Math.round(w * domeScale));
  const workH = Math.max(180, Math.round(h * domeScale));
  const warp = clamp(Number(domeWarp ? domeWarp.value : 70), 0, 100) / 100;
  const overscan = clamp(Number(domeOverscan ? domeOverscan.value : 6), 0, 20) / 20;
  const edgeFeather = clamp(Number(domeEdgeFeather ? domeEdgeFeather.value : 18), 0, 100) / 100;
  const rimClamp = clamp(Number(domeRimClamp ? domeRimClamp.value : 28), 0, 100) / 100;
  const seamBlendCtrl = clamp(Number(domeSeamBlend ? domeSeamBlend.value : 22), 0, 100) / 100;
  const projectionMode = domeProjection ? domeProjection.value : "equisolid";
  const tilt = clamp(Number(domeTilt ? domeTilt.value : 0), -100, 100) / 100;
  const manualRotate = clamp(Number(domeRotate ? domeRotate.value : 0), -180, 180);
  const sourceMap = domeSourceMap ? domeSourceMap.value : "standard";
  const useNearest = !recordingActive && fps < 20;
  const curve = 0.65 + (1 - warp) * 1.2;
  const seamBlend = sourceMap === "equirect" ? 0.008 + seamBlendCtrl * 0.08 : 0.02;
  const rimPushIn = 1 - rimClamp * 0.22;
  const rimCurveMul = 1 + rimClamp * 0.35;
  const edgeSoftStart = clamp(1 - edgeFeather * 0.44, 0.5, 0.995);
  const cx = workW * 0.5;
  const cy = workH * 0.5;
  const rMax = Math.min(workW, workH) * 0.5;
  const tiltRad = tilt * 0.58;
  const domeYawRad = domeViewYaw * (Math.PI / 180);
  const domePitchRad = domeViewPitch * (Math.PI / 180);
  const nowMs = performance.now();
  const dt = clamp((nowMs - lastDomeAnimTs) / 1000, 0, 0.1);
  lastDomeAnimTs = nowMs;
  const speedKnob = clamp((domeAutoRotateSpeed ? Number(domeAutoRotateSpeed.value) : 0) / 100, -1, 1);
  const speedTarget = domeAutoRotate && domeAutoRotate.checked ? Math.sign(speedKnob) * Math.pow(Math.abs(speedKnob), 2.25) * 14 : 0;
  domeAutoYawVel += (speedTarget - domeAutoYawVel) * 0.06;
  domeAutoYaw += domeAutoYawVel * dt;
  const yawU = (domeViewYaw + manualRotate + domeAutoYaw) / 360;

  if (fxCanvas.width !== workW || fxCanvas.height !== workH) {
    fxCanvas.width = workW;
    fxCanvas.height = workH;
  }
  if (tileCanvas.width !== workW || tileCanvas.height !== workH) {
    tileCanvas.width = workW;
    tileCanvas.height = workH;
  }
  fxCtx.clearRect(0, 0, workW, workH);
  fxCtx.drawImage(canvas, 0, 0, workW, workH);
  const src = fxCtx.getImageData(0, 0, workW, workH);
  if (sourceMap === "equirect") updateDomeAutoSeamFromImageData(src);
  const dst = tileCtx.createImageData(workW, workH);
  const s = src.data;
  const d = dst.data;

  for (let y = 0; y < workH; y++) {
    for (let x = 0; x < workW; x++) {
      const di = (y * workW + x) * 4;
      const nx = (x - cx) / rMax;
      const ny = (y - cy) / rMax;
      const r = Math.hypot(nx, ny);
      if (r > 1) {
        d[di] = 0;
        d[di + 1] = 0;
        d[di + 2] = 0;
        d[di + 3] = 255;
        continue;
      }
      // Hemisphere ray from dome disk point.
      const theta = Math.atan2(nx, -ny);
      const rAdj = clamp(Math.pow(r, curve * rimCurveMul) * (1 - overscan * 0.24) * rimPushIn, 0, 1);
      let phi = rAdj * (Math.PI * 0.5);
      if (projectionMode === "equidistant") {
        phi = rAdj * (Math.PI * 0.5);
      } else if (projectionMode === "stereographic") {
        phi = 2 * Math.atan(rAdj);
      } else if (projectionMode === "orthographic") {
        phi = Math.asin(clamp(rAdj, 0, 1));
      } else {
        // Equisolid is usually the most neutral for fulldome playback pipelines.
        phi = 2 * Math.asin(clamp(rAdj / Math.SQRT2, 0, 1));
      }
      let dx = Math.sin(phi) * Math.cos(theta);
      let dy = Math.sin(phi) * Math.sin(theta);
      let dz = Math.cos(phi);

      // Tilt the virtual dome camera around X axis.
      if (Math.abs(tiltRad) > 0.0001) {
        const ct = Math.cos(tiltRad);
        const st = Math.sin(tiltRad);
        const ndy = dy * ct - dz * st;
        const ndz = dy * st + dz * ct;
        dy = ndy;
        dz = ndz;
      }
      // Interactive dome view control for glitch+equirect mode.
      if (Math.abs(domeYawRad) > 0.0001) {
        const cy = Math.cos(domeYawRad);
        const sy = Math.sin(domeYawRad);
        const ndx = dx * cy - dy * sy;
        const ndy = dx * sy + dy * cy;
        dx = ndx;
        dy = ndy;
      }
      if (Math.abs(domePitchRad) > 0.0001) {
        const cp = Math.cos(domePitchRad);
        const sp = Math.sin(domePitchRad);
        const ndy = dy * cp - dz * sp;
        const ndz = dy * sp + dz * cp;
        dy = ndy;
        dz = ndz;
      }

      let rC = 0;
      let gC = 0;
      let bC = 0;
      if (sourceMap === "equirect") {
        // Equirect -> Dome(180):
        // Keep seam opposite the view center and sample continuously in latitude.
        // At neutral orientation this naturally maps to the upper hemisphere (v 0..0.5),
        // but when pitching/tilting it remains continuous (no hard horizon clamp seam).
        const lon = Math.atan2(dx, -dy) / (Math.PI * 2);
        let u = fract01(lon - yawU + domeAutoSeamU);
        const v = clamp(Math.acos(clamp(dz, -1, 1)) / Math.PI, 0, 1);
        const sampleMain = useNearest
          ? sampleWrappedNearest(s, workW, workH, u * workW, v * (workH - 1))
          : sampleWrappedBilinear(s, workW, workH, u * workW, v * (workH - 1));
        rC = sampleMain[0];
        gC = sampleMain[1];
        bC = sampleMain[2];
        const seamDist = Math.min(u, 1 - u);
        if (seamDist < seamBlend) {
          const t = clamp(seamDist / seamBlend, 0, 1);
          const blend = t * t * (3 - 2 * t);
          const uOther = fract01(u < 0.5 ? u + seamBlend : u - seamBlend);
          const sampleOther = useNearest
            ? sampleWrappedNearest(s, workW, workH, uOther * workW, v * (workH - 1))
            : sampleWrappedBilinear(s, workW, workH, uOther * workW, v * (workH - 1));
          rC = sampleOther[0] * (1 - blend) + rC * blend;
          gC = sampleOther[1] * (1 - blend) + gC * blend;
          bC = sampleOther[2] * (1 - blend) + bC * blend;
        }
      } else {
        // Standard mode: stereographic dome camera from forward hemisphere.
        // This avoids radial seam artifacts and forced vertical stitching.
        const denom = Math.max(0.0001, 1 + dz);
        const sxN = clamp(0.5 + 0.5 * (dx / denom), 0, 1);
        const syN = clamp(0.5 + 0.5 * (dy / denom), 0, 1);
        const sampleMain = useNearest
          ? sampleClampNearest(s, workW, workH, sxN * (workW - 1), syN * (workH - 1))
          : sampleClampBilinear(s, workW, workH, sxN * (workW - 1), syN * (workH - 1));
        rC = sampleMain[0];
        gC = sampleMain[1];
        bC = sampleMain[2];
      }

      let edgeAlpha = 1;
      if (r > edgeSoftStart) {
        const tt = clamp((r - edgeSoftStart) / Math.max(0.0001, 1 - edgeSoftStart), 0, 1);
        const smooth = tt * tt * (3 - 2 * tt);
        edgeAlpha = 1 - smooth;
      }

      d[di] = clamp(Math.round(rC * edgeAlpha), 0, 255);
      d[di + 1] = clamp(Math.round(gC * edgeAlpha), 0, 255);
      d[di + 2] = clamp(Math.round(bC * edgeAlpha), 0, 255);
      d[di + 3] = 255;
    }
  }

  fxCtx.putImageData(dst, 0, 0);
  ctx.save();
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = domeScale < 0.78 ? "medium" : "high";
  ctx.clearRect(0, 0, w, h);
  ctx.drawImage(fxCanvas, 0, 0, workW, workH, 0, 0, w, h);
  ctx.restore();
  drawDomeGuideOverlay(w, h, domeGrid ? Number(domeGrid.value) : 0);
}

function randomize3dCameraView() {
  if (mode !== "depth" && mode !== "mix") return;
  if (!controls.pointRotateX || !controls.pointRotateY || !controls.pointRotateZ) return;
  const rx = Math.round(-70 + Math.random() * 140);
  const ry = Math.round(-150 + Math.random() * 300);
  const rz = Math.round(-120 + Math.random() * 240);
  controls.pointRotateX.value = String(rx);
  controls.pointRotateY.value = String(ry);
  controls.pointRotateZ.value = String(rz);
  if (controls.cameraZoom) {
    controls.cameraZoom.value = String(Math.round(64 + Math.random() * 70));
  }
  if (controls.cameraFollow) {
    controls.cameraFollow.value = String(Math.round(15 + Math.random() * 70));
  }
  dragRotateX = 0;
  dragRotateY = 0;
  updateOutputs();
  scheduleRender();
}

function randomize3dCameraViewSmooth() {
  if (mode !== "depth" && mode !== "mix") return;
  if (!controls.pointRotateX || !controls.pointRotateY || !controls.pointRotateZ) return;
  const now = performance.now();
  if (now - lastCameraShuffleTs < 280) return;
  lastCameraShuffleTs = now;
  const curRx = Number(controls.pointRotateX.value) || 0;
  const curRy = Number(controls.pointRotateY.value) || 0;
  const curRz = Number(controls.pointRotateZ.value) || 0;
  const curZoom = controls.cameraZoom ? Number(controls.cameraZoom.value) : 100;
  const curFollow = controls.cameraFollow ? Number(controls.cameraFollow.value) : 50;
  const orbiting = cameraMode === "orbit" || cameraMode === "sweep" || cameraMode === "helix";
  cameraShufflePhase += 0.72 + Math.random() * 0.44;
  const swingA = Math.sin(cameraShufflePhase);
  const swingB = Math.cos(cameraShufflePhase * 0.86);
  const swingC = Math.sin(cameraShufflePhase * 1.21);
  const sense = swingB >= 0 ? 1 : -1;
  const rx = clamp(curRx + swingA * (orbiting ? 9 : 14) + (-4 + Math.random() * 8), -85, 85);
  const ry = clamp(curRy + sense * (orbiting ? 20 : 34) + swingB * (orbiting ? 12 : 24), -180, 180);
  const rz = clamp(curRz + swingC * (orbiting ? 10 : 18), -180, 180);
  const zoom = clamp(curZoom + swingA * (orbiting ? 7 : 10) + (-4 + Math.random() * 8), 56, 166);
  const follow = clamp(curFollow + swingB * (orbiting ? 8 : 12) + (-3 + Math.random() * 6), 8, 95);
  const panX = clamp((targetPanX ?? cameraPanX) * 0.55 + swingA * 0.18, -0.52, 0.52);
  const panY = clamp((targetPanY ?? cameraPanY) * 0.55 + swingC * 0.14, -0.42, 0.42);
  targetRotX = rx;
  targetRotY = ry;
  targetRotZ = rz;
  targetCamZoom = zoom;
  targetCamFollow = follow;
  targetPanX = panX;
  targetPanY = panY;
  cameraFlowEase = 1.15;
  if (smoothRotX === null) smoothRotX = Number(controls.pointRotateX.value);
  if (smoothRotY === null) smoothRotY = Number(controls.pointRotateY.value);
  if (smoothRotZ === null) smoothRotZ = Number(controls.pointRotateZ.value);
  if (smoothCamZoom === null && controls.cameraZoom) smoothCamZoom = Number(controls.cameraZoom.value);
  if (smoothCamFollow === null && controls.cameraFollow) smoothCamFollow = Number(controls.cameraFollow.value);
  dragRotateX = 0;
  dragRotateY = 0;
  scheduleRender();
}

function randomizeParticlesCameraView() {
  if (mode !== "particles") return;
  if (liveParticlesCamMode) {
    const opts = ["orbit", "sweep", "helix", "inside"];
    liveParticlesCamMode.value = opts[Math.floor(Math.random() * opts.length)];
    particlesCamModePrev = liveParticlesCamMode.value;
    particlesCamModeBlendStart = 0;
  }
  if (liveParticlesCamSpeed) liveParticlesCamSpeed.value = String(Math.round(24 + Math.random() * 56));
  if (liveParticlesCamX) liveParticlesCamX.value = String(Math.round(-36 + Math.random() * 72));
  if (liveParticlesCamY) liveParticlesCamY.value = String(Math.round(-68 + Math.random() * 136));
  if (liveParticlesCamZ) liveParticlesCamZ.value = String(Math.round(-48 + Math.random() * 96));
  particlesCamXSmooth = liveParticlesCamX ? Number(liveParticlesCamX.value) : particlesCamXSmooth;
  particlesCamYSmooth = liveParticlesCamY ? Number(liveParticlesCamY.value) : particlesCamYSmooth;
  particlesCamZSmooth = liveParticlesCamZ ? Number(liveParticlesCamZ.value) : particlesCamZSmooth;
  particlesCameraTween = null;
  particlesRandomTween = null;
  updateLiveQuickOutputs();
  scheduleRender();
}

function randomizeFractalCameraView() {
  if (mode !== "fractal") return;
  if (liveFractalCameraMode) {
    const opts = ["orbit", "inside"];
    liveFractalCameraMode.value = opts[Math.floor(Math.random() * opts.length)];
  }
  if (liveFractalCamSpeed) liveFractalCamSpeed.value = String(Math.round(8 + Math.random() * 60));
  if (liveFractalDistance) liveFractalDistance.value = String(Math.round(22 + Math.random() * 134));
  const nextYaw = fractalCamYaw + (Math.random() * 2 - 1) * 1.25;
  const nextPitch = clamp(fractalCamPitch + (Math.random() * 2 - 1) * 0.58, -1.2, 1.2);
  fractalCamYaw = nextYaw;
  fractalCamYawTarget = nextYaw;
  fractalCamPitch = nextPitch;
  fractalCamPitchTarget = nextPitch;
  fractalCameraTween = null;
  fractalMorphTween = null;
  updateLiveQuickOutputs();
  scheduleRender();
}

function randomizeLinesCameraView() {
  if (mode !== "lines") return;
  linesCamYaw += (Math.random() * 2 - 1) * 0.8;
  linesCamPitch = clamp(linesCamPitch + (Math.random() * 2 - 1) * 0.45, -1.1, 1.1);
  linesCamDist = clamp(linesCamDist + (Math.random() * 2 - 1) * 0.26, 0.78, 2.2);
  linesCamYawTarget = linesCamYaw;
  linesCamPitchTarget = linesCamPitch;
  linesCamDistTarget = linesCamDist;
  scheduleRender();
}

function randomizeLinesCameraViewSmooth() {
  if (mode !== "lines") return;
  linesCamYawTarget += (Math.random() * 2 - 1) * 1.1;
  linesCamPitchTarget = clamp(linesCamPitchTarget + (Math.random() * 2 - 1) * 0.6, -1.1, 1.1);
  linesCamDistTarget = clamp(linesCamDistTarget + (Math.random() * 2 - 1) * 0.34, 0.78, 2.2);
  scheduleRender();
}

function applyLinesPreset(presetId, withRender = true) {
  const id = String(presetId || "ambient");
  if (id === "techno") {
    if (liveLinesGeometry) liveLinesGeometry.value = "grid";
    if (liveLinesCameraMode) liveLinesCameraMode.value = "orbit";
    if (liveLinesPattern) liveLinesPattern.value = "flow";
    if (liveLinesBeatFlip) liveLinesBeatFlip.checked = true;
    if (liveLinesDensity) liveLinesDensity.value = "15";
    if (liveLinesMacro) liveLinesMacro.value = "68";
    if (liveLinesThickness) liveLinesThickness.value = "6";
    if (liveLinesCurvature) liveLinesCurvature.value = "52";
    if (liveLinesDepth) liveLinesDepth.value = "64";
    if (liveLinesLayerOffset) liveLinesLayerOffset.value = "56";
    if (liveLinesColorShift) liveLinesColorShift.value = "210";
    if (liveLinesSpeed) liveLinesSpeed.value = "58";
    if (liveLinesCamDrift) liveLinesCamDrift.value = "34";
    if (liveLinesInsideDepth) liveLinesInsideDepth.value = "46";
    if (liveLinesStringVibe) liveLinesStringVibe.value = "72";
    if (liveLinesConstellation) liveLinesConstellation.value = "52";
  } else if (id === "vocal") {
    if (liveLinesGeometry) liveLinesGeometry.value = "constellation";
    if (liveLinesCameraMode) liveLinesCameraMode.value = "inside";
    if (liveLinesPattern) liveLinesPattern.value = "flow";
    if (liveLinesBeatFlip) liveLinesBeatFlip.checked = true;
    if (liveLinesDensity) liveLinesDensity.value = "13";
    if (liveLinesMacro) liveLinesMacro.value = "54";
    if (liveLinesThickness) liveLinesThickness.value = "7";
    if (liveLinesCurvature) liveLinesCurvature.value = "64";
    if (liveLinesDepth) liveLinesDepth.value = "44";
    if (liveLinesLayerOffset) liveLinesLayerOffset.value = "38";
    if (liveLinesColorShift) liveLinesColorShift.value = "120";
    if (liveLinesSpeed) liveLinesSpeed.value = "34";
    if (liveLinesCamDrift) liveLinesCamDrift.value = "24";
    if (liveLinesInsideDepth) liveLinesInsideDepth.value = "72";
    if (liveLinesStringVibe) liveLinesStringVibe.value = "88";
    if (liveLinesConstellation) liveLinesConstellation.value = "78";
  } else {
    if (liveLinesGeometry) liveLinesGeometry.value = "ribbon";
    if (liveLinesCameraMode) liveLinesCameraMode.value = "orbit";
    if (liveLinesPattern) liveLinesPattern.value = "flow";
    if (liveLinesBeatFlip) liveLinesBeatFlip.checked = true;
    if (liveLinesDensity) liveLinesDensity.value = "12";
    if (liveLinesMacro) liveLinesMacro.value = "42";
    if (liveLinesThickness) liveLinesThickness.value = "5";
    if (liveLinesCurvature) liveLinesCurvature.value = "34";
    if (liveLinesDepth) liveLinesDepth.value = "54";
    if (liveLinesLayerOffset) liveLinesLayerOffset.value = "48";
    if (liveLinesColorShift) liveLinesColorShift.value = "120";
    if (liveLinesSpeed) liveLinesSpeed.value = "42";
    if (liveLinesCamDrift) liveLinesCamDrift.value = "28";
    if (liveLinesInsideDepth) liveLinesInsideDepth.value = "62";
    if (liveLinesStringVibe) liveLinesStringVibe.value = "58";
    if (liveLinesConstellation) liveLinesConstellation.value = "56";
  }
  updateLiveQuickOutputs();
  if (withRender) scheduleRender();
}

function renderLinesMode(baseImageData, tSec, settings) {
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 1 || h <= 1) return;
  ctx.globalCompositeOperation = "source-over";

  const density = clamp(Number(liveLinesDensity ? liveLinesDensity.value : 12), 6, 30);
  const macro = clamp(Number(liveLinesMacro ? liveLinesMacro.value : 42), 0, 100) / 100;
  const thickness = clamp(Number(liveLinesThickness ? liveLinesThickness.value : 5), 1, 24);
  const curvature = clamp(Number(liveLinesCurvature ? liveLinesCurvature.value : 34), 0, 100) / 100;
  const depthAmt = clamp(Number(liveLinesDepth ? liveLinesDepth.value : 54), 0, 100) / 100;
  const layerOffset = clamp(Number(liveLinesLayerOffset ? liveLinesLayerOffset.value : 48), 0, 100) / 100;
  const colorShift = clamp(Number(liveLinesColorShift ? liveLinesColorShift.value : 120), 0, 360) / 360;
  const speed = clamp(Number(liveLinesSpeed ? liveLinesSpeed.value : 42), 0, 100) / 100;
  const camDrift = clamp(Number(liveLinesCamDrift ? liveLinesCamDrift.value : 28), 0, 100) / 100;
  const insideDepth = clamp(Number(liveLinesInsideDepth ? liveLinesInsideDepth.value : 62), 0, 100) / 100;
  const stringVibeSensitivity = clamp(Number(liveLinesStringVibe ? liveLinesStringVibe.value : 58), 0, 200) / 100;
  const lineGlowControl = clamp(Number(liveLinesConstellation ? liveLinesConstellation.value : 56), 0, 100) / 100;
  const linesPresetId = liveLinesPreset ? (liveLinesPreset.value || "ambient") : "ambient";
  const linesPatternId = liveLinesPattern ? (liveLinesPattern.value || "flow") : "flow";
  const cameraModeLocal = liveLinesCameraMode ? liveLinesCameraMode.value : "orbit";
  const beatFlipEnabled = !liveLinesBeatFlip || liveLinesBeatFlip.checked;
  const macroPunch = 0.6 + macro * 1.1;
  const macroChaos = 0.4 + macro * 0.95;

  const audioOn = hasAudioReactiveInput();
  const audioState = getReactiveAudioState(settings, audioOn, 1);
  const bands = audioState.bands || [0, 0, 0, 0];
  const bassTarget = clamp(bands[0] * 0.7 + bands[1] * 1.05 + audioState.transient * 0.62, 0, 2);
  const midTarget = clamp(bands[2] * 1.28 + bands[1] * 0.16, 0, 2);
  const highTarget = clamp(bands[3] * 1.45 + bands[2] * 0.18, 0, 2);
  const energyTarget = clamp(audioState.level * 1.25 + audioState.transient * 0.36, 0, 2);
  const dt = clamp(1 / Math.max(12, fps || 30), 0.01, 0.09);
  const smoothAR = (curr, target, att, rel) => curr + (target - curr) * (target > curr ? att : rel);
  linesAudioBassSmooth = smoothAR(linesAudioBassSmooth, bassTarget, clamp(0.16 + dt * 2.8, 0.12, 0.3), clamp(0.06 + dt * 1.2, 0.05, 0.16));
  linesAudioMidSmooth = smoothAR(linesAudioMidSmooth, midTarget, clamp(0.14 + dt * 2.2, 0.1, 0.28), clamp(0.08 + dt * 1.4, 0.06, 0.2));
  linesAudioHighSmooth = smoothAR(linesAudioHighSmooth, highTarget, clamp(0.2 + dt * 2.6, 0.14, 0.34), clamp(0.1 + dt * 1.6, 0.08, 0.24));
  linesAudioEnergySmooth = smoothAR(linesAudioEnergySmooth, energyTarget, clamp(0.15 + dt * 2.2, 0.12, 0.3), clamp(0.07 + dt * 1.3, 0.06, 0.18));
  const bass = linesAudioBassSmooth;
  const mid = linesAudioMidSmooth;
  const high = linesAudioHighSmooth;
  const energy = linesAudioEnergySmooth;
  const glowTarget = clamp(lineGlowControl * (0.84 + energy * 0.58), 0, 1.45);
  linesGlowSmooth = smoothAR(linesGlowSmooth, glowTarget, clamp(0.14 + dt * 1.8, 0.1, 0.28), clamp(0.06 + dt * 1.1, 0.05, 0.14));
  const lineGlow = clamp(linesGlowSmooth, 0, 1.45);
  const neonTargetBase = linesPresetId === "techno" ? 1.08 : linesPresetId === "vocal" ? 0.62 : 0.38;
  const neonTarget = clamp(neonTargetBase + lineGlowControl * 0.42, 0, 1.45);
  linesNeonSmooth = smoothAR(linesNeonSmooth, neonTarget, clamp(0.1 + dt * 1.2, 0.08, 0.22), clamp(0.05 + dt * 0.9, 0.04, 0.14));
  const neonAmt = clamp(linesNeonSmooth, 0, 1.45);
  const audioSens = controls.audioSensitivity ? clamp(Number(controls.audioSensitivity.value) / 120, 0, 1.6) : 0.43;
  const audioTolInv = controls.audioTolerance ? clamp(1 - Number(controls.audioTolerance.value) / 120, 0, 1.2) : 0.74;
  const padReactiveDrive = clamp(0.25 + audioSens * 1.25 + audioTolInv * 0.95, 0.2, 2.35);
  const stringDriveTarget = audioOn
    ? clamp((audioState.level * 1.55 + audioState.transient * 1.25 + bassTarget * 0.34 + highTarget * 0.32) * padReactiveDrive, 0, 3.2)
    : 0;
  linesStringVibeSmooth = smoothAR(linesStringVibeSmooth, stringDriveTarget, clamp(0.22 + dt * 2.8, 0.18, 0.44), clamp(0.08 + dt * 1.3, 0.06, 0.22));

  linesBeatCooldown = Math.max(0, linesBeatCooldown - dt);
  const beatGate = 0.28 + energy * 0.2;
  if (audioOn && audioState.transient > beatGate && linesBeatCooldown <= 0) {
    linesInvertSign *= -1;
    linesBeatPulse = 1;
    linesBeatCooldown = 0.28;
  } else {
    linesBeatPulse *= 0.88;
  }
  // Smooth sign transitions to avoid abrupt geometry jumps on beat flips.
  linesInvertBlend = smoothAR(linesInvertBlend, linesInvertSign, clamp(0.08 + dt * 1.2, 0.06, 0.18), clamp(0.08 + dt * 1.2, 0.06, 0.18));
  const beat = clamp(linesBeatPulse + audioState.transient * 0.35, 0, 1.8);

  if (cameraModeLocal === "inside") {
    const insideDist = 0.82 + (1 - insideDepth) * 0.28;
    linesCamDistTarget += (insideDist - linesCamDistTarget) * 0.08;
    linesCamYawTarget += (0.0065 + speed * 0.018) * (0.4 + camDrift * 0.9) * (1 + bass * 0.14);
    linesCamPitchTarget += Math.sin(tSec * (0.45 + speed * 0.72) + beat * 0.8) * 0.0042 * (0.22 + camDrift * 0.9);
  } else if (cameraModeLocal === "static") {
    const staticDist = 1.05 + (1 - insideDepth) * 0.16;
    linesCamDistTarget += (staticDist - linesCamDistTarget) * 0.08;
    linesCamYawTarget += (0 - linesCamYawTarget) * 0.04;
    linesCamPitchTarget += (0 - linesCamPitchTarget) * 0.04;
  } else {
    linesCamYawTarget += Math.sin(tSec * (0.18 + speed * 0.24)) * 0.0009 * camDrift * macroChaos;
    linesCamPitchTarget += Math.cos(tSec * (0.14 + speed * 0.2)) * 0.0007 * camDrift * macroChaos;
    const orbitDist = 0.86 + (1 - insideDepth) * 0.64;
    linesCamDistTarget += (orbitDist - linesCamDistTarget) * 0.035;
  }
  linesCamPitchTarget = clamp(linesCamPitchTarget, -1.1, 1.1);
  linesCamYaw += (linesCamYawTarget - linesCamYaw) * 0.062;
  linesCamPitch += (linesCamPitchTarget - linesCamPitch) * 0.062;
  linesCamDist += (linesCamDistTarget - linesCamDist) * 0.074;
  linesCamDist = clamp(linesCamDist, 0.78, 2.2);

  // Matte black background, fixed and clean.
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, h);

  const isMinimal = true;
  const masterOn = Boolean(masterFxMode && (masterFxMode.value || "none") !== "none");
  const masterFxVal = masterFxMode ? (masterFxMode.value || "none") : "none";
  const masterHeavy =
    masterFxVal === "datamosh" ||
    masterFxVal === "interlace" ||
    masterFxVal === "chromatic" ||
    masterFxVal === "pixelart" ||
    masterFxVal === "neon" ||
    masterFxVal === "neongrad" ||
    masterFxVal === "matrix";
  const kaleidoOn = isKaleidoFxActive();
  const domeOn = Boolean(liveOutputView && liveOutputView.value === "dome");
  const heavyStackCount = (masterOn ? 1 : 0) + (kaleidoOn ? 1 : 0) + (domeOn ? 1 : 0);
  const perfStress = clamp((30 - (fps || 30)) / 12, 0, 1);
  const fpsLod = fps < 18 ? 0.42 : fps < 24 ? 0.58 : fps < 30 ? 0.74 : fps < 36 ? 0.88 : 1;
  const stackLod = heavyStackCount >= 2 ? 0.7 : heavyStackCount === 1 ? 0.85 : 1;
  const fxLod = masterHeavy ? 0.76 : masterOn || kaleidoOn ? 0.9 : 1;
  const hiResK = heavyStackCount === 0 && fps > 34 ? 1.15 : fps > 28 ? 1 : 0.86;
  const perfK = fpsLod * stackLod * fxLod;
  const qualityBudget = clamp(1 - perfStress * 0.54 - (masterHeavy ? 0.16 : 0) - (kaleidoOn ? 0.1 : 0), 0.42, 1);
  const lineCount = clamp(
    Math.round(density * 2.45 * perfK * qualityBudget * (0.84 + macro * 0.18)),
    10,
    56
  );
  const layerCount = clamp(
    Math.round((2 + layerOffset * 2.8) * (fps < 24 ? 0.68 : 1) * stackLod * qualityBudget),
    2,
    4
  );
  const segCount = clamp(
    Math.round((22 + density * 0.78) * (fps < 18 ? 0.5 : fps < 24 ? 0.66 : fps < 32 ? 0.84 : 1) * stackLod * hiResK * qualityBudget),
    14,
    72
  );
  const baseThick = (0.58 + thickness * 0.065) * (0.88 + macro * 0.28);

  const cx = w * 0.5;
  const cy = h * 0.5;
  const phaseBase = tSec * (0.52 + speed * 1.8);
  // Performance mapping:
  // Bass -> global deformation, Mid -> lateral vibration, High -> contour micro-oscillation, Beat -> figure inversion.
  const curveAmp = (0.02 + curvature * (isMinimal ? 0.22 : 0.4)) * (1 + bass * (isMinimal ? 0.42 : 0.68) * macroPunch);
  const depthGlobal = depthAmt * ((isMinimal ? 0.56 : 0.84) + bass * 0.25 * macroPunch);
  const sideVibe = mid * (isMinimal ? 0.06 : 0.15) * macroChaos;
  const micro = high * (isMinimal ? 0.017 : 0.04) * (0.8 + macro * 0.7);
  const stringVibeAmount = stringVibeSensitivity * (0.2 + linesStringVibeSmooth * (0.95 + macro * 0.85));
  const invert = beatFlipEnabled ? linesInvertBlend : 1;
  const invertWarp = 1 + invert * 0.14;
  const invertPhase = invert * 0.75;

  const cyaw = Math.cos(linesCamYaw);
  const syaw = Math.sin(linesCamYaw);
  const cp = Math.cos(linesCamPitch);
  const sp = Math.sin(linesCamPitch);
  const perspBase = 1.1 + linesCamDist * 0.9;

  const projectLinePoint = (px, py, pz) => {
    const rx = px * cyaw - pz * syaw;
    const rz = px * syaw + pz * cyaw;
    const ry = py * cp - rz * sp;
    const rz2 = py * sp + rz * cp;
    const persp = 1 / Math.max(0.18, perspBase + rz2 * 0.85);
    return [cx + rx * persp * w * 0.46, cy + ry * persp * h * 0.46, persp];
  };

  // Keep Lines focused on one elegant family (no crossed mesh/grid overlays).
  const drawHorizontal = true;
  const drawVertical = false;
  const famGainH = 1;
  const famGainV = 0;

  const renderFamily = (vertical, famGain) => {
    for (let l = 0; l < layerCount; l++) {
      const layerN = layerCount <= 1 ? 0 : l / (layerCount - 1);
      const zLayer = (layerN - 0.5) * layerOffset * 1.2;
      const patternShape = linesPatternId === "flow" ? 1 : linesPatternId === "pulse" ? 1.18 : 0.9;
      const layerPhase = phaseBase * (0.8 + layerN * 0.7) * patternShape + layerN * Math.PI * 1.9 + (vertical ? 1.07 : 0);
      const hueLayer = fract01(colorShift + layerN * 0.08 + (vertical ? 0.04 : 0));
      for (let i = 0; i < lineCount; i++) {
        const yN = lineCount <= 1 ? 0 : i / (lineCount - 1);
        const y = (yN * 2 - 1) * 0.96;
        const hue = fract01(hueLayer + yN * 0.06);
        const sat = isMinimal
          ? clamp(0.06 + mid * 0.07 + layerN * 0.03 + energy * 0.03 + neonAmt * 0.2, 0.04, 0.36)
          : clamp(0.2 + mid * 0.18 + layerN * 0.1 + energy * 0.08 + neonAmt * 0.22, 0.14, 0.66);
        const lit = isMinimal
          ? clamp(0.62 + (1 - yN) * 0.12 + bass * 0.06 + neonAmt * 0.12, 0.4, 0.94)
          : clamp(0.34 + (1 - yN) * 0.22 + bass * 0.14 + high * 0.06 + neonAmt * 0.16, 0.16, 0.92);
        const [rr, gg, bb] = hslToRgb(hue, sat, lit);
        const alpha = clamp(
          ((isMinimal ? 0.14 : 0.2) + (1 - Math.abs(y)) * (isMinimal ? 0.3 : 0.44) + high * 0.16 + beat * 0.05 * macroPunch + lineGlow * 0.12) *
            famGain,
          isMinimal ? 0.05 : 0.08,
          isMinimal ? 0.9 : 0.94
        );
        ctx.strokeStyle = `rgba(${rr}, ${gg}, ${bb}, ${alpha})`;
        ctx.lineWidth = baseThick * (0.72 + layerN * 0.62) * (1 + high * 0.24 + beat * 0.06 + lineGlow * 0.18) * famGain;
        ctx.lineCap = "butt";
        ctx.lineJoin = "miter";
        const glowStrength = lineGlow * (0.76 + neonAmt * 0.46);
        const glowAlpha = clamp(0.06 + glowStrength * 0.24 + high * 0.1, 0.03, 0.42);
        const allowShadow = false;
        if (allowShadow) {
          ctx.shadowColor = `rgba(${rr}, ${gg}, ${bb}, ${glowAlpha})`;
          ctx.shadowBlur = clamp(0.6 + thickness * 0.12 + glowStrength * 9 + energy * 1.8, 0, 14);
        } else {
          ctx.shadowColor = "rgba(0,0,0,0)";
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        let penDown = false;
        for (let sIdx = 0; sIdx <= segCount; sIdx++) {
          const xN = segCount <= 0 ? 0 : sIdx / segCount;
          const x = xN * 2 - 1;
          const beatWarp = 1 + beat * 0.22 * macroPunch;
          const waveA = Math.sin(x * (3.2 + curvature * 7.4) * invertWarp * beatWarp + layerPhase + y * 2.1 + invertPhase) * curveAmp;
          const waveB = Math.cos(x * 6.6 - layerPhase * 0.64 + y * (2.4 + sideVibe * 4.4)) * curveAmp * (isMinimal ? 0.34 : 0.52);
          const vib = Math.sin(x * 20 + tSec * (2.4 + speed * 5.5) + i * 0.23) * micro;
          const stringFreq = 16 + yN * 30 + layerN * 11 + high * 14;
          const stringPhase = (vertical ? y : x) * stringFreq + tSec * (6.8 + speed * 8.8 + bass * 3.2) + i * 0.35 + l * 0.22;
          const stringOsc =
            (Math.sin(stringPhase) * 0.72 +
              Math.sin(stringPhase * 1.95 + tSec * (1.4 + high * 3.4)) * 0.28) *
            (0.004 + curvature * 0.016 + stringVibeAmount * 0.026);
          let px;
          let py;
          if (vertical) {
            px = y + waveA + vib;
            py = x + waveB + stringOsc + Math.sin(layerPhase + y * 2.8) * sideVibe + Math.sin(layerPhase * 0.5 + x * 2.2) * sideVibe * 0.32;
          } else {
            px = x + waveB + stringOsc + Math.sin(layerPhase + y * 3.2) * sideVibe + Math.sin(layerPhase * 0.6 + x * 2.6) * sideVibe * 0.35;
            py = y + waveA + vib;
          }
          // Minimal lines style only: keep deformation clean and stable.
          const pz = zLayer + Math.sin(x * 2.4 + layerPhase + y * 1.4) * (depthGlobal * 0.95);
          const [sx, sy, persp] = projectLinePoint(px, py, pz);
          const offLimitX = w * 0.65;
          const offLimitY = h * 0.65;
          const invalid =
            !Number.isFinite(sx) ||
            !Number.isFinite(sy) ||
            !Number.isFinite(persp) ||
            persp <= 0 ||
            persp > 3.4 ||
            sx < -offLimitX ||
            sx > w + offLimitX ||
            sy < -offLimitY ||
            sy > h + offLimitY;
          if (invalid) {
            penDown = false;
            continue;
          }
          if (!penDown) {
            ctx.moveTo(sx, sy);
            penDown = true;
          } else {
            ctx.lineTo(sx, sy);
          }
        }
        ctx.stroke();
      }
    }
  };

  if (drawHorizontal) renderFamily(false, famGainH);
  if (drawVertical) renderFamily(true, famGainV);

  // Keep pure matte black background in Lines mode: no global tint wash.

  // Constellation image/webcam overlay disabled in Lines mode to keep
  // composition focused on elegant line families only.
  linesConstellationNodes = [];
  linesConstellationCacheKey = "";
  linesConstellationTick = 0;
  ctx.globalCompositeOperation = "source-over";
  ctx.shadowBlur = 0;
  ctx.shadowColor = "rgba(0,0,0,0)";
}

function toggleBackgroundSyncMode() {
  bgSyncMode = !bgSyncMode;
  if (bgSyncMode && bgMode) {
    if (bgMode.value === "black") bgMode.value = "animated";
  }
  scheduleRender();
}

function applyTunnelPreset(presetId, withRender = true) {
  const id = String(presetId || "deep");
  if (id === "pulse") {
    if (liveTunnelCameraMode) liveTunnelCameraMode.value = "inside";
    if (liveTunnelDensity) liveTunnelDensity.value = "18";
    if (liveTunnelDepth) liveTunnelDepth.value = "84";
    if (liveTunnelSpeed) liveTunnelSpeed.value = "52";
    if (liveTunnelTwist) liveTunnelTwist.value = "62";
    if (liveTunnelMesh) liveTunnelMesh.value = "58";
    if (liveTunnelPoints) liveTunnelPoints.value = "88";
    if (liveTunnelGlow) liveTunnelGlow.value = "56";
    if (liveTunnelAudioAmount) liveTunnelAudioAmount.value = "82";
  } else if (id === "vortex") {
    if (liveTunnelCameraMode) liveTunnelCameraMode.value = "sweep";
    if (liveTunnelDensity) liveTunnelDensity.value = "28";
    if (liveTunnelDepth) liveTunnelDepth.value = "92";
    if (liveTunnelSpeed) liveTunnelSpeed.value = "64";
    if (liveTunnelTwist) liveTunnelTwist.value = "86";
    if (liveTunnelMesh) liveTunnelMesh.value = "86";
    if (liveTunnelPoints) liveTunnelPoints.value = "52";
    if (liveTunnelGlow) liveTunnelGlow.value = "42";
    if (liveTunnelAudioAmount) liveTunnelAudioAmount.value = "72";
  } else {
    if (liveTunnelCameraMode) liveTunnelCameraMode.value = "orbit";
    if (liveTunnelDensity) liveTunnelDensity.value = "22";
    if (liveTunnelDepth) liveTunnelDepth.value = "74";
    if (liveTunnelSpeed) liveTunnelSpeed.value = "42";
    if (liveTunnelTwist) liveTunnelTwist.value = "36";
    if (liveTunnelMesh) liveTunnelMesh.value = "78";
    if (liveTunnelPoints) liveTunnelPoints.value = "68";
    if (liveTunnelGlow) liveTunnelGlow.value = "38";
    if (liveTunnelAudioAmount) liveTunnelAudioAmount.value = "70";
  }
  updateLiveQuickOutputs();
  if (withRender) scheduleRender();
}

function randomizeTunnelCameraView() {
  if (mode !== "tunnel") return;
  tunnelCamYaw += (Math.random() * 2 - 1) * 0.95;
  tunnelCamPitch = clamp(tunnelCamPitch + (Math.random() * 2 - 1) * 0.52, -1.15, 1.15);
  tunnelCamDist = clamp(tunnelCamDist + (Math.random() * 2 - 1) * 0.3, 0.58, 2.2);
  tunnelCamYawTarget = tunnelCamYaw;
  tunnelCamPitchTarget = tunnelCamPitch;
  tunnelCamDistTarget = tunnelCamDist;
  scheduleRender();
}

function randomizeTunnelCameraViewSmooth() {
  if (mode !== "tunnel") return;
  tunnelCamYawTarget += (Math.random() * 2 - 1) * 1.2;
  tunnelCamPitchTarget = clamp(tunnelCamPitchTarget + (Math.random() * 2 - 1) * 0.62, -1.15, 1.15);
  tunnelCamDistTarget = clamp(tunnelCamDistTarget + (Math.random() * 2 - 1) * 0.34, 0.58, 2.2);
  scheduleRender();
}

function triggerTunnelMorphTween() {
  if (mode !== "tunnel") return;
  const now = performance.now();
  tunnelMorphTween = {
    start: now,
    duration: 760,
    from: {
      density: Number(liveTunnelDensity ? liveTunnelDensity.value : 22),
      depth: Number(liveTunnelDepth ? liveTunnelDepth.value : 74),
      speed: Number(liveTunnelSpeed ? liveTunnelSpeed.value : 42),
      twist: Number(liveTunnelTwist ? liveTunnelTwist.value : 36),
      mesh: Number(liveTunnelMesh ? liveTunnelMesh.value : 78),
      points: Number(liveTunnelPoints ? liveTunnelPoints.value : 68),
      glow: Number(liveTunnelGlow ? liveTunnelGlow.value : 38),
      audio: Number(liveTunnelAudioAmount ? liveTunnelAudioAmount.value : 70),
    },
    to: {
      density: Math.round(12 + Math.random() * 26),
      depth: Math.round(40 + Math.random() * 56),
      speed: Math.round(14 + Math.random() * 76),
      twist: Math.round(Math.random() * 100),
      mesh: Math.round(24 + Math.random() * 76),
      points: Math.round(24 + Math.random() * 76),
      glow: Math.round(Math.random() * 88),
      audio: Math.round(36 + Math.random() * 64),
    },
  };
  scheduleRender();
}

function applyTunnelMorphTween() {
  if (!tunnelMorphTween) return;
  const now = performance.now();
  let k = clamp((now - tunnelMorphTween.start) / Math.max(1, tunnelMorphTween.duration), 0, 1);
  k = k * k * (3 - 2 * k);
  const mix = (a, b) => Math.round(a + (b - a) * k);
  if (liveTunnelDensity) liveTunnelDensity.value = String(mix(tunnelMorphTween.from.density, tunnelMorphTween.to.density));
  if (liveTunnelDepth) liveTunnelDepth.value = String(mix(tunnelMorphTween.from.depth, tunnelMorphTween.to.depth));
  if (liveTunnelSpeed) liveTunnelSpeed.value = String(mix(tunnelMorphTween.from.speed, tunnelMorphTween.to.speed));
  if (liveTunnelTwist) liveTunnelTwist.value = String(mix(tunnelMorphTween.from.twist, tunnelMorphTween.to.twist));
  if (liveTunnelMesh) liveTunnelMesh.value = String(mix(tunnelMorphTween.from.mesh, tunnelMorphTween.to.mesh));
  if (liveTunnelPoints) liveTunnelPoints.value = String(mix(tunnelMorphTween.from.points, tunnelMorphTween.to.points));
  if (liveTunnelGlow) liveTunnelGlow.value = String(mix(tunnelMorphTween.from.glow, tunnelMorphTween.to.glow));
  if (liveTunnelAudioAmount) liveTunnelAudioAmount.value = String(mix(tunnelMorphTween.from.audio, tunnelMorphTween.to.audio));
  if (k >= 1) tunnelMorphTween = null;
}

function renderInfiniteTunnelMode(baseImageData, tSec, settings) {
  applyTunnelMorphTween();
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 2 || h <= 2) return;

  const density = clamp(Number(liveTunnelDensity ? liveTunnelDensity.value : 22), 8, 44);
  const depthAmt = clamp(Number(liveTunnelDepth ? liveTunnelDepth.value : 74) / 100, 0.2, 1);
  const speedAmt = clamp(Number(liveTunnelSpeed ? liveTunnelSpeed.value : 42) / 100, 0, 1);
  const twistAmt = clamp(Number(liveTunnelTwist ? liveTunnelTwist.value : 36) / 100, 0, 1);
  const meshAmt = clamp(Number(liveTunnelMesh ? liveTunnelMesh.value : 78) / 100, 0, 1);
  const pointsAmt = clamp(Number(liveTunnelPoints ? liveTunnelPoints.value : 68) / 100, 0, 1);
  const glowAmt = clamp(Number(liveTunnelGlow ? liveTunnelGlow.value : 38) / 100, 0, 1);
  const tunnelAudioOn = !liveTunnelAudio || liveTunnelAudio.checked;
  const tunnelAudioAmount = clamp(Number(liveTunnelAudioAmount ? liveTunnelAudioAmount.value : 70) / 100, 0, 1);
  const camMode = liveTunnelCameraMode ? liveTunnelCameraMode.value : "orbit";

  const audioState = getReactiveAudioState(settings, tunnelAudioOn, tunnelAudioAmount);
  const bands = audioState.bands || [0, 0, 0, 0];
  const dt = clamp(1 / Math.max(12, fps || 30), 0.01, 0.09);
  const frameMul = clamp((dt * 1000) / (1000 / 60), 0.55, 1.8);
  const smoothAR = (curr, target, att, rel) => curr + (target - curr) * (target > curr ? att : rel);
  tunnelAudioBassSmooth = smoothAR(tunnelAudioBassSmooth, clamp(bands[1] * 1.2 + bands[0] * 0.6 + audioState.transient * 0.42, 0, 2), 0.18, 0.09);
  tunnelAudioMidSmooth = smoothAR(tunnelAudioMidSmooth, clamp(bands[2] * 1.25 + bands[1] * 0.2, 0, 2), 0.16, 0.09);
  tunnelAudioHighSmooth = smoothAR(tunnelAudioHighSmooth, clamp(bands[3] * 1.35 + bands[2] * 0.2, 0, 2), 0.2, 0.12);
  tunnelAudioEnergySmooth = smoothAR(tunnelAudioEnergySmooth, clamp(audioState.level * 1.2 + audioState.transient * 0.55, 0, 2), 0.17, 0.1);
  const bass = tunnelAudioBassSmooth;
  const mid = tunnelAudioMidSmooth;
  const high = tunnelAudioHighSmooth;
  const energy = tunnelAudioEnergySmooth;
  const stringAudioDrive = clamp(
    (bass * 0.48 + mid * 0.44 + high * 0.24 + audioState.transient * 0.72 + energy * 0.32) * (0.35 + tunnelAudioAmount * 0.9),
    0,
    2.4
  );
  const diameterEase = 0.03 + speedAmt * 0.03;
  const diameterRest = tunnelDiameterCursorActive ? tunnelDiameterTarget : 1;
  tunnelDiameterSmooth += (diameterRest - tunnelDiameterSmooth) * diameterEase;
  const diameterOrganic =
    tunnelDiameterSmooth *
    (1 + Math.sin(tSec * (0.32 + speedAmt * 0.42) + tunnelCamYaw * 0.38) * (0.015 + speedAmt * 0.03));

  let desiredPitch = 0;
  if (camMode === "inside") {
    tunnelCamDistTarget += ((0.66 + (1 - depthAmt) * 0.18) - tunnelCamDistTarget) * 0.08;
    tunnelCamYawTarget += (0.006 + speedAmt * 0.028) * (1 + bass * 0.28) * frameMul;
    desiredPitch = Math.sin(tSec * (0.5 + speedAmt * 0.9)) * 0.2;
  } else if (camMode === "sweep") {
    tunnelCamDistTarget += ((1.04 + (1 - depthAmt) * 0.3) - tunnelCamDistTarget) * 0.06;
    tunnelCamYawTarget += (Math.sin(tSec * 0.22) * 0.002 + 0.003) * frameMul;
    desiredPitch = Math.cos(tSec * 0.18) * 0.13;
  } else if (camMode === "static") {
    tunnelCamDistTarget += (1.2 - tunnelCamDistTarget) * 0.08;
    tunnelCamYawTarget *= 0.95;
    desiredPitch = 0;
  } else {
    tunnelCamDistTarget += ((0.92 + (1 - depthAmt) * 0.36) - tunnelCamDistTarget) * 0.045;
    tunnelCamYawTarget += (0.0022 + Math.sin(tSec * (0.22 + speedAmt * 0.45)) * 0.0012) * frameMul;
    desiredPitch = Math.cos(tSec * (0.18 + speedAmt * 0.32)) * 0.1;
  }
  const pitchRecover = camMode === "inside" ? 0.07 : camMode === "sweep" ? 0.06 : 0.045;
  tunnelCamPitchTarget += (desiredPitch - tunnelCamPitchTarget) * pitchRecover * frameMul;
  tunnelCamPitchTarget = clamp(tunnelCamPitchTarget, -0.78, 0.78);
  tunnelCamYaw += (tunnelCamYawTarget - tunnelCamYaw) * 0.09;
  tunnelCamPitch += (tunnelCamPitchTarget - tunnelCamPitch) * 0.09;
  tunnelCamDist += (tunnelCamDistTarget - tunnelCamDist) * 0.09;

  const cx = w * 0.5;
  const cy = h * 0.5;
  const fpsLod = fps < 20 ? 0.55 : fps < 26 ? 0.72 : fps < 34 ? 0.88 : 1;
  const ringCount = clamp(Math.round((36 + density * 1.8) * fpsLod), 24, 120);
  const ringSides = clamp(Math.round((10 + density * 0.7) * fpsLod), 10, 42);
  const zStep = 2.8 - depthAmt * 1.35;
  const baseRadius = (6 + depthAmt * 14) * clamp(diameterOrganic, 0.58, 2.2);
  const speedZ = 18 + speedAmt * 62;
  const zOffset = tSec * speedZ;
  const fov = Math.max(w, h) * 0.88;
  const zoom = (0.82 + (2.0 - tunnelCamDist) * 0.45) * (1 + energy * 0.04);
  const tunnelScaleXY = Math.min(w, h) * 0.045;
  const tunnelScaleZ = Math.min(w, h) * 0.018;

  const cyaw = Math.cos(tunnelCamYaw);
  const syaw = Math.sin(tunnelCamYaw);
  const cp = Math.cos(tunnelCamPitch);
  const sp = Math.sin(tunnelCamPitch);
  const rotPoint = (x, y, z) => {
    const rx = x * cyaw - z * syaw;
    const rz = x * syaw + z * cyaw;
    const ry = y * cp - rz * sp;
    const rz2 = y * sp + rz * cp;
    return [rx, ry, rz2];
  };
  const pathCenter = (z) => {
    const swayX = Math.cos(z * 0.06) * (18 + mid * 7);
    const swayY = Math.cos(z * 0.09) * (9 + high * 4);
    return [swayX, swayY, z];
  };

  const cache = new Array(ringCount);
  const tunnelLen = ringCount * zStep;
  const lineAlphaBase = clamp(0.14 + meshAmt * 0.56 + glowAmt * 0.18, 0.08, 0.9);
  const pointAlphaBase = clamp(0.18 + pointsAmt * 0.62 + glowAmt * 0.14, 0.08, 0.94);
  const hueBase = fract01((settings.pointColorShift || 0) / 360 + tSec * (0.03 + high * 0.04));

  for (let i = 0; i < ringCount; i++) {
    const z = i * zStep + 8;
    const zLoop = ((z + zOffset) % Math.max(8, tunnelLen)) + 8;
    const worldZ = zLoop;
    const [cxp, cyp] = pathCenter(worldZ);
    const radius =
      baseRadius *
      (1 + Math.sin(worldZ * 0.12 + tSec * (0.8 + speedAmt * 2.1)) * (0.05 + mid * 0.09) + bass * 0.08 + energy * 0.06);
    const twist = worldZ * (0.04 + twistAmt * 0.18) + tSec * (0.16 + twistAmt * 1.2 + high * 0.4);
    const ring = new Array(ringSides);
    for (let j = 0; j < ringSides; j++) {
      const a = (j / ringSides) * Math.PI * 2 + twist;
      const rr = radius * (1 + Math.sin(a * 3 + tSec * (1.2 + high * 2.2)) * (0.02 + mid * 0.05));
      const wx = cxp + Math.cos(a) * rr;
      const wy = cyp + Math.sin(a) * rr;
      const wz = zLoop;
      const [rx, ry, rz] = rotPoint(wx * tunnelScaleXY, wy * tunnelScaleXY, wz * tunnelScaleZ);
      const [sx, sy, persp] = projectPoint3D(rx, ry, rz, w, h, fov, zoom);
      ring[j] = { sx, sy, p: persp, z: rz, a };
    }
    cache[i] = ring;
  }

  // Mesh
  if (meshAmt > 0.01) {
    for (let i = 0; i < ringCount - 1; i++) {
      const ringA = cache[i];
      const ringB = cache[i + 1];
      const ringN = i / Math.max(1, ringCount - 1);
      const ringPulse = 0.55 + 0.45 * Math.sin(tSec * (2.2 + stringAudioDrive * 1.8) + i * 0.24);
      const hue = fract01(hueBase + ringN * 0.2 + bass * 0.04);
      const sat = clamp(0.62 + mid * 0.26, 0.4, 1);
      const lit = clamp(0.36 + (1 - ringN) * 0.28 + high * 0.2, 0.2, 0.9);
      const [r, g, b] = hslToRgb(hue, sat, lit);
      const lineAlpha = lineAlphaBase * (1 - ringN * 0.68) * (0.9 + ringPulse * 0.25 + stringAudioDrive * 0.12);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
      ctx.lineWidth = clamp((0.5 + meshAmt * 1.6 + high * 0.9 + stringAudioDrive * 0.95) * (1 - ringN * 0.45), 0.35, 4.2);
      for (let j = 0; j < ringSides; j++) {
        const p0 = ringA[j];
        const p1 = ringA[(j + 1) % ringSides];
        const p2 = ringB[j];
        const vibA = (0.25 + stringAudioDrive * 1.2) * p0.p;
        const vibB = (0.25 + stringAudioDrive * 1.2) * p1.p;
        const jA = Math.sin(tSec * (10 + stringAudioDrive * 8) + j * 0.9 + i * 0.5) * vibA;
        const jB = Math.cos(tSec * (11 + stringAudioDrive * 7) + j * 0.82 + i * 0.4) * vibB;
        ctx.beginPath();
        ctx.moveTo(p0.sx + jA, p0.sy - jB * 0.55);
        ctx.lineTo(p1.sx - jB, p1.sy + jA * 0.45);
        ctx.stroke();
        if (j % 2 === 0) {
          ctx.beginPath();
          ctx.moveTo(p0.sx + jA * 0.7, p0.sy - jB * 0.4);
          ctx.lineTo(p2.sx - jA * 0.45, p2.sy + jB * 0.65);
          ctx.stroke();
        }
        if (j % 2 === 0) {
          const nodeR = clamp((0.3 + meshAmt * 1.1 + stringAudioDrive * 1.8) * p0.p, 0.18, 3.2);
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${clamp(lineAlpha * 1.25, 0.08, 0.9)})`;
          ctx.beginPath();
          ctx.arc(p0.sx + jA * 0.5, p0.sy - jB * 0.35, nodeR, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }

  // Points
  if (pointsAmt > 0.01) {
    for (let i = 0; i < ringCount; i++) {
      const ring = cache[i];
      const ringN = i / Math.max(1, ringCount - 1);
      for (let j = 0; j < ringSides; j++) {
        const p = ring[j];
        const hue = fract01(hueBase + j / ringSides * 0.22 + ringN * 0.14 + energy * 0.06);
        const sat = clamp(0.58 + high * 0.28 + glowAmt * 0.16, 0.35, 1);
        const lit = clamp(0.48 + (1 - ringN) * 0.34 + bass * 0.14, 0.25, 0.95);
        const [r, g, b] = hslToRgb(hue, sat, lit);
        const alpha = pointAlphaBase * (1 - ringN * 0.72);
        const rad = clamp((0.5 + pointsAmt * 1.5 + bass * 1.2 + high * 0.8) * p.p, 0.25, 4.8);
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  if (glowAmt > 0.01) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = clamp(0.05 + glowAmt * 0.24 + energy * 0.08, 0.05, 0.42);
    ctx.filter = `blur(${0.8 + glowAmt * 4.2}px)`;
    ctx.drawImage(canvas, 0, 0, w, h);
    ctx.restore();
  }
}

function applyInteriorPreset(presetId, withRender = true) {
  const id = String(presetId || "abyss");
  if (id === "pulse") {
    if (liveInteriorCameraMode) liveInteriorCameraMode.value = "dive";
    if (liveInteriorDensity) liveInteriorDensity.value = "18";
    if (liveInteriorDepth) liveInteriorDepth.value = "84";
    if (liveInteriorSpeed) liveInteriorSpeed.value = "48";
    if (liveInteriorWave) liveInteriorWave.value = "72";
    if (liveInteriorGlitch) liveInteriorGlitch.value = "30";
    if (liveInteriorGlow) liveInteriorGlow.value = "58";
    if (liveInteriorAudioAmount) liveInteriorAudioAmount.value = "78";
  } else if (id === "ruin") {
    if (liveInteriorCameraMode) liveInteriorCameraMode.value = "orbit";
    if (liveInteriorDensity) liveInteriorDensity.value = "30";
    if (liveInteriorDepth) liveInteriorDepth.value = "92";
    if (liveInteriorSpeed) liveInteriorSpeed.value = "62";
    if (liveInteriorWave) liveInteriorWave.value = "64";
    if (liveInteriorGlitch) liveInteriorGlitch.value = "74";
    if (liveInteriorGlow) liveInteriorGlow.value = "32";
    if (liveInteriorAudioAmount) liveInteriorAudioAmount.value = "62";
  } else {
    if (liveInteriorCameraMode) liveInteriorCameraMode.value = "orbit";
    if (liveInteriorDensity) liveInteriorDensity.value = "22";
    if (liveInteriorDepth) liveInteriorDepth.value = "78";
    if (liveInteriorSpeed) liveInteriorSpeed.value = "34";
    if (liveInteriorWave) liveInteriorWave.value = "56";
    if (liveInteriorGlitch) liveInteriorGlitch.value = "42";
    if (liveInteriorGlow) liveInteriorGlow.value = "44";
    if (liveInteriorAudioAmount) liveInteriorAudioAmount.value = "68";
  }
  updateLiveQuickOutputs();
  if (withRender) scheduleRender();
}

function randomizeInteriorCameraView() {
  if (mode !== "interior") return;
  interiorCamYaw += (Math.random() * 2 - 1) * 0.78;
  interiorCamPitch = clamp(interiorCamPitch + (Math.random() * 2 - 1) * 0.38, -0.86, 0.86);
  interiorCamDist = clamp(interiorCamDist + (Math.random() * 2 - 1) * 0.24, 0.68, 2.2);
  interiorCamYawTarget = interiorCamYaw;
  interiorCamPitchTarget = interiorCamPitch;
  interiorCamDistTarget = interiorCamDist;
  scheduleRender();
}

function randomizeInteriorCameraViewSmooth() {
  if (mode !== "interior") return;
  interiorCamYawTarget += (Math.random() * 2 - 1) * 0.9;
  interiorCamPitchTarget = clamp(interiorCamPitchTarget + (Math.random() * 2 - 1) * 0.46, -0.86, 0.86);
  interiorCamDistTarget = clamp(interiorCamDistTarget + (Math.random() * 2 - 1) * 0.28, 0.68, 2.2);
  scheduleRender();
}

function triggerInteriorMorphTween() {
  if (mode !== "interior") return;
  const now = performance.now();
  interiorMorphTween = {
    start: now,
    duration: 1200,
    from: {
      density: Number(liveInteriorDensity ? liveInteriorDensity.value : 22),
      depth: Number(liveInteriorDepth ? liveInteriorDepth.value : 78),
      speed: Number(liveInteriorSpeed ? liveInteriorSpeed.value : 34),
      wave: Number(liveInteriorWave ? liveInteriorWave.value : 56),
      glitch: Number(liveInteriorGlitch ? liveInteriorGlitch.value : 42),
      glow: Number(liveInteriorGlow ? liveInteriorGlow.value : 44),
      audio: Number(liveInteriorAudioAmount ? liveInteriorAudioAmount.value : 68),
    },
    to: {
      density: Math.round(12 + Math.random() * 30),
      depth: Math.round(34 + Math.random() * 64),
      speed: Math.round(8 + Math.random() * 82),
      wave: Math.round(Math.random() * 100),
      glitch: Math.round(Math.random() * 100),
      glow: Math.round(8 + Math.random() * 86),
      audio: Math.round(24 + Math.random() * 76),
    },
  };
  scheduleRender();
}

function applyInteriorMorphTween() {
  if (!interiorMorphTween) return;
  const now = performance.now();
  let k = clamp((now - interiorMorphTween.start) / Math.max(1, interiorMorphTween.duration), 0, 1);
  k = k * k * (3 - 2 * k);
  const mix = (a, b) => Math.round(a + (b - a) * k);
  if (liveInteriorDensity) liveInteriorDensity.value = String(mix(interiorMorphTween.from.density, interiorMorphTween.to.density));
  if (liveInteriorDepth) liveInteriorDepth.value = String(mix(interiorMorphTween.from.depth, interiorMorphTween.to.depth));
  if (liveInteriorSpeed) liveInteriorSpeed.value = String(mix(interiorMorphTween.from.speed, interiorMorphTween.to.speed));
  if (liveInteriorWave) liveInteriorWave.value = String(mix(interiorMorphTween.from.wave, interiorMorphTween.to.wave));
  if (liveInteriorGlitch) liveInteriorGlitch.value = String(mix(interiorMorphTween.from.glitch, interiorMorphTween.to.glitch));
  if (liveInteriorGlow) liveInteriorGlow.value = String(mix(interiorMorphTween.from.glow, interiorMorphTween.to.glow));
  if (liveInteriorAudioAmount) liveInteriorAudioAmount.value = String(mix(interiorMorphTween.from.audio, interiorMorphTween.to.audio));
  if (k >= 1) interiorMorphTween = null;
}

function ensureInteriorLayerState(layerCount) {
  if (interiorLayerZDisp.length === layerCount && interiorLayerZVel.length === layerCount && interiorLayerNoise.length === layerCount) return;
  interiorLayerZDisp = new Float32Array(layerCount);
  interiorLayerZVel = new Float32Array(layerCount);
  interiorLayerNoise = new Float32Array(layerCount);
  for (let i = 0; i < layerCount; i++) interiorLayerNoise[i] = randHash(i * 7 + 13, i * 11 + 31, 1109) * 2 - 1;
}

function renderInteriorBlackMode(baseImageData, tSec, settings) {
  applyInteriorMorphTween();
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 2 || h <= 2) return;

  const densityTarget = clamp(Number(liveInteriorDensity ? liveInteriorDensity.value : 22), 8, 48);
  const depthTarget = clamp(Number(liveInteriorDepth ? liveInteriorDepth.value : 78), 20, 100);
  const speedTarget = clamp(Number(liveInteriorSpeed ? liveInteriorSpeed.value : 34), 0, 100);
  const waveTarget = clamp(Number(liveInteriorWave ? liveInteriorWave.value : 56), 0, 100);
  const glitchTarget = clamp(Number(liveInteriorGlitch ? liveInteriorGlitch.value : 42), 0, 100);
  const glowTarget = clamp(Number(liveInteriorGlow ? liveInteriorGlow.value : 44), 0, 100);
  interiorDensitySmooth += (densityTarget - interiorDensitySmooth) * 0.1;
  interiorDepthSmooth += (depthTarget - interiorDepthSmooth) * 0.1;
  interiorSpeedSmooth += (speedTarget - interiorSpeedSmooth) * 0.1;
  interiorWaveSmooth += (waveTarget - interiorWaveSmooth) * 0.1;
  interiorGlitchSmooth += (glitchTarget - interiorGlitchSmooth) * 0.1;
  interiorGlowSmooth += (glowTarget - interiorGlowSmooth) * 0.1;
  const density = clamp(interiorDensitySmooth, 8, 48);
  const depthAmt = clamp(interiorDepthSmooth / 100, 0.2, 1);
  const speedAmt = clamp(interiorSpeedSmooth / 100, 0, 1);
  const waveAmt = clamp(interiorWaveSmooth / 100, 0, 1);
  const glitchAmt = clamp(interiorGlitchSmooth / 100, 0, 1);
  const glowAmt = clamp(interiorGlowSmooth / 100, 0, 1);
  const interiorAudioOn = !liveInteriorAudio || liveInteriorAudio.checked;
  const interiorAudioAmount = clamp(Number(liveInteriorAudioAmount ? liveInteriorAudioAmount.value : 68) / 100, 0, 1);
  const camMode = liveInteriorCameraMode ? liveInteriorCameraMode.value : "orbit";

  const audioState = getReactiveAudioState(settings, interiorAudioOn, interiorAudioAmount);
  const bands = audioState.bands || [0, 0, 0, 0];
  const smoothAR = (curr, target, att, rel) => curr + (target - curr) * (target > curr ? att : rel);
  interiorAudioBassSmooth = smoothAR(interiorAudioBassSmooth, clamp(bands[1] * 1.15 + bands[0] * 0.58 + audioState.transient * 0.4, 0, 2), 0.18, 0.09);
  interiorAudioMidSmooth = smoothAR(interiorAudioMidSmooth, clamp(bands[2] * 1.2 + bands[1] * 0.2, 0, 2), 0.16, 0.09);
  interiorAudioHighSmooth = smoothAR(interiorAudioHighSmooth, clamp(bands[3] * 1.34 + bands[2] * 0.2, 0, 2), 0.2, 0.12);
  interiorAudioEnergySmooth = smoothAR(interiorAudioEnergySmooth, clamp(audioState.level * 1.25 + audioState.transient * 0.55, 0, 2), 0.17, 0.1);
  const bass = interiorAudioBassSmooth;
  const mid = interiorAudioMidSmooth;
  const high = interiorAudioHighSmooth;
  const energy = interiorAudioEnergySmooth;
  const glitchDrive = clamp((bass * 0.46 + mid * 0.34 + high * 0.26 + audioState.transient * 0.75) * (0.24 + interiorAudioAmount * 0.92), 0, 2.4);
  interiorGlitchDriveSmooth += (glitchDrive - interiorGlitchDriveSmooth) * 0.11;
  const glitchDriveS = interiorGlitchDriveSmooth;
  const separationTarget = clamp((bass * 0.55 + audioState.transient * 1.05 + energy * 0.32) * (0.5 + interiorAudioAmount * 0.8), 0, 2.6);
  interiorAudioSeparationSmooth += (separationTarget - interiorAudioSeparationSmooth) * 0.09;
  const separationAudio = interiorAudioSeparationSmooth;

  interiorCursorX += (interiorCursorXTarget - interiorCursorX) * 0.08;
  interiorCursorY += (interiorCursorYTarget - interiorCursorY) * 0.08;

  if (camMode === "dive") {
    interiorCamDistTarget += ((0.8 + (1 - depthAmt) * 0.18) - interiorCamDistTarget) * 0.08;
    interiorCamYawTarget += (0.0038 + speedAmt * 0.015) * (1 + bass * 0.18);
    interiorCamPitchTarget += (Math.sin(tSec * (0.62 + speedAmt * 0.74)) * 0.14 - interiorCamPitchTarget) * 0.08;
  } else if (camMode === "static") {
    interiorCamDistTarget += (1.12 - interiorCamDistTarget) * 0.08;
    interiorCamYawTarget += Math.sin(tSec * 0.18) * 0.00065;
    interiorCamPitchTarget += (0 - interiorCamPitchTarget) * 0.08;
  } else {
    interiorCamDistTarget += ((0.98 + (1 - depthAmt) * 0.32) - interiorCamDistTarget) * 0.05;
    interiorCamYawTarget += 0.00145 + Math.sin(tSec * (0.21 + speedAmt * 0.34)) * 0.0009;
    interiorCamPitchTarget += (Math.cos(tSec * (0.2 + speedAmt * 0.25)) * 0.09 - interiorCamPitchTarget) * 0.04;
  }
  interiorCamPitchTarget = clamp(interiorCamPitchTarget, -0.72, 0.72);
  interiorCamDistTarget = clamp(interiorCamDistTarget, 0.68, 2.2);
  interiorCamYaw += (interiorCamYawTarget - interiorCamYaw) * 0.09;
  interiorCamPitch += (interiorCamPitchTarget - interiorCamPitch) * 0.09;
  interiorCamDist += (interiorCamDistTarget - interiorCamDist) * 0.09;

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  const masterOn = Boolean(masterFxMode && (masterFxMode.value || "none") !== "none");
  const kaleidoOn = isKaleidoFxActive();
  const domeOn = Boolean(liveOutputView && liveOutputView.value === "dome");
  const heavyStackCount = (masterOn ? 1 : 0) + (kaleidoOn ? 1 : 0) + (domeOn ? 1 : 0);
  const fpsLod = fps < 18 ? 0.46 : fps < 24 ? 0.64 : fps < 30 ? 0.8 : fps < 36 ? 0.92 : 1;
  const stackLod = heavyStackCount >= 2 ? 0.58 : heavyStackCount === 1 ? 0.74 : 1;
  const perfLod = fpsLod * stackLod;
  const gridCount = clamp(Math.round((4 + density * 0.2) * perfLod), 4, 14);
  const layerStride = perfLod < 0.62 ? 2 : 1;
  const layers = clamp(Math.round((12 + density * 0.36) * perfLod), 10, 34);
  const layerCount = Math.ceil(layers / layerStride);
  ensureInteriorLayerState(layerCount);
  const frontDrive = clamp(
    (bass * 0.58 + mid * 0.34 + audioState.transient * 1.2) * (0.18 + interiorAudioAmount * 0.82),
    0,
    3.4
  );
  const separationBoost = clamp(1 + waveAmt * 0.28 + separationAudio * 0.42, 1, 2.4);
  const gridGap = (3.35 - depthAmt * 0.78) * separationBoost;
  const layerStep = clamp(3.8 - depthAmt * 1.34, 1.55, 4.15);
  const fly = tSec * (16 + speedAmt * 66 + energy * 6);
  const fov = Math.max(w, h) * 0.88;
  const zoom = 0.92 + (2 - interiorCamDist) * 0.38 + energy * 0.05;
  const hueBase = fract01((settings.pointColorShift || 0) / 360 + tSec * (0.022 + high * 0.04));
  const cyaw = Math.cos(interiorCamYaw);
  const syaw = Math.sin(interiorCamYaw);
  const cp = Math.cos(interiorCamPitch * 0.75);
  const sp = Math.sin(interiorCamPitch * 0.75);
  const camX = Math.sin(tSec * (0.2 + speedAmt * 0.34)) * (1.1 + waveAmt * 2.35);
  const camY = Math.cos(tSec * (0.18 + speedAmt * 0.24)) * (0.9 + waveAmt * 1.7) + bass * 1.08;
  const camZ = fly;
  const projectLocal = (x, y, z) => {
    const dx = x - camX;
    const dy = y - camY;
    const dz = z - camZ;
    const rx = dx * cyaw - dz * syaw;
    const rz = dx * syaw + dz * cyaw;
    const ry = dy * cp - rz * sp;
    const rz2 = dy * sp + rz * cp;
    if (rz2 < 0.14 || rz2 > 180) return null;
    const [sx, sy, p] = projectPoint3D(rx * 24, -ry * 24, rz2 * 18, w, h, fov, zoom);
    if (!Number.isFinite(sx) || !Number.isFinite(sy)) return null;
    if (sx < -w * 0.55 || sx > w * 1.55 || sy < -h * 0.55 || sy > h * 1.55) return null;
    return { sx, sy, p, rz: rz2 };
  };
  const texturePhase = tSec * (0.22 + speedAmt * 0.34 + high * 0.08);
  const textureCycle = ((texturePhase % 3) + 3) % 3;
  const textureIndex = Math.floor(textureCycle);
  const textureBlend = textureCycle - textureIndex;
  const mixf = (a, b, k) => a + (b - a) * k;
  const smooth01 = (v) => {
    const k = clamp(v, 0, 1);
    return k * k * (3 - 2 * k);
  };

  let drawCount = 0;
  for (let li = 0; li < layers; li += layerStride) {
    const layerIndex = Math.floor(li / layerStride);
    const depthN = li / Math.max(1, layers - 1);
    const pulse = 0.5 + 0.5 * Math.sin(tSec * (1.3 + speedAmt * 1.8) + li * 0.31);
    const baseLayerZ =
      Math.sin(li * 0.18 + tSec * (0.22 + speedAmt * 0.5)) * (0.35 + waveAmt * 1.6) +
      Math.sin(tSec * (0.8 + speedAmt * 1.2) + interiorLayerNoise[layerIndex] * 4) * (0.12 + waveAmt * 0.66);
    const beatKick = frontDrive * (0.14 + (1 - depthN) * 0.26);
    const layerTargetZ = baseLayerZ + beatKick;
    interiorLayerZVel[layerIndex] += (layerTargetZ - interiorLayerZDisp[layerIndex]) * (0.068 + waveAmt * 0.14);
    interiorLayerZVel[layerIndex] *= 0.8 - waveAmt * 0.1;
    interiorLayerZDisp[layerIndex] += interiorLayerZVel[layerIndex];
    const zPlane = camZ + 8 + li * layerStep + interiorLayerZDisp[layerIndex] * (1.2 + waveAmt * 2.2);
    const layerShiftX = Math.sin(li * 0.14 + tSec * (0.3 + speedAmt * 0.4)) * (0.25 + waveAmt * 1.2);
    const layerShiftY = Math.cos(li * 0.12 - tSec * (0.28 + speedAmt * 0.36)) * (0.22 + waveAmt * 1.1);
    const cursorGridX = (interiorCursorX - 0.5) * gridCount * 2.2;
    const cursorGridY = (interiorCursorY - 0.5) * gridCount * 2.2;
    for (let gx = -gridCount; gx < gridCount; gx++) {
      for (let gy = -gridCount; gy < gridCount; gy++) {
        const radiusN = Math.hypot(gx, gy) / Math.max(1, gridCount - 1);
        if (radiusN > 1.05) continue;
        const parityMask = ((gx + gy + li) & 1) !== 0;
        if (parityMask && radiusN > 0.62) continue;
        const occupancy =
          0.5 +
          0.5 *
            Math.sin(
              gx * 0.92 +
              gy * 0.74 +
              li * 0.28 +
              tSec * (0.7 + waveAmt * 1.6) +
              Math.sin((gx - gy) * 0.16 + tSec * 0.5)
            );
        const occupancyGate = 0.2 + radiusN * 0.35 - waveAmt * 0.08 + separationAudio * 0.06;
        if (occupancy < occupancyGate) continue;
        const wobbleX = Math.sin((gy + li) * 0.4 + tSec * (0.9 + waveAmt * 1.8)) * (0.22 + waveAmt * 1.4);
        const wobbleY = Math.cos((gx - li) * 0.36 + tSec * (1.1 + waveAmt * 1.5)) * (0.2 + waveAmt * 1.35);
        const cx = gx * gridGap + wobbleX + layerShiftX;
        const cy = gy * gridGap + wobbleY + layerShiftY;
        const cursorDist = Math.hypot(gx - cursorGridX, gy - cursorGridY) / Math.max(1, gridCount * 1.24);
        const cursorInfluence = clamp(1 - cursorDist, 0, 1);
        const zVibe =
          Math.sin((gx * 0.58 + gy * 0.46 + li * 0.31) - tSec * (1.8 + speedAmt * 2.4)) * (0.08 + waveAmt * 0.76) +
          Math.cos((gx * 0.34 - gy * 0.52 + li * 0.21) + tSec * (1.1 + speedAmt * 1.8)) * (0.06 + waveAmt * 0.42);
        const zForward = frontDrive * (0.24 + (1 - radiusN) * 0.46) * (0.7 + 0.3 * Math.sin(tSec * 6.8 + gx * 0.5 + gy * 0.4 + li * 0.25));
        const zCursor = cursorInfluence * frontDrive * 0.52;
        const zCell = zPlane + zVibe + zForward + zCursor;
        const cellA = 0.5 + 0.5 * Math.sin((gx * 1.1 + gy * 0.7 + li * 0.33) + tSec * (2 + speedAmt * 3));
        const cellB = 0.5 + 0.5 * Math.sin((gx * 0.5 - gy * 1.2 + li * 0.2) * 2.4 - tSec * (1.6 + waveAmt * 2.4));
        const cellC = randHash(gx + li * 3, gy - li * 2, 1703) * 0.65 + 0.35 * pulse;
        const tex = textureIndex === 0 ? mixf(cellA, cellB, textureBlend) : textureIndex === 1 ? mixf(cellB, cellC, textureBlend) : mixf(cellC, cellA, textureBlend);
        const alphaGate = smooth01((Math.sin(tSec * (0.42 + speedAmt * 0.26) + gx * 0.22 + gy * 0.19 + li * 0.17) - 0.16) / 0.84);
        const seeThrough = 1 - alphaGate * (0.58 + waveAmt * 0.22 + glitchAmt * 0.16);

        const cellHalf = gridGap * clamp(0.44 + depthAmt * 0.18 + waveAmt * 0.06, 0.38, 0.68);
        const p0 = projectLocal(cx - cellHalf, cy - cellHalf, zCell);
        const p1 = projectLocal(cx + cellHalf, cy - cellHalf, zCell);
        const p2 = projectLocal(cx + cellHalf, cy + cellHalf, zCell);
        const p3 = projectLocal(cx - cellHalf, cy + cellHalf, zCell);
        if (!p0 || !p1 || !p2 || !p3) continue;

        const hue = fract01(hueBase + tex * 0.12 + depthN * 0.2 + bass * 0.05);
        const sat = clamp(0.55 + mid * 0.22 + tex * 0.16, 0.28, 1);
        const lit = clamp(0.3 + (1 - depthN) * 0.36 + high * 0.14, 0.16, 0.94);
        const [r, g, b] = hslToRgb(hue, sat, lit);
        const nearK = 1 - depthN * 0.76;
        const faceAlpha = clamp((0.04 + tex * 0.16 + glowAmt * 0.11) * nearK * seeThrough, 0.008, 0.24);
        const lineAlpha = clamp((0.1 + tex * 0.28 + glitchAmt * 0.14 + glowAmt * 0.1) * nearK, 0.03, 0.65);
        const lineW = clamp((0.34 + p0.p * 1.9 + high * 0.72) * (0.85 + tex * 0.5), 0.24, 3.6);

        if (fps >= 27 && nearK > 0.32 && ((gx + gy + li) % 4 === 0)) {
          const grad = ctx.createLinearGradient(p0.sx, p0.sy, p2.sx, p2.sy);
          const a0 = faceAlpha * (0.76 + tex * 0.34);
          const a1 = faceAlpha * (0.4 + (1 - tex) * 0.46);
          grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${a0})`);
          grad.addColorStop(1, `rgba(${Math.round(r * 0.72)}, ${Math.round(g * 0.78)}, ${Math.round(b * 0.9)}, ${a1})`);
          ctx.fillStyle = grad;
        } else {
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${faceAlpha})`;
        }
        ctx.beginPath();
        ctx.moveTo(p0.sx, p0.sy);
        ctx.lineTo(p1.sx, p1.sy);
        ctx.lineTo(p2.sx, p2.sy);
        ctx.lineTo(p3.sx, p3.sy);
        ctx.closePath();
        ctx.fill();

        const jx = Math.sin(tSec * (9 + glitchDriveS * 6) + gx * 0.6 + li * 0.28) * (0.11 + glitchAmt * 0.72) * p0.p;
        const jy = Math.cos(tSec * (8 + glitchDriveS * 5.3) + gy * 0.55 + li * 0.24) * (0.11 + glitchAmt * 0.72) * p0.p;
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${lineAlpha})`;
        ctx.lineWidth = lineW;
        ctx.beginPath();
        ctx.moveTo(p0.sx + jx, p0.sy + jy);
        ctx.lineTo(p1.sx - jy, p1.sy + jx * 0.4);
        ctx.lineTo(p2.sx + jx * 0.6, p2.sy - jy * 0.5);
        ctx.lineTo(p3.sx + jy * 0.5, p3.sy - jx * 0.4);
        ctx.closePath();
        ctx.stroke();

        if (tex > 0.52 && ((gx + gy + li) % 5 === 0) && nearK > 0.16) {
          const coreAlpha = clamp((0.14 + bass * 0.16 + glitchDriveS * 0.1) * nearK, 0.05, 0.6);
          const coreSize = clamp((gridGap * 0.18 + tex * 0.3) * p0.p * 12, 0.7, 2.8);
          const mx = (p0.sx + p1.sx + p2.sx + p3.sx) * 0.25;
          const my = (p0.sy + p1.sy + p2.sy + p3.sy) * 0.25;
          ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${coreAlpha})`;
          ctx.fillRect(mx - coreSize * 0.5, my - coreSize * 0.5, coreSize, coreSize);
        }
        drawCount++;
      }
    }
  }

  // Stabilize next frames if we hit a projection dead-zone (never draw a 2D fallback box).
  if (drawCount < 10) {
    interiorCamDistTarget = clamp(Math.max(interiorCamDistTarget, 0.84), 0.68, 2.2);
    interiorCamPitchTarget *= 0.85;
    interiorCamYawTarget += 0.0024;
  }

  if (glowAmt > 0.01) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = clamp(0.05 + glowAmt * 0.28 + energy * 0.08, 0.05, 0.46);
    ctx.filter = `blur(${0.8 + glowAmt * 4.4}px)`;
    ctx.drawImage(canvas, 0, 0, w, h);
    ctx.restore();
  }
}

function renderPointCloud(baseData, depthMap, settings, seed, tSec, lightDir) {
  const w = baseData.width;
  const h = baseData.height;
  const data = baseData.data;

  const spacing = clamp(Math.round((46 - settings.pointDensity) / Math.max(0.45, perfScale)), 4, 44);
  const pt = settings.pointMap / 100;
  const pointSize = settings.pointSize;
  const pointOpacityBoost = clamp((settings.live3dPointOpacity || 100) / 100, 0.2, 2.5);
  const depthWarp = clamp((settings.live3dDepthWarp || 0) / 100, 0, 1.4);
  const depthScale = settings.depthExaggeration / 100;
  const lift = (settings.pointLift / 100) * 240 * depthScale;
  const pointFloat = settings.pointFloat / 100;
  const organic = settings.pointOrganic / 100;
  const spread = (settings.pointSpread / 100) * 0.95;
  const j3d = (settings.glitch3d / 100) * 24;
  const exposure = settings.sceneExposure / 100;
  const ambient = settings.ambientLight / 100;
  const lightOn = settings.lightEnabled / 100;
  const flat = settings.flatIllustrated / 100;
  const lpow = settings.lightIntensity / 100;
  const motion = getCameraMotion(settings, tSec);
  const zoom = (settings.cameraZoom / 100) * motion.zoomMul;
  const panX = motion.panX * w * 0.5;
  const panY = motion.panY * h * 0.5;
  const colorShift = settings.pointColorShift / 360;
  const colorPulse = settings.pointColorPulse / 100;
  const depthWave = settings.depthColorWave / 100;
  const pointsAudioIntensity = clamp((settings.audioPointsIntensity || 100) / 100, 0, 2.2);
  const audioVar = clamp((settings.audioAnimVariation || 100) / 100, 0, 2.2);
  const audioAnim = audioAnimation ? audioAnimation.value : "lift";
  const audioTargetMode = audioTarget ? audioTarget.value : "points";
  const audioOn = hasAudioReactiveInput();
  const audioState = getReactiveAudioState(settings, audioOn, 1);
  const bands = audioState.bands;
  const bassBand = clamp((bands[1] * 1.1 + bands[0] * 0.45 + audioState.transient * 0.35), 0, 1.8);
  const highBand = clamp((bands[3] * 1.15 + bands[2] * 0.55), 0, 1.8);
  const audioSyncMotion = Boolean(live3dAudioSync && live3dAudioSync.checked);
  const audioToPoints = audioOn && (audioTargetMode === "points" || audioTargetMode === "both" || audioTargetMode === "all");
  const audioBoost = audioToPoints ? audioState.level : 0;
  const audioDriveBase = audioToPoints ? audioEnvelopeGate(audioBoost) * pointsAudioIntensity : 0;
  const audioDrive = clamp(audioDriveBase * 0.82 + bassBand * 0.42 + highBand * 0.22, 0, 2.3);
  const idleFloat = audioSyncMotion ? 0 : pointFloat;
  const idleOrganic = audioSyncMotion ? 0 : organic;
  const idleJ3d = audioSyncMotion ? 0 : j3d;
  const reactiveFloat = idleFloat + pointFloat * audioDrive * (audioSyncMotion ? 1.25 : 0.95);
  const reactiveOrganic = idleOrganic + organic * (audioDrive * 0.9 + highBand * 0.28);
  const reactiveJ3d = idleJ3d + j3d * (audioDrive * 0.82 + bassBand * 0.2);
  const audioLiftBoost = audioToPoints && (audioAnim === "lift" || audioAnim === "all") ? (audioDrive * 1.2 + bassBand * 0.75) : 0;
  const audioWaveBoost = audioToPoints && (audioAnim === "wave" || audioAnim === "all") ? (audioDrive * (1.15 * audioVar) + highBand * 0.78) : 0;
  const audioColorBoost = audioToPoints && (audioAnim === "color" || audioAnim === "all") ? (audioDrive * 0.9 + highBand * 0.7) : 0;
  const audioGeoBoost = audioToPoints ? (audioDrive * 1.05 + bassBand * 0.62) : 0;

  const rx = ((settings.pointRotateX + motion.rxDeg) * Math.PI) / 180;
  const ry = ((settings.pointRotateY + motion.ryDeg) * Math.PI) / 180;
  const rz = ((settings.pointRotateZ + motion.rzDeg) * Math.PI) / 180;
  const fov = Math.max(w, h) * 0.95;
  const liquidEnabled = cameraMode === "liquid";
  const liquidStrength = liquidEnabled
    ? clamp(
        0.28 +
          organic * 0.65 +
          pointFloat * 0.32 +
          (Math.abs(stageGeomMotionX) + Math.abs(stageGeomMotionY)) * 5.2,
        0,
        1.9
      )
    : 0;

  for (let y = 0; y < h; y += spacing) {
    for (let x = 0; x < w; x += spacing) {
      const idx = y * w + x;
      const i4 = idx * 4;
      const depth = depthMap[idx];
      const floatZ =
        Math.sin((x + y) * 0.045 + tSec * (1.4 + reactiveFloat * 5.6 + audioWaveBoost * (1.4 + audioVar * 0.4)) + seed * 0.01) *
        (reactiveFloat * 55 + audioGeoBoost * 22);
      const z = (depth - 0.5) * lift * (1 + audioLiftBoost * 1.08) + floatZ + (randHash(x, y, seed + 401) - 0.5) * (reactiveJ3d + audioGeoBoost * 8);
      const warpWave =
        Math.sin((x / Math.max(1, w)) * 6.2 + (y / Math.max(1, h)) * 4.6 + tSec * (0.8 + reactiveFloat * 1.4) + depth * 7.5 + seed * 0.002) *
        (depthWarp * (34 + depthScale * 44));
      const px0 = x - w * 0.5 + panX;
      const py0 = y - h * 0.5 + panY;
      const px = px0 * (1 + spread * depthScale * (depth - 0.25));
      const py = py0 * (1 + spread * depthScale * (depth - 0.25));

      const left = sampleDepth(depthMap, w, h, x - 1, y);
      const right = sampleDepth(depthMap, w, h, x + 1, y);
      const up = sampleDepth(depthMap, w, h, x, y - 1);
      const down = sampleDepth(depthMap, w, h, x, y + 1);
      const localInteraction = ((left + right + up + down) * 0.25 - depth);
      const organicWave =
        Math.sin((x * 0.018 + y * 0.022) + tSec * (0.9 + reactiveOrganic * 4.2 + audioWaveBoost * (1.1 + audioVar * 0.35)) + localInteraction * 16) *
        (reactiveOrganic * 28 + audioGeoBoost * 14);
      const [nx0, ny0, nz0] = normalize3((left - right) * 2.2, (up - down) * 2.2, 1.0);
      const [nnx, nny, nnz] = rotate3D(nx0, ny0, nz0, rx, ry, rz);
      const lit = Math.max(0, nnx * lightDir[0] + nny * lightDir[1] + nnz * lightDir[2]) * lpow * lightOn;
      const shadeRaw = ambient * (0.75 + 0.25 * lightOn) + lit;
      const shade = clamp(shadeRaw * (1 - flat * 0.85) + 1 * (flat * 0.85), 0, 2.6);

      let liqX = 0;
      let liqY = 0;
      let liqZ = 0;
      if (liquidEnabled) {
        [liqX, liqY, liqZ] = getLiquidWarp(x, y, depth, tSec, liquidStrength, seed, w, h);
      }
      const opx =
        px +
        Math.cos(tSec * 1.3 + y * 0.01 + localInteraction * 8) * (reactiveOrganic * 8 + Math.abs(localInteraction) * 5) +
        liqX;
      const opy =
        py +
        Math.sin(tSec * 1.1 + x * 0.01 + localInteraction * 8) * (reactiveOrganic * 8 + Math.abs(localInteraction) * 5) +
        liqY;
      const opz = z + organicWave + liqZ + warpWave;
      const [rxp, ryp, rzp] = rotate3D(opx, opy, opz, rx, ry, rz);
      const [sx, sy, persp] = projectPoint3D(rxp, ryp, rzp, w, h, fov, zoom);
      if (sx < -14 || sy < -14 || sx > w + 14 || sy > h + 14) continue;

      let r = clamp(data[i4] * shade * exposure, 0, 255);
      let g = clamp(data[i4 + 1] * shade * exposure, 0, 255);
      let b = clamp(data[i4 + 2] * shade * exposure, 0, 255);
      if (colorShift > 0 || colorPulse > 0 || depthWave > 0 || audioColorBoost > 0) {
        const [h, s, l] = rgbToHsl(r, g, b);
        const pulse = Math.sin(tSec * (0.8 + colorPulse * 3.5 + audioColorBoost * 4.2) + depth * (3 + depthWave * 18)) * (colorPulse + audioColorBoost * 0.6) * 0.22;
        const wave = Math.sin((x + y) * 0.01 + tSec * (1.2 + audioWaveBoost * 2.2)) * (depthWave + audioWaveBoost * 0.6) * 0.2;
        const [nr, ng, nb] = hslToRgb((h + colorShift + pulse + wave + 1) % 1, clamp(s + (colorPulse + audioColorBoost * 0.7) * 0.18, 0, 1), l);
        r = nr;
        g = ng;
        b = nb;
      }
      if (flat > 0.02) {
        const [fh, fs, fl] = rgbToHsl(r, g, b);
        const bands = 4 + Math.round(flat * 5);
        const ql = Math.round(fl * bands) / bands;
        const [fr, fg, fb] = hslToRgb(fh, clamp(fs + flat * 0.18, 0, 1), ql);
        r = fr;
        g = fg;
        b = fb;
      }
      const alpha = clamp(
        (0.22 + depth * 0.8 + reactiveOrganic * 0.16 * Math.abs(localInteraction) + audioGeoBoost * 0.18) * pt * pointOpacityBoost,
        0,
        1
      );
      const rad = clamp((pointSize + depth * pointSize * 2.3 + reactiveOrganic * 1.6 + audioGeoBoost * 2.2) * persp, 0.2, 18.5);

      ctx.beginPath();
      ctx.fillStyle = `rgba(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)},${alpha.toFixed(3)})`;
      ctx.arc(sx, sy, rad, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

function renderMesh(depthMap, settings, seed, tSec, lightDir) {
  if (settings.meshMap <= 0) return;

  const w = canvas.width;
  const h = canvas.height;
  const cell = clamp(Math.round(settings.meshDensity / Math.max(0.45, perfScale)), 8, 120);
  const intensity = settings.meshMap / 100;
  const meshOpacityBoost = clamp((settings.live3dMeshOpacity || 100) / 100, 0.2, 2.5);
  const depthWarp = clamp((settings.live3dDepthWarp || 0) / 100, 0, 1.4);
  const depthScale = settings.depthExaggeration / 100;
  const lift = (settings.meshLift / 100) * 240 * depthScale;
  const pointFloat = settings.pointFloat / 100;
  const organic = settings.pointOrganic / 100;
  const spread = (settings.pointSpread / 100) * 0.65;
  const j3d = (settings.glitch3d / 100) * 16;
  const exposure = settings.sceneExposure / 100;
  const ambient = settings.ambientLight / 100;
  const lightOn = settings.lightEnabled / 100;
  const flat = settings.flatIllustrated / 100;
  const lpow = settings.lightIntensity / 100;
  const motion = getCameraMotion(settings, tSec);
  const zoom = (settings.cameraZoom / 100) * motion.zoomMul;
  const panX = motion.panX * w * 0.5;
  const panY = motion.panY * h * 0.5;
  const colorShift = settings.pointColorShift / 360;
  const meshShift = settings.meshColorShift / 360;
  const meshGlow = settings.meshGlow / 100;
  const colorPulse = settings.pointColorPulse / 100;
  const depthWave = settings.depthColorWave / 100;
  const meshAudioIntensity = clamp((settings.audioMeshIntensity || 100) / 100, 0, 2.2);
  const audioVar = clamp((settings.audioAnimVariation || 100) / 100, 0, 2.2);
  const audioAnim = audioAnimation ? audioAnimation.value : "lift";
  const audioTargetMode = audioTarget ? audioTarget.value : "mesh";
  const audioOn = hasAudioReactiveInput();
  const audioState = getReactiveAudioState(settings, audioOn, 1);
  const bands = audioState.bands;
  const bassBand = clamp((bands[1] * 1.15 + bands[0] * 0.5 + audioState.transient * 0.35), 0, 1.9);
  const highBand = clamp((bands[3] * 1.12 + bands[2] * 0.6), 0, 1.9);
  const audioSyncMotion = Boolean(live3dAudioSync && live3dAudioSync.checked);
  const audioToMesh = audioOn && (audioTargetMode === "mesh" || audioTargetMode === "both" || audioTargetMode === "all");
  const audioBoost = audioToMesh ? audioState.level : 0;
  const audioDriveBase = audioToMesh ? audioEnvelopeGate(audioBoost) * meshAudioIntensity : 0;
  const audioDrive = clamp(audioDriveBase * 0.8 + bassBand * 0.45 + highBand * 0.22, 0, 2.3);
  const idleFloat = audioSyncMotion ? 0 : pointFloat;
  const idleOrganic = audioSyncMotion ? 0 : organic;
  const idleJ3d = audioSyncMotion ? 0 : j3d;
  const reactiveFloat = idleFloat + pointFloat * (audioDrive * 0.92 + bassBand * 0.2);
  const reactiveOrganic = idleOrganic + organic * (audioDrive * 0.88 + highBand * 0.26);
  const reactiveJ3d = idleJ3d + j3d * (audioDrive * 0.8 + bassBand * 0.2);
  const audioLiftBoost = audioToMesh && (audioAnim === "lift" || audioAnim === "all") ? (audioDrive * 1.08 + bassBand * 0.78) : 0;
  const audioWaveBoost = audioToMesh && (audioAnim === "wave" || audioAnim === "all") ? (audioDrive * (1.08 * audioVar) + highBand * 0.75) : 0;
  const audioColorBoost = audioToMesh && (audioAnim === "color" || audioAnim === "all") ? (audioDrive * 0.86 + highBand * 0.72) : 0;
  const audioGeoBoost = audioToMesh ? (audioDrive * 1.0 + bassBand * 0.66) : 0;

  const rx = ((settings.pointRotateX + motion.rxDeg) * Math.PI) / 180;
  const ry = ((settings.pointRotateY + motion.ryDeg) * Math.PI) / 180;
  const rz = ((settings.pointRotateZ + motion.rzDeg) * Math.PI) / 180;
  const fov = Math.max(w, h) * 0.95;
  const liquidEnabled = cameraMode === "liquid";
  const liquidStrength = liquidEnabled
    ? clamp(
        0.26 +
          organic * 0.58 +
          pointFloat * 0.34 +
          (Math.abs(stageGeomMotionX) + Math.abs(stageGeomMotionY)) * 4.7,
        0,
        1.8
      )
    : 0;

  ctx.save();
  ctx.globalCompositeOperation = "screen";
  ctx.lineWidth = 1;

  for (let y = 0; y <= h - cell; y += cell) {
    for (let x = 0; x <= w - cell; x += cell) {
      const p0 = y * w + x;
      const p1 = y * w + Math.min(w - 1, x + cell);
      const p2 = Math.min(h - 1, y + cell) * w + x;

      const fAmp = reactiveFloat * (34 + reactiveOrganic * 24) + audioGeoBoost * 17;
      const f0 = Math.sin((x + y) * 0.03 + tSec * (1.2 + reactiveFloat * 4.4 + reactiveOrganic * 2.2 + audioWaveBoost * (1.3 + audioVar * 0.42)) + seed * 0.01) * fAmp;
      const f1 = Math.sin((x + cell + y) * 0.03 + tSec * (1.2 + reactiveFloat * 4.4 + reactiveOrganic * 2.2 + audioWaveBoost * (1.3 + audioVar * 0.42)) + seed * 0.01) * fAmp;
      const f2 = Math.sin((x + y + cell) * 0.03 + tSec * (1.2 + reactiveFloat * 4.4 + reactiveOrganic * 2.2 + audioWaveBoost * (1.3 + audioVar * 0.42)) + seed * 0.01) * fAmp;
      const d0 = (depthMap[p0] - 0.5) * lift * (1 + audioLiftBoost * 1.06) + f0 + (randHash(x, y, seed + 700) - 0.5) * (reactiveJ3d + audioGeoBoost * 7);
      const d1 = (depthMap[p1] - 0.5) * lift * (1 + audioLiftBoost * 1.06) + f1 + (randHash(x + 2, y + 1, seed + 700) - 0.5) * (reactiveJ3d + audioGeoBoost * 7);
      const d2 = (depthMap[p2] - 0.5) * lift * (1 + audioLiftBoost * 1.06) + f2 + (randHash(x + 1, y + 2, seed + 700) - 0.5) * (reactiveJ3d + audioGeoBoost * 7);
      const warp0 =
        Math.sin((x / Math.max(1, w)) * 6.2 + (y / Math.max(1, h)) * 4.6 + tSec * (0.78 + reactiveFloat * 1.25) + depthMap[p0] * 7.2 + seed * 0.002) *
        (depthWarp * (30 + depthScale * 40));
      const warp1 =
        Math.sin((Math.min(w - 1, x + cell) / Math.max(1, w)) * 6.2 + (y / Math.max(1, h)) * 4.6 + tSec * (0.78 + reactiveFloat * 1.25) + depthMap[p1] * 7.2 + seed * 0.002) *
        (depthWarp * (30 + depthScale * 40));
      const warp2 =
        Math.sin((x / Math.max(1, w)) * 6.2 + (Math.min(h - 1, y + cell) / Math.max(1, h)) * 4.6 + tSec * (0.78 + reactiveFloat * 1.25) + depthMap[p2] * 7.2 + seed * 0.002) *
        (depthWarp * (30 + depthScale * 40));

      const x0 = x - w * 0.5 + panX;
      const y0 = y - h * 0.5 + panY;
      const x1n = Math.min(w - 1, x + cell) - w * 0.5 + panX;
      const y2n = Math.min(h - 1, y + cell) - h * 0.5 + panY;
      let liq0x = 0;
      let liq0y = 0;
      let liq0z = 0;
      let liq1x = 0;
      let liq1y = 0;
      let liq1z = 0;
      let liq2x = 0;
      let liq2y = 0;
      let liq2z = 0;
      if (liquidEnabled) {
        [liq0x, liq0y, liq0z] = getLiquidWarp(x, y, depthMap[p0], tSec, liquidStrength, seed + 13, w, h);
        [liq1x, liq1y, liq1z] = getLiquidWarp(Math.min(w - 1, x + cell), y, depthMap[p1], tSec, liquidStrength, seed + 31, w, h);
        [liq2x, liq2y, liq2z] = getLiquidWarp(x, Math.min(h - 1, y + cell), depthMap[p2], tSec, liquidStrength, seed + 59, w, h);
      }
      const [a1, b1, c1] = rotate3D(
        x0 * (1 + spread * (depthMap[p0] - 0.25)) + liq0x,
        y0 * (1 + spread * (depthMap[p0] - 0.25)) + liq0y,
        d0 + liq0z + warp0,
        rx,
        ry,
        rz
      );
      const [a2, b2, c2] = rotate3D(
        x1n * (1 + spread * (depthMap[p1] - 0.25)) + liq1x,
        y0 * (1 + spread * (depthMap[p1] - 0.25)) + liq1y,
        d1 + liq1z + warp1,
        rx,
        ry,
        rz
      );
      const [a3, b3, c3] = rotate3D(
        x0 * (1 + spread * (depthMap[p2] - 0.25)) + liq2x,
        y2n * (1 + spread * (depthMap[p2] - 0.25)) + liq2y,
        d2 + liq2z + warp2,
        rx,
        ry,
        rz
      );

      const [x1, y1] = projectPoint3D(a1, b1, c1, w, h, fov, zoom);
      const [x2, y2] = projectPoint3D(a2, b2, c2, w, h, fov, zoom);
      const [x3, y3] = projectPoint3D(a3, b3, c3, w, h, fov, zoom);

      const left = sampleDepth(depthMap, w, h, x - 1, y);
      const right = sampleDepth(depthMap, w, h, x + 1, y);
      const up = sampleDepth(depthMap, w, h, x, y - 1);
      const down = sampleDepth(depthMap, w, h, x, y + 1);
      const [nx0, ny0, nz0] = normalize3((left - right) * 2.2, (up - down) * 2.2, 1.0);
      const [nnx, nny, nnz] = rotate3D(nx0, ny0, nz0, rx, ry, rz);
      const lit = Math.max(0, nnx * lightDir[0] + nny * lightDir[1] + nnz * lightDir[2]) * lpow * lightOn;
      const shadeRaw = ambient * (0.75 + 0.25 * lightOn) + lit;
      const shade = clamp(shadeRaw * (1 - flat * 0.88) + 1 * (flat * 0.88), 0, 2.6);

      const alpha = clamp((0.14 + intensity * 0.65 + audioGeoBoost * 0.14) * shade * 0.8 * meshOpacityBoost, 0, 1);
      let r = clamp(110 * shade * exposure * (1 + meshGlow * 0.5), 0, 255);
      let g = clamp(210 * shade * exposure * (1 + meshGlow * 0.5), 0, 255);
      let b = clamp(255 * shade * exposure * (1 + meshGlow * 0.5), 0, 255);
      if (colorShift > 0 || meshShift > 0 || colorPulse > 0 || depthWave > 0 || audioColorBoost > 0) {
        const depthHere = sampleDepth(depthMap, w, h, x, y);
        const [h0, s0, l0] = rgbToHsl(r, g, b);
        const pulse = Math.sin(tSec * (0.8 + colorPulse * 3.5 + audioColorBoost * 4.2) + depthHere * (3 + depthWave * 18)) * (colorPulse + audioColorBoost * 0.6) * 0.2;
        const wave = Math.sin((x + y) * 0.015 + tSec * (1.1 + audioWaveBoost * 2.2)) * (depthWave + audioWaveBoost * 0.6) * 0.2;
        [r, g, b] = hslToRgb((h0 + colorShift + meshShift + pulse + wave + 1) % 1, clamp(s0 + (colorPulse + audioColorBoost * 0.7 + meshGlow * 0.45) * 0.14, 0, 1), l0);
      }
      if (flat > 0.02) {
        const [fh, fs, fl] = rgbToHsl(r, g, b);
        const bands = 4 + Math.round(flat * 6);
        const ql = Math.round(fl * bands) / bands;
        [r, g, b] = hslToRgb(fh, clamp(fs + flat * 0.2, 0, 1), ql);
      }

      ctx.strokeStyle = `rgba(${r.toFixed(0)},${g.toFixed(0)},${b.toFixed(0)},${alpha.toFixed(3)})`;

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x3, y3);
      ctx.stroke();
    }
  }

  ctx.restore();
}

function compositeFxGeometryOverBackground(bgData, preFxData, fxData) {
  const w = preFxData.width;
  const h = preFxData.height;
  const out = ctx.createImageData(w, h);
  const bd = bgData.data;
  const pd = preFxData.data;
  const fd = fxData.data;
  const od = out.data;
  for (let i = 0; i < pd.length; i += 4) {
    const diff =
      Math.abs(pd[i] - bd[i]) +
      Math.abs(pd[i + 1] - bd[i + 1]) +
      Math.abs(pd[i + 2] - bd[i + 2]);
    const hasGeometry = diff > 10;
    if (hasGeometry) {
      od[i] = fd[i];
      od[i + 1] = fd[i + 1];
      od[i + 2] = fd[i + 2];
      od[i + 3] = 255;
    } else {
      od[i] = bd[i];
      od[i + 1] = bd[i + 1];
      od[i + 2] = bd[i + 2];
      od[i + 3] = 255;
    }
  }
  return out;
}

function renderDepthModeClassic(baseImageData, settings, seed, tSec) {
  const working = copyImageData(baseImageData);
  const depthMap = buildDepthMap(working, settings.depthStrength);
  applyDepthDisplacement(working, depthMap, settings);
  applyDepthView(working, depthMap, settings.depthView);

  const lightDir = getLightDirection(settings);
  drawSceneBackground(working.width, working.height, lightDir, settings, tSec);
  const bgData = ctx.getImageData(0, 0, working.width, working.height);
  renderPointCloud(working, depthMap, settings, seed, tSec, lightDir);
  renderMesh(depthMap, settings, seed, tSec, lightDir);
  if (live3dFxMode && live3dFxMode.value !== "none") {
    const preFxData = ctx.getImageData(0, 0, working.width, working.height);
    updateStageGeometryMotion(preFxData, bgData);
    apply3dStageFilter(tSec);
    const fxData = ctx.getImageData(0, 0, working.width, working.height);
    const composed = compositeFxGeometryOverBackground(bgData, preFxData, fxData);
    ctx.putImageData(composed, 0, 0);
  } else {
    stageGeomMotionX *= 0.88;
    stageGeomMotionY *= 0.88;
  }
  apply3dAnaglyphStereo();
}

function renderDepthModeGpuBeta(baseImageData, settings, seed, tSec) {
  // Phase 3 hybrid: GPU prepass + GPU depth map, classic geometry path for visual parity.
  const pre = runDepthGpuPrepass(baseImageData, settings);
  const working = pre && pre.imageData ? pre.imageData : copyImageData(baseImageData);
  const depthMap = pre && pre.depthMap ? pre.depthMap : buildDepthMap(working, settings.depthStrength);
  const lightDir = getLightDirection(settings);
  drawSceneBackground(working.width, working.height, lightDir, settings, tSec);
  const bgData = ctx.getImageData(0, 0, working.width, working.height);
  renderPointCloud(working, depthMap, settings, seed, tSec, lightDir);
  renderMesh(depthMap, settings, seed, tSec, lightDir);
  if (live3dFxMode && live3dFxMode.value !== "none") {
    const preFxData = ctx.getImageData(0, 0, working.width, working.height);
    updateStageGeometryMotion(preFxData, bgData);
    apply3dStageFilter(tSec);
    const fxData = ctx.getImageData(0, 0, working.width, working.height);
    const composed = compositeFxGeometryOverBackground(bgData, preFxData, fxData);
    ctx.putImageData(composed, 0, 0);
  } else {
    stageGeomMotionX *= 0.88;
    stageGeomMotionY *= 0.88;
  }
  apply3dAnaglyphStereo();
}

function renderDepthMode(baseImageData, settings, seed, tSec) {
  const useGpu = depthRenderEngine === "gpu" && depthGpuAvailable;
  if (useGpu) {
    renderDepthModeGpuBeta(baseImageData, settings, seed, tSec);
    return;
  }
  renderDepthModeClassic(baseImageData, settings, seed, tSec);
}

function getParticlesTargetCount(level) {
  const map = {
    low: 12000,
    med: 28000,
    high: 55000,
    ultra: 90000,
  };
  return map[level] || map.med;
}

function ensureParticlesBuffers(baseImageData, ps) {
  const targetN = getParticlesTargetCount(ps.count);
  if (particlesBufferN === targetN && particlesX && particlesY && particlesU && particlesV) return;
  particlesBufferN = targetN;
  particlesBufferW = Math.max(1, Math.floor(Math.sqrt(targetN)));
  particlesBufferH = Math.max(1, Math.ceil(targetN / particlesBufferW));
  particlesX = new Float32Array(targetN);
  particlesY = new Float32Array(targetN);
  particlesZ = new Float32Array(targetN);
  particlesVX = new Float32Array(targetN);
  particlesVY = new Float32Array(targetN);
  particlesVZ = new Float32Array(targetN);
  particlesLife = new Float32Array(targetN);
  particlesU = new Float32Array(targetN);
  particlesV = new Float32Array(targetN);
  particlesSeed = new Float32Array(targetN);
  particlesDrawStride = 1;
  particlesPerfStreak = 0;
  initParticlesState(baseImageData, ps, true);
}

function initParticlesState(baseImageData, ps, fullReset = false) {
  if (!particlesX || !particlesY || !particlesU || !particlesV || !particlesSeed) return;
  const n = particlesBufferN;
  const w = baseImageData.width || 1;
  const h = baseImageData.height || 1;
  const data = baseImageData.data;
  const motGate = clamp(ps.motionThreshold / 100, 0, 1);
  for (let i = 0; i < n; i++) {
    const gx = (i % particlesBufferW) / Math.max(1, particlesBufferW - 1);
    const gy = Math.floor(i / particlesBufferW) / Math.max(1, particlesBufferH - 1);
    const u0 = clamp(gx, 0, 1);
    const v0 = clamp(gy, 0, 1);
    const ri = ((Math.floor(v0 * (h - 1)) * w + Math.floor(u0 * (w - 1))) * 4) | 0;
    const lum = data ? (data[ri] * 0.299 + data[ri + 1] * 0.587 + data[ri + 2] * 0.114) / 255 : 0.5;
    const seed = randHash(i, n, randomSeed + 777);
    particlesSeed[i] = seed;
    particlesU[i] = u0;
    particlesV[i] = v0;
    const split = getParticleAudioSplitState(ps, seed, 0);
    const target = getStructuredParticleTarget(ps, u0, v0, seed, i, n, 0, split);
    if (ps.structure && ps.structure !== "cloud") {
      particlesX[i] = target.x;
      particlesY[i] = target.y;
      particlesZ[i] = target.z;
    } else if (ps.emitter === "volume") {
      particlesX[i] = seed * 2 - 1;
      particlesY[i] = randHash(i, 11, randomSeed + 701) * 2 - 1;
      particlesZ[i] = randHash(i, 19, randomSeed + 703) * 2 - 1;
    } else if (ps.emitter === "motion") {
      const boost = visualFeatures.motion > motGate ? 1 : 0;
      const jx = (randHash(i, 31, randomSeed + 705) * 2 - 1) * (0.22 + boost * 0.38);
      const jy = (randHash(i, 41, randomSeed + 707) * 2 - 1) * (0.22 + boost * 0.38);
      particlesX[i] = (u0 * 2 - 1) * 0.85 + jx;
      particlesY[i] = (v0 * 2 - 1) * 0.85 + jy;
      particlesZ[i] = (lum - 0.5) * 1.8 + (randHash(i, 47, randomSeed + 709) * 2 - 1) * 0.2;
    } else {
      // Default cloud: volumetric spawn to avoid planar projection of source UV.
      const qx = randHash(i, 191, randomSeed + 913) * 2 - 1;
      const qy = randHash(i, 193, randomSeed + 919) * 2 - 1;
      const qz = randHash(i, 197, randomSeed + 929) * 2 - 1;
      const invLen = 1 / Math.max(0.001, Math.hypot(qx, qy, qz));
      const rad = Math.pow(randHash(i, 199, randomSeed + 937), 0.72) * 1.08;
      particlesX[i] = qx * invLen * rad + (u0 * 2 - 1) * 0.12;
      particlesY[i] = qy * invLen * rad + (v0 * 2 - 1) * 0.12;
      particlesZ[i] = qz * invLen * rad + (lum - 0.5) * 0.28;
    }
    if (fullReset) {
      particlesVX[i] = (randHash(i, 59, randomSeed + 711) * 2 - 1) * 0.02;
      particlesVY[i] = (randHash(i, 61, randomSeed + 713) * 2 - 1) * 0.02;
      particlesVZ[i] = (randHash(i, 67, randomSeed + 719) * 2 - 1) * 0.02;
    }
    particlesLife[i] = 0.55 + randHash(i, 73, randomSeed + 727) * 0.45;
  }
}

function getParticleAudioSplitState(ps, seed = 0, tSec = 0, reactive = null) {
  const audioState = reactive || getReactiveAudioState(getSettings(), ps.audioOn, (ps.audioAmount || 0) / 100);
  const bands = audioState.bands || [0, 0, 0, 0];
  const splitMode = ps.audioSplit || "basic";
  const audioOn = Boolean(ps.audioOn);
  if (!audioOn || splitMode === "off") {
    return { low: 0, bass: 0, mid: 0, high: 0, transient: 0, radial: 0, angular: 0, lift: 0 };
  }
  const base = clamp(audioState.level, 0, 2);
  const transient = clamp(audioState.transient * 0.95, 0, 2);
  const low = clamp((bands[0] * 0.9 + bands[1] * 0.5), 0, 2);
  const bass = clamp((bands[1] * 1.1 + bands[0] * 0.35), 0, 2);
  const mid = clamp((bands[2] * 1.05 + bands[1] * 0.25), 0, 2);
  const high = clamp((bands[3] * 1.18 + bands[2] * 0.2), 0, 2);
  if (splitMode === "zones") {
    // Zonal mapping: each particle region reads a dominant band.
    const zone = Math.floor(fract01(seed * 13.137 + tSec * 0.03) * 4);
    const zVal = zone === 0 ? bass : zone === 1 ? mid : zone === 2 ? high : low;
    return {
      low,
      bass,
      mid,
      high,
      transient,
      radial: clamp(zVal * 0.9 + transient * 0.25, 0, 2),
      angular: clamp((mid * 0.65 + high * 0.55 + transient * 0.35), 0, 2),
      lift: clamp((bass * 0.75 + low * 0.45 + transient * 0.5), 0, 2),
      base,
    };
  }
  return {
    low,
    bass,
    mid,
    high,
    transient,
    radial: clamp((bass * 0.8 + mid * 0.4 + transient * 0.3), 0, 2),
    angular: clamp((high * 0.8 + mid * 0.35), 0, 2),
    lift: clamp((low * 0.65 + bass * 0.45 + transient * 0.4), 0, 2),
    base,
  };
}

function getStructuredParticleTarget(ps, u, v, seed, idx, n, tSec, split) {
  const structure = ps.structure || "cloud";
  const order = clamp((ps.order || 0) / 100, 0, 1);
  const centeredX = u * 2 - 1;
  const centeredY = v * 2 - 1;
  const theta = Math.atan2(centeredY, centeredX);
  const radius2d = Math.hypot(centeredX, centeredY);
  const turns = 2 + Math.floor(order * 10);
  const twist = tSec * (0.15 + split.angular * 0.22);
  const radialPulse = 1 + split.radial * 0.24;
  const lift = split.lift * 0.5;

  if (structure === "grid") {
    return {
      x: centeredX * (0.92 + split.mid * 0.08),
      y: centeredY * (0.92 + split.high * 0.06),
      z: (v - 0.5) * (0.9 + split.bass * 0.35) + Math.sin((u + v + seed) * 8 + tSec * 1.2) * (0.04 + split.transient * 0.1),
    };
  }
  if (structure === "ring") {
    const ringR = clamp(0.42 + order * 0.42 + split.radial * 0.14, 0.18, 1.22);
    const a = theta + twist + seed * 0.22;
    return {
      x: Math.cos(a) * ringR * radialPulse,
      y: Math.sin(a) * ringR * radialPulse,
      z: (radius2d - 0.7) * 0.5 + Math.sin(a * 3 + tSec * 1.1) * (0.08 + lift * 0.18),
    };
  }
  if (structure === "helix") {
    const t = idx / Math.max(1, n - 1);
    const a = t * Math.PI * 2 * turns + twist * 2 + seed * 0.35;
    const r = clamp(0.22 + order * 0.42 + split.mid * 0.14, 0.12, 1.12);
    return {
      x: Math.cos(a) * r,
      y: Math.sin(a) * r,
      z: (t - 0.5) * (1.8 + split.bass * 0.7) + Math.sin(a * 0.5 + tSec) * (0.05 + split.transient * 0.14),
    };
  }
  if (structure === "mandala") {
    const petals = 4 + Math.floor(order * 16);
    const a = theta + twist * 0.9 + seed * 0.18;
    const petal = Math.cos(a * petals);
    const r = clamp((0.25 + radius2d * 0.58 + petal * 0.2) * radialPulse, 0.06, 1.28);
    return {
      x: Math.cos(a) * r,
      y: Math.sin(a) * r,
      z: petal * (0.22 + split.lift * 0.28) + Math.sin(a * 2 + tSec * 0.8) * 0.08,
    };
  }
  if (structure === "torus") {
    const major = clamp(0.34 + order * 0.46 + split.radial * 0.1, 0.2, 1.1);
    const minor = clamp(0.12 + order * 0.2 + split.high * 0.06, 0.06, 0.42);
    const uAng = theta + twist * 0.8 + seed * 0.42;
    const vAng = ((idx / Math.max(1, n - 1)) * Math.PI * 2 * (2 + Math.floor(order * 5))) + tSec * (0.32 + split.angular * 0.3);
    const tube = major + Math.cos(vAng) * minor;
    return {
      x: Math.cos(uAng) * tube,
      y: Math.sin(uAng) * tube,
      z: Math.sin(vAng) * minor * (1.2 + split.lift * 0.34),
    };
  }
  if (structure === "lissajous") {
    const t = (idx / Math.max(1, n - 1)) * Math.PI * 2;
    const ax = 2 + Math.floor(order * 5);
    const ay = 3 + Math.floor(order * 6);
    const az = 4 + Math.floor(order * 7);
    const phase = seed * Math.PI * 2;
    const amp = clamp(0.38 + order * 0.5 + split.radial * 0.08, 0.2, 1.18);
    const drive = t + tSec * (0.28 + split.angular * 0.4);
    return {
      x: Math.sin(ax * drive + phase) * amp,
      y: Math.sin(ay * drive + phase * 0.7) * amp * (0.88 + split.mid * 0.08),
      z: Math.sin(az * drive + phase * 1.3) * amp * (0.82 + split.lift * 0.16),
    };
  }
  if (structure === "attractor") {
    const t = (idx / Math.max(1, n - 1)) * Math.PI * 2;
    const a = 0.95 + order * 0.38;
    const b = 0.35 + order * 0.3 + split.mid * 0.12;
    const c = 0.45 + split.high * 0.16;
    const p = 1 + Math.floor(order * 5);
    const q = 2 + Math.floor(order * 6);
    const ang = t + tSec * (0.22 + split.angular * 0.24) + seed * 4.3;
    const s1 = Math.sin(ang * p);
    const s2 = Math.sin(ang * q + seed * 7.1);
    const x = s1 * (a + b * Math.cos(ang * 1.7));
    const y = s2 * (a - b * Math.sin(ang * 1.3));
    const z = Math.sin(ang * (p + q) * 0.35) * (c + split.lift * 0.22);
    return {
      x: x * 0.62,
      y: y * 0.62,
      z: z * 0.92,
    };
  }

  // cloud/default
  return {
    x: centeredX * 0.92 + (randHash(idx, 109, randomSeed + 811) * 2 - 1) * 0.14,
    y: centeredY * 0.92 + (randHash(idx, 113, randomSeed + 813) * 2 - 1) * 0.14,
    z: (v - 0.5) * (0.8 + split.bass * 0.22),
  };
}

function sampleSourceColor(baseImageData, u, v) {
  const w = baseImageData.width || 1;
  const h = baseImageData.height || 1;
  const x = clamp(Math.floor(u * (w - 1)), 0, w - 1);
  const y = clamp(Math.floor(v * (h - 1)), 0, h - 1);
  const i = (y * w + x) * 4;
  const d = baseImageData.data;
  return [d[i], d[i + 1], d[i + 2]];
}

function sampleSourceLuma(baseImageData, u, v) {
  const [r, g, b] = sampleSourceColor(baseImageData, u, v);
  return (r * 0.299 + g * 0.587 + b * 0.114) / 255;
}

function pushParticlesFaceSnapshot(nowMs) {
  if (!webcamActive || !detectedFaces.length) {
    particlesFaceHistory = [];
    return;
  }
  let primary = null;
  let areaBest = 0;
  for (const f of detectedFaces) {
    const area = Math.max(0, f.width) * Math.max(0, f.height);
    if (area > areaBest) {
      areaBest = area;
      primary = f;
    }
  }
  if (!primary) return;
  particlesFaceHistory.push({
    ts: nowMs,
    face: {
      x: clamp(primary.x, 0, 1),
      y: clamp(primary.y, 0, 1),
      width: clamp(primary.width, 0.02, 1),
      height: clamp(primary.height, 0.02, 1),
    },
  });
  const minTs = nowMs - 2500;
  while (particlesFaceHistory.length > 0 && particlesFaceHistory[0].ts < minTs) {
    particlesFaceHistory.shift();
  }
  if (particlesFaceHistory.length > 120) {
    particlesFaceHistory.splice(0, particlesFaceHistory.length - 120);
  }
}

function getParticlesDelayedFace(ps, nowMs) {
  if (!ps.faceTrack || !webcamActive || particlesFaceHistory.length === 0) return null;
  const delayMs = clamp((ps.faceDelay || 0) / 100, 0, 1) * 900;
  const targetTs = nowMs - delayMs;
  let pick = particlesFaceHistory[0];
  for (let i = particlesFaceHistory.length - 1; i >= 0; i--) {
    const snap = particlesFaceHistory[i];
    if (snap.ts <= targetTs) {
      pick = snap;
      break;
    }
  }
  return pick ? pick.face : null;
}

function buildParticlesFaceTargets(baseImageData, ps, nowMs) {
  if (!ps.faceTrack || !webcamActive) {
    particlesFaceHistory = [];
    return null;
  }
  pushParticlesFaceSnapshot(nowMs);
  const face = getParticlesDelayedFace(ps, nowMs);
  if (!face) return null;
  const area = face.width * face.height;
  if (area < 0.004) return null;

  const detail = clamp((ps.faceAmount || 0) / 100, 0, 1);
  const fpsK = fps < 26 ? 0.72 : fps < 32 ? 0.84 : 1;
  const cols = clamp(Math.round((12 + detail * 22) * fpsK), 10, 34);
  const rows = clamp(Math.round((14 + detail * 26) * fpsK), 10, 40);
  const points = [];
  const centerU = face.x + face.width * 0.5;
  const centerV = face.y + face.height * 0.52;

  for (let yy = 0; yy < rows; yy++) {
    const ty = yy / Math.max(1, rows - 1);
    const vy = ty * 2 - 1;
    for (let xx = 0; xx < cols; xx++) {
      const tx = xx / Math.max(1, cols - 1);
      const vx = tx * 2 - 1;
      const oval = (vx * vx) / 1.04 + (vy * vy) / 1.26;
      if (oval > 1) continue;
      const u = face.x + tx * face.width;
      const v = face.y + ty * face.height;
      const lum = sampleSourceLuma(baseImageData, u, v);
      const lumL = sampleSourceLuma(baseImageData, u - face.width * 0.012, v);
      const lumR = sampleSourceLuma(baseImageData, u + face.width * 0.012, v);
      const lumU = sampleSourceLuma(baseImageData, u, v - face.height * 0.012);
      const lumD = sampleSourceLuma(baseImageData, u, v + face.height * 0.012);
      const edge = Math.abs(lumR - lumL) + Math.abs(lumD - lumU);
      const ridge = Math.abs(vx) > 0.62 || vy < -0.56 || vy > 0.45;
      const featureZone =
        // eyes
        (((vx > -0.55 && vx < -0.1) || (vx > 0.1 && vx < 0.55)) && vy < -0.05 && vy > -0.5) ||
        // nose
        (Math.abs(vx) < 0.14 && vy > -0.28 && vy < 0.25) ||
        // mouth
        (Math.abs(vx) < 0.42 && vy > 0.2 && vy < 0.62);
      const keep = edge > (0.035 - detail * 0.014) || ridge || featureZone || (Math.random() < (0.18 + detail * 0.2));
      if (!keep) continue;
      points.push({
        x: clamp(u * 2 - 1, -1.2, 1.2) * 0.93,
        y: clamp(v * 2 - 1, -1.2, 1.2) * 0.93,
        z: (lum - 0.5) * 1.6,
      });
    }
  }
  if (!points.length) return null;
  const assignRatio = 0.48 + detail * 0.42;
  const spring = 0.02 + detail * 0.06;
  return {
    points,
    center: {
      x: clamp(centerU * 2 - 1, -1.2, 1.2) * 0.93,
      y: clamp(centerV * 2 - 1, -1.2, 1.2) * 0.93,
      z: 0,
    },
    assignRatio: clamp(assignRatio, 0.3, 0.92),
    spring,
    jitter: 0.004 + (1 - detail) * 0.007,
  };
}

function createParticlesGpuProgram(gl, vsSrc, fsSrc) {
  const mk = (type, src) => {
    const sh = gl.createShader(type);
    gl.shaderSource(sh, src);
    gl.compileShader(sh);
    if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
      const msg = gl.getShaderInfoLog(sh) || "shader compile error";
      gl.deleteShader(sh);
      throw new Error(msg);
    }
    return sh;
  };
  const vs = mk(gl.VERTEX_SHADER, vsSrc);
  const fs = mk(gl.FRAGMENT_SHADER, fsSrc);
  const prg = gl.createProgram();
  gl.attachShader(prg, vs);
  gl.attachShader(prg, fs);
  gl.linkProgram(prg);
  gl.deleteShader(vs);
  gl.deleteShader(fs);
  if (!gl.getProgramParameter(prg, gl.LINK_STATUS)) {
    const msg = gl.getProgramInfoLog(prg) || "program link error";
    gl.deleteProgram(prg);
    throw new Error(msg);
  }
  return prg;
}

function disableParticlesGpu(reason) {
  if (reason) console.warn("Particles GPU disabled:", reason);
  particlesGpuForcedOff = true;
  particlesGpuReady = false;
  particlesGpuTriedInit = true;
  particlesGpu = null;
}

function applyAtlasPreset(presetId, withRender = true) {
  const id = String(presetId || "ribbon");
  if (id === "orbital") {
    if (liveAtlasSeed) liveAtlasSeed.value = "66";
    if (liveAtlasVariation) liveAtlasVariation.value = "62";
    if (liveAtlasComposition) liveAtlasComposition.value = "68";
    if (liveAtlasComplexity) liveAtlasComplexity.value = "24";
    if (liveAtlasMotion) liveAtlasMotion.value = "52";
    if (liveAtlasContrast) liveAtlasContrast.value = "58";
    if (liveAtlasColorMod) liveAtlasColorMod.value = "72";
    if (liveAtlasMesh) liveAtlasMesh.value = "54";
    if (liveAtlasSpheres) liveAtlasSpheres.value = "46";
    if (liveAtlasAudioAmount) liveAtlasAudioAmount.value = "74";
  } else if (id === "shard") {
    if (liveAtlasSeed) liveAtlasSeed.value = "44";
    if (liveAtlasVariation) liveAtlasVariation.value = "76";
    if (liveAtlasComposition) liveAtlasComposition.value = "54";
    if (liveAtlasComplexity) liveAtlasComplexity.value = "28";
    if (liveAtlasMotion) liveAtlasMotion.value = "60";
    if (liveAtlasContrast) liveAtlasContrast.value = "66";
    if (liveAtlasColorMod) liveAtlasColorMod.value = "64";
    if (liveAtlasMesh) liveAtlasMesh.value = "62";
    if (liveAtlasSpheres) liveAtlasSpheres.value = "52";
    if (liveAtlasAudioAmount) liveAtlasAudioAmount.value = "78";
  } else {
    if (liveAtlasSeed) liveAtlasSeed.value = "52";
    if (liveAtlasVariation) liveAtlasVariation.value = "58";
    if (liveAtlasComposition) liveAtlasComposition.value = "58";
    if (liveAtlasComplexity) liveAtlasComplexity.value = "22";
    if (liveAtlasMotion) liveAtlasMotion.value = "46";
    if (liveAtlasContrast) liveAtlasContrast.value = "56";
    if (liveAtlasColorMod) liveAtlasColorMod.value = "62";
    if (liveAtlasMesh) liveAtlasMesh.value = "46";
    if (liveAtlasSpheres) liveAtlasSpheres.value = "36";
    if (liveAtlasAudioAmount) liveAtlasAudioAmount.value = "72";
  }
  if (liveAtlasAudio) liveAtlasAudio.checked = true;
  updateLiveQuickOutputs();
  if (withRender) scheduleRender();
}

function randomizeAtlasCameraView() {
  if (mode !== "atlas") return;
  // T shortcut: dive toward the core, but keep all motion interpolated.
  const diveBias = Math.random();
  const nearDist = diveBias < 0.7 ? 0.44 + Math.random() * 0.36 : 0.8 + Math.random() * 0.34;
  atlasCamYawTarget += (Math.random() * 2 - 1) * 1.65;
  atlasCamPitchTarget = clamp(atlasCamPitchTarget + (Math.random() * 2 - 1) * 0.8, -1.05, 1.05);
  atlasCamDistTarget = clamp(nearDist, 0.42, 1.6);
  atlasCamRigTarget = 1.05 + Math.random() * 0.45;
  scheduleRender();
}

function randomizeAtlasCameraViewSmooth() {
  if (mode !== "atlas") return;
  atlasCamYawTarget += (Math.random() * 2 - 1) * 1.0;
  atlasCamPitchTarget = clamp(atlasCamPitchTarget + (Math.random() * 2 - 1) * 0.5, -0.9, 0.9);
  atlasCamDistTarget = clamp(atlasCamDistTarget + (Math.random() * 2 - 1) * 0.3, 0.62, 2.2);
  scheduleRender();
}

function triggerAtlasMorphTween() {
  if (mode !== "atlas") return;
  const now = performance.now();
  atlasMorphTween = {
    start: now,
    duration: 820,
    from: {
      seed: Number(liveAtlasSeed ? liveAtlasSeed.value : 52),
      variation: Number(liveAtlasVariation ? liveAtlasVariation.value : 58),
      composition: Number(liveAtlasComposition ? liveAtlasComposition.value : 58),
      complexity: Number(liveAtlasComplexity ? liveAtlasComplexity.value : 22),
      motion: Number(liveAtlasMotion ? liveAtlasMotion.value : 46),
      contrast: Number(liveAtlasContrast ? liveAtlasContrast.value : 56),
      colorMod: Number(liveAtlasColorMod ? liveAtlasColorMod.value : 62),
      mesh: Number(liveAtlasMesh ? liveAtlasMesh.value : 46),
      spheres: Number(liveAtlasSpheres ? liveAtlasSpheres.value : 36),
      audioAmount: Number(liveAtlasAudioAmount ? liveAtlasAudioAmount.value : 72),
    },
    to: {
      seed: Math.round(12 + Math.random() * 76),
      variation: Math.round(Math.random() * 100),
      composition: Math.round(20 + Math.random() * 58),
      complexity: Math.round(6 + Math.random() * 24),
      motion: Math.round(Math.random() * 100),
      contrast: Math.round(22 + Math.random() * 78),
      colorMod: Math.round(20 + Math.random() * 78),
      mesh: Math.round(10 + Math.random() * 80),
      spheres: Math.round(8 + Math.random() * 86),
      audioAmount: Math.round(24 + Math.random() * 76),
    },
  };
  scheduleRender();
}

function applyAtlasMorphTween() {
  if (!atlasMorphTween) return;
  const now = performance.now();
  let k = clamp((now - atlasMorphTween.start) / Math.max(1, atlasMorphTween.duration), 0, 1);
  const mix = (a, b) => Math.round(a + (b - a) * k);
  if (liveAtlasSeed) liveAtlasSeed.value = String(mix(atlasMorphTween.from.seed, atlasMorphTween.to.seed));
  if (liveAtlasVariation) liveAtlasVariation.value = String(mix(atlasMorphTween.from.variation, atlasMorphTween.to.variation));
  if (liveAtlasComposition) liveAtlasComposition.value = String(mix(atlasMorphTween.from.composition, atlasMorphTween.to.composition));
  if (liveAtlasComplexity) liveAtlasComplexity.value = String(mix(atlasMorphTween.from.complexity, atlasMorphTween.to.complexity));
  if (liveAtlasMotion) liveAtlasMotion.value = String(mix(atlasMorphTween.from.motion, atlasMorphTween.to.motion));
  if (liveAtlasContrast) liveAtlasContrast.value = String(mix(atlasMorphTween.from.contrast, atlasMorphTween.to.contrast));
  if (liveAtlasColorMod) liveAtlasColorMod.value = String(mix(atlasMorphTween.from.colorMod, atlasMorphTween.to.colorMod));
  if (liveAtlasMesh) liveAtlasMesh.value = String(mix(atlasMorphTween.from.mesh, atlasMorphTween.to.mesh));
  if (liveAtlasSpheres) liveAtlasSpheres.value = String(mix(atlasMorphTween.from.spheres, atlasMorphTween.to.spheres));
  if (liveAtlasAudioAmount) liveAtlasAudioAmount.value = String(mix(atlasMorphTween.from.audioAmount, atlasMorphTween.to.audioAmount));
  if (k >= 1) atlasMorphTween = null;
}

function renderAtlasMode(baseImageData, tSec, settings) {
  applyAtlasMorphTween();
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 2 || h <= 2) return;

  const seedTarget = clamp(Number(liveAtlasSeed ? liveAtlasSeed.value : 52), 0, 100);
  const variationTarget = clamp(Number(liveAtlasVariation ? liveAtlasVariation.value : 58), 0, 100);
  const compositionTarget = clamp(Number(liveAtlasComposition ? liveAtlasComposition.value : 58), 0, 100);
  const complexityTarget = clamp(Number(liveAtlasComplexity ? liveAtlasComplexity.value : 22), 0, 30);
  const motionTarget = clamp(Number(liveAtlasMotion ? liveAtlasMotion.value : 46), 0, 100);
  const contrastTarget = clamp(Number(liveAtlasContrast ? liveAtlasContrast.value : 56), 0, 100);
  const colorModTarget = clamp(Number(liveAtlasColorMod ? liveAtlasColorMod.value : 62), 0, 100);
  const meshTarget = clamp(Number(liveAtlasMesh ? liveAtlasMesh.value : 46), 0, 100);
  const spheresTarget = clamp(Number(liveAtlasSpheres ? liveAtlasSpheres.value : 36), 0, 100);
  const snapBlend = (curr, target, baseRate = 0.17, maxRate = 0.42) => {
    const delta = Math.abs(target - curr);
    const rate = clamp(baseRate + delta * 0.0065, baseRate, maxRate);
    return curr + (target - curr) * rate;
  };
  atlasSeedSmooth = snapBlend(atlasSeedSmooth, seedTarget, 0.18, 0.44);
  atlasVariationSmooth = snapBlend(atlasVariationSmooth, variationTarget, 0.18, 0.44);
  atlasCompositionSmooth = snapBlend(atlasCompositionSmooth, compositionTarget, 0.2, 0.46);
  atlasComplexitySmooth = snapBlend(atlasComplexitySmooth, complexityTarget, 0.1, 0.22);
  atlasMotionSmooth = snapBlend(atlasMotionSmooth, motionTarget, 0.19, 0.45);
  atlasContrastSmooth = snapBlend(atlasContrastSmooth, contrastTarget, 0.17, 0.42);
  atlasColorModSmooth = snapBlend(atlasColorModSmooth, colorModTarget, 0.16, 0.36);
  atlasMeshSmooth = snapBlend(atlasMeshSmooth, meshTarget, 0.16, 0.36);
  atlasSpheresSmooth = snapBlend(atlasSpheresSmooth, spheresTarget, 0.16, 0.36);

  const morph = clamp(atlasSeedSmooth / 100, 0, 1);
  const displacement = clamp(atlasVariationSmooth / 100, 0, 1);
  const volume = clamp(atlasCompositionSmooth / 100, 0, 1);
  const structure = clamp(atlasComplexitySmooth / 30, 0, 1);
  const fluid = clamp(atlasMotionSmooth / 100, 0, 1);
  const contrast = clamp(atlasContrastSmooth / 100, 0, 1);
  const colorMod = clamp(atlasColorModSmooth / 100, 0, 1);
  const meshAmt = clamp(atlasMeshSmooth / 100, 0, 1);
  const spheresAmt = clamp(atlasSpheresSmooth / 100, 0, 1);
  const atlasAudioOn = !liveAtlasAudio || liveAtlasAudio.checked;
  const atlasAudioAmount = clamp(Number(liveAtlasAudioAmount ? liveAtlasAudioAmount.value : 72) / 100, 0, 1);
  const preset = liveAtlasPreset ? (liveAtlasPreset.value || "ribbon") : "ribbon";
  const presetSeedBase = preset === "orbital" ? 2237 : preset === "shard" ? 4781 : 1373;
  const seed = Math.round(presetSeedBase + morph * 971);

  const audioState = getReactiveAudioState(settings, atlasAudioOn, atlasAudioAmount);
  const bands = audioState.bands || [0, 0, 0, 0];
  const smoothAR = (curr, target, att, rel) => curr + (target - curr) * (target > curr ? att : rel);
  atlasAudioBassSmooth = smoothAR(atlasAudioBassSmooth, clamp(bands[1] * 1.2 + bands[0] * 0.6 + audioState.transient * 0.35, 0, 2), 0.18, 0.09);
  atlasAudioMidSmooth = smoothAR(atlasAudioMidSmooth, clamp(bands[2] * 1.15 + bands[1] * 0.2, 0, 2), 0.16, 0.09);
  atlasAudioHighSmooth = smoothAR(atlasAudioHighSmooth, clamp(bands[3] * 1.25 + bands[2] * 0.18, 0, 2), 0.2, 0.1);
  atlasAudioEnergySmooth = smoothAR(atlasAudioEnergySmooth, clamp(audioState.level * 1.2 + audioState.transient * 0.45, 0, 2), 0.17, 0.1);
  const bass = atlasAudioBassSmooth;
  const mid = atlasAudioMidSmooth;
  const high = atlasAudioHighSmooth;
  const energy = atlasAudioEnergySmooth;

  const aggression = clamp(0.2 + displacement * 0.46 + fluid * 0.56 + energy * 0.22, 0, 1.45);
  const topologyDrive = clamp(0.18 + displacement * 0.5 + fluid * 0.38 + structure * 0.3, 0, 1.32);
  const rigPeriod = 6.6 - fluid * 3.2 + (1 - displacement) * 1.2;
  const rigTime = (tSec / Math.max(2.2, rigPeriod)) + seed * 0.00093;
  const rigBase = Math.floor(rigTime) % 4;
  const rigFrac = rigTime - Math.floor(rigTime);
  const rigBlend = rigFrac * rigFrac * (3 - 2 * rigFrac);
  const nextRig = (rigBase + 1) % 4;
  atlasCamRigTarget = rigBase + (nextRig - rigBase) * rigBlend;
  atlasCamRig += (atlasCamRigTarget - atlasCamRig) * (0.032 + fluid * 0.024);
  const rigA = Math.round(clamp(atlasCamRig, 0, 3));
  const rigBias = rigA === 1 ? clamp(0.62 + aggression * 0.28, 0, 1) : 0; // inside
  const rigLevitate = rigA === 2 ? clamp(0.54 + aggression * 0.26, 0, 1) : 0; // levitate
  const rigFloat = rigA === 3 ? clamp(0.58 + aggression * 0.24, 0, 1) : 0; // floating drift

  const yawForce =
    Math.sin(tSec * (0.13 + fluid * 0.3) + seed * 0.0018) * (0.0009 + aggression * 0.00095) +
    Math.cos(tSec * (0.08 + displacement * 0.22) + high * 2.2) * 0.00065 * (0.28 + aggression * 0.82);
  const pitchForce =
    Math.cos(tSec * (0.11 + fluid * 0.27) + seed * 0.0007) * (0.00082 + aggression * 0.0009) +
    Math.sin(tSec * (0.16 + displacement * 0.24) + bass * 1.6) * 0.00062 * (0.24 + aggression * 0.78);
  atlasCamYawTarget += yawForce;
  atlasCamPitchTarget += pitchForce + (rigLevitate * 0.0012 - rigBias * 0.00055);
  // Camera follows curve flow slowly, keeping a medusa-like drift.
  const curveGuideYaw = Math.sin(tSec * (0.18 + fluid * 0.22) + seed * 0.0011 + morph * Math.PI * 2) * (0.34 + displacement * 0.26);
  const curveGuidePitch = Math.cos(tSec * (0.16 + fluid * 0.2) + seed * 0.0009 + morph * Math.PI * 1.7) * (0.26 + displacement * 0.18);
  atlasCamYawTarget += (curveGuideYaw - atlasCamYawTarget) * (0.007 + fluid * 0.006);
  atlasCamPitchTarget += (curveGuidePitch - atlasCamPitchTarget) * (0.007 + fluid * 0.006);

  const travelBase = 0.8 + (1 - volume) * 0.72;
  const insideTarget = 0.44 + (1 - volume) * 0.24 + bass * 0.14;
  const floatTarget = 1.2 + displacement * 0.76 + high * 0.22;
  const levitateTarget = 0.92 + (1 - volume) * 0.48 + Math.sin(tSec * (0.24 + fluid * 0.32)) * 0.18;
  const rigDist = travelBase * (1 - rigBias - rigFloat - rigLevitate) + insideTarget * rigBias + floatTarget * rigFloat + levitateTarget * rigLevitate;
  atlasCamDistTarget += (rigDist - atlasCamDistTarget) * (0.026 + fluid * 0.023);
  atlasCamPitchTarget = clamp(atlasCamPitchTarget, -1.1, 1.1);
  atlasCamYaw += (atlasCamYawTarget - atlasCamYaw) * 0.043;
  atlasCamPitch += (atlasCamPitchTarget - atlasCamPitch) * 0.043;
  atlasCamDist += (atlasCamDistTarget - atlasCamDist) * 0.052;
  atlasCamDist = clamp(atlasCamDist, 0.42, 2.4);

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, h);

  const masterOn = Boolean(masterFxMode && (masterFxMode.value || "none") !== "none");
  const kaleidoOn = isKaleidoFxActive();
  const stackCut = (masterOn ? 0.12 : 0) + (kaleidoOn ? 0.08 : 0);
  // Stable topology: avoid FPS/audio-driven LOD jumps that cause flicker.
  const qualityBudget = clamp(1 - stackCut, 0.64, 1);
  const stripeLayers = clamp(Math.round((2 + structure * 2.2 + topologyDrive * 0.5) * qualityBudget), 2, 4);
  const stripesPerLayer = clamp(Math.round((8 + structure * 18 + displacement * 8) * qualityBudget), 8, 34);
  const stripeSteps = clamp(Math.round((30 + structure * 24 + fluid * 8) * qualityBudget), 26, 56);

  const cyaw = Math.cos(atlasCamYaw);
  const syaw = Math.sin(atlasCamYaw);
  const cp = Math.cos(atlasCamPitch);
  const sp = Math.sin(atlasCamPitch);
  const cx = w * 0.5;
  const cy = h * 0.5;
  const perspBase = 0.92 + atlasCamDist * 0.88;
  const projectAtlasPoint = (x, y, z) => {
    const rx = x * cyaw - z * syaw;
    const rz = x * syaw + z * cyaw;
    const ry = y * cp - rz * sp;
    const rz2 = y * sp + rz * cp;
    const p = 1 / Math.max(0.2, perspBase + rz2 * 0.9);
    return [cx + rx * p * w * 0.45, cy + ry * p * h * 0.45, p];
  };

  // Layered moire ribbons (optical illusion field).
  for (let l = 0; l < stripeLayers; l++) {
    const lN = stripeLayers <= 1 ? 0 : l / (stripeLayers - 1);
    const layerPhase = lN * Math.PI * 1.7 + seed * 0.0013;
    const zBase = (lN - 0.5) * (0.88 + volume * 1.18);
    for (let i = 0; i < stripesPerLayer; i++) {
      const iN = stripesPerLayer <= 1 ? 0 : i / (stripesPerLayer - 1);
      const alt = i % 2 === 0 ? 1 : 0;
      const radiusBase = 0.08 + iN * (0.76 + volume * 0.58);
      const path = [];
      let depthAcc = 0;
      for (let s = 0; s <= stripeSteps; s++) {
        const a = (s / stripeSteps) * Math.PI * 2;
        const waveA = Math.sin(a * (2 + displacement * 3.6 + morph * 1.9) + tSec * (0.24 + fluid * 0.92) + layerPhase + iN * (5.2 + morph * 2.1));
        const waveB = Math.cos(a * (3.2 + displacement * 4.8 + morph * 1.5) - tSec * (0.22 + fluid * 1.05 + morph * 0.32) + layerPhase * 0.66 + iN * (7 + morph * 2.2));
        const rad = radiusBase * (1 + waveA * (0.06 + displacement * 0.2 + morph * 0.1) + waveB * (0.03 + displacement * 0.14 + morph * 0.08));
        const x = Math.cos(a) * rad * (0.86 + volume * 0.62 + morph * 0.18);
        const y = Math.sin(a) * rad * (0.64 + volume * 0.84 + morph * 0.14);
        const z = zBase + Math.sin(a * (1.7 + displacement * 3.7 + morph * 1.6) + iN * 7.5 + tSec * (0.2 + fluid * 1.1)) * (0.08 + displacement * 0.28 + morph * 0.14);
        const proj = projectAtlasPoint(x, y, z);
        if (!Number.isFinite(proj[0]) || !Number.isFinite(proj[1]) || proj[2] <= 0 || proj[2] > 4.2) {
          path.length = 0;
          break;
        }
        depthAcc += proj[2];
        path.push(proj);
      }
      if (path.length < 4) continue;
      const pAvg = depthAcc / path.length;
      const stripePhase = Math.sin(iN * (34 + morph * 20) + tSec * (0.42 + fluid * 1.15 + morph * 0.35) + layerPhase * (1.2 + morph * 0.45) + high * 1.1);
      const optical = 0.5 + stripePhase * 0.5;
      const lumBase = alt ? 0.88 : 0.12;
      const lum = clamp(lumBase + (optical - 0.5) * (0.36 + contrast * 0.44), 0.04, 0.96);
      const hue = fract01((preset === "shard" ? 0.1 : preset === "orbital" ? 0.64 : 0.56) + lN * 0.1 + iN * 0.06 + mid * 0.02 + morph * 0.12 + colorMod * 0.2);
      const sat = clamp(0.02 + contrast * 0.24 + (alt ? 0.02 : 0.1) + high * 0.08 + colorMod * 0.18, 0.01, 0.8);
      const [r, g, b] = hslToRgb(hue, sat, lum);
      const alpha = clamp((0.12 + pAvg * 0.25 + contrast * 0.34 + energy * 0.12) * (1 - lN * 0.34), 0.08, 0.86);
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${alpha})`;
      ctx.lineWidth = clamp((0.42 + pAvg * 1.3 + structure * 0.9 + displacement * 0.35) * qualityBudget * (0.86 + meshAmt * 0.3), 0.22, 2.8);
      ctx.beginPath();
      ctx.moveTo(path[0][0], path[0][1]);
      for (let p = 1; p < path.length; p++) ctx.lineTo(path[p][0], path[p][1]);
      ctx.closePath();
      ctx.stroke();
    }
  }

  // Morphing 3D core object (wire illusion).
  const uLines = clamp(Math.round((5 + structure * 6) * qualityBudget), 4, 10);
  const vLines = clamp(Math.round((6 + structure * 7) * qualityBudget), 5, 12);
  const segs = clamp(Math.round((20 + structure * 18 + fluid * 8) * qualityBudget), 18, 40);
  const objectScale = 0.24 + volume * 0.36 + bass * 0.05 + morph * 0.1;
  const knotAmount = morph * 1.25 + displacement * 0.35;
  for (let u = 0; u < uLines; u++) {
    const uN = uLines <= 1 ? 0 : u / (uLines - 1);
    const phi = uN * Math.PI * 2;
    ctx.beginPath();
    let drawn = false;
    let pMean = 0;
    let pCount = 0;
    for (let s = 0; s <= segs; s++) {
      const t = (s / segs) * Math.PI * 2;
      const envelope = 0.7 + 0.3 * Math.sin(t * (2 + knotAmount * 4.2) + tSec * (0.16 + fluid * 0.8));
      const radial = objectScale * envelope;
      const q = 1.2 + knotAmount * 2.8;
      const kx = Math.cos(phi) * (0.62 + 0.38 * Math.cos(t * q + tSec * (0.24 + fluid * 0.72)));
      const ky = Math.sin(phi) * (0.62 + 0.38 * Math.sin(t * q - tSec * (0.2 + fluid * 0.64)));
      const x = radial * kx + Math.cos(t * (1.4 + displacement * 2.2) + phi * 0.7) * (0.05 + displacement * 0.16);
      const y = radial * ky + Math.sin(t * (1.7 + displacement * 2.6) - phi * 0.6) * (0.05 + displacement * 0.14);
      const z = Math.sin(t + phi * (1.2 + knotAmount * 1.4) + tSec * (0.22 + fluid * 0.92)) * (0.16 + volume * 0.38);
      const proj = projectAtlasPoint(x, y, z);
      if (!Number.isFinite(proj[0]) || !Number.isFinite(proj[1]) || proj[2] <= 0 || proj[2] > 4.2) continue;
      pMean += proj[2];
      pCount += 1;
      if (!drawn) {
        ctx.moveTo(proj[0], proj[1]);
        drawn = true;
      } else {
        ctx.lineTo(proj[0], proj[1]);
      }
    }
    if (!drawn || pCount <= 2) continue;
    pMean /= pCount;
    const hue = fract01((preset === "shard" ? 0.08 : preset === "orbital" ? 0.66 : 0.58) + uN * 0.18 + high * 0.03);
    const sat = clamp(0.08 + contrast * 0.44 + high * 0.1 + colorMod * 0.2, 0.04, 0.94);
    const lit = clamp(0.34 + contrast * 0.42 + (u % 2 ? 0.14 : -0.08), 0.1, 0.95);
    const [r, g, b] = hslToRgb(hue, sat, lit);
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${clamp(0.2 + pMean * 0.28 + energy * 0.12, 0.14, 0.9)})`;
    ctx.lineWidth = clamp((0.4 + pMean * 1.5 + contrast * 1.4) * qualityBudget, 0.24, 3.4);
    ctx.stroke();
  }
  for (let v = 0; v < vLines; v++) {
    const vN = vLines <= 1 ? 0 : v / (vLines - 1);
    const t0 = vN * Math.PI * 2;
    ctx.beginPath();
    let drawn = false;
    for (let s = 0; s <= segs; s++) {
      const phi = (s / segs) * Math.PI * 2;
      const envelope = 0.72 + 0.28 * Math.cos(phi * (2.1 + morph * 3.4) + tSec * (0.15 + fluid * 0.7));
      const radial = objectScale * envelope;
      const x = radial * Math.cos(phi) * (0.7 + 0.3 * Math.cos(t0 * (2.4 + displacement * 2.3)));
      const y = radial * Math.sin(phi) * (0.7 + 0.3 * Math.sin(t0 * (2.1 + displacement * 2.1)));
      const z = Math.sin(t0 + phi * (1.4 + morph * 2.3) + tSec * (0.2 + fluid * 0.9)) * (0.14 + volume * 0.34);
      const proj = projectAtlasPoint(x, y, z);
      if (!Number.isFinite(proj[0]) || !Number.isFinite(proj[1]) || proj[2] <= 0 || proj[2] > 4.2) continue;
      if (!drawn) {
        ctx.moveTo(proj[0], proj[1]);
        drawn = true;
      } else {
        ctx.lineTo(proj[0], proj[1]);
      }
    }
    if (!drawn) continue;
    const lum = v % 2 === 0 ? 0.86 : 0.16;
    const [r, g, b] = hslToRgb(fract01(0.62 + vN * 0.12 + mid * 0.03 + colorMod * 0.12), clamp(0.04 + contrast * 0.26 + colorMod * 0.14, 0.02, 0.74), lum);
    ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${clamp(0.14 + contrast * 0.3 + energy * 0.08, 0.1, 0.72)})`;
    ctx.lineWidth = clamp((0.24 + contrast * 1.1) * qualityBudget, 0.18, 2.6);
    ctx.stroke();
  }

  // Bridge mesh: two animated polygons connected by soft ribs.
  const bridgeSides = clamp(Math.round(4 + structure * 4 + meshAmt * 4), 4, 12);
  const bridgeA = [];
  const bridgeB = [];
  const meshSpin = tSec * (0.16 + fluid * 0.42) + seed * 0.0009;
  const radiusA = 0.18 + volume * 0.2;
  const radiusB = 0.26 + volume * 0.26 + displacement * 0.08;
  const zA = -0.18 - volume * 0.2 + Math.sin(tSec * (0.48 + fluid * 1.1)) * 0.05;
  const zB = 0.2 + volume * 0.24 + Math.cos(tSec * (0.44 + fluid * 1.0)) * 0.06;
  for (let i = 0; i < bridgeSides; i++) {
    const n = i / bridgeSides;
    const a = n * Math.PI * 2 + meshSpin;
    const wob = Math.sin(a * (2.2 + displacement * 2.6) + tSec * (0.6 + fluid * 1.3)) * (0.015 + displacement * 0.05);
    const ax = Math.cos(a) * (radiusA + wob);
    const ay = Math.sin(a) * (radiusA * (0.86 + morph * 0.18) - wob * 0.6);
    const bx = Math.cos(a + 0.26 + morph * 0.34) * (radiusB - wob * 0.5);
    const by = Math.sin(a + 0.26 + morph * 0.34) * (radiusB * (0.8 + morph * 0.24) + wob * 0.7);
    const pA = projectAtlasPoint(ax, ay, zA);
    const pB = projectAtlasPoint(bx, by, zB);
    if (pA[2] > 0 && pA[2] <= 4.2 && pB[2] > 0 && pB[2] <= 4.2) {
      bridgeA.push(pA);
      bridgeB.push(pB);
    }
  }
  if (bridgeA.length >= 4 && bridgeB.length >= 4) {
    const bridgeHue = fract01((preset === "shard" ? 0.08 : preset === "orbital" ? 0.64 : 0.56) + mid * 0.03 + colorMod * 0.16);
    const [r0, g0, b0] = hslToRgb(bridgeHue, clamp(0.12 + contrast * 0.34, 0.08, 0.7), clamp(0.46 + contrast * 0.24, 0.35, 0.9));
    const ribAlpha = clamp(0.08 + contrast * 0.12 + energy * 0.06 + meshAmt * 0.12, 0.06, 0.42);
    ctx.strokeStyle = `rgba(${r0}, ${g0}, ${b0}, ${ribAlpha})`;
    ctx.lineWidth = clamp((0.34 + contrast * 0.9) * qualityBudget, 0.2, 1.8);
    const ribCount = Math.min(bridgeA.length, bridgeB.length);
    for (let i = 0; i < ribCount; i++) {
      const j = (i + 1) % ribCount;
      ctx.beginPath();
      ctx.moveTo(bridgeA[i][0], bridgeA[i][1]);
      ctx.lineTo(bridgeB[i][0], bridgeB[i][1]);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bridgeA[i][0], bridgeA[i][1]);
      ctx.lineTo(bridgeA[j][0], bridgeA[j][1]);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(bridgeB[i][0], bridgeB[i][1]);
      ctx.lineTo(bridgeB[j][0], bridgeB[j][1]);
      ctx.stroke();
    }
  }

  // Transparent floating spheres (particle-like volumetric accents).
  if (spheresAmt > 0.02) {
    const sphereCount = clamp(Math.round((3 + spheresAmt * 15) * qualityBudget), 2, 14);
    for (let i = 0; i < sphereCount; i++) {
      const rn = i / Math.max(1, sphereCount - 1);
      const phase = seed * 0.0017 + i * 1.73;
      const ang = tSec * (0.12 + fluid * 0.28) + phase;
      const sx = Math.sin(ang * (1.1 + rn * 0.9)) * (0.22 + rn * 0.62 + displacement * 0.18);
      const sy = Math.cos(ang * (0.86 + rn * 0.7) + i * 0.23) * (0.18 + rn * 0.5 + fluid * 0.12);
      const sz = Math.sin(ang * (0.74 + rn * 0.55) + i * 0.37) * (0.24 + rn * 0.72) + (rn - 0.5) * 0.34;
      const proj = projectAtlasPoint(sx, sy, sz);
      if (!Number.isFinite(proj[0]) || !Number.isFinite(proj[1]) || proj[2] <= 0 || proj[2] > 4.2) continue;
      const rad = clamp((8 + rn * 34 + spheresAmt * 26) * proj[2], 4, 62);
      const hue = fract01((preset === "shard" ? 0.08 : preset === "orbital" ? 0.62 : 0.54) + colorMod * 0.22 + rn * 0.18);
      const [sr, sg, sb] = hslToRgb(hue, clamp(0.16 + colorMod * 0.34, 0.12, 0.82), clamp(0.44 + contrast * 0.22, 0.36, 0.9));
      const g = ctx.createRadialGradient(proj[0], proj[1], rad * 0.1, proj[0], proj[1], rad);
      const a0 = clamp(0.08 + spheresAmt * 0.26 + energy * 0.08, 0.06, 0.38);
      const a1 = clamp(a0 * 0.46, 0.03, 0.18);
      g.addColorStop(0, `rgba(${sr}, ${sg}, ${sb}, ${a0})`);
      g.addColorStop(0.55, `rgba(${sr}, ${sg}, ${sb}, ${a1})`);
      g.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = g;
      ctx.beginPath();
      ctx.arc(proj[0], proj[1], rad, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // Radial luminous pulse: center to outside, soft and continuous.
  {
    const pulse = 0.5 + 0.5 * Math.sin(tSec * (0.62 + fluid * 0.86) + morph * Math.PI * 2 + energy * 1.4);
    const radius = Math.min(w, h) * (0.16 + volume * 0.34 + pulse * 0.16);
    const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    const lumHue = fract01((preset === "shard" ? 0.06 : preset === "orbital" ? 0.62 : 0.54) + colorMod * 0.22 + pulse * 0.06);
    const [lr, lg, lb] = hslToRgb(lumHue, clamp(0.26 + colorMod * 0.52, 0.2, 0.9), clamp(0.52 + contrast * 0.24, 0.45, 0.9));
    grad.addColorStop(0, `rgba(${lr}, ${lg}, ${lb}, ${clamp(0.06 + pulse * 0.16 + energy * 0.08, 0.06, 0.32)})`);
    grad.addColorStop(0.45, `rgba(${lr}, ${lg}, ${lb}, ${clamp(0.02 + pulse * 0.08, 0.02, 0.16)})`);
    grad.addColorStop(1, "rgba(0,0,0,0)");
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();
  }

  if (contrast > 0.44 || preset === "orbital") {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = clamp(0.04 + contrast * 0.14 + energy * 0.08, 0.04, 0.32);
    ctx.filter = `blur(${0.6 + (0.7 + contrast * 1.8) * qualityBudget}px)`;
    ctx.drawImage(canvas, 0, 0, w, h);
    ctx.restore();
  }
}

function applyMateriaPreset(presetId, withRender = true) {
  const id = String(presetId || "mineral");
  if (id === "ink") {
    if (liveMateriaSeed) liveMateriaSeed.value = "3771";
    if (liveMateriaFlow) liveMateriaFlow.value = "68";
    if (liveMateriaPorosity) liveMateriaPorosity.value = "62";
    if (liveMateriaLayers) liveMateriaLayers.value = "46";
    if (liveMateriaDrift) liveMateriaDrift.value = "56";
    if (liveMateriaContrast) liveMateriaContrast.value = "50";
    if (liveMateriaAudioAmount) liveMateriaAudioAmount.value = "72";
  } else if (id === "ash") {
    if (liveMateriaSeed) liveMateriaSeed.value = "6905";
    if (liveMateriaFlow) liveMateriaFlow.value = "44";
    if (liveMateriaPorosity) liveMateriaPorosity.value = "34";
    if (liveMateriaLayers) liveMateriaLayers.value = "66";
    if (liveMateriaDrift) liveMateriaDrift.value = "32";
    if (liveMateriaContrast) liveMateriaContrast.value = "68";
    if (liveMateriaAudioAmount) liveMateriaAudioAmount.value = "58";
  } else {
    if (liveMateriaSeed) liveMateriaSeed.value = "2424";
    if (liveMateriaFlow) liveMateriaFlow.value = "58";
    if (liveMateriaPorosity) liveMateriaPorosity.value = "48";
    if (liveMateriaLayers) liveMateriaLayers.value = "52";
    if (liveMateriaDrift) liveMateriaDrift.value = "42";
    if (liveMateriaContrast) liveMateriaContrast.value = "54";
    if (liveMateriaAudioAmount) liveMateriaAudioAmount.value = "66";
  }
  if (liveMateriaAudio) liveMateriaAudio.checked = true;
  updateLiveQuickOutputs();
  if (withRender) scheduleRender();
}

function randomizeMateriaCameraView() {
  if (mode !== "materia") return;
  materiaCamYaw += (Math.random() * 2 - 1) * 1.2;
  materiaCamPitch = clamp(materiaCamPitch + (Math.random() * 2 - 1) * 0.62, -1.1, 1.1);
  materiaCamDist = clamp(materiaCamDist + (Math.random() * 2 - 1) * 0.34, 0.46, 2.4);
  materiaCamYawTarget = materiaCamYaw;
  materiaCamPitchTarget = materiaCamPitch;
  materiaCamDistTarget = materiaCamDist;
  scheduleRender();
}

function randomizeMateriaCameraViewSmooth() {
  if (mode !== "materia") return;
  materiaCamYawTarget += (Math.random() * 2 - 1) * 1.3;
  materiaCamPitchTarget = clamp(materiaCamPitchTarget + (Math.random() * 2 - 1) * 0.7, -1.1, 1.1);
  materiaCamDistTarget = clamp(materiaCamDistTarget + (Math.random() * 2 - 1) * 0.42, 0.46, 2.4);
  scheduleRender();
}

function triggerMateriaMorphTween() {
  if (mode !== "materia") return;
  const now = performance.now();
  materiaMorphTween = {
    start: now,
    duration: 1200,
    from: {
      seed: Number(liveMateriaSeed ? liveMateriaSeed.value : 2424),
      flow: Number(liveMateriaFlow ? liveMateriaFlow.value : 58),
      porosity: Number(liveMateriaPorosity ? liveMateriaPorosity.value : 48),
      layers: Number(liveMateriaLayers ? liveMateriaLayers.value : 52),
      drift: Number(liveMateriaDrift ? liveMateriaDrift.value : 42),
      contrast: Number(liveMateriaContrast ? liveMateriaContrast.value : 54),
      audioAmount: Number(liveMateriaAudioAmount ? liveMateriaAudioAmount.value : 66),
    },
    to: {
      seed: Math.round(1 + Math.random() * 9998),
      flow: Math.round(Math.random() * 100),
      porosity: Math.round(Math.random() * 100),
      layers: Math.round(Math.random() * 100),
      drift: Math.round(Math.random() * 100),
      contrast: Math.round(Math.random() * 100),
      audioAmount: Math.round(20 + Math.random() * 80),
    },
  };
  scheduleRender();
}

function applyMateriaMorphTween() {
  if (!materiaMorphTween) return;
  const now = performance.now();
  let k = clamp((now - materiaMorphTween.start) / Math.max(1, materiaMorphTween.duration), 0, 1);
  k = k * k * (3 - 2 * k);
  const mix = (a, b) => Math.round(a + (b - a) * k);
  if (liveMateriaSeed) liveMateriaSeed.value = String(mix(materiaMorphTween.from.seed, materiaMorphTween.to.seed));
  if (liveMateriaFlow) liveMateriaFlow.value = String(mix(materiaMorphTween.from.flow, materiaMorphTween.to.flow));
  if (liveMateriaPorosity) liveMateriaPorosity.value = String(mix(materiaMorphTween.from.porosity, materiaMorphTween.to.porosity));
  if (liveMateriaLayers) liveMateriaLayers.value = String(mix(materiaMorphTween.from.layers, materiaMorphTween.to.layers));
  if (liveMateriaDrift) liveMateriaDrift.value = String(mix(materiaMorphTween.from.drift, materiaMorphTween.to.drift));
  if (liveMateriaContrast) liveMateriaContrast.value = String(mix(materiaMorphTween.from.contrast, materiaMorphTween.to.contrast));
  if (liveMateriaAudioAmount) liveMateriaAudioAmount.value = String(mix(materiaMorphTween.from.audioAmount, materiaMorphTween.to.audioAmount));
  if (k >= 1) materiaMorphTween = null;
}

function renderMateriaMode(baseImageData, tSec, settings) {
  applyMateriaMorphTween();
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 2 || h <= 2) return;

  const seedTarget = clamp(Number(liveMateriaSeed ? liveMateriaSeed.value : 2424), 1, 9999);
  const flowTarget = clamp(Number(liveMateriaFlow ? liveMateriaFlow.value : 58), 0, 100);
  const porosityTarget = clamp(Number(liveMateriaPorosity ? liveMateriaPorosity.value : 48), 0, 100);
  const layersTarget = clamp(Number(liveMateriaLayers ? liveMateriaLayers.value : 52), 0, 100);
  const driftTarget = clamp(Number(liveMateriaDrift ? liveMateriaDrift.value : 42), 0, 100);
  const contrastTarget = clamp(Number(liveMateriaContrast ? liveMateriaContrast.value : 54), 0, 100);
  materiaSeedSmooth += (seedTarget - materiaSeedSmooth) * 0.12;
  materiaFlowSmooth += (flowTarget - materiaFlowSmooth) * 0.11;
  materiaPorositySmooth += (porosityTarget - materiaPorositySmooth) * 0.11;
  materiaLayersSmooth += (layersTarget - materiaLayersSmooth) * 0.11;
  materiaDriftSmooth += (driftTarget - materiaDriftSmooth) * 0.11;
  materiaContrastSmooth += (contrastTarget - materiaContrastSmooth) * 0.11;

  const seed = Math.round(clamp(materiaSeedSmooth, 1, 9999));
  const flow = clamp(materiaFlowSmooth / 100, 0, 1);
  const porosity = clamp(materiaPorositySmooth / 100, 0, 1);
  const layersK = clamp(materiaLayersSmooth / 100, 0, 1);
  const drift = clamp(materiaDriftSmooth / 100, 0, 1);
  const contrast = clamp(materiaContrastSmooth / 100, 0, 1);
  const audioOn = !liveMateriaAudio || liveMateriaAudio.checked;
  const audioAmount = clamp(Number(liveMateriaAudioAmount ? liveMateriaAudioAmount.value : 66) / 100, 0, 1);
  const preset = liveMateriaPreset ? (liveMateriaPreset.value || "mineral") : "mineral";

  const audioState = getReactiveAudioState(settings, audioOn, audioAmount);
  const bands = audioState.bands || [0, 0, 0, 0];
  const smoothAR = (curr, target, att, rel) => curr + (target - curr) * (target > curr ? att : rel);
  materiaAudioBassSmooth = smoothAR(materiaAudioBassSmooth, clamp(bands[1] * 1.2 + bands[0] * 0.5 + audioState.transient * 0.3, 0, 2), 0.2, 0.1);
  materiaAudioMidSmooth = smoothAR(materiaAudioMidSmooth, clamp(bands[2] * 1.15 + bands[1] * 0.2, 0, 2), 0.17, 0.1);
  materiaAudioHighSmooth = smoothAR(materiaAudioHighSmooth, clamp(bands[3] * 1.2 + bands[2] * 0.2, 0, 2), 0.2, 0.11);
  materiaAudioEnergySmooth = smoothAR(materiaAudioEnergySmooth, clamp(audioState.level * 1.2 + audioState.transient * 0.42, 0, 2), 0.18, 0.1);
  const bass = materiaAudioBassSmooth;
  const mid = materiaAudioMidSmooth;
  const high = materiaAudioHighSmooth;
  const energy = materiaAudioEnergySmooth;

  const aggression = clamp(0.2 + flow * 0.42 + drift * 0.36 + energy * 0.28, 0, 1.45);
  materiaCamYawTarget += Math.sin(tSec * (0.08 + drift * 0.25)) * (0.001 + aggression * 0.0011);
  materiaCamPitchTarget += Math.cos(tSec * (0.09 + flow * 0.21)) * (0.0009 + aggression * 0.001);
  const distGoal = 0.7 + (1 - layersK) * 0.92 + Math.sin(tSec * (0.22 + drift * 0.32) + bass) * 0.13;
  materiaCamDistTarget += (distGoal - materiaCamDistTarget) * (0.03 + drift * 0.02);
  materiaCamPitchTarget = clamp(materiaCamPitchTarget, -1.1, 1.1);
  materiaCamYaw += (materiaCamYawTarget - materiaCamYaw) * 0.08;
  materiaCamPitch += (materiaCamPitchTarget - materiaCamPitch) * 0.08;
  materiaCamDist += (materiaCamDistTarget - materiaCamDist) * 0.09;
  materiaCamDist = clamp(materiaCamDist, 0.46, 2.4);

  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, w, h);

  const masterOn = Boolean(masterFxMode && (masterFxMode.value || "none") !== "none");
  const kaleidoOn = isKaleidoFxActive();
  const perfStress = clamp((30 - (fps || 30)) / 12, 0, 1);
  const stackCut = (masterOn ? 0.12 : 0) + (kaleidoOn ? 0.08 : 0);
  const qualityBudget = clamp(1 - perfStress * 0.48 - stackCut, 0.38, 1);
  const layerCount = clamp(Math.round((4 + layersK * 9) * qualityBudget), 4, 12);
  const blobsPerLayer = clamp(Math.round((10 + layersK * 28 + flow * 10) * qualityBudget), 8, 44);

  const cyaw = Math.cos(materiaCamYaw);
  const syaw = Math.sin(materiaCamYaw);
  const cp = Math.cos(materiaCamPitch);
  const sp = Math.sin(materiaCamPitch);
  const cx = w * 0.5;
  const cy = h * 0.5;
  const perspBase = 0.86 + materiaCamDist * 0.88;
  const projectPoint = (x, y, z) => {
    const rx = x * cyaw - z * syaw;
    const rz = x * syaw + z * cyaw;
    const ry = y * cp - rz * sp;
    const rz2 = y * sp + rz * cp;
    const p = 1 / Math.max(0.2, perspBase + rz2 * 0.92);
    return [cx + rx * p * w * 0.44, cy + ry * p * h * 0.44, p];
  };

  for (let l = 0; l < layerCount; l++) {
    const lN = layerCount <= 1 ? 0 : l / (layerCount - 1);
    const zBase = (lN - 0.5) * (1.4 + flow * 1.15);
    const hueBase = fract01((seed % 360) / 360 + lN * 0.11 + (preset === "ink" ? 0.56 : preset === "ash" ? 0.02 : 0.24));
    for (let i = 0; i < blobsPerLayer; i++) {
      const r1 = randHash(i * 31 + l * 107, seed, 1901 + l * 7);
      const r2 = randHash(i * 43 + l * 127, seed + 17, 2003 + l * 11);
      const r3 = randHash(i * 59 + l * 149, seed + 31, 2141 + l * 13);
      const r4 = randHash(i * 71 + l * 163, seed + 53, 2251 + l * 17);
      const angle = r4 * Math.PI * 2;
      const spread = 0.5 + flow * 0.9;
      const px = (r1 * 2 - 1) * spread;
      const py = (r2 * 2 - 1) * spread * (0.74 + flow * 0.4);
      const pz = zBase + (r3 * 2 - 1) * (0.3 + drift * 0.5) + Math.sin(tSec * (0.35 + drift * 1.3) + i * 0.2) * (0.08 + energy * 0.12);
      const [sx, sy, spj] = projectPoint(px, py, pz);
      if (!Number.isFinite(sx) || !Number.isFinite(sy) || spj <= 0 || spj > 4.2) continue;

      const radius = (9 + r3 * 42 + flow * 38 + bass * 14) * spj * (0.58 + (1 - lN) * 0.84);
      if (radius < 1) continue;
      const nSeg = 8 + Math.floor(r4 * 10);
      const hue = fract01(hueBase + r2 * 0.14 + Math.sin(tSec * (0.22 + drift * 0.4) + i * 0.03) * 0.04 + high * 0.02);
      const sat = clamp(0.14 + flow * 0.3 + (preset === "ink" ? 0.08 : 0) + high * 0.07, 0.1, 0.84);
      const lit = clamp(0.24 + contrast * 0.48 + (1 - lN) * 0.12 + bass * 0.12, 0.12, 0.94);
      const [r, g, b] = hslToRgb(hue, sat, lit);

      const fillA = clamp((0.022 + contrast * 0.09 + energy * 0.05) * (1 - lN * 0.58), 0.012, 0.24);
      const strokeA = clamp((0.05 + contrast * 0.16 + high * 0.09 + porosity * 0.14) * (1 - lN * 0.5), 0.03, 0.78);
      ctx.beginPath();
      for (let s = 0; s <= nSeg; s++) {
        const t = (s / nSeg) * Math.PI * 2;
        const wob = Math.sin(t * (1.8 + r2 * 2.2) + tSec * (0.3 + drift * 0.8) + i * 0.1) * (0.18 + porosity * 0.34);
        const rr = radius * (1 + wob * (0.34 + flow * 0.4));
        const x = sx + Math.cos(t + angle) * rr;
        const y = sy + Math.sin(t + angle) * rr * (0.72 + r1 * 0.58);
        if (s === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${fillA})`;
      ctx.fill();
      ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${strokeA})`;
      ctx.lineWidth = clamp(0.42 + spj * 1.22 + porosity * 1.7, 0.3, 3.1) * qualityBudget;
      ctx.stroke();

      // Pigment-like brush strokes
      const trailN = 1 + Math.floor((porosity * 4 + drift * 3) * qualityBudget);
      for (let t = 0; t < trailN; t++) {
        const len = radius * (0.6 + r2 * 0.8);
        const a = angle + tSec * (0.2 + drift * 0.8) + t * 0.7 + r4 * 2.2;
        const tx0 = sx + Math.cos(a) * radius * 0.3;
        const ty0 = sy + Math.sin(a) * radius * 0.22;
        const tx1 = tx0 + Math.cos(a + 0.4) * len;
        const ty1 = ty0 + Math.sin(a + 0.4) * len * (0.5 + flow * 0.7);
        ctx.strokeStyle = `rgba(${r}, ${g}, ${b}, ${clamp(0.02 + porosity * 0.1 + high * 0.06, 0.02, 0.24)})`;
        ctx.lineWidth = clamp(0.45 + r3 * 1.6, 0.4, 2.6) * qualityBudget;
        ctx.beginPath();
        ctx.moveTo(tx0, ty0);
        ctx.lineTo(tx1, ty1);
        ctx.stroke();
      }
    }
  }

  // Porous grain pass (paint / biological membrane feel)
  const grainStep = clamp(Math.round(2 + (1 - qualityBudget) * 2 + (1 - porosity) * 4), 2, 7);
  const grainAlpha = clamp(0.015 + porosity * 0.08 + energy * 0.05, 0.01, 0.14);
  for (let y = 0; y < h; y += grainStep) {
    for (let x = 0; x < w; x += grainStep) {
      const n = randHash(x * 0.71 + tSec * 21, y * 0.43 - tSec * 17, seed + 409);
      if (n > 0.24 + porosity * 0.62) continue;
      const hue = fract01((seed % 360) / 360 + n * 0.07 + (preset === "ink" ? 0.52 : preset === "ash" ? 0.03 : 0.21));
      const [gr, gg, gb] = hslToRgb(hue, clamp(0.12 + flow * 0.28, 0.08, 0.6), clamp(0.28 + contrast * 0.36 + n * 0.2, 0.16, 0.88));
      ctx.fillStyle = `rgba(${gr}, ${gg}, ${gb}, ${grainAlpha})`;
      const s = 1 + Math.floor(n * grainStep);
      ctx.fillRect(x, y, s, s);
    }
  }

  if (contrast > 0.52 || preset === "ink") {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = clamp(0.05 + contrast * 0.12 + energy * 0.08, 0.04, 0.28);
    ctx.filter = `blur(${0.8 + (0.7 + contrast * 1.5) * qualityBudget}px)`;
    ctx.drawImage(canvas, 0, 0, w, h);
    ctx.restore();
  }
}

function ensureCodeRainTextMask(w, h, tSec) {
  if (!codeRainTextMaskCanvas) {
    codeRainTextMaskCanvas = document.createElement("canvas");
    codeRainTextMaskCtx = codeRainTextMaskCanvas.getContext("2d", { willReadFrequently: true });
  }
  if (!codeRainTextMaskCtx) return;
  const mw = Math.max(2, Math.round(w * 0.46));
  const mh = Math.max(2, Math.round(h * 0.22));
  if (codeRainTextMaskW !== mw || codeRainTextMaskH !== mh) {
    codeRainTextMaskW = mw;
    codeRainTextMaskH = mh;
    codeRainTextMaskCanvas.width = mw;
    codeRainTextMaskCanvas.height = mh;
  }
  const mctx = codeRainTextMaskCtx;
  mctx.clearRect(0, 0, mw, mh);
  const pulse = 0.5 + 0.5 * Math.sin(tSec * 0.8);
  const size = Math.max(20, Math.round(Math.min(mw, mh) * (0.34 + pulse * 0.06)));
  mctx.font = `700 ${size}px Orbitron, Share Tech Mono, monospace`;
  mctx.textAlign = "center";
  mctx.textBaseline = "middle";
  mctx.fillStyle = "#ffffff";
  mctx.fillText("B.ZU.AL", mw * 0.5, mh * 0.52);
}

function ensureCodeRainColumns(count, h, speed, density) {
  if (count === codeRainCols && codeRainDrops.length === count && codeRainSpeeds.length === count && codeRainSeeds.length === count) return;
  codeRainCols = count;
  codeRainDrops = new Float32Array(count);
  codeRainSpeeds = new Float32Array(count);
  codeRainSeeds = new Float32Array(count);
  for (let i = 0; i < count; i++) {
    codeRainDrops[i] = Math.random() * h;
    codeRainSpeeds[i] = (0.7 + Math.random() * 1.4) * (0.8 + speed * 1.35) * (0.86 + density * 0.36);
    codeRainSeeds[i] = Math.random() * 10000;
  }
}

function sampleCodeFigureMask(u, v, tSec, figureK, maskData, maskW, maskH) {
  const x = (u - 0.5) * 2;
  const y = (v - 0.5) * 2;
  const r = Math.hypot(x, y);
  const a = Math.atan2(y, x);
  const ring = clamp(1 - Math.abs(r - (0.46 + Math.sin(tSec * 0.4) * 0.05)) * 13, 0, 1);
  const helixLine = Math.sin(a * 3.6 + tSec * 1.3 + r * 9);
  const helix = clamp(1 - Math.abs(y - helixLine * 0.35) * 7.5, 0, 1);
  const lattice = clamp(1 - Math.min(Math.abs(Math.sin(x * 7 + tSec * 0.6)), Math.abs(Math.cos(y * 8 - tSec * 0.7))) * 2.8, 0, 1);
  let textMask = 0;
  if (maskData && maskW > 2 && maskH > 2) {
    const tx = clamp(Math.round(u * (maskW - 1)), 0, maskW - 1);
    const ty = clamp(Math.round(v * (maskH - 1)), 0, maskH - 1);
    const mi = (ty * maskW + tx) * 4 + 3;
    textMask = maskData[mi] / 255;
  }
  const shapeA = [ring, helix, lattice, textMask];
  const shapeB = [helix, lattice, textMask, ring];
  return clamp(shapeA[Math.floor(figureK * 3.99)] * (1 - (figureK * 3.99 % 1)) + shapeB[Math.floor(figureK * 3.99)] * (figureK * 3.99 % 1), 0, 1);
}

function renderCodeRainMode(baseImageData, tSec, settings) {
  const w = canvas.width;
  const h = canvas.height;
  if (w <= 2 || h <= 2) return;
  const camMode = liveCodeCameraMode ? (liveCodeCameraMode.value || "wide") : "wide";
  const density = clamp(Number(liveCodeDensity ? liveCodeDensity.value : 58) / 100, 0, 1);
  const speed = clamp(Number(liveCodeSpeed ? liveCodeSpeed.value : 44) / 100, 0, 1);
  const zoom = clamp(Number(liveCodeZoom ? liveCodeZoom.value : 38) / 100, 0, 1);
  const letters = clamp(Number(liveCodeLetters ? liveCodeLetters.value : 62) / 100, 0, 1);
  const figure = clamp(Number(liveCodeFigure ? liveCodeFigure.value : 62) / 100, 0, 1);
  const languageRaw = clamp(Number(liveCodeLanguage ? liveCodeLanguage.value : 52), 0, 65);
  const language = languageRaw / 65;
  const glow = clamp(Number(liveCodeGlow ? liveCodeGlow.value : 54) / 100, 0, 1);
  const brightness = clamp(Number(liveCodeBrightness ? liveCodeBrightness.value : 68) / 100, 0, 1);
  const audioOn = !liveCodeAudio || liveCodeAudio.checked;
  const audioAmount = clamp(Number(liveCodeAudioAmount ? liveCodeAudioAmount.value : 72) / 100, 0, 1);
  const preset = liveCodePreset ? (liveCodePreset.value || "matrix") : "matrix";
  const audioState = getReactiveAudioState(settings, audioOn, audioAmount);
  const bands = audioState.bands || [0, 0, 0, 0];
  const energyRaw = clamp(audioState.level * 0.82 + audioState.transient * 1.1 + bands[2] * 0.42, 0, 2.1);
  const energyFollow = audioOn ? 0.06 : 0.14;
  codeRainEnergySmooth += (energyRaw - codeRainEnergySmooth) * energyFollow;
  const energy = codeRainEnergySmooth;
  const webcamOverlayActive = Boolean(
    webcamActive &&
    baseImageData &&
    baseImageData.data &&
    baseImageData.width > 2 &&
    baseImageData.height > 2
  );
  const srcData = webcamOverlayActive ? baseImageData.data : null;
  const srcW = webcamOverlayActive ? baseImageData.width : 0;
  const srcH = webcamOverlayActive ? baseImageData.height : 0;
  const matrixClassicLock = false;
  const densityBoost = 0;
  const lettersBoost = 0;
  const glowBoost = 0;
  const densityK = clamp(density + densityBoost, 0, 1);
  const lettersK = clamp(letters + lettersBoost, 0, 1);
  const glowK = clamp(glow + glowBoost, 0, 1);

  codeRainCharStep = clamp(Math.round(20 - densityK * 6.8 - lettersK * 5.4 + zoom * 5.6), 8, 24);
  codeRainFontPx = clamp(Math.round(codeRainCharStep * 0.92), 9, 17);
  const colsBase = Math.floor(w / Math.max(7, codeRainCharStep * 0.86));
  const camColsK = camMode === "macro" ? 0.52 : camMode === "chase" ? 0.74 : 1;
  const cols = clamp(Math.round(colsBase * (0.46 + lettersK * 1.32) * camColsK * (matrixClassicLock ? 1.22 : 1)), 14, 360);
  ensureCodeRainColumns(cols, h, speed, density);

  codeRainCamX += (codeRainCamXTarget - codeRainCamX) * 0.035;
  codeRainCamY += (codeRainCamYTarget - codeRainCamY) * 0.035;
  const stepX = w / cols;
  const chaseCol = clamp(Math.floor((tSec * (1.1 + speed * 3.3)) % cols), 0, cols - 1);
  const chaseY = codeRainDrops[chaseCol] || 0;
  const driftXBase = codeRainCamX * 8;
  const driftYBase = codeRainCamY * 7;
  const driftX = driftXBase;
  const driftY = camMode === "chase" ? driftYBase + (h * 0.42 - chaseY) * (0.18 + zoom * 0.34) : driftYBase;
  codeRainFigurePhase = fract01(codeRainFigurePhase + (0.00085 + speed * 0.0014 + energy * 0.0009));

  ensureCodeRainTextMask(w, h, tSec);
  const maskData = codeRainTextMaskCtx ? codeRainTextMaskCtx.getImageData(0, 0, codeRainTextMaskW, codeRainTextMaskH).data : null;
  const figureK = fract01(codeRainFigurePhase + figure * 0.74 + (preset === "glyph" ? 0.24 : preset === "oracle" ? 0.58 : 0));
  const glyphSets = [
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    "あいうえおカキクケコサシスセソタチツテトナニヌネノ",
    "абвгдежзийклмнопрстуфхцчшщъыьэюя",
    "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ",
    "ابتثجحخدذرزسشصضطظعغفقكلمنهوي",
  ];
  const phrase = "B.ZU.AL";

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, w, h);
  ctx.save();
  if (camMode === "macro") {
    const k = 1 + zoom * 1.95;
    const focusX = matrixClassicLock ? chaseX : chaseX + Math.sin(tSec * 0.7) * w * 0.04;
    const focusY = matrixClassicLock ? chaseY : chaseY + Math.cos(tSec * 0.66) * h * 0.05;
    ctx.translate(w * 0.5, h * 0.5);
    ctx.scale(k, k);
    ctx.translate(-focusX, -focusY);
  } else if (camMode === "chase") {
    const k = 1 + zoom * 0.86;
    ctx.translate(w * 0.5, h * 0.5);
    ctx.scale(k, k);
    ctx.translate(-w * 0.5, -h * 0.5);
  } else {
    const k = 1 + zoom * 0.38;
    ctx.translate(w * 0.5, h * 0.5);
    ctx.scale(k, k);
    ctx.translate(-w * 0.5, -h * 0.5);
  }
  ctx.translate(driftX, driftY);
  ctx.font = `700 ${codeRainFontPx}px Share Tech Mono, Orbitron, monospace`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  const baseTrail = Math.round(7 + densityK * 13 + lettersK * 12 + glowK * 11 + energy * 5 + (matrixClassicLock ? 6 : 0));
  const timeScale = 0.95 + speed * 2.2 + energy * 0.6;
  for (let i = 0; i < cols; i++) {
    const drop = codeRainDrops[i];
    const colSpeed = codeRainSpeeds[i] * timeScale;
    codeRainDrops[i] = drop + colSpeed;
    if (codeRainDrops[i] > h + baseTrail * codeRainCharStep) {
      codeRainDrops[i] = -Math.random() * h * 0.3;
      codeRainSpeeds[i] = (0.7 + Math.random() * 1.4) * (0.8 + speed * 1.35 + energy * 0.18);
      codeRainSeeds[i] = Math.random() * 10000;
    }
    const x = i * stepX + stepX * 0.5;
    for (let j = 0; j < baseTrail; j++) {
      const y = codeRainDrops[i] - j * codeRainCharStep;
      if (y < -24 || y > h + 24) continue;
      const u = clamp((x - driftX) / Math.max(1, w), 0, 1);
      const v = clamp((y - driftY) / Math.max(1, h), 0, 1);
      const figMask = sampleCodeFigureMask(u, v, tSec, figureK, maskData, codeRainTextMaskW, codeRainTextMaskH);
      let webcamLum = 0.5;
      let faceMask = 0;
      if (webcamOverlayActive && srcData) {
        const sx = clamp(Math.round(u * (srcW - 1)), 0, srcW - 1);
        const sy = clamp(Math.round(v * (srcH - 1)), 0, srcH - 1);
        const si = (sy * srcW + sx) * 4;
        webcamLum = clamp((srcData[si] * 0.299 + srcData[si + 1] * 0.587 + srcData[si + 2] * 0.114) / 255, 0, 1);
        if (detectedFaces.length > 0) {
          for (let fi = 0; fi < detectedFaces.length; fi++) {
            const f = detectedFaces[fi];
            const padX = f.width * 0.28;
            const padY = f.height * 0.36;
            if (u < f.x - padX || u > f.x + f.width + padX || v < f.y - padY || v > f.y + f.height + padY) continue;
            const cx = f.x + f.width * 0.5;
            const cy = f.y + f.height * 0.52;
            const nx = (u - cx) / Math.max(0.001, f.width * 0.78);
            const ny = (v - cy) / Math.max(0.001, f.height * 0.86);
            const falloff = clamp(1 - Math.hypot(nx, ny), 0, 1);
            faceMask = Math.max(faceMask, falloff * 0.96);
          }
        }
      }
      const head = j === 0 ? 1 : 0;
      const fade = Math.pow(1 - j / Math.max(1, baseTrail), 1.35);
      const figDrive = matrixClassicLock ? figMask * (0.14 + figure * 0.22) : figMask * (0.48 + figure * 0.74);
      const sig = clamp(figDrive + head * 0.34, 0, 1.8);
      const signal = clamp(sig + (webcamOverlayActive ? (webcamLum * 0.08 + faceMask * 0.12) : 0), 0, 1.8);
      const alpha = clamp(fade * (0.26 + glowK * 0.44 + signal * 0.54 + brightness * 0.36), 0.14, 1);
      const langSelector = clamp(language + signal * 0.14 + (matrixClassicLock ? 0 : Math.sin(tSec * 0.7 + i * 0.03) * 0.08), 0, 1);
      const poolIndex = clamp(Math.floor(langSelector * glyphSets.length), 0, glyphSets.length - 1);
      const pool = glyphSets[poolIndex];
      const seed = codeRainSeeds[i] + j * 17 + tSec * (matrixClassicLock ? (1.4 + speed * 2.6) : (4.2 + speed * 8.2));
      const ch = (faceMask > 0.52 || (figMask > 0.68 && figureK > 0.66))
        ? phrase[Math.abs(Math.floor(seed * 1.37 + i + j)) % phrase.length]
        : pool[Math.abs(Math.floor(seed * 2.13 + i * 3 + j * 5)) % pool.length];
      // Keep Matrix columns strict/vertical; depth only modulates light.
      const depthNear = clamp(
        faceMask * 0.78 +
        (webcamOverlayActive ? webcamLum * 0.22 : 0) +
        signal * 0.14 +
        head * 0.1,
        0,
        1.8
      );
      const depthK = clamp(depthNear / 1.8, 0, 1);
      const depthNoise = randHash(i, j, codeRainSeeds[i] * 0.013);
      const zN = clamp(depthK * 0.84 + depthNoise * 0.16, 0, 1);
      const px = x;
      const py = y;
      const a3d = alpha * clamp(0.42 + zN * 0.62 + brightness * 0.22, 0.28, 1);
      const g = clamp(98 + fade * 72 + signal * 102 + zN * 162 + energy * 36 + faceMask * 78 + brightness * 34, 72, 255);
      const r = clamp(4 + signal * 14 + zN * 16 + brightness * 8 + (preset === "oracle" ? 8 : 0), 2, 72);
      const b = clamp(6 + signal * 24 + (1 - zN) * 24 + brightness * 10 + (preset === "glyph" ? 10 : 0), 4, 92);
      ctx.fillStyle = `rgba(${r},${g},${b},${a3d})`;
      ctx.fillText(ch, px, py);
      // Halo offset removed to preserve strict vertical Matrix rain.
    }
  }
  ctx.restore();

  // Webcam reacts as a separate neon/high-pass light layer (no geometry deformation).
  if (webcamOverlayActive && srcData) {
    const cell = clamp(Math.round(codeRainCharStep * 1.15), 10, 24);
    const neonGain = 0.18 + glowK * 0.28 + brightness * 0.24;
    const facePulse = 0.82 + (0.5 + 0.5 * Math.sin(tSec * 1.35)) * 0.28;
    const fallOffset = (tSec * (28 + speed * 72)) % cell;
    const overlaySet = glyphSets[Math.min(glyphSets.length - 1, Math.floor(language * glyphSets.length))] || glyphSets[0];
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.font = `700 ${Math.round(cell * 0.86)}px Share Tech Mono, Orbitron, monospace`;
    for (let y = 0; y < h; y += cell) {
      const v = clamp(y / Math.max(1, h - 1), 0, 1);
      const sy = clamp(Math.round(v * (srcH - 1)), 0, srcH - 1);
      const sy2 = clamp(sy + 1, 0, srcH - 1);
      for (let x = 0; x < w; x += cell) {
        const u = clamp(x / Math.max(1, w - 1), 0, 1);
        const sx = clamp(Math.round(u * (srcW - 1)), 0, srcW - 1);
        const sx2 = clamp(sx + 1, 0, srcW - 1);
        const i0 = (sy * srcW + sx) * 4;
        const ix = (sy * srcW + sx2) * 4;
        const iy = (sy2 * srcW + sx) * 4;
        const lum0 = (srcData[i0] * 0.299 + srcData[i0 + 1] * 0.587 + srcData[i0 + 2] * 0.114) / 255;
        const lumX = (srcData[ix] * 0.299 + srcData[ix + 1] * 0.587 + srcData[ix + 2] * 0.114) / 255;
        const lumY = (srcData[iy] * 0.299 + srcData[iy + 1] * 0.587 + srcData[iy + 2] * 0.114) / 255;
        const edge = clamp(Math.abs(lum0 - lumX) + Math.abs(lum0 - lumY), 0, 1);
        let faceBoost = 0;
        if (detectedFaces.length > 0) {
          for (let fi = 0; fi < detectedFaces.length; fi++) {
            const f = detectedFaces[fi];
            const px = (u - (f.x + f.width * 0.5)) / Math.max(0.001, f.width * 0.9);
            const py = (v - (f.y + f.height * 0.5)) / Math.max(0.001, f.height * 0.95);
            faceBoost = Math.max(faceBoost, clamp(1 - Math.hypot(px, py), 0, 1) * facePulse);
          }
        }
        const neon = clamp((edge - 0.05) * 3.3 + faceBoost * 0.5, 0, 1.5);
        if (neon < 0.08) continue;
        const a = clamp(neon * neonGain, 0.06, 0.62);
        const g = Math.round(clamp(140 + neon * 112 + faceBoost * 28 + brightness * 18, 108, 255));
        const rx = Math.floor(x / cell);
        const ry = Math.floor((y + fallOffset) / cell);
        const seed = rx * 37 + ry * 57 + Math.floor(tSec * (2 + speed * 3));
        const ch = (faceBoost > 0.52)
          ? phrase[Math.abs(seed) % phrase.length]
          : overlaySet[Math.abs(seed) % overlaySet.length];
        const py = ((y + fallOffset) % (h + cell)) - cell * 0.5;
        ctx.fillStyle = `rgba(28,${g},94,${a})`;
        ctx.fillText(ch, x, py);
      }
    }
    ctx.globalAlpha = clamp(0.24 + glowK * 0.18 + brightness * 0.14, 0.18, 0.56);
    ctx.filter = `blur(${1.4 + glowK * 2.8}px)`;
    ctx.drawImage(canvas, 0, 0, w, h);
    ctx.restore();
  }

  if (glowK > 0.01 || brightness > 0.01) {
    ctx.save();
    ctx.globalCompositeOperation = "screen";
    ctx.globalAlpha = clamp(0.16 + glowK * 0.3 + brightness * 0.2 + energy * 0.06, 0.12, 0.68);
    ctx.filter = `blur(${0.8 + glowK * 2.9 + brightness * 1.7 + energy * 0.6}px)`;
    ctx.drawImage(canvas, 0, 0, w, h);
    ctx.restore();
  }
}

function applyCodePreset(presetId, withRender = true) {
  const id = String(presetId || "matrix");
  if (id === "glyph") {
    if (liveCodeCameraMode) liveCodeCameraMode.value = "wide";
    if (liveCodeDensity) liveCodeDensity.value = "66";
    if (liveCodeSpeed) liveCodeSpeed.value = "54";
    if (liveCodeZoom) liveCodeZoom.value = "34";
    if (liveCodeLetters) liveCodeLetters.value = "78";
    if (liveCodeFigure) liveCodeFigure.value = "78";
    if (liveCodeLanguage) liveCodeLanguage.value = "60";
    if (liveCodeGlow) liveCodeGlow.value = "62";
    if (liveCodeBrightness) liveCodeBrightness.value = "74";
    if (liveCodeAudioAmount) liveCodeAudioAmount.value = "74";
  } else if (id === "oracle") {
    if (liveCodeCameraMode) liveCodeCameraMode.value = "macro";
    if (liveCodeDensity) liveCodeDensity.value = "42";
    if (liveCodeSpeed) liveCodeSpeed.value = "32";
    if (liveCodeZoom) liveCodeZoom.value = "82";
    if (liveCodeLetters) liveCodeLetters.value = "34";
    if (liveCodeFigure) liveCodeFigure.value = "92";
    if (liveCodeLanguage) liveCodeLanguage.value = "48";
    if (liveCodeGlow) liveCodeGlow.value = "48";
    if (liveCodeBrightness) liveCodeBrightness.value = "66";
    if (liveCodeAudioAmount) liveCodeAudioAmount.value = "64";
  } else {
    if (liveCodeCameraMode) liveCodeCameraMode.value = "wide";
    if (liveCodeDensity) liveCodeDensity.value = "58";
    if (liveCodeSpeed) liveCodeSpeed.value = "44";
    if (liveCodeZoom) liveCodeZoom.value = "38";
    if (liveCodeLetters) liveCodeLetters.value = "62";
    if (liveCodeFigure) liveCodeFigure.value = "62";
    if (liveCodeLanguage) liveCodeLanguage.value = "52";
    if (liveCodeGlow) liveCodeGlow.value = "54";
    if (liveCodeBrightness) liveCodeBrightness.value = "68";
    if (liveCodeAudioAmount) liveCodeAudioAmount.value = "72";
  }
  if (liveCodeAudio) liveCodeAudio.checked = true;
  updateLiveQuickOutputs();
  if (withRender) scheduleRender();
}

function ensureParticlesGpu() {
  if (particlesGpuForcedOff) return false;
  if (particlesGpuReady && particlesGpu) return true;
  if (particlesGpuTriedInit) return false;
  particlesGpuTriedInit = true;
  try {
    const glCanvas = document.createElement("canvas");
    const gl = glCanvas.getContext("webgl2", {
      alpha: true,
      premultipliedAlpha: false,
      antialias: false,
      preserveDrawingBuffer: false,
    });
    if (!gl) return false;
    gl.getExtension("EXT_color_buffer_float");

    const quadVs = `#version 300 es
      precision highp float;
      out vec2 vUv;
      void main() {
        vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
        vUv = p * 0.5;
        gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
      }`;
    const initFs = `#version 300 es
      precision highp float;
      in vec2 vUv;
      layout(location=0) out vec4 oPos;
      layout(location=1) out vec4 oVel;
      layout(location=2) out vec4 oAttr;
      uniform sampler2D uSource;
      uniform vec2 uRes;
      uniform int uEmitter;
      uniform float uSeed;
      float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1,311.7)) + uSeed * 17.23) * 43758.5453); }
      void main() {
        vec2 uv = (floor(vUv * uRes) + 0.5) / uRes;
        float lum = dot(texture(uSource, uv).rgb, vec3(0.299,0.587,0.114));
        float s0 = hash(uv * 1.31);
        float s1 = hash(uv * 2.17 + 0.37);
        float s2 = hash(uv * 3.11 + 0.71);
        vec3 p;
        if (uEmitter == 1) {
          p = vec3(s0 * 2.0 - 1.0, s1 * 2.0 - 1.0, s2 * 2.0 - 1.0);
        } else if (uEmitter == 2) {
          p = vec3(uv * 2.0 - 1.0, (lum - 0.5) * 1.6);
          p.xy += vec2(s0 - 0.5, s1 - 0.5) * 0.3;
        } else {
          // Cloud emitter: volumetric spawn to avoid flat UV projection.
          vec3 q = vec3(s0 * 2.0 - 1.0, s1 * 2.0 - 1.0, s2 * 2.0 - 1.0);
          float invLen = inversesqrt(max(dot(q, q), 0.0005));
          float rad = pow(s2, 0.72) * 1.08;
          p = q * invLen * rad;
          p.xy += (uv * 2.0 - 1.0) * 0.12;
          p.z += (lum - 0.5) * 0.28;
        }
        vec3 v = vec3((s1 - 0.5) * 0.02, (s2 - 0.5) * 0.02, (s0 - 0.5) * 0.02);
        oPos = vec4(p, 0.55 + s0 * 0.45);
        oVel = vec4(v, 0.0);
        oAttr = vec4(uv, s2, 1.0);
      }`;
    const updateFs = `#version 300 es
      precision highp float;
      in vec2 vUv;
      layout(location=0) out vec4 oPos;
      layout(location=1) out vec4 oVel;
      layout(location=2) out vec4 oAttr;
      uniform sampler2D uPos;
      uniform sampler2D uVel;
      uniform sampler2D uAttr;
      uniform sampler2D uSource;
      uniform float uTime;
      uniform float uNoise;
      uniform float uAttract;
      uniform float uFlow;
      uniform float uDamp;
      uniform float uVortex;
      uniform float uDepth;
      uniform float uSpawn;
      uniform float uMotion;
      uniform float uAudio;
      uniform float uFocus;
      uniform vec3 uFocusA;
      uniform vec3 uFocusB;
      uniform vec3 uFocusC;
      uniform vec3 uFocusD;
      uniform int uEmitter;
      float n3(vec3 p) { return fract(sin(dot(p, vec3(12.9898,78.233,35.425))) * 43758.5453) * 2.0 - 1.0; }
      void main() {
        vec4 p4 = texture(uPos, vUv);
        vec4 v4 = texture(uVel, vUv);
        vec4 a4 = texture(uAttr, vUv);
        vec3 p = p4.xyz;
        vec3 v = v4.xyz;
        float life = p4.w;
        vec3 fNoise = vec3(
          n3(vec3(p.xy * 2.7, uTime * 0.81 + a4.z)),
          n3(vec3(p.yz * 2.3, uTime * 0.74 + a4.z)),
          n3(vec3(p.zx * 2.1, uTime * 0.67 + a4.z))
        ) * (0.002 + uNoise * 0.011 + uMotion * 0.003);
        vec3 fAttr = -p * (0.001 + uAttract * 0.008);
        float sf = a4.z;
        vec3 c0 = uFocusA;
        vec3 c1 = uFocusB;
        vec3 c2 = uFocusC;
        vec3 c3 = uFocusD;
        vec3 gA = sf < 0.5 ? c0 : c1;
        vec3 gB = sf < 0.25 ? c1 : sf < 0.5 ? c2 : sf < 0.75 ? c3 : c0;
        vec3 gCenter = mix(gA, gB, 0.22 + uAudio * 0.08);
        vec3 gd = gCenter - p;
        float gd2 = dot(gd, gd) + 0.045;
        vec3 fFocus = gd * ((0.0006 + uFocus * (0.006 + uAudio * 0.004)) / gd2);
        vec3 fOrbit = vec3(-gd.y, gd.x, 0.0) * ((0.0002 + uFocus * 0.0012) / sqrt(gd2 + 0.02));
        vec3 fVort = vec3(-p.y, p.x, 0.0) * ((0.001 + uVortex * 0.008) * (1.0 + uAudio * 0.42));
        vec3 fFlow = vec3(0.0, 0.0, uAudio * 0.0035) * (0.4 + uFlow * 0.8);
        v += fNoise + fAttr + fFocus + fOrbit + fVort + fFlow;
        v *= uDamp;
        p += vec3(v.xy, v.z * (0.24 + uDepth * 1.85));
        life -= 0.0018 + (1.0 - uSpawn) * 0.0034;
        bool oob = abs(p.x) > 1.6 || abs(p.y) > 1.6 || abs(p.z) > 1.9;
        if (life <= 0.0 || oob) {
          vec2 uv = a4.xy;
          float lum = dot(texture(uSource, uv).rgb, vec3(0.299,0.587,0.114));
          float s0 = fract(sin(dot(uv * 1.31, vec2(127.1,311.7)) + uTime * 0.37) * 43758.5453);
          float s1 = fract(sin(dot(uv * 2.17, vec2(127.1,311.7)) + uTime * 0.53) * 43758.5453);
          float s2 = fract(sin(dot(uv * 3.11, vec2(127.1,311.7)) + uTime * 0.71) * 43758.5453);
          if (uEmitter == 1) {
            p = vec3(s0 * 2.0 - 1.0, s1 * 2.0 - 1.0, s2 * 2.0 - 1.0);
          } else if (uEmitter == 2) {
            p = vec3(uv * 2.0 - 1.0, (lum - 0.5) * 1.6);
            p.xy += vec2(s0 - 0.5, s1 - 0.5) * (uMotion * 0.7);
          } else {
            vec3 q = vec3(s0 * 2.0 - 1.0, s1 * 2.0 - 1.0, s2 * 2.0 - 1.0);
            float invLen = inversesqrt(max(dot(q, q), 0.0005));
            float rad = pow(s2, 0.72) * 1.08;
            p = q * invLen * rad;
            p.xy += (uv * 2.0 - 1.0) * 0.12;
            p.z += (lum - 0.5) * 0.28;
          }
          v = vec3((s1 - 0.5) * 0.01, (s2 - 0.5) * 0.01, (s0 - 0.5) * 0.01);
          life = 0.45 + s0 * 0.55;
        }
        oPos = vec4(p, life);
        oVel = vec4(v, 0.0);
        oAttr = a4;
      }`;
    const drawVs = `#version 300 es
      precision highp float;
      uniform sampler2D uPos;
      uniform sampler2D uAttr;
      uniform sampler2D uSource;
      uniform vec2 uRes;
      uniform vec2 uCanvas;
      uniform vec3 uCamDeg;
      uniform float uZoom;
      uniform vec2 uPan;
      uniform float uPointSize;
      uniform float uHue;
      uniform int uColorMode;
      uniform float uAudio;
      uniform float uTransient;
      uniform float uTime;
      out vec4 vColor;
      vec3 h2r(float h, float s, float l){
        vec3 c = vec3(h, s, l);
        vec3 rgb = clamp(abs(mod(c.x*6.0 + vec3(0.0,4.0,2.0), 6.0)-3.0)-1.0,0.0,1.0);
        rgb = rgb*rgb*(3.0-2.0*rgb);
        return c.z + c.y*(rgb-0.5)*(1.0-abs(2.0*c.z-1.0));
      }
      mat3 rotXYZ(vec3 r){
        vec3 c = cos(r), s = sin(r);
        mat3 rx = mat3(1,0,0, 0,c.x,-s.x, 0,s.x,c.x);
        mat3 ry = mat3(c.y,0,s.y, 0,1,0, -s.y,0,c.y);
        mat3 rz = mat3(c.z,-s.z,0, s.z,c.z,0, 0,0,1);
        return rz * ry * rx;
      }
      void main() {
        float id = float(gl_VertexID);
        float x = mod(id, uRes.x);
        float y = floor(id / uRes.x);
        vec2 uv = (vec2(x,y) + 0.5) / uRes;
        vec4 p4 = texture(uPos, uv);
        vec4 a4 = texture(uAttr, uv);
        vec3 p = p4.xyz;
        vec3 pr = rotXYZ(radians(uCamDeg)) * vec3(p.xy * 220.0 + uPan, p.z * 164.0);
        float fov = min(uCanvas.x, uCanvas.y) * 0.46;
        float pScale = fov / (fov + pr.z + 0.001);
        vec2 sp = vec2(uCanvas.x*0.5 + pr.x * pScale * uZoom, uCanvas.y*0.5 + pr.y * pScale * uZoom);
        vec2 ndc = vec2(sp.x / uCanvas.x * 2.0 - 1.0, 1.0 - sp.y / uCanvas.y * 2.0);
        gl_Position = vec4(ndc, 0.0, 1.0);
        gl_PointSize = max(1.0, uPointSize * (0.72 + pScale * 1.3));
        vec3 col;
        if (uColorMode == 0) {
          vec3 srcCol = texture(uSource, a4.xy).rgb;
          float lum = dot(srcCol, vec3(0.299, 0.587, 0.114));
          vec3 fallbackCol = h2r(fract(a4.z * 0.85 + uHue / 360.0), 0.82, 0.52 + uAudio * 0.07);
          float visMix = clamp(0.2 + (1.0 - lum) * 0.5, 0.16, 0.72);
          col = mix(srcCol, fallbackCol, visMix);
        }
        else if (uColorMode == 1) col = h2r(fract(a4.z * 0.9 + uHue / 360.0), 0.78, 0.52 + uAudio * 0.08);
        else col = h2r(fract(0.67 - uAudio*0.62 + uHue/360.0), 0.85, clamp(0.4 + uAudio*0.35, 0.0, 1.0));
        float pulse = 0.5 + 0.5 * sin(uTime * 2.2 + a4.z * 17.0);
        vec3 transCol = h2r(fract((uHue / 360.0) + uTime * 0.03 + a4.z * 0.2 + uTransient * 0.35), 0.84, 0.56 + uTransient * 0.2);
        col = mix(col, transCol, clamp(0.14 + uAudio * 0.22 + uTransient * 0.34 + pulse * 0.08, 0.0, 0.68));
        vColor = vec4(col, clamp(0.45 + p4.w * 0.55 + uAudio * 0.2 + uTransient * 0.12, 0.0, 1.0));
      }`;
    const drawFs = `#version 300 es
      precision highp float;
      in vec4 vColor;
      out vec4 oColor;
      void main() {
        vec2 p = gl_PointCoord * 2.0 - 1.0;
        float r2 = dot(p,p);
        if (r2 > 1.0) discard;
        float a = (1.0 - r2) * vColor.a;
        oColor = vec4(vColor.rgb, a);
      }`;

    const initProg = createParticlesGpuProgram(gl, quadVs, initFs);
    const updateProg = createParticlesGpuProgram(gl, quadVs, updateFs);
    const drawProg = createParticlesGpuProgram(gl, drawVs, drawFs);

    const vao = gl.createVertexArray();
    gl.bindVertexArray(vao);
    gl.bindVertexArray(null);

    particlesGpu = {
      glCanvas,
      gl,
      initProg,
      updateProg,
      drawProg,
      vao,
      sourceTex: null,
      simW: 0,
      simH: 0,
      drawN: 0,
      ping: 0,
      srcPair: null,
      dstPair: null,
      lastEmitter: -1,
    };
    particlesGpuReady = true;
    return true;
  } catch (err) {
    console.error("Particles GPU init failed", err);
    disableParticlesGpu(err);
    return false;
  }
}

function particlesGpuCreateTexture(gl, w, h, internalFmt = gl.RGBA32F, fmt = gl.RGBA, type = gl.FLOAT) {
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  gl.texImage2D(gl.TEXTURE_2D, 0, internalFmt, w, h, 0, fmt, type, null);
  return tex;
}

function particlesGpuCreatePair(gl, w, h) {
  const pos = particlesGpuCreateTexture(gl, w, h);
  const vel = particlesGpuCreateTexture(gl, w, h);
  const attr = particlesGpuCreateTexture(gl, w, h);
  const fbo = gl.createFramebuffer();
  gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, pos, 0);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT1, gl.TEXTURE_2D, vel, 0);
  gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT2, gl.TEXTURE_2D, attr, 0);
  gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2]);
  const ok = gl.checkFramebufferStatus(gl.FRAMEBUFFER) === gl.FRAMEBUFFER_COMPLETE;
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  if (!ok) throw new Error("particles framebuffer incomplete");
  return { pos, vel, attr, fbo };
}

function ensureParticlesGpuBuffers(baseImageData, ps) {
  try {
    if (!ensureParticlesGpu()) return false;
    const g = particlesGpu;
    const gl = g.gl;
    const targetN = getParticlesTargetCount(ps.count);
    const simW = Math.max(1, Math.floor(Math.sqrt(targetN)));
    const simH = Math.max(1, Math.ceil(targetN / simW));
    const needsRebuild = !g.srcPair || g.simW !== simW || g.simH !== simH;
    const emitter = ps.emitter === "volume" ? 1 : ps.emitter === "motion" ? 2 : 0;
    if (needsRebuild || g.lastEmitter !== emitter) {
      g.simW = simW;
      g.simH = simH;
      g.drawN = simW * simH;
      g.srcPair = particlesGpuCreatePair(gl, simW, simH);
      g.dstPair = particlesGpuCreatePair(gl, simW, simH);
      g.ping = 0;
    }
    if (!g.sourceTex) {
      g.sourceTex = gl.createTexture();
      gl.bindTexture(gl.TEXTURE_2D, g.sourceTex);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    }
    gl.bindTexture(gl.TEXTURE_2D, g.sourceTex);
    gl.pixelStorei(gl.UNPACK_ALIGNMENT, 1);
    gl.texImage2D(
      gl.TEXTURE_2D,
      0,
      gl.RGBA,
      baseImageData.width,
      baseImageData.height,
      0,
      gl.RGBA,
      gl.UNSIGNED_BYTE,
      baseImageData.data
    );
    if (needsRebuild) {
      gl.useProgram(g.initProg);
      gl.bindVertexArray(g.vao);
      gl.viewport(0, 0, g.simW, g.simH);
      gl.bindFramebuffer(gl.FRAMEBUFFER, g.srcPair.fbo);
      gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2]);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, g.sourceTex);
      gl.uniform1i(gl.getUniformLocation(g.initProg, "uSource"), 0);
      gl.uniform2f(gl.getUniformLocation(g.initProg, "uRes"), g.simW, g.simH);
      gl.uniform1i(gl.getUniformLocation(g.initProg, "uEmitter"), emitter);
      gl.uniform1f(gl.getUniformLocation(g.initProg, "uSeed"), randomSeed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.bindVertexArray(null);
      g.lastEmitter = emitter;
    }
    return true;
  } catch (err) {
    disableParticlesGpu(err);
    return false;
  }
}

function renderParticlesModeGpu(baseImageData, tSec, settings) {
  try {
    const ps = getParticlesSettings();
    if (!ensureParticlesGpuBuffers(baseImageData, ps)) return false;
    const g = particlesGpu;
    const gl = g.gl;

  const src = g.ping === 0 ? g.srcPair : g.dstPair;
  const dst = g.ping === 0 ? g.dstPair : g.srcPair;
  const emitter = ps.emitter === "volume" ? 1 : ps.emitter === "motion" ? 2 : 0;
  const colorMode = ps.colorMode === "palette" ? 1 : ps.colorMode === "audio" ? 2 : 0;
  const fxStyle = ps.fxStyle || "none";
  const fxAmount = clamp((ps.fxAmount || 0) / 100, 0, 1);
  const neonFx = fxStyle === "neon";

  const flowMotion = clamp(visualFeatures.motion * 1.2, 0, 1.2);
  const audioState = getReactiveAudioState(settings || getSettings(), ps.audioOn, (ps.audioAmount || 0) / 100);
  const audioMotionGate = ps.audioOn ? clamp(audioState.master / 0.28, 0, 1) : 1;
  const audioDrive = clamp(
    audioState.level * 0.95 + audioState.transient * 0.35 + (audioState.bands[1] + audioState.bands[2]) * 0.22,
    0,
    1.9
  );
  particlesCamXSmooth += (ps.camX - particlesCamXSmooth) * 0.08;
  particlesCamYSmooth += (ps.camY - particlesCamYSmooth) * 0.08;
  particlesCamZSmooth += (ps.camZ - particlesCamZSmooth) * 0.08;
  const motion = getParticlesCameraMotion(ps, settings || getSettings(), tSec);
  const camX = particlesCamXSmooth + motion.rxDeg;
  const camY = particlesCamYSmooth + motion.ryDeg;
  const camZ = particlesCamZSmooth + motion.rzDeg;
  const zoom = ((settings && settings.cameraZoom ? settings.cameraZoom : 86) / 100) * motion.zoomMul * 1.14;
  const panX = motion.panX * 120;
  const panY = motion.panY * 120;
  const dampBase = clamp(1 - ps.damping / 100 * 0.11, 0.82, 0.999);
  const damp = ps.audioOn
    ? clamp(dampBase * audioMotionGate + (1 - audioMotionGate) * 0.995, 0.92, 0.9995)
    : dampBase;
  const focusA = clamp((ps.focus || 0) / 100, 0, 1);
  const focusBase = 2 + Math.round(focusA * 2 + clamp(audioDrive * 0.55, 0, 1));
  const focalCount = clamp(focusBase, 2, 4);
  const focalPoints = [];
  for (let fi = 0; fi < focalCount; fi++) {
    const fn = fi / Math.max(1, focalCount - 1);
    const baseAng = tSec * (0.18 + fi * 0.03 + (ps.flow / 100) * 0.24) + fi * (Math.PI * 0.7);
    const r = 0.3 + fn * 0.32 + Math.sin(tSec * (0.12 + fi * 0.08) + fi) * (0.06 + audioDrive * 0.06);
    focalPoints.push({
      x: Math.cos(baseAng) * r,
      y: Math.sin(baseAng * (0.9 + fi * 0.07)) * r * 0.74,
      z: Math.sin(baseAng * (0.62 + fi * 0.08) + fn * 1.4) * (0.16 + audioDrive * 0.1),
    });
  }
  while (focalPoints.length < 4) focalPoints.push(focalPoints[focalPoints.length - 1] || { x: 0, y: 0, z: 0 });

  gl.disable(gl.DEPTH_TEST);
  gl.bindVertexArray(g.vao);

  gl.useProgram(g.updateProg);
  gl.viewport(0, 0, g.simW, g.simH);
  gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fbo);
  gl.drawBuffers([gl.COLOR_ATTACHMENT0, gl.COLOR_ATTACHMENT1, gl.COLOR_ATTACHMENT2]);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, src.pos);
  gl.uniform1i(gl.getUniformLocation(g.updateProg, "uPos"), 0);
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, src.vel);
  gl.uniform1i(gl.getUniformLocation(g.updateProg, "uVel"), 1);
  gl.activeTexture(gl.TEXTURE2);
  gl.bindTexture(gl.TEXTURE_2D, src.attr);
  gl.uniform1i(gl.getUniformLocation(g.updateProg, "uAttr"), 2);
  gl.activeTexture(gl.TEXTURE3);
  gl.bindTexture(gl.TEXTURE_2D, g.sourceTex);
  gl.uniform1i(gl.getUniformLocation(g.updateProg, "uSource"), 3);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uTime"), tSec);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uNoise"), (ps.noise / 100) * audioMotionGate);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uAttract"), (ps.attractor / 100) * (ps.audioOn ? (0.2 + audioMotionGate * 0.8) : 1));
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uFlow"), (ps.flow / 100) * audioMotionGate);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uDamp"), damp);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uVortex"), (ps.vortex / 100) * audioMotionGate);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uDepth"), ps.depth / 100);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uSpawn"), ps.spawn / 100);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uMotion"), flowMotion);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uAudio"), audioDrive);
  gl.uniform1f(gl.getUniformLocation(g.updateProg, "uFocus"), focusA);
  gl.uniform3f(gl.getUniformLocation(g.updateProg, "uFocusA"), focalPoints[0].x, focalPoints[0].y, focalPoints[0].z);
  gl.uniform3f(gl.getUniformLocation(g.updateProg, "uFocusB"), focalPoints[1].x, focalPoints[1].y, focalPoints[1].z);
  gl.uniform3f(gl.getUniformLocation(g.updateProg, "uFocusC"), focalPoints[2].x, focalPoints[2].y, focalPoints[2].z);
  gl.uniform3f(gl.getUniformLocation(g.updateProg, "uFocusD"), focalPoints[3].x, focalPoints[3].y, focalPoints[3].z);
  gl.uniform1i(gl.getUniformLocation(g.updateProg, "uEmitter"), emitter);
  gl.drawArrays(gl.TRIANGLES, 0, 3);

  g.ping = 1 - g.ping;
  const drawSrc = g.ping === 0 ? g.srcPair : g.dstPair;

  g.glCanvas.width = canvas.width;
  g.glCanvas.height = canvas.height;
  gl.viewport(0, 0, g.glCanvas.width, g.glCanvas.height);
  gl.bindFramebuffer(gl.FRAMEBUFFER, null);
  gl.clearColor(0, 0, 0, 0);
  gl.clear(gl.COLOR_BUFFER_BIT);
  gl.enable(gl.BLEND);
  gl.blendFunc(gl.SRC_ALPHA, neonFx ? gl.ONE : gl.ONE_MINUS_SRC_ALPHA);
  gl.useProgram(g.drawProg);
  gl.activeTexture(gl.TEXTURE0);
  gl.bindTexture(gl.TEXTURE_2D, drawSrc.pos);
  gl.uniform1i(gl.getUniformLocation(g.drawProg, "uPos"), 0);
  gl.activeTexture(gl.TEXTURE1);
  gl.bindTexture(gl.TEXTURE_2D, drawSrc.attr);
  gl.uniform1i(gl.getUniformLocation(g.drawProg, "uAttr"), 1);
  gl.activeTexture(gl.TEXTURE2);
  gl.bindTexture(gl.TEXTURE_2D, g.sourceTex);
  gl.uniform1i(gl.getUniformLocation(g.drawProg, "uSource"), 2);
  gl.uniform2f(gl.getUniformLocation(g.drawProg, "uRes"), g.simW, g.simH);
  gl.uniform2f(gl.getUniformLocation(g.drawProg, "uCanvas"), g.glCanvas.width, g.glCanvas.height);
  gl.uniform3f(gl.getUniformLocation(g.drawProg, "uCamDeg"), camX, camY, camZ);
  gl.uniform1f(gl.getUniformLocation(g.drawProg, "uZoom"), zoom);
  gl.uniform2f(gl.getUniformLocation(g.drawProg, "uPan"), panX, panY);
  const pointSize = (1.0 + (ps.size / 100) * 2.6) * (neonFx ? (1 + fxAmount * 0.38) : 1);
  gl.uniform1f(gl.getUniformLocation(g.drawProg, "uPointSize"), pointSize);
  gl.uniform1f(gl.getUniformLocation(g.drawProg, "uHue"), ps.hue);
  gl.uniform1i(gl.getUniformLocation(g.drawProg, "uColorMode"), colorMode);
  gl.uniform1f(gl.getUniformLocation(g.drawProg, "uAudio"), audioDrive);
  gl.uniform1f(gl.getUniformLocation(g.drawProg, "uTransient"), audioState.transient);
  gl.uniform1f(gl.getUniformLocation(g.drawProg, "uTime"), tSec);
  gl.drawArrays(gl.POINTS, 0, g.drawN);
  gl.disable(gl.BLEND);
  gl.bindVertexArray(null);

    const glErr = gl.getError();
    if (glErr !== gl.NO_ERROR) {
      disableParticlesGpu(`GL error ${glErr}`);
      return false;
    }
    ctx.drawImage(g.glCanvas, 0, 0, canvas.width, canvas.height);
    return true;
  } catch (err) {
    disableParticlesGpu(err);
    return false;
  }
}

function renderParticlesModeCpu(baseImageData, tSec, settings) {
  const ps = getParticlesSettings();
  ensureParticlesBuffers(baseImageData, ps);
  if (!particlesX || particlesBufferN <= 0) return;
  const faceTrace = buildParticlesFaceTargets(baseImageData, ps, performance.now());

  const fpsReady = Number.isFinite(fps) && fps > 1;
  if (fpsReady && fps < 30) {
    particlesPerfStreak += 1;
    if (particlesPerfStreak > 10) {
      particlesDrawStride = Math.min(8, particlesDrawStride + 1);
      particlesPerfStreak = 0;
    }
  } else if (fpsReady && fps > 52 && particlesDrawStride > 1) {
    particlesDrawStride = Math.max(1, particlesDrawStride - 1);
  } else {
    particlesPerfStreak = Math.max(0, particlesPerfStreak - 1);
  }

  const w = canvas.width;
  const h = canvas.height;
  const out = ctx.getImageData(0, 0, w, h);
  const od = out.data;
  const n = particlesBufferN;
  const dt = 0.016;
  const audioState = getReactiveAudioState(settings || getSettings(), ps.audioOn, (ps.audioAmount || 0) / 100);
  const audioMotionGate = ps.audioOn ? clamp(audioState.master / 0.28, 0, 1) : 1;
  const noiseA = (ps.noise / 100) * audioMotionGate;
  const attractA = (ps.attractor / 100) * (ps.audioOn ? (0.2 + audioMotionGate * 0.8) : 1);
  const flowA = (ps.flow / 100) * audioMotionGate;
  const driftA = clamp(ps.drift / 100, 0, 1);
  const focusA = clamp(ps.focus / 100, 0, 1);
  const dampBase = clamp(1 - ps.damping / 100 * 0.11, 0.82, 0.999);
  const damp = ps.audioOn
    ? clamp(dampBase * audioMotionGate + (1 - audioMotionGate) * 0.995, 0.92, 0.9995)
    : dampBase;
  const vort = (ps.vortex / 100) * audioMotionGate;
  const zScale = 0.22 + (ps.depth / 100) * 1.9;
  const bands = audioState.bands;
  const audioDrive = clamp(
    audioState.level * 0.95 + audioState.transient * 0.35 + (audioState.bands[1] + audioState.bands[2]) * 0.22,
    0,
    1.9
  );
  const flowMotion = clamp(visualFeatures.motion * 1.2, 0, 1.2);
  const webcamBoost = webcamActive ? clamp(visualFeatures.motion * 2.2, 0, 2.2) : 0;
  particlesCamXSmooth += (ps.camX - particlesCamXSmooth) * 0.08;
  particlesCamYSmooth += (ps.camY - particlesCamYSmooth) * 0.08;
  particlesCamZSmooth += (ps.camZ - particlesCamZSmooth) * 0.08;
  const motion = getParticlesCameraMotion(ps, settings || getSettings(), tSec);
  const rx = (particlesCamXSmooth + motion.rxDeg) * (Math.PI / 180);
  const ry = (particlesCamYSmooth + motion.ryDeg) * (Math.PI / 180);
  const rz = (particlesCamZSmooth + motion.rzDeg) * (Math.PI / 180);
  const fov = Math.min(w, h) * 0.46;
  const zoom = ((settings && settings.cameraZoom ? settings.cameraZoom : 86) / 100) * motion.zoomMul * 1.14;
  const panX = motion.panX * 120;
  const panY = motion.panY * 120;
  const worldScale = 205 + (ps.size / 100) * 34;
  const sizePx = 1.0 + (ps.size / 100) * 2.7;
  const trailA = clamp((ps.trail || 0) / 100, 0, 1);
  const trailLen = Math.round(trailA * 10);
  const fxStyle = ps.fxStyle || "none";
  const fxAmount = clamp((ps.fxAmount || 0) / 100, 0, 1);
  const neonFx = fxStyle === "neon";
  const datamoshFx = fxStyle === "datamosh";
  const neonGlow = neonFx ? clamp(0.1 + fxAmount * 0.46, 0, 0.7) : 0;
  const datamoshLen = datamoshFx ? Math.round(2 + fxAmount * 8) : 0;
  const datamoshSkip = datamoshFx && particlesDrawStride < 2 ? 2 : 1;
  const thr = ps.motionThreshold / 100;
  const splitMode = ps.audioSplit || "basic";
  const structureMode = ps.structure || "cloud";
  const orderK = clamp((ps.order || 0) / 100, 0, 1);
  const springKBase = 0.002 + orderK * 0.02;
  const gradientMode = ps.gradientMode || "radial";
  const colorMixA = clamp((ps.colorMix || 0) / 100, 0, 1);
  const gradientSpread = 0.38 + clamp((ps.gradientSpread || 0) / 100, 0, 1) * 1.95;
  const gradA = hexToRgb(ps.gradientA || "#00d8ff");
  const gradB = hexToRgb(ps.gradientB || "#ff2ea6");
  const focusBase = 2 + Math.round(focusA * 2 + clamp(audioDrive * 0.55, 0, 1));
  const focalCount = clamp(focusBase, 2, 4);
  const focalPoints = [];
  for (let fi = 0; fi < focalCount; fi++) {
    const fn = fi / Math.max(1, focalCount - 1);
    const baseAng = tSec * (0.18 + fi * 0.03 + flowA * 0.24) + fi * (Math.PI * 0.7);
    const r = 0.3 + fn * 0.32 + Math.sin(tSec * (0.12 + fi * 0.08) + fi) * (0.06 + audioDrive * 0.06);
    focalPoints.push({
      x: Math.cos(baseAng) * r,
      y: Math.sin(baseAng * (0.9 + fi * 0.07)) * r * 0.74,
      z: Math.sin(baseAng * (0.62 + fi * 0.08) + fn * 1.4) * (0.16 + audioDrive * 0.1),
    });
  }
  const faceEnabled = Boolean(faceTrace && faceTrace.points && faceTrace.points.length > 0);
  const faceAssignN = faceEnabled ? Math.min(n, Math.floor(n * faceTrace.assignRatio)) : 0;
  const facePoints = faceEnabled ? faceTrace.points : null;
  const faceCenter = faceEnabled ? faceTrace.center : null;
  const faceSpring = faceEnabled ? faceTrace.spring : 0;
  const faceJitter = faceEnabled ? faceTrace.jitter : 0;

  for (let i = 0; i < n; i += particlesDrawStride) {
    const seed = particlesSeed[i];
    let x = particlesX[i];
    let y = particlesY[i];
    let z = particlesZ[i];
    let vx = particlesVX[i];
    let vy = particlesVY[i];
    let vz = particlesVZ[i];
    let life = particlesLife[i];
    const isFaceParticle = faceEnabled && i < faceAssignN;
    const localNoiseK = isFaceParticle ? 0.35 : 1;
    const localFlowK = isFaceParticle ? 0.55 : 1;
    const localVortK = isFaceParticle ? 0.25 : 1;

    const nx = Math.sin(tSec * (0.8 + seed * 0.6) + y * 2.7 + seed * 9.2);
    const ny = Math.cos(tSec * (0.74 + seed * 0.5) + x * 2.1 + seed * 7.4);
    const nz = Math.sin(tSec * (0.63 + seed * 0.4) + (x + y) * 1.9 + seed * 6.1);
    const driftDrive = 0.06 + driftA * 0.96 + audioDrive * 0.28;
    vx += nx * (0.0002 + (noiseA * 0.009 + webcamBoost * 0.0022) * driftDrive) * localNoiseK;
    vy += ny * (0.0002 + (noiseA * 0.009 + webcamBoost * 0.0022) * driftDrive) * localNoiseK;
    vz += nz * (0.0002 + (noiseA * 0.0075 + webcamBoost * 0.0018) * driftDrive) * localNoiseK;

    vx += -x * (0.001 + attractA * 0.008);
    vy += -y * (0.001 + attractA * 0.008);
    vz += -z * (0.0008 + attractA * 0.006);

    const vortK = (0.001 + vort * 0.008) * (1 + audioDrive * 0.45) * localVortK;
    const tx = -y * vortK;
    const ty = x * vortK;
    vx += tx;
    vy += ty;

    const flowK = (0.0008 + flowA * 0.01) * (0.45 + flowMotion * 1.4 + audioDrive * 0.5 + webcamBoost * 0.65) * localFlowK;
    vx += (pointerTiltX * 0.8 + stageGeomMotionX * 2.2) * flowK;
    vy += (pointerTiltY * 0.8 + stageGeomMotionY * 2.2) * flowK;
    vz += (audioState.transient * 0.3 + bands[1] * 0.25) * flowK;

    const split = getParticleAudioSplitState(ps, seed, tSec, audioState);
    if (splitMode === "zones") {
      const zone = i % 4;
      const zoneDrive = zone === 0 ? split.bass : zone === 1 ? split.mid : zone === 2 ? split.high : split.low;
      vx += Math.cos(tSec * (0.8 + zone * 0.2) + seed * 6.3) * zoneDrive * 0.0025;
      vy += Math.sin(tSec * (0.7 + zone * 0.17) + seed * 7.1) * zoneDrive * 0.0025;
      vz += (split.transient * 0.002 + zoneDrive * 0.0014) * (zone % 2 === 0 ? 1 : -1);
    }

    if (structureMode !== "cloud") {
      const target = getStructuredParticleTarget(ps, particlesU[i], particlesV[i], seed, i, n, tSec, split);
      const springK = springKBase * (1 + split.radial * 0.22);
      vx += (target.x - x) * springK;
      vy += (target.y - y) * springK;
      vz += (target.z - z) * (springK * 0.9);
    }

    if (focusA > 0.001 && !isFaceParticle) {
      // Multi-center gravity: each particle binds to a primary core with a secondary blend.
      const aIdx = Math.floor(seed * focalCount) % focalCount;
      const bIdx = (aIdx + 1 + (i % Math.max(1, focalCount - 1))) % focalCount;
      const aF = focalPoints[aIdx];
      const bF = focalPoints[bIdx];
      const blend = 0.24 + split.transient * 0.14;
      const gx = aF.x * (1 - blend) + bF.x * blend;
      const gy = aF.y * (1 - blend) + bF.y * blend;
      const gz = aF.z * (1 - blend) + bF.z * blend;
      const dx = gx - x;
      const dy = gy - y;
      const dz = gz - z;
      const dist2 = dx * dx + dy * dy + dz * dz + 0.035;
      const gravity = focusA * (0.00085 + audioDrive * 0.0015 + split.transient * 0.0012) / dist2;
      vx += dx * gravity;
      vy += dy * gravity;
      vz += dz * gravity * 0.9;
      const orbit = (0.00024 + split.angular * 0.0007 + vort * 0.0006) / Math.sqrt(dist2 + 0.02);
      vx += -dy * orbit;
      vy += dx * orbit;
    }

    if (isFaceParticle) {
      const fp = facePoints[i % facePoints.length];
      const faceDrive = faceSpring * (0.82 + split.transient * 0.3 + audioDrive * 0.14);
      vx += (fp.x - x) * faceDrive;
      vy += (fp.y - y) * faceDrive;
      vz += (fp.z - z) * (faceDrive * 0.86);
      life = Math.max(life, 0.26);
    } else if (faceEnabled && faceCenter) {
      const haloK = 0.0016 + (faceSpring * 0.15);
      vx += (faceCenter.x - x) * haloK;
      vy += (faceCenter.y - y) * haloK;
      vz += (faceCenter.z - z) * haloK * 0.72;
    }

    const localDamp = isFaceParticle ? clamp(damp + 0.03, 0.9, 0.9997) : damp;
    vx *= localDamp;
    vy *= localDamp;
    vz *= localDamp;

    x += vx;
    y += vy;
    z += vz * zScale;
    life -= 0.0018 + (1 - ps.spawn / 100) * 0.0034;

    const outOfBounds = Math.abs(x) > 1.5 || Math.abs(y) > 1.5 || Math.abs(z) > 1.8;
    if (life <= 0 || outOfBounds) {
      const u = particlesU[i];
      const v = particlesV[i];
      if (isFaceParticle) {
        const fp = facePoints[i % facePoints.length];
        x = fp.x + (randHash(i, 151, randomSeed + 883) * 2 - 1) * faceJitter;
        y = fp.y + (randHash(i, 157, randomSeed + 887) * 2 - 1) * faceJitter;
        z = fp.z + (randHash(i, 163, randomSeed + 893) * 2 - 1) * faceJitter * 0.8;
      } else if (ps.emitter === "volume") {
        x = randHash(i, 101, randomSeed + 801) * 2 - 1;
        y = randHash(i, 103, randomSeed + 803) * 2 - 1;
        z = randHash(i, 107, randomSeed + 809) * 2 - 1;
      } else {
        const mBoost = ps.emitter === "motion" && visualFeatures.motion > thr ? 0.35 : 0.14;
        if (structureMode === "cloud") {
          const qx = randHash(i, 223, randomSeed + 947) * 2 - 1;
          const qy = randHash(i, 227, randomSeed + 953) * 2 - 1;
          const qz = randHash(i, 229, randomSeed + 967) * 2 - 1;
          const invLen = 1 / Math.max(0.001, Math.hypot(qx, qy, qz));
          const rad = Math.pow(randHash(i, 233, randomSeed + 971), 0.72) * 1.06;
          x = qx * invLen * rad + (u * 2 - 1) * 0.1;
          y = qy * invLen * rad + (v * 2 - 1) * 0.1;
          z = qz * invLen * rad;
        } else {
          x = (u * 2 - 1) * 0.9 + (randHash(i, 109, randomSeed + 811) * 2 - 1) * mBoost;
          y = (v * 2 - 1) * 0.9 + (randHash(i, 113, randomSeed + 813) * 2 - 1) * mBoost;
          z = (randHash(i, 127, randomSeed + 815) * 2 - 1) * 0.6;
        }
      }
      const spawnVel = 0.003 + driftA * 0.01;
      vx = (randHash(i, 131, randomSeed + 817) * 2 - 1) * spawnVel;
      vy = (randHash(i, 137, randomSeed + 819) * 2 - 1) * spawnVel;
      vz = (randHash(i, 139, randomSeed + 821) * 2 - 1) * spawnVel;
      life = 0.45 + randHash(i, 149, randomSeed + 823) * 0.55;
    }

    particlesX[i] = x;
    particlesY[i] = y;
    particlesZ[i] = z;
    particlesVX[i] = vx;
    particlesVY[i] = vy;
    particlesVZ[i] = vz;
    particlesLife[i] = life;

    const [rx3, ry3, rz3] = rotate3D(x * worldScale + panX, y * worldScale + panY, z * worldScale * 0.78, rx, ry, rz);
    const [sxp, syp] = projectPoint3D(rx3, ry3, rz3, w, h, fov, zoom);
    const zz = 1.6 + rz3 * 0.006;
    const persp = 1 / Math.max(0.24, zz);
    const sx = Math.round(sxp);
    const sy = Math.round(syp);
    if (sx < 1 || sx >= w - 1 || sy < 1 || sy >= h - 1) continue;

    let r = 255;
    let g = 255;
    let b = 255;
    if (ps.colorMode === "source") {
      [r, g, b] = sampleSourceColor(baseImageData, particlesU[i], particlesV[i]);
      const lum = r * 0.299 + g * 0.587 + b * 0.114;
      const ph = ((particlesSeed[i] * 0.9 + tSec * 0.04 + ps.hue / 360) + 1) % 1;
      const [pr, pg, pb] = hslToRgb(ph, 0.8, 0.54 + audioDrive * 0.08);
      const visMix = clamp(0.2 + (1 - lum / 255) * 0.5, 0.16, 0.72);
      r = Math.round(r * (1 - visMix) + pr * visMix);
      g = Math.round(g * (1 - visMix) + pg * visMix);
      b = Math.round(b * (1 - visMix) + pb * visMix);
    } else if (ps.colorMode === "audio") {
      const heat = clamp(bands[0] * 0.7 + bands[1] * 0.6 + bands[3] * 0.35 + audioDrive * 0.4, 0, 1);
      const hue = ((0.67 - heat * 0.62 + ps.hue / 360) + 1) % 1;
      [r, g, b] = hslToRgb(hue, 0.85, clamp(0.4 + heat * 0.35, 0, 1));
    } else {
      const hue = ((particlesSeed[i] * 0.9 + tSec * 0.03 + ps.hue / 360) + 1) % 1;
      [r, g, b] = hslToRgb(hue, 0.78, 0.52 + audioDrive * 0.08);
    }
    const transHue = ((ps.hue / 360) + tSec * 0.04 + split.transient * 0.18 + audioDrive * 0.08 + particlesSeed[i] * 0.1) % 1;
    const [trR, trG, trB] = hslToRgb(transHue, 0.84, clamp(0.5 + split.transient * 0.18 + audioDrive * 0.12, 0, 1));
    const transMix = clamp(0.12 + audioDrive * 0.26 + split.transient * 0.32, 0, 0.72);
    r = Math.round(r * (1 - transMix) + trR * transMix);
    g = Math.round(g * (1 - transMix) + trG * transMix);
    b = Math.round(b * (1 - transMix) + trB * transMix);

    const gx = x / gradientSpread;
    const gy = y / gradientSpread;
    let gradT = 0.5;
    if (gradientMode === "axis-x") gradT = gx * 0.5 + 0.5;
    else if (gradientMode === "axis-y") gradT = gy * 0.5 + 0.5;
    else if (gradientMode === "spiral") {
      const ang = Math.atan2(gy, gx) / (Math.PI * 2) + 0.5;
      const rad = Math.sqrt(gx * gx + gy * gy) * 0.72;
      gradT = ang * 0.68 + rad * 0.42 + tSec * 0.04;
    } else {
      const radial = Math.sqrt(gx * gx + gy * gy);
      gradT = 1 - radial;
    }
    gradT = clamp((gradT % 1 + 1) % 1, 0, 1);
    const rg = Math.round(gradA.r * (1 - gradT) + gradB.r * gradT);
    const gg = Math.round(gradA.g * (1 - gradT) + gradB.g * gradT);
    const bg = Math.round(gradA.b * (1 - gradT) + gradB.b * gradT);
    if (colorMixA > 0.001) {
      const k = clamp(colorMixA * (0.8 + split.radial * 0.35), 0, 1);
      r = Math.round(r * (1 - k) + rg * k);
      g = Math.round(g * (1 - k) + gg * k);
      b = Math.round(b * (1 - k) + bg * k);
    }

    const alpha = clamp((0.45 + life * 0.55 + audioDrive * 0.2) * 255, 0, 255);
    const radius = Math.max(1, Math.round(sizePx * (0.6 + persp * 0.95)));
    const drawPxColor = (px, py, rr, gg, bb, blend = 1) => {
      if (px < 0 || py < 0 || px >= w || py >= h) return;
      const pi = (py * w + px) * 4;
      const k = clamp((alpha / 255) * blend, 0.08, 1);
      od[pi] = clamp(od[pi] * (1 - k) + rr * k, 0, 255);
      od[pi + 1] = clamp(od[pi + 1] * (1 - k) + gg * k, 0, 255);
      od[pi + 2] = clamp(od[pi + 2] * (1 - k) + bb * k, 0, 255);
      od[pi + 3] = 255;
    };
    const drawPx = (px, py, blend = 1) => drawPxColor(px, py, r, g, b, blend);
    drawPx(sx, sy, 1);
    if (radius > 1) {
      drawPx(sx - 1, sy, 0.46);
      drawPx(sx + 1, sy, 0.46);
      drawPx(sx, sy - 1, 0.46);
      drawPx(sx, sy + 1, 0.46);
    }
    if (radius > 2) {
      drawPx(sx - 2, sy, 0.26);
      drawPx(sx + 2, sy, 0.26);
      drawPx(sx, sy - 2, 0.26);
      drawPx(sx, sy + 2, 0.26);
    }
    if (trailLen > 0) {
      const pxStep = vx * worldScale * 0.28;
      const pyStep = vy * worldScale * 0.28;
      for (let ti = 1; ti <= trailLen; ti++) {
        const f = 1 - ti / (trailLen + 1);
        const tx = Math.round(sx - pxStep * ti);
        const ty = Math.round(sy - pyStep * ti);
        drawPx(tx, ty, (0.18 + f * 0.3) * trailA);
      }
    }
    if (neonGlow > 0.001) {
      drawPx(sx - 2, sy, 0.34 * neonGlow);
      drawPx(sx + 2, sy, 0.34 * neonGlow);
      drawPx(sx, sy - 2, 0.34 * neonGlow);
      drawPx(sx, sy + 2, 0.34 * neonGlow);
      drawPx(sx - 3, sy - 1, 0.2 * neonGlow);
      drawPx(sx + 3, sy + 1, 0.2 * neonGlow);
      drawPx(sx + 3, sy - 1, 0.2 * neonGlow);
      drawPx(sx - 3, sy + 1, 0.2 * neonGlow);
    }
    if (datamoshLen > 0 && (i % datamoshSkip === 0)) {
      const pxStep = vx * worldScale * 0.34;
      const pyStep = vy * worldScale * 0.34;
      for (let ti = 1; ti <= datamoshLen; ti++) {
        const f = 1 - ti / (datamoshLen + 1);
        const q = 2 + ((ti + (i & 1)) % 3);
        const tx0 = sx - pxStep * ti;
        const ty0 = sy - pyStep * ti;
        const tx = Math.round(tx0 / q) * q + ((ti & 1) ? 1 : 0);
        const ty = Math.round(ty0 / q) * q;
        const chan = (ti % 3) - 1;
        const dk = (0.14 + f * 0.36) * fxAmount;
        drawPxColor(tx + chan, ty, clamp(r + 42, 0, 255), g, b, dk * 0.9);
        drawPxColor(tx - chan, ty, r, clamp(g + 34, 0, 255), b, dk * 0.72);
        drawPxColor(tx, ty + chan, r, g, clamp(b + 46, 0, 255), dk * 0.64);
      }
    }
  }
  ctx.putImageData(out, 0, 0);
}

function renderParticlesMode(baseImageData, tSec, settings) {
  const ps = getParticlesSettings();
  const forceCpuStructured = ps.structure && ps.structure !== "cloud";
  const forceCpuSplit = ps.audioSplit === "zones";
  const forceCpuTrail = (ps.trail || 0) > 0;
  const forceCpuFx = (ps.fxStyle || "none") === "datamosh";
  const forceCpuFaceTrace = Boolean(ps.faceTrack && webcamActive);
  const forceCpuWarmup = performance.now() < particlesWarmupUntil;
  const shouldForceCpu = forceCpuStructured || forceCpuSplit || forceCpuTrail || forceCpuFx || forceCpuFaceTrace || forceCpuWarmup;
  if (!shouldForceCpu && !particlesGpuForcedOff && renderParticlesModeGpu(baseImageData, tSec, settings)) return;
  renderParticlesModeCpu(baseImageData, tSec, settings);
}

function finalizeFrameStats() {
  updateLiveAudioPlayPausePulse();
  drawLiveAudioWaveform();
  postFxFrameCounter = (postFxFrameCounter + 1) % 1000000;
  fpsFrames += 1;
  const now = performance.now();
  if (now - lastFpsTs > 600) {
    fps = (fpsFrames * 1000) / (now - lastFpsTs);
    fpsFrames = 0;
    lastFpsTs = now;
    updatePerfScale();
    updateAdaptivePostFxScale();
    updatePerformanceUI();
  }
}

function renderFrame() {
  applyParticlesRandomTween();
  applyParticlesCameraTween();
  applyDepthMorphTween();
  applyFractalMorphTween();
  applyFractalCameraTween();
  applyKaleidoMorphTween();
  const keyPanMoved = applyCameraKeyPanning();
  const smoothCameraMoved = applySmoothCameraTargets();
  const sourceImage = getSourceImageData();
  if (!sourceImage) return;
  updateVisualAnalysis(sourceImage);
  const tSec = performance.now() / 1000;
  const s = getSettings();
  if (shouldRunTracking(s)) updateTrackingFromFrame();
  if (
    audioInputSource &&
    audioInputSource.value === "file" &&
    audioFilePlayer &&
    audioFilePlayer.src &&
    !audioFilePlayer.paused &&
    !hasAudioReactiveInput()
  ) {
    activateAudioFileSource();
  }

  // "No Input" should keep a consistent base animation (green mesh),
  // independent of the currently selected visual module.
  if (noInputModeActive && !webcamActive && !loadedImage) {
    updateAudioAnalysis();
    ctx.putImageData(sourceImage, 0, 0);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    if (
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween)
    )
      scheduleRender();
    return;
  }

  if (mode === "none") {
    updateAudioAnalysis();
    ctx.putImageData(sourceImage, 0, 0);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    if (
      webcamActive ||
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween)
    )
      scheduleRender();
    return;
  }

  updateAudioLevel(s);
  applyModulation(s, tSec);
  const base = copyImageData(sourceImage);
  const fractalFromGlitch = fractalSource && fractalSource.value === "glitch";

  if (mode === "glitch") {
    const gScale = getGlitchProcessScale(s);
    if (gScale < 0.985 && glitchWorkCtx) {
      const gw = Math.max(2, Math.round(base.width * gScale));
      const gh = Math.max(2, Math.round(base.height * gScale));
      if (glitchWorkCanvas.width !== gw || glitchWorkCanvas.height !== gh) {
        glitchWorkCanvas.width = gw;
        glitchWorkCanvas.height = gh;
      }
      if (fxCanvas.width !== base.width || fxCanvas.height !== base.height) {
        fxCanvas.width = base.width;
        fxCanvas.height = base.height;
      }
      fxCtx.putImageData(base, 0, 0);
      glitchWorkCtx.save();
      glitchWorkCtx.imageSmoothingEnabled = true;
      glitchWorkCtx.imageSmoothingQuality = "low";
      glitchWorkCtx.clearRect(0, 0, gw, gh);
      glitchWorkCtx.drawImage(fxCanvas, 0, 0, gw, gh);
      glitchWorkCtx.restore();
      let work = glitchWorkCtx.getImageData(0, 0, gw, gh);
      applyGlitchPipeline(work, s, randomSeed, tSec);
      glitchWorkCtx.putImageData(work, 0, 0);
      ctx.clearRect(0, 0, base.width, base.height);
      ctx.save();
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(glitchWorkCanvas, 0, 0, gw, gh, 0, 0, base.width, base.height);
      ctx.restore();
    } else {
      applyGlitchPipeline(base, s, randomSeed, tSec);
      ctx.putImageData(base, 0, 0);
    }
    drawTrackingOverlay(s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    if (
      webcamActive ||
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      recordingActive ||
      s.animDistort > 0 ||
      s.motionTrail > 0 ||
      s.vhsDrift > 0 ||
      s.tapeNoise > 0 ||
      s.headSwitch > 0 ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween)
    )
      scheduleRender();
    return;
  }

  if (mode === "particles") {
    // Matte black background for particles to avoid projection-like backplates.
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, base.width, base.height);
    renderParticlesMode(base, tSec, s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    if (webcamActive || hasAudioReactiveInput() || isAudioPlaybackActive() || recordingActive || isDomeAutoRotateActive() || mode === "particles" || isMasterFxAnimated() || Boolean(kaleidoMorphTween)) scheduleRender();
    return;
  }

  if (mode === "lines") {
    renderLinesMode(base, tSec, s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    const linesAlwaysOn =
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      recordingActive ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween) ||
      Number(liveLinesSpeed ? liveLinesSpeed.value : 0) > 0 ||
      Number(liveLinesCamDrift ? liveLinesCamDrift.value : 0) > 0 ||
      Number(liveLinesStringVibe ? liveLinesStringVibe.value : 0) > 0;
    if (linesAlwaysOn) scheduleRender();
    return;
  }

  if (mode === "atlas") {
    try {
      renderAtlasMode(base, tSec, s);
    } catch (_err) {
      // Safety fallback: avoid black frame if Morpho render path throws.
      const w = base.width;
      const h = base.height;
      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, w, h);
      const cx = w * 0.5;
      const cy = h * 0.5;
      const rings = 24;
      for (let i = 0; i < rings; i++) {
        const k = i / Math.max(1, rings - 1);
        const r = (0.08 + k * 0.84) * Math.min(w, h) * 0.42;
        const a = 0.12 + (1 - k) * 0.44;
        ctx.strokeStyle = `rgba(106, 220, 255, ${a})`;
        ctx.lineWidth = 0.8 + (1 - k) * 1.8;
        ctx.beginPath();
        ctx.ellipse(cx, cy, r, r * (0.7 + Math.sin(tSec * 0.7 + k * 5) * 0.08), tSec * 0.08 + k * 0.7, 0, Math.PI * 2);
        ctx.stroke();
      }
    }
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    const atlasAlwaysOn =
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      webcamActive ||
      recordingActive ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween) ||
      Boolean(atlasMorphTween) ||
      Number(liveAtlasMotion ? liveAtlasMotion.value : 0) > 0;
    if (atlasAlwaysOn) scheduleRender();
    return;
  }

  if (mode === "materia") {
    renderMateriaMode(base, tSec, s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    const materiaAlwaysOn =
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      webcamActive ||
      recordingActive ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween) ||
      Boolean(materiaMorphTween) ||
      Number(liveMateriaDrift ? liveMateriaDrift.value : 0) > 0;
    if (materiaAlwaysOn) scheduleRender();
    return;
  }

  if (mode === "code") {
    renderCodeRainMode(base, tSec, s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    const codeAlwaysOn =
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      webcamActive ||
      recordingActive ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween) ||
      Number(liveCodeSpeed ? liveCodeSpeed.value : 0) > 0;
    if (codeAlwaysOn) scheduleRender();
    return;
  }

  if (mode === "tunnel") {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, base.width, base.height);
    renderInfiniteTunnelMode(base, tSec, s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    const tunnelAlwaysOn =
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      webcamActive ||
      recordingActive ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween) ||
      Boolean(tunnelMorphTween) ||
      Number(liveTunnelSpeed ? liveTunnelSpeed.value : 0) > 0;
    if (tunnelAlwaysOn) scheduleRender();
    return;
  }

  if (mode === "interior") {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, base.width, base.height);
    renderInteriorBlackMode(base, tSec, s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    const interiorAlwaysOn =
      hasAudioReactiveInput() ||
      isAudioPlaybackActive() ||
      webcamActive ||
      recordingActive ||
      isDomeAutoRotateActive() ||
      isMasterFxAnimated() ||
      Boolean(kaleidoMorphTween) ||
      Boolean(interiorMorphTween) ||
      Number(liveInteriorSpeed ? liveInteriorSpeed.value : 0) > 0;
    if (interiorAlwaysOn) scheduleRender();
    return;
  }

  if (mode === "synth") {
    renderTemporalSynthMode(base, tSec, s);
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    scheduleRender();
    return;
  }

  if (mode === "fractal") {
    let rendered = false;
    try {
      rendered = renderFractalLive(tSec, sourceImage);
    } catch {
      rendered = false;
    }
    if (!rendered) {
      // Recover from stale/lost WebGL fractal context by forcing one re-init.
      fractalGl = null;
      try {
        rendered = renderFractalLive(tSec, sourceImage);
      } catch {
        rendered = false;
      }
    }
    if (!rendered) {
      const fractalBase = copyImageData(sourceImage);
      if (fractalFromGlitch) applyGlitchPipeline(fractalBase, s, randomSeed, tSec);
      const fallbackFractalSettings = {
        ...s,
        kaleidoSegments: Math.max(6, Math.round(Number(s.kaleidoSegments || 8))),
        kaleidoLayers: Math.max(2, Math.round(Number(s.kaleidoLayers || 2))),
        layerEcho: Math.max(16, Number(s.layerEcho || 22)),
        fractalZoom: clamp(Number(s.fractalZoom || 96), 72, 148),
        fractalPulse: Math.max(12, Number(s.fractalPulse || 18)),
      };
      const result = applyKaleidoFractal(fractalBase, fallbackFractalSettings, randomSeed);
      if (result && result.data && result.width > 0 && result.height > 0) {
        ctx.putImageData(result, 0, 0);
      } else {
        ctx.putImageData(sourceImage, 0, 0);
      }
    }
    applyMasterFxGlobal(tSec);
    applyKaleidoFxGlobal(tSec);
    applyOutputViewWarp();
    syncCleanOutput();
    finalizeFrameStats();
    scheduleRender();
    return;
  }

  if (mode === "depth") {
    renderDepthMode(base, s, randomSeed, tSec);
  }

  if (mode === "mix") {
    applyGlitchPipeline(base, s, randomSeed, tSec);
    const fractalInput = fractalFromGlitch ? base : copyImageData(sourceImage);
    const fractal = applyKaleidoFractal(fractalInput, s, randomSeed);
    renderDepthMode(fractal, s, randomSeed, tSec);
    drawTrackingOverlay(s);
  }

  applyMasterFxGlobal(tSec);
  applyKaleidoFxGlobal(tSec);
  applyOutputViewWarp();

  if (shouldKeepAnimating(s, keyPanMoved, smoothCameraMoved)) {
    scheduleRender();
  }

  finalizeFrameStats();

  syncCleanOutput();
}

function modeRelevantIds(targetMode) {
  if (targetMode === "glitch") return glitchIds;
  if (targetMode === "fractal") return fractalIds;
  if (targetMode === "depth") return depthIds;
  if (targetMode === "mix") return [...glitchIds, ...fractalIds, ...depthIds];
  return [];
}

function updatePresetOptions() {
  presetSelect.innerHTML = "";
  const empty = document.createElement("option");
  empty.value = "";
  empty.textContent = t("no_preset");
  presetSelect.appendChild(empty);
  const list = presets[mode] || presets.none;
  list.forEach((preset, idx) => {
    const opt = document.createElement("option");
    opt.value = String(idx);
    opt.textContent = preset.label;
    presetSelect.appendChild(opt);
  });
  presetSelect.value = "";
}

function applyPreset() {
  if (!presetSelect.value) return;
  const list = presets[mode] || presets.none;
  const idx = Number(presetSelect.value) || 0;
  const preset = list[idx];
  if (!preset) return;
  setValues({ ...defaults, ...preset.values });
  if (fractalPattern && preset.pattern) fractalPattern.value = preset.pattern;
  if (fractalSource && preset.source) fractalSource.value = preset.source;
}

function apply3DStarter() {
  const depthRadio = modeInputs.find((m) => m.value === "depth");
  if (depthRadio) depthRadio.checked = true;
  setMode("depth");
  setValues({ ...defaults, ...presets.depth[0].values });
  setCameraMode("helix");
  cleanFront3dActive = false;
  cleanFront3dSnapshot = null;
  scheduleRender();
}

function toggle3DCleanFrontMode() {
  if (mode !== "depth" && mode !== "mix") return;
  const keys = [
    "pointMap",
    "meshMap",
    "pointDensity",
    "meshDensity",
    "pointSize",
    "pointLift",
    "meshLift",
    "depthStrength",
    "depthExaggeration",
    "pointSpread",
    "pointRotateX",
    "pointRotateY",
    "pointRotateZ",
    "cameraZoom",
    "cameraFollow",
    "autoRotate",
    "lightEnabled",
    "flatIllustrated",
    "sceneExposure",
    "ambientLight",
    "lightIntensity",
    "pointColorPulse",
    "depthColorWave",
    "glitch3d",
    "bgMotion",
  ];

  if (!cleanFront3dActive) {
    cleanFront3dSnapshot = {
      mode,
      cameraMode,
      bgMode: bgMode ? bgMode.value : "solid",
      bgPalette: bgPalette ? bgPalette.value : "custom",
      bgColorA: bgColorA ? bgColorA.value : "#000000",
      bgColorB: bgColorB ? bgColorB.value : "#000000",
      fxMode: live3dFxMode ? live3dFxMode.value : "none",
      fxAmount: live3dFxAmount ? Number(live3dFxAmount.value) : 35,
      values: Object.fromEntries(keys.map((k) => [k, Number(controls[k].value)])),
    };

    if (mode !== "depth") {
      const depthRadio = modeInputs.find((m) => m.value === "depth");
      if (depthRadio) depthRadio.checked = true;
      setMode("depth");
    }
    setCameraMode("static");
    dragRotateX = 0;
    dragRotateY = 0;
    cameraPanX = 0;
    cameraPanY = 0;
    setValues({
      pointMap: 92,
      meshMap: 72,
      pointDensity: 39,
      meshDensity: 18,
      pointSize: 3,
      pointLift: 46,
      meshLift: 40,
      depthStrength: 76,
      depthExaggeration: 102,
      pointSpread: 8,
      pointRotateX: 0,
      pointRotateY: 0,
      pointRotateZ: 0,
      cameraZoom: 98,
      cameraFollow: 0,
      autoRotate: 0,
      lightEnabled: 88,
      flatIllustrated: 0,
      sceneExposure: 118,
      ambientLight: 42,
      lightIntensity: 96,
      pointColorPulse: 0,
      depthColorWave: 0,
      glitch3d: 0,
      bgMotion: 6,
    });
    if (bgMode) bgMode.value = "solid";
    if (bgPalette) bgPalette.value = "custom";
    if (bgColorA) bgColorA.value = "#000000";
    if (bgColorB) bgColorB.value = "#000000";
    if (live3dFxMode) live3dFxMode.value = "none";
    if (live3dFxAmount) live3dFxAmount.value = "35";
    cleanFront3dActive = true;
  } else if (cleanFront3dSnapshot) {
    if (cleanFront3dSnapshot.mode && mode !== cleanFront3dSnapshot.mode) {
      const modeRadio = modeInputs.find((m) => m.value === cleanFront3dSnapshot.mode);
      if (modeRadio) modeRadio.checked = true;
      setMode(cleanFront3dSnapshot.mode);
    }
    setValues(cleanFront3dSnapshot.values || {});
    setCameraMode(cleanFront3dSnapshot.cameraMode || "cursor");
    if (bgMode) bgMode.value = cleanFront3dSnapshot.bgMode || "solid";
    if (bgPalette) bgPalette.value = cleanFront3dSnapshot.bgPalette || "custom";
    if (bgColorA) bgColorA.value = cleanFront3dSnapshot.bgColorA || "#000000";
    if (bgColorB) bgColorB.value = cleanFront3dSnapshot.bgColorB || "#000000";
    if (live3dFxMode) live3dFxMode.value = cleanFront3dSnapshot.fxMode || "none";
    if (live3dFxAmount) live3dFxAmount.value = String(Math.round(cleanFront3dSnapshot.fxAmount ?? 35));
    cleanFront3dActive = false;
    cleanFront3dSnapshot = null;
  }
  updateOutputs();
  scheduleRender();
}

function randomizeActiveMode() {
  const prevDepthExposure = Number(controls.sceneExposure ? controls.sceneExposure.value : 110);
  const prevDepthLight = Number(controls.lightIntensity ? controls.lightIntensity.value : 80);
  const prevDepthAmbient = Number(controls.ambientLight ? controls.ambientLight.value : 35);
  if (mode === "fractal") {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const perf = estimateActiveModuleLoad();
    const stress = clamp(perf.score * 0.68 + (fps < 28 ? (28 - fps) / 24 : 0), 0, 1);
    const safe = 1 - stress;
    const lockOverlay = liveFractalOverlayLock ? liveFractalOverlayLock.checked : true;
    const randRange = (min, max, heavy = 1) => {
      const span = max - min;
      const softMax = min + span * clamp(1 - stress * heavy, 0.28, 1);
      return Math.round(min + Math.random() * Math.max(0, softMax - min));
    };

    if (liveFractalPreset) liveFractalPreset.value = pick(["sacred", "ether", "inside", "flat"]);
    if (liveFractalQuality) liveFractalQuality.value = stress > 0.72 ? pick(["low", "med"]) : pick(["med", "high", "med"]);
    if (liveFractalBehavior) liveFractalBehavior.value = stress > 0.72 ? pick(["performance", "stable"]) : pick(["stable", "stable", "aggressive"]);
    if (liveFractalAudioMode) liveFractalAudioMode.value = pick(["balanced", "bass", "spectral", "rhythmic"]);
    if (liveFractalCameraMode) liveFractalCameraMode.value = pick(["orbit", "inside", "orbit"]);
    if (liveFractalCamSpeed) liveFractalCamSpeed.value = String(randRange(8, 78, 0.8));
    if (liveFractalDistance) liveFractalDistance.value = String(randRange(30, 145, 0.6));
    if (liveFractalVariant) liveFractalVariant.value = stress > 0.7 ? pick(["a", "a", "b"]) : pick(["a", "b", "a", "b"]);
    if (liveFractalShape) liveFractalShape.value = "mandel";
    if (liveFractalShapeB) liveFractalShapeB.value = "mandel";
    if (liveFractalShapeMorph) liveFractalShapeMorph.value = "0";
    if (liveFractalSymmetry) liveFractalSymmetry.value = String(randRange(8, 20, 0.55));
    if (liveFractalPower) liveFractalPower.value = String(randRange(68, 108, 0.6));
    if (liveFractalFog) liveFractalFog.value = String(randRange(6, 54, 0.65));
    if (liveFractalGlow) liveFractalGlow.value = String(randRange(22, 88, 0.75));
    if (liveFractalLight) liveFractalLight.value = String(randRange(72, 210, 0.7));
    if (liveFractalSpin) liveFractalSpin.value = String(randRange(6, 72, 0.6));
    if (liveFractalBreath) liveFractalBreath.value = String(randRange(14, 84, 0.45));
    if (liveFractalFlow) liveFractalFlow.value = String(randRange(48, 88, 0.35));
    if (liveFractalWarmth) liveFractalWarmth.value = String(randRange(18, 92, 0.45));
    if (liveFractalTexture) liveFractalTexture.value = pick(["smooth", "crystal", "ink", "contour"]);
    if (liveFractalPalette) liveFractalPalette.value = pick(["warm", "cosmic", "neon", "warm", "input"]);
    if (liveFractalRenderMode) {
      liveFractalRenderMode.value = stress > 0.66 ? pick(["shaded", "wire", "hybrid"]) : pick(["shaded", "hybrid", "points", "wire"]);
    }
    if (!lockOverlay) {
      if (liveFractalTexture2) liveFractalTexture2.value = pick(["none", "noise", "ripples", "cells"]);
      if (liveFractalTextureBlend) liveFractalTextureBlend.value = pick(["screen", "add", "multiply", "difference"]);
      if (liveFractalTextureMix) liveFractalTextureMix.value = String(randRange(6, 82, 0.9));
      if (liveFractalOptical) liveFractalOptical.value = pick(["off", "moire", "tunnel", "sacred", "opart"]);
      if (liveFractalOpticalAmount) {
        const modeVal = liveFractalOptical ? liveFractalOptical.value : "off";
        liveFractalOpticalAmount.value = modeVal === "off" ? "0" : String(randRange(10, 58, 0.95));
      }
    } else {
      if (liveFractalTexture2 && !liveFractalTexture2.value) liveFractalTexture2.value = "none";
      if (liveFractalTextureBlend && !liveFractalTextureBlend.value) liveFractalTextureBlend.value = "screen";
    }
    if (liveFractalPolygonize) liveFractalPolygonize.value = String(randRange(0, 70, 0.8));
    if (liveFractalWireStrength) liveFractalWireStrength.value = String(randRange(36, 90, 0.5));
    if (liveFractalPointOverlay) liveFractalPointOverlay.value = String(randRange(16, 78, 0.55));
    if (liveFractalStyle) liveFractalStyle.value = Math.random() > 0.78 ? "flat" : "lit";
    if (liveFractalBackground) liveFractalBackground.value = pick(["ethereal", "sunset", "cosmic", "solid"]);
    if (liveFractalFlatColor && liveFractalStyle && liveFractalStyle.value === "flat") {
      liveFractalFlatColor.value = pick(["#000000", "#05040f", "#10091e", "#120612"]);
    }
    if (liveFractalAudio) liveFractalAudio.checked = Math.random() > 0.08;
    if (liveFractalAudioGain) liveFractalAudioGain.value = String(randRange(44, 160, 0.45));
    if (!liveFractalAudio || !liveFractalAudio.checked || safe < 0.22) {
      fractalAudioBassSmooth = 0;
      fractalAudioMidSmooth = 0;
      fractalAudioHighSmooth = 0;
      fractalAudioEnergySmooth = 0;
    }
    updateOutputs();
    scheduleRender();
    return;
  }
  if (mode === "synth") {
    const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
    const range = (min, max) => Math.round(min + Math.random() * (max - min));
    if (liveSynthPreset) liveSynthPreset.value = pick(["drift", "strobe", "slitscan", "ghost"]);
    if (liveSynthBlend) liveSynthBlend.value = String(range(42, 82));
    if (liveSynthEcho) liveSynthEcho.value = String(range(26, 92));
    if (liveSynthSlit) liveSynthSlit.value = String(range(8, 86));
    if (liveSynthAxis) liveSynthAxis.value = Math.random() > 0.5 ? "x" : "y";
    if (liveSynthDrift) liveSynthDrift.value = String(range(10, 86));
    if (liveSynthColor) liveSynthColor.value = String(range(6, 78));
    if (liveSynthAudio) liveSynthAudio.checked = Math.random() > 0.12;
    if (liveSynthAudioAmount) liveSynthAudioAmount.value = String(range(28, 94));
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "code") {
    const pick = (min, max) => Math.round(min + Math.random() * (max - min));
    const presets = ["matrix", "glyph", "oracle"];
    const cams = ["wide", "chase", "macro"];
    const p = presets[Math.floor(Math.random() * presets.length)];
    if (liveCodePreset) liveCodePreset.value = p;
    applyCodePreset(p, false);
    if (liveCodeCameraMode) liveCodeCameraMode.value = cams[Math.floor(Math.random() * cams.length)];
    if (liveCodeDensity) liveCodeDensity.value = String(clamp(Number(liveCodeDensity.value) + pick(-20, 20), 0, 100));
    if (liveCodeSpeed) liveCodeSpeed.value = String(clamp(Number(liveCodeSpeed.value) + pick(-22, 24), 0, 100));
    if (liveCodeZoom) liveCodeZoom.value = String(clamp(Number(liveCodeZoom.value) + pick(-24, 24), 0, 100));
    if (liveCodeLetters) liveCodeLetters.value = String(clamp(Number(liveCodeLetters.value) + pick(-24, 24), 0, 100));
    if (liveCodeFigure) liveCodeFigure.value = String(clamp(Number(liveCodeFigure.value) + pick(-26, 26), 0, 100));
    if (liveCodeLanguage) liveCodeLanguage.value = String(clamp(Number(liveCodeLanguage.value) + pick(-12, 12), 0, 65));
    if (liveCodeGlow) liveCodeGlow.value = String(clamp(Number(liveCodeGlow.value) + pick(-20, 20), 0, 100));
    if (liveCodeBrightness) liveCodeBrightness.value = String(clamp(Number(liveCodeBrightness.value) + pick(-16, 18), 0, 100));
    if (liveCodeAudio) liveCodeAudio.checked = Math.random() > 0.08;
    if (liveCodeAudioAmount) liveCodeAudioAmount.value = String(clamp(Number(liveCodeAudioAmount.value) + pick(-24, 24), 0, 100));
    codeRainFigurePhase = fract01(codeRainFigurePhase + Math.random() * 0.8);
    codeRainCamXTarget = clamp((Math.random() * 2 - 1) * 0.8, -1, 1);
    codeRainCamYTarget = clamp((Math.random() * 2 - 1) * 0.8, -1, 1);
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "lines") {
    const pick = (min, max) => Math.round(min + Math.random() * (max - min));
    const isMinimal = true;
    const p = ["ambient", "techno", "vocal"][Math.floor(Math.random() * 3)];
    if (liveLinesPreset) liveLinesPreset.value = p;
    applyLinesPreset(p, false);
    if (liveLinesGeometry) {
      const opts = ["ribbon", "grid", "constellation"];
      liveLinesGeometry.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveLinesPattern) {
      const opts = ["flow"];
      liveLinesPattern.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveLinesCameraMode) {
      const opts = ["orbit", "inside", "static"];
      liveLinesCameraMode.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveLinesBeatFlip) liveLinesBeatFlip.checked = isMinimal ? Math.random() > 0.58 : Math.random() > 0.2;
    if (liveLinesDensity) liveLinesDensity.value = String(clamp(Number(liveLinesDensity.value) + pick(isMinimal ? -2 : -3, isMinimal ? 2 : 4), 6, 30));
    if (liveLinesThickness) liveLinesThickness.value = String(clamp(Number(liveLinesThickness.value) + pick(isMinimal ? -1 : -2, isMinimal ? 2 : 4), 1, 24));
    if (liveLinesCurvature) liveLinesCurvature.value = String(clamp(Number(liveLinesCurvature.value) + pick(isMinimal ? -8 : -16, isMinimal ? 8 : 16), 0, 100));
    if (liveLinesDepth) liveLinesDepth.value = String(clamp(Number(liveLinesDepth.value) + pick(isMinimal ? -8 : -14, isMinimal ? 9 : 16), 0, 100));
    if (liveLinesLayerOffset) liveLinesLayerOffset.value = String(clamp(Number(liveLinesLayerOffset.value) + pick(isMinimal ? -8 : -16, isMinimal ? 10 : 18), 0, 100));
    if (liveLinesColorShift) liveLinesColorShift.value = String(clamp(Number(liveLinesColorShift.value) + pick(isMinimal ? -22 : -60, isMinimal ? 22 : 60), 0, 360));
    if (liveLinesSpeed) liveLinesSpeed.value = String(clamp(Number(liveLinesSpeed.value) + pick(isMinimal ? -7 : -14, isMinimal ? 8 : 16), 0, 100));
    if (liveLinesCamDrift) liveLinesCamDrift.value = String(clamp(Number(liveLinesCamDrift.value) + pick(isMinimal ? -6 : -12, isMinimal ? 7 : 12), 0, 100));
    if (liveLinesInsideDepth) liveLinesInsideDepth.value = String(clamp(Number(liveLinesInsideDepth.value) + pick(isMinimal ? -12 : -20, isMinimal ? 12 : 20), 0, 100));
    if (liveLinesStringVibe) liveLinesStringVibe.value = String(clamp(Number(liveLinesStringVibe.value) + pick(isMinimal ? -14 : -24, isMinimal ? 18 : 32), 0, 200));
    if (liveLinesConstellation) liveLinesConstellation.value = String(clamp(Number(liveLinesConstellation.value) + pick(isMinimal ? -6 : -12, isMinimal ? 24 : 34), 0, 100));
    randomizeLinesCameraViewSmooth();
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "tunnel") {
    const pick = (min, max) => Math.round(min + Math.random() * (max - min));
    const presets = ["deep", "pulse", "vortex"];
    const p = presets[Math.floor(Math.random() * presets.length)];
    if (liveTunnelPreset) liveTunnelPreset.value = p;
    applyTunnelPreset(p, false);
    if (liveTunnelCameraMode) {
      const opts = ["orbit", "inside", "sweep", "static"];
      liveTunnelCameraMode.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveTunnelDensity) liveTunnelDensity.value = String(clamp(Number(liveTunnelDensity.value) + pick(-5, 6), 8, 44));
    if (liveTunnelDepth) liveTunnelDepth.value = String(clamp(Number(liveTunnelDepth.value) + pick(-18, 18), 20, 100));
    if (liveTunnelSpeed) liveTunnelSpeed.value = String(clamp(Number(liveTunnelSpeed.value) + pick(-18, 22), 0, 100));
    if (liveTunnelTwist) liveTunnelTwist.value = String(clamp(Number(liveTunnelTwist.value) + pick(-24, 24), 0, 100));
    if (liveTunnelMesh) liveTunnelMesh.value = String(clamp(Number(liveTunnelMesh.value) + pick(-30, 24), 0, 100));
    if (liveTunnelPoints) liveTunnelPoints.value = String(clamp(Number(liveTunnelPoints.value) + pick(-24, 30), 0, 100));
    if (liveTunnelGlow) liveTunnelGlow.value = String(clamp(Number(liveTunnelGlow.value) + pick(-20, 24), 0, 100));
    if (liveTunnelAudio) liveTunnelAudio.checked = Math.random() > 0.12;
    if (liveTunnelAudioAmount) liveTunnelAudioAmount.value = String(clamp(Number(liveTunnelAudioAmount.value) + pick(-22, 24), 0, 100));
    randomizeTunnelCameraViewSmooth();
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "interior") {
    const pick = (min, max) => Math.round(min + Math.random() * (max - min));
    const presets = ["abyss", "pulse", "ruin"];
    const p = presets[Math.floor(Math.random() * presets.length)];
    if (liveInteriorPreset) liveInteriorPreset.value = p;
    applyInteriorPreset(p, false);
    if (liveInteriorCameraMode) {
      const opts = ["orbit", "dive", "static"];
      liveInteriorCameraMode.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveInteriorDensity) liveInteriorDensity.value = String(clamp(Number(liveInteriorDensity.value) + pick(-6, 6), 8, 48));
    if (liveInteriorDepth) liveInteriorDepth.value = String(clamp(Number(liveInteriorDepth.value) + pick(-20, 18), 20, 100));
    if (liveInteriorSpeed) liveInteriorSpeed.value = String(clamp(Number(liveInteriorSpeed.value) + pick(-18, 24), 0, 100));
    if (liveInteriorWave) liveInteriorWave.value = String(clamp(Number(liveInteriorWave.value) + pick(-20, 22), 0, 100));
    if (liveInteriorGlitch) liveInteriorGlitch.value = String(clamp(Number(liveInteriorGlitch.value) + pick(-24, 26), 0, 100));
    if (liveInteriorGlow) liveInteriorGlow.value = String(clamp(Number(liveInteriorGlow.value) + pick(-22, 24), 0, 100));
    if (liveInteriorAudio) liveInteriorAudio.checked = Math.random() > 0.1;
    if (liveInteriorAudioAmount) liveInteriorAudioAmount.value = String(clamp(Number(liveInteriorAudioAmount.value) + pick(-22, 24), 0, 100));
    randomizeInteriorCameraViewSmooth();
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "atlas") {
    const pick = (min, max) => Math.round(min + Math.random() * (max - min));
    const presets = ["ribbon", "orbital", "shard"];
    const p = presets[Math.floor(Math.random() * presets.length)];
    if (liveAtlasPreset) liveAtlasPreset.value = p;
    applyAtlasPreset(p, false);
    if (liveAtlasSeed) liveAtlasSeed.value = String(clamp(Number(liveAtlasSeed.value) + pick(-22, 22), 0, 100));
    if (liveAtlasVariation) liveAtlasVariation.value = String(clamp(Number(liveAtlasVariation.value) + pick(-18, 24), 0, 100));
    if (liveAtlasComposition) liveAtlasComposition.value = String(clamp(Number(liveAtlasComposition.value) + pick(-22, 20), 0, 100));
    if (liveAtlasComplexity) liveAtlasComplexity.value = String(clamp(Number(liveAtlasComplexity.value) + pick(-8, 10), 0, 30));
    if (liveAtlasMotion) liveAtlasMotion.value = String(clamp(Number(liveAtlasMotion.value) + pick(-20, 24), 0, 100));
    if (liveAtlasContrast) liveAtlasContrast.value = String(clamp(Number(liveAtlasContrast.value) + pick(-16, 18), 0, 100));
    if (liveAtlasColorMod) liveAtlasColorMod.value = String(clamp(Number(liveAtlasColorMod.value) + pick(-18, 20), 0, 100));
    if (liveAtlasMesh) liveAtlasMesh.value = String(clamp(Number(liveAtlasMesh.value) + pick(-18, 20), 0, 100));
    if (liveAtlasSpheres) liveAtlasSpheres.value = String(clamp(Number(liveAtlasSpheres.value) + pick(-20, 20), 0, 100));
    if (liveAtlasAudio) liveAtlasAudio.checked = Math.random() > 0.08;
    if (liveAtlasAudioAmount) liveAtlasAudioAmount.value = String(clamp(Number(liveAtlasAudioAmount.value) + pick(-24, 20), 0, 100));
    randomizeAtlasCameraViewSmooth();
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "materia") {
    const pick = (min, max) => Math.round(min + Math.random() * (max - min));
    const presets = ["mineral", "ink", "ash"];
    const p = presets[Math.floor(Math.random() * presets.length)];
    if (liveMateriaPreset) liveMateriaPreset.value = p;
    applyMateriaPreset(p, false);
    if (liveMateriaSeed) liveMateriaSeed.value = String(Math.round(1 + Math.random() * 9998));
    if (liveMateriaFlow) liveMateriaFlow.value = String(clamp(Number(liveMateriaFlow.value) + pick(-24, 24), 0, 100));
    if (liveMateriaPorosity) liveMateriaPorosity.value = String(clamp(Number(liveMateriaPorosity.value) + pick(-22, 22), 0, 100));
    if (liveMateriaLayers) liveMateriaLayers.value = String(clamp(Number(liveMateriaLayers.value) + pick(-24, 22), 0, 100));
    if (liveMateriaDrift) liveMateriaDrift.value = String(clamp(Number(liveMateriaDrift.value) + pick(-22, 26), 0, 100));
    if (liveMateriaContrast) liveMateriaContrast.value = String(clamp(Number(liveMateriaContrast.value) + pick(-20, 20), 0, 100));
    if (liveMateriaAudio) liveMateriaAudio.checked = Math.random() > 0.08;
    if (liveMateriaAudioAmount) liveMateriaAudioAmount.value = String(clamp(Number(liveMateriaAudioAmount.value) + pick(-24, 22), 0, 100));
    randomizeMateriaCameraViewSmooth();
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "particles") {
    // Keep particle count stable on random to avoid performance spikes.
    const keepParticlesCount = liveParticlesCount ? liveParticlesCount.value : null;
    if (liveParticlesEmitter) {
      const opts = ["grid", "volume", "motion"];
      liveParticlesEmitter.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveParticlesColorMode) {
      const opts = ["source", "palette", "audio"];
      liveParticlesColorMode.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveParticlesStructure) {
      const nextStructure = weightedPick([
        { v: "cloud", w: 1.1 },
        { v: "grid", w: 0.75 },
        { v: "ring", w: 0.95 },
        { v: "helix", w: 0.95 },
        { v: "mandala", w: 0.95 },
        { v: "torus", w: 1.2 },
        { v: "lissajous", w: 1.15 },
        { v: "attractor", w: 1.05 },
      ]);
      liveParticlesStructure.value = nextStructure || "cloud";
    }
    if (liveParticlesAudioSplit) {
      const opts = ["basic", "zones", "off"];
      liveParticlesAudioSplit.value = opts[Math.floor(Math.random() * opts.length)];
    }
    tuneParticlesStructureProfile(liveParticlesStructure ? liveParticlesStructure.value : "cloud", { withJitter: true });
    if (liveParticlesSize) liveParticlesSize.value = String(clamp(Number(liveParticlesSize.value), 42, 96));
    if (liveParticlesDepth) liveParticlesDepth.value = String(clamp(Number(liveParticlesDepth.value), 40, 98));
    if (liveParticlesNoise) liveParticlesNoise.value = String(clamp(Number(liveParticlesNoise.value), 4, 84));
    if (liveParticlesAttractor) liveParticlesAttractor.value = String(clamp(Number(liveParticlesAttractor.value), 10, 88));
    if (liveParticlesFlow) liveParticlesFlow.value = String(clamp(Number(liveParticlesFlow.value), 8, 92));
    if (liveParticlesCamMode) {
      const sMode = liveParticlesStructure ? liveParticlesStructure.value : "cloud";
      const camByStructure = sMode === "attractor" || sMode === "torus"
        ? ["inside", "inside", "orbit", "helix"]
        : sMode === "lissajous" || sMode === "helix"
          ? ["sweep", "helix", "orbit", "inside"]
          : ["orbit", "sweep", "inside", "helix"];
      liveParticlesCamMode.value = camByStructure[Math.floor(Math.random() * camByStructure.length)];
    }
    if (liveParticlesCamSpeed) liveParticlesCamSpeed.value = String(Math.round(22 + Math.random() * 60));
    if (liveParticlesCamX) liveParticlesCamX.value = String(Math.round(-24 + Math.random() * 48));
    if (liveParticlesCamY) liveParticlesCamY.value = String(Math.round(-50 + Math.random() * 100));
    if (liveParticlesCamZ) liveParticlesCamZ.value = String(Math.round(-35 + Math.random() * 70));
    if (liveParticlesHue) liveParticlesHue.value = String(Math.round(Math.random() * 360));
    if (liveParticlesAudioAmount) liveParticlesAudioAmount.value = String(clamp(Math.round(28 + Math.random() * 68), 28, 96));
    if (liveParticlesTrail) liveParticlesTrail.value = String(clamp(Number(liveParticlesTrail.value), 0, 48));
    if (liveParticlesFxStyle) {
      const opts = ["none", "neon", "neon", "datamosh"];
      liveParticlesFxStyle.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveParticlesFxAmount) {
      const baseFx = liveParticlesFxStyle && liveParticlesFxStyle.value === "datamosh" ? 44 : 58;
      liveParticlesFxAmount.value = String(Math.round(clamp(baseFx + (Math.random() * 2 - 1) * 26, 0, 100)));
    }
    if (liveParticlesOrder) liveParticlesOrder.value = String(clamp(Number(liveParticlesOrder.value), 32, 92));
    if (liveParticlesAudio) liveParticlesAudio.checked = Math.random() > 0.2;
    if (liveParticlesDamping) liveParticlesDamping.value = String(clamp(Number(liveParticlesDamping.value), 22, 62));
    if (liveParticlesVortex) liveParticlesVortex.value = String(clamp(Number(liveParticlesVortex.value), 6, 82));
    if (liveParticlesSpawn) liveParticlesSpawn.value = String(Math.round(32 + Math.random() * 64));
    if (liveParticlesMotionThreshold) liveParticlesMotionThreshold.value = String(Math.round(8 + Math.random() * 72));
    if (liveParticlesDrift) liveParticlesDrift.value = String(clamp(Number(liveParticlesDrift.value), 4, 64));
    if (liveParticlesFocus) liveParticlesFocus.value = String(clamp(Number(liveParticlesFocus.value), 18, 86));
    if (liveParticlesGradientMode) {
      const opts = ["radial", "axis-x", "axis-y", "spiral"];
      liveParticlesGradientMode.value = opts[Math.floor(Math.random() * opts.length)];
    }
    if (liveParticlesColorMix) liveParticlesColorMix.value = String(Math.round(24 + Math.random() * 68));
    if (liveParticlesGradientSpread) liveParticlesGradientSpread.value = String(Math.round(22 + Math.random() * 72));
    if (liveParticlesCount && keepParticlesCount) liveParticlesCount.value = keepParticlesCount;
    particlesBufferN = 0;
    updateOutputs();
    scheduleRender();
    return;
  }
  if (mode === "glitch") {
    const keepError = Number(controls.errorComplexity.value);
    const pick = (min, max) => Math.round(min + Math.random() * (max - min));
    const load = estimateActiveModuleLoad();
    const masterOn = Boolean(masterFxMode && (masterFxMode.value || "none") !== "none");
    const kaleidoOn = isKaleidoFxActive();
    const fpsPressure = clamp((28 - fps) / 14, 0, 1);
    const perfPressure = clamp((1 - perfScale) * 1.1, 0, 1);
    const stackPressure = (masterOn ? 0.16 : 0) + (kaleidoOn ? 0.2 : 0) + (webcamActive ? 0.08 : 0);
    const stress = clamp(load.score * 0.55 + fpsPressure * 0.7 + perfPressure * 0.8 + stackPressure, 0, 1);
    const safe = 1 - stress;
    const pickSafe = (min, max, heavy = 1) => {
      const span = Math.max(0, max - min);
      const safeMax = min + span * clamp(1 - stress * heavy, 0.2, 1);
      return pick(min, Math.max(min, Math.round(safeMax)));
    };
    const chanceSafe = (p, heavy = 1) => Math.random() < clamp(p * (1 - stress * heavy), 0.03, 0.96);
    const next = {
      rgbShift: pickSafe(4, 24, 0.35),
      lineJitter: pickSafe(6, 42, 0.4),
      waveDistort: pickSafe(4, 34, 0.45),
      blockShift: pickSafe(8, 58, 0.5),
      dataBands: pickSafe(6, 52, 0.5),
      chromaBleed: pickSafe(8, 46, 0.4),
      noiseAmount: pickSafe(6, 42, 0.4),
      saltPepper: pickSafe(0, 22, 0.25),
      pixelSize: pickSafe(1, 6, 0.2),
      pixelSort: chanceSafe(0.72, 0.9) ? pickSafe(0, 24, 1.05) : pickSafe(0, 8, 1.15),
      byteCorrupt: chanceSafe(0.5, 1.05) ? pickSafe(0, 22, 1.15) : 0,
      ditherAmount: pickSafe(0, 30, 0.35),
      colorBlend: pickSafe(10, 56, 0.45),
      pixelMelt: pickSafe(0, 36, 0.95),
      subjectGhost: chanceSafe(0.58, 0.85) ? pickSafe(0, 36, 0.95) : 0,
      ghostCopies: stress > 0.65 ? 2 : chanceSafe(0.22, 0.8) ? 3 : 2,
      ghostShift: pickSafe(10, 58, 0.7),
      polygonTrack: chanceSafe(webcamActive ? 0.38 : 0.05, 1.1) ? pickSafe(0, webcamActive ? 28 : 8, 1.15) : 0,
      scanlineIntensity: pickSafe(10, 48, 0.3),
      bloom: pickSafe(0, 28, 0.3),
      posterize: pickSafe(10, 34, 0.25),
      hueShift: pick(-28, 28),
      saturation: pickSafe(88, 150, 0.25),
      contrast: pickSafe(94, 160, 0.3),
      invertBlend: chanceSafe(0.3, 0.6) ? pickSafe(0, 35, 0.65) : 0,
      solarize: chanceSafe(0.26, 0.7) ? pickSafe(0, 38, 0.75) : 0,
      motionTrail: chanceSafe(0.55, 1.0) ? pickSafe(8, 52, 1.0) : pickSafe(0, 16, 1.15),
      trailDecay: pickSafe(54, 90, 0.35),
      trailThreshold: pickSafe(26, 66, 0.45),
      trailSoftness: pickSafe(20, 64, 0.45),
      trailMotionOnly: pickSafe(60, 100, 0.3),
      animDistort: chanceSafe(0.58, 1.0) ? pickSafe(6, 56, 1.05) : pickSafe(0, 20, 1.2),
      animSpeed: pickSafe(24, 74, 0.55),
      vhsDrift: pickSafe(12, 72, 0.75),
      tapeNoise: pickSafe(8, 62, 0.7),
      headSwitch: pickSafe(6, 58, 0.7),
    };
    const weighted =
      next.pixelSort * 1.25 +
      next.byteCorrupt * 1.2 +
      next.motionTrail * 1.2 +
      next.animDistort * 1.15 +
      next.polygonTrack * 1.3 +
      next.pixelMelt * 0.95 +
      next.subjectGhost * 1.1 +
      next.vhsDrift * 0.6 +
      next.tapeNoise * 0.5 +
      next.headSwitch * 0.5;
    const budget = 170 * (0.42 + safe * 0.72);
    if (weighted > budget) {
      const k = clamp(budget / Math.max(1, weighted), 0.35, 1);
      next.pixelSort = Math.round(next.pixelSort * k);
      next.byteCorrupt = Math.round(next.byteCorrupt * k);
      next.motionTrail = Math.round(next.motionTrail * k);
      next.animDistort = Math.round(next.animDistort * k);
      next.polygonTrack = Math.round(next.polygonTrack * k);
      next.pixelMelt = Math.round(next.pixelMelt * k);
      next.subjectGhost = Math.round(next.subjectGhost * k);
      next.vhsDrift = Math.round(next.vhsDrift * (0.76 + k * 0.24));
      next.tapeNoise = Math.round(next.tapeNoise * (0.8 + k * 0.2));
      next.headSwitch = Math.round(next.headSwitch * (0.8 + k * 0.2));
      next.trailSoftness = Math.round(clamp(next.trailSoftness + (1 - k) * 18, 20, 90));
      next.trailThreshold = Math.round(clamp(next.trailThreshold + (1 - k) * 12, 20, 78));
    }
    controls.rgbShift.value = String(next.rgbShift);
    controls.lineJitter.value = String(next.lineJitter);
    controls.waveDistort.value = String(next.waveDistort);
    controls.blockShift.value = String(next.blockShift);
    controls.dataBands.value = String(next.dataBands);
    controls.chromaBleed.value = String(next.chromaBleed);
    controls.noiseAmount.value = String(next.noiseAmount);
    controls.saltPepper.value = String(next.saltPepper);
    controls.pixelSize.value = String(next.pixelSize);
    controls.pixelSort.value = String(next.pixelSort);
    controls.byteCorrupt.value = String(next.byteCorrupt);
    controls.ditherAmount.value = String(next.ditherAmount);
    controls.colorBlend.value = String(next.colorBlend);
    controls.pixelMelt.value = String(next.pixelMelt);
    controls.subjectGhost.value = String(next.subjectGhost);
    controls.ghostCopies.value = String(next.ghostCopies);
    controls.ghostShift.value = String(next.ghostShift);
    controls.polygonTrack.value = String(next.polygonTrack);
    controls.scanlineIntensity.value = String(next.scanlineIntensity);
    controls.bloom.value = String(next.bloom);
    controls.posterize.value = String(next.posterize);
    controls.hueShift.value = String(next.hueShift);
    controls.saturation.value = String(next.saturation);
    controls.contrast.value = String(next.contrast);
    controls.invertBlend.value = String(next.invertBlend);
    controls.solarize.value = String(next.solarize);
    controls.motionTrail.value = String(next.motionTrail);
    controls.trailDecay.value = String(next.trailDecay);
    controls.trailThreshold.value = String(next.trailThreshold);
    controls.trailSoftness.value = String(next.trailSoftness);
    controls.trailMotionOnly.value = String(next.trailMotionOnly);
    controls.animDistort.value = String(next.animDistort);
    controls.animSpeed.value = String(next.animSpeed);
    controls.vhsDrift.value = String(next.vhsDrift);
    controls.tapeNoise.value = String(next.tapeNoise);
    controls.headSwitch.value = String(next.headSwitch);
    // Keep dedicated slider user-controlled.
    controls.errorComplexity.value = keepError;
    updateOutputs();
    scheduleRender();
    return;
  }
  const ids = modeRelevantIds(mode);
  const protectedIds = new Set([
    "audioSensitivity",
    "audioTolerance",
    "live3dPointOpacity",
    "live3dMeshOpacity",
  ]);
  const keepError = mode === "glitch" ? Number(controls.errorComplexity.value) : null;
  const keepFlatIllustrated =
    mode === "depth" || mode === "mix" ? Number(controls.flatIllustrated.value) : null;
  const keepLightEnabled =
    mode === "depth" || mode === "mix" ? Number(controls.lightEnabled.value) : null;
  ids.forEach((id) => {
    if (protectedIds.has(id)) return;
    const [min, max] = ranges[id];
    const v = min + Math.random() * (max - min);
    controls[id].value = Number.isInteger(min) && Number.isInteger(max) ? Math.round(v) : v;
  });
  if (keepError !== null) controls.errorComplexity.value = keepError;
  if (keepFlatIllustrated !== null) controls.flatIllustrated.value = keepFlatIllustrated;
  if (keepLightEnabled !== null) controls.lightEnabled.value = keepLightEnabled;

  if (mode === "fractal" || mode === "mix") {
    controls.kaleidoSegments.value = clamp(Number(controls.kaleidoSegments.value), 4, 12);
    controls.kaleidoLayers.value = clamp(Number(controls.kaleidoLayers.value), 2, 8);
    controls.psychedelic.value = clamp(Number(controls.psychedelic.value), 20, 100);
    if (fractalPattern) {
      const options = ["kaleido", "spiral", "mandala", "hybrid"];
      fractalPattern.value = options[Math.floor(Math.random() * options.length)];
    }
    if (fractalSource) {
      fractalSource.value = Math.random() > 0.45 ? "glitch" : "original";
    }
  }

  if (mode === "depth" || mode === "mix") {
    controls.pointMap.value = clamp(Number(controls.pointMap.value), 45, 100);
    controls.meshMap.value = clamp(Number(controls.meshMap.value), 30, 100);
    const pickNear = (base, min, max, radius) =>
      clamp(base + (Math.random() * 2 - 1) * radius, min, max);
    // Keep brightness and light changes subtle during Random for projection stability.
    controls.sceneExposure.value = String(Math.round(pickNear(prevDepthExposure, 90, 150, 8)));
    controls.lightIntensity.value = String(Math.round(pickNear(prevDepthLight, 58, 128, 10)));
    controls.ambientLight.value = String(Math.round(pickNear(prevDepthAmbient, 16, 72, 10)));
    controls.live3dDepthWarp.value = String(Math.round(clamp(Number(controls.live3dDepthWarp.value), 12, 82)));
    resetDepthInteractionSmoothing();
  }

  updateOutputs();
}

function resetDepthInteractionSmoothing() {
  targetMeshAmount = null;
  targetMeshLift = null;
  targetPointHue = null;
  targetMeshHue = null;
  smoothMeshAmount = controls.meshMap ? Number(controls.meshMap.value) : smoothMeshAmount;
  smoothMeshLift = controls.meshLift ? Number(controls.meshLift.value) : smoothMeshLift;
  smoothPointHue = controls.pointColorShift ? Number(controls.pointColorShift.value) : smoothPointHue;
  smoothMeshHue = controls.meshColorShift ? Number(controls.meshColorShift.value) : smoothMeshHue;
  smoothCamFollow = controls.cameraFollow ? Number(controls.cameraFollow.value) : smoothCamFollow;
  smoothCamZoom = controls.cameraZoom ? Number(controls.cameraZoom.value) : smoothCamZoom;
  smoothRotX = controls.pointRotateX ? Number(controls.pointRotateX.value) : smoothRotX;
  smoothRotY = controls.pointRotateY ? Number(controls.pointRotateY.value) : smoothRotY;
  smoothRotZ = controls.pointRotateZ ? Number(controls.pointRotateZ.value) : smoothRotZ;
  smoothMotionRx = null;
  smoothMotionRy = null;
  smoothMotionRz = null;
  smoothMotionZoom = null;
  smoothMotionPanX = null;
  smoothMotionPanY = null;
}

function cancelMorphTweensForCurrentMode() {
  kaleidoMorphTween = null;
  if (mode === "particles") {
    particlesRandomTween = null;
    particlesCameraTween = null;
    return;
  }
  if (mode === "fractal") {
    fractalMorphTween = null;
    fractalCameraTween = null;
    return;
  }
  if (mode === "tunnel") {
    tunnelMorphTween = null;
    return;
  }
  if (mode === "interior") {
    interiorMorphTween = null;
    return;
  }
  if (mode === "atlas") {
    atlasMorphTween = null;
    return;
  }
  if (mode === "materia") {
    materiaMorphTween = null;
    return;
  }
  if (mode === "depth" || mode === "mix") {
    depthMorphTween = null;
  }
}

function triggerKaleidoMorphTween(forceEnable = true) {
  if (!kaleidoFxEnabled || !kaleidoFxType || !kaleidoFxAmount || !kaleidoFxSpeed || !kaleidoFxSmooth || !kaleidoFxSegments || !kaleidoFxZoom) return;
  if (forceEnable && !kaleidoFxEnabled.checked) kaleidoFxEnabled.checked = true;
  if (kaleidoFxDetails) kaleidoFxDetails.open = true;
  const types = KALEIDO_TYPES;
  const current = kaleidoFxType.value || KALEIDO_DEFAULT_TYPE;
  const pool = types.filter((t) => t !== current);
  const nextType = pool[Math.floor(Math.random() * pool.length)] || types[0];

  const entries = [];
  const pushEntry = (el, min, max, integer = false) => {
    const from = Number(el.value);
    const span = max - min;
    const center = min + span * 0.5;
    // Favor near targets so morph feels continuous, not jumpy.
    const tight = from * 0.64 + center * 0.36 + (Math.random() * 2 - 1) * span * 0.16;
    const to = clamp(tight, min, max);
    entries.push({ el, from, to, integer });
  };
  pushEntry(kaleidoFxAmount, 20, 96, false);
  pushEntry(kaleidoFxSpeed, 8, 92, false);
  pushEntry(kaleidoFxSmooth, 16, 96, false);
  pushEntry(kaleidoFxSegments, 6, 12, false);
  pushEntry(kaleidoFxZoom, 170, 300, false);
  kaleidoMorphTween = {
    startMs: performance.now(),
    durationMs: 5600 + Math.random() * 2800,
    entries,
    fromType: current,
    toType: nextType,
    typeBlend: 0,
  };
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyKaleidoMorphTween() {
  if (!kaleidoMorphTween) return false;
  if (!kaleidoFxAmount || !kaleidoFxSpeed || !kaleidoFxSmooth || !kaleidoFxSegments || !kaleidoFxZoom) {
    kaleidoMorphTween = null;
    return false;
  }
  const now = performance.now();
  const kRaw = clamp((now - kaleidoMorphTween.startMs) / kaleidoMorphTween.durationMs, 0, 1);
  const k = kRaw * kRaw * kRaw * (kRaw * (kRaw * 6 - 15) + 10); // smootherstep
  kaleidoMorphTween.entries.forEach(({ el, from, to, integer }) => {
    const v = from + (to - from) * k;
    el.value = integer ? String(Math.round(v)) : String(v.toFixed(2));
  });
  if (kaleidoFxSegments) kaleidoFxSegments.value = String(clamp(Number(kaleidoFxSegments.value), 4, 12).toFixed(2));
  if (kaleidoFxZoom) kaleidoFxZoom.value = String(clamp(Number(kaleidoFxZoom.value), 150, 320).toFixed(2));
  if (kaleidoFxType && kaleidoMorphTween.fromType && kaleidoMorphTween.toType) {
    // Delay type morph start so first half feels ultra smooth.
    const t = clamp((kRaw - 0.3) / 0.7, 0, 1);
    kaleidoMorphTween.typeBlend = t * t * (3 - 2 * t);
    kaleidoFxType.value = kaleidoMorphTween.typeBlend >= 0.999 ? kaleidoMorphTween.toType : kaleidoMorphTween.fromType;
  }
  updateKaleidoFxPadDot();
  updateLiveQuickOutputs();
  if (kRaw >= 1) kaleidoMorphTween = null;
  return true;
}

function triggerParticlesCameraTween() {
  if (mode !== "particles") return;
  const entries = [];
  const pushEntry = (el, min, max) => {
    if (!el) return;
    const from = Number(el.value);
    const to = min + Math.random() * (max - min);
    entries.push({ el, from, to });
  };
  if (liveParticlesCamMode) {
    const opts = ["orbit", "sweep", "helix", "inside"];
    liveParticlesCamMode.value = opts[Math.floor(Math.random() * opts.length)];
  }
  pushEntry(liveParticlesCamSpeed, 24, 78);
  pushEntry(liveParticlesCamX, -36, 36);
  pushEntry(liveParticlesCamY, -68, 68);
  pushEntry(liveParticlesCamZ, -48, 48);
  particlesCameraTween = {
    startMs: performance.now(),
    durationMs: 2200 + Math.random() * 1400,
    entries,
  };
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyParticlesCameraTween() {
  if (!particlesCameraTween) return false;
  if (mode !== "particles") {
    particlesCameraTween = null;
    return false;
  }
  const now = performance.now();
  const kRaw = clamp((now - particlesCameraTween.startMs) / particlesCameraTween.durationMs, 0, 1);
  const k = kRaw * kRaw * (3 - 2 * kRaw);
  particlesCameraTween.entries.forEach(({ el, from, to }) => {
    el.value = String(Math.round(from + (to - from) * k));
  });
  updateLiveQuickOutputs();
  if (kRaw >= 1) particlesCameraTween = null;
  return true;
}

function triggerFractalCameraTween() {
  if (mode !== "fractal") return;
  const entries = [];
  const pushEntry = (el, min, max) => {
    if (!el) return;
    const from = Number(el.value);
    const to = min + Math.random() * (max - min);
    entries.push({ el, from, to });
  };
  if (liveFractalCameraMode) {
    const opts = ["orbit", "inside"];
    liveFractalCameraMode.value = opts[Math.floor(Math.random() * opts.length)];
  }
  pushEntry(liveFractalCamSpeed, 8, 68);
  pushEntry(liveFractalDistance, 20, 156);
  fractalCamYawTarget += (Math.random() * 2 - 1) * 1.25;
  fractalCamPitchTarget = clamp(fractalCamPitchTarget + (Math.random() * 2 - 1) * 0.58, -1.2, 1.2);
  fractalCameraTween = {
    startMs: performance.now(),
    durationMs: 2200 + Math.random() * 1800,
    entries,
  };
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyFractalCameraTween() {
  if (!fractalCameraTween) return false;
  if (mode !== "fractal") {
    fractalCameraTween = null;
    return false;
  }
  const now = performance.now();
  const kRaw = clamp((now - fractalCameraTween.startMs) / fractalCameraTween.durationMs, 0, 1);
  const k = kRaw * kRaw * (3 - 2 * kRaw);
  fractalCameraTween.entries.forEach(({ el, from, to }) => {
    el.value = String(Math.round(from + (to - from) * k));
  });
  updateLiveQuickOutputs();
  if (kRaw >= 1) fractalCameraTween = null;
  return true;
}

function triggerParticlesDynamicRandomTween() {
  if (mode !== "particles") return;
  const entries = [];
  const pushEntry = (el, min, max) => {
    if (!el) return;
    const from = Number(el.value);
    const to = min + Math.random() * (max - min);
    entries.push({ el, from, to });
  };

  // Keep current camera mode to avoid abrupt camera jumps during morph.
  particlesCamModeBlendStart = 0;

  pushEntry(liveParticlesCamSpeed, 24, 72);
  pushEntry(liveParticlesCamX, -24, 24);
  pushEntry(liveParticlesCamY, -65, 65);
  pushEntry(liveParticlesCamZ, -42, 42);
  pushEntry(liveParticlesNoise, 8, 78);
  pushEntry(liveParticlesAttractor, 8, 80);
  pushEntry(liveParticlesFlow, 10, 88);
  pushEntry(liveParticlesVortex, 4, 82);
  pushEntry(liveParticlesDrift, 10, 70);
  pushEntry(liveParticlesFocus, 10, 82);
  pushEntry(liveParticlesHue, 0, 360);
  pushEntry(liveParticlesAudioAmount, 28, 100);
  pushEntry(liveParticlesTrail, 0, 64);
  pushEntry(liveParticlesFxAmount, 22, 92);
  pushEntry(liveParticlesColorMix, 18, 92);
  pushEntry(liveParticlesGradientSpread, 20, 95);
  pushEntry(liveParticlesOrder, 28, 88);
  if (liveParticlesFxStyle && Math.random() > 0.35) {
    const opts = ["neon", "datamosh", "neon"];
    liveParticlesFxStyle.value = opts[Math.floor(Math.random() * opts.length)];
  }

  particlesRandomTween = {
    startMs: performance.now(),
    durationMs: 2800 + Math.random() * 2200,
    entries,
  };
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyParticlesRandomTween() {
  if (!particlesRandomTween) return false;
  if (mode !== "particles") {
    particlesRandomTween = null;
    return false;
  }
  const now = performance.now();
  const kRaw = clamp((now - particlesRandomTween.startMs) / particlesRandomTween.durationMs, 0, 1);
  const k = kRaw * kRaw * (3 - 2 * kRaw);
  particlesRandomTween.entries.forEach(({ el, from, to }) => {
    el.value = String(Math.round(from + (to - from) * k));
  });
  updateLiveQuickOutputs();
  if (kRaw >= 1) particlesRandomTween = null;
  return true;
}

function triggerDepthMorphTween() {
  if (mode !== "depth" && mode !== "mix") return;
  const entries = [];
  const pushId = (id, min, max) => {
    const el = controls[id];
    if (!el) return;
    const from = Number(el.value);
    const to = min + Math.random() * (max - min);
    entries.push({ el, from, to });
  };
  pushId("pointMap", 28, 100);
  pushId("meshMap", 18, 96);
  pushId("pointDensity", 18, 82);
  pushId("meshDensity", 10, 74);
  pushId("pointSize", 1, 22);
  pushId("pointLift", 10, 90);
  pushId("meshLift", 8, 88);
  pushId("depthStrength", 28, 98);
  pushId("depthExaggeration", 62, 150);
  pushId("pointSpread", 2, 170);
  pushId("pointRotateX", -38, 38);
  pushId("pointRotateY", -85, 85);
  pushId("pointRotateZ", -50, 50);
  pushId("cameraZoom", 72, 118);
  pushId("cameraFollow", 0, 75);
  pushId("autoRotate", 0, 86);
  pushId("ambientLight", 12, 88);
  pushId("lightIntensity", 32, 170);
  pushId("sceneExposure", 85, 182);
  pushId("pointColorShift", 0, 360);
  pushId("meshColorShift", 0, 360);
  pushId("pointColorPulse", 0, 100);
  pushId("depthColorWave", 0, 100);
  pushId("bgMotion", 0, 92);

  if (live3dFxAmount) {
    entries.push({
      el: live3dFxAmount,
      from: Number(live3dFxAmount.value),
      to: 12 + Math.random() * 78,
    });
  }

  // Keep current camera mode; morph only parameters for smooth transitions.

  depthMorphTween = {
    startMs: performance.now(),
    durationMs: 3200 + Math.random() * 2400,
    entries,
  };
  updateOutputs();
  scheduleRender();
}

function applyDepthMorphTween() {
  if (!depthMorphTween) return false;
  if (mode !== "depth" && mode !== "mix") {
    depthMorphTween = null;
    return false;
  }
  const now = performance.now();
  const kRaw = clamp((now - depthMorphTween.startMs) / depthMorphTween.durationMs, 0, 1);
  const k = kRaw * kRaw * (3 - 2 * kRaw);
  depthMorphTween.entries.forEach(({ el, from, to }) => {
    el.value = String(Math.round(from + (to - from) * k));
  });
  updateOutputs();
  if (kRaw >= 1) depthMorphTween = null;
  return true;
}

function triggerFractalMorphTween() {
  if (mode !== "fractal") return;
  const entries = [];
  const pushEntry = (el, min, max) => {
    if (!el) return;
    const from = Number(el.value);
    const to = min + Math.random() * (max - min);
    entries.push({ el, from, to });
  };

  pushEntry(liveFractalCamSpeed, 8, 62);
  pushEntry(liveFractalDistance, 24, 142);
  pushEntry(liveFractalShapeMorph, 0, 100);
  pushEntry(liveFractalSymmetry, 8, 24);
  pushEntry(liveFractalPower, 64, 114);
  pushEntry(liveFractalFog, 0, 66);
  pushEntry(liveFractalGlow, 10, 92);
  pushEntry(liveFractalLight, 38, 240);
  pushEntry(liveFractalSpin, 0, 86);
  pushEntry(liveFractalBreath, 10, 95);
  pushEntry(liveFractalFlow, 42, 90);
  pushEntry(liveFractalWarmth, 8, 100);
  const lockOverlay = liveFractalOverlayLock ? liveFractalOverlayLock.checked : true;
  if (!lockOverlay) {
    pushEntry(liveFractalTextureMix, 0, 92);
    pushEntry(liveFractalOpticalAmount, 0, 78);
  }
  pushEntry(liveFractalPolygonize, 0, 86);
  pushEntry(liveFractalWireStrength, 20, 100);
  pushEntry(liveFractalPointOverlay, 0, 100);
  pushEntry(liveFractalAudioGain, 24, 180);

  fractalMorphTween = {
    startMs: performance.now(),
    durationMs: 3000 + Math.random() * 2600,
    entries,
  };
  updateLiveQuickOutputs();
  scheduleRender();
}

function applyFractalMorphTween() {
  if (!fractalMorphTween) return false;
  if (mode !== "fractal") {
    fractalMorphTween = null;
    return false;
  }
  const now = performance.now();
  const kRaw = clamp((now - fractalMorphTween.startMs) / fractalMorphTween.durationMs, 0, 1);
  const k = kRaw * kRaw * (3 - 2 * kRaw);
  fractalMorphTween.entries.forEach(({ el, from, to }) => {
    el.value = String(Math.round(from + (to - from) * k));
  });
  updateLiveQuickOutputs();
  if (kRaw >= 1) fractalMorphTween = null;
  return true;
}

function randomizeBackground() {
  if (!bgMode || !bgColorA || !bgColorB) return;
  // Keep psychedelic and grid backgrounds as separate manual choices (not in F random).
  const modes = ["solid", "gradient-linear", "gradient-radial", "animated"];
  bgMode.value = modes[Math.floor(Math.random() * modes.length)];
  if (bgPalette) {
    const palettes = ["custom", "cyber", "sunset", "ocean", "toxic"];
    bgPalette.value = palettes[Math.floor(Math.random() * palettes.length)];
  }
  const randColor = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  bgColorA.value = randColor();
  bgColorB.value = randColor();
  if (controls.bgMotion) {
    controls.bgMotion.value = Math.round(20 + Math.random() * 80);
  }
  updateOutputs();
}

function cycle3dBackgroundMode() {
  if (mode !== "depth" && mode !== "mix") return;
  if (!bgMode) return;
  const cycle = ["solid", "animated", "psychedelic-fractal"];
  const idx = cycle.indexOf(bgMode.value);
  bgMode.value = cycle[(idx + 1 + cycle.length) % cycle.length];
  scheduleRender();
}

function cycleCurrentBackgroundColors() {
  if (!bgMode || !bgColorA || !bgColorB) return;
  // Keep the current mode selected with C; only rotate color styling.
  const colorPairs = [
    ["#0b1026", "#30103d"],
    ["#00f7ff", "#1742ff"],
    ["#ff4fd8", "#7a1fff"],
    ["#19ff88", "#0a5b2d"],
    ["#ffd54a", "#ff5f1f"],
    ["#ffffff", "#9fd8ff"],
    ["#ff0033", "#1d0010"],
    ["#4affff", "#101a33"],
  ];
  const currentA = (bgColorA.value || "").toLowerCase();
  const currentB = (bgColorB.value || "").toLowerCase();
  let pair = colorPairs[Math.floor(Math.random() * colorPairs.length)];
  for (let i = 0; i < 8 && pair[0].toLowerCase() === currentA && pair[1].toLowerCase() === currentB; i += 1) {
    pair = colorPairs[Math.floor(Math.random() * colorPairs.length)];
  }
  if (bgPalette) bgPalette.value = "custom";
  if (bgMode.value === "solid") {
    bgColorA.value = pair[0];
    bgColorB.value = pair[0];
  } else {
    bgColorA.value = pair[0];
    bgColorB.value = pair[1];
  }
  updateOutputs();
  scheduleRender();
}

function randomizeCurrentBackgroundColorsSmooth() {
  if (!bgMode || !bgColorA || !bgColorB) return;
  const rgbToHex = (r, g, b) =>
    `#${[r, g, b]
      .map((v) => clamp(Math.round(v), 0, 255).toString(16).padStart(2, "0"))
      .join("")}`;
  const randColor = () =>
    `#${Math.floor(Math.random() * 0xffffff)
      .toString(16)
      .padStart(6, "0")}`;
  const fromAHex = bgColorA.value || "#0b1026";
  const fromBHex = bgColorB.value || "#30103d";

  let toAHex;
  let toBHex;
  // In 3D, keep Z color changes inside the same palette as points/mesh.
  if ((mode === "depth" || mode === "mix") && controls.pointColorShift && controls.meshColorShift) {
    const pointHue = clamp(Number(controls.pointColorShift.value) / 360, 0, 1);
    const meshHue = clamp(Number(controls.meshColorShift.value) / 360, 0, 1);
    const jA = Math.random() * 0.08 - 0.04;
    const jB = Math.random() * 0.08 - 0.04;
    const hA = (pointHue + jA + 1) % 1;
    const hB = (meshHue + jB + 1) % 1;
    const sA = clamp(0.48 + Math.random() * 0.24, 0, 1);
    const sB = clamp(0.46 + Math.random() * 0.26, 0, 1);
    const lA = clamp(0.16 + Math.random() * 0.18, 0.1, 0.58);
    const lB = clamp(0.2 + Math.random() * 0.2, 0.12, 0.62);
    const [rA, gA, bA] = hslToRgb(hA, sA, lA);
    const [rB, gB, bB] = hslToRgb(hB, sB, lB);
    toAHex = rgbToHex(rA, gA, bA);
    toBHex = rgbToHex(rB, gB, bB);
  } else {
    toAHex = randColor();
    toBHex = randColor();
  }

  if (bgMode.value === "solid") toBHex = toAHex;
  for (let i = 0; i < 8 && toAHex.toLowerCase() === fromAHex.toLowerCase(); i += 1) {
    toAHex = randColor();
    if (bgMode.value === "solid") toBHex = toAHex;
  }
  if (bgPalette) bgPalette.value = "custom";
  bgColorA.value = toAHex;
  bgColorB.value = toBHex;
  bgColorTween = {
    fromA: hexToRgb(fromAHex),
    fromB: hexToRgb(fromBHex),
    toA: hexToRgb(toAHex),
    toB: hexToRgb(toBHex),
    startedAt: performance.now(),
    durationMs: 760,
  };
  updateOutputs();
  scheduleRender();
}

function cycle3dFxMode(step = 1) {
  if (mode !== "depth" && mode !== "mix") return;
  if (!live3dFxMode) return;
  const cycle = ["none", "delay", "echo", "colortrail", "prism"];
  const idx = cycle.indexOf(live3dFxMode.value);
  live3dFxMode.value = cycle[(idx + (step >= 0 ? 1 : -1) + cycle.length) % cycle.length];
  scheduleRender();
}

function cycleMasterFxMode(step = 1) {
  if (!masterFxMode) return;
  const cycle = [...masterFxMode.options]
    .map((o) => o.value)
    .filter((v, i, arr) => v && arr.indexOf(v) === i);
  if (cycle.length === 0) return;
  const idx = cycle.indexOf(masterFxMode.value);
  const start = idx >= 0 ? idx : 0;
  masterFxMode.value = cycle[(start + (step >= 0 ? 1 : -1) + cycle.length) % cycle.length];
  updateMasterFxSummaryStatus();
  if (masterPrevCanvas.width > 0 && masterPrevCanvas.height > 0) {
    masterPrevCtx.clearRect(0, 0, masterPrevCanvas.width, masterPrevCanvas.height);
  }
  updateMasterFxPadDot();
  scheduleRender();
}

function cycleKaleidoFxType(step = 1) {
  if (!kaleidoFxType) return;
  const types = KALEIDO_TYPES;
  const idx = types.indexOf(kaleidoFxType.value);
  const startIdx = idx >= 0 ? idx : 0;
  kaleidoFxType.value = types[(startIdx + (step >= 0 ? 1 : -1) + types.length) % types.length];
  scheduleRender();
}

function randomize3dGeometryColors() {
  if (mode !== "depth" && mode !== "mix") return;
  if (!controls.pointColorShift || !controls.meshColorShift) return;
  const pointHue = Math.round(Math.random() * 360);
  const meshHue = Math.round(Math.random() * 360);
  controls.pointColorShift.value = String(pointHue);
  controls.meshColorShift.value = String(meshHue);
  targetPointHue = null;
  targetMeshHue = null;
  smoothPointHue = pointHue;
  smoothMeshHue = meshHue;
  updateOutputs();
  scheduleRender();
}

function toggle3dBackgroundBlackWhite() {
  if (mode !== "depth" && mode !== "mix" && mode !== "glitch") return;
  if (!bgMode || !bgColorA || !bgColorB) return;
  if (bgPalette) bgPalette.value = "custom";
  bgMode.value = "solid";
  const a = (bgColorA.value || "").toLowerCase();
  const b = (bgColorB.value || "").toLowerCase();
  const whiteSet = new Set(["#fff", "#ffffff"]);
  const isWhite = whiteSet.has(a) && whiteSet.has(b);
  if (isWhite) {
    bgColorA.value = "#000000";
    bgColorB.value = "#000000";
  } else {
    bgColorA.value = "#ffffff";
    bgColorB.value = "#ffffff";
  }
  updateOutputs();
  scheduleRender();
}

function syncModeUi() {
  modeGroups.forEach((group) => {
    if (currentWorkspacePanel === "studio") {
      const studioGroup = group.dataset.studioGroup || "";
      group.hidden = studioGroup ? studioGroup !== studioActiveTab : true;
      return;
    }
    const activeModes = group.dataset.modes.split(",");
    group.hidden = !activeModes.includes(mode);
  });
  updatePresetOptions();
}

function resetCameraTransientState() {
  targetPanX = null;
  targetPanY = null;
  targetCamFollow = null;
  targetCamZoom = null;
  targetRotX = null;
  targetRotY = null;
  targetRotZ = null;
  cameraFlowEase = 0;
  smoothCamFollow = controls.cameraFollow ? Number(controls.cameraFollow.value) : 0;
  smoothCamZoom = controls.cameraZoom ? Number(controls.cameraZoom.value) : 100;
  smoothRotX = controls.pointRotateX ? Number(controls.pointRotateX.value) : 0;
  smoothRotY = controls.pointRotateY ? Number(controls.pointRotateY.value) : 0;
  smoothRotZ = controls.pointRotateZ ? Number(controls.pointRotateZ.value) : 0;
  smoothMotionRx = null;
  smoothMotionRy = null;
  smoothMotionRz = null;
  smoothMotionZoom = null;
  smoothMotionPanX = null;
  smoothMotionPanY = null;
  cameraModePrev = cameraMode;
  cameraModeBlendStart = 0;
  lastCameraAnimTs = performance.now();
}

function setMode(newMode) {
  if (newMode === "synth") newMode = "glitch";
  const previousMode = mode;
  mode = newMode;
  populateModTargets();
  if (newMode !== "glitch" && newMode !== "mix" && glitchTrailCanvas.width > 0 && glitchTrailCanvas.height > 0) {
    glitchTrailCtx.clearRect(0, 0, glitchTrailCanvas.width, glitchTrailCanvas.height);
    glitchTrailBuffer = null;
    glitchPrevFrame = null;
    glitchTrailW = 0;
    glitchTrailH = 0;
  }
  if (newMode !== "synth" && synthPrevCanvas.width > 0 && synthPrevCanvas.height > 0) {
    synthPrevCtx.clearRect(0, 0, synthPrevCanvas.width, synthPrevCanvas.height);
  }
  syncLiveModeTabsFromMode();
  syncModeUi();
  if (newMode !== "depth" && newMode !== "mix" && newMode !== "particles" && newMode !== "lines" && newMode !== "tunnel" && newMode !== "interior" && newMode !== "atlas" && newMode !== "materia" && newMode !== "code") {
    isDragging3D = false;
    canvas.classList.remove("dragging");
    cameraPanX = 0;
    cameraPanY = 0;
    cameraKeyState.up = false;
    cameraKeyState.down = false;
    cameraKeyState.left = false;
    cameraKeyState.right = false;
  }

  if (newMode === "depth") {
    if (previousMode !== "depth" && previousMode !== "mix") {
      setCameraMode("helix", { instant: true });
      dragRotateX = 0;
      dragRotateY = 0;
      resetCameraTransientState();
    }
    const pointsOff = Number(controls.pointMap.value) === 0;
    const meshOff = Number(controls.meshMap.value) === 0;
    if (pointsOff && meshOff) setValues({ ...defaults, ...presets.depth[0].values });
  }
  if (newMode === "particles") {
    if (previousMode !== "depth" && previousMode !== "mix" && previousMode !== "particles") {
      setCameraMode("static", { instant: true });
      dragRotateX = 0;
      dragRotateY = 0;
      resetCameraTransientState();
    }
    // Rebuild particle buffers and recenter camera on each entry for predictable startup.
    particlesBufferN = 0;
    cameraPanX = 0;
    cameraPanY = 0;
    targetPanX = null;
    targetPanY = null;
    particlesCamXSmooth = 0;
    particlesCamYSmooth = 0;
    particlesCamZSmooth = 0;
    particlesCamAnimTime = 0;
    particlesCamLastTs = performance.now();
    particlesCamModePrev = liveParticlesCamMode ? liveParticlesCamMode.value : "static";
    particlesCamModeBlendStart = 0;
    particlesCamSpeedSmooth = 0;
    particlesFaceHistory = [];
    particlesWarmupUntil = performance.now() + 1200;
    if (webcamActive && liveParticlesFaceTrack) liveParticlesFaceTrack.checked = true;
    if (liveParticlesFaceAmount && Number(liveParticlesFaceAmount.value) < 60) liveParticlesFaceAmount.value = "68";
    if (liveParticlesFaceDelay && Number(liveParticlesFaceDelay.value) > 38) liveParticlesFaceDelay.value = "24";
    if (liveParticlesEmitter) liveParticlesEmitter.value = "grid";
    if (liveParticlesStructure) liveParticlesStructure.value = "cloud";
    tuneParticlesStructureProfile("cloud", { withJitter: false });
    if (liveParticlesFxStyle && !liveParticlesFxStyle.value) liveParticlesFxStyle.value = "neon";
    if (liveParticlesFxAmount && Number(liveParticlesFxAmount.value) < 20) liveParticlesFxAmount.value = "58";
    if (liveParticlesNoise && Number(liveParticlesNoise.value) > 35) liveParticlesNoise.value = "24";
    if (liveParticlesFlow && Number(liveParticlesFlow.value) > 40) liveParticlesFlow.value = "28";
    if (liveParticlesDamping && Number(liveParticlesDamping.value) < 26) liveParticlesDamping.value = "34";
    if (liveParticlesCamX) liveParticlesCamX.value = "0";
    if (liveParticlesCamY) liveParticlesCamY.value = "0";
    if (liveParticlesCamZ) liveParticlesCamZ.value = "0";
  }
  if (newMode === "fractal" && previousMode !== "fractal") {
    fractalGl = null;
    fractalMorphTween = null;
    fractalCameraTween = null;
    if (liveFractalShape && !liveFractalShape.value) liveFractalShape.value = "mandel";
    if (liveFractalShapeB && !liveFractalShapeB.value) liveFractalShapeB.value = "mandel";
    if (liveFractalShapeMorph && !liveFractalShapeMorph.value) liveFractalShapeMorph.value = "0";
    fractalCamYaw = lerpAngle(fractalCamYaw, fractalCamYawTarget, 1);
    fractalCamYawTarget = fractalCamYaw;
    fractalCamPitch = clamp(fractalCamPitch, -1.2, 1.2);
    fractalCamPitchTarget = fractalCamPitch;
    // Legacy fractal fallback uses these controls. Keep them above "no-op" values.
    if (controls.kaleidoSegments && Number(controls.kaleidoSegments.value) <= 1) controls.kaleidoSegments.value = "8";
    if (controls.kaleidoLayers && Number(controls.kaleidoLayers.value) <= 1) controls.kaleidoLayers.value = "2";
    if (controls.layerEcho && Number(controls.layerEcho.value) <= 0) controls.layerEcho.value = "22";
    if (controls.fractalZoom && Number(controls.fractalZoom.value) === 100) controls.fractalZoom.value = "96";
    if (controls.fractalPulse && Number(controls.fractalPulse.value) <= 0) controls.fractalPulse.value = "18";
    if (fractalPattern && (!fractalPattern.value || fractalPattern.value === "none")) fractalPattern.value = "kaleido";
  }
  if (newMode === "lines" && previousMode !== "lines") {
    linesCamYaw = 0;
    linesCamPitch = 0;
    linesCamDist = 1.1;
    linesCamYawTarget = 0;
    linesCamPitchTarget = 0;
    linesCamDistTarget = 1.1;
    linesAudioBassSmooth = 0;
    linesAudioMidSmooth = 0;
    linesAudioHighSmooth = 0;
    linesAudioEnergySmooth = 0;
    linesStringVibeSmooth = 0;
    linesBeatCooldown = 0;
    linesBeatPulse = 0;
    linesInvertSign = 1;
    linesInvertBlend = 1;
    if (liveLinesStyle && !liveLinesStyle.value) liveLinesStyle.value = "minimal";
    if (liveLinesPattern && !liveLinesPattern.value) liveLinesPattern.value = "flow";
    if (liveLinesPreset && !liveLinesPreset.value) liveLinesPreset.value = "ambient";
    if (liveLinesGeometry && !liveLinesGeometry.value) liveLinesGeometry.value = "ribbon";
    if (liveLinesCameraMode && !liveLinesCameraMode.value) liveLinesCameraMode.value = "orbit";
    if (liveLinesConstellation && !liveLinesConstellation.value) liveLinesConstellation.value = "56";
    if (liveLinesInsideDepth && !liveLinesInsideDepth.value) liveLinesInsideDepth.value = "62";
    if (liveLinesBeatFlip) liveLinesBeatFlip.checked = true;
    applyLinesPreset(liveLinesPreset ? liveLinesPreset.value : "ambient", false);
    setCameraMode("static", { instant: true });
  }
  if (newMode === "tunnel" && previousMode !== "tunnel") {
    tunnelCamYaw = 0;
    tunnelCamPitch = 0;
    tunnelCamDist = 1.08;
    tunnelCamYawTarget = 0;
    tunnelCamPitchTarget = 0;
    tunnelCamDistTarget = 1.08;
    tunnelAudioBassSmooth = 0;
    tunnelAudioMidSmooth = 0;
    tunnelAudioHighSmooth = 0;
    tunnelAudioEnergySmooth = 0;
    tunnelMorphTween = null;
    tunnelDiameterTarget = 1;
    tunnelDiameterSmooth = 1;
    tunnelDiameterCursorActive = false;
    if (liveTunnelPreset && !liveTunnelPreset.value) liveTunnelPreset.value = "deep";
    if (liveTunnelCameraMode && !liveTunnelCameraMode.value) liveTunnelCameraMode.value = "orbit";
    if (liveTunnelAudio) liveTunnelAudio.checked = true;
    if (liveTunnelDensity && !liveTunnelDensity.value) liveTunnelDensity.value = "22";
    if (liveTunnelDepth && !liveTunnelDepth.value) liveTunnelDepth.value = "74";
    if (liveTunnelSpeed && !liveTunnelSpeed.value) liveTunnelSpeed.value = "42";
    if (liveTunnelTwist && !liveTunnelTwist.value) liveTunnelTwist.value = "36";
    if (liveTunnelMesh && !liveTunnelMesh.value) liveTunnelMesh.value = "78";
    if (liveTunnelPoints && !liveTunnelPoints.value) liveTunnelPoints.value = "68";
    if (liveTunnelGlow && !liveTunnelGlow.value) liveTunnelGlow.value = "38";
    if (liveTunnelAudioAmount && !liveTunnelAudioAmount.value) liveTunnelAudioAmount.value = "70";
    if (bgMode) bgMode.value = "black";
    setCameraMode("static", { instant: true });
  }
  if (newMode === "interior" && previousMode !== "interior") {
    interiorCamYaw = 0;
    interiorCamPitch = 0;
    interiorCamDist = 1.04;
    interiorCamYawTarget = 0;
    interiorCamPitchTarget = 0;
    interiorCamDistTarget = 1.04;
    interiorAudioBassSmooth = 0;
    interiorAudioMidSmooth = 0;
    interiorAudioHighSmooth = 0;
    interiorAudioEnergySmooth = 0;
    interiorAudioSeparationSmooth = 0;
    interiorGlitchDriveSmooth = 0;
    interiorMorphTween = null;
    interiorCursorX = 0.5;
    interiorCursorY = 0.5;
    interiorCursorXTarget = 0.5;
    interiorCursorYTarget = 0.5;
    interiorLayerZDisp = new Float32Array(0);
    interiorLayerZVel = new Float32Array(0);
    interiorLayerNoise = new Float32Array(0);
    if (liveInteriorPreset && !liveInteriorPreset.value) liveInteriorPreset.value = "abyss";
    if (liveInteriorCameraMode && !liveInteriorCameraMode.value) liveInteriorCameraMode.value = "orbit";
    if (liveInteriorCameraMode && liveInteriorCameraMode.value === "inside360") liveInteriorCameraMode.value = "dive";
    if (liveInteriorAudio) liveInteriorAudio.checked = true;
    if (liveInteriorDensity && !liveInteriorDensity.value) liveInteriorDensity.value = "22";
    if (liveInteriorDepth && !liveInteriorDepth.value) liveInteriorDepth.value = "78";
    if (liveInteriorSpeed && !liveInteriorSpeed.value) liveInteriorSpeed.value = "34";
    if (liveInteriorWave && !liveInteriorWave.value) liveInteriorWave.value = "56";
    if (liveInteriorGlitch && !liveInteriorGlitch.value) liveInteriorGlitch.value = "42";
    if (liveInteriorGlow && !liveInteriorGlow.value) liveInteriorGlow.value = "44";
    if (liveInteriorAudioAmount && !liveInteriorAudioAmount.value) liveInteriorAudioAmount.value = "68";
    interiorDensitySmooth = Number(liveInteriorDensity ? liveInteriorDensity.value : 22) || 22;
    interiorDepthSmooth = Number(liveInteriorDepth ? liveInteriorDepth.value : 78) || 78;
    interiorSpeedSmooth = Number(liveInteriorSpeed ? liveInteriorSpeed.value : 34) || 34;
    interiorWaveSmooth = Number(liveInteriorWave ? liveInteriorWave.value : 56) || 56;
    interiorGlitchSmooth = Number(liveInteriorGlitch ? liveInteriorGlitch.value : 42) || 42;
    interiorGlowSmooth = Number(liveInteriorGlow ? liveInteriorGlow.value : 44) || 44;
    applyInteriorPreset(liveInteriorPreset ? liveInteriorPreset.value : "abyss", false);
    if (bgMode) bgMode.value = "black";
    setCameraMode("static", { instant: true });
  }
  if (newMode === "atlas" && previousMode !== "atlas") {
    atlasCamYaw = 0;
    atlasCamPitch = 0;
    atlasCamDist = 1.04;
    atlasCamYawTarget = 0;
    atlasCamPitchTarget = 0;
    atlasCamDistTarget = 1.04;
    atlasMorphTween = null;
    atlasAudioBassSmooth = 0;
    atlasAudioMidSmooth = 0;
    atlasAudioHighSmooth = 0;
    atlasAudioEnergySmooth = 0;
    atlasCamRig = 0;
    atlasCamRigTarget = 0;
    if (liveAtlasPreset && !liveAtlasPreset.value) liveAtlasPreset.value = "ribbon";
    if (liveAtlasSeed && !liveAtlasSeed.value) liveAtlasSeed.value = "52";
    if (liveAtlasVariation && !liveAtlasVariation.value) liveAtlasVariation.value = "58";
    if (liveAtlasComposition && !liveAtlasComposition.value) liveAtlasComposition.value = "58";
    if (liveAtlasComplexity && !liveAtlasComplexity.value) liveAtlasComplexity.value = "22";
    if (liveAtlasMotion && !liveAtlasMotion.value) liveAtlasMotion.value = "46";
    if (liveAtlasContrast && !liveAtlasContrast.value) liveAtlasContrast.value = "56";
    if (liveAtlasColorMod && !liveAtlasColorMod.value) liveAtlasColorMod.value = "62";
    if (liveAtlasMesh && !liveAtlasMesh.value) liveAtlasMesh.value = "46";
    if (liveAtlasSpheres && !liveAtlasSpheres.value) liveAtlasSpheres.value = "36";
    if (liveAtlasAudioAmount && !liveAtlasAudioAmount.value) liveAtlasAudioAmount.value = "72";
    if (liveAtlasAudio) liveAtlasAudio.checked = true;
    applyAtlasPreset(liveAtlasPreset ? liveAtlasPreset.value : "ribbon", false);
    atlasSeedSmooth = Number(liveAtlasSeed ? liveAtlasSeed.value : 52);
    atlasVariationSmooth = Number(liveAtlasVariation ? liveAtlasVariation.value : 58);
    atlasCompositionSmooth = Number(liveAtlasComposition ? liveAtlasComposition.value : 58);
    atlasComplexitySmooth = Number(liveAtlasComplexity ? liveAtlasComplexity.value : 22);
    atlasMotionSmooth = Number(liveAtlasMotion ? liveAtlasMotion.value : 46);
    atlasContrastSmooth = Number(liveAtlasContrast ? liveAtlasContrast.value : 56);
    atlasColorModSmooth = Number(liveAtlasColorMod ? liveAtlasColorMod.value : 62);
    atlasMeshSmooth = Number(liveAtlasMesh ? liveAtlasMesh.value : 46);
    atlasSpheresSmooth = Number(liveAtlasSpheres ? liveAtlasSpheres.value : 36);
    if (bgMode) bgMode.value = "black";
    setCameraMode("static", { instant: true });
  }
  if (newMode === "materia" && previousMode !== "materia") {
    materiaCamYaw = 0;
    materiaCamPitch = 0;
    materiaCamDist = 1.02;
    materiaCamYawTarget = 0;
    materiaCamPitchTarget = 0;
    materiaCamDistTarget = 1.02;
    materiaMorphTween = null;
    materiaAudioBassSmooth = 0;
    materiaAudioMidSmooth = 0;
    materiaAudioHighSmooth = 0;
    materiaAudioEnergySmooth = 0;
    if (liveMateriaPreset && !liveMateriaPreset.value) liveMateriaPreset.value = "mineral";
    if (liveMateriaSeed && !liveMateriaSeed.value) liveMateriaSeed.value = "2424";
    if (liveMateriaFlow && !liveMateriaFlow.value) liveMateriaFlow.value = "58";
    if (liveMateriaPorosity && !liveMateriaPorosity.value) liveMateriaPorosity.value = "48";
    if (liveMateriaLayers && !liveMateriaLayers.value) liveMateriaLayers.value = "52";
    if (liveMateriaDrift && !liveMateriaDrift.value) liveMateriaDrift.value = "42";
    if (liveMateriaContrast && !liveMateriaContrast.value) liveMateriaContrast.value = "54";
    if (liveMateriaAudioAmount && !liveMateriaAudioAmount.value) liveMateriaAudioAmount.value = "66";
    if (liveMateriaAudio) liveMateriaAudio.checked = true;
    applyMateriaPreset(liveMateriaPreset ? liveMateriaPreset.value : "mineral", false);
    materiaSeedSmooth = Number(liveMateriaSeed ? liveMateriaSeed.value : 2424);
    materiaFlowSmooth = Number(liveMateriaFlow ? liveMateriaFlow.value : 58);
    materiaPorositySmooth = Number(liveMateriaPorosity ? liveMateriaPorosity.value : 48);
    materiaLayersSmooth = Number(liveMateriaLayers ? liveMateriaLayers.value : 52);
    materiaDriftSmooth = Number(liveMateriaDrift ? liveMateriaDrift.value : 42);
    materiaContrastSmooth = Number(liveMateriaContrast ? liveMateriaContrast.value : 54);
    if (bgMode) bgMode.value = "black";
    setCameraMode("static", { instant: true });
  }
  if (newMode === "code" && previousMode !== "code") {
    codeRainCamX = 0;
    codeRainCamY = 0;
    codeRainCamXTarget = 0;
    codeRainCamYTarget = 0;
    codeRainEnergySmooth = 0;
    codeRainFigurePhase = 0;
    codeRainCols = 0;
    codeRainDrops = new Float32Array(0);
    codeRainSpeeds = new Float32Array(0);
    codeRainSeeds = new Float32Array(0);
    if (liveCodePreset && !liveCodePreset.value) liveCodePreset.value = "matrix";
    if (liveCodeCameraMode && !liveCodeCameraMode.value) liveCodeCameraMode.value = "wide";
    if (liveCodeDensity && !liveCodeDensity.value) liveCodeDensity.value = "58";
    if (liveCodeSpeed && !liveCodeSpeed.value) liveCodeSpeed.value = "44";
    if (liveCodeZoom && !liveCodeZoom.value) liveCodeZoom.value = "38";
    if (liveCodeLetters && !liveCodeLetters.value) liveCodeLetters.value = "62";
    if (liveCodeFigure && !liveCodeFigure.value) liveCodeFigure.value = "62";
    if (liveCodeLanguage && !liveCodeLanguage.value) liveCodeLanguage.value = "52";
    if (liveCodeLanguage) liveCodeLanguage.value = String(clamp(Number(liveCodeLanguage.value), 0, 65));
    if (liveCodeGlow && !liveCodeGlow.value) liveCodeGlow.value = "54";
    if (liveCodeBrightness && !liveCodeBrightness.value) liveCodeBrightness.value = "68";
    if (liveCodeAudioAmount && !liveCodeAudioAmount.value) liveCodeAudioAmount.value = "72";
    if (liveCodeAudio) liveCodeAudio.checked = true;
    applyCodePreset(liveCodePreset ? liveCodePreset.value : "matrix", false);
    if (bgMode) bgMode.value = "black";
    setCameraMode("static", { instant: true });
  }
  if (newMode === "synth" && previousMode !== "synth") {
    setCameraMode("static", { instant: true });
    synthEchoSmooth = 0;
    synthSlitSmooth = 0;
  }

  if (liveOutputView && liveOutputView.value === "dome") {
    applyDomePresetForCurrentMode();
  }

  applyAspectRatioChange();
  updateCameraDeckVisibility();
  scheduleRender();
}

function updateCameraDeckVisibility() {
  if (!cameraDeckControls) return;
  const hideCamAnim = mode === "glitch" || mode === "fractal" || mode === "lines" || mode === "synth" || mode === "tunnel" || mode === "interior" || mode === "atlas" || mode === "materia" || mode === "code";
  if (cameraControlsDetails) {
    cameraControlsDetails.hidden = hideCamAnim;
    if (!hideCamAnim && !cameraControlsDetails.open) {
      // Keep compact by default; user can expand when needed.
      cameraControlsDetails.open = false;
    }
  }
  const title = cameraDeckControls.querySelector(".subgroup-title");
  const modeBox = cameraDeckControls.querySelector(".camera-mode-box");
  const speedWrap = cameraDeckControls.querySelector("label.slider input#cameraMoveSpeed")?.closest("label.slider");
  if (title) title.hidden = hideCamAnim;
  if (modeBox) modeBox.hidden = hideCamAnim;
  if (speedWrap) speedWrap.hidden = hideCamAnim;
}

function updateDomeControlsVisibility() {
  const domeDetails = document.getElementById("liveDomeSummary")?.closest("details");
  if (!domeDetails) return;
  domeDetails.open = true;
}

function ensureDomeRotationControls() {
  if (document.getElementById("domeRotate") && document.getElementById("domeAutoRotateSpeed")) return;
  const domeDetails = document.getElementById("liveDomeSummary")?.closest("details");
  if (!domeDetails) return;
  const domeGridWrap = domeGrid ? domeGrid.closest("label.slider") : null;
  const labels = locale === "en"
    ? {
        rot: "Dome Rotation",
        auto: "Dome Auto Rotate",
        speed: "Dome Auto Speed",
      }
    : {
        rot: "Rotación Domo",
        auto: "Auto rotación Domo",
        speed: "Velocidad auto Domo",
      };
  const html = `
    <label class="slider"><span>${labels.rot}</span><input type="range" id="domeRotate" min="-180" max="180" value="0" /><output for="domeRotate">0</output></label>
    <label class="toggle"><input type="checkbox" id="domeAutoRotate" /><span>${labels.auto}</span></label>
    <label class="slider"><span>${labels.speed}</span><input type="range" id="domeAutoRotateSpeed" min="-100" max="100" value="18" /><output for="domeAutoRotateSpeed">18</output></label>
  `;
  if (domeGridWrap) domeGridWrap.insertAdjacentHTML("beforebegin", html);
  else domeDetails.insertAdjacentHTML("beforeend", html);
  domeRotate = document.getElementById("domeRotate");
  domeAutoRotate = document.getElementById("domeAutoRotate");
  domeAutoRotateSpeed = document.getElementById("domeAutoRotateSpeed");
}

function resetAll() {
  setValues(defaults);
  particlesRandomTween = null;
  particlesCameraTween = null;
  depthMorphTween = null;
  fractalMorphTween = null;
  fractalCameraTween = null;
  kaleidoMorphTween = null;
  cleanFront3dActive = false;
  cleanFront3dSnapshot = null;
  if (cameraMoveSpeed) {
    cameraMoveSpeed.value = "28";
    updateQuickOutputById("cameraMoveSpeed", cameraMoveSpeed.value);
  }
  {
    const k = clamp((cameraMoveSpeed ? Number(cameraMoveSpeed.value) : 28) / 100, 0, 1);
    smoothCameraModeSpeed = 0.08 + Math.pow(k, 2.6) * 0.82;
  }
  cameraAnimTime = 0;
  lastCameraAnimTs = performance.now();
  smoothMotionRx = null;
  smoothMotionRy = null;
  smoothMotionRz = null;
  smoothMotionZoom = null;
  smoothMotionPanX = null;
  smoothMotionPanY = null;
  stageGeomPrevCx = null;
  stageGeomPrevCy = null;
  stageGeomMotionX = 0;
  stageGeomMotionY = 0;
  if (glitchTrailCanvas.width > 0 && glitchTrailCanvas.height > 0) {
    glitchTrailCtx.clearRect(0, 0, glitchTrailCanvas.width, glitchTrailCanvas.height);
  }
  glitchTrailBuffer = null;
  glitchPrevFrame = null;
  glitchTrailW = 0;
  glitchTrailH = 0;
  randomSeed = 1;
  pointerTiltX = 0;
  pointerTiltY = 0;
  dragRotateX = 0;
  dragRotateY = 0;
  cameraPanX = 0;
  cameraPanY = 0;
  domeViewYaw = 0;
  domeViewPitch = 0;
  isDraggingDome = false;
  domeAutoYaw = 0;
  domeAutoYawVel = 0;
  domeWarpScaleSmooth = 1;
  domeWarpFrameCounter = 0;
  lastDomeAnimTs = performance.now();
  if (domeRotate) domeRotate.value = "0";
  if (domeAutoRotate) domeAutoRotate.checked = false;
  if (domeAutoRotateSpeed) domeAutoRotateSpeed.value = "18";
  if (domeProjection) domeProjection.value = "equisolid";
  if (domeOverscan) domeOverscan.value = "6";
  if (domePreset) domePreset.value = "live-safe";
  if (domeAutoTuneByMode) domeAutoTuneByMode.checked = true;
  if (domeEdgeFeather) domeEdgeFeather.value = "18";
  if (domeRimClamp) domeRimClamp.value = "28";
  if (domeSeamBlend) domeSeamBlend.value = "22";
  if (liveParticlesCount) liveParticlesCount.value = "med";
  if (liveParticlesEmitter) liveParticlesEmitter.value = "grid";
  if (liveParticlesSize) liveParticlesSize.value = "42";
  if (liveParticlesDepth) liveParticlesDepth.value = "58";
  if (liveParticlesNoise) liveParticlesNoise.value = "0";
  if (liveParticlesAttractor) liveParticlesAttractor.value = "26";
  if (liveParticlesFlow) liveParticlesFlow.value = "0";
  if (liveParticlesCamMode) liveParticlesCamMode.value = "static";
  if (liveParticlesCamSpeed) liveParticlesCamSpeed.value = "0";
  if (liveParticlesCamX) liveParticlesCamX.value = "0";
  if (liveParticlesCamY) liveParticlesCamY.value = "0";
  if (liveParticlesCamZ) liveParticlesCamZ.value = "0";
  if (liveParticlesColorMode) liveParticlesColorMode.value = "source";
  if (liveParticlesStructure) liveParticlesStructure.value = "cloud";
  if (liveParticlesAudioSplit) liveParticlesAudioSplit.value = "basic";
  if (liveParticlesHue) liveParticlesHue.value = "0";
  if (liveParticlesAudio) liveParticlesAudio.checked = false;
  if (liveParticlesAudioAmount) liveParticlesAudioAmount.value = "54";
  if (liveParticlesFaceTrack) liveParticlesFaceTrack.checked = true;
  if (liveParticlesFaceDelay) liveParticlesFaceDelay.value = "24";
  if (liveParticlesFaceAmount) liveParticlesFaceAmount.value = "68";
  if (liveParticlesTrail) liveParticlesTrail.value = "0";
  if (liveParticlesFxStyle) liveParticlesFxStyle.value = "neon";
  if (liveParticlesFxAmount) liveParticlesFxAmount.value = "58";
  if (liveParticlesOrder) liveParticlesOrder.value = "48";
  if (liveParticlesDamping) liveParticlesDamping.value = "18";
  if (liveParticlesVortex) liveParticlesVortex.value = "22";
  if (liveParticlesSpawn) liveParticlesSpawn.value = "68";
  if (liveParticlesMotionThreshold) liveParticlesMotionThreshold.value = "32";
  if (liveParticlesDrift) liveParticlesDrift.value = "0";
  if (liveParticlesFocus) liveParticlesFocus.value = "38";
  if (liveParticlesGradientMode) liveParticlesGradientMode.value = "radial";
  if (liveParticlesColorMix) liveParticlesColorMix.value = "44";
  if (liveParticlesGradientSpread) liveParticlesGradientSpread.value = "52";
  if (liveParticlesGradientA) liveParticlesGradientA.value = "#00d8ff";
  if (liveParticlesGradientB) liveParticlesGradientB.value = "#ff2ea6";
  if (liveSynthPreset) liveSynthPreset.value = "drift";
  if (liveSynthBlend) liveSynthBlend.value = "58";
  if (liveSynthEcho) liveSynthEcho.value = "48";
  if (liveSynthSlit) liveSynthSlit.value = "22";
  if (liveSynthAxis) liveSynthAxis.value = "x";
  if (liveSynthDrift) liveSynthDrift.value = "34";
  if (liveSynthColor) liveSynthColor.value = "24";
  if (liveSynthAudio) liveSynthAudio.checked = true;
  if (liveSynthAudioAmount) liveSynthAudioAmount.value = "64";
  if (synthPrevCanvas.width > 0 && synthPrevCanvas.height > 0) {
    synthPrevCtx.clearRect(0, 0, synthPrevCanvas.width, synthPrevCanvas.height);
  }
  synthEchoSmooth = 0;
  synthSlitSmooth = 0;
  particlesBufferN = 0;
  particlesX = null;
  particlesY = null;
  particlesZ = null;
  particlesVX = null;
  particlesVY = null;
  particlesVZ = null;
  particlesLife = null;
  particlesU = null;
  particlesV = null;
  particlesSeed = null;
  particlesCamXSmooth = 0;
  particlesCamYSmooth = 0;
  particlesCamZSmooth = 0;
  particlesFaceHistory = [];
  cameraKeyState.up = false;
  cameraKeyState.down = false;
  cameraKeyState.left = false;
  cameraKeyState.right = false;
  if (live3dAnaglyph) live3dAnaglyph.checked = false;
  if (live3dAudioSync) live3dAudioSync.checked = false;
  if (live3dAnaglyphStrength) live3dAnaglyphStrength.value = "34";
  if (masterFxMode) masterFxMode.value = "none";
  if (masterFxAmount) masterFxAmount.value = "28";
  if (masterFxSpeed) masterFxSpeed.value = "42";
  if (masterFxColor) masterFxColor.value = "52";
  if (kaleidoFxEnabled) kaleidoFxEnabled.checked = false;
  if (kaleidoFxType) kaleidoFxType.value = KALEIDO_DEFAULT_TYPE;
  if (kaleidoFxAmount) kaleidoFxAmount.value = "38";
  if (kaleidoFxSpeed) kaleidoFxSpeed.value = "35";
  if (kaleidoFxSmooth) kaleidoFxSmooth.value = "44";
  if (kaleidoFxSegments) kaleidoFxSegments.value = "10";
  if (kaleidoFxZoom) kaleidoFxZoom.value = "200";
  kaleidoSegSmooth = 12;
  kaleidoFxScaleSmooth = 0.66;
  if (masterPrevCanvas.width > 0 && masterPrevCanvas.height > 0) {
    masterPrevCtx.clearRect(0, 0, masterPrevCanvas.width, masterPrevCanvas.height);
  }
  if (kaleidoPrevCanvas.width > 0 && kaleidoPrevCanvas.height > 0) {
    kaleidoPrevCtx.clearRect(0, 0, kaleidoPrevCanvas.width, kaleidoPrevCanvas.height);
  }
  updateMasterFxPadDot();
  updateKaleidoFxPadDot();
  const none = modeInputs.find((m) => m.value === "none");
  if (none) none.checked = true;
  if (liveFractalCamSpeed) liveFractalCamSpeed.value = "0";
  if (liveFractalVariant) liveFractalVariant.value = "a";
  if (liveFractalAudioMode) liveFractalAudioMode.value = "balanced";
  if (liveFractalShapeMorph) liveFractalShapeMorph.value = "0";
  if (liveFractalFlow) liveFractalFlow.value = "62";
  if (liveFractalTextureBlend) liveFractalTextureBlend.value = "screen";
  if (liveFractalOverlayLock) liveFractalOverlayLock.checked = true;
  if (liveFractalPalette) liveFractalPalette.value = "warm";
  if (liveFractalOptical) liveFractalOptical.value = "off";
  if (liveFractalOpticalAmount) liveFractalOpticalAmount.value = "0";
  if (liveFractalPolygonize) liveFractalPolygonize.value = "0";
  if (liveFractalWireStrength) liveFractalWireStrength.value = "62";
  if (liveFractalPointOverlay) liveFractalPointOverlay.value = "38";
  if (liveFractalSpin) liveFractalSpin.value = "0";
  if (liveFractalBreath) liveFractalBreath.value = "0";
  if (liveFractalAudio) liveFractalAudio.checked = false;
  fractalAudioBassSmooth = 0;
  fractalAudioMidSmooth = 0;
  fractalAudioHighSmooth = 0;
  fractalAudioEnergySmooth = 0;
  setCameraMode("static");
  setMode("none");
  updateCanvasEntryOverlay();
  scheduleRender();
}

function downloadCurrentImage() {
  const a = document.createElement("a");
  a.download = `pixel-error-${Date.now()}.png`;
  a.href = canvas.toDataURL("image/png");
  a.click();
}

function exportPhotoHQ() {
  if (!canvas || canvas.width <= 0 || canvas.height <= 0) return;
  // Capture the exact visible frame first to avoid black exports in heavy FX states.
  renderFrame();
  const srcW = canvas.width;
  const srcH = canvas.height;
  const scale = clamp(Math.min(EXPORT_CANVAS_MAX_W / srcW, EXPORT_CANVAS_MAX_H / srcH), 1, 2.5);
  const outW = Math.max(2, Math.round(srcW * scale));
  const outH = Math.max(2, Math.round(srcH * scale));
  const exportCanvas = document.createElement("canvas");
  exportCanvas.width = outW;
  exportCanvas.height = outH;
  const exportCtx = exportCanvas.getContext("2d");
  if (!exportCtx) return;
  exportCtx.imageSmoothingEnabled = true;
  exportCtx.imageSmoothingQuality = "high";
  exportCtx.drawImage(canvas, 0, 0, srcW, srcH, 0, 0, outW, outH);

  exportCanvas.toBlob(
    (blob) => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.download = `pixel-error-photo-hq-${Date.now()}.png`;
      a.href = url;
      a.click();
      setTimeout(() => URL.revokeObjectURL(url), 3000);
    },
    "image/png",
    1
  );
}

async function exportAnimation(kind) {
  if (!canvas.captureStream || typeof MediaRecorder === "undefined") {
    alert(t("export_unsupported"));
    return;
  }

  const durationMs = 5000;
  const stream = canvas.captureStream(24);
  const mimeCandidates =
    kind === "video"
      ? ["video/mp4;codecs=h264", "video/mp4", "video/webm;codecs=vp9", "video/webm"]
      : ["image/gif", "video/webm;codecs=vp9", "video/webm"];
  const mimeType = mimeCandidates.find((m) => MediaRecorder.isTypeSupported(m)) || "";
  const recorder = new MediaRecorder(stream, mimeType ? { mimeType } : undefined);
  const chunks = [];
  const prevAuto = Number(controls.autoRotate.value);

  recorder.ondataavailable = (e) => {
    if (e.data.size > 0) chunks.push(e.data);
  };

  recorder.start();
  recordingActive = true;
  if (prevAuto < 10) controls.autoRotate.value = 14;
  updateOutputs();
  scheduleRender();

  setTimeout(() => {
    recorder.stop();
  }, durationMs);

  recorder.onstop = () => {
    recordingActive = false;
    controls.autoRotate.value = prevAuto;
    updateOutputs();
    const blob = new Blob(chunks, { type: mimeType || "video/webm" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    const ext =
      kind === "gif" && mimeType === "image/gif"
        ? "gif"
        : mimeType.includes("mp4")
          ? "mp4"
          : "webm";
    a.download = `pixel-error-${kind}-5s-${Date.now()}.${ext}`;
    a.href = url;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 3000);
    if (kind === "gif" && ext !== "gif") {
      alert(t("export_gif_fallback"));
    } else if (kind === "video" && ext !== "mp4") {
      alert(t("export_mp4_fallback"));
    }
  };
}

function getRecordQualityProfile() {
  const key = recordQuality ? recordQuality.value : "medium";
  if (key === "low") {
    return { videoBitsPerSecond: 4_000_000, audioBitsPerSecond: 128_000 };
  }
  if (key === "high") {
    return { videoBitsPerSecond: 16_000_000, audioBitsPerSecond: 256_000 };
  }
  return { videoBitsPerSecond: 8_000_000, audioBitsPerSecond: 192_000 };
}

function getRecordCanvasTargetSize() {
  const sourceW = canvas.width || 1280;
  const sourceH = canvas.height || 720;
  const ratio = sourceW / Math.max(1, sourceH);
  const targetH = Number(recordResolution ? recordResolution.value : "auto");
  if (!Number.isFinite(targetH) || targetH <= 0) {
    return { width: sourceW, height: sourceH };
  }
  let width = Math.round(targetH * ratio);
  let height = Math.round(targetH);
  // Keep dimensions even for better codec compatibility.
  if (width % 2 !== 0) width += 1;
  if (height % 2 !== 0) height += 1;
  return { width: Math.max(2, width), height: Math.max(2, height) };
}

function stopLiveRecordBridge() {
  if (liveRecordDrawTimer) {
    clearInterval(liveRecordDrawTimer);
    liveRecordDrawTimer = null;
  }
  liveRecordCanvas = null;
  liveRecordCtx = null;
}

function startLiveRecordBridge() {
  stopLiveRecordBridge();
  const target = getRecordCanvasTargetSize();
  liveRecordCanvas = document.createElement("canvas");
  liveRecordCanvas.width = target.width;
  liveRecordCanvas.height = target.height;
  liveRecordCtx = liveRecordCanvas.getContext("2d", { alpha: false });
  if (!liveRecordCtx) return null;
  liveRecordCtx.imageSmoothingEnabled = true;
  liveRecordCtx.clearRect(0, 0, target.width, target.height);
  liveRecordCtx.drawImage(canvas, 0, 0, target.width, target.height);
  const frameMs = 1000 / 24;
  liveRecordDrawTimer = setInterval(() => {
    if (!liveRecordCtx || !liveRecordCanvas) return;
    liveRecordCtx.drawImage(canvas, 0, 0, liveRecordCanvas.width, liveRecordCanvas.height);
  }, frameMs);
  return liveRecordCanvas.captureStream(24);
}

function updateRecordingButtons() {
  if (!recordStartBtn || !recordSaveBtn) return;
  recordStartBtn.disabled = false;
  recordSaveBtn.disabled = liveRecordingState === "idle";
  setButtonActionLabel(recordSaveBtn, t("save_short"));
  if (liveRecordingState === "idle" || liveRecordingState === "stopped") {
    setButtonActionLabel(recordStartBtn, t("record_short"));
    if (recordStartIcon) recordStartIcon.textContent = "REC";
  } else if (liveRecordingState === "recording") {
    setButtonActionLabel(recordStartBtn, t("pause"));
    if (recordStartIcon) recordStartIcon.textContent = "||";
  } else {
    setButtonActionLabel(recordStartBtn, t("play"));
    if (recordStartIcon) recordStartIcon.textContent = ">";
  }
  if (recordingIndicator && recordingStatusText) {
    recordingIndicator.classList.remove("recording", "paused");
    if (liveRecordingState === "recording") {
      recordingIndicator.classList.add("recording");
      recordingStatusText.textContent = t("record_status_recording");
    } else if (liveRecordingState === "paused") {
      recordingIndicator.classList.add("paused");
      recordingStatusText.textContent = t("record_status_paused");
    } else {
      recordingStatusText.textContent = t("record_status_idle");
    }
  }
}

function createLiveRecorder() {
  if (!liveRecordingStream || !liveRecordingMimeType) return null;
  try {
    return new MediaRecorder(liveRecordingStream, {
      mimeType: liveRecordingMimeType,
      videoBitsPerSecond: liveRecordingVideoBitrate,
      audioBitsPerSecond: liveRecordingAudioBitrate,
    });
  } catch {
    return null;
  }
}

function sanitizeFileBaseName(name, fallback) {
  const base = (name || fallback || "clip")
    .trim()
    .replace(/[\\/:*?"<>|]+/g, "-")
    .replace(/\s+/g, "_")
    .replace(/_+/g, "_")
    .slice(0, 140);
  return base || fallback || "clip";
}

function applyClipBrandSuffix(name) {
  const suffix = "B.ZU.AL_Studios_Clip";
  const safe = sanitizeFileBaseName(name, "pixel-error-live");
  const cleaned = safe.replace(/[-_ ]?B\.?ZU\.?AL[_ -]?Studios[_ -]?Clip$/i, "");
  return `${sanitizeFileBaseName(cleaned, "pixel-error-live")}-` + suffix;
}

function closeRecordNameDialog(value) {
  if (recordNameModal) recordNameModal.hidden = true;
  const resolver = recordNameDialogResolve;
  recordNameDialogResolve = null;
  if (resolver) resolver(value);
}

function askRecordingFileName(defaultName) {
  if (!recordNameModal || !recordNameInput) return Promise.resolve(defaultName);
  recordNameModal.hidden = false;
  recordNameInput.value = sanitizeFileBaseName(defaultName, "pixel-error-live");
  setTimeout(() => {
    recordNameInput.focus();
    recordNameInput.select();
  }, 0);
  return new Promise((resolve) => {
    recordNameDialogResolve = resolve;
  });
}

function startRecorderSegment() {
  const recorder = createLiveRecorder();
  if (!recorder) {
    alert(t("recording_mp4_required"));
    return false;
  }

  liveRecorder = recorder;
  liveRecorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) liveRecordingChunks.push(e.data);
  };
  liveRecorder.onstop = () => {
    if (liveFinalizePending) {
      finalizeLiveRecording();
      return;
    }
    if (livePausePending) {
      livePausePending = false;
      liveRecordingState = "paused";
      updateRecordingButtons();
      return;
    }
    if (liveRecordingState !== "idle") {
      liveRecordingState = "paused";
      updateRecordingButtons();
    }
  };
  liveRecorder.start(220);
  liveRecordingState = "recording";
  updateRecordingButtons();
  return true;
}

async function finalizeLiveRecording() {
  if (!liveRecordingChunks || liveRecordingChunks.length === 0) {
    liveRecordingState = "idle";
    updateRecordingButtons();
    return;
  }
  const type = liveRecordingMimeType || "video/mp4";
  const blob = new Blob(liveRecordingChunks, { type });
  const url = URL.createObjectURL(blob);
  const defaultName = `pixel-error-live-${Date.now()}`;
  const chosen = await askRecordingFileName(defaultName);
  const branded = applyClipBrandSuffix(chosen || defaultName);
  const safeBase = sanitizeFileBaseName(branded, applyClipBrandSuffix(defaultName));
  const a = document.createElement("a");
  a.download = `${safeBase}.${liveRecordingExt}`;
  a.href = url;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 3000);
  if (liveRecordingStream) liveRecordingStream.getTracks().forEach((t) => t.stop());
  if (liveDisplayStream) liveDisplayStream.getTracks().forEach((t) => t.stop());
  stopLiveRecordBridge();
  liveRecorder = null;
  liveRecordingStream = null;
  liveDisplayStream = null;
  liveRecordingChunks = [];
  liveRecordingMimeType = "";
  livePausePending = false;
  liveFinalizePending = false;
  liveRecordingState = "idle";
  updateRecordingButtons();
}

function startLiveRecording() {
  if (!canvas.captureStream || typeof MediaRecorder === "undefined") {
    alert(t("recording_unsupported"));
    return;
  }
  if (liveRecordingState !== "idle" && liveRecordingState !== "stopped") return;

  const start = async () => {
    const useScreen = recordSource && recordSource.value === "screen";
    const profile = getRecordQualityProfile();
    liveRecordingVideoBitrate = profile.videoBitsPerSecond;
    liveRecordingAudioBitrate = profile.audioBitsPerSecond;
    let sourceStream = null;

    try {
      if (useScreen) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getDisplayMedia) {
          alert(t("recording_screen_fail"));
          return;
        }
        liveDisplayStream = await navigator.mediaDevices.getDisplayMedia({
          video: { frameRate: { ideal: 24, max: 24 } },
          audio: true,
        });
        sourceStream = liveDisplayStream;
      } else {
        sourceStream = startLiveRecordBridge();
        if (!sourceStream) {
          alert(t("recording_unsupported"));
          return;
        }
      }
    } catch {
      stopLiveRecordBridge();
      alert(t("recording_screen_fail"));
      return;
    }

    const merged = new MediaStream([...(sourceStream ? sourceStream.getVideoTracks() : [])]);
    const hasScreenAudio = sourceStream && sourceStream.getAudioTracks().length > 0;
    if (sourceStream) {
      sourceStream.getAudioTracks().forEach((t) => merged.addTrack(t));
    }
    if (micActive && micStream && (!hasScreenAudio || !useScreen)) {
      micStream.getAudioTracks().forEach((t) => merged.addTrack(t));
    }

    const mp4Type =
      ["video/mp4;codecs=h264,aac", "video/mp4;codecs=avc1.42E01E,mp4a.40.2", "video/mp4"].find((m) =>
        MediaRecorder.isTypeSupported(m)
      ) || "";

    if (!mp4Type) {
      if (liveDisplayStream) {
        liveDisplayStream.getTracks().forEach((t) => t.stop());
        liveDisplayStream = null;
      }
      stopLiveRecordBridge();
      merged.getTracks().forEach((t) => t.stop());
      alert(t("recording_mp4_required"));
      return;
    }

    liveRecordingChunks = [];
    liveRecordingStream = merged;
    liveRecordingMimeType = mp4Type;
    livePausePending = false;
    liveFinalizePending = false;
    if (!createLiveRecorder()) {
      merged.getTracks().forEach((t) => t.stop());
      if (liveDisplayStream) {
        liveDisplayStream.getTracks().forEach((t) => t.stop());
        liveDisplayStream = null;
      }
      stopLiveRecordBridge();
      alert(t("recording_mp4_required"));
      return;
    }
    liveRecordingExt = "mp4";
    startRecorderSegment();
  };

  start();
}

function toggleLiveRecording() {
  if (liveRecordingState === "idle" || liveRecordingState === "stopped") {
    startLiveRecording();
    return;
  }
  if (liveRecordingState === "recording" || liveRecordingState === "paused") {
    pauseOrResumeLiveRecording();
  }
}

function pauseOrResumeLiveRecording() {
  if (liveRecordingState === "recording") {
    if (!liveRecorder || liveRecorder.state === "inactive") return;
    livePausePending = true;
    liveRecorder.stop();
  } else if (liveRecordingState === "paused") {
    livePausePending = false;
    liveFinalizePending = false;
    startRecorderSegment();
  }
}

function saveLiveRecording() {
  if (liveRecordingState !== "recording" && liveRecordingState !== "paused" && liveRecordingState !== "stopped") {
    return;
  }
  if (liveRecordingState === "paused" || !liveRecorder || liveRecorder.state === "inactive") {
    finalizeLiveRecording();
    return;
  }
  liveFinalizePending = true;
  liveRecorder.stop();
}

imageInput.addEventListener("change", (e) => {
  const file = e.target.files?.[0];
  if (file) loadImageToCanvas(file);
  updateCanvasEntryOverlay();
});

if (canvasOverlayImageBtn) {
  canvasOverlayImageBtn.addEventListener("click", () => {
    if (imageInput) imageInput.click();
  });
}
if (canvasOverlayWebcamBtn) {
  canvasOverlayWebcamBtn.addEventListener("click", () => {
    toggleWebcam();
  });
}
if (canvasOverlayNoInputBtn) {
  canvasOverlayNoInputBtn.addEventListener("click", () => {
    activateNoInputMode();
  });
}
if (canvasFullscreenBtn) {
  canvasFullscreenBtn.addEventListener("click", () => {
    toggleCanvasFullscreen();
  });
}
function applyQuickInputSelection() {
  if (!quickInputSelect) return;
  const v = quickInputSelect.value;
  if (v === "image") {
    if (imageInput) imageInput.click();
    return;
  }
  if (v === "webcam") {
    toggleWebcam();
    return;
  }
  if (v === "noinput") {
    activateNoInputMode();
    return;
  }
  if (v === "clear") {
    clearVisualInput();
  }
}

if (quickInputSelect) {
  quickInputSelect.addEventListener("change", () => {
    applyQuickInputSelection();
  });
}

if (moduleRouteButtons.length > 0) {
  moduleRouteButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const route = btn.dataset.moduleRoute || "glitch";
      setWorkspacePanel("live");
      setLiveModeTab(route === "depth" || route === "particles" || route === "fractal" || route === "lines" || route === "tunnel" || route === "interior" || route === "atlas" || route === "materia" || route === "code" ? route : "glitch");
      scheduleRender();
    });
  });
}

modeInputs.forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked) setMode(input.value);
  });
});

allIds.forEach((id) => {
  controls[id].addEventListener("input", () => {
    updateOutputs();
    if (fractalIds.includes(id) && currentWorkspacePanel === "studio" && studioActiveTab === "fractal") {
      syncLegacyFractalRackToLive({ skipRender: true });
    }
    scheduleRender();
  });
});

metaControls.forEach((control) => {
  control.addEventListener("input", () => {
    updateOutputs();
    scheduleRender();
  });
});

presetSelect.addEventListener("change", () => {
  applyPreset();
  scheduleRender();
});

if (fractalPattern) {
  fractalPattern.addEventListener("change", () => {
    syncLegacyFractalRackToLive({ skipRender: true });
    scheduleRender();
  });
}

if (fractalSource) {
  fractalSource.addEventListener("change", () => {
    syncLegacyFractalRackToLive({ skipRender: true });
    scheduleRender();
  });
}
if (bgMode) {
  bgMode.addEventListener("change", () => {
    syncLiveBackgroundQuickUi();
    scheduleRender();
  });
}
if (bgPalette) {
  bgPalette.addEventListener("change", () => {
    syncLiveBackgroundQuickUi();
    scheduleRender();
  });
}
if (bgColorA) {
  bgColorA.addEventListener("input", () => {
    syncLiveBackgroundQuickUi();
    scheduleRender();
  });
}
if (bgColorB) {
  bgColorB.addEventListener("input", () => {
    syncLiveBackgroundQuickUi();
    scheduleRender();
  });
}
if (aspectRatioSelect) {
  aspectRatioSelect.addEventListener("change", () => {
    applyAspectRatioChange();
  });
}
if (webcamFramingSelect) {
  webcamFramingSelect.addEventListener("change", () => {
    scheduleRender();
  });
}
if (canvasRenderQualitySelect) {
  canvasRenderQualitySelect.addEventListener("change", () => {
    applyAspectRatioChange();
    if (webcamActive && webcamStream) {
      const track = webcamStream.getVideoTracks?.()[0];
      if (track && track.applyConstraints) {
        const q = getRenderQualityProfile();
        track
          .applyConstraints({
            width: { ideal: q.webcamIdealW, max: 3840 },
            height: { ideal: q.webcamIdealH, max: 2160 },
            frameRate: { ideal: 30, max: 60 },
          })
          .catch(() => {});
      }
    }
    scheduleRender();
  });
}

if (depthPad) {
  let padActive = false;
  depthPad.addEventListener("mousedown", (e) => {
    padActive = true;
    applyDepthPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyDepthPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  depthPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyDepthPadFromPointer(t.clientX, t.clientY);
  });
  depthPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyDepthPadFromPointer(t.clientX, t.clientY);
  });
}

if (studioFractalPadA) {
  let padActive = false;
  studioFractalPadA.addEventListener("mousedown", (e) => {
    padActive = true;
    applyStudioFractalPadAFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyStudioFractalPadAFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  studioFractalPadA.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyStudioFractalPadAFromPointer(t.clientX, t.clientY);
  });
  studioFractalPadA.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyStudioFractalPadAFromPointer(t.clientX, t.clientY);
  });
}

if (studioFractalPadB) {
  let padActive = false;
  studioFractalPadB.addEventListener("mousedown", (e) => {
    padActive = true;
    applyStudioFractalPadBFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyStudioFractalPadBFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  studioFractalPadB.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyStudioFractalPadBFromPointer(t.clientX, t.clientY);
  });
  studioFractalPadB.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyStudioFractalPadBFromPointer(t.clientX, t.clientY);
  });
}

if (liveModPad) {
  let padActive = false;
  liveModPad.addEventListener("mousedown", (e) => {
    padActive = true;
    applyLiveModPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyLiveModPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  liveModPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLiveModPadFromPointer(t.clientX, t.clientY);
  });
  liveModPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLiveModPadFromPointer(t.clientX, t.clientY);
  });
}

if (liveGlitchPad) {
  liveGlitchPad.addEventListener("mousedown", (e) => {
    liveGlitchPadDragging = true;
    applyLiveGlitchPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!liveGlitchPadDragging) return;
    applyLiveGlitchPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    liveGlitchPadDragging = false;
  });
  liveGlitchPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    liveGlitchPadDragging = true;
    applyLiveGlitchPadFromPointer(t.clientX, t.clientY);
  });
  liveGlitchPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLiveGlitchPadFromPointer(t.clientX, t.clientY);
  });
  liveGlitchPad.addEventListener("touchend", () => {
    liveGlitchPadDragging = false;
  });
  liveGlitchPad.addEventListener("touchcancel", () => {
    liveGlitchPadDragging = false;
  });
}

if (liveGlitchPadB) {
  liveGlitchPadB.addEventListener("mousedown", (e) => {
    liveGlitchPadBDragging = true;
    applyLiveGlitchPadBFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!liveGlitchPadBDragging) return;
    applyLiveGlitchPadBFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    liveGlitchPadBDragging = false;
  });
  liveGlitchPadB.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    liveGlitchPadBDragging = true;
    applyLiveGlitchPadBFromPointer(t.clientX, t.clientY);
  });
  liveGlitchPadB.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLiveGlitchPadBFromPointer(t.clientX, t.clientY);
  });
  liveGlitchPadB.addEventListener("touchend", () => {
    liveGlitchPadBDragging = false;
  });
  liveGlitchPadB.addEventListener("touchcancel", () => {
    liveGlitchPadBDragging = false;
  });
}

if (liveGlitchPadC) {
  liveGlitchPadC.addEventListener("mousedown", (e) => {
    liveGlitchPadCDragging = true;
    applyLiveGlitchPadCFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!liveGlitchPadCDragging) return;
    applyLiveGlitchPadCFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    liveGlitchPadCDragging = false;
  });
  liveGlitchPadC.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    liveGlitchPadCDragging = true;
    applyLiveGlitchPadCFromPointer(t.clientX, t.clientY);
  });
  liveGlitchPadC.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLiveGlitchPadCFromPointer(t.clientX, t.clientY);
  });
  liveGlitchPadC.addEventListener("touchend", () => {
    liveGlitchPadCDragging = false;
  });
  liveGlitchPadC.addEventListener("touchcancel", () => {
    liveGlitchPadCDragging = false;
  });
}

if (liveSynthPad) {
  liveSynthPad.addEventListener("mousedown", (e) => {
    liveSynthPadDragging = true;
    applyLiveSynthPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!liveSynthPadDragging) return;
    applyLiveSynthPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    liveSynthPadDragging = false;
  });
  liveSynthPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    liveSynthPadDragging = true;
    applyLiveSynthPadFromPointer(t.clientX, t.clientY);
  });
  liveSynthPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLiveSynthPadFromPointer(t.clientX, t.clientY);
  });
  liveSynthPad.addEventListener("touchend", () => {
    liveSynthPadDragging = false;
  });
  liveSynthPad.addEventListener("touchcancel", () => {
    liveSynthPadDragging = false;
  });
}

if (live3dPointsPad) {
  let padActive = false;
  live3dPointsPad.addEventListener("mousedown", (e) => {
    padActive = true;
    applyLive3dPointsPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyLive3dPointsPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  live3dPointsPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dPointsPadFromPointer(t.clientX, t.clientY);
  });
  live3dPointsPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dPointsPadFromPointer(t.clientX, t.clientY);
  });
}

if (live3dMeshPad) {
  let padActive = false;
  live3dMeshPad.addEventListener("mousedown", (e) => {
    padActive = true;
    applyLive3dMeshPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyLive3dMeshPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  live3dMeshPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dMeshPadFromPointer(t.clientX, t.clientY);
  });
  live3dMeshPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dMeshPadFromPointer(t.clientX, t.clientY);
  });
}

if (live3dPadB) {
  let padActive = false;
  live3dPadB.addEventListener("mousedown", (e) => {
    padActive = true;
    applyLive3dPadBFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyLive3dPadBFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  live3dPadB.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dPadBFromPointer(t.clientX, t.clientY);
  });
  live3dPadB.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dPadBFromPointer(t.clientX, t.clientY);
  });
}

if (live3dCamPad) {
  let padActive = false;
  live3dCamPad.addEventListener("mousedown", (e) => {
    padActive = true;
    applyLive3dCamPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyLive3dCamPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  live3dCamPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dCamPadFromPointer(t.clientX, t.clientY);
  });
  live3dCamPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dCamPadFromPointer(t.clientX, t.clientY);
  });
}

if (live3dRotPad) {
  let padActive = false;
  live3dRotPad.addEventListener("mousedown", (e) => {
    padActive = true;
    applyLive3dRotPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyLive3dRotPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  live3dRotPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dRotPadFromPointer(t.clientX, t.clientY);
  });
  live3dRotPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dRotPadFromPointer(t.clientX, t.clientY);
  });
}

if (live3dColorPad) {
  let padActive = false;
  live3dColorPad.addEventListener("mousedown", (e) => {
    padActive = true;
    applyLive3dColorPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!padActive) return;
    applyLive3dColorPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    padActive = false;
  });
  live3dColorPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dColorPadFromPointer(t.clientX, t.clientY);
  });
  live3dColorPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLive3dColorPadFromPointer(t.clientX, t.clientY);
  });
}

if (liveModeGlitchBtn) liveModeGlitchBtn.addEventListener("click", () => setLiveModeTab("glitch"));
if (liveModeFractalBtn) liveModeFractalBtn.addEventListener("click", () => setLiveModeTab("fractal"));
if (liveMode3dBtn) liveMode3dBtn.addEventListener("click", () => setLiveModeTab("depth"));
if (liveModeParticlesBtn) liveModeParticlesBtn.addEventListener("click", () => setLiveModeTab("particles"));
if (liveModeLinesBtn) liveModeLinesBtn.addEventListener("click", () => setLiveModeTab("lines"));
if (liveModeRandomBtn) {
  liveModeRandomBtn.addEventListener("click", () => {
    cancelMorphTweensForCurrentMode();
    randomizeActiveMode();
    scheduleRender();
  });
}
if (liveGlitchIntensity) {
  liveGlitchIntensity.addEventListener("input", () => {
    applyLiveGlitchMacros();
    scheduleRender();
  });
}
if (liveGlitchColor) {
  liveGlitchColor.addEventListener("input", () => {
    applyLiveGlitchMacros();
    scheduleRender();
  });
}
if (liveGlitchError) {
  liveGlitchError.addEventListener("input", () => {
    applyLiveGlitchMacros();
    scheduleRender();
  });
}
if (liveGlitchTracking) {
  liveGlitchTracking.addEventListener("input", () => {
    applyLiveGlitchMacros();
    scheduleRender();
  });
}
if (liveGlitchTrail) {
  liveGlitchTrail.addEventListener("input", () => {
    applyLiveGlitchMacros();
    scheduleRender();
  });
}
if (liveGlitchAnim) {
  liveGlitchAnim.addEventListener("input", () => {
    applyLiveGlitchMacros();
    scheduleRender();
  });
}
if (liveSynthPreset) {
  liveSynthPreset.addEventListener("change", () => {
    applyLiveSynthPreset(liveSynthPreset.value);
  });
}
[
  liveSynthBlend,
  liveSynthEcho,
  liveSynthSlit,
  liveSynthDrift,
  liveSynthColor,
  liveSynthAudioAmount,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (liveSynthAxis) {
  liveSynthAxis.addEventListener("change", () => {
    scheduleRender();
  });
}
if (liveSynthAudio) {
  liveSynthAudio.addEventListener("change", () => {
    scheduleRender();
  });
}
if (liveFractalQuality) {
  liveFractalQuality.addEventListener("change", () => {
    scheduleRender();
  });
}
if (liveFractalPreset) {
  liveFractalPreset.addEventListener("change", () => {
    applyFractalPreset(liveFractalPreset.value);
  });
}
if (liveFractalDomeMode) {
  liveFractalDomeMode.addEventListener("change", () => {
    const v = liveFractalDomeMode.value;
    if (!liveOutputView || !domeSourceMap) return;
    if (v === "off") {
      liveOutputView.value = "normal";
    } else if (v === "dome-equirect") {
      liveOutputView.value = "dome";
      applyDomePreset("equirect180", { silent: true });
    } else {
      liveOutputView.value = "dome";
      applyDomePreset("fractal", { silent: true });
    }
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveFractalAudio) {
  liveFractalAudio.addEventListener("change", () => {
    scheduleRender();
  });
}
[
  liveFractalBehavior,
  liveFractalAudioMode,
  liveFractalCameraMode,
  liveFractalVariant,
  liveFractalShape,
  liveFractalShapeB,
  liveFractalTexture,
  liveFractalTexture2,
  liveFractalTextureBlend,
  liveFractalOverlayLock,
  liveFractalPalette,
  liveFractalRenderMode,
  liveFractalOptical,
  liveFractalStyle,
  liveFractalBackground,
  liveFractalFlatColor,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("change", () => {
    scheduleRender();
  });
});
[
  liveFractalCamSpeed,
  liveFractalDistance,
  liveFractalShapeMorph,
  liveFractalTextureMix,
  liveFractalOpticalAmount,
  liveFractalPolygonize,
  liveFractalWireStrength,
  liveFractalPointOverlay,
  liveFractalSymmetry,
  liveFractalPower,
  liveFractalFog,
  liveFractalGlow,
  liveFractalLight,
  liveFractalSpin,
  liveFractalBreath,
  liveFractalFlow,
  liveFractalWarmth,
  liveFractalAudioGain,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (live3dPoints) {
  live3dPoints.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dMesh) {
  live3dMesh.addEventListener("input", () => {
    targetMeshAmount = null;
    smoothMeshAmount = Number(live3dMesh.value);
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dPointOpacity) {
  live3dPointOpacity.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (live3dMeshOpacity) {
  live3dMeshOpacity.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (live3dDepthWarp) {
  live3dDepthWarp.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dSeparation) {
  live3dSeparation.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dBackground) {
  live3dBackground.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dOrganic) {
  live3dOrganic.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dLight) {
  live3dLight.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dExposure) {
  live3dExposure.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dAmbient) {
  live3dAmbient.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dLightAzimuth) {
  live3dLightAzimuth.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dLightElevation) {
  live3dLightElevation.addEventListener("input", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dRenderEngine) {
  live3dRenderEngine.addEventListener("change", () => {
    setDepthRenderEngine(live3dRenderEngine.value);
    scheduleRender();
  });
}
if (live3dLightingMode) {
  live3dLightingMode.addEventListener("change", () => {
    applyLive3dMacros();
    scheduleRender();
  });
}
if (live3dFxMode) {
  live3dFxMode.addEventListener("change", () => {
    scheduleRender();
  });
}
if (live3dFxAmount) {
  live3dFxAmount.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (live3dAudioSync) {
  live3dAudioSync.addEventListener("change", () => {
    scheduleRender();
  });
}
if (live3dAnaglyph) {
  live3dAnaglyph.addEventListener("change", () => {
    scheduleRender();
  });
}
if (live3dAnaglyphStrength) {
  live3dAnaglyphStrength.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (live3dBgMode) {
  live3dBgMode.addEventListener("change", () => {
    applyLiveBackgroundQuickFrom({
      mode: live3dBgMode,
      palette: live3dBgPalette,
      colorA: live3dBgColorA,
      colorB: live3dBgColorB,
    });
  });
}
if (live3dBgPalette) {
  live3dBgPalette.addEventListener("change", () => {
    applyLiveBackgroundQuickFrom({
      mode: live3dBgMode,
      palette: live3dBgPalette,
      colorA: live3dBgColorA,
      colorB: live3dBgColorB,
    });
  });
}
if (live3dBgColorA) {
  live3dBgColorA.addEventListener("input", () => {
    applyLiveBackgroundQuickFrom({
      mode: live3dBgMode,
      palette: live3dBgPalette,
      colorA: live3dBgColorA,
      colorB: live3dBgColorB,
    });
  });
}
if (live3dBgColorB) {
  live3dBgColorB.addEventListener("input", () => {
    applyLiveBackgroundQuickFrom({
      mode: live3dBgMode,
      palette: live3dBgPalette,
      colorA: live3dBgColorA,
      colorB: live3dBgColorB,
    });
  });
}
if (masterFxMode) {
  masterFxMode.addEventListener("change", () => {
    masterFxSmoothMode = "";
    if (masterPrevCanvas.width > 0 && masterPrevCanvas.height > 0) {
      masterPrevCtx.clearRect(0, 0, masterPrevCanvas.width, masterPrevCanvas.height);
    }
    updateMasterFxSummaryStatus();
    updateMasterFxPadDot();
    scheduleRender();
  });
}
if (masterFxAmount) {
  masterFxAmount.addEventListener("input", () => {
    updateMasterFxPadDot();
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (masterFxSpeed) {
  masterFxSpeed.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (masterFxColor) {
  masterFxColor.addEventListener("input", () => {
    updateMasterFxPadDot();
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (masterFxPad) {
  let dragging = false;
  masterFxPad.addEventListener("mousedown", (e) => {
    dragging = true;
    applyMasterFxPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    applyMasterFxPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    dragging = false;
  });
  masterFxPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyMasterFxPadFromPointer(t.clientX, t.clientY);
  });
  masterFxPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    e.preventDefault();
    applyMasterFxPadFromPointer(t.clientX, t.clientY);
  });
}
if (kaleidoFxEnabled) {
  kaleidoFxEnabled.addEventListener("change", () => {
    if (kaleidoPrevCanvas.width > 0 && kaleidoPrevCanvas.height > 0) {
      kaleidoPrevCtx.clearRect(0, 0, kaleidoPrevCanvas.width, kaleidoPrevCanvas.height);
    }
    updateKaleidoFxSummaryStatus();
    scheduleRender();
  });
}
if (kaleidoFxType) {
  kaleidoFxType.addEventListener("change", () => {
    updateKaleidoFxSummaryStatus();
    scheduleRender();
  });
}
if (kaleidoFxAmount) kaleidoFxAmount.addEventListener("input", () => {
  updateKaleidoFxPadDot();
  updateLiveQuickOutputs();
  scheduleRender();
});
if (kaleidoFxSpeed) kaleidoFxSpeed.addEventListener("input", () => {
  updateLiveQuickOutputs();
  scheduleRender();
});
if (kaleidoFxSmooth) kaleidoFxSmooth.addEventListener("input", () => {
  updateKaleidoFxPadDot();
  updateLiveQuickOutputs();
  scheduleRender();
});
if (kaleidoFxSegments) kaleidoFxSegments.addEventListener("input", () => {
  updateLiveQuickOutputs();
  scheduleRender();
});
if (kaleidoFxZoom) kaleidoFxZoom.addEventListener("input", () => {
  updateLiveQuickOutputs();
  scheduleRender();
});
if (kaleidoFxPad) {
  let dragging = false;
  kaleidoFxPad.addEventListener("mousedown", (e) => {
    dragging = true;
    applyKaleidoFxPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    applyKaleidoFxPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    dragging = false;
  });
  kaleidoFxPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyKaleidoFxPadFromPointer(t.clientX, t.clientY);
  });
  kaleidoFxPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    e.preventDefault();
    applyKaleidoFxPadFromPointer(t.clientX, t.clientY);
  });
}
if (liveParticlesCount) {
  liveParticlesCount.addEventListener("change", () => {
    particlesBufferN = 0;
    scheduleRender();
  });
}
if (liveParticlesEmitter) {
  liveParticlesEmitter.addEventListener("change", () => {
    particlesBufferN = 0;
    scheduleRender();
  });
}
if (liveParticlesColorMode) {
  liveParticlesColorMode.addEventListener("change", () => {
    scheduleRender();
  });
}
if (liveParticlesStructure) {
  liveParticlesStructure.addEventListener("change", () => {
    tuneParticlesStructureProfile(liveParticlesStructure.value, { withJitter: false });
    particlesBufferN = 0;
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveParticlesAudioSplit) {
  liveParticlesAudioSplit.addEventListener("change", () => {
    scheduleRender();
  });
}
if (liveParticlesFxStyle) {
  liveParticlesFxStyle.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveParticlesGradientMode) {
  liveParticlesGradientMode.addEventListener("change", () => {
    scheduleRender();
  });
}
if (liveParticlesAudio) {
  liveParticlesAudio.addEventListener("change", () => {
    scheduleRender();
  });
}
if (liveParticlesFaceTrack) {
  liveParticlesFaceTrack.addEventListener("change", () => {
    particlesFaceHistory = [];
    scheduleRender();
  });
}
if (liveParticlesCamMode) {
  liveParticlesCamMode.addEventListener("change", () => {
    particlesCamModeBlendStart = 0;
    scheduleRender();
  });
}
if (liveParticlesGradientA) {
  liveParticlesGradientA.addEventListener("input", () => {
    scheduleRender();
  });
}
if (liveParticlesGradientB) {
  liveParticlesGradientB.addEventListener("input", () => {
    scheduleRender();
  });
}
if (liveParticlesBgMode) {
  liveParticlesBgMode.addEventListener("change", () => {
    applyLiveBackgroundQuickFrom({
      mode: liveParticlesBgMode,
      palette: liveParticlesBgPalette,
      colorA: liveParticlesBgColorA,
      colorB: liveParticlesBgColorB,
    });
  });
}
if (liveParticlesBgPalette) {
  liveParticlesBgPalette.addEventListener("change", () => {
    applyLiveBackgroundQuickFrom({
      mode: liveParticlesBgMode,
      palette: liveParticlesBgPalette,
      colorA: liveParticlesBgColorA,
      colorB: liveParticlesBgColorB,
    });
  });
}
if (liveParticlesBgColorA) {
  liveParticlesBgColorA.addEventListener("input", () => {
    applyLiveBackgroundQuickFrom({
      mode: liveParticlesBgMode,
      palette: liveParticlesBgPalette,
      colorA: liveParticlesBgColorA,
      colorB: liveParticlesBgColorB,
    });
  });
}
if (liveParticlesBgColorB) {
  liveParticlesBgColorB.addEventListener("input", () => {
    applyLiveBackgroundQuickFrom({
      mode: liveParticlesBgMode,
      palette: liveParticlesBgPalette,
      colorA: liveParticlesBgColorA,
      colorB: liveParticlesBgColorB,
    });
  });
}
[
  liveParticlesSize,
  liveParticlesDepth,
  liveParticlesNoise,
  liveParticlesAttractor,
  liveParticlesFlow,
  liveParticlesCamSpeed,
  liveParticlesCamX,
  liveParticlesCamY,
  liveParticlesCamZ,
  liveParticlesHue,
  liveParticlesAudioAmount,
  liveParticlesFaceDelay,
  liveParticlesFaceAmount,
  liveParticlesTrail,
  liveParticlesFxAmount,
  liveParticlesOrder,
  liveParticlesDamping,
  liveParticlesVortex,
  liveParticlesSpawn,
  liveParticlesMotionThreshold,
  liveParticlesDrift,
  liveParticlesFocus,
  liveParticlesColorMix,
  liveParticlesGradientSpread,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    if (control === liveParticlesFaceDelay || control === liveParticlesFaceAmount) {
      particlesFaceHistory = [];
    }
    scheduleRender();
  });
});
[
  liveLinesMacro,
  liveLinesDensity,
  liveLinesThickness,
  liveLinesCurvature,
  liveLinesDepth,
  liveLinesLayerOffset,
  liveLinesColorShift,
  liveLinesSpeed,
  liveLinesCamDrift,
  liveLinesInsideDepth,
  liveLinesStringVibe,
  liveLinesConstellation,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (liveLinesPreset) {
  liveLinesPreset.addEventListener("change", () => {
    applyLinesPreset(liveLinesPreset.value, true);
  });
}
if (liveLinesStyle) {
  liveLinesStyle.addEventListener("change", () => {
    if (liveLinesPattern) liveLinesPattern.value = "flow";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveLinesPattern) {
  liveLinesPattern.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveLinesGeometry) {
  liveLinesGeometry.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveLinesCameraMode) {
  liveLinesCameraMode.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveLinesBeatFlip) {
  liveLinesBeatFlip.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveTunnelPreset) {
  liveTunnelPreset.addEventListener("change", () => {
    applyTunnelPreset(liveTunnelPreset.value, true);
  });
}
if (liveTunnelCameraMode) {
  liveTunnelCameraMode.addEventListener("change", () => {
    tunnelCamYawTarget = tunnelCamYaw;
    tunnelCamPitchTarget = clamp(tunnelCamPitch * 0.35, -0.42, 0.42);
    const modeVal = liveTunnelCameraMode.value || "orbit";
    if (modeVal === "inside") tunnelCamDistTarget = 0.72;
    else if (modeVal === "sweep") tunnelCamDistTarget = 1.08;
    else if (modeVal === "static") tunnelCamDistTarget = 1.2;
    else tunnelCamDistTarget = 0.96;
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveTunnelAudio) {
  liveTunnelAudio.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
[
  liveTunnelDensity,
  liveTunnelDepth,
  liveTunnelSpeed,
  liveTunnelTwist,
  liveTunnelMesh,
  liveTunnelPoints,
  liveTunnelGlow,
  liveTunnelAudioAmount,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (liveInteriorPreset) {
  liveInteriorPreset.addEventListener("change", () => {
    applyInteriorPreset(liveInteriorPreset.value, true);
  });
}
if (liveInteriorCameraMode) {
  liveInteriorCameraMode.addEventListener("change", () => {
    interiorCamYawTarget = interiorCamYaw;
    interiorCamPitchTarget = clamp(interiorCamPitch * 0.4, -0.4, 0.4);
    const modeVal = liveInteriorCameraMode.value || "orbit";
    if (modeVal === "dive") interiorCamDistTarget = 0.8;
    else if (modeVal === "static") interiorCamDistTarget = 1.16;
    else interiorCamDistTarget = 0.96;
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveInteriorAudio) {
  liveInteriorAudio.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
[
  liveInteriorDensity,
  liveInteriorDepth,
  liveInteriorSpeed,
  liveInteriorWave,
  liveInteriorGlitch,
  liveInteriorGlow,
  liveInteriorAudioAmount,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (liveAtlasPreset) {
  liveAtlasPreset.addEventListener("change", () => {
    applyAtlasPreset(liveAtlasPreset.value, true);
  });
}
if (liveAtlasAudio) {
  liveAtlasAudio.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
[
  liveAtlasSeed,
  liveAtlasVariation,
  liveAtlasComposition,
  liveAtlasComplexity,
  liveAtlasMotion,
  liveAtlasContrast,
  liveAtlasColorMod,
  liveAtlasMesh,
  liveAtlasSpheres,
  liveAtlasAudioAmount,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (liveMateriaPreset) {
  liveMateriaPreset.addEventListener("change", () => {
    applyMateriaPreset(liveMateriaPreset.value, true);
  });
}
if (liveMateriaAudio) {
  liveMateriaAudio.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
[
  liveMateriaSeed,
  liveMateriaFlow,
  liveMateriaPorosity,
  liveMateriaLayers,
  liveMateriaDrift,
  liveMateriaContrast,
  liveMateriaAudioAmount,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (liveCodePreset) {
  liveCodePreset.addEventListener("change", () => {
    applyCodePreset(liveCodePreset.value, true);
  });
}
if (liveCodeCameraMode) {
  liveCodeCameraMode.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveCodeAudio) {
  liveCodeAudio.addEventListener("change", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
[
  liveCodeDensity,
  liveCodeSpeed,
  liveCodeZoom,
  liveCodeLetters,
  liveCodeFigure,
  liveCodeLanguage,
  liveCodeGlow,
  liveCodeBrightness,
  liveCodeAudioAmount,
].forEach((control) => {
  if (!control) return;
  control.addEventListener("input", () => {
    updateLiveQuickOutputs();
    scheduleRender();
  });
});
if (liveOutputView) {
  liveOutputView.addEventListener("change", () => {
    domeWarpScaleSmooth = 1;
    domeWarpFrameCounter = 0;
    if (liveOutputView.value === "dome") {
      applyDomePresetForCurrentMode();
    }
    if (loadedImage) renderLoadedImageToCanvas();
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (recordSource) {
  recordSource.addEventListener("change", () => {
    updateRecordSettingsUi();
  });
}
if (domeSourceMap) {
  domeSourceMap.addEventListener("change", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    if (loadedImage) renderLoadedImageToCanvas();
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domePreset) {
  domePreset.addEventListener("change", () => {
    if (domePreset.value && domePreset.value !== "custom") {
      applyDomePreset(domePreset.value);
      return;
    }
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeAutoTuneByMode) {
  domeAutoTuneByMode.addEventListener("change", () => {
    if (domeAutoTuneByMode.checked && liveOutputView && liveOutputView.value === "dome") {
      applyDomePresetForCurrentMode();
      scheduleRender();
      return;
    }
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeProjection) {
  domeProjection.addEventListener("change", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeWarp) {
  domeWarp.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeOverscan) {
  domeOverscan.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeEdgeFeather) {
  domeEdgeFeather.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeRimClamp) {
  domeRimClamp.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeSeamBlend) {
  domeSeamBlend.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeTilt) {
  domeTilt.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
ensureDomeRotationControls();
if (domeRotate) {
  domeRotate.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeAutoRotate) {
  domeAutoRotate.addEventListener("change", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeAutoRotateSpeed) {
  domeAutoRotateSpeed.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (domeGrid) {
  domeGrid.addEventListener("input", () => {
    if (!domePresetApplying && domePreset) domePreset.value = "custom";
    updateLiveQuickOutputs();
    scheduleRender();
  });
}
if (liveCameraMode) {
  liveCameraMode.addEventListener("change", () => {
    setCameraMode(liveCameraMode.value);
  });
}
if (modCurve) modCurve.addEventListener("change", scheduleRender);

canvas.addEventListener("mousemove", (e) => {
  if (!originalImageData && !webcamActive && mode !== "lines" && mode !== "tunnel" && mode !== "interior" && mode !== "atlas" && mode !== "materia" && mode !== "code") return;
  if (isDraggingDome && isGlitchDomePanMode()) {
    const dx = e.clientX - lastDomeDragX;
    const dy = e.clientY - lastDomeDragY;
    lastDomeDragX = e.clientX;
    lastDomeDragY = e.clientY;
    domeViewYaw = ((domeViewYaw + dx * 0.22 + 540) % 360) - 180;
    domeViewPitch = clamp(domeViewPitch + dy * 0.18, -82, 82);
    scheduleRender();
    return;
  }
  if (mode !== "depth" && mode !== "particles" && mode !== "fractal" && mode !== "lines" && mode !== "tunnel" && mode !== "interior" && mode !== "atlas" && mode !== "materia" && mode !== "code") return;
  if (isDragging3D) {
    const dx = e.clientX - lastDragX;
    const dy = e.clientY - lastDragY;
    lastDragX = e.clientX;
    lastDragY = e.clientY;
    if (mode === "fractal") {
      fractalCamYawTarget += dx * 0.0065;
      fractalCamPitchTarget = clamp(fractalCamPitchTarget + dy * 0.0055, -1.2, 1.2);
    } else if (mode === "lines") {
      linesCamYawTarget += dx * 0.006;
      linesCamPitchTarget = clamp(linesCamPitchTarget + dy * 0.0048, -1.1, 1.1);
    } else if (mode === "tunnel") {
      tunnelCamYawTarget += dx * 0.0065;
      tunnelCamPitchTarget = clamp(tunnelCamPitchTarget + dy * 0.0052, -1.15, 1.15);
    } else if (mode === "interior") {
      interiorCamYawTarget += dx * 0.0064;
      interiorCamPitchTarget = clamp(interiorCamPitchTarget + dy * 0.0046, -0.86, 0.86);
    } else if (mode === "atlas") {
      atlasCamYawTarget += dx * 0.0063;
      atlasCamPitchTarget = clamp(atlasCamPitchTarget + dy * 0.0048, -0.9, 0.9);
    } else if (mode === "materia") {
      materiaCamYawTarget += dx * 0.0064;
      materiaCamPitchTarget = clamp(materiaCamPitchTarget + dy * 0.0051, -1.1, 1.1);
    } else if (mode === "code") {
      codeRainCamXTarget = clamp(codeRainCamXTarget + dx * 0.0018, -1, 1);
      codeRainCamYTarget = clamp(codeRainCamYTarget + dy * 0.0018, -1, 1);
    } else {
      dragRotateY += dx * 0.18;
      dragRotateX += dy * 0.18;
      dragRotateX = clamp(dragRotateX, -179, 179);
    }
    scheduleRender();
    return;
  }
  if (mode === "tunnel" || mode === "interior" || mode === "atlas" || mode === "materia" || mode === "code") {
    const rect = canvas.getBoundingClientRect();
    if (rect.width > 2 && rect.height > 2) {
      const nx = clamp((e.clientX - rect.left) / rect.width, 0, 1);
      const ny = clamp((e.clientY - rect.top) / rect.height, 0, 1);
      if (mode === "tunnel") {
        // X controls tunnel diameter, Y adds subtle compensation.
        tunnelDiameterTarget = clamp(0.62 + nx * 1.15 + (0.5 - ny) * 0.16, 0.55, 2.2);
        tunnelDiameterCursorActive = true;
      } else if (mode === "interior") {
        interiorCursorXTarget = nx;
        interiorCursorYTarget = ny;
        interiorCamDistTarget = clamp(0.74 + nx * 1.1 + (0.5 - ny) * 0.2, 0.68, 2.2);
      } else if (mode === "atlas") {
        atlasCamDistTarget = clamp(0.72 + nx * 1.02 + (0.5 - ny) * 0.22, 0.62, 2.2);
      } else {
        materiaCamDistTarget = clamp(0.56 + nx * 1.16 + (0.5 - ny) * 0.24, 0.46, 2.4);
      }
      scheduleRender();
    }
  }
});

canvas.addEventListener(
  "wheel",
  (e) => {
    if (mode !== "depth" && mode !== "mix" && mode !== "particles" && mode !== "fractal" && mode !== "lines" && mode !== "tunnel" && mode !== "interior" && mode !== "atlas" && mode !== "materia" && mode !== "code") return;
    e.preventDefault();
    if (mode === "fractal") {
      const next = clamp((liveFractalDistance ? Number(liveFractalDistance.value) : 76) - e.deltaY * 0.03, 20, 180);
      if (liveFractalDistance) liveFractalDistance.value = String(Math.round(next));
      updateLiveQuickOutputs();
      scheduleRender();
      return;
    }
    if (mode === "lines") {
      linesCamDistTarget = clamp(linesCamDistTarget + e.deltaY * 0.0009, 0.78, 2.2);
      scheduleRender();
      return;
    }
    if (mode === "tunnel") {
      tunnelCamDistTarget = clamp(tunnelCamDistTarget + e.deltaY * 0.0009, 0.58, 2.2);
      scheduleRender();
      return;
    }
    if (mode === "interior") {
      interiorCamDistTarget = clamp(interiorCamDistTarget + e.deltaY * 0.0009, 0.68, 2.2);
      scheduleRender();
      return;
    }
    if (mode === "atlas") {
      atlasCamDistTarget = clamp(atlasCamDistTarget + e.deltaY * 0.0009, 0.62, 2.2);
      scheduleRender();
      return;
    }
    if (mode === "materia") {
      materiaCamDistTarget = clamp(materiaCamDistTarget + e.deltaY * 0.0009, 0.46, 2.4);
      scheduleRender();
      return;
    }
    if (mode === "code") {
      codeRainCamYTarget = clamp(codeRainCamYTarget + e.deltaY * 0.0008, -1, 1);
      scheduleRender();
      return;
    }
    const speed = e.ctrlKey ? 0.06 : 0.025;
    adjustCanvasZoom(-e.deltaY, speed);
  },
  { passive: false }
);

canvas.addEventListener("gesturestart", (e) => {
  if (mode !== "depth" && mode !== "mix" && mode !== "particles" && mode !== "fractal" && mode !== "lines" && mode !== "tunnel" && mode !== "interior" && mode !== "atlas" && mode !== "materia" && mode !== "code") return;
  e.preventDefault();
  if (mode === "fractal") {
    gestureBaseZoom = liveFractalDistance ? Number(liveFractalDistance.value) : 76;
    return;
  }
  if (mode === "lines") {
    gestureBaseZoom = linesCamDistTarget;
    return;
  }
  if (mode === "tunnel") {
    gestureBaseZoom = tunnelCamDistTarget;
    return;
  }
  if (mode === "interior") {
    gestureBaseZoom = interiorCamDistTarget;
    return;
  }
  if (mode === "atlas") {
    gestureBaseZoom = atlasCamDistTarget;
    return;
  }
  if (mode === "materia") {
    gestureBaseZoom = materiaCamDistTarget;
    return;
  }
  if (mode === "code") {
    gestureBaseZoom = codeRainCamYTarget;
    return;
  }
  gestureBaseZoom = Number(controls.cameraZoom ? controls.cameraZoom.value : 86);
});

canvas.addEventListener("gesturechange", (e) => {
  if (mode !== "depth" && mode !== "mix" && mode !== "particles" && mode !== "fractal" && mode !== "lines" && mode !== "tunnel" && mode !== "interior" && mode !== "atlas" && mode !== "materia" && mode !== "code") return;
  e.preventDefault();
  if (mode === "fractal") {
    if (gestureBaseZoom === null) gestureBaseZoom = liveFractalDistance ? Number(liveFractalDistance.value) : 76;
    const scale = clamp(Number(e.scale || 1), 0.3, 4);
    const next = clamp(gestureBaseZoom * scale, 20, 180);
    if (liveFractalDistance) liveFractalDistance.value = String(Math.round(next));
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (mode === "lines") {
    if (gestureBaseZoom === null) gestureBaseZoom = linesCamDistTarget;
    const scale = clamp(Number(e.scale || 1), 0.3, 4);
    linesCamDistTarget = clamp(gestureBaseZoom / scale, 0.78, 2.2);
    scheduleRender();
    return;
  }
  if (mode === "tunnel") {
    if (gestureBaseZoom === null) gestureBaseZoom = tunnelCamDistTarget;
    const scale = clamp(Number(e.scale || 1), 0.3, 4);
    tunnelCamDistTarget = clamp(gestureBaseZoom / scale, 0.58, 2.2);
    scheduleRender();
    return;
  }
  if (mode === "interior") {
    if (gestureBaseZoom === null) gestureBaseZoom = interiorCamDistTarget;
    const scale = clamp(Number(e.scale || 1), 0.3, 4);
    interiorCamDistTarget = clamp(gestureBaseZoom / scale, 0.68, 2.2);
    scheduleRender();
    return;
  }
  if (mode === "atlas") {
    if (gestureBaseZoom === null) gestureBaseZoom = atlasCamDistTarget;
    const scale = clamp(Number(e.scale || 1), 0.3, 4);
    atlasCamDistTarget = clamp(gestureBaseZoom / scale, 0.62, 2.2);
    scheduleRender();
    return;
  }
  if (mode === "materia") {
    if (gestureBaseZoom === null) gestureBaseZoom = materiaCamDistTarget;
    const scale = clamp(Number(e.scale || 1), 0.3, 4);
    materiaCamDistTarget = clamp(gestureBaseZoom / scale, 0.46, 2.4);
    scheduleRender();
    return;
  }
  if (mode === "code") {
    if (gestureBaseZoom === null) gestureBaseZoom = codeRainCamYTarget;
    const scale = clamp(Number(e.scale || 1), 0.3, 4);
    codeRainCamYTarget = clamp(gestureBaseZoom / scale, -1, 1);
    scheduleRender();
    return;
  }
  if (!controls.cameraZoom) return;
  if (gestureBaseZoom === null) gestureBaseZoom = Number(controls.cameraZoom.value);
  const scale = clamp(Number(e.scale || 1), 0.3, 4);
  const next = clamp(gestureBaseZoom * scale, 40, 180);
  controls.cameraZoom.value = String(Math.round(next));
  smoothCamZoom = next;
  targetCamZoom = null;
  updateOutputs();
  scheduleRender();
});

canvas.addEventListener("gestureend", () => {
  gestureBaseZoom = null;
});

canvas.addEventListener(
  "touchstart",
  (e) => {
    if (!isGlitchDomePanMode()) return;
    const t0 = e.touches && e.touches[0];
    if (!t0) return;
    isDraggingDome = true;
    lastDomeDragX = t0.clientX;
    lastDomeDragY = t0.clientY;
    canvas.classList.add("dragging");
    e.preventDefault();
  },
  { passive: false }
);

canvas.addEventListener(
  "touchmove",
  (e) => {
    if (!isDraggingDome || !isGlitchDomePanMode()) return;
    const t0 = e.touches && e.touches[0];
    if (!t0) return;
    const dx = t0.clientX - lastDomeDragX;
    const dy = t0.clientY - lastDomeDragY;
    lastDomeDragX = t0.clientX;
    lastDomeDragY = t0.clientY;
    domeViewYaw = ((domeViewYaw + dx * 0.22 + 540) % 360) - 180;
    domeViewPitch = clamp(domeViewPitch + dy * 0.18, -82, 82);
    scheduleRender();
    e.preventDefault();
  },
  { passive: false }
);

canvas.addEventListener("touchend", () => {
  if (!isDraggingDome) return;
  isDraggingDome = false;
  if (!isDragging3D) canvas.classList.remove("dragging");
});

canvas.addEventListener("mousedown", (e) => {
  if (isGlitchDomePanMode()) {
    isDraggingDome = true;
    lastDomeDragX = e.clientX;
    lastDomeDragY = e.clientY;
    canvas.classList.add("dragging");
    return;
  }
  if ((mode !== "depth" && mode !== "particles" && mode !== "fractal" && mode !== "lines" && mode !== "tunnel" && mode !== "interior") || ((!originalImageData && !webcamActive) && mode !== "lines" && mode !== "tunnel" && mode !== "interior")) return;
  isDragging3D = true;
  lastDragX = e.clientX;
  lastDragY = e.clientY;
  canvas.classList.add("dragging");
});

window.addEventListener("mouseup", () => {
  if (!isDragging3D && !isDraggingDome) return;
  isDragging3D = false;
  isDraggingDome = false;
  canvas.classList.remove("dragging");
});

canvas.addEventListener("mouseleave", () => {
  if (!originalImageData && !webcamActive) return;
  if (isDragging3D) return;
  if (mode === "tunnel") {
    tunnelDiameterCursorActive = false;
    tunnelDiameterTarget = 1;
    scheduleRender();
  }
  if (mode === "interior") {
    scheduleRender();
  }
});

quick3dBtn.addEventListener("click", apply3DStarter);
if (quick3dCleanBtn) quick3dCleanBtn.addEventListener("click", toggle3DCleanFrontMode);
webcamBtn.addEventListener("click", toggleWebcam);
if (refreshCamsBtn) {
  refreshCamsBtn.addEventListener("click", () => {
    refreshCameraDeviceList(true);
  });
}
if (cameraDeviceSelect) {
  cameraDeviceSelect.addEventListener("change", async () => {
    selectedCameraDeviceId = cameraDeviceSelect.value || "";
    if (!webcamActive) return;
    stopWebcamInput();
    updateDynamicUiTexts();
    updateInputSpecs();
    await toggleWebcam();
  });
}
micBtn.addEventListener("click", toggleMic);
if (audioFileInput) {
  audioFileInput.addEventListener("change", (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    loadAudioFile(file);
  });
}
if (audioFilePlayer) {
  audioFilePlayer.addEventListener("play", () => {
    if (!audioFilePlayer.src) return;
    activateAudioFileSource();
    updateLiveAudioFileMini();
    scheduleRender();
  });
  audioFilePlayer.addEventListener("pause", () => {
    audioFileActive = false;
    teardownAudioPipeline();
    updateLiveAudioFileMini();
    updateDynamicUiTexts();
    scheduleRender();
  });
  audioFilePlayer.addEventListener("ended", () => {
    audioFileActive = false;
    teardownAudioPipeline();
    updateLiveAudioFileMini();
    updateDynamicUiTexts();
    scheduleRender();
  });
  audioFilePlayer.addEventListener("canplay", () => {
    if (!audioFilePlayer.src) return;
    if (!audioFilePlayer.paused && audioInputSource && audioInputSource.value === "file" && !audioFileActive) {
      activateAudioFileSource();
    }
  });
  audioFilePlayer.addEventListener("timeupdate", () => {
    updateLiveAudioFileMini();
    if (audioInputSource && audioInputSource.value === "file") {
      if (!audioFilePlayer.paused && !hasAudioReactiveInput()) activateAudioFileSource();
      scheduleRender();
    }
  });
  audioFilePlayer.addEventListener("loadedmetadata", updateLiveAudioFileMini);
}
if (audioFileClearBtn) {
  audioFileClearBtn.addEventListener("click", () => {
    stopAudioFileInput();
    if (audioFileInput) audioFileInput.value = "";
    if (audioInputSource && audioInputSource.value === "file") {
      audioInputSource.value = "mic";
    }
    updateDynamicUiTexts();
  });
}
if (liveAudioPlayPauseBtn) {
  liveAudioPlayPauseBtn.addEventListener("click", () => {
    if (!audioFilePlayer || !audioFilePlayer.src) return;
    if (audioFilePlayer.paused) audioFilePlayer.play().catch(() => {});
    else audioFilePlayer.pause();
    updateLiveAudioFileMini();
  });
}
if (liveAudioSeek) {
  liveAudioSeek.addEventListener("input", () => {
    if (!audioFilePlayer || !Number.isFinite(audioFilePlayer.duration) || audioFilePlayer.duration <= 0) return;
    const r = clamp(Number(liveAudioSeek.value) / 1000, 0, 1);
    audioFilePlayer.currentTime = audioFilePlayer.duration * r;
    updateLiveAudioFileMini();
  });
}
if (liveAudioClearBtn) {
  liveAudioClearBtn.addEventListener("click", () => {
    stopAudioFileInput();
    if (audioFileInput) audioFileInput.value = "";
    if (audioInputSource && audioInputSource.value === "file") {
      audioInputSource.value = "mic";
    }
    updateDynamicUiTexts();
  });
}
async function startLiveAudioQuick() {
  if (!audioInputSource || !liveAudioInputQuick) return;
  const hasActiveRoute = Boolean(hasAudioReactiveInput() || micActive || audioFileActive || (audioFilePlayer && audioFilePlayer.src && !audioFilePlayer.paused));
  if (hasActiveRoute) {
    await pauseLiveAudioQuick();
    return;
  }
  if (liveAudioInputPicker && liveAudioInputPicker.hidden) {
    liveAudioInputPicker.hidden = false;
    try {
      liveAudioInputQuick.focus();
    } catch {}
    return;
  }
  const source = liveAudioInputQuick.value || "mic";
  audioInputSource.value = source;
  audioInputSource.dispatchEvent(new Event("change"));
  if (source === "file") {
    if (audioFilePlayer && audioFilePlayer.src) {
      audioFilePlayer.play().catch(() => {});
    } else if (audioFileInput) {
      audioFileInput.click();
    }
  }
  if (liveAudioInputPicker) liveAudioInputPicker.hidden = true;
}

async function pauseLiveAudioQuick() {
  if (audioFilePlayer && audioFilePlayer.src && !audioFilePlayer.paused) {
    audioFilePlayer.pause();
  }
  if (audioFileActive) {
    deactivateAudioFileSource();
  }
  if (micActive) {
    await toggleMic();
  } else {
    stopMicInput();
    teardownAudioPipeline();
    updateDynamicUiTexts();
    scheduleRender();
  }
  if (liveAudioInputPicker) liveAudioInputPicker.hidden = true;
}

function uploadLiveAudioFileQuick() {
  if (!audioInputSource || !audioFileInput) return;
  audioInputSource.value = "file";
  audioInputSource.dispatchEvent(new Event("change"));
  if (liveAudioInputQuick) liveAudioInputQuick.value = "file";
  if (liveAudioInputPicker) liveAudioInputPicker.hidden = true;
  audioFileInput.click();
}

if (liveAudioStartBtn) {
  liveAudioStartBtn.addEventListener("click", () => {
    startLiveAudioQuick();
  });
}
if (liveAudioPauseBtn) {
  liveAudioPauseBtn.addEventListener("click", () => {
    uploadLiveAudioFileQuick();
  });
}
if (liveAudioInputQuick) {
  liveAudioInputQuick.addEventListener("change", () => {
    if (!audioInputSource) return;
    audioInputSource.value = liveAudioInputQuick.value;
    audioInputSource.dispatchEvent(new Event("change"));
    if (liveAudioInputPicker) liveAudioInputPicker.hidden = true;
    if (audioInputSource.value === "file" && audioFilePlayer && !audioFilePlayer.src && audioFileInput) {
      audioFileInput.click();
    }
    syncLiveAudioQuickUi();
  });
}
if (liveAudioTargetQuick) {
  liveAudioTargetQuick.addEventListener("change", () => {
    if (!audioTarget) return;
    audioTarget.value = liveAudioTargetQuick.value;
    audioTarget.dispatchEvent(new Event("change"));
    syncLiveAudioQuickUi();
  });
}
if (liveAudioSensitivityQuick) {
  liveAudioSensitivityQuick.addEventListener("input", () => {
    if (!controls.audioSensitivity) return;
    controls.audioSensitivity.value = liveAudioSensitivityQuick.value;
    const out = liveAudioSensitivityQuick.parentElement?.querySelector("output");
    if (out) out.textContent = String(liveAudioSensitivityQuick.value);
    updateLiveAudioPadDot();
    updateOutputs();
    scheduleRender();
  });
}
if (liveAudioToleranceQuick) {
  liveAudioToleranceQuick.addEventListener("input", () => {
    if (!controls.audioTolerance) return;
    controls.audioTolerance.value = liveAudioToleranceQuick.value;
    const out = liveAudioToleranceQuick.parentElement?.querySelector("output");
    if (out) out.textContent = String(liveAudioToleranceQuick.value);
    updateLiveAudioPadDot();
    updateOutputs();
    scheduleRender();
  });
}
if (liveAudioPad) {
  let dragging = false;
  liveAudioPad.addEventListener("mousedown", (e) => {
    dragging = true;
    applyLiveAudioPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    applyLiveAudioPadFromPointer(e.clientX, e.clientY);
  });
  window.addEventListener("mouseup", () => {
    dragging = false;
  });
  liveAudioPad.addEventListener("touchstart", (e) => {
    const t = e.touches[0];
    if (!t) return;
    applyLiveAudioPadFromPointer(t.clientX, t.clientY);
  });
  liveAudioPad.addEventListener("touchmove", (e) => {
    const t = e.touches[0];
    if (!t) return;
    e.preventDefault();
    applyLiveAudioPadFromPointer(t.clientX, t.clientY);
  });
}
if (exportVideoBtn) exportVideoBtn.addEventListener("click", () => exportAnimation("video"));
if (exportGifBtn) exportGifBtn.addEventListener("click", () => exportAnimation("gif"));
if (exportPhotoBtn) exportPhotoBtn.addEventListener("click", exportPhotoHQ);
recordStartBtn.addEventListener("click", toggleLiveRecording);
if (recordPauseBtn) recordPauseBtn.addEventListener("click", pauseOrResumeLiveRecording);
recordSaveBtn.addEventListener("click", saveLiveRecording);
if (recordNameCancelBtn) {
  recordNameCancelBtn.addEventListener("click", () => closeRecordNameDialog(""));
}
if (recordNameSaveBtn) {
  recordNameSaveBtn.addEventListener("click", () => closeRecordNameDialog(recordNameInput ? recordNameInput.value : ""));
}
if (recordNameInput) {
  recordNameInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      closeRecordNameDialog(recordNameInput.value);
    } else if (e.key === "Escape") {
      e.preventDefault();
      closeRecordNameDialog("");
    }
  });
}
if (recordNameModal) {
  recordNameModal.addEventListener("click", (e) => {
    if (e.target === recordNameModal) closeRecordNameDialog("");
  });
}
if (infoLegalBtn && infoLegalModal) {
  infoLegalBtn.addEventListener("click", () => {
    infoLegalModal.hidden = false;
  });
}
if (infoLegalCloseBtn && infoLegalModal) {
  infoLegalCloseBtn.addEventListener("click", () => {
    infoLegalModal.hidden = true;
  });
}
if (infoLegalModal) {
  infoLegalModal.addEventListener("click", (e) => {
    if (e.target === infoLegalModal) infoLegalModal.hidden = true;
  });
}
if (learnBtn && learnModal) {
  learnBtn.addEventListener("click", () => {
    learnModal.hidden = false;
  });
}
if (learnCloseBtn && learnModal) {
  learnCloseBtn.addEventListener("click", () => {
    learnModal.hidden = true;
  });
}
if (learnModal) {
  learnModal.addEventListener("click", (e) => {
    if (e.target === learnModal) learnModal.hidden = true;
  });
}
if (openCleanOutputBtn) openCleanOutputBtn.addEventListener("click", openCleanOutput);
if (closeCleanOutputBtn) closeCleanOutputBtn.addEventListener("click", closeCleanOutput);
camStaticBtn.addEventListener("click", () => setCameraMode("static"));
camCursorBtn.addEventListener("click", () => setCameraMode("cursor"));
camOrbitBtn.addEventListener("click", () => setCameraMode("orbit"));
camSweepBtn.addEventListener("click", () => setCameraMode("sweep"));
camPulseBtn.addEventListener("click", () => setCameraMode("pulse"));
if (camHelixBtn) camHelixBtn.addEventListener("click", () => setCameraMode("helix"));
if (camDriftBtn) camDriftBtn.addEventListener("click", () => setCameraMode("drift"));
if (camLiquidBtn) camLiquidBtn.addEventListener("click", () => setCameraMode("liquid"));
if (cameraMoveSpeed) {
  cameraMoveSpeed.addEventListener("input", () => {
    updateQuickOutputById("cameraMoveSpeed", cameraMoveSpeed.value);
    scheduleRender();
  });
}

audioInputSource.addEventListener("change", async () => {
  updateAudioRoutingUi();
  if (audioInputSource.value === "file") {
    if (audioFilePlayer && audioFilePlayer.src) {
      activateAudioFileSource();
      audioFilePlayer.play().catch(() => {});
    } else {
      stopMicInput();
      teardownAudioPipeline();
      updateDynamicUiTexts();
    }
    return;
  }
  if (audioFileActive) {
    deactivateAudioFileSource();
  }
  if (micActive) {
    await toggleMic();
  }
  if (audioInputSource.value === "mic" || audioInputSource.value === "system") {
    await toggleMic();
  }
  syncLiveAudioQuickUi();
  scheduleRender();
});
audioTarget.addEventListener("change", scheduleRender);
audioAnimation.addEventListener("change", scheduleRender);
if (modSource) modSource.addEventListener("change", scheduleRender);
if (modTarget) modTarget.addEventListener("change", scheduleRender);

workflowTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setWorkspacePanel(tab.dataset.panel || "setup");
  });
});

if (studioModeGlitchBtn) studioModeGlitchBtn.addEventListener("click", () => setStudioTab("glitch"));
if (studioModeFractalBtn) studioModeFractalBtn.addEventListener("click", () => setStudioTab("fractal"));
if (studioMode3dBtn) studioMode3dBtn.addEventListener("click", () => setStudioTab("depth"));
if (studioModeParticlesBtn) studioModeParticlesBtn.addEventListener("click", () => setStudioTab("particles"));
particleStudioControlPairs.forEach(([studioControl, liveControl]) => applyStudioParticlesControl(studioControl, liveControl));

if (languageSelect) {
  languageSelect.addEventListener("change", () => {
    locale = languageSelect.value === "en" ? "en" : "es";
    applyLocaleTexts();
    drawPlaceholder();
    scheduleRender();
  });
}

if (themeModeSelect) {
  themeModeSelect.addEventListener("change", () => {
    applyThemeMode(themeModeSelect.value);
    scheduleRender();
  });
}

if (uiLiveBtn) {
  uiLiveBtn.addEventListener("click", () => setUiMode("live"));
}
if (uiEditBtn) {
  uiEditBtn.addEventListener("click", () => setUiMode("edit"));
}

if (freezeBtn) freezeBtn.addEventListener("click", toggleFreeze);
if (panicBtn) panicBtn.addEventListener("click", panicReset);
if (snapshotSaveBtn) {
  snapshotSaveBtn.addEventListener("click", () => captureSnapshot(currentSnapshotSlot));
}
if (snapshotLoadBtn) {
  snapshotLoadBtn.addEventListener("click", () => applySnapshot(currentSnapshotSlot));
}
if (snapshotClearBtn) {
  snapshotClearBtn.addEventListener("click", () => clearSnapshot(currentSnapshotSlot));
}
snapshotSlots.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    const slot = Number(btn.dataset.slot);
    currentSnapshotSlot = slot;
    refreshSnapshotUi();
    if (ev.detail >= 2 && snapshots[slot - 1]) applySnapshot(slot);
  });
});

if (randomBtn) {
  randomBtn.addEventListener("click", () => {
    cancelMorphTweensForCurrentMode();
    randomizeActiveMode();
    scheduleRender();
  });
}

if (reseedBtn) {
  reseedBtn.addEventListener("click", () => {
    randomSeed = Math.floor(Math.random() * 100000);
    scheduleRender();
  });
}

if (resetBtn) resetBtn.addEventListener("click", resetAll);
if (downloadBtn) downloadBtn.addEventListener("click", downloadCurrentImage);

window.addEventListener("beforeunload", () => {
  closeCleanOutput();
  if (webcamStream) webcamStream.getTracks().forEach((t) => t.stop());
  if (micStream) micStream.getTracks().forEach((t) => t.stop());
  if (liveDisplayStream) liveDisplayStream.getTracks().forEach((t) => t.stop());
  stopAudioFileInput();
  teardownAudioPipeline();
});

window.addEventListener("resize", () => {
  applyTouchUiProfile();
  if (viewportResizeTimer) clearTimeout(viewportResizeTimer);
  viewportResizeTimer = setTimeout(() => {
    viewportResizeTimer = null;
    applyAspectRatioChange();
    updateCanvasDisplaySize();
    scheduleRender();
  }, runtimeIsTouch ? 110 : 70);
});

window.addEventListener("orientationchange", () => {
  applyTouchUiProfile();
  setTimeout(() => {
    applyAspectRatioChange();
    updateCanvasDisplaySize();
    scheduleRender();
  }, 140);
});

if (window.visualViewport && window.visualViewport.addEventListener) {
  window.visualViewport.addEventListener("resize", () => {
    applyTouchUiProfile();
    if (viewportResizeTimer) clearTimeout(viewportResizeTimer);
    viewportResizeTimer = setTimeout(() => {
      viewportResizeTimer = null;
      updateCanvasDisplaySize();
      scheduleRender();
    }, runtimeIsTouch ? 90 : 60);
  });
}

document.addEventListener("fullscreenchange", () => {
  updateCanvasFullscreenButtonUi();
  updateCanvasDisplaySize();
  scheduleRender();
});
document.addEventListener("webkitfullscreenchange", () => {
  updateCanvasFullscreenButtonUi();
  updateCanvasDisplaySize();
  scheduleRender();
});

window.addEventListener("keydown", (e) => {
  const active = document.activeElement;
  const tag = (active && active.tagName) || "";
  const inputType = active && active.tagName === "INPUT" ? (active.type || "").toLowerCase() : "";
  if (e.code === "ArrowUp") {
    e.preventDefault();
    if (e.repeat) return;
    cycleMasterFxMode(1);
    return;
  }
  if (e.code === "ArrowDown") {
    e.preventDefault();
    if (e.repeat) return;
    cycleMasterFxMode(-1);
    return;
  }
  const isTextInput =
    tag === "SELECT" ||
    tag === "TEXTAREA" ||
    (tag === "INPUT" &&
      !["range", "checkbox", "radio", "button", "color", "file", "submit", "reset"].includes(inputType)) ||
    (active && active.isContentEditable);
  if (isTextInput) return;
  if (e.code === "Space") {
    e.preventDefault();
    toggleFreeze();
    return;
  }
  if (e.code === "KeyW") {
    e.preventDefault();
    cameraKeyState.up = true;
    scheduleRender();
    return;
  }
  if (e.code === "KeyS") {
    e.preventDefault();
    cameraKeyState.down = true;
    scheduleRender();
    return;
  }
  if (e.code === "KeyA") {
    e.preventDefault();
    cameraKeyState.left = true;
    scheduleRender();
    return;
  }
  if (e.code === "KeyD") {
    if (e.shiftKey) {
      e.preventDefault();
      if (e.repeat) return;
      toggleDomeMasterView();
      return;
    }
    e.preventDefault();
    cameraKeyState.right = true;
    scheduleRender();
    return;
  }
  if (e.code === "ArrowLeft") {
    e.preventDefault();
    if (e.repeat) return;
    cycleLiveModeTab(-1);
    return;
  }
  if (e.code === "ArrowRight") {
    e.preventDefault();
    if (e.repeat) return;
    cycleLiveModeTab(1);
    return;
  }
  if (e.key === "r" || e.key === "R") {
    e.preventDefault();
    cancelMorphTweensForCurrentMode();
    randomizeActiveMode();
    scheduleRender();
    return;
  }
  if (e.code === "KeyF" && e.shiftKey) {
    e.preventDefault();
    if (e.repeat) return;
    toggleCanvasFullscreen();
    return;
  }
  if (e.code === "KeyF") {
    e.preventDefault();
    randomizeBackground();
    scheduleRender();
    return;
  }
  if (e.code === "KeyB") {
    e.preventDefault();
    if (e.repeat) return;
    applyLiveSafeBaseline({ keepMode: true });
    return;
  }
  if (e.code === "KeyC") {
    e.preventDefault();
    if (e.repeat) return;
    if (e.shiftKey) {
      cycle3dBackgroundMode();
      return;
    }
    triggerKaleidoMorphTween(true);
    return;
  }
  if (e.code === "KeyK") {
    e.preventDefault();
    if (e.repeat) return;
    if (!kaleidoFxEnabled) return;
    kaleidoFxEnabled.checked = !kaleidoFxEnabled.checked;
    if (!kaleidoFxEnabled.checked) {
      kaleidoMorphTween = null;
    }
    if (kaleidoPrevCanvas.width > 0 && kaleidoPrevCanvas.height > 0) {
      kaleidoPrevCtx.clearRect(0, 0, kaleidoPrevCanvas.width, kaleidoPrevCanvas.height);
    }
    updateLiveQuickOutputs();
    scheduleRender();
    return;
  }
  if (e.code === "KeyJ") {
    e.preventDefault();
    if (e.repeat) return;
    if (!kaleidoFxEnabled) return;
    if (!kaleidoFxEnabled.checked) kaleidoFxEnabled.checked = true;
    cycleKaleidoFxType(1);
    updateLiveQuickOutputs();
    return;
  }
  if (e.code === "KeyX") {
    e.preventDefault();
    cycleCurrentBackgroundColors();
    return;
  }
  if (e.code === "KeyZ") {
    e.preventDefault();
    randomizeCurrentBackgroundColorsSmooth();
    return;
  }
  if (e.code === "KeyQ") {
    e.preventDefault();
    cycle3dFxMode();
    return;
  }
  if (e.code === "KeyO" && (mode === "depth" || mode === "mix" || mode === "particles" || mode === "fractal" || mode === "tunnel" || mode === "interior" || mode === "atlas" || mode === "materia" || mode === "code")) {
    e.preventDefault();
    if (e.repeat) return;
    if (mode === "particles") triggerParticlesDynamicRandomTween();
    else if (mode === "fractal") triggerFractalMorphTween();
    else if (mode === "tunnel") triggerTunnelMorphTween();
    else if (mode === "interior") triggerInteriorMorphTween();
    else if (mode === "atlas") triggerAtlasMorphTween();
    else if (mode === "materia") triggerMateriaMorphTween();
    else if (mode === "code") {
      codeRainFigurePhase = fract01(codeRainFigurePhase + 0.25 + Math.random() * 0.35);
      if (liveCodeFigure) liveCodeFigure.value = String(clamp(Number(liveCodeFigure.value) + (Math.random() * 40 - 20), 0, 100));
      updateLiveQuickOutputs();
    }
    else triggerDepthMorphTween();
    return;
  }
  if (e.code === "KeyU") {
    e.preventDefault();
    randomize3dGeometryColors();
    return;
  }
  if (e.code === "KeyM") {
    e.preventDefault();
    toggle3DCleanFrontMode();
    return;
  }
  if (e.code === "KeyY") {
    e.preventDefault();
    if (e.repeat) return;
    if (mode === "particles") triggerParticlesCameraTween();
    else if (mode === "fractal") triggerFractalCameraTween();
    else if (mode === "lines") randomizeLinesCameraViewSmooth();
    else if (mode === "tunnel") randomizeTunnelCameraViewSmooth();
    else if (mode === "interior") randomizeInteriorCameraViewSmooth();
    else if (mode === "atlas") randomizeAtlasCameraViewSmooth();
    else if (mode === "materia") randomizeMateriaCameraViewSmooth();
    else if (mode === "code") {
      const drift = 0.22;
      codeRainCamXTarget = clamp(codeRainCamXTarget * 0.88 + (Math.random() * 2 - 1) * drift, -1, 1);
      codeRainCamYTarget = clamp(codeRainCamYTarget * 0.88 + (Math.random() * 2 - 1) * drift, -1, 1);
      scheduleRender();
    }
    else randomize3dCameraViewSmooth();
    return;
  }
  if (e.key === "t" || e.key === "T") {
    e.preventDefault();
    if (mode === "particles") randomizeParticlesCameraView();
    else if (mode === "fractal") randomizeFractalCameraView();
    else if (mode === "lines") randomizeLinesCameraView();
    else if (mode === "tunnel") randomizeTunnelCameraView();
    else if (mode === "interior") randomizeInteriorCameraView();
    else if (mode === "atlas") randomizeAtlasCameraView();
    else if (mode === "materia") randomizeMateriaCameraView();
    else if (mode === "code") {
      const drift = 0.38;
      codeRainCamXTarget = clamp(codeRainCamXTarget * 0.72 + (Math.random() * 2 - 1) * drift, -1, 1);
      codeRainCamYTarget = clamp(codeRainCamYTarget * 0.72 + (Math.random() * 2 - 1) * drift, -1, 1);
      scheduleRender();
    }
    else randomize3dCameraView();
    return;
  }
  if (e.key === "g" || e.key === "G") {
    e.preventDefault();
    toggleBackgroundSyncMode();
    return;
  }
  if (e.code === "KeyV" && e.shiftKey) {
    e.preventDefault();
    toggleLiveRecording();
    return;
  }
  if (e.code === "KeyV") {
    e.preventDefault();
    toggle3dBackgroundBlackWhite();
    return;
  }
  if (e.key === "p" || e.key === "P") {
    e.preventDefault();
    panicReset();
    return;
  }
  if (/^[1-8]$/.test(e.key)) {
    e.preventDefault();
    const slot = Number(e.key);
    if (e.shiftKey) captureSnapshot(slot);
    else applySnapshot(slot);
  }
});

window.addEventListener("keyup", (e) => {
  if (e.code === "KeyW") cameraKeyState.up = false;
  if (e.code === "KeyS") cameraKeyState.down = false;
  if (e.code === "KeyA") cameraKeyState.left = false;
  if (e.code === "KeyD") cameraKeyState.right = false;
});

locale = languageSelect && languageSelect.value === "en" ? "en" : "es";
applyTouchUiProfile();
loadSavedThemeMode();
depthGpuAvailable = detectGpu3dSupport();
setDepthRenderEngine("gpu");
if (live3dRenderEngine && !depthGpuAvailable) {
  const gpuOpt = [...live3dRenderEngine.options].find((o) => o.value === "gpu");
  if (gpuOpt) gpuOpt.disabled = true;
}
populateModTargets();
setValues(defaults);
syncModeUi();
setWorkspacePanel("live");
setUiMode("live");
setCameraMode("static");
if (masterFxDetails) masterFxDetails.open = false;
if (kaleidoFxDetails) kaleidoFxDetails.open = false;
updateMasterFxSummaryStatus();
updateKaleidoFxSummaryStatus();
updateMasterFxPadDot();
updateKaleidoFxPadDot();
updateLiveAudioPadDot();
updateLiveAudioPadVisual();
updateCameraDeckVisibility();
updateDomeControlsVisibility();
updateCanvasFullscreenButtonUi();
{
  const k = clamp((cameraMoveSpeed ? Number(cameraMoveSpeed.value) : 28) / 100, 0, 1);
  smoothCameraModeSpeed = 0.08 + Math.pow(k, 2.6) * 0.82;
}
cameraAnimTime = 0;
lastCameraAnimTs = performance.now();
stageGeomPrevCx = null;
stageGeomPrevCy = null;
stageGeomMotionX = 0;
stageGeomMotionY = 0;
applyLocaleTexts();
ensureDomeRotationControls();
captureSnapshot(1);
updatePerformanceUI();
updateLiveAudioPlayPausePulse();
drawLiveAudioWaveform();
drawPlaceholder();
updateCanvasDisplaySize();
updateInputSpecs();
updateCanvasEntryOverlay();
refreshCameraDeviceList(true);
if (navigator.mediaDevices && navigator.mediaDevices.addEventListener) {
  navigator.mediaDevices.addEventListener("devicechange", () => {
    refreshCameraDeviceList(true);
  });
}
