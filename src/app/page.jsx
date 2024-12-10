import Image from 'next/image'
import Dashboard from './components/Dashboard'

export default async function Home() {
  //TODO:
  // - make animations

  return (
    <>
      <main className='generate-form'>
        <Dashboard/>
        <Image
          src="/chef.jpg"
          width={400}
          height={400}
          alt="chef pic"
        />
      </main>
    </>
  );
}
