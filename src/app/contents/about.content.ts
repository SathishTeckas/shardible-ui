import {
  faArrowRightArrowLeft,
  faCloudBolt,
  faStore,
} from '@fortawesome/free-solid-svg-icons';
import { iAbout } from '../interface/about.interface';

export const abouts: iAbout[] = [
  {
    icon: faArrowRightArrowLeft,
    name: 'P2P Marketplace',
    description:
      'Shardible is a low-code NFT marketplace that lets people trade digital assets, bid or even list them hassle-free. a seamless experience built exclusively for the Shardeum blockchain.',
  },
  {
    icon: faCloudBolt,
    name: 'NaaS',
    description:
      'NFTs-as-a-Service - Our platform offers comprehensive functionality and tools to help creators, artists, and developers build their NFT projects as they wish. The SDK/API integration, NFT smart contract factory, minting, & token gating are some of the few features available inside NaaS.',
  },
  {
    icon: faStore,
    name: 'NFT Launchpad',
    description:
      'Launch and create your own NFT market with Shardible. With this feature, you can promote the NFT collection to your audience by using a few in-built options like the store landing page, event calendar, pre-sales, highlighted projects, statistics, and analytics.',
  },
];
