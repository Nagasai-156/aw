/**
 * Features and capabilities of ArthaChain
 */

export interface Feature {
    id: string;
    title: string;
    description: string;
    icon: string;
    gradient: string;
}

export const coreFeatures: Feature[] = [
    {
        id: 'scalability',
        title: 'Infinite Scalability',
        description: 'Process millions of transactions per second with our innovative sharding architecture and parallel processing capabilities.',
        icon: 'zap',
        gradient: 'from-cyan-500 to-blue-500',
    },
    {
        id: 'security',
        title: 'Military-Grade Security',
        description: 'Advanced cryptographic protocols and multi-layer security ensure your assets and data remain protected at all times.',
        icon: 'shield',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        id: 'decentralization',
        title: 'True Decentralization',
        description: 'Powered by a global network of validators ensuring no single point of failure and complete trustlessness.',
        icon: 'network',
        gradient: 'from-emerald-500 to-teal-500',
    },
    {
        id: 'interoperability',
        title: 'Cross-Chain Bridge',
        description: 'Seamlessly connect with other blockchain networks through our advanced interoperability protocols.',
        icon: 'link',
        gradient: 'from-amber-500 to-orange-500',
    },
    {
        id: 'evm',
        title: 'EVM Compatible',
        description: 'Deploy your existing Ethereum smart contracts without modification and leverage familiar development tools.',
        icon: 'code',
        gradient: 'from-blue-500 to-indigo-500',
    },
    {
        id: 'low-fees',
        title: 'Ultra-Low Fees',
        description: 'Transaction costs reduced by 99% compared to traditional Layer 1 networks, making blockchain accessible to everyone.',
        icon: 'dollar-sign',
        gradient: 'from-green-500 to-emerald-500',
    },
];

export const technicalFeatures = [
    {
        category: 'Consensus',
        items: [
            'Proof of Stake (PoS)',
            'Byzantine Fault Tolerance',
            'Fast Finality (<3s)',
            'Energy Efficient',
        ],
    },
    {
        category: 'Performance',
        items: [
            '100,000+ TPS',
            'Sub-second Block Time',
            'Parallel Execution',
            'Optimistic Rollups',
        ],
    },
    {
        category: 'Developer Tools',
        items: [
            'Solidity Support',
            'Web3 Compatible',
            'Rich SDK Library',
            'Comprehensive APIs',
        ],
    },
    {
        category: 'Network',
        items: [
            'Global Node Distribution',
            'IPFS Integration',
            'Light Client Support',
            'Mobile Optimization',
        ],
    },
];

export const stats = [
    {
        label: 'Transactions Per Second',
        value: '100K+',
        suffix: 'TPS',
    },
    {
        label: 'Block Finality',
        value: '<3',
        suffix: 'seconds',
    },
    {
        label: 'Active Validators',
        value: '10K+',
        suffix: 'nodes',
    },
    {
        label: 'Total Value Locked',
        value: '$1B+',
        suffix: 'TVL',
    },
];
