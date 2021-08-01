import React from 'react';

type FooterProps = {
  plotChart: () => void;
};

const Footer: React.FC<FooterProps> = ({ plotChart }) => {
  return (
    <div>
      <button onClick={plotChart}>generate chart</button>
    </div>
  );
};

export default Footer;
