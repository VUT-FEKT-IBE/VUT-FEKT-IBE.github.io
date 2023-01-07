import{v as I}from"./index-b7d24bd5.js";import{_ as S,u as g,Q as N}from"./UploadJsonComponent-f26af479.js";import{u as Q,s as p,o as c,c as u,a,b as o,e as m,V as M,Q as x,p as j,g as q}from"./viewer-56c5588e.js";const v=l=>(j("data-v-accd55b2"),l=l(),q(),l),O={class:"question-control"},U={class:"controls-container"},V=v(()=>a("span",{class:"but-text"},"Previous",-1)),B=[V],D={class:"slider-container"},L=["max","disabled"],$={class:"slider-index"},E=v(()=>a("span",{class:"but-text"},"Next",-1)),J=[E],T={key:0,class:"data-container"},P=v(()=>a("span",{class:"but-text"},"Results",-1)),z=[P],A=v(()=>a("span",{class:"but-text"},"Download stats",-1)),F=[A],G={__name:"QuestionControlComponent",setup(l){const n=g(N),i=Q(),{index:_}=p(i),{viewMode:f}=p(i),{editMode:b}=p(i),{questions:r}=p(i);function h(){const e=r.value[_.value].id;n.save({id:e,showResults:!0}),f.value||(n.find(e).score===n.find(e).maxScore?n.save({id:e,numCorrect:Number(n.find(e).numCorrect)+1}):n.save({id:e,numIncorrect:Number(n.find(e).numIncorrect)+1}))}function C(){const e=r.value[_.value].id;n.find(e).showResults?i.next():h()}function w(){i.previous()}function y(){let e=JSON.parse(JSON.stringify(n.all()));e.forEach(function(t,s){e[s]={number:t.number,numCorrect:t.numCorrect,numIncorrect:t.numIncorrect}}),e=e.sort((t,s)=>t.number-s.number),k(JSON.stringify(e,null,2),"text/json","stats.json")}function k(e,t,s){var R=new Blob([e],{type:t}),d=document.createElement("a");d.download=s,d.href=URL.createObjectURL(R),d.dataset.downloadurl=[t,d.download,d.href].join(":"),d.style.display="none",document.body.appendChild(d),d.click(),document.body.removeChild(d),setTimeout(function(){URL.revokeObjectURL(d.href)},1500)}return(e,t)=>(c(),u("div",O,[a("div",U,[o(b)?m("",!0):(c(),u("button",{key:0,class:"button",onClick:t[0]||(t[0]=s=>w())},B)),a("div",D,[M(a("input",{class:"slider",type:"range",min:"0",max:o(r).length-1,step:"1","onUpdate:modelValue":t[1]||(t[1]=s=>o(i).index=s),disabled:!o(i).viewMode&&!o(i).editMode},null,8,L),[[I,o(i).index]]),a("div",$,x(1+Number(o(_)))+"/"+x(o(r).length),1)]),o(b)?m("",!0):(c(),u("button",{key:1,class:"button",onClick:t[2]||(t[2]=s=>C())},J))]),!o(f)&&!o(b)?(c(),u("div",T,[o(n).find(o(r)[o(_)].id).showResults?m("",!0):(c(),u("button",{key:0,class:"button data",onClick:t[3]||(t[3]=s=>h())},z)),a("button",{class:"button data",onClick:t[4]||(t[4]=s=>y())},F)])):m("",!0)]))}},X=S(G,[["__scopeId","data-v-accd55b2"]]);export{X as Q};
