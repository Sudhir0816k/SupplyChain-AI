# SupplyChain-AI
AI-Powered Multi-Agent Supply Chain Exception Detection and Resolution Framework

## Overview

SupplyChain-AI is a research-driven project focused on building an intelligent supply chain management system capable of detecting, analyzing, and resolving supply chain disruptions.

The long-term goal is to develop a Multi-Agent RAG (Retrieval-Augmented Generation) framework that can:

- Detect supply chain exceptions in real time
- Retrieve relevant SOPs and historical cases
- Generate resolution strategies
- Audit decisions before execution
- Assist supply chain managers with proactive decision-making

---

# Current Progress

## Module 1: Supply Chain Exception Detection and Analysis ✅

Module 1 establishes the foundation of the system by generating synthetic supply chain datasets, performing exploratory data analysis, and identifying anomalies that may indicate operational disruptions.

### Completed Features

- Shipment dataset generation
- Exception event simulation
- Weather event simulation
- Exploratory Data Analysis (EDA)
- Exception trend analysis
- Weather impact analysis
- Weather–Exception correlation analysis
- Isolation Forest based anomaly detection
- Agent node workflow analysis
- Git and GitHub integration

---

# Project Architecture (Planned)

```text
Monitoring Agent
        ↓
Context Retrieval Agent (RAG)
        ↓
Strategy Generation Agent
        ↓
Auditor Agent
        ↓
Execution Agent
```

The current implementation focuses on the Monitoring Layer.

Future modules will implement the RAG pipeline, LLM reasoning, and multi-agent orchestration.

---

# Datasets Generated

### Shipments Dataset

Contains:

- Shipment ID
- Route
- Status
- Dispatch Date
- Expected Delivery
- Actual Delivery
- Delay Days
- Weight
- Temperature
- Carrier
- Cost

File:

```text
module1/shipments.csv
```

### Exceptions Dataset

Contains simulated supply chain disruptions such as:

- Weather Disruption
- Customs Hold
- Carrier Failure
- Inventory Shortage
- Damaged Goods
- Route Delay

File:

```text
module1/exceptions.csv
```

### Weather Events Dataset

Contains simulated weather events affecting logistics operations.

File:

```text
module1/weather_events.csv
```

---

# Analysis Performed

## Shipment Analysis

- Delivery performance
- Delay distribution
- Route analysis

Output:

```text
shipment_eda.png
```

## Exception Analysis

- Exception frequency
- Severity distribution
- Operational risk identification

Output:

```text
exception_eda.png
```

## Weather Impact Analysis

- Weather event distribution
- Impact on shipment delays

Output:

```text
weather_impact.png
```

## Weather–Exception Correlation

- Relationship between weather conditions and supply chain disruptions

Output:

```text
weather_exception_correlation.png
```

## Anomaly Detection

Implemented using:

```python
IsolationForest
```

Purpose:

- Detect unusual shipment behavior
- Identify potential operational risks

Output:

```text
anomaly_detection.png
```

---

# RAG Context Retrieval Simulation

Module 1 includes a simulated Retrieval-Augmented Generation (RAG) workflow demonstrating:

- SOP retrieval
- Historical case retrieval
- Context preparation for future LLM reasoning

Example exception categories:

- Weather Disruption
- Customs Hold
- Carrier Failure

---

# Technologies Used

## Programming

- Python 3.11

## Data Processing

- NumPy
- Pandas

## Visualization

- Matplotlib
- Seaborn

## Machine Learning

- Scikit-Learn
- Isolation Forest

## AI & Future Modules

- LangChain
- LangGraph
- ChromaDB
- Google Gemini API

## Development Tools

- VS Code
- Jupyter Notebook
- Git
- GitHub

---

# Repository Structure

```text
SupplyChain-AI
│
├── module1
│   ├── Module1_Supply_Chain_Exception_Detection_and_Resolution.ipynb
│   ├── shipments.csv
│   ├── exceptions.csv
│   ├── weather_events.csv
│   ├── shipment_eda.png
│   ├── exception_eda.png
│   ├── weather_impact.png
│   ├── weather_exception_correlation.png
│   ├── anomaly_detection.png
│   └── agent_node_analysis.png
│
├── requirements.txt
├── .gitignore
└── README.md
```

---

# Future Roadmap

## Module 2

- ChromaDB Vector Database
- Embedding Generation
- SOP Storage
- Historical Case Storage

## Module 3

- Retrieval-Augmented Generation (RAG)
- Context Retrieval Pipeline

## Module 4

- Multi-Agent Architecture using LangGraph

## Module 5

- LLM-Based Resolution Strategy Generation

## Module 6

- Auditor Agent and Decision Validation

## Module 7

- End-to-End Autonomous Supply Chain Exception Resolution

---

# Status

Current Phase:

✅ Module 1 Completed

Next Phase:

🔄 RAG Knowledge Base Construction and Vector Database Integration

---

Developed as part of a Final Year Research Project on AI-Driven Supply Chain Intelligence.