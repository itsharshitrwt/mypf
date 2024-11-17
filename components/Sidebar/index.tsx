// import {
//   Stack,
//   Heading,
//   Text,
//   Button,
//   useColorMode,
//   Container,
//   Link,
//   Box,
//   Flex,
//   Icon,
//   useBreakpointValue,
// } from '@chakra-ui/react'
// import { motion } from 'framer-motion'
// import styles from './styles.module.css'
// import {
//   fadeInUp,
//   letterSpace,
//   simpleOpacity,
//   stagger,
//   scaleUp,
// } from 'config/animations'
// import { SocialMedias } from 'config/sidebar'
// const Sidebar = () => {
//   const { colorMode } = useColorMode()
//   const display = useBreakpointValue({ base: 'none', lg: 'block' })
//   const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
//   const MotionHeading = motion(Heading)
//   const MotionText = motion(Text)
//   const MotionStack = motion(Stack)
//   const MotionButton = motion(Button)
//   const MotionBox = motion(Box)

//   return (
//     <MotionBox
//       initial="initial"
//       animate="animate"
//       position={{ xl: 'fixed' }}
//       maxWidth={{ xl: '34%' }}
//       top={{ lg: 0 }}
//     >
//       <motion.div
//         id="sidebarCircle"
//         className={`${styles.sidebar} ${
//           colorMode === 'light' ? styles.dark : ''
//         }`}
//         variants={scaleUp}
//         style={{ display: display }}
//         animate={colorMode === 'dark' ? 'animate' : 'lightMode'}
//       ></motion.div>
//       <Container
//         padding={0}
//         margin={0}
//         height={{ xl: '100vh' }}
//         display={{ xl: 'flex' }}
//         alignItems={{ xl: 'center' }}
//       >
//         <MotionStack variants={stagger} spacing={6} w="100">
//           <MotionText
//             as = "h3"
//             variants={fadeInUp}
//             delay={1}
//             variant="accent"
//             fontWeight="light"
//             style={{ color: '#FD4B6D' }} 
//           >
//             Howdy! I am
//           </MotionText>
//           <MotionHeading
//             as="h1"
//             size="2xl"
//             paddingRight={{ lg: '20' }}
//             textTransform="uppercase"
//             variants={fadeInUp}
//           >
//             Harshit 
//           </MotionHeading>
//           <MotionHeading
//             as="h2"
//             size={surNameSize}
//             variant="emphasis"
//             className={styles.marginTopForce}
//             textTransform="uppercase"
//             variants={letterSpace}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.9 }}
//             style={{ color: '#FD4B6D' }} 
//           >
//             Rawat
//           </MotionHeading>


//           <MotionHeading
//             as="h3"
//             size="md"
//             variant="emphasis"
//             className={styles.marginTopSmall}
//             variants={fadeInUp}
//             style={{ color: '#FD4B6D' }} 
//           >
//             FullStack Web Developer
//           </MotionHeading>

//           <MotionText
//             variant="description"
//             fontSize="small"
//             paddingRight={{ lg: '12' }}
//             variants={fadeInUp}
//             maxWidth={{ base: '100%', lg: '80%' }}
//           >
//             How nice of you to look at my personal site,
//             <Text variant="emphasis" as="span" style={{ color: '#FD4B6D' }} >
//               {' '}
//               Thank you!
//             </Text>
//             <br />I am FullStack Web Developer that specializes at backend apis, front
//             end integration, recently found myself studying UX too.
//           </MotionText>
//           <Flex justify="space" align="center" >
//             <MotionButton
//               size="lg"
//               variant="outline"
//               border="1px solid #FD4B6D"
//               borderRadius="100"
//               fontWeight="normal"
//               fontSize="sm"
//               width="120px"
//               marginRight = "10px"
//               variants={simpleOpacity}
//               as={'a'}
//               href="mailto:marcjhon18@gmail.com"
//               target="_blank"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               My CV
//             </MotionButton>
            
//             <MotionButton
//               size="lg"
//               variant="outline"
//               border="1px solid #FD4B6D"
//               borderRadius="100"
//               fontWeight="normal"
//               fontSize="sm"
//               width="120px"
//               variants={simpleOpacity}
//               as={'a'}
//               href="mailto:marcjhon18@gmail.com"
//               target="_blank"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.9 }}
//             >
//               Get in touch!
//             </MotionButton>
//           </Flex>

//           <MotionBox d="flex" variants={simpleOpacity}>
//             {SocialMedias.map((socMedia) => (
//               <Link
//                 variant="description"
//                 key={socMedia.label}
//                 aria-label={socMedia.label}
//                 rel="noreferrer"
//                 width={8}
//                 href={socMedia.href}
//                 target="_blank"
//                 _focus={{ boxShadow: 'none' }}
//               >
//                 <Icon w={6} h={6} as={socMedia.icon} color="currentColor" />
//               </Link>
//             ))}
//           </MotionBox>
//         </MotionStack>
//       </Container>
//     </MotionBox>
//   )
// }

// export default Sidebar
import {
  Stack,
  Heading,
  Text,
  Button,
  useColorMode,
  useColorModeValue,
  Container,
  Link,
  Box,
  Flex,
  Icon,
  useBreakpointValue,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import styles from './styles.module.css'
import {
  fadeInUp,
  letterSpace,
  simpleOpacity,
  stagger,
} from 'config/animations'
import { SocialMedias } from 'config/sidebar'

const Sidebar = () => {
  const { colorMode } = useColorMode()
  const display = useBreakpointValue({ base: 'none', lg: 'block' })
  const surNameSize = useBreakpointValue({ base: '3xl', md: '4xl' })
  
  // Define border color based on color mode
  const borderColor = useColorModeValue('green', 'yellow'); // Red for both modes

  const MotionHeading = motion(Heading)
  const MotionText = motion(Text)
  const MotionStack = motion(Stack)
  const MotionButton = motion(Button)
  const MotionBox = motion(Box)

  return (
    <MotionBox
      initial="initial"
      animate="animate"
      position={{ xl: 'fixed' }}
      maxWidth={{ xl: '34%' }}
      top={{ lg: 0 }}
    >
      <Container
        padding={0}
        margin={0}
        height={{ xl: '100vh' }}
        display={{ xl: 'flex' }}
        alignItems={{ xl: 'center' }}
      >
        <MotionStack variants={stagger} spacing={6} w="100">
          <MotionText
            as="h3"
            variants={fadeInUp}
            delay={1}
            variant="accent"
            fontWeight="light"
            style={{ color: '#FD4B6D' }} 
          >
            Howdy! I am
          </MotionText>
          <MotionHeading
            as="h1"
            size="2xl"
            paddingRight={{ lg: '20' }}
            textTransform="uppercase"
            variants={fadeInUp}
          >
            Harshit 
          </MotionHeading>
          <MotionHeading
            as="h2"
            size={surNameSize}
            variant="emphasis"
            className={styles.marginTopForce}
            textTransform="uppercase"
            variants={letterSpace}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: '#FD4B6D' }} 
          >
            Rawat
          </MotionHeading>

          <MotionHeading
            as="h3"
            size="md"
            variant="emphasis"
            className={styles.marginTopSmall}
            variants={fadeInUp}
            style={{ color: '#FD4B6D' }} 
          >
            FullStack Web Developer
          </MotionHeading>

          <MotionText
            variant="description"
            fontSize="small"
            paddingRight={{ lg: '12' }}
            variants={fadeInUp}
            maxWidth={{ base: '100%', lg: '80%' }}
          >
            How nice of you to look at my personal site,
            <Text variant="emphasis" as="span" style={{ color: '#FD4B6D' }} >
              {' '}
              Thank you!
            </Text>
            <br />I am FullStack Web Developer that specializes at backend apis, front
            end integration, recently found myself studying UX too.
          </MotionText>
          
          <Flex justify="space" align="center">
            <MotionButton
              size="lg"
              variant="outline"
              border={`1px solid ${borderColor}`} 
              borderRadius="100"
              fontWeight="normal"
              fontSize="sm"
              width="120px"
              marginRight="10px"
              variants={simpleOpacity}
              as={'a'}
              href="https://drive.google.com/file/d/1MtDIBkhgE7BD1Tfa822C3TH_9jHLLlOi/view?usp=drive_link"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              My CV
            </MotionButton>
            
            <MotionButton
              size="lg"
              variant="outline"
              border={`1px solid ${borderColor}`} // Apply dynamic border color
              borderRadius="100"
              fontWeight="normal"
              fontSize="sm"
              width="120px"
              variants={simpleOpacity}
              as={'a'}
              href="mailto:harshit77dev@gmail.com"
              target="_blank"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get in touch!
            </MotionButton>
          </Flex>

          <MotionBox d="flex" variants={simpleOpacity}>
            {SocialMedias.map((socMedia) => (
              <Link
                variant="description"
                key={socMedia.label}
                aria-label={socMedia.label}
                rel="noreferrer"
                width={8}
                href={socMedia.href}
                target="_blank"
                _focus={{ boxShadow: 'none' }}
              >
                <Icon w={6} h={6} as={socMedia.icon} color="currentColor"  _hover={{ color: '#FD4B6D' }}/>
              </Link>
            ))}
          </MotionBox>
        </MotionStack>
      </Container>
    </MotionBox>
  )
}

export default Sidebar;