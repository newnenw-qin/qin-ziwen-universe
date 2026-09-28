export type View =
  | "home"
  | "profile"
  | "experience"
  | "fabrique"
  | "tencent"
  | "coca-cola"
  | "tme"
  | "guardian"
  | "crafts"
  | "alipay"
  | "brand"
  | "content"
  | "art-market"
  | "aigc"
  | "projects"
  | "contact";

export const aboutCopy =
  "华东师范大学艺术市场硕士在读。路径横跨拍卖与展览、品牌策划、内容运营与 AIGC。既理解艺术与文化的语境，也具备商业执行与增长方法，能把创意做成可规模化的内容与影像。";

export const galaxies: {
  id: View;
  index: string;
  title: string;
  subtitle: string;
  x: string;
  y: string;
  size: number;
  tone: "silver" | "violet" | "gold" | "blue";
}[] = [
  {
    id: "profile",
    index: "01",
    title: "PROFILE",
    subtitle: "Identity & Education",
    x: "18%",
    y: "32%",
    size: 118,
    tone: "silver",
  },
  {
    id: "experience",
    index: "02",
    title: "EXPERIENCE",
    subtitle: "Orbit of Practice",
    x: "78%",
    y: "28%",
    size: 150,
    tone: "blue",
  },
  {
    id: "brand",
    index: "03",
    title: "BRAND",
    subtitle: "Brand Strategy & Marketing",
    x: "28%",
    y: "68%",
    size: 136,
    tone: "gold",
  },
  {
    id: "content",
    index: "04",
    title: "CONTENT",
    subtitle: "Content Universe",
    x: "72%",
    y: "66%",
    size: 124,
    tone: "violet",
  },
  {
    id: "art-market",
    index: "05",
    title: "ART MARKET",
    subtitle: "Art × Business",
    x: "50%",
    y: "18%",
    size: 108,
    tone: "gold",
  },
  {
    id: "aigc",
    index: "06",
    title: "AIGC",
    subtitle: "AI × Creativity",
    x: "88%",
    y: "48%",
    size: 96,
    tone: "violet",
  },
  {
    id: "contact",
    index: "07",
    title: "CONTACT",
    subtitle: "Enter Orbit",
    x: "50%",
    y: "86%",
    size: 72,
    tone: "silver",
  },
];

export const education = [
  {
    school: "华东师范大学",
    tags: "Double First-Class · 211 · 985",
    degree: "艺术市场 硕士 · 美术学院",
    period: "2024.09 — 2027.06",
    city: "上海",
  },
  {
    school: "长安大学",
    tags: "Double First-Class · 211",
    degree: "材料成型及控制技术 本科 · 材料学院",
    period: "2019.09 — 2023.06",
    city: "西安",
  },
];

export const experiences = [
  {
    id: "fabrique" as View,
    code: "FABRIQUE",
    company: "Fabrique · 北京纷布科技有限公司",
    role: "品牌策划 · 品牌市场部",
    period: "2026.05 — 2026.09",
    city: "北京",
    angle: -18,
    radius: 0.42,
  },
  {
    id: "tencent" as View,
    code: "TENCENT ESPORTS",
    company: "腾竞体育文化发展（上海）有限公司",
    role: "现场执行制作人 · 赛事部",
    period: "2026.02 — 2026.04",
    city: "上海",
    angle: 28,
    radius: 0.58,
  },
  {
    id: "coca-cola" as View,
    code: "COCA-COLA",
    company: "The Coca-Cola Company",
    role: "卓越运营 · 商品供应部",
    period: "2025.11 — 2026.02",
    city: "上海",
    angle: 78,
    radius: 0.36,
  },
  {
    id: "tme" as View,
    code: "TME",
    company: "TME 腾讯音乐娱乐集团",
    role: "校园大使",
    period: "2025.10 — 2026.11",
    city: "上海",
    angle: 132,
    radius: 0.62,
  },
  {
    id: "guardian" as View,
    code: "CHINA GUARDIAN",
    company: "中国嘉德国际拍卖有限公司",
    role: "策略运营 · 嘉德文创",
    period: "2025.07 — 2025.09",
    city: "北京",
    angle: 188,
    radius: 0.48,
  },
  {
    id: "crafts" as View,
    code: "ARTS & CRAFTS",
    company: "中国工艺美术馆",
    role: "文创产品 · 经营部",
    period: "2025.01 — 2025.03",
    city: "北京",
    angle: 236,
    radius: 0.7,
  },
  {
    id: "alipay" as View,
    code: "ALIPAY",
    company: "支付宝（中国）网络技术有限公司",
    role: "校园大使",
    period: "2021.08 — 2022.08",
    city: "西安",
    angle: 300,
    radius: 0.54,
  },
];

export const fabrique = {
  metrics: [
    { value: "2000+", label: "DAILY TRAFFIC", note: "北京 520 快闪 · La Bella Estate" },
    { value: "10K+", label: "NEW FOLLOWERS", note: "活动期间小红书涨粉" },
    { value: "26K+", label: "VIDEO VIEWS", note: "创意 / AIGC 视频单条最高" },
    { value: "90K+", label: "MAX ARTICLE READS", note: "艺人合作内容单条最高" },
    { value: "200+", label: "CONTENT PIECES", note: "合作艺人文案与内容制作" },
    { value: "1W+", label: "GMV LIFT", note: "视频带动的销售增长" },
  ],
  points: [
    "协助策划并执行北京 520 品牌快闪 La Bella Estate，日均客流 2000+，活动期间小红书涨粉 1 万+。",
    "参与上海、深圳等城市门店品牌内容呈现。",
    "参与品牌创意视频策划拍摄与 AIGC 视频制作，单条最高浏览 2.6 万，GMV 提升 1 万+。",
    "品牌合作艺人内容制作及文案撰写 200+，单条最高阅读 9 万+。",
    "与数据中台共建平面视觉内容 AI 数据库与 AI 工作流，应用于国内品牌账号矩阵。",
    "协助 2026 H1 国内外媒体平台（小红书、微博、Instagram）账号矩阵数据分析，支持宣传策略与市场投放。",
  ],
};

export const tencent = {
  metrics: [
    { value: "24", label: "LIVE EVENTS", note: "线下赛事执行制作" },
    { value: "10", label: "REMOTE BROADCASTS", note: "远程赛事直播" },
    { value: "0", label: "INCIDENTS", note: "全程零失误、零事故" },
  ],
  points: [
    "负责 LPL 2026 英雄联盟职业联赛现场执行与制作统筹，完成线下赛事执行制作 24 场、远程赛事直播 10 场，保障高规格稳定播出。",
    "对接参赛战队，负责赛前沟通、流程确认、现场协调及需求落地。",
    "赛后与 Riot Games 同步赛事全流程细节，提供执行反馈与数据支持。",
    "联动全球各大赛区完成技术复盘、问题排查与经验共享，提升跨区域执行标准一致性。",
  ],
};

export const cocaCola = {
  metrics: [
    { value: "3", label: "OPTIMIZATION NOTES", note: "出勤数据对比后提出的优化建议" },
    { value: "CPS", label: "GLOBAL INTRANET", note: "视频发布于 Coca-Cola CPS Global" },
  ],
  points: [
    "协助团队进行 CPS CHINA 全年出勤数据统计与对比分析，提出三条优化建议，为管理层提供数据支持。",
    "负责 CPS CHINA 视频剪辑，并发布于 Coca-Cola CPS Global 企业全球内网。",
    "负责 Coca-Cola Great China & Mongolia 公司内部培训视频拍摄与剪辑。",
  ],
};

export const tme = {
  points: [
    "波点音乐 App 校园推广。",
    "策划并执行音乐节与艺人粉丝站合作的线下波点音乐 App 推广。",
  ],
};

export const guardian = {
  metrics: [
    { value: "30+", label: "BRANDS", note: "艺术书展品牌选品" },
    { value: "4000+", label: "SKU", note: "文创嘉年华商品规模" },
    { value: "18%", label: "SALES GROWTH", note: "展览项目销售额环比" },
    { value: "30%", label: "LIVE CONVERSION", note: "直播间转化率" },
  ],
  points: [
    "协助策划「2026 第五届嘉德国际艺术书展暨文创嘉年华」，品牌选品 30+，SKU 4000+；完成 3 个核心竞品商业活动全流程分析，输出策略、玩法与转化数据对比报告。",
    "支持「风雅物境：明清文人艺术生活展」「达古今之宜——清代宫廷设计潮流」展览项目运营，协调系统、供应商与门店的数据对接与销售数据分析，销售额环比增长 18%。",
    "负责嘉德文创电商平台运营：商品上下架、详情页优化、价格体系、库存统筹与页面视觉。",
    "配合直播全流程运营落地，通过选品、卖点提炼与场控配合，直播间转化率达 30%。",
  ],
};

export const crafts = {
  metrics: [
    { value: "20K+", label: "SINGLE-DAY SALES", note: "突破同期新高" },
    { value: "2", label: "BRAND PARTNERSHIPS", note: "代销文创稳定合作" },
  ],
  points: [
    "文创产品布展销售及销存管理，单日销售额破 2 万，突破同期新高。",
    "协助对接代销文创品牌，建立 2 段稳定合作关系。",
  ],
};

export const alipay = {
  metrics: [
    { value: "2", label: "CAMPUS EVENTS", note: "支付宝校园派线下宣传" },
    { value: "2000+", label: "STUDENTS REACHED", note: "直接触达目标学生群体" },
    { value: "800+", label: "NEW USERS", note: "拉新激活" },
  ],
  points: [
    "负责渠道运营，策划并落地 2 场「支付宝校园派」线下宣传活动，直接触达目标学生群体 2000+。",
    "与校内业务部建立关系，拉新激活用户 800+。",
  ],
};

export const contentStars = [
  {
    id: "xhs",
    title: "小红书 · 娱乐垂类",
    x: "28%",
    y: "42%",
    metrics: [
      { value: "305K", label: "3-MONTH EXPOSURE" },
      { value: "649.6H", label: "WATCH TIME" },
      { value: "TOP 1%", label: "VIEW COUNT VS PEERS" },
    ],
    layers: [
      { label: "内容策略", copy: "以艺人 IP 为核心，搭建垂直内容生态，按平台流量逻辑迭代选题。" },
      { label: "视觉设计", copy: "独立完成视觉制作，保持账号审美与艺人形象一致。" },
      { label: "文案", copy: "覆盖策划到发布的全链路文案，服务粉丝语境与传播节奏。" },
      { label: "流量运营", copy: "最高 3 月总曝光 30.5 万，观看时长 649.6 小时，观看数超 99% 同频创作者。" },
      { label: "用户互动", copy: "维护粉丝社群与舆情，互动数据超 99% 同类型创作者。" },
    ],
    points: [
      "以艺人 IP 为核心，打造垂直内容生态，独立完成内容策划、视觉制作到流量运营的全链路。",
      "基于平台流量逻辑优化内容策略，最高 3 月总曝光 30.5 万，观看时长 649.6 小时，观看数超 99% 同频创作者。",
      "搭建用户互动体系，维护粉丝社群与舆情，互动数据超 99% 同类型创作者。",
    ],
  },
  {
    id: "weibo",
    title: "微博 · 娱乐垂类",
    x: "68%",
    y: "58%",
    metrics: [{ value: "88K", label: "MAX POST READS" }],
    layers: [
      { label: "内容策略", copy: "聚焦娱乐垂类视觉内容，服务艺人 IP 曝光与传播。" },
      { label: "视觉设计", copy: "独立完成海报设计与原创漫画绘画。" },
      { label: "文案", copy: "撰写并发布艺人相关物料文案。" },
      { label: "流量运营", copy: "把握粉丝审美与平台流量逻辑，单帖最高阅读 8.8 万。" },
      { label: "用户互动", copy: "以视觉内容带动粉丝讨论与二次传播。" },
    ],
    points: [
      "独立完成艺人物料海报设计、原创漫画、文案撰写与内容发布。",
      "聚焦娱乐垂类视觉内容运营，单帖最高阅读 8.8 万。",
    ],
  },
];

export const aigcModules = [
  {
    key: "IMAGE",
    title: "画面质感",
    copy: "以指令控制光线、材质与风格统一，服务品牌视觉的批量生产。",
    image: "/images/aigc-image.jpg",
  },
  {
    key: "VIDEO",
    title: "动态影像",
    copy: "熟悉即梦、可灵等视频生产链路，从脚本到成片标准化输出。",
    image: "/images/aigc-video.jpg",
  },
  {
    key: "CHARACTER",
    title: "人物形象",
    copy: "人物形象制作与场景生成，保持识别度与世界观一致。",
    image: "/images/portrait.png",
  },
  {
    key: "CAMPAIGN",
    title: "活动影像",
    copy: "把品牌活动转译为可投放的短视频与内容资产。",
    image: "/images/aigc-campaign.jpg",
  },
];

export const skills = {
  CREATIVE: ["Photoshop", "Premiere Pro", "剪映", "Canva", "即时设计", "Procreate"],
  AI: ["即梦", "可灵", "Nano Banana", "Image-2", "Canva"],
  BUSINESS: [
    "Brand Strategy",
    "Content Operations",
    "Data Analysis",
    "Campaign Planning",
    "E-commerce Operations",
    "Event Execution",
  ],
  LANGUAGE: ["Chinese — Native", "English — CET-6"],
  CERTIFICATE: ["全国演出经纪人资格证"],
};

export const mediaOrg = {
  name: "长安大学青年传媒中心",
  role: "视频编辑制作 · 视频创作部门",
  period: "2019.09 — 2020.09",
  city: "西安",
  points: [
    "参与校园宣传片、校园晚会、校级会议等 20+ 项视频制作，覆盖脚本策划到后期剪辑。",
    "参与电影《吹哨人》校园路演支持与拍摄，相关物料被校方作为官方宣传素材使用。",
  ],
};
