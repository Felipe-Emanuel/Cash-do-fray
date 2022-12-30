import { ReactNode } from 'react';

export interface NavLinkProps {
    content: ReactNode;
    link: any;
    className?: string;
}

export const NavLink = ({content, link, className}: NavLinkProps) => {
    return (
      <>
        <div
          className={`
            ${className}
  
            text-white text-sm uppercase font-semibold relative py-5
  
            after:absolute after:bottom-3 after:left-[50%]
            after:w-0 after:h-1 after:bg-yellow-500 after:transition-all
  
            hover:after:left-[15%] hover:after:w-[70%] 
  
            after:top-11
          `}
        >
          <a href={link} aria-label={link}>
            {content}
          </a>
        </div>
      </>
    );
  };
  