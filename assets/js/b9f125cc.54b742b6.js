"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9806],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>y});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=p(a),y=n,d=m["".concat(l,".").concat(y)]||m[y]||u[y]||s;return a?r.createElement(d,i(i({ref:t},c),{},{components:a})):r.createElement(d,i({ref:t},c))}));function y(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},43252:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=a(83117),n=(a(67294),a(3905)),s=(a(44996),a(39960));const i={title:"What is SynapseML?",sidebar_label:"What is SynapseML?",hide_title:!0},o="What is SynapseML?",l={unversionedId:"Overview",id:"version-0.11.4/Overview",title:"What is SynapseML?",description:"SynapseML (previously known as MMLSpark), is an open-source library that simplifies the creation of massively scalable machine learning (ML) pipelines. SynapseML provides simple, composable, and distributed APIs for a wide variety of different machine learning tasks such as text analytics, vision, anomaly detection, and many others. SynapseML is built on the Apache Spark distributed computing framework and shares the same API as the SparkML/MLLib library, allowing you to seamlessly embed SynapseML models into existing Apache Spark workflows.",source:"@site/versioned_docs/version-0.11.4/Overview.md",sourceDirName:".",slug:"/Overview",permalink:"/SynapseML/docs/0.11.4/Overview",draft:!1,tags:[],version:"0.11.4",frontMatter:{title:"What is SynapseML?",sidebar_label:"What is SynapseML?",hide_title:!0},sidebar:"docs",next:{title:"Create a Spark Cluster",permalink:"/SynapseML/docs/0.11.4/Get Started/Create a Spark Cluster"}},p={},c=[{value:"Papers",id:"papers",level:2}],u={toc:c};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-synapseml"},"What is SynapseML?"),(0,n.kt)("p",null,"SynapseML (previously known as MMLSpark), is an open-source library that simplifies the creation of massively scalable machine learning (ML) pipelines. SynapseML provides simple, composable, and distributed APIs for a wide variety of different machine learning tasks such as text analytics, vision, anomaly detection, and many others. SynapseML is built on the ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/"},"Apache Spark distributed computing framework")," and shares the same API as the ",(0,n.kt)("a",{parentName:"p",href:"https://spark.apache.org/mllib/"},"SparkML/MLLib library"),", allowing you to seamlessly embed SynapseML models into existing Apache Spark workflows."),(0,n.kt)("p",null,"With SynapseML, you can build scalable and intelligent systems to solve challenges in domains such as anomaly detection, computer vision, deep learning, text analytics, and others. SynapseML can train and evaluate models on single-node, multi-node, and elastically resizable clusters of computers. This lets you scale your work without wasting resources. SynapseML is usable across Python, R, Scala, Java, and .NET. Furthermore, its API abstracts over a wide variety of databases, file systems, and cloud data stores to simplify experiments no matter where data is located."),(0,n.kt)("p",null,"SynapseML requires Scala 2.12, Spark 3.2+, and Python 3.8+."),(0,n.kt)(s.Z,{to:"/docs/Get Started/Install SynapseML",className:"button button--lg button--outline button--block button--primary",mdxType:"Link"},"Get Started"),(0,n.kt)("h2",{id:"papers"},"Papers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2009.08044"},"Large Scale Intelligent Microservices"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2007.07177"},"Conditional Image Retrieval"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1810.08744"},"SynapseML: Unifying Machine Learning Ecosystems at Massive Scales"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/1804.04031"},"Flexible and Scalable Deep Learning with MMLSpark")))))}m.isMDXComponent=!0}}]);