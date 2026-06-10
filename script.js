const siteData = {
  projects: [
    {
      id: "three-clouds",
      variant: "enterprise",
      kicker: "01 | Enterprise AI / RAG",
      title: "三朵云 AI 竞争分析能力",
      period: "2024.12 - 2025.10 | 华为无线解决方案销售部",
      summary:
        "构建“三朵云”AI 竞争分析知识库，参与竞分知识库建设、竞分语料归类、RAG 应用效果验证与专有模型能力测试。",
      tags: ["RAG", "企业知识库", "竞分产品", "语料治理", "Badcase 反馈"],
      bullets: [
        "参与竞分知识库搭建法律风险讨论，负责竞分材料、产品选型案例、历史项目经验等非结构化知识的梳理与归类。",
        "结合竞分业务特点，参与讨论知识库检索逻辑、知识标签体系与问答场景设计，理解并协助验证 RAG 在企业知识检索场景中的应用效果。",
        "参与专有模型竞分能力测试，基于测试集验证回答准确率、案例召回质量与知识时效性。",
        "设计点赞 / 点踩与 badcase 反馈机制，并协助知识库权限管理讨论，推动竞分经验沉淀标准化。"
      ],
      businessFlow: {
        title: "业务流程：一线 - 知识库 - 竞分组",
        metric: "常规竞分信息获取时效从 D+1 提升至 D+0",
        lanes: [
          {
            role: "一线 / 代表处",
            steps: ["提出竞分问题", "自助查询资料", "反馈 badcase / 新需求"]
          },
          {
            role: "竞分知识库",
            steps: ["权限校验", "RAG 检索与生成", "返回答案与引用"]
          },
          {
            role: "竞分组",
            steps: ["知识治理与上架", "评估反馈", "更新语料与白名单"]
          }
        ]
      },
      ragPipeline: [
        { title: "识别场景", points: ["高重复支撑", "D+1 到 D+0"] },
        { title: "知识治理", points: ["合规来源", "术语词表 / 表格事实"] },
        { title: "Chunk 切分", points: ["标题分块", "Small-to-Big"] },
        { title: "混合索引", points: ["Hybrid Search", "元数据 / rerank"] },
        { title: "答案生成", points: ["证据回答", "引用溯源"] },
        { title: "评估反馈", points: ["测试集评级", "badcase 回溯"] },
        { title: "白名单上线", points: ["SR / VP / 代表", "权限开通"] }
      ]
    },
    {
      id: "focus-timer",
      variant: "flagship",
      kicker: "02 | Product Build / Mini Program",
      title: "心流番茄钟",
      period: "2026.04 - 2026.05 | 微信小程序",
      summary:
        "针对注重心流体验和时间管理的人群设计的简约番茄钟小程序，记录专注时间 / 心流时间，并规划结合历史习惯和 AI 给出更合理的时间管理建议。",
      tags: ["Figma", "Claude Code", "OpenClaw", "Agent", "Vibe Coding", "DevOps"],
      bullets: [
        "调研市面番茄钟程序，发现部分产品排版混乱、广告多，且倒计时结束会中断专注或无法记录心流时长。",
        "融入AI智能建议，帮助用户观察自身专注习惯，培养更健康的工作/学习习惯。",
        "用 vibe coding 方式开发前后端分离的小程序，使用 Figma AI 进行前端页面设计，Claude Code 进行前后端代码开发。",
        "在微信公众平台部署前端代码，云服务器部署后端代码，申请域名并使用 Nginx 打通前后端，使用 pm2 进行后台程序管理。",
        "引入开发侧 Claude Code Skill、GitHub webhook 与云服务器 OpenClaw Agent，形成智能化自动化部署架构。"
      ],
      screens: [
        { label: "首页 / 极简计时", path: "assets/focus-timer-01.jpg" },
        { label: "心流记录", path: "assets/focus-timer-02.jpg" },
        { label: "数据统计", path: "assets/focus-timer-03.jpg" }
      ],
      flow: ["Claude Code Skill", "GitHub webhook", "OpenClaw Agent", "风险判断", "自动部署"],
      metric: "部署时间从约 3min 优化至 10s",
      qrcode: {
        path: "assets/focus-timer-qrcode.jpg",
        title: "微信扫码体验",
        hint: "扫码进入「心流番茄钟」小程序，体验极简计时与心流记录。"
      }
    },
    {
      id: "coder-treehole",
      variant: "video",
      kicker: "03 | Coze / Agent Application",
      title: "码农树洞",
      period: "2025.11 - 2026.02 | Coze 项目",
      summary:
        "针对程序员在失业焦虑、职场冲突、技术成长等场景缺乏情绪表达出口的问题，设计 AI 陪伴型树洞产品，用程序员熟悉的幽默辛辣风格提供更成熟的职场建议。",
      tags: ["Coze", "Prompt Engineering", "Memory", "LLM", "Tools", "Function Calling"],
      bullets: [
        "在小红书、脉脉、稀土掘金搜集程序员常见吐槽问题和高热讨论，分析情感、职场、失业焦虑等问题类型。",
        "基于 Coze 工作流构建“情绪识别 → 场景分类 → 回复策略生成”链路，通过 Prompt 分层设计实现不同场景回复风格切换。",
        "针对极端情绪场景进行正向引导和限制，当用户出现自残意向时，通过 Function Calling 提示附近正规心理咨询地点进行介入。",
        "邀请程序员好友测试，根据真实问题生成测试集，并基于反馈结果进行 prompt 迭代和问题闭环。"
      ],
      researchInsight: {
        title: "职场吐槽是第二大类高频问题",
        body:
          "调研26年3-4月数据显示，职场向吐槽在程序员树洞话题中仅次于情感向；但相比情感陪伴类服务，职场吐槽场景的针对性支持明显不足。",
        takeaways: [
          ["问题排序", "第二大类", "职场向吐槽仅次于情感向。"],
          ["机会判断", "支持不足", "针对职场吐槽的配套服务明显少于情感向。"]
        ]
      },
      research: [
        {
          platform: "稀土掘金",
          items: [
            ["情感向", 38],
            ["职场向", 24],
            ["经济向", 20],
            ["生活向", 13],
            ["技术向", 5]
          ]
        },
        {
          platform: "小红书",
          items: [
            ["情感向", 45],
            ["职场向", 21],
            ["生活向", 13],
            ["经济向", 11],
            ["技术向", 10]
          ]
        }
      ],
      video: {
        path: "assets/coder-treehole-demo.mp4",
        poster: "assets/coder-treehole-poster.jpg"
      },
      experienceUrl: "https://www.coze.cn/store/agent/7616294520539938851?bot_id=true"
    }
  ],
  timeline: [
    {
      date: "2023.10 - 2025.10",
      role: "产品经理",
      org: "华为技术有限公司 | 无线解决方案",
      body: "支撑全球各代表处无线产品方案竞争分析，设计全场景解决方案体系并支撑 C代表处五国无线网络存量扩展；协助构建“三朵云”AI 竞争分析知识库，参与 A运营商总部 5 年框架合同竞争分析、产品选型、标前红蓝军演练与竞争分析材料输出，并主导乍得 A运营商 & M运营商 全场景网络方案规划和客户拜访。"
    },
    {
      date: "2023.03 - 2023.10",
      role: "数据管理专家（兼任）",
      org: "华为技术有限公司 | WeLink 云空间",
      body: "总体负责云空间数据资产管理，制定数据分类分级标准，完成核心业务数据入湖，并参与建设规范化“开发-上线-入湖”链路流程。"
    },
    {
      date: "2022.07 - 2023.10",
      role: "系统运维工程师（SRE，兼任）",
      org: "华为技术有限公司 | WeLink 云空间",
      body: "负责云空间相关监控部署、日常变更运维和系统稳定性维护，独立从 0 到 1 搭建云空间监控系统。"
    },
    {
      date: "2021.07 - 2023.10",
      role: "后端开发工程师（SE）",
      org: "华为技术有限公司 | WeLink 云空间",
      body: "负责云空间后端需求开发、新需求拆解、架构分析与三端联调，参与文件安全矩阵、消息卡片、缩略图逻辑优化扩展等项目。"
    }
  ],
  capabilities: [
    {
      title: "AI 产品",
      body: "熟悉 LLM、Agent、Skill、MCP、RAG、Function Calling、Prompt Engineering，参与企业竞分知识库和 AI 应用工作流设计。"
    },
    {
      title: "工程实现",
      body: "具备 Java / Python / Shell、Spring Boot、MySQL、Redis、Kafka、Linux、Nginx、DevOps 与 Git 实践经验。"
    },
    {
      title: "业务分析",
      body: "能将竞分材料、产品选型案例、历史项目经验等非结构化知识进行梳理归类，并结合业务场景设计问答与反馈闭环。"
    },
    {
      title: "海外沟通",
      body: "支撑 C代表处五国网络存量扩展，参与乍得客户拜访和 A运营商小巴展宣讲，具备良好英文沟通能力。"
    }
  ],
  tools: [
    {
      title: "AI 应用与 Agent",
      items: ["Coze", "Claude Code", "Codex", "OpenClaw", "LLM", "Agent", "RAG", "MCP", "Function Calling"]
    },
    {
      title: "产品与设计",
      items: ["Figma", "Xmind", "Visio", "PRD", "需求分析", "用户调研", "数据指标设计", "海外客户沟通"]
    },
    {
      title: "工程语言",
      items: ["Java", "Python", "Shell", "Spring Boot", "MyBatis", "Maven", "Git"]
    },
    {
      title: "基础设施",
      items: ["MySQL", "Redis", "Kafka", "Linux", "Nginx", "Docker", "k8s", "Grafana", "pm2"]
    }
  ]
};

const qs = (selector, scope = document) => scope.querySelector(selector);
const qsa = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function chipList(items) {
  return items.map((item) => `<span class="chip">${escapeHtml(item)}</span>`).join("");
}

function renderProjects() {
  const root = qs("#projectsList");
  root.innerHTML = siteData.projects.map(projectTemplate).join("");
}

function projectTemplate(project) {
  if (project.id === "three-clouds") {
    return enterpriseProjectTemplate(project);
  }

  if (project.id === "coder-treehole") {
    return treeholeProjectTemplate(project);
  }

  const aside =
    project.variant === "flagship"
      ? flagshipAside(project)
      : videoAside(project);

  return `
    <article class="project-card is-${project.variant} reveal" id="${project.id}">
      <div class="project-inner">
        <div class="project-main">
          <p class="project-kicker">${escapeHtml(project.kicker)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-period">${escapeHtml(project.period)}</p>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <div class="project-tags">${chipList(project.tags)}</div>
          <ul class="project-list">
            ${project.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <aside class="project-aside">${aside}</aside>
      </div>
    </article>
  `;
}

function enterpriseProjectTemplate(project) {
  return `
    <article class="project-card is-${project.variant} reveal" id="${project.id}">
      <div class="project-inner enterprise-inner">
        <div class="project-main enterprise-main">
          <p class="project-kicker">${escapeHtml(project.kicker)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-period">${escapeHtml(project.period)}</p>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <div class="project-tags">${chipList(project.tags)}</div>
          <ul class="project-list">
            ${project.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
        <aside class="enterprise-business">
          ${businessFlowDiagram(project.businessFlow)}
        </aside>
        <div class="enterprise-rag">
          ${ragPipelineDiagram(project.ragPipeline)}
        </div>
      </div>
    </article>
  `;
}

function treeholeProjectTemplate(project) {
  return `
    <article class="project-card is-${project.variant} is-treehole reveal" id="${project.id}">
      <div class="project-inner treehole-inner">
        <div class="treehole-intro">
          <p class="project-kicker">${escapeHtml(project.kicker)}</p>
          <h3>${escapeHtml(project.title)}</h3>
          <p class="project-period">${escapeHtml(project.period)}</p>
          <p class="project-summary">${escapeHtml(project.summary)}</p>
          <div class="project-tags">${chipList(project.tags)}</div>
        </div>
        ${researchPanel(project)}
        <aside class="treehole-media">
          ${videoAside(project)}
        </aside>
        <div class="treehole-workflow">
          ${cozeExperiencePanel(project)}
          <p class="workflow-title">设计与验证路径</p>
          <ul class="project-list">
            ${project.bullets.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
          </ul>
        </div>
      </div>
    </article>
  `;
}

function researchPanel(project) {
  return `
    <section class="research-panel">
      <p class="research-kicker">Research Insight</p>
      <h4>${escapeHtml(project.researchInsight.title)}</h4>
      <p class="research-summary">${escapeHtml(project.researchInsight.body)}</p>
      <div class="research-platforms">
        ${project.research.map(researchPlatformTemplate).join("")}
      </div>
      <div class="research-takeaways">
        ${project.researchInsight.takeaways
          .map(
            ([label, value, text]) => `
              <div class="research-takeaway">
                <span>${escapeHtml(label)}</span>
                <strong>${escapeHtml(value)}</strong>
                <p>${escapeHtml(text)}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function researchPlatformTemplate(platform) {
  return `
    <div class="research-platform">
      <p class="research-platform-title">${escapeHtml(platform.platform)}</p>
      <div class="research-bars">
        ${platform.items
          .map(
            ([label, value]) => `
              <div class="research-row ${label === "职场向" ? "is-highlight" : ""}">
                <span class="research-label">${escapeHtml(label)}</span>
                <span class="research-track" aria-hidden="true">
                  <span class="research-fill" style="width: ${Number(value)}%"></span>
                </span>
                <strong>${Number(value)}%</strong>
              </div>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

function cozeExperiencePanel(project) {
  return `
    <div class="coze-entry-panel">
      <div>
        <p class="coze-entry-title">Coze 在线体验</p>
        <p class="coze-entry-text">打开智能体，直接体验“情绪识别 → 场景分类 → 回复策略生成”的对话链路。</p>
      </div>
      <a class="primary-link coze-entry-link" href="${escapeHtml(project.experienceUrl)}" target="_blank" rel="noopener noreferrer">
        体验 Coze 智能体
      </a>
    </div>
  `;
}

function businessFlowDiagram(flow) {
  return `
    <section class="enterprise-diagram business-flow-diagram reveal">
      <div class="diagram-heading">
        <p class="diagram-kicker">Business Flow</p>
        <h4>${escapeHtml(flow.title)}</h4>
      </div>
      <div class="swimlane-grid">
        ${flow.lanes
          .map(
            (lane) => `
              <div class="swimlane">
                <p class="swimlane-title">${escapeHtml(lane.role)}</p>
                <div class="swimlane-steps">
                  ${lane.steps
                    .map(
                      (step, index) => `
                        <div class="swimlane-step">
                          <span>${String(index + 1).padStart(2, "0")}</span>
                          <strong>${escapeHtml(step)}</strong>
                        </div>
                      `
                    )
                    .join("")}
                </div>
              </div>
            `
          )
          .join("")}
      </div>
      <p class="diagram-metric">${escapeHtml(flow.metric)}</p>
    </section>
  `;
}

function ragPipelineDiagram(steps) {
  return `
    <section class="enterprise-diagram rag-pipeline-diagram reveal">
      <div class="diagram-heading">
        <p class="diagram-kicker">RAG Pipeline</p>
        <h4>RAG 搭建主流程</h4>
      </div>
      <div class="rag-steps">
        ${steps
          .map(
            (step, index) => `
              <div class="rag-step">
                <span class="rag-index">${String(index + 1).padStart(2, "0")}</span>
                <strong>${escapeHtml(step.title)}</strong>
                <p>${step.points.map(escapeHtml).join(" / ")}</p>
              </div>
            `
          )
          .join("")}
      </div>
    </section>
  `;
}

function flagshipAside(project) {
  return `
    <div class="screen-panel">
      <p class="screen-title">产品界面展示</p>
      <div class="screen-grid">
        ${project.screens.map(screenSlot).join("")}
      </div>
    </div>
    ${project.qrcode ? qrPanel(project.qrcode) : ""}
    <div class="flow-panel reveal">
      <p class="flow-title">一键部署链路</p>
      <div class="deploy-flow">
        ${project.flow
          .map(
            (step, index) => `
              <div class="flow-step">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <strong>${escapeHtml(step)}</strong>
              </div>
            `
          )
          .join("")}
      </div>
      <p class="flow-metric">${escapeHtml(project.metric)}</p>
    </div>
  `;
}

function qrPanel(qrcode) {
  return `
    <div class="qr-panel reveal" data-qr-slot="${escapeHtml(qrcode.path)}">
      <div class="qr-shot">
        <img src="${escapeHtml(qrcode.path)}" alt="${escapeHtml(qrcode.title)}" hidden />
        <div class="qr-placeholder">
          <strong>小程序二维码</strong>
          <span>${escapeHtml(qrcode.path)}</span>
        </div>
      </div>
      <div class="qr-copy">
        <p class="qr-title">${escapeHtml(qrcode.title)}</p>
        <p class="qr-hint">${escapeHtml(qrcode.hint)}</p>
      </div>
    </div>
  `;
}

function screenSlot(screen) {
  return `
    <div class="phone-shot" data-image-slot="${escapeHtml(screen.path)}">
      <img src="${escapeHtml(screen.path)}" alt="${escapeHtml(screen.label)}" hidden />
      <div class="phone-placeholder">
        <strong>${escapeHtml(screen.label)}</strong>
        <span>${escapeHtml(screen.path)}</span>
      </div>
    </div>
  `;
}

function videoAside(project) {
  return `
    <div class="video-panel">
      <p class="video-title">产品演示视频</p>
      <div class="video-frame" data-video-slot="${escapeHtml(project.video.path)}">
        <video src="${escapeHtml(project.video.path)}" poster="${escapeHtml(project.video.poster)}" controls hidden></video>
        <div class="video-placeholder">
          <strong>上传演示视频后自动显示</strong>
          <span>${escapeHtml(project.video.path)}</span>
          <span>可选封面：${escapeHtml(project.video.poster)}</span>
        </div>
      </div>
    </div>
  `;
}

function renderTimeline() {
  qs("#timelineList").innerHTML = siteData.timeline
    .map(
      (item) => `
        <article class="timeline-item reveal">
          <div class="timeline-date">${escapeHtml(item.date)}</div>
          <div class="timeline-card">
            <h3>${escapeHtml(item.role)}</h3>
            <p class="timeline-role">${escapeHtml(item.org)}</p>
            <p>${escapeHtml(item.body)}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderCapabilities() {
  qs("#capabilityGrid").innerHTML = siteData.capabilities
    .map(
      (item, index) => `
        <article class="capability-card reveal">
          <span class="capability-index">${String(index + 1).padStart(2, "0")}</span>
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.body)}</p>
        </article>
      `
    )
    .join("");
}

function renderTools() {
  qs("#toolGroups").innerHTML = siteData.tools
    .map(
      (group) => `
        <article class="tool-group reveal">
          <h3>${escapeHtml(group.title)}</h3>
          <div class="tool-chips">${chipList(group.items)}</div>
        </article>
      `
    )
    .join("");
}

async function assetExists(path) {
  try {
    const response = await fetch(`${path}?v=${Date.now()}`, { method: "HEAD", cache: "no-store" });
    return response.ok;
  } catch {
    return false;
  }
}

async function hydrateOptionalAssets() {
  const profileImage = qs("#profileImage");
  const profilePlaceholder = qs("#profilePlaceholder");
  if (await assetExists(profileImage.getAttribute("src"))) {
    profileImage.hidden = false;
    profilePlaceholder.hidden = true;
  }

  for (const slot of qsa("[data-image-slot]")) {
    const img = qs("img", slot);
    const placeholder = qs(".phone-placeholder", slot);
    if (await assetExists(img.getAttribute("src"))) {
      img.hidden = false;
      placeholder.hidden = true;
    }
  }

  for (const slot of qsa("[data-qr-slot]")) {
    const img = qs("img", slot);
    const placeholder = qs(".qr-placeholder", slot);
    if (await assetExists(img.getAttribute("src"))) {
      img.hidden = false;
      if (placeholder) placeholder.hidden = true;
    }
  }

  for (const slot of qsa("[data-video-slot]")) {
    const video = qs("video", slot);
    const placeholder = qs(".video-placeholder", slot);
    if (await assetExists(video.getAttribute("src"))) {
      video.hidden = false;
      placeholder.hidden = true;
    }
  }
}

function setupRevealAnimation() {
  const items = qsa(".section, .reveal");
  items.forEach((item) => item.classList.add("reveal"));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
  );

  items.forEach((item) => observer.observe(item));
}

function setupActiveNavigation() {
  const links = qsa(".nav-link");
  const sections = links
    .map((link) => qs(link.getAttribute("href")))
    .filter(Boolean);

  const setActive = (id) => {
    links.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  };

  const updateActive = () => {
    const offset = 120;
    const scrollPosition = window.scrollY + offset;
    let current = sections[0]?.id;

    for (const section of sections) {
      if (section.offsetTop <= scrollPosition) {
        current = section.id;
      }
    }

    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2) {
      current = sections.at(-1)?.id;
    }

    if (current) {
      setActive(current);
    }
  };

  links.forEach((link) => {
    link.addEventListener("click", () => {
      const id = link.getAttribute("href").slice(1);
      setActive(id);
      window.setTimeout(updateActive, 360);
    });
  });

  window.addEventListener("scroll", updateActive, { passive: true });
  window.addEventListener("resize", updateActive);
  updateActive();
}

function boot() {
  renderProjects();
  renderTimeline();
  renderCapabilities();
  renderTools();
  setupRevealAnimation();
  setupActiveNavigation();
  hydrateOptionalAssets();
}

boot();
