import Link from 'next/link';

const Nav = () => {
  return (
    <nav className="flex-between w-full border-b border-black mb-16 pt-3 h-1/5">
      <Link href="/" className="flex gap-2 flex-center">
        <p className="logo_text">
          About Me
        </p>
      </Link>
      <p className="flex gap-1 flex-center">/</p>
      <Link href="/projects" className="flex gap-2 flex-center">
        <p className="logo_text">
          Projects
        </p>
      </Link>
      <p className="flex gap-1 flex-center">/</p>
      <Link href="/contact" className="flex gap-2 flex-center">
        <p className="logo_text">
          Contact
        </p>
      </Link>
    </nav>
  )
}

export default Nav