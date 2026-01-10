<div align="center">

# Movico - Movie Survey Research
Because sometimes, the right movie can light the stars inside you | [Website](https://movico.vercel.app/)

<!--
![Movico](assets/branding/logo.png)
-->

</div>

<br/>
A multi-phase academic research project investigating movie genre preferences, viewing habits, and the factors that influence audience decisions. Built with Python for data cleaning and R for statistical analysis.

## Features

- Survey-based data collection on movie preferences
- Statistical analysis including chi-square tests and ordinal regression
- Interactive Tableau dashboards for data visualization
- Comprehensive genre rating analysis (Action, Comedy, Drama, Romance, Horror, Sci-Fi, and more)
- Home vs Cinema viewing behavior comparison

## Project Structure

```
Movico/
├── code/
│   ├── python/         # Data cleaning notebooks
│   └── r/              # Statistical analysis scripts
├── data/
│   ├── raw/            # Original survey responses
│   ├── cleaned/        # Processed datasets
│   └── segmented/      # Cinema/Home viewer subsets
├── docs/
│   ├── reports/        # Phase reports (PDF)
│   └── presentations/  # PowerPoint files
├── assets/
│   ├── images/         # Reference images
│   └── visualizations/ # R plots and Tableau dashboards
└── website/            # Project website
```

## Data Overview

| Variable Category | Examples |
|-------------------|----------|
| Demographics | Gender, Age |
| Viewing Behavior | Watching_Place, Frequent_Go_Cinema, Last_Watched |
| Genre Ratings (1-5) | Action, Comedy, Drama, Romance, Horror, Sci-Fi |
| Decision Factors | Quality/Story, Reviews, Ads_effect |

## Tech Stack

| Category | Technologies |
|----------|-------------|
| Data Cleaning | Python, pandas |
| Statistical Analysis | R, dplyr, ggplot2, MASS |
| Visualization | Tableau, ggstatsplot, corrplot |
| Documentation | Jupyter Notebooks |

## Getting Started

### Prerequisites

**Python:**
```bash
pip install pandas openpyxl
```

**R:**
```r
install.packages(c("dplyr", "ggplot2", "ggstatsplot", "corrplot", "MASS", "Hmisc", "lessR"))
```

### Quick Start

1. Clone the repository
   ```bash
   git clone https://github.com/1AyaNabil1/Movico.git
   cd Movico
   ```

2. Run data cleaning
   ```bash
   jupyter notebook code/python/data_cleaning.ipynb
   ```

3. Run statistical analysis
   ```bash
   Rscript code/r/statistical_analysis.R
   ```

4. View dashboards in `assets/visualizations/`

## Research Phases

| Phase | Description |
|-------|-------------|
| 1 | Research Proposal |
| 2 | Questionnaire Design |
| 3 | Data Collection |
| 4 | Data Cleaning (Python) |
| 5 | Descriptive Analysis |
| 6 | Statistical Analysis (R) |
| 7 | Final Reporting |

## Key Findings

- Relationships between search behavior and advertisement effectiveness
- Cinema attendance patterns and genre preferences
- Quality/story factors impact on genre ratings
- Demographic patterns in movie consumption

## License

This project is for academic and research purposes.

---
## Credits & Links

- **Built by**: [AyaNexus](https://ayanexus.dev/) 🦢
- **GitHub Repository**: [Movico](https://github.com/1AyaNabil1/Movico)
- **Live Demo**: [Movico](https://movico.vercel.app/)

---

<div align="center">
  <p><em>Research by AyaNexus 🦢</em></p>
</div>
