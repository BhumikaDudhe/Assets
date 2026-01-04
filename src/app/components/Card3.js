import Image from "next/image";

export default function Card() {
  return (
    <div className="relative group max-w-xs">

      <div
        className="
          absolute -inset-1 rounded-xl
          bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400
          blur-lg opacity-0
          group-hover:opacity-100
          animate-spin-slow
          transition-opacity duration-300
          pointer-events-none
        "
      />

      <div
        className="
          relative bg-white rounded-lg shadow-md overflow-hidden font-GS
          transition-all duration-300 ease-out
          group-hover:-translate-y-2 group-hover:shadow-xl
        "
      >
        <div className="relative w-full h-48">
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
    </div>
  );
}
