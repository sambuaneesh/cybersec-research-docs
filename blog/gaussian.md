---
slug: gaussian
title: What is Gaussian?
authors: aneesh
tags: [algo, gaussian, gaussian naive bayes]
---

## What's a Gaussian Distribution?

![](https://th.bing.com/th/id/OIP.QSPgbSo7zQz6-jZQUTEwGQHaDh?pid=ImgDet&rs=1)

The Gaussian distribution is often used to model real-world phenomena that are naturally distributed around a central value, such as the heights of people in a population, the weights of objects, or the errors in a measurement. It is also used in many machine learning algorithms, such as linear regression, logistic regression, and Gaussian mixture models.
The Gaussian distribution has several important properties, such as the 68-95-99.7 rule, which states that approximately 68% of the data falls within one standard deviation of the mean, 95% falls within two standard deviations, and 99.7% falls within three standard deviations. This makes it a useful tool for analyzing and modeling data in many different fields.

---

## What is a Gaussian Naive Bayes Classifier?

### Simple Definition

Gaussian naive Bayes classifiers are a type of probabilistic classifier that assume that the features of a data point are independent and normally distributed, and use Bayes' theorem to calculate the probability of each class given the features.

### Lets dive Deeper

Gaussian [Naive Bayes](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#na%C3%AFve-bayes) (GNB) is a probabilistic classifier that is based on Bayes' theorem and assumes that the features of a data point are independent and normally distributed. It is called "naive" because it makes a strong assumption of independence between the features, which may not always be true in practice. Despite this simplifying assumption, GNB can be surprisingly effective in many real-world applications.

The GNB classifier works by first estimating the mean and variance of each feature for each class in the training data. Then, given a new data point with features x, it calculates the probability of each class c using Bayes' theorem:

**P(c|x) = P(x|c) \* P(c) / P(x)**

- where P(c|x) is the probability of class c given the features x
- P(x|c) is the probability of observing the features x given class c (which is modeled as a Gaussian distribution with mean and variance estimated from the training data)
- P(c) is the prior probability of class c (which is estimated from the relative frequency of each class in the training data)
- P(x) is the marginal probability of observing the features x (which can be calculated as the sum of P(x|c) \_ P(c) over all classes).

Finally, the GNB classifier predicts the class with the highest probability. In practice, GNB can be very fast and efficient, especially for high-dimensional data with many features. However, it may not perform well if the independence assumption is strongly violated or if the data is not well-modeled by a Gaussian distribution.
