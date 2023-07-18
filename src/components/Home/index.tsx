import { component$ } from '@builder.io/qwik';
import {} from 'react';
import { images } from '~/assets/images';
import { WriteMachine } from '~/integrations/react/machine/WriteMachine';
const words = ['Programamos.', 'Diseñamos.', 'Desarrollamos.'];

export const HomeOne = component$(() => {
  return (
    <section class='h-[85vh] grid grid-rows-2 md:grid-rows-1 md:grid-cols-2 gap-3 items-center justify-center px-5'>
      <div class='space-y-3'>
        <h1>
          Nosotros:
          <br />
          <WriteMachine words={words} />
        </h1>
        <p class='text-justify text-lg'>
          Cfti es una empresa que se dedica a crear, innovar y hacer realidad
          tus sueños
        </p>
      </div>

      <div class='h-full'>
        <img src={images.rectangule1} alt='' />
      </div>
    </section>
  );
});
