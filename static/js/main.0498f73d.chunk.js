(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),i=a.n(r),o=(a(13),a(14),function(e){var t=e.children;return c.a.createElement("div",{className:"container"},t)}),l=a(3),s=a(4),u=a(5),m=a(7),d=a(6),f=function(e){var t=e.options,a=e.total,n=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,t.map((function(e){return c.a.createElement("span",{key:e[0],className:"feedback-text"},e[0],": ",e[1])})),c.a.createElement("span",{className:"feedback-text"},"Total: ",a),n>0&&c.a.createElement("span",{className:"feedback-text"},"Positive feedback: ",n,"%"))},b=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return c.a.createElement("button",{key:e,name:e,className:"feedback-btn",type:"button",onClick:a},e.charAt(0).toUpperCase()+e.slice(1))}))},p=function(e){var t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("h2",{className:"feedback-title"},t),c.a.createElement("section",null,a))};p.defaultProps={title:""};var v=p,k=function(e){var t=e.message;return c.a.createElement("h3",null,t)},E=(a(15),function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.initialGood,neutral:e.props.initialNeutral,bad:e.props.initialBad},e.btnIncrement=function(t){var a=t.currentTarget.name;e.setState((function(e){return Object(l.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+=t}),0)},e.countPositiveFeedbackPercentage=function(){return Math.ceil(e.state.good/e.countTotalFeedback()*100)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.countTotalFeedback(),t=this.countPositiveFeedbackPercentage();return c.a.createElement("div",{className:"feedback"},c.a.createElement(v,{title:"Please leave feedback"},c.a.createElement(b,{options:Object.keys(this.state),onLeaveFeedback:this.btnIncrement})),c.a.createElement(v,{title:"Statistics"},e>0?c.a.createElement(f,{options:Object.entries(this.state),total:e,positivePercentage:t}):c.a.createElement(k,{message:"No feedback given"})))}}]),a}(n.Component));E.defaultProps={initialGood:0,initialNeutral:0,initialBad:0};var h=E,g=function(){return c.a.createElement(o,null,c.a.createElement(h,null))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.0498f73d.chunk.js.map