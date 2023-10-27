import React from 'react'

type Props = {
  buttonClass: string,
  slug: string,
  slugClass: string

}

const Button = (props: Props) => {
  return (
    <button className={props.buttonClass}>
      <span className={props.slugClass}>{props.slug}</span>
    </button>
  )
}

export default Button;