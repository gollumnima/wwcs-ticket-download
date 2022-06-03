import { useEffect } from 'react';
import * as S from './styles';

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  onImageDraw: (ref: HTMLCanvasElement) => void;
  value: string;
};

const Preview:React.FC<Props> = ({ canvasRef, onImageDraw, value }) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    onImageDraw(canvas);
    return undefined;
  }, [canvasRef, value]);

  return (
    <S.PreviewWrapper>
      <S.TitleWrapper>Women Who Code Seoul 상반기결산 입장권</S.TitleWrapper>
      <canvas ref={canvasRef} id="canvas" width={855} height={335} />
    </S.PreviewWrapper>
  );
};

export default Preview;
