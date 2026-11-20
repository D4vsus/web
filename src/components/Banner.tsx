interface Props {
  header: string;
  subHeader: string
  img: string
}

export default function Banner({header, subHeader, img}: Props) {
    return( 
              <div>    
                <h1>{ header }</h1>
                <h2>{ subHeader }</h2>
                <img src={ img }></img>
              </div>
          );
}