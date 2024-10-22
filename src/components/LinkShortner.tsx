import { ListOfShortLinks } from './ListOfShortLinks'
import { useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler, SubmitErrorHandler, FieldErrors } from 'react-hook-form';
import { dummyData } from '../data/dummyData';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

export const LinkShortner = () => {
  const shortLinks = dummyData;
  const schema = z.object({
    url: z.string({   
      invalid_type_error: "URL must be a string"}).min(1, {
      message: "URL is required"
      }).url({message: "Invalid URL"})
  });
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  const onSubmit: SubmitHandler<FieldValues> = (data, e) => {
    if(e) 
      e.preventDefault();
    
  };

  const onError: SubmitErrorHandler<FieldErrors>  = (errors, e) => console.log(errors);
  return (
    <div className='bg-statsSectionBg sm:flex sm:justify-center'>
      <div className='flex flex-col items-center relative -top-20 sm:min-w-[500px]'>   
        <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>, onError as SubmitErrorHandler<FieldErrors>)} className='bg-no-repeat bg-right-top bg-shortnMobile w-[calc(100%-3rem)] py-6 rounded relative flex flex-col items-center mb-6'>  
          <input type='text' {...register("url")} placeholder='Shorten a link here...' className={errors.url?.message ? 'h-btnMd w-btnMd rounded font-medium pl-4 border-4 border-error border-solid focus:outline-white' : ' mb-[2.375rem] h-btnMd w-btnMd rounded font-medium pl-4 focus:outline-white'}/>
          {errors.url?.message && <span className='text-white bg-error mb-[2.375rem] w-btnMd pl-2 h-7 flex items-center'>{errors.url?.message as string}</span>}
          <input type='submit' value='Shorten it!' className='max-w-shortnerInput h-btnMd w-btnMd rounded bg-primary hover:bg-primary-hover font-bold text-white'/>
        </form>
        {<ListOfShortLinks shortURLs={shortLinks} />}
      </div>
    </div>
  );
}
