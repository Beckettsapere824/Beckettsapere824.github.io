# Guided reading: Ng–Jordan–Weiss spectral clustering (theory)
# 引导精读：Ng–Jordan–Weiss 谱聚类（理论部分）

**Source paper / 原文**: *On Spectral Clustering: Analysis and an algorithm* (Ng, Jordan, Weiss, NIPS 2001).

**How to use this note / 怎么用这份笔记**

This is a *learning path*, not a summary. Each section starts from a concrete question, introduces the mathematical object, then states what the paper proves and what it does *not* prove. English paragraph first, Chinese paragraph next.

这是一条 **学习路径**，不是摘要。每一节从具体问题出发，再引入数学对象，然后说明论文证明了什么、**没有**证明什么。先英文段，后中文段。

Prerequisite intuition (from our tree): distances [M0.2](M0.2.md), eigenvalues [M0.5](M0.5.md), PSD [M0.6](M0.6.md), k-means [M5.1](M5.1.md). You do not need graph theory beyond “adjacency / degree / Laplacian-like matrices.”

前置直觉：距离、特征值、半正定、k-means。不需要比「邻接 / 度 / 类拉普拉斯矩阵」更重的图论。

---

## Lecture 0 — Notation and language
## 第0讲 — 符号与语言

### What problem does the notation solve?
### 符号要解决什么？

The paper talks about matrices, blocks, eigenvectors, and “rows of $Y$ as points.” Before any theorem, lock the symbols so later sentences stay readable.

论文在谈矩阵、块、特征向量和「把 $Y$ 的行当成点」。在任何定理之前先锁死符号，后面句子才读得下去。

### Core objects / 核心对象

- Data: $S=\{s_1,\ldots,s_n\}\subset\mathbb{R}^{\ell}$.  
  数据点集合。
- Affinity: $A\in\mathbb{R}^{n\times n}$,
  $$
  A_{ij}=\exp\bigl(-\lVert s_i-s_j\rVert_{2}^{2}/(2\sigma^{2})\bigr)\quad(i\neq j),\qquad A_{ii}=0.
  $$
  亲和矩阵：近的点相似度高；$\sigma^{2}$ 控制衰减速度。对角为 0（不把自己算成邻居）。
- Degree matrix: $D=\mathrm{diag}(d_1,\ldots,d_n)$ with $d_i=\sum_j A_{ij}$.  
  度：点 $i$ 与所有点的总亲和。
- Normalized affinity (paper’s $L$):
  $$
  L=D^{-1/2}AD^{-1/2}.
  $$
  **Caution:** this is *not* the combinatorial Laplacian $D-A$. It is a symmetrically normalized affinity. Eigenvalues of $L$ sit in $[0,1]$ under standard nonnegativity conditions; the top eigenvalue is $1$.

  **注意：** 这不是组合拉普拉斯 $D-A$，而是对称归一化的亲和矩阵。在常见非负条件下特征值落在 $[0,1]$，最大为 $1$。

- Top eigenvectors: $Lx_i=\lambda_i x_i$ with $\lambda_1\ge\cdots\ge\lambda_k\ge\cdots$. Stack
  $$
  X=[x_1\,\cdots\,x_k]\in\mathbb{R}^{n\times k}.
  $$
- Row normalization:
  $$
  Y_{ij}=\frac{X_{ij}}{\bigl(\sum_{t=1}^{k}X_{it}^{2}\bigr)^{1/2}}.
  $$
  Each row of $Y$ is a point on the unit sphere in $\mathbb{R}^{k}$.
  $Y$ 的每一行是 $\mathbb{R}^{k}$ 单位球面上的一个点。

### Ideal vs perturbed / 理想与扰动

- Ideal affinity $\hat{A}$: zero out every entry whose two endpoints lie in *different* true clusters. Then $\hat{A}$ is block-diagonal after sorting by cluster.  
  理想亲和：不同真实簇之间的边全部置零 → 按簇排序后块对角。
- $\hat{D},\hat{L},\hat{X},\hat{Y}$: same constructions from $\hat{A}$.  
  从 $\hat{A}$ 出发的平行对象。
- Perturbation: $A=\hat{A}+E$ where $E$ holds the weak cross-cluster edges.  
  扰动 $E$ 装的就是跨簇弱连接。

### Eigen-gap / 特征间隙

In the ideal model the top $k$ eigenvalues of $\hat{L}$ equal $1$. The gap is
$$
\delta = 1-\max_{i}\lambda_{2}^{(i)},
$$
where $\lambda_{2}^{(i)}$ is the *second* eigenvalue of the $i$-th diagonal block of $\hat{L}$. Large $\delta$ means each block is “tight”: hard to split further.

理想模型中前 $k$ 个特征值全是 $1$。间隙由各块第二特征值决定；$\delta$ 大表示每块自身紧密、不易再切开。

### Critical mindset / 关键心态

When eigenvalue $1$ is repeated, **individual** eigenvectors are defined only up to rotation inside the eigenspace. What is stable is the **subspace** $\mathrm{span}\{x_1,\ldots,x_k\}$. The paper’s analysis is about that subspace, not about “the second eigenvector means cluster 2.”

特征值 $1$ 重复时，**单个**特征向量可以在特征空间里旋转。稳定的是 **子空间**。论文分析的是子空间，不是「第二个特征向量 = 第 2 簇」。

---

## Lecture 1 — Why spectral methods at all?
## 第1讲 — 为什么要谱方法？

### Concrete failure of the usual tools
### 常规工具的具体失败

Imagine two concentric circles of points (Figure 1 style in the paper). Humans see two rings. K-means sees two blobs about the origin because it minimizes squared distance to centres and prefers convex pieces. EM with Gaussian components makes the same geometric bet.

想象两个同心圆环上的点。人眼看到两圈。K-means 看到的是绕原点的两团，因为它最小化到中心的平方距离、偏好凸块。高斯混合的 EM 下的是同一几何赌注。

Spectral clustering’s bet is different: build a similarity graph, look at the **spectrum** of a matrix derived from edges, and read cluster structure from eigenvectors—then run a simple algorithm in that new coordinate system.

谱聚类的赌注不同：建相似图，看由边导出的矩阵的 **谱**，从特征向量读簇结构——再在新坐标系里跑简单算法。

### Two historical threads / 两条历史线索

1. **Spectral graph partitioning:** the second eigenvector of a Laplacian gives a relaxed cut; guarantees exist for 2-way partitions; $k$-way often done by recursion. Experiments suggested using $k$ eigenvectors at once is better.
2. **Multi-eigenvector algorithms:** Weiss; Meila & Shi—analyze $k$ vectors together in simple models. This paper proposes one concrete way to use all $k$ vectors and proves when that way works.

1. **谱图划分：** 拉普拉斯第二特征向量给出松弛割；二路有保证；$k$ 路常递归。实验表明一次用 $k$ 个向量更好。  
2. **多特征向量算法：** Weiss；Meila & Shi。本文给出一种具体用法并证明何时有效。

### What the theory will and will not give
### 理论会给什么、不给什么

- **Will give:** conditions under which the map $S\mapsto Y$ sends true clusters to tight, well-separated point clouds on the sphere—so a reasonable algorithm on $Y$’s rows can recover them.
- **Will not give:** a free lunch on $\sigma^{2}$, a proof that K-means on $Y$ always hits the global optimum, or a necessary condition (only sufficient).

- **会给：** $S\mapsto Y$ 在何种条件下把真实簇映成球面上紧密、可分的点云。  
- **不给：** $\sigma^{2}$ 的免费午餐、K-means 全局最优证明、必要条件（只有充分条件）。

---

## Lecture 2 — The algorithm as a mathematical map
## 第2讲 — 算法作为数学映射

### The six steps rewritten once
### 六步重写一遍

$$
S \xrightarrow{\text{affinity}} A \xrightarrow{\text{normalize}} L \xrightarrow{\text{top }k\text{ evecs}} X \xrightarrow{\text{row-norm}} Y \xrightarrow{\text{K-means}} \text{labels}.
$$

1. $A$: distances → similarities.  
2. $L=D^{-1/2}AD^{-1/2}$: comparable rows/columns; high-degree points do not dominate purely by degree.  
3. $X$: each data point $s_i$ becomes the $i$-th row of $X$ in $\mathbb{R}^{k}$.  
4. $Y$: project each row onto the unit sphere—this is the object Theorem 2 talks about.  
5–6. Cluster rows of $Y$; copy labels back to $s_i$.

### Why not skip to K-means on $S$?
### 为何不直接对 $S$ 做 K-means？

Because the geometry we care about may be invisible to Euclidean centres in $\mathbb{R}^{\ell}$. After the map, rows of $Y$ can form nearly orthogonal tight clusters even when the original rings are non-convex. The theory explains *when* that miracle is not a miracle but a perturbation of an ideal block model.

因为我们关心的几何在原空间的欧氏中心下可能看不见。映射之后，$Y$ 的行可以形成近乎正交的紧密簇，即使原来是非凸环。理论解释 **何时** 这不是奇迹，而是理想块模型的扰动。

### What theory actually certifies
### 理论真正担保的是什么

Theory certifies **geometry of $Y$**. Step 5 is “any algorithm that tries to minimize distortion.” If $Y$’s rows sit in $k$ tight spherical caps far from each other, ordinary K-means is a practical choice—not a theorem hypothesis.

理论担保的是 **$Y$ 的几何**。第 5 步是「任何试图最小化畸变的算法」。若 $Y$ 的行落在 $k$ 个彼此远离的紧密球冠上，普通 K-means 是实务选择——不是定理假设。

---

## Lecture 3 — Ideal block model and Proposition 1
## 第3讲 — 理想块模型与命题1

### The thought experiment
### 思想实验

Push distinct clusters “infinitely far” in affinity space: every cross-cluster $A_{ij}$ becomes $0$. Sort points by cluster. Then
$$
\hat{A}=\mathrm{diag}\bigl(A^{(11)},\ldots,A^{(kk)}\bigr),
\qquad
\hat{L}=\mathrm{diag}\bigl(\hat{L}^{(11)},\ldots,\hat{L}^{(kk)}\bigr).
$$

Each block $\hat{L}^{(ii)}$ is itself a normalized affinity on cluster $i$ alone.

### Spectral structure of one block
### 单个块的谱结构

Under standard positivity/connectivity inside a cluster:

- The largest eigenvalue of $\hat{L}^{(ii)}$ is **exactly $1$**, with a strictly positive eigenvector $x_1^{(i)}$.  
- The second eigenvalue is **strictly less than $1$**.

Therefore the top $k$ eigenvalues of the full $\hat{L}$ are all $1$ (multiplicity $k$), and one choice of eigenvectors is
$$
\hat{X}=
\begin{bmatrix}
x_1^{(1)} & 0 & \cdots \\
0 & x_1^{(2)} & \cdots \\
\vdots & & \ddots
\end{bmatrix}
$$
(each $x_1^{(i)}$ padded with zeros outside its block).

### The rotation ambiguity
### 旋转不确定性

Any $\hat{X}R$ with orthogonal $R\in\mathbb{R}^{k\times k}$ is equally valid. So **do not** read “column 2 = cluster 2.” Read “the column space encodes the $k$ clusters.”

### After row normalization
### 行归一化之后

Each row that belongs to cluster $i$ becomes the same unit vector $r_i$ (the $i$-th row of $R$ in the ideal aligned case). The set $\{r_1,\ldots,r_k\}$ can be chosen orthonormal. Hence rows of $\hat{Y}$ are **exactly** $k$ orthogonal points on the sphere, one per true cluster—perfect input for a distortion-minimizing clustering step.

这就是命题1的几何内容：理想情形下，行归一化后每个真实簇塌缩到球面上的一个正交单位向量。

---

## Lecture 4 — Perturbation and subspace stability
## 第4讲 — 扰动与子空间稳定性

### From ideal to real
### 从理想到现实

Real data: cross-cluster affinities are small but not zero. Write $A=\hat{A}+E$. Then $L$ is a perturbation of $\hat{L}$. Question:

> Is the invariant subspace for the top $k$ eigenvalues of $L$ close to that of $\hat{L}$?

> $L$ 的前 $k$ 维不变子空间是否靠近 $\hat{L}$ 的？

### Eigen-gap controls sensitivity
### 特征间隙控制敏感度

Matrix perturbation theory (Davis–Kahan $\sin\theta$ type results) says roughly:

$$
\text{subspace error}\ \lesssim\ \frac{\text{size of perturbation}}{\text{eigen-gap}}.
$$

Here the ideal gap is $\delta=1-\max_i\lambda_2^{(i)}$. If some cluster is almost two clusters ($\lambda_2^{(i)}\approx 1$), $\delta$ is tiny and even weak cross edges can mix the subspace.

### What you should remember
### 应记住什么

The denominator $(\delta-\sqrt{2}\epsilon)^{2}$ in Theorem 2 is this idea made quantitative: gap must beat a perturbation size $\epsilon$ built from cross-cluster leakage. No gap ⇒ no theorem.

定理2分母里的 $(\delta-\sqrt{2}\epsilon)^{2}$ 就是这一直觉的定量版：间隙必须压过由跨簇泄漏构成的扰动规模。

---

## Lecture 5 — Assumptions A1–A4 in cluster language
## 第5讲 — 假设 A1–A4 的聚类语言

### A1 — Each true cluster is tight
### A1 — 每个真实簇本身紧密

$$
\lambda_2^{(i)}\le 1-\delta\quad\text{for all clusters }i.
$$

**Meaning:** inside cluster $i$, the normalized affinity block does not almost split into two pieces. Equivalent stories:

- **Cheeger form (A1.1):** the cheapest 2-way cut inside the cluster still has large boundary relative to volume—$h(S_i)$ bounded below.  
- **Random walk:** a walk that jumps with probabilities $\propto A_{ij}$ mixes fast inside the cluster.

**Violation picture:** a “cluster” that is really two blobs far apart. The algorithm has no reason to merge them; A1 fails and the theory refuses to promise anything.

**违反图景：** 所谓一簇其实是两团分离的点。算法没理由合并它们；A1 失败，理论拒绝担保。

### A2 — Total cross-cluster leakage is small
### A2 — 跨簇总泄漏小

$$
\sum_{j\in S_{i_1}}\sum_{k\in S_{i_2}}\frac{A_{jk}^{2}}{d_j d_k}\le\epsilon_1.
$$

For large dense clusters, denominators are $\Omega(n^{2})$, so many tiny $A_{jk}$ still keep the sum small.

### A3 — Every point prefers its own cluster
### A3 — 每个点更连自己人

Cross-cluster degree of point $j$ is small relative to how it sits inside its cluster (paper’s inequality (7)). Dense-cluster intuition: cross weight / within weight $=O(\epsilon_2)$.

### A4 — Degrees not wildly unbalanced inside a cluster
### A4 — 簇内度不要极端不均

$$
\hat{d}_j^{(i)}\ge \frac{1}{C n_i}\sum_{k=1}^{n_i}\hat{d}_k^{(i)}.
$$

Mild regularity: no point in the cluster is almost isolated from its siblings. Enters the constant $C$ in the final bound.

### Checklist intuition / 清单直觉

| Assumption | If violated |
|------------|-------------|
| A1 | True cluster can be split; gap collapses |
| A2 | Clusters heavily interlinked; subspace mixes |
| A3 | Border points glued to the wrong side |
| A4 | Pathological degree weights break constants |

---

## Lecture 6 — Theorem 2, piece by piece
## 第6讲 — 定理2逐块拆解

### Statement (rephrased for learning)
### 陈述（学习向改写）

Assume A1–A4. Define
$$
\epsilon=\sqrt{k(k-1)}\,\epsilon_1+k\epsilon_2^{2}.
$$
If the gap dominates the perturbation,
$$
\delta>(2+\sqrt{2})\epsilon,
$$
then there exist orthonormal vectors $r_1,\ldots,r_k$ such that
$$
\frac{1}{n}\sum_{i=1}^{k}\sum_{j=1}^{n_i}\lVert y_j^{(i)}-r_i\rVert_{2}^{2}
\le
4C(4+2\sqrt{k})^{2}\frac{\epsilon^{2}}{(\delta-\sqrt{2}\epsilon)^{2}}.
$$

### How to read the bound
### 如何读这个界

1. **Left side:** average squared distance from each row of $Y$ to the “ideal orthogonal representative” of its true cluster. Small ⇒ tight clusters on the sphere.  
2. **Numerator $\epsilon^{2}$:** cross leakage (A2, A3).  
3. **Denominator $(\delta-\sqrt{2}\epsilon)^{2}$:** must stay positive—gap beats perturbation.  
4. **$k$ dependence:** more clusters ⇒ harder bookkeeping ($\sqrt{k(k-1)}$, $(4+2\sqrt{k})^{2}$).  
5. **$C$:** from A4’s degree balance.

### Proof skeleton (what each step is for)
### 证明骨架（每步干什么）

1. Bound the perturbation that takes $\hat{L}$ to $L$ using A2–A3 (control $\epsilon$).  
2. Apply a Davis–Kahan-style lemma: subspace of $L$ close to subspace of $\hat{L}$ when $\delta>\cdots\epsilon$.  
3. Compare rows after the same row-normalization map; A4 controls row-norm irregularities.  
4. Average the squared errors to obtain (8).

You do not need every constant to use the theorem; you need the **shape**: gap vs leakage.

不必抠每一个常数；要抓住 **形状**：间隙对泄漏。

### What is still open after Theorem 2
### 定理2之后仍开放的问题

- K-means may still be poorly initialized (paper uses the $90^{\circ}$ prior in experiments).  
- $\sigma^{2}$ is not chosen by the theorem; experiments search for the value that makes $Y$’s clusters tightest.  
- Bound is sufficient, not sharp.

---

## Lecture 7 — Boundaries, relatives, and common mistakes
## 第7讲 — 边界、近亲与常见错误

### Kernel PCA / 核 PCA

Gaussian Kernel PCA is close to using eigenvectors of $A$. The paper’s normalizations ($L$ and row-normalization of $X$) are exactly the differences that help clustering; the same perturbation story can be extended, but raw Kernel PCA is not identical.

### Meila–Shi

They row-normalize $A$ to a transition matrix and skip row-normalizing $X$. Analysis suggests trouble when cluster volumes (total degrees) differ a lot across clusters—the geometry of $Y$ is less balanced.

### Kannan et al.

They tie clusters to **individual** singular vectors. This paper’s repeated-eigenvalue warning explains why that is fragile: the meaningful object is a subspace, not a labeled list of axes. Experiments in the paper show frequent failures of that style.

### Mistakes to avoid while studying
### 学习时要避开的坑

1. Interpreting a single eigenvector as “the” cluster indicator when multiplicity $>1$.  
2. Forgetting that Theorem 2 is about $Y$, not about K-means success.  
3. Thinking A1 is optional: without within-cluster tightness there is no gap.  
4. Confusing this $L$ with $D-A$ or $I-D^{-1}A$ without adjusting the spectral statements.

---

## Closing map / 收束路线图

$$
\text{why spectral}
\to \text{map }S\mapsto Y
\to \text{ideal blocks}\to\text{orthogonal rows}
\to \text{perturbation / gap}
\to \text{A1–A4}
\to \text{Theorem 2}
\to \text{limits}
$$

Return points in our course tree: [M5.1 k-means](M5.1.md), [M0.5 eigenvalues](M0.5.md), [M4 PCA](M4.2.md) (different use of eigenvectors: variance vs cuts/affinities).

**Next optional work:** walk one inequality in the proof of Theorem 2 in full detail, or implement the six steps on a two-circles toy and watch rows of $Y$ as $\sigma$ varies.
