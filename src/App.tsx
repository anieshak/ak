import ProfileCard from "./components/ProfileCard";
import Background from "./components/Background";
import SocialLinks from "./components/SocialLinks";

export default function App() {
  return (
    <Background>
      <div className="relative flex min-h-screen flex-col items-center justify-start px-3 py-6 sm:px-6 sm:py-8 md:justify-center lg:px-8">
        <main className="w-full max-w-5xl">
          <ProfileCard />
        </main>
        <SocialLinks />
      </div>
    </Background>
  );
}
