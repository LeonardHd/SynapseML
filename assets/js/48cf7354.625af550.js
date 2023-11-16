"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[2994],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),p=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(a),f=r,d=m["".concat(i,".").concat(f)]||m[f]||c[f]||l;return a?n.createElement(d,s(s({ref:t},u),{},{components:a})):n.createElement(d,s({ref:t},u))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,s=new Array(l);s[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var p=2;p<l;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},82516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=a(83117),r=(a(67294),a(3905));const l={title:"Tabular Explainers",hide_title:!0,status:"stable"},s="Interpretability - Tabular SHAP explainer",o={unversionedId:"Explore Algorithms/Responsible AI/Tabular Explainers",id:"Explore Algorithms/Responsible AI/Tabular Explainers",title:"Tabular Explainers",description:"In this example, we use Kernel SHAP to explain a tabular classification model built from the Adults Census dataset.",source:"@site/docs/Explore Algorithms/Responsible AI/Tabular Explainers.md",sourceDirName:"Explore Algorithms/Responsible AI",slug:"/Explore Algorithms/Responsible AI/Tabular Explainers",permalink:"/SynapseML/docs/next/Explore Algorithms/Responsible AI/Tabular Explainers",draft:!1,tags:[],version:"current",frontMatter:{title:"Tabular Explainers",hide_title:!0,status:"stable"},sidebar:"docs",previous:{title:"Interpreting Model Predictions",permalink:"/SynapseML/docs/next/Explore Algorithms/Responsible AI/Interpreting Model Predictions"},next:{title:"Text Explainers",permalink:"/SynapseML/docs/next/Explore Algorithms/Responsible AI/Text Explainers"}},i={},p=[],u={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"interpretability---tabular-shap-explainer"},"Interpretability - Tabular SHAP explainer"),(0,r.kt)("p",null,"In this example, we use Kernel SHAP to explain a tabular classification model built from the Adults Census dataset."),(0,r.kt)("p",null,"First we import the packages and define some UDFs we need later."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.explainers import *\nfrom pyspark.ml import Pipeline\nfrom pyspark.ml.classification import LogisticRegression\nfrom pyspark.ml.feature import StringIndexer, OneHotEncoder, VectorAssembler\nfrom pyspark.ml.functions import vector_to_array\nfrom pyspark.sql.types import *\nfrom pyspark.sql.functions import *\nimport pandas as pd\nfrom synapse.ml.core.platform import *\n\nvec_access = udf(lambda v, i: float(v[i]), FloatType())\n")),(0,r.kt)("p",null,"Now let's read the data and train a binary classification model."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'df = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/AdultCensusIncome.parquet"\n)\n\nlabelIndexer = StringIndexer(\n    inputCol="income", outputCol="label", stringOrderType="alphabetAsc"\n).fit(df)\nprint("Label index assigment: " + str(set(zip(labelIndexer.labels, [0, 1]))))\n\ntraining = labelIndexer.transform(df).cache()\ndisplay(training)\ncategorical_features = [\n    "workclass",\n    "education",\n    "marital-status",\n    "occupation",\n    "relationship",\n    "race",\n    "sex",\n    "native-country",\n]\ncategorical_features_idx = [col + "_idx" for col in categorical_features]\ncategorical_features_enc = [col + "_enc" for col in categorical_features]\nnumeric_features = [\n    "age",\n    "education-num",\n    "capital-gain",\n    "capital-loss",\n    "hours-per-week",\n]\n\nstrIndexer = StringIndexer(\n    inputCols=categorical_features, outputCols=categorical_features_idx\n)\nonehotEnc = OneHotEncoder(\n    inputCols=categorical_features_idx, outputCols=categorical_features_enc\n)\nvectAssem = VectorAssembler(\n    inputCols=categorical_features_enc + numeric_features, outputCol="features"\n)\nlr = LogisticRegression(featuresCol="features", labelCol="label", weightCol="fnlwgt")\npipeline = Pipeline(stages=[strIndexer, onehotEnc, vectAssem, lr])\nmodel = pipeline.fit(training)\n')),(0,r.kt)("p",null,"After the model is trained, we randomly select some observations to be explained."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"explain_instances = (\n    model.transform(training).orderBy(rand()).limit(5).repartition(200).cache()\n)\ndisplay(explain_instances)\n")),(0,r.kt)("p",null,"We create a TabularSHAP explainer, set the input columns to all the features the model takes, specify the model and the target output column we're trying to explain. In this case, we're trying to explain the \"probability\" output, which is a vector of length 2, and we're only looking at class 1 probability. Specify targetClasses to ",(0,r.kt)("inlineCode",{parentName:"p"},"[0, 1]")," if you want to explain class 0 and 1 probability at the same time. Finally we sample 100 rows from the training data for background data, which is used for integrating out features in Kernel SHAP."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'shap = TabularSHAP(\n    inputCols=categorical_features + numeric_features,\n    outputCol="shapValues",\n    numSamples=5000,\n    model=model,\n    targetCol="probability",\n    targetClasses=[1],\n    backgroundData=broadcast(training.orderBy(rand()).limit(100).cache()),\n)\n\nshap_df = shap.transform(explain_instances)\n')),(0,r.kt)("p",null,"Once we have the resulting dataframe, we extract the class 1 probability of the model output, the SHAP values for the target class, the original features and the true label. Then we convert it to a pandas dataframe for visualization.\nFor each observation, the first element in the SHAP values vector is the base value (the mean output of the background dataset), and each of the following element is the SHAP values for each feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'shaps = (\n    shap_df.withColumn("probability", vec_access(col("probability"), lit(1)))\n    .withColumn("shapValues", vector_to_array(col("shapValues").getItem(0)))\n    .select(\n        ["shapValues", "probability", "label"] + categorical_features + numeric_features\n    )\n)\n\nshaps_local = shaps.toPandas()\nshaps_local.sort_values("probability", ascending=False, inplace=True, ignore_index=True)\npd.set_option("display.max_colwidth", None)\nshaps_local\n')),(0,r.kt)("p",null,"We use plotly subplot to visualize the SHAP values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'from plotly.subplots import make_subplots\nimport plotly.graph_objects as go\nimport pandas as pd\n\nfeatures = categorical_features + numeric_features\nfeatures_with_base = ["Base"] + features\n\nrows = shaps_local.shape[0]\n\nfig = make_subplots(\n    rows=rows,\n    cols=1,\n    subplot_titles="Probability: "\n    + shaps_local["probability"].apply("{:.2%}".format)\n    + "; Label: "\n    + shaps_local["label"].astype(str),\n)\n\nfor index, row in shaps_local.iterrows():\n    feature_values = [0] + [row[feature] for feature in features]\n    shap_values = row["shapValues"]\n    list_of_tuples = list(zip(features_with_base, feature_values, shap_values))\n    shap_pdf = pd.DataFrame(list_of_tuples, columns=["name", "value", "shap"])\n    fig.add_trace(\n        go.Bar(\n            x=shap_pdf["name"],\n            y=shap_pdf["shap"],\n            hovertext="value: " + shap_pdf["value"].astype(str),\n        ),\n        row=index + 1,\n        col=1,\n    )\n\nfig.update_yaxes(range=[-1, 1], fixedrange=True, zerolinecolor="black")\nfig.update_xaxes(type="category", tickangle=45, fixedrange=True)\nfig.update_layout(height=400 * rows, title_text="SHAP explanations")\n\nif not running_on_synapse():\n    fig.show()\n')),(0,r.kt)("p",null,"Your results should look like:"),(0,r.kt)("img",{src:"https://mmlspark.blob.core.windows.net/graphics/explainers/tabular-shap.png"}))}c.isMDXComponent=!0}}]);