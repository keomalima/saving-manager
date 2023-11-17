'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };

    setUpProviders();
  }, []);

  return (
    <nav className='relative flex items-center justify-between mb-16'>
      <Link href='/' className='flex flex-center gap-2'>
        <Image
          src='/assets/images/logo.png'
          className='object-contain'
          alt="'logo"
          width={200}
          height={200}
        />
      </Link>
      {session?.user ? (
        <div className='flex gap-3'>
          <Link href='/add-transaction' className='btnBlack'>
            Add Transaction
          </Link>
          <button type='button' onClick={signOut} className='btnOutline'>
            Logout
          </button>

          <Image
            src={session?.user.image}
            width={40}
            height={30}
            className='rounded-full'
            alt='profile picture'
          />
        </div>
      ) : (
        <>
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type='button'
                key={provider.name}
                onClick={() => signIn(provider.id)}
                className='btnBlack'
              >
                Login
              </button>
            ))}
        </>
      )}
    </nav>
  );
};

export default Nav;
