import { Loader2 } from 'lucide-react';

const ImgFallback = () => {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center bg-gray-700 transition-opacity duration-300">
      <Loader2 className="h-8 w-8 animate-spin text-gray-400" />
    </div>
  );
};

export default ImgFallback;
