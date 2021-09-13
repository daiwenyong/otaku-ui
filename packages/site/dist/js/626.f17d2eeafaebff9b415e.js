"use strict";(self.webpackChunkotaku_site=self.webpackChunkotaku_site||[]).push([[626],{"./docs/dev/contributeCode.md":(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var a=t("../../node_modules/react/index.js"),l=t("./src/components/block/block.tsx"),s=(t("./src/components/codeExample/codeExample.tsx"),t("../otaku-ui/src/index.ts"));const c=function(){return a.createElement("div",{className:"b-md-container markdown-body"},a.createElement("h2",null,"基本说明"),a.createElement(l.Z,null,a.createElement("h3",{id:"%E4%B8%80%E4%BA%9B%E5%9F%BA%E6%9C%AC%E8%A7%84%E8%8C%83",tabindex:"-1"},a.createElement("a",{className:"header-anchor",href:"#%E4%B8%80%E4%BA%9B%E5%9F%BA%E6%9C%AC%E8%A7%84%E8%8C%83"},a.createElement("span",{className:"b-anchor"}),a.createElement("span",{"aria-hidden":"false"},"#"))," 一些基本规范"),a.createElement("ul",null,a.createElement("li",null,a.createElement("p",null,"stylelint")),a.createElement("li",null,a.createElement("p",null,"eslint")),a.createElement("li",null,a.createElement("p",null,"commitlint"),a.createElement("p",null,"基于 ",a.createElement("a",{href:"https://www.jianshu.com/p/c7e40dab5b05"},"angular commit 规范")," 实现，或者采用",a.createElement("code",null,"git cz")," or ",a.createElement("code",null," npm run commit")," 提交。"))),a.createElement("h3",{id:"%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95",tabindex:"-1"},a.createElement("a",{className:"header-anchor",href:"#%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95"},a.createElement("span",{className:"b-anchor"}),a.createElement("span",{"aria-hidden":"false"},"#"))," 单元测试"),a.createElement("p",null,"目前没这玩意。"),a.createElement("h3",{id:"%E8%AF%B4%E6%98%8E",tabindex:"-1"},a.createElement("a",{className:"header-anchor",href:"#%E8%AF%B4%E6%98%8E"},a.createElement("span",{className:"b-anchor"}),a.createElement("span",{"aria-hidden":"false"},"#"))," 说明"),a.createElement("p",null,"该组件库基于",a.createElement("code",null,"react hooks、ts、node（一些命令，脚本）、webpack"),"而实现的，所以贡献者需要具备以上能力，不会请参考各个官网进行学习。")),a.createElement("h2",null,"拉取代码"),a.createElement("pre",null,a.createElement("code",{className:"language-bash"},a.createElement(s.TU,{lang:"bash",code:"git clone https://github.com/xxxx.git\n"}))),a.createElement("h2",null,"目录说明"),a.createElement("pre",null,a.createElement("code",{className:"language-bash"},a.createElement(s.TU,{lang:"bash",code:"├── README.md\n├── package-lock.json\n├── package.json\n├── prettier.config.js # prettier 配置文件\n├── scripts # node 相关\n│   ├── command\n│   │   └── create.js\n│   ├── index.js\n│   ├── question\n│   │   └── create.js\n│   ├── template\n│   │   ├── component.art\n│   │   └── style.scss\n│   └── utils\n│       ├── fs.js\n│       └── index.js\n├── src # 组件库组件相关\n│   ├── hooks \n│   │   ├── index.ts\n│   │   ├── useCalendar.ts\n│   │   ├── usePagination.ts\n│   │   └── useToday.ts\n│   ├── index.ts\n│   ├── lib # 各个组件\n│   │   ├── button\n│   │   │   ├── button.tsx # 组件\n│   │   │   ├── demo \n│   │   │   │   └── README.md # 需要渲染的文档\n│   │   │   └── style.scss # 组件的样式\n│   │   ├── grid\n│   │   │   ├── demo\n│   │   │   │   └── README.md\n│   │   │   ├── grid.tsx\n│   │   └── └── style.scss\n│   ├── style # 全局样式\n│   │   ├── reset.scss\n│   │   └── var.scss\n│   └── utils # 内置工具函数\n│       ├── index.ts\n│       └── telport.ts\n├── stylelint.config.js # stylelint 配置文件\n└── tsconfig.json\n"}))))}}}]);