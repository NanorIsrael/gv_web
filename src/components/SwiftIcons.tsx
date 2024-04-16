import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

type Props = {
  speed: number
  hoverSpeed: number
  shadow: boolean
  children: React.ReactNode
  className?: string
}
const Marquee = ({ speed, hoverSpeed, shadow, children, ...rest }: Props) => {

  const [offset, setOffset] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const shadowClass = `after:content-[''] after:absolute after:block after:z-10 after:h-full before:content-[''] before:absolute 
    before:block before:z-10 before:h-full before:end-0 after:shadow-[10px_0_50px_65px_rgba(256,256,256,1)] 
    before:shadow-[-10px_0_50px_65px_rgba(256,256,256,1)] dark:after:shadow-[10px_0_50px_65px_rgba(16,24,39,1)]
    dark:before:shadow-[-10px_0_50px_65px_rgba(16,24,39,1)]`;

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const divCls:string = twMerge('relative flex overflow-hidden w-full', shadow ? shadowClass : '', rest.className);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setOffset((prevOffset) => {
        if (Math.abs(prevOffset) >= window.innerWidth) {
          return 0;
        } else {
          return isHovering ? prevOffset - hoverSpeed : prevOffset - speed;
        }
      });
    }, 10);

    return () => clearInterval(intervalId);
  }, [speed, hoverSpeed, isHovering]);

  return (
  <div className={divCls} role="banner" onMouseOver={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)} onFocus={()=> null}>
    <div className="flex items-center min-w-full justify-around" style={{ transform: `translateX(${offset}px)` }}>
      {children}
    </div>
    <div className="flex items-center min-w-full justify-around" style={{ transform: `translateX(${offset}px)` }}>
      {children}
    </div>
  </div>
  );
};

export default Marquee;
