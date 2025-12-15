/* Baloncukları oluşturuyoruz */

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("bubble-container");

    if (!container) {
        console.error("HATA: #bubble-container bulunamadı.");
        return;
    }

     const bubbles = [
    { title: "Erişilebilir ve Temiz Enerji Nedir?", 
      href: "./erisilebilirEnerjiNedir.html", 
      top: "12%", 
      left: "45%" 
    },
    { title: "Gelecek Hayalim Nedir?", 
      href: "./gelecekHayalim.html", 
      top: "49%", 
      left: "54%" 
    },
    {  title: "Yeni Yapılarda Enerji Tasarrufu", 
      href: "./yeniYapilardaTasarruf.html", 
       top: "23%", 
      left: "79%" 
    },
    {title: "Evlerimizde Enerji Tasarrufu", 
      href: "./evdeTasarruf.html", 
     top: "43%", 
      left: "93%" 
    },
    { title: "Dünyada Temiz Enerji İçin Alınması Gereken Önlemler", 
      href: "./dünyamızdaÖnlemler.html", 
      top: "44%", 
      left: "2%" 
    },
    { title: "Proje Ekibi", 
      href: "./projeEkibi.html", 
      top: "84%", 
      left: "70%" 
    },
    { title: "Geri Dönüşüm ve Sürdürülebilirlik", 
      href: "./geriDonusum.html", 
      top: "85%", 
      left: "22%" 
    },
    { title: "Doğada Enerji Tasarrufu", 
      href: "./dogadaTasarruf.html", 
       top: "68%", 
      left: "91%" 
    },
    { title: "Yerel Etki", 
      href: "./yerelEtki.html", 
       top: "68%", 
      left: "4%" 
    },
  ];

  bubbles.forEach((item) => {
    const bubble = document.createElement("a");
    bubble.className = "energy-bubble";
    bubble.href = item.href;
    bubble.title = item.title;
    bubble.setAttribute("aria-label", item.title);

    bubble.style.top = item.top;
    bubble.style.left = item.left;

    container.appendChild(bubble);
  });
 console.log("Hit-area baloncuklar üzetildi:", bubbles.length)

});