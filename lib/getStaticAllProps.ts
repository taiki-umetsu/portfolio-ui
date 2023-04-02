import { GetStaticProps } from "next";
import { getAbout } from "./getAbout";
import { getSkills } from "./getSkills";
import { signIn } from "./apiClient";

export const getStaticAllProps: GetStaticProps = async () => {
  const authHeaderValue = await signIn();
  const description = await getAbout(authHeaderValue);
  const { professionalSkills, learningSkills } = await getSkills(
    authHeaderValue
  );

  return {
    props: {
      description,
      professionalSkills,
      learningSkills,
    },
    revalidate: 60 * 60, // Re-generate the page every 1 hour
  };
};
