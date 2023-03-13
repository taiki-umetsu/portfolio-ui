import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export interface Experience {
  id: string;
  title: string;
  company: string;
  startDate: { year: number; month: number };
  endDate: { year: number; month: number };
  description: string;
}

interface AccessTokenResponse {
  access_token: string;
}

interface ProfileResponse {
  firstName: {
    localized: {
      en_US: string;
    };
    preferredLocale: {
      country: string;
      language: string;
    };
  };
  lastName: {
    localized: {
      en_US: string;
    };
    preferredLocale: {
      country: string;
      language: string;
    };
  };
  profilePicture: {
    displayImage: string;
    "displayImage~": {
      elements: {
        identifiers: [
          {
            identifier: string;
            index: number;
            mediaType: string;
          }
        ];
        mediaType: string;
      }[];
    };
  };
  id: string;
}

interface PositionResponse {
  elements: {
    id: string;
    title: string;
    companyName: string;
    startDate: {
      year: number;
      month: number;
    };
    endDate: {
      year: number;
      month: number;
    };
    description: string;
  }[];
}

export async function getLinkedinExperience(): Promise<Experience[]> {
  const clientId = process.env.LINKEDIN_CLIENT_ID;
  const clientSecret = process.env.LINKEDIN_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    throw new Error("LinkedIn client ID or client secret is not set");
  }
  /*

  // ブラウザに直接urlを貼り付けてAllowする
  // ?code=の部分ををenv.AUTHORIZATION_CODEに貼り付ける

  const uuid = uuidv4();
  const authResponse = await axios.get<string>(
    "https://www.linkedin.com/oauth/v2/authorization",
    {
      params: {
        response_type: "code",
        client_id: clientId,
        redirect_uri: "http://localhost:3000/about",
        state: uuid,
        scope: "r_liteprofile",
      },
    }
  );

  console.log(authResponse);

  const authorizationCode = new URL(
    authResponse.request.res.responseUrl
  ).searchParams.get("code");

  console.log(authorizationCode);




  // ACCESS_TOKENを取得して、envに貼り付ける
  const authorizationCode = process.env.AUTHORIZATION_CODE;
  const tokenResponse = await axios.post<AccessTokenResponse>(
    "https://www.linkedin.com/oauth/v2/accessToken",
    null,
    {
      params: {
        grant_type: "authorization_code",
        code: authorizationCode,
        redirect_uri: "http://localhost:3000/about",
        client_id: clientId,
        client_secret: clientSecret,
      },
    }
  );

  console.log(tokenResponse);

  const token = tokenResponse.data.access_token;
  */
  const token = process.env.ACCESS_TOKEN;
  const profileResponse = await axios.get<ProfileResponse>(
    `https://api.linkedin.com/v2/me?projection=(id,firstName,lastName,profilePicture(displayImage~:playableStreams))&oauth2_access_token=${token}`
  );

  const profileId = profileResponse.data.id;
  const positionsResponse = await axios.get<PositionResponse>(
    `https://api.linkedin.com/v2/people/${profileId}/positions?oauth2_access_token=${token}`
  );

  const experiences: Experience[] = positionsResponse.data.elements.map(
    (element) => ({
      id: element.id,
      title: element.title,
      company: element.companyName,
      startDate: {
        year: element.startDate.year,
        month: element.startDate.month,
      },
      endDate: {
        year: element.endDate.year,
        month: element.endDate.month,
      },
      description: element.description,
    })
  );

  return experiences;
}
