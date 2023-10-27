import React from 'react'

type Props = {
  slug: string

}

const Button = (props: Props) => {
  return (
    <button className="button">
      <span className="navButtonSlug">{props.slug}</span>
    </button>
  )
}

export default Button;