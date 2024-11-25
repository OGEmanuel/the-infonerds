import AlbumLinks from './(albums)/AlbumLinks';
import CategoryWrapper from '@/components/category-wrapper';

const CATEGORIES = [
  {
    id: '1-07duMxFP_aIfiDoRRmmIfh5x23bRfFu',
    title: 'Wedding Photos',
    page: 'weddings',
  },
  {
    id: '1zpSZN-tD-iNJyaxff0YljdsArchgJNfm',
    title: 'Concerts and Events',
    page: 'concerts',
  },
  {
    id: '1Naedb1HmYnbDl9Hj6aYAyzdk8oXmK8t9',
    title: 'Corporate Events and Brand Activation',
    page: 'corporate',
  },
  {
    id: '1b1CrCcrULMAkF2N9VW9_wCZWYDYC0oy1',
    title: 'Pre-wedding and Proposals',
    page: 'pre-wedding',
  },
  {
    id: '1mPjshDVK4NERmPcqXSORPrdjGHIew--A',
    title: 'Portraits',
    page: 'portraits',
  },
  {
    id: '1wV9SyWmZUiZof5Q-IHnWDJeX7UblwUxi',
    title: 'BTS',
    page: 'bts',
  },
];

const FrozenMoments = () => {
  return (
    <CategoryWrapper title="Frozen Moments" description="(Photo Gallery)">
      {CATEGORIES.map(category => (
        <AlbumLinks
          key={category.id}
          link={`frozen-moments/${category.page}`}
          src={`https://drive.google.com/uc?export=view&id=${category.id}`}
          title={category.title}
        />
      ))}
    </CategoryWrapper>
  );
};

export default FrozenMoments;
