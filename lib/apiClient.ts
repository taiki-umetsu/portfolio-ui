export const signIn = async (): Promise<string | null> => {
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
    console.error("Sign in failure");
    return null;
  }

  const authHeaderValue = signInResponse.headers.get("authorization");
  if (!authHeaderValue) {
    console.error("Not authorized");
    return null;
  }

  return authHeaderValue;
};
