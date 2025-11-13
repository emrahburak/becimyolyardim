
interface CardItem {
  id: number;
  title: string;
  description: string
}


interface CardProps {
  cardItem: CardItem
}


export default function Card({ cardItem }: CardProps) {
  const { title, description } = cardItem;

  return (
    <div className="relative w-48 h-48 rounded-xl overflow-hidden cursor-grab font-sans ">
      {/* Sol üst köşe ve border */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2 "
        style={{
          borderTop: '5px dotted #01133d',
          borderLeft: '5px dotted #01133d',
          borderTopLeftRadius: '1rem',
        }}
      ></div>

      {/* Sağ üst köşe */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2 "
        style={{
          borderTop: '9px solid #01133d',
          borderRight: '9px solid #01133d',
          borderTopRightRadius: '1rem',
        }}
      ></div>

      {/* Sağ alt köşe */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2 "
        style={{
          borderBottom: '5px dotted #01133d',
          borderRight: '5px dotted #01133d',
          borderBottomRightRadius: '1rem',
        }}
      ></div>

      {/* Sol alt köşe */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2 "
        style={{
          borderBottom: '9px solid #01133d',
          borderLeft: '9px solid #01133d',
          borderBottomLeftRadius: '1rem',
        }}
      ></div>

      {/* Card içeriği */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-5">
        <p className="text-black font-semibold text-center">{title}</p>
        <p className="text-black font-normal text-xs text-center">{description}</p>
      </div>
    </div>


  )
}

