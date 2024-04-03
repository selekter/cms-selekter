// import { connectToDatabase } from "@/mongodb";
import Table from "@/app/ui/admin/post/table";
import { sql } from "@vercel/postgres";

async function AdminPage() {
  // const db = await connectToDatabase();
  // const collection = db.collection("repairs");
  // const data = await collection.find({}).toArray();
  const { row } = await sql`SELECT * FROM customers`;
  console.log(row);
  return (
    <>
      <p>Hello world!</p>
      {/* <Table data={data} /> */}
      {/* {row.map((data) => (
        <div key={data.id}>
          <span>{data.name}</span>
        </div>
      ))} */}
    </>
  );
}

export default AdminPage;
