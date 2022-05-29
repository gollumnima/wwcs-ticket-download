import React, { useState } from 'react';
import DownloadButton from './components/DownloadButton';
import Input from './components/Input';
import Preview from './components/Preview';
import * as S from './styles';

const App = () => {
  const [href, setHref] = useState('');
  const [value, setValue] = useState('');
  const onCanvasChange = (dataLink:string) => {
    setHref(dataLink);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <S.Container>
      <Preview onCanvasChange={onCanvasChange} href={href} />
      <S.Flex>
        <Input onChange={onChange} value={value} />
        <DownloadButton href={href} />
      </S.Flex>
    </S.Container>
  );
};

export default App;
