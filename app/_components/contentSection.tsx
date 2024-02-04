import { ReactNode } from "react";
import { ContentSectionPropsType } from "../_types/contentSection";

export default function ContentSection({ index, sectionTitle, link, ...props }: ContentSectionPropsType & { children?: ReactNode }) {
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