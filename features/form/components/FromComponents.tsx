import type { ChangeEvent} from 'react';
import { usePageContext } from '../../common/contexts/PageContext';

export const FormComponent = () => {
  const context = usePageContext();
  const {name, count} = context;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    context.setName(() => e.target.value);
  };

  const increment = () => {
    context.setCount(a => a + 1);
  };

  return (
    <>
      <p>
        <input type="text" value={name} onChange={handleChange}/>
        { name }
      </p>
      <p>
        <button type='button' onClick={increment}>+1</button>
        { count }
      </p>
    </>
  );
};
