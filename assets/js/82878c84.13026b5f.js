"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4916],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=c(a),m=n,y=f["".concat(l,".").concat(m)]||f[m]||u[m]||o;return a?r.createElement(y,s(s({ref:t},p),{},{components:a})):r.createElement(y,s({ref:t},p))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}f.displayName="MDXCreateElement"},81962:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=a(83117),n=(a(67294),a(3905));const o={title:"Create a Spark Cluster",hide_title:!0,status:"stable"},s="Setting up your computing platform for SynapseML",i={unversionedId:"Get Started/Create a Spark Cluster",id:"version-0.11.3/Get Started/Create a Spark Cluster",title:"Create a Spark Cluster",description:"SynapseML is preinstalled on Microsoft Fabric and Synapse Analytics. Follow the instructions to get started with these platforms.",source:"@site/versioned_docs/version-0.11.3/Get Started/Create a Spark Cluster.md",sourceDirName:"Get Started",slug:"/Get Started/Create a Spark Cluster",permalink:"/SynapseML/docs/0.11.3/Get Started/Create a Spark Cluster",draft:!1,tags:[],version:"0.11.3",frontMatter:{title:"Create a Spark Cluster",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"What is SynapseML?",permalink:"/SynapseML/docs/0.11.3/Overview"},next:{title:"Install SynapseML",permalink:"/SynapseML/docs/0.11.3/Get Started/Install SynapseML"}},l={},c=[{value:"Microsoft Fabric",id:"microsoft-fabric",level:2},{value:"Synapse Analytics",id:"synapse-analytics",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"setting-up-your-computing-platform-for-synapseml"},"Setting up your computing platform for SynapseML"),(0,n.kt)("p",null,"SynapseML is preinstalled on Microsoft Fabric and Synapse Analytics. Follow the instructions to get started with these platforms."),(0,n.kt)("h2",{id:"microsoft-fabric"},"Microsoft Fabric"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.microsoft.com/microsoft-fabric/"},"Microsoft Fabric")," is an all-in-one analytics solution for enterprises that covers everything from data movement to data science, Real-Time Analytics, and business intelligence. It offers a comprehensive suite of services, including data lake, data engineering, and data integration, all in one place."),(0,n.kt)("p",null,"SynapseML is preinstalled on Fabric, and this guide will walk you through getting access to fabric."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/fabric/enterprise/licenses"},"Get a Microsoft Fabric license")," or sign-up for a free ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/fabric/get-started/fabric-trial"},"Microsoft Fabric (Preview) trial"),"."),(0,n.kt)("li",{parentName:"ul"},"Sign in to ",(0,n.kt)("a",{parentName:"li",href:"https://fabric.microsoft.com/"},"Microsoft Fabric")),(0,n.kt)("li",{parentName:"ul"},"Go to the Data Science experience."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/fabric/data-engineering/how-to-use-notebook#create-notebooks"},"Create a new notebook")," or attach your notebook to a lakehouse. On the left side, select ",(0,n.kt)("strong",{parentName:"li"},"Add")," to add an existing lakehouse or ",(0,n.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/fabric/data-engineering/how-to-use-notebook#connect-lakehouses-and-notebooks"},"create a lakehouse"),".")),(0,n.kt)("p",null,"SynapseML is preinstalled on Fabric, but if you want to use another version of SynapseML, follow ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/fabric/data-science/install-synapseml"},"this guide on updating SynapseML"),"."),(0,n.kt)("h2",{id:"synapse-analytics"},"Synapse Analytics"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/synapse-analytics"},"Azure Synapse Analytics")," is an enterprise analytics service that accelerates time to insight across data warehouses and big data systems."),(0,n.kt)("p",null,"SynapseML is preinstalled on Synapse Analytics. To start with Synapse Analytics, you need:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A valid Azure subscription - ",(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/cognitive-services/"},"Create one for free"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-create-workspace"},"Create a Synapse workspace and launch Synapse studio")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/azure/synapse-analytics/get-started-analyze-spark#create-a-serverless-apache-spark-pool"},"Create a serverless Apache Spark pool")),(0,n.kt)("li",{parentName:"ul"},"Once Synapse Studio has launched, select ",(0,n.kt)("strong",{parentName:"li"},"Develop"),". Then, select the ",(0,n.kt)("strong",{parentName:"li"},'"+"')," icon to add a new resource. From there, select ",(0,n.kt)("strong",{parentName:"li"},"Notebook"),". A new notebook is created and opened. Alternatively, you can select ",(0,n.kt)("strong",{parentName:"li"},"Import")," to upload your notebook.")),(0,n.kt)("p",null,"SynapseML is preinstalled on Azure Synapse Analytics, but if you want to use another version of SynapseML, follow ",(0,n.kt)("a",{parentName:"p",href:"../Install%20SynapseML"},"this guide on updating SynapseML"),"."))}u.isMDXComponent=!0}}]);