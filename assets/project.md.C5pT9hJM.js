import{d as u,c as n,g as e,F as i,D as l,o as s,t as c,n as p,e as h}from"./chunks/framework.D5O521IJ.js";const f={class:"max-w-300 mx-auto"},_=["id"],g=["href","title"],v=["src"],x={class:"flex-auto"},j={class:"text-normal pl-0.2"},k=["innerHTML"],w=JSON.parse('{"title":"玩意","description":"","frontmatter":{"layout":"page","title":"玩意","projects":{"前端":[{"name":"反兜","link":"https://fandle.netlify.app/","desc":"汉字反切 Wordle","icon":"/icon/fandle.svg"},{"name":"谜语人","link":"https://ridiculer.netlify.app/","desc":"自然语言文本加噪","icon":"/icon/riddler.svg"}],"输入法":[{"name":"JumpType","link":"https://github.com/alephpi/JumpType","desc":"基于发音的英文输入方案","icon":"/icon/rime.png"},{"name":"SauterTaper","link":"https://github.com/alephpi/SauterTaper","desc":"基于发音的法文输入方案","icon":"/icon/rime.png"}],"古琴":[{"name":"天书","link":"https://github.com/alephpi/jianzipu","desc":"减字谱电子化方案"}]}},"headers":[],"relativePath":"project.md","filePath":"project.md"}'),b={name:"project.md"},C=u({...b,setup(y){function d(a){return a.toLowerCase().replace(/[\s\\\/]+/g,"-")}return(a,r)=>(s(),n("div",null,[r[0]||(r[0]=e("div",{class:"VPDoc vp-doc text-center"},[e("h1",null,"玩意")],-1)),e("div",f,[(s(!0),n(i,null,l(Object.keys(a.$frontmatter.projects),o=>(s(),n("div",{key:o},[e("h4",{id:d(o),class:"mt-10 mb-2 font-bold text-center op75"},c(o),9,_),e("div",{class:p(["project-grid py-2 max-w-500 w-max mx-auto",a.$frontmatter.projects[o].length===1?"flex":""]),grid:"~ cols-1 md:cols-2 gap-4"},[(s(!0),n(i,null,l(a.$frontmatter.projects[o],(t,m)=>(s(),n("a",{key:m,class:p(["item relative flex items-center",t.link?"":"opacity-0 pointer-events-none h-0 -mt-8 -mb-4"]),href:t.link,target:"_blank",title:t.name},[t.icon?(s(),n("img",{key:0,class:"p-3 w-15 h-15",src:t.icon,alt:"broken"},null,8,v)):h("",!0),e("div",x,[e("div",j,c(t.name),1),e("div",{class:"desc text-sm opacity-50 font-normal",innerHTML:t.desc},null,8,k)])],10,g))),128))],2)]))),128))])]))}});export{w as __pageData,C as default};