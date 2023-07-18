/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { Button } from '@material-tailwind/react';

interface Props {
  title: string;
  description: string[];
  background?: string;
  labelButton: string;
  link: string;
  picture: string;
  reversed?: boolean;
}

export const ShowConceptImage = qwikify$(
  ({
    title,
    description,
    background = 'gradient-show-concept',
    labelButton,
    picture,
    reversed,
  }: Props) => {
    return (
      <section
        className={`min-h-screen flex flex-col md:flex-row justify-center items-center gap-3 ${background} ${
          reversed && 'md:flex-row-reverse'
        }`}
      >
        <div className={`flex flex-col justify-center items-center gap-5 px-5`}>
          <h1>{title}</h1>
          <div className='space-y-5 text-justify'>
            {description.map((desc, index) => (
              <p key={index}>{desc}</p>
            ))}
          </div>
          <Button
            variant='filled'
            size='sm'
            color='blue-gray'
            className='bg-white text-black hover:bg-bg-violet hover:text-white'
          >
            {labelButton}
          </Button>
        </div>
        <div className='w-full h-full'>
          <img src={picture} alt='' />
        </div>
      </section>
    );
  }
);
