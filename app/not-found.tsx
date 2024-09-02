import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='flex h-screen flex-col items-center justify-center'>
      <div className='mb-4 space-y-6'>
        <div className='flex items-center justify-center'>
          <Image src='/logo.png' width={128} height={128} alt='台大鳥巢 NTU NEST' />
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-lg font-semibold'>Oops! 找不到頁面</p>
        </div>
      </div>
      <Link className={buttonVariants({})} href='/'>
        回到首頁
      </Link>
    </div>
  );
}
