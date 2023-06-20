import Grid from 'components/Grid';
import NavBar from 'components/NavBar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavBar />
      <Grid>{children}</Grid>
    </>
  );
}
