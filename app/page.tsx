import Link from '@mui/material/Link';
import NextLink from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/about" component={NextLink}>About</Link>
    </div>
  );
}
