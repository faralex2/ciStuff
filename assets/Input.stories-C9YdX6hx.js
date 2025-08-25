import{j as r}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DHw5GgCq.js";import"./preload-helper-D9Z9MdNV.js";const p="_wrap_1umbc_1",m="_label_1umbc_5",d="_input_1umbc_8",u="_error_1umbc_17",_="_hint_1umbc_20",e={wrap:p,label:m,input:d,error:u,hint:_},o=({label:t,error:n,id:i,...l})=>{const c=i||`in_${Math.random().toString(36).slice(2,8)}`;return r.jsxs("label",{className:e.wrap,children:[t&&r.jsx("span",{className:e.label,children:t}),r.jsx("input",{id:c,className:[e.input,n?e.error:""].join(" "),...l}),n&&r.jsx("span",{className:e.hint,children:n})]})};o.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:""},error:{required:!1,tsType:{name:"string"},description:""}}};const x={title:"UI/Input",component:o},s={args:{label:"Username",placeholder:"Type..."}},a={args:{label:"Email",error:"Invalid email"}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Username",
    placeholder: "Type..."
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email",
    error: "Invalid email"
  }
}`,...a.parameters?.docs?.source}}};const I=["Default","WithError"];export{s as Default,a as WithError,I as __namedExportsOrder,x as default};
