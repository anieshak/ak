import SocialLinks from "./SocialLinks";
import profileImg from "../assets/aniesh-profile.jpg";

export default function ProfileCard() {
  return (
    <div className="bg-white shadow-xl">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {/* Left: Image Section */}
        <div className="md:w-1/2 flex-shrink-0">
          <div className="relative overflow-hidden bg-gray-100 shadow-md">
            <img
              src={profileImg}
              alt="Profile"
              className="w-full aspect-[3/4] object-cover object-top"
            />
          </div>
        </div>

        {/* Right: Content Section */}
        <div className="flex-1 flex flex-col justify-center p-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-black italic">
              Aniesh Kumar
            </h1>
            <p className="text-base sm:text-lg text-black italic mb-8">
              Hello there! <br />I am a{" "}
              <span className="font-semibold">'Customer Success Manager'</span>{" "}
              passionate about Technology, Security & using tech to make this
              world a better place to live in.
            </p>

            {/* Social Links */}
            <div className="w-full sm:max-w-md">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
