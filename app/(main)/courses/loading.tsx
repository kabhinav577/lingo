import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <Loader className="animate-spin h-5 w-5 text-muted-foreground" />
    </div>
  );
};

export default Loading;
