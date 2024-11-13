const ImgFallback = () => {
  return (
    <div className="absolute inset-0 rounded-lg bg-gray-700">
      <div className="h-full w-full animate-pulse bg-gray-400" />
    </div>
  );
};

export default ImgFallback;

export const ErrorMessage = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-700">
      <p className="text-red-500">Failed to load image</p>
    </div>
  );
};
