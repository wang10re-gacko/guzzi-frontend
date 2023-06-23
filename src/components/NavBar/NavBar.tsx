import { Flex } from '@toss/emotion-utils';
import Txt from 'components/Txt/Txt';
import { colors } from 'constants/colors';

function NavBar() {
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
    />
  );
}

export default NavBar;
