---
layout: default
---

# About Me

I am a former Software Engineer and current Machine Learning Student. I have worked at large and medium sized companies as an Android Developer such as FanDuel and Snap Inc, as well as small startups and agencies. I am passionate about Deep Learning and Computer Vision, specifically self supervised contrastive learning, generative models such as VAEs, GANs, and Diffusion models. I am interested in improving learned image representations for multi modal tasks, such as vision-language models, potentially via self supervised learning.

In 2019 I moved to Paris to learn French, work at Zenly, and eat way too many French pastries. 

In 2022 I returned to school to pursue a Masters in Machine Learning at PSL Research University. 

I have worked as a research intern at Université Gustave Eiffel where I developed unsupervised learning methods and applied them to traffic engineering problems.

I am open to talking about any projects in Machine Learning in research or industry. I like to get my hands dirty with complex software systems and build cool stuff.

I hope to use this space to show off what I have built and talk about some ideas I have for the future!
* * *
## Projects

### Evaluating the effect of Differential Data Augmentations on a simple GAN Model

As part of a PSL competetion to maximize the FID and precision/recall results on a constrained GAN example, I chose to implement a differential data augmentation pipeline. The resulting FID score of 20 on the MNIST dataset was drastically improved, and required no changes to the model architecture.

### Pretraining Word Embeddings via Word2Vec

To learn more about language modelling and self supervised training, I implemented a masked language modelling training regime to train Word2Vec word embeddings. I then tested the impact of these embeddings on a sentiment analysis task using the CNN-Static text convolution network [github](https://github.com/EllingtonKirby/Word2Vec). 

### Graph Clustering to Identify Road Networks with Similar Traffic Behaviors

As part of the GRETTIA Lab at Université Gustave Eiffel I am worked to adapt the Leiden Algorithm to cluster road networks.
The goal was to identify the temporal evolution of congestion conditions via clustering similar streets.

Here is an image of the Barcelona road network clustered by my aglorithm. The colored clusters represent groups of roads identified to have similar levels of congestion and average speed.
![Barcelona Clustering](/assets/img/base_clustering_results.png)

I applied this method over a full day of data to evaluate how these clusters change with traffic demand. My method can be viewed on my github [here](https://github.com/EllingtonKirby/leidenalg/) 

### Vehicle Trajectory Generation and Prediction Using RNNs

In concert with data gathered by the CIRCLES Consortium at UC Berkely, I worked to develop encoder decoder and sequence models to predict and generate vehicle trajectories.
One such experiment can be found [here](https://github.com/EllingtonKirby/VTP-LSTM/tree/master/Ellington-LSTM) where I implemented Lin et al. grid discretized LSTM model for trajectory prediction.

I also conducted a literature review of encoder-decoder models for the task of Trajectory Generation. The goal of the project was to syntehsize realistic and data driven traffic scenarios using the data captured during a live traffic test. The new scenarios would be simulated in a traffic simulation and would enable fast iteration and testing of traffic control patterns. Generally I focused on Variational Auto Encoders. 

### Fine Tuning BERT Models for Bio Medical Tasks

Second author on "Intégration de connaissances structurées par synthèse de texte spécialisé" (Integration of structured knowledge through specialized text synthesis)[link](https://hal.science/hal-04130151/). I built tokenization and embedding pipelines for PubMedQA and MedMCQA tasks. I worked to develop a pipeline of scripts to fine tune and benchmark bi-directional language models on Bio Medical QA tasks. 

### Comparison of Topic Modeling Methods on Fake News

Using a variety of Kaggle Fake News detection datasets, I benchmarked preprocessing, embedding, and dimensionality reduction strategies for three clustering algorithms to evaluate their effectiveness of modeling topics in Fake News. The methods were KMeans with Latent Semantic Analysis, Non-Negative Matrix Factorization, and Latent Dirichilet Allocation. 

I was extremely impressed by the effectiveness of KMeans on this task, where clusters were created that heavily skewed towards containing fake or reliable news. Clusters 1 and 2 for example contained over 80% articles labeled as Fake News.
![Fake News Clusters](/assets/img/topics_kmeans_10_clusters.png)

### Audio Localization Using Time Difference of Arrival

My first exposure to research was as the first author on [smartphone based audio localization using time difference of arrival](https://dl.acm.org/doi/abs/10.1145/2973750.2985625) where I implemented a demo of [Snooping Keystrokes with mm-level Audio Ranging on a Single Phone](https://dl.acm.org/doi/abs/10.1145/2789168.2790122). This project is also what gave me my first exposure to Android, and after demonstrating the project at Mobicom I started my software engineering career. 

* * *
## Work Experience

### Zenly - Snap Inc

At Zenly I worked on the Conversations team alongside some of the smartest and most hard working people I have met in my life. We built so many creative features our users loved, like the Zenly Voice Notes, dozens of fun chat easter eggs, resizable (giant) text, the camera and Media Request feature (like the inverse of Snapchat). These features were used millons of time everyday and beloved by users. Unfortunately in 2022 Zenly was permanently shut down by Snap.

One of my favorite projects was my attempt to build an animated lip sync generation system for the voice notes feature. We had cute emoji faces that animated when the voice notes played, and I felt it would be perfect if they mouthed the users message. I read through a lot of the literature on lip sync generation, and tested several deep learning methods like Allosaurus. I attempted to build a Formant extraction system using Linear Predictive Coding which would map formants to mouth shapes. Ultimately we were recognized by the French Government's CIR (Research Tax Credit Program) and accepted for a grant in experimental development. It was this experience that led me to consider returning to school and pursuing machine learning. 

### DRAFT - FanDuel

I was the solo Android developer on the original DRAFT Fantasy sports app for over two years. We built too many cool features to list and had a great time watching a ton of sports with an awesome team. After our merge into the FanDuel application, I moved to France while the former DRAFT team started a new project, where they are finding a ton of well deserved success, [Underdog Fantasy](https://twitter.com/UnderdogFantasy?s=20). Instead of building a massively popular sports gaming application, I decided to try enable my croissant addiction. You tell me if I made the right choice!
