import Header from 'components/header';
import HeroSection from 'components/herosection';
import Categories from "components/categories";
import Campaigns from "components/campaigns";
import Favorites from "components/favorites";
import MobileApp from "components/mobileApp";
import Card from "components/card";
import Footer from "components/footer";
import { useWindowWidth } from '@react-hook/window-size'

function App() {
  const windowWidth = useWindowWidth()

  return (
    <>
      <Header />
      {windowWidth <= 768 && <Campaigns />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaigns />}
      <div className="container mx-auto grid gap-y-6 pt-8">
        <Favorites />
        <MobileApp />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default App;