const TYPES = {
  R: {
    name: "실무가형",
    emoji: "🛠️",
    desc: "손과 몸을 움직여 눈에 보이는 결과를 만들 때 몰입도가 폭발하는 타입이에요. 이론보다 실전, 말보다 행동이 편해요.",
    jobs: ["정비·엔지니어", "요리사·셰프", "항공기 조종사", "물류·운영 매니저", "스포츠 트레이너", "인테리어 시공 전문가"],
  },
  I: {
    name: "탐구가형",
    emoji: "🔬",
    desc: "\"왜?\"라는 질문을 그냥 넘기지 못하는 타입이에요. 데이터와 근거로 세상을 이해하고 싶어 해요.",
    jobs: ["데이터 분석가", "개발자", "연구원", "의사·약사", "회계사", "변리사"],
  },
  A: {
    name: "크리에이터형",
    emoji: "🎨",
    desc: "머릿속 상상을 눈에 보이는 무언가로 만들어내는 데 재능이 있는 타입이에요. 정해진 틀보다 자유로운 표현이 좋아요.",
    jobs: ["디자이너", "콘텐츠 크리에이터", "작가·에디터", "UX/UI 디자이너", "건축가", "브랜드 마케터"],
  },
  S: {
    name: "커뮤니케이터형",
    emoji: "🤝",
    desc: "사람을 만나고 돕는 데서 에너지를 얻는 타입이에요. 공감 능력이 곧 가장 큰 무기예요.",
    jobs: ["교사", "상담사", "간호사", "인사(HR) 담당자", "승무원", "사회복지사"],
  },
  E: {
    name: "리더형",
    emoji: "🚀",
    desc: "목표를 세우고 사람들을 이끌며 판을 키우는 데 익숙한 타입이에요. 도전과 성취가 원동력이 돼요.",
    jobs: ["창업가", "영업·세일즈", "서비스 기획자·PM", "변호사", "공공행정가", "투자·자산운용가"],
  },
  C: {
    name: "관리자형",
    emoji: "📊",
    desc: "체계와 규칙 안에서 꼼꼼하게 일을 완성해내는 타입이에요. 안정감과 정확성을 무엇보다 중요하게 여겨요.",
    jobs: ["공무원", "세무사·회계 담당", "은행원", "품질관리(QA)", "행정 전문직", "데이터·시스템 관리자"],
  },
};

const QUESTIONS = [
  {
    text: "주말에 하루가 통째로 주어진다면?",
    options: [
      { type: "R", label: "공구 들고 뭔가 고치거나 만들기" },
      { type: "I", label: "궁금했던 주제 파고들며 조사하기" },
      { type: "A", label: "그림 그리거나 영상 편집하기" },
      { type: "S", label: "친구들 모아서 수다 떨기" },
      { type: "E", label: "새로운 프로젝트나 사이드잡 구상하기" },
      { type: "C", label: "다이어리 정리하고 계획 세우기" },
    ],
  },
  {
    text: "팀 프로젝트에서 나는 주로?",
    options: [
      { type: "R", label: "직접 손 움직여서 결과물 만드는 역할" },
      { type: "I", label: "자료 조사하고 데이터로 검증하는 역할" },
      { type: "A", label: "기획 콘셉트와 아이디어 내는 역할" },
      { type: "S", label: "팀원 의견 조율하고 분위기 챙기는 역할" },
      { type: "E", label: "발표하고 방향을 이끄는 역할" },
      { type: "C", label: "일정 관리하고 문서 정리하는 역할" },
    ],
  },
  {
    text: "어릴 때 부모님께 자주 들은 칭찬은?",
    options: [
      { type: "R", label: "손재주가 좋다" },
      { type: "I", label: "궁금한 게 많다" },
      { type: "A", label: "상상력이 풍부하다" },
      { type: "S", label: "다정하고 배려심 많다" },
      { type: "E", label: "리더십이 있다" },
      { type: "C", label: "꼼꼼하고 성실하다" },
    ],
  },
  {
    text: "스트레스 받을 때 나만의 해소법은?",
    options: [
      { type: "R", label: "몸을 움직이거나 운동하기" },
      { type: "I", label: "혼자 원인을 분석하고 파고들기" },
      { type: "A", label: "일기 쓰거나 무언가 창작하기" },
      { type: "S", label: "누군가에게 털어놓고 대화하기" },
      { type: "E", label: "새로운 목표 세우고 몰두하기" },
      { type: "C", label: "정리정돈하며 마음 다잡기" },
    ],
  },
  {
    text: "SNS 피드에서 나도 모르게 멈추는 콘텐츠는?",
    options: [
      { type: "R", label: "DIY·인테리어·요리 영상" },
      { type: "I", label: "다큐멘터리·과학·시사 콘텐츠" },
      { type: "A", label: "감각적인 디자인·아트 작업물" },
      { type: "S", label: "사람 사는 이야기·인터뷰" },
      { type: "E", label: "창업·자기계발·성공 스토리" },
      { type: "C", label: "재테크·정리·꿀팁 콘텐츠" },
    ],
  },
  {
    text: "회사를 고른다면 가장 중요한 기준은?",
    options: [
      { type: "R", label: "실질적인 결과물을 만드는 일" },
      { type: "I", label: "전문성을 깊게 쌓을 수 있는 일" },
      { type: "A", label: "내 아이디어를 자유롭게 펼치는 일" },
      { type: "S", label: "사람들에게 도움이 되는 일" },
      { type: "E", label: "성장하고 큰 영향력을 가질 수 있는 일" },
      { type: "C", label: "안정적이고 체계적인 일" },
    ],
  },
  {
    text: "친구들 사이에서 나의 포지션은?",
    options: [
      { type: "R", label: "뭐든 척척 고쳐주는 해결사" },
      { type: "I", label: "물어보면 답 찾아주는 척척박사" },
      { type: "A", label: "톡톡 튀는 아이디어 뱅크" },
      { type: "S", label: "고민 들어주는 상담소" },
      { type: "E", label: "모임 주도하는 분위기 메이커" },
      { type: "C", label: "약속·일정 챙기는 총무" },
    ],
  },
  {
    text: "이상적인 하루 업무 스타일은?",
    options: [
      { type: "R", label: "현장에서 직접 몸으로 뛰는 하루" },
      { type: "I", label: "조용히 몰입해서 분석하는 하루" },
      { type: "A", label: "새로운 걸 기획하고 만들어내는 하루" },
      { type: "S", label: "사람들과 계속 소통하는 하루" },
      { type: "E", label: "의사결정하고 이끄는 하루" },
      { type: "C", label: "루틴대로 차근차근 처리하는 하루" },
    ],
  },
];

const TYPE_PRIORITY = ["A", "E", "S", "I", "C", "R"];

let currentIndex = 0;
let scores = {};

const quizView = document.getElementById("quizView");
const resultView = document.getElementById("resultView");
const progressBar = document.getElementById("progressBar");
const qCounter = document.getElementById("qCounter");
const questionText = document.getElementById("questionText");
const optionsWrap = document.getElementById("optionsWrap");
const retryBtn = document.getElementById("retryBtn");

const resultEmoji = document.getElementById("resultEmoji");
const resultTitle = document.getElementById("resultTitle");
const resultSub = document.getElementById("resultSub");
const resultDesc = document.getElementById("resultDesc");
const jobTags = document.getElementById("jobTags");

function shuffle(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetQuiz() {
  currentIndex = 0;
  scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 };
  quizView.classList.add("active");
  resultView.classList.remove("active");
  renderQuestion();
}

function renderQuestion() {
  const total = QUESTIONS.length;
  const q = QUESTIONS[currentIndex];

  progressBar.style.width = `${(currentIndex / total) * 100}%`;
  qCounter.textContent = `${currentIndex + 1} / ${total}`;
  questionText.textContent = q.text;

  optionsWrap.innerHTML = "";
  shuffle(q.options).forEach((opt) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = opt.label;
    btn.addEventListener("click", () => selectOption(opt.type));
    optionsWrap.appendChild(btn);
  });

  reportHeight();
}

function selectOption(type) {
  scores[type] += 1;
  currentIndex += 1;

  if (currentIndex < QUESTIONS.length) {
    renderQuestion();
  } else {
    progressBar.style.width = "100%";
    showResult();
  }
}

function showResult() {
  const ranked = [...TYPE_PRIORITY].sort((a, b) => scores[b] - scores[a]);
  const topType = ranked[0];
  const secondType = ranked[1];

  const top = TYPES[topType];
  resultEmoji.textContent = top.emoji;
  resultTitle.textContent = top.name;
  resultDesc.textContent = top.desc;

  if (scores[secondType] > 0 && scores[secondType] >= scores[topType] - 2) {
    resultSub.textContent = `${TYPES[secondType].name} 기질도 함께 가지고 있어요`;
    resultSub.style.display = "block";
  } else {
    resultSub.style.display = "none";
  }

  jobTags.innerHTML = "";
  top.jobs.forEach((job) => {
    const tag = document.createElement("span");
    tag.className = "job-tag";
    tag.textContent = job;
    jobTags.appendChild(tag);
  });

  quizView.classList.remove("active");
  resultView.classList.add("active");
  reportHeight();
}

retryBtn.addEventListener("click", resetQuiz);

resetQuiz();

// ---- 메인 탭 전환 (성향 테스트 / 조건으로 찾기) ----

const mainTabs = document.getElementById("mainTabs");
const quizSection = document.getElementById("quizSection");
const filterSection = document.getElementById("filterSection");

mainTabs.addEventListener("click", (e) => {
  const btn = e.target.closest(".maintab");
  if (!btn) return;

  mainTabs.querySelectorAll(".maintab").forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");

  const view = btn.dataset.view;
  quizSection.classList.toggle("active", view === "quiz");
  filterSection.classList.toggle("active", view === "filter");

  reportHeight();
});

// ---- 조건으로 찾기 ----

const MAJORS = [
  "인문·어문계열",
  "사회·경영계열",
  "법·행정계열",
  "이공·자연계열",
  "의학·보건계열",
  "예체능계열",
  "사범·교육계열",
  "전공 무관",
];

const REGIONS = ["수도권 중심", "지방·전국 고르게", "재택·원격 가능"];

const CONDITIONS = [
  "재택근무 가능",
  "워라밸 좋음",
  "높은 안정성",
  "고소득 가능",
  "정시 퇴근",
  "교대·야간 근무",
  "잦은 출장·외근",
];

const JOBS = [
  { name: "백엔드/프론트엔드 개발자", emoji: "💻", desc: "서비스를 직접 만들고 고쳐나가는 재미가 있는 직업. 수요와 몸값이 꾸준히 높아요.", majors: ["이공·자연계열", "전공 무관"], regions: ["수도권 중심", "재택·원격 가능"], conditions: ["재택근무 가능", "고소득 가능"] },
  { name: "데이터 분석가", emoji: "📈", desc: "숫자와 데이터로 회사의 의사결정을 돕는 직업. 논리적인 사람에게 잘 맞아요.", majors: ["이공·자연계열", "사회·경영계열"], regions: ["수도권 중심", "재택·원격 가능"], conditions: ["재택근무 가능", "고소득 가능"] },
  { name: "UX/UI 디자이너", emoji: "🎨", desc: "사용자가 편하게 쓰는 화면을 설계하는 직업. 감각과 논리가 함께 필요해요.", majors: ["예체능계열", "전공 무관"], regions: ["수도권 중심", "재택·원격 가능"], conditions: ["재택근무 가능", "워라밸 좋음"] },
  { name: "콘텐츠 크리에이터", emoji: "🎬", desc: "기획부터 촬영, 편집까지 직접 콘텐츠를 만드는 직업. 자유도가 높아요.", majors: ["전공 무관"], regions: ["지방·전국 고르게", "재택·원격 가능"], conditions: ["재택근무 가능"] },
  { name: "간호사", emoji: "💉", desc: "환자를 가장 가까이서 돌보는 직업. 전국 어디서나 수요가 꾸준해요.", majors: ["의학·보건계열"], regions: ["지방·전국 고르게"], conditions: ["높은 안정성", "교대·야간 근무"] },
  { name: "약사", emoji: "💊", desc: "약국·병원·제약회사 등 진로가 다양한 전문 면허직이에요.", majors: ["의학·보건계열"], regions: ["수도권 중심", "지방·전국 고르게"], conditions: ["높은 안정성", "고소득 가능", "정시 퇴근"] },
  { name: "의사", emoji: "🩺", desc: "긴 수련 기간을 거치지만 전문성과 안정성이 확실한 직업이에요.", majors: ["의학·보건계열"], regions: ["수도권 중심", "지방·전국 고르게"], conditions: ["고소득 가능", "높은 안정성"] },
  { name: "물리치료사", emoji: "🦵", desc: "재활과 회복을 돕는 직업. 병원, 스포츠센터 등 활동 영역이 넓어요.", majors: ["의학·보건계열"], regions: ["지방·전국 고르게"], conditions: ["높은 안정성", "정시 퇴근"] },
  { name: "초·중등 교사", emoji: "📚", desc: "다음 세대를 가르치는 보람과 방학이 있는 안정적인 직업이에요.", majors: ["사범·교육계열"], regions: ["지방·전국 고르게"], conditions: ["높은 안정성", "워라밸 좋음"] },
  { name: "대학교수·연구원", emoji: "🔬", desc: "한 분야를 깊게 파고드는 걸 좋아한다면 잘 맞는 직업이에요.", majors: ["이공·자연계열", "인문·어문계열"], regions: ["수도권 중심", "지방·전국 고르게"], conditions: ["높은 안정성"] },
  { name: "공무원(행정직)", emoji: "🏛️", desc: "전공 상관없이 도전 가능하고, 정년까지 안정적으로 일할 수 있어요.", majors: ["전공 무관"], regions: ["지방·전국 고르게"], conditions: ["높은 안정성", "정시 퇴근"] },
  { name: "세무사·회계사", emoji: "🧾", desc: "숫자와 법을 함께 다루는 전문직. 자격증만 있으면 진로가 넓어요.", majors: ["사회·경영계열"], regions: ["수도권 중심"], conditions: ["고소득 가능", "높은 안정성"] },
  { name: "은행원", emoji: "🏦", desc: "안정적인 대기업 급여와 복지를 원한다면 여전히 매력적인 직업이에요.", majors: ["사회·경영계열", "전공 무관"], regions: ["수도권 중심", "지방·전국 고르게"], conditions: ["높은 안정성", "정시 퇴근"] },
  { name: "브랜드 마케터", emoji: "📣", desc: "제품과 브랜드를 사람들에게 알리는 직업. 트렌드에 밝아야 해요.", majors: ["사회·경영계열", "인문·어문계열"], regions: ["수도권 중심"], conditions: ["워라밸 좋음"] },
  { name: "영업·세일즈", emoji: "🤝", desc: "성과에 따라 보상이 큰 직업. 사람 만나는 걸 좋아하면 유리해요.", majors: ["전공 무관"], regions: ["지방·전국 고르게"], conditions: ["고소득 가능", "잦은 출장·외근"] },
  { name: "통번역가", emoji: "🌐", desc: "외국어 실력을 바로 무기로 쓸 수 있는 직업. 프리랜서 활동도 활발해요.", majors: ["인문·어문계열"], regions: ["재택·원격 가능", "수도권 중심"], conditions: ["재택근무 가능"] },
  { name: "작가·에디터", emoji: "✍️", desc: "글로 정보와 감정을 전달하는 직업. 출판, 콘텐츠 등 분야가 다양해요.", majors: ["인문·어문계열", "전공 무관"], regions: ["재택·원격 가능"], conditions: ["재택근무 가능", "워라밸 좋음"] },
  { name: "사회복지사", emoji: "🧡", desc: "도움이 필요한 사람을 직접 돕는 직업. 공공·민간 기관 수요가 꾸준해요.", majors: ["사회·경영계열", "전공 무관"], regions: ["지방·전국 고르게"], conditions: ["높은 안정성"] },
  { name: "심리상담사", emoji: "🗣️", desc: "사람의 마음을 다루는 직업. 최근 수요가 빠르게 늘고 있어요.", majors: ["인문·어문계열", "사회·경영계열"], regions: ["지방·전국 고르게", "재택·원격 가능"], conditions: ["워라밸 좋음"] },
  { name: "항공 승무원", emoji: "✈️", desc: "전 세계를 다니며 일하는 직업. 체력과 서비스 마인드가 필요해요.", majors: ["전공 무관"], regions: ["수도권 중심", "지방·전국 고르게"], conditions: ["잦은 출장·외근", "교대·야간 근무"] },
  { name: "기계·전기 엔지니어", emoji: "⚙️", desc: "제조업 현장에서 없어서는 안 될 직업. 지방 산업단지 수요가 많아요.", majors: ["이공·자연계열"], regions: ["지방·전국 고르게"], conditions: ["높은 안정성", "교대·야간 근무"] },
  { name: "건축가", emoji: "🏗️", desc: "공간을 설계하고 현장을 누비는 직업. 예술성과 기술이 함께 필요해요.", majors: ["이공·자연계열", "예체능계열"], regions: ["수도권 중심", "지방·전국 고르게"], conditions: ["잦은 출장·외근"] },
  { name: "요리사·셰프", emoji: "🍳", desc: "직접 만든 음식으로 사람들을 만족시키는 직업. 손기술이 곧 실력이에요.", majors: ["전공 무관"], regions: ["지방·전국 고르게"], conditions: ["교대·야간 근무"] },
  { name: "스포츠 트레이너", emoji: "🏋️", desc: "사람들의 건강한 몸을 만들어주는 직업. 활동적인 사람에게 잘 맞아요.", majors: ["예체능계열", "전공 무관"], regions: ["지방·전국 고르게"], conditions: ["교대·야간 근무"] },
  { name: "물류·운영 매니저", emoji: "📦", desc: "물건과 사람이 원활히 돌아가게 관리하는 직업. 꼼꼼함이 필요해요.", majors: ["사회·경영계열", "전공 무관"], regions: ["지방·전국 고르게"], conditions: ["높은 안정성"] },
  { name: "항공기 조종사", emoji: "🛩️", desc: "훈련 기간은 길지만 그만큼 보상이 큰 전문직이에요.", majors: ["이공·자연계열", "전공 무관"], regions: ["수도권 중심", "지방·전국 고르게"], conditions: ["고소득 가능", "잦은 출장·외근"] },
  { name: "창업가", emoji: "🚀", desc: "내 아이디어로 직접 사업을 만들어가는 직업. 리스크와 자유가 공존해요.", majors: ["전공 무관"], regions: ["지방·전국 고르게", "재택·원격 가능"], conditions: ["재택근무 가능", "고소득 가능"] },
  { name: "공공정책 기획자", emoji: "📋", desc: "정책과 제도를 설계하는 직업. 사회에 미치는 영향력이 커요.", majors: ["법·행정계열", "사회·경영계열"], regions: ["수도권 중심"], conditions: ["높은 안정성", "정시 퇴근"] },
  { name: "변호사", emoji: "⚖️", desc: "법으로 사람과 기업의 문제를 해결하는 전문직. 진입은 어렵지만 진로가 넓어요.", majors: ["법·행정계열", "전공 무관"], regions: ["수도권 중심"], conditions: ["고소득 가능", "잦은 출장·외근"] },
];

const majorSelect = document.getElementById("majorSelect");
const regionSelect = document.getElementById("regionSelect");
const conditionChips = document.getElementById("conditionChips");
const resetFilterBtn = document.getElementById("resetFilterBtn");
const filterCount = document.getElementById("filterCount");
const jobResultList = document.getElementById("jobResultList");

const selectedConditions = new Set();

function fillSelect(select, list) {
  const allOpt = document.createElement("option");
  allOpt.value = "전체";
  allOpt.textContent = "전체";
  select.appendChild(allOpt);

  list.forEach((label) => {
    const opt = document.createElement("option");
    opt.value = label;
    opt.textContent = label;
    select.appendChild(opt);
  });
}

fillSelect(majorSelect, MAJORS);
fillSelect(regionSelect, REGIONS);

CONDITIONS.forEach((label) => {
  const chip = document.createElement("button");
  chip.type = "button";
  chip.className = "chip";
  chip.textContent = label;
  chip.addEventListener("click", () => {
    if (selectedConditions.has(label)) {
      selectedConditions.delete(label);
      chip.classList.remove("active");
    } else {
      selectedConditions.add(label);
      chip.classList.add("active");
    }
    renderFilteredJobs();
  });
  conditionChips.appendChild(chip);
});

function matchesJob(job) {
  const major = majorSelect.value;
  const region = regionSelect.value;

  const majorOk = major === "전체" || job.majors.includes(major) || job.majors.includes("전공 무관");
  const regionOk = region === "전체" || job.regions.includes(region);
  const conditionsOk = [...selectedConditions].every((c) => job.conditions.includes(c));

  return majorOk && regionOk && conditionsOk;
}

function renderFilteredJobs() {
  const filtered = JOBS.filter(matchesJob);

  filterCount.textContent = `조건에 맞는 직업 ${filtered.length}개`;
  jobResultList.innerHTML = "";

  if (filtered.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "조건에 맞는 직업이 없어요. 조건을 줄여보세요!";
    jobResultList.appendChild(empty);
    reportHeight();
    return;
  }

  filtered.forEach((job) => {
    const card = document.createElement("div");
    card.className = "job-result-card";

    const tags = [...job.majors, ...job.regions, ...job.conditions]
      .map((t) => `<span class="job-result-tag">${t}</span>`)
      .join("");

    card.innerHTML = `
      <div class="job-result-top">
        <span class="job-result-emoji">${job.emoji}</span>
        <p class="job-result-name">${job.name}</p>
      </div>
      <p class="job-result-desc">${job.desc}</p>
      <div class="job-result-tags">${tags}</div>
    `;
    jobResultList.appendChild(card);
  });

  reportHeight();
}

majorSelect.addEventListener("change", renderFilteredJobs);
regionSelect.addEventListener("change", renderFilteredJobs);

resetFilterBtn.addEventListener("click", () => {
  majorSelect.value = "전체";
  regionSelect.value = "전체";
  selectedConditions.clear();
  conditionChips.querySelectorAll(".chip").forEach((c) => c.classList.remove("active"));
  renderFilteredJobs();
});

renderFilteredJobs();

// ---- 블로거 등 iframe에 삽입됐을 때, 부모 창에 실제 콘텐츠 높이 전달 ----

function reportHeight() {
  if (window.parent === window) return;
  window.parent.postMessage(
    { type: "job-finder-resize", height: document.body.scrollHeight },
    "*"
  );
}

if (window.ResizeObserver) {
  new ResizeObserver(reportHeight).observe(document.body);
}
window.addEventListener("load", reportHeight);
window.addEventListener("resize", reportHeight);
[100, 500, 1500].forEach((delay) => setTimeout(reportHeight, delay));
