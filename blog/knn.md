---
slug: knn
title: Diving into KNN
authors: aneesh
tags: [ml, knn, weighted knn, algo]
---

## Plain Definition

KNN (K-Nearest Neighbors) is a machine learning algorithm used for classification and [regression tasks](/blog/regression). It is a [non-parametric algorithm](/blog/non-parametric), which means that it does not make any assumptions about the underlying distribution of the data.

In the KNN algorithm, the input data is represented as points in a high-dimensional space, and the algorithm classifies new data points based on their proximity to the existing data points. Specifically, the algorithm calculates the distance between the new data point and each of the existing data points, and then assigns the new data point to the class that is most common among its K nearest neighbors.

The value of K is a hyperparameter that can be tuned to optimize the performance of the algorithm. A larger value of K will result in a smoother decision boundary, but may also lead to misclassification of data points that are close to the boundary between two classes.

KNN is a simple and effective algorithm that can be used for a wide range of classification and [regression tasks](/blog/regression). However, it can be computationally expensive for large datasets, and may not perform well in high-dimensional spaces.

---

## Real time example

Imagine you are a penguin living in Antarctica, and you want to find a new place to build your igloo. You have heard that some areas are better than others, but you're not sure which ones. So, you decide to ask your penguin friends for advice.

You ask your friends to rate different areas on a scale of 1 to 10, based on how good they are for building an igloo. You also ask them to tell you the distance of each area from your current location.

Now, you have a dataset of ratings and distances for different areas. You want to use this data to find the best place to build your igloo.

This is where KNN comes in. It can help you find the best place to build your igloo based on the ratings and distances provided by your friends.

Here's how it works:

1. You choose a value for K. This is the number of neighbors you want to consider when making a decision. Let's say you choose K=3.
2. You calculate the distance between each area and your current location.
3. You find the 3 areas that are closest to your current location.
4. You look at the ratings for these 3 areas, and take the average. This gives you a predicted rating for each of the 3 areas.
5. You choose the area with the highest predicted rating as the best place to build your igloo.

So, in this example, KNN helped you find the best place to build your igloo based on the ratings and distances provided by your friends.

Of course, in real life, KNN can be used for many other things besides finding the best place to build an igloo. For example, it can be used to predict the price of a house based on its features, or to classify images based on their content.

But hopefully this fun example helps you understand the basic idea behind KNN!

---

## Now what is this weighted KNN?

Weighted KNN is a variation of the KNN algorithm where the contribution of each of the K nearest neighbors is weighted according to their distance from the query point. In other words, the closer a neighbor is to the query point, the more weight it is given in the final prediction.

In the standard KNN algorithm, all K neighbors are given equal weight in the final prediction. However, this may not always be the best approach, as some neighbors may be more relevant than others depending on their distance from the query point.

For example, let's say you are trying to predict the price of a house based on its features, such as the number of bedrooms, bathrooms, and square footage. In a standard KNN algorithm, the K nearest neighbors are chosen based solely on their feature values, without considering their distance from the query point. However, it's possible that some of these neighbors are located far away from the query point, and therefore may not be as relevant to the prediction.

In a weighted KNN algorithm, the contribution of each neighbor is weighted based on its distance from the query point. This means that neighbors that are closer to the query point are given more weight in the final prediction, while neighbors that are farther away are given less weight.

Using the same example of predicting house prices, this means that the K nearest neighbors are chosen based on both their feature values and their distance from the query point. The closer a neighbor is to the query point, the more weight it is given in the final prediction, as it is considered to be more relevant to the prediction.

Overall, weighted KNN can be a useful variation of the KNN algorithm when the distance between neighbors is an important factor in the prediction.
