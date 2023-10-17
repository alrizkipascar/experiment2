import { cookies } from "next/headers";

export const runtime = "edge";

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  return new Response("Hello, Next.js!", {
    status: 200,
    headers: { "Set-Cookie": `token=${token}` },
  });
}

// ...

// export async function GET(request: Request) {
// the type `KVNamespace` comes from the @cloudflare/workers-types package
// const { MY_KV } = (process.env as { MY_KV: KVNamespace });

// return new Response(
// ...
//   );
//   };
