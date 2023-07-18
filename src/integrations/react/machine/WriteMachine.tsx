/** @jsxImportSource react */
import { qwikify$ } from '@builder.io/qwik-react';
import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

interface Props {
  words: string[];
}

export const WriteMachine = qwikify$(
  ({ words }: Props) => {
    const wordsRef = useRef(null);

    useEffect(() => {
      const typed = new Typed(wordsRef.current, {
        strings: words,
        typeSpeed: 75,
        loop: true,
      });

      return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
      };
    }, []);

    return <span ref={wordsRef} />;
  },
  { eagerness: 'load' }
);
