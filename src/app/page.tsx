import { Calendar } from 'lucide-react';

export default function Home() {
  const today = new Date();
  const formattedDate = today.toLocaleDateString('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const parts = formattedDate.split(' ');
  const day = parts[0];
  const month = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
  const year = parts[2];

  return (
    <div className='min-h-screen px-5'>
      <section className='flex justify-between'>
        <div>
          <h1 className='font-semibold text-3xl mb-2 text-gray-900'>Cześć, Rafał</h1>
          <p className='text-sm text-gray-600 leading-relaxed'>
            Śledź swoje najważniejsze postępy tutaj.
          </p>
        </div>
        <div className='flex items-start'>
          <div className='flex items-center gap-2'>
            <span className='text-gray-700'>{`${day} ${month}, ${year}`}</span>
            <div className='rounded-xl w-8 h-8 bg-gray-300 flex items-center justify-center cursor-pointer'>
              <Calendar className='w-5 h-5' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
