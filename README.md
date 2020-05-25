## Visualizing (Un)certainty in Machine Learning Predictions

### INTRODUCTION
A machine learning algorithm is always just as good as its training. The training is performed by a human who takes certain decisions related to the architecture of the training, as well as the training set which is used to train the algorithm.
This training set, in our case almost 160000 toxic comments binary labelled as toxic or not toxic, determines what the algorithm will learn. In our training data, roughly 10% (every 10th comment) of the 160000 toxic comments was labelled as toxic. Once the human in charge of the training decides that the algorithm (machine) has learned “enough”, the algorithm is established as “generalizable”. That means when a new data is introduced to the trained algorithm, in our case a comment that is alien to the algorithm, the machine will use its training experience and classify the new comment as toxic or not toxic. 
Classifying language is a highly intercontextual metier, and therefore an incredibly complex task, even for a human. In some cases surrounding this complex craft -e.g. classifying email spam- the task can nowadays almost 100% be resolved by a trained algorithm. When it comes to hate speech though, the task of adequately classification gets really complex. Not only due to the many different spectra a language can contain, from satirical elements to special language within a peer group, but also due to bias in the training set itself. 
As mentioned earlier the algorithm in our case study was trained on 160000 wikipedia comments with a toxic comments rate of ca. 0.10. In 2017, a user tested this algorithm with 14 different comments (see Fig. 1), ranging from “I am a man” to “I am a gay black woman”. The latter was classified by the algorithm with 87% probability to be toxic while the first with a 20% probability to be toxic. This major difference between the two probabilities is explainable due to the bias hardwired into the training set and therefore into the learning experience of the algorithm.  

How can a potential user of this algorithm understand that a classification of such highly contextual comments contains a considerable amount of uncertainty by nature?  

### VISUAL CONCEPT
Our prototype uses 4 different elements (see Fig. 2).   

1. A typographical user input field.  
2. Shapes in different Colors encoding the spectrum of probability.  
3. Different Amount of Blurs encoding the transition from a high to a low probability.  
4. Motion which allows a transition in size as well as in colors and blur.  

The typographical input field is where the potential user is asked to provide their own input, which then gets through the algorithm. The user can write whatever comment (in english) she/he/they is/are interested in classifying. Once this input is provided by the user, the user directly gets a visual “answer”. With this concept, we rely on the principle of the promotion of “the integration of uncertainty information through experience rather than description”, while visualising uncertainty (Kale et al., 2019); the user can always test new input that the algorithm “responds” to, allowing the user to experience the architecture of the algorithm through its  decisions.
The colors used in our visualization are taken from a diverging color palette (Fig. 3). A high probability if the comment is not toxic is encoded in 5 shades of blue, while a high probability if the comment is indeed toxic is encoded in shades of red. The choice and principle of colors was inspired by the “Value Suppressing Uncertainty Palettes” elaborated in the self named paper by Michael Corell and colleagues (2018). 
The amount of percentage to encode in these shades is a very important decision in our design architecture. We decided to encode a 3% threshold (97–100%, respectively 1–3% probability whether the comment is toxic or not) as the highest amount of certainty. Followed by 94–97%, respectively 3–6% step and finally a 91-94%, respectively 6–9% step as well as a 91–89%, respectively 9-12%. 
From 12% percent on, the color transitions from a very light blue to a beige and very light red (orange).  
Here come the ‘blur’ and ‘motions’ into play. Rather than providing a static visualisation of the calculated probability, we thought that the visual response should deliberately convey a visual representation of uncertainty through dynamic margins.
This visual margin is on the one hand described through a transition of one color to the other, as well as an infinity loop of the size of the shape. On the other hand, the amount of blur projected on each shape is increased by the amount of uncertainty of probability.  As a result the area of a 7–93% probability is a transition from blue to beige to red in the highest amount of blur.
This interaction of motion/animation, color coding and projected blur allows to answer the uncertainty of machine learning algorithms classifying language content. The visuality of our concept aims to communicate to the user that the algorithm’s classification of highly contextual information is never a binary classification and that it always contains uncertainty.


References
Kale, A., Nguyen, F., Kay, M., & Hullman, J. (2018). Hypothetical outcome plots help untrained observers judge trends in ambiguous data. IEEE transactions on visualization and computer graphics, 25(1), 892-902. doi: 10.1109/TVCG.2018.2864909
Correll, M., Moritz, D., & Heer, J. (2018, April). Value-suppressing uncertainty palettes. In Proceedings of the 2018 CHI Conference on Human Factors in Computing Systems(pp. 1-11). https://doi.org/10.1145/3173574.3174216
“Value-Suppressing Uncertainty Palettes”


Final Prototype Video. 
https://vimeo.com/417271930




