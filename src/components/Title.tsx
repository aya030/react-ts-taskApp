import { memo } from 'react';

// eslint-disable-next-line react/display-name
export const Title = memo(({ title, as }: { title: string; as: string }) => {
  if (as === 'h2') {
    return <h2 className="text-black border-l-4 border-teal-500 pl-4">{title}</h2>;
  } else {
    return <p>{title}</p>;
  }
});
