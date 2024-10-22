import { ListOfShortLinks } from './ListOfShortLinks'
import type { ShortLink } from '../types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { LinkShortnerForm } from './LinkShortnerForm';
import {
  useQuery,

  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

const queryClient = new QueryClient()
export const LinkShortner = () => {



  return (
    <QueryClientProvider client={queryClient}>
      <div className='bg-statsSectionBg sm:flex sm:justify-center'>
        <div className='flex flex-col items-center relative -top-20 sm:min-w-[500px]'>
          <LinkShortnerForm />
            <ListOfShortLinks />
        </div>
      </div>
    </QueryClientProvider>
  );
}
