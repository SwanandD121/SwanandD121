const apiUrl = "https://opbento.edgexhq.tech/api/bento?n=Swanand&g=SwanandD121&x=&l=swananddeshpande121&i=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F117746995%3Fv%3D4&p=https%3A%2F%2Fsdporfolio-next.vercel.app%2F&z=87689";
interface BentoResponse {
  url: string;
}

const fetchBentoUrl = async (apiUrl: string): Promise<string> => {
  try {
    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data: BentoResponse = (await response.json()) as BentoResponse;
    return data.url;
  } catch (error) {
    console.error("Error fetching Bento URL:", error);
    throw error;
  }
};

// @ts-ignore
fetchBentoUrl(apiUrl);
