const filterSkillsByLevel = (skillsData: any[], level: number) => {
  return skillsData
    .sort((a: any, b: any) => a.order - b.order)
    .filter((skill: any) => skill.level === level)
    .map((skill: any) => skill.title);
};

export const getSkills = async (authHeaderValue: string | null) => {
  if (!authHeaderValue) {
    return { professionalSkills: [], learningSkills: [] };
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/v1/skills`,
    {
      headers: {
        Authorization: authHeaderValue,
      },
    }
  );
  const skillsData = await response.json();
  const beginner = 0;
  const professional = 10;
  const professionalSkills = filterSkillsByLevel(skillsData, professional);
  const learningSkills = filterSkillsByLevel(skillsData, beginner);

  return { professionalSkills, learningSkills };
};
