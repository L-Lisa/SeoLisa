import '../pages/Pages.css';
import { Text } from '../component/SeoText';
import seo from "../assets/seo-success.png"
export const SEO = () => {
   
  return (
   <>
   <div className='seo-page-image'>
   
    <Text
    seoImage={seo}
    h1={"SEO är att hjälpa dina kunder hitta vad de söker genom att visa Google vad du har."}
   h2={"För Google är det insidan som räknas"}
    />

   </div>
  <p className= "simple"> SEO</p> 
   </>
  );
};