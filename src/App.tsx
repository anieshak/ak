import ProfileCard from "./components/ProfileCard";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen md:overflow-hidden flex flex-col py-4 justify-center bg-[#00000030]">
      <main className="mx-auto 2xl:max-w-5xl max-w-[65%]  px-4 sm:px-6 ">
        <ProfileCard />
      </main>
      <Footer />
    </div>
  );
}
