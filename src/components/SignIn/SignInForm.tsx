import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import type { SubmitHandler, FieldValues } from 'react-hook-form';
function SignInForm() {
    
    const schema = z.object({
        email: z.string().min(1, {
            message: "Email is Required"
        }).email({ message: "Invalid email"}),
        password: z.string().min(1, {
            message: "Password is Required"
        })
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(schema)
    });

    const mutation = useMutation({
        mutationFn: (data: FieldValues) => {
            return axios.post('/api/auth/signin', data);
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data, e) => {
        if (e)
            e.preventDefault();
        mutation.mutate(data);
    };

return (
    <form onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)} className="flex flex-col gap-4" noValidate >
        <label htmlFor="email" className="text-secondarytxt">Email</label>
        <div>
            <input  {...register("email")} type="email"   className="p-2 border border-secondarytxt rounded-md"  required/>
            {errors.email?.message && <span className='text-white bg-error mb-[2.375rem] w-btnMd pl-2 h-7 flex items-center w-full'>{errors.email?.message as string}</span>}
        </div>
        <div>
            <label htmlFor="password" className="text-secondarytxt">Password</label>
            <input {...register("password")} type="password"   className="p-2 border border-secondarytxt rounded-md" required />
            {errors.password?.message && <span className='text-white bg-error mb-[2.375rem] w-btnMd pl-2 h-7 flex items-center'>{errors.password?.message as string}</span>}
        </div>
        <input type="submit" className="bg-primarytxt text-white p-2 rounded-md" value={"Sign In"}/>
    </form>
    )
}

export default SignInForm