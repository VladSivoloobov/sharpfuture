import Header from "../../Components/UI/Header/Header.jsx";
import { Container } from "../../Components/UI/Container/Container.jsx";
import "./HomePage.scss";
import { CartButton } from "../../Components/UI/CartButton/CartButton.jsx";
import { HeroSection } from "../../Components/Sections/HeroSection/HeroSection.jsx";
import { DonateSection } from "../../Components/Sections/DonateSection/DonateSection.jsx";

export const HomePage = () => {
  return (
    <>
      <Header />
      <main className="main">
        <CartButton />
        <HeroSection />
        <DonateSection />
      </main>
    </>
  );
};
