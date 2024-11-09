
import { QueryClientProvider, QueryClient} from '@tanstack/react-query';
import SignInForm from './SignInForm';

function SignIn() {
    const queryClient = new QueryClient();
  return (
    
    <QueryClientProvider client={queryClient}>
        <SignInForm />
    </QueryClientProvider>
  )
}

export default SignIn