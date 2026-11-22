import Banner from "./Banner";

interface Props {
  header: string;
  subHeader: string;
  img: string;
  alt: string;
}

export default function Carousel({ header, subHeader, img, alt}: Props) {
    return( 
              <div className="Carousel">    
                <button><img src="/arrows/lf-arrow.svg" alt="<" /></button>
                <Banner header={ header } subHeader={ subHeader } img={ img } alt={ alt }/>
                <button><img src="/arrows/rg-arrow.svg" alt=">" /></button>
              </div>
          );
}