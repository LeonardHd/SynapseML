"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[9407],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,g=u["".concat(l,".").concat(f)]||u[f]||c[f]||s;return n?r.createElement(g,o(o({ref:t},m),{},{components:n})):r.createElement(g,o({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<s;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},41983:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(83117),a=(n(67294),n(3905));const s={title:"Quickstart - Transfer Learn for Image Classification",hide_title:!0,status:"stable"},o=void 0,i={unversionedId:"Explore Algorithms/Deep Learning/Quickstart - Transfer Learn for Image Classification",id:"version-0.11.3/Explore Algorithms/Deep Learning/Quickstart - Transfer Learn for Image Classification",title:"Quickstart - Transfer Learn for Image Classification",description:"Deep Learning - Flower Image Classification",source:"@site/versioned_docs/version-0.11.3/Explore Algorithms/Deep Learning/Quickstart - Transfer Learn for Image Classification.md",sourceDirName:"Explore Algorithms/Deep Learning",slug:"/Explore Algorithms/Deep Learning/Quickstart - Transfer Learn for Image Classification",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/Deep Learning/Quickstart - Transfer Learn for Image Classification",draft:!1,tags:[],version:"0.11.3",frontMatter:{title:"Quickstart - Transfer Learn for Image Classification",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - ONNX Model Inference",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/Deep Learning/Quickstart - ONNX Model Inference"},next:{title:"Interpreting Model Predictions",permalink:"/SynapseML/docs/0.11.3/Explore Algorithms/Responsible AI/Interpreting Model Predictions"}},l={},p=[{value:"Deep Learning - Flower Image Classification",id:"deep-learning---flower-image-classification",level:2},{value:"How does it work?",id:"how-does-it-work",level:3},{value:"Run the experiment",id:"run-the-experiment",level:3},{value:"Plot confusion matrix.",id:"plot-confusion-matrix",level:3}],m={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deep-learning---flower-image-classification"},"Deep Learning - Flower Image Classification"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from pyspark.ml import Transformer, Estimator, Pipeline\nfrom pyspark.ml.classification import LogisticRegression\nimport sys, time\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'# Load the images\n# use flowers_and_labels.parquet on larger cluster in order to get better results\nimagesWithLabels = (\n    spark.read.parquet(\n        "wasbs://publicwasb@mmlspark.blob.core.windows.net/flowers_and_labels2.parquet"\n    )\n    .withColumnRenamed("bytes", "image")\n    .sample(0.1)\n)\n\nimagesWithLabels.printSchema()\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/p2KgdYL.jpg",alt:"Smiley face"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.opencv import ImageTransformer\nfrom synapse.ml.image import UnrollImage\nfrom synapse.ml.onnx import ImageFeaturizer\nfrom synapse.ml.stages import *\n\n# Make some featurizers\nit = ImageTransformer().setOutputCol("scaled").resize(size=(60, 60))\n\nur = UnrollImage().setInputCol("scaled").setOutputCol("features")\n\ndc1 = DropColumns().setCols(["scaled", "image"])\n\nlr1 = (\n    LogisticRegression().setMaxIter(8).setFeaturesCol("features").setLabelCol("labels")\n)\n\ndc2 = DropColumns().setCols(["features"])\n\nbasicModel = Pipeline(stages=[it, ur, dc1, lr1, dc2])\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'resnet = (\n    ImageFeaturizer().setInputCol("image").setOutputCol("features").setModel("ResNet50")\n)\n\ndc3 = DropColumns().setCols(["image"])\n\nlr2 = (\n    LogisticRegression().setMaxIter(8).setFeaturesCol("features").setLabelCol("labels")\n)\n\ndc4 = DropColumns().setCols(["features"])\n\ndeepModel = Pipeline(stages=[resnet, dc3, lr2, dc4])\n')),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/Mb4Dyou.png",alt:"Resnet 18"})),(0,a.kt)("h3",{id:"how-does-it-work"},"How does it work?"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"http://i.stack.imgur.com/Hl2H6.png",alt:"Convolutional network weights"})),(0,a.kt)("h3",{id:"run-the-experiment"},"Run the experiment"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'def timedExperiment(model, train, test):\n    start = time.time()\n    result = model.fit(train).transform(test).toPandas()\n    print("Experiment took {}s".format(time.time() - start))\n    return result\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"train, test = imagesWithLabels.randomSplit([0.8, 0.2])\ntrain.count(), test.count()\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"basicResults = timedExperiment(basicModel, train, test)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"deepResults = timedExperiment(deepModel, train, test)\n")),(0,a.kt)("h3",{id:"plot-confusion-matrix"},"Plot confusion matrix."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import matplotlib.pyplot as plt\nfrom sklearn.metrics import confusion_matrix\nimport numpy as np\n\n\ndef evaluate(results, name):\n    y, y_hat = results["labels"], results["prediction"]\n    y = [int(l) for l in y]\n\n    accuracy = np.mean([1.0 if pred == true else 0.0 for (pred, true) in zip(y_hat, y)])\n    cm = confusion_matrix(y, y_hat)\n    cm = cm.astype("float") / cm.sum(axis=1)[:, np.newaxis]\n\n    plt.text(\n        40, 10, "$Accuracy$ $=$ ${}\\%$".format(round(accuracy * 100, 1)), fontsize=14\n    )\n    plt.imshow(cm, interpolation="nearest", cmap=plt.cm.Blues)\n    plt.colorbar()\n    plt.xlabel("$Predicted$ $label$", fontsize=18)\n    plt.ylabel("$True$ $Label$", fontsize=18)\n    plt.title("$Normalized$ $CM$ $for$ ${}$".format(name))\n\n\nplt.figure(figsize=(12, 5))\nplt.subplot(1, 2, 1)\nevaluate(deepResults, "CNTKModel + LR")\nplt.subplot(1, 2, 2)\nevaluate(basicResults, "LR")\n# Note that on the larger dataset the accuracy will bump up from 44% to >90%\ndisplay(plt.show())\n')))}c.isMDXComponent=!0}}]);