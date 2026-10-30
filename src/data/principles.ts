/**
 * Values and principles (About page). Unordered: these are held together,
 * not followed in sequence.
 */
export interface Principle {
  title: string;
  body: string;
}

export const principles: Principle[] = [
  {
    title: 'Evidence before conviction',
    body: 'We hold strong views loosely. A belief earns investment only after it has survived contact with real customers and real numbers.',
  },
  {
    title: 'Independence by design',
    body: 'Each venture carries its own name and answers to its own customers. Shared foundations should strengthen a business, never blur it.',
  },
  {
    title: 'Patience as a strategy',
    body: 'Durable businesses take years. We plan for that timescale and avoid decisions that only make sense over the next quarter.',
  },
  {
    title: 'Discretion',
    body: 'We speak when there is something worth saying. Work in progress, partners and ventures are kept confidential until they choose to be public.',
  },
  {
    title: 'A global view from the start',
    body: 'Good ideas and good customers are found everywhere. We design ventures to serve international markets rather than adding them as an afterthought.',
  },
  {
    title: 'Clarity in writing',
    body: 'If an idea cannot be explained plainly, it is not ready. We write things down, share our reasoning and change it openly when we are wrong.',
  },
];
