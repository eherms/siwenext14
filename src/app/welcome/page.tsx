import Image from 'next/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '../api/auth/auth-options';
import { redirect } from 'next/navigation';

export default async function Welcome() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect('/');
  }
  return <pre>{JSON.stringify(session, null, 2)}</pre>;
}
