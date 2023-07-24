import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import GroupComponent from "./pages/GroupComponent";
import MAINPAGE from "./pages/MAINPAGE";
import TutorialPage from "./pages/TutorialPage";
import TutorialPage17 from "./pages/TutorialPage17";
import TutorialPage16 from "./pages/TutorialPage16";
import TutorialPage15 from "./pages/TutorialPage15";
import TutorialPage14 from "./pages/TutorialPage14";
import TutorialPage13 from "./pages/TutorialPage13";
import TutorialPage12 from "./pages/TutorialPage12";
import TutorialPage11 from "./pages/TutorialPage11";
import TutorialPage10 from "./pages/TutorialPage10";
import WelcomePage from "./pages/WelcomePage";
import WalletPage from "./pages/WalletPage";
import WalletProvider from "./pages/WalletProvider";
import WalletProvider3 from "./pages/WalletProvider3";
import WalletChangesKaikas from "./pages/WalletChangesKaikas";
import KaikasConnectWallet from "./pages/KaikasConnectWallet";
import GroupComponent1 from "./pages/GroupComponent1";
import MAINPAGE1 from "./pages/MAINPAGE1";
import TutorialPage1 from "./pages/TutorialPage1";
import TutorialPage2 from "./pages/TutorialPage2";
import TutorialPage3 from "./pages/TutorialPage3";
import TutorialPage4 from "./pages/TutorialPage4";
import TutorialPage5 from "./pages/TutorialPage5";
import TutorialPage6 from "./pages/TutorialPage6";
import TutorialPage7 from "./pages/TutorialPage7";
import TutorialPage8 from "./pages/TutorialPage8";
import TutorialPage9 from "./pages/TutorialPage9";
import WelcomePage1 from "./pages/WelcomePage1";
import WalletPage1 from "./pages/WalletPage1";
import WalletProvider1 from "./pages/WalletProvider1";
import WalletProvider2 from "./pages/WalletProvider2";
import WalletChangesKaikas1 from "./pages/WalletChangesKaikas1";
import KaikasConnectWallet1 from "./pages/KaikasConnectWallet1";
import InvestPage from "./pages/InvestPage";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/main-page":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-17":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-16":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-15":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-14":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-13":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-12":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-11":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-10":
        title = "";
        metaDescription = "";
        break;
      case "/welcome-page":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-page":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-provider":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-provider-3":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-changes-kaikas":
        title = "";
        metaDescription = "";
        break;
      case "/kaikas-connect-wallet":
        title = "";
        metaDescription = "";
        break;
      case "/group-218":
        title = "";
        metaDescription = "";
        break;
      case "/main-page1":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page1":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-2":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-3":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-4":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-5":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-6":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-7":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-8":
        title = "";
        metaDescription = "";
        break;
      case "/tutorial-page-9":
        title = "";
        metaDescription = "";
        break;
      case "/welcome-page1":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-page1":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-provider1":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-provider-2":
        title = "";
        metaDescription = "";
        break;
      case "/wallet-changes-kaikas1":
        title = "";
        metaDescription = "";
        break;
      case "/kaikas-connect-wallet1":
        title = "";
        metaDescription = "";
        break;
      case "/invest-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<GroupComponent />} />
      <Route path="/main-page" element={<MAINPAGE />} />
      <Route path="/tutorial-page" element={<TutorialPage />} />
      <Route path="/tutorial-page-17" element={<TutorialPage17 />} />
      <Route path="/tutorial-page-16" element={<TutorialPage16 />} />
      <Route path="/tutorial-page-15" element={<TutorialPage15 />} />
      <Route path="/tutorial-page-14" element={<TutorialPage14 />} />
      <Route path="/tutorial-page-13" element={<TutorialPage13 />} />
      <Route path="/tutorial-page-12" element={<TutorialPage12 />} />
      <Route path="/tutorial-page-11" element={<TutorialPage11 />} />
      <Route path="/tutorial-page-10" element={<TutorialPage10 />} />
      <Route path="/welcome-page" element={<WelcomePage />} />
      <Route path="/wallet-page" element={<WalletPage />} />
      <Route path="/wallet-provider" element={<WalletProvider />} />
      <Route path="/wallet-provider-3" element={<WalletProvider3 />} />
      <Route path="/wallet-changes-kaikas" element={<WalletChangesKaikas />} />
      <Route path="/kaikas-connect-wallet" element={<KaikasConnectWallet />} />
      <Route path="/group-218" element={<GroupComponent1 />} />
      <Route path="/main-page1" element={<MAINPAGE1 />} />
      <Route path="/tutorial-page1" element={<TutorialPage1 />} />
      <Route path="/tutorial-page-2" element={<TutorialPage2 />} />
      <Route path="/tutorial-page-3" element={<TutorialPage3 />} />
      <Route path="/tutorial-page-4" element={<TutorialPage4 />} />
      <Route path="/tutorial-page-5" element={<TutorialPage5 />} />
      <Route path="/tutorial-page-6" element={<TutorialPage6 />} />
      <Route path="/tutorial-page-7" element={<TutorialPage7 />} />
      <Route path="/tutorial-page-8" element={<TutorialPage8 />} />
      <Route path="/tutorial-page-9" element={<TutorialPage9 />} />
      <Route path="/welcome-page1" element={<WelcomePage1 />} />
      <Route path="/wallet-page1" element={<WalletPage1 />} />
      <Route path="/wallet-provider1" element={<WalletProvider1 />} />
      <Route path="/wallet-provider-2" element={<WalletProvider2 />} />
      <Route
        path="/wallet-changes-kaikas1"
        element={<WalletChangesKaikas1 />}
      />
      <Route
        path="/kaikas-connect-wallet1"
        element={<KaikasConnectWallet1 />}
      />
      <Route path="/invest-page" element={<InvestPage />} />
    </Routes>
  );
}
export default App;
