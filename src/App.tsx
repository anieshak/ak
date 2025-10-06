import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen relative overflow-hidden flex flex-col md:p-[1rem] items-center justify-center">
      <main className="md:w-[62rem] sm:w-full max-w-full">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  );
}
