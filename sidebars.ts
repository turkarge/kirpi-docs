import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',

    {
      type: 'category',
      label: 'Uygulamalar',
      items: [
        'applications/kirpi-panel',
        'applications/kirpi-auth',
        'applications/kirpi-crm',
      ],
    },

    {
      type: 'category',
      label: 'Kurulum',
      items: [
        'setup/system-requirements',
        'setup/installation',
      ],
    },

    {
      type: 'category',
      label: 'Video Eğitimler',
      items: [
        'videos/getting-started',
      ],
    },

    {
      type: 'category',
      label: 'Sık Sorulan Sorular',
      items: [
        'faq/general',
      ],
    },
  ],
};

export default sidebars;