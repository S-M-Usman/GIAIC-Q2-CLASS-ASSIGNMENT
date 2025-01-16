import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container relative px-4 md:px-10 md:ml-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {/* Text Content - Will appear first on mobile */}
          <div className="order-2 flex flex-col justify-center space-y-8 pt-8 md:order-1 md:pt-20">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-[#004477] md:text-5xl lg:text-6xl">
                Governor Sindh
              </h1>
              <p className="text-2xl font-medium text-[#004477]/80 md:text-3xl">
                Kamran Khan Tessori
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-[#00A6EB] md:text-4xl">
                Certified Cloud
                <br />
                Applied Generative AI
                <br />
                Engineer (GenEng)
              </h2>
              <p className="text-xl text-[#004477]">
                Earn up to $5,000/month
              </p>
              <p className="text-lg text-[#004477]">
                Now admissions are open in Hyderabad
              </p>
            </div>
            <div className="space-y-6">
              <Link 
                href="/apply"
                className="inline-flex h-12 items-center justify-center rounded-md bg-[#004477] px-8 text-base font-medium text-white transition-colors hover:bg-[#004477]/90 focus:outline-none focus:ring-2 focus:ring-[#004477] focus:ring-offset-2"
              >
                APPLY NOW
              </Link>
              <div className="space-y-1">
                <p className="text-4xl font-bold text-[#004477]">562,143</p>
                <p className="text-sm text-[#004477]/70">Accepted Applications</p>
              </div>
            </div>
          </div>
          {/* Image - Will appear second on mobile */}
          <div className="order-1 flex items-center justify-center md:order-2">
            <Image
              src="/hero-img.png"
              alt="Governor Sindh Kamran Khan Tessori"
              width={600}
              height={800}
              className="h-auto w-full max-w-[500px] object-contain md:max-w-none"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
