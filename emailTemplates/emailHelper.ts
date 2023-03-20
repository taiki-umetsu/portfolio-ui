import fs from "fs";
import path from "path";

export const readEmailTemplate = (
  folder: string,
  fileName: string,
  replacements: { [key: string]: string }
): string => {
  const filePath = path.join(process.cwd(), "emailTemplates", folder, fileName);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  let replacedContent = fileContent;
  for (const [key, value] of Object.entries(replacements)) {
    replacedContent = replacedContent.replace(
      new RegExp(`{${key}}`, "g"),
      value
    );
  }

  return replacedContent;
};
