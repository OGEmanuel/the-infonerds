import { cn } from '@/lib/utils';
import useThemeStore from '@/store/theme-control';

const ImgFallback = (props: { className?: string }) => {
  const { theme } = useThemeStore();
  return (
    <div
      className={cn(
        `rounded-lg ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`,
        props.className,
      )}
    >
      <div
        className={`h-full w-full animate-pulse ${theme === 'light' ? 'bg-gray-100' : 'bg-gray-400'}`}
      />
    </div>
  );
};

export default ImgFallback;

export const ErrorMessage = () => {
  const { theme } = useThemeStore();

  return (
    <div
      className={`absolute inset-0 flex items-center justify-center rounded-lg ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}
    >
      <p className="text-red-500">Failed to load image</p>
    </div>
  );
};
