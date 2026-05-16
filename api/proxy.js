export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  try {
    const response = await fetch('https://mfsyhtuqybbxprgwwykd.supabase.co/functions/v1/market-data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': 'sb_publishable_Al7QsFGnNTlknoI8KVxjag_JUwrytZy',
        'Authorization': 'Bearer sb_publishable_Al7QsFGnNTlknoI8KVxjag_JUwrytZy',
        'Origin': 'https://realapp.tools',
        'Referer': 'https://realapp.tools/'
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
