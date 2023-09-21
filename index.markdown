---
layout: default
---

# Welcome!

I am a former Software Engineer and current Machine Learning Student. I have worked at large and medium sized companies like FanDuel and Snap Inc, as well as small startups and agencies. 

In 2019 I moved to Paris to learn French and eat way too many French pastries. 

In 2022 I returned to school to pursue a Masters in Machine Learning at PSL Research University. 

Currently I am working as a research intern at Université Gustave Eiffel where I am developing unsupervised learning methods and applying them to traffic engineering problems.

I am open to talking about any projects in Machine Learning in research or industry. I like to get my hands dirty with complex software systems and build cool stuff.

I hope to use this space to show off what I have built and talk about some ideas I have for the future!
* * *
## Research Experience

### Graph Clustering to Identify Road Networks with Similar Traffic Behaviors

As part of the GRETTIA Lab at Université Gustave Eiffel I am working to adapt the Leiden Algorithm to cluster road networks.
The goal is to find streets which experience similar levels of traffic during peak hours. 

Here is a cool image of the Barcelona network clustered by my aglorithm. The colored clusters represent groups of roads identified to have similar levels of congestion and average speed. The algorithm I developed out performed several common methods of graph clustering.
![Barcelona Clustering](/assets/img/base_clustering_results.png)

Ultimately I applied this method over a full day of data to evaluate how these clusters change with traffic demand. My method can be viewed on my github [here](https://github.com/EllingtonKirby/leidenalg/) (still in progress)

### Vehicle Trajectory Generation and Prediction Using RNNs

In concert with data gathered by the CIRCLES Consortium at UC Berkely, I worked to develop encoder decoder and sequence models to predict and generate vehicle trajectories.
One such experiment can be found [here](https://github.com/EllingtonKirby/VTP-LSTM/tree/master/Ellington-LSTM) where I implemented Lin et al. grid discretized LSTM model for trajectory prediction.

### Fine Tuning BERT Models for Bio Medical Tasks

As a research assistant for Guilhem Piat, I worked to develop a pipeline of scripts to fine tune and benchmark BERT models on Bio Medical QA tasks. 
The work was included in the paper "Intégration de connaissances structurées par synthèse de texte spécialisé" (Integration of structured knowledge through specialized text synthesis)[link](https://hal.science/hal-04130151/). I built tokenization and embedding pipelines for PubMedQA and MedMCQA tasks. 

### Comparison of Topic Modeling Methods on Fake News

Using a variety of Kaggle Fake News detection datasets, I benchmarked preprocessing, embedding, and dimensionality reduction strategies for three clustering algorithms to evaluate their effectiveness of modeling topics in Fake News. The methods were KMeans with Latent Semantic Analysis, Non-Negative Matrix Factorization, and Latent Dirichilet Allocation. 

I was extremely impressed by the effectiveness of KMeans on this task, where clusters were created that heavily skewed towards containing fake or reliable news. Clusters 1 and 2 for example contained over 80% articles labeled as Fake News.
![Fake News Clusters](/assets/img/topics_kmeans_10_clusters.png)

### Audio Localization Using Time Difference of Arrival

My first exposure to research was [smartphone based audio localization using time difference of arrival](https://dl.acm.org/doi/abs/10.1145/2973750.2985625) where I implemented a demo of my Binghamton Professor's paper [Snooping Keystrokes with mm-level Audio Ranging on a Single Phone](https://dl.acm.org/doi/abs/10.1145/2789168.2790122). This project is also what gave me my first exposure to Android, and after demonstrating the project at Mobicom (which was really an eye opening experience) I was able to start my software engineering career. 

* * *
## Work Experience

### Zenly - Snap Inc

At Zenly I worked on the Conversations team alongside some of the smartest and most hard working people I have met in my life. We built so many creative features our users loved, like the Zenly Voice Notes, dozens of fun chat easter eggs, resizable (giant) text, the camera and Media Request feature (like the inverse of Snapchat). These features were used millons of time everyday and beloved by users. Unfortunately in 2022 Zenly was permanently shut down by Snap.

One of my favorite projects was my attempt to build an animated lip sync generation system for the voice notes feature. We had cute emoji faces that animated when the voice notes played, and I felt it would be perfect if they mouthed the users message. I read through a lot of the literature on lip sync generation, and tested several deep learning methods like Allosaurus. I attempted to build a Formant extraction system using Linear Predictive Coding which would map formants to mouth shapes. Ultimately we were recognized by the French Government's CIR (Research Tax Credit Program) and accepted for a grant in experimental development. It was this experience that led me to consider returning to school and pursuing machine learning. 

### DRAFT - FanDuel

I was the solo Android developer on the original DRAFT Fantasy sports app for over two years. We built too many cool features to list and had a great time watching a ton of sports with an awesome team. After our merge into the FanDuel application, I moved to France while the former DRAFT team started a new project, where they are finding a ton of well deserved success, [Underdog Fantasy](https://twitter.com/UnderdogFantasy?s=20). Instead of building a massively popular sports gaming application, I decided to try enable my croissant addiction. You tell me if I made the right choice!