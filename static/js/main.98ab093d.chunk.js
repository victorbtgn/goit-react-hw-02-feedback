(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(2),l=a.n(r),o=(a(13),a(14),function(e){var t=e.children;return c.a.createElement("div",{className:"container"},t)}),i=a(3),s=a(4),u=a(5),d=a(7),m=a(6),b=function(e){var t=e.good,a=e.neutral,n=e.bad,r=e.total,l=e.positivePercentage;return c.a.createElement(c.a.Fragment,null,c.a.createElement("span",{className:"feedback-text"},"Good: ",t),c.a.createElement("span",{className:"feedback-text"},"Neutral: ",a),c.a.createElement("span",{className:"feedback-text"},"Bad: ",n),c.a.createElement("span",{className:"feedback-text"},"Total: ",r),l>0&&c.a.createElement("span",{className:"feedback-text"},"Positive feedback: ",l,"%"))},f=function(e){var t=e.options,a=e.onLeaveFeedback;return t.map((function(e){return c.a.createElement("button",{key:e,name:e,className:"feedback-btn",type:"button",onClick:a},e.charAt(0).toUpperCase()+e.slice(1))}))},p=function(e){var t=e.title,a=e.children;return c.a.createElement(c.a.Fragment,null,t&&c.a.createElement("h2",{className:"feedback-title"},t),c.a.createElement("section",null,a))};p.defaultProps={title:""};var k=p,v=function(e){var t=e.message;return c.a.createElement("h3",null,t)},E=(a(15),function(e){Object(d.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={good:e.props.initialGood,neutral:e.props.initialNeutral,bad:e.props.initialBad},e.btnIncrement=function(t){var a=t.currentTarget.name;e.setState((function(e){return Object(i.a)({},a,e[a]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositiveFeedbackPercentage=function(){return Math.ceil(e.state.good/e.countTotalFeedback()*100)},e}return Object(u.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad,r=this.countTotalFeedback(),l=this.countPositiveFeedbackPercentage();return c.a.createElement("div",{className:"feedback"},c.a.createElement(k,{title:"Please leave feedback"},c.a.createElement(f,{options:Object.keys(this.state),onLeaveFeedback:this.btnIncrement})),c.a.createElement(k,{title:"Statistics"},r>0?c.a.createElement(b,{good:t,neutral:a,bad:n,total:r,positivePercentage:l}):c.a.createElement(v,{message:"No feedback given"})))}}]),a}(n.Component));E.defaultProps={initialGood:0,initialNeutral:0,initialBad:0};var g=E,h=function(){return c.a.createElement(o,null,c.a.createElement(g,null))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.98ab093d.chunk.js.map