import React, { useState } from "react";

const Tabs = ({ services }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <section className="tabs">
      <div>
        {services.map((service, index) => (
          <h3
            className={`tab-title ${index === activeTabIndex && "active"}`}
            key={index}
            onClick={() => setActiveTabIndex(index)}
          >
            {service.name}
          </h3>
        ))}
      </div>
      <div className="tab-content">
        <p>{services[activeTabIndex].description}</p>
      </div>
    </section>
  );
};

export default Tabs;
