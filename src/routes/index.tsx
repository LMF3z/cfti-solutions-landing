import { component$ } from '@builder.io/qwik';
import { images } from '~/assets/images';
import { HomeOne } from '~/components/Home';
import SliderHome from '~/components/Home/SliderHome';
import { ShowConceptImage } from '~/components/shared/ShowconceptImage';

export default component$(() => {
  return (
    <>
      <HomeOne />
      <SliderHome />
      <article>
        <ShowConceptImage
          title='¿Deseas mejorar tu imagen digital? ¡en cftisolutions tenemos la solucion!'
          description={[
            'Cftisolutions esta conformado por un equipo multidiciplinario,altamente calificado y preparado para resolver tus problemas digitales.',
            'Si deseas saber mas pulsa el siguiente boton',
          ]}
          picture={images.rectangule2}
          labelButton='Contactanos'
          link=''
        />
        <ShowConceptImage
          title='¡Si tienes una idea con nosotros la puedes hacer realidad!'
          description={[
            'Con cftisolutions si tienes una idea nuestro equipo la llevara acabo, ¡Y creara esa aplicacion o website que tanto deseas!',
          ]}
          picture={images.rectangule3}
          labelButton='Comenzar proyecto'
          link=''
          reversed={true}
        />
      </article>
    </>
  );
});
