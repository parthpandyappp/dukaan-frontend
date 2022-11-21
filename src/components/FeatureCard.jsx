const FeatureCard = ({ feature }) => {
  const { name, icon, description } = feature;
  return (
    <div className="feat-card">
      <img src={icon} alt={`${name}-icon`} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export { FeatureCard };
