import postgres from 'postgres';

const sql = postgres(process.env.POSTGRES_URL!, { ssl: 'require' });
import { fetchCardData} from '../lib/data';


async function listInvoices() {
  const data = await sql`
    SELECT invoices.amount, customers.name
    FROM invoices
    JOIN customers ON invoices.customer_id = customers.id
    WHERE invoices.amount = 666;
  `;

  return data;
}

export async function GET() {
  try {
    const invoices = await fetchCardData();
    return Response.json(invoices);
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
}
