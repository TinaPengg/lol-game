---

**Project Title**: *Win Rate Prediction System for League of Legends Matches (Random Forest-Based)*

---

### 1. **Project Objective**

This project aims to predict the win rate of a single team in *League of Legends* matches using Logistic Regression, Naive Bayes (NB), and Random Forest models. The dataset consists of matches from players ranked Master or above. The key focus of this system is to estimate the win probability of one team, rather than comparing both teams' performance outcomes.

---

### 2. **System Architecture**

- **LightGBM**: Handles post-match *neutral resource control* features (e.g., dragons, Rift Herald, jungle CS difference), incorporating a total of 38 features.

---

### 3. **Data Processing and Feature Engineering**

- **Data Sources**: OP.GG, Riot API. Versioning is explicitly noted, as patch versions significantly affect champion strengths and pick rates.
- **Labeling Win Rate**: Match outcomes are converted into binary labels ¡X 0 (loss) / 1 (win) ¡X as training targets.

#### Feature Design

- **Categorical Features**: Champion roles are encoded using one-hot encoding (e.g., Mage, Tank, Assassin, Crowd Control, Marksman).
- **Statistical Features**: Overall win rate and pick rate of each champion in the current patch.

---

### 4. **Evaluation Metrics**

- **Primary Metrics**: ROC-AUC and F1-score
- **Baseline Model**: Random guessing at 50%

---

### 5. **Model Performance Reference**

- **DNN**: ~75.1% to 93.75%
- **Decision Tree**: ~68.33% to 85.17%
- **RNN**: ~63.91% to 83.54% (varies by timepoint)

---

### 6. **Actual Performance Results**

#### **Random Forest**

**=== Validation Set Performance ===**

- **Validation Accuracy**: 0.9869960988296489  
- **F1 Score**: 0.9871630295250321  
- **ROC AUC**: 0.9993378323523441  
- **Positive Class (1) Prediction Ratio**: 0.505851755526658

---

#### **Naive Bayes**

- **Train Accuracy**: 0.9795967644573222  
- **Test Accuracy**: 0.9792370835345244  
- **Cross-Validation Accuracy**: 0.9792356839446044  

|               | Precision | Recall | F1-score | Support |
|---------------|-----------|--------|----------|---------|
| **Class 0**   | 0.98      | 0.98   | 0.98     | 994     |
| **Class 1**   | 0.98      | 0.98   | 0.98     | 1077    |
| **Accuracy**  |           |        | 0.98     | 2071    |
| **Macro Avg** | 0.98      | 0.98   | 0.98     | 2071    |
| **Weighted Avg** | 0.98   | 0.98   | 0.98     | 2071    |

---

#### **Logistic Regression**

- **Train Accuracy**: 0.9797174936617168  
- **Test Accuracy**: 0.9845485272815065

---
