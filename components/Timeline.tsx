import { GetStaticProps } from "next";
import { Experience, getLinkedinExperience } from "@/lib/linkedin";

interface Props {
  experiences: Experience[];
}

const Timeline: React.FC<Props> = ({ experiences }) => {
  return (
    <div>
      <h1>My LinkedIn Experience</h1>
      <ul>
        {experiences.map((experience) => (
          <li key={experience.id}>
            <h2>{experience.title}</h2>
            <h3>{experience.company}</h3>
            <p>
              {experience.startDate.month}/{experience.startDate.year} -{" "}
              {experience.endDate.month}/{experience.endDate.year}
            </p>
            <p>{experience.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export const getStaticProps: GetStaticProps<{
  experiences: Experience[];
}> = async () => {
  const experiences = await getLinkedinExperience();

  return {
    props: {
      experiences,
    },
  };
};

export default Timeline;
