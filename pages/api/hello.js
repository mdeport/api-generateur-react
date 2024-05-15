// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function citation(request, response) {
  const url = "https://kaamelott.chaudie.re/api/random";
  try {
    const apiReponse = await fetch(url);
    const data = await apiReponse.json();
    response.status(200).json(data);
  } catch (error) {
    console.error("Erreur de fetch", error);
  }
}
