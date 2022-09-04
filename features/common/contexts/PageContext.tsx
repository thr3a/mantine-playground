import { useState, createContext, useContext} from 'react';
import type {Dispatch, SetStateAction, ReactNode} from 'react';

export interface ChildrenProps {
  children: ReactNode
}

type PageContextType = {
  name: string,
  count: number,
  setName: Dispatch<SetStateAction<string>>,
  setCount: Dispatch<SetStateAction<number>>,
  gridSize: number,
  setGridSize: Dispatch<SetStateAction<number>>,
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export const PageProvider = ({children} : ChildrenProps) => {
  const [name, setName] = useState<string>('');
  const [count, setCount] = useState<number>(0);
  const [gridSize, setGridSize] = useState<number>(1);

  return (
    <PageContext.Provider value={{count,setCount,name,setName,gridSize,setGridSize}}>
      {children}
    </PageContext.Provider>
  );
};

export const usePageContext = () => {
  const context = useContext(PageContext);
  
  if (context === undefined) {
    throw new Error('Context is undefined');
  }
  return context;
};
