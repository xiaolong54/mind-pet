/**
 * 重庆城市地图
 *
 * 只负责首页右侧 Three.js 地图的建模与交互，不改动其他业务逻辑。
 * 建模思路参考 CubeCity 的 plot / tile 语法：先搭 17x17 的可放置地块，
 * 再在地块上组合洪崖洞、来福士、江岸步道和山坡公园等重庆地标群。
 */

let chongqingScene = null;
let chongqingCamera = null;
let chongqingRenderer = null;
let chongqingRaycaster = null;
let chongqingMouse = null;
let chongqingCanvas = null;
let mountedContainer = null;
let animationFrameId = null;
let sceneClock = null;
let hoveredRegionId = null;

const animatedActors = [];
const ownedHitMeshes = [];
const texturePool = [];

const GRID_SIZE = 17;
const TILE_SIZE = 1;
const HALF_GRID = (GRID_SIZE - 1) / 2;
const FRUSTUM_SIZE = 24;
const TERRAIN_OUTLINE = 0x30405a;
const TERRAIN_SHADOW = 0x1f2438;
const TERRAIN_EDGE = 0x2f3852;

const Palette = {
    skyTop: 0x4560a7,
    skyBottom: 0xe9b0b2,
    skylineNear: 0x7988b7,
    skylineFar: 0x5f73a9,
    hillBack: 0x4b638c,
    hillMid: 0x355173,
    hillFront: 0x243b58,
    water: 0x4f90da,
    waterDeep: 0x234876,
    bank: 0x44526a,
    bridge: 0xc7a5aa,
    bridgeTruss: 0x84463b,
    bridgeCable: 0xf0edf7,
    cliff: 0x4a415b,
    cliffHighlight: 0x67627b,
    warmBase: 0xdc6f2c,
    warmMid: 0xf3a145,
    warmRoof: 0x4e2a21,
    warmGlow: 0xffc96b,
    coolGlass: 0x8fc8f0,
    coolGlassDeep: 0x6d92be,
    coolFrame: 0x39506b,
    plaza: 0xa6b0c5,
    park: 0x5b8d67,
    parkDark: 0x345540,
    road: 0x6d6476,
    roadMark: 0xffd875,
    outline: 0x20263b,
    mist: 0xf4f7fc
};

const RegionSensors = {
    park: { x: -5.6, y: 1.6, z: -2.3, width: 5.6, height: 3.4, depth: 5.6 },
    warm: { x: 0.9, y: 2.0, z: 3.6, width: 5.6, height: 4.2, depth: 5.8 },
    active: { x: 5.8, y: 3.1, z: -0.1, width: 6.8, height: 6.8, depth: 6.2 },
    calm: { x: 2.4, y: 0.9, z: 7.2, width: 8.8, height: 1.8, depth: 4.6 }
};

const PetRouteLibrary = {
    park: [
        { x: -7.0, y: 1.34, z: -2.5 },
        { x: -6.2, y: 1.35, z: -1.8 },
        { x: -5.5, y: 1.36, z: -1.0 },
        { x: -4.8, y: 1.36, z: -0.2 },
        { x: -5.5, y: 1.36, z: 0.6 },
        { x: -6.5, y: 1.35, z: 0.0 }
    ],
    warm: [
        { x: -0.3, y: 1.16, z: 6.8 },
        { x: 0.2, y: 1.28, z: 6.3 },
        { x: 0.9, y: 1.46, z: 5.7 },
        { x: 1.5, y: 1.68, z: 5.0 },
        { x: 2.0, y: 1.9, z: 4.2 },
        { x: 2.7, y: 2.0, z: 3.4 },
        { x: 3.2, y: 1.92, z: 2.9 }
    ],
    active: [
        { x: 2.9, y: 0.92, z: 4.9 },
        { x: 3.8, y: 0.98, z: 4.1 },
        { x: 4.8, y: 1.1, z: 3.2 },
        { x: 5.7, y: 1.34, z: 2.3 },
        { x: 6.4, y: 2.2, z: 1.7 },
        { x: 6.9, y: 3.7, z: 1.4 },
        { x: 7.6, y: 5.0, z: 1.25 },
        { x: 8.5, y: 6.0, z: 1.3 }
    ],
    calm: [
        { x: 1.1, y: 0.42, z: 7.8 },
        { x: 2.9, y: 0.42, z: 7.7 },
        { x: 4.8, y: 0.42, z: 7.6 },
        { x: 6.7, y: 0.42, z: 7.3 },
        { x: 8.8, y: 0.42, z: 7.0 },
        { x: 10.7, y: 0.42, z: 6.7 },
        { x: 11.6, y: 0.42, z: 6.5 }
    ]
};

function initChongqingCity() {
    disposeChongqingCity();

    mountedContainer = document.getElementById('city-container');
    chongqingCanvas = document.getElementById('city-canvas');

    if (!mountedContainer || !chongqingCanvas || typeof THREE === 'undefined') {
        return;
    }

    if (typeof districtMeshes !== 'undefined') {
        districtMeshes = {};
    }

    chongqingScene = new THREE.Scene();
    chongqingScene.background = new THREE.Color(Palette.skyTop);
    chongqingScene.fog = new THREE.FogExp2(0x90a3cb, 0.0095);

    sceneClock = new THREE.Clock();
    chongqingRaycaster = new THREE.Raycaster();
    chongqingMouse = new THREE.Vector2();

    setupCamera();
    setupRenderer();
    setupLighting();

    createSkyBackdrop();
    createBackdropHills();
    createBackdropCity();
    createRiverSystem();
    createTerrainPlatforms();
    createPlotAnchors();
    createBridges();
    createParkDistrict();
    createRafflesDistrict();
    createHongyadongDistrict();
    createRiverfrontDistrict();
    createAmbientProps();
    createRegionHitMeshes();

    chongqingCanvas.addEventListener('mousemove', onCityMouseMove, false);
    chongqingCanvas.addEventListener('mouseleave', clearRegionHover, false);
    chongqingCanvas.addEventListener('click', onCityClick, false);
    window.addEventListener('resize', onCityResize, false);

    onCityResize();
    animateChongqingCity();
}

function setupCamera() {
    const aspect = mountedContainer.clientWidth / mountedContainer.clientHeight;
    chongqingCamera = new THREE.PerspectiveCamera(26, aspect, 0.1, 180);
    chongqingCamera.position.set(26.5, 30.2, 24.2);
    chongqingCamera.lookAt(1.2, 0.5, 2.0);
    chongqingCamera.updateProjectionMatrix();
}

function setupRenderer() {
    chongqingRenderer = new THREE.WebGLRenderer({
        canvas: chongqingCanvas,
        antialias: true,
        alpha: false
    });

    chongqingRenderer.outputEncoding = THREE.sRGBEncoding;
    chongqingRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    chongqingRenderer.setSize(mountedContainer.clientWidth, mountedContainer.clientHeight);
    chongqingRenderer.shadowMap.enabled = true;
    chongqingRenderer.shadowMap.type = THREE.PCFSoftShadowMap;
    chongqingRenderer.toneMapping = THREE.ACESFilmicToneMapping;
    chongqingRenderer.toneMappingExposure = 0.82;
}

function setupLighting() {
    const ambient = new THREE.AmbientLight(0xffffff, 0.24);
    chongqingScene.add(ambient);

    const hemisphere = new THREE.HemisphereLight(0xd9e8ff, 0x3f5b4a, 0.3);
    hemisphere.position.set(0, 18, 0);
    chongqingScene.add(hemisphere);

    const sun = new THREE.DirectionalLight(0xffcfad, 1.12);
    sun.position.set(15, 28, 9);
    sun.castShadow = true;
    sun.shadow.mapSize.width = 2048;
    sun.shadow.mapSize.height = 2048;
    sun.shadow.camera.near = 0.5;
    sun.shadow.camera.far = 80;
    sun.shadow.camera.left = -18;
    sun.shadow.camera.right = 18;
    sun.shadow.camera.top = 18;
    sun.shadow.camera.bottom = -18;
    sun.shadow.normalBias = 0.02;
    sun.target.position.set(2, 1.5, 2);
    chongqingScene.add(sun);
    chongqingScene.add(sun.target);

    const warmFill = new THREE.PointLight(0xffb86a, 0.68, 20);
    warmFill.position.set(1.8, 4.8, 4.0);
    chongqingScene.add(warmFill);
    animatedActors.push({
        update(elapsed) {
            warmFill.intensity = 0.58 + Math.sin(elapsed * 3.2) * 0.05;
        }
    });

    const coolFill = new THREE.PointLight(0x84cbff, 0.34, 22);
    coolFill.position.set(5.4, 7.2, -0.8);
    chongqingScene.add(coolFill);
    animatedActors.push({
        update(elapsed) {
            coolFill.intensity = 0.31 + Math.sin(elapsed * 1.8 + 0.7) * 0.035;
        }
    });
}

function createSkyBackdrop() {
    const gradientCanvas = document.createElement('canvas');
    gradientCanvas.width = 2048;
    gradientCanvas.height = 1024;
    const ctx = gradientCanvas.getContext('2d');
    const gradient = ctx.createLinearGradient(0, 0, 0, gradientCanvas.height);

    gradient.addColorStop(0, '#425ba4');
    gradient.addColorStop(0.45, '#6675bc');
    gradient.addColorStop(0.74, '#b98fae');
    gradient.addColorStop(1, '#f0b49f');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, gradientCanvas.width, gradientCanvas.height);

    ctx.globalAlpha = 0.95;
    ctx.fillStyle = '#ffffff';
    const cloudGroups = [
        { x: 150, y: 135, scale: 1.4, alpha: 0.92 },
        { x: 410, y: 190, scale: 0.82, alpha: 0.78 },
        { x: 1120, y: 145, scale: 1.1, alpha: 0.86 },
        { x: 1700, y: 150, scale: 1.25, alpha: 0.9 },
        { x: 1960, y: 120, scale: 1.05, alpha: 0.82 }
    ];
    cloudGroups.forEach((cloud) => {
        ctx.globalAlpha = cloud.alpha;
        const offsets = [
            [-120, 10, 108],
            [-28, -22, 74],
            [36, -12, 92],
            [100, 8, 72]
        ];
        offsets.forEach(([ox, oy, r]) => {
            ctx.beginPath();
            ctx.arc(cloud.x + ox * cloud.scale, cloud.y + oy * cloud.scale, r * cloud.scale, 0, Math.PI * 2);
            ctx.fill();
        });
    });

    ctx.globalAlpha = 0.2;
    ctx.fillStyle = '#ffe7dc';
    ctx.beginPath();
    ctx.ellipse(1180, 530, 510, 180, 0.1, 0, Math.PI * 2);
    ctx.fill();

    ctx.globalAlpha = 0.75;
    ctx.fillStyle = '#ffffff';
    for (let i = 0; i < 34; i++) {
        const x = 70 + i * 58 + (i % 3) * 10;
        const y = 55 + (i % 5) * 18;
        ctx.beginPath();
        ctx.arc(x, y, i % 4 === 0 ? 3.3 : 1.6, 0, Math.PI * 2);
        ctx.fill();
    }

    const texture = new THREE.CanvasTexture(gradientCanvas);
    texture.needsUpdate = true;
    texturePool.push(texture);

    const skyDome = new THREE.Mesh(
        new THREE.SphereGeometry(78, 32, 20),
        new THREE.MeshBasicMaterial({
            map: texture,
            side: THREE.BackSide,
            fog: false
        })
    );
    skyDome.position.set(0, 6, 0);
    chongqingScene.add(skyDome);

    createCloud(-11.5, 15.8, -12.5, 2.35);
    createCloud(-6.0, 14.9, -11.8, 1.5);
    createCloud(2.0, 15.4, -12.8, 1.2);
    createCloud(9.6, 15.2, -11.9, 1.8);
    createCloud(13.4, 14.8, -10.8, 1.25);

    const airplane = createAirplane();
    airplane.position.set(-3.4, 14.8, -11.8);
    chongqingScene.add(airplane);
    animatedActors.push({
        update(elapsed) {
            airplane.position.x = -3.4 + Math.sin(elapsed * 0.25) * 1.6;
            airplane.position.y = 14.8 + Math.sin(elapsed * 0.7) * 0.08;
        }
    });
}

function createBackdropHills() {
    const backHill = createExtrudedPolygon(
        [
            { x: -13.5, z: -9.0 },
            { x: -10.2, z: -10.6 },
            { x: -7.0, z: -9.2 },
            { x: -3.4, z: -10.5 },
            { x: 0.2, z: -8.8 },
            { x: 4.8, z: -10.8 },
            { x: 9.6, z: -9.4 },
            { x: 13.5, z: -8.8 },
            { x: 13.5, z: -5.6 },
            { x: -13.5, z: -5.6 }
        ],
        1.4,
        { color: Palette.hillBack, roughness: 0.96, metalness: 0.02 },
        -0.42
    );
    chongqingScene.add(backHill);

    const midHill = createExtrudedPolygon(
        [
            { x: -12.5, z: -5.4 },
            { x: -9.5, z: -6.8 },
            { x: -6.2, z: -5.8 },
            { x: -2.2, z: -7.0 },
            { x: 1.6, z: -5.8 },
            { x: 5.4, z: -6.8 },
            { x: 9.0, z: -5.7 },
            { x: 12.2, z: -6.2 },
            { x: 12.2, z: -2.8 },
            { x: -12.5, z: -2.8 }
        ],
        1.25,
        { color: Palette.hillMid, roughness: 0.96, metalness: 0.02 },
        -0.32
    );
    chongqingScene.add(midHill);

    const frontHill = createExtrudedPolygon(
        [
            { x: -6.3, z: -2.0 },
            { x: -3.8, z: -3.6 },
            { x: -1.2, z: -2.1 },
            { x: 2.4, z: -4.0 },
            { x: 5.5, z: -3.0 },
            { x: 8.0, z: -2.6 },
            { x: 8.0, z: -0.8 },
            { x: -6.3, z: -0.8 }
        ],
        1.05,
        { color: Palette.hillFront, roughness: 0.97, metalness: 0.02 },
        -0.24
    );
    chongqingScene.add(frontHill);
}

function createBackdropCity() {
    const group = new THREE.Group();

    const leftBands = [-11.0, -9.0, -7.0, -4.8];
    leftBands.forEach((x, index) => {
        const tower = createSkylineTower(1.2 + (index % 3) * 0.42, 0.8 + (index % 2) * 0.14, 0.78);
        tower.position.set(x, 0.54 + (index % 3) * 0.03, -6.1 + (index % 2) * 0.28);
        group.add(tower);
    });

    const middleBands = [-1.5, 0.8, 3.2, 5.7];
    middleBands.forEach((x, index) => {
        const tower = createSkylineTower(1.05 + (index % 4) * 0.34, 0.74, 0.72);
        tower.position.set(x, 0.48, -5.7 + (index % 2) * 0.2);
        group.add(tower);
    });

    const rightBands = [9.5, 11.5, 13.1];
    rightBands.forEach((x, index) => {
        const tower = createSkylineTower(1.38 + (index % 3) * 0.46, 0.84, 0.84);
        tower.position.set(x, 0.6, -5.9 + (index % 2) * 0.24);
        group.add(tower);
    });

    const centerSpire = new THREE.Mesh(
        new THREE.CylinderGeometry(0.14, 0.24, 3.4, 6),
        new THREE.MeshLambertMaterial({ color: Palette.skylineNear })
    );
    centerSpire.position.set(1.8, 2.35, -5.35);
    group.add(centerSpire);
    addWindowGrid(group, 0.24, 3.0, 0.02, '#ffe29a', {
        rows: 7,
        cols: 1,
        anchorY: 0,
        anchorZ: -5.1,
        planeMode: true
    });

    chongqingScene.add(group);
}

function createRiverSystem() {
    const jialingPath = [
        { x: -9.5, z: -2.8 },
        { x: -7.4, z: -2.5 },
        { x: -5.2, z: -1.8 },
        { x: -2.7, z: -0.6 },
        { x: -0.6, z: 0.2 },
        { x: 0.8, z: 1.0 }
    ];
    const jialingBank = createRibbonMesh(jialingPath, [2.9, 2.8, 2.6, 2.5, 2.3, 2.1], -0.28, {
        color: Palette.bank,
        roughness: 0.96,
        metalness: 0.02
    });
    const jialingWater = createRibbonMesh(jialingPath, [2.35, 2.25, 2.1, 2.0, 1.85, 1.7], -0.18, {
        color: Palette.water,
        emissive: 0x173f73,
        emissiveIntensity: 0.18,
        roughness: 0.22,
        metalness: 0.08
    });
    const jialingHighlight = createRibbonMesh(jialingPath, [1.5, 1.5, 1.35, 1.28, 1.22, 1.15], -0.165, {
        color: 0xa9d6ff,
        transparent: true,
        opacity: 0.25,
        roughness: 0.05,
        metalness: 0.05
    });

    const yangtzePath = [
        { x: -8.0, z: 8.0 },
        { x: -4.0, z: 8.8 },
        { x: -0.2, z: 8.9 },
        { x: 3.4, z: 8.5 },
        { x: 7.6, z: 7.8 },
        { x: 11.2, z: 7.1 }
    ];
    const yangtzeBank = createRibbonMesh(yangtzePath, [3.2, 3.4, 3.5, 3.4, 3.1, 2.8], -0.3, {
        color: Palette.bank,
        roughness: 0.96,
        metalness: 0.02
    });
    const yangtzeWater = createRibbonMesh(yangtzePath, [2.65, 2.8, 2.95, 2.85, 2.58, 2.28], -0.19, {
        color: Palette.waterDeep,
        emissive: 0x22446f,
        emissiveIntensity: 0.22,
        roughness: 0.24,
        metalness: 0.08
    });
    const yangtzeHighlight = createRibbonMesh(yangtzePath, [1.7, 1.85, 1.9, 1.82, 1.65, 1.48], -0.17, {
        color: 0x90ccff,
        transparent: true,
        opacity: 0.22,
        roughness: 0.05,
        metalness: 0.05
    });

    chongqingScene.add(jialingBank, jialingWater, jialingHighlight, yangtzeBank, yangtzeWater, yangtzeHighlight);

    createWaterLabel('嘉陵江', -4.7, -0.15, 8.55, -0.9);
    createWaterLabel('长江', 10.4, -0.15, 6.9, -0.82);
}

function createTerrainPlatforms() {
    const cityFoundation = createExtrudedPolygon(
        [
            { x: -13.3, z: 8.5 },
            { x: -11.2, z: 9.7 },
            { x: -7.5, z: 10.2 },
            { x: -2.3, z: 10.8 },
            { x: 3.2, z: 10.5 },
            { x: 8.8, z: 9.8 },
            { x: 13.3, z: 8.8 },
            { x: 13.5, z: 4.6 },
            { x: 12.6, z: 0.3 },
            { x: 11.2, z: -4.0 },
            { x: 5.9, z: -5.6 },
            { x: 0.4, z: -4.8 },
            { x: -4.8, z: -3.7 },
            { x: -9.6, z: -4.1 },
            { x: -13.4, z: -2.6 }
        ],
        0.7,
        { color: 0x5a6782, roughness: 0.98, metalness: 0.02 },
        -0.62
    );
    chongqingScene.add(cityFoundation);

    const cityCap = createExtrudedPolygon(
        [
            { x: -12.7, z: 8.0 },
            { x: -10.5, z: 8.8 },
            { x: -6.9, z: 9.2 },
            { x: -1.9, z: 9.7 },
            { x: 3.0, z: 9.5 },
            { x: 8.3, z: 8.9 },
            { x: 12.8, z: 8.0 },
            { x: 12.8, z: 4.8 },
            { x: 12.0, z: 0.8 },
            { x: 10.7, z: -3.5 },
            { x: 5.9, z: -4.8 },
            { x: 1.0, z: -4.0 },
            { x: -4.0, z: -3.0 },
            { x: -8.6, z: -3.3 },
            { x: -12.8, z: -2.1 }
        ],
        0.22,
        { color: 0x7f8faf, roughness: 0.94, metalness: 0.03 },
        0.04
    );
    chongqingScene.add(cityCap);

    const warmRock = createExtrudedPolygon(
        [
            { x: -1.9, z: 0.8 },
            { x: 0.8, z: 0.2 },
            { x: 4.2, z: 1.6 },
            { x: 5.0, z: 4.5 },
            { x: 3.3, z: 6.9 },
            { x: 0.2, z: 7.5 },
            { x: -1.7, z: 5.5 },
            { x: -2.3, z: 2.5 }
        ],
        1.3,
        { color: Palette.cliff, roughness: 0.98, metalness: 0.02 },
        -0.08
    );
    chongqingScene.add(warmRock);

    const warmCap = createExtrudedPolygon(
        [
            { x: -1.4, z: 1.4 },
            { x: 1.1, z: 0.9 },
            { x: 3.8, z: 2.0 },
            { x: 4.2, z: 4.8 },
            { x: 2.8, z: 6.4 },
            { x: 0.4, z: 6.9 },
            { x: -1.0, z: 5.2 },
            { x: -1.5, z: 2.6 }
        ],
        0.34,
        { color: Palette.cliffHighlight, roughness: 0.95, metalness: 0.02 },
        1.26
    );
    chongqingScene.add(warmCap);

    const activeBase = createExtrudedPolygon(
        [
            { x: 2.6, z: -2.6 },
            { x: 8.3, z: -3.0 },
            { x: 9.6, z: -1.2 },
            { x: 9.0, z: 3.9 },
            { x: 6.0, z: 4.8 },
            { x: 2.9, z: 2.4 }
        ],
        0.92,
        { color: 0x7786a6, roughness: 0.9, metalness: 0.04 },
        0.01
    );
    chongqingScene.add(activeBase);

    const activeCap = createExtrudedPolygon(
        [
            { x: 3.1, z: -2.1 },
            { x: 7.9, z: -2.4 },
            { x: 8.6, z: -0.7 },
            { x: 8.2, z: 3.2 },
            { x: 5.8, z: 4.0 },
            { x: 3.4, z: 2.1 }
        ],
        0.22,
        { color: Palette.plaza, roughness: 0.78, metalness: 0.08 },
        0.95
    );
    chongqingScene.add(activeCap);

    const parkBase = createExtrudedPolygon(
        [
            { x: -9.2, z: -3.8 },
            { x: -6.2, z: -4.6 },
            { x: -3.4, z: -3.0 },
            { x: -3.5, z: 0.9 },
            { x: -5.8, z: 1.7 },
            { x: -8.8, z: 0.4 }
        ],
        1.05,
        { color: Palette.parkDark, roughness: 0.98, metalness: 0.02 },
        0.0
    );
    chongqingScene.add(parkBase);

    const parkTop = createExtrudedPolygon(
        [
            { x: -8.5, z: -3.2 },
            { x: -6.0, z: -3.8 },
            { x: -4.2, z: -2.2 },
            { x: -4.2, z: 0.4 },
            { x: -5.8, z: 1.0 },
            { x: -8.0, z: 0.1 }
        ],
        0.26,
        { color: Palette.park, roughness: 0.94, metalness: 0.02 },
        1.04
    );
    chongqingScene.add(parkTop);

    const calmPromenade = createExtrudedPolygon(
        [
            { x: -0.7, z: 6.1 },
            { x: 4.8, z: 5.8 },
            { x: 6.5, z: 6.6 },
            { x: 5.9, z: 8.7 },
            { x: 1.1, z: 9.1 },
            { x: -0.6, z: 8.1 }
        ],
        0.34,
        { color: 0x71859a, roughness: 0.92, metalness: 0.03 },
        0.02
    );
    chongqingScene.add(calmPromenade);

    const rightBank = createExtrudedPolygon(
        [
            { x: 7.6, z: 2.0 },
            { x: 11.4, z: 3.0 },
            { x: 14.5, z: 5.0 },
            { x: 15.0, z: 8.5 },
            { x: 12.0, z: 9.0 },
            { x: 8.0, z: 8.0 }
        ],
        0.24,
        { color: 0x61788f, roughness: 0.94, metalness: 0.03 },
        0.02
    );
    chongqingScene.add(rightBank);
}

function createPlotAnchors() {
}

function createBridges() {
    // 只创建一座桥 - 千厮门大桥，横跨嘉陵江，桥面高度增加避免嵌入地面
    const qiansimen = createCableBridge({
        start: new THREE.Vector3(-10.5, 1.6, 7.8),
        end: new THREE.Vector3(-3.5, 1.8, 9.2),
        deckWidth: 0.9,
        bridgeColor: Palette.bridge,
        trussColor: Palette.bridgeTruss,
        labelText: '千厮门大桥',
        labelOffset: new THREE.Vector3(-1.5, 0.15, 0),
        pylonOffsets: [-2.2, 2.0]
    });
    chongqingScene.add(qiansimen.group);

    // 添加车流动画
    animatedActors.push(createBridgeCarActor(qiansimen.group, qiansimen.length, 0.16, -0.18, Palette.warmBase, 0.0, 0.14));
    animatedActors.push(createBridgeCarActor(qiansimen.group, qiansimen.length, 0.18, 0.16, 0x5f9cc7, 0.42, -0.12));
}

function createParkDistrict() {
    const grove = new THREE.Group();
    const treeSpots = [
        { gx: 2, gy: 6, size: 0.95 },
        { gx: 3, gy: 7, size: 1.08 },
        { gx: 4, gy: 6, size: 0.92 },
        { gx: 4, gy: 5, size: 0.82 },
        { gx: 5, gy: 5, size: 0.75 }
    ];

    treeSpots.forEach((spot, index) => {
        const world = gridToWorld(spot.gx, spot.gy);
        const tree = createTree(spot.size, index % 2 === 0 ? 0x5e995c : 0x73b46f);
        tree.position.set(world.x, 1.36 + (spot.size - 0.75) * 0.15, world.z);
        grove.add(tree);
    });

    const pavilion = createPavilion();
    pavilion.position.set(-5.6, 1.44, -0.8);
    grove.add(pavilion);

    const stairPath = createPathSegment(-6.7, 1.32, 0.1, 3.0, 0.52, 0xdcccae, Math.PI / 7);
    grove.add(stairPath);

    chongqingScene.add(grove);
}

function createRafflesDistrict() {
    const district = new THREE.Group();

    const towerSpecs = [
        { x: 3.9, z: 1.1, height: 5.2, bottom: 0.86, top: 0.64 },
        { x: 5.9, z: 0.9, height: 5.7, bottom: 0.92, top: 0.68 },
        { x: 4.8, z: -0.7, height: 6.8, bottom: 0.96, top: 0.72 },
        { x: 7.1, z: -0.8, height: 6.4, bottom: 0.94, top: 0.7 }
    ];

    towerSpecs.forEach((spec) => {
        const tower = createRafflesTower(spec);
        district.add(tower);
    });

    const lowerPlinth = createPathSegment(5.8, 0.82, 2.0, 6.8, 1.9, 0x8b97ab, -Math.PI / 18);
    district.add(lowerPlinth);

    const podium = createPathSegment(5.9, 1.16, 1.7, 5.6, 2.8, 0xb2bcce, Math.PI / 14);
    district.add(podium);

    const skybridgeCurve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(3.3, 6.4, 1.6),
        new THREE.Vector3(5.2, 7.0, 1.1),
        new THREE.Vector3(7.2, 7.0, 1.1),
        new THREE.Vector3(9.1, 6.2, 1.4)
    ]);

    const skybridge = new THREE.Mesh(
        new THREE.TubeGeometry(skybridgeCurve, 40, 0.42, 16, false),
        new THREE.MeshPhongMaterial({
            color: 0xc5ecff,
            transparent: true,
            opacity: 0.92,
            shininess: 140,
            specular: 0xffffff
        })
    );
    skybridge.castShadow = true;
    district.add(skybridge);

    const skybridgeShell = new THREE.Mesh(
        new THREE.TubeGeometry(skybridgeCurve, 40, 0.24, 12, false),
        new THREE.MeshBasicMaterial({
            color: 0x87d3ff,
            transparent: true,
            opacity: 0.25
        })
    );
    district.add(skybridgeShell);

    const skybridgeLabel = createSignBoard('水晶连廊', {
        width: 2.3,
        height: 0.64,
        fontSize: 116,
        panelColor: 'rgba(235, 248, 255, 0.0)',
        textColor: '#eefcff',
        glowColor: 'rgba(127, 205, 255, 0.8)',
        borderColor: 'rgba(255,255,255,0)'
    });
    skybridgeLabel.position.set(6.1, 6.15, 1.55);
    skybridgeLabel.rotation.y = -Math.PI / 4.5;
    district.add(skybridgeLabel);

    const verticalSign = createVerticalNeon('重庆来福士');
    verticalSign.position.set(7.0, 3.3, 1.7);
    verticalSign.rotation.y = -Math.PI / 6;
    district.add(verticalSign);

    const plazaLights = [
        [4.4, 1.45], [5.4, 1.8], [6.4, 1.78], [7.6, 1.52]
    ];
    plazaLights.forEach(([x, z], index) => {
        const lamp = createStreetLamp(index % 2 === 0 ? 0xbfeaff : 0xfff0c1);
        lamp.position.set(x, 1.16, z);
        district.add(lamp);
    });

    const railDeck = createPathSegment(8.8, 0.42, 5.8, 4.8, 0.48, 0x8b90a3, -Math.PI / 8);
    district.add(railDeck);

    const train = createLightRailTrain();
    train.position.set(8.2, 0.6, 6.0);
    district.add(train);
    animatedActors.push({
        update(elapsed) {
            const cycle = (elapsed * 0.1) % 1;
            train.position.x = 7.3 + cycle * 4.0;
            train.position.z = 6.15 + cycle * 1.15;
        }
    });

    chongqingScene.add(district);
}

function createHongyadongDistrict() {
    const district = new THREE.Group();

    const warmBlocks = [
        { gx: 7, gy: 13, baseY: 1.28, width: 1.28, depth: 1.1, height: 2.2, sign: '雾都老灶', signColor: '#f7d87d' },
        { gx: 9, gy: 13, baseY: 1.28, width: 1.15, depth: 1.05, height: 1.95, sign: '巴渝茶馆', signColor: '#ffd38a' },
        { gx: 11, gy: 13, baseY: 1.28, width: 1.05, depth: 0.95, height: 1.72, sign: '灯影巷', signColor: '#ffa9d8' },
        { gx: 8, gy: 11, baseY: 1.68, width: 1.08, depth: 0.98, height: 1.65, sign: '吊脚楼', signColor: '#ffcf70' },
        { gx: 10, gy: 11, baseY: 1.68, width: 1.0, depth: 0.92, height: 1.48, sign: '渝味馆', signColor: '#ffc06d' },
        { gx: 9, gy: 9, baseY: 2.0, width: 0.95, depth: 0.85, height: 1.18, sign: '观景台', signColor: '#ffe18f' }
    ];

    warmBlocks.forEach((block, index) => {
        const world = gridToWorld(block.gx, block.gy);
        const house = createWarmShophouse(block, index);
        house.position.set(
            world.x + (block.gx - 8.5) * 0.045 + (index % 2 === 0 ? -0.05 : 0.06),
            block.baseY,
            world.z + (block.gy - 11.5) * 0.032
        );
        district.add(house);
    });

    const boardwalk = createPathSegment(1.0, 1.14, 7.2, 8.6, 0.8, 0xc49a8f, Math.PI / 28);
    district.add(boardwalk);

    const stairBridge = createPathSegment(1.2, 1.66, 5.9, 3.8, 0.46, 0xbe8f74, Math.PI / 10);
    district.add(stairBridge);

    for (let i = 0; i < 6; i++) {
        const support = new THREE.Mesh(
            new THREE.CylinderGeometry(0.06, 0.08, 1.0 + (i % 3) * 0.12, 6),
            new THREE.MeshStandardMaterial({ color: 0x675e71, roughness: 0.96 })
        );
        support.castShadow = true;
        support.position.set(-1.5 + i * 1.0, 0.5, 7.0 + (i % 2) * 0.1);
        district.add(support);
    }

    for (let i = 0; i < 5; i++) {
        const lantern = createLantern(i % 2 === 0 ? 0xff9954 : 0xffcb78);
        lantern.position.set(-0.3 + i * 0.85, 1.45 + (i % 3) * 0.06, 6.55 - (i % 2) * 0.18);
        district.add(lantern);
    }

    const hongyaLabel = createVerticalNeon('洪崖洞');
    hongyaLabel.position.set(2.0, 2.6, 2.6);
    hongyaLabel.rotation.y = -Math.PI / 10;
    district.add(hongyaLabel);

    chongqingScene.add(district);
}

function createRiverfrontDistrict() {
    const district = new THREE.Group();

    const promenade = createPathSegment(2.2, 0.42, 7.2, 5.8, 0.76, 0xc4b2b4, Math.PI / 24);
    district.add(promenade);

    const steps = createPathSegment(4.8, 0.34, 8.2, 2.3, 0.58, 0xa58f9c, Math.PI / 5);
    district.add(steps);

    const lampSpots = [
        [-0.4, 7.2], [0.8, 7.1], [2.0, 7.0], [3.2, 7.15], [4.4, 7.35]
    ];
    lampSpots.forEach(([x, z], index) => {
        const lamp = createStreetLamp(index % 2 === 0 ? 0xffd79a : 0xfff2bf);
        lamp.position.set(x, 0.34, z);
        district.add(lamp);
    });

    const boatPathA = [
        new THREE.Vector3(-5.8, -0.03, 9.0),
        new THREE.Vector3(-2.8, -0.03, 8.9),
        new THREE.Vector3(0.8, -0.03, 8.7),
        new THREE.Vector3(3.8, -0.03, 8.2)
    ];
    const boatA = createCruiseBoat(0xdf526c, 0x2d6eb6, 1.08);
    district.add(boatA.mesh);
    animatedActors.push(createCurveFollower(boatA.mesh, boatPathA, 0.032, 0.18, 0.04));

    const boatPathB = [
        new THREE.Vector3(5.8, -0.03, 8.2),
        new THREE.Vector3(7.6, -0.03, 8.0),
        new THREE.Vector3(9.4, -0.03, 7.6),
        new THREE.Vector3(11.0, -0.03, 7.2)
    ];
    const boatB = createCruiseBoat(0xe3a25d, 0x356ab0, 0.92);
    district.add(boatB.mesh);
    animatedActors.push(createCurveFollower(boatB.mesh, boatPathB, 0.028, 0.58, 0.03));

    const smallBoatPath = [
        new THREE.Vector3(-8.3, -0.06, -2.1),
        new THREE.Vector3(-6.5, -0.06, -1.7),
        new THREE.Vector3(-4.9, -0.06, -1.0),
        new THREE.Vector3(-3.2, -0.06, -0.2)
    ];
    const smallBoat = createRiverBoat(0xf0d56d, 0x4d76c1, 0.78);
    district.add(smallBoat.mesh);
    animatedActors.push(createCurveFollower(smallBoat.mesh, smallBoatPath, 0.04, 0.35, 0.025));

    chongqingScene.add(district);
}

function createAmbientProps() {
    // 左侧天际线：只保留公园区域外的建筑，避免遮挡绿色公园区域
    const skylineLeft = new THREE.Group();
    for (let i = 0; i < 2; i++) {
        const tower = createForegroundTower(
            1.3 + (i % 2) * 0.5,
            0.9 + (i % 3) * 0.08,
            0.9 + ((i + 1) % 3) * 0.06,
            i % 2 === 0 ? 0x6f7aa1 : 0x5f6f92
        );
        // 只在公园区域左侧外围放置建筑（x < -9）
        tower.position.set(-11.8 + i * 2.4, 0.4, -1.0 + (i % 3) * 0.25);
        skylineLeft.add(tower);
    }
    chongqingScene.add(skylineLeft);

    const skylineRight = new THREE.Group();
    // 右侧天际线建筑群：紧凑排列在右侧江岸平台上，远离来福士
    for (let i = 0; i < 4; i++) {
        const tower = createForegroundTower(
            1.4 + (i % 3) * 0.4,
            0.85 + (i % 2) * 0.06,
            0.82 + ((i + 1) % 2) * 0.06,
            i % 2 === 0 ? 0x717ca6 : 0x616b93
        );
        // 紧凑排列在右侧江岸平台上方
        tower.position.set(9.8 + i * 1.8, 0.38, 3.8 + (i % 2) * 1.2);
        skylineRight.add(tower);
    }
    chongqingScene.add(skylineRight);
}

function createRegionHitMeshes() {
    Object.keys(RegionSensors).forEach((regionId) => {
        const data = RegionSensors[regionId];
        const hitMesh = new THREE.Mesh(
            new THREE.BoxGeometry(data.width, data.height, data.depth),
            new THREE.MeshBasicMaterial({ visible: false })
        );
        hitMesh.position.set(data.x, data.y, data.z);
        hitMesh.userData = { region: regionId };
        ownedHitMeshes.push(hitMesh);
        chongqingScene.add(hitMesh);

        if (typeof districtMeshes !== 'undefined') {
            districtMeshes[regionId] = hitMesh;
        }
    });
}

function onCityMouseMove(event) {
    if (!chongqingRenderer || !chongqingCamera) {
        return;
    }

    const rect = chongqingCanvas.getBoundingClientRect();
    chongqingMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    chongqingMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    chongqingRaycaster.setFromCamera(chongqingMouse, chongqingCamera);
    const intersects = chongqingRaycaster.intersectObjects(ownedHitMeshes, false);

    if (intersects.length > 0) {
        const regionId = intersects[0].object.userData.region;
        if (regionId !== hoveredRegionId) {
            hoveredRegionId = regionId;
            if (typeof currentHoveredDistrict !== 'undefined') {
                currentHoveredDistrict = regionId;
            }
            chongqingCanvas.style.cursor = 'pointer';
            if (typeof showMapHoverCard === 'function') {
                showMapHoverCard(regionId);
            }
        }
    } else {
        clearRegionHover();
    }
}

function clearRegionHover() {
    if (hoveredRegionId) {
        hoveredRegionId = null;
        if (typeof currentHoveredDistrict !== 'undefined') {
            currentHoveredDistrict = null;
        }
        if (typeof hideMapHoverCard === 'function') {
            hideMapHoverCard();
        }
    }

    if (chongqingCanvas) {
        chongqingCanvas.style.cursor = 'default';
    }
}

function onCityClick(event) {
    if (!chongqingRenderer || !chongqingCamera) {
        return;
    }

    if (typeof State !== 'undefined' && State.isDragging) {
        return;
    }

    if (typeof Timers !== 'undefined' && Timers.isMoving) {
        return;
    }

    const floatingPetEl = document.getElementById('floating-pet');
    if (floatingPetEl) {
        const petRect = floatingPetEl.getBoundingClientRect();
        if (
            event.clientX >= petRect.left - 18 &&
            event.clientX <= petRect.right + 18 &&
            event.clientY >= petRect.top - 18 &&
            event.clientY <= petRect.bottom + 18
        ) {
            return;
        }
    }

    const rect = chongqingCanvas.getBoundingClientRect();
    chongqingMouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    chongqingMouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    chongqingRaycaster.setFromCamera(chongqingMouse, chongqingCamera);
    const intersects = chongqingRaycaster.intersectObjects(ownedHitMeshes, false);

    if (intersects.length === 0) {
        return;
    }

    const regionId = intersects[0].object.userData.region;
    if (typeof movePetToRegionCenter === 'function') {
        movePetToRegionCenter(regionId);
    }

    if (typeof showBubble === 'function' && typeof MapRegions !== 'undefined' && MapRegions[regionId]) {
        showBubble(`去${MapRegions[regionId].shortName}逛一圈吧`);
    }
}

function onCityResize() {
    if (!mountedContainer || !chongqingCamera || !chongqingRenderer) {
        return;
    }

    const aspect = mountedContainer.clientWidth / mountedContainer.clientHeight;
    chongqingCamera.left = (-FRUSTUM_SIZE * aspect) / 2;
    chongqingCamera.right = (FRUSTUM_SIZE * aspect) / 2;
    chongqingCamera.top = FRUSTUM_SIZE / 2;
    chongqingCamera.bottom = -FRUSTUM_SIZE / 2;
    chongqingCamera.updateProjectionMatrix();

    chongqingRenderer.setSize(mountedContainer.clientWidth, mountedContainer.clientHeight);
    chongqingRenderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
}

function animateChongqingCity() {
    animationFrameId = requestAnimationFrame(animateChongqingCity);

    if (!chongqingRenderer || !chongqingScene || !chongqingCamera || !sceneClock) {
        return;
    }

    const elapsed = sceneClock.getElapsedTime();
    animatedActors.forEach((actor) => {
        if (actor && typeof actor.update === 'function') {
            actor.update(elapsed);
        }
    });

    chongqingRenderer.render(chongqingScene, chongqingCamera);
}

function disposeChongqingCity() {
    if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
        animationFrameId = null;
    }

    if (chongqingCanvas) {
        chongqingCanvas.removeEventListener('mousemove', onCityMouseMove, false);
        chongqingCanvas.removeEventListener('mouseleave', clearRegionHover, false);
        chongqingCanvas.removeEventListener('click', onCityClick, false);
        chongqingCanvas.style.cursor = 'default';
    }

    window.removeEventListener('resize', onCityResize, false);
    clearRegionHover();

    animatedActors.length = 0;
    ownedHitMeshes.length = 0;

    if (typeof districtMeshes !== 'undefined') {
        districtMeshes = {};
    }

    if (chongqingScene) {
        chongqingScene.traverse((object) => {
            if (object.geometry) {
                object.geometry.dispose();
            }

            if (object.material) {
                const materials = Array.isArray(object.material) ? object.material : [object.material];
                materials.forEach((material) => {
                    if (material.map) material.map.dispose();
                    if (material.alphaMap) material.alphaMap.dispose();
                    if (material.emissiveMap) material.emissiveMap.dispose();
                    material.dispose();
                });
            }
        });
        chongqingScene.clear();
    }

    while (texturePool.length) {
        const texture = texturePool.pop();
        if (texture) texture.dispose();
    }

    if (chongqingRenderer) {
        chongqingRenderer.dispose();
    }

    sceneClock = null;
    chongqingScene = null;
    chongqingCamera = null;
    chongqingRenderer = null;
    chongqingRaycaster = null;
    chongqingMouse = null;
    chongqingCanvas = null;
    mountedContainer = null;
    hoveredRegionId = null;
}

function gridToWorld(gridX, gridY) {
    return {
        x: (gridX - HALF_GRID) * TILE_SIZE,
        z: (gridY - HALF_GRID) * TILE_SIZE
    };
}

function stampPlotRect(xStart, xEnd, yStart, yEnd, elevation, color) {
    for (let gx = xStart; gx <= xEnd; gx++) {
        for (let gy = yStart; gy <= yEnd; gy++) {
            const plot = createPlotTile(gx, gy, elevation, color);
            chongqingScene.add(plot);
        }
    }
}

function createPlotTile(gridX, gridY, elevation, color) {
    const world = gridToWorld(gridX, gridY);
    const tile = new THREE.Group();

    const baseShade = new THREE.Color(color).multiplyScalar(0.72);
    const foundation = new THREE.Mesh(
        new THREE.BoxGeometry(0.98, 0.07, 0.98),
        new THREE.MeshStandardMaterial({
            color: baseShade,
            roughness: 0.97,
            metalness: 0.02,
            flatShading: true
        })
    );
    foundation.position.y = -0.05;
    foundation.castShadow = true;
    foundation.receiveShadow = true;
    tile.add(foundation);

    const cap = new THREE.Mesh(
        new THREE.BoxGeometry(0.86, 0.12, 0.86),
        new THREE.MeshStandardMaterial({
            color,
            roughness: 0.82,
            metalness: 0.04,
            flatShading: true
        })
    );
    cap.position.y = 0.06;
    cap.castShadow = true;
    cap.receiveShadow = true;
    tile.add(cap);

    tile.position.set(world.x, elevation, world.z);
    return tile;
}

function createExtrudedPolygon(points, height, materialOptions, baseY) {
    const group = new THREE.Group();
    const shape = new THREE.Shape();
    shape.moveTo(points[0].x, -points[0].z);
    for (let i = 1; i < points.length; i++) {
        shape.lineTo(points[i].x, -points[i].z);
    }
    shape.closePath();

    const geometry = new THREE.ExtrudeGeometry(shape, {
        depth: height,
        bevelEnabled: false,
        steps: 1
    });
    geometry.rotateX(-Math.PI / 2);

    const mesh = new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({
            ...materialOptions,
            flatShading: true
        })
    );
    mesh.position.y = 0;
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    const shell = mesh.clone();
    shell.material = new THREE.MeshBasicMaterial({
        color: TERRAIN_SHADOW,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.42,
        depthWrite: false
    });
    shell.scale.set(1.028, 1.012, 1.028);
    shell.position.set(0, -0.04, 0);
    shell.renderOrder = -1;

    group.add(mesh);
    group.add(shell);
    group.position.y = baseY;
    return group;
}

function createRibbonMesh(pathPoints, widths, y, materialOptions) {
    const group = new THREE.Group();
    const polygon = buildRibbonPolygon(pathPoints, widths);
    const shape = new THREE.Shape();
    shape.moveTo(polygon[0].x, -polygon[0].z);
    for (let i = 1; i < polygon.length; i++) {
        shape.lineTo(polygon[i].x, -polygon[i].z);
    }
    shape.closePath();

    const geometry = new THREE.ShapeGeometry(shape);
    geometry.rotateX(-Math.PI / 2);
    const mesh = new THREE.Mesh(geometry, new THREE.MeshStandardMaterial({
        ...materialOptions,
        flatShading: true
    }));
    mesh.position.y = 0;
    mesh.receiveShadow = true;

    const shell = mesh.clone();
    shell.material = new THREE.MeshBasicMaterial({
        color: TERRAIN_EDGE,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.35,
        depthWrite: false
    });
    shell.scale.set(1.02, 1.01, 1.02);
    shell.position.set(0, -0.025, 0);
    shell.renderOrder = -1;

    group.add(mesh);
    group.add(shell);
    group.position.y = y;
    return group;
}

function buildRibbonPolygon(pathPoints, widths) {
    const left = [];
    const right = [];

    for (let i = 0; i < pathPoints.length; i++) {
        const current = pathPoints[i];
        const prev = pathPoints[Math.max(0, i - 1)];
        const next = pathPoints[Math.min(pathPoints.length - 1, i + 1)];
        const tangentX = next.x - prev.x;
        const tangentZ = next.z - prev.z;
        const tangentLength = Math.max(Math.hypot(tangentX, tangentZ), 0.0001);
        const normalX = -tangentZ / tangentLength;
        const normalZ = tangentX / tangentLength;
        const width = Array.isArray(widths) ? widths[i] : widths;

        left.push({
            x: current.x + normalX * width,
            z: current.z + normalZ * width
        });
        right.push({
            x: current.x - normalX * width,
            z: current.z - normalZ * width
        });
    }

    return left.concat(right.reverse());
}

function createCloud(x, y, z, scale) {
    const cloud = new THREE.Group();
    const bubbleSizes = [0.8, 0.6, 0.75, 0.52];
    const offsets = [
        [-0.7, 0.05, 0],
        [0.0, 0.18, 0],
        [0.65, 0.06, 0],
        [0.15, -0.18, 0]
    ];

    bubbleSizes.forEach((size, index) => {
        const puff = new THREE.Mesh(
            new THREE.SphereGeometry(size * scale, 14, 14),
            new THREE.MeshBasicMaterial({
                color: Palette.mist,
                transparent: true,
                opacity: 0.92
            })
        );
        puff.position.set(offsets[index][0] * scale, offsets[index][1] * scale, offsets[index][2]);
        cloud.add(puff);
    });

    cloud.position.set(x, y, z);
    chongqingScene.add(cloud);
}

function createAirplane() {
    const plane = new THREE.Group();
    plane.add(new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 0.12, 0.12),
        new THREE.MeshBasicMaterial({ color: 0xdfe7ef })
    ));

    const wing = new THREE.Mesh(
        new THREE.BoxGeometry(0.18, 0.02, 0.7),
        new THREE.MeshBasicMaterial({ color: 0xbdccd7 })
    );
    plane.add(wing);

    const tail = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.14, 0.08),
        new THREE.MeshBasicMaterial({ color: 0xdfe7ef })
    );
    tail.position.set(-0.18, 0.08, 0);
    plane.add(tail);

    plane.rotation.y = Math.PI / 6;
    return plane;
}

function createSkylineTower(height, width, depth) {
    const tower = new THREE.Group();
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshPhongMaterial({
            color: Palette.skylineNear,
            shininess: 12,
            flatShading: true
        })
    );
    body.position.y = height / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    tower.add(body);
    addContourShell(body, {
        color: TERRAIN_SHADOW,
        opacity: 0.22,
        scaleX: 1.06,
        scaleY: 1.03,
        scaleZ: 1.06,
        offsetY: -height * 0.015
    });
    addWindowGrid(tower, width, height, depth, '#f8dd93', {
        rows: Math.max(3, Math.round(height * 2.8)),
        cols: 2
    });
    return tower;
}

function createForegroundTower(height, width, depth, color) {
    const tower = new THREE.Group();
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(width, height, depth),
        new THREE.MeshPhongMaterial({
            color,
            shininess: 18,
            flatShading: true
        })
    );
    body.position.y = height / 2;
    body.castShadow = true;
    body.receiveShadow = true;
    tower.add(body);
    addContourShell(body, {
        color: TERRAIN_SHADOW,
        opacity: 0.24,
        scaleX: 1.05,
        scaleY: 1.03,
        scaleZ: 1.05,
        offsetY: -height * 0.015
    });
    addWindowGrid(tower, width, height, depth, '#ffd98c', {
        rows: Math.max(4, Math.round(height * 2.1)),
        cols: 2
    });
    return tower;
}

function createCableBridge(options) {
    const direction = new THREE.Vector3().subVectors(options.end, options.start);
    const length = Math.sqrt(direction.x * direction.x + direction.z * direction.z);
    const angle = Math.atan2(direction.z, direction.x);

    const group = new THREE.Group();
    group.position.set(
        (options.start.x + options.end.x) / 2,
        (options.start.y + options.end.y) / 2,
        (options.start.z + options.end.z) / 2
    );
    group.rotation.y = -angle;

    const deck = new THREE.Mesh(
        new THREE.BoxGeometry(length, 0.16, options.deckWidth),
        new THREE.MeshStandardMaterial({
            color: options.bridgeColor,
            roughness: 0.74,
            metalness: 0.06,
            flatShading: true
        })
    );
    deck.castShadow = true;
    deck.receiveShadow = true;
    group.add(deck);
    addContourShell(deck, {
        color: TERRAIN_SHADOW,
        opacity: 0.2,
        scaleX: 1.01,
        scaleY: 1.01,
        scaleZ: 1.06,
        offsetY: -0.03
    });

    const trussLeft = new THREE.Mesh(
        new THREE.BoxGeometry(length, 0.12, 0.12),
        new THREE.MeshStandardMaterial({ color: options.trussColor, roughness: 0.82, flatShading: true })
    );
    trussLeft.position.set(0, -0.12, -options.deckWidth * 0.42);
    group.add(trussLeft);

    const trussRight = trussLeft.clone();
    trussRight.position.z = options.deckWidth * 0.42;
    group.add(trussRight);

    options.pylonOffsets.forEach((offset) => {
        const pylon = new THREE.Mesh(
            new THREE.BoxGeometry(0.22, 2.9, 0.22),
            new THREE.MeshStandardMaterial({ color: 0xc8c3d8, roughness: 0.75, metalness: 0.05, flatShading: true })
        );
        pylon.position.set(offset, 1.45, 0);
        pylon.castShadow = true;
        group.add(pylon);

        [-options.deckWidth * 0.52, options.deckWidth * 0.52].forEach((laneZ) => {
            const cableGeometry = new THREE.BufferGeometry().setFromPoints([
                new THREE.Vector3(offset, 2.8, 0),
                new THREE.Vector3(offset - 1.5, 0.0, laneZ),
                new THREE.Vector3(offset + 1.5, 0.0, laneZ)
            ]);
            const cable = new THREE.Line(cableGeometry, new THREE.LineBasicMaterial({
                color: options.bridgeCable || Palette.bridgeCable,
                transparent: true,
                opacity: 0.7
            }));
            group.add(cable);
        });
    });

    for (let marker = -length / 2 + 0.6; marker < length / 2 - 0.6; marker += 1.2) {
        const roadMark = new THREE.Mesh(
            new THREE.BoxGeometry(0.52, 0.02, 0.05),
            new THREE.MeshBasicMaterial({ color: Palette.roadMark })
        );
        roadMark.position.set(marker, 0.09, 0);
        group.add(roadMark);
    }

    const sign = createSignBoard(options.labelText, {
        width: 2.5,
        height: 0.6,
        fontSize: 108,
        panelColor: 'rgba(213, 126, 67, 0.98)',
        textColor: '#fff7d7',
        glowColor: 'rgba(255, 234, 175, 0.22)',
        borderColor: 'rgba(110, 47, 19, 0.92)'
    });
    sign.position.copy(options.labelOffset);
    sign.position.y = -0.02;
    sign.rotation.x = -0.08;
    group.add(sign);

    return { group, length };
}

function createBridgeCarActor(group, length, speed, laneOffset, color, phase, yOffset) {
    const car = createVehicle(color);
    car.position.set(0, 0.13, laneOffset);
    group.add(car);

    return {
        update(elapsed) {
            const progress = ((elapsed * speed + phase) % 1) - 0.5;
            car.position.x = progress * (length - 1.0);
            car.position.y = 0.13 + yOffset * 0.02;
        }
    };
}

function createVehicle(color) {
    const vehicle = new THREE.Group();
    const body = new THREE.Mesh(
        new THREE.BoxGeometry(0.28, 0.12, 0.18),
        new THREE.MeshPhongMaterial({ color, shininess: 60 })
    );
    body.castShadow = true;
    body.position.y = 0.06;
    vehicle.add(body);

    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(0.14, 0.08, 0.16),
        new THREE.MeshPhongMaterial({ color: 0xf3f4f7, shininess: 80 })
    );
    roof.position.y = 0.15;
    vehicle.add(roof);
    return vehicle;
}

function createTree(size, crownColor) {
    const tree = new THREE.Group();
    const trunk = new THREE.Mesh(
        new THREE.CylinderGeometry(size * 0.09, size * 0.11, size * 0.58, 6),
        new THREE.MeshStandardMaterial({ color: 0x6a4737, roughness: 0.95 })
    );
    trunk.position.y = size * 0.26;
    trunk.castShadow = true;
    tree.add(trunk);

    const crown = new THREE.Mesh(
        new THREE.SphereGeometry(size * 0.36, 12, 12),
        new THREE.MeshStandardMaterial({ color: crownColor, roughness: 0.92 })
    );
    crown.position.y = size * 0.72;
    crown.castShadow = true;
    tree.add(crown);

    const crownB = crown.clone();
    crownB.scale.set(0.82, 0.82, 0.82);
    crownB.position.set(size * 0.16, size * 0.85, size * 0.08);
    tree.add(crownB);

    return tree;
}

function createPavilion() {
    const pavilion = new THREE.Group();
    const base = new THREE.Mesh(
        new THREE.BoxGeometry(1.0, 0.18, 1.0),
        new THREE.MeshStandardMaterial({ color: 0xc4ab85, roughness: 0.9 })
    );
    base.position.y = 0.09;
    pavilion.add(base);

    const pillars = [
        [-0.35, -0.35], [0.35, -0.35], [-0.35, 0.35], [0.35, 0.35]
    ];
    pillars.forEach(([x, z]) => {
        const pillar = new THREE.Mesh(
            new THREE.BoxGeometry(0.08, 0.7, 0.08),
            new THREE.MeshStandardMaterial({ color: 0x7a5545, roughness: 0.85 })
        );
        pillar.position.set(x, 0.44, z);
        pavilion.add(pillar);
    });

    const roof = new THREE.Mesh(
        new THREE.ConeGeometry(0.78, 0.38, 4),
        new THREE.MeshPhongMaterial({ color: 0x6a3426, shininess: 25 })
    );
    roof.rotation.y = Math.PI / 4;
    roof.position.y = 0.96;
    pavilion.add(roof);

    return pavilion;
}

function createPathSegment(x, y, z, width, depth, color, rotationY) {
    const segment = new THREE.Group();

    const base = new THREE.Mesh(
        new THREE.BoxGeometry(width * 1.02, 0.08, depth * 1.04),
        new THREE.MeshStandardMaterial({
            color: new THREE.Color(color).multiplyScalar(0.68),
            roughness: 0.96,
            metalness: 0.02,
            flatShading: true
        })
    );
    base.position.y = -0.035;
    base.receiveShadow = true;
    base.castShadow = true;
    segment.add(base);

    const cap = new THREE.Mesh(
        new THREE.BoxGeometry(width, 0.12, depth),
        new THREE.MeshStandardMaterial({
            color,
            roughness: 0.82,
            metalness: 0.03,
            flatShading: true
        })
    );
    cap.position.y = 0.045;
    cap.receiveShadow = true;
    cap.castShadow = true;
    segment.add(cap);

    segment.position.set(x, y, z);
    segment.rotation.y = rotationY || 0;
    return segment;
}

function addContourShell(target, options = {}) {
    if (!target || !target.geometry) {
        return null;
    }

    const shell = new THREE.Mesh(
        target.geometry.clone(),
        new THREE.MeshBasicMaterial({
            color: options.color || TERRAIN_SHADOW,
            side: THREE.BackSide,
            transparent: true,
            opacity: options.opacity ?? 0.28,
            depthWrite: false
        })
    );

    shell.scale.set(
        options.scaleX || options.scale || 1.03,
        options.scaleY || options.scale || 1.015,
        options.scaleZ || options.scale || 1.03
    );
    shell.position.set(
        options.offsetX || 0,
        options.offsetY || -0.02,
        options.offsetZ || 0
    );
    shell.renderOrder = -1;
    target.add(shell);
    return shell;
}

function createRafflesTower(spec) {
    const tower = new THREE.Group();
    const glass = new THREE.Mesh(
        new THREE.CylinderGeometry(spec.top, spec.bottom, spec.height, 4, 1),
        new THREE.MeshPhongMaterial({
            color: Palette.coolGlassDeep,
            shininess: 95,
            specular: 0xffffff,
            transparent: true,
            opacity: 0.82,
            flatShading: true
        })
    );
    glass.rotation.y = Math.PI / 4;
    glass.position.y = spec.height / 2 + 1.02;
    glass.castShadow = true;
    glass.receiveShadow = true;
    tower.add(glass);
    addContourShell(glass, {
        color: TERRAIN_SHADOW,
        opacity: 0.26,
        scaleX: 1.07,
        scaleY: 1.03,
        scaleZ: 1.07,
        offsetY: -spec.height * 0.02
    });

    const frameTop = new THREE.Mesh(
        new THREE.BoxGeometry(spec.bottom * 1.2, 0.16, spec.bottom * 1.2),
        new THREE.MeshStandardMaterial({ color: 0x839cc4, roughness: 0.55, metalness: 0.18, flatShading: true })
    );
    frameTop.rotation.y = Math.PI / 4;
    frameTop.position.y = spec.height + 1.08;
    tower.add(frameTop);

    const mullions = [-0.18, 0.18];
    mullions.forEach((offset) => {
        const strip = new THREE.Mesh(
            new THREE.BoxGeometry(0.06, spec.height * 0.95, 0.02),
            new THREE.MeshBasicMaterial({ color: 0xd9f1ff, transparent: true, opacity: 0.42 })
        );
        strip.position.set(offset, spec.height / 2 + 1.02, spec.bottom * 0.76);
        strip.rotation.y = Math.PI / 4;
        tower.add(strip);
    });

    addWindowGrid(tower, spec.bottom * 1.05, spec.height * 0.85, 0.04, '#ffe2ad', {
        rows: Math.max(6, Math.round(spec.height * 1.35)),
        cols: 3,
        anchorY: spec.height / 2 + 0.9,
        anchorZ: spec.bottom * 0.74,
        planeMode: true,
        rotationY: Math.PI / 4
    });

    tower.position.set(spec.x, 0, spec.z);
    return tower;
}

function createLightRailTrain() {
    const train = new THREE.Group();

    for (let i = 0; i < 3; i++) {
        const car = new THREE.Group();
        const body = new THREE.Mesh(
            new THREE.BoxGeometry(0.82, 0.32, 0.34),
            new THREE.MeshPhongMaterial({ color: 0xe8f0ff, shininess: 70 })
        );
        body.castShadow = true;
        car.add(body);

        const stripe = new THREE.Mesh(
            new THREE.BoxGeometry(0.82, 0.08, 0.36),
            new THREE.MeshBasicMaterial({ color: 0x4eb6ff })
        );
        stripe.position.y = 0.02;
        car.add(stripe);

        const windowStrip = new THREE.Mesh(
            new THREE.BoxGeometry(0.66, 0.12, 0.02),
            new THREE.MeshBasicMaterial({ color: 0x27496f })
        );
        windowStrip.position.set(0, 0.06, 0.18);
        car.add(windowStrip);

        car.position.set(i * 0.88, 0, i * 0.22);
        train.add(car);
    }

    train.rotation.y = -Math.PI / 8;
    return train;
}

function createWarmShophouse(block, index) {
    const house = new THREE.Group();
    const bodyColor = index % 3 === 0 ? 0xce6d2a : index % 3 === 1 ? 0xe88f34 : 0xbb5921;
    const upperColor = index % 2 === 0 ? 0xf0b24e : 0xe08b3f;

    const mainBody = new THREE.Mesh(
        new THREE.BoxGeometry(block.width, block.height, block.depth),
        new THREE.MeshStandardMaterial({
            color: bodyColor,
            emissive: 0x431707,
            emissiveIntensity: 0.14,
            roughness: 0.9,
            metalness: 0.03,
            flatShading: true
        })
    );
    mainBody.position.y = block.height / 2;
    mainBody.castShadow = true;
    mainBody.receiveShadow = true;
    house.add(mainBody);
    addContourShell(mainBody, {
        color: TERRAIN_SHADOW,
        opacity: 0.22,
        scaleX: 1.05,
        scaleY: 1.03,
        scaleZ: 1.05,
        offsetY: -block.height * 0.03
    });

    const rearBlock = new THREE.Mesh(
        new THREE.BoxGeometry(block.width * 0.76, block.height * 0.56, block.depth * 0.54),
        new THREE.MeshStandardMaterial({
            color: index % 2 === 0 ? 0xbd5a22 : 0xae571f,
            emissive: 0x33120a,
            emissiveIntensity: 0.11,
            roughness: 0.95,
            metalness: 0.02,
            flatShading: true
        })
    );
    rearBlock.position.set(0, block.height * 0.28, -block.depth * 0.16);
    rearBlock.castShadow = true;
    rearBlock.receiveShadow = true;
    house.add(rearBlock);
    addContourShell(rearBlock, {
        color: TERRAIN_SHADOW,
        opacity: 0.2,
        scaleX: 1.06,
        scaleY: 1.03,
        scaleZ: 1.06,
        offsetY: -block.height * 0.02
    });

    const upperBody = new THREE.Mesh(
        new THREE.BoxGeometry(block.width * 0.84, block.height * 0.34, block.depth * 0.82),
        new THREE.MeshStandardMaterial({
            color: upperColor,
            emissive: 0x552010,
            emissiveIntensity: 0.12,
            roughness: 0.9,
            metalness: 0.03,
            flatShading: true
        })
    );
    upperBody.position.y = block.height * 0.82;
    house.add(upperBody);
    addContourShell(upperBody, {
        color: TERRAIN_SHADOW,
        opacity: 0.18,
        scaleX: 1.04,
        scaleY: 1.03,
        scaleZ: 1.04,
        offsetY: -block.height * 0.02
    });

    const roof = new THREE.Mesh(
        new THREE.ConeGeometry(Math.max(block.width, block.depth) * 0.72, 0.28, 4),
        new THREE.MeshPhongMaterial({
            color: Palette.warmRoof,
            shininess: 18
        })
    );
    roof.rotation.y = Math.PI / 4;
    roof.position.y = block.height + 0.18;
    house.add(roof);

    const eave = new THREE.Mesh(
        new THREE.BoxGeometry(block.width * 1.02, 0.05, block.depth * 1.05),
        new THREE.MeshStandardMaterial({ color: 0x6b3829, roughness: 0.88, flatShading: true })
    );
    eave.position.y = block.height + 0.01;
    house.add(eave);

    const frontPlatform = new THREE.Mesh(
        new THREE.BoxGeometry(block.width * 1.02, 0.08, block.depth * 0.34),
        new THREE.MeshStandardMaterial({ color: 0xa15a31, roughness: 0.92, flatShading: true })
    );
    frontPlatform.position.set(0, 0.06, block.depth * 0.42);
    frontPlatform.castShadow = true;
    frontPlatform.receiveShadow = true;
    house.add(frontPlatform);

    addWindowGrid(house, block.width * 0.9, block.height * 0.9, block.depth, '#ffd790', {
        rows: Math.max(3, Math.round(block.height * 2.2)),
        cols: 3
    });

    if (block.sign) {
        const sign = createSignBoard(block.sign, {
            width: Math.max(0.46, block.width * 0.9),
            height: 0.24,
            fontSize: 44,
            panelColor: 'rgba(118, 69, 43, 0.94)',
            textColor: block.signColor || '#ffe0a1',
            glowColor: 'rgba(255, 216, 120, 0.20)',
            borderColor: 'rgba(74, 31, 20, 0.94)'
        });
        sign.position.set(0, Math.min(block.height * 0.55, 0.86), block.depth / 2 + 0.03);
        house.add(sign);
    }

    const lanternLeft = createLantern(0xffa15c);
    lanternLeft.position.set(-block.width * 0.44, Math.min(block.height * 0.45, 0.72), block.depth / 2 + 0.02);
    house.add(lanternLeft);

    const lanternRight = createLantern(0xffd07b);
    lanternRight.position.set(block.width * 0.44, Math.min(block.height * 0.48, 0.78), block.depth / 2 + 0.02);
    house.add(lanternRight);

    return house;
}

function createCruiseBoat(accentColor, hullColor, scale) {
    const mesh = new THREE.Group();
    const hull = new THREE.Mesh(
        new THREE.BoxGeometry(1.6 * scale, 0.28 * scale, 0.54 * scale),
        new THREE.MeshPhongMaterial({ color: hullColor, shininess: 50 })
    );
    hull.position.y = 0.08 * scale;
    mesh.add(hull);

    const deck = new THREE.Mesh(
        new THREE.BoxGeometry(1.15 * scale, 0.32 * scale, 0.42 * scale),
        new THREE.MeshPhongMaterial({ color: 0xf0f4ff, shininess: 80 })
    );
    deck.position.y = 0.3 * scale;
    mesh.add(deck);

    const stripe = new THREE.Mesh(
        new THREE.BoxGeometry(1.24 * scale, 0.08 * scale, 0.44 * scale),
        new THREE.MeshBasicMaterial({ color: accentColor })
    );
    stripe.position.y = 0.16 * scale;
    mesh.add(stripe);

    const roof = new THREE.Mesh(
        new THREE.BoxGeometry(0.82 * scale, 0.12 * scale, 0.34 * scale),
        new THREE.MeshBasicMaterial({ color: 0xfff7dc })
    );
    roof.position.y = 0.52 * scale;
    mesh.add(roof);

    return { mesh };
}

function createRiverBoat(accentColor, hullColor, scale) {
    const mesh = new THREE.Group();
    const hull = new THREE.Mesh(
        new THREE.BoxGeometry(0.88 * scale, 0.2 * scale, 0.28 * scale),
        new THREE.MeshPhongMaterial({ color: hullColor, shininess: 45 })
    );
    hull.position.y = 0.04 * scale;
    mesh.add(hull);

    const cabin = new THREE.Mesh(
        new THREE.BoxGeometry(0.38 * scale, 0.18 * scale, 0.18 * scale),
        new THREE.MeshPhongMaterial({ color: 0xfff6e1, shininess: 65 })
    );
    cabin.position.y = 0.18 * scale;
    mesh.add(cabin);

    const flag = new THREE.Mesh(
        new THREE.BoxGeometry(0.18 * scale, 0.09 * scale, 0.02 * scale),
        new THREE.MeshBasicMaterial({ color: accentColor })
    );
    flag.position.set(0.24 * scale, 0.28 * scale, 0);
    mesh.add(flag);

    return { mesh };
}

function createCurveFollower(mesh, points, speed, phase, bobAmount) {
    const curve = new THREE.CatmullRomCurve3(points);
    return {
        update(elapsed) {
            const t = (elapsed * speed + phase) % 1;
            const point = curve.getPoint(t);
            const next = curve.getPoint((t + 0.01) % 1);
            mesh.position.set(point.x, point.y + Math.sin(elapsed * 2.8 + phase * 9) * bobAmount, point.z);
            mesh.rotation.y = -Math.atan2(next.z - point.z, next.x - point.x);
        }
    };
}

function createStreetLamp(lightColor) {
    const lamp = new THREE.Group();

    const pole = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.04, 0.78, 6),
        new THREE.MeshStandardMaterial({ color: 0x525463, roughness: 0.9 })
    );
    pole.position.y = 0.39;
    pole.castShadow = true;
    lamp.add(pole);

    const glow = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 12, 12),
        new THREE.MeshBasicMaterial({ color: lightColor })
    );
    glow.position.y = 0.81;
    lamp.add(glow);

    return lamp;
}

function createLantern(color) {
    const lantern = new THREE.Group();
    const body = new THREE.Mesh(
        new THREE.SphereGeometry(0.08, 12, 12),
        new THREE.MeshBasicMaterial({ color })
    );
    lantern.add(body);

    const tail = new THREE.Mesh(
        new THREE.BoxGeometry(0.02, 0.08, 0.02),
        new THREE.MeshBasicMaterial({ color: 0x8a2718 })
    );
    tail.position.y = -0.1;
    lantern.add(tail);
    return lantern;
}

function createWaterLabel(text, x, y, z, rotationY) {
    const label = createSignBoard(text, {
        width: 3.4,
        height: 0.78,
        fontSize: 126,
        panelColor: 'rgba(255, 255, 255, 0.0)',
        textColor: '#eef7ff',
        glowColor: 'rgba(125, 198, 255, 0.24)',
        borderColor: 'rgba(255,255,255,0)'
    });
    label.position.set(x, y, z);
    label.rotation.x = -Math.PI / 2;
    label.rotation.z = rotationY || 0;
    chongqingScene.add(label);
}

function createVerticalNeon(text) {
    return createSignBoard(text, {
        width: 1.05,
        height: 3.15,
        fontSize: 96,
        vertical: true,
        panelColor: 'rgba(255, 241, 220, 0.95)',
        textColor: '#f7be4f',
        glowColor: 'rgba(255, 165, 92, 0.28)',
        borderColor: 'rgba(102, 32, 14, 0.92)'
    });
}

function createSignBoard(text, options) {
    const canvas = document.createElement('canvas');
    canvas.width = options.vertical ? 256 : 512;
    canvas.height = options.vertical ? 768 : 256;
    const ctx = canvas.getContext('2d');

    const radius = 26;
    roundRect(ctx, 12, 12, canvas.width - 24, canvas.height - 24, radius, options.panelColor);

    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = 10;
    roundRect(ctx, 12, 12, canvas.width - 24, canvas.height - 24, radius, null, true);

    ctx.shadowColor = options.glowColor;
    ctx.shadowBlur = options.vertical ? 22 : 18;
    ctx.fillStyle = options.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = `700 ${options.fontSize}px "Microsoft YaHei", "Noto Sans SC", sans-serif`;

    if (options.vertical) {
        const chars = text.split('');
        const step = (canvas.height - 120) / Math.max(chars.length - 1, 1);
        chars.forEach((char, index) => {
            ctx.fillText(char, canvas.width / 2, 60 + index * step);
        });
    } else {
        ctx.fillText(text, canvas.width / 2, canvas.height / 2);
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    texturePool.push(texture);

    const board = new THREE.Mesh(
        new THREE.PlaneGeometry(options.width, options.height),
        new THREE.MeshBasicMaterial({
            map: texture,
            transparent: true,
            depthWrite: false
        })
    );
    return board;
}

function addWindowGrid(parent, width, height, depth, color, options) {
    const rows = options.rows || 4;
    const cols = options.cols || 2;
    const sizeW = Math.min(0.12, width / (cols * 2.4));
    const sizeH = Math.min(0.18, height / (rows * 1.9));
    const anchorY = options.anchorY || height / 2;
    const anchorZ = options.anchorZ || depth / 2 + 0.01;
    const rotationY = options.rotationY || 0;

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if ((row + col) % 3 === 1) {
                continue;
            }

            const windowMesh = new THREE.Mesh(
                new THREE.PlaneGeometry(sizeW, sizeH),
                new THREE.MeshBasicMaterial({
                    color,
                    transparent: true,
                    opacity: 0.86,
                    side: THREE.DoubleSide
                })
            );
            windowMesh.position.set(
                -width / 2 + ((col + 0.7) * width) / cols,
                -height / 2 + ((row + 0.65) * height) / rows + anchorY,
                anchorZ
            );
            windowMesh.rotation.y = rotationY;
            parent.add(windowMesh);
        }
    }
}

function roundRect(ctx, x, y, width, height, radius, fillStyle, strokeOnly) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();

    if (fillStyle) {
        ctx.fillStyle = fillStyle;
        ctx.fill();
    }

    if (strokeOnly) {
        ctx.stroke();
    }
}

function getChongqingRoutePoints(regionId) {
    const route = PetRouteLibrary[regionId] || PetRouteLibrary.calm;
    return route.map((point) => ({ ...point }));
}

function projectChongqingWorldPoint(point) {
    if (!chongqingCamera || !mountedContainer || !point) {
        return null;
    }

    const projected = new THREE.Vector3(point.x, point.y, point.z).project(chongqingCamera);
    const rect = mountedContainer.getBoundingClientRect();

    return {
        x: ((projected.x + 1) * 0.5) * rect.width,
        y: ((1 - (projected.y + 1) * 0.5)) * rect.height,
        z: projected.z
    };
}

window.initChongqingCity = initChongqingCity;
window.disposeChongqingCity = disposeChongqingCity;
window.getChongqingRoutePoints = getChongqingRoutePoints;
window.projectChongqingWorldPoint = projectChongqingWorldPoint;
