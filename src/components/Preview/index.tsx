import { useEffect, useRef } from 'react';
import * as S from './styles';

type Props = {

};

const Preview:React.FC<Props> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onImageDraw = (ref:HTMLCanvasElement) => {
    const ctx = ref.getContext('2d');
    if (!ctx) return undefined;
    const image = new Image();
    image.src = '/images/ticket.png';
    image.onload = () => {
      ctx.drawImage(image, 0, 0);
    };
    return image;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    onImageDraw(canvas);
    return undefined;
  }, [canvasRef]);

  return (
    <S.PreviewWrapper>
      <S.TitleWrapper>Women Who Code Seoul 상반기결산 입장권</S.TitleWrapper>
      <canvas ref={canvasRef} id="canvas" width={855} height={335} />
    </S.PreviewWrapper>
  );
};

export default Preview;
