import Link from '@mui/material/Link';
import NextLink from "next/link";

export default function Page() {
  return (
    <div>
      <h1>About</h1>
      <Link href="/" component={NextLink}>Home</Link>
    </div>
  );
}
