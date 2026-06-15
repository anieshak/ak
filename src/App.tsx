import ProfileCard from "./components/ProfileCard";
import Background from "./components/Background";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <Background>
              <div className="min-h-screen relative overflow-x-hidden flex flex-col md:pt-[1.6rem] items-center justify-start py-6 md:justify-center md:py-0">
        <main className="md:w-[65rem] sm:w-full max-w-full px-4 md:px-6">
          <ProfileCard />
        </main>
        <SocialLinks />
      </div>
    </Background>
  );
}
