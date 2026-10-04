// Türkiye ve Yakın Çevresi Aktif Fay Hatları GeoJSON Veri Seti (MTA & Seismotectonic Database bazlı)
const TURKEY_FAULTS = {
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "Kuzey Anadolu Fayı (KAF) - Ana Marmara Kolu",
                "type": "Sağ Yanal Doğrultu Atımlı",
                "risk": "Çok Yüksek",
                "desc": "Saros Körfezi'nden başlayıp Marmara Denizi altından İzmit Körfezi'ne uzanan en kritik sismik hat."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [26.15, 40.50], [26.60, 40.62], [27.20, 40.75], [27.75, 40.85],
                    [28.30, 40.89], [28.95, 40.83], [29.40, 40.75], [29.90, 40.73], [30.15, 40.72]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kuzey Anadolu Fayı (KAF) - Marmara Güney Kolu",
                "type": "Sağ Yanal Doğrultu Atımlı",
                "risk": "Yüksek",
                "desc": "Geyve, İznik, Gemlik Körfezi ve Bandırma üzerinden Biga Yarımadası'na uzanan güney fay kolu."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [30.28, 40.52], [29.95, 40.48], [29.70, 40.44], [29.15, 40.42],
                    [28.70, 40.35], [28.15, 40.30], [27.50, 40.20], [26.90, 39.90]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kuzey Anadolu Fayı (KAF) - Bolu / Ilgaz / Tokat Segmenti",
                "type": "Sağ Yanal Doğrultu Atımlı",
                "risk": "Çok Yüksek",
                "desc": "Sapanca'dan Bolu, Gerede, Ilgaz, Tosya, Kargı ve Erbaa'ya uzanan ana kırık hattı."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [30.15, 40.72], [30.55, 40.69], [31.15, 40.84], [31.60, 40.76],
                    [32.20, 40.80], [32.85, 40.83], [33.60, 40.92], [34.05, 41.01],
                    [34.50, 41.12], [35.40, 41.14], [35.90, 40.91], [36.55, 40.68], [36.95, 40.59]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Kuzey Anadolu Fayı (KAF) - Kelkit / Erzincan / Karlıova Segmenti",
                "type": "Sağ Yanal Doğrultu Atımlı",
                "risk": "Çok Yüksek",
                "desc": "Niksar, Reşadiye, Koyulhisar, Suşehri, Erzincan ve Yedisu üzerinden Karlıova düğüm noktasına ulaşır."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [36.95, 40.59], [37.35, 40.40], [37.80, 40.30], [38.10, 40.18],
                    [38.75, 39.90], [39.50, 39.75], [39.75, 39.70], [40.40, 39.78],
                    [40.55, 39.43], [41.02, 39.30]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Doğu Anadolu Fayı (DAF) - Karlıova / Bingöl / Hazar Segmenti",
                "type": "Sol Yanal Doğrultu Atımlı",
                "risk": "Çok Yüksek",
                "desc": "Karlıova birleşim noktasından Bingöl, Palu, Sivrice ve Hazar Gölü'ne uzanan kuzeydoğu segmenti."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [41.02, 39.30], [40.75, 39.05], [40.50, 38.88], [40.15, 38.75],
                    [39.92, 38.69], [39.60, 38.58], [39.30, 38.45]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Doğu Anadolu Fayı (DAF) - Pütürge / Gölbaşı / Pazarcık Segmenti",
                "type": "Sol Yanal Doğrultu Atımlı",
                "risk": "Çok Yüksek",
                "desc": "Hazar Gölü'nden Pütürge, Çelikhan, Gölbaşı ve 6 Şubat 2023 depreminin merkez üssü Pazarcık'a uzanır."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [39.30, 38.45], [38.90, 38.22], [38.60, 38.05], [38.20, 38.02],
                    [37.65, 37.78], [37.30, 37.49], [36.85, 37.38]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Doğu Anadolu Fayı (DAF) - Amanos / Antakya / Samandağ Segmenti",
                "type": "Sol Yanal Doğrultu Atımlı",
                "risk": "Çok Yüksek",
                "desc": "Türkoğlu, Nurdağı, İslahiye, Kırıkhan, Antakya ve Samandağ üzerinden Akdeniz'e inen güney segmenti."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [36.85, 37.38], [36.63, 37.02], [36.50, 36.75], [36.35, 36.50],
                    [36.16, 36.20], [35.95, 36.08]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Çardak - Sürgü Fay Zonu (Elbistan Kırığı)",
                "type": "Sol Yanal Doğrultu Atımlı",
                "risk": "Çok Yüksek",
                "desc": "6 Şubat 2023 7.6 Elbistan depremini üreten Göksun, Çardak, Nurhak ve Sürgü-Doğanşehir kırığı."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [36.45, 38.00], [36.80, 38.05], [37.15, 38.03], [37.45, 37.97],
                    [37.75, 38.02], [38.00, 38.05], [38.20, 38.25]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Gediz Grabeni Fay Sistemi",
                "type": "Normal Eğim Atımlı Fay",
                "risk": "Yüksek",
                "desc": "Manisa, Turgutlu, Salihli ve Alaşehir havzasını çevreleyen Ege açılma tektoniği fayı."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [27.35, 38.65], [27.70, 38.50], [28.15, 38.48], [28.52, 38.35], [28.75, 38.20]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Büyük Menderes Grabeni Fay Sistemi",
                "type": "Normal Eğim Atımlı Fay",
                "risk": "Yüksek",
                "desc": "Kuşadası ve Söke'den başlayarak Aydın, Nazilli ve Denizli grabenine kadar devam eden hat."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [27.30, 37.75], [27.84, 37.85], [28.32, 37.91], [28.80, 37.90], [29.10, 37.85]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "İzmir - Seferihisar Fay Zonu",
                "type": "Doğrultu Atımlı / Normal",
                "risk": "Yüksek",
                "desc": "30 Ekim 2020 Ege Denizi depremi kaynak alanı ve İzmir merkez yerleşimini etkileyen fay zonu."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [26.70, 37.95], [26.85, 38.20], [27.05, 38.35], [27.15, 38.45], [27.25, 38.55]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Tuz Gölü Fay Zonu",
                "type": "Normal / Doğrultu Atımlı",
                "risk": "Orta - Yüksek",
                "desc": "Orta Anadolu'da Tuz Gölü doğusu boyunca uzanıp Aksaray ve Niğde Bor'a kadar inen fay sistemi."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [33.10, 39.15], [33.45, 38.85], [33.80, 38.55], [34.05, 38.35], [34.55, 37.90]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Ecemiş Fay Zonu",
                "type": "Sol Yanal Doğrultu Atımlı",
                "risk": "Orta",
                "desc": "Kayseri Erciyes güneyinden Pozantı ve Mersin dağlık kesimine uzanan belirgin fay hattı."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [35.45, 38.45], [35.25, 38.10], [34.87, 37.45], [34.65, 37.05]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Van Gölü & Çaldıran Fay Zonu",
                "type": "Doğrultu Atımlı / Bindirme",
                "risk": "Yüksek",
                "desc": "1976 Çaldıran ve 2011 Van depremlerini üreten Doğu Anadolu sıkışma rejimi fayları."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [42.90, 38.85], [43.35, 38.55], [43.40, 38.95], [43.90, 39.15], [44.20, 39.30]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Gökova & Fethiye Fay Kuşağı",
                "type": "Sol Yanal / Normal Açılma",
                "risk": "Yüksek",
                "desc": "Bodrum, Kos, Gökova Körfezi ve Fethiye açıkları boyunca Ege dalma-batma yayına bağlanan hat."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [27.10, 36.90], [27.50, 36.98], [28.20, 36.95], [28.85, 36.70], [29.10, 36.45]
                ]
            }
        },
        {
            "type": "Feature",
            "properties": {
                "name": "Helen & Kıbrıs Dalma-Batma Yayı",
                "type": "Yitim Zonu (Subduction Zone)",
                "risk": "Çok Yüksek",
                "desc": "Afrika levhasının Anadolu levhasının altına daldığı Akdeniz sismik kuşağı."
            },
            "geometry": {
                "type": "LineString",
                "coordinates": [
                    [25.50, 35.00], [27.00, 35.30], [28.50, 35.70], [30.00, 35.50],
                    [32.00, 34.80], [34.00, 34.50], [35.50, 35.20]
                ]
            }
        }
    ]
};
