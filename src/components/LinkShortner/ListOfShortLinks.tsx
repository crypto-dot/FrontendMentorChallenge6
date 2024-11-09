import { useState } from "react";
import type { ShortLink } from "../../types";
import { ShortURL } from "./ShortURL"
import {
  useQuery
} from '@tanstack/react-query';
import axios from 'axios';
import Loader from "../Loaders/Loader";

export const ListOfShortLinks = () => {
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['shortLinks'],
    queryFn: async () => {
      const response = await axios.get('/api/shortLinks');
      return response.data as ShortLink[];
    }
  });
  if (isLoading)
    return (<div role="status">
      <Loader />
      <span className="sr-only">Loading...</span>
    </div>);
  if (isError)
    return (<div>Error: {(error as Error).message}</div>);
  if (data?.length === 0)
    return (<div>You have not uploaded any links to be shortened!</div>);
  return (
    // @ts-ignore
    <ul className="flex flex-col gap-6 w-[100%]"> {data.map((shortURLItem, index) => {
      return (<ShortURL shortURL={shortURLItem.shortURL} longURL={shortURLItem.longURL} key={index} />)
    })} 
    </ul>
  );
}
