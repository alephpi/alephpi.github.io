import{ah as Ct,ai as Et,aj as H,f as rt,s as ne,b as re,E as ae,F as ce,d as oe,c as le,m as ue,H as de,t as fe,n as Tt,l as yt,ak as he,al as me,am as ke,o as ye,an as ge,ao as pe,ap as ve,aq as Pt,ar as Bt,as as Nt,at as Rt,au as Gt,av as xe,p as be,G as Te,aw as we,ax as _e,ay as De,az as Se,aA as Ce,aB as Ee,aC as Me}from"./theme.DK6QFBAT.js";import"./framework.CCxIPCIe.js";var Xt={exports:{}};(function(t,o){(function(i,s){t.exports=s()})(Ct,function(){var i="day";return function(s,n,f){var h=function(w){return w.add(4-w.isoWeekday(),i)},v=n.prototype;v.isoWeekYear=function(){return h(this).year()},v.isoWeek=function(w){if(!this.$utils().u(w))return this.add(7*(w-this.isoWeek()),i);var I,E,O,B,P=h(this),u=(I=this.isoWeekYear(),E=this.$u,O=(E?f.utc:f)().year(I).startOf("year"),B=4-O.isoWeekday(),O.isoWeekday()>4&&(B+=7),O.add(B,i));return P.diff(u,"week")+1},v.isoWeekday=function(w){return this.$utils().u(w)?this.day()||7:this.day(this.day()%7?w:w-7)};var Y=v.startOf;v.startOf=function(w,I){var E=this.$utils(),O=!!E.u(I)||I;return E.p(w)==="isoweek"?O?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):Y.bind(this)(w,I)}}})})(Xt);var Ae=Xt.exports;const Le=Et(Ae);var jt={exports:{}};(function(t,o){(function(i,s){t.exports=s()})(Ct,function(){var i={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},s=/(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|YYYY|YY?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,n=/\d\d/,f=/\d\d?/,h=/\d*[^-_:/,()\s\d]+/,v={},Y=function(u){return(u=+u)+(u>68?1900:2e3)},w=function(u){return function(D){this[u]=+D}},I=[/[+-]\d\d:?(\d\d)?|Z/,function(u){(this.zone||(this.zone={})).offset=function(D){if(!D||D==="Z")return 0;var M=D.match(/([+-]|\d\d)/g),A=60*M[1]+(+M[2]||0);return A===0?0:M[0]==="+"?-A:A}(u)}],E=function(u){var D=v[u];return D&&(D.indexOf?D:D.s.concat(D.f))},O=function(u,D){var M,A=v.meridiem;if(A){for(var N=1;N<=24;N+=1)if(u.indexOf(A(N,0,D))>-1){M=N>12;break}}else M=u===(D?"pm":"PM");return M},B={A:[h,function(u){this.afternoon=O(u,!1)}],a:[h,function(u){this.afternoon=O(u,!0)}],S:[/\d/,function(u){this.milliseconds=100*+u}],SS:[n,function(u){this.milliseconds=10*+u}],SSS:[/\d{3}/,function(u){this.milliseconds=+u}],s:[f,w("seconds")],ss:[f,w("seconds")],m:[f,w("minutes")],mm:[f,w("minutes")],H:[f,w("hours")],h:[f,w("hours")],HH:[f,w("hours")],hh:[f,w("hours")],D:[f,w("day")],DD:[n,w("day")],Do:[h,function(u){var D=v.ordinal,M=u.match(/\d+/);if(this.day=M[0],D)for(var A=1;A<=31;A+=1)D(A).replace(/\[|\]/g,"")===u&&(this.day=A)}],M:[f,w("month")],MM:[n,w("month")],MMM:[h,function(u){var D=E("months"),M=(E("monthsShort")||D.map(function(A){return A.slice(0,3)})).indexOf(u)+1;if(M<1)throw new Error;this.month=M%12||M}],MMMM:[h,function(u){var D=E("months").indexOf(u)+1;if(D<1)throw new Error;this.month=D%12||D}],Y:[/[+-]?\d+/,w("year")],YY:[n,function(u){this.year=Y(u)}],YYYY:[/\d{4}/,w("year")],Z:I,ZZ:I};function P(u){var D,M;D=u,M=v&&v.formats;for(var A=(u=D.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(x,p,g){var k=g&&g.toUpperCase();return p||M[g]||i[g]||M[k].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(S,T,b){return T||b.slice(1)})})).match(s),N=A.length,R=0;R<N;R+=1){var U=A[R],q=B[U],G=q&&q[0],y=q&&q[1];A[R]=y?{regex:G,parser:y}:U.replace(/^\[|\]$/g,"")}return function(x){for(var p={},g=0,k=0;g<N;g+=1){var S=A[g];if(typeof S=="string")k+=S.length;else{var T=S.regex,b=S.parser,c=x.slice(k),d=T.exec(c)[0];b.call(p,d),x=x.replace(d,"")}}return function(m){var l=m.afternoon;if(l!==void 0){var a=m.hours;l?a<12&&(m.hours+=12):a===12&&(m.hours=0),delete m.afternoon}}(p),p}}return function(u,D,M){M.p.customParseFormat=!0,u&&u.parseTwoDigitYear&&(Y=u.parseTwoDigitYear);var A=D.prototype,N=A.parse;A.parse=function(R){var U=R.date,q=R.utc,G=R.args;this.$u=q;var y=G[1];if(typeof y=="string"){var x=G[2]===!0,p=G[3]===!0,g=x||p,k=G[2];p&&(k=G[2]),v=this.$locale(),!x&&k&&(v=M.Ls[k]),this.$d=function(c,d,m){try{if(["x","X"].indexOf(d)>-1)return new Date((d==="X"?1e3:1)*c);var l=P(d)(c),a=l.year,e=l.month,C=l.day,r=l.hours,_=l.minutes,z=l.seconds,L=l.milliseconds,et=l.zone,st=new Date,F=C||(a||e?1:st.getDate()),j=a||st.getFullYear(),$=0;a&&!e||($=e>0?e-1:st.getMonth());var it=r||0,lt=_||0,ut=z||0,V=L||0;return et?new Date(Date.UTC(j,$,F,it,lt,ut,V+60*et.offset*1e3)):m?new Date(Date.UTC(j,$,F,it,lt,ut,V)):new Date(j,$,F,it,lt,ut,V)}catch{return new Date("")}}(U,y,q),this.init(),k&&k!==!0&&(this.$L=this.locale(k).$L),g&&U!=this.format(y)&&(this.$d=new Date("")),v={}}else if(y instanceof Array)for(var S=y.length,T=1;T<=S;T+=1){G[1]=y[T-1];var b=M.apply(this,G);if(b.isValid()){this.$d=b.$d,this.$L=b.$L,this.init();break}T===S&&(this.$d=new Date(""))}else N.call(this,R)}}})})(jt);var Ie=jt.exports;const Ye=Et(Ie);var Ut={exports:{}};(function(t,o){(function(i,s){t.exports=s()})(Ct,function(){return function(i,s){var n=s.prototype,f=n.format;n.format=function(h){var v=this,Y=this.$locale();if(!this.isValid())return f.bind(this)(h);var w=this.$utils(),I=(h||"YYYY-MM-DDTHH:mm:ssZ").replace(/\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,function(E){switch(E){case"Q":return Math.ceil((v.$M+1)/3);case"Do":return Y.ordinal(v.$D);case"gggg":return v.weekYear();case"GGGG":return v.isoWeekYear();case"wo":return Y.ordinal(v.week(),"W");case"w":case"ww":return w.s(v.week(),E==="w"?1:2,"0");case"W":case"WW":return w.s(v.isoWeek(),E==="W"?1:2,"0");case"k":case"kk":return w.s(String(v.$H===0?24:v.$H),E==="k"?1:2,"0");case"X":return Math.floor(v.$d.getTime()/1e3);case"x":return v.$d.getTime();case"z":return"["+v.offsetName()+"]";case"zzz":return"["+v.offsetName("long")+"]";default:return E}});return f.bind(this)(I)}}})})(Ut);var Fe=Ut.exports;const We=Et(Fe);var wt=function(){var t=function(b,c,d,m){for(d=d||{},m=b.length;m--;d[b[m]]=c);return d},o=[1,3],i=[1,5],s=[7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],n=[1,32],f=[1,33],h=[1,34],v=[1,35],Y=[1,36],w=[1,37],I=[1,38],E=[1,15],O=[1,16],B=[1,17],P=[1,18],u=[1,19],D=[1,20],M=[1,21],A=[1,22],N=[1,24],R=[1,25],U=[1,26],q=[1,27],G=[1,28],y=[1,30],x=[1,39],p=[1,42],g=[5,7,9,11,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,31,33,34,36,43,48],k={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,gantt:5,document:6,EOF:7,line:8,SPACE:9,statement:10,NL:11,weekday:12,weekday_monday:13,weekday_tuesday:14,weekday_wednesday:15,weekday_thursday:16,weekday_friday:17,weekday_saturday:18,weekday_sunday:19,dateFormat:20,inclusiveEndDates:21,topAxis:22,axisFormat:23,tickInterval:24,excludes:25,includes:26,todayMarker:27,title:28,acc_title:29,acc_title_value:30,acc_descr:31,acc_descr_value:32,acc_descr_multiline_value:33,section:34,clickStatement:35,taskTxt:36,taskData:37,openDirective:38,typeDirective:39,closeDirective:40,":":41,argDirective:42,click:43,callbackname:44,callbackargs:45,href:46,clickStatementDebug:47,open_directive:48,type_directive:49,arg_directive:50,close_directive:51,$accept:0,$end:1},terminals_:{2:"error",5:"gantt",7:"EOF",9:"SPACE",11:"NL",13:"weekday_monday",14:"weekday_tuesday",15:"weekday_wednesday",16:"weekday_thursday",17:"weekday_friday",18:"weekday_saturday",19:"weekday_sunday",20:"dateFormat",21:"inclusiveEndDates",22:"topAxis",23:"axisFormat",24:"tickInterval",25:"excludes",26:"includes",27:"todayMarker",28:"title",29:"acc_title",30:"acc_title_value",31:"acc_descr",32:"acc_descr_value",33:"acc_descr_multiline_value",34:"section",36:"taskTxt",37:"taskData",41:":",43:"click",44:"callbackname",45:"callbackargs",46:"href",48:"open_directive",49:"type_directive",50:"arg_directive",51:"close_directive"},productions_:[0,[3,2],[3,3],[6,0],[6,2],[8,2],[8,1],[8,1],[8,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[12,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,1],[10,2],[10,2],[10,1],[10,1],[10,1],[10,2],[10,1],[4,4],[4,6],[35,2],[35,3],[35,3],[35,4],[35,3],[35,4],[35,2],[47,2],[47,3],[47,3],[47,4],[47,3],[47,4],[47,2],[38,1],[39,1],[42,1],[40,1]],performAction:function(c,d,m,l,a,e,C){var r=e.length-1;switch(a){case 2:return e[r-1];case 3:this.$=[];break;case 4:e[r-1].push(e[r]),this.$=e[r-1];break;case 5:case 6:this.$=e[r];break;case 7:case 8:this.$=[];break;case 9:l.setWeekday("monday");break;case 10:l.setWeekday("tuesday");break;case 11:l.setWeekday("wednesday");break;case 12:l.setWeekday("thursday");break;case 13:l.setWeekday("friday");break;case 14:l.setWeekday("saturday");break;case 15:l.setWeekday("sunday");break;case 16:l.setDateFormat(e[r].substr(11)),this.$=e[r].substr(11);break;case 17:l.enableInclusiveEndDates(),this.$=e[r].substr(18);break;case 18:l.TopAxis(),this.$=e[r].substr(8);break;case 19:l.setAxisFormat(e[r].substr(11)),this.$=e[r].substr(11);break;case 20:l.setTickInterval(e[r].substr(13)),this.$=e[r].substr(13);break;case 21:l.setExcludes(e[r].substr(9)),this.$=e[r].substr(9);break;case 22:l.setIncludes(e[r].substr(9)),this.$=e[r].substr(9);break;case 23:l.setTodayMarker(e[r].substr(12)),this.$=e[r].substr(12);break;case 25:l.setDiagramTitle(e[r].substr(6)),this.$=e[r].substr(6);break;case 26:this.$=e[r].trim(),l.setAccTitle(this.$);break;case 27:case 28:this.$=e[r].trim(),l.setAccDescription(this.$);break;case 29:l.addSection(e[r].substr(8)),this.$=e[r].substr(8);break;case 31:l.addTask(e[r-1],e[r]),this.$="task";break;case 35:this.$=e[r-1],l.setClickEvent(e[r-1],e[r],null);break;case 36:this.$=e[r-2],l.setClickEvent(e[r-2],e[r-1],e[r]);break;case 37:this.$=e[r-2],l.setClickEvent(e[r-2],e[r-1],null),l.setLink(e[r-2],e[r]);break;case 38:this.$=e[r-3],l.setClickEvent(e[r-3],e[r-2],e[r-1]),l.setLink(e[r-3],e[r]);break;case 39:this.$=e[r-2],l.setClickEvent(e[r-2],e[r],null),l.setLink(e[r-2],e[r-1]);break;case 40:this.$=e[r-3],l.setClickEvent(e[r-3],e[r-1],e[r]),l.setLink(e[r-3],e[r-2]);break;case 41:this.$=e[r-1],l.setLink(e[r-1],e[r]);break;case 42:case 48:this.$=e[r-1]+" "+e[r];break;case 43:case 44:case 46:this.$=e[r-2]+" "+e[r-1]+" "+e[r];break;case 45:case 47:this.$=e[r-3]+" "+e[r-2]+" "+e[r-1]+" "+e[r];break;case 49:l.parseDirective("%%{","open_directive");break;case 50:l.parseDirective(e[r],"type_directive");break;case 51:e[r]=e[r].trim().replace(/'/g,'"'),l.parseDirective(e[r],"arg_directive");break;case 52:l.parseDirective("}%%","close_directive","gantt");break}},table:[{3:1,4:2,5:o,38:4,48:i},{1:[3]},{3:6,4:2,5:o,38:4,48:i},t(s,[2,3],{6:7}),{39:8,49:[1,9]},{49:[2,49]},{1:[2,1]},{4:31,7:[1,10],8:11,9:[1,12],10:13,11:[1,14],12:23,13:n,14:f,15:h,16:v,17:Y,18:w,19:I,20:E,21:O,22:B,23:P,24:u,25:D,26:M,27:A,28:N,29:R,31:U,33:q,34:G,35:29,36:y,38:4,43:x,48:i},{40:40,41:[1,41],51:p},t([41,51],[2,50]),t(s,[2,8],{1:[2,2]}),t(s,[2,4]),{4:31,10:43,12:23,13:n,14:f,15:h,16:v,17:Y,18:w,19:I,20:E,21:O,22:B,23:P,24:u,25:D,26:M,27:A,28:N,29:R,31:U,33:q,34:G,35:29,36:y,38:4,43:x,48:i},t(s,[2,6]),t(s,[2,7]),t(s,[2,16]),t(s,[2,17]),t(s,[2,18]),t(s,[2,19]),t(s,[2,20]),t(s,[2,21]),t(s,[2,22]),t(s,[2,23]),t(s,[2,24]),t(s,[2,25]),{30:[1,44]},{32:[1,45]},t(s,[2,28]),t(s,[2,29]),t(s,[2,30]),{37:[1,46]},t(s,[2,32]),t(s,[2,9]),t(s,[2,10]),t(s,[2,11]),t(s,[2,12]),t(s,[2,13]),t(s,[2,14]),t(s,[2,15]),{44:[1,47],46:[1,48]},{11:[1,49]},{42:50,50:[1,51]},{11:[2,52]},t(s,[2,5]),t(s,[2,26]),t(s,[2,27]),t(s,[2,31]),t(s,[2,35],{45:[1,52],46:[1,53]}),t(s,[2,41],{44:[1,54]}),t(g,[2,33]),{40:55,51:p},{51:[2,51]},t(s,[2,36],{46:[1,56]}),t(s,[2,37]),t(s,[2,39],{45:[1,57]}),{11:[1,58]},t(s,[2,38]),t(s,[2,40]),t(g,[2,34])],defaultActions:{5:[2,49],6:[2,1],42:[2,52],51:[2,51]},parseError:function(c,d){if(d.recoverable)this.trace(c);else{var m=new Error(c);throw m.hash=d,m}},parse:function(c){var d=this,m=[0],l=[],a=[null],e=[],C=this.table,r="",_=0,z=0,L=2,et=1,st=e.slice.call(arguments,1),F=Object.create(this.lexer),j={yy:{}};for(var $ in this.yy)Object.prototype.hasOwnProperty.call(this.yy,$)&&(j.yy[$]=this.yy[$]);F.setInput(c,j.yy),j.yy.lexer=F,j.yy.parser=this,typeof F.yylloc>"u"&&(F.yylloc={});var it=F.yylloc;e.push(it);var lt=F.options&&F.options.ranges;typeof j.yy.parseError=="function"?this.parseError=j.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function ut(){var J;return J=l.pop()||F.lex()||et,typeof J!="number"&&(J instanceof Array&&(l=J,J=l.pop()),J=d.symbols_[J]||J),J}for(var V,tt,X,xt,nt={},mt,Q,Ot,kt;;){if(tt=m[m.length-1],this.defaultActions[tt]?X=this.defaultActions[tt]:((V===null||typeof V>"u")&&(V=ut()),X=C[tt]&&C[tt][V]),typeof X>"u"||!X.length||!X[0]){var bt="";kt=[];for(mt in C[tt])this.terminals_[mt]&&mt>L&&kt.push("'"+this.terminals_[mt]+"'");F.showPosition?bt="Parse error on line "+(_+1)+`:
`+F.showPosition()+`
Expecting `+kt.join(", ")+", got '"+(this.terminals_[V]||V)+"'":bt="Parse error on line "+(_+1)+": Unexpected "+(V==et?"end of input":"'"+(this.terminals_[V]||V)+"'"),this.parseError(bt,{text:F.match,token:this.terminals_[V]||V,line:F.yylineno,loc:it,expected:kt})}if(X[0]instanceof Array&&X.length>1)throw new Error("Parse Error: multiple actions possible at state: "+tt+", token: "+V);switch(X[0]){case 1:m.push(V),a.push(F.yytext),e.push(F.yylloc),m.push(X[1]),V=null,z=F.yyleng,r=F.yytext,_=F.yylineno,it=F.yylloc;break;case 2:if(Q=this.productions_[X[1]][1],nt.$=a[a.length-Q],nt._$={first_line:e[e.length-(Q||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(Q||1)].first_column,last_column:e[e.length-1].last_column},lt&&(nt._$.range=[e[e.length-(Q||1)].range[0],e[e.length-1].range[1]]),xt=this.performAction.apply(nt,[r,z,_,j.yy,X[1],a,e].concat(st)),typeof xt<"u")return xt;Q&&(m=m.slice(0,-1*Q*2),a=a.slice(0,-1*Q),e=e.slice(0,-1*Q)),m.push(this.productions_[X[1]][0]),a.push(nt.$),e.push(nt._$),Ot=C[m[m.length-2]][m[m.length-1]],m.push(Ot);break;case 3:return!0}}return!0}},S=function(){var b={EOF:1,parseError:function(d,m){if(this.yy.parser)this.yy.parser.parseError(d,m);else throw new Error(d)},setInput:function(c,d){return this.yy=d||this.yy||{},this._input=c,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var c=this._input[0];this.yytext+=c,this.yyleng++,this.offset++,this.match+=c,this.matched+=c;var d=c.match(/(?:\r\n?|\n).*/g);return d?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),c},unput:function(c){var d=c.length,m=c.split(/(?:\r\n?|\n)/g);this._input=c+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-d),this.offset-=d;var l=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),m.length-1&&(this.yylineno-=m.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:m?(m.length===l.length?this.yylloc.first_column:0)+l[l.length-m.length].length-m[0].length:this.yylloc.first_column-d},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-d]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(c){this.unput(this.match.slice(c))},pastInput:function(){var c=this.matched.substr(0,this.matched.length-this.match.length);return(c.length>20?"...":"")+c.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var c=this.match;return c.length<20&&(c+=this._input.substr(0,20-c.length)),(c.substr(0,20)+(c.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var c=this.pastInput(),d=new Array(c.length+1).join("-");return c+this.upcomingInput()+`
`+d+"^"},test_match:function(c,d){var m,l,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),l=c[0].match(/(?:\r\n?|\n).*/g),l&&(this.yylineno+=l.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:l?l[l.length-1].length-l[l.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+c[0].length},this.yytext+=c[0],this.match+=c[0],this.matches=c,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(c[0].length),this.matched+=c[0],m=this.performAction.call(this,this.yy,this,d,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),m)return m;if(this._backtrack){for(var e in a)this[e]=a[e];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var c,d,m,l;this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),e=0;e<a.length;e++)if(m=this._input.match(this.rules[a[e]]),m&&(!d||m[0].length>d[0].length)){if(d=m,l=e,this.options.backtrack_lexer){if(c=this.test_match(m,a[e]),c!==!1)return c;if(this._backtrack){d=!1;continue}else return!1}else if(!this.options.flex)break}return d?(c=this.test_match(d,a[l]),c!==!1?c:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var d=this.next();return d||this.lex()},begin:function(d){this.conditionStack.push(d)},popState:function(){var d=this.conditionStack.length-1;return d>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(d){return d=this.conditionStack.length-1-Math.abs(d||0),d>=0?this.conditionStack[d]:"INITIAL"},pushState:function(d){this.begin(d)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(d,m,l,a){switch(l){case 0:return this.begin("open_directive"),48;case 1:return this.begin("type_directive"),49;case 2:return this.popState(),this.begin("arg_directive"),41;case 3:return this.popState(),this.popState(),51;case 4:return 50;case 5:return this.begin("acc_title"),29;case 6:return this.popState(),"acc_title_value";case 7:return this.begin("acc_descr"),31;case 8:return this.popState(),"acc_descr_value";case 9:this.begin("acc_descr_multiline");break;case 10:this.popState();break;case 11:return"acc_descr_multiline_value";case 12:break;case 13:break;case 14:break;case 15:return 11;case 16:break;case 17:break;case 18:break;case 19:this.begin("href");break;case 20:this.popState();break;case 21:return 46;case 22:this.begin("callbackname");break;case 23:this.popState();break;case 24:this.popState(),this.begin("callbackargs");break;case 25:return 44;case 26:this.popState();break;case 27:return 45;case 28:this.begin("click");break;case 29:this.popState();break;case 30:return 43;case 31:return 5;case 32:return 20;case 33:return 21;case 34:return 22;case 35:return 23;case 36:return 24;case 37:return 26;case 38:return 25;case 39:return 27;case 40:return 13;case 41:return 14;case 42:return 15;case 43:return 16;case 44:return 17;case 45:return 18;case 46:return 19;case 47:return"date";case 48:return 28;case 49:return"accDescription";case 50:return 34;case 51:return 36;case 52:return 37;case 53:return 41;case 54:return 7;case 55:return"INVALID"}},rules:[/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%(?!\{)*[^\n]*)/i,/^(?:[^\}]%%*[^\n]*)/i,/^(?:%%*[^\n]*[\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:href[\s]+["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:call[\s]+)/i,/^(?:\([\s]*\))/i,/^(?:\()/i,/^(?:[^(]*)/i,/^(?:\))/i,/^(?:[^)]*)/i,/^(?:click[\s]+)/i,/^(?:[\s\n])/i,/^(?:[^\s\n]*)/i,/^(?:gantt\b)/i,/^(?:dateFormat\s[^#\n;]+)/i,/^(?:inclusiveEndDates\b)/i,/^(?:topAxis\b)/i,/^(?:axisFormat\s[^#\n;]+)/i,/^(?:tickInterval\s[^#\n;]+)/i,/^(?:includes\s[^#\n;]+)/i,/^(?:excludes\s[^#\n;]+)/i,/^(?:todayMarker\s[^\n;]+)/i,/^(?:weekday\s+monday\b)/i,/^(?:weekday\s+tuesday\b)/i,/^(?:weekday\s+wednesday\b)/i,/^(?:weekday\s+thursday\b)/i,/^(?:weekday\s+friday\b)/i,/^(?:weekday\s+saturday\b)/i,/^(?:weekday\s+sunday\b)/i,/^(?:\d\d\d\d-\d\d-\d\d\b)/i,/^(?:title\s[^#\n;]+)/i,/^(?:accDescription\s[^#\n;]+)/i,/^(?:section\s[^#:\n;]+)/i,/^(?:[^#:\n;]+)/i,/^(?::[^#\n;]+)/i,/^(?::)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[10,11],inclusive:!1},acc_descr:{rules:[8],inclusive:!1},acc_title:{rules:[6],inclusive:!1},close_directive:{rules:[],inclusive:!1},arg_directive:{rules:[3,4],inclusive:!1},type_directive:{rules:[2,3],inclusive:!1},open_directive:{rules:[1],inclusive:!1},callbackargs:{rules:[26,27],inclusive:!1},callbackname:{rules:[23,24,25],inclusive:!1},href:{rules:[20,21],inclusive:!1},click:{rules:[29,30],inclusive:!1},INITIAL:{rules:[0,5,7,9,12,13,14,15,16,17,18,19,22,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};return b}();k.lexer=S;function T(){this.yy={}}return T.prototype=k,k.Parser=T,new T}();wt.parser=wt;const ze=wt;H.extend(Le);H.extend(Ye);H.extend(We);let Z="",Mt="",At,Lt="",dt=[],ft=[],It={},Yt=[],vt=[],ct="",Ft="";const Zt=["active","done","crit","milestone"];let Wt=[],ht=!1,zt=!1,Vt="sunday",_t=0;const Ve=function(t,o,i){ue.parseDirective(this,t,o,i)},Oe=function(){Yt=[],vt=[],ct="",Wt=[],gt=0,St=void 0,pt=void 0,W=[],Z="",Mt="",Ft="",At=void 0,Lt="",dt=[],ft=[],ht=!1,zt=!1,_t=0,It={},de(),Vt="sunday"},Pe=function(t){Mt=t},Be=function(){return Mt},Ne=function(t){At=t},Re=function(){return At},Ge=function(t){Lt=t},He=function(){return Lt},qe=function(t){Z=t},Xe=function(){ht=!0},je=function(){return ht},Ue=function(){zt=!0},Ze=function(){return zt},Qe=function(t){Ft=t},Je=function(){return Ft},Ke=function(){return Z},$e=function(t){dt=t.toLowerCase().split(/[\s,]+/)},ts=function(){return dt},es=function(t){ft=t.toLowerCase().split(/[\s,]+/)},ss=function(){return ft},is=function(){return It},ns=function(t){ct=t,Yt.push(t)},rs=function(){return Yt},as=function(){let t=Ht();const o=10;let i=0;for(;!t&&i<o;)t=Ht(),i++;return vt=W,vt},Qt=function(t,o,i,s){return s.includes(t.format(o.trim()))?!1:t.isoWeekday()>=6&&i.includes("weekends")||i.includes(t.format("dddd").toLowerCase())?!0:i.includes(t.format(o.trim()))},cs=function(t){Vt=t},os=function(){return Vt},Jt=function(t,o,i,s){if(!i.length||t.manualEndTime)return;let n;t.startTime instanceof Date?n=H(t.startTime):n=H(t.startTime,o,!0),n=n.add(1,"d");let f;t.endTime instanceof Date?f=H(t.endTime):f=H(t.endTime,o,!0);const[h,v]=ls(n,f,o,i,s);t.endTime=h.toDate(),t.renderEndTime=v},ls=function(t,o,i,s,n){let f=!1,h=null;for(;t<=o;)f||(h=o.toDate()),f=Qt(t,i,s,n),f&&(o=o.add(1,"d")),t=t.add(1,"d");return[o,h]},Dt=function(t,o,i){i=i.trim();const n=/^after\s+([\d\w- ]+)/.exec(i.trim());if(n!==null){let h=null;if(n[1].split(" ").forEach(function(v){let Y=ot(v);Y!==void 0&&(h?Y.endTime>h.endTime&&(h=Y):h=Y)}),h)return h.endTime;{const v=new Date;return v.setHours(0,0,0,0),v}}let f=H(i,o.trim(),!0);if(f.isValid())return f.toDate();{Tt.debug("Invalid date:"+i),Tt.debug("With date format:"+o.trim());const h=new Date(i);if(h===void 0||isNaN(h.getTime())||h.getFullYear()<-1e4||h.getFullYear()>1e4)throw new Error("Invalid date:"+i);return h}},Kt=function(t){const o=/^(\d+(?:\.\d+)?)([Mdhmswy]|ms)$/.exec(t.trim());return o!==null?[Number.parseFloat(o[1]),o[2]]:[NaN,"ms"]},$t=function(t,o,i,s=!1){i=i.trim();let n=H(i,o.trim(),!0);if(n.isValid())return s&&(n=n.add(1,"d")),n.toDate();let f=H(t);const[h,v]=Kt(i);if(!Number.isNaN(h)){const Y=f.add(h,v);Y.isValid()&&(f=Y)}return f.toDate()};let gt=0;const at=function(t){return t===void 0?(gt=gt+1,"task"+gt):t},us=function(t,o){let i;o.substr(0,1)===":"?i=o.substr(1,o.length):i=o;const s=i.split(","),n={};ie(s,n,Zt);for(let h=0;h<s.length;h++)s[h]=s[h].trim();let f="";switch(s.length){case 1:n.id=at(),n.startTime=t.endTime,f=s[0];break;case 2:n.id=at(),n.startTime=Dt(void 0,Z,s[0]),f=s[1];break;case 3:n.id=at(s[0]),n.startTime=Dt(void 0,Z,s[1]),f=s[2];break}return f&&(n.endTime=$t(n.startTime,Z,f,ht),n.manualEndTime=H(f,"YYYY-MM-DD",!0).isValid(),Jt(n,Z,ft,dt)),n},ds=function(t,o){let i;o.substr(0,1)===":"?i=o.substr(1,o.length):i=o;const s=i.split(","),n={};ie(s,n,Zt);for(let f=0;f<s.length;f++)s[f]=s[f].trim();switch(s.length){case 1:n.id=at(),n.startTime={type:"prevTaskEnd",id:t},n.endTime={data:s[0]};break;case 2:n.id=at(),n.startTime={type:"getStartDate",startData:s[0]},n.endTime={data:s[1]};break;case 3:n.id=at(s[0]),n.startTime={type:"getStartDate",startData:s[1]},n.endTime={data:s[2]};break}return n};let St,pt,W=[];const te={},fs=function(t,o){const i={section:ct,type:ct,processed:!1,manualEndTime:!1,renderEndTime:null,raw:{data:o},task:t,classes:[]},s=ds(pt,o);i.raw.startTime=s.startTime,i.raw.endTime=s.endTime,i.id=s.id,i.prevTaskId=pt,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,i.order=_t,_t++;const n=W.push(i);pt=i.id,te[i.id]=n-1},ot=function(t){const o=te[t];return W[o]},hs=function(t,o){const i={section:ct,type:ct,description:t,task:t,classes:[]},s=us(St,o);i.startTime=s.startTime,i.endTime=s.endTime,i.id=s.id,i.active=s.active,i.done=s.done,i.crit=s.crit,i.milestone=s.milestone,St=i,vt.push(i)},Ht=function(){const t=function(i){const s=W[i];let n="";switch(W[i].raw.startTime.type){case"prevTaskEnd":{const f=ot(s.prevTaskId);s.startTime=f.endTime;break}case"getStartDate":n=Dt(void 0,Z,W[i].raw.startTime.startData),n&&(W[i].startTime=n);break}return W[i].startTime&&(W[i].endTime=$t(W[i].startTime,Z,W[i].raw.endTime.data,ht),W[i].endTime&&(W[i].processed=!0,W[i].manualEndTime=H(W[i].raw.endTime.data,"YYYY-MM-DD",!0).isValid(),Jt(W[i],Z,ft,dt))),W[i].processed};let o=!0;for(const[i,s]of W.entries())t(i),o=o&&s.processed;return o},ms=function(t,o){let i=o;rt().securityLevel!=="loose"&&(i=fe(o)),t.split(",").forEach(function(s){ot(s)!==void 0&&(se(s,()=>{window.open(i,"_self")}),It[s]=i)}),ee(t,"clickable")},ee=function(t,o){t.split(",").forEach(function(i){let s=ot(i);s!==void 0&&s.classes.push(o)})},ks=function(t,o,i){if(rt().securityLevel!=="loose"||o===void 0)return;let s=[];if(typeof i=="string"){s=i.split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/);for(let f=0;f<s.length;f++){let h=s[f].trim();h.charAt(0)==='"'&&h.charAt(h.length-1)==='"'&&(h=h.substr(1,h.length-2)),s[f]=h}}s.length===0&&s.push(t),ot(t)!==void 0&&se(t,()=>{Te.runFunc(o,...s)})},se=function(t,o){Wt.push(function(){const i=document.querySelector(`[id="${t}"]`);i!==null&&i.addEventListener("click",function(){o()})},function(){const i=document.querySelector(`[id="${t}-text"]`);i!==null&&i.addEventListener("click",function(){o()})})},ys=function(t,o,i){t.split(",").forEach(function(s){ks(s,o,i)}),ee(t,"clickable")},gs=function(t){Wt.forEach(function(o){o(t)})},ps={parseDirective:Ve,getConfig:()=>rt().gantt,clear:Oe,setDateFormat:qe,getDateFormat:Ke,enableInclusiveEndDates:Xe,endDatesAreInclusive:je,enableTopAxis:Ue,topAxisEnabled:Ze,setAxisFormat:Pe,getAxisFormat:Be,setTickInterval:Ne,getTickInterval:Re,setTodayMarker:Ge,getTodayMarker:He,setAccTitle:ne,getAccTitle:re,setDiagramTitle:ae,getDiagramTitle:ce,setDisplayMode:Qe,getDisplayMode:Je,setAccDescription:oe,getAccDescription:le,addSection:ns,getSections:rs,getTasks:as,addTask:fs,findTaskById:ot,addTaskOrg:hs,setIncludes:$e,getIncludes:ts,setExcludes:es,getExcludes:ss,setClickEvent:ys,setLink:ms,getLinks:is,bindFunctions:gs,parseDuration:Kt,isInvalidDate:Qt,setWeekday:cs,getWeekday:os};function ie(t,o,i){let s=!0;for(;s;)s=!1,i.forEach(function(n){const f="^\\s*"+n+"\\s*$",h=new RegExp(f);t[0].match(h)&&(o[n]=!0,t.shift(1),s=!0)})}const vs=function(){Tt.debug("Something is calling, setConf, remove the call")},qt={monday:we,tuesday:_e,wednesday:De,thursday:Se,friday:Ce,saturday:Ee,sunday:Me},xs=(t,o)=>{let i=[...t].map(()=>-1/0),s=[...t].sort((f,h)=>f.startTime-h.startTime||f.order-h.order),n=0;for(const f of s)for(let h=0;h<i.length;h++)if(f.startTime>=i[h]){i[h]=f.endTime,f.order=h+o,h>n&&(n=h);break}return n};let K;const bs=function(t,o,i,s){const n=rt().gantt,f=rt().securityLevel;let h;f==="sandbox"&&(h=yt("#i"+o));const v=f==="sandbox"?yt(h.nodes()[0].contentDocument.body):yt("body"),Y=f==="sandbox"?h.nodes()[0].contentDocument:document,w=Y.getElementById(o);K=w.parentElement.offsetWidth,K===void 0&&(K=1200),n.useWidth!==void 0&&(K=n.useWidth);const I=s.db.getTasks();let E=[];for(const y of I)E.push(y.type);E=G(E);const O={};let B=2*n.topPadding;if(s.db.getDisplayMode()==="compact"||n.displayMode==="compact"){const y={};for(const p of I)y[p.section]===void 0?y[p.section]=[p]:y[p.section].push(p);let x=0;for(const p of Object.keys(y)){const g=xs(y[p],x)+1;x+=g,B+=g*(n.barHeight+n.barGap),O[p]=g}}else{B+=I.length*(n.barHeight+n.barGap);for(const y of E)O[y]=I.filter(x=>x.type===y).length}w.setAttribute("viewBox","0 0 "+K+" "+B);const P=v.select(`[id="${o}"]`),u=he().domain([me(I,function(y){return y.startTime}),ke(I,function(y){return y.endTime})]).rangeRound([0,K-n.leftPadding-n.rightPadding]);function D(y,x){const p=y.startTime,g=x.startTime;let k=0;return p>g?k=1:p<g&&(k=-1),k}I.sort(D),M(I,K,B),ye(P,B,K,n.useMaxWidth),P.append("text").text(s.db.getDiagramTitle()).attr("x",K/2).attr("y",n.titleTopMargin).attr("class","titleText");function M(y,x,p){const g=n.barHeight,k=g+n.barGap,S=n.topPadding,T=n.leftPadding,b=ge().domain([0,E.length]).range(["#00B9FA","#F95002"]).interpolate(pe);N(k,S,T,x,p,y,s.db.getExcludes(),s.db.getIncludes()),R(T,S,x,p),A(y,k,S,T,g,b,x),U(k,S),q(T,S,x,p)}function A(y,x,p,g,k,S,T){const c=[...new Set(y.map(a=>a.order))].map(a=>y.find(e=>e.order===a));P.append("g").selectAll("rect").data(c).enter().append("rect").attr("x",0).attr("y",function(a,e){return e=a.order,e*x+p-2}).attr("width",function(){return T-n.rightPadding/2}).attr("height",x).attr("class",function(a){for(const[e,C]of E.entries())if(a.type===C)return"section section"+e%n.numberSectionStyles;return"section section0"});const d=P.append("g").selectAll("rect").data(y).enter(),m=s.db.getLinks();if(d.append("rect").attr("id",function(a){return a.id}).attr("rx",3).attr("ry",3).attr("x",function(a){return a.milestone?u(a.startTime)+g+.5*(u(a.endTime)-u(a.startTime))-.5*k:u(a.startTime)+g}).attr("y",function(a,e){return e=a.order,e*x+p}).attr("width",function(a){return a.milestone?k:u(a.renderEndTime||a.endTime)-u(a.startTime)}).attr("height",k).attr("transform-origin",function(a,e){return e=a.order,(u(a.startTime)+g+.5*(u(a.endTime)-u(a.startTime))).toString()+"px "+(e*x+p+.5*k).toString()+"px"}).attr("class",function(a){const e="task";let C="";a.classes.length>0&&(C=a.classes.join(" "));let r=0;for(const[z,L]of E.entries())a.type===L&&(r=z%n.numberSectionStyles);let _="";return a.active?a.crit?_+=" activeCrit":_=" active":a.done?a.crit?_=" doneCrit":_=" done":a.crit&&(_+=" crit"),_.length===0&&(_=" task"),a.milestone&&(_=" milestone "+_),_+=r,_+=" "+C,e+_}),d.append("text").attr("id",function(a){return a.id+"-text"}).text(function(a){return a.task}).attr("font-size",n.fontSize).attr("x",function(a){let e=u(a.startTime),C=u(a.renderEndTime||a.endTime);a.milestone&&(e+=.5*(u(a.endTime)-u(a.startTime))-.5*k),a.milestone&&(C=e+k);const r=this.getBBox().width;return r>C-e?C+r+1.5*n.leftPadding>T?e+g-5:C+g+5:(C-e)/2+e+g}).attr("y",function(a,e){return e=a.order,e*x+n.barHeight/2+(n.fontSize/2-2)+p}).attr("text-height",k).attr("class",function(a){const e=u(a.startTime);let C=u(a.endTime);a.milestone&&(C=e+k);const r=this.getBBox().width;let _="";a.classes.length>0&&(_=a.classes.join(" "));let z=0;for(const[et,st]of E.entries())a.type===st&&(z=et%n.numberSectionStyles);let L="";return a.active&&(a.crit?L="activeCritText"+z:L="activeText"+z),a.done?a.crit?L=L+" doneCritText"+z:L=L+" doneText"+z:a.crit&&(L=L+" critText"+z),a.milestone&&(L+=" milestoneText"),r>C-e?C+r+1.5*n.leftPadding>T?_+" taskTextOutsideLeft taskTextOutside"+z+" "+L:_+" taskTextOutsideRight taskTextOutside"+z+" "+L+" width-"+r:_+" taskText taskText"+z+" "+L+" width-"+r}),rt().securityLevel==="sandbox"){let a;a=yt("#i"+o);const e=a.nodes()[0].contentDocument;d.filter(function(C){return m[C.id]!==void 0}).each(function(C){var r=e.querySelector("#"+C.id),_=e.querySelector("#"+C.id+"-text");const z=r.parentNode;var L=e.createElement("a");L.setAttribute("xlink:href",m[C.id]),L.setAttribute("target","_top"),z.appendChild(L),L.appendChild(r),L.appendChild(_)})}}function N(y,x,p,g,k,S,T,b){const c=S.reduce((r,{startTime:_})=>r?Math.min(r,_):_,0),d=S.reduce((r,{endTime:_})=>r?Math.max(r,_):_,0),m=s.db.getDateFormat();if(!c||!d)return;const l=[];let a=null,e=H(c);for(;e.valueOf()<=d;)s.db.isInvalidDate(e,m,T,b)?a?a.end=e:a={start:e,end:e}:a&&(l.push(a),a=null),e=e.add(1,"d");P.append("g").selectAll("rect").data(l).enter().append("rect").attr("id",function(r){return"exclude-"+r.start.format("YYYY-MM-DD")}).attr("x",function(r){return u(r.start)+p}).attr("y",n.gridLineStartPadding).attr("width",function(r){const _=r.end.add(1,"day");return u(_)-u(r.start)}).attr("height",k-x-n.gridLineStartPadding).attr("transform-origin",function(r,_){return(u(r.start)+p+.5*(u(r.end)-u(r.start))).toString()+"px "+(_*y+.5*k).toString()+"px"}).attr("class","exclude-range")}function R(y,x,p,g){let k=ve(u).tickSize(-g+x+n.gridLineStartPadding).tickFormat(Pt(s.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));const T=/^([1-9]\d*)(minute|hour|day|week|month)$/.exec(s.db.getTickInterval()||n.tickInterval);if(T!==null){const b=T[1],c=T[2],d=s.db.getWeekday()||n.weekday;switch(c){case"minute":k.ticks(Gt.every(b));break;case"hour":k.ticks(Rt.every(b));break;case"day":k.ticks(Nt.every(b));break;case"week":k.ticks(qt[d].every(b));break;case"month":k.ticks(Bt.every(b));break}}if(P.append("g").attr("class","grid").attr("transform","translate("+y+", "+(g-50)+")").call(k).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10).attr("dy","1em"),s.db.topAxisEnabled()||n.topAxis){let b=xe(u).tickSize(-g+x+n.gridLineStartPadding).tickFormat(Pt(s.db.getAxisFormat()||n.axisFormat||"%Y-%m-%d"));if(T!==null){const c=T[1],d=T[2],m=s.db.getWeekday()||n.weekday;switch(d){case"minute":b.ticks(Gt.every(c));break;case"hour":b.ticks(Rt.every(c));break;case"day":b.ticks(Nt.every(c));break;case"week":b.ticks(qt[m].every(c));break;case"month":b.ticks(Bt.every(c));break}}P.append("g").attr("class","grid").attr("transform","translate("+y+", "+x+")").call(b).selectAll("text").style("text-anchor","middle").attr("fill","#000").attr("stroke","none").attr("font-size",10)}}function U(y,x){let p=0;const g=Object.keys(O).map(k=>[k,O[k]]);P.append("g").selectAll("text").data(g).enter().append(function(k){const S=k[0].split(be.lineBreakRegex),T=-(S.length-1)/2,b=Y.createElementNS("http://www.w3.org/2000/svg","text");b.setAttribute("dy",T+"em");for(const[c,d]of S.entries()){const m=Y.createElementNS("http://www.w3.org/2000/svg","tspan");m.setAttribute("alignment-baseline","central"),m.setAttribute("x","10"),c>0&&m.setAttribute("dy","1em"),m.textContent=d,b.appendChild(m)}return b}).attr("x",10).attr("y",function(k,S){if(S>0)for(let T=0;T<S;T++)return p+=g[S-1][1],k[1]*y/2+p*y+x;else return k[1]*y/2+x}).attr("font-size",n.sectionFontSize).attr("class",function(k){for(const[S,T]of E.entries())if(k[0]===T)return"sectionTitle sectionTitle"+S%n.numberSectionStyles;return"sectionTitle"})}function q(y,x,p,g){const k=s.db.getTodayMarker();if(k==="off")return;const S=P.append("g").attr("class","today"),T=new Date,b=S.append("line");b.attr("x1",u(T)+y).attr("x2",u(T)+y).attr("y1",n.titleTopMargin).attr("y2",g-n.titleTopMargin).attr("class","today"),k!==""&&b.attr("style",k.replace(/,/g,";"))}function G(y){const x={},p=[];for(let g=0,k=y.length;g<k;++g)Object.prototype.hasOwnProperty.call(x,y[g])||(x[y[g]]=!0,p.push(y[g]));return p}},Ts={setConf:vs,draw:bs},ws=t=>`
  .mermaid-main-font {
    font-family: "trebuchet ms", verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
  .exclude-range {
    fill: ${t.excludeBkgColor};
  }

  .section {
    stroke: none;
    opacity: 0.2;
  }

  .section0 {
    fill: ${t.sectionBkgColor};
  }

  .section2 {
    fill: ${t.sectionBkgColor2};
  }

  .section1,
  .section3 {
    fill: ${t.altSectionBkgColor};
    opacity: 0.2;
  }

  .sectionTitle0 {
    fill: ${t.titleColor};
  }

  .sectionTitle1 {
    fill: ${t.titleColor};
  }

  .sectionTitle2 {
    fill: ${t.titleColor};
  }

  .sectionTitle3 {
    fill: ${t.titleColor};
  }

  .sectionTitle {
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    // text-height: 14px;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }


  /* Grid and axis */

  .grid .tick {
    stroke: ${t.gridColor};
    opacity: 0.8;
    shape-rendering: crispEdges;
    text {
      font-family: ${t.fontFamily};
      fill: ${t.textColor};
    }
  }

  .grid path {
    stroke-width: 0;
  }


  /* Today line */

  .today {
    fill: none;
    stroke: ${t.todayLineColor};
    stroke-width: 2px;
  }


  /* Task styling */

  /* Default task */

  .task {
    stroke-width: 2;
  }

  .taskText {
    text-anchor: middle;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }

  // .taskText:not([font-size]) {
  //   font-size: ${t.ganttFontSize};
  // }

  .taskTextOutsideRight {
    fill: ${t.taskTextDarkColor};
    text-anchor: start;
    // font-size: ${t.ganttFontSize};
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);

  }

  .taskTextOutsideLeft {
    fill: ${t.taskTextDarkColor};
    text-anchor: end;
    // font-size: ${t.ganttFontSize};
  }

  /* Special case clickable */
  .task.clickable {
    cursor: pointer;
  }
  .taskText.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideLeft.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  .taskTextOutsideRight.clickable {
    cursor: pointer;
    fill: ${t.taskTextClickableColor} !important;
    font-weight: bold;
  }

  /* Specific task settings for the sections*/

  .taskText0,
  .taskText1,
  .taskText2,
  .taskText3 {
    fill: ${t.taskTextColor};
  }

  .task0,
  .task1,
  .task2,
  .task3 {
    fill: ${t.taskBkgColor};
    stroke: ${t.taskBorderColor};
  }

  .taskTextOutside0,
  .taskTextOutside2
  {
    fill: ${t.taskTextOutsideColor};
  }

  .taskTextOutside1,
  .taskTextOutside3 {
    fill: ${t.taskTextOutsideColor};
  }


  /* Active task */

  .active0,
  .active1,
  .active2,
  .active3 {
    fill: ${t.activeTaskBkgColor};
    stroke: ${t.activeTaskBorderColor};
  }

  .activeText0,
  .activeText1,
  .activeText2,
  .activeText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Completed task */

  .done0,
  .done1,
  .done2,
  .done3 {
    stroke: ${t.doneTaskBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
  }

  .doneText0,
  .doneText1,
  .doneText2,
  .doneText3 {
    fill: ${t.taskTextDarkColor} !important;
  }


  /* Tasks on the critical line */

  .crit0,
  .crit1,
  .crit2,
  .crit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.critBkgColor};
    stroke-width: 2;
  }

  .activeCrit0,
  .activeCrit1,
  .activeCrit2,
  .activeCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.activeTaskBkgColor};
    stroke-width: 2;
  }

  .doneCrit0,
  .doneCrit1,
  .doneCrit2,
  .doneCrit3 {
    stroke: ${t.critBorderColor};
    fill: ${t.doneTaskBkgColor};
    stroke-width: 2;
    cursor: pointer;
    shape-rendering: crispEdges;
  }

  .milestone {
    transform: rotate(45deg) scale(0.8,0.8);
  }

  .milestoneText {
    font-style: italic;
  }
  .doneCritText0,
  .doneCritText1,
  .doneCritText2,
  .doneCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .activeCritText0,
  .activeCritText1,
  .activeCritText2,
  .activeCritText3 {
    fill: ${t.taskTextDarkColor} !important;
  }

  .titleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor}    ;
    font-family: 'trebuchet ms', verdana, arial, sans-serif;
    font-family: var(--mermaid-font-family);
  }
`,_s=ws,Cs={parser:ze,db:ps,renderer:Ts,styles:_s};export{Cs as diagram};
