export default function Loading() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <div className='space-y-6'>
        <div className='flex items-center justify-center'>
          <div className='border-primary h-32 w-32 animate-spin rounded-full border-b-2 border-t-2' />
        </div>
        <div className='flex items-center justify-center'>
          <p className='text-lg font-semibold'>台大鳥巢 NTU NEST</p>
        </div>
      </div>
    </div>
  );
}
