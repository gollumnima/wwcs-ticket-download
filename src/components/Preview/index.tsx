import { useEffect } from 'react';
import * as S from './styles';

type Props = {

};

const Preview:React.FC<Props> = () => {
  const canvas = document.getElementById('canvas') as HTMLCanvasElement;

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
    if (!canvas) return undefined;
    onImageDraw(canvas);
    console.log('on image draw');
    return undefined;
  }, [canvas]);

  // useEffect(() => {
  //   if (!canvas) return undefined;
  //   const url = canvas.toDataURL();
  //   if (href === url) return undefined;
  //   onCanvasChange(href);
  //   return undefined;
  // }, [canvas, href]);

  return (
    <S.PreviewWrapper>
      <S.TitleWrapper>Women Who Code Seoul 상반기결산 입장권</S.TitleWrapper>
      <canvas id="canvas" width={855} height={335} />
    </S.PreviewWrapper>
  );
};

export default Preview;
