import Layout from "./one";
import Link from "next/link";
export default function Try() {
  return (
    <Layout>
      <div>
        <nav>
          <Link href="/contact" className=" px-2">
            contact
          </Link>
          <Link href="/homepageone" className=" px-2">
            home
          </Link>
          <Link href="/contact" className=" px-2">
            Services
          </Link>
        </nav>
      </div>
    </Layout>
  );
}
