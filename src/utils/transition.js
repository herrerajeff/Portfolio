const transitions = timeout => ({
  entering: {
    opacity: 0,
    transform: `translateY(-1em)`,
  },
  entered: {
    transition: `opacity ${timeout}ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform ${timeout}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    opacity: 1,
    transform: `translateY(0)`,
  },
  exiting: {
    transition: `opacity ${timeout}ms cubic-bezier(0.175, 0.885, 0.32, 1.275), transform ${timeout}ms cubic-bezier(0.175, 0.885, 0.32, 1.275)`,
    opacity: 0,
    transform: `translateY(-1em)`,
  },
});

const transition = ({ timeout, status }) => transitions(timeout)[status];

export default transition;
