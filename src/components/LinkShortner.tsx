import { useState } from 'react'
import { ListOfShortLinks } from './ListOfShortLinks'
import {ShortLink} from '../types';
import {dummyData} from '../dummyData'
import React from 'react';
export const LinkShortner = () => {
  const [shortLinks, setShortLinks] = useState<ShortLink[]>(dummyData);
  return (
    <section>
      <form>  
      <input type='text' placeholder='Shorten a link here...'/>
      <input type='submit' value='Shorten it!'/>
      </form>
      {<ListOfShortLinks shortURLs={shortLinks} />}
    </section>
  )
}
