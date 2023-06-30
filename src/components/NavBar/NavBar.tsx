import { Flex } from '@toss/emotion-utils';
import { useRouter } from 'next/router';
import { Route } from 'constants/Route';
import { colors } from 'constants/colors';
import Button from 'components/Button';

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
      }}
    >
      <Button
        onClick={async () => {
          router.back();
        }}
      >
        뒤로가기
      </Button>
    </Flex>
  );
}

export default NavBar;
