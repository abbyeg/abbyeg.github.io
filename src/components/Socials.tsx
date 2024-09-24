import React, { useEffect, useState } from "react";
import { SocialIcon } from 'react-social-icons';

const Socials: React.FC = () => {
  let colors = {
    bgColor: '#fff',
    fgColor: '#6b6f72'
  };

  return (
    <span className="social-container" style={{ marginRight: 15 }}>
      <span style={{ marginLeft: 10 }}>
        <SocialIcon
          className="social-link"
          bgColor={colors.bgColor}
          fgColor={colors.fgColor}
          style={{ height: 35, width: 35 }}
          url="https://github.com/abbyeg"
        />
      </span>
      <span style={{ marginLeft: 10 }}>
        <SocialIcon
          className="social-link"
          bgColor={colors.bgColor}
          fgColor={colors.fgColor}
          style={{ height: 35, width: 35 }}
          url="https://www.linkedin.com/in/abbygrobbel/"
        />
      </span>
      <span style={{ marginLeft: 10 }}>
        <SocialIcon
          className="social-link"
          bgColor={colors.bgColor}
          fgColor={colors.fgColor}
          style={{ height: 35, width: 35 }}
          url="mailto:dev@abbygrobbel.com"
        />
      </span>
    </span>
  );
};

export default Socials;
