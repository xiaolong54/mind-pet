// ========== 宠物形象与颜色配置 ==========
const PetTypes = {
    bunny: {
        name: '小兔子',
        bodyParts: `
            <defs>
                <radialGradient id="bunnyBodyGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" class="pet-highlight"/>
                    <stop offset="100%" class="pet-shadow"/>
                </radialGradient>
                <filter id="bunnyGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <ellipse cx="50" cy="88" rx="32" ry="26" fill="url(#bunnyBodyGrad)" filter="url(#bunnyGlow)" class="pet-body-shape"/>
            <ellipse cx="35" cy="22" rx="9" ry="28" class="pet-ear ear-left"/>
            <ellipse cx="65" cy="22" rx="9" ry="28" class="pet-ear ear-right"/>
            <ellipse cx="35" cy="22" rx="5" ry="20" class="pet-ear-inner"/>
            <ellipse cx="65" cy="22" rx="5" ry="20" class="pet-ear-inner"/>
            <circle cx="50" cy="55" r="28" class="pet-head-shape"/>
            <ellipse cx="50" cy="88" rx="20" ry="16" class="pet-belly-shape"/>
        `
    },
    cat: {
        name: '小猫咪',
        bodyParts: `
            <defs>
                <radialGradient id="catBodyGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" class="pet-highlight"/>
                    <stop offset="100%" class="pet-shadow"/>
                </radialGradient>
                <filter id="catGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <ellipse cx="50" cy="88" rx="30" ry="22" fill="url(#catBodyGrad)" filter="url(#catGlow)" class="pet-body-shape"/>
            <circle cx="50" cy="52" r="30" class="pet-head-shape"/>
            <polygon points="24,32 36,5 48,32" class="pet-ear ear-left"/>
            <polygon points="76,32 64,5 52,32" class="pet-ear ear-right"/>
            <polygon points="27,30 36,12 45,30" class="pet-ear-inner"/>
            <polygon points="73,30 64,12 55,30" class="pet-ear-inner"/>
            <ellipse cx="50" cy="60" rx="18" ry="14" class="pet-face-shape"/>
            <path d="M80 88 Q98 72 86 54" class="pet-tail" fill="none" stroke-width="9" stroke-linecap="round"/>
        `
    },
    bear: {
        name: '小熊',
        bodyParts: `
            <defs>
                <radialGradient id="bearBodyGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" class="pet-highlight"/>
                    <stop offset="100%" class="pet-shadow"/>
                </radialGradient>
                <filter id="bearGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <ellipse cx="50" cy="90" rx="34" ry="24" fill="url(#bearBodyGrad)" filter="url(#bearGlow)" class="pet-body-shape"/>
            <circle cx="50" cy="50" r="32" class="pet-head-shape"/>
            <circle cx="22" cy="24" r="14" class="pet-ear ear-left"/>
            <circle cx="78" cy="24" r="14" class="pet-ear ear-right"/>
            <circle cx="22" cy="24" r="8" class="pet-ear-inner"/>
            <circle cx="78" cy="24" r="8" class="pet-ear-inner"/>
            <ellipse cx="50" cy="58" rx="20" ry="16" class="pet-face-shape"/>
            <ellipse cx="50" cy="90" rx="22" ry="15" class="pet-belly-shape"/>
        `
    },
    fox: {
        name: '小狐狸',
        bodyParts: `
            <defs>
                <radialGradient id="foxBodyGrad" cx="50%" cy="40%" r="60%">
                    <stop offset="0%" class="pet-highlight"/>
                    <stop offset="100%" class="pet-shadow"/>
                </radialGradient>
                <filter id="foxGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="3" result="blur"/>
                    <feMerge>
                        <feMergeNode in="blur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
            <ellipse cx="50" cy="92" rx="28" ry="20" fill="url(#foxBodyGrad)" filter="url(#foxGlow)" class="pet-body-shape"/>
            <ellipse cx="82" cy="78" rx="20" ry="12" class="pet-tail" transform="rotate(-15 82 78)"/>
            <ellipse cx="50" cy="52" r="28" class="pet-head-shape"/>
            <ellipse cx="50" cy="62" rx="18" ry="16" class="pet-face-shape"/>
            <polygon points="26,38 38,2 50,38" class="pet-ear ear-left"/>
            <polygon points="74,38 62,2 50,38" class="pet-ear ear-right"/>
            <polygon points="29,36 38,10 47,36" class="pet-ear-inner"/>
            <polygon points="71,36 62,10 53,36" class="pet-ear-inner"/>
            <ellipse cx="50" cy="92" rx="16" ry="12" class="pet-belly-shape"/>
        `
    }
};

const Colors = {
    '#FFB6C1': { name: '樱花粉', primary: '#FFE4E8', dark: '#FF8FAB', highlight: 'rgba(255,255,255,0.8)' },
    '#87CEEB': { name: '天空蓝', primary: '#B0E0E6', dark: '#5CACEE', highlight: 'rgba(255,255,255,0.8)' },
    '#98FB98': { name: '薄荷绿', primary: '#C8FFC8', dark: '#6B8E23', highlight: 'rgba(255,255,255,0.8)' },
    '#DDA0DD': { name: '葡萄紫', primary: '#E6E6FA', dark: '#9370DB', highlight: 'rgba(255,255,255,0.8)' },
    '#F0E68C': { name: '柠檬黄', primary: '#FFFACD', dark: '#DAA520', highlight: 'rgba(255,255,255,0.8)' },
    '#FFA07A': { name: '蜜桃橙', primary: '#FFDAB9', dark: '#FF7F50', highlight: 'rgba(255,255,255,0.8)' }
};

// ========== 表情配置（预先生成完整SVG） ==========
const Expressions = {
    happy: `
        <g class="expression">
            <ellipse cx="38" cy="50" rx="7" ry="5" fill="#333"/>
            <ellipse cx="62" cy="50" rx="7" ry="5" fill="#333"/>
            <path d="M32 48 Q38 42 44 48" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
            <path d="M56 48 Q62 42 68 48" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/>
            <circle cx="35" cy="48" r="2.5" fill="white"/>
            <circle cx="59" cy="48" r="2.5" fill="white"/>
            <circle cx="41" cy="51" r="1.2" fill="white" opacity="0.7"/>
            <circle cx="65" cy="51" r="1.2" fill="white" opacity="0.7"/>
        </g>
        <g class="mouth"><path d="M42 62 Q50 72 58 62" stroke="#333" stroke-width="2.5" fill="none" stroke-linecap="round"/></g>
        <g class="blush"><ellipse cx="28" cy="58" rx="7" ry="5" class="pet-blush"/><ellipse cx="72" cy="58" rx="7" ry="5" class="pet-blush"/></g>
    `,
    calm: `
        <g class="expression">
            <ellipse cx="38" cy="50" rx="7" ry="8" fill="#333"/>
            <ellipse cx="62" cy="50" rx="7" ry="8" fill="#333"/>
            <circle cx="35" cy="47" r="3" fill="white"/>
            <circle cx="59" cy="47" r="3" fill="white"/>
            <circle cx="40" cy="51" r="1.5" fill="white" opacity="0.6"/>
            <circle cx="64" cy="51" r="1.5" fill="white" opacity="0.6"/>
        </g>
        <g class="mouth"><path d="M45 63 Q50 66 55 63" stroke="#333" stroke-width="2" fill="none" stroke-linecap="round"/></g>
        <g class="blush"><ellipse cx="28" cy="56" rx="6" ry="4" class="pet-blush"/><ellipse cx="72" cy="56" rx="6" ry="4" class="pet-blush"/></g>
    `,
    worried: `
        <g class="expression">
            <ellipse cx="38" cy="51" rx="7" ry="6" fill="#333"/>
            <ellipse cx="62" cy="51" rx="7" ry="6" fill="#333"/>
            <path d="M32 44 L44 47" stroke="#333" stroke-width="2" stroke-linecap="round"/>
            <path d="M68 44 L56 47" stroke="#333" stroke-width="2" stroke-linecap="round"/>
            <circle cx="35" cy="49" r="2.5" fill="white"/>
            <circle cx="59" cy="49" r="2.5" fill="white"/>
        </g>
        <g class="mouth"><path d="M46 64 Q50 62 54 64" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/></g>
        <g class="blush"><ellipse cx="26" cy="55" rx="5" ry="3" class="pet-blush" opacity="0.3"/><ellipse cx="74" cy="55" rx="5" ry="3" class="pet-blush" opacity="0.3"/></g>
    `,
    sad: `
        <g class="expression">
            <ellipse cx="38" cy="52" rx="6" ry="5" fill="#333"/>
            <ellipse cx="62" cy="52" rx="6" ry="5" fill="#333"/>
            <path d="M32 46 L44 50" stroke="#333" stroke-width="2" stroke-linecap="round"/>
            <path d="M68 46 L56 50" stroke="#333" stroke-width="2" stroke-linecap="round"/>
            <circle cx="35" cy="50" r="2" fill="white"/>
            <circle cx="59" cy="50" r="2" fill="white"/>
            <ellipse cx="32" cy="56" rx="2" ry="4" fill="#87CEEB" opacity="0.7"/>
            <ellipse cx="68" cy="56" rx="2" ry="4" fill="#87CEEB" opacity="0.7"/>
        </g>
        <g class="mouth"><path d="M44 65 Q50 60 56 65" stroke="#333" stroke-width="1.5" fill="none" stroke-linecap="round"/></g>
        <g class="blush"><ellipse cx="26" cy="54" rx="4" ry="3" class="pet-blush" opacity="0.2"/><ellipse cx="74" cy="54" rx="4" ry="3" class="pet-blush" opacity="0.2"/></g>
    `,
    surprised: `
        <g class="expression">
            <circle cx="38" cy="50" r="8" fill="#333"/>
            <circle cx="62" cy="50" r="8" fill="#333"/>
            <circle cx="38" cy="50" r="4" fill="#222"/>
            <circle cx="62" cy="50" r="4" fill="#222"/>
            <circle cx="36" cy="47" r="2.5" fill="white"/>
            <circle cx="60" cy="47" r="2.5" fill="white"/>
        </g>
        <g class="mouth"><ellipse cx="50" cy="66" rx="5" ry="6" fill="#333"/></g>
        <g class="blush"><ellipse cx="28" cy="58" rx="6" ry="4" class="pet-blush"/><ellipse cx="72" cy="58" rx="6" ry="4" class="pet-blush"/></g>
    `,
    tired: `
        <g class="expression">
            <line x1="32" y1="50" x2="44" y2="52" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
            <line x1="56" y1="52" x2="68" y2="50" stroke="#333" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g class="mouth"><ellipse cx="50" cy="64" rx="3" ry="1.5" fill="#333"/></g>
        <g class="blush"><ellipse cx="28" cy="56" rx="5" ry="3" class="pet-blush" opacity="0.2"/><ellipse cx="72" cy="56" rx="5" ry="3" class="pet-blush" opacity="0.2"/></g>
    `
};

// ========== 全局状态 ==========
const State = {
    pet: { type: 'bunny', color: '#FFB6C1', name: '小伙伴' },
    stats: { mood: 75, health: 80, energy: 70, confidence: 65 },
    history: [],
    isFirstVisit: true,
    joyValue: 50,
    clickCount: 0,
    currentExpression: 'calm',
    position: { x: null, y: null }
};

// ========== 定时器管理 ==========
const Timers = {
    moveTimeout: null,
    blinkTimeout: null,
    bubbleTimeout: null,
    particleRAF: null,
    moveRAF: null,
    isMoving: false,
    isBlinking: false
};

// ========== DOM引用 ==========
let floatingPet, petBody, petSvg, particleCanvas, particleCtx;
let petX = 0, petY = 0;
let particles = [];
const MAX_PARTICLES = 15;
// 宠物尺寸放大1.5倍
const PET_WIDTH = 270;
const PET_HEIGHT = 300;

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
    initCreateFlow();
    if (!State.isFirstVisit) showMainPage();
});

// ========== 页面可见性控制 ==========
document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseAllAnimations();
    else resumeAllAnimations();
});

function pauseAllAnimations() {
    if (Timers.particleRAF) { cancelAnimationFrame(Timers.particleRAF); Timers.particleRAF = null; }
    if (Timers.moveRAF) { cancelAnimationFrame(Timers.moveRAF); Timers.moveRAF = null; }
    if (Timers.moveTimeout) { clearTimeout(Timers.moveTimeout); Timers.moveTimeout = null; }
    if (Timers.blinkTimeout) { clearTimeout(Timers.blinkTimeout); Timers.blinkTimeout = null; }
    if (Timers.bubbleTimeout) { clearTimeout(Timers.bubbleTimeout); Timers.bubbleTimeout = null; }
}

function resumeAllAnimations() {
    if (State.position && !State.isFirstVisit) {
        startParticleAnimation();
        startPetAI();
        startBlinking();
    }
}

// ========== 状态管理 ==========
function loadState() {
    const saved = localStorage.getItem('petWellnessState');
    if (saved) {
        try { Object.assign(State, JSON.parse(saved)); }
        catch (e) { console.warn('Failed to load state'); }
    }
}

function saveState() {
    localStorage.setItem('petWellnessState', JSON.stringify({
        pet: State.pet, stats: State.stats, history: State.history.slice(-20),
        isFirstVisit: false, joyValue: State.joyValue, position: State.position
    }));
}

// ========== 创建流程 ==========
function initCreateFlow() {
    document.querySelectorAll('.pet-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.pet-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            State.pet.type = opt.dataset.type;
            updateNamePreview();
        });
    });
    document.querySelectorAll('.color-option').forEach(opt => {
        opt.addEventListener('click', () => {
            document.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
            opt.classList.add('selected');
            State.pet.color = opt.dataset.color;
            updateNamePreview();
        });
    });
    document.querySelectorAll('.next-btn').forEach(btn => btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.next))));
    document.querySelectorAll('.prev-btn').forEach(btn => btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.prev))));
    document.getElementById('start-btn').addEventListener('click', startJourney);
    updateNamePreview();
}

function goToStep(step) {
    document.querySelectorAll('.create-step').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    document.querySelector(`.create-step[data-step="${step}"]`).classList.add('active');
    document.querySelector(`.step[data-step="${step}"]`).classList.add('active');
    for (let i = 1; i < step; i++) document.querySelector(`.step[data-step="${i}"]`).classList.add('active');
}

function updateNamePreview() {
    document.getElementById('name-pet-avatar').innerHTML = generatePetSVG(State.pet.type, Colors[State.pet.color] || Colors['#FFB6C1'], 'calm');
}

function startJourney() {
    const name = document.getElementById('pet-name').value.trim();
    State.pet.name = name || PetTypes[State.pet.type].name;
    State.isFirstVisit = false;
    State.stats = { mood: 75, health: 80, energy: 70, confidence: 65 };
    State.joyValue = 50;
    State.currentExpression = 'calm';
    saveState();
    showMainPage();
}

function showMainPage() {
    document.getElementById('create-page').classList.remove('active');
    document.getElementById('main-page').classList.add('active');
    initMainPage();
    initFloatingPet();
    startPetAI();
}

// ========== 主页面功能 ==========
function initMainPage() {
    updateSidebar();
    document.querySelectorAll('.mood-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
        });
    });
    document.getElementById('vent-submit').addEventListener('click', submitVent);
    document.getElementById('change-appearance-btn').addEventListener('click', openAppearanceModal);
    document.getElementById('modal-close').addEventListener('click', closeAppearanceModal);
    document.getElementById('save-appearance').addEventListener('click', saveAppearance);
    document.getElementById('reset-btn').addEventListener('click', () => { if (confirm('确定要重置吗？')) { localStorage.removeItem('petWellnessState'); location.reload(); } });
    renderHistory();
}

function updateSidebar() {
    const color = Colors[State.pet.color] || Colors['#FFB6C1'];
    document.getElementById('sidebar-pet-name').textContent = State.pet.name;
    document.getElementById('sidebar-pet-avatar').innerHTML = generateSmallAvatar();
    document.getElementById('mood-value').textContent = State.stats.mood;
    document.getElementById('mood-fill').style.width = State.stats.mood + '%';
    document.getElementById('health-value').textContent = State.stats.health;
    document.getElementById('health-fill').style.width = State.stats.health + '%';
    document.getElementById('energy-value').textContent = State.stats.energy;
    document.getElementById('energy-fill').style.width = State.stats.energy + '%';
    document.getElementById('confidence-value').textContent = State.stats.confidence;
    document.getElementById('confidence-fill').style.width = State.stats.confidence + '%';
    updateAdvice();
    document.documentElement.style.setProperty('--primary', State.pet.color);
    document.documentElement.style.setProperty('--primary-light', color.primary);
    document.documentElement.style.setProperty('--primary-dark', color.dark);
}

function generateSmallAvatar() {
    return `<svg viewBox="0 0 100 120">${generatePetSVG(State.pet.type, Colors[State.pet.color] || Colors['#FFB6C1'], 'calm')}</svg>`;
}

// ========== 智能建议系统 ==========
const AdviceLibrary = {
    // 心情建议
    mood: {
        high: ['💖 心情很棒！保持这份能量~', '🌟 阳光正好，你的心情也在发光！', '✨ 好心情是最好的礼物~'],
        medium: ['🌻 心情还不错，继续保持~', '☀️ 不错的状态，可以尝试新事物！'],
        low: ['💭 有点低落，可以找信任的人聊聊~', '🍃 允许自己休息一下，深呼吸~', '🌙 低落是暂时的，会好起来的~'],
        critical: ['💝 你不是一个人，我一直陪着你~', '🌈 黑暗之后总有黎明，再坚持一下~', '🤗 难受的时候，宠物永远在这里~']
    },
    // 健康建议
    health: {
        high: ['💪 身体状态很棒！继续保持~', '🏃 活力满满，可以多运动~', '🍎 健康的体魄是幸福的基础~'],
        medium: ['🥗 注意营养搭配，多吃蔬菜水果~', '🚶 站起来活动一下吧~', '💧 别忘了多喝水~'],
        low: ['😴 身体在提醒你需要休息了~', '🍵 泡杯热茶，让身体放松~', '🛋️ 今天就好好休息一下吧~'],
        critical: ['⚠️ 身体是革命的本钱，请多保重~', '🏥 如果不舒服，记得去看医生~', '💤 好好睡一觉吧~']
    },
    // 能量建议
    energy: {
        high: ['⚡ 能量满满！去完成你的目标吧~', '🚀 今天效率一定很高！', '💫 充满电的感觉真好~'],
        medium: ['📋 制定个小目标吧~', '🎯 专注一件事，完成它~', '☕ 下午可以来杯咖啡提神~'],
        low: ['😪 有点疲惫了...休息一下吧~', '🛏️ 小憩一下会恢复精力~', '🎵 听点轻音乐放松一下~'],
        critical: ['🔋 能量严重不足，请立刻休息！', '😴 不要硬撑，身体需要休息~', '🌙 今天就早点睡觉吧~']
    },
    // 信心建议
    confidence: {
        high: ['🦋 你很棒！相信自己~', '🌟 自信的你闪闪发光！', '💪 你比自己想象的更厉害~'],
        medium: ['📝 列出你完成过的事...你会发现自己很棒~', '🎯 设定一个可达成的小目标~', '💬 和支持你的人聊聊~'],
        low: ['🌱 每一次困难都是成长的机会~', '🤔 不完美也没关系，你已经很努力了~', '💭 记住你曾经的成就~'],
        critical: ['🌈 相信自己，你值得被爱~', '💝 你的存在本身就有价值~', '🤗 不要和别人比较，你独一无二~']
    }
};

function getAdviceLevel(value) {
    if (value >= 80) return 'high';
    if (value >= 50) return 'medium';
    if (value >= 25) return 'low';
    return 'critical';
}

function getRandomAdvice(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function updateAdvice() {
    const { mood, health, energy, confidence } = State.stats;
    
    // 找出最需要关注的指标（优先级排序）
    const priorities = [
        { name: 'energy', value: energy, priority: energy < 30 ? 1 : energy < 50 ? 3 : 5 },
        { name: 'health', value: health, priority: health < 30 ? 2 : health < 50 ? 4 : 6 },
        { name: 'mood', value: mood, priority: mood < 30 ? 0 : mood < 50 ? 3 : 6 },
        { name: 'confidence', value: confidence, priority: confidence < 30 ? 2 : confidence < 50 ? 4 : 6 }
    ];
    
    // 按优先级排序（数字越小越优先）
    priorities.sort((a, b) => a.priority - b.priority);
    
    // 获取最紧急的建议
    const urgentItem = priorities[0];
    const urgentLevel = getAdviceLevel(urgentItem.value);
    const urgentAdvice = getRandomAdvice(AdviceLibrary[urgentItem.name][urgentLevel]);
    
    // 如果有第二个低值指标，获取补充建议
    let supplementAdvice = '';
    const secondItem = priorities[1];
    if (secondItem && secondItem.value < 50) {
        const secondLevel = getAdviceLevel(secondItem.value);
        supplementAdvice = '<br>' + getRandomAdvice(AdviceLibrary[secondItem.name][secondLevel]);
    }
    
    // 如果所有指标都高，给出综合鼓励
    const allHigh = mood >= 70 && health >= 70 && energy >= 70 && confidence >= 70;
    const allLow = mood < 40 && health < 40 && energy < 40 && confidence < 40;
    
    let html = '';
    if (allHigh) {
        html = `<p class="advice-excellent">🌟 ${getRandomAdvice(['你今天状态满分！继续保持~', '完美的状态！今天做什么都会很顺利~', '充满正能量的你，是最棒的！'])}</p>`;
    } else if (allLow) {
        html = `<p class="advice-warning">💝 ${getRandomAdvice(['今天对你来说很难吧...我在这里陪着你~', '抱抱你，一切都会好起来的~', '没关系，不强撑也是一种勇气~'])}</p>`;
    } else {
        html = `<p class="advice-main">${urgentAdvice}</p>`;
    }
    
    // 添加补充建议
    if (supplementAdvice) {
        html += `<p class="advice-supplement">${supplementAdvice.replace('<br>', '')}</p>`;
    }
    
    // 添加温馨小贴士
    const tips = [];
    if (energy < 50) tips.push('💡 每小时站起来活动5分钟');
    if (health < 50) tips.push('💡 记得按时吃饭哦');
    if (mood < 50) tips.push('💡 和喜欢的人聊聊天吧');
    if (confidence < 50) tips.push('💡 写下3件今天做好的事');
    
    if (tips.length > 0) {
        html += `<div class="advice-tips"><small>${tips.slice(0, 2).join(' | ')}</small></div>`;
    }
    
    document.getElementById('advice-content').innerHTML = html;
}

function submitVent() {
    const selectedMood = document.querySelector('.mood-btn.selected');
    const ventText = document.getElementById('vent-input').value.trim();
    if (!selectedMood) { showBubble('请先选择心情哦～'); return; }
    
    const impact = analyzeMoodImpact(selectedMood.dataset.mood, ventText);
    State.stats.mood = Math.max(0, Math.min(100, State.stats.mood + impact.mood));
    State.stats.health = Math.max(0, Math.min(100, State.stats.health + impact.health));
    State.stats.energy = Math.max(0, Math.min(100, State.stats.energy + impact.energy));
    State.stats.confidence = Math.max(0, Math.min(100, State.stats.confidence + impact.confidence));
    State.joyValue = Math.max(0, State.joyValue - 10);
    
    State.history.push({ mood: selectedMood.dataset.label, text: ventText || '（无详细描述）', time: new Date().toLocaleString('zh-CN') });
    updatePetExpression();
    saveState();
    updateSidebar();
    renderHistory();
    
    document.getElementById('vent-input').value = '';
    document.querySelectorAll('.mood-btn').forEach(b => b.classList.remove('selected'));
    
    if (floatingPet && !document.hidden) {
        floatingPet.classList.add(impact.mood > 0 ? 'happy' : 'sad');
        showBubble(impact.mood > 0 ? '谢谢你分享这些 💕' : '我听到了，一起加油 💪');
        spawnParticles(impact.mood > 0 ? 'happy' : 'sad', impact.mood > 0 ? 8 : 6);
        setTimeout(() => floatingPet.classList.remove('happy', 'sad'), 2000);
    }
}

function analyzeMoodImpact(moodType, text) {
    const impacts = { happy: { mood: 15, health: 5, energy: 10, confidence: 10 }, calm: { mood: 5, health: 5, energy: 5, confidence: 5 }, worried: { mood: -10, health: -5, energy: -5, confidence: -10 }, sad: { mood: -20, health: -10, energy: -15, confidence: -15 }, angry: { mood: -25, health: -15, energy: -10, confidence: -5 } };
    let impact = { ...impacts[moodType] };
    ['压力', '焦虑', '失眠', '疲惫', '崩溃'].forEach(w => { if (text.includes(w)) { impact.mood -= 5; impact.health -= 3; } });
    ['开心', '成功', '顺利', '进步', '感恩'].forEach(w => { if (text.includes(w)) { impact.mood += 5; impact.confidence += 3; } });
    return { mood: Math.round(impact.mood), health: Math.round(impact.health), energy: Math.round(impact.energy), confidence: Math.round(impact.confidence) };
}

function renderHistory() {
    const list = document.getElementById('history-list');
    if (State.history.length === 0) { list.innerHTML = '<div class="history-empty">还没有记录，从倾诉开始吧～</div>'; return; }
    list.innerHTML = State.history.slice(-5).reverse().map(item => `<div class="history-item"><span class="history-mood">${item.mood}</span><p class="history-text">${item.text}</p><span class="history-time">${item.time}</span></div>`).join('');
}

function openAppearanceModal() {
    document.getElementById('appearance-modal').classList.add('active');
    const color = Colors[State.pet.color];
    let typesHTML = '', colorsHTML = '';
    Object.keys(PetTypes).forEach(type => { typesHTML += `<div class="pet-type-item ${type === State.pet.type ? 'selected' : ''}" data-type="${type}"><svg viewBox="0 0 100 120">${generatePetSVG(type, color, 'calm')}</svg><span>${PetTypes[type].name}</span></div>`; });
    Object.keys(Colors).forEach(c => { colorsHTML += `<div class="color-option-modal ${c === State.pet.color ? 'selected' : ''}" data-color="${c}" style="background: ${c}"></div>`; });
    document.getElementById('change-pet-types').innerHTML = typesHTML;
    document.getElementById('change-colors').innerHTML = colorsHTML;
    document.getElementById('change-name-input').value = State.pet.name;
    document.querySelectorAll('.pet-type-item').forEach(item => { item.addEventListener('click', () => { document.querySelectorAll('.pet-type-item').forEach(i => i.classList.remove('selected')); item.classList.add('selected'); }); });
    document.querySelectorAll('.color-option-modal').forEach(opt => { opt.addEventListener('click', () => { document.querySelectorAll('.color-option-modal').forEach(o => o.classList.remove('selected')); opt.classList.add('selected'); }); });
}

function closeAppearanceModal() { document.getElementById('appearance-modal').classList.remove('active'); }

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
    if (floatingPet) { floatingPet.classList.add('happy'); showBubble('新衣服真好看！✨'); setTimeout(() => floatingPet.classList.remove('happy'), 1000); }
}

// ========== 浮动宠物系统 ==========
function initFloatingPet() {
    floatingPet = document.getElementById('floating-pet');
    petBody = document.getElementById('pet-body');
    petSvg = document.getElementById('pet-svg');
    particleCanvas = document.getElementById('particle-canvas');
    particleCtx = particleCanvas.getContext('2d');
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    initPetPosition();
    updateFloatingPetAppearance();
    bindPetInteraction();
    startParticleAnimation();
    startBlinking();
    updatePetExpression();
    updateHeadIcon();
}

function resizeCanvas() { if (particleCanvas) { particleCanvas.width = window.innerWidth; particleCanvas.height = window.innerHeight; } }

function initPetPosition() {
    const saved = State.position;
    petX = saved && saved.x !== null ? saved.x : window.innerWidth - PET_WIDTH - 50;
    petY = saved && saved.y !== null ? saved.y : window.innerHeight - PET_HEIGHT - 50;
    updatePetPosition();
}

function updatePetPosition() {
    if (floatingPet) {
        // 使用left/top定位，避免与CSS transition冲突
        floatingPet.style.left = petX + 'px';
        floatingPet.style.top = petY + 'px';
    }
}

function generatePetSVG(type, color, expression) {
    const petType = PetTypes[type];
    const expr = Expressions[expression] || Expressions.calm;
    let svg = petType.bodyParts;
    svg = svg.replace(/class="pet-highlight"/g, `style="stop-color:${color.highlight}"`);
    svg = svg.replace(/class="pet-shadow"/g, `style="stop-color:${color.dark}"`);
    svg = svg.replace(/class="pet-body-shape"/g, `style="fill:${color.primary}"`);
    svg = svg.replace(/class="pet-head-shape"/g, `style="fill:${State.pet.color}"`);
    svg = svg.replace(/class="pet-ear"/g, `style="fill:${State.pet.color}"`);
    svg = svg.replace(/class="pet-ear-inner"/g, `style="fill:${color.dark}"`);
    svg = svg.replace(/class="pet-face-shape"/g, `style="fill:${color.primary}"`);
    svg = svg.replace(/class="pet-belly-shape"/g, `style="fill:${color.primary}"`);
    svg = svg.replace(/class="pet-tail"/g, `style="stroke:${State.pet.color}"`);
    svg = svg.replace(/class="pet-blush"/g, `style="fill:${color.dark};opacity:0.4"`);
    svg = svg.replace(/<g class="expression">[\s\S]*?<\/g>\s*<g class="mouth">[\s\S]*?<\/g>\s*<g class="blush">[\s\S]*?<\/g>/g, '');
    return svg + expr;
}

function updateFloatingPetAppearance() {
    if (petSvg) petSvg.innerHTML = generatePetSVG(State.pet.type, Colors[State.pet.color] || Colors['#FFB6C1'], State.currentExpression);
    if (document.getElementById('pet-drag-name')) document.getElementById('pet-drag-name').textContent = State.pet.name;
}

function bindPetInteraction() {
    const dragHandle = document.getElementById('pet-drag-handle');
    let dragStartX = 0, dragStartY = 0, petStartX = 0, petStartY = 0;
    let dragMoved = false; // 标记是否真正移动了
    
    // 鼠标拖拽开始
    dragHandle.addEventListener('mousedown', (e) => {
        if (Timers.isMoving) return;
        dragMoved = false;
        State.isDragging = true;
        floatingPet.classList.add('dragging');
        dragStartX = e.clientX;
        dragStartY = e.clientY;
        petStartX = petX;
        petStartY = petY;
        e.preventDefault();
        e.stopPropagation();
    });
    
    // 触摸拖拽开始
    dragHandle.addEventListener('touchstart', (e) => {
        if (Timers.isMoving) return;
        const touch = e.touches[0];
        dragMoved = false;
        State.isDragging = true;
        floatingPet.classList.add('dragging');
        dragStartX = touch.clientX;
        dragStartY = touch.clientY;
        petStartX = petX;
        petStartY = petY;
        e.preventDefault();
    }, { passive: false });
    
    // 鼠标移动
    document.addEventListener('mousemove', (e) => {
        if (!State.isDragging) return;
        const dx = e.clientX - dragStartX;
        const dy = e.clientY - dragStartY;
        // 如果移动超过5px，标记为已移动
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            dragMoved = true;
        }
        const maxX = window.innerWidth - PET_WIDTH;
        const maxY = window.innerHeight - PET_HEIGHT;
        petX = Math.max(0, Math.min(maxX, petStartX + dx));
        petY = Math.max(0, Math.min(maxY, petStartY + dy));
        updatePetPosition();
    });
    
    // 触摸移动
    document.addEventListener('touchmove', (e) => {
        if (!State.isDragging) return;
        const touch = e.touches[0];
        const dx = touch.clientX - dragStartX;
        const dy = touch.clientY - dragStartY;
        if (Math.abs(dx) > 5 || Math.abs(dy) > 5) {
            dragMoved = true;
        }
        const maxX = window.innerWidth - PET_WIDTH;
        const maxY = window.innerHeight - PET_HEIGHT;
        petX = Math.max(0, Math.min(maxX, petStartX + dx));
        petY = Math.max(0, Math.min(maxY, petStartY + dy));
        updatePetPosition();
        e.preventDefault();
    }, { passive: false });
    
    // 鼠标松开
    document.addEventListener('mouseup', () => {
        if (State.isDragging) {
            State.isDragging = false;
            floatingPet.classList.remove('dragging');
            State.position = { x: petX, y: petY };
            saveState();
        }
    });
    
    // 触摸结束
    document.addEventListener('touchend', () => {
        if (State.isDragging) {
            State.isDragging = false;
            floatingPet.classList.remove('dragging');
            State.position = { x: petX, y: petY };
            saveState();
        }
    });
    
    // 点击宠物（只有未拖动时才触发）
    floatingPet.addEventListener('click', (e) => {
        // 如果刚拖动过，不再触发点击
        if (dragMoved) {
            dragMoved = false;
            return;
        }
        if (!State.isDragging && !Timers.isMoving) {
            handlePetClick();
        }
    });
    
    // 悬停气泡
    floatingPet.addEventListener('mouseenter', () => {
        if (!State.isDragging && !Timers.isMoving) {
            showHoverBubble();
        }
    });
    floatingPet.addEventListener('mouseleave', hideBubble);
}

function handlePetClick() {
    State.clickCount++;
    State.joyValue = Math.min(100, State.joyValue + 5);
    hideBubble();
    
    if (State.clickCount >= 5) {
        floatingPet.classList.add('spin');
        showBubble('🎉 你是最棒的伙伴！');
        spawnParticles('rainbow', 10);
        setTimeout(() => { floatingPet.classList.remove('spin'); State.clickCount = 0; }, 1000);
    } else if (State.clickCount === 4) {
        floatingPet.classList.add('spin');
        showBubble('转圈圈～💫');
        spawnParticles('stars', 8);
        setTimeout(() => floatingPet.classList.remove('spin'), 1000);
    } else {
        floatingPet.classList.add('jump', 'happy');
        showBubble(['好开心！', '再摸摸我～', '喜欢你！', '真舒服～', '抱抱！'][Math.floor(Math.random() * 5)]);
        spawnParticles('hearts', 6);
        setTimeout(() => floatingPet.classList.remove('jump', 'happy'), 500);
    }
    updateHeadIcon();
    saveState();
}

function showHoverBubble() {
    const mood = State.stats.mood;
    const texts = { 80: '今天心情超好！✨', 60: '陪着你真好～', 40: '摸摸我～', 20: '有点难过...' };
    const bubbleText = document.getElementById('bubble-text');
    bubbleText.textContent = texts[mood] || '抱抱我好吗？';
    document.getElementById('pet-bubble').classList.add('show');
}

function showBubble(text) {
    document.getElementById('bubble-text').textContent = text;
    document.getElementById('pet-bubble').classList.add('show');
    if (Timers.bubbleTimeout) clearTimeout(Timers.bubbleTimeout);
    Timers.bubbleTimeout = setTimeout(() => { document.getElementById('pet-bubble').classList.remove('show'); }, 2500);
}

function hideBubble() { document.getElementById('pet-bubble').classList.remove('show'); }

function updateHeadIcon() {
    const icon = document.getElementById('head-icon');
    const joy = State.joyValue;
    icon.textContent = joy >= 80 ? '💖' : joy >= 60 ? '✨' : joy >= 40 ? '💫' : joy >= 20 ? '💭' : '🌙';
}

function updatePetExpression() {
    const mood = State.stats.mood;
    let newExpr = mood >= 81 ? 'happy' : mood >= 51 ? 'calm' : mood >= 41 ? 'tired' : mood >= 21 ? 'worried' : 'sad';
    if (newExpr !== State.currentExpression) {
        State.currentExpression = newExpr;
        updateFloatingPetAppearance();
        updateHeadIcon();
    }
}

// ========== 眨眼系统 ==========
function startBlinking() {
    if (document.hidden) return;
    if (petBody && !State.isDragging) {
        petBody.classList.add('blink');
        Timers.isBlinking = true;
        setTimeout(() => { petBody.classList.remove('blink'); Timers.isBlinking = false; }, 150);
    }
    Timers.blinkTimeout = setTimeout(startBlinking, 3000 + Math.random() * 3000);
}

// ========== 宠物AI移动 (优化版) ==========
function startPetAI() {
    if (document.hidden || State.isFirstVisit) return;
    // 8-20秒间隔，40%概率移动
    Timers.moveTimeout = setTimeout(() => {
        if (Math.random() < 0.4 && !State.isDragging && !Timers.isMoving) {
            movePet();
        } else {
            startPetAI();
        }
    }, 8000 + Math.random() * 12000);
}

function movePet() {
    if (!floatingPet) return;
    
    // 计算边界
    const maxX = window.innerWidth - PET_WIDTH;
    const maxY = window.innerHeight - PET_HEIGHT;
    
    // 根据心情调整移动范围
    const speed = State.stats.mood > 60 ? 0.7 : 0.5;
    const targetX = Math.random() * maxX * speed;
    const targetY = Math.random() * maxY * speed;
    
    Timers.isMoving = true;
    
    // 设置目标位置前先添加transition类
    floatingPet.classList.add('moving');
    
    // 使用requestAnimationFrame确保位置更新在下一帧
    requestAnimationFrame(() => {
        petX = targetX;
        petY = targetY;
        updatePetPosition();
    });
    
    // 4-6秒后完成移动
    const duration = 4000 + Math.random() * 2000;
    Timers.moveTimeout = setTimeout(() => {
        floatingPet.classList.remove('moving');
        Timers.isMoving = false;
        State.position = { x: petX, y: petY };
        saveState();
        startPetAI();
    }, duration);
}

// ========== 粒子系统 ==========
function spawnParticles(type, count) {
    if (document.hidden) return;
    const petRect = floatingPet.getBoundingClientRect();
    const centerX = petRect.left + petRect.width / 2;
    const centerY = petRect.top + petRect.height / 2;
    const colors = { hearts: ['#FF6B9D', '#FF8FAB', '#FFB6C1'], stars: ['#FFD700', '#FFA500', '#FFE066'], happy: ['#FFD700', '#FF6B9D', '#87CEEB'], sad: ['#87CEEB', '#B0C4DE'], rainbow: ['#FF6B6B', '#FFA94D', '#FFE66D', '#4ECB71', '#4ECDC4', '#45B7D1'] };
    const particleColors = colors[type] || colors.stars;
    
    for (let i = 0; i < count; i++) {
        if (particles.length >= MAX_PARTICLES) recycleParticle(particles.shift());
        const p = getParticle();
        p.x = centerX + (Math.random() - 0.5) * 40;
        p.y = centerY + (Math.random() - 0.5) * 40;
        p.vx = (Math.random() - 0.5) * 3;
        p.vy = type === 'sad' ? 1 + Math.random() * 2 : -1 - Math.random() * 3;
        p.size = 4 + Math.random() * 4;
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
        if (document.hidden) { Timers.particleRAF = null; return; }
        particleCtx.clearRect(0, 0, particleCanvas.width, particleCanvas.height);
        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.vx; p.y += p.vy; p.life -= p.decay;
            if (p.type !== 'sad') p.vy -= 0.02;
            p.rotation += p.rotationSpeed;
            p.size *= 0.995;
            if (p.life <= 0 || p.size < 1) { recycleParticle(particles.splice(i, 1)[0]); continue; }
            drawParticle(p);
        }
        Timers.particleRAF = requestAnimationFrame(animate);
    }
    Timers.particleRAF = requestAnimationFrame(animate);
}

function drawParticle(p) {
    particleCtx.save();
    particleCtx.globalAlpha = p.life * 0.7;
    const gradient = particleCtx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size);
    gradient.addColorStop(0, p.color);
    gradient.addColorStop(1, 'transparent');
    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    particleCtx.fillStyle = gradient;
    particleCtx.fill();
    particleCtx.shadowColor = p.color;
    particleCtx.shadowBlur = 8;
    particleCtx.beginPath();
    particleCtx.arc(p.x, p.y, p.size * 0.5, 0, Math.PI * 2);
    particleCtx.fill();
    particleCtx.restore();
}
