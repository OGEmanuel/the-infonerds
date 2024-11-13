import AlbumLinksWrapper from '@/components/album-links-wrapper';
import AlbumLinks from './(albums)/AlbumLinks';

const FrozenMoments = () => {
  return (
    <section className="flex flex-col gap-6">
      <div className="text-white">
        <h2 className="text-xl font-medium">Frozen Moments</h2>
        <p className="italics text-xs">(Photo Gallery)</p>
      </div>
      <AlbumLinksWrapper>
        <AlbumLinks
          link="/weddings"
          src={
            'https://drive.google.com/uc?export=view&id=1-07duMxFP_aIfiDoRRmmIfh5x23bRfFu'
          }
          title="Wedding Photos"
        />
        <AlbumLinks
          link="/concerts"
          src={
            'https://drive.google.com/uc?export=view&id=1zpSZN-tD-iNJyaxff0YljdsArchgJNfm'
          }
          title="Concerts and Events"
        />
        <AlbumLinks
          link="/corporate"
          src={
            'https://drive.google.com/uc?export=view&id=1Naedb1HmYnbDl9Hj6aYAyzdk8oXmK8t9'
          }
          title="Corporate Events and Brand Activation"
        />
        <AlbumLinks
          link="/pre-wedding"
          src={
            'https://drive.google.com/uc?export=view&id=1b1CrCcrULMAkF2N9VW9_wCZWYDYC0oy1'
          }
          title="Pre-wedding and Proposals"
        />
        <AlbumLinks
          link="/portraits"
          src={
            'https://drive.google.com/uc?export=view&id=1mPjshDVK4NERmPcqXSORPrdjGHIew--A'
          }
          title="Portraits"
        />
        <AlbumLinks
          link="/bts"
          src={
            'https://drive.google.com/uc?export=view&id=1wV9SyWmZUiZof5Q-IHnWDJeX7UblwUxi'
          }
          title="BTS"
        />
      </AlbumLinksWrapper>
    </section>
  );
};

export default FrozenMoments;
