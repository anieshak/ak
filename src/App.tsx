import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen md:overflow-hidden flex flex-col items-center justify-between px-4 py-6 bg-[#00000030]">
      <main className="w-full max-w-4xl">
        <section className="w-full">
          <ProfileCard />
        </section>
      </main>
      <Footer />
    </div>
  );
}
