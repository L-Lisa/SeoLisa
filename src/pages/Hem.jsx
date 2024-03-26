import '../pages/Pages.css';
import {Card} from "../component/Card"
import {Text} from "../component/SeoText"
import datorsml from "../assets/datorsml.png"
import digitalisa from "../assets/digitalisa.webp"

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
<section>
<Card
h3={"SEO - vad och varför"}
strong3={"Vi kan coacha dig genom grunderna så att du har koll på läget själv."}
/>
<Card
h3={"Lär dig mer om SGE"}
strong3={"Det kommer snart.. var redo!"}
p3={"När AI växer vill du att den ska förstå din sida lika bra som Google gör."}
/>
<Card
h3={"SEO tjänster"}
strong3={"Vi hjälper dig och din hemsida synas."}
p3={"Vi kan erbjuda olika nivåer av tjänster. Börja med att boka ett gratis samtal för att se vilken strategi som passar dig bäst."}
/>
</section>
</main>
  );
};