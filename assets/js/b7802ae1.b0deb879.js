"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[8859],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),f=i,d=m["".concat(l,".").concat(f)]||m[f]||u[f]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},49665:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=a(83117),i=(a(67294),a(3905));const r={title:"Quickstart - Vowpal Wabbit on Tabular Data",hide_title:!0,status:"stable"},o="Classification - Adult Census using Vowpal Wabbit in SynapseML",s={unversionedId:"Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",id:"version-0.11.4/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",title:"Quickstart - Vowpal Wabbit on Tabular Data",description:"In this example, we predict incomes from the Adult Census dataset using Vowpal Wabbit (VW) classifier in SynapseML.",source:"@site/versioned_docs/version-0.11.4/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data.md",sourceDirName:"Explore Algorithms/Classification",slug:"/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Tabular Data",draft:!1,tags:[],version:"0.11.4",frontMatter:{title:"Quickstart - Vowpal Wabbit on Tabular Data",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Quickstart - SparkML vs SynapseML",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/Classification/Quickstart - SparkML vs SynapseML"},next:{title:"Quickstart - Vowpal Wabbit on Text Data",permalink:"/SynapseML/docs/0.11.4/Explore Algorithms/Classification/Quickstart - Vowpal Wabbit on Text Data"}},l={},p=[],c={toc:p};function u(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"classification---adult-census-using-vowpal-wabbit-in-synapseml"},"Classification - Adult Census using Vowpal Wabbit in SynapseML"),(0,i.kt)("p",null,"In this example, we predict incomes from the ",(0,i.kt)("em",{parentName:"p"},"Adult Census")," dataset using Vowpal Wabbit (VW) classifier in SynapseML.\nFirst, we read the data and split it into train and test sets as in this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Microsoft/SynapseML/blob/master/notebooks/Classification%20-%20Adult%20Census.ipynb"},"example"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'data = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet"\n)\ndata = data.select(["education", "marital-status", "hours-per-week", "income"])\ntrain, test = data.randomSplit([0.75, 0.25], seed=123)\ntrain.limit(10).toPandas()\n')),(0,i.kt)("p",null,"Next, we define a pipeline that includes feature engineering and training of a VW classifier. We use a featurizer provided by VW that hashes the feature names.\nNote that VW expects classification labels being -1 or 1. Thus, the income category is mapped to this space before feeding training data into the pipeline."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pyspark.sql.functions import when, col\nfrom pyspark.ml import Pipeline\nfrom synapse.ml.vw import VowpalWabbitFeaturizer, VowpalWabbitClassifier\n\n# Define classification label\ntrain = (\n    train.withColumn("label", when(col("income").contains("<"), 0.0).otherwise(1.0))\n    .repartition(1)\n    .cache()\n)\nprint(train.count())\n\n# Specify featurizer\nvw_featurizer = VowpalWabbitFeaturizer(\n    inputCols=["education", "marital-status", "hours-per-week"], outputCol="features"\n)\n\n# Define VW classification model\nargs = "--loss_function=logistic --quiet --holdout_off"\nvw_model = VowpalWabbitClassifier(\n    featuresCol="features", labelCol="label", passThroughArgs=args, numPasses=10\n)\n\n# Create a pipeline\nvw_pipeline = Pipeline(stages=[vw_featurizer, vw_model])\n')),(0,i.kt)("p",null,"Then, we are ready to train the model by fitting the pipeline with the training data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"# Train the model\nvw_trained = vw_pipeline.fit(train)\n")),(0,i.kt)("p",null,"After the model is trained, we apply it to predict the income of each sample in the test set."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'# Making predictions\ntest = test.withColumn("label", when(col("income").contains("<"), 0.0).otherwise(1.0))\nprediction = vw_trained.transform(test)\nprediction.limit(10).toPandas()\n')),(0,i.kt)("p",null,"Finally, we evaluate the model performance using ",(0,i.kt)("inlineCode",{parentName:"p"},"ComputeModelStatistics")," function which will compute confusion matrix, accuracy, precision, recall, and AUC by default for classification models."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputeModelStatistics\n\nmetrics = ComputeModelStatistics(\n    evaluationMetric="classification", labelCol="label", scoredLabelsCol="prediction"\n).transform(prediction)\nmetrics.toPandas()\n')))}u.isMDXComponent=!0}}]);