'use client';

import {useTranslations} from 'next-intl';
import Hero from '@/components/Hero/Hero';
import About from '@/components/About/About';

export default function IndexPage() {
  const t = useTranslations('IndexPage');

  return (
<>
      < Hero />
      < About />
      </>
  );
}
