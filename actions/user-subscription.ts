'use server';

import { auth, currentUser } from '@clerk/nextjs';

import { stripe } from '@/lib/stripe';
import { absoluteUrl } from '@/lib/utils';
import { getUserSubscription } from '@/db/queries';

const returnUrl = absoluteUrl('/shop'); // https://localhost:3000/shop

export const createStripeUrl = async () => {
  const { userId } = await auth();

  const user = await currentUser();

  if (!userId || !user) {
    throw new Error('Unauthorized');
  }

  const userSubscription = await getUserSubscription();

  if (userSubscription && userSubscription.stripeCustomerId) {
    const stripeSession = await stripe.billingPortal.sessions.create({
      customer: userSubscription.stripeCustomerId,
      return_url: returnUrl,
    });

    return { data: stripeSession.url };
  }
};
