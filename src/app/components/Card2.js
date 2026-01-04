import Image from "next/image";


export default function Card() {
  return (
    <div
  className="
    max-w-xs bg-white rounded-lg shadow-md overflow-hidden font-GS
    transition-all duration-300 ease-out
    hover:-translate-y-2 hover:shadow-xl
  "
>
      
      <div className="relative w-full h-40">
        <Image
          src="/card.png"
          alt="Card"
          fill
          className="object-cover"
          priority
        />
      </div>


      <div className="p-6">
        <h3 className="text-lg font-bold mb-1">Applications</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          Review, approve and onboard your new community members.
        </p>
      </div>

    </div>
  );
}



















