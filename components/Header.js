import Link from 'next/link';
import { useRouter } from 'next/router';
import User from './User';

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex justify-between  p-5 text-sm text-gray-700">
      <div className="flex space-x-4 item-center">
        <h1
          onClick={() => router.push('/')}
          className=" pt-2 text-sm  text-blue-800 font-bold relative hidden sm:inline-grid"
        >
          The Word
        </h1>

        <Link href="https://mensdiscipleshipnetwork.com/">
          <a className="pt-2 text-xs md:text-sm link  hover:text-blue-500 hover:translate-x-1">
            MDN
          </a>
        </Link>

        <Link href="https://everymanawarrior.com/">
          <a className=" pt-2 text-xs md:text-sm link hover:text-blue-500 hover:translate-x-1 ">
            EMAW
          </a>
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com">
          <a className="link text-xs md:text-sm hover:text-blue-500 hover:translate-x-1">
            Gmail
          </a>
        </Link>
        <a
          onClick={() =>
            router.push(
              `/search?term=${router.query.term || 'google'}&searchType=image`
            )
          }
          className="link text-xs md:text-sm hover:text-blue-500 hover:translate-x-1"
        >
          Images
        </a>
        <User />
      </div>
    </header>
  );
}
