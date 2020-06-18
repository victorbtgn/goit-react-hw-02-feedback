import React from 'react';

const Section = ({ title, children }) => (
  <>
    {title && <h2 className="feedback-title">{title}</h2>}

    <section>{children}</section>
  </>
);

export default Section;
