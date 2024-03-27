import '../pages/Pages.css';
import {Card} from "../component/Card"
import Icon1 from "../assets/seo-Icon1.png"

export const Hem = () => {
  return (
   <main >
   <section className='seo-byro-hero'>
<h1 className='seo-h1'>Vi hjälper dig synas <br/> på Google</h1>
<h2>SEO, SGE, Digital marknadsföring och hemsidor</h2>
<h3>SEO-Byrå + Webbyrå = SEOLisa </h3>
   </section>
  <section>
    <div className='seo-info-text'>
   <h4 className='seo-info-h4'>Hur hjälper SEO din hemsida? </h4> 
   <p className='seo-first'> 
   Precis som att du vill presentera dina bästa produkter för dina kunder, strävar Google efter att visa de främsta hemsidorna för sina användare. En tilltalande design är bara början. Din hemsida behöver vara optimerad på flera nivåer och uppfylla dina besökares förväntningar för att ranka på sökmotorer.
SEO är en långsiktig process, därför börjar vi med att utforma en skräddarsydd strategi som matchar dina specifika mål. Boka ett gratis SEO-strategi samtal här.
   </p>
<p>
<strong>Teknisk SEO Analys:</strong>Att genomföra en teknisk granskning av din hemsida liknar en bilbesiktning. Vi identifierar och åtgärdar brister för att säkerställa optimal funktion. Detta lägger grunden för en robust, SEO-anpassad struktur. Detta är oftast saker som sker bakom kulisserna och endast uppfattas av sökmotorerna. Du kan följa med i utvecklingen genom att få tillgång till din hemsidas SEO data Live.
</p>
<p>
<strong>Sökordsanalys: </strong> Nyckeln till framgångsrik sökordsoptimering. För att fullt ut tillgodose dina kunders förväntningar är det avgörande att förstå vad de söker efter och vilka sökfraser de använder. Genom en detaljerad analys av dessa sökord kan vi skärpa och anpassa ditt innehåll så att det träffsäkert uppfyller era kundernas specifika behov och preferenser.
</p>
<p>
<strong>Auktoritet: </strong>När din webbplats är optimerad med värdefullt innehåll och en effektiv struktur, inleds det mer långsiktiga arbetet. En webbplats med rikt innehåll uppnår högre auktoritet. Det är likt hur din egen expertis erkänns när andra inser att du verkligen vet vad du pratar om.
</p>
<p>
<strong>Off-Page SEO: </strong>En central men ofta förbisedd komponent som kan betyda skillnaden mellan osynlighet och framträdande i sökresultaten. Det handlar om att bygga auktoritet och trovärdighet för din hemsida genom externa insatser. Den här typen av SEO bidrar till att signalera till sökmotorer som Google att din webbplats är en respekterad resurs – värd att ranka högre. Vi ser också att det är e utmärkt möjlighet för att nätverka och bli starkare tillsammans med andra, låter kul va?!
</p>
</div>
</section>
<section className='seo-cards'>

<Card
seoCardImage={Icon1}
h3={"SEO - Lär dig mer"}
strong3={"Lättläst info om de olika bitarna i SEO"}
p3={"Vill du kunna göra allt själv eller bara förstå grunderna i de siffror vi kommer att leverera? Det kan lätt bli ett oändligt hål med data, därför filtrerar vi den data ni vill ha. <3"}
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
p3={"Vi jobbar inte med din konkurrent, men vi hjälper folk växa tillsammans om ni vill. Mest av allt vill vi att ögonen inte ska blöda när man ser på en hemsidas struktur."}
/>

</section>
</main>
  );
};