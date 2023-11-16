"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[4273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(83117),a=(n(67294),n(3905));const o={title:"Quickstart - Create Audiobooks",hide_title:!0,status:"stable"},i="Create audiobooks using neural Text to speech",s={unversionedId:"Explore Algorithms/AI Services/Quickstart - Create Audiobooks",id:"Explore Algorithms/AI Services/Quickstart - Create Audiobooks",title:"Quickstart - Create Audiobooks",description:"Step 1: Load libraries and add service information",source:"@site/docs/Explore Algorithms/AI Services/Quickstart - Create Audiobooks.md",sourceDirName:"Explore Algorithms/AI Services",slug:"/Explore Algorithms/AI Services/Quickstart - Create Audiobooks",permalink:"/SynapseML/docs/next/Explore Algorithms/AI Services/Quickstart - Create Audiobooks",draft:!1,tags:[],version:"current",frontMatter:{title:"Quickstart - Create Audiobooks",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - Create a Visual Search Engine",permalink:"/SynapseML/docs/next/Explore Algorithms/AI Services/Quickstart - Create a Visual Search Engine"},next:{title:"Quickstart - Document Question and Answering with PDFs",permalink:"/SynapseML/docs/next/Explore Algorithms/AI Services/Quickstart - Document Question and Answering with PDFs"}},l={},c=[{value:"Step 1: Load libraries and add service information",id:"step-1-load-libraries-and-add-service-information",level:2},{value:"Step 2: Attach the storage account to hold the audio files",id:"step-2-attach-the-storage-account-to-hold-the-audio-files",level:2},{value:"Step 3: Read in text data",id:"step-3-read-in-text-data",level:2},{value:"Step 4: Synthesize audio from text",id:"step-4-synthesize-audio-from-text",level:2},{value:"Step 5: Listen to an audio file",id:"step-5-listen-to-an-audio-file",level:2}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-audiobooks-using-neural-text-to-speech"},"Create audiobooks using neural Text to speech"),(0,a.kt)("h2",{id:"step-1-load-libraries-and-add-service-information"},"Step 1: Load libraries and add service information"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.core.platform import *\n\nif running_on_synapse():\n    from notebookutils import mssparkutils\n\n# Fill this in with your Azure AI service information\nservice_key = find_secret(\n    secret_name="ai-services-api-key", keyvault="mmlspark-build-keys"\n)  # Replace this line with a string like service_key = "dddjnbdkw9329"\nservice_loc = "eastus"\n\nstorage_container = "audiobooks"\nstorage_key = find_secret(\n    secret_name="madtest-storage-key", keyvault="mmlspark-build-keys"\n)\nstorage_account = "anomalydetectiontest"\n')),(0,a.kt)("h2",{id:"step-2-attach-the-storage-account-to-hold-the-audio-files"},"Step 2: Attach the storage account to hold the audio files"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'spark_key_setting = f"fs.azure.account.key.{storage_account}.blob.core.windows.net"\nspark.sparkContext._jsc.hadoopConfiguration().set(spark_key_setting, storage_key)\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom os.path import exists, join\n\nmount_path = f"wasbs://{storage_container}@{storage_account}.blob.core.windows.net/"\nif running_on_synapse():\n    mount_dir = join("/synfs", mssparkutils.env.getJobId(), storage_container)\n    if not exists(mount_dir):\n        mssparkutils.fs.mount(\n            mount_path, f"/{storage_container}", {"accountKey": storage_key}\n        )\nelif running_on_databricks():\n    if not exists(f"/dbfs/mnt/{storage_container}"):\n        dbutils.fs.mount(\n            source=mount_path,\n            mount_point=f"/mnt/{storage_container}",\n            extra_configs={spark_key_setting: storage_key},\n        )\n')),(0,a.kt)("h2",{id:"step-3-read-in-text-data"},"Step 3: Read in text data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import udf\n\n\n@udf\ndef make_audio_filename(part):\n    return f"wasbs://{storage_container}@{storage_account}.blob.core.windows.net/alice_in_wonderland/part_{part}.wav"\n\n\ndf = (\n    spark.read.parquet(\n        "wasbs://publicwasb@mmlspark.blob.core.windows.net/alice_in_wonderland.parquet"\n    )\n    .repartition(10)\n    .withColumn("filename", make_audio_filename("part"))\n)\n\ndisplay(df)\n')),(0,a.kt)("h2",{id:"step-4-synthesize-audio-from-text"},"Step 4: Synthesize audio from text"),(0,a.kt)("div",null,(0,a.kt)("img",{src:"https://marhamilresearch4.blob.core.windows.net/gutenberg-public/Notebook/NeuralTTS_hero.jpeg",width:"500"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.services.speech import TextToSpeech\n\ntts = (\n    TextToSpeech()\n    .setSubscriptionKey(service_key)\n    .setTextCol("text")\n    .setLocation(service_loc)\n    .setErrorCol("error")\n    .setVoiceName("en-US-SteffanNeural")\n    .setOutputFileCol("filename")\n)\n\naudio = tts.transform(df).cache()\ndisplay(audio)\n')),(0,a.kt)("h2",{id:"step-5-listen-to-an-audio-file"},"Step 5: Listen to an audio file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from IPython.display import Audio\n\n\ndef get_audio_file(num):\n    if running_on_databricks():\n        return f"/dbfs/mnt/{storage_container}/alice_in_wonderland/part_{num}.wav"\n    else:\n        return join(mount_dir, f"alice_in_wonderland/part_{num}.wav")\n\n\nAudio(filename=get_audio_file(1))\n')))}p.isMDXComponent=!0}}]);