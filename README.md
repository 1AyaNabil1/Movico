# Movico - Movie Survey Research Project

A comprehensive survey research project analyzing movie-watching preferences, behaviors, and genre ratings among audiences.

## Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Research Phases](#research-phases)
- [Data Description](#data-description)
- [Technical Stack](#technical-stack)
- [Getting Started](#getting-started)
- [Key Findings](#key-findings)
- [Contributing](#contributing)
- [License](#license)

## Overview

Movico is a multi-phase academic survey research project that investigates:

- Movie genre preferences and rating patterns
- Viewing habits (home vs. cinema attendance)
- Factors influencing movie selection decisions
- Relationships between demographic variables and movie preferences
- Impact of reviews, advertisements, and social factors on viewing choices

## Project Structure

```
Movico/
├── code/
│   ├── python/              # Data cleaning notebooks
│   │   ├── data_cleaning.ipynb
│   │   └── split_fill.ipynb
│   └── r/                   # Statistical analysis scripts
│       └── statistical_analysis.R
├── data/
│   ├── raw/                 # Original survey responses
│   ├── cleaned/             # Processed datasets
│   └── segmented/           # Subset data (cinema/home viewers)
├── docs/
│   ├── reports/             # Phase reports and documentation
│   └── presentations/       # PowerPoint presentations
├── assets/
│   ├── images/              # Photos and reference images
│   └── visualizations/      # R plots and Tableau dashboards
├── website/                 # Future website files
└── .github/
    └── copilot-instructions.md
```

## Research Phases

| Phase | Description | Output |
|-------|-------------|--------|
| 1 | Research Proposal | Problem statement, objectives, methodology |
| 2 | Questionnaire Design | Survey instrument development |
| 3 | Data Collection | Survey distribution and response gathering |
| 4 | Data Cleaning | Python-based preprocessing and validation |
| 5 | Descriptive Analysis | Summary statistics and initial insights |
| 6 | Statistical Analysis | Chi-square tests, correlation, ordinal regression |
| 7 | Final Reporting | Conclusions and recommendations |

## Data Description

### Survey Variables

**Demographics:**
- Gender, Age

**Viewing Behavior:**
- Watching_Place (Home/Cinema)
- Frequent_Go_Cinema
- Last_Watched
- Search_Before_Watch

**Genre Ratings (1-5 scale):**
- Action_Rate, Comedy_Rate, Drama_Rate, Romance_Rate
- Horror_Rate, Sci_fi_Rate, Adventure_Rate, Musical_Rate, Family_Rate

**Decision Factors:**
- Quality_.Story, Reviews, Ads_effect
- Reason_of_Watch

### Dataset Files

| File | Records | Description |
|------|---------|-------------|
| Questionnaire - Movies Genres.csv | - | Original survey responses |
| clean data edited.csv | - | Main cleaned dataset |
| Cinema.csv | - | Cinema viewers subset |
| Home.csv | - | Home viewers subset |

## Technical Stack

### Data Cleaning (Python)
- pandas

### Statistical Analysis (R)
- dplyr - Data manipulation
- ggplot2 - Visualization
- ggstatsplot - Statistical plots with annotations
- corrplot - Correlation matrices
- MASS - Ordinal logistic regression
- Hmisc - Descriptive statistics

### Visualization
- Tableau - Interactive dashboards
- R plotting - Statistical visualizations

## Getting Started

### Prerequisites

**Python Environment:**
```bash
pip install pandas openpyxl
```

**R Environment:**
```r
install.packages(c("dplyr", "ggplot2", "ggstatsplot", "corrplot", "MASS", "Hmisc", "lessR"))
```

### Running the Analysis

1. **Data Cleaning:**
   Open `code/python/data_cleaning.ipynb` in Jupyter and run all cells.

2. **Statistical Analysis:**
   Open `code/r/statistical_analysis.R` in RStudio and execute the script.

3. **Visualization:**
   Open `assets/visualizations/Survey Final Project.twbx` in Tableau.

### Important Notes

- Update file paths in scripts from absolute Windows paths to relative paths
- Column names in raw data may contain leading/trailing spaces
- Use mode imputation for missing categorical values

## Key Findings

The research explores relationships between:
- Search behavior and advertisement effectiveness
- Cinema attendance frequency and genre preferences
- Quality/story factors and genre ratings
- Demographic patterns in movie consumption

Statistical methods include chi-square tests for categorical associations and ordinal logistic regression for predicting genre preferences.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-analysis`)
3. Commit changes (`git commit -am 'Add new analysis'`)
4. Push to branch (`git push origin feature/new-analysis`)
5. Open a Pull Request

## License

This project is for academic and research purposes.

---

**Authors:** Survey Research Team  
**Institution:** Academic Research Project  
**Year:** 2023-2024
