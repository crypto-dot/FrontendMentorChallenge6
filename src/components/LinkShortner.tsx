import { useState } from 'react'
import { ListOfShortLinks } from './ListOfShortLinks'
import {ShortLink} from '../types';
import {dummyData} from '../dummyData'
import React from 'react';
export const LinkShortner = () => {
  const [shortLinks, setShortLinks] = useState<ShortLink[]>(dummyData);
  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();
  }
  return (
    <div className='bg-statsSectionBg'>
      <div className='flex flex-col items-center relative -top-20'>   
        <form onSubmit={handleSubmit} className='bg-no-repeat bg-right-top bg-shortnMobile w-[calc(100%-3rem)] py-6 rounded relative flex flex-col items-center mb-6'>  
          <input type='text' placeholder='Shorten a link here...' className='h-btnMd w-btnMd rounded font-medium mb-[2.375rem] pl-4'/>
          <input type='submit' value='Shorten it!' className='max-w-shortnerInput h-btnMd w-btnMd rounded bg-primary hover:bg-primary-hover font-bold text-white'/>
        </form>
        {<ListOfShortLinks shortURLs={shortLinks} />}
      </div>
    </div>
  );
}
