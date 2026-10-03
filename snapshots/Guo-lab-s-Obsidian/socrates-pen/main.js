var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/main.ts
var main_exports = {};
__export(main_exports, {
  default: () => SocratesPenPlugin
});
module.exports = __toCommonJS(main_exports);
var import_obsidian6 = require("obsidian");

// src/apierror.ts
var ApiError = class extends Error {
  constructor(status, message, code = "") {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.code = code;
  }
};
function isGone(e) {
  return e instanceof ApiError && e.status === 404 && e.code === "session_gone";
}

// src/i18n/index.ts
var import_obsidian = require("obsidian");

// src/i18n/zh.ts
var NF = new Intl.NumberFormat("zh-CN");
var n = (v) => typeof v === "number" ? NF.format(v) : "?";
var k = (v) => {
  if (typeof v !== "number" || !Number.isFinite(v)) return "?";
  const a = Math.abs(v);
  if (a < 1e3) return String(Math.round(v));
  return `${(v / 1e3).toFixed(a >= 1e5 ? 0 : 1)}k`;
};
var TYPE_ZH = {
  ASK: "\u5728\u95EE",
  VERIFY: "\u6C42\u8BC1",
  DEMAND: "\u8981\u4E1C\u897F",
  REJECT: "\u9876\u56DE",
  GAP: "\u76F2\u533A",
  DECLARE: "\u8BF4\u61C2\u4E86",
  META: "\u64CD\u4F5C"
};
var VERIFY_ZH = {
  confirmed: "\u88AB\u786E\u8BA4",
  corrected: "\u88AB\u7EA0\u6B63",
  unclear: "\u6CA1\u5224\u5B9A"
};
var LIMIT_TEXT_ZH = {
  probe_max_per_window: ["\u6BCF\u5C0F\u65F6\u6700\u591A\u6DF1\u6316\u51E0\u6B21", "\u8DE8\u4F1A\u8BDD\u7D2F\u8BA1\u3002\u5F00\u4E00\u5806\u65B0\u4F1A\u8BDD\u4E5F\u7ED5\u4E0D\u8FC7\u5B83\u3002"],
  probe_every_n_rounds: [
    "\u4E24\u6B21\u6DF1\u6316\u81F3\u5C11\u9694\u51E0\u8F6E",
    "\u586B 0 \u5C31\u662F\u6BCF\u4E00\u8F6E\u5B9E\u8D28\u56DE\u590D\u90FD\u63A2\uFF08\u4E5F\u662F\u73B0\u5728\u7684\u884C\u4E3A\uFF09\u3002"
  ],
  probe_keep_per_run: [
    "\u6BCF\u6B21\u6DF1\u6316\u6700\u591A\u5B58\u51E0\u6761",
    "\u6CE8\u610F\uFF1A\u6BCF\u8F6E\u4ECD\u7136\u53EA\u653E\u51FA 1 \u6761\uFF0C\u591A\u5B58\u7684\u6392\u961F\u7B49\u4E0B\u4E00\u8F6E\uFF0C\u6512\u8FC7 6 \u8F6E\u5C31\u4E22\u3002\u6240\u4EE5\u8C03\u5927\u4E3B\u8981\u662F\u5728\u589E\u5927\u4E22\u5F03\u5806\u3002"
  ],
  max_tokens_chat: [
    "\u6BCF\u8F6E\u5BF9\u8BDD\u7684 token \u4E0A\u9650",
    "0 = \u4E0D\u9650\u3002\u8FD9\u662F\u5DE5\u5177\u5FAA\u73AF\u7684\u9884\u7B97\uFF1A\u5230\u7EBF\u4E4B\u540E\u82CF\u683C\u62C9\u5E95\u8FD8\u4F1A\u7528\u624B\u4E0A\u7684\u6750\u6599\u51FA\u4E00\u6B21\u7B54\u6848\uFF0C\u90A3\u4E00\u67AA\u4E0D\u53D7\u9650\u3002\u6240\u4EE5\u5B9E\u9645\u82B1\u9500\u4F1A\u8D85\u51FA\u4F60\u586B\u7684\u6570\u2014\u2014\u8D85\u591A\u5C11\u53D6\u51B3\u4E8E\u8FD9\u4E00\u8F6E\u5DF2\u7ECF\u7FFB\u4E86\u591A\u5C11\u4E1C\u897F\uFF0C\u4E0D\u662F\u4E00\u4E2A\u56FA\u5B9A\u6BD4\u4F8B\u3002"
  ],
  max_tokens_probe: ["\u5355\u6B21\u540E\u53F0\u6DF1\u6316\u7684 token \u4E0A\u9650", "0 = \u4E0D\u9650\u3002\u586B\u5F97\u6BD4\u4E00\u6B21\u6DF1\u6316\u7684\u5F00\u9500\u8FD8\u5C0F\uFF0C\u5C31\u4E00\u6B21\u90FD\u4E0D\u63A2\u3002"],
  max_tokens_cross_book: [
    "\u7FFB\u522B\u7684\u6559\u6750\u7684 token \u4E0A\u9650",
    "0 = \u4E0D\u9650\u3002\u5B83\u7BA1\u7684\u662F\u300C\u8FD9\u4E00\u8F6E\u5DF2\u7ECF\u70E7\u5230\u591A\u5C11\u5C31\u522B\u518D\u5F00\u65B0\u4E66\u300D\u2014\u2014\u522B\u7684\u4E66\u8BFB\u8FDB\u6765\u4E4B\u540E\u6BCF\u8F6E\u90FD\u8981\u91CD\u53D1\uFF0C\u4EE3\u4EF7\u662F\u590D\u5229\u3002"
  ],
  compact_chat_tokens: [
    "\u4E3B\u5BF9\u8BDD\u81EA\u52A8\u6298\u8FDB\u6458\u8981\u7684\u7A97\u53E3",
    "0 = \u4E0D\u81EA\u52A8\u6298\uFF08\u547D\u4EE4\u9762\u677F\u4ECD\u53EF\u624B\u52A8\u6298\uFF09\u3002\u5230\u4E86\u5C31\u5728\u4E0B\u4E00\u8F6E\u5F00\u573A\u628A\u65E7\u56DE\u5408\u6536\u6210\u5E26\u884C\u53F7\u7684\u6458\u8981\uFF0C\u4FA7\u680F\u65E7\u6C14\u6CE1\u8FD8\u5728\u3002\u8FD9\u4E0D\u662F\u82B1\u94B1\u786C\u4E0A\u9650\uFF0C\u4E5F\u4E0D\u662F\u4E22\u6389\u65E7\u56DE\u5408\u3002"
  ],
  max_tool_rounds: ["\u82CF\u683C\u62C9\u5E95\u4E00\u8F6E\u6700\u591A\u7FFB\u51E0\u6B21\u4E66", "\u7FFB\u672C\u518C\u4E0D\u989D\u5916\u6536\u8D39\uFF0C\u8DE8\u6559\u6750\u53E6\u6709\u4E0B\u9762\u4E24\u9053\u95F8\u3002"],
  fast_context_tokens: [
    "Fast Mode \u7ED9\u5FEB\u6A21\u578B\u7684\u4E0A\u4E0B\u6587\u4E0A\u9650",
    "\u53EA\u5728 Fast Mode \u5F00\u7740\u65F6\u751F\u6548\u3002\u5FEB\u6A21\u578B\u7684\u7A97\u53E3\u662F\u8F93\u5165\u52A0\u8F93\u51FA\u5408\u8BA1 131072\uFF0C\u6263\u6389\u8F93\u51FA\u540E\u8F93\u5165\u6700\u591A 114688\uFF1B\u8D85\u4E86\u4F1A\u88AB\u8282\u70B9\u5F53\u573A\u62D2\u6389\uFF0C\u6240\u4EE5\u8FD9\u91CC\u9ED8\u8BA4\u7559\u51FA\u4F59\u91CF\u3002\u538B\u4E0D\u4E0B\u53BB\u65F6\u8FD9\u4E00\u8F6E\u81EA\u52A8\u9000\u56DE\u57FA\u5EA7\u6A21\u578B\uFF0C\u5BF9\u8BDD\u4E0D\u4F1A\u65AD\u30020 = \u4E0D\u538B\uFF08\u4E0D\u5EFA\u8BAE\uFF09\u3002"
  ],
  cross_book_chars: ["\u4E00\u8F6E\u91CC\u7FFB\u522B\u7684\u6559\u6750\u7684\u5B57\u7B26\u9884\u7B97", "\u8BFB\u5F53\u524D\u8FD9\u672C\u4E0D\u8BA1\uFF0C\u672C\u804C\u9605\u8BFB\u4E00\u6B21\u90FD\u4E0D\u53D7\u5F71\u54CD\u3002"],
  cross_book_reads: ["\u4E00\u8F6E\u91CC\u7FFB\u522B\u7684\u6559\u6750\u7684\u6B21\u6570\u4E0A\u9650", "\u5149\u5C01\u5B57\u8282\u5C01\u4E0D\u4F4F\uFF1A\u6A21\u578B\u6BCF\u6B21\u53EA\u8BFB\u4E00\u884C\u65F6\uFF0C\u5B57\u8282\u9884\u7B97\u6C38\u8FDC\u7528\u4E0D\u5B8C\u3002"],
  probe_max_per_session: ["\u6BCF\u573A\u5BF9\u8BDD\u6700\u591A\u6DF1\u6316\u51E0\u6B21", "\u6321\u4E0D\u4F4F\u300C\u5F00\u4E00\u5806\u65B0\u4F1A\u8BDD\u300D\uFF0C\u90A3\u9760\u4E0A\u9762\u7684\u6BCF\u5C0F\u65F6\u914D\u989D\u3002"],
  probe_pending_cap: ["\u624B\u91CC\u6512\u591F\u51E0\u6761\u6CA1\u629B\u5C31\u5148\u505C\u63A2", "\u7701\u7684\u4E0D\u662F\u9891\u7387\uFF0C\u662F\u6D6A\u8D39\u3002"],
  probe_max_reads: ["\u4E00\u6B21\u6DF1\u6316\u6700\u591A\u5B9A\u5411\u8BFB\u51E0\u6BB5\u6B63\u6587", "\u8BFB\u53D6\u7531\u4EE3\u7801\u6267\u884C\uFF0C\u4E0D\u7ED9\u6A21\u578B\u81EA\u4E3B\u5FAA\u73AF\u7684\u673A\u4F1A\u3002"],
  probe_read_lines: ["\u6BCF\u6BB5\u6700\u591A\u8BFB\u591A\u5C11\u884C", ""],
  probe_timeout_s: [
    "\u6DF1\u6316\u5355\u6B21\u8C03\u7528\u8D85\u65F6\uFF08\u79D2\uFF09",
    "\u8C03\u5927\u4E4B\u540E\u6DF1\u6316\u53EF\u80FD\u8DD1\u5230\u4F60\u5F53\u8F6E\u770B\u4E0D\u89C1\u7ED3\u679C\uFF1B\u9898\u4E0D\u4F1A\u4E22\uFF0C\u4F1A\u5728\u4E0B\u4E00\u8F6E\u642D\u4FBF\u8F66\u629B\u51FA\u6765\u3002"
  ],
  probe_min_reply_chars: ["\u56DE\u590D\u81F3\u5C11\u591A\u5C11\u5B57\u624D\u503C\u5F97\u6DF1\u6316", "\u592A\u77ED\u7684\u591A\u534A\u662F\u4E00\u53E5\u53CD\u95EE\uFF0C\u4ECE\u90A3\u513F\u6316\u4E0D\u51FA\u597D\u95EE\u9898\u3002"],
  probe_concurrency: [
    "\u540C\u65F6\u6700\u591A\u51E0\u4E2A\u6DF1\u6316\u5728\u8DD1",
    "\u8FD9\u662F\u6574\u53F0 sidecar \u7684\u6570\uFF0C\u4E0D\u662F\u6BCF\u672C\u4E66\u7684\u3002\u540C\u65F6\u5F00\u7740\u591A\u4E2A\u5E93\u65F6\u65B9\u5411\u662F\u53CD\u7684\uFF1A\u5224\u636E\u662F\u300C\u5168\u5C40\u5728\u98DE\u6570 < \u4F60\u586B\u7684\u6570\u300D\uFF0C\u6240\u4EE5\u628A\u5B83\u8C03\u5C0F\u53CD\u800C\u66F4\u5BB9\u6613\u88AB\u53E6\u4E00\u4E2A\u5E93\u7684\u6DF1\u6316\u5360\u6EE1\u4F4D\u5B50\u3002\u60F3\u7701\u94B1\u8BF7\u8C03\u4E0A\u9762\u7684\u6BCF\u5C0F\u65F6\u6B21\u6570\u6216 token \u4E0A\u9650\u3002"
  ]
};
var zh = {
  bigBangEarlier: "\u4E4B\u524D\u7684\u4FEE\u6539",
  errBigBangUpgrade: "\u8BF7\u5148\u66F4\u65B0\u5E76\u542F\u52A8\u652F\u6301 Big Bang \u7684 sidecar\u3002",
  bigBangReady: "\u4E00\u4E2A\u65B0\u7684\u601D\u8003\u65B9\u5411",
  bigBangPrompt: "\u56F4\u7ED5\u8FD9\u6BB5\u7B14\u8BB0\u63D0\u4E00\u4E2A\u65B0\u95EE\u9898\u3002\u8FD9\u573A\u5BF9\u8BDD\u4F1A\u72EC\u7ACB\u8FDB\u884C\u3002",
  bigBangAdd: "\u589E\u52A0 Agent",
  bigBangLimit: "\u6700\u591A\u540C\u65F6\u6253\u5F00 4 \u4E2A Agent",
  bigBangTitle: "Big Bang \xB7 \u5B9E\u9A8C\u529F\u80FD",
  bigBangClose: "\u5173\u95ED\u6B64 Agent\uFF08\u505C\u6B62\u4EFB\u52A1\uFF0C\u4FDD\u7559\u5386\u53F2\uFF09",
  bigBangStop: "\u505C\u6B62\u6B64\u4EFB\u52A1",
  bigBangStopping: "\u6B63\u5728\u505C\u6B62\u2026",
  bigBangStopped: "\u5DF2\u505C\u6B62",
  bigBangAgent: (n3) => `Agent ${n3}`,
  errBigBangConflict: "\u7B14\u8BB0\u5DF2\u53D8\u5316\uFF0CAgent \u9700\u8981\u91CD\u8BFB\u540E\u91CD\u65B0\u7533\u8BF7\u5BA1\u6279\u3002",
  bigBangUndo: "\u64A4\u9500\u5171\u4EAB\u7B14\u8BB0\u7684\u6700\u8FD1\u4E00\u6B21\u4FEE\u6539\uFF08\u5305\u62EC\u5176\u4ED6 Agent \u7684\u4FEE\u6539\uFF09",
  bigBangRedo: "\u91CD\u505A\u5171\u4EAB\u7B14\u8BB0\u7684\u4FEE\u6539",
  // ── 品牌 / 视图元数据 ──
  appName: "\u82CF\u683C\u62C9\u5E95",
  viewTitle: "\u82CF\u683C\u62C9\u5E95",
  // ── 命令 / ribbon（Obsidian 会自动加「Socrates: 」前缀，这里别再写一遍）──
  ribbonTooltip: "\u6253\u5F00\u82CF\u683C\u62C9\u5E95",
  cmdAskSelection: "\u7528\u5F53\u524D\u9009\u533A\u63D0\u95EE",
  cmdOpenPanel: "\u6253\u5F00\u9762\u677F",
  cmdCompactSession: "\u628A\u8FD9\u573A\u5BF9\u8BDD\u6298\u8FDB\u6458\u8981",
  // ── 底座按钮 ──
  btnUseSelection: "\u7528\u5F53\u524D\u9009\u533A",
  btnAsk: "\u95EE",
  askPlaceholder: "\u81EA\u5DF1\u95EE\u4E00\u53E5\u2026",
  askPlaceholderVision: "\u81EA\u5DF1\u95EE\u4E00\u53E5\uFF0C\u6216\u7C98\u8D34\u56FE\u7247\u2026",
  tipUseSelection: "\u5728\u7B14\u8BB0\u91CC\u5212\u4E00\u6BB5\uFF0C\u518D\u70B9\u8FD9\u91CC\u4EA4\u7ED9\u82CF\u683C\u62C9\u5E95",
  // ── 品牌条工具按钮 ──
  tipNewSession: "\u53E6\u8D77\u4E00\u573A\uFF0C\u4E22\u6389\u8FD9\u573A\u7684\u6A21\u578B\u8BB0\u5FC6\u548C\u9009\u533A",
  tipCompact: "\u628A\u66F4\u65E9\u7684\u56DE\u5408\u6298\u8FDB\u6458\u8981\u3002\u4FA7\u680F\u65E7\u6C14\u6CE1\u8FD8\u5728\uFF0C\u4E0B\u6B21\u8BF7\u6C42\u4E0D\u518D\u5E26\u5168\u6587\u3002",
  compactMarker: "\u4E0A\u9762\u51E0\u8F6E\u5DF2\u7ECF\u6298\u8FDB\u6458\u8981",
  kickerCompact: "\u6458\u8981",
  tipFastOff: "Fast Mode \u5173\u7740\u3002\u5F00\u4E86\u4E4B\u540E\uFF0C\u53EA\u95EE\u4E0D\u6539\u7684\u90A3\u4E9B\u8F6E\u6B21\u4EA4\u7ED9\u5FEB\u6A21\u578B\u7B54\u3002",
  tipFastOn: "Fast Mode \u5F00\u7740\uFF1A\u53EA\u8BFB\u7684\u8F6E\u6B21\u8D70\u5FEB\u6A21\u578B\u3002\u8981\u6539\u539F\u6587\u65F6\u81EA\u52A8\u6362\u56DE\u57FA\u5EA7\u6A21\u578B\u3002",
  tipFastTrimmed: (steps) => `Fast Mode \u5F00\u7740\u3002\u8FD9\u4E00\u8F6E\u4E0A\u4E0B\u6587\u8D85\u4E86\u5FEB\u6A21\u578B\u7684\u7A97\u53E3\uFF0C\u5DF2\u7ECF\u538B\u8FC7\uFF1A${steps}\u3002\u4F1A\u8BDD\u672C\u8EAB\u6CA1\u6709\u88AB\u6298\u3002`,
  kickerRoute: "\u6362\u6A21\u578B",
  noteRouteEdit: "\u8FD9\u4E00\u8F6E\u8981\u52A8\u539F\u6587\uFF0C\u5DF2\u7ECF\u6362\u56DE\u57FA\u5EA7\u6A21\u578B\u91CD\u7B54\u3002\u4E0A\u9762\u90A3\u534A\u53E5\u662F\u5FEB\u6A21\u578B\u8BF4\u7684\uFF0C\u4E0D\u7B97\u6570\u3002",
  noteRouteTooBig: "\u8FD9\u4E00\u8F6E\u7684\u4E0A\u4E0B\u6587\u538B\u4E0D\u8FDB\u5FEB\u6A21\u578B\u7684\u7A97\u53E3\uFF0C\u5DF2\u7ECF\u6362\u56DE\u57FA\u5EA7\u6A21\u578B\u91CD\u7B54\u3002",
  noteRouteNoKey: "Fast Mode \u5F00\u7740\uFF0C\u4F46\u5FEB\u6A21\u578B\u8FD8\u6CA1\u6709 API Key\uFF0C\u8FD9\u4E00\u8F6E\u8D70\u7684\u662F\u57FA\u5EA7\u6A21\u578B\u3002\u5230\u8BBE\u7F6E\u91CC\u8865\u4E0A\u5C31\u751F\u6548\u3002",
  noteRouteHostGap: "Fast Mode \u5F00\u7740\uFF0C\u4F46\u672C\u673A\u5B58\u7684\u90A3\u628A\u5FEB\u6A21\u578B\u94A5\u5319\u662F\u7ED9\u53E6\u4E00\u4E2A\u7AD9\u70B9\u7684\uFF0C\u8FD9\u4E00\u8F6E\u8D70\u7684\u662F\u57FA\u5EA7\u6A21\u578B\u3002\u5230\u8BBE\u7F6E\u91CC\uFF0C\u5728\u73B0\u5728\u8FD9\u4E2A Fast Base URL \u4E0A\u91CD\u65B0\u5B58\u4E00\u6B21\u94A5\u5319\u5C31\u597D\u3002",
  noticeFastNoKey: "Fast Mode \u5DF2\u6253\u5F00\uFF0C\u4F46\u8FD8\u6CA1\u586B\u5FEB\u6A21\u578B\u7684 API Key\uFF0C\u6240\u4EE5\u6682\u65F6\u8FD8\u662F\u8D70\u57FA\u5EA7\u6A21\u578B\u3002\u5230\u8BBE\u7F6E\u91CC\u8865\u4E0A\u5C31\u751F\u6548\u3002",
  noticeFastKeyHostMismatch: (keyHost, urlHost) => `\u5FEB\u6A21\u578B\u7684\u7AD9\u70B9\u6362\u4E86\u3002\u672C\u673A\u5B58\u7684\u90A3\u628A\u94A5\u5319\u8FD8\u662F\u7ED9 ${keyHost} \u7684\uFF0C\u4E0D\u4F1A\u62FF\u5230 ${urlHost} \u4E0A\u7528\uFF0C\u6240\u4EE5\u6BCF\u8F6E\u90FD\u4F1A\u9000\u56DE\u57FA\u5EA7\u6A21\u578B\u3002\u8BF7\u5728 ${urlHost} \u4E0A\u91CD\u65B0\u5B58\u4E00\u6B21 API Key\u3002`,
  noticeCompactEmpty: "\u8FD8\u6CA1\u6709\u53EF\u6298\u7684\u5BF9\u8BDD",
  noticeCompactPending: "\u6709\u4E00\u6B21\u7F16\u8F91\u5728\u7B49\u4F60\u5BA1\u6279\uFF0C\u5148\u70B9\u5141\u8BB8\u6216\u62D2\u7EDD\uFF0C\u518D\u6298\u6458\u8981\u3002",
  noticeCompactBusy: "\u8FD9\u573A\u5BF9\u8BDD\u8FD8\u5728\u8DD1\uFF0C\u5148\u7B49\u5B83\u7ED3\u675F\u3002",
  noticeCompactOk: "\u65E7\u56DE\u5408\u5DF2\u7ECF\u6298\u8FDB\u6458\u8981\u3002\u4FA7\u680F\u6C14\u6CE1\u8FD8\u5728\u3002",
  tipUndoEmpty: "\u8FD8\u6CA1\u6709\u53EF\u56DE\u9000\u7684\u7248\u672C\u3002\u5141\u8BB8\u4E00\u6B21\u7F16\u8F91\u540E\u624D\u4F1A\u4EAE\u3002",
  tipUndo: (count) => `\u6574\u7BC7\u7B14\u8BB0\u56DE\u5230\u4E0A\u4E00\u7248\uFF08\u8FD8\u80FD\u9000 ${count} \u6B21\uFF09`,
  tipRedoEmpty: "\u6CA1\u6709\u53EF\u91CD\u505A\u7684\u7248\u672C",
  tipRedo: (count) => `\u628A\u521A\u624D\u64A4\u9500\u7684\u5199\u56DE\u56DE\u6765\uFF08\u8FD8\u80FD\u91CD\u505A ${count} \u6B21\uFF09`,
  // ── 健康行 ──
  healthUnprobed: "sidecar \u672A\u63A2\u6D4B",
  healthOkKey: (tail, model) => `sidecar \u6B63\u5E38 \xB7 \u94A5\u5319\u5DF2\u5B58\u672C\u673A${tail ? ` \u2026${tail}` : ""} \xB7 ${model}`,
  healthOkFallback: (source, model) => `sidecar \u6B63\u5E38 \xB7 \u5F00\u53D1\u56DE\u9000 ${source} \xB7 ${model}`,
  healthNoKey: "sidecar \u5728\uFF0C\u8BF7\u5230\u8BBE\u7F6E \u2192 Socrates \u586B\u5199 API Key",
  healthDown: "\u8FDE\u4E0D\u4E0A sidecar",
  healthStale: "\u65E7\u670D\u52A1\u5360\u7740\u7AEF\u53E3\uFF0C\u5148\u5230\u8BBE\u7F6E\u91CC\u505C\u6B62\u518D\u542F\u52A8\u5347\u7EA7",
  // ── 错误气泡（v0.18.0：请求失败不再伪装成流式） ──
  errNoKey: "\u8FD8\u6CA1\u914D\u6A21\u578B\u94A5\u5319\u3002\u5230\u8BBE\u7F6E \u2192 Socrates \u586B API Key \u540E\u518D\u95EE\u3002",
  errNoVision: "\u8FD9\u4E2A\u6A21\u578B\u6CA1\u5F00\u56FE\u50CF\u7406\u89E3\u3002\u5230\u8BBE\u7F6E \u2192 Socrates \u6253\u5F00\u300C\u56FE\u50CF\u7406\u89E3\u300D\u3002\u82E5\u8282\u70B9\u6CA1\u6709\u89C6\u89C9\uFF0C\u5F00\u4E86\u4E5F\u4F1A\u88AB\u62D2\u3002",
  errVisionTooBig: "\u56FE\u7247\u592A\u5927\uFF08\u6BCF\u5F20\u6700\u591A 2MB\uFF0C\u6700\u591A 4 \u5F20\uFF09\u3002",
  errVisionTooMany: "\u4E00\u6B21\u6700\u591A\u8D34 4 \u5F20\u56FE\u3002",
  errVisionBadType: "\u53EA\u6536 png / jpeg / webp / gif\u3002",
  bubbleGoSettings: "\u53BB\u8BBE\u7F6E",
  // ── 错误 ──
  errUnreachable: (detail) => `\u8FDE\u4E0D\u4E0A sidecar\uFF08CORS / \u6CA1\u542F\u52A8 / \u7AEF\u53E3\u4E0D\u5BF9\uFF09\uFF1A${detail}`,
  errNoSelection: "\u6CA1\u8BFB\u5230\u9009\u533A\u3002\u5728\u7B14\u8BB0\u91CC\u5212\u4E00\u6BB5\u518D\u70B9\u300C\u7528\u5F53\u524D\u9009\u533A\u300D\u3002",
  // v0.12.4：会话按时间清理之后，读者手里那个 sid 可能已经不在了。
  // 不给这两句的话，读者的失败模式是「输入框能打字，一发就报错，
  // 不知道该干什么」——再点还是同一个死 sid。
  // 下面三条都不写死原因。「过了保留期」只是最常见的一种——读者手删过
  // `.pen/`、换了 sidecar、盘满写不进去，走的都是同一条 404。断言一个自己
  // 并不知道的因由，读者照着它去排查就白费一趟。
  noticeSessionArchived: "\u8FD9\u573A\u5BF9\u8BDD\u5728 sidecar \u4E0A\u5DF2\u7ECF\u627E\u4E0D\u5230\u4E86\uFF08\u591A\u534A\u662F\u8FC7\u4E86\u4FDD\u7559\u671F\u88AB\u6E05\u7406\uFF09\u3002\u5DF2\u7ECF\u7ED9\u4F60\u5F00\u4E86\u65B0\u7684\u4E00\u573A\uFF0C\u521A\u624D\u90A3\u53E5\u5DF2\u7ECF\u91CD\u65B0\u95EE\u51FA\u53BB\u4E86\u3002",
  // 换会话是**不可逆**的（历史从面板上消失、笔记已重绑到新 sid）。重发失败
  // 也必须通报——不然读者只看到一条原始报错，历史没了却一个字的解释都没有。
  noticeSessionArchivedResendFailed: "\u8FD9\u573A\u5BF9\u8BDD\u5728 sidecar \u4E0A\u5DF2\u7ECF\u627E\u4E0D\u5230\u4E86\uFF08\u591A\u534A\u662F\u8FC7\u4E86\u4FDD\u7559\u671F\u88AB\u6E05\u7406\uFF09\u3002\u5DF2\u7ECF\u7ED9\u4F60\u5F00\u4E86\u65B0\u7684\u4E00\u573A\uFF0C\u4F46\u521A\u624D\u90A3\u53E5\u6CA1\u80FD\u91CD\u65B0\u95EE\u51FA\u53BB\u2014\u2014\u539F\u56E0\u5728\u4E0B\u9762\u90A3\u6761\u9519\u8BEF\u91CC\u3002",
  noticeSessionRenewed: "\u8FD9\u7BC7\u7B14\u8BB0\u4E0A\u6B21\u90A3\u573A\u5BF9\u8BDD\u5728 sidecar \u4E0A\u5DF2\u7ECF\u627E\u4E0D\u5230\u4E86\uFF08\u591A\u534A\u662F\u8FC7\u4E86\u4FDD\u7559\u671F\u88AB\u6E05\u7406\uFF09\u3002\u5DF2\u7ECF\u7ED9\u4F60\u5F00\u4E86\u65B0\u7684\u4E00\u573A\u3002",
  bubbleSessionRenewed: "\u8FD9\u573A\u5BF9\u8BDD\u7684\u4E0A\u4E00\u6B21\u8BB0\u5F55\u5DF2\u88AB\u6E05\u7406\uFF08\u8FC7\u4FDD\u7559\u671F\uFF09\uFF0C\u8FD9\u91CC\u662F\u65B0\u5F00\u7684\u4E00\u573A\u3002\u539F\u7B14\u8BB0\u4E0A\u7684\u65E7\u5BF9\u8BDD\u82E5\u8FD8\u5728\u4FDD\u7559\u671F\u5185\uFF0C\u91CD\u65B0\u5212\u4E00\u6BB5\u5373\u53EF\u627E\u56DE\u3002",
  noticeNoteRestored: (note) => `\u5DF2\u5207\u56DE\u300A${note}\u300B\u7684\u5BF9\u8BDD\u3002\u8981\u63A5\u7740\u95EE\uFF0C\u5148\u5728\u7B14\u8BB0\u91CC\u5212\u4E00\u6BB5\u3002`,
  errSessionGone: (note) => `\u300A${note}\u300B\u4E0A\u6B21\u90A3\u573A\u5BF9\u8BDD\u5DF2\u88AB\u6E05\u7406\uFF0C\u9700\u8981\u91CD\u65B0\u5212\u4E00\u6BB5\u5F00\u65B0\u7684\u4E00\u573A\u3002`,
  // 括号里原本是「（sidecar 连不上？）」——又一句在猜因由。现在 reviveSession
  // 会把服务端那句真话留在 this.err 里，这条只在**确实不知道**为什么时才出现。
  errSessionArchivedHard: "\u8FD9\u573A\u5BF9\u8BDD\u5728 sidecar \u4E0A\u5DF2\u7ECF\u627E\u4E0D\u5230\u4E86\uFF0C\u800C\u4E14\u65B0\u4F1A\u8BDD\u4E5F\u6CA1\u5F00\u8D77\u6765\u3002",
  errApprovalArchived: "\u8FD9\u6B21\u7F16\u8F91\u6240\u5728\u7684\u4F1A\u8BDD\u5728 sidecar \u4E0A\u5DF2\u7ECF\u627E\u4E0D\u5230\u4E86\u3002\u539F\u6587\u6CA1\u6709\u88AB\u6539\u52A8\u3002\u5DF2\u7ECF\u7ED9\u4F60\u5F00\u4E86\u65B0\u7684\u4E00\u573A\uFF0C\u91CD\u65B0\u95EE\u4E00\u6B21\u5C31\u884C\u3002",
  // 审批那条路上最要紧的一句是「原文没有被改动」，`errSessionArchivedHard`
  // 里没有它。读者刚点完「同意写回」就看到会话找不到，此刻他唯一想知道的
  // 就是笔记被改了没有——不能因为新会话也没开起来就把这句省掉。
  errApprovalArchivedHard: "\u8FD9\u6B21\u7F16\u8F91\u6240\u5728\u7684\u4F1A\u8BDD\u5728 sidecar \u4E0A\u5DF2\u7ECF\u627E\u4E0D\u5230\u4E86\uFF0C\u65B0\u4F1A\u8BDD\u4E5F\u6CA1\u5F00\u8D77\u6765\u3002\u539F\u6587\u6CA1\u6709\u88AB\u6539\u52A8\u3002",
  // 追在服务端那句准确因由**后面**的一句。审批路上「原文没有被改动」不能
  // 因为让位给准确因由就整句消失——读者刚点完「同意写回」。
  // 不要写「原文没有被改动」：这句多半追在服务端那句「**原文**找不到了」
  // 后面，同一个词指同一个东西、两句表面上互相打架（找不到的东西怎么会
  // 没被改动），而这句存在的意义恰恰是让读者一眼放心。改说「你的笔记」。
  errApprovalUntouched: "\uFF08\u8FD9\u6B21\u5199\u56DE\u6CA1\u6709\u6267\u884C\uFF0C\u4F60\u7684\u7B14\u8BB0\u6CA1\u6709\u88AB\u6539\u52A8\u3002\uFF09",
  // ── 用量与花销 ──
  // 前两格是**此刻窗口占用**（诊断用），第三格才是**累计花销**。
  // 两个口径不一样，别合并。
  usage: (ctx, out) => `\u4E0A\u4E0B\u6587 ${k(ctx)} \xB7 \u56DE\u590D ${k(out)}`,
  spendTurn: (tok) => `\u672C\u8F6E ${k(tok)}`,
  spendSession: (tok) => `\u672C\u4F1A\u8BDD ${k(tok)}`,
  spendTipTotal: (tok) => `\u672C\u4F1A\u8BDD\u5171 ${k(tok)} token`,
  spendTipRow: (label, inTok, outTok) => `${label}\u3000\u8F93\u5165 ${k(inTok)} / \u8F93\u51FA ${k(outTok)}`,
  spendTipCached: (tok) => `\u5176\u4E2D\u7F13\u5B58\u547D\u4E2D ${k(tok)}\uFF08\u4FBF\u5B9C\u5F88\u591A\uFF09`,
  spendKindChat: "\u4E3B\u5BF9\u8BDD",
  spendKindProbe: "\u6DF1\u6316",
  spendKindFold: "\u5199\u56DE",
  // 不折算成钱是拍板过的：第三方端点单价不可靠、缓存命中差十倍、
  // SDK 重试那次的用量根本拿不到。乘出来的钱是假精度。
  spendTipNote: "\u53EA\u6570 token\uFF0C\u4E0D\u6298\u7B97\u6210\u94B1",
  // ── 对话气泡 ──
  kickerYou: "\u4F60",
  kickerPen: "\u82CF\u683C\u62C9\u5E95",
  kickerReadTool: "\u7FFB\u624B\u518C",
  kickerEditTool: "\u6539\u539F\u6587",
  kickerFetchTool: "\u53D6\u7F51\u9875",
  kickerSearchTool: "\u641C\u7F51\u9875",
  toolOk: "\u6210\u529F",
  toolDenied: "\u62D2\u7EDD",
  noPath: "\uFF08\u65E0\u8DEF\u5F84\uFF09",
  streamPlaceholder: "\u2026",
  emptyHint: "\u5728\u7B14\u8BB0\u91CC\u5212\u4E00\u6BB5\uFF08\u5B9E\u65F6\u9884\u89C8\u6216\u9605\u8BFB\u6A21\u5F0F\u90FD\u884C\uFF09\uFF0C\u518D\u70B9\u300C\u7528\u5F53\u524D\u9009\u533A\u300D\u3002",
  // ── 启动 Logo ──
  splashTagline: "\u82CF\u683C\u62C9\u5E95\u5B66\u4E60\u6CD5",
  splashSubline: "Socrates-agent",
  // ── 状态行。键对齐 pen/tutor.py 的 ev.phase ──
  phases: {
    thinking: "\u82CF\u683C\u62C9\u5E95\u5728\u60F3\u2026",
    writing: "\u5728\u5199\u2026",
    reading: "\u5728\u7FFB\u624B\u518C\u2026",
    tool: "\u5728\u52A8\u624B\u2026",
    selection_capped: "\u5212\u9009\u592A\u957F\uFF0C\u7B2C\u4E00\u5305\u53EA\u5E26\u4E86\u5F00\u5934\uFF0C\u5176\u4F59\u6309\u9700\u518D\u8BFB",
    overflow: "\u4E0A\u4E0B\u6587\u8D85\u9650\uFF0C\u9000\u56DE\u8FD9\u6279\u5185\u5BB9\u91CD\u8BD5\u2026"
  },
  // 推理阶段的活体计数。读者看的不是这个数本身，是**它在跳**——
  // 实测正文要等 14.5 秒才开始，那段时间以前屏幕上什么都没有。
  thinkTick: (chars) => `\u82CF\u683C\u62C9\u5E95\u5728\u60F3\u2026 ${k(chars)} \u5B57`,
  statusEditing: "\u5728\u6539\u539F\u6587\u2026",
  statusDeclined: "\u5DF2\u62D2\u7EDD\uFF0C\u8BA9\u82CF\u683C\u62C9\u5E95\u6536\u5C3E\u2026",
  statusAwaitApproval: "\u7B49\u4F60\u6279\u51C6\u8FD9\u6B21\u7F16\u8F91",
  statusRollingBack: "\u5728\u56DE\u5230\u4E0A\u4E00\u7248\u2026",
  statusRedoing: "\u5728\u91CD\u505A\u2026",
  // ── 审批面板 ──
  approvalTitle: "\u5BA1\u6279\u8FD9\u6B21\u7F16\u8F91",
  approvalTarget: (tool, path) => `${tool} \u2192 ${path}`,
  approvalCurrentHandbook: "\u5F53\u524D\u624B\u518C",
  approvalTruncated: (n3) => `\u2026 \u8FD8\u6709 ${n3} \u4E2A\u5B57\u7B26\u6CA1\u663E\u793A`,
  approvalWarn: "\u6A21\u578B\u81EA\u5DF1\u9009\u8981\u6362\u7684\u90A3\u4E00\u5C0F\u6BB5\u3002\u70B9\u5141\u8BB8\u624D\u4F1A\u6539\u8FD9\u7BC7\u7B14\u8BB0\u3002",
  approvalOldLabel: "--- \u539F\u6587 ---",
  approvalNewLabel: "+++ \u6362\u6210 +++",
  btnApprove: "\u5141\u8BB8\u8FD9\u6B21\u7F16\u8F91",
  btnReject: "\u62D2\u7EDD",
  // ── Notice ──
  noticeUnreachable: "\u8FDE\u4E0D\u4E0A sidecar\uFF0C\u5148\u770B\u9762\u677F\u4E0A\u7684\u9519\u8BEF\u4FE1\u606F",
  noticeRegisterFirst: "\u5148\u6846\u9009\u5E76\u767B\u8BB0\u5F53\u524D\u7B14\u8BB0",
  // `reviveSession()` 顶上那条早退专用。**不要**图省事复用上面那句
  // `noticeRegisterFirst`：那是给 `new Notice()` 写的短祈使句，
  //   - 塞进 `this.err` 之后读者只被要求做个动作，「这场对话没了」整句缺席；
  //   - 它不以「。」收句，而 `errApprovalUntouched` 是按「前面已经收句」
  //     设计的追加物，拼出来那个括号会像在修饰「登记笔记」这个动作
  //     （英文那边更糟：整句从头到尾不终止）；
  //   - 键名和去处也对不上（v0.12.6 ⑤ 立的规矩）。
  // 所以这里要一条为这个位置写的完整句：既说发生了什么，也说该做什么。
  errSessionGoneNoHandbook: (
    // 「还没有**已登记的**笔记」而不是「还没有登记**过**笔记」：后者是对
    // **历史**的断言，而代码知道的只有**此刻** `handbookId` 是空的。
    // 这条分支存在的全部理由恰恰是「将来有人加了『重开面板恢复上次会话』」
    // ——到那时读者明明框选过、只是 handbookId 没跟着恢复，他看到
    // 「还没登记过」的第一反应是「我明明登记过」。英文那边 `yet` 本来就
    // 只描述状态，不带历史断言。
    "\u8FD9\u573A\u5BF9\u8BDD\u5728 sidecar \u4E0A\u5DF2\u7ECF\u627E\u4E0D\u5230\u4E86\uFF0C\u800C\u9762\u677F\u4E0A\u8FD8\u6CA1\u6709\u5DF2\u767B\u8BB0\u7684\u7B14\u8BB0\uFF0C\u6CA1\u6CD5\u7ED9\u4F60\u5F00\u65B0\u7684\u4E00\u573A\u3002\u8BF7\u5148\u6846\u9009\u4E00\u6B21\u3002"
  ),
  noticeResolveApproval: "\u5148\u6279\u51C6\u6216\u62D2\u7EDD\u8FD9\u6B21\u7F16\u8F91",
  noticeUseSelectionFirst: "\u5148\u70B9\u300C\u7528\u5F53\u524D\u9009\u533A\u300D",
  noticeRolledBack: "\u5DF2\u56DE\u5230\u4E0A\u4E00\u7248",
  noticeRedone: "\u5DF2\u91CD\u505A",
  // ── confirm ──
  confirmNewSession: "\u65B0\u5F00\u4F1A\u8BDD\u4F1A\u4E22\u6389\u5F53\u524D\u8FD9\u573A\u7684\u6A21\u578B\u8BB0\u5FC6\u548C\u9009\u533A\u3002\u786E\u5B9A\uFF1F",
  confirmRollback: "\u6574\u7BC7\u7B14\u8BB0\u5C06\u56DE\u5230\u4E0A\u4E00\u7248\uFF1B\u8FD9\u4E4B\u540E\u4F60\u624B\u6539\u7684\u4E5F\u4F1A\u6CA1\u3002\u786E\u5B9A\uFF1F",
  // ── 写进对话流的系统消息 ──
  msgRolledBack: "\u5DF2\u56DE\u5230\u4E0A\u4E00\u7248\u3002",
  msgRedone: "\u5DF2\u91CD\u505A\u521A\u624D\u64A4\u9500\u7684\u5199\u5165\u3002",
  // ── main.ts ──
  errNoRightLeaf: "\u6CA1\u6709\u53EF\u7528\u7684\u53F3\u4FA7\u53F6\u5B50",
  errViewNotMounted: "\u82CF\u683C\u62C9\u5E95\u89C6\u56FE\u672A\u6302\u4E0A",
  errNeedDesktopVault: "\u9700\u8981\u684C\u9762\u5E93\uFF08FileSystemAdapter\uFF09",
  noticeSidecarDown: "\u672C\u673A\u670D\u52A1\u8FD8\u6CA1\u8D77\u6765\u3002\u6253\u5F00\u8BBE\u7F6E \u2192 Socrates\uFF0C\u770B\u6700\u4E0A\u9762\u90A3\u4E00\u5757\u7684\u72B6\u6001\u3002",
  noticeKeySaved: "\u94A5\u5319\u5DF2\u5B58\u5165\u672C\u673A sidecar\uFF08~/.socrates-pen/llm.json\uFF09\uFF0C\u4E0D\u8FDB\u8FD9\u4E2A\u5E93\u3002",
  noticeKeySaveFailed: (detail) => `\u6CA1\u5B58\u8FDB\u53BB\uFF08${detail}\uFF09\u3002\u94A5\u5319\u672A\u843D\u4EFB\u4F55\u6587\u4EF6\u3002`,
  noticeKeySaveOldSidecar: "\u6CA1\u5B58\u8FDB\u53BB\uFF1A\u5360\u7740\u7AEF\u53E3\u7684\u662F\u65E7\u670D\u52A1\uFF0C\u6536\u4E0D\u4E86\u65B0\u94A5\u5319\u3002\u5148\u70B9\u505C\u6B62\u518D\u70B9\u542F\u52A8\u5347\u7EA7\u3002\u94A5\u5319\u8FD8\u5728\u8F93\u5165\u6846\u91CC\uFF0C\u672A\u843D\u4EFB\u4F55\u6587\u4EF6\u3002",
  noticeKeyCleared: "\u94A5\u5319\u5DF2\u4ECE\u672C\u673A sidecar \u6E05\u9664\u3002",
  noticeKeyMigrated: "API Key \u5DF2\u4ECE data.json \u8FC1\u5230\u672C\u673A ~/.socrates-pen/llm.json\uFF0C\u4E0D\u518D\u968F Sync / iCloud / git \u8D70\u3002\u82E5\u8FD9\u4E2A\u5E93\u66FE\u88AB\u540C\u6B65\u6216\u63D0\u4EA4\u8FC7\uFF0C\u5EFA\u8BAE\u53BB\u670D\u52A1\u5546\u8F6E\u6362\u8FD9\u628A\u94A5\u5319\u3002",
  noticeSidecarTooOld: "\u672C\u673A\u670D\u52A1\u8FD8\u662F\u65E7\u7248\uFF0C\u6536\u4E0D\u4E86\u65B0\u94A5\u5319\u3002\u5230\u8BBE\u7F6E \u2192 Socrates \u70B9\u505C\u6B62\u518D\u70B9\u542F\u52A8\u5347\u7EA7\u2014\u2014\u94A5\u5319\u968F\u540E\u81EA\u52A8\u8FC1\u5165\uFF0C\u8FC1\u597D\u4E4B\u524D\u4ECD\u7559\u5728 data.json \u91CC\u3002",
  noticeSidecarAlready: "\u672C\u673A\u670D\u52A1\u5DF2\u7ECF\u5728\u8DD1\u3002",
  noticeSidecarStale: "\u65E7\u670D\u52A1\u5360\u7740\u7AEF\u53E3\uFF0C\u5148\u70B9\u505C\u6B62\u518D\u70B9\u542F\u52A8\u5347\u7EA7\u3002",
  noticeSidecarAlreadyStopped: "\u672C\u673A\u670D\u52A1\u672C\u6765\u5C31\u6CA1\u5728\u8DD1\u3002",
  noticeSidecarStoppedOwned: "\u5DF2\u505C\u6B62\u672C\u673A\u670D\u52A1\u3002",
  noticeSidecarStoppedLeftover: (command) => command && command !== "?" ? `\u5DF2\u505C\u6B62\u5360\u7528\u7AEF\u53E3\u7684\u65E7\u670D\u52A1\uFF08${command}\uFF09\u3002` : "\u5DF2\u505C\u6B62\u5360\u7528\u7AEF\u53E3\u7684\u65E7\u670D\u52A1\u3002",
  noticeSidecarStoppedShared: (command) => command && command !== "?" ? `\u5DF2\u505C\u6B62\u5360\u7528\u7AEF\u53E3\u7684\u672C\u673A\u670D\u52A1\uFF08${command}\uFF0C\u522B\u7684\u5E93\u6216\u4E0A\u6B21\u7559\u4E0B\u7684\uFF09\u3002` : "\u5DF2\u505C\u6B62\u5360\u7528\u7AEF\u53E3\u7684\u672C\u673A\u670D\u52A1\uFF08\u522B\u7684\u5E93\u6216\u4E0A\u6B21\u7559\u4E0B\u7684\uFF09\u3002",
  noticeSidecarStoppedOther: (command) => command && command !== "?" ? `\u5DF2\u505C\u6B62\u5360\u7528\u7AEF\u53E3\u7684\u5176\u4ED6\u8FDB\u7A0B\uFF08${command}\uFF09\u3002` : "\u5DF2\u505C\u6B62\u5360\u7528\u7AEF\u53E3\u7684\u5176\u4ED6\u8FDB\u7A0B\u3002",
  noticeSidecarStopFailed: "\u6CA1\u505C\u6389\u3002\u770B\u4E0A\u9762\u90A3\u4E00\u884C\u72B6\u6001\u3002",
  noticeKeyMigrateTimeout: "45 \u79D2\u5185\u6CA1\u628A API Key \u8FC1\u8FDB\u672C\u673A\u670D\u52A1\uFF08\u5B83\u53EF\u80FD\u8FD8\u5728\u5B89\u88C5\uFF09\u3002\u94A5\u5319\u4ECD\u7559\u5728 data.json \u91CC\uFF0C\u672C\u673A\u670D\u52A1\u5C31\u7EEA\u540E\u4F1A\u81EA\u52A8\u518D\u8FC1\u4E00\u6B21\uFF1B\u6025\u7740\u7528\u5C31\u5230\u8BBE\u7F6E\u91CC\u624B\u52A8\u8D34\u4E00\u6B21\u3002",
  noticeKeyHostMismatch: (keyHost, urlHost) => `\u8282\u70B9\u6362\u4E86\u3002\u672C\u673A\u90A3\u628A\u94A5\u5319\u8FD8\u662F\u7ED9 ${keyHost} \u7684\uFF0C\u4E0D\u4F1A\u62FF\u5230 ${urlHost} \u4E0A\u7528\u3002\u8BF7\u8D34\u4E00\u4EFD ${urlHost} \u7684 API Key\u3002`,
  noticeSessionSwitched: (note) => `\u5DF2\u5207\u6362\u5230\u300A${note}\u300B\u7684\u4F1A\u8BDD\u3002\u539F\u7B14\u8BB0\u7684\u5BF9\u8BDD\u4ECD\u5728\u539F\u7B14\u8BB0\u4E0A\u2014\u2014\u518D\u5212\u5B83\u5C31\u80FD\u56DE\u6765\u3002`,
  noticeRightOpened: "Socrates \u9762\u677F\u5DF2\u5728\u53F3\u4FA7\u680F\u6253\u5F00\u3002",
  // ── 芯片。键对齐后端 pen/session.py 的 FIXED_CHIPS[].id ──
  chips: {
    socratic: { label: "\u5148\u522B\u63ED\u6653\uFF0C\u95EE\u6211\u4E00\u4E2A\u95EE\u9898", hint: "" },
    explain_zero: { label: "\u5F53\u6211\u96F6\u57FA\u7840\uFF0C\u8BB2\u6E05\u695A\u518D\u7ED9\u4E24\u4E2A\u4F8B\u5B50", hint: "" },
    examples: { label: "\u53EA\u4E3E\u4F8B\u5B50", hint: "" },
    search: { label: "\u67E5\u76F8\u5173\u8BBA\u6587 / \u7B97\u6CD5\u51FA\u5904", hint: "P2 \u624D\u5F00\u653E\uFF0C\u73B0\u5728\u4E0D\u4F1A\u5047\u88C5\u641C\u8FC7" },
    writeback: { label: "\u628A\u521A\u624D\u7684\u89E3\u7B54\u5199\u8FDB\u624B\u518C\u539F\u6587", hint: "\u5148\u6709\u4E00\u8F6E\u5B9E\u8D28\u89E3\u7B54" }
  },
  // ── 设置页 ──
  setLangName: "\u8BED\u8A00 / Language",
  setLangDesc: "\u9ED8\u8BA4\u8DDF\u968F Obsidian \u7684\u754C\u9762\u8BED\u8A00\u3002",
  setLangAuto: "\u81EA\u52A8\uFF08\u8DDF\u968F Obsidian\uFF09",
  setSidecarSvc: "\u672C\u673A\u670D\u52A1",
  setSidecarSvcDesc: "\u63D2\u4EF6\u4F1A\u5728\u4F60\u5BB6\u76EE\u5F55\u7684 ~/.socrates-pen \u91CC\u5EFA\u4E00\u4E2A\u9694\u79BB\u7684 Python \u73AF\u5883\uFF0C\u88C5\u4E0A\u8111\u5B50\uFF0C\u5E76\u5728\u672C\u673A 127.0.0.1 \u62C9\u8D77\u3002\u9700\u8981\u7CFB\u7EDF\u5DF2\u5B89\u88C5 Python 3.11+\u3002\u7B2C\u4E00\u6B21\u53EF\u80FD\u8981\u4E00\u4E24\u5206\u949F\uFF08\u8981\u4E0B\u8F7D\u4F9D\u8D56\uFF09\u3002",
  setSidecarStart: "\u542F\u52A8",
  setSidecarStop: "\u505C\u6B62",
  setSidecarStopping: "\u6B63\u5728\u505C\u6B62\u2026",
  setSidecarAutoName: "\u6253\u5F00 Obsidian \u65F6\u81EA\u52A8\u542F\u52A8",
  setSidecarAutoDesc: "\u9ED8\u8BA4\u5F00\u3002\u5173\u6389\u5C31\u53EA\u5728\u4F60\u70B9\u542F\u52A8\u65F6\u624D\u62C9\u8D77\u3002",
  setSidecarPythonName: "Python \u8DEF\u5F84",
  setSidecarPythonDesc: "\u7559\u7A7A\u5219\u81EA\u52A8\u627E python3 / python / py\u3002\u627E\u4E0D\u5230\u65F6\u8BF7\u5148\u4ECE python.org \u5B89\u88C5 3.11 \u6216\u66F4\u9AD8\u3002",
  setSidecarPhaseIdle: "\u672A\u8FD0\u884C",
  setSidecarPhaseChecking: "\u5728\u68C0\u67E5\u2026",
  setSidecarPhaseInstalling: "\u5728\u5B89\u88C5\u672C\u673A\u670D\u52A1\uFF08\u7B2C\u4E00\u6B21\u4F1A\u4E45\u4E00\u70B9\uFF09\u2026",
  setSidecarPhaseStarting: "\u5728\u542F\u52A8\u2026",
  setSidecarPhaseRunning: "\u8FD0\u884C\u4E2D",
  setSidecarPhaseStopping: "\u6B63\u5728\u505C\u6B62\u2026",
  setSidecarPhaseStopped: "\u5DF2\u505C\u6B62",
  setSidecarPhaseStale: (ver) => ver ? `\u65E7\u670D\u52A1\u5360\u7740\u7AEF\u53E3\uFF08${ver}\uFF09\uFF0C\u5148\u505C\u6B62\u518D\u542F\u52A8\u5347\u7EA7` : "\u65E7\u670D\u52A1\u5360\u7740\u7AEF\u53E3\uFF0C\u5148\u505C\u6B62\u518D\u542F\u52A8\u5347\u7EA7",
  setSidecarErrNoPython: "PATH \u4E0A\u6CA1\u627E\u5230 Python 3.11+\uFF0C\u65B0\u5EFA\u672C\u673A\u73AF\u5883\u9700\u8981\u5B83\u3002\u8BF7\u5148\u5B89\u88C5\uFF0C\u6216\u5728\u4E0B\u9762\u586B\u89E3\u91CA\u5668\u7684\u7EDD\u5BF9\u8DEF\u5F84\uFF08\u4F8B\u5982 /opt/homebrew/bin/python3\uFF09\u3002",
  setSidecarErrNotLoopback: "\u63D2\u4EF6\u53EA\u80FD\u5728 127.0.0.1 / localhost \u4E0A\u62C9\u8D77\u670D\u52A1\u3002Sidecar URL \u6539\u56DE loopback\u3002",
  setSidecarErrBadUrl: "Sidecar URL \u4E0D\u662F\u5408\u6CD5\u5730\u5740\u3002",
  setSidecarErrInstall: "\u5B89\u88C5\u5931\u8D25\u3002\u9700\u8981\u80FD\u8BBF\u95EE GitHub \u548C PyPI\u3002",
  setSidecarErrSpawn: "\u8FDB\u7A0B\u6CA1\u80FD\u62C9\u8D77\u6765\u3002",
  setSidecarErrHealth: "\u8FDB\u7A0B\u8D77\u6765\u4E86\uFF0C\u4F46\u5065\u5EB7\u68C0\u67E5\u4E00\u76F4\u6CA1\u8FC7\u3002",
  setSidecarErrStop: "\u505C\u6B62\u5931\u8D25\u3002",
  setSidecarErrStopNoPid: "\u505C\u6B62\u5931\u8D25\uFF1A\u627E\u4E0D\u5230\u5360\u7528\u7AEF\u53E3\u7684\u8FDB\u7A0B\u3002",
  setSidecarErrOther: (code) => `\u542F\u52A8\u5931\u8D25\uFF08${code}\uFF09`,
  setIntro1: "\u94A5\u5319\u548C\u8282\u70B9\u586B\u5728\u4E0B\u9762\u3002\u672C\u673A\u670D\u52A1\u7531\u63D2\u4EF6\u81EA\u5DF1\u62C9\u8D77\uFF0C\u4E0D\u7528\u5F00\u7EC8\u7AEF\u3002\u5F53\u524D\u5E93\u7684\u8DEF\u5F84\u4F1A\u5728\u6846\u9009\u65F6\u81EA\u52A8\u5E26\u7ED9\u670D\u52A1\u3002",
  setIntro2: "API Key \u53EA\u5B58\u672C\u673A sidecar \u5BB6\u76EE\u5F55\uFF08~/.socrates-pen/llm.json\uFF0C\u6743\u9650 0600\uFF09\uFF0C\u4E0D\u5199\u8FDB\u8FD9\u4E2A\u5E93\u2014\u2014Sync / iCloud / git \u5E26\u4E0D\u8D70\u5B83\u3002",
  setApiKeyDesc: "\u53EA\u5199\uFF1A\u7C98\u8D34\u540E\u70B9\u4FDD\u5B58\uFF08\u56DE\u8F66\u6216\u5931\u7126\u4E5F\u53EF\uFF09\uFF0C\u5B58\u5165\u672C\u673A sidecar\uFF0C\u4E0D\u843D vault\u3002\u670D\u52A1\u6CA1\u5C31\u7EEA\u6216\u8FD8\u662F\u65E7\u7248\u65F6\u4FDD\u5B58\u662F\u7070\u7684\u3002\u7559\u7A7A\u5FFD\u7565\uFF1B\u8981\u6E05\u9664\u7528\u53F3\u4FA7\u6309\u94AE\u3002",
  setKeySave: "\u4FDD\u5B58",
  setKeyStatusSaved: (source, tail) => `\u5DF2\u4FDD\u5B58${source ? `\uFF08\u6765\u6E90 ${source}\uFF09` : ""}${tail ? `\uFF0C\u5C3E\u53F7 \u2026${tail}` : ""}\u3002`,
  setKeyStatusNone: "\u5C1A\u672A\u4FDD\u5B58\u94A5\u5319\u3002",
  setCheckRunning: "\u6B63\u5728\u5411\u8282\u70B9\u6838\u5BF9\u2026\u2026",
  setCheckOk: "\u5DF2\u5411\u8282\u70B9\u6838\u5BF9\u901A\u8FC7\u3002",
  setKeyStatusUnreachable: "sidecar \u672A\u8FD0\u884C\uFF0C\u94A5\u5319\u72B6\u6001\u672A\u77E5\u3002",
  setKeyClear: "\u6E05\u9664\u5BC6\u94A5",
  setKeepAliveName: "\u9000\u51FA\u540E\u4FDD\u6301\u672C\u673A\u670D\u52A1\u8FD0\u884C",
  setKeepAliveDesc: "\u672C\u673A\u670D\u52A1\u662F\u4F60\u673A\u5668\u4E0A\u7684\u4E00\u4E2A Python \u8FDB\u7A0B\uFF0C\u591A\u4E2A\u5E93\u5171\u7528\u540C\u4E00\u53EA\u3002\u9ED8\u8BA4\u5F00\u542F\uFF1A\u9000\u51FA Obsidian \u540E\u5B83\u7EE7\u7EED\u5728\uFF0C\u4E0B\u6B21\u79D2\u5F00\u3002\u5173\u6389\u5219\u9000\u51FA\u65F6\u505C\u6389\u7531\u672C\u63D2\u4EF6\u62C9\u8D77\u7684\u90A3\u53EA\u2014\u2014\u522B\u7684\u5E93\u6B63\u5728\u7528\u65F6\u8BF7\u522B\u5173\u3002",
  setBaseUrlDesc: "Chat Completions \u517C\u5BB9\u5730\u5740\uFF0C\u4E0D\u8981\u5E26\u5C3E\u659C\u6760\u3002",
  setProviderName: "\u6A21\u578B\u5382\u5546",
  setFastProviderName: "\u5FEB\u6A21\u578B\u5382\u5546",
  setProviderDesc: "\u9009\u4E00\u5BB6\uFF0C\u63A8\u7406\u6863\u5C31\u6309\u8FD9\u5BB6\u7684\u5199\u6CD5\u53D1\u3002\u81EA\u52A8 = \u6309\u578B\u53F7\u540D\u5224\u65AD\uFF0C\u8BA4\u4E0D\u51FA\u5C31\u7528\u901A\u7528\u5199\u6CD5\u3002\u9009\u4E2D\u540E\u4F1A\u987A\u624B\u9884\u586B Base URL\uFF08\u5DF2\u7ECF\u624B\u6253\u8FC7\u5730\u5740\u7684\u4E0D\u4F1A\u88AB\u8986\u76D6\uFF09\u3002",
  setProviderAuto: "\u81EA\u52A8\uFF08\u6309\u578B\u53F7\u540D\u5224\u65AD\uFF09",
  setProviderGeneric: "\u901A\u7528 OpenAI \u517C\u5BB9",
  // 每家的脾气：官方地址、型号名长什么样、思考关不关得掉。
  // 第三条是读者撞过一次才会想起来的那种事，所以写在明面上。
  providerHint: {
    auto: "\u6309\u578B\u53F7\u540D\u5224\u65AD\uFF1A\u540D\u5B57\u91CC\u6709 deepseek / gemini / glm / kimi / gpt- \u7B49\u5B57\u6837\u5C31\u6309\u90A3\u5BB6\u53D1\u3002\u8BA4\u4E0D\u51FA\u8D70\u901A\u7528\u5199\u6CD5\u3002",
    celeris: "https://inference.celeris.ai/celeris-1-magnus/v1 \xB7 \u578B\u53F7\u5982 celeris-1-magnus \xB7 \u6CA1\u6709 high \u6863\uFF0C\u754C\u9762\u7684\u9AD8\u6863\u53D1\u7684\u662F xhigh\u3002",
    google: "https://generativelanguage.googleapis.com/v1beta/openai/ \xB7 \u578B\u53F7\u5982 gemini-3-pro \xB7 Gemini 3 \u8D77\u601D\u8003\u5173\u4E0D\u6389\uFF0C\u9009\u300C\u5173\u300D\u4F1A\u843D\u5230\u6700\u4F4E\u6863\u3002",
    deepseek: "https://api.deepseek.com \xB7 \u578B\u53F7\u5982 deepseek-v4-flash \xB7 \u4E0D\u6307\u5B9A\u63A8\u7406\u6863\u65F6\u5B83\u9ED8\u8BA4\u6EE1\u6863\u601D\u8003\uFF0C\u6240\u4EE5\u300C\u5173\u300D\u662F\u660E\u786E\u5173\u6389\u3002",
    glm: "https://open.bigmodel.cn/api/paas/v4 \xB7 \u578B\u53F7\u5982 glm-5.3 \xB7 GLM-5.3 \u601D\u8003\u5173\u4E0D\u6389\uFF0C\u9009\u300C\u5173\u300D\u4F1A\u843D\u5230\u6700\u4F4E\u6863\u3002",
    kimi: "https://api.moonshot.ai/v1 \xB7 \u578B\u53F7\u5982 kimi-k3 \u6216 kimi-k2.6 \xB7 K3 \u601D\u8003\u5173\u4E0D\u6389\uFF0C\u4E14\u5199\u6CD5\u4E0E K2 \u5B8C\u5168\u4E0D\u540C\u3002",
    meta: "https://api.meta.ai/v1 \xB7 \u578B\u53F7\u5982 muse-spark-1.3 \xB7 \u5B83\u4E00\u76F4\u5728\u601D\u8003\uFF0C\u9009\u300C\u5173\u300D\u4F1A\u843D\u5230\u6700\u4F4E\u6863\u3002",
    openai: "https://api.openai.com/v1 \xB7 \u578B\u53F7\u5982 gpt-5 \u6216 o3-mini \xB7 gpt-4 \u7CFB\u5217\u4E0D\u662F\u63A8\u7406\u6A21\u578B\uFF0C\u56DB\u6863\u90FD\u4E0D\u53D1\u63A8\u7406\u5B57\u6BB5\u3002",
    openrouter: "https://openrouter.ai/api/v1 \xB7 \u578B\u53F7\u5E26\u5382\u5546\u524D\u7F00\uFF0C\u5982 google/gemini-3-pro \xB7 \u81EA\u52A8\u5224\u65AD\u5728\u8FD9\u91CC\u6700\u5BB9\u6613\u731C\u9519\uFF0C\u5EFA\u8BAE\u663E\u5F0F\u9009\u3002",
    generic: "\u4EFB\u4F55 OpenAI \u517C\u5BB9\u8282\u70B9\u3002\u53EA\u53D1\u901A\u7528\u7684 reasoning_effort\uFF0C\u7EDD\u4E0D\u53D1\u5404\u5BB6\u79C1\u6709\u7684\u5199\u6CD5\u2014\u2014\u914D\u4E0D\u719F\u7684\u8282\u70B9\u9009\u8FD9\u4E2A\u6700\u4E0D\u5BB9\u6613\u88AB\u62D2\u3002"
  },
  setModelName: "\u6A21\u578B\u540D",
  setModelDesc: "\u8282\u70B9\u4E0A\u7684 model \u5B57\u7B26\u4E32\uFF0C\u4F8B\u5982 deepseek-v4-flash \u6216 gpt-4.1-mini\u3002",
  setVisionName: "\u56FE\u50CF\u7406\u89E3",
  setVisionDesc: "\u6253\u5F00\u540E\u53EF\u5728\u5BF9\u8BDD\u6846\u7C98\u8D34\u6216\u62D6\u5165\u56FE\u7247\u3002DeepSeek \u6587\u672C\u6A21\u578B\u8BF7\u5173\uFF1BGLM / Qwen \u7B49\u591A\u6A21\u6001\u518D\u5F00\u3002\u5173\u7740\u65F6\u8D34\u56FE\u4F1A\u76F4\u63A5\u62A5\u9519\uFF0C\u4E0D\u4F1A\u628A\u56FE\u53D1\u51FA\u53BB\u3002",
  setThinkingDesc: "off \u6700\u4F4E\uFF0Chigh \u662F\u8BE5\u8282\u70B9\u9876\u6863\u3002\u4E0D\u652F\u6301\u601D\u8003\u7684\u8282\u70B9\u8BF7\u4FDD\u6301 off\u3002",
  // ── Fast Mode（v0.22.0）──
  setSecFast: "Fast Mode",
  setFastDesc: "\u53EA\u95EE\u4E0D\u6539\u7684\u8F6E\u6B21\u4EA4\u7ED9\u4E00\u4E2A\u66F4\u5FEB\u7684\u6A21\u578B\u7B54\uFF0C\u8981\u52A8\u539F\u6587\u65F6\u81EA\u52A8\u6362\u56DE\u4E0A\u9762\u90A3\u4E2A\u57FA\u5EA7\u6A21\u578B\u3002\u5F00\u5173\u5728\u4FA7\u680F\u53F3\u4E0A\u89D2\u90A3\u679A\u95EA\u7535\u3002\u8FD9\u91CC\u586B\u5FEB\u6A21\u578B\u7684\u8282\u70B9\u3001\u578B\u53F7\u548C\u94A5\u5319\uFF1B\u4E0D\u586B\u4E5F\u4E0D\u62A5\u9519\uFF0C\u53EA\u662F\u5F00\u5173\u70B9\u4E86\u4E0D\u751F\u6548\u3002\u5FEB\u6A21\u578B\u7684\u4E0A\u4E0B\u6587\u7A97\u53E3\u5C0F\u5F97\u591A\uFF0C\u5F00\u7740\u65F6\u4F1A\u81EA\u52A8\u538B\u7F29\u4E0A\u4E0B\u6587\u2014\u2014\u538B\u7F29\u53EA\u5F71\u54CD\u53D1\u7ED9\u5B83\u7684\u90A3\u4E00\u4EFD\uFF0C\u4F60\u7684\u4F1A\u8BDD\u4E0D\u4F1A\u88AB\u6298\u3002",
  setFastBaseUrlDesc: "\u5FEB\u6A21\u578B\u7684 Chat Completions \u517C\u5BB9\u5730\u5740\uFF0C\u4E0D\u8981\u5E26\u5C3E\u659C\u6760\u3002",
  setFastModelName: "\u5FEB\u6A21\u578B\u540D",
  setFastModelDesc: "\u5FEB\u6A21\u578B\u8282\u70B9\u4E0A\u7684 model \u5B57\u7B26\u4E32\u3002",
  setFastKeyName: "\u5FEB\u6A21\u578B API Key",
  setFastKeyDesc: "\u548C\u4E0A\u9762\u90A3\u628A\u4E00\u6837\u53EA\u5199\u4E0D\u8BFB\uFF0C\u5B58\u8FDB\u672C\u673A sidecar\uFF0C\u4E0D\u843D\u8FD9\u4E2A\u5E93\u3002\u5FEB\u6A21\u578B\u901A\u5E38\u5728\u53E6\u4E00\u53F0\u4E3B\u673A\u4E0A\uFF0C\u6240\u4EE5\u5FC5\u987B\u5355\u72EC\u586B\u4E00\u628A\u2014\u2014\u57FA\u5EA7\u90A3\u628A\u4E0D\u4F1A\u88AB\u632A\u7528\u8FC7\u53BB\u3002",
  setFastKeyStatusNone: "\u5C1A\u672A\u4FDD\u5B58\u5FEB\u6A21\u578B\u94A5\u5319\u3002",
  noticeFastKeySaved: "\u5FEB\u6A21\u578B\u94A5\u5319\u5DF2\u5B58\u5165\u672C\u673A sidecar\uFF0C\u4E0D\u8FDB\u8FD9\u4E2A\u5E93\u3002",
  noticeFastKeyCleared: "\u5FEB\u6A21\u578B\u94A5\u5319\u5DF2\u6E05\u9664\u3002",
  setThinkingOff: "off\uFF08\u9ED8\u8BA4\uFF09",
  deepQuotaSpent: "\u6DF1\u6316\u5DF2\u7528\u6EE1",
  setDeepName: "\u540E\u53F0\u6DF1\u6316",
  setDeepDesc: "\u82CF\u683C\u62C9\u5E95\u7B54\u5B8C\u4E4B\u540E\uFF0C\u540E\u53F0\u518D\u82B1\u4E00\u6B21\u8C03\u7528\u53BB\u60F3\u4E00\u4E2A\u8DE8\u5173\u7684\u95EE\u9898\uFF0C\u60F3\u5230\u4E86\u624D\u5192\u51FA\u6765\u3002\u5173\u6389\u5C31\u53EA\u7559\u5373\u65F6\u7684\u90A3\u4E24\u6761\u3002",
  tipDeepPrefix: "\u25C6 ",
  // ── 自定义泡泡（v0.21.0）──
  setSecChips: "\u81EA\u5B9A\u4E49\u6CE1\u6CE1",
  setChipsDesc: "\u4FA7\u680F\u90A3\u6392\u6309\u94AE\uFF0C\u6BCF\u4E00\u679A\u5E95\u4E0B\u90FD\u662F\u4E00\u6BB5\u53D1\u7ED9 AI \u7684\u6307\u4EE4\u3002\u8FD9\u91CC\u53EF\u4EE5\u52A0\u4F60\u81EA\u5DF1\u7684\uFF1A\u5199\u6E05\u695A\u4F60\u8981\u5B83\u505A\u4EC0\u4E48\u3001\u6309\u4EC0\u4E48\u4F53\u4F8B\u5199\uFF0C\u70B9\u4E00\u4E0B\u5C31\u7167\u7740\u505A\u3002\u52FE\u4E86\u300C\u4F1A\u6539\u5199\u539F\u6587\u300D\u7684\u90A3\u4E9B\uFF0C\u52A8\u7B14\u524D\u4E00\u5F8B\u5148\u5F39\u5BA1\u6279\u9762\u677F\uFF0C\u4F60\u70B9\u4E86\u5141\u8BB8\u7B14\u8BB0\u624D\u4F1A\u53D8\u3002",
  setChipsEmpty: "\u8FD8\u6CA1\u6709\u81EA\u5B9A\u4E49\u6CE1\u6CE1\u3002\u4ECE\u4E0B\u9762\u7684\u6A21\u677F\u6311\u4E00\u4E2A\u5F00\u59CB\uFF0C\u6539\u6210\u4F60\u81EA\u5DF1\u7684\u4F53\u4F8B\u3002",
  setChipsFull: (max) => `\u6700\u591A ${max} \u679A\u3002\u518D\u52A0\u5C31\u53EA\u662F\u5728\u7ED9\u4FA7\u680F\u5806\u6EDA\u52A8\u6761\u4E86\u3002`,
  setChipNewFrom: "\u4ECE\u6A21\u677F\u65B0\u5EFA",
  setChipNewFromDesc: "\u6311\u4E00\u4E2A\u8D77\u624B\u6A21\u677F\u590D\u5236\u8FC7\u6765\uFF0C\u518D\u7167\u4F60\u81EA\u5DF1\u90A3\u672C\u4E66\u7684\u4F53\u4F8B\u6539\u3002",
  setChipPresetBlank: "\u7A7A\u767D",
  setChipNewBtn: "\u65B0\u5EFA",
  setChipLabelName: "\u6309\u94AE\u4E0A\u7684\u5B57",
  setChipLabelDesc: "\u7559\u7A7A\u5C31\u7528\u4E0B\u9762\u6307\u4EE4\u7684\u7B2C\u4E00\u884C\u3002\u8FD9\u4E2A\u540D\u5B57\u4E0D\u7FFB\u8BD1\uFF0C\u4E24\u79CD\u754C\u9762\u8BED\u8A00\u4E0B\u90FD\u663E\u793A\u4F60\u5199\u7684\u539F\u6587\u3002",
  setChipHintName: "\u60AC\u505C\u63D0\u793A",
  setChipHintDesc: "\u53EF\u7559\u7A7A\u3002\u9F20\u6807\u505C\u5728\u6309\u94AE\u4E0A\u65F6\u663E\u793A\uFF0C\u7528\u6765\u63D0\u9192\u4F60\u8FD9\u679A\u662F\u5E72\u4EC0\u4E48\u7684\u3002",
  setChipPromptName: "\u6307\u4EE4",
  setChipPromptDesc: "\u70B9\u8FD9\u679A\u6CE1\u6CE1\u65F6\u53D1\u7ED9 AI \u7684\u8BDD\u3002\u628A\u300C\u8981\u5199\u8FDB\u54EA\u4E00\u8282\u300D\u300C\u6309\u4EC0\u4E48\u683C\u5F0F\u300D\u90FD\u5199\u660E\u767D\uFF0C\u8D8A\u5177\u4F53\u5B83\u8D8A\u7167\u505A\u3002\u8FD9\u6BB5\u662F\u5FC5\u586B\u7684\u2014\u2014\u7A7A\u7684\u6CE1\u6CE1\u548C\u81EA\u7531\u63D0\u95EE\u6CA1\u6709\u533A\u522B\u3002",
  setChipPromptPlaceholder: "\u5C31\u6211\u5212\u4E2D\u7684\u8FD9\u4E00\u6BB5\uFF0C\u2026\u2026",
  setChipWritebackName: "\u4F1A\u6539\u5199\u539F\u6587",
  setChipWritebackDesc: "\u5F00\u7740\uFF1A\u544A\u8BC9 AI \u8FD9\u4E00\u8F6E\u8981\u52A8\u7B14\u8BB0\uFF0C\u5B83\u4F1A\u5148\u8BFB\u539F\u6587\u518D\u63D0\u6539\u52A8\uFF0C\u4F60\u5BA1\u6279\u540E\u624D\u843D\u76D8\u3002\u5173\u7740\uFF1A\u53EA\u5728\u5BF9\u8BDD\u91CC\u56DE\u7B54\u3002\u6CE8\u610F\u8FD9\u4E2A\u5F00\u5173\u7BA1\u7684\u662F\u7ED9 AI \u7684\u4EA4\u4EE3\uFF0C\u4E0D\u662F\u78C1\u76D8\u7684\u9501\u2014\u2014\u771F\u6B63\u62E6\u4F4F\u5199\u76D8\u7684\u662F\u5BA1\u6279\u9762\u677F\uFF0C\u5B83\u4E00\u76F4\u90FD\u5728\u3002",
  setChipEnabledName: "\u5728\u4FA7\u680F\u663E\u793A",
  setChipEnabledDesc: "\u5173\u6389\u5C31\u5148\u6536\u8D77\u6765\uFF0C\u4E0D\u5220\u3002\u534A\u6210\u54C1\u53EF\u4EE5\u505C\u5728\u8FD9\u513F\u3002",
  setChipDraftNote: "\u8FD8\u6CA1\u5199\u6307\u4EE4\uFF0C\u6240\u4EE5\u4FA7\u680F\u90A3\u6392\u5148\u4E0D\u663E\u793A\u5B83\u3002\u5199\u5B8C\u5C31\u51FA\u73B0\u3002",
  setChipDelete: "\u5220\u9664\u8FD9\u679A\u6CE1\u6CE1",
  setChipDeleteBtn: "\u5220\u9664",
  setChipDeleteConfirm: "\u518D\u70B9\u4E00\u6B21\u786E\u8BA4\u5220\u9664",
  setChipUnnamed: "\uFF08\u8FD8\u6CA1\u8D77\u540D\uFF09",
  setChipChars: (n22, max) => `${n22} / ${max} \u5B57`,
  // ── 设置页分区与旋钮（v0.10.7）──
  setSecUsage: "\u82B1\u9500",
  setUsageLoading: "\u6B63\u5728\u8BFB\u8D26\u2026",
  setUsageDown: "\u8FDE\u4E0D\u4E0A sidecar\uFF0C\u8BFB\u4E0D\u5230\u8D26\u3002",
  // v0.12.4 起会话按时间清理，这个数是**现存会话**的合计，会往下掉——
  // 不写明的话读者会以为账丢了。
  setUsageNote: "\u4ECE v0.10.0 \u8D77\u7B97\u3002\u72B6\u6001\u884C\u4E0A\u90A3\u4E2A\u6570\u662F\u300C\u8FD9\u4E00\u573A\u300D\uFF0C\u8FD9\u91CC\u662F\u300C\u4E00\u5171\u300D\u3002\u53EA\u6570 token\uFF0C\u4E0D\u6298\u7B97\u6210\u94B1\u3002\u53EA\u7EDF\u8BA1\u8FD8\u5728\u4FDD\u7559\u671F\u5185\u7684\u4F1A\u8BDD\uFF08\u7A7A\u4F1A\u8BDD\u7559 1 \u5929\u3001\u804A\u8FC7\u7684\u7559 7 \u5929\uFF09\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u6570\u4F1A\u968F\u7740\u65E7\u4F1A\u8BDD\u88AB\u6E05\u7406\u800C\u4E0B\u964D\u3002",
  setUsageTotal: (tok, sessions) => `\u4E00\u5171 ${n(tok)} token\uFF0C\u6765\u81EA ${n(sessions)} \u573A\u5BF9\u8BDD`,
  setUsageBreak: (chat, probe, fold) => `\u4E3B\u5BF9\u8BDD ${n(chat)} \xB7 \u6DF1\u6316 ${n(probe)} \xB7 \u5199\u56DE ${n(fold)}`,
  setUsageCached: (tok) => `\u5176\u4E2D\u7F13\u5B58\u547D\u4E2D ${n(tok)}\uFF08\u4FBF\u5B9C\u5F88\u591A\uFF09`,
  setUsageEmpty: "\u8FD8\u6CA1\u6709\u8BB0\u5230\u8D26\u3002\u8FD9\u4E2A\u6570\u4ECE\u5347\u7EA7\u5230 v0.10.0 \u4E4B\u540E\u7684\u5BF9\u8BDD\u5F00\u59CB\u7B97\u3002",
  setSecCommon: "\u5E38\u7528",
  setSecAdvanced: "\u9AD8\u7EA7\uFF08\u82B1\u94B1\u548C\u901F\u5EA6\u7684\u95F8\uFF0C\u4E0D\u786E\u5B9A\u5C31\u522B\u52A8\uFF09",
  setAdvancedNote: "\u4E0B\u9762\u8FD9\u4E9B\u9ED8\u8BA4\u503C\u662F\u5B9E\u6D4B\u8C03\u51FA\u6765\u7684\u3002\u6539\u4E4B\u524D\u5148\u60F3\u6E05\u695A\u8981\u7701\u7684\u662F\u4EC0\u4E48\u2014\u2014\u591A\u6570\u65F6\u5019\u8BE5\u52A8\u7684\u662F\u4E0A\u9762\u90A3\u4E09\u4E2A token \u4E0A\u9650\uFF0C\u4E0D\u662F\u8FD9\u91CC\u3002",
  setDefaultHint: (v) => ` \u9ED8\u8BA4 ${v}\u3002`,
  limitName: (k3) => {
    var _a, _b;
    return (_b = (_a = LIMIT_TEXT_ZH[k3]) == null ? void 0 : _a[0]) != null ? _b : k3;
  },
  limitDesc: (k3) => {
    var _a, _b;
    return (_b = (_a = LIMIT_TEXT_ZH[k3]) == null ? void 0 : _a[1]) != null ? _b : "";
  },
  // ── v0.25.0 学习画像面板（ReportView）──
  viewTitleReport: "\u5B66\u4E60\u753B\u50CF",
  cmdOpenReport: "\u6253\u5F00\u5B66\u4E60\u753B\u50CF",
  tipReport: "\u5B66\u4E60\u753B\u50CF\uFF1A\u8FD9\u672C\u4E66\u4F60\u54EA\u91CC\u5F3A\u3001\u54EA\u91CC\u5361",
  reportLoading: "\u5728\u62FF\u753B\u50CF\u2026",
  reportNoFile: "\u6253\u5F00\u4E00\u7BC7 Markdown \u7B14\u8BB0\uFF0C\u8FD9\u91CC\u4F1A\u663E\u793A\u5B83\u7684\u5B66\u4E60\u753B\u50CF\u3002\u4E0B\u9762\u662F\u8FD9\u4E2A\u5E93\u91CC\u5DF2\u6709\u7684\u4E66\u3002",
  reportNotRegistered: "\u8FD9\u7BC7\u7B14\u8BB0\u8FD8\u6CA1\u5728\u82CF\u683C\u62C9\u5E95\u91CC\u95EE\u8FC7\u3002\u5148\u5728\u9762\u677F\u91CC\u6846\u9009\u4E00\u6BB5\u63D0\u95EE\uFF0C\u753B\u50CF\u624D\u6709\u539F\u6599\u3002",
  reportNoTurns: "\u8FD9\u672C\u4E66\u8FD8\u6CA1\u6709\u5BF9\u8BDD\u8BB0\u5F55\u3002",
  btnAnalyze: "\u5206\u6790\u8FD9\u672C\u4E66",
  btnResume: "\u7EE7\u7EED\u5206\u6790",
  btnRecompute: "\u91CD\u7B97",
  btnRecomputeSure: "\u786E\u5B9A\u91CD\u7B97\uFF1F\u4ECE\u5934\u518D\u7F16\u4E00\u904D\uFF0C\u6309\u8F6E\u8BA1\u8D39",
  btnCancel: "\u53D6\u6D88",
  btnStop: "\u505C\u6B62",
  reportUnrated: "\u672A\u8BC4",
  reportNoMastery: "\u2014",
  reportColAxis: "\u80FD\u529B\u8F74",
  reportColScore: "\u5206",
  reportColMastery: "\u638C\u63E1",
  reportColN: "\u8BC1\u636E",
  reportWhyTitle: "\u8FD9\u4E00\u5206\u600E\u4E48\u6765\u7684",
  reportGapsTitle: "\u81EA\u9648\u76F2\u533A",
  reportEvidenceTitle: "\u8BC1\u636E",
  reportVaultTitle: "\u8FD9\u4E2A\u5E93\u91CC\u7684\u4E66",
  reportVaultEmpty: "\u8FD9\u4E2A\u5E93\u91CC\u8FD8\u6CA1\u6709\u767B\u8BB0\u8FC7\u7684\u4E66\u3002",
  reportVaultDown: "\u4E66\u67B6\u6682\u65F6\u62FF\u4E0D\u5230\uFF1Asidecar \u6CA1\u5E94\u7B54\u3002",
  reportColBook: "\u4E66",
  reportColTurns: "\u8F6E",
  reportColAxes: "\u8F74",
  reportColWeakest: "\u6700\u5F31",
  reportColAskedMost: "\u95EE\u5F97\u6700\u591A",
  reportNoKeyHint: "\u8FD8\u6CA1\u914D\u6A21\u578B\u94A5\u5319\uFF0C\u6682\u65F6\u53EA\u80FD\u770B\u5DF2\u6709\u7684\u753B\u50CF\u3002\u5230\u8BBE\u7F6E \u2192 Socrates \u586B API Key \u540E\u518D\u6765\u5206\u6790\u3002",
  reportNotAnalyzed: (turns) => `\u8FD9\u672C\u4E66\u6709 ${n(turns)} \u8F6E\u5BF9\u8BDD\uFF0C\u8FD8\u6CA1\u5206\u6790\u8FC7\u3002\u5206\u6790\u8981\u628A\u6BCF\u4E00\u8F6E\u4EA4\u7ED9\u4E3B\u6A21\u578B\u7F16\u7801\uFF0C\u6309\u8F6E\u8BA1\u8D39\u3002`,
  reportProgress: (coded, total, tokens) => `\u5DF2\u7F16\u7801 ${n(coded)} / ${n(total)} \u8F6E \xB7 \u672C\u6B21 ${k(tokens)} token`,
  reportTurns: (total, coded, meta) => `${n(total)} \u8F6E \xB7 \u5DF2\u7F16\u7801 ${n(coded)} \xB7 \u5176\u4E2D ${n(meta)} \u8F6E\u662F\u64CD\u4F5C\u8BB0\u5F55`,
  reportDegraded: (remaining) => `\u8FD8\u6709 ${n(remaining)} \u8F6E\u6CA1\u7F16\u7801\u3002\u914D\u597D\u6A21\u578B\u94A5\u5319\u3001\u518D\u6253\u5F00\u8FD9\u9875\u4F1A\u81EA\u52A8\u8865\u4E0A\u3002`,
  reportLegacy: (count) => `\u5176\u4E2D ${n(count)} \u8F6E\u662F v0.24.0 \u4E4B\u524D\u7684\u65E7\u8BB0\u5F55\uFF1A\u53EA\u8FDB\u9891\u7387\u7EDF\u8BA1\uFF0C\u4E0D\u8FDB\u5206\u6570\u3002`,
  reportGivenUp: (count) => `${n(count)} \u8F6E\u6A21\u578B\u4E09\u6B21\u90FD\u6CA1\u7ED9\u51FA\u5408\u89C4\u7F16\u7801\uFF0C\u5DF2\u653E\u5F03\u3002`,
  reportTurnRef: (idx) => `\u7B2C ${idx} \u8F6E`,
  reportMerged: (count) => `${count} \u6B21\u767B\u8BB0\u5408\u5E76`,
  reportRadarLabel: (count) => `${count} \u6839\u80FD\u529B\u8F74\u7684\u96F7\u8FBE\u56FE`,
  reportMastery: (pct, obs) => `\u638C\u63E1\u6982\u7387 ${pct}\uFF0C\u6765\u81EA ${obs} \u6B21\u53EF\u5224\u5B9A\u7684\u89C2\u6D4B`,
  reportScoreTip: (score) => `\u89C4\u5219\u5206 ${score} / 10`,
  reportEvidenceCount: (count, legacy) => legacy > 0 ? `${count} \u8F6E\uFF08\u65E7 ${legacy}\uFF09` : `${count} \u8F6E`,
  reportCodedAt: (stamp) => `\u4E0A\u6B21\u7F16\u7801 ${stamp}`,
  reportSpend: (tokens) => `\u753B\u50CF\u7D2F\u8BA1 ${k(tokens)} token`,
  reportAxisScore: (name, score) => `${name} ${score}`,
  reportAxisN: (name, count) => `${name} \xD7${count}`,
  reportType: (typ) => {
    var _a;
    return (_a = TYPE_ZH[typ]) != null ? _a : typ;
  },
  reportVerify: (outcome) => {
    var _a;
    return (_a = VERIFY_ZH[outcome]) != null ? _a : "";
  },
  reportRejectRight: "\u9876\u5BF9\u4E86",
  reportRejectWrong: "\u9876\u9519\u4E86",
  errReportFailed: (detail) => `\u753B\u50CF\u6CA1\u62FF\u5230\uFF1A${detail}`,
  errReportUnreachable: (detail) => `\u8FDE\u4E0D\u4E0A sidecar\uFF0C\u753B\u50CF\u62FF\u4E0D\u5230\uFF1A${detail}`,
  errReportStalled: "\u7F16\u7801\u6CA1\u6709\u63A8\u8FDB\uFF0C\u5DF2\u505C\u4E0B\uFF1Asidecar \u8FDE\u7EED\u4E09\u6B21\u6CA1\u7F16\u51FA\u65B0\u7684\u8F6E\u6B21\u3002\u91CD\u5F00\u8FD9\u9875\u4F1A\u518D\u8BD5\u3002",
  setSidecarDesc: "\u672C\u673A\u670D\u52A1\u7684\u5730\u5740\u3002\u4E00\u822C\u4E0D\u7528\u6539\u3002\u63D2\u4EF6\u53EA\u4F1A\u5F80 loopback \u4E0A\u62C9\u8D77\u8FDB\u7A0B\u3002"
};

// src/i18n/en.ts
var NF2 = new Intl.NumberFormat("en-US");
var n2 = (v) => typeof v === "number" ? NF2.format(v) : "?";
var k2 = (v) => {
  if (typeof v !== "number" || !Number.isFinite(v)) return "?";
  const a = Math.abs(v);
  if (a < 1e3) return String(Math.round(v));
  return `${(v / 1e3).toFixed(a >= 1e5 ? 0 : 1)}k`;
};
var TYPE_EN = {
  ASK: "asking",
  VERIFY: "self-check",
  DEMAND: "demand",
  REJECT: "pushback",
  GAP: "blind spot",
  DECLARE: "declared understood",
  META: "bookkeeping"
};
var VERIFY_EN = {
  confirmed: "confirmed",
  corrected: "corrected",
  unclear: "unjudged"
};
var LIMIT_TEXT_EN = {
  probe_max_per_window: ["Deep digs per hour", "Counted across sessions \u2014 opening new ones won't get around it."],
  probe_every_n_rounds: ["Rounds between deep digs", "0 means dig on every substantive reply (today's behaviour)."],
  probe_keep_per_run: [
    "Questions kept per dig",
    "Note: only one is released per round \u2014 the rest queue up and are dropped after 6 rounds. Raising this mostly grows the discard pile."
  ],
  max_tokens_chat: [
    "Token cap per turn",
    "0 = no cap. This budgets the tool loop: once it's hit, the tutor still writes one answer from what it already has, and that shot is not capped. Actual spend therefore runs over the number you set \u2014 by how much depends on how much was read this turn, not by any fixed ratio."
  ],
  max_tokens_probe: ["Token cap per background dig", "0 = no cap. Set it below the cost of one dig and no dig runs at all."],
  max_tokens_cross_book: [
    "Token cap for reading other textbooks",
    "0 = no cap. It answers \xABthis turn has burned X already, don't open another book\xBB \u2014 other books get resent every round, so the cost compounds."
  ],
  compact_chat_tokens: [
    "Auto-fold the main chat into a summary at this window size",
    "0 = don't auto-fold (the command palette can still fold by hand). When the last prompt hits this many tokens, the next turn starts by folding older rounds into a summary with line anchors; the sidebar bubbles stay. This is not a spend cap, and it does not drop old turns."
  ],
  max_tool_rounds: ["Tool calls per answer", "Reading this handbook is free; other textbooks have the two gates below."],
  fast_context_tokens: [
    "Context cap for the fast model",
    "Only applies while Fast Mode is on. The fast model's window is 131072 for input and output combined, leaving at most 114688 for input; going over is rejected outright by the provider, so this default keeps some headroom. If it still will not fit, that turn falls back to the base model and the conversation carries on. 0 = no compression (not recommended)."
  ],
  cross_book_chars: ["Character budget for other textbooks", "Reading this handbook doesn't count \u2014 normal reading is never affected."],
  cross_book_reads: ["Read count for other textbooks", "A byte budget alone can't cap this: reading one line at a time never exhausts it."],
  probe_max_per_session: ["Deep digs per conversation", "Doesn't stop \xABopen lots of new sessions\xBB \u2014 the hourly quota does."],
  probe_pending_cap: ["Stop digging once this many are queued", "This saves waste, not frequency."],
  probe_max_reads: ["Passages a dig may read", "Reads are executed by code \u2014 the model never gets a loop of its own."],
  probe_read_lines: ["Lines per passage", ""],
  probe_timeout_s: [
    "Timeout per dig call (seconds)",
    "Raise it and a dig may outlast the turn you're on; questions aren't lost, they ride along on the next round."
  ],
  probe_min_reply_chars: ["Minimum reply length to dig", "Short replies are usually a single counter-question \u2014 nothing to dig into."],
  probe_concurrency: [
    "Concurrent digs",
    "Per sidecar, not per book. With several vaults open the knob points the wrong way: the test is \xABdigs in flight globally < your number\xBB, so turning it down makes it easier for another vault to crowd you out. To spend less, use the hourly count or the token caps above."
  ]
};
var en = {
  bigBangEarlier: "Earlier change",
  errBigBangUpgrade: "Update and start a sidecar that supports Big Bang first.",
  bigBangReady: "A fresh perspective",
  bigBangPrompt: "Ask another question about this passage. This conversation runs independently.",
  bigBangAdd: "Add Agent",
  bigBangLimit: "Up to 4 agents at once",
  bigBangTitle: "Big Bang \xB7 Experimental",
  bigBangClose: "Close this agent (stop task, keep history)",
  bigBangStop: "Stop this task",
  bigBangStopping: "Stopping\u2026",
  bigBangStopped: "Stopped",
  bigBangAgent: (n3) => `Agent ${n3}`,
  errBigBangConflict: "The note changed. The agent must re-read it and request new approval.",
  bigBangUndo: "Undo the latest shared-note change (including other agents' edits)",
  bigBangRedo: "Redo the shared-note change",
  appName: "Socrates",
  viewTitle: "Socrates",
  ribbonTooltip: "Open Socrates",
  cmdAskSelection: "Ask about the current selection",
  cmdOpenPanel: "Open the panel",
  cmdCompactSession: "Compact this session",
  btnUseSelection: "Use selection",
  btnAsk: "Ask",
  askPlaceholder: "Ask something\u2026",
  askPlaceholderVision: "Ask something, or paste an image\u2026",
  tipUseSelection: "Highlight a passage in your note, then hand it over here",
  tipNewSession: "Start over \u2014 drops this session's memory and selection",
  tipCompact: "Fold earlier turns into a summary. Sidebar bubbles stay; the next request will not resend the full text.",
  compactMarker: "Earlier turns folded into the summary",
  kickerCompact: "Summary",
  tipFastOff: "Fast Mode is off. Turn it on and read-only turns get answered by the fast model.",
  tipFastOn: "Fast Mode is on: read-only turns run on the fast model. Turns that rewrite your note switch back to the base model.",
  tipFastTrimmed: (steps) => `Fast Mode is on. This turn's context did not fit the fast model's window, so it was trimmed: ${steps}. Your session itself was not folded.`,
  kickerRoute: "Model switch",
  noteRouteEdit: "This turn wants to rewrite your note, so it was handed back to the base model. Ignore the half-sentence above \u2014 that was the fast model.",
  noteRouteTooBig: "This turn's context would not fit the fast model's window, so it was handed back to the base model.",
  noteRouteNoKey: "Fast Mode is on, but the fast model has no API key yet, so this turn ran on the base model. Add one in settings and it starts working.",
  noteRouteHostGap: "Fast Mode is on, but the fast key stored on this machine belongs to a different endpoint, so this turn ran on the base model. Open settings and save the API key again for the Fast Base URL you have now.",
  noticeFastNoKey: "Fast Mode is on, but there is no API key for the fast model yet, so turns still run on the base model. Add one in settings.",
  noticeFastKeyHostMismatch: (keyHost, urlHost) => `The fast endpoint changed. The key stored on this machine is still for ${keyHost} and will not be sent to ${urlHost}, so every turn falls back to the base model. Save an API key for ${urlHost}.`,
  noticeCompactEmpty: "Nothing to fold yet",
  noticeCompactPending: "Allow or reject the pending edit first, then compact.",
  noticeCompactBusy: "This conversation is still running \u2014 let it finish first.",
  noticeCompactOk: "Earlier turns are in the summary. Sidebar bubbles stay.",
  tipUndoEmpty: "Nothing to roll back yet. Approve an edit first.",
  tipUndo: (count) => `Roll the whole note back one version (${count} left)`,
  tipRedoEmpty: "Nothing to redo",
  tipRedo: (count) => `Put back what you just undid (${count} left)`,
  healthUnprobed: "sidecar not checked yet",
  healthOkKey: (tail, model) => `sidecar ok \xB7 key stored locally${tail ? ` \u2026${tail}` : ""} \xB7 ${model}`,
  healthOkFallback: (source, model) => `sidecar ok \xB7 dev fallback ${source} \xB7 ${model}`,
  healthNoKey: "sidecar is up \u2014 add your API key under Settings \u2192 Socrates",
  healthDown: "can't reach sidecar",
  healthStale: "Old service holding the port. Stop then Start in settings to upgrade.",
  // ── Error bubbles (v0.18.0: a failed request no longer fakes streaming) ──
  errNoKey: "No model key yet. Add your API key under Settings \u2192 Socrates, then ask again.",
  errNoVision: "Image understanding is off for this model. Turn it on under Settings \u2192 Socrates. If the endpoint has no vision, it will still reject the image.",
  errVisionTooBig: "Image too large (2MB each, up to 4 images).",
  errVisionTooMany: "At most 4 images per turn.",
  errVisionBadType: "Only png / jpeg / webp / gif.",
  bubbleGoSettings: "Open settings",
  errUnreachable: (detail) => `Can't reach the sidecar (CORS / not running / wrong port): ${detail}`,
  errNoSelection: "Didn't catch a selection. Highlight a passage in the note, then hit \u201CUse selection\u201D.",
  // None of these name a cause. Ageing out is only the most common one — a
  // hand-deleted `.pen/`, a different sidecar, a full disk all land on the
  // same 404, and sending the reader chasing a cause we don't know is worse
  // than saying plainly what happened.
  noticeSessionArchived: "This conversation is gone from the sidecar (most likely cleaned up past its retention window). A fresh one is open and your last question was re-sent.",
  noticeSessionArchivedResendFailed: "This conversation is gone from the sidecar (most likely cleaned up past its retention window). A fresh one is open, but your last question could not be re-sent \u2014 the error below says why.",
  noticeSessionRenewed: "This note's previous conversation is gone from the sidecar (most likely cleaned up past its retention window). A fresh one is open.",
  bubbleSessionRenewed: "This conversation's previous record was cleaned up past its retention window \u2014 this is a freshly opened one. If the old thread on the original note is still within retention, select a passage there to bring it back.",
  noticeNoteRestored: (note) => `Switched back to the conversation for \u201C${note}\u201D. To keep asking, highlight a passage in the note first.`,
  errSessionGone: (note) => `The previous conversation for \u201C${note}\u201D was cleaned up. Highlight a passage to start a fresh one.`,
  errSessionArchivedHard: "This conversation is gone from the sidecar, and a fresh one couldn't be opened either.",
  errApprovalArchived: "The conversation this edit belongs to is gone from the sidecar. The note was not modified. A fresh conversation is open; just ask again.",
  errApprovalArchivedHard: "The conversation this edit belongs to is gone from the sidecar, and a fresh one couldn't be opened either. The note was not modified.",
  errApprovalUntouched: " (The write-back never ran \u2014 your note was not modified.)",
  usage: (ctx, out) => `context ${k2(ctx)} \xB7 reply ${k2(out)}`,
  spendTurn: (tok) => `turn ${k2(tok)}`,
  spendSession: (tok) => `session ${k2(tok)}`,
  spendTipTotal: (tok) => `${k2(tok)} tokens this session`,
  spendTipRow: (label, inTok, outTok) => `${label}  in ${k2(inTok)} / out ${k2(outTok)}`,
  spendTipCached: (tok) => `${k2(tok)} of that was cache hits (much cheaper)`,
  spendKindChat: "Tutor",
  spendKindProbe: "Deep dig",
  spendKindFold: "Write-back",
  spendTipNote: "Tokens only \u2014 not converted to money",
  kickerYou: "You",
  kickerPen: "Socrates",
  kickerReadTool: "reading",
  kickerEditTool: "editing",
  kickerFetchTool: "fetch",
  kickerSearchTool: "search",
  toolOk: "ok",
  toolDenied: "blocked",
  noPath: "(no path)",
  streamPlaceholder: "\u2026",
  emptyHint: "Highlight a passage in a note \u2014 Live Preview or Reading view, either works \u2014 then hit \u201CUse selection\u201D.",
  splashTagline: "The Socratic Method",
  splashSubline: "Socrates-agent",
  phases: {
    thinking: "Thinking it over\u2026",
    writing: "Writing\u2026",
    reading: "Flipping through the manual\u2026",
    tool: "Working on it\u2026",
    selection_capped: "Selection too long \u2014 first packet has the start; the rest is read on demand",
    overflow: "Context overflowed; returning this batch and retrying\u2026"
  },
  thinkTick: (chars) => `Socrates is thinking\u2026 ${k2(chars)} chars`,
  statusEditing: "Editing the note\u2026",
  statusDeclined: "Declined \u2014 letting it wrap up\u2026",
  statusAwaitApproval: "Waiting for you to approve this edit",
  statusRollingBack: "Rolling back\u2026",
  statusRedoing: "Redoing\u2026",
  approvalTitle: "Approve this edit",
  approvalTarget: (tool, path) => `${tool} \u2192 ${path}`,
  approvalCurrentHandbook: "current manual",
  approvalTruncated: (n3) => `\u2026 ${n3} more characters not shown`,
  approvalWarn: "The model picked this snippet itself. Nothing touches your note until you allow it.",
  approvalOldLabel: "--- before ---",
  approvalNewLabel: "+++ after +++",
  btnApprove: "Allow this edit",
  btnReject: "Reject",
  noticeUnreachable: "Can't reach the sidecar \u2014 check the error up in the panel",
  noticeRegisterFirst: "Pick a passage first so this note gets registered",
  errSessionGoneNoHandbook: "This conversation is gone from the sidecar, and no note is registered in the panel yet, so a fresh one can't be opened. Pick a passage first.",
  noticeResolveApproval: "Allow or reject the pending edit first",
  noticeUseSelectionFirst: "Hit \u201CUse selection\u201D first",
  noticeRolledBack: "Rolled back one version",
  noticeRedone: "Redone",
  confirmNewSession: "A new session drops what the model remembers from this one, and the current selection. Go ahead?",
  confirmRollback: "The whole note goes back one version \u2014 anything you edited by hand after that goes too. Sure?",
  msgRolledBack: "Rolled back one version.",
  msgRedone: "Put back the edit you undid.",
  errNoRightLeaf: "No pane available in the right sidebar",
  errViewNotMounted: "The Socrates view didn't mount",
  errNeedDesktopVault: "Needs a desktop vault (FileSystemAdapter)",
  noticeSidecarDown: "The local service isn't up. Open Settings \u2192 Socrates and check the status at the top.",
  noticeKeySaved: "Key saved to the local sidecar (~/.socrates-pen/llm.json). It never enters this vault.",
  noticeKeySaveFailed: (detail) => `Couldn't save (${detail}). The key was written nowhere.`,
  noticeKeySaveOldSidecar: "Couldn't save: an old service is holding the port and can't take the new key. Hit Stop then Start to upgrade. The key is still in the box and was written nowhere.",
  noticeKeyCleared: "Key removed from the local sidecar.",
  noticeKeyMigrated: "Your API key moved from data.json to ~/.socrates-pen/llm.json on this machine \u2014 Sync / iCloud / git no longer carry it. If this vault was ever synced or committed, rotate that key at your provider.",
  noticeSidecarTooOld: "The local service is an old version and can't take the new key. Under Settings \u2192 Socrates, hit Stop then Start to upgrade \u2014 the key migrates right after, and until then it stays in data.json.",
  noticeSidecarAlready: "The local service is already running.",
  noticeSidecarStale: "An old service is holding the port. Hit Stop then Start to upgrade.",
  noticeSidecarAlreadyStopped: "The local service wasn't running.",
  noticeSidecarStoppedOwned: "Stopped the local service.",
  noticeSidecarStoppedLeftover: (command) => command && command !== "?" ? `Stopped the old service holding the port (${command}).` : "Stopped the old service holding the port.",
  noticeSidecarStoppedShared: (command) => command && command !== "?" ? `Stopped the local service holding the port (${command} \u2014 another vault or left over from last time).` : "Stopped the local service holding the port (another vault or left over from last time).",
  noticeSidecarStoppedOther: (command) => command && command !== "?" ? `Stopped another process holding the port (${command}).` : "Stopped another process holding the port.",
  noticeSidecarStopFailed: "Couldn't stop it. See the status line above.",
  noticeKeyMigrateTimeout: "Couldn't migrate your API key into the local service within 45s (it may still be installing). The key stays in data.json and migrates automatically once the service is ready; to use it right now, paste it once in settings.",
  noticeKeyHostMismatch: (keyHost, urlHost) => `The endpoint changed. The key on this machine is still for ${keyHost} and will not be sent to ${urlHost}. Paste a key for ${urlHost}.`,
  noticeSessionSwitched: (note) => `Switched to the conversation for \u201C${note}\u201D. The previous note's conversation stays with that note \u2014 select in it again to come back.`,
  noticeRightOpened: "The Socrates panel is open in the right sidebar.",
  chips: {
    socratic: { label: "Don't tell me yet \u2014 ask me something", hint: "" },
    explain_zero: { label: "Assume I know nothing, then give me two examples", hint: "" },
    examples: { label: "Just show me examples", hint: "" },
    search: {
      label: "Find the paper / where this came from",
      hint: "Lands in P2. It won't pretend it searched."
    },
    writeback: {
      label: "Write that answer back into the manual",
      hint: "Needs one real answer first"
    }
  },
  setLangName: "\u8BED\u8A00 / Language",
  setLangDesc: "Follows Obsidian's interface language by default.",
  setLangAuto: "Auto (follow Obsidian)",
  setSidecarSvc: "Local service",
  setSidecarSvcDesc: "The plugin creates an isolated Python environment under ~/.socrates-pen, installs the tutor, and binds it to 127.0.0.1. You need Python 3.11+ on this machine. The first run can take a minute (downloads dependencies).",
  setSidecarStart: "Start",
  setSidecarStop: "Stop",
  setSidecarStopping: "Stopping\u2026",
  setSidecarAutoName: "Start when Obsidian opens",
  setSidecarAutoDesc: "On by default. Turn it off to start only from this page.",
  setSidecarPythonName: "Python path",
  setSidecarPythonDesc: "Leave empty to auto-detect python3 / python / py. If none is found, install 3.11+ from python.org.",
  setSidecarPhaseIdle: "Not running",
  setSidecarPhaseChecking: "Checking\u2026",
  setSidecarPhaseInstalling: "Installing the local service (first time is slower)\u2026",
  setSidecarPhaseStarting: "Starting\u2026",
  setSidecarPhaseRunning: "Running",
  setSidecarPhaseStopping: "Stopping\u2026",
  setSidecarPhaseStopped: "Stopped",
  setSidecarPhaseStale: (ver) => ver ? `Old service holding the port (${ver}). Stop then Start to upgrade` : "Old service holding the port. Stop then Start to upgrade",
  setSidecarErrNoPython: "No Python 3.11+ on PATH \u2014 it's needed to create the local environment. Install it, or set an absolute interpreter path below (e.g. /opt/homebrew/bin/python3).",
  setSidecarErrNotLoopback: "The plugin will only start the service on 127.0.0.1 / localhost. Put a loopback Sidecar URL back.",
  setSidecarErrBadUrl: "Sidecar URL isn't a valid address.",
  setSidecarErrInstall: "Install failed. This machine needs access to GitHub and PyPI.",
  setSidecarErrSpawn: "The process didn't start.",
  setSidecarErrHealth: "The process started, but health checks never passed.",
  setSidecarErrStop: "Couldn't stop it.",
  setSidecarErrStopNoPid: "Couldn't stop it: no process found on that port.",
  setSidecarErrOther: (code) => `Couldn't start (${code})`,
  setIntro1: "Key and endpoint go below. The plugin starts the local service \u2014 no terminal. This vault's path is handed over the moment you pick a passage.",
  setIntro2: "The API key lives only on this machine, in the sidecar home (~/.socrates-pen/llm.json, mode 0600) \u2014 never inside this vault, so Sync / iCloud / git can't carry it away.",
  setApiKeyDesc: "Write-only: paste, then Save (Enter or click away still work). Stored on the local sidecar, never in the vault. Save is disabled until the service is up and current. Empty input is ignored; use the button to clear.",
  setKeySave: "Save",
  setKeyStatusSaved: (source, tail) => `Saved${source ? ` (source: ${source})` : ""}${tail ? `, tail \u2026${tail}` : ""}.`,
  setKeyStatusNone: "No key saved yet.",
  setCheckRunning: "Checking with the endpoint\u2026",
  setCheckOk: "Verified against the endpoint.",
  setKeyStatusUnreachable: "Sidecar not running \u2014 key status unknown.",
  setKeyClear: "Clear key",
  setKeepAliveName: "Keep local service running after exit",
  setKeepAliveDesc: "The local service is a Python process on your machine, shared by all vaults. On by default: it survives quitting Obsidian, so reopening is instant. Turn off to stop the one this plugin spawned when it unloads \u2014 don't if another vault is using it.",
  setBaseUrlDesc: "A Chat Completions-compatible address. No trailing slash.",
  setProviderName: "Provider",
  setFastProviderName: "Fast model provider",
  setProviderDesc: "Pick one and the thinking level is sent the way that provider expects. Auto reads the model name and falls back to a generic form. Picking one also prefills the Base URL, without overwriting an address you typed yourself.",
  setProviderAuto: "Auto (from the model name)",
  setProviderGeneric: "Generic OpenAI-compatible",
  providerHint: {
    auto: "Read from the model name: deepseek / gemini / glm / kimi / gpt- and so on pick that provider. Anything else uses the generic form.",
    celeris: "https://inference.celeris.ai/celeris-1-magnus/v1 \xB7 models like celeris-1-magnus \xB7 it has no high tier, so high is sent as xhigh.",
    google: "https://generativelanguage.googleapis.com/v1beta/openai/ \xB7 models like gemini-3-pro \xB7 Gemini 3 cannot turn thinking off, so off drops to the lowest tier.",
    deepseek: "https://api.deepseek.com \xB7 models like deepseek-v4-flash \xB7 it thinks at full effort when no level is given, so off means explicitly off.",
    glm: "https://open.bigmodel.cn/api/paas/v4 \xB7 models like glm-5.3 \xB7 GLM-5.3 cannot turn thinking off, so off drops to the lowest tier.",
    kimi: "https://api.moonshot.ai/v1 \xB7 models like kimi-k3 or kimi-k2.6 \xB7 K3 cannot turn thinking off, and its wire format differs entirely from K2.",
    meta: "https://api.meta.ai/v1 \xB7 models like muse-spark-1.3 \xB7 it always reasons, so off drops to the lowest tier.",
    openai: "https://api.openai.com/v1 \xB7 models like gpt-5 or o3-mini \xB7 the gpt-4 family are not reasoning models, so no reasoning field is sent at all.",
    openrouter: "https://openrouter.ai/api/v1 \xB7 model names carry a vendor prefix, e.g. google/gemini-3-pro \xB7 auto-detection is easiest to get wrong here, so pick explicitly.",
    generic: "Any OpenAI-compatible endpoint. Sends only the common reasoning_effort and never a vendor-specific form \u2014 the safest choice for an endpoint you don't know well."
  },
  setModelName: "Model",
  setModelDesc: "The model string your endpoint expects, e.g. deepseek-v4-flash or gpt-4.1-mini.",
  setVisionName: "Image understanding",
  setVisionDesc: "When on, you can paste or drop images in the chat box. Leave it off for text-only models like DeepSeek. Turn it on for multimodal GLM / Qwen. Pasting while off errors immediately \u2014 the image is not sent.",
  setSecFast: "Fast Mode",
  setFastDesc: "Turns that only ask get answered by a faster model; turns that rewrite your note switch back to the base model above. The toggle is the lightning bolt at the top right of the sidebar. Fill in the fast model's endpoint, name and key here; leaving them empty is not an error, the toggle just will not do anything. The fast model has a much smaller context window, so Fast Mode compresses context automatically \u2014 that only affects the copy sent to it, your session is never folded.",
  setFastBaseUrlDesc: "Chat Completions compatible endpoint for the fast model, no trailing slash.",
  setFastModelName: "Fast model name",
  setFastModelDesc: "The model string on the fast endpoint.",
  setFastKeyName: "Fast model API key",
  setFastKeyDesc: "Write-only like the one above: stored in the local sidecar, never in this vault. The fast model usually lives on a different host, so it needs its own key \u2014 the base key is never reused for it.",
  setFastKeyStatusNone: "No fast model key saved yet.",
  noticeFastKeySaved: "Fast model key saved to the local sidecar, not to this vault.",
  noticeFastKeyCleared: "Fast model key cleared.",
  setThinkingDesc: "off is the lowest; high is the top tier for that endpoint. Keep off if the model doesn't reason.",
  setThinkingOff: "off (default)",
  deepQuotaSpent: "deep dives used up",
  setDeepName: "Dig deeper in the background",
  setDeepDesc: "After each answer, spend one more call looking for a question that reaches across chapters. It only appears if one turns up. Turn this off to keep just the two instant ones.",
  tipDeepPrefix: "\u25C6 ",
  // ── 自定义泡泡（v0.21.0）──
  setSecChips: "Your own buttons",
  setChipsDesc: "Every button in that row on the side panel is a piece of instruction sent to the AI. You can add your own: say what you want done and in what format, then click it. Anything marked as rewriting the note always opens the approval panel first \u2014 the note only changes once you allow it.",
  setChipsEmpty: "No buttons of your own yet. Start from one of the templates below and rework it to match your book.",
  setChipsFull: (max) => `${max} is the limit. More than that just adds a scrollbar to the side panel.`,
  setChipNewFrom: "New from template",
  setChipNewFromDesc: "Copy a starting template, then rework it to match how your own book is laid out.",
  setChipPresetBlank: "Blank",
  setChipNewBtn: "Add",
  setChipLabelName: "Button text",
  setChipLabelDesc: "Leave empty to use the first line of the instruction below. This name is never translated \u2014 both interface languages show exactly what you typed.",
  setChipHintName: "Tooltip",
  setChipHintDesc: "Optional. Shown when you hover the button, to remind you what it does.",
  setChipPromptName: "Instruction",
  setChipPromptDesc: "What gets sent to the AI when you click this button. Spell out which section to write into and what format to follow \u2014 the more specific, the more closely it follows. This one is required: an empty button is no different from just asking freely.",
  setChipPromptPlaceholder: "Take the passage I selected and ...",
  setChipWritebackName: "Rewrites the note",
  setChipWritebackDesc: "On: tells the AI this turn edits the note, so it reads the passage first, proposes a change, and only writes once you approve. Off: it answers in the conversation only. Note this switch sets expectations for the AI, it is not a lock on the file \u2014 what actually stops a write is the approval panel, which is always there.",
  setChipEnabledName: "Show in the side panel",
  setChipEnabledDesc: "Turn off to tuck it away without deleting it. Half-finished ones can wait here.",
  setChipDraftNote: "No instruction yet, so it stays out of the side panel. It appears once you write one.",
  setChipDelete: "Delete this button",
  setChipDeleteBtn: "Delete",
  setChipDeleteConfirm: "Click again to confirm",
  setChipUnnamed: "(unnamed)",
  setChipChars: (n22, max) => `${n22} / ${max} characters`,
  setSecUsage: "Spend",
  setUsageLoading: "Reading the ledger\u2026",
  setUsageDown: "Can't reach the sidecar, no ledger to read.",
  setUsageNote: "Counted from v0.10.0 onward. The number in the status bar is \xABthis session\xBB; this one is \xABall of it\xBB. Tokens only \u2014 not converted to money. Only sessions still inside the retention window are counted (empty ones last 1 day, ones you actually talked in last 7), so this number goes down as old sessions are swept.",
  setUsageTotal: (tok, sessions) => `${n2(tok)} tokens across ${n2(sessions)} conversations`,
  setUsageBreak: (chat, probe, fold) => `tutor ${n2(chat)} \xB7 deep dig ${n2(probe)} \xB7 write-back ${n2(fold)}`,
  setUsageCached: (tok) => `${n2(tok)} of that was cache hits (much cheaper)`,
  setUsageEmpty: "Nothing on the ledger yet. Counting starts with conversations after the v0.10.0 upgrade.",
  setSecCommon: "Basics",
  setSecAdvanced: "Advanced (cost and speed gates \u2014 leave them alone if unsure)",
  setAdvancedNote: "These defaults were tuned against real runs. Before changing one, be clear about what you're saving \u2014 most of the time the knob you want is one of the three token caps above, not these.",
  setDefaultHint: (v) => ` Default ${v}.`,
  limitName: (k3) => {
    var _a, _b;
    return (_b = (_a = LIMIT_TEXT_EN[k3]) == null ? void 0 : _a[0]) != null ? _b : k3;
  },
  limitDesc: (k3) => {
    var _a, _b;
    return (_b = (_a = LIMIT_TEXT_EN[k3]) == null ? void 0 : _a[1]) != null ? _b : "";
  },
  // ── v0.25.0 learner profile panel (ReportView) ──
  viewTitleReport: "Learner profile",
  cmdOpenReport: "Open learner profile",
  tipReport: "Learner profile: where you are strong and where you get stuck in this book",
  reportLoading: "Loading the profile\u2026",
  reportNoFile: "Open a Markdown note to see its learner profile. The books in this vault are listed below.",
  reportNotRegistered: "This note has not been asked about in Socrates yet. Select a passage in the panel and ask first; the profile needs material.",
  reportNoTurns: "No conversation on this book yet.",
  btnAnalyze: "Analyze this book",
  btnResume: "Resume analysis",
  btnRecompute: "Recompute",
  btnRecomputeSure: "Recompute from scratch? Billed per turn",
  btnCancel: "Cancel",
  btnStop: "Stop",
  reportUnrated: "unrated",
  reportNoMastery: "\u2014",
  reportColAxis: "Skill",
  reportColScore: "Score",
  reportColMastery: "Mastery",
  reportColN: "Evidence",
  reportWhyTitle: "How this score was built",
  reportGapsTitle: "Self-declared blind spots",
  reportEvidenceTitle: "Evidence",
  reportVaultTitle: "Books in this vault",
  reportVaultEmpty: "No registered books in this vault yet.",
  reportVaultDown: "The shelf is unavailable: the sidecar did not answer.",
  reportColBook: "Book",
  reportColTurns: "Turns",
  reportColAxes: "Axes",
  reportColWeakest: "Weakest",
  reportColAskedMost: "Asked most",
  reportNoKeyHint: "No model key yet, so only the existing profile is shown. Add an API key under Settings \u2192 Socrates, then come back to analyze.",
  reportNotAnalyzed: (turns) => `This book has ${n2(turns)} turns and has not been analyzed. Analysis sends every turn to the main model for coding and is billed per turn.`,
  reportProgress: (coded, total, tokens) => `Coded ${n2(coded)} / ${n2(total)} turns \xB7 ${k2(tokens)} tokens this run`,
  reportTurns: (total, coded, meta) => `${n2(total)} turns \xB7 ${n2(coded)} coded \xB7 ${n2(meta)} of them are bookkeeping`,
  reportDegraded: (remaining) => `${n2(remaining)} turns are still uncoded. Add a model key and reopen this page to fill them in.`,
  reportLegacy: (count) => `${n2(count)} turns predate v0.24.0: they count toward frequencies only, never toward scores.`,
  reportGivenUp: (count) => `${n2(count)} turns got no valid coding after three attempts and were given up.`,
  reportTurnRef: (idx) => `turn ${idx}`,
  reportMerged: (count) => `${count} registrations merged`,
  reportRadarLabel: (count) => `Radar chart of ${count} skill axes`,
  reportMastery: (pct, obs) => `Mastery probability ${pct}, from ${obs} judged observations`,
  reportScoreTip: (score) => `Rule score ${score} / 10`,
  reportEvidenceCount: (count, legacy) => legacy > 0 ? `${count} turns (${legacy} old)` : `${count} turns`,
  reportCodedAt: (stamp) => `Last coded ${stamp}`,
  reportSpend: (tokens) => `Profile total ${k2(tokens)} tokens`,
  reportAxisScore: (name, score) => `${name} ${score}`,
  reportAxisN: (name, count) => `${name} \xD7${count}`,
  reportType: (typ) => {
    var _a;
    return (_a = TYPE_EN[typ]) != null ? _a : typ;
  },
  reportVerify: (outcome) => {
    var _a;
    return (_a = VERIFY_EN[outcome]) != null ? _a : "";
  },
  reportRejectRight: "and was right",
  reportRejectWrong: "and was wrong",
  errReportFailed: (detail) => `Could not load the profile: ${detail}`,
  errReportUnreachable: (detail) => `Cannot reach the sidecar, so no profile: ${detail}`,
  errReportStalled: "Coding stopped making progress: the sidecar coded no new turns three times in a row. Reopen this page to retry.",
  setSidecarDesc: "Where the local service listens. You rarely need to touch this. The plugin only spawns on loopback."
};

// src/i18n/index.ts
var DICTS = { zh, en };
var current = zh;
function coerceLangPref(raw) {
  return raw === "zh" || raw === "en" || raw === "auto" ? raw : "auto";
}
function obsidianLang() {
  let raw = "";
  try {
    if (typeof import_obsidian.getLanguage === "function") raw = (0, import_obsidian.getLanguage)() || "";
  } catch (e) {
  }
  if (!raw) {
    try {
      raw = window.localStorage.getItem("language") || "";
    } catch (e) {
    }
  }
  if (!raw) raw = document.documentElement.lang || "";
  return raw.toLowerCase().startsWith("zh") ? "zh" : "en";
}
function resolveLang(pref) {
  return pref === "auto" ? obsidianLang() : pref;
}
function setLang(lang) {
  current = DICTS[lang];
}
function currentLang() {
  return current === zh ? "zh" : "en";
}
function t() {
  return current;
}
function phaseText(phase, fallback) {
  return t().phases[phase] || fallback;
}
function chipLabel(id, fallback) {
  var _a;
  return ((_a = t().chips[id]) == null ? void 0 : _a.label) || fallback || id;
}
function chipHint(id, fallback) {
  var _a;
  return ((_a = t().chips[id]) == null ? void 0 : _a.hint) || fallback;
}
for (const k3 of Object.keys(zh)) {
  const a = zh[k3];
  const b = en[k3];
  if (typeof a === "function" && typeof b === "function" && a.length !== b.length) {
    console.warn(
      `[socrates-pen] i18n: en.${String(k3)} \u6536 ${b.length} \u4E2A\u53C2\u6570\uFF0Czh \u6536 ${a.length} \u4E2A\u2014\u2014\u82F1\u6587\u6587\u6848\u5F88\u53EF\u80FD\u6F0F\u7528\u4E86\u4E00\u4E2A\u5360\u4F4D\u7B26`
    );
  }
}

// src/customchips.ts
var LABEL_MAX = 40;
var HINT_MAX = 80;
var PROMPT_MAX = 4e3;
var CUSTOM_CHIP_MAX = 20;
var CUSTOM_ID_RE = /^u\.[A-Za-z0-9]{1,32}$/;
var CTRL_KEEP_WS = /[\u0000-\u0008\u000b\u000c\u000e-\u001f\u007f]/g;
var CTRL_ALL = /[\u0000-\u001f\u007f]/g;
var LONE_SURROGATE = /[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?<![\uD800-\uDBFF])[\uDC00-\uDFFF]/g;
function newChipId(seed = Math.random()) {
  const a = Date.now().toString(36);
  const b = Math.floor(seed * 16777215).toString(36);
  return `u.${a}${b}`.slice(0, 34);
}
function charCount(s) {
  return Array.from(s).length;
}
function clampChars(s, cap) {
  const cps = Array.from(s);
  return cps.length <= cap ? s : cps.slice(0, cap).join("");
}
function oneLine(raw, cap) {
  if (typeof raw !== "string") return "";
  return clampChars(raw.replace(CTRL_ALL, " ").split(/\s+/).filter(Boolean).join(" "), cap);
}
function sanitizeChipPrompt(raw) {
  if (typeof raw !== "string") return "";
  let s = raw.replace(/\r\n?|\u2028|\u2029/g, "\n").replace(/\uFEFF/g, "");
  s = s.replace(CTRL_KEEP_WS, "");
  s = s.replace(LONE_SURROGATE, "");
  s = s.split("<!--pen:compact-->").join("").split("<!--pen:chips").join("");
  s = s.replace(/\n{3,}/g, "\n\n").trim();
  s = clampChars(s, PROMPT_MAX);
  return s.replace(/^(\[[^\]\n]*\])/gm, " $1");
}
function chipDisplayLabel(c) {
  var _a;
  return oneLine(c.label, LABEL_MAX) || oneLine((_a = c.prompt.split("\n").find((l) => l.trim())) != null ? _a : "", LABEL_MAX);
}
function chipIsDraft(c) {
  const prompt = sanitizeChipPrompt(c.prompt);
  return !prompt || !chipDisplayLabel({ label: c.label, prompt });
}
function coerceCustomChips(raw) {
  if (!Array.isArray(raw)) return [];
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  for (const item of raw) {
    if (!item || typeof item !== "object") continue;
    const o = item;
    const prompt = sanitizeChipPrompt(o.prompt);
    let id = typeof o.id === "string" && CUSTOM_ID_RE.test(o.id) ? o.id : "";
    if (!id || seen.has(id)) id = newChipId();
    while (seen.has(id)) id = `${id}z`.slice(0, 34);
    seen.add(id);
    out.push({
      id,
      label: oneLine(o.label, LABEL_MAX),
      hint: oneLine(o.hint, HINT_MAX),
      prompt,
      writeback: o.writeback === true,
      enabled: o.enabled !== false,
      format: oneLine(o.format, 32)
    });
    if (out.length >= CUSTOM_CHIP_MAX) break;
  }
  return out;
}
function chipPayload(c) {
  return {
    id: c.id,
    // 发**显示用**的那个名字，不是裸 label。后端拿它写进 ui_messages 落盘，
    // 空 label 会让那条历史气泡永远显示成裸 u.xxx（pen/session.py 的
    // chip_label 查不到就返回 id 本身），换机器换语言都救不回来。
    label: chipDisplayLabel(c),
    prompt: c.prompt,
    writeback: c.writeback,
    format: c.format
  };
}

// src/chippresets.ts
var F = "```";
var PRESET_CHIPS = [
  {
    key: "quiz",
    label: { zh: "\u628A\u8FD9\u6BB5\u51FA\u6210\u4E00\u9053\u9898", en: "Turn this into a question" },
    hint: { zh: "\u6309 Qn \u4F53\u4F8B\u5199\u8FDB\u9898\u76EE\u90A3\u4E00\u8282", en: "Writes a Qn-style item into the question section" },
    writeback: true,
    prompt: {
      zh: String.raw`就我划中的这一段，出一道自测题，写进这一关的题目小节（这本书里叫「第五拍 · Meta Question 门禁」，你的书里多半叫别的名字，照你自己的体例改这一句）。

体例照抄这本手册已有的题：
- 题干独占一行，格式 **Qn. 一句话的问题？**，n 接着这一关已有的最大编号往下排；这一关还没有题就从 1 开始
- 题干下面是若干条以「- 」开头的短析，依次是 **TL;DR：** / **(a) 概念/对比：** / **(b) 机制：** / **(c) 反例：**
- 最后独占一行写 〔回读：…〕，指回本关里该复习的那一小节

只出一道题。问的必须是我划中这段里真正会绊住人的地方，不要问符号怎么写、引号怎么转义这类抠字眼的。`,
      en: String.raw`Take the passage I selected and write one self-check question into this level's question section (in this handbook it is called "Beat 5 - Meta Question Gate"; yours is probably named differently, so edit this sentence to match your own layout).

Follow the format of the questions already in this handbook:
- The stem goes on its own line as **Qn. one-sentence question?** where n continues from the highest number already used in this level; start at 1 if this level has none yet
- Under the stem, several short notes each starting with "- ", in this order: **TL;DR:** / **(a) concept/contrast:** / **(b) mechanism:** / **(c) counterexample:**
- The last line, on its own, reads [review: ...] pointing back to the subsection worth rereading

Write exactly one question. Ask about what actually trips people up in the passage I selected, not about notation or escaping.`
    }
  },
  {
    key: "explain",
    label: { zh: "\u628A\u89E3\u91CA\u6298\u8FDB\u539F\u6587", en: "Fold an explanation in" },
    hint: {
      zh: "\u5305\u6210 details \u6298\u53E0\u5757\uFF0C\u63D2\u5728\u6211\u5212\u4E2D\u90A3\u6BB5\u540E\u9762",
      en: "Wraps it in a details block after the passage I selected"
    },
    writeback: true,
    prompt: {
      zh: String.raw`为我划中的这一段写一段解释，收成一个可折叠块，插在这一段的后面。

如果我们刚才已经聊过这段内容，就把那段解答收进去，别重写一遍；如果还没聊过，就现在直接讲清楚。

只输出一个 <details> 块，格式必须是：

<details>

<summary>实例 N：一句话看点</summary>

（正文）

</details>

三条空行契约一条都不能少：<details> 后空一行，</summary> 后空一行，</details> 前空一行。
N 接着本节已有的最大编号往下排，本节还没有就写 1。
不要复制原文已经有的 TL;DR 或 (a)(b)(c)，也不要带 〔回读：…〕——那两样原文里已经有了。
正文里至少有一段 ${F}text 伪代码；概念之间有关系就再加一段 ${F}mermaid。`,
      en: String.raw`Write an explanation of the passage I selected, folded into a collapsible block, inserted right after that passage.

If we already discussed this material earlier in the conversation, fold that answer in rather than rewriting it; if we have not, just explain it now.

Output exactly one <details> block, in this format:

<details>

<summary>Example N: the one-line point</summary>

(body)

</details>

All three blank-line rules are required: a blank line after <details>, a blank line after </summary>, and a blank line before </details>.
N continues from the highest number already used in this section; write 1 if the section has none.
Do not copy the TL;DR or the (a)(b)(c) notes the text already has, and do not add a [review: ...] line - the original already carries both.
Include at least one ${F}text pseudocode block in the body; add a ${F}mermaid block as well if the concepts have a structure worth drawing.`
    }
  },
  {
    key: "pseudocode",
    label: { zh: "\u8865\u4E00\u6BB5 LaTeX \u98CE\u683C\u4F2A\u4EE3\u7801", en: "Add LaTeX-style pseudocode" },
    hint: { zh: "\u5199\u8FDB\u4F2A\u4EE3\u7801\u90A3\u4E00\u8282", en: "Writes into the pseudocode section" },
    writeback: true,
    prompt: {
      zh: String.raw`就我划中的这一段，补一段伪代码，写进这一关的伪代码小节（这本书里叫「第六拍 · 伪代码」，你的书里多半叫别的名字，照你自己的体例改这一句），接在已有伪代码块的后面。

格式：
- 用 ${F}text 围栏包住，不要用 ${F}python
- 第一行是一句以 # 开头的注释，说清这段伪代码在算什么
- 关键字用中文（初始化 / 循环 / 重复直到 / 对每个 / 返回），不要写成某种真实语言的语法
- 数学部分照 LaTeX 记号写，和这本手册正文一致：求和写 \sum_{...}，取最大写 \max_a，期望写 \mathbb{E}[...]，下标写 Q[s,a]，赋值用 <-
- 层次靠缩进表示，每层 4 个空格
- 需要解释的那一行末尾用 # 注释，别另起一段散文

只写伪代码块本身，前后不要再写解释性段落——手册里那段解释已经有了。`,
      en: String.raw`Take the passage I selected and add a pseudocode block to this level's pseudocode section (in this handbook it is called "Beat 6 - Pseudocode"; yours is probably named differently, so edit this sentence to match your own layout), after the pseudocode blocks already there.

Format:
- Wrap it in a ${F}text fence, not ${F}python
- The first line is a comment starting with # saying what this pseudocode computes
- Use plain-word keywords (initialize / loop / repeat until / for each / return) rather than the syntax of any real language
- Write the math in LaTeX notation, matching the prose in this handbook: sums as \sum_{...}, maxima as \max_a, expectations as \mathbb{E}[...], subscripts as Q[s,a], assignment as <-
- Show nesting by indentation, four spaces per level
- Put a # comment at the end of a line that needs explaining; do not write a prose paragraph
 
Write only the pseudocode block itself, with no explanatory paragraphs before or after - the handbook already has that explanation.`
    }
  }
];
function chipFromPreset(p, lang) {
  return {
    id: newChipId(),
    label: p.label[lang],
    hint: p.hint[lang],
    prompt: p.prompt[lang],
    writeback: p.writeback,
    enabled: true,
    format: ""
  };
}
function blankChip() {
  return {
    id: newChipId(),
    label: "",
    hint: "",
    prompt: "",
    writeback: false,
    enabled: true,
    format: ""
  };
}

// src/settings.ts
var import_obsidian2 = require("obsidian");
var PROVIDERS = [
  { key: "auto", label: "", base: "" },
  { key: "celeris", label: "Celeris", base: "https://inference.celeris.ai/celeris-1-magnus/v1" },
  { key: "google", label: "Google", base: "https://generativelanguage.googleapis.com/v1beta/openai/" },
  { key: "deepseek", label: "DeepSeek", base: "https://api.deepseek.com" },
  { key: "glm", label: "GLM", base: "https://open.bigmodel.cn/api/paas/v4" },
  { key: "kimi", label: "Kimi", base: "https://api.moonshot.ai/v1" },
  { key: "meta", label: "Meta", base: "https://api.meta.ai/v1" },
  { key: "openai", label: "OpenAI", base: "https://api.openai.com/v1" },
  { key: "openrouter", label: "OpenRouter", base: "https://openrouter.ai/api/v1" },
  { key: "generic", label: "", base: "" }
];
var LIMIT_SPEC = {
  // ── 常用 ──
  probe_max_per_window: { def: 40, min: 0, max: 1e3 },
  probe_every_n_rounds: { def: 0, min: 0, max: 20 },
  probe_keep_per_run: { def: 2, min: 1, max: 5 },
  max_tokens_chat: { def: 0, min: 0, max: 4e6, step: 1e3 },
  max_tokens_probe: { def: 0, min: 0, max: 1e6, step: 1e3 },
  max_tokens_cross_book: { def: 0, min: 0, max: 4e6, step: 1e3 },
  compact_chat_tokens: { def: 32e3, min: 0, max: 5e5, step: 1e3 },
  // ── 高级 ──
  max_tool_rounds: { def: 100, min: 1, max: 200 },
  // 131072 是 input + output **合计**，供应商请求时硬拒；扣掉 16384 的输出
  // 才是输入的物理顶（114688）。默认 90000 留 24.7K 余量。
  fast_context_tokens: { def: 9e4, min: 0, max: 114688, step: 1e3 },
  cross_book_chars: { def: 24e3, min: 0, max: 4e5, step: 1e3 },
  cross_book_reads: { def: 8, min: 0, max: 100 },
  probe_max_per_session: { def: 8, min: 0, max: 200 },
  probe_pending_cap: { def: 3, min: 1, max: 50 },
  probe_max_reads: { def: 2, min: 0, max: 8 },
  probe_read_lines: { def: 80, min: 10, max: 400 },
  probe_timeout_s: { def: 150, min: 30, max: 300 },
  probe_min_reply_chars: { def: 80, min: 0, max: 2e3 },
  probe_concurrency: { def: 2, min: 1, max: 8 }
};
var COMMON_LIMITS = [
  "probe_max_per_window",
  "probe_every_n_rounds",
  "probe_keep_per_run",
  "max_tokens_chat",
  "max_tokens_probe",
  "max_tokens_cross_book",
  "compact_chat_tokens"
];
var ADVANCED_LIMITS = Object.keys(LIMIT_SPEC).filter((k3) => !COMMON_LIMITS.includes(k3));
function clampLimit(k3, v) {
  const spec = LIMIT_SPEC[k3];
  if (typeof v !== "number" && typeof v !== "string") return spec.def;
  const raw = typeof v === "number" ? String(v) : v.trim();
  if (raw === "" || /^0[xXbBoO]/.test(raw)) return spec.def;
  const num = Number(raw);
  if (!Number.isFinite(num)) return spec.def;
  return Math.trunc(Math.min(Math.max(num, spec.min), spec.max));
}
function coerceLimits(raw) {
  const src = raw && typeof raw === "object" ? raw : {};
  const out = {};
  for (const k3 of Object.keys(LIMIT_SPEC)) out[k3] = clampLimit(k3, src[k3]);
  return out;
}
function limitsPayload(s) {
  const lim = coerceLimits(s.limits);
  const out = {};
  for (const k3 of Object.keys(LIMIT_SPEC)) {
    if (lim[k3] !== LIMIT_SPEC[k3].def) out[k3] = lim[k3];
  }
  return Object.keys(out).length ? out : void 0;
}
var DEFAULT_SETTINGS = {
  lang: "auto",
  sidecarUrl: "http://127.0.0.1:8765",
  sidecarAutoStart: true,
  sidecarKeepAlive: true,
  pythonPath: "",
  baseUrl: "https://api.deepseek.com",
  model: "deepseek-v4-flash",
  provider: "auto",
  thinking: "off",
  vision: false,
  fastMode: false,
  fastBaseUrl: "https://inference.celeris.ai/celeris-1-magnus/v1",
  fastModel: "celeris-1-magnus",
  fastProvider: "auto",
  deepQuestions: true,
  limits: coerceLimits({}),
  customChips: []
};
var THINKING = ["off", "low", "medium", "high"];
function coerceThinking(raw) {
  return THINKING.includes(raw) ? raw : "off";
}
var PROVIDER_KEYS = PROVIDERS.map((p) => p.key);
function coerceProvider(raw) {
  return PROVIDER_KEYS.includes(raw) ? raw : "auto";
}
function providerLabel(p) {
  return p.label || (p.key === "auto" ? t().setProviderAuto : t().setProviderGeneric);
}
function providerBase(key) {
  var _a;
  return ((_a = PROVIDERS.find((p) => p.key === key)) == null ? void 0 : _a.base) || "";
}
function shouldPrefillBase(current2) {
  const now = (current2 || "").trim().replace(/\/+$/, "");
  if (!now) return true;
  return PROVIDERS.some((p) => p.base && p.base.replace(/\/+$/, "") === now);
}
function llmPayload(s) {
  const base = s.baseUrl.trim().replace(/\/+$/, "");
  const on = s.fastMode === true;
  const fastBase = on ? (s.fastBaseUrl || "").trim().replace(/\/+$/, "") : "";
  const fastModel = on ? (s.fastModel || "").trim() : "";
  const prov = coerceProvider(s.provider);
  const fastProv = on ? coerceProvider(s.fastProvider) : "auto";
  return {
    ...base ? { base_url: base } : {},
    ...s.model.trim() ? { model: s.model.trim() } : {},
    ...prov !== "auto" ? { provider: prov } : {},
    thinking: coerceThinking(s.thinking),
    vision: s.vision === true,
    ...fastBase ? { fast_base_url: fastBase } : {},
    ...fastModel ? { fast_model: fastModel } : {},
    ...fastProv !== "auto" ? { fast_provider: fastProv } : {}
  };
}
function keyHostGap(status, settingsUrl) {
  if (!status || !status.ok || status.key_source !== "sidecar") return null;
  let keyHost = "";
  let urlHost = "";
  try {
    keyHost = new URL(status.base_url).host;
    urlHost = new URL(settingsUrl).host;
  } catch (e) {
    return null;
  }
  if (!keyHost || !urlHost || keyHost === urlHost) return null;
  return [keyHost, urlHost];
}
function configSignature(s, keyTail, fastTail) {
  return [
    (s.baseUrl || "").trim(),
    (s.model || "").trim(),
    coerceProvider(s.provider),
    // v0.23.0 起体检按主对话那一枪的真实形状打，**推理档也在那一枪里**。
    // 所以改推理档确实可能把一套本来能用的配置打挂（换厂商同理），
    // 它不再是「不相干的设置」。
    coerceThinking(s.thinking),
    String(s.vision === true),
    String(s.fastMode === true),
    (s.fastBaseUrl || "").trim(),
    (s.fastModel || "").trim(),
    coerceProvider(s.fastProvider),
    keyTail,
    fastTail
  ].join("\0");
}
function sidecarStatusText(snap, errTail) {
  const s = t();
  if (snap.phase === "idle") {
    return snap.detail === "stopped" ? s.setSidecarPhaseStopped : s.setSidecarPhaseIdle;
  }
  if (snap.phase === "checking") return s.setSidecarPhaseChecking;
  if (snap.phase === "installing") return s.setSidecarPhaseInstalling;
  if (snap.phase === "starting") return s.setSidecarPhaseStarting;
  if (snap.phase === "stopping") return s.setSidecarPhaseStopping;
  if (snap.phase === "stale") return s.setSidecarPhaseStale(snap.detail);
  if (snap.phase === "running") return s.setSidecarPhaseRunning;
  if (snap.detail === "no-python") return s.setSidecarErrNoPython;
  if (snap.detail === "not-loopback") return s.setSidecarErrNotLoopback;
  if (snap.detail === "bad-url" || snap.detail === "bad-port") return s.setSidecarErrBadUrl;
  if (snap.detail === "install-failed") {
    return errTail ? `${s.setSidecarErrInstall}
${errTail}` : s.setSidecarErrInstall;
  }
  if (snap.detail === "spawn-failed") {
    return errTail ? `${s.setSidecarErrSpawn}
${errTail}` : s.setSidecarErrSpawn;
  }
  if (snap.detail === "no-health") {
    return errTail ? `${s.setSidecarErrHealth}
${errTail}` : s.setSidecarErrHealth;
  }
  if (snap.detail === "stop-failed") {
    return errTail ? `${s.setSidecarErrStop}
${errTail}` : s.setSidecarErrStop;
  }
  if (snap.detail === "stop-no-pid") return s.setSidecarErrStopNoPid;
  const base = s.setSidecarErrOther(snap.detail || "error");
  return errTail ? `${base}
${errTail}` : base;
}
function stopNotice(r) {
  const s = t();
  if (r.kind === "idle") return s.noticeSidecarAlreadyStopped;
  if (r.kind === "failed") return s.noticeSidecarStopFailed;
  if (r.who === "other") return s.noticeSidecarStoppedOther(r.command);
  if (r.who === "leftover") return s.noticeSidecarStoppedLeftover(r.command);
  if (r.who === "shared") return s.noticeSidecarStoppedShared(r.command);
  return s.noticeSidecarStoppedOwned;
}
function ensureNotice(kind) {
  if (kind === "already") return t().noticeSidecarAlready;
  if (kind === "stale") return t().noticeSidecarStale;
  return null;
}
function persistableSettings(s, migrateKey) {
  return migrateKey ? { ...s, apiKey: migrateKey } : s;
}
var PenSettingTab = class extends import_obsidian2.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.unwatch = null;
    this.plugin = plugin;
  }
  hide() {
    var _a;
    (_a = this.unwatch) == null ? void 0 : _a.call(this);
    this.unwatch = null;
    super.hide();
  }
  /**
   * 「槽里有没有钥匙」 + 「这套配置真能不能用」。
   *
   * 只说前半句是不够的——那正是读者报的病（v0.22.2）：钥匙是废的、model
   * 在这个节点上不存在、节点没有视觉，状态行一律写「已保存」。所以存完之后
   * 再让 sidecar 真打一枪，把判词接在后面。
   *
   * 体检是真实的 API 调用，所以**只在这三个时刻跑**：存/清钥匙、Base URL 或
   * model 失焦、翻「图像理解」。不进任何轮询。
   */
  async paintKeyStatus(el, verify = false) {
    try {
      const h = await makeApi(this.plugin.settings.sidecarUrl).health();
      const head = h.llm.ok ? t().setKeyStatusSaved(h.llm.key_source, h.llm.key_tail || "") : t().setKeyStatusNone;
      el.setText(verify && h.llm.ok ? `${head} ${t().setCheckRunning}` : head);
      if (!verify || !h.llm.ok) return;
      const r = await makeApi(this.plugin.settings.sidecarUrl).preflight(this.plugin.settings);
      el.setText(`${head} ${r.base.ok ? t().setCheckOk : r.base.message}`);
    } catch (e) {
      el.setText(t().setKeyStatusUnreachable);
    }
  }
  /** 快模型钥匙的状态。事实同样只在 sidecar，vault 里没有副本。 */
  async paintFastKeyStatus(el, verify = false) {
    var _a, _b, _c;
    try {
      const h = await makeApi(this.plugin.settings.sidecarUrl).health();
      const head = ((_a = h.fast) == null ? void 0 : _a.ok) ? t().setKeyStatusSaved(h.fast.key_source, h.fast.key_tail || "") : t().setFastKeyStatusNone;
      el.setText(verify && ((_b = h.fast) == null ? void 0 : _b.ok) ? `${head} ${t().setCheckRunning}` : head);
      if (!verify || !((_c = h.fast) == null ? void 0 : _c.ok)) return;
      const r = await makeApi(this.plugin.settings.sidecarUrl).preflight(
        { ...this.plugin.settings, fastMode: true },
        true
      );
      const slot = r.fast;
      if (slot) el.setText(`${head} ${slot.ok ? t().setCheckOk : slot.message}`);
    } catch (e) {
      el.setText(t().setKeyStatusUnreachable);
    }
  }
  /**
   * 厂商下拉 + 提示行。**基座和快模型共用这一份。**
   *
   * 选一家做三件事：决定推理档怎么拼上线（pen/providers.py 那张表）、
   * 预填 Base URL、把这家的脾气写在提示行里（官方地址、型号名长什么样、
   * 思考关不关得掉）。前两件是读者能看见的，第三件是他撞过一次才会想起来的。
   *
   * 改完当场重画整页：预填要落进 Base URL 那个输入框，而首画那一行
   * `paintKeyStatus(el, true)` 会顺手把体检重跑一遍——换厂商正是最该重检的
   * 时刻（推理档方言变了，那一枪的形状就变了）。重画的手法照语言下拉。
   */
  providerRow(root, slot) {
    const s = t();
    const st = this.plugin.settings;
    const cur = coerceProvider(slot === "fast" ? st.fastProvider : st.provider);
    new import_obsidian2.Setting(root).setName(slot === "fast" ? s.setFastProviderName : s.setProviderName).setDesc(s.setProviderDesc).addDropdown((d) => {
      for (const p of PROVIDERS) d.addOption(p.key, providerLabel(p));
      d.setValue(cur).onChange((v) => {
        const key = coerceProvider(v);
        const base = providerBase(key);
        if (slot === "fast") {
          st.fastProvider = key;
          if (base && shouldPrefillBase(st.fastBaseUrl)) st.fastBaseUrl = base;
        } else {
          st.provider = key;
          if (base && shouldPrefillBase(st.baseUrl)) st.baseUrl = base;
        }
        this.plugin.saveSettingsSoon();
        this.display();
      });
    });
    root.createEl("p", { cls: "setting-item-description", text: s.providerHint[cur] });
  }
  /**
   * Fast Mode 那一节：节点 / 型号 / 钥匙。
   *
   * **钥匙那一格和基座那格的家法完全一样**：只写不读、走插件的 PUT 单通道
   * （和基座那把串行，两把钥匙落在同一个 llm.json 的两个槽里，并发写会互相
   * 覆盖）、失败就留在框里绝不回退写 data.json。
   */
  fastSection(root) {
    const s = t();
    new import_obsidian2.Setting(root).setName(s.setSecFast).setHeading();
    root.createEl("p", { cls: "setting-item-description", text: s.setFastDesc });
    this.providerRow(root, "fast");
    new import_obsidian2.Setting(root).setName("Fast Base URL").setDesc(s.setFastBaseUrlDesc).addText((c) => {
      c.setPlaceholder(DEFAULT_SETTINGS.fastBaseUrl).setValue(this.plugin.settings.fastBaseUrl).onChange((v) => {
        this.plugin.settings.fastBaseUrl = v.trim().replace(/\/+$/, "");
        if (this.plugin.settings.fastBaseUrl) this.plugin.saveSettingsSoon();
      });
      c.inputEl.addEventListener("blur", () => {
        if (!this.plugin.settings.fastBaseUrl) {
          this.plugin.settings.fastBaseUrl = DEFAULT_SETTINGS.fastBaseUrl;
          c.setValue(this.plugin.settings.fastBaseUrl);
          this.plugin.saveSettingsSoon();
        }
        void makeApi(this.plugin.settings.sidecarUrl).health().then((h) => {
          this.warnFastKeyHostMismatch(h.fast);
          void this.paintFastKeyStatus(statusEl, true);
        }).catch(() => {
        });
      });
    });
    new import_obsidian2.Setting(root).setName(s.setFastModelName).setDesc(s.setFastModelDesc).addText(
      (c) => c.setPlaceholder(DEFAULT_SETTINGS.fastModel).setValue(this.plugin.settings.fastModel).onChange((v) => {
        this.plugin.settings.fastModel = v.trim() || DEFAULT_SETTINGS.fastModel;
        this.plugin.saveSettingsSoon();
      })
    );
    const statusEl = root.createEl("p", { cls: "setting-item-description" });
    void this.paintFastKeyStatus(statusEl, true);
    let submit = () => {
    };
    new import_obsidian2.Setting(root).setName(s.setFastKeyName).setDesc(s.setFastKeyDesc).addText((c) => {
      c.inputEl.type = "password";
      c.inputEl.autocomplete = "off";
      c.setPlaceholder("ck-\u2026").setValue("");
      submit = () => {
        const v = c.getValue().trim();
        if (!v) return;
        if (this.plugin.sidecarSnap().phase !== "running") {
          new import_obsidian2.Notice(
            this.plugin.sidecarSnap().phase === "stale" ? t().noticeKeySaveOldSidecar : t().noticeSidecarDown
          );
          return;
        }
        void this.plugin.sidecarPutFastKey(v, this.plugin.settings.fastBaseUrl).then((st) => {
          if (!st) return;
          c.setValue("");
          new import_obsidian2.Notice(t().noticeFastKeySaved);
          this.plugin.refreshFast();
          void this.paintFastKeyStatus(statusEl, true);
        }).catch((e) => {
          const status = e instanceof ApiError ? e.status : 0;
          if (status === 404 || status === 405) {
            new import_obsidian2.Notice(t().noticeKeySaveOldSidecar);
            return;
          }
          new import_obsidian2.Notice(t().noticeKeySaveFailed(e instanceof Error ? e.message : String(e)));
        });
      };
      c.inputEl.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          submit();
        }
      });
    }).addButton((b) => b.setButtonText(s.setKeySave).onClick(() => submit())).addButton(
      (b) => b.setButtonText(s.setKeyClear).onClick(() => {
        void makeApi(this.plugin.settings.sidecarUrl).deleteFastKey().then(() => {
          new import_obsidian2.Notice(t().noticeFastKeyCleared);
          this.plugin.refreshFast();
          void this.paintFastKeyStatus(statusEl);
        }).catch(() => new import_obsidian2.Notice(t().noticeSidecarDown));
      })
    );
  }
  /** 钥匙按主机落锁（merge_llm 的「不跨主机挪用」）。刚存的这把要是和设置页
   *  填的 Base URL 不同主机，对话会一直撞「找不到模型配置」——当场说破，
   *  别让读者对着一格明明填了钥匙的设置页猜。 */
  warnKeyHostMismatch(llm) {
    const gap = keyHostGap(llm, this.plugin.settings.baseUrl);
    if (gap) new import_obsidian2.Notice(t().noticeKeyHostMismatch(gap[0], gap[1]));
  }
  /** 快模型那把同理。**两把钥匙各自按自己的主机落锁**，比对逻辑共用一份。 */
  warnFastKeyHostMismatch(fast) {
    const gap = keyHostGap(fast, this.plugin.settings.fastBaseUrl);
    if (gap) new import_obsidian2.Notice(t().noticeFastKeyHostMismatch(gap[0], gap[1]));
  }
  /**
   * 「自定义泡泡」一节。
   *
   * **全程不调 this.display()**：那是这个文件的家法（见高级区那段注释）——
   * 重画会把正在编辑的 textarea 的焦点和光标位置一起吃掉，而这一节里
   * 读者恰恰是在长文本框里逐字打字。所以新建就 append 一个 <details>，
   * 删除就 detach 那一个节点，剩下的 DOM 一个字都不动。
   */
  chipsSection(root) {
    const s = t();
    new import_obsidian2.Setting(root).setName(s.setSecChips).setHeading();
    root.createEl("p", { cls: "setting-item-description", text: s.setChipsDesc });
    const list = root.createDiv({ cls: "sp-set-chips" });
    const empty = root.createEl("p", {
      cls: "setting-item-description sp-set-chips-note",
      text: s.setChipsEmpty
    });
    const full = root.createEl("p", { cls: "setting-item-description", text: "" });
    const syncNotes = () => {
      const n22 = this.plugin.settings.customChips.length;
      empty.toggleClass("is-off", n22 > 0);
      full.setText(n22 >= CUSTOM_CHIP_MAX ? s.setChipsFull(CUSTOM_CHIP_MAX) : "");
    };
    for (const c of this.plugin.settings.customChips) this.chipEditor(list, c, syncNotes);
    syncNotes();
    let pick = "";
    new import_obsidian2.Setting(root).setName(s.setChipNewFrom).setDesc(s.setChipNewFromDesc).addDropdown((c) => {
      c.addOption("", s.setChipPresetBlank);
      for (const p of PRESET_CHIPS) c.addOption(p.key, p.label[currentLang()]);
      c.setValue("").onChange((v) => {
        pick = v;
      });
    }).addButton(
      (c) => c.setButtonText(s.setChipNewBtn).onClick(() => {
        if (this.plugin.settings.customChips.length >= CUSTOM_CHIP_MAX) {
          syncNotes();
          return;
        }
        const preset = PRESET_CHIPS.find((p) => p.key === pick);
        const fresh = preset ? chipFromPreset(preset, currentLang()) : blankChip();
        this.plugin.settings.customChips.push(fresh);
        this.chipEditor(list, fresh, syncNotes, true);
        syncNotes();
        this.saveChips();
      })
    );
  }
  /**
   * 一枚泡泡的内联编辑区。
   *
   * 存盘一律走 saveChips()（防抖 + 叫醒侧栏），**不在这里直接 saveSettings**：
   * prompt 那个 textarea 是逐字触发 onChange 的，每个字一次 await 落盘会把
   * data.json 写穿。
   */
  chipEditor(root, chip, onCount, open = false) {
    const s = t();
    const box = root.createEl("details", { cls: "sp-set-chip" });
    if (open) box.setAttr("open", "");
    const head = box.createEl("summary");
    const retitle = () => {
      head.setText(chipDisplayLabel(chip) || s.setChipUnnamed);
    };
    retitle();
    new import_obsidian2.Setting(box).setName(s.setChipLabelName).setDesc(s.setChipLabelDesc).addText((c) => {
      c.setValue(chip.label).onChange((v) => {
        chip.label = clampChars(v, LABEL_MAX);
        this.saveChips();
      });
      c.inputEl.addEventListener("blur", () => {
        c.setValue(chip.label);
        retitle();
        syncDraft();
      });
    });
    new import_obsidian2.Setting(box).setName(s.setChipHintName).setDesc(s.setChipHintDesc).addText((c) => {
      c.setValue(chip.hint).onChange((v) => {
        chip.hint = clampChars(v, HINT_MAX);
        this.saveChips();
      });
      c.inputEl.addEventListener("blur", () => c.setValue(chip.hint));
    });
    const promptRow = new import_obsidian2.Setting(box).setName(s.setChipPromptName).setDesc(s.setChipPromptDesc);
    const count = promptRow.descEl.createDiv({ cls: "setting-item-description" });
    const syncCount = () => {
      count.setText(s.setChipChars(charCount(chip.prompt), PROMPT_MAX));
    };
    promptRow.addTextArea((c) => {
      c.inputEl.rows = 8;
      c.inputEl.addClass("sp-set-chip-prompt");
      c.setPlaceholder(s.setChipPromptPlaceholder).setValue(chip.prompt).onChange((v) => {
        chip.prompt = clampChars(v, PROMPT_MAX);
        syncCount();
        syncDraft();
        this.saveChips();
      });
      c.inputEl.addEventListener("blur", () => {
        c.setValue(chip.prompt);
        syncCount();
        syncDraft();
        retitle();
      });
    });
    syncCount();
    const draftNote = box.createEl("p", {
      cls: "setting-item-description sp-set-chips-note",
      text: s.setChipDraftNote
    });
    const syncDraft = () => {
      draftNote.toggleClass("is-off", !chipIsDraft(chip));
    };
    syncDraft();
    new import_obsidian2.Setting(box).setName(s.setChipWritebackName).setDesc(s.setChipWritebackDesc).addToggle(
      (c) => c.setValue(chip.writeback).onChange((v) => {
        chip.writeback = v;
        this.saveChips();
      })
    );
    new import_obsidian2.Setting(box).setName(s.setChipEnabledName).setDesc(s.setChipEnabledDesc).addToggle(
      (c) => c.setValue(chip.enabled).onChange((v) => {
        chip.enabled = v;
        this.saveChips();
      })
    );
    let armed = false;
    let disarmTimer = null;
    new import_obsidian2.Setting(box).setName(s.setChipDelete).addButton((c) => {
      const disarm = () => {
        if (disarmTimer !== null) {
          window.clearTimeout(disarmTimer);
          disarmTimer = null;
        }
        if (!armed) return;
        armed = false;
        c.setButtonText(s.setChipDeleteBtn);
      };
      c.buttonEl.addEventListener("blur", disarm);
      c.setButtonText(s.setChipDeleteBtn).setWarning().onClick(() => {
        if (!armed) {
          armed = true;
          c.setButtonText(s.setChipDeleteConfirm);
          disarmTimer = window.setTimeout(disarm, 1e4);
          return;
        }
        if (disarmTimer !== null) {
          window.clearTimeout(disarmTimer);
          disarmTimer = null;
        }
        armed = false;
        const i = this.plugin.settings.customChips.indexOf(chip);
        if (i >= 0) this.plugin.settings.customChips.splice(i, 1);
        box.detach();
        onCount();
        this.saveChips();
      });
    });
  }
  /** 改完一枚泡泡：防抖落盘 → 叫醒侧栏那排按钮。
   *
   * **这里绝不能调 coerceCustomChips。** 那是装载期的脏数据闸，它做两件
   * 在编辑期都是错的事：丢掉 prompt 还空着的项（读者刚点「新建」那一帧），
   * 以及 `out.push({...})` **重建每一个对象**——下面每个 onChange 闭包都攥着
   * 建行时那个 chip 引用，数组一被换掉，闭包写的就是一个已经不在表里的孤儿。
   *
   * v0.21.0 实测出来的三个症状，全是这一行：空白新建等于没存；同一次打开
   * 设置页里改第二次就丢；删除按钮只 detach 了 DOM、数据还在
   * （`indexOf(chip)` 必然是 -1）。
   *
   * 夹紧只在两处：loadSettings() 装载时，和后端（权威，无论如何都会再夹一遍）。
   * 这里只负责把读者当下写的字**原地**存下去。 */
  saveChips() {
    this.plugin.saveSettingsSoon();
    this.plugin.refreshChips();
  }
  /**
   * 一个数字旋钮。
   *
   * 控件用 addText + inputEl.type="number"，**不用 addSlider**：
   * cross_book_chars 是 0–400000，滑块上根本点不准 24000；而且精确值必须能敲。
   * 本仓从没用过 addSlider（新 API 面），但已经在摸 inputEl（API Key 那项的
   * type="password"），所以这条是家法。
   */
  num(root, key, name, desc) {
    const spec = LIMIT_SPEC[key];
    new import_obsidian2.Setting(root).setName(name).setDesc(`${desc}${t().setDefaultHint(spec.def)}`).addText((c) => {
      var _a;
      c.inputEl.type = "number";
      c.inputEl.min = String(spec.min);
      c.inputEl.max = String(spec.max);
      c.inputEl.step = String((_a = spec.step) != null ? _a : 1);
      c.inputEl.inputMode = "numeric";
      c.setValue(String(this.plugin.settings.limits[key])).onChange((v) => {
        this.plugin.settings.limits[key] = clampLimit(key, v);
        this.plugin.saveSettingsSoon();
      });
      c.inputEl.addEventListener("blur", () => {
        c.setValue(String(this.plugin.settings.limits[key]));
      });
    });
  }
  display() {
    var _a;
    const { containerEl } = this;
    const s = t();
    containerEl.empty();
    containerEl.createEl("p", { cls: "setting-item-description", text: s.setIntro1 });
    containerEl.createEl("p", { cls: "setting-item-description", text: s.setIntro2 });
    new import_obsidian2.Setting(containerEl).setName(s.setSidecarSvc).setHeading();
    containerEl.createEl("p", { cls: "setting-item-description", text: s.setSidecarSvcDesc });
    const statusEl = containerEl.createEl("p", { cls: "setting-item-description" });
    const btns = {};
    const paintStatus = () => {
      var _a2, _b, _c, _d, _e;
      const snap = this.plugin.sidecarSnap();
      statusEl.setText(sidecarStatusText(snap, this.plugin.sidecarError()));
      const busy = snap.phase === "checking" || snap.phase === "installing" || snap.phase === "starting" || snap.phase === "stopping";
      (_a2 = btns.start) == null ? void 0 : _a2.setDisabled(busy);
      (_b = btns.stop) == null ? void 0 : _b.setButtonText(snap.phase === "stopping" ? s.setSidecarStopping : s.setSidecarStop);
      (_c = btns.stop) == null ? void 0 : _c.setDisabled(snap.phase === "stopping");
      const canSave = snap.phase === "running";
      (_d = btns.save) == null ? void 0 : _d.setDisabled(!canSave);
      (_e = btns.clear) == null ? void 0 : _e.setDisabled(!canSave);
    };
    paintStatus();
    (_a = this.unwatch) == null ? void 0 : _a.call(this);
    this.unwatch = this.plugin.sidecarWatch(paintStatus);
    new import_obsidian2.Setting(containerEl).setName(s.setSidecarSvc).addButton((b) => {
      btns.start = b;
      b.setButtonText(s.setSidecarStart).onClick(() => {
        void this.plugin.ensureSidecar().then((kind) => {
          const msg = ensureNotice(kind);
          if (msg) new import_obsidian2.Notice(msg);
        });
      });
    }).addButton((b) => {
      btns.stop = b;
      b.setButtonText(s.setSidecarStop).onClick(() => {
        void this.plugin.stopSidecar().then((r) => new import_obsidian2.Notice(stopNotice(r)));
      });
    });
    paintStatus();
    new import_obsidian2.Setting(containerEl).setName(s.setSidecarAutoName).setDesc(s.setSidecarAutoDesc).addToggle(
      (c) => c.setValue(this.plugin.settings.sidecarAutoStart !== false).onChange((v) => {
        this.plugin.settings.sidecarAutoStart = v;
        this.plugin.saveSettingsSoon();
      })
    );
    new import_obsidian2.Setting(containerEl).setName(s.setKeepAliveName).setDesc(s.setKeepAliveDesc).addToggle(
      (c) => c.setValue(this.plugin.settings.sidecarKeepAlive !== false).onChange((v) => {
        this.plugin.settings.sidecarKeepAlive = v;
        this.plugin.saveSettingsSoon();
      })
    );
    new import_obsidian2.Setting(containerEl).setName(s.setSecCommon).setHeading();
    new import_obsidian2.Setting(containerEl).setName(s.setLangName).setDesc(s.setLangDesc).addDropdown((d) => {
      d.addOption("auto", s.setLangAuto).addOption("zh", "\u4E2D\u6587").addOption("en", "English").setValue(coerceLangPref(this.plugin.settings.lang)).onChange((v) => {
        this.plugin.settings.lang = coerceLangPref(v);
        this.plugin.saveSettingsSoon();
        this.plugin.applyLanguage();
        this.display();
      });
    });
    const keyStatusEl = containerEl.createEl("p", { cls: "setting-item-description" });
    void this.paintKeyStatus(keyStatusEl, true);
    let clearBtnEl = null;
    let saveBtnEl = null;
    let submitKey = () => {
    };
    new import_obsidian2.Setting(containerEl).setName("API Key").setDesc(s.setApiKeyDesc).addText((c) => {
      c.inputEl.type = "password";
      c.inputEl.autocomplete = "off";
      c.setPlaceholder("sk-\u2026").setValue("");
      submitKey = () => {
        const v = c.getValue().trim();
        if (!v) return;
        const phase = this.plugin.sidecarSnap().phase;
        if (phase !== "running") {
          this.plugin.pendingPutKey = v;
          new import_obsidian2.Notice(phase === "stale" ? t().noticeKeySaveOldSidecar : t().noticeSidecarDown);
          return;
        }
        void this.plugin.sidecarPutKey(v, this.plugin.settings.baseUrl).then((llm) => {
          if (!llm) return;
          c.setValue("");
          this.plugin.pendingPutKey = "";
          this.plugin.migrateKey = "";
          void this.plugin.saveSettings();
          new import_obsidian2.Notice(t().noticeKeySaved);
          this.plugin.refreshPenViews();
          void this.paintKeyStatus(keyStatusEl, true);
          this.warnKeyHostMismatch(llm);
        }).catch((e) => {
          this.plugin.pendingPutKey = v;
          const status = e instanceof ApiError ? e.status : 0;
          if (status === 404 || status === 405) {
            new import_obsidian2.Notice(t().noticeKeySaveOldSidecar);
            return;
          }
          new import_obsidian2.Notice(
            t().noticeKeySaveFailed(e instanceof Error ? e.message : String(e))
          );
        });
      };
      c.inputEl.addEventListener("keydown", (ev) => {
        if (ev.key === "Enter") {
          ev.preventDefault();
          submitKey();
        }
      });
      c.inputEl.addEventListener("blur", (ev) => {
        const next = ev.relatedTarget;
        if (clearBtnEl && next && clearBtnEl.contains(next)) return;
        if (saveBtnEl && next && saveBtnEl.contains(next)) return;
        submitKey();
      });
    }).addButton((b) => {
      btns.save = b;
      saveBtnEl = b.buttonEl;
      b.setButtonText(s.setKeySave).onClick(() => submitKey());
    }).addButton((b) => {
      btns.clear = b;
      clearBtnEl = b.buttonEl;
      b.setButtonText(s.setKeyClear).onClick(() => {
        if (this.plugin.sidecarSnap().phase !== "running") {
          new import_obsidian2.Notice(
            this.plugin.sidecarSnap().phase === "stale" ? t().noticeKeySaveOldSidecar : t().noticeSidecarDown
          );
          return;
        }
        void makeApi(this.plugin.settings.sidecarUrl).deleteLlmKey().then(() => {
          this.plugin.migrateKey = "";
          this.plugin.pendingPutKey = "";
          void this.plugin.saveSettings();
          new import_obsidian2.Notice(t().noticeKeyCleared);
          this.plugin.refreshPenViews();
          void this.paintKeyStatus(keyStatusEl);
        }).catch((e) => {
          const status = e instanceof ApiError ? e.status : 0;
          new import_obsidian2.Notice(
            status === 404 || status === 405 ? t().noticeKeySaveOldSidecar : t().noticeSidecarDown
          );
        });
      });
    });
    paintStatus();
    this.providerRow(containerEl, "base");
    new import_obsidian2.Setting(containerEl).setName("Base URL").setDesc(s.setBaseUrlDesc).addText((c) => {
      c.setPlaceholder("https://api.deepseek.com").setValue(this.plugin.settings.baseUrl).onChange((v) => {
        this.plugin.settings.baseUrl = v.trim().replace(/\/+$/, "");
        if (this.plugin.settings.baseUrl) this.plugin.saveSettingsSoon();
      });
      c.inputEl.addEventListener("blur", () => {
        if (!this.plugin.settings.baseUrl) {
          this.plugin.settings.baseUrl = DEFAULT_SETTINGS.baseUrl;
          c.setValue(this.plugin.settings.baseUrl);
          this.plugin.saveSettingsSoon();
        }
        void makeApi(this.plugin.settings.sidecarUrl).health().then((h) => this.warnKeyHostMismatch(h.llm)).catch(() => {
        });
        void this.paintKeyStatus(keyStatusEl, true);
      });
    });
    new import_obsidian2.Setting(containerEl).setName(s.setModelName).setDesc(s.setModelDesc).addText((c) => {
      c.setPlaceholder("deepseek-v4-flash").setValue(this.plugin.settings.model).onChange((v) => {
        this.plugin.settings.model = v.trim() || DEFAULT_SETTINGS.model;
        this.plugin.saveSettingsSoon();
      });
      c.inputEl.addEventListener("blur", () => {
        void this.paintKeyStatus(keyStatusEl, true);
      });
    });
    new import_obsidian2.Setting(containerEl).setName(s.setVisionName).setDesc(s.setVisionDesc).addToggle(
      (c) => c.setValue(this.plugin.settings.vision === true).onChange((v) => {
        this.plugin.settings.vision = v;
        this.plugin.saveSettingsSoon();
        this.plugin.refreshPenViews();
        void this.paintKeyStatus(keyStatusEl, true);
      })
    );
    new import_obsidian2.Setting(containerEl).setName("Thinking").setDesc(s.setThinkingDesc).addDropdown((d) => {
      d.addOption("off", s.setThinkingOff).addOption("low", "low").addOption("medium", "medium").addOption("high", "high").setValue(coerceThinking(this.plugin.settings.thinking)).onChange((v) => {
        this.plugin.settings.thinking = coerceThinking(v);
        this.plugin.saveSettingsSoon();
        void this.paintKeyStatus(keyStatusEl, true);
      });
    });
    this.fastSection(containerEl);
    new import_obsidian2.Setting(containerEl).setName(s.setDeepName).setDesc(s.setDeepDesc).addToggle(
      (c) => c.setValue(this.plugin.settings.deepQuestions !== false).onChange((v) => {
        this.plugin.settings.deepQuestions = v;
        this.plugin.saveSettingsSoon();
      })
    );
    for (const k3 of COMMON_LIMITS) {
      this.num(containerEl, k3, s.limitName(k3), s.limitDesc(k3));
    }
    new import_obsidian2.Setting(containerEl).setName("Sidecar URL").setDesc(s.setSidecarDesc).addText(
      (c) => c.setPlaceholder("http://127.0.0.1:8765").setValue(this.plugin.settings.sidecarUrl).onChange((v) => {
        this.plugin.settings.sidecarUrl = v.trim() || DEFAULT_SETTINGS.sidecarUrl;
        this.plugin.saveSettingsSoon();
      })
    );
    this.chipsSection(containerEl);
    const adv = containerEl.createEl("details", { cls: "sp-set-advanced" });
    adv.createEl("summary", { text: s.setSecAdvanced });
    adv.createEl("p", { cls: "setting-item-description", text: s.setAdvancedNote });
    new import_obsidian2.Setting(adv).setName(s.setSidecarPythonName).setDesc(s.setSidecarPythonDesc).addText(
      (c) => c.setPlaceholder("/usr/bin/python3").setValue(this.plugin.settings.pythonPath).onChange((v) => {
        this.plugin.settings.pythonPath = v.trim();
        this.plugin.saveSettingsSoon();
      })
    );
    for (const k3 of ADVANCED_LIMITS) {
      this.num(adv, k3, s.limitName(k3), s.limitDesc(k3));
    }
    new import_obsidian2.Setting(containerEl).setName(s.setSecUsage).setHeading();
    const box = containerEl.createDiv({ cls: "sp-set-usage" });
    box.createEl("p", { cls: "setting-item-description", text: s.setUsageNote });
    const line1 = box.createEl("p", { text: s.setUsageLoading });
    const line2 = box.createEl("p", { cls: "setting-item-description" });
    const line3 = box.createEl("p", { cls: "setting-item-description" });
    void this.fillUsage(line1, line2, line3);
  }
  /** 拉一次累计账填进去。拉不到就说清楚，别留一片空白让读者以为是零。 */
  async fillUsage(line1, line2, line3) {
    var _a, _b, _c, _d, _e, _f;
    const s = t();
    try {
      const got = await usageTotal(this.plugin.settings.sidecarUrl);
      const b = got.spend || {};
      const row = (r) => {
        var _a2, _b2;
        return ((_a2 = r == null ? void 0 : r.in_tokens) != null ? _a2 : 0) + ((_b2 = r == null ? void 0 : r.out_tokens) != null ? _b2 : 0);
      };
      if (!got.total) {
        line1.setText(s.setUsageEmpty);
        return;
      }
      line1.setText(s.setUsageTotal(got.total, got.sessions));
      line2.setText(s.setUsageBreak(row(b.chat), row(b.probe), row(b.fold)));
      const cached = ((_b = (_a = b.chat) == null ? void 0 : _a.cached_tokens) != null ? _b : 0) + ((_d = (_c = b.probe) == null ? void 0 : _c.cached_tokens) != null ? _d : 0) + ((_f = (_e = b.fold) == null ? void 0 : _e.cached_tokens) != null ? _f : 0);
      if (cached > 0) line3.setText(s.setUsageCached(cached));
    } catch (e) {
      line1.setText(s.setUsageDown);
    }
  }
};

// src/api.ts
function joinUrl(base, path) {
  return `${base.replace(/\/$/, "")}${path}`;
}
async function j(base, path, init) {
  const res = await fetch(joinUrl(base, path), {
    ...init,
    headers: {
      "Content-Type": "application/json",
      // sidecar 的错误文案按这个头选语言。走 header 而不是 body 字段，
      // 是为了让没有 body 的 GET 路由也能覆盖。
      "Accept-Language": currentLang(),
      ...(init == null ? void 0 : init.headers) || {}
    }
  });
  if (!res.ok) throw await errorFrom(res);
  return res.json();
}
async function errorFrom(res) {
  let message = res.statusText;
  let code = "";
  try {
    const body = await res.json();
    const d = body == null ? void 0 : body.detail;
    if (d && typeof d === "object") {
      const o = d;
      if (typeof o.code === "string") code = o.code;
      message = typeof o.message === "string" && o.message ? o.message : JSON.stringify(body);
    } else {
      message = typeof d === "string" && d ? d : JSON.stringify(body);
    }
  } catch (e) {
  }
  return new ApiError(res.status, message, code);
}
async function usageTotal(baseUrl) {
  return j(baseUrl, "/v1/usage");
}
async function purgeExpired(baseUrl) {
  await j(baseUrl, "/v1/maintenance/purge", {
    method: "POST"
  });
}
function makeApi(baseUrl) {
  return {
    cancelRun: (session_id, run_id, pending_id = "") => j(baseUrl, `/v1/sessions/${encodeURIComponent(session_id)}/cancel`, {
      method: "POST",
      body: JSON.stringify({ run_id, pending_id })
    }),
    health: (init) => j(baseUrl, "/v1/health", init),
    /** 新 sidecar 的优雅退出。旧版 404/405，调用方改杀占用端口的进程。 */
    shutdown: (init) => j(baseUrl, "/v1/shutdown", { method: "POST", ...init }),
    /** v0.18.0：钥匙的只写入口。落 sidecar 家目录（0600），vault 拿不到全文。 */
    putLlmKey: (api_key, base_url) => j(baseUrl, "/v1/llm/key", {
      method: "PUT",
      body: JSON.stringify({ api_key, base_url: base_url || "" })
    }),
    deleteLlmKey: () => j(baseUrl, "/v1/llm/key", { method: "DELETE" }),
    /** 快模型的钥匙。**必须是独立通道**：它在另一台主机上，而后端那条
     *  跨主机保护见到「换了主机又没自带 key」会直接判成没配置。 */
    putFastKey: (api_key, base_url) => j(baseUrl, "/v1/llm/fast-key", {
      method: "PUT",
      body: JSON.stringify({ api_key, base_url: base_url || "" })
    }),
    deleteFastKey: () => j(baseUrl, "/v1/llm/fast-key", { method: "DELETE" }),
    /**
     * 配置体检：**让 sidecar 真往节点打一枪**，回答「这套设置现在能不能用」。
     *
     * health 回答不了这个——它只知道槽里有没有钥匙。钥匙是废的、model 在
     * 这个节点上不存在、节点没有视觉，它一概显示正常（v0.22.2 读者报告）。
     *
     * 发的是 `llmPayload(settings)`，和 /v1/chat 逐字同源：体检别的一套
     * 配置，等于没体检。**调用方必须自己节流**——这是一次真实的 API 调用，
     * 只该在配置变了的时候跑，不能进轮询。
     */
    preflight: (settings, fast) => j(baseUrl, "/v1/llm/preflight", {
      method: "POST",
      body: JSON.stringify({ ...llmPayload(settings), ...fast ? { fast: true } : {} })
    }),
    importHandbook: (original_path, handbook_id, vault_root) => j(baseUrl, "/v1/handbooks/import", {
      method: "POST",
      body: JSON.stringify({ original_path, handbook_id, vault_root })
    }),
    createSession: (handbook_id, session_id) => j(baseUrl, "/v1/sessions", {
      method: "POST",
      body: JSON.stringify({ handbook_id, session_id })
    }),
    getSession: (session_id) => j(baseUrl, `/v1/sessions/${session_id}`),
    compactSession: (session_id) => j(
      baseUrl,
      `/v1/sessions/${session_id}/compact`,
      { method: "POST" }
    ),
    deepInbox: (session_id, since) => j(baseUrl, `/v1/sessions/${session_id}/deep?since=${since}`),
    snapshots: (handbook_id) => j(baseUrl, `/v1/handbooks/${handbook_id}/snapshots`),
    rollback: (handbook_id, expected_revision, expected_head) => j(baseUrl, "/v1/writeback/rollback", {
      method: "POST",
      body: JSON.stringify({ handbook_id, expected_revision, expected_head })
    }),
    redo: (handbook_id, expected_revision, expected_head) => j(baseUrl, "/v1/writeback/redo", {
      method: "POST",
      body: JSON.stringify({ handbook_id, expected_revision, expected_head })
    }),
    /**
     * v0.25.0 学习画像：编下一批轮次。**一律主模型**——body 与 /v1/chat 同源
     * （`llmPayload`），所以永远不含 api_key（check-key.mjs / check-api.mjs 守着）。
     * `force` 只在真时出现：重算是读者两步确认过的动作，老路请求体一个键不多。
     * 每次是一枪真实的 API 调用，调用方（ReportView）自带停滞保护。
     */
    codeProfile: (handbook_id, settings, opts) => {
      var _a;
      const lim = limitsPayload(settings);
      return j(baseUrl, `/v1/handbooks/${handbook_id}/profile/code`, {
        method: "POST",
        ...(opts == null ? void 0 : opts.signal) ? { signal: opts.signal } : {},
        body: JSON.stringify({
          ...llmPayload(settings),
          ...lim ? { limits: lim } : {},
          max_batches: (_a = opts == null ? void 0 : opts.maxBatches) != null ? _a : 3,
          ...(opts == null ? void 0 : opts.force) ? { force: true } : {}
        })
      });
    },
    getProfile: (handbook_id, signal) => j(baseUrl, `/v1/handbooks/${handbook_id}/profile`, signal ? { signal } : void 0),
    /** 这个库的书架。`vault_root` 是绝对路径，带空格和中文，必须编码。 */
    listProfiles: (vault_root, signal) => j(
      baseUrl,
      `/v1/profiles?vault_root=${encodeURIComponent(vault_root)}`,
      signal ? { signal } : void 0
    )
  };
}
async function streamChat(baseUrl, body, onEvent, settings, signal) {
  const lim = settings ? limitsPayload(settings) : void 0;
  const res = await fetch(joinUrl(baseUrl, "/v1/chat"), {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": currentLang()
    },
    body: JSON.stringify({
      ...body,
      ...settings ? llmPayload(settings) : {},
      // 只发改过的那几个；一个都没动时 limitsPayload 返回 undefined，
      // 请求体里连 limits 这个键都不出现——「上线当天逐字节一致」就是这么来的。
      ...lim ? { limits: lim } : {},
      // Fast Mode 的开关位。**从 settings 取，不从 body 取**：开关写的就是
      // settings.fastMode，从 body 走等于让每个调用点各记一遍同一个状态。
      // 关着时这个键压根不出现，老路逐字节一致。
      //
      // streamApprove 那边**故意没有这一段**：点了允许的那半轮必然执行
      // edit_file，让它跑在写不了盘的模型上没有意义。
      ...(settings == null ? void 0 : settings.fastMode) === true ? { fast: true } : {}
    })
  });
  await readSse(res, onEvent);
}
async function streamApprove(baseUrl, body, onEvent, settings, signal) {
  const lim = settings ? limitsPayload(settings) : void 0;
  const res = await fetch(joinUrl(baseUrl, "/v1/chat/approve"), {
    signal,
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": currentLang()
    },
    body: JSON.stringify({
      ...body,
      ...settings ? llmPayload(settings) : {},
      // 只发改过的那几个；一个都没动时 limitsPayload 返回 undefined，
      // 请求体里连 limits 这个键都不出现——「上线当天逐字节一致」就是这么来的。
      ...lim ? { limits: lim } : {}
    })
  });
  await readSse(res, onEvent);
}
async function readSse(res, onEvent) {
  if (!res.ok || !res.body) throw await errorFrom(res);
  const reader = res.body.getReader();
  const dec = new TextDecoder();
  let buf = "";
  const takeFrames = (chunk) => {
    const parts = chunk.split("\n\n");
    const rest = parts.pop() || "";
    for (const part of parts) {
      const line = part.split("\n").filter((l) => l.startsWith("data: ")).map((l) => l.slice(6)).join("");
      if (!line) continue;
      onEvent(JSON.parse(line));
    }
    return rest;
  };
  while (true) {
    const { done, value } = await reader.read();
    if (value) buf += dec.decode(value, { stream: true });
    if (done) {
      buf += dec.decode();
      if (buf && !buf.endsWith("\n\n")) buf += "\n\n";
      takeFrames(buf);
      break;
    }
    buf = takeFrames(buf);
  }
}

// src/selection.ts
var import_obsidian3 = require("obsidian");

// src/locate.ts
function collapseWs(s) {
  return s.replace(/\s+/g, " ").trim();
}
function squash(s) {
  return s.replace(/[^0-9A-Za-z一-鿿]/g, "");
}
var PROBE = 48;
var MIN = 4;
function linesFromQuote(markdown, quote) {
  var _a, _b;
  const q = squash(quote);
  if (q.length < MIN) return null;
  const lines = markdown.split("\n");
  const at = [];
  let flat = "";
  for (let i = 0; i < lines.length; i++) {
    const n3 = squash(lines[i]);
    if (!n3) continue;
    flat += n3;
    for (let k3 = 0; k3 < n3.length; k3++) at.push(i + 1);
  }
  const hit = (needle) => {
    const idx = flat.indexOf(needle);
    if (idx < 0) return null;
    return { startLine: at[idx], endLine: at[idx + needle.length - 1] };
  };
  return (_b = hit(q)) != null ? _b : q.length > PROBE ? (_a = hit(q.slice(0, PROBE))) != null ? _a : hit(q.slice(-PROBE)) : null;
}

// src/selection.ts
var MIN_CHARS = 4;
function vaultRoot(app) {
  const ad = app.vault.adapter;
  if (ad instanceof import_obsidian3.FileSystemAdapter) return ad.getBasePath();
  throw new Error(t().errNeedDesktopVault);
}
function handbookIdFromPath(absPath) {
  var _a;
  let h = 0;
  for (let i = 0; i < absPath.length; i++) {
    h = Math.imul(h, 31) + absPath.charCodeAt(i) >>> 0;
  }
  const stem = ((_a = absPath.split("/").pop()) == null ? void 0 : _a.replace(/\.md$/i, "")) || "note";
  const slug = stem.toLowerCase().replace(/[^a-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "note";
  const hex = h.toString(16);
  const short = slug.slice(0, 48).replace(/-+$/g, "") || "note";
  return `${short}-${hex}`;
}
function absFor(app, file) {
  return `${vaultRoot(app)}/${file.path}`;
}
function markdownViews(app) {
  const out = [];
  for (const leaf of app.workspace.getLeavesOfType("markdown")) {
    const v = leaf.view;
    if (v instanceof import_obsidian3.MarkdownView && v.file) out.push(v);
  }
  return out;
}
function pickFromEditor(app, view) {
  if (!view.file) return null;
  const editor = view.editor;
  const text = collapseWs(editor.getSelection() || "");
  if (text.length < MIN_CHARS) return null;
  const from = editor.getCursor("from");
  const to = editor.getCursor("to");
  return {
    text,
    startLine: from.line + 1,
    endLine: to.line + 1,
    file: view.file,
    absPath: absFor(app, view.file)
  };
}
function nodeIn(el, node) {
  if (!el || !node) return false;
  return el === node || el.contains(node);
}
function pickFromPreview(app) {
  var _a, _b, _c, _d;
  const sel = window.getSelection();
  if (!sel || sel.isCollapsed || sel.rangeCount < 1) return null;
  const text = collapseWs(sel.toString() || sel.getRangeAt(0).toString());
  if (text.length < MIN_CHARS) return null;
  const node = sel.getRangeAt(0).commonAncestorContainer;
  if (node instanceof Element && node.closest(".socrates-pen")) return null;
  const parent = node instanceof Element ? node : node.parentElement;
  if (parent == null ? void 0 : parent.closest(".socrates-pen")) return null;
  for (const view of markdownViews(app)) {
    const preview = (_a = view.previewMode) == null ? void 0 : _a.containerEl;
    if (!nodeIn(view.contentEl, node) && !nodeIn(view.containerEl, node) && !nodeIn(preview, node)) {
      continue;
    }
    const src = (_c = (_b = view.getViewData) == null ? void 0 : _b.call(view)) != null ? _c : view.editor.getValue();
    const lines = (_d = linesFromQuote(src, text)) != null ? _d : { startLine: 0, endLine: 0 };
    return {
      text,
      startLine: lines.startLine,
      endLine: lines.endLine,
      file: view.file,
      absPath: absFor(app, view.file)
    };
  }
  return null;
}
function readLivePick(app) {
  const views = markdownViews(app);
  const active = app.workspace.getActiveViewOfType(import_obsidian3.MarkdownView);
  const ordered = active ? [active, ...views.filter((v) => v !== active)] : views;
  for (const v of ordered) {
    const p = pickFromEditor(app, v);
    if (p) return p;
  }
  return pickFromPreview(app);
}

// src/views/PenView.ts
var import_obsidian5 = require("obsidian");

// src/foldview.ts
var FOLD_TAG = /<\/?(?:details|summary)\b[^>]*>/gi;
function stripFoldTags(s) {
  var _a;
  let out = s.replace(FOLD_TAG, "");
  const tail = out.match(/<\/?[A-Za-z]*$/);
  if (tail && tail[0]) {
    const t2 = tail[0].toLowerCase();
    const openers = ["<details", "<summary", "</details", "</summary"];
    if (openers.some((o) => o.startsWith(t2))) {
      out = out.slice(0, (_a = tail.index) != null ? _a : 0);
    }
  }
  return out;
}
function visibleReply(text) {
  return text.replace(/<!--pen:chips[\s\S]*?-->/g, "").replace(/^[ \t]*(?:<details\b[^>]*>[ \t]*)?<summary\b[^>]*>(.*?)[ \t]*<\/summary>[ \t]*(?:<\/details>)?[ \t]*$/gim, "$1").replace(/^[ \t]*<\/?(?:details|summary)\b[^>]*>[ \t]*$/gim, "").trim();
}

// src/deeppoll.ts
var DEEP_POLL_MS = 3e3;
var DEEP_POLL_BUDGET_MS = 48e4;
var DEEP_POLL_MAX_FAILS = 3;
async function pollDeep(deps) {
  var _a, _b, _c, _d;
  const until = deps.now() + DEEP_POLL_BUDGET_MS;
  let fails = 0;
  while (deps.now() < until) {
    await deps.sleep(DEEP_POLL_MS);
    if (!deps.alive()) return;
    try {
      const box = await deps.fetch(deps.since());
      if (!deps.alive()) return;
      fails = 0;
      if (box.budget) (_a = deps.onBudget) == null ? void 0 : _a.call(deps, box.budget);
      if (box.spend) (_b = deps.onSpend) == null ? void 0 : _b.call(deps, box.spend);
      if ((_c = box.items) == null ? void 0 : _c.length) deps.onItems(box.items, box.cursor);
      if (!((_d = box.running) == null ? void 0 : _d.length)) return;
    } catch (e) {
      if (isGone(e)) return;
      if (++fails >= DEEP_POLL_MAX_FAILS) return;
    }
  }
}
var MAX_VISIBLE_DEEP = 2;
function dropAsked(cur, text) {
  if (!text) return cur;
  return cur.filter((c) => c.text !== text);
}
function keepDeep(cur) {
  return cur.filter((c) => c.kind === "deep").slice(-MAX_VISIBLE_DEEP);
}
function mergeDeep(cur, items) {
  const seen = new Set(cur.map((c) => c.text));
  const next = [...cur];
  for (const it of items) {
    if (!(it == null ? void 0 : it.text) || seen.has(it.text)) continue;
    seen.add(it.text);
    next.push({ ...it, kind: "deep" });
  }
  const deep = next.filter((c) => c.kind === "deep").slice(-MAX_VISIBLE_DEEP);
  const quick = next.filter((c) => c.kind !== "deep");
  return [...deep, ...quick];
}

// src/sidecar.ts
var import_child_process = require("child_process");
var import_fs = require("fs");
var import_os = require("os");
var import_path = require("path");
var import_util = require("util");
var execFile = (0, import_util.promisify)(import_child_process.execFile);
var HOME = (0, import_path.join)((0, import_os.homedir)(), ".socrates-pen");
var VENV = (0, import_path.join)(HOME, "venv");
function venvPython() {
  const win = (0, import_path.join)(VENV, "Scripts", "python.exe");
  const nix = (0, import_path.join)(VENV, "bin", "python");
  return (0, import_fs.existsSync)(win) ? win : nix;
}
function parseListen(url) {
  let u;
  try {
    u = new URL(url);
  } catch (e) {
    throw new Error("bad-url");
  }
  const host = (u.hostname || "127.0.0.1").toLowerCase();
  if (host !== "127.0.0.1" && host !== "localhost" && host !== "::1") {
    throw new Error("not-loopback");
  }
  const port = u.port ? Number(u.port) : u.protocol === "https:" ? 443 : 80;
  if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error("bad-port");
  return { host: host === "localhost" ? "127.0.0.1" : host, port };
}
function zipUrl(version) {
  return `https://github.com/xesws/socrates-pen/archive/refs/tags/${version}.zip`;
}
function cmpVer(a, b) {
  const pa = a.split(".").map((x) => parseInt(x, 10) || 0);
  const pb = b.split(".").map((x) => parseInt(x, 10) || 0);
  for (let i = 0; i < 3; i++) {
    const d = (pa[i] || 0) - (pb[i] || 0);
    if (d) return d;
  }
  return 0;
}
function sidecarUsable(version, pluginVersion) {
  return typeof version === "string" && version.length > 0 && cmpVer(version, pluginVersion) >= 0;
}
function parseLsofF(stdout) {
  const out = [];
  let pid = 0;
  let command = "";
  const flush = () => {
    if (pid > 0) out.push({ pid, command: command || "?" });
    pid = 0;
    command = "";
  };
  for (const line of stdout.split(/\r?\n/)) {
    if (!line) continue;
    if (line.startsWith("p")) {
      flush();
      pid = parseInt(line.slice(1), 10) || 0;
    } else if (line.startsWith("c")) {
      command = line.slice(1).trim();
    }
  }
  flush();
  return out.filter((p) => p.pid > 0);
}
function addrPort(addr) {
  const m = addr.match(/:(\d+)$/);
  return m ? parseInt(m[1], 10) : null;
}
function parseNetstatAno(stdout, port) {
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  for (const line of stdout.split(/\r?\n/)) {
    if (!/LISTEN/i.test(line)) continue;
    const parts = line.trim().split(/\s+/);
    const local = parts[1] || "";
    if (addrPort(local) !== port) continue;
    const pid = parseInt(parts[parts.length - 1], 10);
    if (!Number.isInteger(pid) || pid <= 0 || seen.has(pid)) continue;
    seen.add(pid);
    out.push({ pid, command: "?" });
  }
  return out;
}
function parseSsLtnp(stdout) {
  var _a;
  const out = [];
  const seen = /* @__PURE__ */ new Set();
  const cmdRe = /users:\(\("([^"]+)"/;
  for (const line of stdout.split(/\r?\n/)) {
    if (!/listen/i.test(line)) continue;
    const command = ((_a = line.match(cmdRe)) == null ? void 0 : _a[1]) || "?";
    const re = /pid=(\d+)/g;
    let m;
    while (m = re.exec(line)) {
      const pid = parseInt(m[1], 10);
      if (!Number.isInteger(pid) || pid <= 0 || seen.has(pid)) continue;
      seen.add(pid);
      out.push({ pid, command });
    }
  }
  return out;
}
function classifyListener(command, owned) {
  if (owned) return "owned";
  if (/python|pen/i.test(command)) return "leftover";
  return command ? "other" : "leftover";
}
async function run(bin, args, timeoutMs) {
  const { stdout, stderr } = await execFile(bin, args, {
    timeout: timeoutMs,
    windowsHide: true,
    encoding: "utf8"
  });
  return { stdout: String(stdout || ""), stderr: String(stderr || "") };
}
async function python311(bin, prefix = []) {
  try {
    await run(bin, [...prefix, "-c", "import sys; raise SystemExit(0 if sys.version_info >= (3, 11) else 1)"], 8e3);
    return true;
  } catch (e) {
    return false;
  }
}
var PYTHON_FALLBACKS = ["/opt/homebrew/bin/python3", "/usr/local/bin/python3"];
async function findSystemPython(override) {
  const trimmed = override.trim();
  if (trimmed) {
    if (await python311(trimmed)) return { bin: trimmed, prefix: [] };
    return null;
  }
  const nix = ["python3", "python", ...PYTHON_FALLBACKS];
  for (const bin of nix) {
    if (await python311(bin)) return { bin, prefix: [] };
  }
  if (process.platform === "win32" && await python311("py", ["-3"])) {
    return { bin: "py", prefix: ["-3"] };
  }
  return null;
}
function venvCoversPlugin(ver, pluginVersion) {
  return sidecarUsable(ver != null ? ver : void 0, pluginVersion);
}
function needsSystemPython(haveVenv) {
  return !haveVenv;
}
async function penVersion(py) {
  try {
    const { stdout } = await run(py, ["-c", "import pen; print(pen.__version__)"], 8e3);
    const v = stdout.trim();
    return v || null;
  } catch (e) {
    return null;
  }
}
function abortMs(ms) {
  const c = new AbortController();
  setTimeout(() => c.abort(), ms);
  return c.signal;
}
async function fetchHealth(baseUrl, timeoutMs = 2e3) {
  try {
    return await makeApi(baseUrl).health({ signal: abortMs(timeoutMs) });
  } catch (e) {
    return null;
  }
}
async function ping(baseUrl) {
  return await fetchHealth(baseUrl, 800) !== null;
}
async function waitHealth(baseUrl, ms) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    if (await ping(baseUrl)) return true;
    await new Promise((r) => setTimeout(r, 300));
  }
  return ping(baseUrl);
}
async function waitGone(baseUrl, ms) {
  const t0 = Date.now();
  while (Date.now() - t0 < ms) {
    if (!await ping(baseUrl)) return true;
    await new Promise((r) => setTimeout(r, 200));
  }
  return !await ping(baseUrl);
}
async function findListeners(port) {
  if (process.platform === "win32") {
    try {
      const { stdout } = await run("netstat", ["-ano", "-p", "TCP"], 8e3);
      return parseNetstatAno(stdout, port);
    } catch (e) {
      return [];
    }
  }
  try {
    const { stdout } = await run("lsof", ["-nP", `-iTCP:${port}`, "-sTCP:LISTEN", "-Fpc"], 8e3);
    return parseLsofF(stdout);
  } catch (e) {
    try {
      const { stdout } = await run("ss", ["-ltnp", `sport = :${port}`], 8e3);
      return parseSsLtnp(stdout);
    } catch (e2) {
      return [];
    }
  }
}
async function killPid(pid, hard) {
  if (!Number.isInteger(pid) || pid <= 0 || pid === process.pid) return;
  if (process.platform === "win32") {
    const args = hard ? ["/PID", String(pid), "/T", "/F"] : ["/PID", String(pid), "/T"];
    await run("taskkill", args, 8e3).catch(() => {
    });
    return;
  }
  try {
    process.kill(pid, hard ? "SIGKILL" : "SIGTERM");
  } catch (e) {
  }
}
var SidecarManager = class {
  constructor() {
    this.child = null;
    this.owned = false;
    this.phase = "idle";
    this.detail = "";
    this.errTail = "";
    this.watchers = /* @__PURE__ */ new Set();
    this.inflight = null;
    this.stopInflight = null;
    this.epoch = 0;
  }
  snapshot() {
    return { phase: this.phase, detail: this.detail, owned: this.owned };
  }
  watch(fn) {
    this.watchers.add(fn);
    return () => this.watchers.delete(fn);
  }
  set(phase, detail) {
    this.phase = phase;
    this.detail = detail;
    for (const fn of this.watchers) fn();
  }
  /** 健康且版本对齐就直接过。旧进程占端口 → stale，不标 Running。 */
  ensure(opts) {
    if (this.inflight) return this.inflight;
    this.inflight = this.runEnsure(opts).finally(() => {
      this.inflight = null;
    });
    return this.inflight;
  }
  /** 退出 Obsidian / 关保活：只杀本次 spawn 的子进程，不动别人占着的端口。 */
  stopOwned() {
    this.killChild();
    if (this.phase !== "stopping") this.set("idle", "");
  }
  /** 设置页「停止」：按配置的 loopback 端口停掉正在听的进程。 */
  stopListen(sidecarUrl) {
    if (this.stopInflight) return this.stopInflight;
    this.stopInflight = this.runStop(sidecarUrl).finally(() => {
      this.stopInflight = null;
    });
    return this.stopInflight;
  }
  killChild() {
    if (!this.child) {
      this.owned = false;
      return;
    }
    const kid = this.child;
    this.owned = false;
    this.child = null;
    try {
      kid.kill("SIGTERM");
    } catch (e) {
    }
  }
  async runEnsure(opts) {
    var _a, _b;
    this.epoch += 1;
    const my = this.epoch;
    if (this.stopInflight) await this.stopInflight;
    if (my !== this.epoch) return "error";
    this.errTail = "";
    this.set("checking", "");
    const health = await fetchHealth(opts.sidecarUrl);
    if (my !== this.epoch) return "error";
    if (health) {
      if (sidecarUsable(health.version, opts.version)) {
        this.set("running", health.version || "");
        return "already";
      }
      this.set("stale", health.version || "");
      return "stale";
    }
    let listen;
    try {
      listen = parseListen(opts.sidecarUrl);
    } catch (e) {
      const code = e instanceof Error ? e.message : "bad-url";
      this.set("error", code);
      return "error";
    }
    const vpy = venvPython();
    const haveVenv = (0, import_fs.existsSync)(vpy);
    const ver = haveVenv ? await penVersion(vpy) : null;
    if (my !== this.epoch) return "error";
    const needInstall = !haveVenv || !venvCoversPlugin(ver, opts.version);
    if (needInstall) {
      this.set("installing", "");
      try {
        if (needsSystemPython(haveVenv)) {
          const sys = await findSystemPython(opts.pythonPath);
          if (my !== this.epoch) return "error";
          if (!sys) {
            this.set("error", "no-python");
            return "error";
          }
          await run(sys.bin, [...sys.prefix, "-m", "venv", VENV], 12e4);
        }
        const py2 = venvPython();
        if (!(0, import_fs.existsSync)(py2)) throw new Error("venv-missing");
        await run(py2, ["-m", "pip", "install", "--upgrade", "pip"], 18e4);
        try {
          await run(py2, ["-m", "pip", "install", zipUrl(opts.version)], 3e5);
        } catch (e) {
          await run(py2, ["-m", "pip", "install", "git+https://github.com/xesws/socrates-pen.git"], 3e5);
        }
      } catch (e) {
        if (my !== this.epoch) return "error";
        const msg = e instanceof Error ? e.message : String(e);
        this.errTail = msg.slice(-800);
        this.set("error", "install-failed");
        return "error";
      }
    }
    if (my !== this.epoch) return "error";
    this.set("starting", "");
    const py = venvPython();
    try {
      const child = (0, import_child_process.spawn)(py, ["-m", "pen", "--host", listen.host, "--port", String(listen.port)], {
        cwd: HOME,
        env: { ...process.env, PYTHONUNBUFFERED: "1" },
        stdio: ["ignore", "pipe", "pipe"],
        windowsHide: true
      });
      this.child = child;
      this.owned = true;
      const bits = [];
      const onChunk = (buf) => {
        bits.push(buf.toString("utf8"));
        if (bits.join("").length > 4e3) bits.splice(0, bits.length - 4);
      };
      (_a = child.stdout) == null ? void 0 : _a.on("data", onChunk);
      (_b = child.stderr) == null ? void 0 : _b.on("data", onChunk);
      child.on("error", (err) => {
        this.errTail = err.message;
        if (this.child === child) {
          this.owned = false;
          this.child = null;
          this.set("error", "spawn-failed");
        }
      });
      child.on("exit", (code) => {
        if (this.child !== child) return;
        this.owned = false;
        this.child = null;
        this.errTail = bits.join("").slice(-800);
        if (this.phase !== "running") this.set("error", `exited-${code != null ? code : "?"}`);
        else this.set("idle", "");
      });
      const ok = await waitHealth(opts.sidecarUrl, 15e3);
      if (my !== this.epoch) {
        this.killChild();
        return "error";
      }
      if (!ok) {
        this.errTail = bits.join("").slice(-800);
        this.killChild();
        this.set("error", "no-health");
        return "error";
      }
      const after = await fetchHealth(opts.sidecarUrl);
      if (my !== this.epoch) {
        this.killChild();
        return "error";
      }
      if (!sidecarUsable(after == null ? void 0 : after.version, opts.version)) {
        this.set("stale", (after == null ? void 0 : after.version) || "");
        return "stale";
      }
      this.set("running", (after == null ? void 0 : after.version) || opts.version);
      return "started";
    } catch (e) {
      this.errTail = e instanceof Error ? e.message : String(e);
      this.set("error", "spawn-failed");
      return "error";
    }
  }
  async runStop(sidecarUrl) {
    this.epoch += 1;
    const my = this.epoch;
    this.errTail = "";
    let listen;
    try {
      listen = parseListen(sidecarUrl);
    } catch (e) {
      const code = e instanceof Error ? e.message : "bad-url";
      this.set("error", code);
      return { kind: "failed", who: "", command: "" };
    }
    const wasOwned = this.owned;
    const prior = this.phase;
    const health = await fetchHealth(sidecarUrl);
    if (!health && !this.child) {
      const hanging = await findListeners(listen.port);
      if (!hanging.length) {
        if (my === this.epoch) this.set("idle", "");
        return { kind: "idle", who: "", command: "" };
      }
    }
    this.set("stopping", "");
    this.killChild();
    const whoFromPrior = () => {
      if (wasOwned) return "owned";
      if (prior === "stale" || health && !health.version) return "leftover";
      if (prior === "running") return "shared";
      return "leftover";
    };
    let shutdownAccepted = false;
    try {
      await makeApi(sidecarUrl).shutdown({ signal: abortMs(2e3) });
      shutdownAccepted = true;
    } catch (e) {
      const status = e instanceof ApiError ? e.status : 0;
      if (status !== 404 && status !== 405) {
      }
    }
    if (shutdownAccepted && await waitGone(sidecarUrl, 2500)) {
      const who2 = whoFromPrior();
      if (my === this.epoch) this.set("idle", "stopped");
      return { kind: "stopped", who: who2, command: who2 === "owned" ? "" : "python" };
    }
    const procs = await findListeners(listen.port);
    const command = procs.map((p) => p.command).filter((c) => c && c !== "?")[0] || "";
    const who = wasOwned || prior === "stale" || prior === "running" ? whoFromPrior() : classifyListener(command, false);
    for (const p of procs) await killPid(p.pid, false);
    if (await waitGone(sidecarUrl, 2500)) {
      if (my === this.epoch) this.set("idle", "stopped");
      return { kind: "stopped", who, command };
    }
    for (const p of procs) await killPid(p.pid, true);
    if (await waitGone(sidecarUrl, 2e3)) {
      if (my === this.epoch) this.set("idle", "stopped");
      return { kind: "stopped", who, command };
    }
    if (my === this.epoch) {
      this.errTail = procs.length ? command || String(procs[0].pid) : "no-pid";
      this.set("error", procs.length ? "stop-failed" : "stop-no-pid");
    }
    return { kind: "failed", who, command };
  }
  lastError() {
    return this.errTail;
  }
};

// src/logo.ts
function art(raw) {
  const lines = raw.replace(/^\n/, "").replace(/\n[ \t]*$/, "").split("\n").map((l) => l.replace(/[ \t]+$/, ""));
  let cols = 0;
  for (const l of lines) cols = Math.max(cols, l.length);
  return { lines, cols, rows: lines.length };
}
function lintArt(name, a) {
  const bad = [];
  a.lines.forEach((l, i) => {
    var _a;
    for (const ch of l) {
      const c = (_a = ch.codePointAt(0)) != null ? _a : 0;
      const ok = c >= 32 && c <= 126 || c >= 9600 && c <= 9631;
      if (!ok) {
        bad.push(name + " \u7B2C " + (i + 1) + " \u884C\u542B\u4E0D\u5B89\u5168\u5B57\u7B26 U+" + c.toString(16).toUpperCase());
      }
    }
  });
  return bad;
}
var AVATAR = art(String.raw`
        .
      .ooO@O..
    .OO@@@@@o.
    .O@@@@@@.
     .oOooo.
       o. .oo
   .O. @@O@O.
    .  ..OO...
        . .o..
       .o. ..
      ..oo.
`);
var PORTRAIT_WIDE = art(String.raw`
                           s   . .sAs:   :s:      ..    :.
                                   ..sA:..:        :..   .:.
               ..  :s              ..  A::..      :    :
                .  .s         ::    sG s:s::::..       s:  s3:
          ..        ..      ... s:   sA.:  :ssAsss:.  .    .     .
          :.                  As sss.  . ..:sAGGGG33A::     sA3A..
           .                  .:  :.::..:sA3G&&&&&&&G3G3:   .s::  .s
     ..                         .. :sAGGG&&@@@@@@@@&&GGG3s  ..:.   .s
                       ..::::..::sAAG@&@@@@@@@@@@@@@&GG33G:  .s3A: .::
    :.              .:ssAAAsAAAA33G&@@@@@@@@@@@@@@@@@&G3A33:     ::  .:.
    s    .          :ssA3GGG&GGGG&@@@@@@@@@@@@@@@@@@@&GG3s3A.:s  .G:
    .               .:sA3G&@@&&&&&@@@@@@@@@@@@@@@@@@@&3GGssAA.:: AG  :.
     :               .:sA3GG&&&&&&@@@@@@@@@@@@@@@@@@GGGGA:sAs. A .       :
     :.                .:AA3&&&G&&&&&&@@@@@@@@@@@&&GGG&Gs::::.:s       : .
      .:               ..:sAA3333GGGG&&@&&&&&&&&&GG&&&&3:::: .     .:s::
                    .::.:AGG&GGG3GGGG&&&&@@@@@@@@&&@&&Gs.::.     .s:.      .
                     .:sAsAG@@@&&&&GGG&&@@@@@@@@@@&&&G3s::.       .:.      :
                   .....s33A&@@@@@@&&&&@@@@@@@@@&&&&@&&3:::.    A: .s:  s..
                  .:sAA:. :ss3&@@@@@@&&@@@@&GG&G&@@@@@&GA::.     .sG.  .
    ..               :s33ssA..A3&@GG@3A&&&&&&@@@&3A:...:s:...       .    .
                         :ssssAsA&:s&A 333GG33s.           ..
                                 . .AA            ....    .::        .
                                   :AA.                  :ss:
                                  A&@@3       ..:ss. ::sAG3::
                       .::.       3&@@&AAs. .:sssssAGG3@@&3:
               .:....:sAAs::      3&@@3s&&GGAsAGG&&@&&@@@GA.
                :A3AA3AAsAs:      s@@@33GGG@@&G33G&@@@@&G3s       .
                 .:s3G3G33A:      s&@@&G&&&@@@@@@&&G&G3As.      :
                   .:A33G3A:     :3&@@@&G3s&@@@@@@&&GAs.     .  :
                     sA3G33.  .  A&@@@@&G@3 A&@@@@&GA:     ..::s:
                      :A3A:      s&@&@@G3333::3&&&GA:     .:A:
                      :sA:        ..:s:   A@@3.sGG3s.::...:sssAs.
                      ::.              ..sGG&@&AA33A:s::sAA:s :::
                       .              sA3AAA33GG3AAAAAs:ss3Ass.
                      .. :       ..  :s::s3G3GA3GAsAs3:As::ss..ss
             .       .:            .         :s:GAAA:AAsAs:  ...:.
              ..                      .         ::G3A:A::A:ssA3s
              .                 .sAssA33AA:       ssG3:::. AG. :.
                                   :.  .sAss     . .:33.sA  :  ..
                                 ::s:::::..:.     .:::A3  .:A.:.
                  :              .s.:ss::Ass.        :.ss  .. .
                      .       ::s3ssAAAAAAA3ss:.:.     .:As
                     .s ..   :A A3s.AsAGG3AGGA3:.::.  :  .
                        .:  .:s.3Ass.s3G3GAsG3s3: s::  ..
                        ::  :s.:s::  .s3sAA.:Gs s  .s:  :. .:.
                     .    .  :sA:.    :3AsssAA: .  .::.    .:s:
                     ..       .:As.  .s:. .:. As. ...    .:.:3Ass.
                       .         A. .ss  .     :s      .:::::3GG3A.
                         .:          :ss.:As   ..      .::s::33&&&s
                          .            :s: .s.        .::AssA3GG&&.
                                         : ..      .::::3AAA3G3GGs
`);
var PORTRAIT_NARROW = art(String.raw`
                .   .::. :.   ..  .
            :        ..:::.   .  .  .
            :     ... ss:.:s::.  .  :.
      .           :.:: ...s3G&G3s.  .A:
                     :A3G&@@@@@&GGA  ::  :
             .:sssss3G@@@@@@@@@@&33A  ::...
  .         :s3G&&GG&@@@@@@@@@@@GGAAs: :3
   .         :A3&@&&&@@@@@@@@@@&GGsss.:..   .
   .          .sAGGG&&&@@&@@@&GG&G::...  ...
             ::AGGGGGGG&&@@@@@&&Gs.:    :.   .
            ..:A3@@@@&&&@@@@@@@@@3:.  .:.:
           .:As:ssG@@@&&@@&&&&G333s:    ::
               ::::AAA3:AAAA:      ..
                     :A            ::
                    .&@A.   ::s:sAG3.
         ....sAs:   .&@3GG3A3G&&&@&A
          :A333A:    &@GGG@@&&&&&Gs.   .
            :3GG:   A@@@&33@@@&Gs.   .:.
             :3A    A&&GA3AsG&Gs   .s:.
             .s.         s&GA33s:.:s:::
                       sA33GG3AAAssAs..
             .           ..:s3AAsAs:.:s.
                    ..:s:.    s3A:::A::
                    .:.:ss:    :As: : .
           .        :::s:s:    .:s....
             .    :sA:AA3A3A::.   :.
              .: ::sA::3G3A3s:.:  .
               . .ss.  sAssA:. ::   ::
                   :s ::    s.    ..:3A:
               .      .:.:.  .   .:s:3&&.
                        ....    .:AA33G3
`);
var WORDMARK_WIDE = art(String.raw`
 3&&@&s    sG@&@&s     3&&@&A   s&&&&&G:     A&&     G&&&&&&s .&&&&&&3   s&&@@3
3@A  3&.  s@G: .3@A   &@s .3&:  A@A  :@@    .@&@3    ..s@G.:   @&       .@G  s&A
:G&G3s.   G@     &@  s@A        A@GAAA&3    G@ A@:     .@3     @&3333:   3@&GA:
 .:s3&@:  G@.    &@  s@A    :   A@G3@@A    s@&s3@&     :@3     @&ssss.    .sAG@3
G@s  A@s  s@G: .3@A   G@A::&@:  A@s  G@s   &&3G3G@A    :@3     @&    .  :@3  :@&
.3@@@&A    sG@&@&s     A&&&G:   s&s   G&: A&s    G&.   .&3     &&&&&&G   A&@@@G:
`);
var WORDMARK_NARROW = art(String.raw`
:GGG&s   3&G&G:   A&G&G.  &&GG&A    3@s   AG&&&G: 3&GGG3  sGGG&:
G@:.As  3@:  G&  A@: .3:  @3  G@   :@G&     s@:   G&:::   G@:.As
 AG&Gs  @3   :@: G&       &&G&G:   &G @3    s@    3@GGGs   AG&G:
3A  G@  3@:  G&  s@s :&s  @3 3&:  A@GGG@:   s@.   G&      3A  &@
s&&G&s   3&G&G:   s&G&3   &A  3&. &3   GG   s&.   3&GGGG  s&&G&s
`);
for (const [name, a] of Object.entries({
  AVATAR,
  PORTRAIT_WIDE,
  PORTRAIT_NARROW,
  WORDMARK_WIDE,
  WORDMARK_NARROW
})) {
  const bad = lintArt(name, a);
  if (bad.length) console.warn("[socrates-pen] " + bad.join("; "));
}

// src/views/splash.ts
function measureMonoAdvance(host) {
  const probe = host.createSpan({ text: "0".repeat(64) });
  probe.setAttr("aria-hidden", "true");
  probe.style.cssText = "position:absolute;left:-9999px;top:0;visibility:hidden;white-space:pre;font-family:var(--font-monospace);font-size:100px;letter-spacing:0;font-variant-ligatures:none;padding:0;border:0;margin:0";
  const w = probe.getBoundingClientRect().width;
  probe.remove();
  const adv = w / 64 / 100;
  return adv > 0.3 && adv < 1.2 ? Number(adv.toFixed(4)) : 0.6;
}
function paintArt(parent, a, cls) {
  const box = parent.createDiv({ cls: `sp-art ${cls}` });
  box.setAttr("aria-hidden", "true");
  box.style.setProperty("--sp-cols", String(a.cols));
  a.lines.forEach((line, i) => {
    const row = box.createDiv({ cls: "sp-art-row", text: line.length > 0 ? line : " " });
    row.style.setProperty("--i", String(i));
  });
}
function renderSplash(parent, o) {
  if (o.level === "none") return;
  const wrap = parent.createDiv({ cls: "sp-splash" });
  wrap.setAttr("role", "img");
  wrap.setAttr("aria-label", `${t().appName} \u2014 ${t().splashTagline}`);
  if (o.animate) wrap.addClass("is-enter");
  if (o.level === "hero") {
    paintArt(wrap, PORTRAIT_WIDE, "is-portrait is-wide");
    paintArt(wrap, PORTRAIT_NARROW, "is-portrait is-narrow");
  }
  paintArt(wrap, WORDMARK_WIDE, "is-word is-wide");
  paintArt(wrap, WORDMARK_NARROW, "is-word is-narrow");
  wrap.createDiv({ cls: "sp-splash-tag", text: t().splashTagline });
  wrap.createDiv({ cls: "sp-splash-sub", text: t().splashSubline });
}

// src/views/ReportView.ts
var import_obsidian4 = require("obsidian");

// src/radar.ts
var SCORE_MIN = 1;
var SCORE_MAX = 10;
var RINGS = [2, 4, 6, 8, 10];
var LABEL_MAX2 = 8;
var LABEL_GAP = 10;
var LABEL_ALL_UPTO = 12;
var PICK_K = 3;
function clampScore(v) {
  if (typeof v !== "number" || !Number.isFinite(v)) return null;
  return Math.min(SCORE_MAX, Math.max(SCORE_MIN, v));
}
function truncateLabel(name, max = LABEL_MAX2) {
  const cps = Array.from(name);
  return cps.length <= max ? name : `${cps.slice(0, max).join("")}\u2026`;
}
function anchorFor(angle) {
  const c = Math.cos(angle);
  return c > 0.35 ? "start" : c < -0.35 ? "end" : "middle";
}
function baselineFor(angle) {
  const s = Math.sin(angle);
  return s > 0.35 ? "hanging" : s < -0.35 ? "auto" : "middle";
}
function rated(axes) {
  const out = [];
  axes.forEach((a, i) => {
    const s = clampScore(a.score);
    if (s !== null) out.push({ i, score: s });
  });
  return out;
}
function tonesOf(axes, k3 = PICK_K) {
  const out = /* @__PURE__ */ new Map();
  const rs = rated(axes);
  const asc = [...rs].sort((a, b) => a.score - b.score || a.i - b.i);
  for (const p of asc.slice(0, k3)) out.set(axes[p.i].id, "weak");
  const desc = [...rs].sort((a, b) => b.score - a.score || a.i - b.i);
  for (const p of desc.slice(0, k3)) {
    const id = axes[p.i].id;
    if (!out.has(id)) out.set(id, "strong");
  }
  return out;
}
function pickLabeled(axes, k3 = PICK_K) {
  if (axes.length <= LABEL_ALL_UPTO) return new Set(axes.map((a) => a.id));
  return new Set(tonesOf(axes, k3).keys());
}
var fmt = (v) => Math.round(v * 10) / 10;
function layoutRadar(axes, opts = {}) {
  var _a, _b, _c;
  const r = (_a = opts.r) != null ? _a : 100;
  const fontSize = (_b = opts.fontSize) != null ? _b : 12;
  const nameMax = (_c = opts.nameMax) != null ? _c : LABEL_MAX2;
  const labelW = (nameMax + 1) * fontSize;
  const pad = r + LABEL_GAP + labelW + fontSize;
  const size = Math.ceil(pad * 2);
  const cx = size / 2;
  const cy = size / 2;
  const n3 = axes.length;
  const labeled = pickLabeled(axes);
  const tones = tonesOf(axes);
  const points = axes.map((a, i) => {
    var _a2;
    const angle = -Math.PI / 2 + 2 * Math.PI * i / (n3 || 1);
    const score = clampScore(a.score);
    const rr = r * (score === null ? RINGS[0] : score) / SCORE_MAX;
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    const lr = r + LABEL_GAP;
    return {
      id: a.id,
      name: a.name,
      label: truncateLabel(a.name, nameMax),
      score,
      angle,
      x: fmt(cx + rr * cos),
      y: fmt(cy + rr * sin),
      ex: fmt(cx + r * cos),
      ey: fmt(cy + r * sin),
      lx: fmt(cx + lr * cos),
      ly: fmt(cy + lr * sin),
      anchor: anchorFor(angle),
      baseline: baselineFor(angle),
      labeled: labeled.has(a.id),
      tone: (_a2 = tones.get(a.id)) != null ? _a2 : ""
    };
  });
  return {
    viewBox: `0 0 ${size} ${size}`,
    size,
    cx,
    cy,
    r,
    fontSize,
    rings: RINGS.map((value) => ({ value, r: fmt(r * value / SCORE_MAX) })),
    points,
    polygon: points.filter((p) => p.score !== null).map((p) => `${p.x},${p.y}`).join(" ")
  };
}

// src/profile.ts
function weakest(axes, k3 = 3) {
  return axes.map((a, i) => ({ a, i })).filter((p) => typeof p.a.score === "number" && Number.isFinite(p.a.score)).sort((p, q) => p.a.score - q.a.score || p.i - q.i).slice(0, k3).map((p) => p.a);
}
function askedMost(axes, k3 = 3) {
  return axes.map((a, i) => ({ a, i })).sort((p, q) => q.a.n - p.a.n || p.i - q.i).slice(0, k3).map((p) => p.a);
}
function mergeVaultRows(books, mergedByTitle, currentId) {
  var _a;
  const groupOf = /* @__PURE__ */ new Map();
  for (const [key, ids] of Object.entries(mergedByTitle || {})) {
    for (const id of ids) groupOf.set(id, `title:${key}`);
  }
  const rows = /* @__PURE__ */ new Map();
  for (const b of books) {
    const g = (_a = groupOf.get(b.handbook_id)) != null ? _a : `id:${b.handbook_id}`;
    let row = rows.get(g);
    if (!row) {
      row = {
        ids: [],
        title: b.title,
        n_turns: 0,
        n_coded: 0,
        n_axes: 0,
        weakest: [],
        asked_most: [],
        merged: 0,
        current: false
      };
      rows.set(g, row);
    }
    row.ids.push(b.handbook_id);
    row.n_turns += b.n_turns;
    row.n_coded += b.n_coded;
    row.n_axes = Math.max(row.n_axes, b.n_axes);
    row.merged = row.ids.length;
    row.current = row.current || b.handbook_id === currentId;
    row.weakest = dedupeByName([...row.weakest, ...b.axes.map((a) => ({ id: a.id, name: a.name, score: a.score }))]);
    row.asked_most = sumByName([...row.asked_most, ...b.axes.map((a) => ({ id: a.id, name: a.name, n: a.asked }))]);
  }
  const out = [...rows.values()].map((r) => ({
    ...r,
    weakest: weakest(r.weakest, 3),
    asked_most: askedMost(r.asked_most, 3)
  }));
  return out.sort(
    (a, b) => Number(b.current) - Number(a.current) || b.n_turns - a.n_turns || a.title.localeCompare(b.title)
  );
}
function dedupeByName(items) {
  const seen = /* @__PURE__ */ new Map();
  for (const it of items) {
    const prev = seen.get(it.name);
    if (!prev || it.score !== null && (prev.score === null || it.score < prev.score)) seen.set(it.name, it);
  }
  return [...seen.values()];
}
function sumByName(items) {
  const acc = /* @__PURE__ */ new Map();
  for (const it of items) {
    const prev = acc.get(it.name);
    if (prev) prev.n += it.n;
    else acc.set(it.name, { ...it });
  }
  return [...acc.values()];
}
var two = (v) => v < 10 ? `0${v}` : String(v);
function localStamp(iso) {
  if (!iso) return "";
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return "";
  return `${two(d.getMonth() + 1)}-${two(d.getDate())} ${two(d.getHours())}:${two(d.getMinutes())}`;
}
function masteryPct(m) {
  if (typeof m !== "number" || !Number.isFinite(m)) return "";
  return `${Math.round(m * 100)}%`;
}

// src/views/ReportView.ts
var VIEW_TYPE_REPORT = "socrates-pen-report";
var STALL_MAX = 3;
var cachedIcon = null;
function reportIconName() {
  if (cachedIcon === null) cachedIcon = (0, import_obsidian4.getIcon)("radar") ? "radar" : "target";
  return cachedIcon;
}
var spendTokens = (row) => {
  var _a, _b;
  return ((_a = row == null ? void 0 : row.in_tokens) != null ? _a : 0) + ((_b = row == null ? void 0 : row.out_tokens) != null ? _b : 0);
};
var ReportView = class _ReportView extends import_obsidian4.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.els = null;
    this.path = null;
    this.title = "";
    this.hid = null;
    this.state = "nofile";
    this.view = null;
    this.err = "";
    this.note = "";
    this.llmOk = false;
    this.progress = null;
    this.confirming = false;
    /** 读者点过「停止」：打开面板不再自动续编，等他点「继续分析」。切笔记就清。 */
    this.paused = false;
    this.vaultRows = null;
    this.vaultErr = "";
    /** 在途加载/编码的代次。任何新的 retarget 都会使旧代次作废——两个在飞的
     *  请求谁后完成都不许覆盖新的事实。 */
    this.runGen = 0;
    this.abort = null;
    /** 书架请求自己的序号：同一代次里会发两枪（开面板一枪、编完再一枪），慢的那枪后到
     *  不许把新计数盖回旧的。 */
    this.vaultSeq = 0;
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE_REPORT;
  }
  getDisplayText() {
    return t().viewTitleReport;
  }
  getIcon() {
    return reportIconName();
  }
  async onOpen() {
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        if (!file || file.extension !== "md") return;
        if (file.path === this.path) return;
        void this.retarget(file);
      })
    );
    this.renderShell();
    this.follow();
  }
  async onClose() {
    this.cancel();
    this.els = null;
  }
  /** 切语言：重建骨架、按现有状态重画。`err` 可能是 sidecar 原文，保留不动。
   *  「这一分怎么来的」那几行是服务端按 Accept-Language 现算的：报告态下重取一次
   *  （只 GET，不编码、不花钱），书架同理。 */
  relocalize() {
    this.renderShell();
    const hid = this.hid;
    if (!hid || this.state !== "report") return;
    const { gen, signal } = this.begin();
    void this.refetch(hid, gen, signal);
    void this.loadVault(gen, signal);
  }
  async refetch(hid, gen, signal) {
    try {
      const v = await this.api().getProfile(hid, signal);
      if (!this.alive(gen)) return;
      this.view = v;
      this.note = v.n_uncoded > 0 ? t().reportDegraded(v.n_uncoded) : "";
      this.paint();
    } catch (e) {
    }
  }
  // ── 生命周期 ────────────────────────────────────────────────────
  alive(gen) {
    return gen === this.runGen && this.els !== null;
  }
  cancel() {
    var _a;
    this.runGen++;
    (_a = this.abort) == null ? void 0 : _a.abort();
    this.abort = null;
  }
  /** 作废旧代次，开新的一代。 */
  begin() {
    this.cancel();
    const ac = new AbortController();
    this.abort = ac;
    return { gen: this.runGen, signal: ac.signal };
  }
  api() {
    return makeApi(this.plugin.settings.sidecarUrl);
  }
  static msg(e) {
    return e instanceof Error ? e.message : String(e);
  }
  /** 开面板时同步当前文件：file-open 在面板开着之前就发过了。 */
  follow() {
    const f = this.app.workspace.getActiveFile();
    if (f && f.extension === "md") {
      void this.retarget(f);
      return;
    }
    const { gen, signal } = this.begin();
    this.path = null;
    this.title = "";
    this.hid = null;
    this.view = null;
    this.err = "";
    this.note = "";
    this.state = "nofile";
    this.paint();
    void this.loadVault(gen, signal);
  }
  async retarget(file) {
    var _a, _b;
    const { gen, signal } = this.begin();
    this.path = file.path;
    this.title = file.basename;
    let hid = null;
    try {
      hid = (_b = (_a = this.plugin.noteBind(file.path)) == null ? void 0 : _a.handbook_id) != null ? _b : handbookIdFromPath(absFor(this.app, file));
    } catch (e) {
      hid = null;
    }
    this.hid = hid;
    this.view = null;
    this.err = "";
    this.note = "";
    this.progress = null;
    this.confirming = false;
    this.paused = false;
    this.state = "loading";
    this.paint();
    await Promise.all([this.loadProfile(gen, signal), this.loadVault(gen, signal)]);
  }
  async loadProfile(gen, signal) {
    const api = this.api();
    try {
      const h = await api.health({ signal });
      if (!this.alive(gen)) return;
      if (!sidecarUsable(h.version, this.plugin.manifest.version)) {
        this.llmOk = false;
        this.state = "down";
        const stale = t().healthStale;
        this.err = t().errReportUnreachable(stale);
        this.paint();
        return;
      }
      this.llmOk = Boolean(h.llm.ok);
    } catch (e) {
      if (!this.alive(gen)) return;
      this.llmOk = false;
      this.state = "down";
      this.err = t().errReportUnreachable(_ReportView.msg(e));
      this.paint();
      return;
    }
    if (!this.hid) {
      this.state = "nofile";
      this.paint();
      return;
    }
    let v;
    try {
      v = await api.getProfile(this.hid, signal);
    } catch (e) {
      if (!this.alive(gen)) return;
      if (e instanceof ApiError && e.status === 404) {
        this.state = "unregistered";
        this.paint();
        return;
      }
      this.state = "down";
      this.err = t().errReportFailed(_ReportView.msg(e));
      this.paint();
      return;
    }
    if (!this.alive(gen)) return;
    this.view = v;
    if (v.n_turns === 0) {
      this.state = "empty";
      this.paint();
      return;
    }
    if (v.n_coded === 0) {
      this.state = "fresh";
      this.note = this.llmOk ? "" : t().reportNoKeyHint;
      this.paint();
      return;
    }
    if (v.n_uncoded > 0 && this.llmOk && !this.paused) {
      await this.runCoding(gen, signal, false);
      return;
    }
    this.note = v.n_uncoded > 0 ? t().reportDegraded(v.n_uncoded) : "";
    this.state = "report";
    this.paint();
  }
  /**
   * 增量循环：一枪最多编 3 批，直到 remaining == 0。**停滞保护**：连着
   * STALL_MAX 枪没编出新轮次就停并报错，防服务端 bug 造成无限计费。
   * `force` 只在第一枪带上（服务端清掉这本书的编码后从头跑）。
   */
  async runCoding(gen, signal, force) {
    var _a, _b, _c, _d, _e;
    const api = this.api();
    const hid = this.hid;
    if (!hid) return;
    const start = spendTokens((_a = this.view) == null ? void 0 : _a.spend);
    this.state = "coding";
    this.err = "";
    this.note = "";
    this.confirming = false;
    this.progress = {
      coded: force ? 0 : (_c = (_b = this.view) == null ? void 0 : _b.n_coded) != null ? _c : 0,
      total: (_e = (_d = this.view) == null ? void 0 : _d.n_turns) != null ? _e : 0,
      tokens: 0
    };
    this.paint();
    let stalls = 0;
    let first = true;
    let stalled = false;
    let lastRemaining = Number.NaN;
    try {
      for (; ; ) {
        const r = await api.codeProfile(hid, this.plugin.settings, { force: force && first, signal });
        first = false;
        if (!this.alive(gen)) return;
        this.progress = {
          coded: r.n_coded,
          total: r.n_turns,
          tokens: Math.max(0, spendTokens(r.spend) - start)
        };
        this.paintProgress();
        if (r.remaining <= 0) break;
        const progressed = r.coded > 0 || Number.isFinite(lastRemaining) && r.remaining < lastRemaining;
        lastRemaining = r.remaining;
        if (progressed) {
          stalls = 0;
        } else if (++stalls >= STALL_MAX) {
          stalled = true;
          break;
        }
      }
    } catch (e) {
      if (!this.alive(gen)) return;
      this.err = t().errReportFailed(_ReportView.msg(e));
    }
    if (stalled) this.err = t().errReportStalled;
    try {
      const v = await api.getProfile(hid, signal);
      if (!this.alive(gen)) return;
      this.view = v;
      if (v.n_uncoded > 0 && !this.err) this.note = t().reportDegraded(v.n_uncoded);
    } catch (e) {
      if (!this.alive(gen)) return;
      if (!this.err) this.err = t().errReportFailed(_ReportView.msg(e));
    }
    this.state = this.view && this.view.n_coded > 0 ? "report" : "fresh";
    this.paint();
    void this.loadVault(gen, signal);
  }
  async loadVault(gen, signal) {
    const seq = ++this.vaultSeq;
    let root;
    try {
      root = vaultRoot(this.app);
    } catch (e) {
      this.vaultRows = null;
      this.vaultErr = t().reportVaultDown;
      this.paintVault();
      return;
    }
    try {
      const l = await this.api().listProfiles(root, signal);
      if (!this.alive(gen) || seq !== this.vaultSeq) return;
      this.vaultRows = mergeVaultRows(l.books, l.merged_by_title, this.hid);
      this.vaultErr = "";
    } catch (e) {
      if (!this.alive(gen) || seq !== this.vaultSeq) return;
      this.vaultRows = null;
      this.vaultErr = t().reportVaultDown;
    }
    this.paintVault();
  }
  // ── 读者动作 ────────────────────────────────────────────────────
  startAnalysis() {
    if (!this.llmOk || !this.hid) return;
    this.paused = false;
    const { gen, signal } = this.begin();
    void this.runCoding(gen, signal, false);
  }
  confirmRecompute() {
    if (!this.llmOk || !this.hid) return;
    this.paused = false;
    const { gen, signal } = this.begin();
    void this.runCoding(gen, signal, true);
  }
  stopCoding() {
    this.paused = true;
    const { gen, signal } = this.begin();
    this.state = "loading";
    this.paint();
    void this.loadProfile(gen, signal);
  }
  // ── 画 ──────────────────────────────────────────────────────────
  /**
   * 建骨架。只在 onOpen 和 relocalize 跑；之后每次刷新只改属性和重建
   * 雷达/表格那两块的子树。第二个视图**必须挂同一个 .socrates-pen 类**，
   * 才继承 .sp-icon / .sp-bar / .sp-alert / .is-off 那些规则。
   */
  renderShell() {
    const root = this.contentEl;
    root.empty();
    root.addClass("socrates-pen", "sp-report");
    const scroll = root.createDiv({ cls: "sp-report-scroll" });
    const head = scroll.createEl("h2", { cls: "sp-report-head" });
    const sub = scroll.createDiv({ cls: "sp-report-sub" });
    const alert = scroll.createDiv({ cls: "sp-alert is-off" });
    const note = scroll.createDiv({ cls: "sp-report-note is-off" });
    const actions = scroll.createDiv({ cls: "sp-report-actions is-off" });
    const analyze = actions.createEl("button", { cls: "mod-cta" });
    const recompute = actions.createEl("button");
    const confirm = actions.createEl("button", { cls: "mod-warning" });
    const cancel = actions.createEl("button");
    const stop = actions.createEl("button");
    const bar = scroll.createDiv({ cls: "sp-bar is-off" });
    const fill = bar.createDiv({ cls: "sp-bar-fill is-det" });
    const progress = scroll.createDiv({ cls: "sp-report-progress is-off" });
    const hint = scroll.createDiv({ cls: "sp-report-hint is-off" });
    const radar = scroll.createDiv({ cls: "sp-radar-wrap is-off" });
    const axes = scroll.createDiv({ cls: "sp-axes is-off" });
    const vaultTitle = scroll.createEl("h3", { cls: "sp-report-h3" });
    const vaultNote = scroll.createDiv({ cls: "sp-report-note is-off" });
    const vault = scroll.createDiv({ cls: "sp-vault-wrap" });
    this.els = {
      head,
      sub,
      alert,
      note,
      actions,
      analyze,
      recompute,
      confirm,
      cancel,
      stop,
      hint,
      bar,
      fill,
      progress,
      radar,
      axes,
      vaultTitle,
      vaultNote,
      vault
    };
    analyze.onclick = () => this.startAnalysis();
    recompute.onclick = () => {
      this.confirming = true;
      this.paint();
    };
    confirm.onclick = () => this.confirmRecompute();
    cancel.onclick = () => {
      this.confirming = false;
      this.paint();
    };
    stop.onclick = () => this.stopCoding();
    this.paint();
    this.paintVault();
  }
  paint() {
    const e = this.els;
    if (!e) return;
    const s = t();
    const v = this.view;
    e.head.setText(this.title || s.viewTitleReport);
    let sub = "";
    if (this.state === "loading") sub = s.reportLoading;
    else if (this.state === "nofile") sub = s.reportNoFile;
    else if (this.state === "unregistered") sub = s.reportNotRegistered;
    else if (this.state === "empty") sub = s.reportNoTurns;
    else if (this.state === "fresh" && v) sub = s.reportNotAnalyzed(v.n_turns);
    else if (v) sub = s.reportTurns(v.n_turns, v.n_coded, v.n_meta);
    e.sub.setText(sub);
    e.alert.setText(this.err);
    e.alert.toggleClass("is-off", !this.err);
    const notes = [];
    if (this.note) notes.push(this.note);
    if (v && v.n_legacy > 0 && this.state !== "fresh") notes.push(s.reportLegacy(v.n_legacy));
    if (v && v.n_given_up > 0) notes.push(s.reportGivenUp(v.n_given_up));
    e.note.setText(notes.join("\n"));
    e.note.toggleClass("is-off", notes.length === 0);
    const coding = this.state === "coding";
    const hasView = v !== null;
    const canAnalyze = this.llmOk && !coding && hasView && (this.state === "fresh" || this.state === "report" && v.n_uncoded > 0);
    const canRecompute = this.llmOk && !coding && this.state === "report" && hasView && v.n_coded > 0;
    e.analyze.setText(this.state === "fresh" ? s.btnAnalyze : s.btnResume);
    e.analyze.toggleClass("is-off", !canAnalyze || this.confirming);
    e.recompute.setText(s.btnRecompute);
    e.recompute.toggleClass("is-off", !canRecompute || this.confirming);
    e.confirm.setText(s.btnRecomputeSure);
    e.confirm.toggleClass("is-off", !this.confirming);
    e.cancel.setText(s.btnCancel);
    e.cancel.toggleClass("is-off", !this.confirming);
    e.stop.setText(s.btnStop);
    e.stop.toggleClass("is-off", !coding);
    e.actions.toggleClass("is-off", !(canAnalyze || canRecompute || this.confirming || coding));
    const hints = [];
    if (v && v.coded_at) hints.push(s.reportCodedAt(localStamp(v.coded_at)));
    if (v && spendTokens(v.spend) > 0) hints.push(s.reportSpend(spendTokens(v.spend)));
    e.hint.setText(hints.join(" \xB7 "));
    e.hint.toggleClass("is-off", hints.length === 0 || coding);
    this.paintProgress();
    this.paintReport();
  }
  /** 确定型进度：知道编到第几轮就画到第几轮——和主面板那条不确定型的穿梭条是两回事。 */
  paintProgress() {
    const e = this.els;
    if (!e) return;
    const coding = this.state === "coding";
    const p = this.progress;
    e.bar.toggleClass("is-off", !coding);
    e.progress.toggleClass("is-off", !coding || !p);
    if (!p) return;
    const pct = p.total > 0 ? Math.round(100 * p.coded / p.total) : 0;
    e.fill.style.setProperty("--sp-pct", `${pct}%`);
    e.progress.setText(t().reportProgress(p.coded, p.total, p.tokens));
  }
  paintReport() {
    const e = this.els;
    if (!e) return;
    e.radar.empty();
    e.axes.empty();
    const v = this.view;
    const show = v !== null && v.axes.length > 0 && (this.state === "report" || this.state === "coding");
    e.radar.toggleClass("is-off", !show);
    e.axes.toggleClass("is-off", !show);
    if (!show || !v) return;
    this.drawRadar(e.radar, v.axes);
    this.drawAxes(e.axes, v.axes);
  }
  /** 雷达用 createSvg 逐节点建——Obsidian 不许 innerHTML 灌外来 SVG。几何在 src/radar.ts。 */
  drawRadar(wrap, axes) {
    const s = t();
    const lay = layoutRadar(axes.map((a) => ({ id: a.id, name: a.name, score: a.score })));
    const svg = wrap.createSvg("svg", {
      cls: "sp-radar",
      attr: { viewBox: lay.viewBox, role: "img", "aria-label": s.reportRadarLabel(axes.length) }
    });
    for (const ring of lay.rings) {
      svg.createSvg("circle", { cls: "sp-radar-ring", attr: { cx: lay.cx, cy: lay.cy, r: ring.r } });
    }
    for (const p of lay.points) {
      svg.createSvg("line", { cls: "sp-radar-spoke", attr: { x1: lay.cx, y1: lay.cy, x2: p.ex, y2: p.ey } });
    }
    if (lay.polygon) svg.createSvg("polygon", { cls: "sp-radar-area", attr: { points: lay.polygon } });
    const scale = svg.createSvg("text", {
      cls: "sp-radar-scale",
      attr: { x: lay.cx + 3, y: lay.cy - lay.r + 2, "font-size": lay.fontSize * 0.75, "dominant-baseline": "hanging" }
    });
    scale.textContent = "10";
    for (const p of lay.points) {
      const dot = svg.createSvg("circle", {
        cls: p.score === null ? ["sp-radar-pt", "is-null"] : "sp-radar-pt",
        attr: { cx: p.x, cy: p.y, r: 3.5 }
      });
      dot.createSvg("title").textContent = `${p.name} \xB7 ${p.score === null ? s.reportUnrated : s.reportScoreTip(p.score)}`;
      if (!p.labeled) continue;
      const cls = ["sp-radar-label"];
      if (p.tone === "weak") cls.push("is-weak");
      if (p.tone === "strong") cls.push("is-strong");
      const text = svg.createSvg("text", {
        cls,
        attr: {
          x: p.lx,
          y: p.ly,
          "text-anchor": p.anchor,
          "dominant-baseline": p.baseline,
          "font-size": lay.fontSize
        }
      });
      text.textContent = p.label;
      if (p.label !== p.name) text.createSvg("title").textContent = p.name;
    }
  }
  /** 轴表：最弱在前、未评在后（重排只在表不在图）。每轴一个 details，展开看证据。 */
  drawAxes(wrap, axes) {
    var _a;
    const s = t();
    const tones = tonesOf(axes.map((a) => ({ id: a.id, name: a.name, score: a.score })));
    const head = wrap.createDiv({ cls: "sp-axes-head" });
    head.createSpan({ text: s.reportColAxis });
    head.createSpan({ cls: "sp-score", text: s.reportColScore });
    head.createSpan({ cls: "sp-axis-mastery", text: s.reportColMastery });
    head.createSpan({ cls: "sp-axis-n", text: s.reportColN });
    const sorted = axes.map((a, i) => ({ a, i })).sort((p, q) => {
      const ps = p.a.score;
      const qs = q.a.score;
      if (ps === null && qs === null) return p.i - q.i;
      if (ps === null) return 1;
      if (qs === null) return -1;
      return ps - qs || p.i - q.i;
    }).map((p) => p.a);
    for (const a of sorted) {
      const det = wrap.createEl("details", { cls: "sp-axis" });
      const sum = det.createEl("summary", { cls: "sp-axis-sum" });
      const name = sum.createSpan({ cls: "sp-axis-name", text: a.name });
      if (a.definition) name.setAttr("title", a.definition);
      const tone = (_a = tones.get(a.id)) != null ? _a : "";
      const scoreCls = ["sp-score"];
      if (a.score === null) scoreCls.push("is-null");
      if (tone === "weak") scoreCls.push("is-weak");
      if (tone === "strong") scoreCls.push("is-strong");
      sum.createSpan({ cls: scoreCls, text: a.score === null ? s.reportUnrated : String(a.score) });
      sum.createSpan({ cls: "sp-axis-mastery", text: masteryPct(a.mastery) || s.reportNoMastery });
      sum.createSpan({ cls: "sp-axis-n", text: s.reportEvidenceCount(a.n, a.n_legacy) });
      const body = det.createDiv({ cls: "sp-axis-body" });
      if (a.definition) body.createDiv({ cls: "sp-axis-def", text: a.definition });
      if (a.mastery !== null) {
        body.createDiv({ cls: "sp-axis-line", text: s.reportMastery(masteryPct(a.mastery), a.n_obs) });
      }
      if (a.why.length) {
        body.createDiv({ cls: "sp-axis-h", text: s.reportWhyTitle });
        const ul = body.createEl("ul", { cls: "sp-why" });
        for (const w of a.why) ul.createEl("li", { text: w });
      }
      if (a.gaps.length) {
        body.createDiv({ cls: "sp-axis-h", text: s.reportGapsTitle });
        const ul = body.createEl("ul", { cls: "sp-evs" });
        for (const g of a.gaps) {
          const li = ul.createEl("li");
          li.createSpan({ cls: "sp-ev-time", text: localStamp(g.asked_at) });
          li.createSpan({ cls: "sp-ev-ref", text: s.reportTurnRef(g.idx) });
          li.createDiv({ cls: "sp-ev-quote", text: g.quote });
        }
      }
      if (a.evidence.length) {
        body.createDiv({ cls: "sp-axis-h", text: s.reportEvidenceTitle });
        const ul = body.createEl("ul", { cls: "sp-evs" });
        for (const ev of a.evidence) {
          const li = ul.createEl("li");
          li.createSpan({ cls: "sp-ev-time", text: localStamp(ev.asked_at) });
          li.createSpan({ cls: "sp-ev-ref", text: s.reportTurnRef(ev.idx) });
          const bits = [s.reportType(ev.type)];
          let tone2 = "";
          if (ev.type === "VERIFY" && ev.verify) {
            bits.push(s.reportVerify(ev.verify));
            tone2 = ev.verify === "confirmed" ? "is-good" : ev.verify === "corrected" ? "is-bad" : "";
          }
          if (ev.type === "REJECT" && ev.reject_right !== null) {
            bits.push(ev.reject_right ? s.reportRejectRight : s.reportRejectWrong);
            tone2 = ev.reject_right ? "is-good" : "is-bad";
          }
          if (ev.type === "GAP") tone2 = "is-bad";
          li.createSpan({ cls: tone2 ? ["sp-ev-type", tone2] : "sp-ev-type", text: bits.filter(Boolean).join(" \xB7 ") });
          if (ev.quote) li.createDiv({ cls: "sp-ev-quote", text: ev.quote });
        }
      }
    }
  }
  paintVault() {
    const e = this.els;
    if (!e) return;
    const s = t();
    e.vaultTitle.setText(s.reportVaultTitle);
    e.vault.empty();
    const rows = this.vaultRows;
    const line = this.vaultErr || (rows === null ? s.reportLoading : rows.length === 0 ? s.reportVaultEmpty : "");
    e.vaultNote.setText(line);
    e.vaultNote.toggleClass("is-off", !line);
    if (line || !rows) return;
    const table = e.vault.createEl("table", { cls: "sp-vault" });
    const tr = table.createEl("thead").createEl("tr");
    for (const col of [s.reportColBook, s.reportColTurns, s.reportColAxes, s.reportColWeakest, s.reportColAskedMost]) {
      tr.createEl("th", { text: col });
    }
    const tbody = table.createEl("tbody");
    for (const r of rows) {
      const row = tbody.createEl("tr", { cls: r.current ? "is-current" : "" });
      const book = row.createEl("td");
      book.createSpan({ text: r.title });
      if (r.merged > 1) book.createSpan({ cls: "sp-vault-merged", text: s.reportMerged(r.merged) });
      row.createEl("td", { cls: "is-num", text: String(r.n_turns) });
      row.createEl("td", { cls: "is-num", text: String(r.n_axes) });
      const weak = row.createEl("td");
      for (const a of r.weakest) {
        if (a.score === null) continue;
        weak.createSpan({ cls: "sp-vault-chip", text: s.reportAxisScore(a.name, a.score) });
      }
      const asked = row.createEl("td");
      for (const a of r.asked_most) asked.createSpan({ cls: "sp-vault-chip", text: s.reportAxisN(a.name, a.n) });
    }
  }
};

// src/agentlayout.ts
var GAP = 8;
var MIN2 = 320;
var strip = (n3, wide, roomy = false) => ({
  kind: `${wide ? "row" : "column"}-${n3}`,
  cols: wide ? n3 : 1,
  rows: wide ? 1 : n3,
  areas: Array.from({ length: n3 }, (_, i) => wide ? `1 / ${i + 1}` : `${i + 1} / 1`),
  minW: roomy && wide ? 420 : MIN2,
  minH: roomy && !wide ? 360 : MIN2
});
function computeAgentLayout(input) {
  const { width: w, height: h, previous: prev } = input;
  const n3 = Math.max(1, Math.min(4, Math.floor(input.count)));
  if ((w <= 0 || h <= 0) && (prev == null ? void 0 : prev.count) === n3) return prev;
  const wide = prev ? prev.wide ? h < w * 1.1 : w >= h * 1.1 : w >= h;
  if (n3 === 1) return {
    count: n3,
    wide,
    kind: "single",
    columns: "minmax(0, 1fr)",
    rows: "minmax(0, 1fr)",
    areas: ["1 / 1"],
    overflow: false
  };
  const candidates = n3 === 2 ? [strip(n3, wide), strip(n3, !wide)] : [
    strip(n3, wide, true),
    {
      kind: n3 === 4 ? "grid" : wide ? "primary-left" : "primary-top",
      cols: 2,
      rows: 2,
      areas: n3 === 4 ? ["1 / 1", "1 / 2", "2 / 1", "2 / 2"] : wide ? ["1 / 1 / 3 / 2", "1 / 2", "2 / 2"] : ["1 / 1 / 2 / 3", "2 / 1", "2 / 2"],
      minW: MIN2,
      minH: MIN2
    }
  ];
  const fits = (c, extra = 0, hard = false) => (w - GAP * (c.cols - 1)) / c.cols >= (hard ? MIN2 : c.minW) + extra && (h - GAP * (c.rows - 1)) / c.rows >= (hard ? MIN2 : c.minH) + extra;
  let chosen = candidates.find((c) => fits(c));
  if ((prev == null ? void 0 : prev.count) === n3 && (chosen == null ? void 0 : chosen.kind) !== prev.kind) {
    const previous = [
      ...candidates,
      strip(n3, !wide, n3 > 2),
      { kind: "primary-left", cols: 2, rows: 2, areas: ["1 / 1 / 3 / 2", "1 / 2", "2 / 2"], minW: MIN2, minH: MIN2 },
      { kind: "primary-top", cols: 2, rows: 2, areas: ["1 / 1 / 2 / 3", "2 / 1", "2 / 2"], minW: MIN2, minH: MIN2 }
    ].find((c) => c.kind === prev.kind);
    if (previous && fits(previous, 0, true) && (!chosen || !fits(chosen, 24))) chosen = previous;
  }
  if (!chosen) {
    return {
      count: n3,
      wide,
      kind: "stack",
      columns: "minmax(0, 1fr)",
      rows: `repeat(${n3}, ${Math.max(MIN2, (h - GAP * (n3 - 1)) / n3)}px)`,
      areas: strip(n3, false).areas,
      overflow: h < n3 * MIN2 + GAP * (n3 - 1)
    };
  }
  return {
    count: n3,
    wide,
    kind: chosen.kind,
    columns: `repeat(${chosen.cols}, minmax(0, 1fr))`,
    rows: `repeat(${chosen.rows}, minmax(0, 1fr))`,
    areas: chosen.areas,
    overflow: false
  };
}

// src/views/PenView.ts
var VIEW_TYPE_PEN = "socrates-pen-view";
var VISION_MAX = 4;
var VISION_BYTES = 2 * 1024 * 1024;
var VISION_MIME = /* @__PURE__ */ new Set(["image/png", "image/jpeg", "image/jpg", "image/webp", "image/gif"]);
function normMime(raw) {
  const m = (raw || "").trim().toLowerCase();
  return m === "image/jpg" ? "image/jpeg" : m;
}
var sleep = (ms) => new Promise((r) => window.setTimeout(r, ms));
function dynRank(c) {
  return c.kind === "deep" ? 0 : 1;
}
function readDynChips(ev) {
  const rich = ev.dyn_chips;
  if (Array.isArray(rich)) {
    return rich.filter((c) => Boolean(c) && typeof c.text === "string").map((c, i) => ({ id: c.id || `d${i}`, kind: c.kind === "deep" ? "deep" : "quick", text: c.text, why: c.why }));
  }
  const flat = ev.dynamic_chips;
  if (!Array.isArray(flat)) return [];
  return flat.filter((x) => typeof x === "string" && x.trim().length > 0).map((text, i) => ({ id: `q${i}`, kind: "quick", text }));
}
function toolCaption(m) {
  const ok = m.ok !== false;
  const name = m.text.split(" ")[0] || "tool";
  const path = m.text.split("\u2192").slice(1).join("\u2192").trim();
  const file = path.split("/").filter(Boolean).pop() || (path || t().noPath);
  const kicker = name === "edit_file" ? t().kickerEditTool : name === "fetch" ? t().kickerFetchTool : name === "search" ? t().kickerSearchTool : t().kickerReadTool;
  return { ok, file, kicker };
}
function assistantShell(turn) {
  const av = turn.createDiv({ cls: "sp-avatar", text: AVATAR.lines.join("\n") });
  av.setAttr("aria-hidden", "true");
  return turn.createDiv({ cls: "sp-turn-main" });
}
var AgentPane = class _AgentPane extends import_obsidian5.Component {
  constructor(contentEl, plugin, host, slotId) {
    super();
    this.contentEl = contentEl;
    this.host = host;
    this.slotId = slotId;
    this.status = "";
    /** 结构化存放，成文推迟到 setStatus——否则切语言后这一行还是旧语言。 */
    this.usage = null;
    this.err = "";
    this.health = t().healthUnprobed;
    /** 上一次 health 探测里 sidecar 是否已有可用钥匙。门禁 chip/Ask，防假流式。 */
    this.llmOk = false;
    this.msgs = [];
    this.pendingImages = [];
    this.chips = [];
    this.dyn = [];
    this.busy = false;
    this.substantive = false;
    this.sessionId = null;
    this.handbookId = null;
    this.capturedPath = null;
    this.sidecarReachable = false;
    // 配置体检的结果。**空串 = 这套配置真的能用**，不是「看起来填齐了」。
    this.cfgCode = "";
    this.cfgMsg = "";
    // 上次体检的是哪套配置。**这个签名就是体检的全部节流机制**：
    // probeHealth() 每划一次选区就会被调一次（captureSelection），
    // 而体检是一次真实的 API 调用——没有这道闸就成了按选区计费。
    this.cfgSig = "";
    this.paintGen = 0;
    this.painting = false;
    this.quote = "";
    this.startLine = 1;
    this.endLine = 1;
    this.undoN = 0;
    this.snapshotSource = "";
    this.redoN = 0;
    this.pending = null;
    this.approving = false;
    this.chipsSig = "";
    this.splashLevel = "none";
    /** paintLog 正在跑时新来的 force 请求存这里，别让它被吞掉。 */
    this.forceStick = false;
    /** 深挖轮询的代号。切笔记/关面板时 ++ 一下，在途的那一拍自己早退。 */
    this.deepGen = 0;
    this.deepCursor = 0;
    /** 配额用满时挂在用量那一格后面。不说的话读者只看到「深题突然不来了」。 */
    this.deepNote = "";
    /** 有新深题刚到：这一轮画完把它滚进可视区。 */
    this.deepArrived = false;
    /**
     * 本会话累计花掉的 token，按用途分格。和 usage 是**两个口径**：
     * usage 是「此刻窗口占多大」（诊断用），这个是「一共烧了多少」（花费）。
     * 服务端每轮 done 给权威值，中途由 spend 事件和深挖轮询各推各的那一格。
     */
    this.spend = {};
    /** 本轮已花。忙的时候挂在状态行尾巴上，看着它爬。 */
    this.turnTokens = 0;
    /** tooltip 的内容签名。没变就一个 DOM 都不碰。 */
    this.statusTipSig = "";
    /**
     * 本轮推理已经流下来多少字。0 表示不在推理阶段。
     *
     * 只存数不存内容：实测一次回复有 1633 个推理分片，把正文塞进窄侧栏是灾难，
     * 而读者要的是「没卡住」，不是「让我读它的草稿」。
     */
    this.thinkChars = 0;
    this.els = null;
    this.retired = false;
    this.stopping = false;
    this.controller = null;
    this.runId = "";
    this.addButton = null;
    this.closeButton = null;
    this.stopButton = null;
    this.nameEl = null;
    this.unwatchSidecar = null;
    /** 在途重定向/捕获的代次。任何新的 retarget 或捕获都会使旧代次作废——
     *  两个在飞的重定向/捕获谁后完成都不许覆盖新的事实（复审 P1）。 */
    this.retargetGen = 0;
    /** 设置页改完自定义泡泡后叫醒这一枚面板。
     *
     *  只重画芯片那一条，**不碰 renderShell / paintBar**：读者很可能是在流式
     *  或审批面板开着的时候去设置页改的，整条底座重建会把审批面板的滚动位置
     *  归零，还会打断正在写的那个气泡。 */
    /** 上一轮窗口闸压掉了哪几档。**只活在内存、只活到下一轮**——
     *  快模式的压缩压的是副本，没有任何持久后果，落盘就等于把它说成了折叠。 */
    this.fastTrim = [];
    this.plugin = plugin;
  }
  get app() {
    return this.plugin.app;
  }
  get path() {
    return this.capturedPath;
  }
  get session() {
    return this.sessionId;
  }
  async seed(source) {
    this.capturedPath = source.capturedPath;
    this.handbookId = source.handbookId;
    this.quote = source.quote;
    this.startLine = source.startLine;
    this.endLine = source.endLine;
    this.health = source.health;
    this.llmOk = source.llmOk;
    this.sidecarReachable = source.sidecarReachable;
    this.cfgCode = source.cfgCode;
    this.cfgMsg = source.cfgMsg;
    this.cfgSig = source.cfgSig;
    if (this.handbookId) {
      const sess = await this.api().createSession(this.handbookId);
      if (this.retired) return;
      this.adopt(sess);
      if (this.capturedPath) await this.bindNote(this.capturedPath, {
        handbook_id: this.handbookId,
        session_id: sess.session_id
      });
    }
  }
  async bindNote(path, binding) {
    await this.plugin.bindNote(path, binding, this.slotId);
  }
  paintChrome(index, count) {
    if (this.addButton) {
      this.addButton.hidden = count > 1;
      this.addButton.disabled = this.host.adding;
      (0, import_obsidian5.setTooltip)(this.addButton, t().bigBangAdd);
    }
    if (this.closeButton) {
      this.closeButton.hidden = count === 1;
      (0, import_obsidian5.setTooltip)(this.closeButton, t().bigBangClose);
    }
    if (this.stopButton) {
      this.stopButton.hidden = !this.controller && !this.pending;
      this.stopButton.disabled = this.stopping;
      (0, import_obsidian5.setTooltip)(this.stopButton, this.stopping ? t().bigBangStopping : t().bigBangStop);
    }
    if (this.nameEl) {
      this.nameEl.textContent = count === 1 ? t().appName : t().bigBangAgent(index + 1);
      (0, import_obsidian5.setTooltip)(this.nameEl, this.capturedPath || t().appName);
    }
  }
  focusInput() {
    var _a;
    (_a = this.els) == null ? void 0 : _a.input.focus();
  }
  async stopTask() {
    var _a;
    if (this.stopping || !this.sessionId || !this.controller && !this.pending) return;
    this.stopping = true;
    this.status = t().bigBangStopping;
    this.paintBar();
    try {
      await this.api().cancelRun(this.sessionId, this.runId, ((_a = this.pending) == null ? void 0 : _a.pending_id) || "");
      this.pending = null;
      if (!this.controller) {
        this.busy = false;
        this.stopping = false;
        this.status = t().bigBangStopped;
      }
    } catch (e) {
      this.stopping = false;
      this.err = e instanceof Error ? e.message : String(e);
      throw e;
    } finally {
      this.paintBar();
    }
  }
  async dispose() {
    var _a;
    await this.stopTask();
    this.retired = true;
    ++this.retargetGen;
    (_a = this.controller) == null ? void 0 : _a.abort();
    await this.onClose();
  }
  onunload() {
    var _a, _b;
    if (!this.retired) void this.stopTask().catch(() => {
    });
    this.retired = true;
    (_a = this.controller) == null ? void 0 : _a.abort();
    this.stopDeepPoll();
    (_b = this.unwatchSidecar) == null ? void 0 : _b.call(this);
    this.unwatchSidecar = null;
    this.els = null;
  }
  getViewType() {
    return VIEW_TYPE_PEN;
  }
  getDisplayText() {
    return t().viewTitle;
  }
  getIcon() {
    return "highlighter";
  }
  async onOpen(initialPath, seeded = false) {
    this.registerEvent(this.app.workspace.on("css-change", () => this.refreshAdvance()));
    this.registerEvent(
      this.app.workspace.on("file-open", (file) => {
        if (this.retired || !this.host.isActive(this)) return;
        if (!file || file.extension !== "md") return;
        if (this.busy || this.pending) return;
        if (file.path === this.capturedPath) return;
        this.followActiveFile();
      })
    );
    this.renderShell();
    if (!seeded) await this.probeHealth();
    if (this.retired) return;
    const onSidecarSnap = () => {
      const snap = this.plugin.sidecarSnap();
      if (snap.phase === "running" && !this.sidecarReachable) void this.probeHealth();
      if ((snap.phase === "idle" || snap.phase === "error" || snap.phase === "stale") && (this.sidecarReachable || snap.phase === "stale")) {
        this.sidecarReachable = false;
        this.llmOk = false;
        this.health = snap.phase === "stale" ? t().healthStale : t().healthDown;
        this.paintBar();
      }
    };
    this.unwatchSidecar = this.plugin.sidecarWatch(onSidecarSnap);
    onSidecarSnap();
    if (initialPath && !seeded) {
      const file = this.app.vault.getAbstractFileByPath(initialPath);
      if (file instanceof import_obsidian5.TFile) await this.retarget(file);
    } else if (!seeded) {
      const file = this.app.workspace.getActiveFile();
      if ((file == null ? void 0 : file.extension) === "md") await this.retarget(file);
    }
    this.paintBar();
    await this.paintLog();
  }
  /** 框架回调：侧栏被拖动，或从折叠状态展开（那时首次测量拿到的是 0）。 */
  onResize() {
    this.refreshAdvance();
  }
  /**
   * 字符画的字号由 CSS 反解：字号 = 可用宽 / (列数 × 字宽比)。
   * 列数写在元素上，字宽比是全局的，在这里量一次存进 CSS 变量。
   */
  refreshAdvance() {
    const root = this.contentEl;
    if (root.clientWidth === 0) return;
    root.style.setProperty("--sp-adv", String(measureMonoAdvance(root)));
  }
  async onClose() {
    var _a;
    this.stopDeepPoll();
    (_a = this.unwatchSidecar) == null ? void 0 : _a.call(this);
    this.unwatchSidecar = null;
    this.els = null;
    this.chipsSig = "";
  }
  api() {
    return makeApi(this.plugin.settings.sidecarUrl);
  }
  /**
   * 语言切换后重画整个面板。
   *
   * 绝大多数文案是渲染时现取 t() 的，重画即完成本地化。两个例外：
   *  - `health` 存的是**已成文**的字符串，所以这里重新探测一次；
   *  - `err` 可能是 sidecar 下发的原文（本就不翻），保留不动。
   * `usage` 已经改成结构化，成文推迟到 setStatus，不受影响。
   */
  relocalize() {
    this.chipsSig = "";
    this.splashLevel = "none";
    this.renderShell();
    void this.probeHealth();
  }
  /**
   * 建骨架。正常情况下只在 onOpen 跑一次——所有元素和事件监听的生命周期等于视图
   * 本身，之后的每次刷新都只改属性、不重建节点。**唯一的例外是 relocalize()**，
   * 切语言时会重跑一遍；`root.empty()` 会连带清掉这里绑的监听，所以不会泄漏，
   * 但如果以后往这里加 registerDomEvent 之类挂在 document 上的监听，要自己去重。
   *
   * 五层，自上而下：品牌条 / 错误条 / 对话区 / 审批面板 / 底座。
   * 只有对话区 grow，其余按 flex-shrink 权重依次让位，输入行永不压缩。
   */
  renderShell() {
    const root = this.contentEl;
    root.empty();
    root.addClass("socrates-pen");
    root.style.setProperty("--sp-adv", String(measureMonoAdvance(root)));
    const brand = root.createDiv({ cls: "sp-brand" });
    const dot = brand.createSpan({ cls: "sp-dot" });
    this.nameEl = brand.createSpan({ cls: "sp-brand-name", text: t().appName });
    const brandSub = brand.createSpan({ cls: "sp-brand-sub" });
    const tools = brand.createDiv({ cls: "sp-brand-tools" });
    const fresh = tools.createEl("button", { cls: "sp-icon" });
    (0, import_obsidian5.setIcon)(fresh, "square-pen");
    const compact = tools.createEl("button", { cls: "sp-icon" });
    (0, import_obsidian5.setIcon)(compact, "fold-vertical");
    const undo = tools.createEl("button", { cls: "sp-icon" });
    (0, import_obsidian5.setIcon)(undo, "undo-2");
    const redo = tools.createEl("button", { cls: "sp-icon" });
    (0, import_obsidian5.setIcon)(redo, "redo-2");
    const fast = tools.createEl("button", { cls: "sp-icon sp-fast" });
    (0, import_obsidian5.setIcon)(fast, "zap");
    const report = tools.createEl("button", { cls: "sp-icon sp-report-btn" });
    (0, import_obsidian5.setIcon)(report, reportIconName());
    this.addButton = tools.createEl("button", { cls: "sp-icon sp-add-agent" });
    (0, import_obsidian5.setIcon)(this.addButton, "plus");
    this.addButton.setAttribute("aria-label", t().bigBangAdd);
    this.addButton.onclick = () => void this.host.addAgent();
    this.stopButton = tools.createEl("button", { cls: "sp-icon sp-stop-agent" });
    (0, import_obsidian5.setIcon)(this.stopButton, "square");
    this.stopButton.setAttribute("aria-label", t().bigBangStop);
    this.stopButton.onclick = () => void this.stopTask().catch(() => {
    });
    this.closeButton = tools.createEl("button", { cls: "sp-icon sp-close-agent" });
    (0, import_obsidian5.setIcon)(this.closeButton, "x");
    this.closeButton.setAttribute("aria-label", t().bigBangClose);
    this.closeButton.onclick = () => void this.host.closeAgent(this);
    const alert = root.createDiv({ cls: "sp-alert is-off" });
    const log = root.createDiv({ cls: "sp-log" });
    const panel = root.createDiv({ cls: "sp-panel is-off" });
    const dock = root.createDiv({ cls: "sp-dock" });
    const quote = dock.createDiv({ cls: "sp-quote is-off" });
    const chips = dock.createDiv({ cls: "sp-chips" });
    const bar = dock.createDiv({ cls: "sp-bar is-off" });
    bar.createDiv({ cls: "sp-bar-fill" });
    const status = dock.createDiv({ cls: "sp-status is-off" });
    const thumbs = dock.createDiv({ cls: "sp-thumbs is-off" });
    const form = dock.createDiv({ cls: "sp-form" });
    const pick = form.createEl("button", { cls: "sp-pick", text: t().btnUseSelection });
    const input = form.createEl("input", { cls: "sp-input" });
    const ask = form.createEl("button", { cls: "sp-send mod-cta", text: t().btnAsk });
    this.els = {
      dot,
      brandSub,
      alert,
      log,
      panel,
      quote,
      chips,
      bar,
      status,
      input,
      ask,
      pick,
      fresh,
      compact,
      undo,
      redo,
      fast,
      report,
      thumbs
    };
    this.bindKeepFocus(pick, () => {
      void this.captureSelection();
    });
    (0, import_obsidian5.setTooltip)(pick, t().tipUseSelection);
    (0, import_obsidian5.setTooltip)(fresh, t().tipNewSession);
    fresh.onclick = () => void this.newSession();
    (0, import_obsidian5.setTooltip)(compact, t().tipCompact);
    compact.onclick = () => void this.compactSession();
    undo.onclick = () => void this.doRollback();
    redo.onclick = () => void this.doRedo();
    fast.onclick = () => void this.toggleFastMode();
    (0, import_obsidian5.setTooltip)(report, t().tipReport);
    report.onclick = () => void this.plugin.activateReport();
    input.placeholder = t().askPlaceholder;
    ask.onclick = () => this.submitAsk();
    input.addEventListener("keydown", (ev) => {
      if (ev.key !== "Enter" || ev.isComposing) return;
      ev.preventDefault();
      this.submitAsk();
    });
    this.bindComposerMedia(form);
    this.bindComposerMedia(thumbs);
    this.paintBar();
    void this.paintLog();
  }
  /** 扇出壳。既有的 paintBar() 调用点全部保留语义，内部改成只更新各自那一块。 */
  paintBar() {
    if (this.retired) return;
    this.host.paintChrome();
    this.paintBrand();
    this.paintAlert();
    this.paintQuote();
    this.paintChips();
    this.paintPanel();
    this.paintFast();
    this.paintThumbs();
    this.setPlaceholder();
    this.setStatus();
    this.setBusy();
  }
  paintBrand() {
    const e = this.els;
    if (!e) return;
    const bad = this.sidecarReachable && Boolean(this.cfgCode);
    e.dot.classList.toggle("is-ok", this.sidecarReachable && !bad);
    e.dot.classList.toggle("is-warn", bad);
    e.dot.classList.toggle("is-down", !this.sidecarReachable && Boolean(this.err));
    const line = bad ? this.cfgMsg : this.health;
    if (e.brandSub.textContent !== line) e.brandSub.textContent = line;
    (0, import_obsidian5.setTooltip)(e.brandSub, line);
  }
  paintAlert() {
    const e = this.els;
    if (!e) return;
    e.alert.classList.toggle("is-off", !this.err);
    if (this.err && e.alert.textContent !== this.err) e.alert.textContent = this.err;
  }
  paintQuote() {
    const e = this.els;
    if (!e) return;
    e.quote.classList.toggle("is-off", !this.quote);
    const displayQuote = stripFoldTags(this.quote);
    if (e.quote.textContent !== displayQuote) {
      e.quote.textContent = displayQuote;
      (0, import_obsidian5.setTooltip)(e.quote, displayQuote);
    }
  }
  static row(r) {
    var _a, _b;
    return ((_a = r == null ? void 0 : r.in_tokens) != null ? _a : 0) + ((_b = r == null ? void 0 : r.out_tokens) != null ? _b : 0);
  }
  sessionTokens() {
    const s = this.spend;
    return _AgentPane.row(s.chat) + _AgentPane.row(s.probe) + _AgentPane.row(s.fold);
  }
  /** 悬停明细。只在闲下来时求值——拼字符串的活别挂在 token 事件的频率上。 */
  spendTip() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
    const s = this.spend;
    const cached = ((_b = (_a = s.chat) == null ? void 0 : _a.cached_tokens) != null ? _b : 0) + ((_d = (_c = s.probe) == null ? void 0 : _c.cached_tokens) != null ? _d : 0) + ((_f = (_e = s.fold) == null ? void 0 : _e.cached_tokens) != null ? _f : 0);
    const lines = [
      t().spendTipTotal(this.sessionTokens()),
      t().spendTipRow(t().spendKindChat, (_g = s.chat) == null ? void 0 : _g.in_tokens, (_h = s.chat) == null ? void 0 : _h.out_tokens),
      t().spendTipRow(t().spendKindProbe, (_i = s.probe) == null ? void 0 : _i.in_tokens, (_j = s.probe) == null ? void 0 : _j.out_tokens),
      t().spendTipRow(t().spendKindFold, (_k = s.fold) == null ? void 0 : _k.in_tokens, (_l = s.fold) == null ? void 0 : _l.out_tokens)
    ];
    if (cached > 0) lines.push(t().spendTipCached(cached));
    lines.push(t().spendTipNote);
    return lines.join("\n");
  }
  /**
   * 状态行一格三用：
   *   忙 → 苏格拉底在想… · 本轮 3.2k
   *   闲 → 上下文 12.4k · 回复 0.8k · 本会话 128k [· 深挖已用满]
   *
   * 忙的那条尾巴不是装饰：实时计量最有价值的时刻恰恰是忙的时候——看着数字
   * 往上爬，是失控循环唯一看得见的信号。没有它这功能只在事后有效。
   *
   * 一轮对话跑完之后用量一直在，所以后续来回不会因为状态出现/消失而跳高度；
   * 只有全新会话发第一问之前这一行是空的（隐藏）。
   *
   * **三条路径都只往同一个文本节点写。绝不能在这里调 paintBar()**——
   * token 事件每 48 字符来一次，那会把整条底座重建几十次。
   */
  setStatus() {
    const e = this.els;
    if (!e) return;
    const total = this.sessionTokens();
    const parts = this.busy ? [
      // 推理阶段用活体计数顶掉「在想…」那句死文案：它在跳，读者才知道没卡住。
      this.thinkChars ? t().thinkTick(this.thinkChars) : this.status,
      this.turnTokens ? t().spendTurn(this.turnTokens) : ""
    ] : [
      this.usage ? t().usage(this.usage.ctx, this.usage.out) : "",
      total ? t().spendSession(total) : "",
      this.deepNote
    ];
    const line = parts.filter(Boolean).join(" \xB7 ");
    e.status.classList.toggle("is-off", !line);
    e.status.classList.toggle("is-usage", !this.busy);
    if (e.status.textContent !== line) e.status.textContent = line;
    if (this.busy) return;
    const sig = JSON.stringify(this.spend);
    if (sig === this.statusTipSig) return;
    this.statusTipSig = sig;
    (0, import_obsidian5.setTooltip)(e.status, total ? this.spendTip() : "");
  }
  /**
   * done 事件的收尾。**两处消费点（chat / approve）共用这一份。**
   * 它们本来是逐字复制的两坨，这次要各改两行，下次还是各改两行。
   */
  takeDone(ev) {
    var _a;
    this.status = "";
    const u = ev.usage;
    this.usage = { ctx: (_a = u == null ? void 0 : u.context_tokens) != null ? _a : u == null ? void 0 : u.prompt_tokens, out: u == null ? void 0 : u.completion_tokens };
    if (ev.spend) this.spend = ev.spend;
    this.turnTokens = 0;
    this.dyn = [...keepDeep(this.dyn), ...readDynChips(ev)];
    const ripe = ev.deep_items || [];
    if (ripe.length) {
      this.dyn = mergeDeep(this.dyn, ripe);
      this.deepCursor = Math.max(this.deepCursor, Number(ev.deep_cursor) || 0);
      this.deepArrived = true;
    }
    this.substantive = Boolean(ev.has_substantive);
    if (ev.deep_running) void this.pollDeep();
  }
  /** 每打完一枪服务端报一次。只刷状态行那一个文本节点。 */
  takeSpend(ev) {
    this.turnTokens = Number(ev.turn) || 0;
    if (ev.chat) this.spend = { ...this.spend, chat: ev.chat };
    this.setStatus();
  }
  /** 只改 disabled，绝不碰 DOM 结构——这是流式期间唯一被高频调用的路径之一。 */
  setBusy() {
    const e = this.els;
    if (!e) return;
    const blocked = this.busy || Boolean(this.pending);
    e.bar.classList.toggle("is-off", !this.busy);
    e.input.disabled = blocked;
    e.ask.disabled = blocked || !this.llmOk;
    e.pick.disabled = this.busy || Boolean(this.pending);
    e.fresh.disabled = blocked;
    e.compact.disabled = blocked || !this.sessionId;
    e.undo.disabled = this.busy || this.undoN <= 0;
    e.redo.disabled = this.busy || this.redoN <= 0;
    e.report.disabled = !this.sidecarReachable;
    (0, import_obsidian5.setTooltip)(e.undo, this.undoN > 0 ? `${t().bigBangUndo} \xB7 ${this.host.sourceLabel(this.snapshotSource)}` : t().tipUndoEmpty);
    (0, import_obsidian5.setTooltip)(e.redo, this.redoN > 0 ? t().bigBangRedo : t().tipRedoEmpty);
    this.syncChipDisabled();
  }
  syncChipDisabled() {
    const e = this.els;
    if (!e) return;
    const blocked = this.busy || Boolean(this.pending) || !this.llmOk;
    const btns = e.chips.querySelectorAll("button");
    for (let i = 0; i < btns.length; i++) {
      const b = btns[i];
      b.disabled = blocked || b.dataset.off === "1";
    }
    e.ask.disabled = blocked;
  }
  /** 读者自定义的泡泡里当下要渲染的那些。
   *
   *  关掉的连按钮都不建——它和 FIXED_CHIPS 的 enabled 不同义：那个是
   *  「灰着但在」，这个是「先收起来」。
   *
   *  **还没写字的草稿也不建**：设置页留着半成品是对的（读者点了「新建」
   *  还没来得及打字），但侧栏不行——没 prompt 就没有可注入的东西，
   *  点了等于发一枚空芯片；没名字就是一枚零宽、点得着但看不见的按钮。 */
  myChips() {
    return (this.plugin.settings.customChips || []).filter((c) => c.enabled && !chipIsDraft(c));
  }
  /**
   * chip id → 显示文案。**两张表都要查**：后端下发的固定芯片在 this.chips，
   * 读者自己的在 settings.customChips。这里原来只查前者，于是自定义泡泡的
   * 用户气泡会显示成裸 `u.a1b2c3`。
   *
   * 自定义 label 不进 i18n 词表，两种界面语言下都显示读者写的原文——
   * 那是他自己起的名字，翻译它才是错的。
   */
  labelOf(chipId) {
    var _a, _b;
    const mine = this.myChips().find((c) => c.id === chipId);
    if (mine) return chipDisplayLabel(mine);
    return chipLabel(chipId, (_b = (_a = this.chips.find((c) => c.id === chipId)) == null ? void 0 : _a.label) != null ? _b : "");
  }
  /** 顶栏那枚开关。只翻 class 和提示，不碰别的——读者可能正在流式中途点它。 */
  paintFast() {
    const e = this.els;
    if (!e) return;
    const on = this.plugin.settings.fastMode === true;
    e.fast.classList.toggle("is-on", on);
    e.fast.classList.toggle("is-trim", on && this.fastTrim.length > 0);
    (0, import_obsidian5.setTooltip)(
      e.fast,
      !on ? t().tipFastOff : this.fastTrim.length ? t().tipFastTrimmed(this.fastTrim.join(" \u2192 ")) : t().tipFastOn
    );
  }
  /** 设置页改完快模型配置之后叫醒开着的面板。 */
  onFastModeChanged() {
    this.paintFast();
  }
  async toggleFastMode() {
    var _a;
    const next = this.plugin.settings.fastMode !== true;
    this.plugin.settings.fastMode = next;
    this.fastTrim = [];
    this.paintFast();
    this.plugin.saveSettingsSoon();
    this.plugin.refreshFast();
    if (!next) return;
    try {
      const h = await makeApi(this.plugin.settings.sidecarUrl).health();
      const gap = keyHostGap(h.fast, this.plugin.settings.fastBaseUrl);
      if (!((_a = h.fast) == null ? void 0 : _a.ok)) new import_obsidian5.Notice(t().noticeFastNoKey);
      else if (gap) new import_obsidian5.Notice(t().noticeFastKeyHostMismatch(gap[0], gap[1]));
    } catch (e) {
    }
  }
  /** 快轮换回基座时插一条说明。
   *
   * **不能不说。** 读者点亮了 Fast Mode，然后气泡在半路被清空重来——
   * 不解释的话那看起来就是个 bug。而配置不对那两种更狠：气泡根本不会重来，
   * 开关还亮着，读者只会觉得「快模型没变快」，**降级完全无声**。
   * 理由字符串来自后端（`routing.route_for` / `_agent_loop`），这里逐条认；
   * 认不出的落到「要动原文」那条——它是唯一由模型行为触发、必然伴随重流的。 */
  insertRouteNote(why) {
    const s = t();
    const text = why === "context-too-big" ? s.noteRouteTooBig : why === "no-fast-key" ? s.noteRouteNoKey : why === "fast-host-mismatch" ? s.noteRouteHostGap : s.noteRouteEdit;
    const note = { role: "note", kind: "route", text };
    this.msgs = [...this.msgs.slice(0, -1), note, ...this.msgs.slice(-1)];
    void this.paintLog("force");
  }
  onCustomChipsChanged() {
    this.chipsSig = "";
    this.paintChips();
  }
  /** 内容没变就只翻 disabled，不重建按钮——否则流式期间每 48 字符重建一次芯片。 */
  paintChips() {
    var _a;
    const e = this.els;
    if (!e) return;
    e.chips.classList.toggle("is-off", !this.quote);
    const sig = JSON.stringify([
      this.chips.map((c) => {
        var _a2;
        return [c.id, c.label, c.enabled, (_a2 = c.hint) != null ? _a2 : ""];
      }),
      // 自定义泡泡必须进签名：不进的话，读者在设置页改完名字、
      // onCustomChipsChanged 就算把 chipsSig 清了也只是回到「和上次一样」，
      // 这一格早退掉，按钮上还是旧文案。
      this.myChips().map((c) => [c.id, chipDisplayLabel(c), c.hint]),
      this.dyn,
      this.substantive
    ]);
    if (sig === this.chipsSig) {
      this.syncChipDisabled();
      return;
    }
    this.chipsSig = sig;
    e.chips.empty();
    for (const c of this.chips) {
      const on = c.id === "writeback" ? this.substantive : c.enabled;
      const b = e.chips.createEl("button", { text: chipLabel(c.id, c.label) });
      b.dataset.off = on ? "0" : "1";
      const hint = chipHint(c.id, (_a = c.hint) != null ? _a : "");
      if (hint) (0, import_obsidian5.setTooltip)(b, hint);
      b.onclick = () => void this.send(c.id, "");
    }
    for (const c of this.myChips()) {
      const b = e.chips.createEl("button", { text: chipDisplayLabel(c), cls: "is-custom" });
      b.dataset.off = "0";
      if (c.hint) (0, import_obsidian5.setTooltip)(b, c.hint);
      b.onclick = () => void this.send(c.id, "");
    }
    for (const d of [...this.dyn].sort((a, b2) => dynRank(a) - dynRank(b2))) {
      const deep = d.kind === "deep";
      const cls = deep ? "is-dyn is-deep" : "is-dyn";
      const b = e.chips.createEl("button", {
        text: deep ? `${t().tipDeepPrefix}${d.text}` : d.text,
        cls
      });
      b.dataset.off = "0";
      if (d.why) (0, import_obsidian5.setTooltip)(b, d.why);
      b.onclick = () => void this.send("free", d.text);
    }
    e.chips.classList.toggle("is-off", !this.quote || e.chips.childElementCount === 0);
    this.syncChipDisabled();
    if (this.deepArrived) {
      this.deepArrived = false;
      const first = e.chips.querySelector(".is-deep");
      if (first) first.scrollIntoView({ block: "nearest" });
    }
  }
  paintPanel() {
    const e = this.els;
    if (!e) return;
    const p = this.pending;
    e.panel.empty();
    e.panel.classList.toggle("is-off", !p);
    if (!p) return;
    e.panel.createEl("h4", { text: t().approvalTitle });
    e.panel.createDiv({
      cls: "sp-where",
      text: t().approvalTarget(p.name, p.args.path || t().approvalCurrentHandbook)
    });
    const clip = (raw) => {
      const text = raw || "";
      return text.length <= 800 ? text : `${text.slice(0, 800)}
${t().approvalTruncated(text.length - 800)}`;
    };
    const pre = e.panel.createEl("pre", { cls: "sp-fold" });
    pre.createDiv({
      cls: "sp-diff is-old",
      text: `${t().approvalOldLabel}
${clip(p.args.old_string || "")}`
    });
    pre.createDiv({
      cls: "sp-diff is-new",
      text: `${t().approvalNewLabel}
${clip(p.args.new_string || "")}`
    });
    e.panel.createDiv({ cls: "sp-warn", text: t().approvalWarn });
    const actions = e.panel.createDiv({ cls: "sp-panel-actions" });
    const yes = actions.createEl("button", { cls: "mod-cta", text: t().btnApprove });
    yes.disabled = this.approving;
    yes.onclick = () => void this.doApprove(true);
    const no = actions.createEl("button", { text: t().btnReject });
    no.disabled = this.approving;
    no.onclick = () => void this.doApprove(false);
  }
  submitAsk() {
    const e = this.els;
    if (!e || e.input.disabled) return;
    const text = e.input.value.trim();
    if (!text && this.pendingImages.length === 0) return;
    if (this.llmOk) e.input.value = "";
    void this.send("free", text).then(() => {
      var _a;
      return (_a = this.els) == null ? void 0 : _a.input.focus();
    });
  }
  /**
   * 只有原本就贴在底部时才自动滚到底，否则用户往上翻历史会被一路拽回来。
   * 24px 容差吃掉一行的抖动。
   */
  atBottom(el) {
    return el.scrollHeight - el.scrollTop - el.clientHeight <= 24;
  }
  /** mode="force"：用户自己刚发了话，无论翻到哪都拉回底部。 */
  async paintLog(mode = "auto") {
    var _a, _b, _c;
    if (mode === "force") this.forceStick = true;
    const gen = ++this.paintGen;
    const first = (_a = this.els) == null ? void 0 : _a.log;
    if (!first || this.painting) return;
    const stick = mode === "force" || this.atBottom(first);
    const scrollTop = first.scrollTop;
    this.painting = true;
    try {
      let g = gen;
      for (; ; ) {
        const log = (_b = this.els) == null ? void 0 : _b.log;
        if (!log) return;
        log.empty();
        this.contentEl.toggleClass(
          "is-prechat",
          !this.msgs.some((m) => m.role === "user")
        );
        if (this.msgs.length === 0) {
          const level = this.quote ? "mini" : "hero";
          const empty = log.createDiv({ cls: "sp-empty" });
          renderSplash(empty, { level, animate: level !== this.splashLevel });
          this.splashLevel = level;
          empty.createDiv({ cls: "sp-agent-ready", text: t().bigBangReady });
          empty.createEl("p", { cls: "sp-big-bang-hint", text: this.quote ? t().bigBangPrompt : t().emptyHint });
          empty.createEl("p", { cls: "sp-hint", text: t().emptyHint });
          return;
        }
        this.splashLevel = "none";
        for (const m of this.msgs) {
          if (g !== this.paintGen || !this.els) break;
          if (m.role === "note") {
            const turn2 = log.createDiv({ cls: "sp-turn is-note" });
            turn2.createDiv({
              cls: "sp-kicker",
              text: m.kind === "route" ? t().kickerRoute : t().kickerCompact
            });
            turn2.createDiv({
              cls: "sp-body",
              text: m.kind === "compact" || !m.text ? t().compactMarker : m.text
            });
            continue;
          }
          if (m.role === "error") {
            const turn2 = log.createDiv({ cls: "sp-turn is-error" });
            turn2.createDiv({ cls: "sp-kicker", text: t().kickerPen });
            const body2 = turn2.createDiv({ cls: "sp-body" });
            body2.setText(m.text);
            if (!this.llmOk || m.goSettings) {
              const btn = turn2.createEl("button", {
                cls: "sp-err-btn",
                text: t().bubbleGoSettings
              });
              btn.onclick = () => this.openSettings();
            }
            continue;
          }
          if (m.role === "tool") {
            const cap = toolCaption(m);
            const row = log.createDiv({
              cls: cap.ok ? "sp-tool" : "sp-tool is-bad"
            });
            row.createSpan({ cls: "sp-kicker", text: cap.kicker });
            row.createSpan({
              cls: "sp-tool-msg",
              text: `${cap.ok ? t().toolOk : t().toolDenied} \xB7 ${cap.file}`
            });
            continue;
          }
          if (m.role === "assistant" && !m.text && this.pending) continue;
          const turn = log.createDiv({ cls: `sp-turn is-${m.role}` });
          const host = m.role === "assistant" ? assistantShell(turn) : turn;
          host.createDiv({
            cls: "sp-kicker",
            text: m.role === "user" ? t().kickerYou : t().kickerPen
          });
          const body = host.createDiv({ cls: "sp-body" });
          if (m.role === "user") {
            body.setText(m.chip ? chipLabel(m.chip, m.text) : m.text);
            if (m.images && m.images.length) {
              const strip2 = body.createDiv({ cls: "sp-body-thumbs" });
              for (const img of m.images) {
                if (img.thumb) {
                  const im = strip2.createEl("img");
                  im.src = img.thumb;
                  im.setAttr("alt", img.mime || "image");
                } else {
                  strip2.createSpan({ cls: "sp-body-pic", text: "img" });
                }
              }
            }
          } else {
            await import_obsidian5.MarkdownRenderer.render(
              this.app,
              visibleReply(m.text) || " ",
              body,
              "/",
              this
            );
          }
        }
        const done = (_c = this.els) == null ? void 0 : _c.log;
        if (g === this.paintGen && done) {
          if (stick || this.forceStick) done.scrollTop = done.scrollHeight;
          else done.scrollTop = scrollTop;
          this.forceStick = false;
          return;
        }
        g = this.paintGen;
      }
    } finally {
      this.painting = false;
    }
  }
  /**
   * 深挖收件箱的轮询。
   *
   * 用代号而不是 setInterval：切笔记的一瞬间 deepGen++ 就能让在途的那一拍
   * 自己早退，不用去追一个 timer id。五个终止条件缺一不可——少任何一个，
   * 关掉面板之后它还会在后台转。
   */
  async pollDeep() {
    if (!this.plugin.settings.deepQuestions) return;
    const gen = ++this.deepGen;
    const sid = this.sessionId;
    if (!sid) return;
    const alive = () => gen === this.deepGen && Boolean(this.els) && this.sessionId === sid;
    await pollDeep({
      fetch: (since) => this.api().deepInbox(sid, since),
      alive,
      since: () => this.deepCursor,
      sleep,
      now: () => Date.now(),
      onItems: (items, cursor) => {
        this.deepCursor = cursor;
        this.mergeDeep(items);
        this.deepArrived = true;
        this.paintChips();
      },
      onSpend: (row) => {
        if (JSON.stringify(this.spend.probe) === JSON.stringify(row)) return;
        this.spend = { ...this.spend, probe: row };
        this.setStatus();
      },
      onBudget: (b) => {
        var _a, _b, _c;
        const spent = ((_a = b.window_max) != null ? _a : 0) > 0 && ((_b = b.window_used) != null ? _b : 0) >= ((_c = b.window_max) != null ? _c : 0);
        const note = spent ? t().deepQuotaSpent : "";
        if (note !== this.deepNote) {
          this.deepNote = note;
          this.setStatus();
        }
      }
    });
  }
  stopDeepPoll() {
    this.deepGen++;
  }
  /** 深题追加进来，按文本去重。实时层那两条不动。 */
  mergeDeep(items) {
    this.dyn = mergeDeep(this.dyn, items);
  }
  paintStreamBubble(text) {
    var _a, _b, _c;
    const log = (_a = this.els) == null ? void 0 : _a.log;
    if (!log || this.painting) return;
    const last = log.lastElementChild;
    let turn = last && last.hasClass("is-assistant") ? last : null;
    if (!turn) {
      turn = log.createDiv({ cls: "sp-turn is-assistant" });
      const host = assistantShell(turn);
      host.createDiv({ cls: "sp-kicker", text: t().kickerPen });
      host.createDiv({ cls: "sp-body" });
    }
    const main = (_b = turn.querySelector(".sp-turn-main")) != null ? _b : turn;
    const body = (_c = main.querySelector(".sp-body")) != null ? _c : main.createDiv({ cls: "sp-body" });
    const stick = this.atBottom(log);
    body.setText(stripFoldTags(visibleReply(text)) || t().streamPlaceholder);
    if (stick) log.scrollTop = log.scrollHeight;
  }
  async probeHealth() {
    try {
      const h = await this.api().health();
      if (!sidecarUsable(h.version, this.plugin.manifest.version)) {
        this.sidecarReachable = false;
        this.llmOk = false;
        this.health = t().healthStale;
        this.err = "";
        this.paintBar();
        return;
      }
      this.sidecarReachable = true;
      this.llmOk = Boolean(h.llm.ok);
      const model = this.plugin.settings.model.trim() || h.llm.model;
      if (h.llm.ok) {
        this.health = h.llm.key_source === "sidecar" ? t().healthOkKey(h.llm.key_tail || "", model) : t().healthOkFallback(h.llm.key_source, model);
      } else {
        this.health = t().healthNoKey;
      }
      this.err = "";
      void this.probeConfig(h);
    } catch (e) {
      this.sidecarReachable = false;
      this.llmOk = false;
      this.health = t().healthDown;
      this.err = t().errUnreachable(e instanceof Error ? e.message : String(e));
    }
    this.paintBar();
  }
  /**
   * 配置体检：让 sidecar 真往节点打一枪，问「这套设置现在能不能用」。
   *
   * 读者报的病（v0.22.2）：「我根本不知道 OpenAI Key 到底配好没有，或者
   * 这个节点是否拒收图片。所有这些 error 的情况，目前状态栏都显示完全正常。」
   * 那是真的——顶栏那颗点当时只看 sidecar 进程活没活。
   *
   * **签名闸是这里的全部节流。** probeHealth 每划一次选区就会被调一次，
   * 而体检是真实的 API 调用；签名（节点 / 型号 / 视觉 / 快模型那三格 /
   * 钥匙末四位）没变就一枪不打。钥匙末四位进签名，是为了让「设置页刚换了
   * 一把钥匙」这件事也能重新触发体检。
   */
  async probeConfig(h) {
    var _a;
    const s = this.plugin.settings;
    const sig = configSignature(s, h.llm.key_tail || "", ((_a = h.fast) == null ? void 0 : _a.key_tail) || "");
    if (sig === this.cfgSig) return;
    this.cfgSig = sig;
    try {
      const r = await this.api().preflight(s, s.fastMode === true);
      const bad = !r.base.ok ? r.base : r.fast && !r.fast.ok ? r.fast : null;
      this.cfgCode = bad ? bad.code : "";
      this.cfgMsg = bad ? bad.message : "";
    } catch (e) {
      this.cfgSig = "";
    }
    this.paintBar();
  }
  /**
   * 请求失败落一条错误气泡。一个字没流出来时，把刚压入的空 assistant 气泡
   * 原地换掉——空的 Socrates 气泡挂着一个闪的光标，看起来像在流式输出，
   * 实际上永远不会再有字来（评测报告 P0）。
   */
  failBubble(message, goSettings = false) {
    const last = this.msgs[this.msgs.length - 1];
    const row = { role: "error", text: message, goSettings };
    if (last && last.role === "assistant" && !last.text) {
      this.msgs = [...this.msgs.slice(0, -1), row];
    } else {
      this.msgs = [...this.msgs, row];
    }
  }
  setPlaceholder() {
    const e = this.els;
    if (!e) return;
    e.input.placeholder = this.plugin.settings.vision === true ? t().askPlaceholderVision : t().askPlaceholder;
  }
  paintThumbs() {
    const e = this.els;
    if (!e) return;
    e.thumbs.empty();
    e.thumbs.classList.toggle("is-off", this.pendingImages.length === 0);
    this.pendingImages.forEach((img, i) => {
      const cell = e.thumbs.createDiv({ cls: "sp-thumb" });
      const im = cell.createEl("img");
      im.src = img.thumb;
      im.setAttr("alt", img.mime);
      const x = cell.createEl("button", { cls: "sp-thumb-x", text: "\xD7" });
      x.setAttr("aria-label", "remove");
      x.onclick = () => {
        this.pendingImages.splice(i, 1);
        this.paintThumbs();
      };
    });
  }
  bindComposerMedia(el) {
    el.addEventListener("paste", (ev) => {
      const files = this.clipboardImages(ev.clipboardData);
      if (!files.length) return;
      ev.preventDefault();
      void this.ingestFiles(files);
    });
    el.addEventListener("dragover", (ev) => {
      if (this.dragHasImage(ev.dataTransfer)) {
        ev.preventDefault();
        ev.dataTransfer && (ev.dataTransfer.dropEffect = "copy");
      }
    });
    el.addEventListener("drop", (ev) => {
      if (!this.dragHasImage(ev.dataTransfer)) return;
      ev.preventDefault();
      void this.ingestFiles(this.dtImages(ev.dataTransfer));
    });
  }
  clipboardImages(data) {
    if (!data) return [];
    const out = [];
    for (const item of Array.from(data.items || [])) {
      if (!item.type.startsWith("image/")) continue;
      const f = item.getAsFile();
      if (f) out.push(f);
    }
    return out;
  }
  dtImages(data) {
    if (!data) return [];
    return Array.from(data.files || []).filter((f) => f.type.startsWith("image/"));
  }
  dragHasImage(data) {
    if (!data) return false;
    if (this.dtImages(data).length) return true;
    return Array.from(data.types || []).some((t2) => t2 === "Files" || t2.startsWith("image/"));
  }
  async ingestFiles(files) {
    if (!files.length) return;
    if (this.plugin.settings.vision !== true) {
      this.msgs = [...this.msgs, { role: "error", text: t().errNoVision, goSettings: true }];
      await this.paintLog("force");
      return;
    }
    for (const file of files) {
      const mime = normMime(file.type);
      if (!VISION_MIME.has(file.type) && !VISION_MIME.has(mime)) {
        this.msgs = [...this.msgs, { role: "error", text: t().errVisionBadType }];
        await this.paintLog("force");
        return;
      }
      if (file.size > VISION_BYTES) {
        this.msgs = [...this.msgs, { role: "error", text: t().errVisionTooBig }];
        await this.paintLog("force");
        return;
      }
      if (this.pendingImages.length >= VISION_MAX) {
        this.msgs = [...this.msgs, { role: "error", text: t().errVisionTooMany }];
        await this.paintLog("force");
        return;
      }
      const data = await this.fileToB64(file);
      this.pendingImages.push({
        mime,
        data,
        thumb: `data:${mime};base64,${data}`
      });
    }
    this.paintThumbs();
  }
  fileToB64(file) {
    return new Promise((resolve, reject) => {
      const r = new FileReader();
      r.onload = () => {
        const s = String(r.result || "");
        const i = s.indexOf(",");
        resolve(i >= 0 ? s.slice(i + 1) : s);
      };
      r.onerror = () => reject(r.error);
      r.readAsDataURL(file);
    });
  }
  /** 错误气泡上的「去设置」。openTabById 老版本没有，兜底只开设置窗。 */
  openSettings() {
    const setting = this.app.setting;
    if (!setting) return;
    try {
      setting.open();
      setting.openTabById(this.plugin.manifest.id);
    } catch (e) {
      setting.open();
    }
  }
  bindKeepFocus(el, fn) {
    let fromPointer = false;
    el.addEventListener("pointerdown", (e) => {
      if (e.button !== 0) return;
      e.preventDefault();
      fromPointer = true;
      fn();
    });
    el.addEventListener("click", () => {
      if (fromPointer) {
        fromPointer = false;
        return;
      }
      fn();
    });
  }
  /** 跨笔记切换时清输入框草稿：打了一半的话属于上一场对话，跟着面板
   *  挪到新笔记会被读成「状态没切开」（0.18.5 复测）。 */
  clearDraft() {
    var _a;
    const inp = (_a = this.els) == null ? void 0 : _a.input;
    if (inp && inp.value) inp.value = "";
  }
  /**
   * 把面板上下文切到 file（0.18.4）：有绑定且会话存活 → adopt 恢复，跨笔记清
   * 引文/行号；会话已被清理 / 无绑定 → 清成该笔记空态。返回结果给调用方决定
   * 要不要 Notice（命令路径要反馈，file-open 自动跟随静默——切笔记弹提示是噪音）。
   * 前端错误气泡从不持久化：恢复的是服务端 ui_messages，瞬时错误不进线程。
   *
   * 代次守卫（复审 P1）：每次进入领一个新代次；每个 await 之后校验——期间
   * 又有 retarget/捕获发生（gen 变了）或一轮发送开始了（busy/pending），
   * 本次就地放弃，不许拿旧快照覆盖新事实。crossNote 现读现算，不缓存。
   */
  async retarget(file) {
    if (file.extension !== "md") return "aborted";
    const gen = ++this.retargetGen;
    this.host.rememberPath(this, file.path);
    const bind = this.plugin.noteBind(file.path, this.slotId);
    if (bind == null ? void 0 : bind.session_id) {
      try {
        const sess = await this.api().getSession(bind.session_id);
        if (this.retired || gen !== this.retargetGen || this.busy || this.pending) return "aborted";
        const wasOther = this.capturedPath !== file.path;
        this.handbookId = bind.handbook_id;
        this.capturedPath = file.path;
        if (wasOther) {
          this.quote = "";
          this.startLine = 0;
          this.endLine = 0;
          this.clearDraft();
        }
        this.err = "";
        this.adopt(sess);
        await this.refreshSnapshots();
        return "restored";
      } catch (e) {
        if (!isGone(e)) {
          this.err = e instanceof Error ? e.message : String(e);
          return "error";
        }
        if (this.retired || gen !== this.retargetGen || this.busy || this.pending) return "aborted";
      }
    }
    if (this.retired || gen !== this.retargetGen) return "aborted";
    this.handbookId = null;
    this.capturedPath = file.path;
    this.quote = "";
    this.startLine = 0;
    this.endLine = 0;
    this.clearDraft();
    this.sessionId = null;
    this.msgs = [];
    this.chips = [];
    this.dyn = [];
    this.substantive = false;
    this.pending = null;
    this.stopDeepPoll();
    this.spend = {};
    this.turnTokens = 0;
    this.usage = null;
    this.status = "";
    this.statusTipSig = "";
    this.deepNote = "";
    this.deepCursor = 0;
    this.err = "";
    await this.refreshSnapshots();
    return (bind == null ? void 0 : bind.session_id) ? "gone" : "nobind";
  }
  /** busy/pending 期间被跳过的跟随，等状态落定后补一次（复审 P1）：
   *  「等回复的时候点了另一篇」是最自然的切笔记时机，不补就回到
   *  「光切笔记面板纹丝不动」的老病。 */
  followActiveFile() {
    if (this.retired || !this.host.isActive(this)) return;
    if (this.busy || this.pending) return;
    const active = this.app.workspace.getActiveFile();
    if (!active || active.extension !== "md") return;
    if (active.path === this.capturedPath) return;
    void this.retarget(active).then(() => {
      this.paintBar();
      void this.paintLog();
    }).catch(() => {
    });
  }
  async captureSelection(pick) {
    if (this.busy || this.retired) return;
    const captureGen = ++this.retargetGen;
    const got = pick != null ? pick : this.plugin.takePick();
    await this.probeHealth();
    if (this.retired || captureGen !== this.retargetGen) return;
    if (!this.sidecarReachable) {
      new import_obsidian5.Notice(t().noticeUnreachable);
      return;
    }
    if (!got) {
      const active = this.app.workspace.getActiveFile();
      if (!active) {
        this.err = t().errNoSelection;
        new import_obsidian5.Notice(this.err);
        this.paintBar();
        return;
      }
      if (this.pending) {
        new import_obsidian5.Notice(t().noticeResolveApproval);
        return;
      }
      const prevPath = this.capturedPath;
      const r = await this.retarget(active);
      if (r === "restored" && prevPath !== active.path) {
        new import_obsidian5.Notice(t().noticeNoteRestored(active.name));
      } else if (r === "gone") {
        this.err = t().errSessionGone(active.name);
        new import_obsidian5.Notice(this.err);
      } else if (r === "nobind") {
        this.err = t().errNoSelection;
        new import_obsidian5.Notice(this.err);
      }
      if (r === "restored" && !this.quote && prevPath === active.path) {
        this.err = t().errNoSelection;
        new import_obsidian5.Notice(this.err);
      }
      this.paintBar();
      await this.paintLog("force");
      return;
    }
    try {
      const hid = handbookIdFromPath(got.absPath);
      await this.api().importHandbook(got.absPath, hid, vaultRoot(this.app));
      if (this.retired || captureGen !== this.retargetGen) return;
      const bind = this.plugin.noteBind(got.file.path, this.slotId);
      const switchingNotes = this.handbookId !== null && this.handbookId !== hid && this.msgs.some((m) => m.role === "user");
      let sess;
      let renewed = false;
      if ((bind == null ? void 0 : bind.session_id) && bind.handbook_id === hid) {
        try {
          sess = await this.api().getSession(bind.session_id);
        } catch (e) {
          if (!isGone(e)) throw e;
          sess = await this.api().createSession(hid);
          renewed = true;
        }
      } else {
        sess = await this.api().createSession(hid);
      }
      if (this.retired || captureGen !== this.retargetGen) return;
      this.handbookId = hid;
      this.capturedPath = got.file.path;
      this.quote = got.text;
      this.startLine = got.startLine;
      this.endLine = got.endLine;
      this.err = "";
      this.adopt(sess);
      await this.bindNote(got.file.path, {
        handbook_id: hid,
        session_id: sess.session_id
      });
      if (switchingNotes) new import_obsidian5.Notice(t().noticeSessionSwitched(got.file.name));
      else if (renewed) {
        new import_obsidian5.Notice(t().noticeSessionRenewed);
        this.msgs = [...this.msgs, { role: "error", text: t().bubbleSessionRenewed }];
      }
      await this.refreshSnapshots();
    } catch (e) {
      this.err = e instanceof Error ? e.message : String(e);
    }
    this.paintBar();
    await this.paintLog("force");
  }
  adopt(sess) {
    this.sessionId = sess.session_id;
    this.chips = sess.chips;
    this.msgs = sess.ui_messages || [];
    this.substantive = Boolean(sess.has_substantive);
    this.stopDeepPoll();
    this.deepCursor = 0;
    this.spend = sess.spend || {};
    this.turnTokens = 0;
    this.usage = null;
    this.statusTipSig = "";
    this.dyn = (sess.dyn_chips || []).filter((c) => c && c.text);
    const p = sess.pending;
    this.pending = p && p.pending_id ? {
      pending_id: p.pending_id,
      name: p.name || "edit_file",
      args: p.args || {}
    } : null;
    if (this.pending) this.status = t().statusAwaitApproval;
  }
  /**
   * 自动 compact 的 SSE 到达时，当前发送已经在 msgs 末尾垫了 user + 空 assistant。
   * note 要插在这两条之前，并且一场只留一条。
   */
  insertCompactNote() {
    const note = { role: "note", kind: "compact", text: "" };
    const rest = this.msgs.filter((m) => m.role !== "note");
    if (rest.length >= 2) {
      this.msgs = [...rest.slice(0, -2), note, ...rest.slice(-2)];
    } else {
      this.msgs = [...rest, note];
    }
    void this.paintLog("force");
  }
  async compactSession() {
    if (this.busy) {
      new import_obsidian5.Notice(t().noticeCompactBusy);
      return;
    }
    if (this.pending) {
      new import_obsidian5.Notice(t().noticeCompactPending);
      return;
    }
    if (!this.sessionId) {
      new import_obsidian5.Notice(t().noticeCompactEmpty);
      return;
    }
    try {
      const sess = await this.api().compactSession(this.sessionId);
      this.msgs = sess.ui_messages || [];
      this.paintBar();
      await this.paintLog("force");
      new import_obsidian5.Notice(sess.did === false ? t().noticeCompactEmpty : t().noticeCompactOk);
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e);
      new import_obsidian5.Notice(msg);
    }
  }
  async newSession() {
    if (!this.handbookId) {
      new import_obsidian5.Notice(t().noticeRegisterFirst);
      return;
    }
    if (!window.confirm(t().confirmNewSession)) return;
    try {
      const sess = await this.api().createSession(this.handbookId);
      this.adopt(sess);
      this.quote = "";
      this.startLine = 1;
      this.endLine = 1;
      this.plugin.clearPick();
      if (this.capturedPath) {
        await this.bindNote(this.capturedPath, {
          handbook_id: this.handbookId,
          session_id: sess.session_id
        });
      }
    } catch (e) {
      this.err = e instanceof Error ? e.message : String(e);
    }
    this.paintBar();
    await this.paintLog();
  }
  /**
   * 会话在服务端没了（超过保留期被清理）之后，就地换一场新的。
   *
   * 不做这件事的话，读者的失败模式是**「输入框能打字，一发就报错，
   * 不知道该干什么」**——再点还是同一个死 sid，全仓只有「用当前选区」和
   * 「新开会话」两个按钮会 createSession，读者未必想得到要去点它们。
   *
   * 重绑 `bindNote` 是关键的第二步：只 adopt 不重绑，下次划同一篇笔记
   * 又会捞回那个死 sid，同一个坑再踩一次。
   */
  async reviveSession() {
    if (!this.handbookId) {
      this.err = t().errSessionGoneNoHandbook;
      return false;
    }
    try {
      const sess = await this.api().createSession(this.handbookId);
      this.adopt(sess);
      if (this.capturedPath) {
        await this.bindNote(this.capturedPath, {
          handbook_id: this.handbookId,
          session_id: sess.session_id
        });
      }
      return true;
    } catch (e) {
      this.err = e instanceof Error ? e.message : String(e);
      return false;
    }
  }
  async send(chip, userText, revived = false, pics = this.pendingImages.slice()) {
    if (this.retired || this.busy && !revived) return;
    if (chip === "search") return;
    if (this.pending) {
      new import_obsidian5.Notice(t().noticeResolveApproval);
      return;
    }
    if (!this.sessionId || !this.quote) {
      new import_obsidian5.Notice(t().noticeUseSelectionFirst);
      return;
    }
    if (!this.llmOk) {
      this.msgs = [...this.msgs, { role: "error", text: t().errNoKey, goSettings: true }];
      this.paintBar();
      await this.paintLog("force");
      return;
    }
    if (pics.length && this.plugin.settings.vision !== true) {
      this.msgs = [...this.msgs, { role: "error", text: t().errNoVision, goSettings: true }];
      this.paintBar();
      await this.paintLog("force");
      return;
    }
    this.dyn = dropAsked(this.dyn, userText);
    this.busy = true;
    this.err = "";
    this.usage = null;
    this.turnTokens = 0;
    this.fastTrim = [];
    this.status = phaseText("thinking", "");
    const myChip = this.myChips().find((c) => c.id === chip);
    const shown = userText.trim() || this.labelOf(chip) || chip;
    this.msgs = [
      ...this.msgs,
      {
        role: "user",
        text: shown,
        images: pics.map((p) => ({ mime: p.mime, thumb: p.thumb }))
      },
      { role: "assistant", text: "" }
    ];
    this.pendingImages = [];
    this.paintThumbs();
    this.paintBar();
    await this.paintLog("force");
    if (this.retired) return;
    let acc = "";
    let gone = false;
    let cancelled = false;
    const controller = new AbortController();
    const runId = crypto.randomUUID();
    this.controller = controller;
    this.runId = runId;
    this.host.paintChrome();
    try {
      await streamChat(
        this.plugin.settings.sidecarUrl,
        {
          session_id: this.sessionId,
          run_id: runId,
          selected_text: this.quote,
          start_line: this.startLine,
          end_line: this.endLine,
          chip,
          user_text: userText,
          deep: this.plugin.settings.deepQuestions !== false,
          ...pics.length ? { images: pics.map((p) => ({ mime: p.mime, data: p.data })) } : {},
          // 点的是自己的泡泡才发。别的轮次连这个键都不出现——老路逐字节一致。
          ...myChip ? { custom_chip: chipPayload(myChip) } : {}
        },
        (ev) => {
          if (this.retired || this.controller !== controller || ev.run_id && ev.run_id !== runId || ev.session_id && ev.session_id !== this.sessionId) return;
          if (ev.type === "cancelled") {
            cancelled = true;
            const last = this.msgs[this.msgs.length - 1];
            if ((last == null ? void 0 : last.role) === "assistant") last.text += `

(${t().bigBangStopped})`;
            this.thinkChars = 0;
            this.pending = null;
            this.status = t().bigBangStopped;
          }
          if (ev.code === "FILE_CHANGED") {
            this.pending = null;
            this.err = t().errBigBangConflict;
          }
          if (ev.type === "status") {
            this.status = phaseText(String(ev.phase || ""), String(ev.text || ""));
            this.setStatus();
          } else if (ev.type === "compacted") {
            this.insertCompactNote();
          } else if (ev.type === "trimmed") {
            const steps = Array.isArray(ev.steps) ? ev.steps.map(String) : [];
            this.fastTrim = steps;
            this.paintFast();
          } else if (ev.type === "route") {
            acc = "";
            const last = this.msgs[this.msgs.length - 1];
            if ((last == null ? void 0 : last.role) === "assistant") last.text = "";
            this.thinkChars = 0;
            this.insertRouteNote(String(ev.why || ""));
          } else if (ev.type === "think") {
            this.thinkChars = Number(ev.chars) || 0;
            this.setStatus();
          } else if (ev.type === "token") {
            this.thinkChars = 0;
            this.status = phaseText("writing", "");
            acc += String(ev.text || "");
            const last = this.msgs[this.msgs.length - 1];
            if ((last == null ? void 0 : last.role) === "assistant") last.text = acc;
            this.paintStreamBubble(acc);
            this.setStatus();
          } else if (ev.type === "tool") {
            this.status = phaseText("reading", "");
            const ok = Boolean(ev.ok);
            const path = String(ev.resolved || ev.detail || "");
            const name = String(ev.name || "tool");
            this.msgs.splice(this.msgs.length - 1, 0, {
              role: "tool",
              ok,
              text: `${name} ${ok ? t().toolOk : t().toolDenied} \u2192 ${path}`
            });
            if (name === "edit_file" && ok) void this.host.refreshSnapshots();
            void this.paintLog();
            this.paintBar();
          } else if (ev.type === "approval") {
            const args = ev.args || {};
            this.pending = {
              pending_id: String(ev.pending_id || ""),
              name: String(ev.name || "edit_file"),
              args
            };
            this.status = t().statusAwaitApproval;
            this.paintBar();
          } else if (ev.type === "spend") {
            this.takeSpend(ev);
          } else if (ev.type === "done") {
            this.takeDone(ev);
          } else if (ev.type === "error") {
            this.status = "";
            this.err = String(ev.message);
            this.failBubble(String(ev.message), /图像理解|Image understanding|vision/i.test(String(ev.message)));
            void this.paintLog();
            this.paintBar();
          }
        },
        this.plugin.settings,
        controller.signal
      );
    } catch (e) {
      if (controller.signal.aborted || this.retired) return;
      if (isGone(e) && !revived) gone = true;
      else {
        const msg = e instanceof Error ? e.message : String(e);
        this.err = msg;
        this.failBubble(msg);
      }
    } finally {
      if (this.controller === controller) this.controller = null;
      this.stopping = false;
      if (!this.pending && !gone) {
        this.busy = false;
        this.status = cancelled ? t().bigBangStopped : "";
      }
      this.paintBar();
      await this.paintLog();
      if (!this.busy && !this.pending && !gone) this.followActiveFile();
    }
    if (!gone) return;
    if (!await this.reviveSession()) {
      this.busy = false;
      this.status = "";
      if (!this.err) this.err = t().errSessionArchivedHard;
      this.paintBar();
      await this.paintLog();
      return;
    }
    await this.send(chip, userText, true, pics);
    new import_obsidian5.Notice(this.err ? t().noticeSessionArchivedResendFailed : t().noticeSessionArchived);
    this.paintBar();
  }
  async doApprove(allow) {
    if (!this.sessionId || !this.pending || this.approving) return;
    const sid = this.sessionId;
    const pid = this.pending.pending_id;
    this.approving = true;
    this.busy = true;
    this.err = "";
    this.status = allow ? t().statusEditing : t().statusDeclined;
    this.paintBar();
    if (allow && this.capturedPath) {
      try {
        await this.saveOpenNote(this.capturedPath);
      } catch (e) {
      }
    }
    if (this.retired) return;
    let acc = "";
    let gone = false;
    let cancelled = false;
    const controller = new AbortController();
    const runId = crypto.randomUUID();
    this.controller = controller;
    this.runId = runId;
    this.host.paintChrome();
    const last = this.msgs[this.msgs.length - 1];
    if ((last == null ? void 0 : last.role) === "assistant") acc = last.text;
    try {
      await streamApprove(
        this.plugin.settings.sidecarUrl,
        { session_id: sid, run_id: runId, pending_id: pid, allow },
        (ev) => {
          if (this.retired || this.controller !== controller || ev.run_id && ev.run_id !== runId || ev.session_id && ev.session_id !== this.sessionId) return;
          if (ev.type === "cancelled") {
            cancelled = true;
            const last2 = this.msgs[this.msgs.length - 1];
            if ((last2 == null ? void 0 : last2.role) === "assistant") last2.text += `

(${t().bigBangStopped})`;
            this.thinkChars = 0;
            this.pending = null;
            this.status = t().bigBangStopped;
          }
          if (ev.code === "FILE_CHANGED") {
            this.pending = null;
            this.err = t().errBigBangConflict;
          }
          if (ev.type === "status") {
            this.status = phaseText(String(ev.phase || ""), String(ev.text || ""));
            this.setStatus();
          } else if (ev.type === "think") {
            this.thinkChars = Number(ev.chars) || 0;
            this.setStatus();
          } else if (ev.type === "token") {
            this.thinkChars = 0;
            acc += String(ev.text || "");
            const row = this.msgs[this.msgs.length - 1];
            if ((row == null ? void 0 : row.role) === "assistant") row.text = acc;
            this.paintStreamBubble(acc);
          } else if (ev.type === "tool") {
            const ok = Boolean(ev.ok);
            const path = String(ev.resolved || ev.detail || "");
            const name = String(ev.name || "tool");
            this.msgs.splice(this.msgs.length - 1, 0, {
              role: "tool",
              ok,
              text: `${name} ${ok ? t().toolOk : t().toolDenied} \u2192 ${path}`
            });
            if (name === "edit_file" && ok) {
              void this.host.refreshSnapshots();
              const line = Number(ev.line) || this.startLine;
              if (this.capturedPath && this.host.paneCount === 1) void this.revealInsert(this.capturedPath, line);
            }
            void this.paintLog();
          } else if (ev.type === "approval") {
            const args = ev.args || {};
            this.pending = {
              pending_id: String(ev.pending_id || ""),
              name: String(ev.name || "edit_file"),
              args
            };
            this.status = t().statusAwaitApproval;
            this.paintBar();
          } else if (ev.type === "spend") {
            this.takeSpend(ev);
          } else if (ev.type === "done") {
            this.pending = null;
            this.takeDone(ev);
          } else if (ev.type === "error") {
            this.err = String(ev.message);
          }
        },
        this.plugin.settings,
        controller.signal
      );
    } catch (e) {
      if (controller.signal.aborted || this.retired) return;
      if (isGone(e)) gone = true;
      else this.err = e instanceof Error ? e.message : String(e);
    } finally {
      if (this.controller === controller) this.controller = null;
      this.stopping = false;
      if (gone) this.pending = null;
      this.approving = false;
      if (!this.pending) {
        this.busy = false;
        this.status = cancelled ? t().bigBangStopped : "";
      }
      this.paintBar();
      await this.paintLog("force");
      if (!this.busy && !this.pending) this.followActiveFile();
    }
    if (!gone) return;
    if (await this.reviveSession()) {
      this.err = t().errApprovalArchived;
    } else if (this.err) {
      this.err += t().errApprovalUntouched;
    } else {
      this.err = t().errApprovalArchivedHard;
    }
    this.paintBar();
    await this.paintLog("force");
  }
  async saveOpenNote(rel) {
    var _a;
    for (const leaf of this.app.workspace.getLeavesOfType("markdown")) {
      const v = leaf.view;
      if (v instanceof import_obsidian5.MarkdownView && ((_a = v.file) == null ? void 0 : _a.path) === rel) {
        await v.save();
      }
    }
  }
  async revealInsert(rel, line1) {
    var _a;
    const file = this.app.vault.getAbstractFileByPath(rel);
    if (!(file instanceof import_obsidian5.TFile)) return;
    const leaf = (_a = this.app.workspace.getLeavesOfType("markdown").find((l) => {
      var _a2;
      const v = l.view;
      return v instanceof import_obsidian5.MarkdownView && ((_a2 = v.file) == null ? void 0 : _a2.path) === rel;
    })) != null ? _a : this.app.workspace.getLeaf(false);
    await leaf.openFile(file);
    const view = leaf.view;
    if (!(view instanceof import_obsidian5.MarkdownView)) return;
    const line = Math.max(0, line1 - 1);
    const pos = { line, ch: 0 };
    view.editor.setCursor(pos);
    view.editor.scrollIntoView({ from: pos, to: pos }, true);
  }
  applySnapshotStatus(st) {
    this.snapshotRevision = st.revision;
    this.undoHead = st.undo_head;
    this.redoHead = st.redo_head;
    this.snapshotSource = st.latest_source || "";
    this.undoN = Number(st.undo_n) || 0;
    this.redoN = Number(st.redo_n) || 0;
  }
  async refreshSnapshots() {
    if (!this.handbookId) {
      this.undoN = 0;
      this.redoN = 0;
      return;
    }
    try {
      this.applySnapshotStatus(await this.api().snapshots(this.handbookId));
    } catch (e) {
    }
    this.paintBar();
  }
  async reloadCapturedNote() {
    const rel = this.capturedPath;
    if (!rel) return;
    const file = this.app.vault.getAbstractFileByPath(rel);
    if (file instanceof import_obsidian5.TFile) {
      const leaf = this.app.workspace.getLeavesOfType("markdown").find((l) => {
        var _a;
        const v = l.view;
        return v instanceof import_obsidian5.MarkdownView && ((_a = v.file) == null ? void 0 : _a.path) === rel;
      });
      if (leaf) await leaf.openFile(file);
    }
  }
  async doRollback() {
    if (this.busy || !this.handbookId || this.undoN <= 0) return;
    if (!window.confirm(
      `${t().bigBangUndo}
${this.capturedPath || ""} \xB7 ${this.host.sourceLabel(this.snapshotSource)}

${t().confirmRollback}`
    )) {
      return;
    }
    const rel = this.capturedPath;
    this.busy = true;
    this.err = "";
    this.status = t().statusRollingBack;
    this.paintBar();
    try {
      if (rel) await this.saveOpenNote(rel);
      const st = await this.api().rollback(this.handbookId, this.snapshotRevision, this.undoHead);
      this.applySnapshotStatus(st);
      void this.host.refreshSnapshots();
      this.msgs = [
        ...this.msgs,
        { role: "assistant", text: t().msgRolledBack }
      ];
      await this.reloadCapturedNote();
      new import_obsidian5.Notice(t().noticeRolledBack);
    } catch (e) {
      this.err = e instanceof Error ? e.message : String(e);
    } finally {
      this.busy = false;
      this.status = "";
      this.paintBar();
      await this.paintLog("force");
    }
  }
  async doRedo() {
    if (this.busy || !this.handbookId || this.redoN <= 0) return;
    const rel = this.capturedPath;
    this.busy = true;
    this.err = "";
    this.status = t().statusRedoing;
    this.paintBar();
    try {
      if (rel) await this.saveOpenNote(rel);
      const st = await this.api().redo(this.handbookId, this.snapshotRevision, this.redoHead);
      this.applySnapshotStatus(st);
      void this.host.refreshSnapshots();
      this.msgs = [...this.msgs, { role: "assistant", text: t().msgRedone }];
      await this.reloadCapturedNote();
      new import_obsidian5.Notice(t().noticeRedone);
    } catch (e) {
      this.err = e instanceof Error ? e.message : String(e);
    } finally {
      this.busy = false;
      this.status = "";
      this.paintBar();
      await this.paintLog("force");
    }
  }
};
var PenView = class extends import_obsidian5.ItemView {
  constructor(leaf, plugin) {
    super(leaf);
    this.panes = [];
    this.active = null;
    this.grid = null;
    this.toolbar = null;
    this.addButton = null;
    this.observer = null;
    this.frame = null;
    this.closed = false;
    this.adding = false;
    this.plugin = plugin;
  }
  getViewType() {
    return VIEW_TYPE_PEN;
  }
  getDisplayText() {
    return t().viewTitle;
  }
  getIcon() {
    return "highlighter";
  }
  get paneCount() {
    return this.panes.length;
  }
  isActive(pane) {
    return this.active === pane;
  }
  async onOpen() {
    this.closed = false;
    this.layout = void 0;
    this.contentEl.empty();
    this.contentEl.addClass("sp-workspace");
    this.toolbar = this.contentEl.createDiv({ cls: "sp-big-bang-bar" });
    this.toolbar.createSpan({ cls: "sp-big-bang-title", text: t().bigBangTitle });
    this.addButton = this.toolbar.createEl("button", { cls: "sp-add-agent", text: `\uFF0B ${t().bigBangAdd}` });
    this.addButton.onclick = () => void this.addAgent();
    this.grid = this.contentEl.createDiv({ cls: "sp-agent-grid" });
    this.adding = true;
    try {
      for (const slot of this.plugin.agentPanels) {
        if (this.closed) break;
        const pane = this.createPane(slot.id);
        await pane.onOpen(this.plugin.agentPanels.length > 1 ? slot.path : void 0);
      }
    } finally {
      this.adding = false;
      this.paintChrome();
      this.onResize();
    }
    if (this.closed || !this.grid) return;
    this.observer = new ResizeObserver(() => this.onResize());
    this.observer.observe(this.grid);
  }
  createPane(id) {
    const cell = this.grid.createDiv({ cls: "sp-agent-cell" });
    const content = cell.createDiv({ cls: "sp-agent-content" });
    const pane = new AgentPane(content, this.plugin, this, id);
    this.panes.push({ pane, cell });
    this.addChild(pane);
    if (!this.active) this.active = pane;
    const focus = () => {
      this.active = pane;
      this.paintChrome();
    };
    cell.addEventListener("focusin", focus);
    cell.addEventListener("pointerdown", focus);
    this.paintChrome();
    this.onResize();
    return pane;
  }
  async addAgent() {
    var _a;
    if (this.adding || this.closed || this.panes.length >= 4 || !this.active) return;
    this.adding = true;
    const source = this.active;
    this.paintChrome();
    try {
      const health = await makeApi(this.plugin.settings.sidecarUrl).health();
      if (!((_a = health.capabilities) == null ? void 0 : _a.big_bang)) throw new Error(t().errBigBangUpgrade);
    } catch (e) {
      this.adding = false;
      this.paintChrome();
      new import_obsidian5.Notice(e instanceof Error ? e.message : String(e));
      return;
    }
    if (this.closed) {
      this.adding = false;
      return;
    }
    const id = crypto.randomUUID();
    const pane = this.createPane(id);
    this.plugin.agentPanels.push({ id, ...source.path ? { path: source.path } : {} });
    this.paintChrome();
    try {
      await pane.seed(source);
      if (this.closed) return;
      await pane.onOpen(void 0, true);
      await this.plugin.saveSettings();
      this.active = pane;
      pane.focusInput();
    } catch (e) {
      const entry = this.panes.find((p) => p.pane === pane);
      this.removeChild(pane);
      entry == null ? void 0 : entry.cell.remove();
      this.panes = this.panes.filter((p) => p.pane !== pane);
      this.plugin.agentPanels = this.plugin.agentPanels.filter((p) => p.id !== id);
      if (this.active === pane) this.active = source;
      new import_obsidian5.Notice(e instanceof Error ? e.message : String(e));
    } finally {
      this.adding = false;
      this.paintChrome();
      this.onResize();
    }
  }
  async closeAgent(pane) {
    if (this.adding || this.panes.length <= 1) return;
    this.adding = true;
    this.paintChrome();
    try {
      await pane.dispose();
      const entry = this.panes.find((p) => p.pane === pane);
      this.removeChild(pane);
      entry == null ? void 0 : entry.cell.remove();
      this.panes = this.panes.filter((p) => p.pane !== pane);
      this.plugin.agentPanels = this.plugin.agentPanels.filter((p) => p.id !== pane.slotId);
      if (this.active === pane) {
        this.active = this.panes[0].pane;
        this.active.focusInput();
      }
      await this.plugin.saveSettings();
    } catch (e) {
      new import_obsidian5.Notice(e instanceof Error ? e.message : String(e));
    } finally {
      this.adding = false;
      this.paintChrome();
      this.onResize();
    }
  }
  sourceLabel(sid) {
    const index = this.panes.findIndex((p) => p.pane.session === sid);
    return index >= 0 ? t().bigBangAgent(index + 1) : t().bigBangEarlier;
  }
  rememberPath(pane, path) {
    const slot = this.plugin.agentPanels.find((p) => p.id === pane.slotId);
    if (slot && slot.path !== path) {
      slot.path = path;
      this.plugin.saveSettingsSoon();
    }
  }
  paintChrome() {
    var _a;
    if (this.closed) return;
    const count = this.panes.length;
    if (this.toolbar) this.toolbar.hidden = count <= 1;
    (_a = this.grid) == null ? void 0 : _a.classList.toggle("is-multi", count > 1);
    if (this.addButton) {
      this.addButton.disabled = this.adding || count >= 4;
      this.addButton.textContent = `\uFF0B ${t().bigBangAdd} (${count}/4)`;
      (0, import_obsidian5.setTooltip)(this.addButton, count >= 4 ? t().bigBangLimit : t().bigBangAdd);
    }
    this.panes.forEach(({ pane, cell }, i) => {
      cell.classList.toggle("is-active", pane === this.active);
      cell.setAttribute("aria-label", t().bigBangAgent(i + 1));
      pane.paintChrome(i, count);
    });
  }
  onResize() {
    if (this.closed || this.frame !== null) return;
    this.frame = window.requestAnimationFrame(() => {
      this.frame = null;
      const grid = this.grid;
      if (!grid || !grid.clientWidth || !grid.clientHeight || !this.panes.length) return;
      const next = computeAgentLayout({
        count: this.panes.length,
        width: grid.clientWidth,
        height: grid.clientHeight,
        previous: this.layout
      });
      this.layout = next;
      grid.style.gridTemplateColumns = next.columns;
      grid.style.gridTemplateRows = next.rows;
      grid.classList.toggle("is-overflowing", next.overflow);
      grid.dataset.layout = next.kind;
      this.panes.forEach(({ pane, cell }, i) => {
        cell.style.gridArea = next.areas[i];
        pane.onResize();
      });
    });
  }
  onFastModeChanged() {
    this.panes.forEach((p) => p.pane.onFastModeChanged());
  }
  onCustomChipsChanged() {
    this.panes.forEach((p) => p.pane.onCustomChipsChanged());
  }
  async probeHealth() {
    await Promise.all(this.panes.map((p) => p.pane.probeHealth()));
  }
  async captureSelection(pick) {
    var _a;
    await ((_a = this.active) == null ? void 0 : _a.captureSelection(pick));
  }
  async compactSession() {
    var _a;
    await ((_a = this.active) == null ? void 0 : _a.compactSession());
  }
  async refreshSnapshots() {
    await Promise.all(this.panes.map((p) => p.pane.refreshSnapshots()));
  }
  relocalize() {
    var _a;
    const title = (_a = this.toolbar) == null ? void 0 : _a.querySelector(".sp-big-bang-title");
    if (title) title.textContent = t().bigBangTitle;
    this.panes.forEach((p) => p.pane.relocalize());
    this.paintChrome();
  }
  async onClose() {
    var _a;
    this.closed = true;
    (_a = this.observer) == null ? void 0 : _a.disconnect();
    if (this.frame !== null) window.cancelAnimationFrame(this.frame);
    this.frame = null;
    for (const { pane } of this.panes) this.removeChild(pane);
    this.panes = [];
    this.active = null;
  }
};

// src/main.ts
var SocratesPenPlugin = class extends import_obsidian6.Plugin {
  constructor() {
    super(...arguments);
    this.settings = { ...DEFAULT_SETTINGS };
    this.notes = {};
    this.agentPanels = [{ id: "primary" }];
    /** 老 data.json 带出来的明文钥匙，等 sidecar 起来就迁走。只活在内存里。 */
    this.migrateKey = "";
    /** 设置页 PUT 失败后的内存暂存，升完自动写入。绝不进 data.json。 */
    this.pendingPutKey = "";
    this.migrating = false;
    /** saveSettings 串行链：迁移收尾和 bindNote 会几乎同时各存一次，
     *  让后快照的写入总是最后落盘——不然迁移成功后，一张在途的带钥匙
     *  快照可能后落，明文又回到 data.json（二轮复审 P1）。 */
    this.saveChain = Promise.resolve();
    /** 钥匙 PUT 串行链（见 sidecarPutKey）。 */
    this.putChain = Promise.resolve();
    this.saveTimer = null;
    this.lastPick = null;
    this.ribbonEl = null;
    this.cmdAsk = null;
    this.cmdOpen = null;
    this.cmdCompact = null;
    this.cmdReport = null;
    this.sidecar = new SidecarManager();
  }
  async onload() {
    await this.loadSettings();
    setLang(resolveLang(this.settings.lang));
    void purgeExpired(this.settings.sidecarUrl).catch(() => {
    });
    if (this.settings.sidecarAutoStart !== false) {
      void this.ensureSidecar().catch(() => {
      });
    }
    if (this.migrateKey) void this.migrateKeyOut();
    this.registerView(VIEW_TYPE_PEN, (leaf) => new PenView(leaf, this));
    this.registerView(VIEW_TYPE_REPORT, (leaf) => new ReportView(leaf, this));
    this.addSettingTab(new PenSettingTab(this.app, this));
    this.registerDomEvent(document, "selectionchange", () => this.cachePick());
    this.registerDomEvent(document, "mouseup", () => this.cachePick());
    this.ribbonEl = this.addRibbonIcon("highlighter", "Socrates", () => {
      void this.activateView();
    });
    (0, import_obsidian6.setTooltip)(this.ribbonEl, t().ribbonTooltip, { placement: "right" });
    this.cmdAsk = this.addCommand({
      id: "socrates-pen-ask-selection",
      name: t().cmdAskSelection,
      callback: () => {
        const pick = this.takePick();
        void this.activateView().then(async (view) => {
          await view.captureSelection(pick);
        });
      }
    });
    this.cmdOpen = this.addCommand({
      id: "socrates-pen-open",
      name: t().cmdOpenPanel,
      callback: () => {
        void this.activateView();
      }
    });
    this.cmdCompact = this.addCommand({
      id: "socrates-pen-compact",
      name: t().cmdCompactSession,
      callback: () => {
        void this.activateView().then((view) => view.compactSession());
      }
    });
    this.cmdReport = this.addCommand({
      id: "socrates-pen-report",
      name: t().cmdOpenReport,
      callback: () => {
        void this.activateReport();
      }
    });
  }
  onunload() {
    if (this.settings.sidecarKeepAlive === false) this.sidecar.stopOwned();
    if (this.saveTimer !== null) {
      window.clearTimeout(this.saveTimer);
      this.saveTimer = null;
      void this.saveSettings();
    }
  }
  /**
   * 语言改了之后就地刷新，不需要重启插件。
   *
   * 命令名：Plugin.addCommand 在注册那一刻做过一次 `manifest.name + ": "`，
   * 之后改名要自己把前缀补回来。id 不变，所以用户已绑的快捷键不受影响；
   * 命令面板每次打开都重读 name，下次打开就是新语言。
   */
  applyLanguage() {
    setLang(resolveLang(this.settings.lang));
    const s = t();
    if (this.ribbonEl) (0, import_obsidian6.setTooltip)(this.ribbonEl, s.ribbonTooltip, { placement: "right" });
    const prefix = `${this.manifest.name}: `;
    if (this.cmdAsk) this.cmdAsk.name = prefix + s.cmdAskSelection;
    if (this.cmdOpen) this.cmdOpen.name = prefix + s.cmdOpenPanel;
    if (this.cmdCompact) this.cmdCompact.name = prefix + s.cmdCompactSession;
    if (this.cmdReport) this.cmdReport.name = prefix + s.cmdOpenReport;
    const leaves = [
      ...this.app.workspace.getLeavesOfType(VIEW_TYPE_PEN),
      ...this.app.workspace.getLeavesOfType(VIEW_TYPE_REPORT)
    ];
    for (const leaf of leaves) {
      const view = leaf.view;
      if (view instanceof PenView || view instanceof ReportView) view.relocalize();
      const withHeader = leaf;
      if (typeof withHeader.updateHeader === "function") withHeader.updateHeader();
      else void leaf.setViewState(leaf.getViewState());
    }
  }
  /**
   * 把某种视图露到右侧栏。两个视图（对话面板、学习画像）共用这一份，
   * 「三步」只写在这儿：
   * 右侧栏折叠时 setActiveLeaf 什么都不露，点丝带像没反应（评测报告 P1）。
   * 只用 rightSplit.collapsed：revealLeaf 1.7.2 才有，商店审核的
   * no-unsupported-api 闸按 @since 标注拦引用（哪怕在能力探测的 cast 里），
   * minAppVersion 1.5.0 下不能出现它（v0.18.6 审核打回的正是这行）。
   */
  async revealSide(type) {
    var _a;
    const existing = this.app.workspace.getLeavesOfType(type);
    const leaf = (_a = existing[0]) != null ? _a : this.app.workspace.getRightLeaf(false);
    if (!leaf) throw new Error(t().errNoRightLeaf);
    try {
      this.app.workspace.rightSplit.collapsed = false;
    } catch (e) {
      new import_obsidian6.Notice(t().noticeRightOpened);
    }
    await leaf.setViewState({ type, active: true });
    this.app.workspace.setActiveLeaf(leaf, { focus: true });
    return leaf;
  }
  async activateView() {
    const leaf = await this.revealSide(VIEW_TYPE_PEN);
    const view = leaf.view;
    if (!(view instanceof PenView)) throw new Error(t().errViewNotMounted);
    return view;
  }
  /** 学习画像页签。已开着就切过去，没开就在右侧栏新开一个（对话面板留在原位）。 */
  async activateReport() {
    const leaf = await this.revealSide(VIEW_TYPE_REPORT);
    const view = leaf.view;
    if (!(view instanceof ReportView)) throw new Error(t().errViewNotMounted);
    return view;
  }
  cachePick() {
    const p = readLivePick(this.app);
    if (p) this.lastPick = p;
  }
  takePick() {
    var _a;
    const live = readLivePick(this.app);
    if (live) return live;
    const active = this.app.workspace.getActiveFile();
    if (!active || !this.lastPick || this.lastPick.file.path !== active.path) {
      return null;
    }
    const leaf = this.app.workspace.getLeavesOfType("markdown").find((l) => {
      var _a2;
      return ((_a2 = l.view.file) == null ? void 0 : _a2.path) === active.path;
    });
    const view = leaf == null ? void 0 : leaf.view;
    return view instanceof import_obsidian6.MarkdownView && ((_a = view.getMode) == null ? void 0 : _a.call(view)) === "preview" ? this.lastPick : null;
  }
  clearPick() {
    this.lastPick = null;
  }
  noteBind(path, slot = "primary") {
    var _a;
    const binding = this.notes[path];
    if (!binding || slot === "primary") return binding;
    const sid = (_a = binding.agents) == null ? void 0 : _a[slot];
    return sid ? { handbook_id: binding.handbook_id, session_id: sid } : void 0;
  }
  async bindNote(path, bind, slot = "primary") {
    const prior = this.notes[path];
    const agents = { ...(prior == null ? void 0 : prior.agents) || {}, [slot]: bind.session_id };
    this.notes[path] = slot === "primary" ? { ...bind, agents } : {
      handbook_id: bind.handbook_id,
      session_id: (prior == null ? void 0 : prior.session_id) || "",
      agents
    };
    const panel = this.agentPanels.find((p) => p.id === slot);
    if (panel) panel.path = path;
    await this.saveSettings();
  }
  async loadSettings() {
    var _a, _b;
    const raw = await this.loadData() || {};
    const legacy = {};
    if (raw.sidecarUrl !== void 0) legacy.sidecarUrl = raw.sidecarUrl;
    if (raw.baseUrl !== void 0) legacy.baseUrl = raw.baseUrl;
    if (raw.model !== void 0) legacy.model = raw.model;
    if (raw.thinking !== void 0) legacy.thinking = raw.thinking;
    this.migrateKey = String(
      (_b = (_a = raw.settings && raw.settings.apiKey) != null ? _a : raw.apiKey) != null ? _b : ""
    ).trim();
    this.settings = {
      ...DEFAULT_SETTINGS,
      ...legacy,
      ...raw.settings || {},
      // 展开是**浅**的：data.json 里只存了一半的 limits 会把另一半整个吃掉。
      // coerceLimits 自己也会补全，这里再显式深一层是双保险——少写这一层，
      // 「只改过一个数」的库会静默丢掉其余十几个自定义值。
      limits: { ...DEFAULT_SETTINGS.limits, ...(raw.settings || {}).limits || {} },
      // 同理：数组不是对象，浅展开碰不到它，旧库里根本没这个键 —— 不显式给一层，
      // this.settings.customChips 是 undefined，paintChips 里一个 .filter 就炸。
      customChips: (raw.settings || {}).customChips || []
    };
    delete this.settings.apiKey;
    this.settings.thinking = coerceThinking(this.settings.thinking);
    this.settings.provider = coerceProvider(this.settings.provider);
    this.settings.fastProvider = coerceProvider(this.settings.fastProvider);
    this.settings.vision = this.settings.vision === true;
    this.settings.fastMode = this.settings.fastMode === true;
    this.settings.fastBaseUrl = typeof this.settings.fastBaseUrl === "string" ? this.settings.fastBaseUrl.trim().replace(/\/+$/, "") || DEFAULT_SETTINGS.fastBaseUrl : DEFAULT_SETTINGS.fastBaseUrl;
    this.settings.fastModel = typeof this.settings.fastModel === "string" ? this.settings.fastModel.trim() || DEFAULT_SETTINGS.fastModel : DEFAULT_SETTINGS.fastModel;
    this.settings.lang = coerceLangPref(this.settings.lang);
    this.settings.sidecarAutoStart = this.settings.sidecarAutoStart !== false;
    this.settings.sidecarKeepAlive = this.settings.sidecarKeepAlive !== false;
    this.settings.pythonPath = typeof this.settings.pythonPath === "string" ? this.settings.pythonPath.trim() : "";
    this.settings.baseUrl = typeof this.settings.baseUrl === "string" ? this.settings.baseUrl.trim().replace(/\/+$/, "") || DEFAULT_SETTINGS.baseUrl : DEFAULT_SETTINGS.baseUrl;
    this.settings.limits = coerceLimits(this.settings.limits);
    this.settings.customChips = coerceCustomChips(this.settings.customChips);
    this.notes = raw.notes || {};
    if (Array.isArray(raw.agentPanels)) {
      const seen = /* @__PURE__ */ new Set();
      const panels = raw.agentPanels.filter((p) => p && typeof p.id === "string" && /^[a-zA-Z0-9-]{1,80}$/.test(p.id) && !seen.has(p.id) && Boolean(seen.add(p.id))).slice(0, 4).map((p) => ({ id: p.id, ...typeof p.path === "string" ? { path: p.path } : {} }));
      if (panels.length) this.agentPanels = panels;
    }
  }
  sidecarSnap() {
    return this.sidecar.snapshot();
  }
  sidecarError() {
    return this.sidecar.lastError();
  }
  sidecarWatch(fn) {
    return this.sidecar.watch(fn);
  }
  ensureSidecar() {
    const p = this.sidecar.ensure({
      sidecarUrl: this.settings.sidecarUrl,
      pythonPath: this.settings.pythonPath,
      version: this.manifest.version,
      autoStart: this.settings.sidecarAutoStart
    });
    void p.then((kind) => {
      if (kind === "already" || kind === "started") {
        if (this.pendingPutKey) void this.flushPendingKey();
        else if (this.migrateKey) void this.migrateKeyOut();
      }
    }).catch(() => {
    });
    return p;
  }
  /** 把老 data.json 里的明文钥匙迁进 sidecar 家目录，然后从磁盘抹掉。
   *
   * PUT 重试 45 秒（sidecar 可能还在装/起）。每轮**重读** this.migrateKey：
   * 读者若在这个窗口里自己去设置页贴了新钥匙（noticeSidecarTooOld 指的路
   * 正是这个），旧钥匙的 PUT 不许再落进 llm.json 把它盖掉——发现已被清空
   * 或换过就整场退出。404/405 或 stale：指路停再启动，不再对着旧服务锤 45 秒。
   * 自动路径绝不杀非本插件拉起的进程；设置页「停止」才按端口停。 */
  async migrateKeyOut() {
    if (this.migrating) return;
    this.migrating = true;
    try {
      const t0 = Date.now();
      let warnedOld = false;
      for (; ; ) {
        const key = this.migrateKey;
        if (!key) return;
        if (this.sidecar.snapshot().phase === "stale") {
          if (!warnedOld) new import_obsidian6.Notice(t().noticeSidecarTooOld);
          return;
        }
        let llm;
        try {
          llm = await this.sidecarPutKey(key, this.settings.baseUrl, key);
        } catch (e) {
          const status = e instanceof ApiError ? e.status : 0;
          if (status === 404 || status === 405) {
            new import_obsidian6.Notice(t().noticeSidecarTooOld);
            return;
          }
          if (Date.now() - t0 > 45e3) {
            new import_obsidian6.Notice(t().noticeKeyMigrateTimeout);
            return;
          }
          await new Promise((r) => setTimeout(r, 2e3));
          continue;
        }
        if (llm === null || this.migrateKey !== key) return;
        break;
      }
      this.migrateKey = "";
      await this.saveSettings();
      new import_obsidian6.Notice(t().noticeKeyMigrated);
    } finally {
      this.migrating = false;
    }
  }
  stopSidecar() {
    return this.sidecar.stopListen(this.settings.sidecarUrl);
  }
  /** 设置页 PUT 失败后的内存暂存，版本对齐后再写一次。不落 data.json。 */
  async flushPendingKey() {
    const key = this.pendingPutKey;
    if (!key) return;
    if (this.sidecar.snapshot().phase !== "running") return;
    try {
      const llm = await this.sidecarPutKey(key, this.settings.baseUrl);
      if (!llm || this.pendingPutKey !== key) return;
      this.pendingPutKey = "";
      this.migrateKey = "";
      await this.saveSettings();
      new import_obsidian6.Notice(t().noticeKeySaved);
      this.refreshPenViews();
    } catch (e) {
    }
  }
  /** 钥匙 PUT 的唯一通道：串行 + 迁移方落地前重读。
   *
   * 迁移循环和设置页共用这一条队列，谁的 PUT 都插不进另一方的在途请求
   * （否则后落地的旧钥匙会盖掉读者刚存的新钥匙）；迁移方（onlyIfMigrateIs）
   * 在真正发出前再核一次 migrateKey，已被换掉就返回 null 整场退出。 */
  sidecarPutKey(key, baseUrl, onlyIfMigrateIs) {
    const run2 = this.putChain.then(async () => {
      if (onlyIfMigrateIs !== void 0 && this.migrateKey !== onlyIfMigrateIs) return null;
      return makeApi(this.settings.sidecarUrl).putLlmKey(key, baseUrl);
    });
    this.putChain = run2.catch(() => {
    });
    return run2;
  }
  /** 快模型钥匙的 PUT。走**同一条** putChain：和基座那把串行，谁也盖不掉谁。
   *
   * 两把钥匙落在同一个 llm.json 的两个槽里，后端是读-改-写。并发 PUT 会让
   * 后写的那次拿着旧内容覆盖——串起来就没有这条缝。 */
  sidecarPutFastKey(key, baseUrl) {
    const run2 = this.putChain.then(
      async () => makeApi(this.settings.sidecarUrl).putFastKey(key, baseUrl)
    );
    this.putChain = run2.catch(() => {
    });
    return run2;
  }
  /** 顶栏那枚 Fast Mode 开关的同步口。
   *
   * 和 refreshPenViews 分开的理由同 refreshChips：那个走 probeHealth()，是一次
   * 网络往返。为了刷一个 class 打一发 /v1/health 不值当，而读者完全可能是在
   * 流式期间去设置页改的。 */
  refreshFast() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_PEN)) {
      const view = leaf.view;
      if (view instanceof PenView) view.onFastModeChanged();
    }
  }
  /** 设置页改完自定义泡泡之后叫醒所有打开的面板重画那排按钮。
   *
   * 和上面的 refreshPenViews 分开而不是合并：那个走 probeHealth()，是一次
   * 网络往返；改个泡泡名字不该顺带打一次 /v1/health。视图那边也只重画芯片
   * 一条，不碰底座——读者完全可能是在流式期间去设置页改的。 */
  refreshChips() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_PEN)) {
      const view = leaf.view;
      if (view instanceof PenView) view.onCustomChipsChanged();
    }
  }
  /** 设置页存/清钥匙之后叫醒所有打开的面板重探 llmOk——不然灰着的 chip
   * 要等下一次「用当前选区」才恢复，读者以为没存上。 */
  refreshPenViews() {
    for (const leaf of this.app.workspace.getLeavesOfType(VIEW_TYPE_PEN)) {
      const view = leaf.view;
      if (view instanceof PenView) void view.probeHealth();
    }
  }
  async saveSettings() {
    const run2 = this.saveChain.then(
      () => this.saveData({ settings: persistableSettings(this.settings, this.migrateKey), notes: this.notes, agentPanels: this.agentPanels })
    );
    this.saveChain = run2.catch(() => {
    });
    return run2;
  }
  saveSettingsSoon() {
    if (this.saveTimer !== null) window.clearTimeout(this.saveTimer);
    this.saveTimer = window.setTimeout(() => {
      this.saveTimer = null;
      void this.saveSettings();
    }, 350);
  }
  async pingOrNotice() {
    try {
      await makeApi(this.settings.sidecarUrl).health();
      return true;
    } catch (e) {
      new import_obsidian6.Notice(t().noticeSidecarDown);
      return false;
    }
  }
};

/* nosourcemap */