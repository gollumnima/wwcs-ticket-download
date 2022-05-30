import { useEffect } from 'react';
import * as S from './styles';

type Props = {
  onClick: (value: string) => void;
  value: string;
};

const MakeButton:React.FC<Props> = ({ onClick, value }) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  const setFont = (ref: HTMLCanvasElement, text: string) => {
    const ctx = ref.getContext('2d');
    if (!ctx) return undefined;
    ctx.font = '30px Nanum Gothic';

    ctx?.fillText(text, 620, 190);
    return ctx;
  };

  useEffect(() => {
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');

    setFont(canvas, value);
    return () => {
      ctx?.restore();
    };
  }, [value]);
  return (
    <S.MakeButtonWrapper type="button" onClick={() => onClick(value)}>
      입장권 만들기
    </S.MakeButtonWrapper>
  );
};

export default MakeButton;
