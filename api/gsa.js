export default async function handler(req, res) {
  const { city, state } = req.query;
  const apiKey = '0ImlEo1higoGBGRgLSBG3dodzJjYOJeXLwU24RWZ';
  const url = `https://api.gsa.gov/travel/perdiem/v2/rates/city/${city}/state/${state}/year/2025?api_key=${apiKey}`;
  const response = await fetch(url);
  const data = await response.json();
  
  const rate = data?.rates?.[0]?.rate?.[0];
  const dailyLodging = rate?.months?.month?.[0]?.value || 107;
  const dailyMie = rate?.meals || 68;
  
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.status(200).json({
    weekly_lodging: dailyLodging * 7,
    weekly_mie: dailyMie * 7,
    daily_lodging: dailyLodging,
    daily_mie: dailyMie
  });
}
