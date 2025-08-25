import{j as e}from"./jsx-runtime-D_zvdyIk.js";import"./iframe-DHw5GgCq.js";import"./preload-helper-D9Z9MdNV.js";const g="_btn_86v4h_1",y="_primary_86v4h_15",v="_secondary_86v4h_19",_="_ghost_86v4h_23",h="_sm_86v4h_28",f="_md_86v4h_31",k="_lg_86v4h_34",t={btn:g,primary:y,secondary:v,ghost:_,sm:h,md:f,lg:k},a=({children:i,variant:c="primary",size:d="md",loading:l=!1,disabled:m,...u})=>{const p=m||l;return e.jsx("button",{className:[t.btn,t[c],t[d]].join(" "),disabled:p,...u,children:l?"Loading…":i})};a.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "ghost"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"ghost"'}]},description:"",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},loading:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}}}};const B={title:"UI/Button",component:a,args:{children:"Click me"},tags:["autodocs"]},s={args:{variant:"primary"}},r={args:{variant:"secondary"}},n={args:{variant:"ghost"}},o={render:()=>e.jsxs("div",{style:{display:"flex",gap:12},children:[e.jsx(a,{size:"sm",onClick:()=>console.log("Small clicked!"),children:"Small"}),e.jsx(a,{size:"md",onClick:()=>console.log("Medium clicked!"),children:"Medium"}),e.jsx(a,{size:"lg",onClick:()=>console.log("Large clicked!"),children:"Large"})]})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary"
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "ghost"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: 12
  }}>
      <Button size="sm" onClick={() => console.log("Small clicked!")}>
        Small
      </Button>
      <Button size="md" onClick={() => console.log("Medium clicked!")}>
        Medium
      </Button>
      <Button size="lg" onClick={() => console.log("Large clicked!")}>
        Large
      </Button>
    </div>
}`,...o.parameters?.docs?.source}}};const b=["Primary","Secondary","Ghost","Sizes"];export{n as Ghost,s as Primary,r as Secondary,o as Sizes,b as __namedExportsOrder,B as default};
