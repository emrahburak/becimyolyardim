
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
    <div
      className="
        relative font-sans cursor-grab overflow-hidden rounded-xl
        w-48 h-48
        sm:w-56 sm:h-56
        md:w-64 md:h-64
      "
    >
      {/* Sol üst köşe */}
      <div
        className="absolute top-0 left-0 w-1/2 h-1/2"
        style={{
          borderTop: '5px dotted #01133d',
          borderLeft: '5px dotted #01133d',
          borderTopLeftRadius: '1rem',
        }}
      ></div>

      {/* Sağ üst köşe */}
      <div
        className="absolute top-0 right-0 w-1/2 h-1/2"
        style={{
          borderTop: '9px solid #01133d',
          borderRight: '9px solid #01133d',
          borderTopRightRadius: '1rem',
        }}
      ></div>

      {/* Sağ alt köşe */}
      <div
        className="absolute bottom-0 right-0 w-1/2 h-1/2"
        style={{
          borderBottom: '5px dotted #01133d',
          borderRight: '5px dotted #01133d',
          borderBottomRightRadius: '1rem',
        }}
      ></div>

      {/* Sol alt köşe */}
      <div
        className="absolute bottom-0 left-0 w-1/2 h-1/2"
        style={{
          borderBottom: '9px solid #01133d',
          borderLeft: '9px solid #01133d',
          borderBottomLeftRadius: '1rem',
        }}
      ></div>

      {/* İçerik */}
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 text-center">
        <p className="text-black font-semibold text-base sm:text-xl md:text-xl">
          {title}
        </p>

        <p className="text-black font-normal text-xs sm:text-base md:text-base mt-1 leading-snug">
          {description}
        </p>
      </div>
    </div>
  );
}

