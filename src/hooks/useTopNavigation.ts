import useTopNavigationStore, { TopNavigationState } from '@/store/topNavigation';
import { useLayoutEffect } from '@tanstack/react-router';
import { useRef } from 'react';

type ShowTopNavigationProps = Omit<TopNavigationState, 'visible'>;
type HideTopNaivigationProps = false;
export default function useTopNavigation(state: ShowTopNavigationProps | HideTopNaivigationProps) {
  const { show: showTopNav, hide: hideTopNav } = useTopNavigationStore();
  const stateRef = useRef(state);

  useLayoutEffect(() => {
    stateRef.current = state;
  }, [state]);

  useLayoutEffect(() => {
    if (stateRef.current) showTopNav(stateRef.current);
    else hideTopNav();

    return () => hideTopNav();
  }, [hideTopNav, showTopNav]);
}
