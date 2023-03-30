import { GetStaticProps } from "next";

export const getStaticAboutProps: GetStaticProps = async () => {
  const signInResponse = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/sign_in`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          email: process.env.API_READ_ONLY_USER_EMAIL,
          password: process.env.API_READ_ONLY_USER_PASSWORD,
        },
      }),
    }
  );

  if (!signInResponse.ok) {
    return {
      props: {
        description: "Soryy...fetch data failure. (Sign in failure)",
      },
    };
  }

  const authHeaderValue = signInResponse.headers.get("authorization");
  if (!authHeaderValue) {
    return {
      props: {
        description: "Soryy...fetch data failure. (Not authorized)",
      },
    };
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
  return {
    props: {
      description,
    },
    revalidate: 60 * 60, // Re-generate the page every 1 hour
  };
};
