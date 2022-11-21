import { Fragment } from "react";
import { Features, Header, OtherProducts, SloganForm } from "../components";

const Home = () => {
  return (
    <Fragment>
      <Header />
      <SloganForm />
      <div className="feature-block">
        <Features />
      </div>
      <OtherProducts />
    </Fragment>
  );
};

export { Home };
