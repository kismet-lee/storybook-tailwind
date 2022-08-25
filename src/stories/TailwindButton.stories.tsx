import { button } from '../classnames';
import '../index.css';

export default {
  title: 'Tailwind/Button',
}

export const Primary = () => {
  return (
    <div>
      <button className={button.primary}>some action</button>
    </div>
  )
}

export const PrimaryDisabled = () => {
  return (
    <div>
      <button className={button.primary} disabled>some action</button>
    </div>
  )
}

export const PrimaryNeutral = () => {
  return (
    <div>
      <button className={button.ntrl}>some action</button>
    </div>
  )
}

export const PrimarySmall = () => {
  return (
    <div>
      <button className={button.small}>some action</button>
    </div>
  )
}

export const PrimarySmallDisabled = () => {
  return (
    <div>
      <button className={button.small} disabled>some action</button>
    </div>
  )
}


export const PrimarySmallNeutral = () => {
  return (
    <div>
      <button className={button.smntrl}>some action</button>
    </div>
  )
}

export const Secondary = () => {
  return (
    <div>
      <button className={button.secondary}>some action</button>
    </div>
  )
}

export const SecondaryDisabled = () => {
  return (
    <div>
      <button className={button.secondary} disabled>some action</button>
    </div>
  )
}

export const SecondaryNeutral = () => {
  return (
    <div>
      <button className={button.secondaryntrl}>some action</button>
    </div>
  )
}
