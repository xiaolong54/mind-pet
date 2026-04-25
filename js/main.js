// ========== 宠物形象配置 - 精致2.5D等距风格 ==========
const PetTypes = {
    bunny: {
        name: '小兔子',
        bodyParts: `
            <g stroke="#3e2f2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- 身体：圆润的椭圆柱体 -->
                <ellipse cx="50" cy="95" rx="22" ry="28" fill="var(--pet-belly)"/>
                <ellipse cx="50" cy="95" rx="22" ry="28" fill="var(--pet-main)" clip-path="url(#petClip)"/>
                <path d="M28,82 Q50,68 72,82 Q72,115 50,125 Q28,115 28,82Z" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <path d="M28,82 Q50,68 72,82 Q72,100 50,110 Q28,100 28,82Z" fill="var(--pet-belly)"/>
                
                <!-- 头部：精致的圆脸 -->
                <circle cx="53" cy="52" r="26" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <ellipse cx="53" cy="58" rx="18" ry="14" fill="var(--pet-belly)"/>
                
                <!-- 耳朵：柔软的长耳朵 -->
                <ellipse class="pet-ear-left" cx="42" cy="28" rx="8" ry="22" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5" transform="rotate(-8,42,28)"/>
                <ellipse cx="42" cy="30" rx="5" ry="16" fill="var(--pet-inner)" opacity="0.85"/>
                <ellipse class="pet-ear-right" cx="64" cy="26" rx="8" ry="22" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5" transform="rotate(8,64,26)"/>
                <ellipse cx="64" cy="28" rx="5" ry="16" fill="var(--pet-inner)" opacity="0.85"/>
                
                <!-- 脸面板：可爱的圆脸 -->
                <ellipse class="pet-face-panel" cx="53" cy="56" rx="16" ry="13" fill="rgba(255,255,255,0.25)" stroke="none"/>
                
                <!-- 尾巴：毛茸茸的圆尾 -->
                <circle class="pet-tail" cx="76" cy="105" r="9" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="1.2"/>
                <circle cx="76" cy="105" r="5" fill="var(--pet-main)" opacity="0.5"/>
                
                <!-- 爪子 -->
                <ellipse class="pet-paw" cx="38" cy="118" rx="6" ry="4" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="1"/>
                <ellipse class="pet-paw pet-paw-front" cx="62" cy="118" rx="6" ry="4" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="1"/>
                
                <!-- 腮红 -->
                <ellipse cx="39" cy="62" rx="4" ry="2.5" fill="var(--pet-blush)" opacity="0.3"/>
                <ellipse cx="67" cy="62" rx="4" ry="2.5" fill="var(--pet-blush)" opacity="0.3"/>
            </g>
        `
    },
    cat: {
        name: '小猫咪',
        bodyParts: `
            <g stroke="#3e2f2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- 身体 -->
                <path d="M30,80 Q50,65 70,80 Q72,115 50,125 Q28,115 30,80Z" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <path d="M32,82 Q50,70 68,82 Q70,102 50,112 Q32,102 32,82Z" fill="var(--pet-belly)"/>
                
                <!-- 头部：圆脸猫 -->
                <circle cx="53" cy="50" r="24" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <ellipse cx="53" cy="56" rx="16" ry="12" fill="var(--pet-belly)"/>
                
                <!-- 耳朵：三角形的猫耳 -->
                <polygon class="pet-ear-left" points="40,32 46,12 52,32" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.2"/>
                <polygon points="42,30 46,16 50,30" fill="var(--pet-inner)" opacity="0.8"/>
                <polygon class="pet-ear-right" points="54,32 60,12 66,32" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.2"/>
                <polygon points="56,30 60,16 64,30" fill="var(--pet-inner)" opacity="0.8"/>
                
                <!-- 尾巴：弯曲的猫尾 -->
                <path class="pet-tail" d="M72,95 Q90,85 88,68 Q86,55 78,58" fill="none" stroke="var(--pet-main)" stroke-width="6" stroke-linecap="round"/>
                <path d="M72,95 Q90,85 88,68" fill="none" stroke="var(--pet-dark)" stroke-width="1.5" stroke-linecap="round" opacity="0.3"/>
                
                <!-- 脸面板 -->
                <ellipse class="pet-face-panel" cx="53" cy="54" rx="14" ry="11" fill="rgba(255,255,255,0.22)" stroke="none"/>
                
                <!-- 胡须 -->
                <g class="pet-accent" stroke="var(--pet-dark)" stroke-width="1" stroke-linecap="round" opacity="0.4">
                    <line x1="33" y1="56" x2="22" y2="54"/>
                    <line x1="33" y1="60" x2="21" y2="62"/>
                    <line x1="73" y1="56" x2="84" y2="54"/>
                    <line x1="73" y1="60" x2="85" y2="62"/>
                </g>
                
                <!-- 爪子 -->
                <ellipse class="pet-paw" cx="38" cy="118" rx="5" ry="3.5" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="0.8"/>
                <ellipse class="pet-paw pet-paw-front" cx="62" cy="118" rx="5" ry="3.5" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="0.8"/>
                
                <!-- 腮红 -->
                <ellipse cx="40" cy="61" rx="3.5" ry="2" fill="var(--pet-blush)" opacity="0.35"/>
                <ellipse cx="66" cy="61" rx="3.5" ry="2" fill="var(--pet-blush)" opacity="0.35"/>
            </g>
        `
    },
    bear: {
        name: '小熊',
        bodyParts: `
            <g stroke="#3e2f2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- 身体：圆滚滚的熊身 -->
                <ellipse cx="53" cy="100" rx="26" ry="30" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <ellipse cx="53" cy="100" rx="20" ry="24" fill="var(--pet-belly)" opacity="0.5"/>
                
                <!-- 头部：圆圆的熊头 -->
                <circle cx="53" cy="52" r="26" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <ellipse cx="53" cy="60" rx="18" ry="14" fill="var(--pet-belly)" opacity="0.6"/>
                
                <!-- 耳朵：圆耳朵 -->
                <circle class="pet-ear-left" cx="38" cy="32" r="10" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <circle cx="38" cy="32" r="6" fill="var(--pet-inner)" opacity="0.7"/>
                <circle class="pet-ear-right" cx="68" cy="32" r="10" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <circle cx="68" cy="32" r="6" fill="var(--pet-inner)" opacity="0.7"/>
                
                <!-- 脸面板 -->
                <ellipse class="pet-face-panel" cx="53" cy="56" rx="16" ry="13" fill="rgba(255,255,255,0.2)" stroke="none"/>
                
                <!-- 肚子上的熊掌印 -->
                <ellipse class="pet-accent" cx="53" cy="105" rx="10" ry="8" fill="var(--pet-belly)" opacity="0.6"/>
                
                <!-- 爪子 -->
                <ellipse class="pet-paw" cx="38" cy="120" rx="6" ry="4" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="1"/>
                <ellipse class="pet-paw pet-paw-front" cx="68" cy="120" rx="6" ry="4" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="1"/>
                
                <!-- 腮红 -->
                <ellipse cx="39" cy="63" rx="4" ry="2.5" fill="var(--pet-blush)" opacity="0.3"/>
                <ellipse cx="67" cy="63" rx="4" ry="2.5" fill="var(--pet-blush)" opacity="0.3"/>
            </g>
        `
    },
    fox: {
        name: '小狐狸',
        bodyParts: `
            <g stroke="#3e2f2a" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <!-- 身体 -->
                <path d="M30,80 Q50,65 70,80 Q72,115 50,125 Q28,115 30,80Z" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <path d="M32,82 Q50,70 68,82 Q70,102 50,112 Q32,102 32,82Z" fill="var(--pet-belly)"/>
                
                <!-- 头部：尖脸狐狸 -->
                <ellipse cx="53" cy="50" rx="22" ry="24" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <ellipse cx="53" cy="56" rx="15" ry="12" fill="var(--pet-belly)"/>
                
                <!-- 耳朵：尖耳朵 -->
                <polygon class="pet-ear-left" points="40,30 45,8 52,28" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <polygon points="42,28 45,14 50,27" fill="var(--pet-inner)" opacity="0.8"/>
                <polygon class="pet-ear-right" points="54,30 59,8 66,28" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <polygon points="56,28 59,14 64,27" fill="var(--pet-inner)" opacity="0.8"/>
                
                <!-- 鼻子：标志性的狐狸鼻 -->
                <ellipse class="pet-accent" cx="53" cy="67" rx="9" ry="7" fill="#fff1d9"/>
                <ellipse cx="53" cy="66" rx="4" ry="3" fill="#333"/>
                
                <!-- 尾巴：大尾巴 -->
                <path class="pet-tail" d="M72,95 Q95,80 90,60 Q88,50 82,55 Q85,70 78,85" fill="var(--pet-main)" stroke="var(--pet-dark)" stroke-width="1.5"/>
                <path d="M85,58 Q82,52 80,56" fill="none" stroke="var(--pet-inner)" stroke-width="3" stroke-linecap="round" opacity="0.6"/>
                
                <!-- 脸面板 -->
                <ellipse class="pet-face-panel" cx="53" cy="54" rx="14" ry="11" fill="rgba(255,255,255,0.2)" stroke="none"/>
                
                <!-- 爪子 -->
                <ellipse class="pet-paw" cx="38" cy="118" rx="5" ry="3.5" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="0.8"/>
                <ellipse class="pet-paw pet-paw-front" cx="62" cy="118" rx="5" ry="3.5" fill="var(--pet-belly)" stroke="var(--pet-dark)" stroke-width="0.8"/>
                
                <!-- 腮红 -->
                <ellipse cx="40" cy="62" rx="3.5" ry="2" fill="var(--pet-blush)" opacity="0.3"/>
                <ellipse cx="66" cy="62" rx="3.5" ry="2" fill="var(--pet-blush)" opacity="0.3"/>
            </g>
        `
    }
};

// ========== 表情配置 - 精致的2.5D表情 ==========
const Expressions = {
    happy: `
        <g class="expression">
            <path d="M43 54 Q47 48 51 54" stroke="#2d2724" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <path d="M55 54 Q59 48 63 54" stroke="#2d2724" stroke-width="2.2" fill="none" stroke-linecap="round"/>
            <circle cx="47" cy="52" r="1.8" fill="white"/>
            <circle cx="59" cy="52" r="1.8" fill="white"/>
        </g>
        <g class="mouth"><path d="M48 66 Q53 72 58 66" stroke="#2d2724" stroke-width="2" fill="none" stroke-linecap="round"/></g>
    `,
    calm: `
        <g class="expression">
            <ellipse cx="47" cy="54" rx="4" ry="5" fill="#2d2724"/>
            <ellipse cx="61" cy="54" rx="4" ry="5" fill="#2d2724"/>
            <circle cx="46" cy="52" r="1.5" fill="white"/>
            <circle cx="60" cy="52" r="1.5" fill="white"/>
        </g>
        <g class="mouth"><line x1="49" y1="66" x2="57" y2="66" stroke="#2d2724" stroke-width="1.8" stroke-linecap="round"/></g>
    `,
    worried: `
        <g class="expression">
            <ellipse cx="47" cy="55" rx="4" ry="3.5" fill="#2d2724"/>
            <ellipse cx="61" cy="55" rx="4" ry="3.5" fill="#2d2724"/>
            <path d="M43 50 L49 52" stroke="#2d2724" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M65 50 L59 52" stroke="#2d2724" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="46" cy="54" r="1.2" fill="white"/>
            <circle cx="60" cy="54" r="1.2" fill="white"/>
        </g>
        <g class="mouth"><path d="M50 67 Q53 64 56 67" stroke="#2d2724" stroke-width="1.5" fill="none" stroke-linecap="round"/></g>
    `,
    sad: `
        <g class="expression">
            <ellipse cx="47" cy="56" rx="3.5" ry="3" fill="#2d2724"/>
            <ellipse cx="61" cy="56" rx="3.5" ry="3" fill="#2d2724"/>
            <path d="M44 51 L49 53" stroke="#2d2724" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M64 51 L59 53" stroke="#2d2724" stroke-width="1.5" stroke-linecap="round"/>
            <ellipse cx="45" cy="60" rx="1.2" ry="2.8" fill="#92d8ff" opacity="0.8"/>
            <ellipse cx="63" cy="60" rx="1.2" ry="2.8" fill="#92d8ff" opacity="0.8"/>
        </g>
        <g class="mouth"><path d="M49 68 Q53 65 57 68" stroke="#2d2724" stroke-width="1.5" fill="none" stroke-linecap="round"/></g>
    `,
    surprised: `
        <g class="expression">
            <circle cx="47" cy="54" r="5" fill="#2d2724"/>
            <circle cx="61" cy="54" r="5" fill="#2d2724"/>
            <circle cx="46" cy="52" r="1.6" fill="white"/>
            <circle cx="60" cy="52" r="1.6" fill="white"/>
        </g>
        <g class="mouth"><ellipse cx="54" cy="67" rx="4" ry="5.5" fill="#2d2724"/></g>
    `,
    tired: `
        <g class="expression">
            <line x1="44" y1="55" x2="50" y2="56" stroke="#2d2724" stroke-width="2.2" stroke-linecap="round"/>
            <line x1="56" y1="56" x2="62" y2="55" stroke="#2d2724" stroke-width="2.2" stroke-linecap="round"/>
        </g>
        <g class="mouth"><ellipse cx="54" cy="67" rx="3" ry="1.8" fill="#2d2724"/></g>
    `
};

// ========== 全局状态 ==========
const State = {
    pet: { type: 'bunny', color: '#FFB6C1', name: '小伙伴' },
    stats: { mood: 75, stress: 45, energy: 70 },
    history: [],
    isFirstVisit: true,
    joyValue: 50,
    clickCount: 0,
    currentExpression: 'calm',
    position: { x: null, y: null },
    selectedMood: null,
    wanderMode: true,
    records: []
};

// ========== 心情类型配置 ==========
const MoodTypes = {
    happy: { icon: '😊', name: '开心', color: '#FF69B4' },
    calm: { icon: '😌', name: '平静', color: '#87CEEB' },
    anxious: { icon: '😰', name: '焦虑', color: '#808080' },
    sad: { icon: '😢', name: '难过', color: '#6495ED' },
    excited: { icon: '🤩', name: '兴奋', color: '#FFD700' },
    angry: { icon: '😠', name: '生气', color: '#FF4500' }
};

// ========== 倾诉标签 ==========
const VentLabels = ['工作', '感情', '家庭', '健康', '学习', '人际关系', '财务', '其他'];

// ========== 定时器管理 ==========
const Timers = {
    moveTimeout: null,
    blinkTimeout: null,
    bubbleTimeout: null,
    particleRAF: null,
    isMoving: false
};

// ========== DOM引用 ==========
let floatingPet, petBody, petSvg, particleCanvas, particleCtx;
let mapHoverCard, mapHoverTitle, mapHoverText;
let petX = 0, petY = 0;
let particles = [];
const MAX_PARTICLES = 20;
const PET_WIDTH = 190;
const PET_HEIGHT = 210;

// ========== Three.js 城市场景 ==========
let scene, camera, renderer, cityContainer;
let districtMeshes = {};
let raycaster, mouse;
let currentHoveredDistrict = null;

// ========== 粒子对象池 ==========
const particlePool = [];
function getParticle() {
    return particlePool.length > 0 ? particlePool.pop() : { x: 0, y: 0, vx: 0, vy: 0, size: 0, life: 0, decay: 0, color: '', type: '', rotation: 0, rotationSpeed: 0 };
}
function recycleParticle(p) {
    if (particlePool.length < 50) particlePool.push(p);
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    initThreeCity();
    initUI();
    initFloatingPet();
    if (!State.isFirstVisit) {
        startPetAI();
    }
});

// ========== Three.js 城市初始化 ==========
function initThreeCity() {
    cityContainer = document.getElementById('city-container');
    const canvas = document.getElementById('city-canvas');
    if (!cityContainer || !canvas) return;

    // 场景
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a2a3a);
    scene.fog = new THREE.Fog(0x1a2a3a, 30, 80);

    // 正交相机（等距视角，模拟2.5D）
    const aspect = cityContainer.clientWidth / cityContainer.clientHeight;
    const frustumSize = 24;
    camera = new THREE.OrthographicCamera(
        frustumSize * aspect / -2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        frustumSize / -2,
        0.1,
        100
    );
    // 等距视角角度
    camera.position.set(18, 16, 18);
    camera.lookAt(0, 0, 0);
    camera.up.set(0, 1, 0);

    // 渲染器
    renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, alpha: false });
    renderer.setSize(cityContainer.clientWidth, cityContainer.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // 灯光
    const ambientLight = new THREE.AmbientLight(0x404060, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffeedd, 0.8);
    dirLight.position.set(10, 20, 10);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const hemiLight = new THREE.HemisphereLight(0x88aacc, 0x445522, 0.3);
    scene.add(hemiLight);

    // 地面
    const groundGeo = new THREE.PlaneGeometry(40, 40);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x2a3a2a });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.1;
    ground.receiveShadow = true;
    scene.add(ground);

    // 创建重庆风格建筑群
    createChongqingCity();

    // 射线拾取
    raycaster = new THREE.Raycaster();
    mouse = new THREE.Vector2();

    // 交互
    canvas.addEventListener('mousemove', onCityMouseMove, false);
    canvas.addEventListener('click', onCityClick, false);

    // 窗口 resize
    window.addEventListener('resize', onCityResize, false);

    // 动画循环
    animateCity();
}

function createChongqingCity() {
    // 地基 - 山城地形（多层平台）
    createTerrace(0, 0, 8, 1.5, 0x3a4a3a, 'ground1');
    createTerrace(-3, 1, 7, 1.2, 0x3a4a3a, 'ground2');
    createTerrace(3, -1, 6, 1.0, 0x3a4a3a, 'ground3');
    createTerrace(-5, -1, 5, 0.8, 0x3a4a3a, 'ground4');

    // 道路
    createRoad(0, 0.1, 12, 0.15, 0x556655, 'road-main');
    createRoad(-4, 1.1, 0.15, 8, 0x556655, 'road-v');
    createRoad(4, -0.5, 8, 0.15, 0x556655, 'road-2');

    // 洪崖洞（暖色阶梯形建筑群）
    createHongyaodong();

    // 来福士（现代玻璃塔楼）
    createRaffles();

    // 江岸区域
    createRiverSide();

    // 山坡公园
    createHillPark();

    // 装饰元素
    createDecorations();
}

function createTerrace(x, z, size, height, color, name) {
    const geo = new THREE.BoxGeometry(size, height, size);
    const mat = new THREE.MeshLambertMaterial({ color: color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, height / 2, z);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

function createRoad(x, z, width, depth, color, name) {
    const geo = new THREE.BoxGeometry(width, 0.08, depth);
    const mat = new THREE.MeshLambertMaterial({ color: color });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(x, 0.05, z);
    mesh.receiveShadow = true;
    scene.add(mesh);
}

function createHongyaodong() {
    // 洪崖洞：阶梯形吊脚楼风格，暖色调
    const baseX = -4, baseZ = 2;
    const colors = [0xff8844, 0xee7733, 0xdd6622, 0xcc5500, 0xbb4400];

    for (let floor = 0; floor < 5; floor++) {
        const width = 3.5 - floor * 0.4;
        const depth = 2.5 - floor * 0.2;
        const height = 0.8;
        const y = floor * 0.85;

        const geo = new THREE.BoxGeometry(width, height, depth);
        const mat = new THREE.MeshLambertMaterial({ color: colors[floor] });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(baseX, y + height / 2, baseZ);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        scene.add(mesh);

        // 窗户
        addWindows(mesh, width, height, depth, 0xffff88);
    }

    // 区域感应器
    const hitGeo = new THREE.BoxGeometry(4, 4, 3);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    hitMesh.position.set(baseX, 2, baseZ);
    hitMesh.userData = { region: 'warm' };
    scene.add(hitMesh);
    districtMeshes['warm'] = hitMesh;
}

function createRaffles() {
    // 来福士：现代玻璃塔楼
    const baseX = 5, baseZ = 1;
    const towerPositions = [
        [0, 0], [1.2, 0], [2.4, 0], [-1.2, 0.5]
    ];

    towerPositions.forEach(([dx, dz], i) => {
        const height = 3 + Math.random() * 2;
        const geo = new THREE.BoxGeometry(0.6, height, 0.6);
        const mat = new THREE.MeshPhongMaterial({
            color: 0x88aacc,
            shininess: 80,
            specular: 0x4488ff
        });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(baseX + dx, height / 2, baseZ + dz);
        mesh.castShadow = true;
        scene.add(mesh);

        // 玻璃反光条
        addGlassStrips(mesh, height);
    });

    // 区域感应器
    const hitGeo = new THREE.BoxGeometry(4, 4, 3);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    hitMesh.position.set(baseX + 0.6, 2, baseZ + 0.2);
    hitMesh.userData = { region: 'active' };
    scene.add(hitMesh);
    districtMeshes['active'] = hitMesh;
}

function createRiverSide() {
    // 江岸：蓝色水面 + 步道
    const riverGeo = new THREE.PlaneGeometry(6, 2);
    const riverMat = new THREE.MeshPhongMaterial({
        color: 0x3366aa,
        transparent: true,
        opacity: 0.7,
        shininess: 100
    });
    const river = new THREE.Mesh(riverGeo, riverMat);
    river.rotation.x = -Math.PI / 2;
    river.position.set(-2, 0.02, -3);
    scene.add(river);

    // 步道
    const walkGeo = new THREE.BoxGeometry(5, 0.05, 0.8);
    const walkMat = new THREE.MeshLambertMaterial({ color: 0x887766 });
    const walk = new THREE.Mesh(walkGeo, walkMat);
    walk.position.set(-2, 0.08, -2);
    scene.add(walk);

    // 区域感应器
    const hitGeo = new THREE.BoxGeometry(6, 4, 3);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    hitMesh.position.set(-2, 1, -2);
    hitMesh.userData = { region: 'calm' };
    scene.add(hitMesh);
    districtMeshes['calm'] = hitMesh;
}

function createHillPark() {
    // 山坡公园：绿色平台 + 树木
    const baseX = -6, baseZ = -2;

    // 多层绿色平台
    for (let i = 0; i < 3; i++) {
        const geo = new THREE.BoxGeometry(4 - i * 0.5, 0.3, 3 - i * 0.3);
        const mat = new THREE.MeshLambertMaterial({ color: 0x44aa44 });
        const mesh = new THREE.Mesh(geo, mat);
        mesh.position.set(baseX, i * 0.5 + 0.15, baseZ - i * 0.5);
        mesh.castShadow = true;
        scene.add(mesh);
    }

    // 简单树木
    for (let i = 0; i < 5; i++) {
        const tx = baseX + (Math.random() - 0.5) * 3;
        const tz = baseZ + (Math.random() - 0.5) * 2;
        createSimpleTree(tx, tz, 0.5 + Math.random() * 0.5);
    }

    // 区域感应器
    const hitGeo = new THREE.BoxGeometry(5, 4, 4);
    const hitMat = new THREE.MeshBasicMaterial({ visible: false });
    const hitMesh = new THREE.Mesh(hitGeo, hitMat);
    hitMesh.position.set(baseX, 1, baseZ);
    hitMesh.userData = { region: 'park' };
    scene.add(hitMesh);
    districtMeshes['park'] = hitMesh;
}

function createSimpleTree(x, z, size) {
    // 树干
    const trunkGeo = new THREE.CylinderGeometry(size * 0.1, size * 0.15, size * 0.8, 6);
    const trunkMat = new THREE.MeshLambertMaterial({ color: 0x664422 });
    const trunk = new THREE.Mesh(trunkGeo, trunkMat);
    trunk.position.set(x, size * 0.4, z);
    scene.add(trunk);

    // 树冠（圆锥）
    const crownGeo = new THREE.ConeGeometry(size * 0.5, size, 8);
    const crownMat = new THREE.MeshLambertMaterial({ color: 0x228822 });
    const crown = new THREE.Mesh(crownGeo, crownMat);
    crown.position.set(x, size * 1.1, z);
    crown.castShadow = true;
    scene.add(crown);
}

function addWindows(building, width, height, depth, windowColor) {
    // 简化：在建筑表面添加小方块作为窗户
    const windowSize = 0.08;
    const rows = Math.floor(height / 0.25);
    const cols = Math.floor(width / 0.3);

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (Math.random() > 0.6) continue; // 不是每个位置都有窗
            const geo = new THREE.BoxGeometry(windowSize, windowSize, 0.02);
            const mat = new THREE.MeshBasicMaterial({ color: windowColor });
            const win = new THREE.Mesh(geo, mat);

            const x = -width / 2 + (c + 0.5) * (width / cols);
            const y = -height / 2 + (r + 0.5) * (height / rows);
            const z = depth / 2 + 0.01;

            win.position.set(
                building.position.x + x,
                building.position.y + y,
                building.position.z + z
            );
            scene.add(win);
        }
    }
}

function addGlassStrips(tower, height) {
    // 玻璃反光效果
    const stripGeo = new THREE.BoxGeometry(0.62, height, 0.01);
    const stripMat = new THREE.MeshBasicMaterial({
        color: 0xaaccff,
        transparent: true,
        opacity: 0.4
    });
    const strip = new THREE.Mesh(stripGeo, stripMat);
    strip.position.set(tower.position.x, tower.position.y, tower.position.z + 0.31);
    scene.add(strip);
}

function createDecorations() {
    // 路灯
    createLampPost(-3, 0.5);
    createLampPost(0, 0.5);
    createLampPost(3, -0.5);

    // 长椅
    const benchGeo = new THREE.BoxGeometry(0.8, 0.15, 0.3);
    const benchMat = new THREE.MeshLambertMaterial({ color: 0x886644 });
    const bench = new THREE.Mesh(benchGeo, benchMat);
    bench.position.set(-2, 0.15, -1.7);
    scene.add(bench);
}

function createLampPost(x, z) {
    // 灯柱
    const poleGeo = new THREE.CylinderGeometry(0.03, 0.03, 0.8, 8);
    const poleMat = new THREE.MeshLambertMaterial({ color: 0x888888 });
    const pole = new THREE.Mesh(poleGeo, poleMat);
    pole.position.set(x, 0.4, z);
    scene.add(pole);

    // 灯罩
    const lampGeo = new THREE.SphereGeometry(0.1, 8, 8);
    const lampMat = new THREE.MeshBasicMaterial({ color: 0xffffaa });
    const lamp = new THREE.Mesh(lampGeo, lampMat);
    lamp.position.set(x, 0.85, z);
    scene.add(lamp);
}

function onCityMouseMove(event) {
    const canvas = event.target;
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(
        Object.values(districtMeshes).filter(m => m)
    );

    if (intersects.length > 0) {
        const region = intersects[0].object.userData.region;
        if (region !== currentHoveredDistrict) {
            currentHoveredDistrict = region;
            showMapHoverCard(region);
        }
    } else {
        if (currentHoveredDistrict) {
            currentHoveredDistrict = null;
            hideMapHoverCard();
        }
    }
}

function onCityClick(event) {
    // 如果点击的是宠物或宠物的子元素，不处理
    if (event.target.closest('#floating-pet')) {
        return;
    }
    
    const canvas = event.target;
    const rect = canvas.getBoundingClientRect();
    mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(
        Object.values(districtMeshes).filter(m => m)
    );

    if (intersects.length > 0 && !State.isDragging && !Timers.isMoving) {
        const region = intersects[0].object.userData.region;
        movePetToRegionCenter(region);
        showBubble(`去${MapRegions[region]?.shortName || '区域'}巡游一下～`);
    }
}

function onCityResize() {
    if (!cityContainer || !renderer || !camera) return;
    const aspect = cityContainer.clientWidth / cityContainer.clientHeight;
    const frustumSize = 24;
    camera.left = frustumSize * aspect / -2;
    camera.right = frustumSize * aspect / 2;
    camera.top = frustumSize / 2;
    camera.bottom = frustumSize / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(cityContainer.clientWidth, cityContainer.clientHeight);
}

function animateCity() {
    requestAnimationFrame(animateCity);

    // 不再自动旋转相机，保持固定视角
    if (renderer && scene && camera) {
        renderer.render(scene, camera);
    }
}

// ========== 页面可见性控制 ==========
document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseAllAnimations();
    else resumeAllAnimations();
});

function pauseAllAnimations() {
    if (Timers.particleRAF) { cancelAnimationFrame(Timers.particleRAF); Timers.particleRAF = null; }
    if (Timers.moveTimeout) { clearTimeout(Timers.moveTimeout); Timers.moveTimeout = null; }
    if (Timers.blinkTimeout) { clearTimeout(Timers.blinkTimeout); Timers.blinkTimeout = null; }
    if (Timers.bubbleTimeout) { clearTimeout(Timers.bubbleTimeout); Timers.bubbleTimeout = null; }
    stopRegionDetection();
}

function resumeAllAnimations() {
    if (!State.isFirstVisit) {
        startParticleAnimation();
        startPetAI();
        startBlinking();
    }
}

// ========== 状态管理 ==========
function loadState() {
    const saved = localStorage.getItem('mindPetState');
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            Object.assign(State, parsed);
        } catch (e) { console.warn('Failed to load state'); }
    }
}

function saveState() {
    localStorage.setItem('mindPetState', JSON.stringify({
        pet: State.pet,
        stats: State.stats,
        history: State.history.slice(-20),
        isFirstVisit: false,
        joyValue: State.joyValue,
        position: State.position,
        records: State.records.slice(-100)
    }));
}

// ========== 倾诉记录系统 ==========
function loadRecords() {
    const saved = localStorage.getItem('mindpet_records');
    if (saved) {
        try {
            State.records = JSON.parse(saved);
        } catch (e) {
            State.records = [];
        }
    }
}

function saveRecords() {
    localStorage.setItem('mindpet_records', JSON.stringify(State.records));
}

function addRecord(record) {
    const newRecord = {
        id: Date.now().toString(),
        timestamp: record.timestamp || new Date().toISOString(),
        emotionType: record.emotionType,
        emotionIcon: MoodTypes[record.emotionType]?.icon || '😌',
        content: record.content || '',
        labels: record.labels || [],
        moodScore: { before: record.moodBefore, after: record.moodAfter },
        energyScore: { before: record.energyBefore, after: record.energyAfter },
        stressScore: { before: record.stressBefore, after: record.stressAfter },
        petResponses: record.petResponses || generatePetResponses(record.emotionType)
    };

    State.records.unshift(newRecord);
    if (State.records.length > 200) {
        State.records = State.records.slice(0, 200);
    }
    saveRecords();
    renderRecordsList();
    updateRecordsStats();
}

function generatePetResponses(emotionType) {
    const responses = {
        happy: ['太棒了！继续保持这份快乐~ 💕', '开心是会传染的哦~', '分享快乐，双倍快乐！'],
        calm: ['平静是最好的状态~ 🌿', '享受这份宁静吧~', '平和的心最强大~'],
        anxious: ['深呼吸，一切都会好起来的 🌸', '别担心，我陪着你~', '焦虑只是暂时的~'],
        sad: ['难过的时候记得我在这里 💗', '哭出来也没关系的~', '阳光总在风雨后~'],
        excited: ['太兴奋了！🎉', '这股能量太棒了！', '兴奋的心情要保持住~'],
        angry: ['深呼吸，冷静一下 🌊', '生气伤身体哦~', '慢慢来，别着急~']
    };
    const arr = responses[emotionType] || responses.calm;
    return arr.slice(0, 2 + Math.floor(Math.random() * 2));
}

function deleteRecord(id) {
    State.records = State.records.filter(r => r.id !== id);
    saveRecords();
    renderRecordsList();
    updateRecordsStats();
}

function getRecordStats() {
    const now = new Date();
    const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const weekRecords = State.records.filter(r => new Date(r.timestamp) >= weekAgo);
    const totalMood = State.records.reduce((sum, r) => sum + (r.moodScore?.after || 0), 0);
    const avgMood = State.records.length > 0 ? Math.round(totalMood / State.records.length) : 0;

    const moodCounts = {};
    State.records.forEach(r => {
        moodCounts[r.emotionType] = (moodCounts[r.emotionType] || 0) + 1;
    });
    const dominantMood = Object.entries(moodCounts).sort((a, b) => b[1] - a[1])[0]?.[0] || null;

    return { totalRecords: State.records.length, weekRecords: weekRecords.length, avgMood, dominantMood };
}

function updateRecordsStats() {
    const stats = getRecordStats();
    const totalEl = document.getElementById('total-records');
    const weekEl = document.getElementById('week-records');
    const avgEl = document.getElementById('avg-mood');
    if (totalEl) totalEl.textContent = stats.totalRecords;
    if (weekEl) weekEl.textContent = stats.weekRecords;
    if (avgEl) avgEl.textContent = stats.avgMood > 0 ? stats.avgMood : '--';
}

function renderRecordsList() {
    const listEl = document.getElementById('records-list');
    if (!listEl) return;

    if (State.records.length === 0) {
        listEl.innerHTML = `
            <div class="records-empty">
                <div class="records-empty-icon">📝</div>
                <p>还没有倾诉记录</p>
                <p style="font-size:11px">记录你的心情故事吧~</p>
            </div>
        `;
        return;
    }

    const html = State.records.slice(0, 20).map(record => {
        const date = new Date(record.timestamp);
        const timeStr = formatRecordTime(date);
        const moodDiff = (record.moodScore?.after || 0) - (record.moodScore?.before || 0);
        const diffClass = moodDiff > 0 ? 'positive' : 'negative';
        const diffText = moodDiff > 0 ? `+${moodDiff}` : moodDiff;

        return `
            <div class="record-item ${record.emotionType}" data-id="${record.id}" onclick="showRecordDetail('${record.id}')">
                <div class="record-time">
                    <span>${record.emotionIcon}</span>
                    <span>${timeStr}</span>
                </div>
                <div class="record-preview">"${record.content || '（无详细内容）'}"</div>
                <div class="record-footer">
                    <span class="record-mood">${record.emotionIcon}</span>
                    ${record.labels && record.labels.length > 0 ? `<span class="record-label">${record.labels[0]}</span>` : ''}
                    <span class="record-change ${diffClass}">${diffText} ❤️</span>
                </div>
            </div>
        `;
    }).join('');

    listEl.innerHTML = html;
}

function formatRecordTime(date) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const recordDay = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    const diffDays = Math.floor((today - recordDay) / (24 * 60 * 60 * 1000));

    if (diffDays === 0) return '今天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    if (diffDays === 1) return '昨天 ' + date.toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
    if (diffDays < 7) return diffDays + '天前';
    return date.toLocaleDateString('zh-CN', { month: 'short', day: 'numeric' });
}

function showRecordDetail(id) {
    const record = State.records.find(r => r.id === id);
    if (!record) return;

    const modal = document.getElementById('record-detail-modal');
    const body = document.getElementById('record-detail-body');
    const labelsHtml = record.labels && record.labels.length > 0
        ? record.labels.map(l => `<span class="record-label">${l}</span>`).join('')
        : '<span style="color:#aaa;font-size:12px">无标签</span>';
    const responsesHtml = record.petResponses.map(r => `<div class="pet-response-item">${r}</div>`).join('');

    body.innerHTML = `
        <div class="record-detail-header">
            <span class="record-detail-mood">${record.emotionIcon}</span>
            <div class="record-detail-info">
                <div class="record-detail-time">${new Date(record.timestamp).toLocaleString('zh-CN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</div>
                <div class="record-detail-labels">${labelsHtml}</div>
            </div>
        </div>
        ${record.content ? `<div class="record-detail-section"><h4>💭 倾诉内容</h4><div class="record-detail-content-text">"${record.content}"</div></div>` : ''}
        <div class="record-detail-section">
            <h4>📊 状态变化</h4>
            <div class="record-scores">
                <div class="score-item"><div class="score-label">心情</div><div class="score-value before">${record.moodScore?.before || '--'}</div><div class="score-arrow">↓</div><div class="score-value after">${record.moodScore?.after || '--'}</div></div>
                <div class="score-item"><div class="score-label">能量</div><div class="score-value before">${record.energyScore?.before || '--'}</div><div class="score-arrow">↓</div><div class="score-value after">${record.energyScore?.after || '--'}</div></div>
                <div class="score-item"><div class="score-label">压力</div><div class="score-value before">${record.stressScore?.before || '--'}</div><div class="score-arrow">↓</div><div class="score-value after">${record.stressScore?.after || '--'}</div></div>
            </div>
        </div>
        <div class="record-detail-section"><h4>💬 宠物回应</h4><div class="pet-responses-list">${responsesHtml}</div></div>
        <div class="record-detail-footer"><button class="record-delete-btn" onclick="confirmDeleteRecord('${record.id}')">🗑️ 删除</button></div>
    `;
    modal.classList.add('active');
}

function confirmDeleteRecord(id) {
    if (confirm('确定要删除这条记录吗？')) {
        deleteRecord(id);
        document.getElementById('record-detail-modal').classList.remove('active');
    }
}

function initRecordsUI() {
    loadRecords();
    renderRecordsList();
    updateRecordsStats();

    const toggleBtn = document.getElementById('records-toggle');
    const recordsCard = document.getElementById('records-card');
    if (toggleBtn && recordsCard) {
        toggleBtn.addEventListener('click', () => recordsCard.classList.toggle('collapsed'));
    }

    const detailModal = document.getElementById('record-detail-modal');
    const detailClose = document.getElementById('record-detail-close');
    if (detailClose) {
        detailClose.addEventListener('click', () => detailModal.classList.remove('active'));
    }
    if (detailModal) {
        detailModal.addEventListener('click', (e) => { if (e.target === detailModal) detailModal.classList.remove('active'); });
    }
}

// ========== UI 初始化 ==========
function initUI() {
    if (State.isFirstVisit) {
        showCreateFlow();
    } else {
        updateSidebar();
        initMainInteractions();
    }
}

function showCreateFlow() {
    State.isFirstVisit = false;
    saveState();
    updateSidebar();
    initMainInteractions();
}

function initMainInteractions() {
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            State.selectedMood = btn.dataset.mood;
        });
    });

    const timeInput = document.getElementById('mood-time');
    if (timeInput) {
        const now = new Date();
        now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
        timeInput.value = now.toISOString().slice(0, 16);
    }

    document.getElementById('vent-submit').addEventListener('click', submitVent);
    document.getElementById('change-appearance-btn').addEventListener('click', openAppearanceModal);
    document.getElementById('modal-close').addEventListener('click', closeAppearanceModal);
    document.getElementById('save-appearance').addEventListener('click', saveAppearance);

    document.getElementById('reset-btn').addEventListener('click', () => {
        if (confirm('确定要重置吗？所有数据将被清除！')) {
            localStorage.removeItem('mindPetState');
            localStorage.removeItem('mindpet_records');
            location.reload();
        }
    });

    initRecordsUI();
    initMapInteractions();
    updateAdvice();
}

// ========== 侧边栏更新 ==========
function updateSidebar() {
    const nameEl = document.getElementById('sidebar-pet-name');
    const avatarEl = document.getElementById('sidebar-pet-avatar');
    if (nameEl) nameEl.textContent = State.pet.name;
    if (avatarEl) avatarEl.innerHTML = generateSmallAvatar();

    const moodVal = document.getElementById('mood-value');
    const moodFill = document.getElementById('mood-fill');
    const stressVal = document.getElementById('stress-value');
    const stressFill = document.getElementById('stress-fill');
    const energyVal = document.getElementById('energy-value');
    const energyFill = document.getElementById('energy-fill');

    if (moodVal) moodVal.textContent = State.stats.mood;
    if (moodFill) moodFill.style.width = State.stats.mood + '%';
    if (stressVal) stressVal.textContent = State.stats.stress;
    if (stressFill) stressFill.style.width = State.stats.stress + '%';
    if (energyVal) energyVal.textContent = State.stats.energy;
    if (energyFill) energyFill.style.width = State.stats.energy + '%';

    document.documentElement.style.setProperty('--primary', State.pet.color);
}

function generateSmallAvatar() {
    return `<svg viewBox="0 0 100 120">${generatePetSVG(State.pet.type, State.pet.color, 'calm')}</svg>`;
}

// ========== 智能建议系统 ==========
const AdviceLibrary = {
    mood: {
        high: ['💖 心情很棒！保持这份能量~', '🌟 阳光正好，你的心情也在发光！', '✨ 好心情是最好的礼物~'],
        medium: ['🌻 心情还不错，继续保持~', '☀️ 不错的状态，可以尝试新事物！'],
        low: ['💭 有点低落，可以找信任的人聊聊~', '🍃 允许自己休息一下，深呼吸~', '🌙 低落是暂时的，会好起来的~'],
        critical: ['💝 你不是一个人，我一直陪着你~', '🌈 黑暗之后总有黎明，再坚持一下~', '🤗 难受的时候，宠物永远在这里~']
    },
    stress: {
        high: ['😰 压力有点大...试试深呼吸~', '🧘 闭上眼睛，想象自己在海边~', '🌊 压力像海浪，会来的也会走的~'],
        medium: ['💆 适当放松一下吧~', '☕ 泡杯热茶，休息一会儿~'],
        low: ['✨ 压力不大，生活很轻松~', '🌈 继续保持这份从容~'],
        critical: ['🛋️ 今天就什么都不做，好好休息吧~', '🌙 明天会是新的一天~']
    },
    energy: {
        high: ['⚡ 能量满满！去完成你的目标吧~', '🚀 今天效率一定很高！', '💫 充满电的感觉真好~'],
        medium: ['📋 制定个小目标吧~', '🎯 专注一件事，完成它~'],
        low: ['😪 有点疲惫了...休息一下吧~', '🛏️ 小憩一下会恢复精力~', '🎵 听点轻音乐放松一下~'],
        critical: ['🔋 能量严重不足，请立刻休息！', '😴 不要硬撑，身体需要休息~']
    }
};

function getAdviceLevel(value) {
    if (value >= 70) return 'high';
    if (value >= 40) return 'medium';
    if (value >= 20) return 'low';
    return 'critical';
}

function getRandomAdvice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function updateAdvice() {
    const { mood, stress, energy } = State.stats;
    const priorities = [{ name: 'mood', value: mood }, { name: 'stress', value: stress }, { name: 'energy', value: energy }];
    priorities.sort((a, b) => a.value - b.value);

    const urgentItem = priorities[0];
    const urgentLevel = getAdviceLevel(urgentItem.value);
    let html = `<p class="advice-item">${getRandomAdvice(AdviceLibrary[urgentItem.name][urgentLevel])}</p>`;

    const secondItem = priorities[1];
    if (secondItem && secondItem.value < 50) {
        const secondLevel = getAdviceLevel(secondItem.value);
        html += `<p class="advice-item">${getRandomAdvice(AdviceLibrary[secondItem.name][secondLevel])}</p>`;
    }
    const adviceList = document.getElementById('advice-list');
    if (adviceList) adviceList.innerHTML = html;
}

// ========== 倾诉提交 ==========
function submitVent() {
    const selectedMood = State.selectedMood;
    const ventText = document.getElementById('vent-input').value.trim();
    const moodTime = document.getElementById('mood-time').value;

    if (!selectedMood) {
        showBubble('请先选择心情哦~');
        return;
    }

    const moodBefore = State.stats.mood;
    const stressBefore = State.stats.stress;
    const energyBefore = State.stats.energy;
    const impact = analyzeMoodImpact(selectedMood, ventText);

    State.stats.mood = Math.max(0, Math.min(100, State.stats.mood + impact.mood));
    State.stats.stress = Math.max(0, Math.min(100, State.stats.stress + impact.stress));
    State.stats.energy = Math.max(0, Math.min(100, State.stats.energy + impact.energy));

    State.history.push({ mood: selectedMood, text: ventText || '（无详细描述）', time: moodTime || new Date().toISOString() });
    State.joyValue = Math.max(0, State.joyValue - 5);

    const record = {
        emotionType: selectedMood,
        content: ventText,
        timestamp: moodTime || new Date().toISOString(),
        moodBefore, moodAfter: State.stats.mood,
        stressBefore, stressAfter: State.stats.stress,
        energyBefore, energyAfter: State.stats.energy
    };
    addRecord(record);

    updateSidebar();
    updateAdvice();
    updatePetExpression();
    saveState();

    if (floatingPet) {
        floatingPet.classList.add(impact.mood > 0 ? 'happy' : 'sad');
        showBubble(impact.mood > 0 ? '谢谢你分享这些 💕' : '我听到了，一起加油 💪');
        spawnParticles(impact.mood > 0 ? 'happy' : 'sad', impact.mood > 0 ? 8 : 6);
        setTimeout(() => floatingPet.classList.remove('happy', 'sad'), 2000);
    }

    document.getElementById('vent-input').value = '';
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
    State.selectedMood = null;
}

function analyzeMoodImpact(moodType, text) {
    const impacts = {
        happy: { mood: 15, stress: -10, energy: 5 },
        calm: { mood: 5, stress: -5, energy: 5 },
        excited: { mood: 10, stress: 5, energy: 10 },
        anxious: { mood: -10, stress: 15, energy: -5 },
        sad: { mood: -15, stress: 5, energy: -10 },
        angry: { mood: -20, stress: 20, energy: -15 }
    };

    let impact = { ...impacts[moodType] };
    ['压力', '焦虑', '失眠', '疲惫'].forEach(w => { if (text.includes(w)) { impact.stress += 5; impact.energy -= 5; } });
    ['开心', '成功', '顺利', '进步'].forEach(w => { if (text.includes(w)) { impact.mood += 5; } });

    return { mood: Math.round(impact.mood), stress: Math.round(impact.stress), energy: Math.round(impact.energy) };
}

// ========== 换装弹窗 ==========
const Colors = {
    '#FFB6C1': { name: '樱花粉', primary: '#FFE4E8', dark: '#FF8FAB', highlight: 'rgba(255,255,255,0.8)' },
    '#87CEEB': { name: '天空蓝', primary: '#B0E0E6', dark: '#5CACEE', highlight: 'rgba(255,255,255,0.8)' },
    '#98FB98': { name: '薄荷绿', primary: '#C8FFC8', dark: '#6B8E23', highlight: 'rgba(255,255,255,0.8)' },
    '#DDA0DD': { name: '葡萄紫', primary: '#E6E6FA', dark: '#9370DB', highlight: 'rgba(255,255,255,0.8)' },
    '#F0E68C': { name: '柠檬黄', primary: '#FFFACD', dark: '#DAA520', highlight: 'rgba(255,255,255,0.8)' },
    '#FFA07A': { name: '蜜桃橙', primary: '#FFDAB9', dark: '#FF7F50', highlight: 'rgba(255,255,255,0.8)' }
};

function openAppearanceModal() {
    const modal = document.getElementById('appearance-modal');
    if (!modal) return;
    modal.classList.add('active');

    let typesHTML = '';
    Object.keys(PetTypes).forEach(type => {
        typesHTML += `<div class="pet-type-item ${type === State.pet.type ? 'selected' : ''}" data-type="${type}">
            <svg viewBox="0 0 100 120">${generatePetSVG(type, Colors[State.pet.color] || Colors['#FFB6C1'], 'calm')}</svg>
            <span>${PetTypes[type].name}</span>
        </div>`;
    });

    let colorsHTML = '';
    Object.keys(Colors).forEach(c => {
        colorsHTML += `<div class="color-option-modal ${c === State.pet.color ? 'selected' : ''}" data-color="${c}" style="background: ${c}"></div>`;
    });

    const typesEl = document.getElementById('change-pet-types');
    const colorsEl = document.getElementById('change-colors');
    const nameInput = document.getElementById('change-name-input');
    if (typesEl) typesEl.innerHTML = typesHTML;
    if (colorsEl) colorsEl.innerHTML = colorsHTML;
    if (nameInput) nameInput.value = State.pet.name;

    document.querySelectorAll('.pet-type-item').forEach(item => {
        item.addEventListener('click', () => {
            document.querySelectorAll('.pet-type-item').forEach(i => i.classList.remove('selected'));
            item.classList.add('selected');
        });
    });

    document.querySelectorAll('.color-option-modal').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.color-option-modal').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
        });
    });
}

function closeAppearanceModal() {
    const modal = document.getElementById('appearance-modal');
    if (modal) modal.classList.remove('active');
}

function saveAppearance() {
    const selectedType = document.querySelector('.pet-type-item.selected');
    const selectedColor = document.querySelector('.color-option-modal.selected');
    const newName = document.getElementById('change-name-input').value.trim();

    if (selectedType) State.pet.type = selectedType.dataset.type;
    if (selectedColor) State.pet.color = selectedColor.dataset.color;
    if (newName) State.pet.name = newName;

    saveState();
    updateSidebar();
    updateFloatingPetAppearance();
    closeAppearanceModal();

    if (floatingPet) {
        floatingPet.classList.add('happy');
        showBubble('新衣服真好看！✨');
        setTimeout(() => floatingPet.classList.remove('happy'), 1000);
    }
}

// ========== 浮动宠物系统 ==========
function initFloatingPet() {
    floatingPet = document.getElementById('floating-pet');
    petBody = document.getElementById('pet-body');
    petSvg = document.getElementById('pet-svg');
    particleCanvas = document.getElementById('particle-canvas');
    if (particleCanvas) {
        particleCtx = particleCanvas.getContext('2d');
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    initPetPosition();
    updateFloatingPetAppearance();
    bindPetInteraction();
    startParticleAnimation();
    startBlinking();
    updatePetExpression();
    updateHeadIcon();

    const initialRegion = detectCurrentRegion();
    if (initialRegion) {
        onRegionEnter(initialRegion);
    }
}

function getSceneBounds() {
    const rightPanel = document.querySelector('.right-panel');
    if (!rightPanel) {
        return {
            minX: 40,
            maxX: window.innerWidth - PET_WIDTH - 40,
            minY: 70,
            maxY: window.innerHeight - PET_HEIGHT - 40
        };
    }

    const rect = rightPanel.getBoundingClientRect();
    const horizontalPadding = window.innerWidth <= 768 ? 20 : 28;
    const topPadding = window.innerWidth <= 768 ? 54 : 86;
    const bottomPadding = window.innerWidth <= 768 ? 24 : 28;

    return {
        minX: rect.left + horizontalPadding,
        maxX: rect.right - PET_WIDTH - horizontalPadding,
        minY: rect.top + topPadding,
        maxY: rect.bottom - PET_HEIGHT - bottomPadding
    };
}

function clampPetPosition(x, y) {
    const bounds = getSceneBounds();
    return {
        x: Math.max(bounds.minX, Math.min(bounds.maxX, x)),
        y: Math.max(bounds.minY, Math.min(bounds.maxY, y))
    };
}

function resizeCanvas() {
    if (particleCanvas) {
        particleCanvas.width = window.innerWidth;
        particleCanvas.height = window.innerHeight;
    }

    const clamped = clampPetPosition(petX, petY);
    petX = clamped.x;
    petY = clamped.y;
    updatePetPosition();
}

function generatePetSVG(type, colorData, expression) {
    const petType = PetTypes[type] || PetTypes.bunny;
    const colorKey = typeof colorData === 'string' ? colorData : State.pet.color;
    const palette = typeof colorData === 'object' && colorData
        ? colorData
        : (Colors[colorKey] || { primary: colorKey, dark: '#d7798f', highlight: 'rgba(255,255,255,0.82)' });
    const expr = Expressions[expression] || Expressions.calm;

    // 将颜色传递给SVG，使用内联样式而不是CSS变量
    const mainColor = colorKey;
    const darkColor = palette.dark;
    const bellyColor = palette.primary;
    const innerColor = palette.primary;
    const blushColor = palette.dark;

    return `<defs>
        <radialGradient id="petGlow" cx="50%" cy="30%" r="70%">
            <stop offset="0%" stop-color="${palette.highlight || 'rgba(255,255,255,0.82)'}" />
            <stop offset="100%" stop-color="rgba(255,255,255,0)" />
        </radialGradient>
    </defs>
    <g>
        <ellipse cx="52" cy="113" rx="25" ry="8" fill="rgba(0,0,0,0.14)" stroke="none" />
        ${petType.bodyParts.replace(/var\(--pet-main\)/g, mainColor)
            .replace(/var\(--pet-dark\)/g, darkColor)
            .replace(/var\(--pet-belly\)/g, bellyColor)
            .replace(/var\(--pet-inner\)/g, innerColor)
            .replace(/var\(--pet-blush\)/g, blushColor)}
        <ellipse cx="53" cy="42" rx="18" ry="10" fill="url(#petGlow)" opacity="0.54" stroke="none" />
        ${expr}
    </g>`;
}

function updateFloatingPetAppearance() {
    if (petSvg) {
        petSvg.innerHTML = generatePetSVG(State.pet.type, Colors[State.pet.color] || Colors['#FFB6C1'], State.currentExpression);
    }
    const nameEl = document.getElementById('pet-drag-name');
    if (nameEl) nameEl.textContent = State.pet.name;
}

// ========== 宠物交互 ==========
function bindPetInteraction() {
    const dragHandle = document.getElementById('pet-drag-handle');
    let dragStartX = 0, dragStartY = 0, petStartX = 0, petStartY = 0;
    let dragMoved = false;

    const startDrag = (clientX, clientY) => {
        if (Timers.isMoving) return false;
        dragMoved = false;
        State.isDragging = true;
        floatingPet.classList.add('dragging');
        dragStartX = clientX;
        dragStartY = clientY;
        petStartX = petX;
        petStartY = petY;
        return true;
    };

    const applyDrag = (clientX, clientY) => {
        if (!State.isDragging) return;
        const dx = clientX - dragStartX;
        const dy = clientY - dragStartY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) dragMoved = true;

        const clamped = clampPetPosition(petStartX + dx, petStartY + dy);
        petX = clamped.x;
        petY = clamped.y;
        updatePetPosition();
    };

    const endDrag = () => {
        if (!State.isDragging) return;
        State.isDragging = false;
        floatingPet.classList.remove('dragging');
        
        // 只有当用户实际拖拽了宠物，才更新位置和区域
        if (dragged) {
            State.position = { x: petX, y: petY };
            State.wanderMode = false;
            saveState();
            setTimeout(() => {
                if (!State.isDragging) State.wanderMode = true;
            }, 30000);

            const region = detectCurrentRegion();
            if (region) onRegionEnter(region);
        }
    };

    if (dragHandle) {
        dragHandle.addEventListener('mousedown', (e) => {
            if (!startDrag(e.clientX, e.clientY)) return;
            e.preventDefault();
            e.stopPropagation();
        });

        dragHandle.addEventListener('touchstart', (e) => {
            const touch = e.touches[0];
            if (!touch || !startDrag(touch.clientX, touch.clientY)) return;
            e.preventDefault();
        }, { passive: false });
    }

    document.addEventListener('mousemove', (e) => applyDrag(e.clientX, e.clientY));
    document.addEventListener('touchmove', (e) => {
        const touch = e.touches[0];
        if (!touch) return;
        applyDrag(touch.clientX, touch.clientY);
        if (State.isDragging) e.preventDefault();
    }, { passive: false });

    document.addEventListener('mouseup', endDrag);
    document.addEventListener('touchend', endDrag);

    if (floatingPet) {
        floatingPet.addEventListener('click', (e) => {
            if (dragMoved) {
                dragMoved = false;
                return;
            }
            if (!State.isDragging && !Timers.isMoving) {
                handlePetClick(e);
            }
        });

        floatingPet.addEventListener('mouseenter', () => {
            if (!State.isDragging && !Timers.isMoving) showHoverBubble();
        });
        floatingPet.addEventListener('mouseleave', hideBubble);
    }
}

function handlePetClick(e) {
    // 阻止事件冒泡，防止触发地图点击
    if (e) {
        e.stopPropagation();
        e.preventDefault();
    }
    
    State.clickCount++;
    State.joyValue = Math.min(100, State.joyValue + 6);
    hideBubble();


    if (State.clickCount >= 5) {
        floatingPet.classList.add('spin');
        showBubble('🎉 城市巡游启动！');
        spawnParticles('rainbow', 12);
        setTimeout(() => {
            floatingPet.classList.remove('spin');
            State.clickCount = 0;
        }, 1000);
    } else if (State.clickCount === 4) {
        floatingPet.classList.add('spin');
        showBubble('来一圈转身～');
        spawnParticles('stars', 8);
        setTimeout(() => floatingPet.classList.remove('spin'), 1000);
    } else {
        floatingPet.classList.add('jump', 'happy');
        const messagePool = currentRegion === 'warm'
            ? ['灯光真漂亮！', '这边好暖和～', '想再逛一圈！']
            : currentRegion === 'active'
                ? ['轻轨要开啦！', '跟我一起冲呀～', '这里节奏好快！']
                : currentRegion === 'calm'
                    ? ['江风好舒服～', '一起慢慢走吧', '这里能安心呼吸']
                    : currentRegion === 'park'
                        ? ['草坡软软的～', '想在这里打个滚', '这里最适合休息']
                        : ['抱抱！', '喜欢你！', '再摸摸我～'];
        showBubble(messagePool[Math.floor(Math.random() * messagePool.length)]);
        spawnParticles('hearts', 6);
        setTimeout(() => floatingPet.classList.remove('jump', 'happy'), 520);
    }

    updateHeadIcon();
    saveState();
}

function showHoverBubble() {
    const mood = State.stats.mood;
    const region = currentRegion ? MapRegions[currentRegion] : null;
    const regionPrefix = region ? `${region.shortName}这边` : '今天';
    const text = mood >= 80
        ? `${regionPrefix}也被你点亮啦 ✨`
        : mood >= 60
            ? `${regionPrefix}陪着你真好～`
            : mood >= 40
                ? '摸摸我，我们继续散步～'
                : mood >= 20
                    ? '先陪我安静一会儿...'
                    : '抱抱我，我们去找亮灯的地方';
    const bubbleText = document.getElementById('bubble-text');
    if (bubbleText) bubbleText.textContent = text;
    const bubble = document.getElementById('pet-bubble');
    if (bubble) bubble.classList.add('show');
}

function showBubble(text) {
    const bubbleText = document.getElementById('bubble-text');
    const bubble = document.getElementById('pet-bubble');
    if (bubbleText) bubbleText.textContent = text;
    if (bubble) bubble.classList.add('show');
    if (Timers.bubbleTimeout) clearTimeout(Timers.bubbleTimeout);
    Timers.bubbleTimeout = setTimeout(() => {
        const b = document.getElementById('pet-bubble');
        if (b) b.classList.remove('show');
    }, 2600);
}

function hideBubble() {
    const bubble = document.getElementById('pet-bubble');
    if (bubble) bubble.classList.remove('show');
}

function updateHeadIcon() {
    const icon = document.getElementById('head-icon');
    if (!icon) return;
    const joy = State.joyValue;
    icon.textContent = joy >= 80 ? '💖' : joy >= 60 ? '✨' : joy >= 40 ? '🚶' : joy >= 20 ? '🌙' : '💭';
}

function updatePetExpression() {
    const mood = State.stats.mood;
    const newExpr = mood >= 81 ? 'happy' : mood >= 56 ? 'calm' : mood >= 41 ? 'tired' : mood >= 21 ? 'worried' : 'sad';

    if (newExpr !== State.currentExpression) {
        State.currentExpression = newExpr;
        updateFloatingPetAppearance();
        updateHeadIcon();
    }
}

function initPetPosition() {
    const container = document.getElementById('pet-container');
    if (!container) return;
    
    const rect = container.getBoundingClientRect();
    // 初始位置在容器中心
    petX = rect.width / 2 - PET_WIDTH / 2;
    petY = rect.height / 2 - PET_HEIGHT / 2;
    
    updatePetPosition();
}

function updatePetPosition() {
    if (floatingPet) {
        floatingPet.style.left = `${petX}px`;
        floatingPet.style.top = `${petY}px`;
    }
}

// ========== 眨眼系统 ==========
function startBlinking() {
    if (document.hidden) return;
    if (petBody && !State.isDragging) {
        petBody.classList.add('blink');
        setTimeout(() => {
            petBody.classList.remove('blink');
        }, 150);
    }
    Timers.blinkTimeout = setTimeout(startBlinking, 2800 + Math.random() * 3200);
}

// ========== 宠物与环境交互 ==========
const MapRegions = {
    warm: {
        id: 'warm',
        name: '暖光区',
        shortName: '洪崖洞',
        bubble: '灯火一层层亮起来啦～',
        particles: 'hearts',
        expression: 'happy'
    },
    active: {
        id: 'active',
        name: '活力区',
        shortName: '来福士',
        bubble: '轻轨从头顶掠过去啦！',
        particles: 'stars',
        expression: 'surprised'
    },
    calm: {
        id: 'calm',
        name: '宁静区',
        shortName: '江岸',
        bubble: '江风慢慢吹，先放松一下~',
        particles: 'happy',
        expression: 'calm'
    },
    park: {
        id: 'park',
        name: '放松区',
        shortName: '公园',
        bubble: '草坡软软的，适合打个滚~',
        particles: 'hearts',
        expression: 'calm'
    }
};

let currentRegion = null;
let regionCheckInterval = null;

function detectCurrentRegion() {
    // 简化：根据宠物位置判断
    if (!floatingPet) return null;
    const petRect = floatingPet.getBoundingClientRect();
    const px = petRect.left + petRect.width / 2;
    const pw = window.innerWidth;

    if (px < pw * 0.3) return MapRegions['park'] || null;
    if (px < pw * 0.5) return MapRegions['warm'] || null;
    if (px < pw * 0.75) return MapRegions['active'] || null;
    return MapRegions['calm'] || null;
}

function initMapInteractions() {
    initMapHoverCardRefs();
    initDistrictStatusPanel();

    // 绑定区域状态面板点击
    document.querySelectorAll('.district-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            const regionId = chip.dataset.regionChip;
            if (regionId && MapRegions[regionId]) {
                movePetToRegionCenter(regionId);
                showBubble(`去${MapRegions[regionId].shortName}巡游一下～`);
            }
        });
    });

    const initialRegion = detectCurrentRegion();
    if (initialRegion) {
        currentRegion = initialRegion.id;
    }
}

function initMapHoverCardRefs() {
    mapHoverCard = document.getElementById('map-hover-card');
    mapHoverTitle = document.getElementById('map-hover-title');
    mapHoverText = document.getElementById('map-hover-text');
}

const DistrictStatusLibrary = {
    warm: [
        { text: '暖光满载', tone: 'good' },
        { text: '步道偏热闹', tone: 'warn' },
        { text: '灯火恢复中', tone: 'calm' }
    ],
    active: [
        { text: '轻轨畅通', tone: 'good' },
        { text: '客流升高', tone: 'warn' },
        { text: '空桥增益', tone: 'calm' }
    ],
    calm: [
        { text: '雾气舒缓', tone: 'calm' },
        { text: '江风加成', tone: 'good' },
        { text: '夜色偏深', tone: 'warn' }
    ],
    park: [
        { text: '绿意恢复', tone: 'good' },
        { text: '花坡安静', tone: 'calm' },
        { text: '山路湿滑', tone: 'warn' }
    ]
};

function initDistrictStatusPanel() {
    const statusIndexMap = {};
    Object.keys(DistrictStatusLibrary).forEach(regionId => {
        statusIndexMap[regionId] = 0;
        renderDistrictStatus(regionId, 0);
    });

    setInterval(() => {
        Object.keys(DistrictStatusLibrary).forEach(regionId => {
            statusIndexMap[regionId] = (statusIndexMap[regionId] + 1) % DistrictStatusLibrary[regionId].length;
            renderDistrictStatus(regionId, statusIndexMap[regionId]);
        });
    }, 2500);
}

function renderDistrictStatus(regionId, statusIndex) {
    const statusList = DistrictStatusLibrary[regionId];
    const chip = document.querySelector(`[data-region-chip="${regionId}"]`);
    if (!statusList || !chip) return;

    const status = statusList[statusIndex % statusList.length];
    const statusEl = chip.querySelector('.chip-status');
    chip.dataset.tone = status.tone;
    if (statusEl) statusEl.textContent = status.text;
}

function showMapHoverCard(regionId) {
    const region = MapRegions[regionId];
    if (!region || !mapHoverCard || !mapHoverTitle || !mapHoverText) return;

    const titleMap = {
        warm: '洪崖洞暖光街区',
        active: '来福士轻轨中枢',
        calm: '江岸慢行步道',
        park: '山坡放松公园'
    };
    const descMap = {
        warm: '层层退台的暖色吊脚楼，灯火通明的山城夜景。',
        active: '现代玻璃塔楼与轻轨平台，立体交通的活力核心。',
        calm: '江滩栈道与缓慢流水，安静的可漫游地带。',
        park: '多层绿坡与树荫，适合休息放松的公园空间。'
    };

    mapHoverTitle.textContent = titleMap[regionId] || region.title;
    mapHoverText.textContent = descMap[regionId] || region.description;
    mapHoverCard.classList.add('show');
    mapHoverCard.setAttribute('aria-hidden', 'false');
}

function hideMapHoverCard() {
    if (!mapHoverCard) return;
    mapHoverCard.classList.remove('show');
    mapHoverCard.setAttribute('aria-hidden', 'true');
}

function onRegionEnter(region) {
    if (!region) return;
    currentRegion = region.id;
    showBubble(region.bubble);
    spawnParticles(region.particles, region.id === 'active' ? 5 : 4);
}

function startRegionDetection() {
    if (regionCheckInterval) return;
    regionCheckInterval = setInterval(() => {
        if (document.hidden || State.isDragging || Timers.isMoving) return;
        const newRegion = detectCurrentRegion();
        if (newRegion && newRegion.id !== currentRegion) {
            onRegionEnter(newRegion);
        }
    }, 1600);
}

function stopRegionDetection() {
    if (regionCheckInterval) {
        clearInterval(regionCheckInterval);
        regionCheckInterval = null;
    }
}

function startPetAI() {
    if (document.hidden || State.isFirstVisit) return;
    if (Timers.moveTimeout) clearTimeout(Timers.moveTimeout);

    Timers.moveTimeout = setTimeout(() => {
        if (State.wanderMode && !State.isDragging && !Timers.isMoving && Math.random() < 0.7) {
            movePet();
        } else {
            startPetAI();
        }
    }, 6200 + Math.random() * 6000);
}

function movePet() {
    if (!floatingPet) return;

    const bounds = getSceneBounds();
    const targetX = bounds.minX + Math.random() * (bounds.maxX - bounds.minX);
    const targetY = bounds.minY + Math.random() * (bounds.maxY - bounds.minY);

    movePetTo(targetX, targetY);
}

function movePetTo(targetX, targetY, { regionId = null } = {}) {
    if (!floatingPet) return;

    const clamped = clampPetPosition(targetX, targetY);
    const distance = Math.hypot(clamped.x - petX, clamped.y - petY);
    const duration = Math.min(2600, Math.max(1200, Math.round(distance * 4.2)));

    if (Timers.moveTimeout) clearTimeout(Timers.moveTimeout);

    Timers.isMoving = true;
    floatingPet.classList.add('moving');
    floatingPet.style.setProperty('--move-duration', `${duration}ms`);
    floatingPet.classList.toggle('facing-left', clamped.x < petX);

    petX = clamped.x;
    petY = clamped.y;
    updatePetPosition();

    Timers.moveTimeout = setTimeout(() => {
        Timers.isMoving = false;
        floatingPet.classList.remove('moving');
        State.position = { x: petX, y: petY };
        saveState();

        const nextRegion = regionId ? MapRegions[regionId] : detectCurrentRegion();
        if (nextRegion) onRegionEnter(nextRegion);
        else {
            currentRegion = null;
        }

        startPetAI();
    }, duration + 40);
}

function movePetToRegionCenter(regionId) {
    const bounds = getSceneBounds();
    const regionPositions = {
        warm: { x: bounds.minX + (bounds.maxX - bounds.minX) * 0.25, y: bounds.minY + (bounds.maxY - bounds.minY) * 0.4 },
        active: { x: bounds.minX + (bounds.maxX - bounds.minX) * 0.75, y: bounds.minY + (bounds.maxY - bounds.minY) * 0.4 },
        calm: { x: bounds.minX + (bounds.maxX - bounds.minX) * 0.5, y: bounds.minY + (bounds.maxY - bounds.minY) * 0.7 },
        park: { x: bounds.minX + (bounds.maxX - bounds.minX) * 0.25, y: bounds.minY + (bounds.maxY - bounds.minY) * 0.7 }
    };

    const target = regionPositions[regionId] || { x: petX, y: petY };
    movePetTo(target.x, target.y, { regionId });
}

// ========== 粒子系统 ==========
function spawnParticles(type, count) {
    if (document.hidden) return;
    const petRect = floatingPet ? floatingPet.getBoundingClientRect() : { left: 0, top: 0, width: 0, height: 0 };
    const centerX = petRect.left + petRect.width / 2;
    const centerY = petRect.top + petRect.height / 2;

    const colors = {
        hearts: ['#FF6B9D', '#FF8FAB', '#FFB6C1'],
        stars: ['#FFD700', '#FFA500', '#FFE066'],
        happy: ['#FFD700', '#FF6B9D', '#87CEEB'],
        sad: ['#87CEEB', '#B0C4DE'],
        rainbow: ['#FF6B6B', '#FFA94D', '#FFE66D', '#4ECB71', '#4ECDC4', '#45B7D1']
    };

    const particleColors = colors[type] || colors.stars;

    for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) recycleParticle(particles.shift());

        const p = getParticle();
        p.x = centerX + (Math.random() - 0.5) * 40;
        p.y = centerY + (Math.random() - 0.5) * 40;
        p.vx = (Math.random() - 0.5) * 3;
        p.vy = type === 'sad' ? 1 + Math.random() * 2 : -1 - Math.random() * 3;
        p.size = 6 + Math.random() * 6;
        p.life = 1;
        p.decay = 0.008 + Math.random() * 0.008;
        p.color = particleColors[Math.floor(Math.random() * particleColors.length)];
        p.type = type;
        p.rotation = 0;
        p.rotationSpeed = (Math.random() - 0.5) * 5;
        particles.push(p);
    }
}

function startParticleAnimation() {
    if (document.hidden) return;

    function animate() {
        if (document.hidden) {
            Timers.particleRAF = null;
            return;
        }

        if (particleCtx) {
            particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        }

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life -= p.decay;

            if (p.type !== 'sad') p.vy -= 0.02;
            p.rotation += p.rotationSpeed;
            p.size *= 0.995;

            if (p.life <= 0 || p.size < 1) {
                recycleParticle(particles.splice(i, 1)[0]);
                continue;
            }

            drawParticle(p);
        }

        Timers.particleRAF = requestAnimationFrame(animate);
    }

    Timers.particleRAF = requestAnimationFrame(animate);
}

function drawParticle(p) {
    if (!particleCtx) return;
    particleCtx.save();
    particleCtx.globalAlpha = p.life * 0.8;

    const gradient = particleCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
    gradient.addColorStop(0, p.color);
    gradient.addColorStop(1, 'transparent');

    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    particleCtx.fillStyle = gradient;
    particleCtx.fill();

    particleCtx.shadowColor = p.color;
    particleCtx.shadowBlur = 10;
    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
    particleCtx.fill();

    particleCtx.restore();
}
