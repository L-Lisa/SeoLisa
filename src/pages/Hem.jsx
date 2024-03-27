import '../pages/Pages.css';
import {Card} from "../component/Card"
import {Text} from "../component/SeoText"
import datorsml from "../assets/datorsml.png"
import digitalisa from "../assets/digitalisa.webp"
import Icon1 from "../assets/seo-Icon1.png"

export const Hem = () => {
   
  return (
   <main className= "simple">
   <section className='seo-hero shine'>
<h1 className='seo-h1'>SEO, SGE <br/> & hemsidor</h1>
<h2>För dig som vill synas på Google</h2>
<h3>seo byrå + web byrå = SEOLisa </h3>
   </section>
  <section>
    <div className='seo-info-text'>
   <h4 className='seo-info-h4'>Hur hjälper SEO din hemsida? </h4> 
   <p className='seo-first'> 
   Precis som du vill presentera dina bästa produkter för dina kunder, strävar Google efter att visa de främsta hemsidorna för sina användare. En tilltalande design är bara början; din webbplats måste vara optimerad på flera nivåer och uppfylla dina besökares förväntningar och ranka på sökmotorer.
SEO är en långsiktig process, och vi utformar en skräddarsydd strategi som matchar dina specifika mål
   </p>
<p>
<strong>Teknisk SEO Analys:</strong> Att genomföra en teknisk granskning av din hemsida liknar en bilbesiktning. Vi identifierar och åtgärdar brister för att säkerställa optimal funktion. Detta lägger grunden för en robust, SEO-anpassad struktur. Detta är oftast saker som sker bakom kulisserna och endast uppfattas av sökmotorerna. Du kan följa med i utvecklingen genom att få tillgång till din hemsidas SEO data Live.
</p>
<p>
<strong>Sökordsanalys: </strong>  Att förstå vad dina kunder söker efter online är kritiskt. Genom att analysera söktermer kan vi finslipa ditt innehåll för att säkerställa att det möter dina kunders behov och önskemål.
</p>
<p>
<strong>Auktoritet: </strong> När din webbplats är optimerad med värdefullt innehåll och en effektiv struktur, inleds det mer långsiktiga arbetet. En webbplats med rikt innehåll uppnår högre auktoritet. Det är likt hur din egen expertis erkänns när andra inser att du verkligen vet vad du pratar om.
</p>
<p>
<strong>Off-Page SEO: </strong> Efter On-Page SEO lägger vi krut på SEO som sträcker sig utaqnför din hemsida. Här kan det vara lämpligt att fokusera på externa faktorer som backlinks och nätverkande för att ytterligare stärka din webbplats position.
Vår strategi är dynamisk och uppdateras kontinuerligt för att anpassa sig till en ständigt föränderlig digital värld.
</p>
</div>
</section>
<section className='seo-cards'>
<Card
seoCardImage={Icon1}
h3={"SEO - Lär dig mer"}
strong3={"Kort lättläst info om de olika bitarna i SEO"}
p3={"Vi berättar gärna mer under ett kostnadsfritt samtal så vi även tar fram den bästa strategin för dig."}
/>

<Card

seoCardImage={Icon1}
h3={"SGE?"}
strong3={"AI sök kommer snart.. var redo!"}
p3={"När AI växer vill du att den ska förstå din sida lika bra som Google gör. Det handlar mer om att vara värdefull än störst och bäst. Är det en möjlighet för dig?"}
/>
<Card 
link="/SEO"
seoCardImage={Icon1}
h3={"SEO tjänster"}
strong3={"Vad kostar det, och hur funkar det?!"}
p3={"Det är inte bara vad som erbjuds utan hur det görs. Personlig kontakt och LIVE tillgång till din egen SEO data är en del av de saker som sticker ut hos oss."}
/>
<Card 
link="/omSeoLisa"
seoCardImage={Icon1}
h3={"SEO Lisa"}
strong3={"SEO kan se ut som häxkonster, men vi vill väl"}
p3={"Vi jobbar inte med din konkurrent samtidigt, men vi hjälper folk växa tillsammans. Mest av allt vill vi att ögonen inte ska blöda när man ser på en hemsidas struktur."}
/>

</section>
</main>
  );
};