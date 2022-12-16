import { useState } from 'react';

function useLike(defaultNumber = 0) {
  const [like, setLike] = useState(defaultNumber);

  function incrementLike() {
    setLike((prev) => prev + 1);
  }

  return [like, incrementLike];
}

export default useLike;
