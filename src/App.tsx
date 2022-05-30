import React, { useState } from 'react';
import DownloadButton from './components/DownloadButton';
import Input from './components/Input';
import MakeButton from './components/MakeButton';
import Preview from './components/Preview';
import * as S from './styles';

const App = () => {
  const [href, setHref] = useState('');
  const [value, setValue] = useState('');
  const [fixedValue, setFixedValue] = useState('');
  const onCanvasChange = (dataLink:string) => {
    setHref(dataLink);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const saveText = (text: string) => {
    setFixedValue(text);
    onCanvasChange(text);
  };

  return (
    <S.Container>
      <Preview />
      <p>위민후 코드와 함께 하는 상반기결산 입장권 만들기</p>
      <p>아래의 입력칸에 이름을 입력해주세요</p>
      <p>입장권 만들기 버튼을 클릭해 입장권에 이름을 새겨보세요</p>
      <p>이미지 저장 버튼을 꾸욱 눌러서 오늘의 추억을 간직해보아요</p>
      <S.Spacing />
      <S.Spacing />
      <S.Flex>
        <Input onChange={onChange} value={value} />
        <MakeButton onClick={() => saveText(value)} value={fixedValue} />
        <DownloadButton />
      </S.Flex>
      <S.Spacing />
      <b style={{ color: 'red' }}>고칠 것들!! 수정 빨리 할게요 ㅠㅠ</b>
      <p style={{ color: 'red' }}>-이미지 초기 랜더링 안되는 문제</p>
      <p style={{ color: 'red' }}>-캔버스 텍스트 초기화 하는 방법 찾기</p>
      <p style={{ color: 'red' }}>-UI를 어떻게 하면 좀 더 예쁘게 할 수 있을까</p>
    </S.Container>
  );
};

export default App;
