import { usePageContext } from '../../common/contexts/PageContext';

export const Viewer = () => {
  const {name, count} = usePageContext();
  return (
    <>
      { name } { count }
    </>
  );
};
