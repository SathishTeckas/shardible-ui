import {
  faDiscord,
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { iSocialIcons } from '../interface/social-icons.interface';

export const socialLinks: iSocialIcons[] = [
  {
    icon: faTwitter,
    link: 'https://twitter.com/shardible',
  },
  {
    icon: faDiscord,
    link: 'https://discord.com/invite/shardible',
  },
  {
    icon: faLinkedinIn,
    link: '#',
  },
  //   {
  //     icon: faFacebook,
  //     link: '',
  //   },
  {
    icon: faTelegram,
    link: 'https://t.me/Shardible',
  },
  {
    icon: faInstagram,
    link: '#',
  },
];
