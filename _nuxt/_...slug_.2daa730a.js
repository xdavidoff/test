import{d as U,ah as I,ai as h,b as r,c as d,n as c,aC as e,a9 as _,ac as P,t as $,f as m,e as f,g as C,F as B,a7 as M,a8 as k,aa as w,a3 as A,ag as ie,w as S,aE as le,k as ce,ad as ue,aF as de,af as Y,a4 as O,E as z,aG as pe,al as N,x as q,aH as ge,aI as me,r as T,M as se,aJ as ve,aK as fe,s as ne,u as he,aL as be,aM as Z,aN as ke,aO as ye,ao as ee,aP as te,aQ as _e,aR as we,q as ae,aS as xe}from"./entry.fd123802.js";import $e from"./ContentRenderer.eae7b549.js";import"./ContentRendererMarkdown.vue.89eb7a78.js";import"./MDCRenderer.b8dd1a85.js";const Ce={class:"flex flex-col lg:flex-row items-start gap-6"},Ue={class:"flex-1"},Ie=U({inheritAttrs:!1,__name:"PageHeader",props:{headline:{default:void 0},title:{default:""},description:{default:""},icon:{default:void 0},links:{default:()=>[]},ui:{default:()=>({})},class:{default:void 0}},setup(a){const o={wrapper:"relative border-b border-gray-200 dark:border-gray-800 py-8",container:"flex flex-col lg:flex-row lg:items-center lg:justify-between",headline:"mb-4 text-sm/6 font-semibold text-primary flex items-center gap-1.5",title:"text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight",description:"mt-4 text-lg text-gray-500 dark:text-gray-400",icon:{wrapper:"flex",base:"w-10 h-10 flex-shrink-0 text-primary"},links:"flex flex-wrap items-center gap-1.5 mt-4 lg:mt-0"},l=a,{ui:n,attrs:s}=I("page.header",h(l,"ui"),o,h(l,"class"),!0);return(t,i)=>{var p;const u=A,v=ie;return r(),d("div",w({class:e(n).wrapper},e(s)),[t.headline||t.$slots.headline?(r(),d("div",{key:0,class:c(e(n).headline)},[_(t.$slots,"headline",{},()=>[P($(t.headline),1)])],2)):m("",!0),f("div",Ce,[t.icon||t.$slots.icon?(r(),d("div",{key:0,class:c(e(n).icon.wrapper)},[_(t.$slots,"icon",{},()=>[C(u,{name:t.icon,class:c(e(n).icon.base)},null,8,["name","class"])])],2)):m("",!0),f("div",Ue,[f("div",{class:c(e(n).container)},[f("h1",{class:c(e(n).title)},[_(t.$slots,"title",{},()=>[P($(t.title),1)])],2),(p=t.links)!=null&&p.length||t.$slots.links?(r(),d("div",{key:0,class:c(e(n).links)},[_(t.$slots,"links",{},()=>[(r(!0),d(B,null,M(t.links,(b,g)=>(r(),k(v,w({key:g},{...b,target:b.target||"_blank",color:b.color||"white"},{onClick:b.click}),null,16,["onClick"]))),128))])],2)):m("",!0)],2),t.description||t.$slots.description?(r(),d("p",{key:0,class:c(e(n).description)},[_(t.$slots,"description",{},()=>[P($(t.description),1)])],2)):m("",!0),_(t.$slots,"default")])])],16)}}}),Se=U({inheritAttrs:!1,__name:"DocsSurroundLink",props:{link:{},icon:{},ui:{},class:{}},setup(a){const o={wrapper:"block px-6 py-8 border not-prose rounded-lg border-gray-200 dark:border-gray-800 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 group",icon:{wrapper:"inline-flex items-center rounded-full p-1.5 bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 ring-1 ring-gray-300 dark:ring-gray-700 mb-4 group-hover:ring-primary/50",base:"w-5 h-5 text-gray-900 dark:text-white group-hover:text-primary"},title:"font-medium text-gray-900 dark:text-white text-[15px] mb-1",description:"text-sm font-normal text-gray-500 dark:text-gray-400 line-clamp-2"},l=a,{ui:n,attrs:s}=I("docs.surround.link",h(l,"ui"),o,h(l,"class"),!0);return(t,i)=>{const u=A,v=le;return r(),k(v,w({to:t.link._path,class:e(n).wrapper},e(s)),{default:S(()=>[t.icon||t.link.icon?(r(),d("div",{key:0,class:c(e(n).icon.wrapper)},[C(u,{name:t.icon||t.link.icon,class:c(e(n).icon.base)},null,8,["name","class"])],2)):m("",!0),f("p",{class:c(e(n).title)},$(t.link.title),3),f("p",{class:c(e(n).description)},$(t.link.description),3)]),_:1},16,["to","class"])}}}),ze={key:1,class:"hidden sm:block"},Ae=U({inheritAttrs:!1,__name:"DocsSurround",props:{surround:{},ui:{},class:{}},setup(a){const o={wrapper:"grid gap-8 sm:grid-cols-2",icon:{prev:"i-heroicons-arrow-left-20-solid",next:"i-heroicons-arrow-right-20-solid"},link:{}},l=a,{ui:n,attrs:s}=I("docs.surround",h(l,"ui"),o,h(l,"class"),!0),[t,i]=l.surround||[];return(u,v)=>{const p=Se;return r(),d("div",w({class:e(n).wrapper},e(s)),[e(t)?(r(),k(p,{key:0,link:e(t),ui:e(n).link,icon:e(n).icon.prev},null,8,["link","ui","icon"])):(r(),d("span",ze," ")),e(i)?(r(),k(p,{key:2,link:e(i),ui:e(n).link,icon:e(n).icon.next,class:"text-right"},null,8,["link","ui","icon"])):m("",!0)],16)}}}),De=U({inheritAttrs:!1,__name:"PageBody",props:{prose:{type:Boolean,default:!1},ui:{default:()=>({})},class:{default:void 0}},setup(a){const o={wrapper:"mt-8 pb-24",prose:"prose prose-primary dark:prose-invert max-w-none"},l=a,{ui:n,attrs:s}=I("page.body",h(l,"ui"),o,h(l,"class"),!0);return(t,i)=>(r(),d("div",w({class:[e(n).wrapper,t.prose&&e(n).prose]},e(s)),[_(t.$slots,"default")],16))}}),Pe=ue(Y.ui.strategy,Y.ui.divider,de),Le=U({components:{UIcon:A,UAvatar:O},inheritAttrs:!1,props:{label:{type:String,default:null},icon:{type:String,default:null},avatar:{type:Object,default:null},orientation:{type:String,default:"horizontal",validator:a=>["horizontal","vertical"].includes(a)},type:{type:String,default:"solid",validator:a=>["solid","dotted","dashed"].includes(a)},class:{type:[String,Object,Array],default:void 0},ui:{type:Object,default:void 0}},setup(a){const{ui:o,attrs:l}=I("divider",h(a,"ui"),Pe),n=z(()=>a.orientation==="horizontal"),s=z(()=>pe(N(o.value.wrapper.base,n.value?o.value.wrapper.horizontal:o.value.wrapper.vertical),a.class)),t=z(()=>N(o.value.container.base,n.value?o.value.container.horizontal:o.value.container.vertical)),i=z(()=>{const u={solid:"border-solid",dotted:"border-dotted",dashed:"border-dashed"}[a.type];return N(o.value.border.base,n.value?o.value.border.horizontal:o.value.border.vertical,n.value?o.value.border.size.horizontal:o.value.border.size.vertical,u)});return{ui:o,attrs:l,wrapperClass:s,containerClass:t,borderClass:i}}});function Te(a,o,l,n,s,t){const i=A,u=O;return r(),d("div",w({class:a.wrapperClass},a.attrs),[f("div",{class:c(a.borderClass)},null,2),a.label||a.icon||a.avatar||a.$slots.default?(r(),d(B,{key:0},[f("div",{class:c(a.containerClass)},[_(a.$slots,"default",{},()=>[a.label?(r(),d("span",{key:0,class:c(a.ui.label)},$(a.label),3)):a.icon?(r(),k(i,{key:1,name:a.icon,class:c(a.ui.icon.base)},null,8,["name","class"])):a.avatar?(r(),k(u,w({key:2},{size:a.ui.avatar.size,...a.avatar},{class:a.ui.avatar.base}),null,16,["class"])):m("",!0)])],2),f("div",{class:c(a.borderClass)},null,2)],64)):m("",!0)],16)}const Be=ce(Le,[["render",Te]]),He=U({inheritAttrs:!1,__name:"PageLinks",props:{title:{},links:{},ui:{},class:{}},setup(a){const o=q(),l={wrapper:"space-y-3",title:"text-sm/6 font-semibold flex items-center gap-1.5",container:"space-y-3 lg:space-y-1.5",base:"flex items-center gap-1.5",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",icon:{base:"w-5 h-5 flex-shrink-0"},avatar:{base:"flex-shrink-0 self-center",size:"2xs"},externalIcon:{name:o.ui.icons.external,base:"w-3 h-3 absolute top-0.5 -right-3.5 text-gray-400 dark:text-gray-500"},label:"text-sm/6 font-medium relative"},n=a,{ui:s,attrs:t}=I("page.links",h(n,"ui"),l,h(n,"class"),!0);return(i,u)=>{const v=A,p=O,b=me;return r(),d("div",w({class:e(s).wrapper},e(t)),[i.title||i.$slots.title?(r(),d("p",{key:0,class:c(e(s).title)},[_(i.$slots,"title",{},()=>[P($(i.title),1)])],2)):m("",!0),f("div",{class:c(e(s).container)},[_(i.$slots,"default",{},()=>[(r(!0),d(B,null,M(i.links,(g,y)=>(r(),k(b,w({key:y},e(ge)(g,["label","icon","iconClass","badge","children"]),{class:e(s).base,"active-class":e(s).active,"inactive-class":e(s).inactive}),{default:S(()=>[g.icon?(r(),k(v,{key:0,name:g.icon,class:c(e(s).icon.base)},null,8,["name","class"])):m("",!0),g.avatar?(r(),k(p,w({key:1},{size:e(s).avatar.size,...g.avatar},{class:e(s).avatar.base}),null,16,["class"])):m("",!0),f("span",{class:c(e(s).label)},[P($(g.label)+" ",1),g.target==="_blank"?(r(),k(v,{key:0,name:e(s).externalIcon.name,class:c(e(s).externalIcon.base)},null,8,["name","class"])):m("",!0)],2)]),_:2},1040,["class","active-class","inactive-class"]))),128))])],2)],16)}}}),Ee=()=>{const a=T(),o=T([]),l=T([]),n=t=>{t.forEach(i=>{const u=i.target.id;i.isIntersecting?o.value=[...o.value,u]:o.value=o.value.filter(v=>v!==u)})},s=t=>{t.forEach(i=>{a.value&&a.value.observe(i)})};return se(o,(t,i)=>{t.length===0?l.value=i:l.value=t}),ve(()=>a.value=new IntersectionObserver(n)),fe(()=>{var t;return(t=a.value)==null?void 0:t.disconnect()}),{visibleHeadings:o,activeHeadings:l,updateHeadings:s}},Ne=["href","onClick"],oe=U({inheritAttrs:!1,__name:"DocsTocLinks",props:{links:{},ui:{},class:{}},emits:["move"],setup(a,{emit:o}){const l={wrapper:"space-y-1",base:"block text-sm/6 truncate",active:"text-primary",inactive:"text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200",depth:"ml-3"},n=a,s=o,t=ne(),i=he(),{activeHeadings:u,updateHeadings:v}=Ee(),{ui:p,attrs:b}=I("docs.toc.links",h(n,"ui"),l,h(n,"class"),!0);se(()=>t.path,()=>{setTimeout(()=>{v([...document.querySelectorAll("h2"),...document.querySelectorAll("h3")])},300)},{immediate:!0});const g=y=>{i.push(`#${y}`),s("move",y)};return(y,H)=>{var L;const E=oe;return(L=y.links)!=null&&L.length?(r(),d("ul",w({key:0,class:e(p).wrapper},e(b)),[(r(!0),d(B,null,M(y.links,x=>(r(),d("li",{key:x.text,class:c([e(p).wrapper,x.depth===3&&e(p).depth])},[f("a",{href:`#${x.id}`,class:c([e(p).base,e(u).includes(x.id)?e(p).active:e(p).inactive]),onClick:be(R=>g(x.id),["prevent"])},$(x.text),11,Ne),x.children?(r(),k(E,{key:0,links:x.children},null,8,["links"])):m("",!0)],2))),128))],16)):m("",!0)}}}),Me=U({inheritAttrs:!1,__name:"DocsToc",props:{title:{default:"Table of Contents"},links:{default:()=>[]},ui:{default:()=>({})},class:{default:void 0}},setup(a){const o=q(),l={wrapper:"sticky top-[--header-height] bg-background/75 backdrop-blur group -mx-4 sm:-mx-6 px-4 sm:px-6 lg:px-4 lg:-mx-4 overflow-y-auto max-h-[calc(100vh-var(--header-height))]",container:{base:"py-3 lg:py-8 border-b border-dashed border-gray-200 dark:border-gray-800 lg:border-0 space-y-3",empty:"lg:py-8 space-y-3"},button:{base:"flex items-center gap-1.5 lg:cursor-text lg:select-text w-full",label:"font-semibold text-sm/6 truncate",trailingIcon:{name:o.ui.icons.chevron,base:"w-5 h-5 ms-auto transform transition-transform duration-200 flex-shrink-0 mr-1.5",active:"text-gray-700 dark:text-gray-200",inactive:"text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 -rotate-90"}},links:{}},n=a,{ui:s,attrs:t}=I("docs.toc",h(n,"ui"),l,h(n,"class"),!0),i=T(!1);return(u,v)=>{var g,y;const p=A,b=oe;return r(),d("nav",w({class:e(s).wrapper},e(t)),[f("div",{class:c([(g=u.links)!=null&&g.length?e(s).container.base:e(s).container.empty])},[_(u.$slots,"top"),(y=u.links)!=null&&y.length?(r(),d("button",{key:0,class:c(e(s).button.base),tabindex:"-1",onClick:v[0]||(v[0]=H=>i.value=!e(i))},[f("span",{class:c(e(s).button.label)},$(u.title),3),C(p,{name:e(s).button.trailingIcon.name,class:c(["lg:hidden",[e(s).button.trailingIcon.base,e(i)?e(s).button.trailingIcon.active:e(s).button.trailingIcon.inactive]])},null,8,["name","class"])],2)):m("",!0),C(b,{links:u.links,ui:e(s).links,class:c([e(i)?"lg:block":"hidden lg:block"])},null,8,["links","ui","class"]),_(u.$slots,"bottom")],2)],16)}}}),Oe={key:1},Fe=U({__name:"[...slug]",async setup(a){let o,l;const n=ne(),{toc:s}=q(),{data:t}=([o,l]=Z(()=>te(n.path,()=>ae(n.path).findOne(),"$aROEKgqrzL")),o=await o,l(),o);if(!t.value)throw ke({statusCode:404,statusMessage:"Page not found",fatal:!0});const{data:i}=([o,l]=Z(()=>te(`${n.path}-surround`,()=>ae().where({_extension:"md",navigation:{$ne:!1}}).only(["title","description","_path"]).findSurround(xe(n.path)))),o=await o,l(),o);ye({titleTemplate:"%s - Nuxt UI Pro - Docs template",title:t.value.title,ogTitle:`${t.value.title} - Nuxt UI Pro - Docs template`,description:t.value.description,ogDescription:t.value.description});const u=z(()=>_e(t.value)),v=z(()=>{var p,b,g;return[((p=s==null?void 0:s.bottom)==null?void 0:p.edit)&&{icon:"i-heroicons-pencil-square",label:"Edit this page",to:`${s.bottom.edit}/${(b=t==null?void 0:t.value)==null?void 0:b._file}`,target:"_blank"},...((g=s==null?void 0:s.bottom)==null?void 0:g.links)||[]].filter(Boolean)});return(p,b)=>{const g=Ie,y=$e,H=Ae,E=De,L=Be,x=He,R=Me,re=we;return r(),k(re,null,ee({default:S(()=>[C(g,{title:e(t).title,description:e(t).description,links:e(t).links,headline:e(u)},null,8,["title","description","links","headline"]),C(E,{prose:""},{default:S(()=>{var D;return[e(t).body?(r(),k(y,{key:0,value:e(t)},null,8,["value"])):m("",!0),(D=e(i))!=null&&D.length?(r(),d("hr",Oe)):m("",!0),C(H,{surround:e(i)},null,8,["surround"])]}),_:1})]),_:2},[e(t).toc!==!1?{name:"right",fn:S(()=>{var D,j,V,F;return[C(R,{title:(D=e(s))==null?void 0:D.title,links:(V=(j=e(t).body)==null?void 0:j.toc)==null?void 0:V.links},ee({_:2},[(F=e(s))!=null&&F.bottom?{name:"bottom",fn:S(()=>{var J,K,G,Q,W,X;return[f("div",{class:c(["hidden lg:block space-y-6",{"!mt-6":(G=(K=(J=e(t).body)==null?void 0:J.toc)==null?void 0:K.links)==null?void 0:G.length}])},[(X=(W=(Q=e(t).body)==null?void 0:Q.toc)==null?void 0:W.links)!=null&&X.length?(r(),k(L,{key:0,type:"dashed"})):m("",!0),C(x,{title:e(s).bottom.title,links:e(v)},null,8,["title","links"])],2)]}),key:"0"}:void 0]),1032,["title","links"])]}),key:"0"}:void 0]),1024)}}});export{Fe as default};
