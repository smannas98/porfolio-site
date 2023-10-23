import Link from 'next/link';
import Image from 'next/image';

const SideBar = () => {
  return (
    <nav className="pl-3 mr-16 float-left border-r pr-16 border-black h-full">
      <div className="flex gap-1 mb-4">
        <Image
          src="/assets/images/Github.svg"
          alt="github logo"
          width={25}
          height={25}
          className="object-contain flex gap-1 flex-center"
        />
        <Link href="https://github.com/smannas98" target="_blank" className="flex flex-center gap-1 pr-3">
          <p className="logo_text">
            Github
          </p>
        </Link>
      </div>
      <div className="flex gap-1">
        <Image
          src="/assets/images/Linkedin.svg"
          alt="LinkedIn logo"
          width={25}
          height={25}
          className="object-contain flex gap-1 flex-center"
        />
        <Link href="https://www.linkedin.com/in/seanmannas/" target="_blank" className="flex flex-center gap-1">
          <p className="logo_text">
            LinkedIn
          </p>
        </Link>
      </div>
    </nav>
  )
}

export default SideBar