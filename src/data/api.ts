const URL = "http://localhost:8000";

interface BetaBody {
  mean: number;
  variance: number;
  p: number;
}
export async function getBeta(betaBody: BetaBody){
  try {
    const response = await fetch(`${URL}/beta_demo`, {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(betaBody),
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const json = response.json();
    return json;
  } catch (error) {
    throw error;
  }
}
