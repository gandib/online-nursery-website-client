import { Outlet } from "react-router-dom";
import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
