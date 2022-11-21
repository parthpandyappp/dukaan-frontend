import { Divider } from "./Divider";

const SloganForm = () => {
  return (
    <div className="container form-container">
      <div className="form-main">
        <h3 className="form-heading">Free slogan maker</h3>
        <p className="form-para">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free
        </p>

        <form>
          <label className="form-label" htmlFor="word-for-slogan">
            Word for your slogan
          </label>
          <input
            className="form-input"
            type="search"
            name="word-for-slogan"
            value="cozy"
          />
          <button className="btn-form mt-48">Generate slogans</button>
        </form>
        <Divider />
      </div>
    </div>
  );
};

export { SloganForm };
