export default async function handler(req, res) {
  const { city, state } = req.query;
  const apiKey = '0ImlEo1higoGBGRgLSBG3dodzJjYOJeXLwU24RWZ';
  const url = `https://api.gsa.gov/travel/perdiem/v2/rates/city/${city}/state/${state}/year/2025?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json(data);
}
