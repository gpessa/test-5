(this["webpackJsonptest-7"]=this["webpackJsonptest-7"]||[]).push([[0],{101:function(e,t,r){e.exports=r.p+"static/media/icon-error.b95df802.svg"},102:function(e,t,r){e.exports=r.p+"static/media/icon-loader.791f0d34.svg"},104:function(e,t,r){"use strict";r.r(t);var a=r(8),n=r.n(a),o=r(37),s=r.n(o),i=(r(76),r(12));var c=i.a.button`
  background-color: var(--orange);
  border: none;
  border-radius: 50%;
  color: var(--white);
  cursor: pointer;
  font-family: var(--fontSanSerif);
  font-size: ${e=>{switch(e.variant){case"secondary":return"13px";default:return"20px"}}};
  height: ${e=>{switch(e.variant){case"secondary":return"70px";default:return"120px"}}};
  text-transform: uppercase;
  width: ${e=>{switch(e.variant){case"secondary":return"70px";default:return"120px"}}};
  &:hover {
    background-color: var(--darkBrown);
  }
`,d=r(47),l=r.n(d);const u=i.b`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.10, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.10, 1);
  }

  50% {
    transform: scale3d(1.13, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,p=i.a.div.attrs(({src:e})=>({style:{backgroundImage:`url(${e})`,animationDuration:Math.random()+"s"}}))`
  background-color: var(--white);
  background-position: center;
  background-size: cover;
  padding-bottom: 100%;
  width: 100%;

  &.jello {
    animation-name: ${u};
    transform-origin: center;
  }
`,g=i.a.div`
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  overflow: hidden;
`;var m=({src:e})=>{const[t,r]=Object(a.useState)(l.a),o=Object(a.useRef)(null);return Object(a.useEffect)(()=>{const t=new IntersectionObserver(t=>{t.forEach(t=>{var a;(t.intersectionRatio>0||t.isIntersecting)&&(r(e),null===(a=o.current)||void 0===a||a.classList.add("jello"))})},{rootMargin:"70%",threshold:.01});return t.observe(o.current),function(){t.disconnect()}},[e]),n.a.createElement(g,null,n.a.createElement(p,{src:t,ref:o}))},b=r(48),f=r.n(b);const v=i.a.label`
  background-image: url(${f.a});
  background-position: center;
  background-size: 90%;
  border: 3px dashed var(--brown);
  border-radius: 50%;
  margin: 10px;
  overflow: hidden;
  transition: border-color 0.2s;
  width: 100%;

  &:hover,
  &.UploadContainer--hover {
    border: 6px dashed var(--orange);
  }
`,h=i.a.input`
  bottom: 0;
  cursor: pointer;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;var w=({onChange:e})=>{const t=Object(a.useRef)(null),r=()=>{var e;null===(e=t.current)||void 0===e||e.classList.add("UploadContainer--hover")},o=()=>{var e;null===(e=t.current)||void 0===e||e.classList.remove("UploadContainer--hover")};return Object(a.useEffect)(()=>{const e=t.current;if(null!==e)return e.addEventListener("dragenter",r),e.addEventListener("dragleave",o),e.addEventListener("drop",o),()=>{e.removeEventListener("dragenter",r),e.removeEventListener("dragleave",o),e.removeEventListener("drop",o)}}),n.a.createElement(v,{ref:t},n.a.createElement(h,{type:"file",multiple:!1,onChange:t=>{const{files:r}=t.target;null!==r&&e(r[0])},accept:"image/*"}))},x=r(49),E=r.n(x),k=r(50),y=r.n(k);const j=i.b`
	0% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
		transform: translate(-50%, -50%) scale(0.85);
	}
	70% {
		box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
		transform: translate(-50%, -50%) scale(1);
	}
	100% {
		box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
		transform: translate(-50%, -50%) scale(0.85);
  }
`,O=i.a.div`
  animation: ${j} 2s linear infinite;
  background-color: var(--white);
  border: 25px solid var(--darkBrown);
  border-radius: 50%;
  display: flex;
  height: 250px;
  left: 50%;
  position: fixed;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 250px;
  justify-content: center;
`,z=i.a.h3`
  transform: translate(0%, -120%);
  white-space: pre-wrap;
  text-align: center;
  color: var(--orange);
  font-size: 60px;
  line-height: 1;
  margin: 0;
  padding: 0;
  position: absolute;

  @media only screen and (min-width: 768px) {
    transform: translate(-50%, -50%) rotate(-25deg);
    transform-origin: center;
    top: 50%;
    left: 50%;
    white-space: nowrap;
    
    &::after {
      background: var(--black);
      content: '';
      display: block;
      height: 3px;
      width: 100%;
    }
  }
`,C=Object(i.a)(c)`
  background-image: url(${y.a});
  background-size: 80%;
  background-position: center;
  font-size: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-50%, 50%);
  z-index: 1;
`,L=Object(i.a)(c)`
  background-image: url(${E.a});
  background-size: 80%;
  background-position: center;
  font-size: 0;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, 50%);
  z-index: 1;
`;var $=({title:e,children:t,onBack:r,onNext:a})=>n.a.createElement(O,null,r&&n.a.createElement(C,{variant:"secondary",onClick:()=>r()},"Previous"),e&&n.a.createElement(z,null,e),t,a&&n.a.createElement(L,{onClick:()=>a()},"Next"));const I=i.a.h1`
  background: var(--white);
  border-radius: 40px;
  bottom: 30px;
  display: inline-flex;
  height: 60px;
  line-height: 56px;
  margin: 0;
  padding: 0 41px;
  position: fixed;
  right: 30px;
  z-index: 1;
`,B=Object(i.a)(c)`
  margin-left: 20px;
  margin-right: -10px;
  margin-top: -5px;
`,R=i.a.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: space-between;

  & > * {
    width: 41%;
    margin-top: 4%;

    @media only screen and (min-width: 768px) {
      margin: 0;
      box-sizing: border-box;
      width: 22%;
      margin-top: 4%;
    }
  }
`;var S=({results:e,breed:t,onReset:r})=>n.a.createElement("div",null,n.a.createElement(I,null,t,n.a.createElement(B,{onClick:r,variant:"secondary"},"Cancel")),n.a.createElement(R,null,e.map(e=>n.a.createElement(m,{key:e,src:e}))));var U=i.a.div.attrs(({src:e})=>({style:{backgroundImage:`url(${e})`}}))`
  width: 100%;
  background-size: cover;
  border-radius: 50%;
`,D=r(36),N=r(17),P=r(51);r(103);var M=function(){var e;return t=>new Promise(async(r,a)=>{e||(e=await P.a());const n=new Image;n.addEventListener("load",(async function(){try{const[{className:t}]=await e.classify(n);r(t)}catch(t){a(t)}}),!1),n.addEventListener("error",(function(){a(new Error("Cannot load image"))}),!1),n.src=t})}();var W=async e=>{const t=await fetch(`https://dog.ceo/api/breed/${e}/images`),{message:r}=await t.json();if(!t.ok)throw new Error(r);return r};const J={step:"upload"},V=Object(D.b)("dog/classify",async(e,{getState:t,rejectWithValue:r})=>{const{preview:a}=t().dog;let n,o;try{n=await M(a),o=await W(n)}catch({message:s}){return r(s)}return{breed:n,results:o}}),{reducer:q,...A}=Object(D.c)({name:"dog",initialState:J,reducers:{reset:()=>J,setImage:(e,{payload:t})=>({step:"preview",preview:t})},extraReducers:e=>{e.addCase(V.pending,e=>({...e,step:"loading"})),e.addCase(V.fulfilled,(e,{payload:{breed:t,results:r}})=>({...e,results:r,breed:t,step:"results"})),e.addCase(V.rejected,(e,{payload:t})=>({...e,error:t,step:"error"}))}}),F={...A.actions,classify:V};var G=r(23);const H=Object(N.c)({dog:q}),K=Object(D.a)({reducer:H});var Q=K;var T=()=>{const e=Object(G.b)();return{step:Object(G.c)(e=>e.dog.step),breed:Object(G.c)(e=>e.dog.breed),error:Object(G.c)(e=>e.dog.error),preview:Object(G.c)(e=>e.dog.preview),results:Object(G.c)(e=>e.dog.results),reset:()=>e(F.reset()),setImage:t=>{const r=URL.createObjectURL(t);e(F.setImage(r))},searchPictures:()=>e(F.classify())}};var X=()=>{const{step:e,error:t,reset:a,setImage:o,searchPictures:s,preview:i,results:c,breed:d}=T();switch(e){case"error":return n.a.createElement($,{title:t,onBack:a},n.a.createElement(U,{src:r(101)}));case"loading":return n.a.createElement($,{title:"Loading the puppies..."},n.a.createElement(U,{src:r(102)}));case"upload":return n.a.createElement($,{title:"Drag & Drop an image!"},n.a.createElement(w,{onChange:o}));case"preview":return n.a.createElement($,{title:"Do you want to proceed?",onNext:s,onBack:a},n.a.createElement(U,{src:i}));case"results":return n.a.createElement(S,{results:c,breed:d,onReset:a})}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(n.a.createElement(G.a,{store:Q},n.a.createElement(n.a.StrictMode,null,n.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(e=>{e.unregister()}).catch(e=>{console.error(e.message)})},47:function(e,t,r){e.exports=r.p+"static/media/icon-image.083e2d25.svg"},48:function(e,t,r){e.exports=r.p+"static/media/icon-upload.4fd60528.svg"},49:function(e,t,r){e.exports=r.p+"static/media/icon-next.f5ca4058.svg"},50:function(e,t,r){e.exports=r.p+"static/media/icon-back.25b103fc.svg"},71:function(e,t,r){e.exports=r(104)},76:function(e,t,r){},80:function(e,t){},81:function(e,t){},89:function(e,t){},95:function(e,t){},96:function(e,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.ac1908a0.chunk.js.map