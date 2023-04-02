export const getAbout = async (authHeaderValue: string | null) => {
  if (!authHeaderValue) {
    return "Sorry...fetch data failure.";
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/abouts`,
    {
      headers: {
        Authorization: authHeaderValue,
      },
    }
  );
  const abouts = await response.json();
  const description = abouts[0].description;
  return description;
};
