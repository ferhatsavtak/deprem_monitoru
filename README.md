# 🌍 Türkiye Canlı Deprem Monitörü

<div align="center">
  <img src="img/logo1.svg" alt="Deprem Monitörü Logo" width="200"/>
  
  <p>Türkiye ve çevresindeki depremleri anlık olarak takip edebileceğiniz; aktif fay hatları, GPS mesafe hesabı, gelişmiş analizler ve acil durum araçları içeren modern bir web uygulaması.</p>

  ![Deprem Monitörü](https://img.shields.io/badge/version-2.0.0-blue.svg)
  ![License](https://img.shields.io/badge/license-MIT-green.svg)
  ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
  ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)
  ![Leaflet](https://img.shields.io/badge/Leaflet-199900?logo=leaflet&logoColor=white)
  ![Web Audio API](https://img.shields.io/badge/Web_Audio_API-orange?logo=sound&logoColor=white)

  <h3>
    <a href="https://ferhatsavtak.github.io/deprem_monitoru">🚀 Canlı Demo İçin Tıklayınız.</a>
  </h3>
</div>

---

## ✨ Özellikler

### 📊 Veri Kaynakları & Senkronizasyon
- **Kandilli Rasathanesi** - KOERI canlı deprem verileri
- **AFAD** - Resmi AFAD deprem kayıtları
- **Anlık Senkronizasyon** - 30 saniyede bir otomatik veya **🔄 Yenile** butonu ile anlık manuel güncelleme
- **Canlı Zaman Sayacı** - Verinin kaç saniye önce güncellendiğini gösteren anlık sayaç

### ⚡ Aktif Diri Fay Hatları Katmanı (MTA Bazlı)
- Türkiye'nin ana fay sistemleri harita üzerinde dinamik olarak görselleştirilir:
  - **Kuzey Anadolu Fayı (KAF)** - Marmara ana kolu, güney kolu, Bolu/Ilgaz, Kelkit/Erzincan ve Karlıova segmentleri
  - **Doğu Anadolu Fayı (DAF)** - Karlıova, Sivrice, Pütürge, Pazarcık ve Antakya kolları
  - **Çardak - Sürgü Fay Zonu** (6 Şubat Elbistan kırığı)
  - **Batı Anadolu Grabenleri** (Gediz, Büyük Menderes, Seferihisar/İzmir fayları)
  - **Tuz Gölü & Ecemiş Fay Zonları**
  - **Van / Çaldıran Fay Kuşağı**
  - **Helen & Kıbrıs Dalma-Batma Yayı**
- Fay hatlarına tıklandığında fay adı, hareket tipi, risk seviyesi ve jeolojik açıklaması görüntülenir.
- Sağ üstteki **⚡** butonu ile tek tıkla açılıp kapatılabilir.

### 🗺️ Gelişmiş Harita Altyapısı & Katman Seçici
- **API Anahtarı Gerektirmeyen Güvenilir Harita:** CARTO filigran sorunundan bağımsız, yüksek performanslı Esri Canvas harita servisi
- **Katman Seçici (🗺️):**
  - 🌙 **Koyu Mod:** Gece kullanımı için yüksek kontrastlı koyu harita
  - ☀️ **Açık Mod:** Sade ve net aydınlık gri harita
  - 🛰️ **Uydu Görünümü:** Esri World Imagery ve hibrit yerleşim/sınır etiketleriyle gerçek arazi görüntüsü
  - 🔄 **Otomatik Tema:** Sistem/site temasına göre otomatik uyum
- **Tahmini Hissedilme Alanı (Felt Radius):** Seçilen depremin büyüklüğüne göre tahmini hissedilme yarıçapını gösteren şeffaf etki çemberi (alttaki deprem noktalarının tıklanmasını engellemez)
- **Deprem Kümeleme (Marker Clustering):** Çok sayıda depremi akıllı gruplandırma ve tek tıkla açma/kapatma
- **Tam Ekran Modu:** Harita odaklı geniş izleme desteği

### 📍 GPS Konum & Uzaklık Hesabı
- **Konumum Butonu (📍):** Tarayıcı GPS'i ile kullanıcının konumunu haritada mavi işaretçi ile belirler.
- **Mesafe Hesabı:** Listelenen tüm depremlerin kullanıcının konumuna kuş uçuşu mesafesini (Haversine formülü ile km cinsinden) hesaplar (`📍 Size 42.5 km`).
- **En Yakın Sıralaması:** Depremleri kullanıcıya olan mesafeye göre sıralama özelliği.

### 🔍 Filtreleme ve Sıralama
- **Genişletilmiş Zaman Filtreleri:** `1S` (Son 1 Saat), `6S` (Son 6 Saat), `24S` (Son 24 Saat) ve `TÜMÜ`
- **Büyüklük Filtreleme:** Tüm depremler, 3.0+, 4.0+, 5.0+
- **Sıralama Seçenekleri:** En Yeni, En Büyük, En Sığ, En Yakın (GPS aktifken)
- **Derinlik Sınıflandırması:** Kartlarda derinlik bilgisi ve göstergesi (`Sığ: <10km`, `Orta: 10-30km`, `Derin: >30km`)
- **Şehir/Bölge Arama:** Canlı harf bazlı arama filtresi

### 🔔 Sesli Uyarı & Masaüstü Bildirimleri
- **Özelleştirilebilir Ses Ayarları (🔔):**
  - Büyüklük eşiği seçimi (Tümü, 3.0+, 3.5+, 4.0+, 5.0+)
  - Web Audio API ile 3 farklı ses tonu: **Klasik Bip**, **Sonar/Radar**, **Acil Durum Sireni**
- **Masaüstü Bildirimleri (Push Notification):** Sayfa arka plandayken bile yeni depremlerde masaüstüne anlık bildirim gönderme
- **Görsel Banner & Dalga Animasyonu:** 3.5+ depremlerde ekranda uyarı bandı ve merkez üssünde genişleyen dalga efekti

### 📢 Acil Durum Düdüğü & S.O.S Ekran Flaşı
- **3000 Hz Arama-Kurtarma Düdüğü:** Enkaz altında veya acil durumda arama-kurtarma ekiplerine ses duyurmak için optimize edilmiş yüksek frekanslı dijital düdük (harici ses dosyası gerektirmeden Web Audio API ile anında çalar).
- **S.O.S Ekran Flaşı:** Karanlıkta yardım çağırmak ve yer belirtmek için ekranı ritmik olarak parlatan flaşör modu.

### 🎒 İnteraktif Deprem Çantası Listesi
- Afet ve acil durum çantası için 10 temel hayati ihtiyaç listesi.
- Tamamlanan maddeleri işaretleme, yüzde göstergesi ve ilerleme çubuğu.
- Veriler tarayıcının yerel hafızasında (`localStorage`) kalıcı olarak saklanır.

### 📈 Detaylı İstatistik Paneli
- Özet bilgi kartları: Toplam Deprem, Maksimum Büyüklük, Ortalama Büyüklük, Ortalama Derinlik
- **Büyüklük Dağılımı Grafiği:** Chart.js destekli çubuk grafik
- **En Çok Deprem Olan İlk 5 İl / Bölge Grafiği:** Aktif bölge yoğunluk analizi

### 📤 Deprem Paylaşımı
- Her deprem kartında ve harita açılır penceresinde tek tıkla **Paylaş** butonu.
- Mobil cihazlarda yerel paylaşım menüsünü (WhatsApp, Telegram vb.) açar; masaüstünde biçimlendirilmiş deprem özetini panoya kopyalar.

---

## 🚀 Kurulum

### Gereksinimler
Modern bir web tarayıcısı (Chrome, Edge, Firefox, Safari, Opera vb.)

### Kullanım

1. Repoyu klonlayın:
```bash
git clone https://github.com/ferhatsavtak/deprem_monitoru.git
```

2. Proje dizinine gidin:
```bash
cd deprem_monitoru
```

3. `index.html` dosyasını doğrudan tarayıcınızda çift tıklayarak açabilir veya yerel bir sunucu ile çalıştırabilirsiniz:
```bash
# Python ile basit web sunucusu
python -m http.server 8000

# Node.js ile
npx serve
```

4. Tarayıcınızda `http://localhost:8000` adresine gidin.

---

## 📱 Kullanım Kılavuzu

### Harita Kontrolleri (Sağ Üst Panel)
- **📍 Konumum:** GPS ile konumunuzu işaretler ve tüm depremlerin size olan mesafesini hesaplar.
- **🗺️ Türkiye Odak:** Haritayı Türkiye merkezine sıfırlar.
- **⚡ Fay Hatları:** Aktif diri fay hatlarını gösterir veya gizler.
- **🗺️ Katmanlar:** Koyu mod, Açık mod ve Uydu görüntüsü arasında geçiş yapar.
- **🔲 Kümeleme:** Yoğun deprem noktalarını sayısal kümeler halinde gruplar.
- **⛶ Tam Ekran:** Haritayı tam ekran moduna geçirir.

### Renk Kodları
- 🟢 **Yeşil** (< 3.0): Hafif depremler
- 🟡 **Sarı** (3.0 - 3.9): Orta şiddette depremler
- 🟠 **Turuncu** (4.0 - 4.9): Yüksek şiddette depremler
- 🔴 **Kırmızı** (5.0 - 5.9): Şiddetli depremler
- 🟤 **Koyu Kırmızı** (≥ 6.0): Yıkıcı depremler

---

## 🛠️ Teknolojiler

- **HTML5 & Vanilla JavaScript** - Hızlı, kütüphane bağımlılığı minimum modern yapı
- **Tailwind CSS (CDN)** - Koyu/açık tema uyumlu modern ve esnek tasarım
- **Leaflet.js (v1.9.4)** - İnteraktif harita motoru
- **Leaflet.markercluster** - Yüksek performanslı kümeleme desteği
- **Esri ArcGIS Basemaps** - Yüksek çözünürlüklü, filigransız vektör ve uydu haritaları
- **Chart.js** - İstatistiksel grafik görselleştirmeleri
- **Web Audio API** - Bip, sonar, siren ve 3000 Hz acil durum düdüğü ses sentezleyici
- **Orhan Aydoğdu API** - Kandilli ve AFAD anlık veri kaynağı

---

## 🔗 API Referansı

Proje, [Orhan Aydoğdu API](https://api.orhanaydogdu.com.tr/) servisinden anlık veri almaktadır:

```javascript
// Kandilli Endpoint
https://api.orhanaydogdu.com.tr/deprem/kandilli/live?limit=500

// AFAD Endpoint
https://api.orhanaydogdu.com.tr/deprem/afad/live?limit=500
```

---

## ⚠️ Güvenlik ve Acil Durum Rehberi

### Deprem Anında:
- **ÇÖK - KAPAN - TUTUN** kuralını uygulayın.
- Pencerelerden, devrilebilecek ağır mobilyalardan uzak durun.
- Sarsıntı bitene kadar binayı terk etmeye çalışmayın, merdivenleri ve asansörleri kullanmayın.

### Acil Durum Numaraları:
- 🚑 **112** - Acil Çağrı Merkezi
- 🛡️ **122** - AFAD Afet ve Acil Durum Hattı

---

## 🔄 Sürüm Geçmişi

### v2.0.0 (2026-10)
- **⚡ Aktif Fay Hatları:** Türkiye'deki tüm diri fay zonları MTA verileriyle haritaya eklendi (`faults.js`).
- **🗺️ Harita Altlıkları:** CARTO filigran sorunu giderilerek anahtarsız Esri Dark/Light Canvas ve Esri Satellite (Uydu) katmanları entegre edildi.
- **📍 GPS & Mesafe:** Kullanıcının konumuna olan mesafeyi anlık km hesabı ve "En Yakın" sıralama seçeneği eklendi.
- **📡 Hissedilme Çemberi:** Tıklanan depremin tahmini hissedilme yarıçapı görselleştirildi; etki alanı içindeki deprem noktalarının tıklanabilmesi optimize edildi.
- **⏱️ Gelişmiş Filtreler:** 1S, 6S zaman aralıkları, derinlik analizi ve sıralama fonksiyonları eklendi.
- **📢 Acil Düdük & S.O.S:** Web Audio ile çalışan 3000 Hz dijital düdük ve ekran flaşörü eklendi.
- **🎒 Deprem Çantası:** Kalıcı (`localStorage`) interaktif kontrol listesi eklendi.
- **📊 Gelişmiş İstatistikler:** Bölgesel yoğunluk (Top 5 İl) analizi ve özet metrik kartları eklendi.
- **📤 Paylaşım Desteği:** Tek tıkla WhatsApp ve sosyal medya için deprem detaylarını paylaşma/kopyalama özelliği eklendi.

### v1.0.0 (2026-01-15)
- İlk sürüm yayınlandı.
- Kandilli ve AFAD veri entegrasyonu.
- Harita görselleştirmesi ve filtreleme.
- Koyu/Açık tema desteği.

---

## 👨‍💻 Geliştirici

**Ferhat Savtak**
- GitHub: [@ferhatsavtak](https://github.com/ferhatsavtak)

## 🙏 Teşekkürler

- [Orhan Aydoğdu](https://github.com/orhanayd) - Deprem API altyapısı
- [Kandilli Rasathanesi](http://www.koeri.boun.edu.tr/sismo/) - Deprem verileri
- [AFAD](https://www.afad.gov.tr/) - Resmi deprem kayıtları
- [MTA](https://www.mta.gov.tr/) - Diri fay haritası verileri

---

⭐ Bu projeyi faydalı bulduysanız yıldız vermeyi unutmayın!
