import{C as a,h as e}from"./preact.4b3dbaf5.js";import{c as l}from"./preact-redux.esm.03ebc624.js";import"./index.8731960a.js";import{stripWysiwyg as m,resizeImage as _}from"./util.0ea43082.js";import"./index.3d5aa0a7.js";import"./_commonjsHelpers.de833af9.js";import"./index.08ff3111.js";var o,s;const n=({meta:r})=>({meta:r});let y=(o=l(n),o(s=class extends a{render(){let{meta:t={}}=this.props,p=t.image||"",i=m(t.description)||"";return e("div",{class:"plp__hero"},e("div",{class:"plp__hero__image img-gradient",style:{backgroundImage:`url(${_(p)})`}}),e("div",{class:"plp__hero__content"},e("h1",{class:"h2 plp__hero__content__title"},t.title),e("p",{class:"p2",dangerouslySetInnerHTML:{__html:i}})))}})||s);export{y as default};