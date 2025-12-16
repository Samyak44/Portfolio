'use client'

import { BallCanvas } from './canvas';
import { useDeviceCapabilities } from '@/utils/deviceDetection';

import { SectionWrapper } from '@/hoc';
import { technologies } from '@/constants';

const Tech = () => {
  const capabilities = useDeviceCapabilities();

  // Show static images on mobile/low-end devices for better performance
  if (capabilities?.shouldSimplify3D) {
    return (
      <div className='flex flex-row flex-wrap justify-center gap-6 sm:gap-10'>
        {technologies.map((technology) => (
          <div
            title={technology.name}
            className='w-20 h-20 xs:w-24 xs:h-24 sm:w-28 sm:h-28
              flex items-center justify-center
              bg-tertiary rounded-full p-3 sm:p-4
              hover:scale-110 transition-transform duration-200'
            key={technology.name}
          >
            <img
              src={technology.icon.src || technology.icon}
              alt={technology.name}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    );
  }

  // Desktop: Show 3D balls
  return (
    <div className='flex flex-row flex-wrap justify-center gap-8 sm:gap-10'>
      {technologies.map((technology) => (
        <div title={technology.name} className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
        </div>
      ))}
    </div>
  )
}

export default SectionWrapper(Tech, "")
