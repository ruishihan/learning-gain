#Definition
- S	countable set
- P{Xn=ej |Xn-1=ei}	Markov Probility
- Pij(m,n)	transition probabilities of a Markov chain; m,n stand which step;i,j stand the state
- Xn only depends on the recent Xn-1
- In general case, the Markov chain does have continuons time but discrete state space

- For example:
> In Random Walk, the Sn is a Markov chain.
> Branching process

[The properties from Wiki](https://en.wikipedia.org/wiki/Markov_chain#Properties)

## concepts
- j is *ccessible* from i
- i,j *communicates* with each other
- if every state in a Markov Chain is accessible from every other state, the MC is called *irreducible*
- closed
> closed set
> absorbing
- P{starts from i, firstly reaches j using n-step.}
- f(i,j)
- first passage distribution
- first passage time(recurrence time)

- recurrent
- transient: start from i, and never come back
- positive recurrent
- null recurrent

- periodic
- aperiodic
## The distribution of Markov chain

## n-step transition probabilities matrix

##Chapman-Kolmogorov equation

The conclusion is , Markov chain is completely defined by both the initial distribution and one-step transition matrix.

## conclude n-step Matrix from one-step Matrix 
using eigen values matrix and eigen vectors matrix.

##Binary Communication Channel
We can know the P{xn=1 |x0=1} from n-step Matrix,but we want to get P{x0=1 |xn=1} (that really make sence).
So, we used the Bayes-formula.
