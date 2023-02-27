import { useState, useEffect } from 'react';

const Header = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            setTheme(currentTheme);
        }
    }, []);

    const handleToggle = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <header className='px-5 w-full py-4 flex justify-between items-center'>
            <div className='logo flex justify-center items-center text-white'>
                <img src="https://res.cloudinary.com/primalappsje/image/upload/v1677529262/primal/logos/logo-cowords_ubn9ju.png" width="50" height="50" alt='' />
                <h1 className='mx-2 f-tilt text-xl'>Cowords</h1>
                <p className='f-tilt text-xs mt-4'>
                    <span>by </span>
                <span className='text-[#b0b0b0]'>m</span>
                <span className='text-[#40B5F5]'>a</span>
                <span className='text-[#b0b0b0]'>s</span>
                <span className='text-[#DF5990]'>h</span>
                <span className='text-[#b0b0b0]'>c</span>
                <span className='text-[#F5C700]'>o</span>
                <span className='text-[#b0b0b0]'>d</span>
                <span className='text-[#E4363D]'>e</span>
                </p>
            </div>
            <div>
                {/* <label id="switch" className="switch" htmlFor="slider" title="dark / light">
                    <input type="checkbox" onClick={handleToggle} id="slider" />
                    <span className="slider round"></span>
                </label> */}
                {/* <style>{`
        body {
          background-color: ${theme === 'light' ? '#b0b0b0' : '#171721'};
          color: ${theme === 'light' ? '#171721' : '#ffffff'};
        }
        .theme-toggle {
          background-color: ${theme === 'light' ? '#b0b0b0' : '#171721'};
          color: ${theme === 'light' ? '#171721' : '#ffffff'};
          border: 1px solid ${theme === 'light' ? '#171721' : '#b0b0b0'};
        }
      `}</style> */}
            </div>
        </header>
    );
};

export default Header;
