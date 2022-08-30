import { colors } from '../classnames';
import '../index.css';

export default {
  title: 'Tailwind/Colors',
}

export const EmployeeCycleColors  = () => {
  return (
    <>
      <h2>Employee Cycle Tailwindcss Colors</h2>
      <p>The color swatches below contain the tailwindcss code for colors.</p>
    </>
  )
}

export const NeutralColors  = () => {
  return (
    <>
    <div>
      <div className={colors.container}>
        <div className="mr-8">
          <div className={colors.colorn1}>bg-white</div>
          <span>Neutral 1</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorn2}>bg-gray-100</div>
          <span>Neutral 2</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorn3}>bg-gray-300</div>
          <span>Neutral 3</span>
        </div>
      </div>
      <div className={colors.container}>
        <div className="mr-8">
          <div className={colors.colorn4}>bg-gray-700</div>
          <span>Neutral 4</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorn5}>bg-gray-800</div>
          <span>Neutral 5</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorn6}>bg-gray-900</div>
          <span>Neutral 6</span>
        </div>
      </div>
    </div>
    </>
  )
}
export const PrimaryColors  = () => {
  return (
    <>
    <div>
      <div className={colors.container}>
        <div className="mr-8">
          <div className={colors.colorp1}>bg-sky-900</div>
          <span>Blue Dark 1</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorp2}>bg-sky-800</div>
          <span>Blue Dark 2</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorp3}>bg-sky-600</div>
          <span>Blue Light 1</span>
        </div>
      </div>
      <div className={colors.container}>
        <div className="mr-8">
          <div className={colors.colorp4}>bg-sky-500</div>
          <span>Blue Light 2</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorp5}>bg-orange-700</div>
          <span>Orange Dark</span>
        </div>
        <div className="mr-8">
          <div className={colors.colorp6}>bg-amber-500</div>
          <span>Orange Light</span>
        </div>
      </div>
    </div>
    </>
  )
}