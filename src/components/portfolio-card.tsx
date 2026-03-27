import Image from "next/image";

export default function PortfolioCardSimple({
  card,
}: {
  card: {
    title: string;
    description: string;
    category: string;
    color?: string;
    image?: string;
    link?: string;
  };
}) {
  return (
    <div className="group hover:scale-105 transition-all duration-500">
      <a href={card.link || "#"} target="_blank" rel="noreferrer">
        {/* Show image if available, otherwise show gradient */}
        {card.image ? (
          <div className="relative w-full h-64 rounded-xl overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="rounded-lg"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
              <span className="text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                View Project →
              </span>
            </div>
          </div>
        ) : (
          <div className={`w-full h-64 rounded-xl bg-gradient-to-br ${card.color} group-hover:brightness-110 transition-all duration-500`}>
            <div className="w-full h-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 rounded-xl">
              <span className="text-white text-lg font-semibold">View Project →</span>
            </div>
          </div>
        )}
        
        <div className="mt-4">
          <div className="text-sm font-semibold text-blue-500 mb-1">{card.category}</div>
          <h3 className="text-2xl font-bold mb-2">{card.title}</h3>
          <p className="text-gray-600">{card.description}</p>
        </div>
      </a>
    </div>
  );
}