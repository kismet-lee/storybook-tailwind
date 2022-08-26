import { colors } from '../classnames';
import '../index.css';

export default {
  title: 'Tailwind/Colors',
}

export const Colors  = () => {
  return (
    <>
    <div className="flex justify-center grid-cols-4 items-center">
    <div className="mr-8">
      <div className="">Color 1</div>
    </div>
    <div className="mr-8">
    <div className="">Color 1</div>
    </div>
    <div className="mr-8">
    <div className="">Color 1</div>
    </div>
    <div className="">
    <div className="">Color 1</div>
    </div>
    </div>
    </>
  )
}