import { useMemo } from 'react';

export default function useRecentSearch() {
  function add(summonerName: string) {}

  const list = useMemo(() => {}, []);

  return { add, list };
}
