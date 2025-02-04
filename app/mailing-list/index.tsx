'use client';

import { Button } from '@/components/ui/button';
import useThemeStore from '@/store/theme-control';
import { Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import MailingListForm from './mailing-list-form';

const MailingList = () => {
  const { theme } = useThemeStore();
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  useEffect(() => {
    const hasSeenModal = sessionStorage.getItem('hasSeenMailingListModal');
    if (!hasSeenModal) {
      openDialog();
      sessionStorage.setItem('hasSeenMailingListModal', 'true');
    }
  }, [openDialog]);

  return (
    <>
      <Button
        type="submit"
        onClick={() => setOpen(true)}
        className={`max-w-80 rounded-xl p-4 font-medium ${theme === 'light' ? 'bg-btn-gradient-light text-black' : 'bg-btn-gradient text-white'}`}
      >
        Join Our Mailing List
        <Mail className="ml-2 h-5 w-5" />
      </Button>
      <MailingListForm open={open} setOpen={setOpen} />
    </>
  );
};

export default MailingList;
