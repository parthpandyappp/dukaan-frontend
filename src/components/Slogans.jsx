const Slogans = ({ slogans }) => {
  return (
    <div>
      <div className="slogans-header">
        <p className="form-para">We've generated 1,023 slogans for "cozy"</p>
        <button className="btn-secondary">Download all</button>
      </div>
      <div className="slogan-items">
        {slogans.length &&
          slogans.map((slogan) => {
            return <p className="slogan-item">{slogan.slogan}</p>;
          })}
      </div>
    </div>
  );
};

export { Slogans };
