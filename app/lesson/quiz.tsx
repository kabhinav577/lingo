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
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className="lg:min-h-[350px] lg:w-[600px] w-full px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold text-neutral-700">
              Which of these is an apple?
            </h1>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};
