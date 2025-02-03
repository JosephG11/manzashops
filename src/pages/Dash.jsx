import Content from "../components/Dash/Content";
import Suggestions from "../components/Dash/Suggestions";
import Hero from "../components/Dash/Hero";

const Dash = () => {
  return (
    <div className="bg-white w-full">
      <Hero />
      <Suggestions />
      <Content />
    </div>
  );
};

export default Dash;
