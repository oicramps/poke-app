import { useTh, x } from '@xstyled/styled-components';
import React from 'react';
import ClipLoader from 'react-spinners/ClipLoader';

interface Props {
  isLoading: boolean;
}

const Loading: React.FC<Props> = ({ isLoading = false }) => {
  const primaryColor = useTh('colors.primary');

  return isLoading ? (
    <x.div display='flex' justifyContent='center'>
      <ClipLoader size={30} color={primaryColor} />
    </x.div>
  ) : null;
};

export default Loading;
