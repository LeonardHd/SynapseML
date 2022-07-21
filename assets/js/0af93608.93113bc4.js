"use strict";(self.webpackChunksynapseml=self.webpackChunksynapseml||[]).push([[1755],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),u=r,g=d["".concat(s,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6204:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={title:"Regression - Flight Delays with DataCleaning",hide_title:!0,status:"stable",name:"Regression - Flight Delays with DataCleaning"},s=void 0,p={unversionedId:"features/regression/Regression - Flight Delays with DataCleaning",id:"version-0.10.0/features/regression/Regression - Flight Delays with DataCleaning",title:"Regression - Flight Delays with DataCleaning",description:"Regression -  Flight Delays with DataCleaning",source:"@site/versioned_docs/version-0.10.0/features/regression/Regression - Flight Delays with DataCleaning.md",sourceDirName:"features/regression",slug:"/features/regression/Regression - Flight Delays with DataCleaning",permalink:"/SynapseML/docs/features/regression/Regression - Flight Delays with DataCleaning",tags:[],version:"0.10.0",frontMatter:{title:"Regression - Flight Delays with DataCleaning",hide_title:!0,status:"stable",name:"Regression - Flight Delays with DataCleaning"},sidebar:"docs",previous:{title:"Regression - Auto Imports",permalink:"/SynapseML/docs/features/regression/Regression - Auto Imports"},next:{title:"Regression - Flight Delays",permalink:"/SynapseML/docs/features/regression/Regression - Flight Delays"}},m={},c=[{value:"Regression -  Flight Delays with DataCleaning",id:"regression----flight-delays-with-datacleaning",level:2}],d={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"regression----flight-delays-with-datacleaning"},"Regression -  Flight Delays with DataCleaning"),(0,i.kt)("p",null,"This example notebook is similar to\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/microsoft/SynapseML/blob/master/notebooks/Regression%20-%20Flight%20Delays.ipynb"},"Regression - Flight Delays"),".\nIn this example, we will demonstrate the use of ",(0,i.kt)("inlineCode",{parentName:"p"},"DataConversion()")," in two\nways.  First, to convert the data type of several columns after the dataset\nhas been read in to the Spark DataFrame instead of specifying the data types\nas the file is read in.  Second, to convert columns to categorical columns\ninstead of iterating over the columns and applying the ",(0,i.kt)("inlineCode",{parentName:"p"},"StringIndexer"),"."),(0,i.kt)("p",null,"This sample demonstrates how to use the following APIs:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/0.10.0/pyspark/synapse.ml.train.html?#module-synapse.ml.train.TrainRegressor"},(0,i.kt)("inlineCode",{parentName:"a"},"TrainRegressor"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/0.10.0/pyspark/synapse.ml.train.html?#module-synapse.ml.train.ComputePerInstanceStatistics"},(0,i.kt)("inlineCode",{parentName:"a"},"ComputePerInstanceStatistics"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://mmlspark.blob.core.windows.net/docs/0.10.0/pyspark/synapse.ml.featurize.html?#module-synapse.ml.featurize.DataConversion"},(0,i.kt)("inlineCode",{parentName:"a"},"DataConversion")))),(0,i.kt)("p",null,"First, import the pandas package"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\n\nif os.environ.get("AZURE_SERVICE", None) == "Microsoft.ProjectArcadia":\n    from pyspark.sql import SparkSession\n\n    spark = SparkSession.builder.getOrCreate()\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import pandas as pd\n")),(0,i.kt)("p",null,"Next, import the CSV dataset: retrieve the file if needed, save it locally,\nread the data into a pandas dataframe via ",(0,i.kt)("inlineCode",{parentName:"p"},"read_csv()"),", then convert it to\na Spark dataframe."),(0,i.kt)("p",null,"Print the schema of the dataframe, and note the columns that are ",(0,i.kt)("inlineCode",{parentName:"p"},"long"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'flightDelay = spark.read.parquet(\n    "wasbs://publicwasb@mmlspark.blob.core.windows.net/On_Time_Performance_2012_9.parquet"\n)\n# print some basic info\nprint("records read: " + str(flightDelay.count()))\nprint("Schema: ")\nflightDelay.printSchema()\nflightDelay.limit(10).toPandas()\n')),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"DataConversion")," transform API to convert the columns listed to\ndouble."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"DataConversion")," API accepts the following types for the ",(0,i.kt)("inlineCode",{parentName:"p"},"convertTo"),"\nparameter:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"boolean")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"byte")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"short")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"integer")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"long")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"float")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"double")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"string")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"toCategorical")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"clearCategorical")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"date"),' -- converts a string or long to a date of the format\n"yyyy-MM-dd HH:mm:ss" unless another format is specified by\nthe ',(0,i.kt)("inlineCode",{parentName:"li"},"dateTimeFormat")," parameter.")),(0,i.kt)("p",null,"Again, print the schema and note that the columns are now ",(0,i.kt)("inlineCode",{parentName:"p"},"double"),"\ninstead of long."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.featurize import DataConversion\n\nflightDelay = DataConversion(\n    cols=[\n        "Quarter",\n        "Month",\n        "DayofMonth",\n        "DayOfWeek",\n        "OriginAirportID",\n        "DestAirportID",\n        "CRSDepTime",\n        "CRSArrTime",\n    ],\n    convertTo="double",\n).transform(flightDelay)\nflightDelay.printSchema()\nflightDelay.limit(10).toPandas()\n')),(0,i.kt)("p",null,"Split the datasest into train and test sets."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"train, test = flightDelay.randomSplit([0.75, 0.25])\n")),(0,i.kt)("p",null,"Create a regressor model and train it on the dataset."),(0,i.kt)("p",null,"First, use ",(0,i.kt)("inlineCode",{parentName:"p"},"DataConversion")," to convert the columns ",(0,i.kt)("inlineCode",{parentName:"p"},"Carrier"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"DepTimeBlk"),",\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrTimeBlk")," to categorical data.  Recall that in Notebook 102, this\nwas accomplished by iterating over the columns and converting the strings\nto index values using the ",(0,i.kt)("inlineCode",{parentName:"p"},"StringIndexer")," API.  The ",(0,i.kt)("inlineCode",{parentName:"p"},"DataConversion")," API\nsimplifies the task by allowing you to specify all columns that will have\nthe same end type in a single command."),(0,i.kt)("p",null,"Create a LinearRegression model using the Limited-memory BFGS solver\n(",(0,i.kt)("inlineCode",{parentName:"p"},"l-bfgs"),"), an ",(0,i.kt)("inlineCode",{parentName:"p"},"ElasticNet")," mixing parameter of ",(0,i.kt)("inlineCode",{parentName:"p"},"0.3"),", and a ",(0,i.kt)("inlineCode",{parentName:"p"},"Regularization"),"\nof ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1"),"."),(0,i.kt)("p",null,"Train the model with the ",(0,i.kt)("inlineCode",{parentName:"p"},"TrainRegressor")," API fit on the training dataset."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import TrainRegressor, TrainedRegressorModel\nfrom pyspark.ml.regression import LinearRegression\n\ntrainCat = DataConversion(\n    cols=["Carrier", "DepTimeBlk", "ArrTimeBlk"], convertTo="toCategorical"\n).transform(train)\ntestCat = DataConversion(\n    cols=["Carrier", "DepTimeBlk", "ArrTimeBlk"], convertTo="toCategorical"\n).transform(test)\nlr = LinearRegression().setRegParam(0.1).setElasticNetParam(0.3)\nmodel = TrainRegressor(model=lr, labelCol="ArrDelay").fit(trainCat)\n')),(0,i.kt)("p",null,"Score the regressor on the test data."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"scoredData = model.transform(testCat)\nscoredData.limit(10).toPandas()\n")),(0,i.kt)("p",null,"Compute model metrics against the entire scored dataset"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from synapse.ml.train import ComputeModelStatistics\n\nmetrics = ComputeModelStatistics().transform(scoredData)\nmetrics.toPandas()\n")),(0,i.kt)("p",null,"Finally, compute and show statistics on individual predictions in the test\ndataset, demonstrating the usage of ",(0,i.kt)("inlineCode",{parentName:"p"},"ComputePerInstanceStatistics")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from synapse.ml.train import ComputePerInstanceStatistics\n\nevalPerInstance = ComputePerInstanceStatistics().transform(scoredData)\nevalPerInstance.select("ArrDelay", "prediction", "L1_loss", "L2_loss").limit(\n    10\n).toPandas()\n')))}u.isMDXComponent=!0}}]);