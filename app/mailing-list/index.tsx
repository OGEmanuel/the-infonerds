'use client';

import { Button } from '@/components/ui/button';
import useThemeStore from '@/store/theme-control';
import { Mail } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';
import MailingListForm, { MobileMailingListForm } from './mailing-list-form';
import { set } from 'zod';

const MailingList = () => {
  const { theme } = useThemeStore();
  const [open, setOpen] = useState(false);
  const [openSmall, setOpenSmall] = useState(false);
  const scrollThreshold = 1000;

  const openDialog = () => {
    const isMobile = window.innerWidth <= 639;
    if (isMobile) {
      setOpenSmall(true);
    } else {
      setOpen(true);
    }
    sessionStorage.setItem('hasSeenMailingListModal', 'true');
  };

  const handleScroll = useCallback(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenMailingListModal');
    if (window.scrollY > scrollThreshold && !hasSeenModal) {
      openDialog();
      window.removeEventListener('scroll', handleScroll);
    }
  }, [scrollThreshold]);

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenMailingListModal');
    if (!hasSeenModal) {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <>
      <Button
        type="submit"
        onClick={() => setOpen(true)}
        className={`hidden max-w-80 rounded-xl p-4 font-medium sm:block ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
      >
        Join Our Mailing List
        <Mail className="ml-2 h-5 w-5" />
      </Button>
      <Button
        type="submit"
        onClick={() => {
          setOpenSmall(!openSmall), console.log(openSmall);
        }}
        className={`max-w-80 rounded-xl p-4 font-medium sm:hidden ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
      >
        Join Our Mailing List
        <Mail className="ml-2 h-5 w-5" />
      </Button>
      <div className="">
        <MailingListForm open={open} setOpen={setOpen} />
      </div>
      <MobileMailingListForm open={openSmall} setOpen={setOpenSmall} />
    </>
  );
};

export default MailingList;
