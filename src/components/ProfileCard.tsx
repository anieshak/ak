import RelevantLinks from "./RelevantLinks";
import profileImg from "../assets/aniesh-profile.jpg";

export default function ProfileCard() {
  return (
    <div className="bg-white/95 border border-slate-200 shadow-xl flex flex-col md:flex-row gap-6 items-center rounded-lg overflow-hidden">
      {/* Left: Image Section */}
      <div className="md:w-124 sm:w-full">
        <div className="relative overflow-hidden bg-slate-100">
          <img
            src={profileImg}
            alt="Aniesh"
            title="Aniesh"
            className="w-full aspect-[3/4] object-cover object-top"
          />
        </div>
      </div>

      {/* Right: Content Section */}
      <div className="flex-1 flex flex-col justify-center px-8 py-10 md:w-124 sm:w-full">
        <div>
          <h1 className="text-3xl lg:text-4xl tracking-tight font-semibold mb-3 text-slate-900 italic">
            Aniesh Kumar
          </h1>
          <p className="text-base lg:text-lg text-slate-700 italic leading-relaxed mb-8">
            Hello there! <br />I am a{" "}
            <span className="font-semibold text-slate-800">
              Customer Success Manager
            </span>{" "}
            passionate about Technology, Security & using tech to make this
            world a better place to live in.
          </p>

          {/* Social Links */}
          <div className="w-full">
            <RelevantLinks />
           
          </div>
        </div>
      </div>
    </div>
  );
}
