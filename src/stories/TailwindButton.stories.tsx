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