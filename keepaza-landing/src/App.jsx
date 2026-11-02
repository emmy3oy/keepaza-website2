import ClaimSection from "./components/ClaimSection/ClaimSection";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import NewWaySection from "./components/NewWaySection/NewWaySection";
import ProfileSection from "./components/ProfileSection/ProfileSection";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* <ProfileSection />
      <NewWaySection />
      <ClaimSection /> */}
      <Footer />
    </>
  );
}


export default App;