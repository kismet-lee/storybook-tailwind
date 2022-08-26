import { button } from '../classnames';
import '../index.css';

export default {
  title: 'Tailwind/Buttons',
}

export const Primary = () => {
  return (
    <>
    <div className="flex grid-cols-3 items-center">
    <div className="mr-8">
      <button className={button.primary}>Primary button</button>
    </div>
    <div className="mr-8">
      <button className={button.secondary}>Secondary button</button>
    </div>
    <div>
      <button className={button.tertiary}>Tertiary button</button>
    </div>
    </div>
    </>
  )
}

export const Disabled = () => {
  return (
    <>
    <div className="flex grid-cols-3 items-center">
    <div className="mr-8">
      <button className={button.primary} disabled>Primary button</button>
    </div>
    <div className="mr-8">
      <button className={button.secondary} disabled>Secondary button</button>
    </div>
    <div>
      <button className={button.tertiary} disabled>Tertiary button</button>
    </div>
    </div>
    </>
  )
}

export const Neutral = () => {
  return (
    <>
    <div className="flex grid-cols-3 items-center">
    <div className="mr-8">
      <button className={button.ntrl}>Primary button</button>
    </div>
    <div className="mr-8">
      <button className={button.secondaryntrl}>Secondary button</button>
    </div>
    <div>
      <button className={button.tertiaryntrl}>Tertiary button</button>
    </div>
    </div>
    </>
  )
}

export const Small = () => {
  return (
    <>
    <div className="flex grid-cols-3 items-center">
    <div className="mr-8">
      <button className={button.small}>Primary button</button>
    </div>
    <div className="mr-8">
      <button className={button.secondarysm}>Secondary button</button>
    </div>
    <div>
      <button className={button.tertiarysm}>Tertiary button</button>
    </div>
    </div>
    </>
  )
}

export const SmallDisabled = () => {
  return (
    <>
    <div className="flex grid-cols-3 items-center">
    <div className="mr-8">
      <button className={button.small} disabled>Primary button</button>
    </div>
    <div className="mr-8">
      <button className={button.secondarysm} disabled>Secondary button</button>
    </div>
    <div>
      <button className={button.tertiarysm} disabled>Tertiary button</button>
    </div>
    </div>
    </>
  )
}


export const SmallNeutral = () => {
  return (
    <>
    <div className="flex grid-cols-3 items-center">
    <div className="mr-8">
      <button className={button.smntrl}>Primary button</button>
    </div>
    <div className="mr-8">
      <button className={button.secondarysmntrl}>Secondary button</button>
    </div>
    <div>
      <button className={button.tertiaryntrlsm}>Tertiary button</button>
    </div>
    </div>
    </>
  )
}