import { colors, fontstyle } from '../classnames';
import '../index.css';

export default {
  title: 'Tailwind/Typography',
}

export const EmployeeCycleTypography  = () => {
  return (
    <>
      <h2>Employee Cycle Typography</h2>
      <p>The typography breakdown for Employee Cycle.</p>
    </>
  )
}

export const HeadlineClasses  = () => {
  return (
    <>
    <div>
      <div className={fontstyle.container}>
        <div>
          <h1 className={fontstyle.h1}>H1 Style</h1>
        </div>
        <div>
          <p>Main heading (Open Sans 64px bold)</p>
          <p>Use as a main header on a page.</p>
        </div>
      </div>
      <div className={fontstyle.container}>
        <div>
          <h2 className={fontstyle.h2}>H2 Style</h2>
        </div>
        <div>
          <p>Secondary heading (Open Sans 48px bold)</p>
          <p>Use as a secondary header on a page.</p>
        </div>
      </div>
      <div className={fontstyle.container}>
        <div>
          <h3 className={fontstyle.h3}>H3 Style</h3>
        </div>
        <div>
          <p>Subheading (Open Sans 36px bold)</p>
          <p>Use as a subheader on a page.</p>
        </div>
      </div>
      <div className={fontstyle.container}>
        <div>
          <h4 className={fontstyle.h4}>H4 Style</h4>
        </div>
        <div>
          <p>Subheading (Open Sans 24px bold)</p>
          <p>Need use examples.</p>
        </div>
      </div>
      <div className={fontstyle.container}>
        <div>
          <h5 className={fontstyle.h5}>H5 Style</h5>
        </div>
        <div>
          <p>Subheading (Open Sans 20px bold)</p>
          <p>Need use examples.</p>
        </div>
      </div>
      </div>  
    </>
  )
}
