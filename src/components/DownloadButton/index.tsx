import * as S from './styles';

type Props = {
  canvasRef: React.RefObject<HTMLCanvasElement>;
};
const DownloadButton:React.FC<Props> = ({ canvasRef }) => {
  const onDownloadImage = () => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const url = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.download = 'wwcs-ticket.png';
    link.href = url;
    link.click();
    return link;
  };
  return (
    <S.Button type="button" onClick={onDownloadImage}>
      저장하기
    </S.Button>
  );
};
export default DownloadButton;
