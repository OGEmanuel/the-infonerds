import AlbumLinks from './(albums)/AlbumLinks';
import CategoryWrapper from '@/components/category-wrapper';

const CATEGORIES = [
  {
    id: 'v1742161727/Wedding_Photos_je7iia.jpg',
    title: 'Wedding Photos',
    page: 'weddings',
  },
  {
    id: 'v1742161723/Concerts_Events_u9u8pv.jpg',
    title: 'Concerts and Events',
    page: 'concerts-and-events',
  },
  {
    id: 'v1742161723/Corperate_Events_and_Brand_Activations_photo_cover_pz8a0s.jpg',
    title: 'Corporate Events and Brand Activation',
    page: 'corporate-events-and-brand-activations',
  },
  {
    id: 'v1744411353/Prewedding_and_Proposal_Category_Cover_tapbl8.jpg',
    title: 'Pre-wedding and Proposals',
    page: 'pre-wedding-and-proposals',
  },
  {
    id: 'v1744411355/Portrait_Category_Cover_cn8bml.jpg',
    title: 'Portraits',
    page: 'portraits',
  },
  {
    id: 'v1742161725/BTS_Photos_fkl20t.jpg',
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
          src={`https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/${category.id}`}
          title={category.title}
          gallery={'photos'}
        />
      ))}
    </CategoryWrapper>
  );
};

export default FrozenMoments;
