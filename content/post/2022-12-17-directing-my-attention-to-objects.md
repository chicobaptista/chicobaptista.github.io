---
title: Directing my attention to Objects
date: 2022-12-17
categories: ["object-oriented programming"]
tags: ["clean code", "business value", "programming paradigms"]
comments: true
---

Lately at my job I've started to take on some more technical leadership duties. These duties vary a lot between different companies and tech stacks, as do the role of a Tech Lead itself. In my case, it includes:

- Setting code styles and best practices
- Developing a quickstart chassis repo to serve as a technical reference for new and ongoing projects
- Conducting code reviews and giving feedback
- Mentoring junior developers
- Participating in design and architecture refinement sessions

All of those things have one crucial commonality: they require strong communication skills.

Depending on your experience with programming and programmers, that may sound weird or painfully obvious.

Writing code that a machine can understand is easy, but writing code that humans can understand is a craft all on its own. So, programming and software engineering as a whole is about communicating with your fellow humans. Communicating requirements, business logic, problem-solving approaches, and lessons learned.

Much can be (and has been) written about the importance of business to software programming. Maybe I'll even write about it sometime. For now, I'll only say that your application exists primarily to solve a business need, and all the code you write should revolve around that need.

Now that we've briefly mentioned _why_ one writes code, let's get to the meat of this series, _how_ should one write code? One mantra that has guided me through my programming journey is:

> "Write code in a clear, concise manner. It will help the next person reading it in the coming weeks, months, or years. And there's a big chance that that person is future you."

From my Academia days, I've learned that through teaching a subject, you start to understand it at a deeper level. It forces you to comprehend it, look at it from multiple views, and consider its implications.

With that in mind, I've decided to write a bit about code development paradigms, so that I may _really_ think through them, and be better prepared to communicate with my teammates.

In that context, most of our code is written from an Object Oriented perspective, and as such, that will be my starting point. I'll try to get to Functional Programming at some point and do some comparative analysis between these two as the most influential paradigms in current software engineering. I'll also try to explore some historical - such as Structured Programming - and specialized paradigms - such as Reactive Programming, Data-Oriented Programming, and Literate Programming.

So, my current work-in-progress outline for this series is:

1. Introduction to Object-Oriented Programming
1. Clean Code
1. SOLID principles
1. Clean Architecture
1. Domain-Driven Design
