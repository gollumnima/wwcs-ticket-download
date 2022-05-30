import * as S from './styles';

const DownloadButton:React.FC = () => {
  const onDownloadImage = () => {
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
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
      이미지로 저장하기
    </S.Button>
  );
};
export default DownloadButton;
