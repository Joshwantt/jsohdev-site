import { ReactNode } from "react";

type ContentSectionProps = {
  index: number;
  sectionTitle: string;
  link: string;
  // Add other regular props here
};

export default function ContentSection({ index, sectionTitle, link, ...props }: ContentSectionProps & { children?: ReactNode }) {
  return (
    <div key={index} className='odd:bg-base-200 even:bg-base-300' id={link}>
      <div className='container min-h-screen flex flex-col items-center'>
        <div className='text-4xl text-center justify-self-start'>{sectionTitle}</div>
        <div className='flex-grow flex'>
          {props.children}
        </div>
      </div>
    </div>
  );
}