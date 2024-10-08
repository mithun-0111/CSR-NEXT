import Link from 'next/link';
import ClientSideComponent from './components/ClientComponent';

export const runtime = "edge";

export default function Home() {
  return (
    <div>
      <h1>My CSR Next.js App</h1>
      <ClientSideComponent />
      <Link href="/about">Go to About Page</Link>
    </div>
  );
}
