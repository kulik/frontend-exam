const botReplies = [{answer:"Wow!", suggestions: ["That's amaizing", "Right", "YEP"]},
    {answer: "Fascinating, please do go on", suggestions: ["Sure", "Let's start", "No way", "Are you sure?"]},
    {answer: "Amazing!", suggestions:["Really?", "Got you", "Thanx!!!"]},
    {answer: "If you say so...", suggestions:["Will do It", "Any Concerns"]}];

export const getBotReply = () => botReplies[Math.floor(Math.random() * botReplies.length)].answer;

export const getSuggestions = (message: string): string[] | undefined => botReplies.find(value => value.answer === message)?.suggestions;
