import AlbumLinks from './(albums)/AlbumLinks';
import CategoryWrapper from '@/components/category-wrapper';

const CATEGORIES = [
  {
    id: '1n2S-nXlExPaYIeP3KM425s6xSFpzymvP',
    title: 'Wedding Videos',
    page: 'weddings',
  },
  {
    id: '18JYjH9ZG4RJ9T0snKWNwYirb6Ei_PrAV',
    title: 'Concerts and Events',
    page: 'concerts-and-events',
  },
  {
    id: '1Z2padRmzgfnh_H7J75qPoQqC5YS8KGGa',
    title: 'TV Commercials and Brand Ads',
    page: 'tv-commercials-and-brand-ads',
  },
  {
    id: '1XoEjxWSckwqeaPNzhrbMhCHERm_mXeIA',
    title: 'Proposals and Pre-weddings',
    page: 'proposals-and-pre-weddings',
  },
  {
    id: '12HDV_ScHoPFc7appxj8XWmtRh4k-k0To',
    title: 'Corporate Events and Brand Activations',
    page: 'corporate-events-and-brand-activations',
  },
  {
    id: '1F_B3Y5EOZfMEpc9MENXdGL5kXko1eTg6',
    title: 'Documentaries',
    page: 'documentaries',
  },
  {
    id: '1xSovhr3nKMa8i5GDnfsKlQR8SVsR-4Dw',
    title: 'Real Estate',
    page: 'real-estate',
  },
  {
    id: '1Ive89IJBqXcYMWzdQXpwBE8NuR73kwfu',
    title: 'Styles and Lifestyle',
    page: 'styles-and-lifestyle',
  },
  {
    id: '1xymedb4FB_1VmiZcL6As_A5olaJKFFFK',
    title: 'Behind the Scenes',
    page: 'behind-the-scenes',
  },

  // {
  //   id: '1b1CrCcrULMAkF2N9VW9_wCZWYDYC0oy1',
  //   title: 'Motion Graphics',
  //   page: 'motion-graphics',
  // },
];

const MovingFrames = () => {
  return (
    <CategoryWrapper title="Video Gallery" id="videos">
      {CATEGORIES.map(category => (
        <AlbumLinks
          key={category.id}
          link={`videos/${category.page}`}
          src={`https://drive.google.com/uc?export=view&id=${category.id}`}
          title={category.title}
          gallery={'video'}
        />
      ))}
    </CategoryWrapper>
  );
};

export default MovingFrames;
