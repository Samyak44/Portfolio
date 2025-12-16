'use client'

import { useState, useEffect } from 'react';

export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') return null;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  const isTablet = /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(navigator.userAgent);
  const isLowEnd = navigator.hardwareConcurrency <= 4 ||
                   (navigator.deviceMemory && navigator.deviceMemory < 4);

  return {
    isMobile,
    isTablet,
    isLowEnd,
    shouldSimplify3D: isMobile || isLowEnd,
    maxParticles: isMobile ? 1000 : (isTablet ? 2500 : 5000)
  };
};

export const useDeviceCapabilities = () => {
  const [capabilities, setCapabilities] = useState(null);

  useEffect(() => {
    setCapabilities(getDeviceCapabilities());
  }, []);

  return capabilities;
};
