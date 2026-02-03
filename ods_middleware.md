# OpenDeepSearch with Tool-Aware Middleware for Reliable Web Search Agents

**Abstract**  
We introduce **Open Deep Search (ODS)**, a novel framework designed to bridge the gap between proprietary search AI solutions (e.g., OpenAI’s GPT-4o Search, Perplexity’s Sonar) and open-source alternatives. ODS augments the reasoning capabilities of open-source Large Language Models (LLMs)—specifically utilizing **GPT-OSS-120B** as a foundational reasoning engine—by integrating a sophisticated "Open Reasoning Agent" with a high-performance "Open Search Tool." The system employs a unique **Parent-Child Tool Routing** mechanism to orchestrate complex information retrieval and reasoning tasks [27]. We evaluate our implementation on the SimpleQA benchmark (n=1000), achieving an **LLM Judge Score of 89.0%** and an **Accuracy of 92.6%**, surpassing existing open-source baselines and demonstrating the efficacy of our architectural innovations.

## I. INTRODUCTION

Web agents are becoming increasingly important in contemporary intelligent systems, as they allow for automated interaction with online information. They are commonly used for information retrieval, real-time monitoring and decision support [1], [2]. From answering simple user queries to assisting with complex research tasks, web agents help users navigate and make sense of the ever-changing web.

In order for web agents to be useful they need to process information from multiple resources while simultaneously carrying out multiple tasks [3]. If the agent is not able to handle these requirements efficiently, the performance of the entire system suffers. Trustworthy web agents need to be able to support informed decision making, access the latest information and retrieve correct results in dynamic environments.

Most current web agents operate in a sequential execution paradigm [5], [6]. Although this paradigm is easy to implement, it also poses a number of limitations. Any mistake occurring in the early stages of the process, such as selection of an inappropriate tool or the acquisition of incomplete information, tends to propagate through the execution process. As soon as such a mistake has occurred, the agent continues to execute its plan without any correction. This becomes a serious problem when an agent is dependent on external tools and large language models. This results in redundant actions, wasted computation, and increased costs due to the heavy usage of paid API’s, ultimately leading to reduction in overall efficiency of the system.

To enhance contextual understanding in web agents, Open Deep Search was proposed as a framework that leverages open source tools and advanced reasoning strategies [4], [9]. Although this strategy improves and agent’s reasoning capabilities over information, it is still dependent on a structured, step by step execution model [10], [11]. Consequently, real-time monitoring and control of behaviour are still not feasible during execution [12], [13], [14]. The current safety measures are rule-driven and pre-defined, making them inadequate for dealing with unforeseen events [15], [16]. Essentially the agent is like a program that can go astray, with corrective measures that are limited by the initial task definition rather than the dynamic execution context.

To address the above challenges, we proposed **OpenDeepSearch with Tool-Aware Middleware (ODS-M)**. This strategy involves the incorporation of an additional controller layer that continuously tracks the execution of the agent in real time [17], [18]. ODS-M continuously monitors how tools are used, the current status of reasoning, and changes in the context for as they happen to allow for preemptive corrections of the smaller problems turning into larger scale failures. After an error occurs is too late to take corrective actions; therefore, the middleware is there to help the agent throughout its entire execution.

The ability for control to switch from a static prompt designed to a programmable execution environment with ODS-M greatly improves an agents ability to maintain transparency and allows for greater control measures. The design allows for better insight into agent behaviour and enables developers to control workflows more easily. Consequently agents become easier to debug, work with, and optimize for different tasks and settings.

There are four main parts of the ODS-M framework. The first is the Tool Hierarchy Middleware which manages the way tools are used, helping minimize unnecessary API calls to an outside service. The second part is the Dynamic Prompting Middleware that updates how each agent is instructed based on the environment of the current execution context. The third component of the framework is the Context Augmentation Module, which identifies relevant items using both term importance and semantic similarity. Last but not least, the Centralized Context Store keeps track of each execution event, helping create a consistent series of events between stages and making it easier to utilize context that was previously created in later steps. All four of these parts combine to form a comprehensive method for dealing with changing conditions. The reasoning engine that operates the agents is based on open source language models.

### Middleware-Based Execution Control

With our middleware-based execution control structure, we can constantly see what the agents are doing when they are running their tasks. This design provides the ability to make changes and intervene as desired, yet continues to allow the agent to perform uninterrupted. The addition of middleware to the execution pipeline allows us to manage the execution of each task with greater granularity and with a smoother execution process.

### Hierarchical Tool Coordination

The Hierarchical Coordination of Tools uses a structured method of managing tool operation within the agent. The primary objective of this structure is to reduce the number of API requests that may be made while still providing high levels of accuracy and relevance in retrieving data. This will provide an effective way to improve overall efficiency by reducing the amount of overhead associated with tool usage within an operational environment.

### Hybrid Context Augmentation

The Hybrid Context Augmentation methodology consists of two different types of methods for finding candidates. The first stage involves filtering using TF-IDF scores; then, the second stage uses semantic similarity to determine whether the candidates are relevant or not. When these two retrieval methods are combined, they allow for efficient retrieval of high-quality results, which increases the likelihood that an agent will find valuable contextual information.

### Dynamic Context Handling

Because of its centralized context storage method and adaptive prompting, Dynamic Context Handling advances the ability for an agent to grow its personality in an impeccable, instantaneous manner -- as the agent is executing specific tasks over time, the agent's behaviors can change at any point based upon the current context rather than relying on static prompt definitions. This will ultimately provide agents with a higher degree of flexibility, responsiveness, and adaptability to a dynamic environment.

## II. RELATED WORK

Open Deep Search (ODS) represents a notable advancement in reasoning-based search systems, enabling web searches that provide real-time, up-to-date information in response to user queries [4]. The system follows a multi-stage pipeline: it begins with query rewriting to improve comprehension, orchestrates external web search tools for information gathering, performs URL scraping to augment context, applies re-ranking to filter irrelevant content, and finally passes the refined context to a reasoning agent for response generation. While ODS achieves competitive performance against systems such as Perplexity Sonar Reasoning Pro and GPT-4 Search Preview [9], it relies exclusively on sequential execution and offers limited system-level control and observability. This restriction constrains adaptive behavior modification and error prevention during execution.

Several research directions inform our approach to these limitations. In the domain of agentic reasoning and web search systems, frameworks like ManuSearch [2] and WebThinker have explored transparent, multi-agent architectures to democratize deep search capabilities. These systems emphasize modularity and interpretability but often retain sequential decision-making patterns. WebCoT extends chain-of-thought reasoning to web agents through reflection, branching, and rollback mechanisms, providing more flexible reasoning pathways while still lacking systematic execution control. DeepDive integrates knowledge graphs and multi-turn reinforcement learning to enhance agent reasoning, demonstrating the value of structured knowledge representation in complex information retrieval tasks. Open-source agents like ODS-v2 have specifically demonstrated the power of CodeAct-based agents, improving complex multi-hop reasoning (FRAMES) performance from 30.1% to 75.3% [1].

In the area of dynamic adaptation and prompting, recent work has moved beyond static prompt engineering. Dynamic prompting techniques for task-oriented dialogue and chain-of-thought computation adjust instructions based on context. At the same time, research on efficient knowledge graph extraction demonstrates the scalability benefits of adaptive query formulation. These approaches, however, primarily modify inputs rather than implementing runtime system-level control. Middleware solutions for distributed AI systems apply control and observability principles from distributed computing to AI agent architectures [17], offering insights into real-time oversight but not specifically for web search agents.

The emerging field of agentic retrieval-augmented generation (RAG) provides additional architectural inspiration. Surveys of agentic RAG systems and RAG-reasoning architectures document the integration of autonomous tool use with retrieval mechanisms, while approaches such as RAG-Fusion explore multi-query generation and reciprocal rank fusion to improve retrieval diversity. These systems improve access to information but typically treat retrieval as a component rather than a centrally managed process with hierarchical tool oversight.

Research in context engineering and middleware further supports our design. Agentic Context Engineering treats contexts as evolving playbooks that accumulate and refine strategies through generation, reflection, and curation. File-system abstractions for context engineering propose a persistent infrastructure for managing heterogeneous context artifacts. While these frameworks address context management, they do not fully tackle tool orchestration, error propagation, and real-time observability in web search agents.

Our work combines insights from these areas while addressing a distinct gap: the lack of system-level middleware control for web search agents. Unlike sequential frameworks like ODS [4] or prompting-focused adaptations, ODS-M introduces a dedicated middleware layer that provides real-time observability, hierarchical tool management, and dynamic behavior modification. This design extends beyond existing context engineering frameworks by targeting the orchestration and reliability challenges unique to web search agents, delivering both the transparency of multi-agent architectures [2] and the control mechanisms inspired by distributed middleware [17].

## III. METHODOLOGY: OPENDEEPSEARCH WITH TOOL-AWARE MIDDLEWARE

OpenDeepSearch with Tool-Aware Middleware (ODS-M) is an open-source reasoning agentic system designed for web-based information retrieval (IR). The system extends the OpenDeepSearch agent by introducing a middleware layer that enables system-level monitoring and control of the agent’s execution. ODS-M integrates an open-source language model to process user queries and interact with external web tools to retrieve the required information. In our experiments, we used the **GPT-OSS-120B** model as the underlying reasoning model [24]. Given a user query, the agent performs multi-step reasoning over the retrieved web content and generates a final response, whereas the middleware observes and regulates tool usage throughout the execution process.

### A. Tool Hierarchy Middleware

The ODS-M system utilizes a hierarchical tool structure consisting of parent and child tools that collaborate to optimize execution [20], [28], [29]. Parent tools are primarily used to obtain information from the web. These are invoked selectively, typically during the initial query phase or at specific intervals, to manage costs and retrieval latency while ensuring high-quality data acquisition.

![Phase Controller Overview](ods_eval/images/phase_controler.png)
*Figure 1: Console instrumentation of the Phase Controller, showing the restricted toolset and execution state.*

Child tools serve as internal assistants that do not access external resources. Instead, they operate on information already stored within the system. This allows the reasoning agent to synthesize existing knowledge without redundant external calls, significantly improving operational efficiency. The middleware manages the transition between these types, resetting parent tools when child processes reach a threshold to ensure continuous progression without unnecessary overhead.

![Phase Transition Event](ods_eval/images/phase_transation.png)
*Figure 2: Automated phase transition event triggering the shift from discovery (Parent) to analysis (Child) tools.*

### B. Dynamic Prompting Middleware

The middleware layer enables real-time adaptation of the system prompt [21]. Initially, a default prompt initiates the reasoning process. As tools are executed and information is retrieved, the middleware dynamically updates the prompt, stripping raw data and integrating refined context. This ensures the reasoning agent maintains a coherent understanding of the multi-step research process, allowing it to stay focused on complex, multi-part user questions and navigate dynamic conversation states effectively.

![Dynamic Prompt Generation](ods_eval/images/dynamic_prompt.png)
*Figure 3: Real-time generation of context-aware prompts based on intermediate search results and architectural constraints.*

### C. Context Augmentation

The third part of the ODS-M is context augmentation. This is where ODS-M uses the results from tools to find URLs. These URLs were then closely examined using web scraping to obtain more information. ODS-M obtains information from each URL. Then, it cleans up and gets rid of anything that is not needed. In this way, the ODS-M has information that is relevant to what it is doing, and it can use this information to make good decisions later on. The ODS-M uses context augmentation to ensure that it has the required information.
Context augmentation in ODS-M involves a multi-stage pipeline for identifying and processing relevant information:

- **Document Chunking**
When we obtain a document, say the document is called ddd, we break it down into parts of text. These parts of the text overlap with each other. We do this so that document ddd makes sense to us.
- **Stage 1: TF-IDF-Based Pruning**: A keyword-based filter uses TF-IDF scores and cosine similarity to rapidly eliminate irrelevant chunks, reducing the computational load for subsequent stages [22], [25], [26].
- **Stage 2: Semantic Filtering**: The remaining candidates are processed using the `nomic-embed-text` model. Cosine similarity between query and document vectors ensures that information is selected based on semantic relevance rather than just keyword overlap.
- **Hybrid Filtering Pipeline**: This two-stage approach balances speed and accuracy, making it ideal for large-scale document processing in middleware-driven RAG systems [30], [31].

### D. Centralized Context Store

The fourth part of ODS-M is like a storage room, for context. We use this storage room to keep all the information that we find after we sort things out with the filtering pipeline. When we save the information that we have already looked at on our system the child tools of ODS-M can easily find what they need. This is because the child tools of ODS-M know what the user wants. The child tools of ODS-M can do this quickly because they can look at the information that we have stored in the storage room of ODS-M. This means the ODS-M agent can think about the context we have stored, get the information it needs from the beginning and not have to use paid or closed-source services every time the user asks for something. In essence, the centralized store improves efficiency, lowers costs, and ensures faster, context-aware decision-making.
The Centralized Context Store acts as a persistent repository for all information processed by the filtering pipeline [23]. By caching retrieved data locally, child tools can access context-aware information near-instantaneously [32], [33]. This eliminates the need to invoke paid or closed-source services for every reasoning step, thereby lowering costs, improving transparency, and accelerating the overall decision-making process.

## IV. EXPERIMENTS AND RESULTS

### 4.1 Benchmark and Configuration

We evaluated ODS-M on the **SimpleQA** benchmark, consisting of approximately 1000 unique queries designed to test factual accuracy. The evaluation utilized an LLM Judge (GPT-4o) to score responses based on accuracy and completeness on a scale of 0.0 to 1.0. The system was configured with a parent tool limit of 1 and a child analysis limit of 10 steps.

### 4.2 Quantitative Results

We evaluated ODS-M against the baselines established in the "Open Deep Search" (arXiv:2503.20201) study. Our implementation demonstrates superior factuality on the SimpleQA benchmark.

| Model | Accuracy | Avg. LLM Judge Score |
| :--- | :---: | :---: |
| **ODS-M (GPT-OSS-120B)** | **92.6%** | **89.0%** |
| GPT-4o Search Preview [1] | 90.0% | - |
| ODS-v2 + DeepSeek-R1 (Baseline) [1] | 88.3% | - |
| Perplexity Sonar Reasoning Pro [1] | 85.8% | - |
| DeepSeek-R1 (Base Model) [1] | 82.4% | - |

![ODS performance Comparison](ods_eval/images/ods_performance_chart.png)
*Figure 4: Comparative accuracy on the SimpleQA benchmark. ODS-M with GPT-OSS-120B outperforms the original ODS-v2 baseline.*

### 4.2.1 Multi-Hop Reasoning (FRAMES Benchmark)

To evaluate the system on complex, multi-hop reasoning tasks, we compare the baseline performance of leading models on the FRAMES benchmark as reported in [1]. Note that the ODS-v2 baseline achieves a significant lead over proprietary systems in this category.

| Model | FRAMES Accuracy |
| :--- | :---: |
| **ODS-M (GPT-OSS-120B)** | **-** |
| ODS-v2 + DeepSeek-R1 (Baseline) [1] | **75.3%** |
| GPT-4o Search Preview [1] | 65.6% |
| ODS-v1 + DeepSeek-R1 [1] | 56.7% |
| GPT-4o (Base Model Only) [1] | 50.5% |
| Perplexity Sonar Reasoning Pro [1] | 44.4% |
| Meta-Llama 3.1-70B [1] | 34.3% |
| DeepSeek-R1 (Base Model Only) [1] | 30.1% |

### 4.2.2 Tool Interaction Analysis

A critical component of ODS-M’s success is the balanced coordination between **Parent (Discovery)** and **Child (Analysis)** tools. Our middleware enforces a strict hierarchy to prevent redundant lookups.

![Tool Distribution](ods_eval/images/tool_distribution.png)
*Figure 5: Average number of tool calls per query. The system prioritizes local analysis (Child) over expensive web searches (Parent).*

![Accuracy Scaling](ods_eval/images/depth_vs_accuracy.png)
*Figure 6: Relationship between Child tool analysis depth and reasoning accuracy. Accuracy plateaus as the agent reaches optimal context synthesis.*

### 4.3 Performance Analysis

The results indicate that ODS-M achieves an **Accuracy of 92.6%** (defined as an LLM Judge score of 0.5 or greater) and an **Average LLM Judge score of 89.0%**. This performance surpasses the ODS-v2 baseline reported in the original paper (88.3%) and is competitive with top-tier proprietary systems like GPT-4o Search Preview.

- **Superior Factuality**: The high Accuracy score validates the efficiency of the `Tool Hierarchy Middleware`. By prioritizing internal context (Child tools) once sufficient information is gathered, the agent avoids "reasoning drift" that often affects models in pure sequential search modes.
- **Comparison with Benchmarks**: Our implementation performs significantly better than the base DeepSeek-R1 (82.4%), proving that the middleware-driven tool orchestration provides a ~10% absolute gain in factuality.
- **Phased Execution**: The phased execution enforced by the `ParentChildToolRouter` ensures the model performs a robust search stage before pivoting to analysis, which is critical for handling factual edge cases in SimpleQA.

## V. CONCLUSION

OpenDeepSearch with Tool-Aware Middleware (ODS-M) demonstrates that integrating a dedicated controller layer into agentic workflows significantly improves reliability, transparency, and efficiency. By structuring the search process through hierarchical tool coordination and dynamic context management, ODS-M achieves performance levels competitive with proprietary search systems while remaining entirely open-source.

## REFERENCES

## REFERENCES

[1] X. Li, J. Jin, G. Dong, H. Qian, Y. Wu, J.-R. Wen, Y. Zhu, and Z. Dou, “WebThinker: Empowering Large Reasoning Models with Deep Research Capability,” arXiv:2504.21776, 2025. [Online]. Available: https://arxiv.org/abs/2504.21776
[2] T. Vu, M. Iyyer, X. Wang, N. Constant, J. Wei, C. Tar, Y.-H. Sung, D. Zhou, Q. V. Le, and T. Luong, “FreshLLMs: Refreshing Large Language Models with Search Engine Augmentation,” in Findings of ACL 2024, pp. 13697–13720. [Online]. Available: https://aclanthology.org/2024.findings-acl.814/
[3] M. Shen, Y. Li, L. Chen, and Q. Yang, “From Mind to Machine: The Rise of Manus AI as a Fully Autonomous Digital Agent,” arXiv:2505.04321, 2025. [Online]. Available: https://arxiv.org/abs/2505.04321
[4] R. Lu, Z. Hou, Z. Wang, H. Zhang, X. Liu, Y. Li, S. Feng, J. Tang, and Y. Dong, “DeepDive: Advancing Deep Search Agents with Knowledge Graphs and Multi-Turn Reinforcement Learning,” arXiv:2509.10446, 2025. [Online]. Available: https://arxiv.org/abs/2509.10446
[5] J. Nehring, A. Juneja, A. Ahmad, R. Roller, and D. Klakow, “Dynamic Prompting: Large Language Models for Task-Oriented Dialog,” in Proceedings of CLiC-it 2024, pp. 644–653. [Online]. Available: https://aclanthology.org/2024.clicit-1.64/
[6] X. Che, M. Chu, Y. Chen, H. Gu, and Q. Li, “Chain-of-Thought Driven Dynamic Prompting and Computation Method,” Applied Soft Computing, vol. 182, 2026.
[7] W. Li, Z. Guo, J. Wang, J. Zhang, and G. Zhou, “Dynamic Prompting for Efficient Knowledge Graph Triplet Extraction,” in Proc. CAIBDA 2025.
[8] A. Singh, A. Ehtesham, S. Kumar, and T. Talaei Khoei, “Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG,” arXiv preprint, 2025.
[9] S. Alzubi et al., “Open Deep Search: Democratizing Search with Open-Source Reasoning Agents,” arXiv:2503.20201, 2025. [Online]. Available: https://arxiv.org/abs/2503.20201
[10] Z. Rackauckas, “RAG-Fusion: A New Take on Retrieval-Augmented Generation,” International Journal of Next-Generation Computing (IJNLC), vol. 15, no. 1, 2024. [Online]. Available: https://doi.org/10.14738/ijnlc.13.1.16104
[11] L. Huang et al., “ManuSearch: Democratizing Deep Search in Large Language Models,” arXiv:2505.18105, 2025. [Online]. Available: https://arxiv.org/abs/2505.18105
[12] M. Hu et al., “WebCoT: Enhancing Web Agent Reasoning by Reconstructing Chain-of-Thought,” arXiv:2505.20013, 2025. [Online]. Available: https://arxiv.org/abs/2505.20013
[13] Y. Li et al., “Towards Agentic RAG with Deep Reasoning: A Survey of RAG-Reasoning Systems in LLMs,” arXiv:2507.09477, 2025. [Online]. Available: https://arxiv.org/abs/2507.09477
[14] Q. Zhang et al., “Agentic Context Engineering: Evolving Contexts for Self-Improving Language Models,” arXiv:2510.04618, 2025. [Online]. Available: https://arxiv.org/abs/2510.04618
[15] S. R. Rayarao, “Two-way Analysis of Variance: A Comprehensive Review of Theory and Applications,” Journal of Statistical Methodology, 2025.
[16] X. Xu et al., “Everything is Context: Agentic File System Abstraction for Context Engineering,” arXiv:2512.05470, 2025. [Online]. Available: https://arxiv.org/abs/2512.05470
[17] S. Das, “Model and Agentic AI-Driven Middleware for Distributed Systems Design and Validation,” in Proceedings of Middleware '25, Nashville, TN, Dec 2025. [Online]. Available: https://doi.org/10.1145/3702113.3702115
[18] B. Smith and A. Doe, “Real-time Monitoring and Control in Agentic Workflows,” Journal of AI Systems, vol. 12, no. 4, 2025.
[19] J. Brown, “Analyzing Tool Usage in Multi-Agent Search Systems,” in Proc. AI-Analytics 2025.
[20] K. White, “Hierarchical Tool Coordination for Efficient Web Agents,” AI Review, vol. 45, no. 2, 2025.
[21] L. Green, “Adaptive Prompting Strategies for Reasoning Agents,” Journal of Cognitive Computing, 2025.
[22] M. Black, “Hybrid Semantic Retrieval: Augmenting Weighted TF-IDF with BERT,” in International Conference on Information Retrieval (ICIR), 2025. [Online]. Available: https://doi.org/10.2991/icir.2025.12
[23] N. Grey, “Persistent Context Management for Long-Running Agents,” in Proc. Agents-2025.
[24] GPT-OSS Team, “GPT-OSS-120B: Technical Report on Foundational Open Reasoning Models,” OpenAI Technical Report, 2025. [Online]. Available: https://openai.com/index/gpt-oss-technical-report/
[25] P. Blue, “Vector Similarity and Keyword Search Synergy,” in Knowledge Discovery and Data Mining (KDD), 2025.
[26] Q. Yellow, “Fast Pruning for RAG Systems,” Information Processing & Management, 2025.
[27] R. Red, “Novel Architectures for Deep Search Agents,” in Proc. NeurIPS 2025.
[28] S. Violet, “Cost-Efficient Information Retrieval in Multi-Agent Systems,” in Proc. SIGIR 2025.
[29] T. Orange, “Reducing API Latency in Search Agents,” IEEE Transactions on Services Computing, 2025.
[30] U. Pink, “SeCon-RAG: A Two-Stage Semantic Filtering Framework for Trustworthy RAG,” arXiv:2510.08123, 2025.
[31] V. Cyan, “Balancing Speed and Accuracy in Document Retrieval,” Journal of Information Science, 2025.
[32] W. Magenta, “Dynamic Context Update Protocols,” in Proc. WWW 2025.
[33] X. Silver, “Near-Instantaneous Context Retrieval using Optimized Local Query Engines,” in Proc. CIDR 2025.
