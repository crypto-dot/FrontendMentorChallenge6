import { useForm } from "react-hook-form";
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export function LinkShortnerForm() {
    const schema = z.object({
        url: z.string({
            invalid_type_error: "URL must be a string"
        }).min(1, {
            message: "URL is required"
        }).url({ message: "Invalid URL" })
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const mutation = useMutation({
        mutationFn: (data: { url: string }) => {
            return axios.post('/api/resources', data);
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data, e) => {
        if (e)
            e.preventDefault();
        mutation.mutate(data.url);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)} className='bg-no-repeat bg-right-top bg-shortnMobile w-[calc(100%-3rem)] py-6 rounded relative flex flex-col items-center mb-6'>
            <input type='text' {...register("url")} placeholder='Shorten a link here...' className={errors.url?.message ? 'h-btnMd w-btnMd rounded font-medium pl-4 border-4 border-error border-solid focus:outline-white' : ' mb-[2.375rem] h-btnMd w-btnMd rounded font-medium pl-4 focus:outline-white'} />
            {errors.url?.message && <span className='text-white bg-error mb-[2.375rem] w-btnMd pl-2 h-7 flex items-center'>{errors.url?.message as string}</span>}
            <input type='submit' value='Shorten it!' className='max-w-shortnerInput h-btnMd w-btnMd rounded bg-primary hover:bg-primary-hover font-bold text-white' />
        </form>
    )
}
