import React, { useEffect } from 'react';
import i18next from 'i18next';
import { SSelect } from '../YoutubeForm/styled';

export const LngChange = () => {
  return (
    <SSelect>
      <option onClick={() => i18next.changeLanguage('cs')}>CZ</option>
      <option onClick={() => i18next.changeLanguage('en')}>EN</option>
    </SSelect>
  );
};
