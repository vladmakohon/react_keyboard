(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var s=n(3),a=n.n(s),c=n(4),r=n(5),o=n(7),u=n(6),i=n(1),p=n.n(i),d=n(0),y=function(e){Object(o.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={pressedKey:""},e.handleDocumentKeyUp=function(t){e.setState({pressedKey:t.key})},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.handleDocumentKeyUp)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.handleDocumentKeyUp)}},{key:"render",value:function(){var e=this.state.pressedKey?"The last pressed key is [".concat(this.state.pressedKey,"]"):"Nothing was pressed yet";return Object(d.jsx)("div",{className:"App",children:Object(d.jsx)("p",{className:"App__message",children:e})})}}]),n}(p.a.PureComponent);n(13);a.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.eb6b4f4a.chunk.js.map