import { Fragment } from "react";
import {
  Features,
  Footer,
  Header,
  OtherProducts,
  SloganForm,
} from "../components";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <SloganForm />
      <div className="feature-block">
        <Features />
      </div>
      <OtherProducts />
      <Footer />
    </Fragment>
  );
};

export { Home };
