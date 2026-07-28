import Navbar from "../components/Navibar";
import Hero from "./hero";
import Plans from "./plans/page";
import Footer from "./footer";
 
export default function HomePage() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Plans />
      <Footer />
</main>
  );
}