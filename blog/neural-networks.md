---
slug: neural-networks
title: Neural Networks 🧠
authors: aneesh
tags: [ml, dl]
---

## So? What's the story of this Neural thing?

- These are artificial mathematical models which are inspired from our biological neural networks
- so basically it has three layers

  1.  **Input Layer**
  2.  **Output Layer**
  3.  **Hidden Layers**

- | ![](https://i.imgur.com/dFkw7xx.png) | ![](https://i.imgur.com/AsaMDnE.png) | ![](https://i.imgur.com/UEzwltc.png) |
  | ------------------------------------ | ------------------------------------ | ------------------------------------ |

- all between cells are called as **neurons**
- hidden layers do the most of the computations
  ![](https://i.imgur.com/75KkWUF.png)
- basically all these layers are connected with which we call as **channels**
- each channel has its own numerical **weight**
- the inputs are multiplied with the corresponding weight of the channel and then each neuron in hidden layer has a value which is known as a **bias**
- this bias is added to the multiplied value and is passed through a threshold function known as the **activation function**
- the result coming from the activation function determines whether the neuron is activated or not
- and then activated neurons participate in the further channels and they are propagated untill a final prediction is made
- this propagation is known as the **forward propagation**
- now at first we may not get the correct prediction as shown in the above picture, so now the error magnitude is calculated and based on that flow in reverse direction happen which is known as **backward propagation**

  ![](https://i.imgur.com/03SmHdJ.png)

- as this backward propagation takes place, the weights adjust themselves in such a way that they can predict correctly for a given data
- in this manner huge labeled data is trained so that neural network can get proper weights and it can predict properly
- it is a very time consuming and high computational process

---

## What are the real time examples?

- Facial Recognition
- Forecasting (Weather forecast etc)
- Music Composition

**Note**

- Anything in real life, which follows a pattern kind of resemblance, a neural network can be applied and trained
- Neural Networks come under deep learning which is a subset of machine learning

---
