import Image from "next/image";
import Link from "next/link";
import Button from "./button";

type TopNavProps = {
  readonly img: {
    src: string;
    text: string;
  };
  readonly links: {
    url: string;
    slug: string;
  }[];
};

const TopNav = ({ img, links }: TopNavProps) => {
  return (
    <nav className="flex">
      {/* Logo */}
      {/* <div className="position-absolute z-[1]">
        <img src="https://placehold.co/120x120" />
      </div> */}
      <div className="position-absolute z-[1]">
        <Image src={img.src} alt={img.text} width={120} height={120} />
      </div>

      {/* Nav links; separate out as separate button components */}
      <ul
        className="flex 
  items-end 
  pl-10 
  flex-grow 
  bg-gradient-to-t 
  from-zinc-300 
  to-zinc-500 
  text-xl"
      >
        {/* <li>
          <button className="button hover:bg-red text-black font-bold py-3 px-8 rounded ml-12">
            <span className="transform skew-x-12">Button</span>
          </button>
        </li> */}

        {/* generated button */}
        {links.map((link) => (
          <li key={link.slug}>
            <Link href={link.url}>
              <Button>{link.slug}</Button>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TopNav;
