import Layout from "@/components/Layout";
import ExperienceHeader from "@/components/ExperienceHeader";
import {
  Box,
  Flex,
  Text,
  Heading,
  ListItem,
  UnorderedList,
  OrderedList,
  Link as ChakraLink,
} from "@chakra-ui/react";

import Head from "next/head";

const Experience = () => {
  return (
    <Layout>
      <Head>
        <title>Experience | Taiki Umetsu</title>
      </Head>

      <Heading as="h1">Experience</Heading>
      <Box mb="8">
        <ExperienceHeader
          title="Backend Developer"
          company="Wonderfy Inc."
          location="Tokyo, Japan, Remote"
          start_date="Aug 2020"
          end_date={null}
        />
        <UnorderedList textStyle="p">
          <ListItem>
            Develop an email sending system, automating communication with
            users.
          </ListItem>
          <ListItem>
            Develop an article posting and displaying function, attracting user
            interest, acquiring new customers.
          </ListItem>
          <ListItem>
            Develop batch processes, automate routine tasks and reducing manual
            workload.
          </ListItem>
          <ListItem>
            Develop admin pages, data validation and data portability across
            different server environments.
          </ListItem>
          <ListItem>
            Develop member page for displaying user-submitted data from Unity
            apps on a web platform, while understanding the table structure
            created by a colleague. Continuously update the page to accommodate
            new content generated every month. Modified to load data monthly via
            AJAX due to large volume of data spanning multiple years.
          </ListItem>
          <ListItem>
            Conduct SQL data analysis, providing valuable insights and informing
            data-driven decision making.
          </ListItem>
          <ListItem>
            Redesigned the service application flow and changed the timing of
            email authentication for user account creation to improve user
            experience.
          </ListItem>
          <ListItem>
            Integrated APIs such as SendGrid and the LINE messaging application,
            reducing manual workload and expanding communication channels and
            improve user engagement.
          </ListItem>
          <ListItem>
            Developed a feature to upload user’s data to external message
            sending services through SQL statements from the admin panel.
            Implemented automatic data deletion after a certain time to comply
            with upload volume limits. Also, added a feature to daily monitor
            the number of uploads and send alerts to Slack as needed.
          </ListItem>
          <ListItem>
            Built a form-building application similar to Google Forms, provide a
            flexible and customizable solution for data collection and temporary
            application form.
          </ListItem>
          <ListItem>
            Built an AWS Lambda to develop APIs for web frontends.
          </ListItem>
          <ListItem>
            Developed APIs for Unity apps to retrieve various data such as the
            current month contents, text, images, progress status and game
            structure configuration and to save play history data for analysis.
          </ListItem>
          <ListItem>
            Collaborate with other developers through code reviews.
          </ListItem>
        </UnorderedList>
      </Box>

      <Box mb="8">
        <ExperienceHeader
          title="Career Break"
          company="self-study"
          location="Kanagawa, Japan"
          start_date="Feb 2020"
          end_date="Aug 2020"
        />
        <Text textStyle="p">
          Studied independently and developed a web application using Ruby on
          Rails/ RSpec / JavaScript (jQuery, Vue.js) / MySQL / Docker / CircleCI
          / AWS (ECS, ECR, EC2, ALB, RDS, S3, CloutFront, Route53). The web
          application generates a realistic 3D avatar from a facial image, which
          can be shared with a message. The comments posted on the avatar are
          also displayed in 3D space.
        </Text>
        <Text textStyle="p">
          The avatar is generated using a face texture mapping, which is
          replaced by an uploaded image. To create a realistic avatar, the
          model's eye and nose coordinates are aligned with those of the
          uploaded image, using vectors and matrices to perform coordinate
          calculations. The following is the 3D avatar generation process I have
          made:
        </Text>
        <OrderedList textStyle="p">
          <ListItem>Image upload</ListItem>
          <ListItem>
            Face detection, eye and nose coordinates, and face angle detection
            using an external service (Amazon Rekognition)
          </ListItem>
          <ListItem>
            Check the yaw angle of the face to ensure that only front-facing
            images pass
          </ListItem>
          <ListItem>
            Calculate the scaling rate of the image so that the distance between
            both eyes matches the model
          </ListItem>
          <ListItem>
            Calculate the image rotation angle to make the face horizontal based
            on the coordinates of both eyes
          </ListItem>
          <ListItem>
            Calculate the image displacement amount so that the nose coordinate
            matches the model
          </ListItem>
          <ListItem>
            Trim the image based on the above calculation results
          </ListItem>
          <ListItem>
            Integrate the image into a prepared 3D asset and save it to AWS S3
          </ListItem>
          <ListItem>Display the 3D avatar (.gltf) using Aframe</ListItem>
        </OrderedList>

        <ChakraLink
          href="https://github.com/taiki-umetsu/portfolio-app"
          isExternal
        >
          GitHub taiki-umetsu/portfolio-app
        </ChakraLink>
      </Box>

      <Box mb="8">
        <ExperienceHeader
          title="Mechanical Engineer"
          company="ULVAC, Inc."
          location="Kanagawa, Japan"
          start_date="Apr 2018"
          end_date="Feb 2020"
        />
        <UnorderedList textStyle="p">
          <ListItem>
            Developed the vacuum heat treatment furnace, the melting furnace.
          </ListItem>
        </UnorderedList>
      </Box>

      <Box mb="8">
        <ExperienceHeader
          title="Career Break"
          company="Go abroad"
          location="Sydney and around Asia"
          start_date="Jun 2016"
          end_date="Nov 2017"
        />
        <UnorderedList textStyle="p">
          <ListItem>
            First time living in an English-speaking environment.
          </ListItem>
          <ListItem>
            In Cebu, Philippines, stayed for 2 months, practicing English
            conversation at a language school.
          </ListItem>
          <ListItem>
            In Sydney, Australia, stayed for a year, worked as a hand towel
            delivery driver and baked cakes in a factory.
          </ListItem>
          <ListItem>
            Following my time in Australia, backpacked around Asia for three
            months, visiting various countries such as Indonesia, Singapore,
            Malaysia, Thailand, Cambodia, Vietnam, Laos, Myanmar, Nepal, India,
            United Arab Emirates and Taiwan. In Nepal, I was able to reach
            Everest Base Camp, which stands at an elevation of 5,364m.
          </ListItem>
        </UnorderedList>
      </Box>

      <Box mb="8">
        <Box mb="2">
          <Heading as="h2" size="md">
            Education
          </Heading>
          <Flex justifyContent="space-between">
            <Text fontStyle="italic" textStyle="p">
              Yamagata University (Yamagata, Japan)
            </Text>
            <Text fontStyle="italic" textStyle="p">
              Apr 2011 - Mar 2015
            </Text>
          </Flex>
          <Text fontStyle="italic" textStyle="p">
            Bachelor of Engineering - Mechanical Engineering
          </Text>
        </Box>
        <UnorderedList textStyle="p">
          <ListItem>
            Developed a thermal bending test apparatus at a plastic deformation
            laboratory for metallic materials.
          </ListItem>
          <ListItem>
            Designed and manufactured the device using 3D CAD, CNC milling, and
            turning, and evaluated it using a universal testing machine.
          </ListItem>
          <ListItem>
            Learned Fortran, tensor calculus, and implementation of FEM to
            deepen my understanding of plastic deformation simulation.
          </ListItem>
          <ListItem>
            Honored to receive the award for the best student in the engineering
            department and a monetary prize upon graduation.
          </ListItem>
        </UnorderedList>
      </Box>
    </Layout>
  );
};

export default Experience;
