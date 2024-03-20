import React, { createContext, useReducer, useEffect } from 'react';
import getProgramsData from '@/lib/data/getProgramsData';
import programsReducer from './DataReducer';
import ProgramsContext from './dataContext';

const ProgramsState = ({ children }) => {
  const initialState = {
    programs: []
  };

  const [state, dispatch] = useReducer(programsReducer, initialState);

  useEffect(() => {
    const fetchPrograms = async () => {
      const allPrograms = await getProgramsData();
      dispatch({ type: 'SET_PROGRAMS', payload: allPrograms });
    };

    fetchPrograms();
  }, []);

  // return (
  //   <ProgramsContext.Provider value={state}>
  //     {children}
  //   </ProgramsContext.Provider>
  // );
};

export default ProgramsState;