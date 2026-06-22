import DemoOne from './demo';
import TestimonialSliderDemo from './components/ui/testimonial-slider-demo';
import './App.css';

function App() {
  // Read query parameter to determine which section to render
  const urlParams = new URLSearchParams(window.location.search);
  const mode = urlParams.get('mode');

  if (mode === 'testimonials') {
    return <TestimonialSliderDemo />;
  }

  return (
    <DemoOne />
  );
}

export default App;
