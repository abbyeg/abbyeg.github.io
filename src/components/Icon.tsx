import React, { useEffect, useState } from 'react';

const Icon: React.FC = () => {
  const images = [
    '/assets/icon-clock/1.webp',
    '/assets/icon-clock/2.webp',
    '/assets/icon-clock/3.webp',
    '/assets/icon-clock/4.webp',
    '/assets/icon-clock/5.webp',
    '/assets/icon-clock/6.webp',
    '/assets/icon-clock/7.webp',
    '/assets/icon-clock/8.webp',
    '/assets/icon-clock/9.webp',
    '/assets/icon-clock/10.webp',
    '/assets/icon-clock/11.webp',
    '/assets/icon-clock/12.webp'
  ];
  const current_time = new Date().getHours() % 12;
  let url = images[current_time-1];

  return (
    <img alt="Blog Logo" src={url} width="75" height="50" />
  );
}

export default Icon;