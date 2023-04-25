---
slug: decision-tree
title: Decision Tree Classifier
authors: aneesh
tags: [ml, classifier, algo, decision-tree]
---

- It is a type of **Greedy Algorithm**
- In this we try to prepare a model by taking a set of features and try to prepare a binary tree where at the end of leaf notes we get a part of one feature only
- So basically we are classifying the given features with their conditions and dividing them by borders and seperating them
- example let the set of data be this
  - let our sample feature set be ![](https://i.imgur.com/X2jL7pJ.png)
  - where red is one type of feature and green is other
  - where x axis denotes $X_0$ and y axis denotes $X_1$
- the nodes other than **Leaf Nodes** are called **Decision Nodes**, we can find the required optimal decision for each node using information theory
- ![](https://i.imgur.com/MCqpXVY.png)
  - this is our decision tree, and leaf nodes consists of the classification
- even if we want to add a new entity, we follow the decision nodes starting from top and like binary search tree if go through the tree and place it in its respective position
- this is known as a greedy algorithm as we are finding the best case for our immediate sub task only, not considering future states prehandedly
- using **Information Theory**, entropy and all we get optimal decision conditions (cause there can be many we should choose optimal condition) (it comes under **Information Gain**)
- note: we use object oriented programming for implementing ml algorithms for ease of use and to use it more effectively
- we use other quantifier for decision nodes along with **Entropy** which is known as **Gini Index**
