// import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef } from 'react';

import User from './User';
import SearchHeaderOptions from './SearchHeaderOptions';
import {
  MagnifyingGlassIcon,
  MicrophoneIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid';

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  function search(event) {
    event.preventDefault();
    const term = searchInputRef.current.value;
    if (!term.trim()) return;
    router.push(`/search?term=${term.trim()}&searchType=`);
  }
  return (
    <div>
      <header className=" flex w-full p-6 items-center sticky top-0 bg-white">
        <div className="  ">
          <div className=" flex w-full justify-between page_title ">
            <h1
              onClick={() => router.push('/')}
              className=" text-xs md:text-base text-blue-800 font-bold cursor-pointer hover:text-blue-500 hover:underline "
            >
              The Word
            </h1>
          </div>
          {/* <Image
          onClick={() => router.push('/')}
          width="80"
          objectFit="cover"
          height="40"
          className="h-10 w-10 cursor-pointer rounded-full"
          src="/../public/images/Helmet-of-Salvation.jpg"
          alt="google-logo"
        /> */}
        </div>
        <User className="ml-auto whitespace-nowrap" />
      </header>
      <div>
        <form
          className="flex border border-gray-200 rounded-full
         shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center"
        >
          <input
            type="text"
            defaultValue={router.query.term}
            ref={searchInputRef}
            className="w-full focus:outline-none"
          />
          <XMarkIcon
            onClick={() => (searchInputRef.current.value = '')}
            className="h-7 text-gray-500 cursor-pointer sm:mr-3 border-r-2 pr-3 border-gray-300 mr-3"
          />
          {/* <MicrophoneIcon
            className="h-6 hidden sm:inline-flex
           text-blue-500 pl-4 border-l-2 border-gray-300 mr-3"
          /> */}
          <MagnifyingGlassIcon className="h-6 hidden sm:inline-flex text-blue-500" />
          <button onClick={search} type="submit" hidden></button>
        </form>
      </div>
      <SearchHeaderOptions />
    </div>
  );
}
