import { Separator } from '@/components/ui/separator';
import { Calendar, Goal, LoaderCircle, Clipboard } from 'lucide-react';
import Link from 'next/link';

const indicators = [
  {
    icon: <Goal className='w-6 h-6 text-gray-700' />,
    title: 'Na samochód',
    value: 'PLN 45 350,00',
    progress: '75%',
    progressColor: 'text-yellow-600',
  },
  {
    icon: <LoaderCircle className='w-6 h-6 text-gray-700' />,
    title: 'Nauka TypeScript',
    value: '14h',
    progress: '60%',
    progressColor: 'text-yellow-600',
  },
  {
    icon: <Clipboard className='w-6 h-6 text-gray-700' />,
    title: 'Oferty pracy',
    value: '38 aplikacji',
    progress: '',
    progressColor: 'text-green-600',
  },
];

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
      <section className='flex justify-between mb-4'>
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

      <section>
        <Separator className='mb-2' />
        <div className='grid grid-cols-1 md:grid-cols-3'>
          {indicators.map((indicator, index) => (
            <div
              key={index}
              className='flex items-center p-4'
            >
              <div className='w-12 h-12 flex items-center justify-center bg-gray-200 rounded-full mr-4'>
                {indicator.icon}
              </div>
              <div>
                <Link href=''>
                  <h2 className='text-sm font-semibold text-gray-800'>
                    {indicator.title}
                  </h2>
                </Link>
                <div className='flex items-baseline gap-2'>
                  <span className='text-lg font-bold text-gray-900'>
                    {indicator.value}
                  </span>
                  <span className={`text-xs ${indicator.progressColor}`}>
                    {indicator.progress}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Separator className='mt-2' />
      </section>

      <section></section>
    </div>
  );
}
