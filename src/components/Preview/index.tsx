import { useEffect } from 'react';
import * as S from './styles';

type Props = {
  onCanvasChange: (dataLink: string) => void;
  href: string;
  value: string;
};

const Preview:React.FC<Props> = ({ onCanvasChange, href, value }) => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

  const onImageDraw = () => {
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;
    const image = new Image();
    image.src = '/images/ticket.png';
    image.onload = () => {
      ctx?.drawImage(image, 0, 0);
    };
    return image;
  };

  const setFont = (ref: HTMLCanvasElement, text: string) => {
    if (!ref) return undefined;
    const ctx = ref.getContext('2d');
    if (!ctx) return undefined;
    ctx.font = '30px Nanum Gothic';

    ctx?.fillText(text, 620, 180);
    return ctx;
  };

  useEffect(() => {
    onImageDraw();
    return undefined;
  }, [canvas]);

  useEffect(() => {
    if (!canvas) return undefined;
    setFont(canvas, value);
    return undefined;
  }, [value]);

  useEffect(() => {
    if (!canvas) return undefined;
    const url = canvas.toDataURL();
    if (href === url) return undefined;
    onCanvasChange(href);
    return undefined;
  }, [canvas, href]);

  return (
    <S.PreviewWrapper>
      <S.TitleWrapper>위민후코드 상반기결산 티켓 생성</S.TitleWrapper>
      <canvas id="canvas" width={855} height={335} />
    </S.PreviewWrapper>
  );
};

export default Preview;
