'use client';

import { challengeOptions, challenges } from '@/db/schema';
import { Header } from './header';
import { useState } from 'react';

type Props = {
  initialLessonId: number;
  initialPercentage: number;
  initialLessonHearts: number;
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean;
    challengeOptions: (typeof challengeOptions.$inferSelect)[];
  })[];
  userSubscription: any; // TODO :: replace with subscription db type
};

export const Quiz = ({
  initialLessonId,
  initialPercentage,
  initialLessonHearts,
  initialLessonChallenges,
  userSubscription,
}: Props) => {
  const [hearts, setHearts] = useState(initialLessonHearts);
  const [percentage, setPercentage] = useState(initialPercentage);

  return (
    <>
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
    </>
  );
};
