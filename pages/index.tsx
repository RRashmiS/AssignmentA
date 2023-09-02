import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Link href="/registration">
          <a>Register</a>
        </Link>
        <Link href="/login">
          <a>Login</a>
        </Link>4<Link href="/profile">
          <a>Profile</a>
        </Link>
        {/* Add other links as needed */}
      </main>
    </div>
  );
}
