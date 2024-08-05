export let error = null;
export default async function fetcher(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  } catch (err) {
    error = err.message;
  }
}
