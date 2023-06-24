import { Flex } from '@toss/emotion-utils';
import Button from 'components/Button';
import { colors } from 'constants/colors';
import { useRouter } from 'next/router';

function NavBar() {
  const router = useRouter();

  return (
    <Flex
      as="nav"
      align="center"
      css={{
        width: '100%',
        borderBottom: `1px solid ${colors.grey400}`,
        height: '60px',
        padding: '8px 16px',
        justifyContent: 'space-between',
      }}
    >
      <Button
        onClick={() => {
          router.back();
        }}
      >
        뒤로가기
      </Button>
      {/* <Button onClick={() => {}}>마이페이지</Button> */}
    </Flex>
  );
}

export default NavBar;
