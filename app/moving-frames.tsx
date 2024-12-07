import AlbumLinks from './(albums)/AlbumLinks';
import CategoryWrapper from '@/components/category-wrapper';

const CATEGORIES = [
  {
    id: '1yHhFk_IgmlndDjGXOcanBxdtf_5jMSN9',
    title: 'BTS',
    page: 'bts',
  },
  {
    id: '1Naedb1HmYnbDl9Hj6aYAyzdk8oXmK8t9',
    title: 'Styles and Lifestyle',
    page: 'styles',
  },
  // {
  //   id: '1b1CrCcrULMAkF2N9VW9_wCZWYDYC0oy1',
  //   title: 'Motion Graphics',
  //   page: 'motion-graphics',
  // },
  {
    id: '1mPjshDVK4NERmPcqXSORPrdjGHIew--A',
    title: 'Real Estate',
    page: 'real-estate',
  },
  {
    id: '1zpSZN-tD-iNJyaxff0YljdsArchgJNfm',
    title: 'Documentaries',
    page: 'documentaries',
  },
  {
    id: '1WLzxx0lAg5glsy4fEBKF2KG4QfX652Qi',
    title: 'Corporate Events and Brand Activations',
    page: 'corporate',
  },
  {
    id: '11qmpNsNTph8T3SJNeWj17Q6_4-zAmgqt',
    title: 'Proposals and Pre-weddings',
    page: 'proposals',
  },
  {
    id: '1wV9SyWmZUiZof5Q-IHnWDJeX7UblwUxi',
    title: 'TV Commercials and Brand Ads',
    page: 'commercials',
  },
  {
    id: '1g5XM2nFsRjjQKlYvgekYG451AOUVDb_C',
    title: 'Concerts and Events',
    page: 'concerts',
  },
  {
    id: '1hzJ6C60e-F9ei5uiXYSP84NubdeIgzF4',
    title: 'Wedding Videos',
    page: 'weddings',
  },
];

const MovingFrames = () => {
  return (
    <CategoryWrapper title="Video Gallery" id="moving-frames">
      {CATEGORIES.reverse().map(category => (
        <AlbumLinks
          key={category.id}
          link={`moving-frames/${category.page}`}
          src={`https://drive.google.com/uc?export=view&id=${category.id}`}
          title={category.title}
          gallery={'video'}
        />
      ))}
    </CategoryWrapper>
  );
};

export default MovingFrames;
