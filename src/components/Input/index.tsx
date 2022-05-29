import * as S from './styles';

type Props = {
  onChange: (e:React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

const Input:React.FC<Props> = ({ onChange, value }) => (
  <S.InputWrapper onChange={onChange} value={value} placeholder="이름을 입력해주세요" />
);

export default Input;
