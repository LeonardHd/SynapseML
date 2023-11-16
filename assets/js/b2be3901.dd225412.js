"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(u,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,a=new Array(o);a[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:s,a[1]=i;for(var c=2;c<o;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83907:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(83117),s=(r(67294),r(3905));const o={title:"Set up Cognitive Services",hide_title:!0,status:"stable"},a="Setting up Azure AI Services and Azure OpenAI resources for SynapseML",i={unversionedId:"Get Started/Set up Cognitive Services",id:"Get Started/Set up Cognitive Services",title:"Set up Cognitive Services",description:"In order to use SynapseML's OpenAI or Azure AI Services features, specific Azure resources are required. This documentation walks you through the process of setting up these resources and acquiring the necessary credentials.",source:"@site/docs/Get Started/Set up Cognitive Services.md",sourceDirName:"Get Started",slug:"/Get Started/Set up Cognitive Services",permalink:"/SynapseML/docs/next/Get Started/Set up Cognitive Services",draft:!1,tags:[],version:"current",frontMatter:{title:"Set up Cognitive Services",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Install SynapseML",permalink:"/SynapseML/docs/next/Get Started/Install SynapseML"},next:{title:"Quickstart - Your First Models",permalink:"/SynapseML/docs/next/Get Started/Quickstart - Your First Models"}},u={},c=[{value:"Azure OpenAI",id:"azure-openai",level:2},{value:"Azure AI Services",id:"azure-ai-services",level:2}],p={toc:c};function l(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"setting-up-azure-ai-services-and-azure-openai-resources-for-synapseml"},"Setting up Azure AI Services and Azure OpenAI resources for SynapseML"),(0,s.kt)("p",null,"In order to use SynapseML's OpenAI or Azure AI Services features, specific Azure resources are required. This documentation walks you through the process of setting up these resources and acquiring the necessary credentials."),(0,s.kt)("p",null,"First, create an Azure subscription to create resources."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"A valid Azure subscription - ",(0,s.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/free/cognitive-services/"},"Create one for free"),".")),(0,s.kt)("h2",{id:"azure-openai"},"Azure OpenAI"),(0,s.kt)("p",null,"The ",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/products/cognitive-services/openai-service/"},"Azure OpenAI service")," can be used to solve a large number of natural language tasks through prompting the completion API. To make it easier to scale your prompting workflows from a few examples to large datasets of examples, we have integrated the Azure OpenAI service with the distributed machine learning library SynapseML. This integration makes it easy to use the Apache Spark distributed computing framework to process millions of prompts with the OpenAI service."),(0,s.kt)("p",null,"To set up your Azure OpenAI Resource for SynapseML usage you need to: "),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://aka.ms/oai/access"},"Apply for access to Azure OpenAI")," if you do not already have access. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/azure/cognitive-services/openai/how-to/create-resource?pivots=web-portal#create-a-resource"},"Create an Azure OpenAI resource")," "),(0,s.kt)("li",{parentName:"ul"},"Get your Azure OpenAI resource's key. After your resource is successfully deployed, select ",(0,s.kt)("strong",{parentName:"li"},"Next Steps")," > ",(0,s.kt)("strong",{parentName:"li"},"Go to resource"),". Once at the resource, you can get the key from ",(0,s.kt)("strong",{parentName:"li"},"Resource Management")," > ",(0,s.kt)("strong",{parentName:"li"},"Keys and Endpoint"),". Copy the key and paste it into the notebook. Store keys securely and do not share them. ")),(0,s.kt)("h2",{id:"azure-ai-services"},"Azure AI Services"),(0,s.kt)("p",null,"To set up ",(0,s.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/products/ai-services"},"Azure AI Services")," for use with SynapseML you first need to:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/role-based-access-control/role-assignments-steps"},"Assign yourself the Azure AI Services Contributor role")," to agree to the responsible AI terms and create a resource. "),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://ms.portal.azure.com/#create/Microsoft.CognitiveServicesAllInOne"},"Create Azure AI service (Decision, Language, Speech, Vision) resource"),". You can follow the steps at ",(0,s.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/ai-services/multi-service-resource?tabs=windows&pivots=azportal#create-a-new-azure-cognitive-services-resource"},"Create a multi-service resource for Azure AI services"),". "),(0,s.kt)("li",{parentName:"ul"},"Get your Azure AI Services resource's key. After your resource is successfully deployed, select ",(0,s.kt)("strong",{parentName:"li"},"Next Steps")," > ",(0,s.kt)("strong",{parentName:"li"},"Go to resource"),". Once at the resource, you can get the key from ",(0,s.kt)("strong",{parentName:"li"},"Resource Management")," > ",(0,s.kt)("strong",{parentName:"li"},"Keys and Endpoint"),". Copy the key and paste it into the notebook. Store keys securely and do not share them.")))}l.isMDXComponent=!0}}]);