import AlbumLinks from './(albums)/AlbumLinks';
import CategoryWrapper from '@/components/category-wrapper';

const CATEGORIES = [
  {
    id: '1msOr0Sj2oFSfWacm-ldpvKEdi8o3Spfg',
    title: 'Wedding Photos',
    page: 'weddings',
  },
  {
    id: '1TQKUJTOZb_nGzDzwNppoTSN71xR8uFDw',
    title: 'Concerts and Events',
    page: 'concerts-and-events',
  },
  {
    id: '1dHrNLrn-CNpBPVfkCYXGcSDiaBAL-6ti',
    title: 'Corporate Events and Brand Activation',
    page: 'corporate-events-and-brand-activations',
  },
  {
    id: '1nK1x4UajNHBnYIm8UGCwAU3my4AlzqbJ',
    title: 'Pre-wedding and Proposals',
    page: 'pre-wedding-and-proposals',
  },
  {
    id: '1fWX1XSw8hBFw3YOVPeYfmn8P82yU4qzz',
    title: 'Portraits',
    page: 'portraits',
  },
  {
    id: '1fbV0vSNR2RUiDKqNJBzfftwYsUkbYtlt',
    title: 'Behind the Scenes',
    page: 'behind-the-scenes',
  },
];

const FrozenMoments = () => {
  return (
    <CategoryWrapper title="Photo Gallery" id="pictures">
      {CATEGORIES.map(category => (
        <AlbumLinks
          key={category.id}
          link={`pictures/${category.page}`}
          src={`https://drive.google.com/uc?export=view&id=${category.id}`}
          title={category.title}
          gallery={'photos'}
        />
      ))}
    </CategoryWrapper>
  );
};

export default FrozenMoments;
