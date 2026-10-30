---
baslik: "Normality Testing in SPSS: Which Test to Use, How to Interpret It and How to Report It"
aciklama: "Checking normality in SPSS with Shapiro-Wilk, Kolmogorov-Smirnov, skewness and kurtosis and Q-Q plots, and how to report it in a thesis or article."
ozet: "Normality is an assumption of parametric tests (t-test, ANOVA, Pearson correlation) and is checked in SPSS via Analyze > Descriptive Statistics > Explore. In small and medium samples the Shapiro-Wilk test is usually reported; in large samples the test result should be read together with skewness, kurtosis and the Q-Q plot. The decision should never rest on a single p-value."
yayin: "2026-10-30"
yazar: editorluk
hizmetler:
  - spss-analizi
  - istatistiksel-analiz-danismanligi
anahtarKelimeler:
  - SPSS normality test
  - Shapiro-Wilk
  - Kolmogorov-Smirnov
  - skewness and kurtosis
  - Q-Q plot
  - parametric test assumptions
sss:
  - q: "Should I use Shapiro-Wilk or Kolmogorov-Smirnov?"
    a: "Shapiro-Wilk generally has more power to detect departures from normality, which is why it is the one most often reported for small and medium samples. The SPSS Explore procedure gives both; choose the one that matches common practice in your field and your supervisor's preference, and state the reason in your methods section."
  - q: "My p-value is below .05. Does that mean I cannot use a parametric test?"
    a: "Do not decide on that alone. In large samples, normality tests flag even tiny departures as significant. Look at skewness and kurtosis, the histogram and the Q-Q plot together; if the departure is substantial, consider the non-parametric alternative (e.g. Mann-Whitney U, Kruskal-Wallis) or a transformation."
  - q: "Should I check normality for the whole dataset or for each group?"
    a: "For tests that compare groups (independent-samples t-test, ANOVA), normality is examined separately for each group. In the SPSS Explore dialog, simply add the grouping variable to the Factor List."
---

## Why check normality?

Parametric tests such as the independent-samples t-test, one-way ANOVA and Pearson correlation assume that the data (or each group) are approximately normally distributed. When this assumption is seriously violated, the test's p-value and confidence intervals become unreliable. That is why "did you check the assumptions?" is one of the first questions examiners and reviewers ask about a methods section.

The aim of a normality check is not to prove that the data are perfectly normal, but to decide whether **the test you have chosen is defensible with these data**.

## How do you test normality in SPSS?

1. Open **Analyze > Descriptive Statistics > Explore**.
2. Move the continuous variable you are examining into the **Dependent List**.
3. If you are comparing groups, add the grouping variable to the **Factor List**.
4. Click **Plots** and tick **Normality plots with tests**; you can also select **Histogram**.
5. Leave **Both** selected under **Display** and click **OK**.

Three parts of the output are useful: the **Descriptives** table (skewness and kurtosis), the **Tests of Normality** table (Kolmogorov-Smirnov and Shapiro-Wilk) and the **Normal Q-Q Plot** charts.

## Which test should you choose: Shapiro-Wilk or Kolmogorov-Smirnov?

In the SPSS Explore procedure, the Kolmogorov-Smirnov test is reported with the Lilliefors correction, and Shapiro-Wilk appears next to it in the same table. Simulation studies show that Shapiro-Wilk is generally more powerful at detecting departures from normality, so **Shapiro-Wilk** is most often reported for small and medium samples.

| Criterion | What it tells you | Caution |
| --- | --- | --- |
| Shapiro-Wilk | Whether the distribution departs significantly from normal | Flags small departures in large samples |
| Kolmogorov-Smirnov (Lilliefors) | The same question, a different approach | Generally less powerful than Shapiro-Wilk |
| Skewness / kurtosis | The direction and size of the departure | Thresholds vary by source; cite the one you use |
| Q-Q plot | Where the departure is (tails, centre) | A visual judgement; not enough on its own |

For both tests, the **null hypothesis is "the distribution is normal"**. If p > .05, you can say there is no significant departure from normality; this does not prove that the data are definitely normal.

## Why can the p-value mislead in large samples?

As the sample grows, normality tests detect very small departures that make no practical difference. In a survey with a few hundred participants, a Shapiro-Wilk p-value below .05 is common. In very small samples, on the other hand, the test has little power and a clear departure can go unnoticed.

So the decision should not rest on a single p-value. A sound approach is:

- Look at **skewness and kurtosis**. Different thresholds are used in the literature (e.g. ±1.5 or ±2); state which one you used, with its source, in the methods section.
- Check how closely the points follow the diagonal line in the **Q-Q plot**. Departures at the ends may point to outliers.
- Use the **histogram** to check the shape of the distribution (is it unimodal, is there a pronounced tail?).

## What if normality is not met?

The options depend on your research question and the structure of your data:

- **Non-parametric alternative:** Mann-Whitney U instead of the independent-samples t-test, Kruskal-Wallis instead of one-way ANOVA, Spearman instead of Pearson correlation.
- **Examine outliers:** first check for data entry errors. Removing an observation without justification is problematic in terms of research ethics; if you remove any, report the criterion and how many observations were affected.
- **Transformation:** a logarithmic or square-root transformation can correct some skewed distributions, but you then have to interpret the results on the transformed scale.

Whichever route you take, writing down the reason for the decision matters as much as the result itself.

## How do you report it in a thesis or article?

In APA 7 style, the normality result is usually given in a short sentence in the methods or results section. Report the test statistic, the degrees of freedom (sample size) and the p-value; if you used a skewness-kurtosis threshold, cite its source.

> The distribution of scores was examined with the Shapiro-Wilk test, and no significant departure from normality was found in either group (experimental group: W(32) = 0.97, p = .41; control group: W(30) = 0.95, p = .18). Skewness and kurtosis values were also within the chosen ±1.5 range.

The numbers above are examples **only to show the format**; use the values from your own output. Follow your university's thesis guidelines for the decimal separator and how p-values are written (.05 or 0.05).
