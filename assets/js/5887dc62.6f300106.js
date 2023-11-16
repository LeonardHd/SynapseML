"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[7969],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return n?a.createElement(h,l(l({ref:t},u),{},{components:n})):a.createElement(h,l({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(67294),r=n(86010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,l),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var a=n(83117),r=n(67294),o=n(86010),l=n(12466),s=n(16550),i=n(91980),p=n(67392),u=n(50012);function c(e){return function(e){var t,n;return null!=(t=null==(n=r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=null!=t?t:c(n);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:t,groupId:n});return[(0,i._X)(o),(0,r.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,o=d(e),[l,s]=(0,r.useState)((()=>function(e){var t;let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}const r=null!=(t=a.find((e=>e.default)))?t:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[i,p]=h({queryString:n,groupId:a}),[c,k]=function(e){let{groupId:t}=e;const n=function(e){return e?"docusaurus.tab."+e:null}(t),[a,o]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:a}),f=(()=>{const e=null!=i?i:c;return m({value:e,tabValues:o})?e:null})();(0,r.useLayoutEffect)((()=>{f&&s(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error("Can't select invalid tab value="+e);s(e),p(e),k(e)}),[p,k,o]),tabValues:o}}var f=n(72389);const y="tabList__CuJ",b="tabItem_LNqP";function v(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:p}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=p[n].value;a!==s&&(c(t),i(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{var a;const t=u.indexOf(e.currentTarget)+1;n=null!=(a=u[t])?a:u[0];break}case"ArrowLeft":{var r;const t=u.indexOf(e.currentTarget)-1;n=null!=(r=u[t])?r:u[u.length-1];break}}null==(t=n)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},p.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},l,{className:(0,o.Z)("tabs__item",b,null==l?void 0:l.className,{"tabs__item--active":s===t})}),null!=n?n:t)})))}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=k(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",y)},r.createElement(v,(0,a.Z)({},e,t)),r.createElement(w,(0,a.Z)({},e,t)))}function S(e){const t=(0,f.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},89912:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var a=n(83117),r=(n(67294),n(3905)),o=n(74866),l=n(85162);const s={title:".NET setup",hide_title:!0,sidebar_label:".NET setup",description:".NET setup"},i=".NET setup and example for SynapseML",p={unversionedId:"Reference/Dotnet Setup",id:"version-1.0.1/Reference/Dotnet Setup",title:".NET setup",description:".NET setup",source:"@site/versioned_docs/version-1.0.1/Reference/Dotnet Setup.md",sourceDirName:"Reference",slug:"/Reference/Dotnet Setup",permalink:"/SynapseML/docs/Reference/Dotnet Setup",draft:!1,tags:[],version:"1.0.1",frontMatter:{title:".NET setup",hide_title:!0,sidebar_label:".NET setup",description:".NET setup"},sidebar:"docs",previous:{title:"R setup",permalink:"/SynapseML/docs/Reference/R Setup"},next:{title:"Quickstart - LightGBM in Dotnet",permalink:"/SynapseML/docs/Reference/Quickstart - LightGBM in Dotnet"}},u={},c=[{value:"Installation",id:"installation",level:2},{value:"1. Install .NET",id:"1-install-net",level:3},{value:"2. Install Java",id:"2-install-java",level:3},{value:"3. Install Apache Spark",id:"3-install-apache-spark",level:3},{value:"4. Install .NET for Apache Spark",id:"4-install-net-for-apache-spark",level:3},{value:"5. Install WinUtils (Windows Only)",id:"5-install-winutils-windows-only",level:3},{value:"6. Set DOTNET_WORKER_DIR and check dependencies",id:"6-set-dotnet_worker_dir-and-check-dependencies",level:3},{value:"Write a .NET for SynapseML App",id:"write-a-net-for-synapseml-app",level:2},{value:"1. Create a console app",id:"1-create-a-console-app",level:3},{value:"2. Install NuGet package",id:"2-install-nuget-package",level:3},{value:"3. Write your app",id:"3-write-your-app",level:3},{value:"4. Run your .NET App",id:"4-run-your-net-app",level:3},{value:"Next",id:"next",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"net-setup-and-example-for-synapseml"},".NET setup and example for SynapseML"),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"1-install-net"},"1. Install .NET"),(0,r.kt)("p",null,"To start building .NET apps, you need to download and install the .NET SDK (Software Development Kit)."),(0,r.kt)("p",null,"Download and install the ",(0,r.kt)("a",{parentName:"p",href:"https://dotnet.microsoft.com/en-us/download/dotnet/3.1"},".NET Core SDK"),".\nInstalling the SDK adds the dotnet toolchain to your PATH."),(0,r.kt)("p",null,"Once you've installed the .NET Core SDK, open a new command prompt or terminal. Then run ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet"),"."),(0,r.kt)("p",null,"If the command runs and prints information about how to use dotnet, you can move to the next step.\nIf you receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"'dotnet' is not recognized as an internal or external command")," error, make sure\nyou opened a new command prompt or terminal before running the command."),(0,r.kt)("h3",{id:"2-install-java"},"2. Install Java"),(0,r.kt)("p",null,"Install ",(0,r.kt)("a",{parentName:"p",href:"https://www.oracle.com/java/technologies/downloads/#java8"},"Java 8.1")," for Windows and macOS,\nor ",(0,r.kt)("a",{parentName:"p",href:"https://openjdk.org/install/"},"OpenJDK 8")," for Ubuntu."),(0,r.kt)("p",null,"Select the appropriate version for your operating system. For example, select jdk-8u201-windows-x64.exe\nfor a Windows x64 machine or jdk-8u231-macosx-x64.dmg for macOS. Then, use the command java to verify the installation."),(0,r.kt)("h3",{id:"3-install-apache-spark"},"3. Install Apache Spark"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://spark.apache.org/downloads.html"},"Download and install Apache Spark")," with version >= 3.2.0.\n(SynapseML v1.0.1 only supports spark version >= 3.2.0)"),(0,r.kt)("p",null,"Extract downloaded zipped files (with 7-Zip app on Windows or ",(0,r.kt)("inlineCode",{parentName:"p"},"tar")," on linux) and remember the location of\nextracted files, we take ",(0,r.kt)("inlineCode",{parentName:"p"},"~/bin/spark-3.2.0-bin-hadoop3.2/")," as an example here."),(0,r.kt)("p",null,"Run the following commands to set the environment variables used to locate Apache Spark.\nOn Windows, make sure to run the command prompt in administrator mode."),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"win",label:"Windows",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  setx /M HADOOP_HOME C:\\bin\\spark-3.2.0-bin-hadoop3.2\\\n  setx /M SPARK_HOME C:\\bin\\spark-3.2.0-bin-hadoop3.2\\\n  setx /M PATH "%PATH%;%HADOOP_HOME%;%SPARK_HOME%bin" # Warning: Don\'t run this if your path is already long as it will truncate your path to 1024 characters and potentially remove entries!\n'))),(0,r.kt)(l.Z,{value:"linux",label:"Mac/Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  export SPARK_HOME=~/bin/spark-3.2.0-bin-hadoop3.2/\n  export PATH="$SPARK_HOME/bin:$PATH"\n  source ~/.bashrc\n')))),(0,r.kt)("p",null,"Once you've installed everything and set your environment variables, open a ",(0,r.kt)("strong",{parentName:"p"},"new")," command prompt or terminal and run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"spark-submit --version\n")),(0,r.kt)("p",null,"If the command runs and prints version information, you can move to the next step."),(0,r.kt)("p",null,"If you receive a ",(0,r.kt)("inlineCode",{parentName:"p"},"'spark-submit' is not recognized as an internal or external command")," error, make sure you opened a ",(0,r.kt)("strong",{parentName:"p"},"new")," command prompt."),(0,r.kt)("h3",{id:"4-install-net-for-apache-spark"},"4. Install .NET for Apache Spark"),(0,r.kt)("p",null,"Download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/dotnet/spark/releases"},"Microsoft.Spark.Worker")," ",(0,r.kt)("strong",{parentName:"p"},"v2.1.1")," release from the .NET for Apache Spark GitHub.\nFor example if you're on a Windows machine and plan to use .NET Core, download the Windows x64 netcoreapp3.1 release."),(0,r.kt)("p",null,"Extract Microsoft.Spark.Worker and remember the location."),(0,r.kt)("h3",{id:"5-install-winutils-windows-only"},"5. Install WinUtils (Windows Only)"),(0,r.kt)("p",null,".NET for Apache Spark requires WinUtils to be installed alongside Apache Spark.\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/steveloughran/winutils/blob/master/hadoop-3.0.0/bin/winutils.exe"},"Download winutils.exe"),".\nThen, copy WinUtils into C:\\bin\\spark-3.2.0-bin-hadoop3.2\\bin."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you're using a different version of Hadoop, select the version of WinUtils that's compatible with your version of Hadoop. You can see the Hadoop version at the end of your Spark install folder name.")),(0,r.kt)("h3",{id:"6-set-dotnet_worker_dir-and-check-dependencies"},"6. Set DOTNET_WORKER_DIR and check dependencies"),(0,r.kt)("p",null,"Run one of the following commands to set the DOTNET_WORKER_DIR environment variable, which is used by .NET apps to locate .NET for Apache Spark\nworker binaries. Make sure to replace <PATH-DOTNET_WORKER_DIR> with the directory where you downloaded and extracted the Microsoft.Spark.Worker.\nOn Windows, make sure to run the command prompt in administrator mode."),(0,r.kt)(o.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"win",label:"Windows",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  setx /M DOTNET_WORKER_DIR <PATH-DOTNET-WORKER-DIR>\n"))),(0,r.kt)(l.Z,{value:"linux",label:"Mac/Linux",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"  export DOTNET_WORKER_DIR=<PATH-DOTNET-WORKER-DIR>\n")))),(0,r.kt)("p",null,"Finally, double-check that you can run ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet, java, spark-shell")," from your command line before you move to the next section."),(0,r.kt)("h2",{id:"write-a-net-for-synapseml-app"},"Write a .NET for SynapseML App"),(0,r.kt)("h3",{id:"1-create-a-console-app"},"1. Create a console app"),(0,r.kt)("p",null,"In your command prompt or terminal, run the following commands to create a new console application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet new console -o SynapseMLApp\ncd SynapseMLApp\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet")," command creates a new application of type console for you. The -o parameter creates a directory\nnamed ",(0,r.kt)("inlineCode",{parentName:"p"},"SynapseMLApp")," where your app is stored and populates it with the required files.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"cd SynapseMLApp")," command changes the directory to the app directory you created."),(0,r.kt)("h3",{id:"2-install-nuget-package"},"2. Install NuGet package"),(0,r.kt)("p",null,"To use .NET for Apache Spark in an app, install the Microsoft.Spark package.\nIn your command prompt or terminal, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet add package Microsoft.Spark --version 2.1.1\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This tutorial uses Microsoft.Spark version 2.1.1 as SynapseML 1.0.1 depends on it.\nChange to corresponding version if necessary.")),(0,r.kt)("p",null,"To use SynapseML features in the app, install SynapseML.X package.\nIn this tutorial, we use SynapseML.Cognitive as an example.\nIn your command prompt or terminal, run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"# Update Nuget Config to include SynapseML Feed\ndotnet nuget add source https://mmlspark.blob.core.windows.net/synapsemlnuget/index.json -n SynapseMLFeed\ndotnet add package SynapseML.Cognitive --version 1.0.1\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"dotnet nuget add")," command adds SynapseML's resolver to the source, so that our package can be found."),(0,r.kt)("h3",{id:"3-write-your-app"},"3. Write your app"),(0,r.kt)("p",null,"Open Program.cs in Visual Studio Code, or any text editor. Replace its contents with this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'using System;\nusing System.Collections.Generic;\nusing Synapse.ML.Cognitive;\nusing Microsoft.Spark.Sql;\nusing Microsoft.Spark.Sql.Types;\n\nnamespace SynapseMLApp\n{\n    class Program\n    {        static void Main(string[] args)\n        {\n            // Create Spark session\n            SparkSession spark =\n                SparkSession\n                    .Builder()\n                    .AppName("TextSentimentExample")\n                    .GetOrCreate();\n\n            // Create DataFrame\n            DataFrame df = spark.CreateDataFrame(\n                new List<GenericRow>\n                {\n                    new GenericRow(new object[] {"I am so happy today, its sunny!", "en-US"}),\n                    new GenericRow(new object[] {"I am frustrated by this rush hour traffic", "en-US"}),\n                    new GenericRow(new object[] {"The Azure AI services on spark aint bad", "en-US"})\n                },\n                new StructType(new List<StructField>\n                {\n                    new StructField("text", new StringType()),\n                    new StructField("language", new StringType())\n                })\n            );\n\n            // Create TextSentiment\n            var model = new TextSentiment()\n                .SetSubscriptionKey("YOUR_SUBSCRIPTION_KEY")\n                .SetLocation("eastus")\n                .SetTextCol("text")\n                .SetOutputCol("sentiment")\n                .SetErrorCol("error")\n                .SetLanguageCol("language");\n\n            // Transform\n            var outputDF = model.Transform(df);\n\n            // Display results\n            outputDF.Show();\n\n            // Stop Spark session\n            spark.Stop();\n        }\n    }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/api/microsoft.spark.sql.sparksession?view=spark-dotnet"},"SparkSession")," is the entrypoint\nof Apache Spark applications, which manages the context and information of your application. A DataFrame is a way of organizing\ndata into a set of named columns."),(0,r.kt)("p",null,"Create a ",(0,r.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/1.0.1/dotnet/classSynapse_1_1ML_1_1Cognitive_1_1TextSentiment.html"},"TextSentiment"),"\ninstance, set corresponding subscription key and other configurations. Then, apply transformation to the dataframe,\nwhich analyzes the sentiment based on each row, and stores result into output column."),(0,r.kt)("p",null,"The result of the transformation is stored in another DataFrame. At this point, no operations have taken place because\n.NET for Apache Spark lazily evaluates the data. The operation defined by the call to model.Transform doesn't execute until the Show method is called to display the contents of the transformed DataFrame to the console. Once you no longer need the Spark\nsession, use the Stop method to stop your session."),(0,r.kt)("h3",{id:"4-run-your-net-app"},"4. Run your .NET App"),(0,r.kt)("p",null,"Run the following command to build your application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"dotnet build\n")),(0,r.kt)("p",null,"Navigate to your build output directory. For example, in Windows you could run ",(0,r.kt)("inlineCode",{parentName:"p"},"cd bin\\Debug\\net5.0"),".\nUse the spark-submit command to submit your application to run on Apache Spark."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"spark-submit --class org.apache.spark.deploy.dotnet.DotnetRunner --packages com.microsoft.azure:synapseml_2.12:1.0.1 --master local microsoft-spark-3-2_2.12-2.1.1.jar dotnet SynapseMLApp.dll\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--packages com.microsoft.azure:synapseml_2.12:1.0.1")," specifies the dependency on synapseml_2.12 version 1.0.1;\n",(0,r.kt)("inlineCode",{parentName:"p"},"microsoft-spark-3-2_2.12-2.1.1.jar")," specifies Microsoft.Spark version 2.1.1 and Spark version 3.2"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"This command assumes you have downloaded Apache Spark and added it to your PATH environment variable so that you can use spark-submit.\nOtherwise, you'd have to use the full path (for example, C:\\bin\\apache-spark\\bin\\spark-submit or ~/spark/bin/spark-submit).")),(0,r.kt)("p",null,"When your app runs, the sentiment analysis result is written to the console."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"+-----------------------------------------+--------+-----+--------------------------------------------------+\n|                                     text|language|error|                                         sentiment|\n+-----------------------------------------+--------+-----+--------------------------------------------------+\n|          I am so happy today, its sunny!|   en-US| null|[{positive, null, {0.99, 0.0, 0.0}, [{I am so h...|\n|I am frustrated by this rush hour traffic|   en-US| null|[{negative, null, {0.0, 0.0, 0.99}, [{I am frus...|\n| The Azure AI services on spark aint bad|   en-US| null|[{positive, null, {0.99, 0.01, 0.00}, [{The cogn...|\n+-----------------------------------------+--------+-----+--------------------------------------------------+\n")),(0,r.kt)("p",null,"Congratulations! You successfully authored and ran a .NET for SynapseML app.\nRefer to the ",(0,r.kt)("a",{parentName:"p",href:"https://mmlspark.blob.core.windows.net/docs/1.0.1/dotnet/index.html"},"developer docs")," for API guidance."),(0,r.kt)("h2",{id:"next"},"Next"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Refer to this ",(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/dotnet/spark/tutorials/databricks-deployment"},"tutorial")," for deploying a .NET app to Databricks."),(0,r.kt)("li",{parentName:"ul"},"You could download compatible ",(0,r.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/publicwasb/dotnet/install-worker.sh"},"install-worker.sh"),"\nand ",(0,r.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/publicwasb/dotnet/db-init.sh"},"db-init.sh")," files needed for deployment on Databricks.")))}m.isMDXComponent=!0}}]);