import Header from "./Header";
import Lead from "./Lead";
import Content from "./Content";
import Footer from "./Footer";
import "../blocks/page/page.css";

function App() {
  return (
    <div className="page">
      <div className="full-vh-screen">
        <Header />
        <Lead />
      </div>

      <Content />

      <Footer />
    </div>
  );
}

export default App;
