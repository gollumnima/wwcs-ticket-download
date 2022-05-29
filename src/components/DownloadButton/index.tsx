import * as S from './styles';

type Props = {
  href: string;
};

const DownloadButton:React.FC<Props> = ({ href }) => (
  <S.Button href={href} download="wwcs-ticket.png">
    티켓 저장
  </S.Button>
);

export default DownloadButton;
