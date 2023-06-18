import { Route } from 'constants/Route';
import { useQueryParam } from 'hooks/useQueryParam';
import { useRouter } from 'next/router';
import { withBaseURL } from 'utils/env';

export default function Login() {
  const router = useRouter();
  const redirectUrl = useQueryParam('redirectUrl');

  return (
    <>
      <label>
        아이디
        <input></input>
      </label>
      <label>
        비밀번호
        <input></input>
      </label>
      <button
        onClick={() => {
          if (redirectUrl == null) {
            router.push(Route.HOME());
          } else {
            router.push(withBaseURL(redirectUrl));
          }
        }}
      >
        로그인
      </button>
    </>
  );
}
