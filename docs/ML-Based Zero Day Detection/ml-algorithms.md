---
sidebar_position: 2
---

# ML Algorithms

Here we discuss about the ML Algorithms used to implement the models from the research paper.

## Decision Tree

- Decision Tree is a **Supervised learning technique** that can be used for both classification and Regression problems, but mostly it is preferred for solving Classification problems. It is a tree-structured classifier, where **internal nodes represent the features of a dataset, branches represent the decision rules** and **each leaf node represents the outcome.**
- In a Decision tree, there are two nodes, which are the **Decision Node** and **Leaf Node.** Decision nodes are used to make any decision and have multiple branches, whereas Leaf nodes are the output of those decisions and do not contain any further branches.
- The decisions or the test are performed on the basis of features of the given dataset.
- **_It is a graphical representation for getting all the possible solutions to a problem/decision based on given conditions._**
  ![](https://i.imgur.com/3eG4xzv.png)
- Decision Trees usually mimic human thinking ability while making a decision, so it is easy to understand.
- The logic behind the decision tree can be easily understood because it shows a tree-like structure.

> ### Decision Tree Terminologies

- **Root Node:** Root node is from where the decision tree starts. It represents the entire dataset, which further gets divided into two or more homogeneous sets.
- **Leaf Node:** Leaf nodes are the final output node, and the tree cannot be segregated further after getting a leaf node.
- **Splitting:** Splitting is the process of dividing the decision node/root node into sub-nodes according to the given conditions.
- **Branch/Sub Tree:** A tree formed by splitting the tree.
- **Pruning:** Pruning is the process of removing the unwanted branches from the tree.
- **Parent/Child node:** The root node of the tree is called the parent node, and other nodes are called the child nodes.

---

## Random Forest

Random Forest is a popular machine learning algorithm that belongs to the supervised learning technique. It can be used for both Classification and Regression problems in ML. It is based on the concept of **ensemble learning,** which is a process of *combining multiple classifiers to solve a complex problem and to improve the performance of the model.*

As the name suggests, **_"Random Forest is a classifier that contains a number of decision trees on various subsets of the given dataset and takes the average to improve the predictive accuracy of that dataset."_** Instead of relying on one decision tree, the random forest takes the prediction from each tree and based on the majority votes of predictions, and it predicts the final output.

**The greater number of trees in the forest leads to higher accuracy and prevents the problem of overfitting.**
![](https://i.imgur.com/yiMrCLS.png)

- It takes less training time as compared to other algorithms.
- It predicts output with high accuracy, even for the large dataset it runs efficiently.
- It can also maintain accuracy when a large proportion of data is missing.
- Random Forest is capable of performing both Classification and Regression tasks.
- It is capable of handling large datasets with high dimensionality.
- It enhances the accuracy of the model and prevents the overfitting issue.

---

## KNN

- [K-Nearest Neighbour](/blog/knn) is one of the simplest Machine Learning algorithms based on Supervised Learning technique.
- K-NN algorithm assumes the similarity between the new case/data and available cases and put the new case into the category that is most similar to the available categories.
- K-NN algorithm stores all the available data and classifies a new data point based on the similarity. This means when new data appears then it can be easily classified into a well suite category by using K- NN algorithm.
- K-NN algorithm can be used for Regression as well as for Classification but mostly it is used for the Classification problems.
- K-NN is a **non-parametric algorithm**, which means it does not make any assumption on underlying data.
- It is also called a **lazy learner algorithm** because it does not learn from the training set immediately instead it stores the dataset and at the time of classification, it performs an action on the dataset.
- KNN algorithm at the training phase just stores the dataset and when it gets new data, then it classifies that data into a category that is much similar to the new data.

![](https://i.imgur.com/xEIToSu.png)
Suppose there are two categories, i.e., Category A and Category B, and we have a new data point x1, so this data point will lie in which of these categories. To solve this type of problem, we need a K-NN algorithm. With the help of K-NN, we can easily identify the category or class of a particular dataset. Consider the below diagram:

- There is no particular way to determine the best value for "K", so we need to try some values to find the best out of them. The most preferred value for K is 5.
- A very low value for K such as K=1 or K=2, can be noisy and lead to the effects of outliers in the model.
- Large values for K are good, but it may find some difficulties.
- It is simple to implement.
- It is robust to the noisy training data
- It can be more effective if the training data is large.
- Always needs to determine the value of K which may be complex some time.
- The computation cost is high because of calculating the distance between the data points for all the training samples.

---

## Naïve Bayes

- [[Naïve Bayes]](/blog/gaussian) algorithm is a supervised learning algorithm, which is based on **Bayes theorem** and used for solving classification problems.
- It is mainly used in *text classification* that includes a high-dimensional training dataset.
- Naïve Bayes Classifier is one of the simple and most effective Classification algorithms which helps in building the fast machine learning models that can make quick predictions.
- **It is a probabilistic classifier, which means it predicts on the basis of the probability of an object**.
- Some popular examples of Naïve Bayes Algorithm are **spam filtration, Sentimental analysis, and classifying articles**.
- **Naïve**: It is called Naïve because it assumes that the occurrence of a certain feature is independent of the occurrence of other features. Such as if the fruit is identified on the bases of color, shape, and taste, then red, spherical, and sweet fruit is recognized as an apple. Hence each feature individually contributes to identify that it is an apple without depending on each other.
- **Bayes**: It is called Bayes because it depends on the principle of [Bayes' Theorem](https://www.javatpoint.com/bayes-theorem-in-artifical-intelligence).
- Naïve Bayes is one of the fast and easy ML algorithms to predict a class of datasets.
- It can be used for Binary as well as Multi-class Classifications.
- It performs well in Multi-class predictions as compared to the other Algorithms.
- It is the most popular choice for **text classification problems**.
- Naive Bayes assumes that all features are independent or unrelated, so it cannot learn the relationship between features.
- It is used for **Credit Scoring**.
- It is used in **medical data classification**.
- It can be used in **real-time predictions** because Naïve Bayes Classifier is an eager learner.
- It is used in Text classification such as **Spam filtering** and **Sentiment analysis**.

> ### Types of Naïve Bayes Model:

There are three types of Naive Bayes Model, which are given below:

- **Gaussian**: The Gaussian model assumes that features follow a normal distribution. This means if predictors take continuous values instead of discrete, then the model assumes that these values are sampled from the Gaussian distribution.
- **Multinomial**: The Multinomial Naïve Bayes classifier is used when the data is multinomial distributed. It is primarily used for document classification problems, it means a particular document belongs to which category such as Sports, Politics, education, etc.  
  The classifier uses the frequency of words for the predictors.
- **Bernoulli**: The Bernoulli classifier works similar to the Multinomial classifier, but the predictor variables are the independent Booleans variables. Such as if a particular word is present or not in a document. This model is also famous for document classification tasks.

---

## MLP

- Recommended to read [(Info-Bytes: Neural Networks)](/blog/neural-networks) to understand better

![](https://cdn.analyticsvidhya.com/wp-content/uploads/2020/02/ANN-Graph.gif)

> ### Multi-Layer Perceptron (MLP)

- MLP is a type of **feed-forward neural network** that can be used to classify data based on its features.
- MLP consists of multiple layers of nodes, including an input layer, one or more hidden layers, and an output layer.
- Each node in the network is connected to every node in the adjacent layers, and each connection has a weight that is learned during training.
- The MLP uses a non-linear activation function to introduce non-linearity into the model and enable it to learn complex patterns in the data.

> ### Training and Evaluation

- To use MLP for finding accuracy, the model first needs to be **trained on a labeled dataset**.
- During training, the weights of the connections between the nodes are adjusted using an optimization algorithm, such as backpropagation, to minimize the difference between the predicted output and the true output labels.
- Once the model is trained, we can evaluate its performance on a separate test dataset by comparing the predicted output labels with the true output labels and calculating various metrics, such as accuracy, precision, recall, and F1 score.

> ### Improving MLP Accuracy

- To improve the accuracy of the MLP model, we can experiment with different **hyperparameters**, such as the number of hidden layers, the number of nodes in each layer, the learning rate, and the activation function.
- We can also use techniques such as **regularization**, **dropout**, and **early stopping** to prevent overfitting and improve generalization performance.
- **Cross-validation** can also be used to estimate the performance of the model on unseen data and select the best hyperparameters.

> ### MLP for Classification Tasks

- MLP is commonly used for **classification tasks**, where the goal is to predict the class label of a given input based on its features.
- The output layer of the MLP consists of one node for each possible class, and the predicted class is the one with the highest output value.
- During training, the MLP learns to adjust the weights of the connections between the nodes to minimize the difference between the predicted class and the true class label.
- The weights are updated using an optimization algorithm, such as backpropagation, to minimize the loss function.
- Once the model is trained, it can be used to predict the class label of new input data by passing it through the network and selecting the class with the highest output value.

---

## QDA

- Refer to this [geeks4geeks](https://www.geeksforgeeks.org/quadratic-discriminant-analysis/) link
