(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),r=n(7),s=n.n(r),l=n(1),c=n(2),i=n(4),u=n(3),m=n(8),g=n.n(m),h=(n(16),n(5)),p=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={minL:1,goods:Object(h.a)(t.props.goods)},t.mixLength=function(e){var n=e.target.value;t.setState((function(t){return{minL:n}}))},t.reverse=function(){t.setState((function(t){return{goods:t.goods.reverse()}}))},t.sortAlphabetically=function(){t.setState((function(t){return{goods:t.goods.sort()}}))},t.sortByLength=function(){t.setState((function(t){return{goods:t.goods.sort((function(t,e){return e.length-t.length}))}}))},t}return Object(c.a)(n,[{key:"render",value:function(){for(var t=this,e=[],n=1;n<=10;n)e.push(o.a.createElement("option",{value:n,key:n},n)),n+=1;return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:"list-group"},this.state.goods.filter((function(e){return e.length>=t.state.minL})).map((function(t){return o.a.createElement("li",{key:t,className:"list-group-item"},t)}))),o.a.createElement("div",{className:"btn-group"},o.a.createElement("button",{className:"btn btn-light",type:"button",onClick:this.reverse},"Reverse"),o.a.createElement("button",{className:"btn btn-light",type:"button",onClick:this.sortAlphabetically},"Sort alphabetically"),o.a.createElement("br",null),o.a.createElement("button",{className:"btn btn-light",type:"button",onClick:this.sortByLength},"Sort by length"),o.a.createElement("select",{className:"btn dropdown-toggle btn-light",name:"minL",value:this.state.minL,onChange:this.mixLength},e),o.a.createElement("button",{className:"btn btn-light",type:"button",onClick:function(){t.setState({minL:1,goods:Object(h.a)(t.props.goods)})}},"Reset")))}}]),n}(o.a.Component),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],d=function(t){Object(i.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))).state={goods:b,show:!1},t.start=function(){t.setState((function(t){return{show:!t.show}}))},t}return Object(c.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),o.a.createElement("button",{className:"btn btn-danger",type:"button",onClick:this.start,style:this.state.show?{display:"none"}:{display:"initial"}},"Start"),o.a.createElement("div",null,this.state.show?o.a.createElement(p,{goods:this.state.goods}):""))}}]),n}(o.a.Component);p.propTypes={goods:g.a.instanceOf(Array).isRequired},s.a.render(o.a.createElement(d,null),document.getElementById("root"))},9:function(t,e,n){t.exports=n(17)}},[[9,1,2]]]);
//# sourceMappingURL=main.afdeaf65.chunk.js.map