import Banner from "./Banner";

interface Props {
  header: string;
  subHeader: string;
  img: string;
}

export default function Carousel({ header, subHeader, img}: Props) {
    return( 
              <div className="Carousel">    
                <button><img src="/arrows/lf-arrow.svg" alt="<" /></button>
                <Banner header={ header } subHeader={ subHeader } img={ img }/>
                <button><img src="/arrows/rg-arrow.svg" alt=">" /></button>
              </div>
          );
}