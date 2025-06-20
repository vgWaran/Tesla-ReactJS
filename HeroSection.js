import React from 'react';
import HeroCard from './components/HeroCard';

const HeroSection = () => {
  return (
    <div>
      <HeroCard
        title="American Heroes"
        description="$1,000 off for military, first responders, teachers and students."
        image="/assets/heroes1.png"
      />
      <HeroCard
        title="American Heroes"
        description="$1,000 off for military, first responders, teachers and students."
        image="/assets/heroes2.png"
      />
    </div>
  );
};

export default HeroSection;
