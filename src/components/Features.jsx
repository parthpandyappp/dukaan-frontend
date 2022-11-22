import { FeatureData } from "../assets/db/";
import { FeatureCard } from "./FeatureCard";

const Features = () => {
  return (
    <div className="feat-container container">
      {FeatureData.length &&
        FeatureData.map((feature) => <FeatureCard key={feature.id} feature={feature} />)}
    </div>
  );
};

export { Features };
