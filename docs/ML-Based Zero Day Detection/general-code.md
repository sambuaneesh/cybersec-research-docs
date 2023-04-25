---
sidebar_position: 4
---

# General Idea of writing code for Classification

> ## Import the Necessary Libraries

```python
import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score
from sklearn.ensemble import RandomForestClassifier
from sklearn.naive_bayes import GaussianNB
from sklearn.neural_network import MLPClassifier
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis
```

---

> ## Load the Data into a dataframe

```python
# Load the data from CSV file
# df = pd.read_csv(r"D:\Stuff\CyberSec\archive\03-02-2018.csv")
df = pd.read_csv(r"..\Datasets\IDS2018\02-14-2018.csv")

# Remove any rows with missing values
# df = df.dropna()

# Drop columns where all values are 0
# df = df.loc[:, (df != 0).any(axis=0)]

# to select first n rows only
# df = df.iloc[:n,:]
```

---

> ## To print the features available in our model

```python
for i, col_name in enumerate(df.columns):
    print(f"Feature {i+1}:\t\"{col_name}\"")
```

---

### Accuracy for [Decision Tree](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#decision-tree)

```python
# specify column indexes to select
selected_cols_idx = [1,2,4,5,6,11,15,19,29,33,34,35,40,46,48,58,59,62,66]

selected_cols_idx = [x - 1 for x in selected_cols_idx]

# select columns by index using iloc
X = df.iloc[:, selected_cols_idx].values
y = df.iloc[:, -1].values

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Train the decision tree classifier
clf = DecisionTreeClassifier()
clf.fit(X_train, y_train)

# Test the classifier
accuracy = clf.score(X_test, y_test)

# Get the names of the selected columns
selected_cols = list(df.columns[selected_cols_idx])

print("Accuracy for the following features combined", selected_cols, "is:", accuracy)
```

---

### Accuracy for [Random Forest](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#random-forest)

```python
# specify column indexes to select
selected_cols_idx = [1,2,4,5,6,11,15,19,29,33,34,35,40,46,48,58,59,62,66]
selected_cols_idx = [x - 1 for x in selected_cols_idx]

# select columns by index using iloc
X = df.iloc[:, selected_cols_idx].values
y = df.iloc[:, -1].values

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Train the Random Forest classifier
rf = RandomForestClassifier(n_estimators=100, random_state=42)
rf.fit(X_train, y_train)

# Test the classifier
accuracy = rf.score(X_test, y_test)

# Get the names of the selected columns
selected_cols = list(df.columns[selected_cols_idx])

print("Accuracy for the following features combined", selected_cols, "is:", accuracy)
```

---

### Accuracy for [KNN](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#knn)

```python
# specify column indexes to select
selected_cols_idx = [1,2,4,5,6,11,15,19,29,33,34,35,40,46,48,58,59,62,66]
selected_cols_idx = [x - 1 for x in selected_cols_idx]

# select columns by index using iloc
X = df.iloc[:, selected_cols_idx].values
y = df.iloc[:, -1].values

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Train the KNN classifier
knn = KNeighborsClassifier()
knn.fit(X_train, y_train)

# Test the classifier
accuracy = knn.score(X_test, y_test)

# Get the names of the selected columns
selected_cols = list(df.columns[selected_cols_idx])

print("Accuracy for the following features combined", selected_cols, "is:", accuracy)
```

---

### Accuracy for [Weighted KNN](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#knn)

```python
# specify column indexes to select
selected_cols_idx = [1,2,4,5,6,11,15,19,29,33,34,35,40,46,48,58,59,62,66]
selected_cols_idx = [x - 1 for x in selected_cols_idx]

# select columns by index using iloc
X = df.iloc[:, selected_cols_idx].values
y = df.iloc[:, -1].values

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Train the weighted KNN classifier
knn = KNeighborsClassifier(weights='distance')
knn.fit(X_train, y_train)

# Test the classifier
accuracy = knn.score(X_test, y_test)

# Get the names of the selected columns
selected_cols = list(df.columns[selected_cols_idx])

print("Accuracy for the following features combined", selected_cols, "is:", accuracy)
```

---

### Accuracy for [Gaussian Naive Bayes](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#naïve-bayes)

```python
# Specify column indexes to select
selected_cols_idx = [1,2,4,5,6,11,15,19,29,33,34,35,40,46,48,58,59,62,66]
selected_cols_idx = [x - 1 for x in selected_cols_idx]

# Select columns by index using iloc
X = df.iloc[:, selected_cols_idx].values
y = df.iloc[:, -1].values

# Split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# Train the Gaussian Naive Bayes classifier
gnb = GaussianNB()
gnb.fit(X_train, y_train)

# Test the classifier
accuracy = gnb.score(X_test, y_test)

# Get the names of the selected columns
selected_cols = list(df.columns[selected_cols_idx])

print("Accuracy for the following features combined", selected_cols, "is:", accuracy)
```

---

### Accuracy for [MLP](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#mlp)

```python
# specify column indexes to select
selected_cols_idx = [1, 2, 4, 5, 6, 11, 15, 19, 29, 33, 34, 35, 40, 46, 48, 58, 59, 62, 66]
selected_cols_idx = [x - 1 for x in selected_cols_idx]

# select columns by index using iloc
X = df.iloc[:, selected_cols_idx].values
y = df.iloc[:, -1].values

# split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# instantiate the MLP classifier
mlp = MLPClassifier(hidden_layer_sizes=(100, 50), max_iter=300, alpha=0.0001,
                    solver='adam', random_state=42, tol=0.0001)

# train the MLP classifier
mlp.fit(X_train, y_train)

# test the MLP classifier
accuracy = mlp.score(X_test, y_test)

# get the names of the selected columns
selected_cols = list(df.columns[selected_cols_idx])

print("Accuracy for the following features combined", selected_cols, "is:", accuracy)
```

---

### Accuracy for [QDA](/docs/ML-Based%20Zero%20Day%20Detection/ml-algorithms#qda)

```python
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import train_test_split
from sklearn.discriminant_analysis import QuadraticDiscriminantAnalysis

# specify column indexes to select
selected_cols_idx = [1, 2, 4, 5, 6, 11, 15, 19, 29, 33, 34, 35, 40, 46, 48, 58, 59, 62, 66]
selected_cols_idx = [x - 1 for x in selected_cols_idx]

# select columns by index using iloc
X = df.iloc[:, selected_cols_idx].values
y = df.iloc[:, -1].values

# split the data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# scale the data
scaler = StandardScaler()
X_train = scaler.fit_transform(X_train)
X_test = scaler.transform(X_test)

# instantiate the QDA classifier
qda = QuadraticDiscriminantAnalysis(reg_param=0.1)

# train the QDA classifier
qda.fit(X_train, y_train)

# test the QDA classifier
accuracy = qda.score(X_test, y_test)

# get the names of the selected columns
selected_cols = list(df.columns[selected_cols_idx])

print("Accuracy for the following features combined", selected_cols, "is:", accuracy)
```

---

### Get the Notebook from here

[CyberSec-NGIT/ml_imp_features.ipynb at main · stealthspectre/CyberSec-NGIT (github.com)](https://github.com/stealthspectre/CyberSec-NGIT/blob/main/Notebooks/ml_imp_features.ipynb)
