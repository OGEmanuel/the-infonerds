'use client';

import { v4 as uuidv4 } from 'uuid';
import Image from 'next/image';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const weddings = [
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1028NzZe0RjzjNdxKB56z5rmQRHJwl20K',
    large: true,
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1OHIZxYa1khDtRWIbG83BixP9GoKCdx-x',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1QyTYuRDyushsTJHJszu4QaNsJ0xNyc3h',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1U04y3F3VRxiNla_xdJ_5_4fkn5Lwbrxe',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1I08ZqDQybr49YfSCM8HRd5sTIOXd7PTd',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1jB_8uIVZfI8eNeGS_k7b7SUWVVa9OiNh',
  },

  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1BuQu7a0T_0gPAMlyC98xoDkprMRA4iwO',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1YTfDGeuF9itXvx_2bsbP40_uRgBLyArO',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1168QhIO6DKvaXA6LppUcPP5qcRQWkqnR',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=18vtz8EL3xIkifxM3lygzs61avKcrO9Dn',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=15Uj77XynB3i9idqUh2m7Yk3_LuQFkE2E',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1Mi144GNsJVkiqDLf2uFQ7FMT1OQqz8IN',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1x4f-PuPoS_4WP5MP6Cm6AYpbSKDBPAeF',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1DpHTtuUC85SnADGiI7KKt9QVzsBOthNf',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1Yv8ZEl_6-HAy_h2ZqbZFBOHSTqO6q_LP',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1l96TJIgVIsIQiiXTy66G1nm0ZiAOjvk9',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1NyecjmuZr8L2eR3xUrMJxaHohhKDQ1uW',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1WBUI4ggfeifIeh89DpS8ciAUzvKNho1d',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=19tHCzD4SPMrf5VrNessTjoEvJQYYlVjM',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=16geiywpRFnpODgkrBYwsDGf_N4ZuKWag',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1Bpu3GDrhWeu6PLuKj8Mvtoy9dEGoRRNq',
    large: true,
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1S-hzbQlBJtOagqBhqxBCHUQ9ASeuEF_D',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1EtAe9mvcyJYP83ZPNpHIZ_oQO8YZzsG-',
  },

  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=193GwA1vzCx7fY8MzVxmrVMgL1-GHmkWb',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=16WRRkSlNXlaiYqC_TOTuqpZ_aMQWcNs9',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1hzJ6C60e-F9ei5uiXYSP84NubdeIgzF4',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1QY253qjgV9e24ouevF9crNv2vtCV-fwK',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1fJ0Cj42eDFqUoUrmEQgam8UyH3cqaK3z',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1b6AfjE7bxskAZIUho8uxnRVLch-cMGIg',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1-07duMxFP_aIfiDoRRmmIfh5x23bRfFu',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1hGUS_Bauy9D3R8GoO6TBGOYo-yVs11h6',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1_5k-ksw-YSvDlipXF7ST2pSLkGZnN27j',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=15vaGtqXBCEljhnJSN6kqEHV5Q_Nw5GNJ',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1mKzcZ8f_HhpOe-pIHWK3L1_w70d4ghSW',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1_hd_EazDAx-vkS2ot4XLyE6r3qabCvZ_',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=10qE_ggWta2OGtrESp7sJBtCQ46-pBGXi',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1a0o0EZE9QKYOTgaeJB407SRYD0r3Ezy1',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1MZSxaCJcvwzaeQJVnG1cQSS82wSWKjWv',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1IMdy-9FCVizdCr6qMIfet-fuOw7fQwoK',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1RtK2mreEmjXg1IJRBuDKA3dxaIDdiTeh',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1ou7xAtdGTrKFFSybheic60OjnoSSmH6b',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1ggImPoxmWwqJ2HArgWBarqyqIjDM5MCJ',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1zTUmLHyV7Y4a70QMak3jMaUq6_keO2yb',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1I5z3D4qvqvJzJj_7mx3Mw5bkbZ-RbbgY',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1KNvVJndXGHySBM7_yNWaDEIonD5Zeve1',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1qnfRgpJNe9610MJOFw8dabISTXggyfUy',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1gh_zFGeZohGWH5xAt2301gFSSVPdF5p4',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1N_5VIfAxAKyDF0WQ7lqbKv1YpZpUVLmL',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=12evw_l-kdZ1GFmSV-lh5esGPbyeI8F7B',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1YBHaukUyQoabMUATb2zoYbYhP4o2Tt8I',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1FWV4-WmMLaC8Y8GXZOGhWm3u0DogYug7',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1JIdR96n14NVprktcGpEtWUhXXuEro-Dd',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1PE-Bh7vb_Y0_6088v9FlTpkJHqY7V-ia',
    large: true,
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1sqUW8rwiARh4kfDUtyxbqEgdKPp2MXiz',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1T7Fm2yvOzywthD5ZxP-E0kMivRdNjg81',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1V0DOoxljdnrInERB1BEE5Q6peAHOkrd6',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1bqKzauZPRDS_Xv9l20t8bgsthK8a_YjO',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1Ox02omZXLqzYw19yUK7JKfGCCqHc-XbA',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=198F-n_KWWTb0m2yJGfRhCiZIEpXZHy5c',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1Q6-rzVk5RYqNzH1IUrBALPei0K2b0-k6',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=11g2yjLKLc5DkV7kQrxPfv_GJBi2Qqe3I',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1ALpi8m5snjGPJC76HeP9aS1F6bUTbXJU',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1L7DHp5pvlnh1rsEUqLTGzVyDKJoYGOIz',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=131mhqEgqd9Jbo2XwDF6mJEj8c8B4t_bv',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1E43uP8u0Wx6LXqN88a1p4Ivg5pt6gfub',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1ODNSgAA_eEfWcvuL_Vik1ycUlvKCkMGK',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1DlOwO17kQEoolRx5W4z_m0ORK5NeptjY',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1OkGL4tVJCi2CFxmx_qORuLtyxCWR9ZAb',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1dmS9ZDtz6BFucPTIV7o_NxJW6lMbWdDw',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1dIHXjduc8v0qpVUHgHPql8IhNHzzInIf',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=189qxpRLID76yuDtDj9MPssyL8b1Y56d7',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=15NIMEvHBqyf4OLnap4xIbwHnh5n6kCXN',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1WlcFD_cUms6kzN6WiullNqaTPd7n4cAA',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=10TlqfgzxL3gpDIywQLGEWMfP7fdYssw7',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1_CQfMON5weeZEnTi2FT2x4c7mif7xzBf',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1uyJbOnnTZczYs4Swv0UlIk9r_wYzk5Qt',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1tlGbs0swrPVw4ZT60MwEW7IYezy3ZLB0',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1L9FZXw_OWLJQ3SpmJjwwJVSMCqKCszFY',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1yd0cQ2jCtpzpFsaHA3ZsIw6VZHu9SkDA',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=13xQ1--Bj-ALbmqRa0wt_iv6kwcrR5vyS',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1HMEfvntozhulIJWmxJ0iEI2aEcqslug9',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1MGiEbNfGpe1qR__fLZIift-msIeShV3C',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1ChYLfZ1emOvaSTB-qyiZ2MB5WdiB9jD3',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1MDefB51jDL7rQ_mK4Bjnz3W_NIUQFVQw',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1T3s3enmNnSk9uzqbnSYXqElGcufy78jO',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=19sClvSJPBDvtRovZa0U75NQI3f7TnyEx',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1TwsNuaUFQvOJqVYUDdj3gDTjLyAOHnuZ',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1H9I1QDaiiM7lBM5DXIhuQ7e_ayM2fDPR',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1au1Ha8wkpsWzZV7TiYAkVPz3yR8uXYR6',
  },
  {
    id: uuidv4(),
    src: 'https://drive.google.com/uc?export=view&id=1XAEsaRgfZ-DNwnfpRsxvD7okvQw9p83v',
  },
];

const Categories = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  let itemsPerPage = 16;

  const totalPages = Math.ceil(weddings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentWeddings = weddings.slice(startIndex, endIndex);

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  };

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  };
  return (
    <div className="flex flex-col gap-10">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
        {currentWeddings.map((wedding, i) => (
          <div
            key={wedding.id}
            className={`relative h-full w-full overflow-hidden rounded-lg border border-transparent before:absolute before:inset-0 before:z-0 before:h-full before:w-full before:rounded-lg before:bg-black before:opacity-0 before:blur-sm before:transition-opacity hover:border-gray-700 hover:before:opacity-50 ${wedding.large && 'sm:col-[1_/_span_2]'}`}
          >
            {/* {isLoading ? (
              <Skeleton className='h-full w-full animate-pulse' />
            ) : ( */}
              <Image
                src={wedding.src}
                alt="category"
                width={500}
                height={500}
                // onLoad={() => {
                //   setIsLoading(false);
                // }}
                className="h-full w-full object-cover object-top transition-transform group-hover:scale-125"
                onError={e => {
                  e.currentTarget.src = '/images/album-fallback-img.jpg';
                }}
              />
            {/* )} */}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 text-white">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:opacity-50"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </button>

        <span className="text-sm">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="flex items-center gap-1 rounded-lg bg-white px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 disabled:opacity-50"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
