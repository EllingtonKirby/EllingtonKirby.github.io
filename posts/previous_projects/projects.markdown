### [All Moves as First MCTS Applied to Splendor](https://github.com/ivanbravi/RinascimentoFramework/pull/2)

My wife and I have greatly enjoyed playing [Splendor](https://en.wikipedia.org/wiki/Splendor_(game)), a board game based on accumulating tokens and using them to purchase cards. After losing a dozen times, I wanted to see if it would be possible to develop an AI to play the game for me, to finally win once or twice.

Luckily a researcher QMU in London built an extremely handy framework for playing and simulating the game. However the current Monte Carlo Tree Search implementation suffered from a limitation where it performed the best under very shallow and narrow searches, preferring to search just one turn into the future, and sampling only two actions during state expansion.

I wanted to implement a variation of MCTS that would benefit from searching deeper and more broadly into the game tree. I implemented the RAVE algorithm using "All Moves as First" statistics (somtimes called Killer Moves) from [1](https://www.cs.utexas.edu/~pstone/Courses/394Rspring11/resources/mcrave.pdf) and [2](https://users.soe.ucsc.edu/~dph/mypubs/AMAFpaperWithRef.pdf).

The resulting agent performed very well! It beat all other agents in 1v1 gams of Splendor using depth and breadth parameters of 5 turns and 5 moves respectively.

![Rave Results](/assets/img/rave_results.png)

### [Graph Clustering to Identify Road Networks with Similar Traffic Behaviors](https://github.com/EllingtonKirby/Contiguity-Constrained-Clustering)

As part of the GRETTIA Lab at Université Gustave Eiffel I worked to adapt the Leiden Algorithm to cluster road networks.
The goal was to identify the temporal evolution of congestion conditions via clustering similar streets.

Here is an image of the Barcelona road network clustered by my aglorithm. The colored clusters represent groups of roads identified to have similar levels of congestion and average speed.
![Barcelona Clustering](/assets/img/base_clustering_results.png)

I applied this method over a full day of data to evaluate how these clusters change with traffic demand. My method can be viewed on my github [here](https://github.com/EllingtonKirby/leidenalg/) 

### Fine Tuning BERT Models for Bio Medical Tasks

Second author on "Intégration de connaissances structurées par synthèse de texte spécialisé" (Integration of structured knowledge through specialized text synthesis)[link](https://hal.science/hal-04130151/), where we compared fine tuned BERT models against models trained using a curated dataset of specialized text.

### Audio Localization Using Time Difference of Arrival

My first exposure to research was as the first author on [smartphone based audio localization using time difference of arrival](https://dl.acm.org/doi/abs/10.1145/2973750.2985625) where I implemented a demo of [Snooping Keystrokes with mm-level Audio Ranging on a Single Phone](https://dl.acm.org/doi/abs/10.1145/2789168.2790122).

### Lip Sync Recognition at Zenly

One of my favorite projects was my attempt to build an animated lip sync generation system for the voice notes feature. We had cute emoji faces that animated when the voice notes played, and I felt it would be perfect if they mouthed the users message. I read through a lot of the literature on lip sync generation, and tested several deep learning methods. I attempted to build a Formant extraction system using Linear Predictive Coding which would map formants to mouth shapes. Ultimately we were recognized by the French Government's CIR (Research Tax Credit Program) and accepted for a grant in experimental development. It was this experience that led me to consider returning to school and pursuing machine learning. 
