/**
 * 重庆城市地图 - 图片版（基于 Gemini 生成的手绘地图）
 * 
 * 使用静态图片作为地图背景，通过 CSS 热区和百分比坐标实现区域交互
 * 宠物在图片上进行移动和游玩
 */

// ========== 区域定义（基于图片的百分比位置）==========
const ImageMapRegions = {
    park: {
        id: 'park',
        name: '南山公园',
        shortName: '南山',
        // 区域中心点 (百分比 0-100)
        centerX: 17,
        centerY: 25,
        // 宠物在该区域的漫游路径点
        wanderPoints: [
            { x: 12, y: 18 },
            { x: 18, y: 22 },
            { x: 14, y: 30 },
            { x: 20, y: 26 },
            { x: 16, y: 20 }
        ],
        bubble: '南山风景真好，空气清新~ 🌿',
        particles: 'hearts',
        expression: 'calm'
    },
    warm: {
        id: 'warm',
        name: '洪崖洞',
        shortName: '洪崖洞',
        centerX: 58,
        centerY: 55,
        wanderPoints: [
            { x: 52, y: 50 },
            { x: 58, y: 52 },
            { x: 62, y: 56 },
            { x: 58, y: 60 },
            { x: 54, y: 54 }
        ],
        bubble: '灯火一层层亮起来啦～ ✨',
        particles: 'hearts',
        expression: 'happy'
    },
    qiansimen: {
        id: 'qiansimen',
        name: '千厮门大桥',
        shortName: '千厮门',
        centerX: 62,
        centerY: 50,
        wanderPoints: [
            { x: 58, y: 48 },
            { x: 62, y: 50 },
            { x: 66, y: 52 },
            { x: 62, y: 54 },
            { x: 60, y: 50 }
        ],
        bubble: '千厮门大桥好雄伟呀~ 🌉',
        particles: 'stars',
        expression: 'surprised'
    },
    active: {
        id: 'active',
        name: '来福士',
        shortName: '来福士',
        centerX: 74,
        centerY: 28,
        wanderPoints: [
            { x: 68, y: 22 },
            { x: 74, y: 24 },
            { x: 78, y: 28 },
            { x: 76, y: 32 },
            { x: 70, y: 26 }
        ],
        bubble: '轻轨从头顶掠过去啦！🚝',
        particles: 'stars',
        expression: 'surprised'
    },
    calm: {
        id: 'calm',
        name: '江岸步道',
        shortName: '江岸',
        centerX: 70,
        centerY: 78,
        wanderPoints: [
            { x: 60, y: 74 },
            { x: 68, y: 76 },
            { x: 74, y: 78 },
            { x: 80, y: 80 },
            { x: 72, y: 82 }
        ],
        bubble: '江风慢慢吹，先放松一下~ 🌊',
        particles: 'happy',
        expression: 'calm'
    }
};

// ========== 悬浮卡信息 ==========
const HoverCardInfo = {
    park: {
        title: '南山一棵树 · 观景台',
        desc: '俯瞰整个重庆夜景的最佳地点，绿树环绕，空气清新。适合静心放松。'
    },
    warm: {
        title: '洪崖洞 · 吊脚楼群',
        desc: '层层叠叠的吊脚楼建筑群，夜晚灯火辉煌，是重庆最具特色的景点。'
    },
    qiansimen: {
        title: '千厮门大桥',
        desc: '连接渝中半岛与南岸区的跨江大桥，夜景灯光璀璨，如彩虹横跨长江。'
    },
    active: {
        title: '来福士 · 摩天大楼',
        desc: '现代地标建筑群，玻璃幕墙映照着江面，充满都市活力。'
    },
    calm: {
        title: '长江江岸 · 步道',
        desc: '沿江而建的休闲步道，江风吹拂，适合漫步发呆。'
    }
};

// ========== 景点名称标签配置（用于可点击的景点导航）==========
const MapLandmarkLabels = {
    park: {
        id: 'park',
        name: '南山公园',
        // 标签位置（百分比，相对于地图容器）
        labelX: 12,  // 左对齐
        labelY: 8,   // 顶部
        // 标签对齐方式
        align: 'left',  // left, center, right
        anchorX: 0,  // 锚点 X (0-1)
        anchorY: 0,  // 锚点 Y (0-1)
        // 移动到的目标位置（宠物会移动到这个坐标附近）
        targetX: 17,
        targetY: 25
    },
    warm: {
        id: 'warm',
        name: '洪崖洞',
        labelX: 50,
        labelY: 38,
        align: 'center',
        anchorX: 0.5,
        anchorY: 0,
        targetX: 58,
        targetY: 55
    },
    qiansimen: {
        id: 'qiansimen',
        name: '千厮门大桥',
        labelX: 62,
        labelY: 42,
        align: 'center',
        anchorX: 0.5,
        anchorY: 0,
        targetX: 62,
        targetY: 50
    },
    active: {
        id: 'active',
        name: '来福士',
        labelX: 72,
        labelY: 8,
        align: 'right',
        anchorX: 1,
        anchorY: 0,
        targetX: 74,
        targetY: 28
    },
    calm: {
        id: 'calm',
        name: '江岸步道',
        labelX: 68,
        labelY: 72,
        align: 'center',
        anchorX: 0.5,
        anchorY: 0,
        targetX: 70,
        targetY: 78
    }
};

// ========== 状态变量 ==========
let mapContainer = null;
let mapImage = null;
let isMapInitialized = false;
let landmarkLabelsContainer = null;

/**
 * 初始化图片地图
 */
function initChongqingCity() {
    mapContainer = document.getElementById('city-container');
    mapImage = document.getElementById('map-image');

    if (!mapContainer || !mapImage) {
        console.warn('地图容器未找到');
        return;
    }

    // 清除旧状态
    disposeChongqingCity();

    // 创建景点名称导航层
    createLandmarkLabels();

    // 绑定热区事件
    bindHotspotEvents();

    // 绑定景点名称标签点击事件
    bindLandmarkLabelEvents();

    // 绑定图片点击事件（点击非热区区域也可触发）
    bindMapClickEvent();

    // 监听窗口大小变化
    window.addEventListener('resize', onMapResize);

    isMapInitialized = true;
    console.log('✅ 图片地图初始化完成');
}

/**
 * 绑定热区 hover 和 click 事件
 */
function bindHotspotEvents() {
    const hotspots = mapContainer.querySelectorAll('.map-hotspot');

    hotspots.forEach(hotspot => {
        const regionId = hotspot.dataset.region;

        // 鼠标进入 - 显示悬浮卡
        hotspot.addEventListener('mouseenter', () => {
            if (typeof currentHoveredDistrict !== 'undefined') {
                currentHoveredDistrict = regionId;
            }
            showMapHoverCard(regionId);
            hotspot.style.zIndex = '10';
        });

        // 鼠标离开 - 隐藏悬浮卡
        hotspot.addEventListener('mouseleave', () => {
            hideMapHoverCard();
            hotspot.style.zIndex = '5';
        });

        // 点击 - 移动宠物到该区域
        hotspot.addEventListener('click', (e) => {
            e.stopPropagation();
            
            if (typeof State !== 'undefined' && (State.isDragging || Timers.isMoving)) return;
            
            const region = ImageMapRegions[regionId];
            if (region && typeof movePetToRegionCenter === 'function') {
                movePetToRegionCenter(regionId);
                showBubble(`去${region.shortName}逛一圈吧~`);
            }
        });
    });
}

/**
 * 绑定地图容器点击事件（用于点击非热区时的处理）
 */
function bindMapClickEvent() {
    mapContainer.addEventListener('click', (e) => {
        // 如果点击的是热区或宠物，不处理
        if (e.target.classList.contains('map-hotspot')) return;
        
        // 检查是否点击了宠物
        const floatingPetEl = document.getElementById('floating-pet');
        if (floatingPetEl) {
            const petRect = floatingPetEl.getBoundingClientRect();
            if (
                e.clientX >= petRect.left - 18 &&
                e.clientX <= petRect.right + 18 &&
                e.clientY >= petRect.top - 18 &&
                e.clientY <= petRect.bottom + 18
            ) {
                return;
            }
        }

        // 可以选择：点击空白处让宠物移动到该位置
        // 这里暂不实现，保持原有行为
    });
}

/**
 * 窗口大小变化处理
 */
function onMapResize() {
    // 图片使用 object-fit: contain，不需要额外处理
    // 但可以在这里更新宠物位置约束
}

/**
 * 获取区域中心点的屏幕坐标（相对于 city-container）
 */
function getRegionScreenCenter(regionId) {
    const region = ImageMapRegions[regionId];
    if (!region || !mapContainer) return null;

    const rect = mapContainer.getBoundingClientRect();
    return {
        x: rect.left + (region.centerX / 100) * rect.width,
        y: rect.top + (region.centerY / 100) * rect.height
    };
}

/**
 * 获取区域的漫游路径（屏幕坐标）
 */
function getRegionWanderPath(regionId) {
    const region = ImageMapRegions[regionId];
    if (!region || !mapContainer) return [];

    const rect = mapContainer.getBoundingClientRect();
    
    return region.wanderPoints.map(point => ({
        x: rect.left + (point.x / 100) * rect.width,
        y: rect.top + (point.y / 100) * rect.height
    }));
}

/**
 * 获取宠物路径点（供 main.js 的 getChongqingRoutePoints 调用）
 */
function getChongqingRoutePoints(regionId) {
    const region = ImageMapRegions[regionId];
    if (!region) return [];

    // 返回归一化坐标 (0-1)，与原来的世界坐标系兼容
    return region.wanderPoints.map(point => ({
        x: (point.x / 100) * 2 - 1,  // 归一化到 -1 ~ 1
        y: 0,
        z: (point.y / 100) * 2 - 1
    }));
}

/**
 * 将世界坐标投影为屏幕坐标
 * 对于图片地图，直接将归一化坐标转换为屏幕坐标
 */
function projectChongqingWorldPoint(point) {
    if (!mapContainer) return null;

    const rect = mapContainer.getBoundingClientRect();
    
    return {
        x: rect.left + ((point.x + 1) / 2) * rect.width,
        y: rect.top + ((point.z + 1) / 2) * rect.height,
        z: 0
    };
}

/**
 * 根据宠物当前位置检测所在区域
 */
function detectPetRegion(petX, petY) {
    if (!mapContainer) return null;

    const rect = mapContainer.getBoundingClientRect();
    
    // 将宠物坐标转换为相对于容器的百分比
    const petPercentX = ((petX - rect.left) / rect.width) * 100;
    const petPercentY = ((petY - rect.top) / rect.height) * 100;

    // 简单距离判断：找最近的区域中心
    let nearestRegion = null;
    let minDistance = Infinity;

    Object.values(ImageMapRegions).forEach(region => {
        const dist = Math.hypot(petPercentX - region.centerX, petPercentY - region.centerY);
        if (dist < minDistance) {
            minDistance = dist;
            nearestRegion = region;
        }
    });

    // 只有距离足够近才认为在该区域内（阈值：25%）
    if (minDistance < 25) {
        return nearestRegion;
    }

    return null;
}

/**
 * 显示悬浮信息卡
 */
function showMapHoverCard(regionId) {
    const info = HoverCardInfo[regionId];
    if (!info) return;

    const card = document.getElementById('map-hover-card');
    const titleEl = document.getElementById('map-hover-title');
    const textEl = document.getElementById('map-hover-text');

    if (!card || !titleEl || !textEl) return;

    titleEl.textContent = info.title;
    textEl.textContent = info.desc;
    card.classList.add('show');
    card.setAttribute('aria-hidden', 'false');
}

/**
 * 隐藏悬浮信息卡
 */
function hideMapHoverCard() {
    const card = document.getElementById('map-hover-card');
    if (card) {
        card.classList.remove('show');
        card.setAttribute('aria-hidden', 'true');
    }

    if (typeof currentHoveredDistrict !== 'undefined') {
        currentHoveredDistrict = null;
    }
}

/**
 * 销毁/清理地图资源
 */
function disposeChongqingCity() {
    window.removeEventListener('resize', onMapResize);
    
    // 清理景点名称导航层
    destroyLandmarkLabels();

    if (mapContainer) {
        const hotspots = mapContainer.querySelectorAll('.map-hotspot');
        hotspots.forEach(hotspot => {
            hotspot.replaceWith(hotspot.cloneNode(true));
        });
    }

    isMapInitialized = false;
}

/**
 * 创建景点名称导航层（可点击的景点标签）
 */
function createLandmarkLabels() {
    // 移除旧的导航层
    const existingLayer = document.getElementById('landmark-labels-layer');
    if (existingLayer) {
        existingLayer.remove();
    }

    // 创建导航层容器
    landmarkLabelsContainer = document.createElement('div');
    landmarkLabelsContainer.id = 'landmark-labels-layer';
    landmarkLabelsContainer.className = 'landmark-labels-layer';
    landmarkLabelsContainer.setAttribute('aria-label', '景点导航');

    // 为每个景点创建标签
    Object.values(MapLandmarkLabels).forEach(landmark => {
        const label = document.createElement('div');
        label.className = 'landmark-label';
        label.dataset.landmarkId = landmark.id;
        label.setAttribute('role', 'button');
        label.setAttribute('tabindex', '0');
        label.setAttribute('aria-label', `点击前往${landmark.name}`);

        // 标签内容
        label.innerHTML = `
            <span class="landmark-name">${landmark.name}</span>
            <span class="landmark-arrow">→</span>
        `;

        // 位置样式
        label.style.left = `${landmark.labelX}%`;
        label.style.top = `${landmark.labelY}%`;
        label.style.transform = `translate(-${landmark.anchorX * 100}%, 0)`;

        // 根据对齐方式添加类
        if (landmark.align === 'left') {
            label.classList.add('align-left');
        } else if (landmark.align === 'right') {
            label.classList.add('align-right');
        } else {
            label.classList.add('align-center');
        }

        // 添加到导航层
        landmarkLabelsContainer.appendChild(label);
    });

    // 添加到地图容器
    mapContainer.appendChild(landmarkLabelsContainer);
}

/**
 * 绑定景点名称标签点击事件
 */
function bindLandmarkLabelEvents() {
    const labels = document.querySelectorAll('.landmark-label');

    labels.forEach(label => {
        const landmarkId = label.dataset.landmarkId;

        // 点击事件
        label.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // 检查宠物是否正在移动
            if (typeof State !== 'undefined' && (State.isDragging || Timers.isMoving)) {
                return;
            }

            const landmark = MapLandmarkLabels[landmarkId];
            if (landmark && typeof movePetToRegionCenter === 'function') {
                // 移动宠物到景点位置
                movePetToRegionCenter(landmarkId);
                
                // 显示气泡提示
                if (typeof showBubble === 'function') {
                    showBubble(`去${landmark.name}看看~ 🗺️`);
                }

                // 添加点击反馈动画
                label.classList.add('clicked');
                setTimeout(() => {
                    label.classList.remove('clicked');
                }, 300);
            }
        });

        // 键盘支持（回车键触发）
        label.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                label.click();
            }
        });

        // 悬停效果
        label.addEventListener('mouseenter', () => {
            label.classList.add('hover');
        });

        label.addEventListener('mouseleave', () => {
            label.classList.remove('hover');
        });
    });
}

/**
 * 销毁景点名称导航层
 */
function destroyLandmarkLabels() {
    const layer = document.getElementById('landmark-labels-layer');
    if (layer) {
        layer.remove();
    }
    landmarkLabelsContainer = null;
}
window.initChongqingCity = initChongqingCity;
window.disposeChongqingCity = disposeChongqingCity;
window.getChongqingRoutePoints = getChongqingRoutePoints;
window.projectChongqingWorldPoint = projectChongqingWorldPoint;
window.ImageMapRegions = ImageMapRegions;  // 导出供 main.js 使用
window.MapLandmarkLabels = MapLandmarkLabels;  // 导出景点标签配置供外部使用
window.createLandmarkLabels = createLandmarkLabels;  // 导出创建标签函数
window.bindLandmarkLabelEvents = bindLandmarkLabelEvents;  // 导出绑定事件函数

