interface Props{
    size: number,
    className: string,
}

export default function DescargaCv({ size = 24, className }: Props){
    return (
        <svg viewBox="44 55 122 150" height={size} fill="currentColor" className={className} aria-hidden="true">
            <path d="M 132,92.763838 H 80.350554 c 0,0 -5,0.208592 -5,5.414307 0,5.205715 5,4.585695 5,4.585695 h 45.290996 l 26.709,29.11458 v 65.88542 H 67.350554 v -77.0279 c 0,0 1.027671,-7.39734 -5,-7.30601 -6.027668,0.0913 -5,6.21047 -5,6.21047 v 88.12344 H 162.35055 v -81.8401 z" />
            <rect x="80.552002" y="135" width="58.998154" height="17.169741" ry="5.1143918" />
            <rect x="80.60424" y="163.69168" width="58.998154" height="17.169741" ry="5.1143918" />
            <rect x="61.625462" y="58.084869" width="21.918814" height="53.335793" ry="5.1143918" />
            <path d="m 47.125461,106.08487 h 50.000006 l -25.000006,42 z" />
        </svg>
    );
}