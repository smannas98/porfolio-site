import Image from 'next/image';
import Link from 'next/link';
import Button from './Button'

interface ButtonProps {
  buttonUrl: string,
  buttonSlug: string,
  buttonClass: string,
  slugClass: string,
}

type ImageProps = {
  imgSrc: string,
  imgText: string,
  imgClass: string,
  imgContainer: string
}

type Props = ButtonProps[];

const TopNav = (buttonProps: Props , imageProps: ImageProps, listClass: string) => {
  return (
    <nav className="flex">
      {/* Logo */}
      {/* <div className="position-absolute z-[1]">
        <img src="https://placehold.co/120x120" />
      </div> */}
      <div className={imageProps.imgContainer}>
        <Image
          src={imageProps.imgSrc}
          alt={imageProps.imgText}
          className={imageProps.imgClass}
        />
      </div>

      {/* Nav links; separate out as separate button components */}
      <ul className={listClass}>
        {/* <li>
          <button className="button hover:bg-red text-black font-bold py-3 px-8 rounded ml-12">
            <span className="transform skew-x-12">Button</span>
          </button>
        </li> */}

        {/* generated button */}
        {
          buttonProps.map((button: ButtonProps) => (
            <li
              key={button.buttonSlug}
              className={button.buttonClass}
            >
              <Link
                href={button.buttonUrl}
              >
                <Button
                  slug={button.buttonSlug}
                  buttonClass={button.buttonClass}
                  slugClass={button.slugClass}
                />
              </Link>
            </li>
          ))
        }
      </ul>
    </nav>
  )
}

export default TopNav