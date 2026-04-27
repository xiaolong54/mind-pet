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
    stats: { mood: 75, stress: 45, energy: 70, lucky: 65 },
    history: [],
    isSetupComplete: false, // 标记设置是否完成
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
let petX = 0, petY = 0;
let particles = [];
const MAX_PARTICLES = 20;
const PET_WIDTH = 190;
const PET_HEIGHT = 210;

// ========== 粒子对象池 ==========
const particlePool = [];
function getParticle() {
    return particlePool.length > 0 ? particlePool.pop() : { x: 0, y: 0, vx: 0, vy: 0, size: 0, life: 0, decay: 0, color: '', type: '', rotation: 0, rotationSpeed: 0 };
}
function recycleParticle(p) {
    if (particlePool.length < 50) particlePool.push(p);
}

// ========== 欢迎/设置页面 ==========
let SetupState = {
    selectedType: 'bunny',
    selectedColor: '#FFB6C1',
    petName: '小伙伴'
};

function initWelcomeScreen() {
    const welcomeScreen = document.getElementById('welcome-screen');
    if (!welcomeScreen) return;

    // 如果设置已完成，隐藏欢迎页面
    if (State.isSetupComplete) {
        welcomeScreen.classList.add('hidden');
        welcomeScreen.style.display = 'none';
        return;
    }

    // 添加浮动文字背景
    const encouragingTexts = [
        '你很棒', '今天也会是美好的一天', '相信自己', '每一步都是进步',
        '值得被爱', '生活因你而精彩', '保持微笑', '一切都会好的',
        '你比自己想象的更强大', '今天也要加油哦', '慢慢来', '你可以的',
        '每一天都是新的开始', '温柔对待自己', '世界因你而美好',
        '勇敢前行', '你是独一无二的', '让光照进来', '拥抱每一天',
        '活在当下', '感受生活的美好', '给自己一个拥抱'
    ];

    // 清除旧的浮动文字
    welcomeScreen.querySelectorAll('.floating-text').forEach(el => el.remove());

    // 创建浮动文字
    encouragingTexts.forEach((text, index) => {
        const floatEl = document.createElement('div');
        floatEl.className = 'floating-text';
        floatEl.textContent = text;
        floatEl.style.setProperty('--left', `${10 + Math.random() * 80}%`);
        floatEl.style.setProperty('--duration', `${10 + Math.random() * 8}s`);
        floatEl.style.animationDelay = `${Math.random() * 12}s`;
        floatEl.style.fontSize = `${14 + Math.random() * 10}px`;
        welcomeScreen.appendChild(floatEl);
    });

    // 确保欢迎页面显示
    welcomeScreen.style.display = 'flex';
    welcomeScreen.classList.remove('hidden');

    // 初始化宠物类型选择
    const typesContainer = document.getElementById('setup-pet-types');
    if (typesContainer) {
        let typesHTML = '';
        Object.keys(PetTypes).forEach(type => {
            const isSelected = type === SetupState.selectedType;
            typesHTML += `<div class="pet-type-item-welcome ${isSelected ? 'selected' : ''}" data-type="${type}">
                <svg viewBox="0 0 100 120">${generatePetSVG(type, Colors[SetupState.selectedColor] || Colors['#FFB6C1'], 'calm')}</svg>
                <span>${PetTypes[type].name}</span>
            </div>`;
        });
        typesContainer.innerHTML = typesHTML;

        // 绑定点击事件
        typesContainer.querySelectorAll('.pet-type-item-welcome').forEach(item => {
            item.addEventListener('click', () => {
                typesContainer.querySelectorAll('.pet-type-item-welcome').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                SetupState.selectedType = item.dataset.type;
                updateSetupPreview();
            });
        });
    }

    // 初始化颜色选择
    const colorsContainer = document.getElementById('setup-colors');
    if (colorsContainer) {
        let colorsHTML = '';
        Object.keys(Colors).forEach(c => {
            const isSelected = c === SetupState.selectedColor;
            colorsHTML += `<div class="color-option-welcome ${isSelected ? 'selected' : ''}" data-color="${c}" style="background: ${c}"></div>`;
        });
        colorsContainer.innerHTML = colorsHTML;

        // 绑定点击事件
        colorsContainer.querySelectorAll('.color-option-welcome').forEach(opt => {
            opt.addEventListener('click', () => {
                colorsContainer.querySelectorAll('.color-option-welcome').forEach(o => o.classList.remove('selected'));
                opt.classList.add('selected');
                SetupState.selectedColor = opt.dataset.color;
                updateSetupPreview();
                // 同时更新宠物类型预览的颜色
                updateSetupPetColors();
            });
        });
    }

    // 初始化名字输入
    const nameInput = document.getElementById('setup-name-input');
    if (nameInput) {
        nameInput.value = SetupState.petName;
        nameInput.addEventListener('input', (e) => {
            SetupState.petName = e.target.value || '小伙伴';
            updateSetupPreview();
        });
    }

    // 更新初始预览
    updateSetupPreview();

    // 开始按钮
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
        startBtn.addEventListener('click', () => {
            completeSetup();
        });
    }

    // 跳过按钮
    const skipBtn = document.getElementById('skip-setup');
    if (skipBtn) {
        skipBtn.addEventListener('click', () => {
            completeSetup(true);
        });
    }
}

function updateSetupPetColors() {
    const typesContainer = document.getElementById('setup-pet-types');
    if (typesContainer) {
        typesContainer.querySelectorAll('.pet-type-item-welcome').forEach(item => {
            const type = item.dataset.type;
            const svg = item.querySelector('svg');
            if (svg) {
                svg.innerHTML = generatePetSVG(type, Colors[SetupState.selectedColor] || Colors['#FFB6C1'], 'calm');
            }
        });
    }
}

function updateSetupPreview() {
    const previewContainer = document.getElementById('setup-preview');
    const previewName = document.getElementById('setup-preview-name');
    const previewGreeting = document.getElementById('setup-preview-greeting');

    if (previewContainer) {
        previewContainer.innerHTML = `<svg viewBox="0 0 100 120">${generatePetSVG(SetupState.selectedType, Colors[SetupState.selectedColor] || Colors['#FFB6C1'], 'happy')}</svg>`;
    }

    const displayName = SetupState.petName || '我的小伙伴';
    if (previewName) {
        previewName.textContent = displayName;
    }

    if (previewGreeting) {
        const greetings = ['准备开始治愈之旅~', '期待与你相遇~', '一起探索心灵世界~', '开启美好的一天~'];
        previewGreeting.textContent = greetings[Math.floor(Math.random() * greetings.length)];
    }
}

function completeSetup(useDefaults = false) {
    if (!useDefaults) {
        // 保存用户选择
        State.pet.type = SetupState.selectedType;
        State.pet.color = SetupState.selectedColor;
        State.pet.name = SetupState.petName || '小伙伴';
    }

    // 标记设置完成
    State.isSetupComplete = true;
    saveState();

    // 隐藏欢迎页面
    const welcomeScreen = document.getElementById('welcome-screen');
    if (welcomeScreen) {
        welcomeScreen.classList.add('hidden');
        setTimeout(() => {
            welcomeScreen.style.display = 'none';
        }, 500);
    }

    // 初始化宠物和UI
    updateSidebar();
    updateFloatingPetAppearance();
    updateAdvice();

    // 启动随机移动
    if (State.wanderMode) {
        setTimeout(movePetRandomly, 3000 + Math.random() * 3000);
    }

    // 显示欢迎提示
    setTimeout(() => {
        showBubble(`你好呀！我是${State.pet.name}~ 💕`, 3000);
    }, 800);
}

// ========== 初始化 ==========
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    // 强制显示欢迎页面（用于调试，用户重新选择宠物）
    State.isSetupComplete = false;
    // 初始化欢迎/设置页面
    initWelcomeScreen();
    initUI();
    initFloatingPet();
});

// ========== 页面可见性控制 ==========
document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseAllAnimations();
    else resumeAllAnimations();
});

function pauseAllAnimations() {
    if (Timers.particleRAF) { cancelAnimationFrame(Timers.particleRAF); Timers.particleRAF = null; }
    if (Timers.blinkTimeout) { clearTimeout(Timers.blinkTimeout); Timers.blinkTimeout = null; }
    if (Timers.bubbleTimeout) { clearTimeout(Timers.bubbleTimeout); Timers.bubbleTimeout = null; }
}

function resumeAllAnimations() {
    if (State.isSetupComplete) {
        startParticleAnimation();
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
            // 确保新添加的字段存在（兼容旧版本）
            if (State.stats.lucky === undefined) {
                State.stats.lucky = 65;
            }
            // 重要：无论旧数据是什么，都要显示欢迎页面让用户重新选择宠物
            // 删除旧版本的 isFirstVisit 兼容逻辑，让用户重新设置
        } catch (e) {
            console.warn('Failed to load state');
            // 解析失败，视为首次设置
            State.isSetupComplete = false;
        }
    }
}

function saveState() {
    localStorage.setItem('mindPetState', JSON.stringify({
        pet: State.pet,
        stats: State.stats,
        history: State.history.slice(-20),
        isSetupComplete: State.isSetupComplete,
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
    // 如果设置未完成，不初始化主交互
    if (!State.isSetupComplete) {
        return;
    }
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
    const luckyVal = document.getElementById('lucky-value');
    const luckyFill = document.getElementById('lucky-fill');

    if (moodVal) moodVal.textContent = State.stats.mood;
    if (moodFill) moodFill.style.width = State.stats.mood + '%';
    if (stressVal) stressVal.textContent = State.stats.stress;
    if (stressFill) stressFill.style.width = State.stats.stress + '%';
    if (energyVal) energyVal.textContent = State.stats.energy;
    if (energyFill) energyFill.style.width = State.stats.energy + '%';
    if (luckyVal) luckyVal.textContent = State.stats.lucky;
    if (luckyFill) luckyFill.style.width = State.stats.lucky + '%';

    document.documentElement.style.setProperty('--primary', State.pet.color);
}

function generateSmallAvatar() {
    return `<svg viewBox="0 0 100 120">${generatePetSVG(State.pet.type, State.pet.color, 'calm')}</svg>`;
}

// ========== 智能建议系统 ==========
const ActionAdvice = {
    // 社交活动
    social: [
        '🍽️ 约上好朋友出去吃个饭聊聊天吧，分享美食的同时也能分享心情~',
        '🚶 出去走走，去公园或者江边散散步，换换心情',
        '☕ 找个安静的咖啡馆，点一杯喜欢的饮品，发呆也好，放空也好',
        '🎬 和朋友一起看场电影，享受片刻的欢乐时光',
        '🛍️ 约上闺蜜/兄弟一起去逛街，看看有什么新鲜玩意儿',
        '🏃 约朋友一起运动，跑步、打球、瑜伽都可以',
        '🎮 约朋友一起玩游戏，开黑聊天，欢乐加倍'
    ],
    // 自我放松
    relaxation: [
        '🛀 泡个热水澡，敷个面膜，好好宠爱自己',
        '📖 读一本想读很久的书，沉浸在文字的世界里',
        '🎵 听一些喜欢的音乐，让旋律抚慰心灵',
        '🎨 涂色书或者画一幅画，用色彩表达情绪',
        '🧘 做几分钟冥想或深呼吸，给大脑放个假',
        '🌿 在家里摆弄一下绿植，或者去花市逛逛',
        '🧸 抱抱毛绒玩具，童心可以治愈一切'
    ],
    // 生活小确幸
    smallHappiness: [
        '🍰 给自己买一块小蛋糕，甜食可以带来幸福感',
        '🌸 买一束鲜花放在桌上，让房间充满生机',
        '☀️ 拉开窗帘让阳光洒进来，晒晒太阳补补钙',
        '🍵 泡一杯热茶/咖啡，感受温暖的香气',
        '📸 给今天拍张照片，记录生活中的美好瞬间',
        '✍️ 写日记，把心情写下来，也是一种释放',
        '🌙 早点睡觉，充足的睡眠是最好的治愈'
    ],
    // 自我成长
    growth: [
        '📝 写下今天的三件好事，关注生活中的积极面',
        '🎯 设定一个小目标，完成后会有满满的成就感',
        '📚 学习一项新技能，充实自己也转移注意力',
        '💪 给自己一点鼓励的话语，积极暗示很重要',
        '🗺️ 规划一次小旅行，给生活一些期待',
        '🤝 帮助别人，做一件小小的好事，感受善意'
    ]
};

const AdviceLibrary = {
    mood: {
        high: [
            '💖 心情很棒！保持这份能量~',
            '🌟 阳光正好，你的心情也在发光！',
            '✨ 好心情是最好的礼物~',
            '🌈 这么好的心情，可以出去走走散散步~',
            '🦋 趁着好心情，约朋友一起出去玩吧！',
            '🎉 心情美美哒，可以尝试一些新事物~'
        ],
        medium: [
            '🌻 心情还不错，继续保持~',
            '☀️ 不错的状态，可以尝试新事物！',
            '🍃 状态平稳，可以听听音乐放松一下',
            '🌷 给自己一个小奖励吧，比如一块小蛋糕',
            '🎨 画一幅画或涂涂颜色，释放创作灵感'
        ],
        low: [
            '💭 有点低落，可以找信任的人聊聊~',
            '🍃 允许自己休息一下，深呼吸~',
            '🌙 低落是暂时的，会好起来的~',
            '☕ 泡杯热茶暖暖身子，出去走走换换心情',
            '🎵 听一些治愈系的音乐，让旋律陪伴你',
            '💐 买一束喜欢的花，给房间添点生机'
        ],
        critical: [
            '💝 你不是一个人，我一直陪着你~',
            '🌈 黑暗之后总有黎明，再坚持一下~',
            '🤗 难受的时候，宠物永远在这里~',
            '🫂 允许自己难过，但别忘了你值得被爱',
            '🌸 明天会更好的，今晚早点休息吧',
            '💕 无论发生什么，我都在这里陪着你'
        ]
    },
    stress: {
        high: [
            '😰 压力有点大...试试深呼吸~',
            '🧘 闭上眼睛，想象自己在海边~',
            '🌊 压力像海浪，会来的也会走的~',
            '🚶 出去走走，到户外呼吸一下新鲜空气',
            '📱 给好久没联系的朋友打个电话聊聊天',
            '🎯 把烦恼写下来，然后一件件解决'
        ],
        medium: [
            '💆 适当放松一下吧~',
            '☕ 泡杯热茶，休息一会儿~',
            '🛋️ 躺在沙发上休息，听听舒缓的音乐',
            '🌿 出去晒晒太阳，感受大自然的温暖',
            '📺 看一集喜欢的综艺节目，笑一笑'
        ],
        low: [
            '✨ 压力不大，生活很轻松~',
            '🌈 继续保持这份从容~',
            '🌸 享受这份轻松自在的感觉~',
            '🎨 有精力的话，可以尝试一些有趣的事'
        ],
        critical: [
            '🛋️ 今天就什么都不做，好好休息吧~',
            '🌙 明天会是新的一天~',
            '💤 关掉手机，好好睡一觉恢复精力',
            '🧸 抱着喜欢的毛绒玩具休息一下吧',
            '📵 暂时远离让你烦心的事情，给自己放个假'
        ]
    },
    energy: {
        high: [
            '⚡ 能量满满！去完成你的目标吧~',
            '🚀 今天效率一定很高！',
            '💫 充满电的感觉真好~',
            '🏃 趁着精力充沛，去运动一下吧！',
            '📚 学习新知识，充实自己！',
            '🎯 设定目标并努力完成它！'
        ],
        medium: [
            '📋 制定个小目标吧~',
            '🎯 专注一件事，完成它~',
            '📝 列一个待办清单，一件件完成',
            '🌱 做些力所能及的小事就好'
        ],
        low: [
            '😪 有点疲惫了...休息一下吧~',
            '🛏️ 小憩一下会恢复精力~',
            '🎵 听点轻音乐放松一下~',
            '🍵 喝杯热饮，休息一下再继续',
            '🌸 给自己买点小东西犒劳一下',
            '📞 和朋友聊聊天，分享一下心情'
        ],
        critical: [
            '🔋 能量严重不足，请立刻休息！',
            '😴 不要硬撑，身体需要休息~',
            '🛋️ 今天就好好休息吧，明天再战！',
            '💤 关掉闹钟，睡到自然醒',
            '🫂 累了就休息，你已经很努力了'
        ]
    },
    lucky: {
        high: [
            '🍀 今天的幸运值爆棚！快去买张彩票试试~',
            '🌟 好事即将发生！保持开放的心态迎接~',
            '✨ 今天的你会遇到意想不到的好运！',
            '🎁 幸运女神眷顾你，注意发现身边的美好~',
            '🌈 今天适合尝试新事物，可能会有惊喜哦！',
            '💫 好事连连，记得记录下今天的幸运时刻！'
        ],
        medium: [
            '🍀 今天的运气还不错~',
            '🌸 小确幸在等着你，保持期待~',
            '✨ 留意身边的小幸运，可能是一杯免费的咖啡~',
            '🌷 也许今天会遇到有趣的人或事~',
            '🎈 普通的日常里也有小惊喜哦'
        ],
        low: [
            '🍃 运气稍弱，但坏事也会过去的~',
            '🌙 低谷之后就是上升期，坚持一下~',
            '💭 即使运气不好，也别忘了照顾好自己~',
            '🌤️ 乌云会散去的，好运正在路上~',
            '🤗 运气不好的时候，就对自己好一点吧'
        ],
        critical: [
            '🌈 最坏的时刻过去就会好起来的~',
            '💝 即使今天不顺，也要好好爱自己~',
            '🌙 今天就宅在家里休息，明天会更好~',
            '🍵 喝杯热饮，静静等待转机的到来~',
            '🤗 记住，你本身就是最大的幸运~'
        ]
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

function getRandomActionAdvice() {
    // 随机选择一种类型的行动建议
    const categories = Object.keys(ActionAdvice);
    const randomCategory = categories[Math.floor(Math.random() * categories.length)];
    const categoryAdvice = ActionAdvice[randomCategory];
    return getRandomAdvice(categoryAdvice);
}

function updateAdvice() {
    const { mood, stress, energy, lucky } = State.stats;
    const priorities = [
        { name: 'mood', value: mood },
        { name: 'stress', value: stress },
        { name: 'energy', value: energy },
        { name: 'lucky', value: lucky }
    ];
    priorities.sort((a, b) => a.value - b.value);

    let html = '';

    // 最紧急的建议（状态最差的那个）
    const urgentItem = priorities[0];
    const urgentLevel = getAdviceLevel(urgentItem.value);
    html += `<p class="advice-item">${getRandomAdvice(AdviceLibrary[urgentItem.name][urgentLevel])}</p>`;

    // 如果有第二个状态不好的，也给出建议
    const secondItem = priorities[1];
    if (secondItem && secondItem.value < 50) {
        const secondLevel = getAdviceLevel(secondItem.value);
        html += `<p class="advice-item">${getRandomAdvice(AdviceLibrary[secondItem.name][secondLevel])}</p>`;
    }

    // 添加具体的行动建议
    const actionAdvice = getRandomActionAdvice();
    html += `<p class="advice-item">${actionAdvice}</p>`;

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
    const luckyBefore = State.stats.lucky;
    const impact = analyzeMoodImpact(selectedMood, ventText);

    State.stats.mood = Math.max(0, Math.min(100, State.stats.mood + impact.mood));
    State.stats.stress = Math.max(0, Math.min(100, State.stats.stress + impact.stress));
    State.stats.energy = Math.max(0, Math.min(100, State.stats.energy + impact.energy));
    // 倾诉可以稍微提升幸运值，因为表达情绪会带来好运
    State.stats.lucky = Math.max(0, Math.min(100, State.stats.lucky + 3));

    State.history.push({ mood: selectedMood, text: ventText || '（无详细描述）', time: moodTime || new Date().toISOString() });
    State.joyValue = Math.max(0, State.joyValue - 5);

    const record = {
        emotionType: selectedMood,
        content: ventText,
        timestamp: moodTime || new Date().toISOString(),
        moodBefore, moodAfter: State.stats.mood,
        stressBefore, stressAfter: State.stats.stress,
        energyBefore, energyAfter: State.stats.energy,
        luckyBefore, luckyAfter: State.stats.lucky
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
        happy: { mood: 15, stress: -10, energy: 5, lucky: 5 },
        calm: { mood: 5, stress: -5, energy: 5, lucky: 3 },
        excited: { mood: 10, stress: 5, energy: 10, lucky: 8 },
        anxious: { mood: -10, stress: 15, energy: -5, lucky: -5 },
        sad: { mood: -15, stress: 5, energy: -10, lucky: -3 },
        angry: { mood: -20, stress: 20, energy: -15, lucky: -8 }
    };

    let impact = { ...impacts[moodType] };
    ['压力', '焦虑', '失眠', '疲惫'].forEach(w => { if (text.includes(w)) { impact.stress += 5; impact.energy -= 5; } });
    ['开心', '成功', '顺利', '进步'].forEach(w => { if (text.includes(w)) { impact.mood += 5; impact.lucky += 3; } });
    ['幸运', '好运', '惊喜'].forEach(w => { if (text.includes(w)) { impact.lucky += 5; } });

    return {
        mood: Math.round(impact.mood),
        stress: Math.round(impact.stress),
        energy: Math.round(impact.energy),
        lucky: Math.round(impact.lucky)
    };
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

    // 启动随机移动
    if (State.wanderMode) {
        setTimeout(movePetRandomly, 3000 + Math.random() * 3000);
    }
}

// ========== 宠物位置约束 ==========
function clampPetPosition(x, y) {
    const rightPanel = document.querySelector('.right-panel');
    if (!rightPanel) {
        return {
            x: Math.max(40, Math.min(window.innerWidth - PET_WIDTH - 40, x)),
            y: Math.max(70, Math.min(window.innerHeight - PET_HEIGHT - 40, y))
        };
    }

    const rect = rightPanel.getBoundingClientRect();
    const horizontalPadding = window.innerWidth <= 768 ? 20 : 28;
    const topPadding = window.innerWidth <= 768 ? 54 : 86;
    const bottomPadding = window.innerWidth <= 768 ? 24 : 28;

    return {
        x: Math.max(rect.left + horizontalPadding, Math.min(rect.right - PET_WIDTH - horizontalPadding, x)),
        y: Math.max(rect.top + topPadding, Math.min(rect.bottom - PET_HEIGHT - bottomPadding, y))
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
        
        // 保存鼠标的视口坐标
        dragStartX = clientX;
        dragStartY = clientY;
        
        // 保存宠物当前位置（容器相对坐标）
        petStartX = petX;
        petStartY = petY;
        
        return true;
    };

    const applyDrag = (clientX, clientY) => {
        if (!State.isDragging) return;
        
        // 获取容器的边界
        const container = document.getElementById('pet-container');
        if (!container) return;
        const containerRect = container.getBoundingClientRect();
        
        // 将鼠标坐标转换为相对于容器的坐标
        const mouseContainerX = clientX - containerRect.left;
        const mouseContainerY = clientY - containerRect.top;
        
        // 计算鼠标相对于初始点击位置的偏移（使用容器相对坐标）
        const dx = mouseContainerX - (dragStartX - containerRect.left);
        const dy = mouseContainerY - (dragStartY - containerRect.top);
        
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
        if (dragMoved) {
            State.position = { x: petX, y: petY };
            State.wanderMode = false;
            saveState();
            
            // 拖拽后禁用点击动作一段时间，防止误触
            State.justDragged = true;
            setTimeout(() => {
                State.justDragged = false;
                if (!State.isDragging) State.wanderMode = true;
            }, 30000);
            
            // 拖拽结束后恢复随机移动
            if (State.wanderMode && Math.random() < 0.5) {
                setTimeout(movePetRandomly, 2000);
            }
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
            // 如果刚刚拖拽过，不处理点击
            if (State.justDragged) {
                dragMoved = false;
                return;
            }
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
        const messagePool = [
            '抱抱！', '喜欢你！', '再摸摸我～',
            '好开心呀！', '我们一起玩！', '你真好～'
        ];
        showBubble(messagePool[Math.floor(Math.random() * messagePool.length)]);
        spawnParticles('hearts', 6);
        setTimeout(() => floatingPet.classList.remove('jump', 'happy'), 520);
    }

    updateHeadIcon();
    saveState();
}

function showHoverBubble() {
    const mood = State.stats.mood;
    const text = mood >= 80
        ? '今天也被你点亮啦 ✨'
        : mood >= 60
            ? '陪着你真好～'
            : mood >= 40
                ? '摸摸我，我们继续散步～'
                : mood >= 20
                    ? '先陪我安静一会儿...'
                    : '抱抱我，陪你一起';
    const bubbleText = document.getElementById('bubble-text');
    if (bubbleText) bubbleText.textContent = text;
    const bubble = document.getElementById('pet-bubble');
    if (bubble) bubble.classList.add('show');
}

function showBubble(text, duration = 2600) {
    const bubbleText = document.getElementById('bubble-text');
    const bubble = document.getElementById('pet-bubble');
    if (bubbleText) bubbleText.textContent = text;
    if (bubble) bubble.classList.add('show');
    if (Timers.bubbleTimeout) clearTimeout(Timers.bubbleTimeout);
    Timers.bubbleTimeout = setTimeout(() => {
        const b = document.getElementById('pet-bubble');
        if (b) b.classList.remove('show');
    }, duration);
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


        floatingPet.style.zIndex = '1000';
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

// ========== 移动时情绪小语言 ==========
const MoodWalkPhrases = {
    // 高心情
    happy: [
        '今天的阳光好温暖呀~ ☀️',
        '心情美美哒！✨',
        '想去找点好吃的！🍰',
        '出来散散步真舒服~ 🌸',
        '这风景真不错！🌈',
        '好开心呀~ 💕'
    ],
    // 中等心情
    calm: [
        '慢悠悠地走一走~ 🚶',
        '吹吹风，放松一下 🌿',
        '这里真安静... 🍃',
        '享受当下的时光 ☕',
        '世界很美好~ 🌼',
        '慢慢来，不着急 🌱'
    ],
    // 低心情
    sad: [
        '出来透透气吧... 🌧️',
        '散散心会好一点的 💭',
        '深呼吸，慢慢走~ 🌊',
        '乌云会散的... 🌤️',
        '给自己一点时间 🌙',
        '一切都会好起来的 💝'
    ],
    // 临界/很差心情
    sad_critical: [
        '需要抱抱吗... 🤗',
        '记得你很棒哦 💖',
        '别忘了照顾自己 🌷',
        '我在这里陪着你 🫂',
        '休息一下再出发 🌸',
        '慢慢来，你已经很好 💕'
    ],
    // 高能量
    energetic: [
        '充满力量！⚡',
        '冲冲冲！🚀',
        '精神满满~ 💪',
        '今天效率超高！🎯',
        '动起来！🏃',
        '干劲十足！🔥'
    ],
    // 低能量
    tired: [
        '有点累了... 😴',
        '休息一下再走~ 🛋️',
        '慢慢挪动~ 🐌',
        '需要充充电... 🔋',
        '慢一点也没关系 🌙',
        '给自己放个假吧 ~ 💤'
    ],
    // 高压力
        highStress: [
        '深呼吸~ 🌬️',
        '放轻松... 🌊',
        '压力会过去的 🌈',
        '别太紧绷了 🌿',
        '慢下来休息一下吧 🧘',
        '一切都会顺利的 ~ ✨'
    ],
    // 高幸运
    lucky: [
        '今天运气好好！🍀',
        '好事要发生哦~ ✨',
        '好幸运呀~ 🌟',
        '期待惊喜！🎁',
        '幸运女神眷顾~ 💫',
        '今天会是美好的一天~ 🌈'
    ],
    // 一般状态
    normal: [
        '出去走走吧~ 🌸',
        '换个地方看看 🌿',
        '探索一下新地方~ 🔍',
        '天气不错呢 ☀️',
        '出去透透气 🚶',
        '发现有趣的地方~ ✨'
    ]
};

function getMoodWalkPhrase() {
    const { mood, stress, energy, lucky } = State.stats;

    // 优先检查最需要关注的指标
    // 心情很差
    if (mood < 20) {
        return MoodWalkPhrases.sad_critical[Math.floor(Math.random() * MoodWalkPhrases.sad_critical.length)];
    }
    // 能量很低
    if (energy < 20) {
        return MoodWalkPhrases.tired[Math.floor(Math.random() * MoodWalkPhrases.tired.length)];
    }
    // 压力很高
    if (stress > 70) {
        return MoodWalkPhrases.highStress[Math.floor(Math.random() * MoodWalkPhrases.highStress.length)];
    }
    // 心情好
    if (mood >= 70) {
        return MoodWalkPhrases.happy[Math.floor(Math.random() * MoodWalkPhrases.happy.length)];
    }
    // 能量高
    if (energy >= 70) {
        return MoodWalkPhrases.energetic[Math.floor(Math.random() * MoodWalkPhrases.energetic.length)];
    }
    // 幸运值高
    if (lucky >= 70) {
        return MoodWalkPhrases.lucky[Math.floor(Math.random() * MoodWalkPhrases.lucky.length)];
    }
    // 心情低
    if (mood < 40) {
        return MoodWalkPhrases.sad[Math.floor(Math.random() * MoodWalkPhrases.sad.length)];
    }
    // 心情中等或平静
    if (mood >= 40 && mood < 70) {
        return MoodWalkPhrases.calm[Math.floor(Math.random() * MoodWalkPhrases.calm.length)];
    }
    // 默认
    return MoodWalkPhrases.normal[Math.floor(Math.random() * MoodWalkPhrases.normal.length)];
}

// ========== 宠物移动（简化版 - 随机移动）==========
function movePetRandomly() {
    if (!floatingPet || State.isDragging) return;

    // 随机30%概率显示情绪小语言
    if (Math.random() < 0.3) {
        showBubble(getMoodWalkPhrase(), 2500);
    }

    // 随机目标位置（在容器范围内）
    const petContainer = document.getElementById('pet-container');
    if (!petContainer) return;

    const rect = petContainer.getBoundingClientRect();
    const targetX = Math.random() * (rect.width - PET_WIDTH * 2) + PET_WIDTH;
    const targetY = Math.random() * (rect.height - PET_HEIGHT * 2) + PET_HEIGHT;

    movePetTo(targetX, targetY);
}

function movePetTo(targetX, targetY) {
    if (!floatingPet) return;

    const clamped = clampPetPosition(targetX, targetY);
    const distance = Math.hypot(clamped.x - petX, clamped.y - petY);
    const duration = Math.min(2000, Math.max(800, Math.round(distance * 3)));

    if (Timers.moveTimeout) clearTimeout(Timers.moveTimeout);

    Timers.isMoving = true;
    floatingPet.classList.add('moving');
    floatingPet.style.setProperty('--move-duration', `${duration}ms`);
    floatingPet.classList.toggle('facing-left', clamped.x < petX);

    petX = clamped.x;
    petY = clamped.y;
    updatePetPosition();

    Timers.moveTimeout = setTimeout(() => {
        State.position = { x: petX, y: petY };
        saveState();
        Timers.isMoving = false;
        floatingPet.classList.remove('moving');

        // 继续随机移动
        if (State.wanderMode && Math.random() < 0.7) {
            setTimeout(movePetRandomly, 4000 + Math.random() * 4000);
        }
    }, duration + 40);
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
