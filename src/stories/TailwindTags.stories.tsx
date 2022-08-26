import { tag } from '../classnames';
import '../index.css';

export default {
  title: 'Tailwind/Tags',
}

export const Tag = () => {
  return (
    <>
    <div className="flex grid-cols-2 items-center">
    <div className="mr-8">
      <div className={tag.large}>Tag large</div>
    </div>
    <div className="mr-8">
    <div className={tag.small}>Tag small</div>
    </div>
    </div>
    </>
  )
}