import ProfileCard from "./components/ProfileCard";
import Background from "./components/Background";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <Background>
      <div className="min-h-screen relative overflow-hidden flex flex-col md:pt-[1.6rem] items-center justify-center">
        <main className="md:w-[65rem] sm:w-full max-w-full">
          <ProfileCard />
        </main>
        <SocialLinks />
      </div>
    </Background>
  );
}
