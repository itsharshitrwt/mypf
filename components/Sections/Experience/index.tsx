import { memo } from 'react'
import { Heading, Text, Stack, Link } from '@chakra-ui/react'

const DetailSection = () => (
  <Stack
    width={{ base: '99%', lg: '60%', xl: '75%' }}
    height="100%"
    spacing={{ base: 6, xl: 8 }}
  >
    <Heading
      size="2xl"
      style={{
        fontVariantCaps: 'small-caps',
      }}
    >
      Places <span style={{color: '#FD4B6D'}}>i've worked.</span>
    </Heading>
    <Text variant="description">
    Over the past few years, I have been focused on developing my skills and expanding my knowledge in my field. While I have not yet had the opportunity to work with any companies, I am actively seeking freelance opportunities where I can apply my expertise and contribute to exciting projects. I am eager to embrace new challenges and collaborate with others as I continue to grow professionally{' '}
      <Link href="https://www.linkedin.com/in/harshit-rawat-0a6944274/" target="_blank" rel="noreferrer" style={{color: '#FD4B6D'}}>
        Hire me!
      </Link>
      .
    </Text>

    
  </Stack>
)

export default memo(DetailSection)
