// import { memo } from 'react'
// import {
//   Heading,
//   Text,
//   List,
//   ListItem,
//   ListIcon,
//   Icon,
//   SimpleGrid,
//   Box,
//   Tooltip,
//   Stack,
//   useColorModeValue,
// } from '@chakra-ui/react'
// import {
//   SiDotNet,
//   SiJavascript,
//   SiTypescript,
//   SiGraphql,
//   SiReact,
//   SiNextDotJs,
//   SiNodeDotJs,
//   SiDocker,
//   SiKubernetes,
//   SiFigma,
//   SiTailwindcss,
//   SiPostgresql,
// } from 'react-icons/si'
// import { GiCoffeePot } from 'react-icons/gi'
// import { IoMdOpen } from 'react-icons/io'

// type ISkillSetModal = {
//   onOpen(): void
// }

// const Detail = ({ onOpen }: ISkillSetModal) => {
//   const emphasis = "#FD4B6D"
//   const currentYear = new Date().getFullYear()
//   const professionalYears = currentYear - 2022

//   return (
//     <Stack
//       width={{ base: '100%', lg: '70%' }}
//       spacing={{ base: 6, xl: 8 }}
//       as="section"
//     >
//       <Heading
//         as="h4"
//         size="2xl"
//         letterSpacing={1.8}
//         style={{
//           fontVariantCaps: 'small-caps',
//         }}
//       >
//         What <span style={{ color: '#FD4B6D' }}>i do.</span>
//       </Heading>
//       <Text variant="description">
//   With {professionalYears} + years of professional coding experience, I specialize in delivering robust Applications to my clinets. My expertise spans <b style={{color: '#FD4B6D'}}>designing</b>, <b style={{color: '#FD4B6D'}}>APIs</b>, and intricate <Tooltip label="Ha!. Or more accurately TECH DEBT" aria-label="Tech Debt?" hasArrow>
//     <Text as="span" variant="emphasis" style={{color: '#FD4B6D'}}>
//       <b>business logic</b>
//     </Text>
//   </Tooltip>, along with seamless <b style={{color: '#FD4B6D'}}>front-end integration</b>. 

//   If you're looking for a dedicated professional to elevate your project, I would love to connect and discuss how I can help bring <span style={{color: '#FD4B6D'}}>your vision</span> to life!

//   <br /> <br />
//   Here are some of the technologies I work with:
// </Text>
//       <SimpleGrid columns={2} spacing={4}>
//         <List spacing={3}>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
//             Javascript (ES6+)
//           </ListItem>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
//             Typescript
//           </ListItem>

//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
//             Node
//           </ListItem>
//         </List>
//         <List spacing={3}>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
//             React
//           </ListItem>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
//             NextJS
//           </ListItem>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
//             Docker
//           </ListItem>
//         </List>
//         <List spacing={3}>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiPostgresql} color={emphasis} fontSize="2em" />
//             Postgresql
//           </ListItem>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiTailwindcss} color={emphasis} fontSize="2em" />
//             TailwindCSS
//           </ListItem>
//           <ListItem fontSize="small" display="flex" alignItems="center">
//             <ListIcon as={SiKubernetes} color={emphasis} fontSize="2em" />
//             kubernetes
//           </ListItem>
//         </List>
        
        
//       </SimpleGrid>
//     </Stack>
//   )
// }

// export default memo(Detail)

import { memo } from 'react'
import {
  Heading,
  Text,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Stack,
  Box,
  Tooltip,
} from '@chakra-ui/react'
import {
  SiJavascript,
  SiTypescript,
  SiNodeDotJs,
  SiReact,
  SiNextDotJs,
  SiDocker,
  SiPostgresql,
  SiTailwindcss,
  SiKubernetes,
} from 'react-icons/si'

type ISkillSetModal = {
  onOpen(): void
}

const Detail = ({ onOpen }: ISkillSetModal) => {
  const emphasis = "#FD4B6D"
  const currentYear = new Date().getFullYear()
  const professionalYears = currentYear - 2022

  return (
    <Stack
      width={{ base: '100%', lg: '70%' }}
      spacing={{ base: 6, xl: 8 }}
      as="section"
    >
      <Heading
        as="h4"
        size="2xl"
        letterSpacing={1.8}
        style={{
          fontVariantCaps: 'small-caps',
        }}
      >
        What <span style={{ color: '#FD4B6D' }}>I do.</span>
      </Heading>
      <Text variant="description">
        With {professionalYears} + years of professional coding experience, I specialize in delivering robust applications to my clients. My expertise spans <b style={{ color: '#FD4B6D' }}>designing</b>, <b style={{ color: '#FD4B6D' }}>APIs</b>, and intricate <Tooltip label="Ha!. Or more accurately TECH DEBT" aria-label="Tech Debt?" hasArrow>
          <Text as="span" variant="emphasis" style={{ color: '#FD4B6D' }}>
            <b>business logic</b>
          </Text>
        </Tooltip>, along with seamless <b style={{ color: '#FD4B6D' }}>front-end integration</b>. 

        If you're looking for a dedicated professional to elevate your project, I would love to connect and discuss how I can help bring <span style={{ color: '#FD4B6D' }}>your vision</span> to life!
        
        <br /> <br />
        Here are some of the technologies I work with:
      </Text>

      <SimpleGrid columns={2} spacing={4}>
        {/* Technology List */}
        <List spacing={3}>
          {/* Add your ListItems here */}
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiJavascript} color={emphasis} fontSize="2em" />
            JavaScript (ES6+)
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTypescript} color={emphasis} fontSize="2em" />
            TypeScript
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNodeDotJs} color={emphasis} fontSize="2em" />
            Node.js
          </ListItem>
        </List>
        {/* More List Items */}
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiReact} color={emphasis} fontSize="2em" />
            React
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiNextDotJs} color={emphasis} fontSize="2em" />
            Next.js
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiDocker} color={emphasis} fontSize="2em" />
            Docker
          </ListItem>
        </List>
        {/* More List Items */}
        <List spacing={3}>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiPostgresql} color={emphasis} fontSize="2em" />
            PostgreSQL
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiTailwindcss} color={emphasis} fontSize="2em" />
            Tailwind CSS
          </ListItem>
          <ListItem fontSize="small" display="flex" alignItems="center">
            <ListIcon as={SiKubernetes} color={emphasis} fontSize="2em" />
            Kubernetes
          </ListItem>
        </List>
      </SimpleGrid>

      {/* Infinite Moving Cards Section */}
      

    </Stack>
  )
}

export default memo(Detail)