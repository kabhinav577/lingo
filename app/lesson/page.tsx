import { redirect } from 'next/navigation';
import { getLesson, getUserProgress, getUserSubscription } from '@/db/queries';
import { Quiz } from './quiz';

const LessonPage = async () => {
  const lessonData = getLesson();
  const userProgressData = getUserProgress();
  const userSubscriptionData = getUserSubscription();

  const [lesson, userProgress, userSubscription] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ]);

  if (!lesson || !userProgress) {
    redirect('/learn');
  }

  const initialPercentage =
    (lesson.challenges.filter((challenge) => challenge.completed).length /
      lesson.challenges.length) *
    100;

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialPercentage={initialPercentage}
      initialLessonChallenges={lesson.challenges}
      initialLessonHearts={userProgress.hearts}
      userSubscription={userSubscription}
    />
  );
};

export default LessonPage;
