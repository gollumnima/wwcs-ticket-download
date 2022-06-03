import React, { useRef, useState } from 'react';
import DownloadButton from './components/DownloadButton';
import Input from './components/Input';
import Preview from './components/Preview';
import * as S from './styles';

const App = () => {
  const canvasRef: React.RefObject<HTMLCanvasElement> = useRef(null);
  const [value, setValue] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const setFont = (ref: HTMLCanvasElement, text: string) => {
    const ctx = ref.getContext('2d');
    if (!ctx) return undefined;
    ctx.font = '30px Nanum Gothic';
    ctx?.fillText(text, 620, 190);
    return ctx;
  };

  const onImageDraw = (ref:React.RefObject<HTMLCanvasElement>, text:string) => {
    const canvas = ref.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const image = new Image();
    image.src = '/images/ticket.png';
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
      setFont(canvas, text);
    };
    return image;
  };

  return (
    <S.Container>
      <Preview
        canvasRef={canvasRef}
        onImageDraw={() => onImageDraw(canvasRef, value)}
        value={value}
      />
      <p>위민후 코드와 함께 하는 상반기결산 입장권 만들기</p>
      <p>아래의 입력칸에 이름을 입력해주세요</p>
      <p>입장권 만들기 버튼을 클릭해 입장권에 이름을 새겨보세요</p>
      <p>이미지 저장 버튼을 꾸욱 눌러서 오늘의 추억을 간직해보아요</p>
      <S.Spacing />
      <S.Spacing />
      <S.Flex>
        <Input onChange={onChange} value={value} />
        <DownloadButton canvasRef={canvasRef} />
      </S.Flex>
      <S.Spacing />
    </S.Container>
  );
};

export default App;
