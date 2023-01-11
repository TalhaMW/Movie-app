import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';

const Header = () => {
  return (
    <header>
      <div className='container'>
        <div className='flex flex-col sm:flex-row justify-between'>
          <div className='header-items-container flex flex-grow mx-auto sm:mx-0 mt-3 overflow-hidden'>
            <HeaderItem
              text='HOME'
              Icon={HomeIcon}
            />
            <HeaderItem
              text='Trending'
              Icon={LightningBoltIcon}
            />
            <HeaderItem
              text='Trending'
              Icon={BadgeCheckIcon}
            />
            <HeaderItem
              text='Trending'
              Icon={CollectionIcon}
            />
            <HeaderItem
              text='Trending'
              Icon={SearchIcon}
            />
            <HeaderItem
              text='User'
              Icon={UserIcon}
            />
          </div>
          <Link href='/'>
            <Image
              className='mx-auto sm:mx-0 mt-4'
              src='/logo.png'
              width={70}
              height={70}
              alt='logo'
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
