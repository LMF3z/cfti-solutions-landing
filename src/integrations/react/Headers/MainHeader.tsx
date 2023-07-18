/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { useEffect, useState } from 'react';
import {
  Navbar,
  Typography,
  Button,
  IconButton,
  Collapse,
} from '@material-tailwind/react';
import { NavListMainHeader } from './NavListMainHeader';
import { routes } from '~/constants/routes.constants';

export const MainHeader = qwikify$(
  () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    useEffect(() => {
      window.addEventListener(
        'resize',
        () => window.innerWidth >= 960 && setOpenNav(false)
      );
    }, []);

    return (
      <>
        <Navbar className='sticky top z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4 header-gradient'>
          <div className='flex items-center justify-between text-blue-gray-900'>
            <Typography
              as='a'
              href={routes.home}
              className='mr-4 cursor-pointer py-1.5 text-3xl font-bold'
            >
              Cfti
            </Typography>
            <div className='flex items-center gap-4'>
              <div className='mr-4 hidden lg:block'>{NavListMainHeader}</div>

              <IconButton
                variant='text'
                className='ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden'
                ripple={false}
                onClick={() => setOpenNav(!openNav)}
              >
                {openNav ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    className='h-6 w-6'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                )}
              </IconButton>
            </div>
          </div>
          <Collapse open={openNav}>{NavListMainHeader}</Collapse>
        </Navbar>
      </>
    );
  },
  { eagerness: 'load' }
);
