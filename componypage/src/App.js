import React from 'react';
import LeadershipTeam from './components/LeadershipTeam';

import './App.css';
import DevelopmentTeam from './components/DevelopmentTeam';
import SalesMarketingTeam from './components/SalesMarketingTeam';

function App() {
  return (
    <div className='app'>
     <header>
      <h1>Tech Innovators</h1>
      <p>
      Tech Innovators is a cutting-edge technology company focused on revolutionizing the digital landscape. Founded in 2010 by a team of visionary entrepreneurs, our mission is to push the boundaries of innovation and create solutions that empower businesses and individuals alike.

At Tech Innovators, we believe in the transformative power of technology to drive positive change in the world. Our diverse team of experts spans various disciplines, including software engineering, artificial intelligence, data science, and user experience design. Together, we collaborate to develop groundbreaking products and services that redefine industry standards.
      </p>
     </header>
<section>
<LeadershipTeam/>
<DevelopmentTeam/>
<SalesMarketingTeam/>
</section>
    </div>
  );
}

export default App;
