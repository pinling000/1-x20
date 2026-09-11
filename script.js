const questions = [
    {
        tag: "ITINERARY STYLE",
        title: "你對旅行中的行程安排，通常是怎樣的想法？",
        hint: "請選最接近你安排一天旅行的方式。",
        answers: [
            ["具體時間、地點和順序都要排好，照行程表執行（例如 09:00 到 A 景點、11:30 到 B 景點）", "嚴格照表型"],
            ["先排重要項目，地點和順序可以現場調整（例如只先決定今天一定要去的幾個地方）", "重點規劃型"],
            ["只要有大方向，細節到現場再決定（例如到了當地再看要去哪裡）", "彈性調整型"],
            ["不太想安排，跟著旅伴走就好（例如由對方決定每天去哪裡）", "跟隨型"],
        ],
    },
    {
        tag: "SCENIC ROUTE",
        title: "如果安排一段需要配合班次、沿線散策的旅程，你會怎麼看？",
        hint: "例如搭乘地方交通工具，沿途下車走走。",
        answers: [
            ["每站要待多久、要遊覽哪些點都先安排清楚（例如事先決定每站停留時間和必看景點）", "逐站規劃型"],
            ["大致安排每站的停留點，具體行程可以調整（例如到了現場再決定先逛哪一個地方）", "彈性規劃型"],
            ["只要沿途風景好，細節不用先想（例如搭上車再決定要去哪一站）", "完全隨性型"],
            ["希望旅伴全部安排好，我跟著走（例如只要告訴我集合時間和地點）", "跟隨型"],
        ],
    },
    {
        tag: "TIME & PATIENCE",
        title: "如果旅伴遲到 30 分鐘，你會？",
        hint: "請想像這 30 分鐘可能讓你們錯過預約或班次，連帶壓縮後面的行程。",
        answers: [
            ["直接提醒他，之後要準時（例如說明再遲到就會錯過下一班車，後面景點也會被迫取消）", "明確型"],
            ["先等一下，但心裡會不爽（例如嘴上說沒關係，心裡開始計算後面要刪掉哪些行程）", "在意型"],
            ["沒關係，自己先逛附近（例如先找咖啡店等，後面的景點再視情況調整）", "彈性型"],
            ["覺得旅行不用看時間（例如錯過預約就改去別的地方，不把它當成問題）", "隨意型"],
        ],
    },
    {
        tag: "MONEY MATTERS",
        title: "旅費你希望怎麼處理？",
        hint: "請想像你們正在討論住宿、交通和每天的花費。",
        answers: [
            ["每筆支出都記錄，最後精準平分（例如門票、餐費和飲料都各自記帳）", "精準分帳型"],
            ["大筆支出先共同確認，小額用輪流或大概平衡（例如住宿先講好，咖啡不用立刻拆帳）", "事前共識型"],
            ["為了舒適和體驗可以提高預算（例如願意多花錢住好一點或吃想吃的餐廳）", "品質優先型"],
            ["先設定總預算，超過就不考慮（例如改住遠一點、少搭計程車或減少付費行程）", "預算控制型"],
        ],
    },
    {
        tag: "FOOD OPINION",
        title: "吃飯時間到了，而且每個人都有很想吃的東西，你會怎麼辦？",
        hint: "請想像大家都想吃不同餐廳，但晚餐時間和體力有限。",
        answers: [
            ["一定一起吃飯，大家一起投票，少數服從多數（例如比較餐廳後共同決定一間）", "共同決策型"],
            ["這餐配合一個人，下餐再換另一個人選（例如今天吃麵，明天吃燒肉）", "輪流配合型"],
            ["各自去吃想吃的，約好時間和地點再會合（例如吃完一起去下一個景點）", "分開用餐型"],
            ["直接選一個自己最想吃的，希望大家一起配合（例如不想為了投票放棄原本最想吃的店）", "主導選擇型"],
        ],
    },
    {
        tag: "PERSONAL SPACE",
        title: "連續旅行的期間，你會需要獨處時間嗎？",
        hint: "請想像白天一起旅行，晚上回到住宿後的相處方式。",
        answers: [
            ["白天和晚上都一起行動、一起休息（例如從早餐到睡前都不分開）", "全程同行型"],
            ["白天一起走，晚上各自保留一小段時間（例如各自滑手機或放空半小時）", "短暫充電型"],
            ["白天也需要半天或一天各自行動（例如安排一整段自由活動）", "高度獨立型"],
            ["白天可以一起行動，但住宿要有明確的個人空間（例如分房或各自有安靜的房間）", "住宿分開型"],
        ],
    },
    {
        tag: "INTEREST & EFFORT",
        title: "如果景點興趣不高，而且需要爬山或交通不便，你會怎麼做？",
        hint: "請想像這個景點需要額外花時間與體力才能抵達。",
        answers: [
            ["只要旅伴真的重視，就一起完成這個景點（先確認體力、路線和回程時間）", "陪伴完成型"],
            ["旅伴想去就直接跟，不特別研究細節（不管路遠、要爬山或交通多麻煩，都一定陪朋友去）", "挺朋友到底型"],
            ["自己不去這個景點，改安排輕鬆的地方，之後再和旅伴會合（各自走自己的行程）", "各自活動型"],
            ["兩個人都不去，改成交通方便、體力負擔較低的景點（一起換方案）", "共同替代型"],
        ],
    },
    {
        tag: "SLOW TRAVEL",
        title: "如果目的地沒有知名景點，只適合沿街散策，你能接受嗎？",
        hint: "例如逛老街、看地方店家、喝咖啡，不追景點清單。",
        answers: [
            ["可以，而且會把散策本身當成這趟旅行的主要行程（慢慢走一整天也沒問題）", "深度散策型"],
            ["可以，但希望安排一兩個明確亮點（例如散策中穿插一間特色店）", "平衡型"],
            ["只能接受短時間散策，不希望整天都沒有明確目的（例如半天後要安排其他活動）", "有限接受型"],
            ["不太能接受，旅行應該要有值得去的景點（例如希望每天至少有一個主景點）", "目的型"],
        ],
    },
    {
        tag: "INTEREST GAP",
        title: "如果旅伴對某個景點沒興趣，你會怎麼處理？",
        hint: "例如你很想去，但對方覺得「看起來還好」。",
        answers: [
            ["一起討論，找出兩個人都能接受的方式（例如縮短停留，再安排對方喜歡的地方）", "協調型"],
            ["你去你的，他去附近想去的地方（例如約好一個時間和地點再會合）", "分開型"],
            ["先陪對方去，再換一個他有興趣的景點（例如這站配合你、下一站配合他）", "輪流型"],
            ["既然他沒興趣，就直接刪掉這個景點（例如改去兩個人都想去的地方）", "配合型"],
        ],
    },
    {
        tag: "ACCOMMODATION",
        title: "你對旅行住宿的要求，最接近哪一種？",
        hint: "請想像要連續住兩晚，選最不能妥協的條件。",
        answers: [
            ["乾淨、安全就可以，其他不用太講究（例如房間小一點也沒關係）", "實用型"],
            ["地點和交通方便最重要（例如下車後能快速到住宿）", "便利型"],
            ["價格優先，能省就省（例如願意住遠一點或接受基本設備）", "省錢型"],
            ["舒適、安靜，而且需要明確的個人空間（例如希望有好的床、隔音或獨立房間）", "品質型"],
        ],
    },
    {
        tag: "SHARED SPACE",
        title: "如果旅伴不整理房間、東西到處亂放，你會怎麼處理？",
        hint: "請想像你們連續住幾晚，而且需要共用房間空間。",
        answers: [
            ["直接提醒，希望共同維持整潔（請對方把行李和衣物收好）", "直接溝通型"],
            ["先忍耐，真的影響到自己才開口（東西放到你的床位才提醒）", "界線型"],
            ["自己整理，但心裡會累積不滿（為了不影響行程先收好）", "承擔型"],
            ["各自管理自己的區域，不特別干涉（只要沒有弄亂你的空間就好）", "分區型"],
        ],
    },
    {
        tag: "CONFLICT MODE",
        title: "如果你們因為行程安排吵架，你通常會怎麼做？",
        hint: "請想像兩個人都很想去不同的地方。",
        answers: [
            ["先停下來溝通，找出都能接受的方案（重新分配景點或各自活動）", "協調型"],
            ["先冷靜一段時間，之後再討論（各自休息，晚點再談）", "冷靜型"],
            ["直接配合對方，避免爭執繼續（取消自己想去的景點）", "退讓型"],
            ["暫時各走各的，等情緒過後再說（約好晚點在住宿碰面）", "分開冷靜型"],
        ],
    },
    {
        tag: "THE DEALBREAKER",
        title: "以下哪一種旅伴行為，最可能讓你不想再一起旅行？",
        hint: "請選最具體、最難接受的一種情況。",
        answers: [
            ["行程已約好，卻常常臨時遲到或臨時改時間（例如讓大家錯過預約或班次）", "時間失信"],
            ["事前完全不參與討論，到了現場卻否定已安排好的行程（例如一直說「早知道不要來」）", "事後批評"],
            ["每一筆小額花費都要反覆計算，讓整趟旅程一直在對帳（例如連一瓶水也要立刻拆帳）", "過度計較"],
            ["自己不查交通、不做決定，出問題時卻把責任推給別人（例如迷路後只怪別人沒帶路）", "逃避責任"],
        ],
    },
];
let current = 0,
    score = 0,
    choices = [];
const $ = (id) => document.getElementById(id);
const myRankings = [
    [1, 0, 2, 3],
    [1, 0, 3, 2],
    [1, 2, 0, 3],
    [1, 2, 0, 3],
    [1, 0, 2, 3],
    [3, 2, 1, 0],
    [0, 2, 1, 3],
    [0, 1, 2, 3],
    [1, 0, 2, 3],
    [[0, 1], [0, 1], 3, 2],
    [3, 1, 2, 0],
    [1, 0, 2, 3],
    [1, 0, 2, 3],
];
function answerScore(answer, ranking) {
    const position = ranking.findIndex((group) => (Array.isArray(group) ? group.includes(answer) : group === answer));
    return position < 0 ? 1 : 10 - position * 3;
}
function renderQuestion() {
    const q = questions[current],
        pct = (current / questions.length) * 100;
    $("question-number").textContent = `TRAVEL TEST · QUESTION ${String(current + 1).padStart(2, "0")} / ${questions.length}`;
    $("progress-text").textContent = `${Math.round(pct)}%`;
    $("progress-bar-fill").style.width = `${pct}%`;
    $("question-tag").textContent = q.tag;
    $("question-title").textContent = q.title;
    $("question-hint").textContent = q.hint;
    $("answers").innerHTML = q.answers
        .map((a, i) => {
            const parts = a[0].split("（");
            const label = parts[0].trim();
            const example = parts[1] ? parts[1].replace(/）$/, "").trim() : "";
            return `<button class="answer" data-index="${i}"><span class="answer-number">0${i + 1}</span><span class="answer-copy"><strong>${label}</strong>${example ? `<small class="answer-example" style="display:block;color:var(--muted);font-size:calc(1em - 2px);line-height:1.45;margin-top:4px">${example}</small>` : ""}</span></button>`;
        })
        .join("");
    document.querySelectorAll(".answer").forEach((b) => b.addEventListener("click", () => selectAnswer(+b.dataset.index)));
    $("back-btn").textContent = current === 0 ? "← 回首頁" : "← 上一題";
    $("next-btn").textContent = current === questions.length - 1 ? "查看結果 →" : "下一題 →";
    updateSelection();
}
function selectAnswer(i) {
    choices[current] = i;
    updateSelection();
}
function updateSelection() {
    document.querySelectorAll(".answer").forEach((button) => {
        const selected = +button.dataset.index === choices[current];
        button.classList.toggle("selected", selected);
        button.setAttribute("aria-pressed", String(selected));
    });
    $("next-btn").disabled = choices[current] === undefined;
}
function nextQuestion() {
    if (choices[current] === undefined) return;
    if (current < questions.length - 1) {
        current++;
        renderQuestion();
    } else showResult();
}
function showResult() {
    score = choices.reduce((total, choice, index) => total + answerScore(choice, myRankings[index]), 0);
    const final = Math.min(100, Math.max(0, Math.round((score / (questions.length * 10)) * 100)));
    $("quiz-screen").classList.add("hidden");
    $("result-screen").classList.remove("hidden");
    $("score").textContent = final;
    $("score").style.color = final < 60 ? "var(--coral)" : "";
    let result =
        final >= 86
            ? {
                  k: "TRAVEL GOLDEN DUO",
                  t: "很適合一起旅行。",
                  d: "你們在旅行節奏、規劃方式和突發狀況上的差異很小。這趟可以放心出發，只要維持出發前把重要支出講清楚的習慣。",
                  s: "大多數偏好一致",
                  trip: "多日自由行、鐵道沿線散策、城市深度探索、自然景觀慢旅行",
                  warn: "出發前確認分工與重要支出",
              }
            : final >= 60
              ? {
                    k: "GOOD WITH RULES",
                    t: "可以一起旅行，但要先講好規則。",
                    d: "你們有不少默契，但在作息、空間或行程責任上可能不同。出發前把誰負責安排、預算和自由時間講清楚，會順很多。",
                    s: "部分偏好相近",
                    trip: "週末城市小旅行、溫泉住宿放鬆、美食主題旅行、保留自由時間的定點度假",
                    warn: "先講好預算、自由時間與誰負責規劃",
                }
              : {
                    k: "TEST BEFORE TRIP",
                    t: "建議先從短途開始。",
                    d: "你們的旅行習慣有幾個明顯落差，尤其要注意行程責任與臨時變動。先用一日遊或兩天一夜測試，不要第一次就安排太滿。",
                    s: "有幾個重要差異",
                    trip: "近郊一日遊、老街半日散策、展覽與咖啡小旅行、單一景點的兩天一夜",
                    warn: "先確認遇到分歧時怎麼決定",
                };
    $("result-kicker").textContent = result.k;
    $("result-title").textContent = result.t;
    $("result-description").textContent = result.d;
    const preferenceAreas = ["行程安排", "交通與沿線散策", "時間觀念", "旅費與預算", "用餐決策", "個人空間", "景點與體力取捨", "慢旅行節奏", "興趣不同時的安排", "住宿條件", "房間整潔", "衝突處理", "旅伴行為底線"];
    const matchCounts = [0, 0, 0, 0];
    const matchLabels = ["偏好一致", "偏好接近", "需要協調", "差異較大"];
    $("preference-rows").innerHTML = questions.map((question, index) => {
        const selected = choices[index];
        const level = (10 - answerScore(selected, myRankings[index])) / 3;
        matchCounts[level]++;
        const preferred = question.answers.filter((answer, answerIndex) => answerScore(answerIndex, myRankings[index]) === 10).map((answer) => answer[1]).join("／");
        return `<tr><th scope="row">${preferenceAreas[index]}</th><td>${question.answers[selected][1]}</td><td>${preferred}</td><td class="match-level-${level}">${matchLabels[level]}</td></tr>`;
    }).join("");
    $("detail-sync").textContent = `一致 ${matchCounts[0]} 項、接近 ${matchCounts[1]} 項、需協調 ${matchCounts[2]} 項、差異較大 ${matchCounts[3]} 項`;
    $("detail-trip").textContent = result.trip;
    $("detail-warning").textContent = result.warn;
    const advice = {
        "ITINERARY STYLE": "行程安排：先講好哪些時間和景點必須照表走，哪些地方可以臨時調整。",
        "SCENIC ROUTE": "沿線行程：先確認每站停留時間與錯過班次後的備案。",
        "TIME & PATIENCE": "時間觀念：先約定遲到多久要通知，以及是否需要刪減後續行程。",
        "MONEY MATTERS": "旅費分配：出發前確認哪些支出要平分、哪些可以輪流或彈性處理。",
        "FOOD OPINION": "吃飯決策：先約定投票、輪流選，或是否接受分開用餐。",
        "PERSONAL SPACE": "個人空間：確認白天是否一起走，以及住宿時是否需要獨立房間或安靜時間。",
        "INTEREST & EFFORT": "景點取捨：確認誰想去時另一方是否願意陪同，以及體力或交通不便時的替代方案。",
        "SLOW TRAVEL": "散策節奏：先講好能接受整天散策，還是需要安排明確景點或其他活動。",
        "INTEREST GAP": "興趣不同：討論是否輪流配合、分開行動，或直接刪除其中一個景點。",
        ACCOMMODATION: "住宿條件：確認乾淨、交通、價格與個人空間中，彼此不能妥協的是哪一項。",
        "SHARED SPACE": "房間整潔：先講好行李放置、共用區域和誰負責整理。",
        "CONFLICT MODE": "衝突處理：先約定爭執時要暫停多久，以及何時回來把事情談完。",
        "THE DEALBREAKER": "責任界線：出發前確認誰負責查交通、安排行程，以及出問題時怎麼一起處理。",
    };
    const points = questions.map((q, i) => (answerScore(choices[i], myRankings[i]) < 10 ? advice[q.tag] : null)).filter(Boolean);
    $("attention-list").innerHTML = points.length
        ? points.map((point) => `<li>${point}</li>`).join("")
        : "<li>目前沒有明顯需要特別協調的項目，可以直接討論旅行細節。</li>";
    window.scrollTo({ top: 0, behavior: "smooth" });
}
/* 旅遊守則暫停使用，恢復 HTML 時一併解除此段註解。
function openRules() {
    if (!$("rules-dialog").open) $("rules-dialog").showModal();
}
function closeRules() {
    $("rules-dialog").close();
}
$("rules-btn").addEventListener("click", openRules);
$("rules-close-btn").addEventListener("click", closeRules);
$("rules-done-btn").addEventListener("click", closeRules);
$("rules-dialog").addEventListener("close", () => $("rules-btn").focus({ preventScroll: true }));
*/
function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
    const chars = [...text];
    let line = "";
    for (const char of chars) {
        const test = line + char;
        if (ctx.measureText(test).width > maxWidth && line) {
            ctx.fillText(line, x, y);
            line = char;
            y += lineHeight;
        } else line = test;
    }
    if (line) ctx.fillText(line, x, y);
    return y + lineHeight;
}
async function copyResultImage() {
    const canvas = document.createElement("canvas");
    canvas.width = 1200;
    canvas.height = 900;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#101525";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ff765e";
    ctx.font = '500 22px "DM Mono", sans-serif';
    ctx.fillText("TRIP COMPATIBILITY REPORT", 80, 82);
    ctx.fillStyle = "#f8f5ee";
    ctx.font = '700 54px "Noto Sans TC", sans-serif';
    ctx.fillText("旅伴合拍度測試", 80, 160);
    ctx.fillStyle = "#b8f5d0";
    ctx.font = '500 150px "DM Mono", sans-serif';
    ctx.fillText(`${$("score").textContent}`, 80, 335);
    ctx.fillStyle = "#9ba1b4";
    ctx.font = '500 24px "DM Mono", sans-serif';
    ctx.fillText("/ 100", 360, 330);
    ctx.fillStyle = "#f4d35e";
    ctx.font = '500 22px "DM Mono", sans-serif';
    ctx.fillText($("result-kicker").textContent, 80, 390);
    ctx.fillStyle = "#f8f5ee";
    ctx.font = '700 42px "Noto Sans TC", sans-serif';
    let y = 465;
    y = wrapCanvasText(ctx, $("result-title").textContent, 80, y, 1040, 58);
    ctx.fillStyle = "#c6cad5";
    ctx.font = '400 24px "Noto Sans TC", sans-serif';
    y = wrapCanvasText(ctx, $("result-description").textContent, 80, y + 12, 1040, 38);
    ctx.fillStyle = "#9ba1b4";
    ctx.font = '400 22px "Noto Sans TC", sans-serif';
    y += 28;
    for (const item of [$("detail-sync").textContent, $("detail-trip").textContent, $("detail-warning").textContent]) {
        y = wrapCanvasText(ctx, `• ${item}`, 80, y, 1040, 34);
    }
    const blob = await new Promise((resolve) => canvas.toBlob(resolve, "image/png"));
    if (!blob) throw new Error("canvas export failed");
    if (navigator.clipboard && window.ClipboardItem) {
        await navigator.clipboard.write([new ClipboardItem({ "image/png": blob })]);
        $("share-status").textContent = "結果圖片已複製，可以分享給你的旅伴。";
    } else throw new Error("image clipboard unavailable");
}
function start() {
    current = 0;
    score = 0;
    choices = [];
    $("share-status").textContent = "可以把這份結果分享給一起旅行的朋友。";
    $("share-btn").textContent = "複製結果圖片";
    $("intro-screen").classList.add("hidden");
    $("result-screen").classList.add("hidden");
    $("quiz-screen").classList.remove("hidden");
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "smooth" });
}
$("start-btn").addEventListener("click", start);
$("restart-btn").addEventListener("click", start);
$("next-btn").addEventListener("click", nextQuestion);
$("back-btn").addEventListener("click", () => {
    if (current > 0) {
        current--;
        renderQuestion();
    } else {
        $("quiz-screen").classList.add("hidden");
        $("intro-screen").classList.remove("hidden");
        window.scrollTo({ top: 0, behavior: "smooth" });
    }
});
$("share-btn").addEventListener("click", async () => {
    try {
        await copyResultImage();
    } catch {
        $("share-status").textContent = "目前瀏覽器不支援直接複製圖片，請改用系統截圖功能。";
    }
});
document.addEventListener("keydown", (e) => {
    if (!$("quiz-screen").classList.contains("hidden") && ["1", "2", "3", "4"].includes(e.key)) selectAnswer(+e.key - 1);
});
