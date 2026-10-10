// Case-study content retained from the existing portfolio.
export const anieshPrep = {
  "problem": "Reading documentation is only a starting point for architectural decisions. Learners need to apply concepts to realistic scenarios, weigh credible alternatives, and identify which constraints make one approach a better fit.",
  "built": "I’m Aniesh Kumar, founder of Aniesh Prep. I designed and built the current one-track MVP with AI assistance for Claude Certified Architect – Foundations preparation. It brings original scenarios, authored explanations, timed mock exams and saved progress into one study workspace. Email/password or Google sign-in links saved progress to each learner’s account.\n\nAfter practice answers, the optional Claude-powered Architecture Lens explains the submitted choice and explores how changed constraints affect the architectural decision. Additional cloud and AI certification tracks are planned, not currently available.",
  "capabilities": [
    "Practice questions for testing knowledge",
    "Timed mock exams",
    "Email/password and Google sign-in",
    "Saved, account-specific progress",
    "Optional Claude-powered Architecture Lens after practice answers"
  ],
  "buildNote": "I revised the practice questions to test architectural judgment through realistic alternatives. In the renewal scenario, a fixed workflow and a tool-using agent are both credible approaches; repeatable calculations and a consistent audit trail make the workflow the better fit. The tradeoff was requiring more reasoning without making the answer ambiguous.\n\nWith AI assistance, I checked the alternatives against official documentation and reviewed competing answers. Automated checks covered answer selection, scoring, mock exams, and compatibility with historical attempts; earlier versions and recorded scores are preserved. These checks establish content and application consistency, not learning effectiveness. Next, I want learners to select an answer, explain the deciding constraint, and flag any alternative that still seems equally reasonable.",
  "productDirection": "The current release covers one certification track. I intend to expand into additional cloud and AI certifications after validating learner usefulness and assessment quality. Learner outcomes and commercial demand have not yet been established.",
  "disclaimer": "Independent product. Not affiliated with or endorsed by Anthropic."
} as const;
