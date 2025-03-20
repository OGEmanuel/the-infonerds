import AlbumLinks from './(albums)/AlbumLinks';
import CategoryWrapper from '@/components/category-wrapper';

const CATEGORIES = [
  {
    id: 'v1742161727/Wedding_Videos_metdbo.jpg',
    title: 'Wedding Videos',
    page: 'weddings',
  },
  {
    id: 'v1742161727/Concerts_and_Events_Video_cover_mexu3b.jpg',
    title: 'Concerts and Events',
    page: 'concerts-and-events',
  },
  {
    id: 'v1742161726/TV_Commercial_Brand_Ads_ssf8pj.jpg',
    title: 'TV Commercials and Brand Ads',
    page: 'tv-commercials-and-brand-ads',
  },
  {
    id: 'v1742161726/Proposals_and_Pre-Wedding_Videos_u8lchy.jpg',
    title: 'Proposals and Pre-weddings',
    page: 'proposals-and-pre-weddings',
  },
  {
    id: 'v1742161727/Corperate_Events_Brand_Activation_Video_kbedkh.jpg',
    title: 'Corporate Events and Brand Activations',
    page: 'corporate-events-and-brand-activations',
  },
  {
    id: 'v1742161724/Documentary_video_qs1usv.jpg',
    title: 'Documentaries',
    page: 'documentaries',
  },
  {
    id: 'v1742161725/Real_Estate_Video_lwtcpv.jpg',
    title: 'Real Estate',
    page: 'real-estate',
  },
  {
    id: 'v1742161725/Lifestlye_Video_luakmy.jpg',
    title: 'Styles and Lifestyle',
    page: 'styles-and-lifestyle',
  },
  {
    id: 'v1742161725/Behind_the_Scenes_hq89au.jpg',
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
          src={`https://res.cloudinary.com/dyx1sh27d/image/upload/q_auto,f_auto,c_limit/${category.id}`}
          title={category.title}
          gallery={'video'}
        />
      ))}
    </CategoryWrapper>
  );
};

export default MovingFrames;
