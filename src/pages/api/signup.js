import PocketBase from "pocketbase";

export async function POST({ request }) {
  const { email, postalcode, path } = await request.json();

  const pb = new PocketBase("http://127.0.0.1:8090");

  try {
    const newRecord = await pb.collection("signups").create({
      email,
      postalcode,
      path,
    });
    return new Response(JSON.stringify(newRecord), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
