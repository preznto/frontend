import { ReactElement } from 'react';
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export interface TopNavigationState {
  left: 'back' | 'none' | ReactElement;
  right?: 'close' | 'none' | ReactElement;
  visible: boolean;
}

interface TopNavigationStore extends TopNavigationState {
  get: () => TopNavigationState;
  show: (state: Omit<TopNavigationState, 'visible'>) => void;
  hide: () => void;
}

const useTopNavigationStore = create<TopNavigationStore>()(
  devtools((set, get) => ({
    visible: false,
    left: 'none',
    right: 'none',

    get: () => {
      const { visible, left, right } = get();
      return { visible, left, right };
    },
    show: (state) => set(() => ({ visible: true, ...state })),
    hide: () => set(() => ({ visible: false })),
  }))
);

export default useTopNavigationStore;
