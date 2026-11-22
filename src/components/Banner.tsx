interface Props {
  header: string;
  subHeader: string;
  img: string;
  alt: string;
}

export default function Banner({header, subHeader, img, alt}: Props) {
    return( 
              <div>    
                <h1>{ header }</h1>
                <h2>{ subHeader }</h2>
                <img src={ img } alt={ alt }></img>
              </div>
          );
}