import { IconType } from 'react-icons'
import {
  FaInstagram,
  FaLinkedin,
  FaStackOverflow,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaDev,
} from 'react-icons/fa'

type SocialMedia = {
  label: string
  href: string
  icon: IconType
}

export const SocialMedias: SocialMedia[] = [
  {
    label: 'X',
    href: 'https://x.com/harshit_rwt',
    icon: FaTwitter,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/harshit-rawat-0a6944274/',
    icon: FaLinkedin,
  },
  {
    label: 'Youtube',
    href: 'https://www.youtube.com/@harshitrawat180',
    icon: FaYoutube,
  },
  {
    label: 'Github',
    href: 'https://github.com/itsharshitrwt',
    icon: FaGithub,
  },
  
]
