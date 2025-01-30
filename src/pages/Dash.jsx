import Content from "../components/Dash/Content";
import Suggestions from "../components/Dash/Suggestions";

const Dash = () => {
  return (
    <div className="bg-white w-full">
      <Suggestions />
      <Content />
    </div>
  );
};

export default Dash;
