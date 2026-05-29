import React from 'react';
import Project from '../components/project.jsx';

const ProjectPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col items-center px-4 py-12"
      style={{ backgroundColor: 'var(--bg-color)', color: 'var(--text-color)' }}
    >
      <div className="w-full max-w-5xl">
        <h1
          className="text-4xl font-extrabold mb-12 tracking-tight text-left"
          style={{ color: 'var(--text-color)' }}
        >
          My Projects
        </h1>
      </div>

      <div className="max-w-5xl w-full space-y-10">

        {/* Real-Time Chat Application */}
        <Project
          title="Real-Time Chat Application – Live Sync"
          description="A responsive chatting platform focusing on instant data synchronization. Leveraging Firebase as a Backend-as-a-Service (BaaS), the application ensures seamless live message updates and a fast, reliable user experience without the need for a traditional custom backend."
          github="https://github.com/bhumikasahai/Facebook-Messenger"
          live="https://facebook-messenger-clone-d509d.web.app"
          status="Live"
          papers={[
            <img key="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
            <img key="firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" className="w-10 h-10" alt="Firebase" />,
            <img key="tailwind" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="w-10 h-10" alt="Tailwind CSS" />
          ]}
          color="#0052FF"
        />

        {/* Global Pandemic Tracker */}
        <Project
          title="Global Pandemic Tracker – Interactive Dashboard"
          description="A data visualization dashboard utilizing the public REST API disease.sh to fetch real-time worldwide and country-specific statistics. It features interactive maps that plot latitude/longitude data with color-coded circles (green for recovered, red for deaths), utilizing Chart.js for graphical analysis and Numeral.js for precise data formatting."
          github="https://github.com/bhumikasahai/covid-tracker"
          live="https://covid-19-project-beaba.web.app"
          status="Live"
          papers={[
            <img key="react" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className="w-10 h-10" alt="React" />,
            <img key="js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />,
            <img key="firebase" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg" className="w-10 h-10" alt="Firebase" />
          ]}
          color="#FF3366"
        />

        {/* Credit Card Fraud Detection */}
        <Project
          title="Credit Card Fraud Detection – Machine Learning"
          description="Developing a machine learning model to identify fraudulent transactions. The project involves analyzing large datasets to detect patterns and integrating the trained model into a responsive web dashboard via an API."
          github="https://github.com/bhumikasahai/Credit-Card-Fraud-Detection"
          live="https://credit-card-fraud-detection-two.vercel.app/"
          status="Live"
          papers={[
            <img key="python" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" className="w-10 h-10" alt="Python" />,
            <img key="html" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className="w-10 h-10" alt="HTML" />,
            <img key="css" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className="w-10 h-10" alt="CSS" />,
            <img key="js" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="w-10 h-10" alt="JavaScript" />
          ]}
          color="#9933FF"
        />

      </div>
    </div>
  );
};

export default ProjectPage;