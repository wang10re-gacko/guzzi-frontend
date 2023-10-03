import { Route } from 'constants/Route';
import { useQueryParam } from 'hooks/useQueryParam';
import { useRouter } from 'next/router';
import { withBaseURL } from 'utils/env';
import { useMutation } from 'react-query';
import Button from 'components/Button/Button';
import { useState } from 'react';
import { Input } from '@chakra-ui/react';
import { Spacing, width100 } from '@toss/emotion-utils';
import { signIn } from 'remotes/login';
import { signUp } from 'remotes/signUp';
import useToaster from 'hooks/useToaster';
import { getErrorMessage } from 'utils/errors/getErrorMessage';

export default function SignUp() {
  const router = useRouter();
  const redirectUrl = useQueryParam('redirectUrl');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const { errorToast } = useToaster();

  const handleLoginButtonClick = useMutation(async () => {
    try {
      await signUp({ id, password });
      await signIn({ id, password });
      if (redirectUrl == null) {
        router.push(Route.HOME());
      } else {
        router.push(withBaseURL(redirectUrl));
      }
    } catch (error) {
      errorToast(getErrorMessage(error));
    }
  });

  return (
    <>
      <Spacing size={12} />
      <label>
        아이디
        <Input value={id} onChange={e => setId(e.target.value)} />
      </label>
      <Spacing size={20} />
      <label>
        비밀번호
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </label>
      <Spacing size={20} />
      <Button
        css={width100}
        disabled={id.length === 0 && password.length === 0}
        isLoading={handleLoginButtonClick.isLoading}
        onClick={() => handleLoginButtonClick.mutate()}
      >
        회원가입
      </Button>
    </>
  );
}
