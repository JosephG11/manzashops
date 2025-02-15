import Content from '../components/Dash/Content';
import Suggestions from '../components/Dash/Suggestions';
import Hero from '../components/Dash/Hero';

const Dash = () => {
  return (
    <div className="w-full bg-white">
      <Hero />
      <Suggestions />
      <Content />
    </div>
  );
};

export default Dash;
