import '../pages/Pages.css';
import { Text } from '../component/SeoText';
import { Card } from '../component/Card';
import seo from "../assets/seo-success.png"

export const SEO = () => {
  return (
   <>
   <div className='seo-page-image'>
    <Text
    seoImage={seo}
    h1={"SEO är att hjälpa Google hjälpa dina kunder"}
   h2={"Teknisk SEO, sökordsoptimering, keywords, interna länkar, externa länkar, innehåll, URL, Metadata, mm  "}
   strong1={"Vi hjälper dig med alla steg i seo processen. Hur vi gör det ser förstås olika ut efter som att vi alltid skräddarsyr din strategi. Men på denhär sidan lär du dig mer om våran process, vad den innehåller och ännu mer SEO om du vill läsa mer."}
    />

   </div>
  <div className= "simple"> 
  <Card
  SeoCardImage={seo}
  h3={"Gratis SEO koll"}
  strong3={"Börja med att boka tid för en gratis SEO undersökning, då tittar vi även på en lämplig SEO strategi för dig. "}
  />
  </div> 
   </>
  );
};