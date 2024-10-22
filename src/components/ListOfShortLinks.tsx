import { useState } from "react";
import type { ShortLink } from "../types";
import { ShortURL } from "./ShortURL"
import {
  useQuery,
  useQueryClient
} from '@tanstack/react-query';
import axios from 'axios';
export const ListOfShortLinks = () => {
  const queryClient = useQueryClient();
  const { isLoading, isError, data, error } = useQuery({
    queryKey: ['resources'],
    queryFn: async () => {
      const response = await axios.get('/api/resources');
    }
  });

  const [shortLinks, setShortLinks] = useState<ShortLink[]>([]);

  if (isLoading)
    return (<div>Loading...</div>);
  if (isError)
    return (<div>Error: {(error as Error).message}</div>);

  return (
    // @ts-ignore
    <ul className="flex flex-col gap-6 w-[100%]"> {data.map((shortURLItem,index) => {
      return (<ShortURL shortURL={shortURLItem.shortURL} longURL={shortURLItem.longURL} key={index}/>) } )} </ul>
  );
}
