import{d as v,x as w,ah as C,ai as c,E as u,b1 as d,b as a,a8 as n,w as p,f as s,n as l,aC as t,e as m,t as E,c as I,aa as U,aE as A,a3 as B}from"./entry.fd123802.js";import{_ as D}from"./Card.c788cdac.js";import{r as L}from"./slot.83f424be.js";import"./node.f7b4ab96.js";const $=m("span",{class:"absolute inset-0","aria-hidden":"true"},null,-1),z=v({inheritAttrs:!1,__name:"Card",props:{icon:{default:void 0},color:{default:"primary"},to:{default:void 0},target:{default:void 0},title:{default:void 0},ui:{default:()=>({})},class:{default:void 0}},setup(g){const f=w(),h={wrapper:"relative group overflow-hidden flex items-center rounded-lg",to:"hover:ring-1 hover:ring-[--color-light] dark:hover:ring-[--color-dark] hover:bg-gray-100/50 dark:hover:bg-gray-800/50",icon:{base:"w-6 h-6 mb-4 inline-flex items-center text-[--color-light] dark:text-[--color-dark] pointer-events-none"},body:{base:"flex-1"},externalIcon:{name:f.ui.icons.external,base:"w-4 h-4 absolute right-2 top-2 text-gray-400 dark:text-gray-500 group-hover:text-[--color-light] dark:group-hover:text-[--color-dark]"},title:"text-gray-900 dark:text-white font-semibold text-base my-0",description:"text-[15px] text-gray-500 dark:text-gray-400 mt-1 mb-0"},o=g,{ui:r,attrs:k}=C("content.card",c(o,"ui"),h,c(o,"class"),!0),y=u(()=>{var e;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((e=d[o.color])==null?void 0:e["500"])||o.color}),b=u(()=>{var e;return o.color==="primary"?"rgb(var(--color-primary-DEFAULT))":((e=d[o.color])==null?void 0:e["400"])||o.color});return(e,N)=>{const _=A,i=B,x=D;return a(),n(x,U({class:[t(r).wrapper,e.to&&t(r).to]},t(k),{ui:t(r),style:{"--color-light":t(y),"--color-dark":t(b)}}),{default:p(()=>[e.to?(a(),n(_,{key:0,to:e.to,target:e.target,class:"focus:outline-none",tabindex:"-1"},{default:p(()=>[$]),_:1},8,["to","target"])):s("",!0),e.icon?(a(),n(i,{key:1,name:e.icon,class:l(t(r).icon.base)},null,8,["name","class"])):s("",!0),e.to&&e.target==="_blank"?(a(),n(i,{key:2,name:t(r).externalIcon.name,class:l(t(r).externalIcon.base)},null,8,["name","class"])):s("",!0),m("p",{class:l(t(r).title)},E(e.title),3),e.$slots.default?(a(),I("p",{key:3,class:l(t(r).description)},[L(e.$slots,"default",{unwrap:"p"})],2)):s("",!0)]),_:3},16,["class","ui","style"])}}});export{z as default};
