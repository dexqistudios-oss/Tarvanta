/**
 * The Tarvanta approach — five stages, in order.
 * Shared by the Home page (overview) and the Our Approach page (full text).
 * Written as an operating philosophy: how Tarvanta intends to work,
 * not a record of past results.
 */
export interface ApproachStage {
  slug: string;
  title: string;
  /** One sentence for overviews. */
  summary: string;
  /** Full explanation for the Approach page. */
  body: string[];
  /** Questions this stage is designed to answer. */
  questions: string[];
}

export const approach: ApproachStage[] = [
  {
    slug: 'identifying-opportunities',
    title: 'Identifying opportunities',
    summary: 'Start with a durable problem, not a product idea.',
    body: [
      'Every venture begins as an observation: a need that is real, specific and poorly served. We look for problems that will still matter in ten years, in markets where the people affected can be reached directly.',
      'We keep the net wide on purpose. Opportunities are considered across sectors and across borders, because the most useful ideas often travel from one market to another.',
    ],
    questions: [
      'Who has this problem, and how do they deal with it today?',
      'Will it still matter in a decade?',
      'Why has it not been solved well already?',
    ],
  },
  {
    slug: 'developing-strategic-perspectives',
    title: 'Developing strategic perspectives',
    summary: 'Turn research into a written point of view that can be tested.',
    body: [
      'An observation becomes useful when it is written down as a clear argument: what we believe, why we believe it, and what would prove us wrong. This is where Tarvanta’s insight work sits.',
      'Writing first forces precision. It also means every later decision can be traced back to a stated reason, which makes it easier to change course when the evidence changes.',
    ],
    questions: [
      'What do we believe that others do not?',
      'What evidence supports it, and what would disprove it?',
      'What would have to be true for a business to work here?',
    ],
  },
  {
    slug: 'building-and-validating-ideas',
    title: 'Building and validating ideas',
    summary: 'Test with real people, cheaply and early, before committing.',
    body: [
      'Ideas are tested in the smallest form that can produce an honest answer. That might be a conversation, a prototype, a pilot or a first paid order.',
      'The aim at this stage is not growth. It is learning whether the problem, the people and the proposed solution actually fit together, and stopping early when they do not.',
    ],
    questions: [
      'What is the smallest test that would change our mind?',
      'Are people willing to pay, switch or commit?',
      'What did we learn that we did not expect?',
    ],
  },
  {
    slug: 'developing-independent-ventures',
    title: 'Developing independent ventures',
    summary: 'Give each validated idea its own name, identity and focus.',
    body: [
      'An idea that holds up becomes a venture in its own right. It is given its own name, brand, website and channels, so it can earn trust with its own customers on its own terms.',
      'Tarvanta provides the shared ground beneath: strategic thinking, operating discipline and long-term commitment. The venture does not have to carry the parent name to benefit from it.',
    ],
    questions: [
      'What does this venture need to stand on its own?',
      'Which capabilities should be shared, and which kept separate?',
      'Who is best placed to lead it?',
    ],
  },
  {
    slug: 'creating-long-term-value',
    title: 'Creating sustainable long-term value',
    summary: 'Measure progress in years, and let sound decisions compound.',
    body: [
      'Enduring businesses are built through many sound decisions made consistently over time. We would rather grow steadily on firm foundations than quickly on borrowed assumptions.',
      'Value here means more than financial return. It includes customers who are well served, people who do good work, and businesses that are still standing when conditions change.',
    ],
    questions: [
      'Will this decision still look sensible in five years?',
      'Is the business getting stronger, not just bigger?',
      'What are we building that compounds?',
    ],
  },
];
