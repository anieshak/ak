import ProfileCard from "./components/ProfileCard";
import Background from "./components/Background";

export default function App() {
  return (
    <Background>
      <div className="min-h-screen relative overflow-hidden flex flex-col md:p-[2rem] items-center justify-center">
        <main className="md:w-[65rem] sm:w-full max-w-full">
          <ProfileCard />
        </main>
      </div>
    </Background>
  );
}
