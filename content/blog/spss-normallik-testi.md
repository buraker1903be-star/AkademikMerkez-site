---
baslik: "SPSS'te Normallik Testi: Hangi Test Seçilir, Nasıl Yorumlanır ve Raporlanır?"
aciklama: "SPSS'te Shapiro-Wilk ve Kolmogorov-Smirnov testleri, çarpıklık-basıklık ölçütleri ve Q-Q grafiği ile normallik kontrolü; tezde nasıl raporlanır."
ozet: "Normallik, parametrik testlerin (t testi, ANOVA, Pearson korelasyonu) varsayımıdır ve SPSS'te Analyze > Descriptive Statistics > Explore menüsünden kontrol edilir. Küçük ve orta örneklemde Shapiro-Wilk testi, büyük örneklemde ise test sonucuyla birlikte çarpıklık-basıklık değerleri ve Q-Q grafiği birlikte değerlendirilir; tek bir p değerine göre karar verilmez."
yayin: "2026-10-30"
yazar: editorluk
hizmetler:
  - spss-analizi
  - istatistiksel-analiz-danismanligi
anahtarKelimeler:
  - SPSS normallik testi
  - Shapiro-Wilk
  - Kolmogorov-Smirnov
  - çarpıklık basıklık
  - Q-Q grafiği
  - parametrik test varsayımları
sss:
  - q: "Shapiro-Wilk mi Kolmogorov-Smirnov mu kullanmalıyım?"
    a: "Normallik sınamasında Shapiro-Wilk testinin gücü genellikle daha yüksektir; bu yüzden küçük ve orta örneklemlerde çoğunlukla Shapiro-Wilk raporlanır. SPSS Explore menüsü ikisini birlikte verir; hangisini raporlayacağınızı alanınızdaki yaygın uygulamaya ve danışmanınızın tercihine göre belirleyin ve gerekçesini yöntem bölümünde yazın."
  - q: "p değeri 0,05'ten küçük çıktı; parametrik test kullanamaz mıyım?"
    a: "Tek başına buna karar vermeyin. Büyük örneklemlerde normallik testleri çok küçük sapmaları bile anlamlı bulur. Çarpıklık-basıklık değerlerine, histograma ve Q-Q grafiğine birlikte bakın; sapma ciddiyse parametrik olmayan karşılığı (ör. Mann-Whitney U, Kruskal-Wallis) ya da dönüşüm seçeneklerini değerlendirin."
  - q: "Normalliği tüm veriye mi, her grup için ayrı mı bakmalıyım?"
    a: "Grupları karşılaştıran testlerde (bağımsız örneklem t testi, ANOVA) normallik her grup için ayrı ayrı incelenir. SPSS Explore penceresinde grup değişkenini Factor List alanına eklemeniz yeterlidir."
---

## Normallik neden kontrol edilir?

Bağımsız örneklem t testi, tek yönlü ANOVA ve Pearson korelasyonu gibi **parametrik testler**, verinin (ya da grupların) yaklaşık olarak normal dağıldığını varsayar. Varsayım ciddi biçimde bozulduğunda testin p değeri ve güven aralıkları güvenilirliğini yitirir. Jüri ve hakemlerin yöntem bölümünde ilk sorduğu sorulardan biri bu yüzden "varsayımları kontrol ettiniz mi?" olur.

Normallik kontrolünün amacı "veri kusursuz normal mi?" sorusuna cevap vermek değil, **seçtiğiniz testin bu veriyle savunulabilir olup olmadığına** karar vermektir.

## SPSS'te normallik nasıl test edilir?

1. **Analyze > Descriptive Statistics > Explore** menüsünü açın.
2. İncelediğiniz sürekli değişkeni **Dependent List** alanına taşıyın.
3. Grupları karşılaştıracaksanız grup değişkenini **Factor List** alanına ekleyin.
4. **Plots** düğmesinde **Normality plots with tests** kutusunu işaretleyin; isterseniz **Histogram** da seçin.
5. **Display** bölümünde **Both** seçili kalsın ve **OK** ile çalıştırın.

Çıktıda üç bölüm işinize yarar: **Descriptives** tablosu (çarpıklık ve basıklık), **Tests of Normality** tablosu (Kolmogorov-Smirnov ve Shapiro-Wilk) ve **Normal Q-Q Plot** grafikleri.

## Hangi testi seçmeli: Shapiro-Wilk mi, Kolmogorov-Smirnov mu?

SPSS'in Explore menüsündeki Kolmogorov-Smirnov testi Lilliefors düzeltmesiyle verilir; Shapiro-Wilk ise aynı tabloda yanında yer alır. Simülasyon çalışmaları, normallikten sapmayı yakalamada Shapiro-Wilk testinin genellikle daha güçlü olduğunu gösterir. Bu nedenle küçük ve orta örneklemlerde çoğunlukla **Shapiro-Wilk** raporlanır.

| Ölçüt | Ne söyler? | Dikkat |
| --- | --- | --- |
| Shapiro-Wilk | Dağılımın normalden anlamlı sapıp sapmadığı | Büyük örneklemde küçük sapmaları da anlamlı bulur |
| Kolmogorov-Smirnov (Lilliefors) | Aynı soru, farklı yaklaşım | Gücü genellikle Shapiro-Wilk'ten düşüktür |
| Çarpıklık / basıklık | Sapmanın yönü ve büyüklüğü | Eşik değerler kaynağa göre değişir, kaynağını belirtin |
| Q-Q grafiği | Sapmanın nerede olduğu (uçlar, orta) | Görsel değerlendirmedir, tek başına yetmez |

Her iki testte de **sıfır hipotezi "dağılım normaldir"** şeklindedir. p > 0,05 ise normallikten anlamlı bir sapma bulunmadığı söylenir; bu, verinin kesin olarak normal olduğunu kanıtlamaz.

## Büyük örneklemde p değeri neden yanıltabilir?

Normallik testleri örneklem büyüdükçe çok küçük, pratikte önemsiz sapmaları da istatistiksel olarak anlamlı bulur. Birkaç yüz katılımcılı bir ankette Shapiro-Wilk p değerinin 0,05'in altında çıkması sık rastlanan bir durumdur. Öte yandan çok küçük örneklemlerde testin gücü düşüktür ve belirgin bir sapma da gözden kaçabilir.

Bu yüzden karar tek bir p değerine dayandırılmaz. Önerilen yol şudur:

- **Çarpıklık ve basıklık** değerlerine bakın. Literatürde farklı eşikler kullanılır (ör. ±1,5 ya da ±2 gibi); hangisini kullandığınızı kaynağıyla birlikte yöntem bölümüne yazın.
- **Q-Q grafiğinde** noktaların köşegen çizgiye ne kadar yakın durduğunu inceleyin. Uçlardaki sapma, aykırı değerlere işaret edebilir.
- **Histogramla** dağılımın biçimini (tek tepeli mi, belirgin kuyruk var mı) kontrol edin.

## Normallik sağlanmazsa ne yapılır?

Seçenekler araştırma sorunuza ve verinizin yapısına göre değişir:

- **Parametrik olmayan karşılık:** bağımsız örneklem t testi yerine Mann-Whitney U, tek yönlü ANOVA yerine Kruskal-Wallis, Pearson yerine Spearman korelasyonu.
- **Aykırı değerleri inceleme:** önce veri girişi hatası olup olmadığına bakın. Bir gözlemi gerekçesiz çıkarmak araştırma etiği açısından sorunludur; çıkarıyorsanız ölçütünü ve kaç gözlem olduğunu raporlayın.
- **Dönüşüm:** logaritmik ya da karekök dönüşümü bazı çarpık dağılımları düzeltir, ama yorumu dönüştürülmüş ölçek üzerinden yapmanız gerekir.

Hangi yolu seçerseniz seçin, kararın gerekçesini yazmak sonucun kendisi kadar önemlidir.

## Tezde ve makalede nasıl raporlanır?

APA 7 üslubunda normallik sonucu genellikle yöntem ya da bulgular bölümünde kısa bir cümleyle verilir. Test istatistiğini, serbestlik derecesini (örneklem büyüklüğü) ve p değerini yazın; çarpıklık-basıklık eşiği kullandıysanız kaynağını belirtin.

> Puanların dağılımı Shapiro-Wilk testiyle incelenmiş, her iki grupta da normallikten anlamlı bir sapma bulunmamıştır (deney grubu: W(32) = 0,97, p = 0,41; kontrol grubu: W(30) = 0,95, p = 0,18). Çarpıklık ve basıklık değerleri de belirlenen ±1,5 aralığında kalmıştır.

Yukarıdaki sayılar yalnızca **biçimi göstermek için** verilmiş örneklerdir; kendi çıktınızdaki değerleri yazın. Ondalık ayırıcı ve p değerinin yazımı (0,05 ya da .05) için üniversitenizin tez yazım kılavuzunu esas alın.
