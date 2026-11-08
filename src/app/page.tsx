import HomeClient from "@/components/HomeClient";
import { getSession } from "@/lib/getSession";

export default async function Home() {
  const session = await getSession()
    console.log("Session:", session); // Call getSession to check for an existing session
  return (
    <>
    <HomeClient email={session?.user?.email!} />
    </>
  );
}
