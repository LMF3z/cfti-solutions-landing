/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { Button, Typography } from '@material-tailwind/react';
import { routesNav } from '~/constants/routes.constants';

export const NavListMainHeader = (
  <ul className='mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6'>
    {routesNav.slice(1, routesNav.length - 1).map((route, index) => (
      <Typography
        key={index}
        as='li'
        variant='small'
        color='blue-gray'
        className='p-1 font-normal'
      >
        <a href={route.link} className='flex items-center capitalize'>
          {route.name}
        </a>
      </Typography>
    ))}
    {
      <Button
        variant='outlined'
        size='sm'
        fullWidth
        color='blue-gray'
        className='mb-2 border border-bg-violet hover:bg-bg-violet hover:text-white'
      >
        <span>{routesNav.pop()?.name}</span>
      </Button>
    }
  </ul>
);
