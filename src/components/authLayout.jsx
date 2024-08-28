import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const authStatus = useSelector(state => state.auth.status);

  useEffect(() => {
    if (authStatus !== authentication) {
      navigate(authentication ? '/login' : '/');
    }
    setLoader(false);
  }, [authentication, navigate, authStatus]);

  return loader ? <h1 className='text-center text-xl text-[#2A9792]'>Loading...</h1> : <>{children}</>;
}

export default Protected;
