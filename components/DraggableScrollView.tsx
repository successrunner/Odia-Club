import React, { ComponentProps, RefObject } from 'react';
import { View } from 'react-native';

import { useDraggableScroll } from '@/hooks/useDraggableScroll';

export const DraggableScrollView = React.forwardRef<
  View,
  ComponentProps<typeof View>
>(function DraggableScrollView(props, ref) {
  const { refs } = useDraggableScroll<View>({
    outerRef: ref as RefObject<View>,
    cursor: 'grab', // optional, default
  });

  return <View ref={refs} {...props} />;
});
