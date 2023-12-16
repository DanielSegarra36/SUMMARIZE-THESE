// TEST URL: https://youtu.be/7h732qLxtAk?si=IWa-lrzU9vxLhvf5
export const AI_REQUEST_WITH_PROMPT = {
  urls: ["https://youtu.be/7h732qLxtAk?si=IWa-lrzU9vxLhvf5"],
  language: "en",
  model: "gpt-3.5-turbo-1106",
  prompt: "is my job as an html/css/js bootcamp teacher at risk?",
};

export const AI_RESPONSE_WITH_PROMPT = {
  videos: [
    {
      AI_summary:
        "It's understandable that you might be feeling concerned about the potential impact of AI on the programming industry. Indeed, the rise of AI-powered code assistants and their increasing capability to generate code and provide suggestions does raise questions about the future role of programmers.\n\nHowever, it's important to consider that these AI tools are currently viewed as complementary to human developers rather than replacements. While they can aid in code generation and provide assistance, they still lack the comprehensive understanding, creativity, and problem-solving abilities that human programmers possess.\n\nFurthermore, the role of a teacher in a bootcamp setting extends beyond simply teaching the technical aspects of coding. Your role likely involves mentoring and guiding students, helping them develop problem-solving skills, critical thinking, and fostering a deep understanding of programming concepts. These are aspects that AI, at least for the foreseeable future, cannot replicate.\n\nThe advancements in AI tools may lead to changes in the industry and the skills that are in demand, but it's unlikely that the need for human expertise and guidance in the teaching and mentoring of aspiring developers will diminish significantly in the near future.\n\nIt's also worth noting that the field of programming is incredibly broad and constantly evolving. While AI may automate certain routine tasks, there will always be opportunities for skilled programmers to drive innovation and solve complex problems, particularly in areas that require human understanding, creativity, and empathy.\n\nSo, while it's important to stay informed about the developments in AI and their potential implications, it's also essential to remain optimistic about the enduring value of human expertise and the unique role of educators in the programming field.",
      channelId: "UCsBjURrPoezykLs9EqgamOA",
      channelTitle: "Fireship",
      description:
        "Learn about the latest updates to GitHub Copilot and its new GPT-4 upgrade. Also, take a first look at Google's new Duet AI and JetBrains AI Assistant. \n\n#ai #programming #thecodereport\n\n\ud83d\udcac Chat with Me on Discord\n\nhttps://discord.gg/fireship\n\n\ud83d\udd17 Resources\n\n- No programmers in 5 years https://www.reddit.com/r/singularity/comments/14pmfxx/in_five_years_there_will_be_no_programmers_left/\n- Duet AI Launch https://cloud.google.com/duet-ai\n- Google Gemini first Look https://youtu.be/q5qAVmXSecQ\n- Tech Trends 2024 https://youtu.be/vyQv563Y-fk\n\n\ud83d\udd25 Get More Content - Upgrade to PRO\n\nUpgrade at https://fireship.io/pro\nUse code YT25 for 25% off PRO access \n\n\ud83c\udfa8 My Editor Settings\n\n- Atom One Dark \n- vscode-icons\n- Fira Code Font\n\n\ud83d\udd16 Topics Covered\n\n- Updates to GitHub Copilot\n- Alternatives to GitHub Copilot\n- Does Copilot use GPT-4\n- Will programmers be obsolete in 5 years? \n- Google Duet first look\n- JetBrains AI assistant first look",
      language: "en",
      publishedAt: "2023-12-14T21:11:41Z",
      thumbnailUrl: "https://i.ytimg.com/vi/7h732qLxtAk/maxresdefault.jpg",
      title: "AI coding assistants just leveled up, again\u2026",
      transcript_text_only:
        "recently the founder of stability AI made an ominous prediction there are no programmers in 5 years there are no programmers in 5 years just 2 years ago nobody was using AI code assistance but 2 years after GitHub co-pilot beta was launched we're now here 41% of all code on GitHub right now is AI generated that's a crazy claim and I'd be highly skeptical of it but I'd believe it next year after looking at these crazy new updates in GitHub co-pilot the launch of Google's duet Ai and the launch of jet brains AI all of which just happened in the last few days it is December 14th 2023 and you're watching the code report before we get into this video first a disclaimer the tools we're about to look at may make you want to drop out of your computer science degree and switch your major to Plumbing but that would be dumb because they're also coming out with AI powered smart toilets but more importantly pessimism leads to weakness optimism leads to power it's possible programmers won't exist in 5 years but it's also possible that programmers will get paid five times as much in 5 years because everyone got discouraged and quit computer science in 2023 okay so now that we have that optimism out of the way what we're looking at today is the next generation of AI tooling but as of today that's all it is it's not capable of replacing any human yet the big announcement yesterday is that duet AI from Google is now generally available it can be installed into your IDE and provides access to an AI chatbot you can chat in a dedicated panel or get inline suggestions and intellisense just like Hub co-pilot but unlike co-pilot it's totally free well at least until next year before it becomes $19 per month its real killer feature though is its integration with Google Cloud it allows you to link a cloud project and then manage all the resources directly from the IDE as well as access to documentation and generate code samples for your project and it's also worth noting that Google's working on its own cloud IDE based on VSS code called project idx which is not only integrated with this AI but also has things like IOS and Android emulators built in that run on a cloud VM so you don't have to download and configure a bunch of sdks now currently its underlying AI model is not Gemini Ultra which is claimed to be the best AI programmer out there if that's true duet has the potential to be a GitHub co-pilot killer in the future but speaking of co-pilot Killers jet brain also just announced their new co-pilot killer in December it is possible to use co-pilot in Jeet brains idees but the experience has never been that great it just feels like it gets in the way more so than it does in vs code the AI assistant feels much more natural and well integrated and can do things like chat refactoring write documentation write unit tests offer companionship generate commit messages and so on but with a price tag of $10 per month it costs nearly as much as the IDE itself and the initial reviews are fairly mixed what's interesting though is that it's powered by something called Jeet brains AI service and this allows the chatbot to be powered by multiple different models there's not a ton of detail around this but it's an extremely powerful idea with co-pilot and duet you have GPT 4 and Gemini but with jet brains you could hypothetically hook up your own fine-tune model like maybe the open source code Llama Or mistol canbin with the billions of lines of code at your company allowing the AI to provide predictable responses based on your coding conventions that's pretty cool but at the same time GitHub co-pilot just leveled up big time previously it was based on GPT 3.5 but now it's using GPT 4 it now has a dedicated chat window so you basically have chat GPT in your IDE but what's really amazing is that it has this workspace command that allows you to search all the code files in your workspace to write code with the proper context in your project so far I've actually found it most useful for explaining code When jumping into an unfamiliar project in other words it makes it way easier to figure out what the hell is going on with this guy's spaghetti code it also now writes your commit messages and is also available in the terminal to explain and refactor commands but there's one big problem with these AI tools sometimes they spit out suggest sus from code and repos that you're not allowed to use and I really can't go back to jail but luckily co-pilot will now search across billions of files in GitHub and will return the licenses on any similar code and that means you can be relatively confident that you're not stealing someone's code well I mean you are stealing it but you're allowed to overall these changes are pretty amazing and extremely useful these tools still can't build complex projects out of nowhere but the big question is where are we going from here currently co-pilot doesn't run your code or create new files but I think we're going there eventually like you might be able to just take your client's requirements and say say hey build this thing in Django then co-pilot will run the commands create the files and run the unit tests required to make that a reality then you'll continue fine-tuning it with multiple shots or prompts until it builds exactly what you're looking for without ever touching a line of code another missing piece is image data there are already tools that can convert a screenshot into code and as these tools get better we'll likely see them integrated directly in the IDE now even if this stuff does get really good I wouldn't be discouraged as a programmer right now is one hell of a time to be alive code is just a means to an end even if programming becomes obsolete there will still be Engineers pushing the limits of whatever comes next like we still need to develop robots brain chips quantum computers euthanasia pods laser guns space travel time travel and all sorts of other sci-fi and it's going to take some good old-fashioned problemsolving Engineers to do that so stay optimistic this has been the code report thanks for watching and I will see you in the next one ",
      transcript_with_timestamps: [
        {
          duration: 3.839,
          start: 0.12,
          text: "recently the founder of stability AI",
        },
        {
          duration: 3.36,
          start: 2.2,
          text: "made an ominous prediction there are no",
        },
        {
          duration: 4.161,
          start: 3.959,
          text: "programmers in 5 years there are no",
        },
        {
          duration: 4.68,
          start: 5.56,
          text: "programmers in 5 years just 2 years ago",
        },
        {
          duration: 3.96,
          start: 8.12,
          text: "nobody was using AI code assistance but",
        },
        {
          duration: 4.279,
          start: 10.24,
          text: "2 years after GitHub co-pilot beta was",
        },
        {
          duration: 4.4,
          start: 12.08,
          text: "launched we're now here 41% of all code",
        },
        {
          duration: 3.481,
          start: 14.519,
          text: "on GitHub right now is AI generated",
        },
        {
          duration: 3.12,
          start: 16.48,
          text: "that's a crazy claim and I'd be highly",
        },
        {
          duration: 3.199,
          start: 18.0,
          text: "skeptical of it but I'd believe it next",
        },
        {
          duration: 3.599,
          start: 19.6,
          text: "year after looking at these crazy new",
        },
        {
          duration: 4.041,
          start: 21.199,
          text: "updates in GitHub co-pilot the launch of",
        },
        {
          duration: 3.801,
          start: 23.199,
          text: "Google's duet Ai and the launch of jet",
        },
        {
          duration: 3.84,
          start: 25.24,
          text: "brains AI all of which just happened in",
        },
        {
          duration: 4.599,
          start: 27.0,
          text: "the last few days it is December 14th",
        },
        {
          duration: 4.2,
          start: 29.08,
          text: "2023 and you're watching the code report",
        },
        {
          duration: 3.12,
          start: 31.599,
          text: "before we get into this video first a",
        },
        {
          duration: 3.08,
          start: 33.28,
          text: "disclaimer the tools we're about to look",
        },
        {
          duration: 3.281,
          start: 34.719,
          text: "at may make you want to drop out of your",
        },
        {
          duration: 3.519,
          start: 36.36,
          text: "computer science degree and switch your",
        },
        {
          duration: 3.399,
          start: 38.0,
          text: "major to Plumbing but that would be dumb",
        },
        {
          duration: 2.961,
          start: 39.879,
          text: "because they're also coming out with AI",
        },
        {
          duration: 3.48,
          start: 41.399,
          text: "powered smart toilets but more",
        },
        {
          duration: 3.92,
          start: 42.84,
          text: "importantly pessimism leads to weakness",
        },
        {
          duration: 3.801,
          start: 44.879,
          text: "optimism leads to power it's possible",
        },
        {
          duration: 3.56,
          start: 46.76,
          text: "programmers won't exist in 5 years but",
        },
        {
          duration: 3.719,
          start: 48.68,
          text: "it's also possible that programmers will",
        },
        {
          duration: 3.28,
          start: 50.32,
          text: "get paid five times as much in 5 years",
        },
        {
          duration: 3.561,
          start: 52.399,
          text: "because everyone got discouraged and",
        },
        {
          duration: 3.72,
          start: 53.6,
          text: "quit computer science in 2023 okay so",
        },
        {
          duration: 2.68,
          start: 55.96,
          text: "now that we have that optimism out of",
        },
        {
          duration: 3.36,
          start: 57.32,
          text: "the way what we're looking at today is",
        },
        {
          duration: 3.719,
          start: 58.64,
          text: "the next generation of AI tooling but as",
        },
        {
          duration: 3.519,
          start: 60.68,
          text: "of today that's all it is it's not",
        },
        {
          duration: 3.641,
          start: 62.359,
          text: "capable of replacing any human yet the",
        },
        {
          duration: 3.521,
          start: 64.199,
          text: "big announcement yesterday is that duet",
        },
        {
          duration: 3.4,
          start: 66.0,
          text: "AI from Google is now generally",
        },
        {
          duration: 4.2,
          start: 67.72,
          text: "available it can be installed into your",
        },
        {
          duration: 4.28,
          start: 69.4,
          text: "IDE and provides access to an AI chatbot",
        },
        {
          duration: 3.68,
          start: 71.92,
          text: "you can chat in a dedicated panel or get",
        },
        {
          duration: 4.079,
          start: 73.68,
          text: "inline suggestions and intellisense just",
        },
        {
          duration: 3.76,
          start: 75.6,
          text: "like Hub co-pilot but unlike co-pilot",
        },
        {
          duration: 3.441,
          start: 77.759,
          text: "it's totally free well at least until",
        },
        {
          duration: 3.52,
          start: 79.36,
          text: "next year before it becomes $19 per",
        },
        {
          duration: 3.44,
          start: 81.2,
          text: "month its real killer feature though is",
        },
        {
          duration: 3.599,
          start: 82.88,
          text: "its integration with Google Cloud it",
        },
        {
          duration: 3.479,
          start: 84.64,
          text: "allows you to link a cloud project and",
        },
        {
          duration: 3.441,
          start: 86.479,
          text: "then manage all the resources directly",
        },
        {
          duration: 3.721,
          start: 88.119,
          text: "from the IDE as well as access to",
        },
        {
          duration: 3.519,
          start: 89.92,
          text: "documentation and generate code samples",
        },
        {
          duration: 3.319,
          start: 91.84,
          text: "for your project and it's also worth",
        },
        {
          duration: 3.96,
          start: 93.439,
          text: "noting that Google's working on its own",
        },
        {
          duration: 4.481,
          start: 95.159,
          text: "cloud IDE based on VSS code called",
        },
        {
          duration: 4.561,
          start: 97.399,
          text: "project idx which is not only integrated",
        },
        {
          duration: 4.64,
          start: 99.64,
          text: "with this AI but also has things like",
        },
        {
          duration: 4.08,
          start: 101.96,
          text: "IOS and Android emulators built in that",
        },
        {
          duration: 3.68,
          start: 104.28,
          text: "run on a cloud VM so you don't have to",
        },
        {
          duration: 4.039,
          start: 106.04,
          text: "download and configure a bunch of sdks",
        },
        {
          duration: 4.199,
          start: 107.96,
          text: "now currently its underlying AI model is",
        },
        {
          duration: 3.841,
          start: 110.079,
          text: "not Gemini Ultra which is claimed to be",
        },
        {
          duration: 3.681,
          start: 112.159,
          text: "the best AI programmer out there if",
        },
        {
          duration: 4.0,
          start: 113.92,
          text: "that's true duet has the potential to be",
        },
        {
          duration: 3.72,
          start: 115.84,
          text: "a GitHub co-pilot killer in the future",
        },
        {
          duration: 3.199,
          start: 117.92,
          text: "but speaking of co-pilot Killers jet",
        },
        {
          duration: 3.28,
          start: 119.56,
          text: "brain also just announced their new",
        },
        {
          duration: 3.441,
          start: 121.119,
          text: "co-pilot killer in December it is",
        },
        {
          duration: 3.68,
          start: 122.84,
          text: "possible to use co-pilot in Jeet brains",
        },
        {
          duration: 3.44,
          start: 124.56,
          text: "idees but the experience has never been",
        },
        {
          duration: 3.48,
          start: 126.52,
          text: "that great it just feels like it gets in",
        },
        {
          duration: 3.879,
          start: 128.0,
          text: "the way more so than it does in vs code",
        },
        {
          duration: 3.68,
          start: 130.0,
          text: "the AI assistant feels much more natural",
        },
        {
          duration: 3.761,
          start: 131.879,
          text: "and well integrated and can do things",
        },
        {
          duration: 4.12,
          start: 133.68,
          text: "like chat refactoring write",
        },
        {
          duration: 4.319,
          start: 135.64,
          text: "documentation write unit tests offer",
        },
        {
          duration: 4.36,
          start: 137.8,
          text: "companionship generate commit messages",
        },
        {
          duration: 4.0,
          start: 139.959,
          text: "and so on but with a price tag of $10",
        },
        {
          duration: 3.76,
          start: 142.16,
          text: "per month it costs nearly as much as the",
        },
        {
          duration: 3.601,
          start: 143.959,
          text: "IDE itself and the initial reviews are",
        },
        {
          duration: 3.039,
          start: 145.92,
          text: "fairly mixed what's interesting though",
        },
        {
          duration: 3.44,
          start: 147.56,
          text: "is that it's powered by something called",
        },
        {
          duration: 3.841,
          start: 148.959,
          text: "Jeet brains AI service and this allows",
        },
        {
          duration: 3.12,
          start: 151.0,
          text: "the chatbot to be powered by multiple",
        },
        {
          duration: 3.04,
          start: 152.8,
          text: "different models there's not a ton of",
        },
        {
          duration: 3.88,
          start: 154.12,
          text: "detail around this but it's an extremely",
        },
        {
          duration: 4.28,
          start: 155.84,
          text: "powerful idea with co-pilot and duet you",
        },
        {
          duration: 3.68,
          start: 158.0,
          text: "have GPT 4 and Gemini but with jet",
        },
        {
          duration: 3.6,
          start: 160.12,
          text: "brains you could hypothetically hook up",
        },
        {
          duration: 4.32,
          start: 161.68,
          text: "your own fine-tune model like maybe the",
        },
        {
          duration: 3.519,
          start: 163.72,
          text: "open source code Llama Or mistol canbin",
        },
        {
          duration: 2.959,
          start: 166.0,
          text: "with the billions of lines of code at",
        },
        {
          duration: 3.241,
          start: 167.239,
          text: "your company allowing the AI to provide",
        },
        {
          duration: 3.401,
          start: 168.959,
          text: "predictable responses based on your",
        },
        {
          duration: 3.92,
          start: 170.48,
          text: "coding conventions that's pretty cool",
        },
        {
          duration: 3.72,
          start: 172.36,
          text: "but at the same time GitHub co-pilot",
        },
        {
          duration: 4.119,
          start: 174.4,
          text: "just leveled up big time previously it",
        },
        {
          duration: 5.079,
          start: 176.08,
          text: "was based on GPT 3.5 but now it's using",
        },
        {
          duration: 4.601,
          start: 178.519,
          text: "GPT 4 it now has a dedicated chat window",
        },
        {
          duration: 4.121,
          start: 181.159,
          text: "so you basically have chat GPT in your",
        },
        {
          duration: 3.92,
          start: 183.12,
          text: "IDE but what's really amazing is that it",
        },
        {
          duration: 3.519,
          start: 185.28,
          text: "has this workspace command that allows",
        },
        {
          duration: 3.64,
          start: 187.04,
          text: "you to search all the code files in your",
        },
        {
          duration: 3.8,
          start: 188.799,
          text: "workspace to write code with the proper",
        },
        {
          duration: 3.199,
          start: 190.68,
          text: "context in your project so far I've",
        },
        {
          duration: 3.0,
          start: 192.599,
          text: "actually found it most useful for",
        },
        {
          duration: 3.64,
          start: 193.879,
          text: "explaining code When jumping into an",
        },
        {
          duration: 3.321,
          start: 195.599,
          text: "unfamiliar project in other words it",
        },
        {
          duration: 2.64,
          start: 197.519,
          text: "makes it way easier to figure out what",
        },
        {
          duration: 2.879,
          start: 198.92,
          text: "the hell is going on with this guy's",
        },
        {
          duration: 3.64,
          start: 200.159,
          text: "spaghetti code it also now writes your",
        },
        {
          duration: 4.0,
          start: 201.799,
          text: "commit messages and is also available in",
        },
        {
          duration: 3.641,
          start: 203.799,
          text: "the terminal to explain and refactor",
        },
        {
          duration: 3.481,
          start: 205.799,
          text: "commands but there's one big problem",
        },
        {
          duration: 3.999,
          start: 207.44,
          text: "with these AI tools sometimes they spit",
        },
        {
          duration: 3.84,
          start: 209.28,
          text: "out suggest sus from code and repos that",
        },
        {
          duration: 3.241,
          start: 211.439,
          text: "you're not allowed to use and I really",
        },
        {
          duration: 3.24,
          start: 213.12,
          text: "can't go back to jail but luckily",
        },
        {
          duration: 3.44,
          start: 214.68,
          text: "co-pilot will now search across billions",
        },
        {
          duration: 3.599,
          start: 216.36,
          text: "of files in GitHub and will return the",
        },
        {
          duration: 3.24,
          start: 218.12,
          text: "licenses on any similar code and that",
        },
        {
          duration: 3.041,
          start: 219.959,
          text: "means you can be relatively confident",
        },
        {
          duration: 3.0,
          start: 221.36,
          text: "that you're not stealing someone's code",
        },
        {
          duration: 3.04,
          start: 223.0,
          text: "well I mean you are stealing it but",
        },
        {
          duration: 3.72,
          start: 224.36,
          text: "you're allowed to overall these changes",
        },
        {
          duration: 3.68,
          start: 226.04,
          text: "are pretty amazing and extremely useful",
        },
        {
          duration: 3.159,
          start: 228.08,
          text: "these tools still can't build complex",
        },
        {
          duration: 3.2,
          start: 229.72,
          text: "projects out of nowhere but the big",
        },
        {
          duration: 3.321,
          start: 231.239,
          text: "question is where are we going from here",
        },
        {
          duration: 3.319,
          start: 232.92,
          text: "currently co-pilot doesn't run your code",
        },
        {
          duration: 3.16,
          start: 234.56,
          text: "or create new files but I think we're",
        },
        {
          duration: 2.56,
          start: 236.239,
          text: "going there eventually like you might be",
        },
        {
          duration: 2.64,
          start: 237.72,
          text: "able to just take your client's",
        },
        {
          duration: 3.28,
          start: 238.799,
          text: "requirements and say say hey build this",
        },
        {
          duration: 3.519,
          start: 240.36,
          text: "thing in Django then co-pilot will run",
        },
        {
          duration: 3.761,
          start: 242.079,
          text: "the commands create the files and run",
        },
        {
          duration: 3.761,
          start: 243.879,
          text: "the unit tests required to make that a",
        },
        {
          duration: 3.72,
          start: 245.84,
          text: "reality then you'll continue fine-tuning",
        },
        {
          duration: 3.2,
          start: 247.64,
          text: "it with multiple shots or prompts until",
        },
        {
          duration: 3.319,
          start: 249.56,
          text: "it builds exactly what you're looking",
        },
        {
          duration: 3.959,
          start: 250.84,
          text: "for without ever touching a line of code",
        },
        {
          duration: 3.36,
          start: 252.879,
          text: "another missing piece is image data",
        },
        {
          duration: 3.241,
          start: 254.799,
          text: "there are already tools that can convert",
        },
        {
          duration: 3.441,
          start: 256.239,
          text: "a screenshot into code and as these",
        },
        {
          duration: 3.64,
          start: 258.04,
          text: "tools get better we'll likely see them",
        },
        {
          duration: 3.519,
          start: 259.68,
          text: "integrated directly in the IDE now even",
        },
        {
          duration: 3.16,
          start: 261.68,
          text: "if this stuff does get really good I",
        },
        {
          duration: 3.041,
          start: 263.199,
          text: "wouldn't be discouraged as a programmer",
        },
        {
          duration: 3.28,
          start: 264.84,
          text: "right now is one hell of a time to be",
        },
        {
          duration: 3.6,
          start: 266.24,
          text: "alive code is just a means to an end",
        },
        {
          duration: 3.0,
          start: 268.12,
          text: "even if programming becomes obsolete",
        },
        {
          duration: 3.12,
          start: 269.84,
          text: "there will still be Engineers pushing",
        },
        {
          duration: 3.84,
          start: 271.12,
          text: "the limits of whatever comes next like",
        },
        {
          duration: 4.32,
          start: 272.96,
          text: "we still need to develop robots brain",
        },
        {
          duration: 4.76,
          start: 274.96,
          text: "chips quantum computers euthanasia pods",
        },
        {
          duration: 4.28,
          start: 277.28,
          text: "laser guns space travel time travel and",
        },
        {
          duration: 2.72,
          start: 279.72,
          text: "all sorts of other sci-fi and",
        },
        {
          duration: 2.8,
          start: 281.56,
          text: "it's going to take some good",
        },
        {
          duration: 3.84,
          start: 282.44,
          text: "old-fashioned problemsolving Engineers",
        },
        {
          duration: 3.76,
          start: 284.36,
          text: "to do that so stay optimistic this has",
        },
        {
          duration: 6.16,
          start: 286.28,
          text: "been the code report thanks for watching",
        },
        {
          duration: 4.32,
          start: 288.12,
          text: "and I will see you in the next one",
        },
      ],
      videoId: "7h732qLxtAk",
    },
  ],
};

// Test URL: https://youtu.be/fG2Byh85FSM?si=em7qvaM1CU2nObct
// English metadata, spanish audio & spanish generated transcript
// spanish generated transcript translated to english
export const TEST_EN_METADATA_ES_SUBS_AI_SUMMARY = {
  videos: [
    {
      AI_summary:
        "El texto que proporcionaste parece ser una transcripci\u00f3n de una entrevista al artista conocido como Bad Bunny, cuyo nombre real es Benito Mart\u00ednez. Durante la entrevista, \u00e9l comparte sus sentimientos y reflexiones sobre su carrera, su identidad y su experiencia en la gira. A continuaci\u00f3n, se destacan los conceptos y puntos clave mencionados por Mart\u00ednez:\n\n1. **Sentimiento durante la gira**: Mart\u00ednez siente un fuerte lazo con su p\u00fablico latinoamericano y menciona que actuar en Argentina fue uno de sus conciertos favoritos, incluso m\u00e1s emotivo que su actuaci\u00f3n en Nueva York en el Yankee Stadium.\n\n2. **Ritual antes de subir al escenario**: Describe su ritual de subir al escenario sin mirar al p\u00fablico y solo voltear a ver a la multitud una vez que est\u00e1 listo y sentado con su neverita, lo cual revela un momento de intimidad y preparaci\u00f3n mental antes de su actuaci\u00f3n.\n\n3. **Colaboraciones musicales**: Explica la l\u00f3gica detr\u00e1s de las colaboraciones en sus shows, las cuales se basan en la disponibilidad y la relevancia dentro de su repertorio. Tambi\u00e9n compara la colaboraci\u00f3n musical con un acto \u00edntimo y serio que tiene una significancia duradera.\n\n4. **Experiencias pasadas y su influencia**: Reflexiona sobre su humilde origen, su trabajo duro y las luchas econ\u00f3micas de su pasado, sugiriendo que estas experiencias han contribuido a su disciplina y gratitud por su \u00e9xito actual.\n\n5. **Planes futuros y pausa musical**: Anuncia que en 2023 planea tomarse un tiempo para s\u00ed mismo para disfrutar de su \u00e9xito, enfoc\u00e1ndose en su salud f\u00edsica y emocional.\n\n6. **Visi\u00f3n sobre el \u00e9xito**: Comparte que su objetivo nunca fue ser el m\u00e1s grande o el n\u00famero uno, sino simplemente hacer lo que ama y poder vivir de ello. Se muestra agradecido por la conexi\u00f3n que ha logrado con su audiencia.\n\n7. **Perspectiva sobre el \u00e9xito y la felicidad**: Mart\u00ednez destaca que disfruta de sus actuales actuaciones en estadios con miles de personas de la misma manera que disfrutaba presentarse ante peque\u00f1as audiencias al inicio de su carrera, lo que subraya una aut\u00e9ntica pasi\u00f3n por su arte m\u00e1s all\u00e1 del tama\u00f1o del p\u00fablico.\n\nAl resumir esta entrevista, es claro que Bad Bunny se siente emocionalmente conectado con su identidad y sus ra\u00edces, y que valora la autenticidad en su m\u00fasica y sus actuaciones. A pesar de su mete\u00f3rico ascenso a la fama, mantiene una perspectiva humilde y enfocada en la gratitud y el disfrute de su trabajo m\u00e1s que en la ambici\u00f3n desmedida.",
      channelId: "UCsVcseUYbYjldc-XgcsiEbg",
      channelTitle: "Billboard",
      description:
        "Bad Bunny talks to our Chief Content Officer of Latin Leila Cobo about his current tour, World's Hottest Tour, his favorite places to tour, how he approaches collaborations, when he wants to take a break from his career, reflects on his journey to the top and more! \n\nTo learn more about this story: \nhttps://www.billboard.com/music/latin/bad-bunny-billboard-top-artist-2022-concerts-interview-cover-story-1235182432/\n\n\u25ba\u25ba Subscribe for more music news: http://blbrd.cm/Proracf\n\u25ba\u25ba See our latest videos: http://blbrd.cm/xOgw6VQ\n\nAbout: Billboard is the world's most influential music media brand, with an unmatched authority among artists, fans and the industry. Billboard powers the ultimate global music destination and magazine, featuring unrivaled reporting on music news, issues and trends, the industry\u2019s definitive charts, encompassing the most complete and well respected database of charts across all music genres, and elite conferences and events which regularly convene the industry and consumers around important conversations. \n\nConnect with Billboard Online:\nVisit the website: http://blbrd.cm/s5w4vTm\nLikes us on Facebook: http://blbrd.cm/ks26yg5\nFollow us on Twitter: http://blbrd.cm/uRNqRoN \nFollow us on Instagram: http://blbrd.cm/6QaTrhn\n\n#BadBunny #WorldsHottestTour #BillboardCover \n\nBad Bunny Talks Touring, Taking A Break, Reflects On His Journey to The Top & More | Billboard Cover\n\nBillboard\nhttps://youtube.com/billboard",
      language: "en",
      publishedAt: "2022-12-08T16:24:30Z",
      thumbnailUrl: "https://i.ytimg.com/vi/fG2Byh85FSM/maxresdefault.jpg",
      title:
        "Bad Bunny Talks Touring, Taking A Break, Reflects On His Journey to The Top & More | Billboard Cover",
      transcript_text_only:
        "Yo dir\u00eda que en este punto de mi vida y de carrera es donde m\u00e1s centrado me siento me siento m\u00e1s claro de lo que de lo que soy de qui\u00e9n soy en cuesti\u00f3n a la industria musical Y qui\u00e9n eres Benito Mart\u00ednez hijo de [M\u00fasica] Hola Benito C\u00f3mo est\u00e1s bien y t\u00fa muy bien Bueno cuando primero Te entreviste est\u00e1bamos en Nueva York que acabas de tocar Yankee Stadium y ahora Estamos aqu\u00ed en Argentina en la mitad de la gira ha cambiado algo no creo que haya cambiado mucho Yo creo que el sentimiento quiz\u00e1s de la gira por el hecho de que ahora Estamos en Am\u00e9rica completa ac\u00e1 que iba mucho que no ven\u00eda se siente como si estuviera visitando familiares Que mucho tiempo no ve\u00edan y Argentina nacional locura en verdad mi concierto favorito de mi vida fue el s\u00e1bado pasado de tu vida entera sacando lo que es Puerto Rico que siempre lo saco aparte como que un sentimiento que no se compara Y por qu\u00e9 Benito porque me acuerdo que en Nueva York me dijiste que Nueva York y Yankee Stadium eran como tan viscerales no Nueva York es porque en Nueva York como Nueva York Yo amo a Nueva York y es como que ah\u00ed se juntan todas las comunidades latinas existentes en un solo lugar espec\u00edficamente mayormente boricua y dominicano que t\u00fa sabes que esos son familia para m\u00ed entonces yo creo que todo eso m\u00e1s la ciudad de Nueva York que de porci\u00f3n m\u00e1gica pues lo hace especial siempre Argentina ha sido cabr\u00f3n pero como que se me hab\u00eda olvidado No no es como un ritual pero cuando yo entro a la tarima yo entro sin mirar al p\u00fablico yo entro caminando derecho con la neverita pap\u00e1 pap\u00e1 pap\u00e1 mirando el piso mirando el piso que no me vaya a caer pongo la neverita me siento o sea le estoy dando la espalda al p\u00fablico Me siento con un respiro y hago y ah\u00ed Es que miro la multitud y siempre es como que no importa donde sea siempre es como un pu\u00f1o como que el  C\u00f3mo escoges A qui\u00e9n invitas en cada show trato de invitar a quien yo sienta que que est\u00e1 disponible que tengamos una colaboraci\u00f3n dentro de del tracklist de lo que estoy cantando tambi\u00e9n corr\u00edgeme si estoy mal pero con ibi no tienes canci\u00f3n No s\u00e9 con Ivi no tengo canci\u00f3n como tal Pero si tengo una versi\u00f3n un remix que se le hizo que fue un remix especial que se le hizo a yo perreo sola que fue con Ivy Queen con \u00e9l Y entonces ese remix yo lo hice m\u00e1s en un modo de homenaje tambi\u00e9n y de respeto a la mujer y a ella espec\u00edficamente [M\u00fasica] Considero que la primera el \u00faltimo tour del mundo fue un poco m\u00e1s especial en el t\u00e9rmino sentimental emocional pero el World me lo ha disfrutado m\u00e1s me la he disfrutado m\u00e1s he salido Por lo general yo no salgo para ning\u00fan lado en esta gira tanto en los Estados Unidos como como Am\u00e9rica me la he compartido con hasta con el club con los bailarines con esa l\u00edo muy divertido he ido a lugares he ido a comer restaurantes no trato de estar pensando en cosas sino como que de disfrutarme el momento cantar con la gente c\u00f3mo voy a dio con la presi\u00f3n o t\u00fa Sencillamente lo haces me siento un control yo creo que ahora mismo todos los a\u00f1os es que tambi\u00e9n llevo Cu\u00e1ntos seis cinco a\u00f1os uno va cogiendo experiencia tambi\u00e9n y ha superado muchas cosas tambi\u00e9n he sanado muchas cosas de mi vida etc\u00e9tera cosas que quiz\u00e1s ese el giro que que dio como siempre he dicho el giro que dio mi vida entera es muy r\u00e1pido es un proceso entonces Pues yo dir\u00eda que en este punto de mi vida y de carrera es donde m\u00e1s centrado me siento me siento m\u00e1s claro de lo que de lo que soy de qui\u00e9n soy en cuesti\u00f3n a la industria musical Y qui\u00e9n eres Benito Mart\u00ednez hijo de [M\u00fasica] Quiz\u00e1s s\u00ed influye influye el hecho de que vengo de un barrio de Puerto Rico de una familia trabajadora que fue que nac\u00ed en ambiente de rigidillo ni nada y y que tuve mi trabajo me entiende Tuve que llevar mi resumen y mi trabajo a trabajarla al m\u00ednimo salario y s\u00e9 lo que tienen que llegar temprano el trabajo y que si no te votan me entiende tengo tengo esa disciplina tuve Mis a\u00f1os qu\u00e9 s\u00e9 yo en la universidad joseando tirando el peso para la gasolina para El peaje me entiende Como que yo dir\u00eda que que s\u00ed a veces hab\u00eda una camisa una ropa iba a salir y quer\u00eda comprarme una camisa y no ten\u00eda no ten\u00eda el dinero y era algo que no era ni caro era como que no lo tengo tengo que ponerme lo mismo que me puse ayer y s\u00ed posiblemente eso haya aportado vas a tomarte un break de m\u00fasica o todav\u00eda no has pensado eso el 2023 es para m\u00ed el 2023 para m\u00ed para para mi salud f\u00edsica para mi salud emocional para respirar para disfrutar de los logros que que hice esto ni me acordaba vamos a celebrar lo que se joda vamos a v\u00e1monos para aqu\u00ed v\u00e1monos para all\u00e1 vamos para el bote vamos para el agua vamos el 2023 es para m\u00ed Qu\u00e9 quieres hacer que no hayas hecho ahora mismo Ahora mismo estoy en un punto donde que pase lo que pase me entiende Como que no no estoy buscando que pase algo por ejemplo que se yo cuando se dio esa colaboraci\u00f3n con Drake no fue como que yo estaba pensando fue como que todo as\u00ed espont\u00e1neo este ahora es diferente Ahora ahora las colaboraciones como que todo el mundo todo el mundo quiere colaborar no importa el artista m\u00e1s grande que t\u00fa te imaginas en la tierra quiere colaborar Entonces yo creo que el artista m\u00e1s grande que yo me imagin\u00e9 en la tierra en este momento eres t\u00fa Por eso yo colaboro conmigo siempre entonces como que yo las colaboraciones las veo muy distintas como las de otras personas yo las yo lo veo como algo especial verdad para m\u00ed una colaboraci\u00f3n es casi no quiero hacerle el m\u00e1s pero para m\u00ed una colaboraci\u00f3n Casi casi como como como tener sexo con alguien como que vamos a hacer una canci\u00f3n y a veces yo digo hace una canci\u00f3n algo serio o sea como que t\u00fa est\u00e1s diciendo cosas y est\u00e1s con alguien que no se va a borrarlo o sea eso va a estar para siempre ah\u00ed estoy agradecido que era lo m\u00e1s grande que t\u00fa te ve\u00edas cuando t\u00fa empezaste porque la cabeza en el espejo no pero digo porque claramente t\u00fa tienes metas y ambici\u00f3n No yo nunca so\u00f1\u00e9 en mi mente no hubo esto de que yo quiero ser el m\u00e1s grande o quiero ser el n\u00famero uno quiero llegar yo simplemente quer\u00eda llegar y ya a lo mejor pueden decir a este cabr\u00f3n ya estoy hablando no est\u00e1 siendo sincero yo invert\u00ed tiempo de mi vida y mi juventud desde mi desde los 13 a\u00f1os yo pasaba la mayor\u00eda del d\u00eda haciendo ritmo escribiendo cantando letras en mi mente disfrut\u00e1ndome yo nunca dije quiero ser el m\u00e1s grande o Nunca dije ah con esto que estoy haciendo me voy a hacer de dinero No yo lo hac\u00eda porque lo amaba y mi \u00fanico sue\u00f1o era cuando yo espero poder ganarme la vida Haciendo esto como que tener \u00e9xito haciendo lo que lo que hagamos la primera vez que yo como que yo vi como que gente conect\u00f3 con mis canciones ya para m\u00ed suena grande la primera que yo cant\u00e9 delante de 50 60 90 personas ya yo me sent\u00eda grande entiende Ya yo me sent\u00eda feliz Entonces yo esto estadio me los disfruto de la misma manera que me disfrut\u00e9 de haber cantado en Mayag\u00fcez all\u00ed con 100 personas y en Vega Baja con 70 personas te lo juro que de la misma manera que me disfrutaba ese Show me disfruto me disfruto esto con 50.000 me hubiera tocado quedarme con 100 personas cantando todos los fines de semana con eso yo estaba feliz real [M\u00fasica] ",
      transcript_with_timestamps: [
        {
          duration: 4.62,
          start: 0.0,
          text: "Yo dir\u00eda que en este punto de mi vida y",
        },
        {
          duration: 5.279,
          start: 2.58,
          text: "de carrera es donde m\u00e1s centrado me",
        },
        {
          duration: 6.12,
          start: 4.62,
          text: "siento me siento m\u00e1s claro de lo que de",
        },
        {
          duration: 6.181,
          start: 7.859,
          text: "lo que soy de qui\u00e9n soy en cuesti\u00f3n a la",
        },
        {
          duration: 6.439,
          start: 10.74,
          text: "industria musical Y qui\u00e9n eres Benito",
        },
        {
          duration: 3.139,
          start: 14.04,
          text: "Mart\u00ednez hijo de",
        },
        {
          duration: 19.4,
          start: 18.42,
          text: "[M\u00fasica]",
        },
        {
          duration: 7.0,
          start: 35.18,
          text: "Hola Benito C\u00f3mo est\u00e1s",
        },
        {
          duration: 6.1,
          start: 37.82,
          text: "bien y t\u00fa muy bien Bueno cuando primero",
        },
        {
          duration: 4.399,
          start: 42.18,
          text: "Te entreviste est\u00e1bamos en Nueva York",
        },
        {
          duration: 5.52,
          start: 43.92,
          text: "que acabas de tocar Yankee Stadium",
        },
        {
          duration: 5.441,
          start: 46.579,
          text: "y ahora Estamos aqu\u00ed en Argentina en la",
        },
        {
          duration: 4.08,
          start: 49.44,
          text: "mitad de la gira ha cambiado algo no",
        },
        {
          duration: 4.679,
          start: 52.02,
          text: "creo que haya cambiado mucho Yo creo que",
        },
        {
          duration: 5.3,
          start: 53.52,
          text: "el sentimiento quiz\u00e1s de la gira por el",
        },
        {
          duration: 5.941,
          start: 56.699,
          text: "hecho de que ahora Estamos en Am\u00e9rica",
        },
        {
          duration: 5.22,
          start: 58.82,
          text: "completa ac\u00e1 que iba mucho que no ven\u00eda",
        },
        {
          duration: 4.92,
          start: 62.64,
          text: "se siente como si estuviera visitando",
        },
        {
          duration: 5.98,
          start: 64.04,
          text: "familiares Que mucho tiempo no ve\u00edan y",
        },
        {
          duration: 4.34,
          start: 67.56,
          text: "Argentina nacional locura en verdad mi",
        },
        {
          duration: 5.599,
          start: 70.02,
          text: "concierto favorito de mi vida",
        },
        {
          duration: 7.6,
          start: 71.9,
          text: "fue el s\u00e1bado pasado de tu vida",
        },
        {
          duration: 5.441,
          start: 75.619,
          text: "entera sacando lo que es Puerto Rico que",
        },
        {
          duration: 4.38,
          start: 79.5,
          text: "siempre lo saco aparte como que un",
        },
        {
          duration: 4.26,
          start: 81.06,
          text: "sentimiento que no se compara Y por qu\u00e9",
        },
        {
          duration: 3.66,
          start: 83.88,
          text: "Benito porque me acuerdo que en Nueva",
        },
        {
          duration: 4.979,
          start: 85.32,
          text: "York me dijiste que Nueva York y Yankee",
        },
        {
          duration: 5.1,
          start: 87.54,
          text: "Stadium eran como tan viscerales no",
        },
        {
          duration: 5.101,
          start: 90.299,
          text: "Nueva York es porque en Nueva York como",
        },
        {
          duration: 4.439,
          start: 92.64,
          text: "Nueva York Yo amo a Nueva York y es como",
        },
        {
          duration: 2.899,
          start: 95.4,
          text: "que ah\u00ed se juntan todas las comunidades",
        },
        {
          duration: 3.68,
          start: 97.079,
          text: "latinas",
        },
        {
          duration: 4.68,
          start: 98.299,
          text: "existentes en un solo lugar",
        },
        {
          duration: 5.621,
          start: 100.759,
          text: "espec\u00edficamente",
        },
        {
          duration: 5.161,
          start: 102.979,
          text: "mayormente boricua y dominicano que t\u00fa",
        },
        {
          duration: 4.919,
          start: 106.38,
          text: "sabes que esos son familia para m\u00ed",
        },
        {
          duration: 4.18,
          start: 108.14,
          text: "entonces yo creo que todo eso m\u00e1s la",
        },
        {
          duration: 3.0,
          start: 111.299,
          text: "ciudad de Nueva York que de porci\u00f3n",
        },
        {
          duration: 5.1,
          start: 112.32,
          text: "m\u00e1gica pues lo hace especial siempre",
        },
        {
          duration: 5.841,
          start: 114.299,
          text: "Argentina ha sido cabr\u00f3n pero como que",
        },
        {
          duration: 2.72,
          start: 117.42,
          text: "se me hab\u00eda olvidado",
        },
        {
          duration: 5.561,
          start: 122.659,
          text: "No no es como un ritual pero cuando yo",
        },
        {
          duration: 5.279,
          start: 125.7,
          text: "entro a la tarima yo entro sin mirar al",
        },
        {
          duration: 5.4,
          start: 128.22,
          text: "p\u00fablico yo entro caminando derecho con",
        },
        {
          duration: 4.021,
          start: 130.979,
          text: "la neverita pap\u00e1 pap\u00e1 pap\u00e1 mirando el",
        },
        {
          duration: 4.199,
          start: 133.62,
          text: "piso mirando el piso que no me vaya a",
        },
        {
          duration: 4.68,
          start: 135.0,
          text: "caer pongo la neverita me siento o sea",
        },
        {
          duration: 6.56,
          start: 137.819,
          text: "le estoy dando la espalda al p\u00fablico Me",
        },
        {
          duration: 8.419,
          start: 139.68,
          text: "siento con un respiro y hago",
        },
        {
          duration: 3.72,
          start: 144.379,
          text: "y ah\u00ed Es que miro",
        },
        {
          duration: 5.4,
          start: 148.68,
          text: "la multitud y",
        },
        {
          duration: 5.32,
          start: 151.34,
          text: "siempre es como que no importa donde sea",
        },
        {
          duration: 5.879,
          start: 154.08,
          text: "siempre es como un pu\u00f1o como que el",
        },
        {
          duration: 6.78,
          start: 156.66,
          text: " C\u00f3mo escoges A qui\u00e9n invitas en",
        },
        {
          duration: 5.941,
          start: 159.959,
          text: "cada show trato de invitar a quien yo",
        },
        {
          duration: 5.0,
          start: 163.44,
          text: "sienta que que est\u00e1 disponible que",
        },
        {
          duration: 6.0,
          start: 165.9,
          text: "tengamos una colaboraci\u00f3n dentro de",
        },
        {
          duration: 6.22,
          start: 168.44,
          text: "del tracklist de lo que estoy cantando",
        },
        {
          duration: 5.58,
          start: 171.9,
          text: "tambi\u00e9n corr\u00edgeme si estoy mal pero con",
        },
        {
          duration: 5.219,
          start: 174.66,
          text: "ibi no tienes canci\u00f3n No s\u00e9 con Ivi no",
        },
        {
          duration: 5.58,
          start: 177.48,
          text: "tengo canci\u00f3n",
        },
        {
          duration: 5.701,
          start: 179.879,
          text: "como tal Pero si tengo una versi\u00f3n un",
        },
        {
          duration: 5.24,
          start: 183.06,
          text: "remix que se le hizo que fue un remix",
        },
        {
          duration: 5.579,
          start: 185.58,
          text: "especial que se le hizo a yo perreo sola",
        },
        {
          duration: 6.34,
          start: 188.3,
          text: "que fue con Ivy Queen con \u00e9l Y entonces",
        },
        {
          duration: 6.121,
          start: 191.159,
          text: "ese remix yo lo hice m\u00e1s en un modo de",
        },
        {
          duration: 4.099,
          start: 194.64,
          text: "homenaje tambi\u00e9n y de respeto a la mujer",
        },
        {
          duration: 5.64,
          start: 197.28,
          text: "y",
        },
        {
          duration: 4.181,
          start: 198.739,
          text: "a ella espec\u00edficamente",
        },
        {
          duration: 6.01,
          start: 203.15,
          text: "[M\u00fasica]",
        },
        {
          duration: 5.201,
          start: 211.159,
          text: "Considero que la primera el \u00faltimo tour",
        },
        {
          duration: 5.401,
          start: 213.599,
          text: "del mundo fue un poco m\u00e1s especial en el",
        },
        {
          duration: 5.22,
          start: 216.36,
          text: "t\u00e9rmino sentimental emocional pero el",
        },
        {
          duration: 5.22,
          start: 219.0,
          text: "World me lo ha disfrutado m\u00e1s me la he",
        },
        {
          duration: 4.62,
          start: 221.58,
          text: "disfrutado m\u00e1s he salido Por lo general",
        },
        {
          duration: 3.659,
          start: 224.22,
          text: "yo no salgo para ning\u00fan lado en esta",
        },
        {
          duration: 4.88,
          start: 226.2,
          text: "gira tanto en los Estados Unidos como",
        },
        {
          duration: 6.0,
          start: 227.879,
          text: "como Am\u00e9rica me la",
        },
        {
          duration: 6.6,
          start: 231.08,
          text: "he compartido con hasta con el club con",
        },
        {
          duration: 6.061,
          start: 233.879,
          text: "los bailarines con esa l\u00edo muy divertido",
        },
        {
          duration: 4.66,
          start: 237.68,
          text: "he ido a lugares he ido a comer",
        },
        {
          duration: 4.68,
          start: 239.94,
          text: "restaurantes no trato de estar pensando",
        },
        {
          duration: 4.7,
          start: 242.34,
          text: "en cosas sino como que de disfrutarme el",
        },
        {
          duration: 5.94,
          start: 244.62,
          text: "momento cantar con la gente",
        },
        {
          duration: 5.5,
          start: 247.04,
          text: "c\u00f3mo voy a dio con la presi\u00f3n o t\u00fa",
        },
        {
          duration: 4.7,
          start: 250.56,
          text: "Sencillamente lo haces me siento un",
        },
        {
          duration: 5.659,
          start: 252.54,
          text: "control yo creo que ahora mismo",
        },
        {
          duration: 7.12,
          start: 255.26,
          text: "todos los a\u00f1os",
        },
        {
          duration: 5.741,
          start: 258.199,
          text: "es que tambi\u00e9n llevo Cu\u00e1ntos seis",
        },
        {
          duration: 3.36,
          start: 262.38,
          text: "cinco a\u00f1os uno va cogiendo experiencia",
        },
        {
          duration: 4.38,
          start: 263.94,
          text: "tambi\u00e9n y ha superado muchas cosas",
        },
        {
          duration: 5.82,
          start: 265.74,
          text: "tambi\u00e9n he sanado muchas cosas de mi",
        },
        {
          duration: 5.159,
          start: 268.32,
          text: "vida etc\u00e9tera cosas que quiz\u00e1s ese el",
        },
        {
          duration: 5.1,
          start: 271.56,
          text: "giro que que dio como siempre he dicho",
        },
        {
          duration: 6.241,
          start: 273.479,
          text: "el giro que dio mi vida entera es muy",
        },
        {
          duration: 5.46,
          start: 276.66,
          text: "r\u00e1pido es un proceso entonces Pues yo",
        },
        {
          duration: 4.759,
          start: 279.72,
          text: "dir\u00eda que en este punto de mi vida y de",
        },
        {
          duration: 5.28,
          start: 282.12,
          text: "carrera es donde m\u00e1s centrado me siento",
        },
        {
          duration: 5.621,
          start: 284.479,
          text: "me siento m\u00e1s claro de lo que de lo que",
        },
        {
          duration: 5.94,
          start: 287.4,
          text: "soy de qui\u00e9n soy en cuesti\u00f3n a la",
        },
        {
          duration: 6.379,
          start: 290.1,
          text: "industria musical Y qui\u00e9n eres Benito",
        },
        {
          duration: 3.139,
          start: 293.34,
          text: "Mart\u00ednez hijo de",
        },
        {
          duration: 10.95,
          start: 298.61,
          text: "[M\u00fasica]",
        },
        {
          duration: 6.04,
          start: 306.8,
          text: "Quiz\u00e1s s\u00ed influye",
        },
        {
          duration: 6.12,
          start: 309.56,
          text: "influye el hecho de que vengo de un",
        },
        {
          duration: 6.859,
          start: 312.84,
          text: "barrio de Puerto Rico de una familia",
        },
        {
          duration: 8.38,
          start: 315.68,
          text: "trabajadora que fue que nac\u00ed en",
        },
        {
          duration: 6.101,
          start: 319.699,
          text: "ambiente de rigidillo ni nada y y que",
        },
        {
          duration: 3.479,
          start: 324.06,
          text: "tuve mi trabajo me entiende Tuve que",
        },
        {
          duration: 4.56,
          start: 325.8,
          text: "llevar mi resumen y mi trabajo a",
        },
        {
          duration: 4.861,
          start: 327.539,
          text: "trabajarla al m\u00ednimo salario y s\u00e9 lo que",
        },
        {
          duration: 4.559,
          start: 330.36,
          text: "tienen que llegar temprano el trabajo y",
        },
        {
          duration: 4.46,
          start: 332.4,
          text: "que si no te votan",
        },
        {
          duration: 4.081,
          start: 334.919,
          text: "me entiende tengo tengo esa disciplina",
        },
        {
          duration: 2.94,
          start: 336.86,
          text: "tuve Mis a\u00f1os qu\u00e9 s\u00e9 yo en la",
        },
        {
          duration: 3.78,
          start: 339.0,
          text: "universidad",
        },
        {
          duration: 5.02,
          start: 339.8,
          text: "joseando tirando el peso para la",
        },
        {
          duration: 4.919,
          start: 342.78,
          text: "gasolina para El peaje me entiende Como",
        },
        {
          duration: 5.939,
          start: 344.82,
          text: "que yo dir\u00eda que que s\u00ed a veces hab\u00eda",
        },
        {
          duration: 6.321,
          start: 347.699,
          text: "una camisa una ropa iba a salir y quer\u00eda",
        },
        {
          duration: 7.861,
          start: 350.759,
          text: "comprarme una camisa y no ten\u00eda no ten\u00eda",
        },
        {
          duration: 6.04,
          start: 354.02,
          text: "el dinero y era algo que no era ni caro",
        },
        {
          duration: 4.82,
          start: 358.62,
          text: "era como que no lo tengo tengo que",
        },
        {
          duration: 7.139,
          start: 360.06,
          text: "ponerme lo mismo que me puse ayer y",
        },
        {
          duration: 5.68,
          start: 363.44,
          text: "s\u00ed posiblemente eso haya aportado vas a",
        },
        {
          duration: 5.581,
          start: 367.199,
          text: "tomarte un break de m\u00fasica o todav\u00eda no",
        },
        {
          duration: 6.6,
          start: 369.12,
          text: "has pensado eso el 2023 es para m\u00ed el",
        },
        {
          duration: 5.94,
          start: 372.78,
          text: "2023 para m\u00ed para para mi salud f\u00edsica",
        },
        {
          duration: 5.759,
          start: 375.72,
          text: "para mi salud emocional para respirar",
        },
        {
          duration: 4.5,
          start: 378.72,
          text: "para disfrutar de los logros que que",
        },
        {
          duration: 4.861,
          start: 381.479,
          text: "hice esto ni me acordaba vamos a",
        },
        {
          duration: 5.16,
          start: 383.22,
          text: "celebrar lo que se joda vamos a v\u00e1monos",
        },
        {
          duration: 4.32,
          start: 386.34,
          text: "para aqu\u00ed v\u00e1monos para all\u00e1 vamos para",
        },
        {
          duration: 5.099,
          start: 388.38,
          text: "el bote vamos para el agua vamos el 2023",
        },
        {
          duration: 4.92,
          start: 390.66,
          text: "es para m\u00ed Qu\u00e9 quieres hacer que no",
        },
        {
          duration: 5.541,
          start: 393.479,
          text: "hayas hecho ahora mismo Ahora mismo",
        },
        {
          duration: 3.44,
          start: 395.58,
          text: "estoy en un punto donde",
        },
        {
          duration: 6.321,
          start: 401.699,
          text: "que pase lo que pase me entiende Como",
        },
        {
          duration: 5.821,
          start: 404.699,
          text: "que no no estoy buscando que pase algo",
        },
        {
          duration: 3.94,
          start: 408.02,
          text: "por ejemplo que se yo cuando se dio esa",
        },
        {
          duration: 3.799,
          start: 410.52,
          text: "colaboraci\u00f3n con Drake no fue como que",
        },
        {
          duration: 4.04,
          start: 411.96,
          text: "yo estaba pensando fue como que todo as\u00ed",
        },
        {
          duration: 6.581,
          start: 414.319,
          text: "espont\u00e1neo",
        },
        {
          duration: 6.819,
          start: 416.0,
          text: "este ahora es diferente Ahora ahora las",
        },
        {
          duration: 3.78,
          start: 420.9,
          text: "colaboraciones como que todo el mundo",
        },
        {
          duration: 4.38,
          start: 422.819,
          text: "todo el mundo quiere colaborar no",
        },
        {
          duration: 4.44,
          start: 424.68,
          text: "importa el artista m\u00e1s grande que t\u00fa te",
        },
        {
          duration: 4.921,
          start: 427.199,
          text: "imaginas en la tierra",
        },
        {
          duration: 4.5,
          start: 429.12,
          text: "quiere colaborar Entonces yo creo que el",
        },
        {
          duration: 3.66,
          start: 432.12,
          text: "artista m\u00e1s grande que yo me imagin\u00e9 en",
        },
        {
          duration: 4.519,
          start: 433.62,
          text: "la tierra en este momento eres t\u00fa Por",
        },
        {
          duration: 5.039,
          start: 435.78,
          text: "eso yo colaboro conmigo siempre entonces",
        },
        {
          duration: 4.9,
          start: 438.139,
          text: "como que yo las colaboraciones las veo",
        },
        {
          duration: 4.1,
          start: 440.819,
          text: "muy distintas como las de otras personas",
        },
        {
          duration: 5.041,
          start: 443.039,
          text: "yo las yo lo veo como algo especial",
        },
        {
          duration: 6.28,
          start: 444.919,
          text: "verdad para m\u00ed una colaboraci\u00f3n es casi",
        },
        {
          duration: 4.14,
          start: 448.08,
          text: "no quiero hacerle el m\u00e1s pero para m\u00ed",
        },
        {
          duration: 4.161,
          start: 451.199,
          text: "una colaboraci\u00f3n Casi casi como como",
        },
        {
          duration: 5.699,
          start: 452.22,
          text: "como tener sexo con alguien como",
        },
        {
          duration: 4.86,
          start: 455.36,
          text: "que vamos a hacer una canci\u00f3n y a veces",
        },
        {
          duration: 2.301,
          start: 457.919,
          text: "yo digo",
        },
        {
          duration: 5.12,
          start: 460.38,
          text: "hace una canci\u00f3n algo serio o sea como",
        },
        {
          duration: 6.96,
          start: 463.139,
          text: "que t\u00fa est\u00e1s diciendo cosas",
        },
        {
          duration: 6.039,
          start: 465.5,
          text: "y est\u00e1s con alguien que no se va a",
        },
        {
          duration: 3.72,
          start: 470.099,
          text: "borrarlo o sea eso va a estar para",
        },
        {
          duration: 4.021,
          start: 471.539,
          text: "siempre ah\u00ed estoy agradecido que era lo",
        },
        {
          duration: 5.301,
          start: 473.819,
          text: "m\u00e1s grande que t\u00fa te ve\u00edas cuando t\u00fa",
        },
        {
          duration: 6.6,
          start: 475.56,
          text: "empezaste porque la cabeza en el espejo",
        },
        {
          duration: 6.94,
          start: 479.12,
          text: "no pero digo porque claramente t\u00fa tienes",
        },
        {
          duration: 7.2,
          start: 482.16,
          text: "metas y ambici\u00f3n No yo nunca so\u00f1\u00e9 en mi",
        },
        {
          duration: 5.039,
          start: 486.06,
          text: "mente no hubo esto de que yo quiero ser",
        },
        {
          duration: 4.7,
          start: 489.36,
          text: "el m\u00e1s grande o quiero ser el n\u00famero uno",
        },
        {
          duration: 2.961,
          start: 491.099,
          text: "quiero llegar",
        },
        {
          duration: 4.96,
          start: 494.78,
          text: "yo simplemente quer\u00eda llegar y ya a lo",
        },
        {
          duration: 3.06,
          start: 498.3,
          text: "mejor pueden decir a este cabr\u00f3n ya",
        },
        {
          duration: 5.459,
          start: 499.74,
          text: "estoy hablando no est\u00e1 siendo",
        },
        {
          duration: 7.08,
          start: 501.36,
          text: "sincero yo invert\u00ed tiempo de mi vida y",
        },
        {
          duration: 3.921,
          start: 505.199,
          text: "mi juventud desde mi desde los 13",
        },
        {
          duration: 3.959,
          start: 508.44,
          text: "a\u00f1os",
        },
        {
          duration: 5.32,
          start: 509.12,
          text: "yo pasaba la mayor\u00eda del d\u00eda haciendo",
        },
        {
          duration: 6.801,
          start: 512.399,
          text: "ritmo",
        },
        {
          duration: 7.339,
          start: 514.44,
          text: "escribiendo cantando letras en mi mente",
        },
        {
          duration: 4.74,
          start: 519.2,
          text: "disfrut\u00e1ndome yo nunca",
        },
        {
          duration: 5.56,
          start: 521.779,
          text: "dije",
        },
        {
          duration: 4.54,
          start: 523.94,
          text: "quiero ser el m\u00e1s grande o Nunca dije ah",
        },
        {
          duration: 3.12,
          start: 527.339,
          text: "con esto que estoy haciendo me voy a",
        },
        {
          duration: 4.44,
          start: 528.48,
          text: "hacer de dinero No yo lo hac\u00eda porque lo",
        },
        {
          duration: 5.101,
          start: 530.459,
          text: "amaba y mi \u00fanico sue\u00f1o era cuando yo",
        },
        {
          duration: 4.68,
          start: 532.92,
          text: "espero poder ganarme la vida Haciendo",
        },
        {
          duration: 4.339,
          start: 535.56,
          text: "esto como que tener \u00e9xito haciendo lo",
        },
        {
          duration: 5.34,
          start: 537.6,
          text: "que lo que hagamos la primera vez que yo",
        },
        {
          duration: 4.541,
          start: 539.899,
          text: "como que yo vi como que gente conect\u00f3",
        },
        {
          duration: 3.48,
          start: 542.94,
          text: "con mis canciones ya para m\u00ed suena",
        },
        {
          duration: 4.1,
          start: 544.44,
          text: "grande la primera que yo cant\u00e9 delante",
        },
        {
          duration: 5.52,
          start: 546.42,
          text: "de 50 60",
        },
        {
          duration: 7.62,
          start: 548.54,
          text: "90 personas ya yo me sent\u00eda grande",
        },
        {
          duration: 7.2,
          start: 551.94,
          text: "entiende Ya yo me sent\u00eda feliz Entonces",
        },
        {
          duration: 4.54,
          start: 556.16,
          text: "yo esto estadio me los disfruto de la",
        },
        {
          duration: 3.36,
          start: 559.14,
          text: "misma manera que me disfrut\u00e9 de haber",
        },
        {
          duration: 5.52,
          start: 560.7,
          text: "cantado en Mayag\u00fcez all\u00ed con 100",
        },
        {
          duration: 5.94,
          start: 562.5,
          text: "personas y en Vega Baja con 70 personas",
        },
        {
          duration: 3.78,
          start: 566.22,
          text: "te lo juro que de la misma manera que me",
        },
        {
          duration: 4.019,
          start: 568.44,
          text: "disfrutaba ese Show me disfruto me",
        },
        {
          duration: 3.899,
          start: 570.0,
          text: "disfruto esto con 50.000 me hubiera",
        },
        {
          duration: 3.361,
          start: 572.459,
          text: "tocado quedarme con 100 personas",
        },
        {
          duration: 3.301,
          start: 573.899,
          text: "cantando todos los fines de semana con",
        },
        {
          duration: 2.39,
          start: 575.82,
          text: "eso yo estaba feliz",
        },
        {
          duration: 11.979,
          start: 577.2,
          text: "real",
        },
        {
          duration: 10.969,
          start: 578.21,
          text: "[M\u00fasica]",
        },
      ],
      videoId: "fG2Byh85FSM",
    },
  ],
};

export const TEST_EN_METADATA_ES_SUBS = {
  videos: [
    {
      channelId: "UCsVcseUYbYjldc-XgcsiEbg",
      channelTitle: "Billboard",
      description:
        "Bad Bunny talks to our Chief Content Officer of Latin Leila Cobo about his current tour, World's Hottest Tour, his favorite places to tour, how he approaches collaborations, when he wants to take a break from his career, reflects on his journey to the top and more! \n\nTo learn more about this story: \nhttps://www.billboard.com/music/latin/bad-bunny-billboard-top-artist-2022-concerts-interview-cover-story-1235182432/\n\n\u25ba\u25ba Subscribe for more music news: http://blbrd.cm/Proracf\n\u25ba\u25ba See our latest videos: http://blbrd.cm/xOgw6VQ\n\nAbout: Billboard is the world's most influential music media brand, with an unmatched authority among artists, fans and the industry. Billboard powers the ultimate global music destination and magazine, featuring unrivaled reporting on music news, issues and trends, the industry\u2019s definitive charts, encompassing the most complete and well respected database of charts across all music genres, and elite conferences and events which regularly convene the industry and consumers around important conversations. \n\nConnect with Billboard Online:\nVisit the website: http://blbrd.cm/s5w4vTm\nLikes us on Facebook: http://blbrd.cm/ks26yg5\nFollow us on Twitter: http://blbrd.cm/uRNqRoN \nFollow us on Instagram: http://blbrd.cm/6QaTrhn\n\n#BadBunny #WorldsHottestTour #BillboardCover \n\nBad Bunny Talks Touring, Taking A Break, Reflects On His Journey to The Top & More | Billboard Cover\n\nBillboard\nhttps://youtube.com/billboard",
      language: "en",
      publishedAt: "2022-12-08T16:24:30Z",
      thumbnailUrl: "https://i.ytimg.com/vi/fG2Byh85FSM/maxresdefault.jpg",
      title:
        "Bad Bunny Talks Touring, Taking A Break, Reflects On His Journey to The Top & More | Billboard Cover",
      transcript_text_only:
        "Yo dir\u00eda que en este punto de mi vida y de carrera es donde m\u00e1s centrado me siento me siento m\u00e1s claro de lo que de lo que soy de qui\u00e9n soy en cuesti\u00f3n a la industria musical Y qui\u00e9n eres Benito Mart\u00ednez hijo de [M\u00fasica] Hola Benito C\u00f3mo est\u00e1s bien y t\u00fa muy bien Bueno cuando primero Te entreviste est\u00e1bamos en Nueva York que acabas de tocar Yankee Stadium y ahora Estamos aqu\u00ed en Argentina en la mitad de la gira ha cambiado algo no creo que haya cambiado mucho Yo creo que el sentimiento quiz\u00e1s de la gira por el hecho de que ahora Estamos en Am\u00e9rica completa ac\u00e1 que iba mucho que no ven\u00eda se siente como si estuviera visitando familiares Que mucho tiempo no ve\u00edan y Argentina nacional locura en verdad mi concierto favorito de mi vida fue el s\u00e1bado pasado de tu vida entera sacando lo que es Puerto Rico que siempre lo saco aparte como que un sentimiento que no se compara Y por qu\u00e9 Benito porque me acuerdo que en Nueva York me dijiste que Nueva York y Yankee Stadium eran como tan viscerales no Nueva York es porque en Nueva York como Nueva York Yo amo a Nueva York y es como que ah\u00ed se juntan todas las comunidades latinas existentes en un solo lugar espec\u00edficamente mayormente boricua y dominicano que t\u00fa sabes que esos son familia para m\u00ed entonces yo creo que todo eso m\u00e1s la ciudad de Nueva York que de porci\u00f3n m\u00e1gica pues lo hace especial siempre Argentina ha sido cabr\u00f3n pero como que se me hab\u00eda olvidado No no es como un ritual pero cuando yo entro a la tarima yo entro sin mirar al p\u00fablico yo entro caminando derecho con la neverita pap\u00e1 pap\u00e1 pap\u00e1 mirando el piso mirando el piso que no me vaya a caer pongo la neverita me siento o sea le estoy dando la espalda al p\u00fablico Me siento con un respiro y hago y ah\u00ed Es que miro la multitud y siempre es como que no importa donde sea siempre es como un pu\u00f1o como que el  C\u00f3mo escoges A qui\u00e9n invitas en cada show trato de invitar a quien yo sienta que que est\u00e1 disponible que tengamos una colaboraci\u00f3n dentro de del tracklist de lo que estoy cantando tambi\u00e9n corr\u00edgeme si estoy mal pero con ibi no tienes canci\u00f3n No s\u00e9 con Ivi no tengo canci\u00f3n como tal Pero si tengo una versi\u00f3n un remix que se le hizo que fue un remix especial que se le hizo a yo perreo sola que fue con Ivy Queen con \u00e9l Y entonces ese remix yo lo hice m\u00e1s en un modo de homenaje tambi\u00e9n y de respeto a la mujer y a ella espec\u00edficamente [M\u00fasica] Considero que la primera el \u00faltimo tour del mundo fue un poco m\u00e1s especial en el t\u00e9rmino sentimental emocional pero el World me lo ha disfrutado m\u00e1s me la he disfrutado m\u00e1s he salido Por lo general yo no salgo para ning\u00fan lado en esta gira tanto en los Estados Unidos como como Am\u00e9rica me la he compartido con hasta con el club con los bailarines con esa l\u00edo muy divertido he ido a lugares he ido a comer restaurantes no trato de estar pensando en cosas sino como que de disfrutarme el momento cantar con la gente c\u00f3mo voy a dio con la presi\u00f3n o t\u00fa Sencillamente lo haces me siento un control yo creo que ahora mismo todos los a\u00f1os es que tambi\u00e9n llevo Cu\u00e1ntos seis cinco a\u00f1os uno va cogiendo experiencia tambi\u00e9n y ha superado muchas cosas tambi\u00e9n he sanado muchas cosas de mi vida etc\u00e9tera cosas que quiz\u00e1s ese el giro que que dio como siempre he dicho el giro que dio mi vida entera es muy r\u00e1pido es un proceso entonces Pues yo dir\u00eda que en este punto de mi vida y de carrera es donde m\u00e1s centrado me siento me siento m\u00e1s claro de lo que de lo que soy de qui\u00e9n soy en cuesti\u00f3n a la industria musical Y qui\u00e9n eres Benito Mart\u00ednez hijo de [M\u00fasica] Quiz\u00e1s s\u00ed influye influye el hecho de que vengo de un barrio de Puerto Rico de una familia trabajadora que fue que nac\u00ed en ambiente de rigidillo ni nada y y que tuve mi trabajo me entiende Tuve que llevar mi resumen y mi trabajo a trabajarla al m\u00ednimo salario y s\u00e9 lo que tienen que llegar temprano el trabajo y que si no te votan me entiende tengo tengo esa disciplina tuve Mis a\u00f1os qu\u00e9 s\u00e9 yo en la universidad joseando tirando el peso para la gasolina para El peaje me entiende Como que yo dir\u00eda que que s\u00ed a veces hab\u00eda una camisa una ropa iba a salir y quer\u00eda comprarme una camisa y no ten\u00eda no ten\u00eda el dinero y era algo que no era ni caro era como que no lo tengo tengo que ponerme lo mismo que me puse ayer y s\u00ed posiblemente eso haya aportado vas a tomarte un break de m\u00fasica o todav\u00eda no has pensado eso el 2023 es para m\u00ed el 2023 para m\u00ed para para mi salud f\u00edsica para mi salud emocional para respirar para disfrutar de los logros que que hice esto ni me acordaba vamos a celebrar lo que se joda vamos a v\u00e1monos para aqu\u00ed v\u00e1monos para all\u00e1 vamos para el bote vamos para el agua vamos el 2023 es para m\u00ed Qu\u00e9 quieres hacer que no hayas hecho ahora mismo Ahora mismo estoy en un punto donde que pase lo que pase me entiende Como que no no estoy buscando que pase algo por ejemplo que se yo cuando se dio esa colaboraci\u00f3n con Drake no fue como que yo estaba pensando fue como que todo as\u00ed espont\u00e1neo este ahora es diferente Ahora ahora las colaboraciones como que todo el mundo todo el mundo quiere colaborar no importa el artista m\u00e1s grande que t\u00fa te imaginas en la tierra quiere colaborar Entonces yo creo que el artista m\u00e1s grande que yo me imagin\u00e9 en la tierra en este momento eres t\u00fa Por eso yo colaboro conmigo siempre entonces como que yo las colaboraciones las veo muy distintas como las de otras personas yo las yo lo veo como algo especial verdad para m\u00ed una colaboraci\u00f3n es casi no quiero hacerle el m\u00e1s pero para m\u00ed una colaboraci\u00f3n Casi casi como como como tener sexo con alguien como que vamos a hacer una canci\u00f3n y a veces yo digo hace una canci\u00f3n algo serio o sea como que t\u00fa est\u00e1s diciendo cosas y est\u00e1s con alguien que no se va a borrarlo o sea eso va a estar para siempre ah\u00ed estoy agradecido que era lo m\u00e1s grande que t\u00fa te ve\u00edas cuando t\u00fa empezaste porque la cabeza en el espejo no pero digo porque claramente t\u00fa tienes metas y ambici\u00f3n No yo nunca so\u00f1\u00e9 en mi mente no hubo esto de que yo quiero ser el m\u00e1s grande o quiero ser el n\u00famero uno quiero llegar yo simplemente quer\u00eda llegar y ya a lo mejor pueden decir a este cabr\u00f3n ya estoy hablando no est\u00e1 siendo sincero yo invert\u00ed tiempo de mi vida y mi juventud desde mi desde los 13 a\u00f1os yo pasaba la mayor\u00eda del d\u00eda haciendo ritmo escribiendo cantando letras en mi mente disfrut\u00e1ndome yo nunca dije quiero ser el m\u00e1s grande o Nunca dije ah con esto que estoy haciendo me voy a hacer de dinero No yo lo hac\u00eda porque lo amaba y mi \u00fanico sue\u00f1o era cuando yo espero poder ganarme la vida Haciendo esto como que tener \u00e9xito haciendo lo que lo que hagamos la primera vez que yo como que yo vi como que gente conect\u00f3 con mis canciones ya para m\u00ed suena grande la primera que yo cant\u00e9 delante de 50 60 90 personas ya yo me sent\u00eda grande entiende Ya yo me sent\u00eda feliz Entonces yo esto estadio me los disfruto de la misma manera que me disfrut\u00e9 de haber cantado en Mayag\u00fcez all\u00ed con 100 personas y en Vega Baja con 70 personas te lo juro que de la misma manera que me disfrutaba ese Show me disfruto me disfruto esto con 50.000 me hubiera tocado quedarme con 100 personas cantando todos los fines de semana con eso yo estaba feliz real [M\u00fasica] ",
      transcript_with_timestamps: [
        {
          duration: 4.62,
          start: 0.0,
          text: "Yo dir\u00eda que en este punto de mi vida y",
        },
        {
          duration: 5.279,
          start: 2.58,
          text: "de carrera es donde m\u00e1s centrado me",
        },
        {
          duration: 6.12,
          start: 4.62,
          text: "siento me siento m\u00e1s claro de lo que de",
        },
        {
          duration: 6.181,
          start: 7.859,
          text: "lo que soy de qui\u00e9n soy en cuesti\u00f3n a la",
        },
        {
          duration: 6.439,
          start: 10.74,
          text: "industria musical Y qui\u00e9n eres Benito",
        },
        {
          duration: 3.139,
          start: 14.04,
          text: "Mart\u00ednez hijo de",
        },
        {
          duration: 19.4,
          start: 18.42,
          text: "[M\u00fasica]",
        },
        {
          duration: 7.0,
          start: 35.18,
          text: "Hola Benito C\u00f3mo est\u00e1s",
        },
        {
          duration: 6.1,
          start: 37.82,
          text: "bien y t\u00fa muy bien Bueno cuando primero",
        },
        {
          duration: 4.399,
          start: 42.18,
          text: "Te entreviste est\u00e1bamos en Nueva York",
        },
        {
          duration: 5.52,
          start: 43.92,
          text: "que acabas de tocar Yankee Stadium",
        },
        {
          duration: 5.441,
          start: 46.579,
          text: "y ahora Estamos aqu\u00ed en Argentina en la",
        },
        {
          duration: 4.08,
          start: 49.44,
          text: "mitad de la gira ha cambiado algo no",
        },
        {
          duration: 4.679,
          start: 52.02,
          text: "creo que haya cambiado mucho Yo creo que",
        },
        {
          duration: 5.3,
          start: 53.52,
          text: "el sentimiento quiz\u00e1s de la gira por el",
        },
        {
          duration: 5.941,
          start: 56.699,
          text: "hecho de que ahora Estamos en Am\u00e9rica",
        },
        {
          duration: 5.22,
          start: 58.82,
          text: "completa ac\u00e1 que iba mucho que no ven\u00eda",
        },
        {
          duration: 4.92,
          start: 62.64,
          text: "se siente como si estuviera visitando",
        },
        {
          duration: 5.98,
          start: 64.04,
          text: "familiares Que mucho tiempo no ve\u00edan y",
        },
        {
          duration: 4.34,
          start: 67.56,
          text: "Argentina nacional locura en verdad mi",
        },
        {
          duration: 5.599,
          start: 70.02,
          text: "concierto favorito de mi vida",
        },
        {
          duration: 7.6,
          start: 71.9,
          text: "fue el s\u00e1bado pasado de tu vida",
        },
        {
          duration: 5.441,
          start: 75.619,
          text: "entera sacando lo que es Puerto Rico que",
        },
        {
          duration: 4.38,
          start: 79.5,
          text: "siempre lo saco aparte como que un",
        },
        {
          duration: 4.26,
          start: 81.06,
          text: "sentimiento que no se compara Y por qu\u00e9",
        },
        {
          duration: 3.66,
          start: 83.88,
          text: "Benito porque me acuerdo que en Nueva",
        },
        {
          duration: 4.979,
          start: 85.32,
          text: "York me dijiste que Nueva York y Yankee",
        },
        {
          duration: 5.1,
          start: 87.54,
          text: "Stadium eran como tan viscerales no",
        },
        {
          duration: 5.101,
          start: 90.299,
          text: "Nueva York es porque en Nueva York como",
        },
        {
          duration: 4.439,
          start: 92.64,
          text: "Nueva York Yo amo a Nueva York y es como",
        },
        {
          duration: 2.899,
          start: 95.4,
          text: "que ah\u00ed se juntan todas las comunidades",
        },
        {
          duration: 3.68,
          start: 97.079,
          text: "latinas",
        },
        {
          duration: 4.68,
          start: 98.299,
          text: "existentes en un solo lugar",
        },
        {
          duration: 5.621,
          start: 100.759,
          text: "espec\u00edficamente",
        },
        {
          duration: 5.161,
          start: 102.979,
          text: "mayormente boricua y dominicano que t\u00fa",
        },
        {
          duration: 4.919,
          start: 106.38,
          text: "sabes que esos son familia para m\u00ed",
        },
        {
          duration: 4.18,
          start: 108.14,
          text: "entonces yo creo que todo eso m\u00e1s la",
        },
        {
          duration: 3.0,
          start: 111.299,
          text: "ciudad de Nueva York que de porci\u00f3n",
        },
        {
          duration: 5.1,
          start: 112.32,
          text: "m\u00e1gica pues lo hace especial siempre",
        },
        {
          duration: 5.841,
          start: 114.299,
          text: "Argentina ha sido cabr\u00f3n pero como que",
        },
        {
          duration: 2.72,
          start: 117.42,
          text: "se me hab\u00eda olvidado",
        },
        {
          duration: 5.561,
          start: 122.659,
          text: "No no es como un ritual pero cuando yo",
        },
        {
          duration: 5.279,
          start: 125.7,
          text: "entro a la tarima yo entro sin mirar al",
        },
        {
          duration: 5.4,
          start: 128.22,
          text: "p\u00fablico yo entro caminando derecho con",
        },
        {
          duration: 4.021,
          start: 130.979,
          text: "la neverita pap\u00e1 pap\u00e1 pap\u00e1 mirando el",
        },
        {
          duration: 4.199,
          start: 133.62,
          text: "piso mirando el piso que no me vaya a",
        },
        {
          duration: 4.68,
          start: 135.0,
          text: "caer pongo la neverita me siento o sea",
        },
        {
          duration: 6.56,
          start: 137.819,
          text: "le estoy dando la espalda al p\u00fablico Me",
        },
        {
          duration: 8.419,
          start: 139.68,
          text: "siento con un respiro y hago",
        },
        {
          duration: 3.72,
          start: 144.379,
          text: "y ah\u00ed Es que miro",
        },
        {
          duration: 5.4,
          start: 148.68,
          text: "la multitud y",
        },
        {
          duration: 5.32,
          start: 151.34,
          text: "siempre es como que no importa donde sea",
        },
        {
          duration: 5.879,
          start: 154.08,
          text: "siempre es como un pu\u00f1o como que el",
        },
        {
          duration: 6.78,
          start: 156.66,
          text: " C\u00f3mo escoges A qui\u00e9n invitas en",
        },
        {
          duration: 5.941,
          start: 159.959,
          text: "cada show trato de invitar a quien yo",
        },
        {
          duration: 5.0,
          start: 163.44,
          text: "sienta que que est\u00e1 disponible que",
        },
        {
          duration: 6.0,
          start: 165.9,
          text: "tengamos una colaboraci\u00f3n dentro de",
        },
        {
          duration: 6.22,
          start: 168.44,
          text: "del tracklist de lo que estoy cantando",
        },
        {
          duration: 5.58,
          start: 171.9,
          text: "tambi\u00e9n corr\u00edgeme si estoy mal pero con",
        },
        {
          duration: 5.219,
          start: 174.66,
          text: "ibi no tienes canci\u00f3n No s\u00e9 con Ivi no",
        },
        {
          duration: 5.58,
          start: 177.48,
          text: "tengo canci\u00f3n",
        },
        {
          duration: 5.701,
          start: 179.879,
          text: "como tal Pero si tengo una versi\u00f3n un",
        },
        {
          duration: 5.24,
          start: 183.06,
          text: "remix que se le hizo que fue un remix",
        },
        {
          duration: 5.579,
          start: 185.58,
          text: "especial que se le hizo a yo perreo sola",
        },
        {
          duration: 6.34,
          start: 188.3,
          text: "que fue con Ivy Queen con \u00e9l Y entonces",
        },
        {
          duration: 6.121,
          start: 191.159,
          text: "ese remix yo lo hice m\u00e1s en un modo de",
        },
        {
          duration: 4.099,
          start: 194.64,
          text: "homenaje tambi\u00e9n y de respeto a la mujer",
        },
        {
          duration: 5.64,
          start: 197.28,
          text: "y",
        },
        {
          duration: 4.181,
          start: 198.739,
          text: "a ella espec\u00edficamente",
        },
        {
          duration: 6.01,
          start: 203.15,
          text: "[M\u00fasica]",
        },
        {
          duration: 5.201,
          start: 211.159,
          text: "Considero que la primera el \u00faltimo tour",
        },
        {
          duration: 5.401,
          start: 213.599,
          text: "del mundo fue un poco m\u00e1s especial en el",
        },
        {
          duration: 5.22,
          start: 216.36,
          text: "t\u00e9rmino sentimental emocional pero el",
        },
        {
          duration: 5.22,
          start: 219.0,
          text: "World me lo ha disfrutado m\u00e1s me la he",
        },
        {
          duration: 4.62,
          start: 221.58,
          text: "disfrutado m\u00e1s he salido Por lo general",
        },
        {
          duration: 3.659,
          start: 224.22,
          text: "yo no salgo para ning\u00fan lado en esta",
        },
        {
          duration: 4.88,
          start: 226.2,
          text: "gira tanto en los Estados Unidos como",
        },
        {
          duration: 6.0,
          start: 227.879,
          text: "como Am\u00e9rica me la",
        },
        {
          duration: 6.6,
          start: 231.08,
          text: "he compartido con hasta con el club con",
        },
        {
          duration: 6.061,
          start: 233.879,
          text: "los bailarines con esa l\u00edo muy divertido",
        },
        {
          duration: 4.66,
          start: 237.68,
          text: "he ido a lugares he ido a comer",
        },
        {
          duration: 4.68,
          start: 239.94,
          text: "restaurantes no trato de estar pensando",
        },
        {
          duration: 4.7,
          start: 242.34,
          text: "en cosas sino como que de disfrutarme el",
        },
        {
          duration: 5.94,
          start: 244.62,
          text: "momento cantar con la gente",
        },
        {
          duration: 5.5,
          start: 247.04,
          text: "c\u00f3mo voy a dio con la presi\u00f3n o t\u00fa",
        },
        {
          duration: 4.7,
          start: 250.56,
          text: "Sencillamente lo haces me siento un",
        },
        {
          duration: 5.659,
          start: 252.54,
          text: "control yo creo que ahora mismo",
        },
        {
          duration: 7.12,
          start: 255.26,
          text: "todos los a\u00f1os",
        },
        {
          duration: 5.741,
          start: 258.199,
          text: "es que tambi\u00e9n llevo Cu\u00e1ntos seis",
        },
        {
          duration: 3.36,
          start: 262.38,
          text: "cinco a\u00f1os uno va cogiendo experiencia",
        },
        {
          duration: 4.38,
          start: 263.94,
          text: "tambi\u00e9n y ha superado muchas cosas",
        },
        {
          duration: 5.82,
          start: 265.74,
          text: "tambi\u00e9n he sanado muchas cosas de mi",
        },
        {
          duration: 5.159,
          start: 268.32,
          text: "vida etc\u00e9tera cosas que quiz\u00e1s ese el",
        },
        {
          duration: 5.1,
          start: 271.56,
          text: "giro que que dio como siempre he dicho",
        },
        {
          duration: 6.241,
          start: 273.479,
          text: "el giro que dio mi vida entera es muy",
        },
        {
          duration: 5.46,
          start: 276.66,
          text: "r\u00e1pido es un proceso entonces Pues yo",
        },
        {
          duration: 4.759,
          start: 279.72,
          text: "dir\u00eda que en este punto de mi vida y de",
        },
        {
          duration: 5.28,
          start: 282.12,
          text: "carrera es donde m\u00e1s centrado me siento",
        },
        {
          duration: 5.621,
          start: 284.479,
          text: "me siento m\u00e1s claro de lo que de lo que",
        },
        {
          duration: 5.94,
          start: 287.4,
          text: "soy de qui\u00e9n soy en cuesti\u00f3n a la",
        },
        {
          duration: 6.379,
          start: 290.1,
          text: "industria musical Y qui\u00e9n eres Benito",
        },
        {
          duration: 3.139,
          start: 293.34,
          text: "Mart\u00ednez hijo de",
        },
        {
          duration: 10.95,
          start: 298.61,
          text: "[M\u00fasica]",
        },
        {
          duration: 6.04,
          start: 306.8,
          text: "Quiz\u00e1s s\u00ed influye",
        },
        {
          duration: 6.12,
          start: 309.56,
          text: "influye el hecho de que vengo de un",
        },
        {
          duration: 6.859,
          start: 312.84,
          text: "barrio de Puerto Rico de una familia",
        },
        {
          duration: 8.38,
          start: 315.68,
          text: "trabajadora que fue que nac\u00ed en",
        },
        {
          duration: 6.101,
          start: 319.699,
          text: "ambiente de rigidillo ni nada y y que",
        },
        {
          duration: 3.479,
          start: 324.06,
          text: "tuve mi trabajo me entiende Tuve que",
        },
        {
          duration: 4.56,
          start: 325.8,
          text: "llevar mi resumen y mi trabajo a",
        },
        {
          duration: 4.861,
          start: 327.539,
          text: "trabajarla al m\u00ednimo salario y s\u00e9 lo que",
        },
        {
          duration: 4.559,
          start: 330.36,
          text: "tienen que llegar temprano el trabajo y",
        },
        {
          duration: 4.46,
          start: 332.4,
          text: "que si no te votan",
        },
        {
          duration: 4.081,
          start: 334.919,
          text: "me entiende tengo tengo esa disciplina",
        },
        {
          duration: 2.94,
          start: 336.86,
          text: "tuve Mis a\u00f1os qu\u00e9 s\u00e9 yo en la",
        },
        {
          duration: 3.78,
          start: 339.0,
          text: "universidad",
        },
        {
          duration: 5.02,
          start: 339.8,
          text: "joseando tirando el peso para la",
        },
        {
          duration: 4.919,
          start: 342.78,
          text: "gasolina para El peaje me entiende Como",
        },
        {
          duration: 5.939,
          start: 344.82,
          text: "que yo dir\u00eda que que s\u00ed a veces hab\u00eda",
        },
        {
          duration: 6.321,
          start: 347.699,
          text: "una camisa una ropa iba a salir y quer\u00eda",
        },
        {
          duration: 7.861,
          start: 350.759,
          text: "comprarme una camisa y no ten\u00eda no ten\u00eda",
        },
        {
          duration: 6.04,
          start: 354.02,
          text: "el dinero y era algo que no era ni caro",
        },
        {
          duration: 4.82,
          start: 358.62,
          text: "era como que no lo tengo tengo que",
        },
        {
          duration: 7.139,
          start: 360.06,
          text: "ponerme lo mismo que me puse ayer y",
        },
        {
          duration: 5.68,
          start: 363.44,
          text: "s\u00ed posiblemente eso haya aportado vas a",
        },
        {
          duration: 5.581,
          start: 367.199,
          text: "tomarte un break de m\u00fasica o todav\u00eda no",
        },
        {
          duration: 6.6,
          start: 369.12,
          text: "has pensado eso el 2023 es para m\u00ed el",
        },
        {
          duration: 5.94,
          start: 372.78,
          text: "2023 para m\u00ed para para mi salud f\u00edsica",
        },
        {
          duration: 5.759,
          start: 375.72,
          text: "para mi salud emocional para respirar",
        },
        {
          duration: 4.5,
          start: 378.72,
          text: "para disfrutar de los logros que que",
        },
        {
          duration: 4.861,
          start: 381.479,
          text: "hice esto ni me acordaba vamos a",
        },
        {
          duration: 5.16,
          start: 383.22,
          text: "celebrar lo que se joda vamos a v\u00e1monos",
        },
        {
          duration: 4.32,
          start: 386.34,
          text: "para aqu\u00ed v\u00e1monos para all\u00e1 vamos para",
        },
        {
          duration: 5.099,
          start: 388.38,
          text: "el bote vamos para el agua vamos el 2023",
        },
        {
          duration: 4.92,
          start: 390.66,
          text: "es para m\u00ed Qu\u00e9 quieres hacer que no",
        },
        {
          duration: 5.541,
          start: 393.479,
          text: "hayas hecho ahora mismo Ahora mismo",
        },
        {
          duration: 3.44,
          start: 395.58,
          text: "estoy en un punto donde",
        },
        {
          duration: 6.321,
          start: 401.699,
          text: "que pase lo que pase me entiende Como",
        },
        {
          duration: 5.821,
          start: 404.699,
          text: "que no no estoy buscando que pase algo",
        },
        {
          duration: 3.94,
          start: 408.02,
          text: "por ejemplo que se yo cuando se dio esa",
        },
        {
          duration: 3.799,
          start: 410.52,
          text: "colaboraci\u00f3n con Drake no fue como que",
        },
        {
          duration: 4.04,
          start: 411.96,
          text: "yo estaba pensando fue como que todo as\u00ed",
        },
        {
          duration: 6.581,
          start: 414.319,
          text: "espont\u00e1neo",
        },
        {
          duration: 6.819,
          start: 416.0,
          text: "este ahora es diferente Ahora ahora las",
        },
        {
          duration: 3.78,
          start: 420.9,
          text: "colaboraciones como que todo el mundo",
        },
        {
          duration: 4.38,
          start: 422.819,
          text: "todo el mundo quiere colaborar no",
        },
        {
          duration: 4.44,
          start: 424.68,
          text: "importa el artista m\u00e1s grande que t\u00fa te",
        },
        {
          duration: 4.921,
          start: 427.199,
          text: "imaginas en la tierra",
        },
        {
          duration: 4.5,
          start: 429.12,
          text: "quiere colaborar Entonces yo creo que el",
        },
        {
          duration: 3.66,
          start: 432.12,
          text: "artista m\u00e1s grande que yo me imagin\u00e9 en",
        },
        {
          duration: 4.519,
          start: 433.62,
          text: "la tierra en este momento eres t\u00fa Por",
        },
        {
          duration: 5.039,
          start: 435.78,
          text: "eso yo colaboro conmigo siempre entonces",
        },
        {
          duration: 4.9,
          start: 438.139,
          text: "como que yo las colaboraciones las veo",
        },
        {
          duration: 4.1,
          start: 440.819,
          text: "muy distintas como las de otras personas",
        },
        {
          duration: 5.041,
          start: 443.039,
          text: "yo las yo lo veo como algo especial",
        },
        {
          duration: 6.28,
          start: 444.919,
          text: "verdad para m\u00ed una colaboraci\u00f3n es casi",
        },
        {
          duration: 4.14,
          start: 448.08,
          text: "no quiero hacerle el m\u00e1s pero para m\u00ed",
        },
        {
          duration: 4.161,
          start: 451.199,
          text: "una colaboraci\u00f3n Casi casi como como",
        },
        {
          duration: 5.699,
          start: 452.22,
          text: "como tener sexo con alguien como",
        },
        {
          duration: 4.86,
          start: 455.36,
          text: "que vamos a hacer una canci\u00f3n y a veces",
        },
        {
          duration: 2.301,
          start: 457.919,
          text: "yo digo",
        },
        {
          duration: 5.12,
          start: 460.38,
          text: "hace una canci\u00f3n algo serio o sea como",
        },
        {
          duration: 6.96,
          start: 463.139,
          text: "que t\u00fa est\u00e1s diciendo cosas",
        },
        {
          duration: 6.039,
          start: 465.5,
          text: "y est\u00e1s con alguien que no se va a",
        },
        {
          duration: 3.72,
          start: 470.099,
          text: "borrarlo o sea eso va a estar para",
        },
        {
          duration: 4.021,
          start: 471.539,
          text: "siempre ah\u00ed estoy agradecido que era lo",
        },
        {
          duration: 5.301,
          start: 473.819,
          text: "m\u00e1s grande que t\u00fa te ve\u00edas cuando t\u00fa",
        },
        {
          duration: 6.6,
          start: 475.56,
          text: "empezaste porque la cabeza en el espejo",
        },
        {
          duration: 6.94,
          start: 479.12,
          text: "no pero digo porque claramente t\u00fa tienes",
        },
        {
          duration: 7.2,
          start: 482.16,
          text: "metas y ambici\u00f3n No yo nunca so\u00f1\u00e9 en mi",
        },
        {
          duration: 5.039,
          start: 486.06,
          text: "mente no hubo esto de que yo quiero ser",
        },
        {
          duration: 4.7,
          start: 489.36,
          text: "el m\u00e1s grande o quiero ser el n\u00famero uno",
        },
        {
          duration: 2.961,
          start: 491.099,
          text: "quiero llegar",
        },
        {
          duration: 4.96,
          start: 494.78,
          text: "yo simplemente quer\u00eda llegar y ya a lo",
        },
        {
          duration: 3.06,
          start: 498.3,
          text: "mejor pueden decir a este cabr\u00f3n ya",
        },
        {
          duration: 5.459,
          start: 499.74,
          text: "estoy hablando no est\u00e1 siendo",
        },
        {
          duration: 7.08,
          start: 501.36,
          text: "sincero yo invert\u00ed tiempo de mi vida y",
        },
        {
          duration: 3.921,
          start: 505.199,
          text: "mi juventud desde mi desde los 13",
        },
        {
          duration: 3.959,
          start: 508.44,
          text: "a\u00f1os",
        },
        {
          duration: 5.32,
          start: 509.12,
          text: "yo pasaba la mayor\u00eda del d\u00eda haciendo",
        },
        {
          duration: 6.801,
          start: 512.399,
          text: "ritmo",
        },
        {
          duration: 7.339,
          start: 514.44,
          text: "escribiendo cantando letras en mi mente",
        },
        {
          duration: 4.74,
          start: 519.2,
          text: "disfrut\u00e1ndome yo nunca",
        },
        {
          duration: 5.56,
          start: 521.779,
          text: "dije",
        },
        {
          duration: 4.54,
          start: 523.94,
          text: "quiero ser el m\u00e1s grande o Nunca dije ah",
        },
        {
          duration: 3.12,
          start: 527.339,
          text: "con esto que estoy haciendo me voy a",
        },
        {
          duration: 4.44,
          start: 528.48,
          text: "hacer de dinero No yo lo hac\u00eda porque lo",
        },
        {
          duration: 5.101,
          start: 530.459,
          text: "amaba y mi \u00fanico sue\u00f1o era cuando yo",
        },
        {
          duration: 4.68,
          start: 532.92,
          text: "espero poder ganarme la vida Haciendo",
        },
        {
          duration: 4.339,
          start: 535.56,
          text: "esto como que tener \u00e9xito haciendo lo",
        },
        {
          duration: 5.34,
          start: 537.6,
          text: "que lo que hagamos la primera vez que yo",
        },
        {
          duration: 4.541,
          start: 539.899,
          text: "como que yo vi como que gente conect\u00f3",
        },
        {
          duration: 3.48,
          start: 542.94,
          text: "con mis canciones ya para m\u00ed suena",
        },
        {
          duration: 4.1,
          start: 544.44,
          text: "grande la primera que yo cant\u00e9 delante",
        },
        {
          duration: 5.52,
          start: 546.42,
          text: "de 50 60",
        },
        {
          duration: 7.62,
          start: 548.54,
          text: "90 personas ya yo me sent\u00eda grande",
        },
        {
          duration: 7.2,
          start: 551.94,
          text: "entiende Ya yo me sent\u00eda feliz Entonces",
        },
        {
          duration: 4.54,
          start: 556.16,
          text: "yo esto estadio me los disfruto de la",
        },
        {
          duration: 3.36,
          start: 559.14,
          text: "misma manera que me disfrut\u00e9 de haber",
        },
        {
          duration: 5.52,
          start: 560.7,
          text: "cantado en Mayag\u00fcez all\u00ed con 100",
        },
        {
          duration: 5.94,
          start: 562.5,
          text: "personas y en Vega Baja con 70 personas",
        },
        {
          duration: 3.78,
          start: 566.22,
          text: "te lo juro que de la misma manera que me",
        },
        {
          duration: 4.019,
          start: 568.44,
          text: "disfrutaba ese Show me disfruto me",
        },
        {
          duration: 3.899,
          start: 570.0,
          text: "disfruto esto con 50.000 me hubiera",
        },
        {
          duration: 3.361,
          start: 572.459,
          text: "tocado quedarme con 100 personas",
        },
        {
          duration: 3.301,
          start: 573.899,
          text: "cantando todos los fines de semana con",
        },
        {
          duration: 2.39,
          start: 575.82,
          text: "eso yo estaba feliz",
        },
        {
          duration: 11.979,
          start: 577.2,
          text: "real",
        },
        {
          duration: 10.969,
          start: 578.21,
          text: "[M\u00fasica]",
        },
      ],
      videoId: "fG2Byh85FSM",
    },
  ],
};

export const TEST_EN_METADATA_ES_SUBS_EN_TRANSLATE = {
  videos: [
    {
      channelId: "UCsVcseUYbYjldc-XgcsiEbg",
      channelTitle: "Billboard",
      description:
        "Bad Bunny talks to our Chief Content Officer of Latin Leila Cobo about his current tour, World's Hottest Tour, his favorite places to tour, how he approaches collaborations, when he wants to take a break from his career, reflects on his journey to the top and more! \n\nTo learn more about this story: \nhttps://www.billboard.com/music/latin/bad-bunny-billboard-top-artist-2022-concerts-interview-cover-story-1235182432/\n\n\u25ba\u25ba Subscribe for more music news: http://blbrd.cm/Proracf\n\u25ba\u25ba See our latest videos: http://blbrd.cm/xOgw6VQ\n\nAbout: Billboard is the world's most influential music media brand, with an unmatched authority among artists, fans and the industry. Billboard powers the ultimate global music destination and magazine, featuring unrivaled reporting on music news, issues and trends, the industry\u2019s definitive charts, encompassing the most complete and well respected database of charts across all music genres, and elite conferences and events which regularly convene the industry and consumers around important conversations. \n\nConnect with Billboard Online:\nVisit the website: http://blbrd.cm/s5w4vTm\nLikes us on Facebook: http://blbrd.cm/ks26yg5\nFollow us on Twitter: http://blbrd.cm/uRNqRoN \nFollow us on Instagram: http://blbrd.cm/6QaTrhn\n\n#BadBunny #WorldsHottestTour #BillboardCover \n\nBad Bunny Talks Touring, Taking A Break, Reflects On His Journey to The Top & More | Billboard Cover\n\nBillboard\nhttps://youtube.com/billboard",
      language: "en",
      publishedAt: "2022-12-08T16:24:30Z",
      thumbnailUrl: "https://i.ytimg.com/vi/fG2Byh85FSM/maxresdefault.jpg",
      title:
        "Bad Bunny Talks Touring, Taking A Break, Reflects On His Journey to The Top & More | Billboard Cover",
      transcript_text_only:
        "I would say that at this point in my life and career is where I feel most focused, I feel clearer about who I am, who I am in terms of the music industry And who you are Benito Mart\u00ednez son of a [ __ ] [Music] Hello  Benito How are you doing well and you are very well Well when I first interviewed you we were in New York and you just played Yankee Stadium and now we are here in Argentina in the middle of the tour something has changed I don't think it has changed much I think the feeling maybe  of the tour due to the fact that now we are in America, complete here that I went a lot that I didn't come, it feels like I was visiting relatives that I hadn't seen for a long time and Argentina national madness, in truth, my favorite concert of my life was last Saturday of your  my whole life taking out what Puerto Rico is, which I always take aside as a feeling that cannot be compared. And why, Benito, because I remember that in New York you told me that New York and Yankee Stadium were so visceral, not New York because in  New York as New York I love New York and it's like all the existing Latin communities come together in one place specifically mostly Puerto Rican and Dominican that you know those are family to me so I think that all that plus the city of  New York has a magical portion because it always makes it special. Argentina has always been a bastard, but I kind of forgot. No, it's not like a ritual, but when I enter the stage, I enter without looking at the audience, I enter walking straight with the refrigerator, dad, dad.  dad looking at the floor looking at the floor so that I'm not going to fall I put the refrigerator I sit down that is I'm turning my back to the audience I sit down with a breath and I do and there I look at the crowd and it's always like it doesn't matter where it is  It 's always like a fist like the devil How do you choose Who do you invite in each show I try to invite whoever I feel is available that we have a collaboration within the tracklist of what I'm singing also correct me if I'm wrong but not with ibi  You have a song I don't know with Ivi I don't have a song as such But I do have a version, a remix that was made that was a special remix that was made for me perreo alone that was with Ivy Queen with him And then I did that remix more  in a way of homage as well and of respect to women and to her specifically [Music] I consider that the first the last tour of the world was a little more special in the emotional sentimental term but I enjoyed the World more I enjoyed it more  I have gone out. Generally I don't go out anywhere on this tour, both in the United States and in America. I have shared it with even the club with the dancers with that very fun mess. I have gone to places. I have gone to eat in restaurants. I don't deal.  of thinking about things but rather of enjoying the moment singing with people how am I going to deal with the pressure or you You just do it I feel in control I think that right now every year is that the hell I've been there too How many six five years one  He is also gaining experience and has overcome many things, I have also healed many things in my life, etc., things that perhaps that is the turn that took, as I have always said, the turn that my entire life took is very fast, it is a process, so, well, I would say that in  This point in my life and career is where I feel most focused I feel clearer about who I am about who I am in question to the music industry And who you are Benito Mart\u00ednez son of a [ __ ] [Music] Maybe it does influence the  The fact that I come from a neighborhood in Puerto Rico from a working family that was that I was born in a rigid environment or nothing and that I had my job you understand me. I had to take my resume and my job to work at the minimum wage and I know what they have to do  get to work early and if they don't vote for you you understand me I have that discipline I had My years what do I know at the university josing around throwing the peso for gas for The toll you understand me Like I would say yes sometimes there was a shirt a  clothes were going to go out and I wanted to buy a shirt and I didn't have it I didn't have the money and it was something that wasn't even expensive it was like I don't have it I have to wear the same thing I wore yesterday and yes possibly that contributed are you going to take a break  about music or you still haven't thought about that, 2023 is for me 2023 for me for my physical health for my emotional health to breathe to enjoy the achievements that I did n't even remember doing this let's celebrate whatever the hell let's go here let's go there let's go to the boat let's go to the water let's go 2023 is for me What do you want to do that you haven't done right now Right now I'm at a point where whatever happens understands me Like no I'm not looking for what happens  Something, for example, that I know when that collaboration with Drake took place, it wasn't like what I was thinking, it was like everything was spontaneous, this is different now Now, now the collaborations are like everyone, everyone wants to collaborate, it doesn't matter what the biggest artist is.  that you imagine on earth wants to collaborate So I believe that the greatest artist that I imagined on earth at this moment is you That's why I always collaborate with myself so I see collaborations as very different from those of other people I see it as something special, true, for me a collaboration is almost I do n't want to do it the most but for me a collaboration Almost almost like having sex with someone like we are going to make a song and sometimes I say make a song something serious  I mean, you're saying things and you're with someone who's not going to erase it, or that's going to be there forever. I'm grateful that it was the biggest thing you saw when you started because the head in the mirror isn't, but I'm saying  because clearly you have goals and ambition No, I never dreamed in my mind there was not this thing that I want to be the greatest or I want to be number one I want to get there I simply wanted to get there and maybe they can tell this bastard I 'm already talking  [ __ ] is not being sincere I invested time of my life and my youth since my [ __ ] since I was 13 years old I spent most of the day making rhythm writing singing lyrics in my mind enjoying myself I never said I want to be the greatest or I never said ah with this  What am I doing? I'm going to make money. I didn't do it because I loved it and my only dream was when I hope to be able to make a living. Doing this like being successful doing whatever we do the first time I kind of saw how.  that people connected with my songs and for me it sounds great the first one that I sang in front of 50 60 90 people I already felt great understand I already felt happy So I enjoyed this stadium in the same way that I enjoyed having sung  In Mayag\u00fcez there with 100 people and in Vega Baja with 70 people I swear that in the same way that I enjoyed that Show I enjoyed myself I enjoyed this with 50,000 I would have had to stay with 100 people singing every weekend with that I was  real happy [Music] ",
      transcript_with_timestamps: [
        {
          duration: 4.62,
          start: 0.0,
          text: "I would say that at this point in my life and",
        },
        {
          duration: 5.279,
          start: 2.58,
          text: "career is where I feel most focused, I",
        },
        {
          duration: 6.12,
          start: 4.62,
          text: "feel clearer about who I",
        },
        {
          duration: 6.181,
          start: 7.859,
          text: "am, who I am in terms of the",
        },
        {
          duration: 6.439,
          start: 10.74,
          text: "music industry And who you are Benito",
        },
        {
          duration: 3.139,
          start: 14.04,
          text: "Mart\u00ednez son of a [ __ ]",
        },
        {
          duration: 19.4,
          start: 18.42,
          text: "[Music]",
        },
        {
          duration: 7.0,
          start: 35.18,
          text: "Hello  Benito How are you doing",
        },
        {
          duration: 6.1,
          start: 37.82,
          text: "well and you are very well Well when I first",
        },
        {
          duration: 4.399,
          start: 42.18,
          text: "interviewed you we were in New York and you",
        },
        {
          duration: 5.52,
          start: 43.92,
          text: "just played Yankee Stadium",
        },
        {
          duration: 5.441,
          start: 46.579,
          text: "and now we are here in Argentina in the",
        },
        {
          duration: 4.08,
          start: 49.44,
          text: "middle of the tour something has changed I don't think it",
        },
        {
          duration: 4.679,
          start: 52.02,
          text: "has changed much I think",
        },
        {
          duration: 5.3,
          start: 53.52,
          text: "the feeling maybe  of the tour due to the",
        },
        {
          duration: 5.941,
          start: 56.699,
          text: "fact that now we are in America,",
        },
        {
          duration: 5.22,
          start: 58.82,
          text: "complete here that I went a lot that I didn't come,",
        },
        {
          duration: 4.92,
          start: 62.64,
          text: "it feels like I was visiting",
        },
        {
          duration: 5.98,
          start: 64.04,
          text: "relatives that I hadn't seen for a long time and",
        },
        {
          duration: 4.34,
          start: 67.56,
          text: "Argentina national madness, in truth, my",
        },
        {
          duration: 5.599,
          start: 70.02,
          text: "favorite concert of my life",
        },
        {
          duration: 7.6,
          start: 71.9,
          text: "was last Saturday of your  my",
        },
        {
          duration: 5.441,
          start: 75.619,
          text: "whole life taking out what Puerto Rico is, which I",
        },
        {
          duration: 4.38,
          start: 79.5,
          text: "always take aside as a",
        },
        {
          duration: 4.26,
          start: 81.06,
          text: "feeling that cannot be compared. And why,",
        },
        {
          duration: 3.66,
          start: 83.88,
          text: "Benito, because I remember that in New",
        },
        {
          duration: 4.979,
          start: 85.32,
          text: "York you told me that New York and Yankee",
        },
        {
          duration: 5.1,
          start: 87.54,
          text: "Stadium were so visceral, not",
        },
        {
          duration: 5.101,
          start: 90.299,
          text: "New York because in  New York as",
        },
        {
          duration: 4.439,
          start: 92.64,
          text: "New York I love New York and it's like",
        },
        {
          duration: 2.899,
          start: 95.4,
          text: "all the existing Latin communities come together",
        },
        {
          duration: 4.68,
          start: 98.299,
          text: "in one place",
        },
        {
          duration: 5.621,
          start: 100.759,
          text: "specifically",
        },
        {
          duration: 5.161,
          start: 102.979,
          text: "mostly Puerto Rican and Dominican that you",
        },
        {
          duration: 4.919,
          start: 106.38,
          text: "know those are family to me",
        },
        {
          duration: 4.18,
          start: 108.14,
          text: "so I think that all that plus the",
        },
        {
          duration: 3.0,
          start: 111.299,
          text: "city of  New York has a",
        },
        {
          duration: 5.1,
          start: 112.32,
          text: "magical portion because it always makes it special.",
        },
        {
          duration: 5.841,
          start: 114.299,
          text: "Argentina has always been a bastard, but I kind of",
        },
        {
          duration: 2.72,
          start: 117.42,
          text: "forgot.",
        },
        {
          duration: 5.561,
          start: 122.659,
          text: "No, it's not like a ritual, but when I",
        },
        {
          duration: 5.279,
          start: 125.7,
          text: "enter the stage, I enter without looking at the",
        },
        {
          duration: 5.4,
          start: 128.22,
          text: "audience, I enter walking straight with",
        },
        {
          duration: 4.021,
          start: 130.979,
          text: "the refrigerator, dad, dad.  dad looking at the",
        },
        {
          duration: 4.199,
          start: 133.62,
          text: "floor looking at the floor so that I'm not going to",
        },
        {
          duration: 4.68,
          start: 135.0,
          text: "fall I put the refrigerator I sit down that is I'm",
        },
        {
          duration: 6.56,
          start: 137.819,
          text: "turning my back to the audience I",
        },
        {
          duration: 8.419,
          start: 139.68,
          text: "sit down with a breath and I do",
        },
        {
          duration: 3.72,
          start: 144.379,
          text: "and there I look at",
        },
        {
          duration: 5.4,
          start: 148.68,
          text: "the crowd and",
        },
        {
          duration: 5.32,
          start: 151.34,
          text: "it's always like it doesn't matter where it is  It",
        },
        {
          duration: 5.879,
          start: 154.08,
          text: "'s always like a fist like the",
        },
        {
          duration: 6.78,
          start: 156.66,
          text: "devil How do you choose Who do you invite in",
        },
        {
          duration: 5.941,
          start: 159.959,
          text: "each show I try to invite whoever I",
        },
        {
          duration: 5.0,
          start: 163.44,
          text: "feel is available that",
        },
        {
          duration: 6.0,
          start: 165.9,
          text: "we have a collaboration within",
        },
        {
          duration: 6.22,
          start: 168.44,
          text: "the tracklist of what I'm singing",
        },
        {
          duration: 5.58,
          start: 171.9,
          text: "also correct me if I'm wrong but",
        },
        {
          duration: 5.219,
          start: 174.66,
          text: "not with ibi  You have a song I don't know with Ivi I don't",
        },
        {
          duration: 5.58,
          start: 177.48,
          text: "have a song",
        },
        {
          duration: 5.701,
          start: 179.879,
          text: "as such But I do have a version, a",
        },
        {
          duration: 5.24,
          start: 183.06,
          text: "remix that was made that was a",
        },
        {
          duration: 5.579,
          start: 185.58,
          text: "special remix that was made for me perreo alone",
        },
        {
          duration: 6.34,
          start: 188.3,
          text: "that was with Ivy Queen with him And then",
        },
        {
          duration: 6.121,
          start: 191.159,
          text: "I did that remix more  in a way of",
        },
        {
          duration: 4.099,
          start: 194.64,
          text: "homage as well and of respect to women",
        },
        {
          duration: 5.64,
          start: 197.28,
          text: "and",
        },
        {
          duration: 4.181,
          start: 198.739,
          text: "to her specifically",
        },
        {
          duration: 6.01,
          start: 203.15,
          text: "[Music]",
        },
        {
          duration: 5.201,
          start: 211.159,
          text: "I consider that the first the last tour",
        },
        {
          duration: 5.401,
          start: 213.599,
          text: "of the world was a little more special in the",
        },
        {
          duration: 5.22,
          start: 216.36,
          text: "emotional sentimental term but I",
        },
        {
          duration: 5.22,
          start: 219.0,
          text: "enjoyed the World more I",
        },
        {
          duration: 4.62,
          start: 221.58,
          text: "enjoyed it more  I have gone out. Generally",
        },
        {
          duration: 3.659,
          start: 224.22,
          text: "I don't go out anywhere on this",
        },
        {
          duration: 4.88,
          start: 226.2,
          text: "tour, both in the United States and",
        },
        {
          duration: 6.0,
          start: 227.879,
          text: "in America. I",
        },
        {
          duration: 6.6,
          start: 231.08,
          text: "have shared it with even the club with",
        },
        {
          duration: 6.061,
          start: 233.879,
          text: "the dancers with that very fun mess.",
        },
        {
          duration: 4.66,
          start: 237.68,
          text: "I have gone to places. I have gone to eat in",
        },
        {
          duration: 4.68,
          start: 239.94,
          text: "restaurants. I don't deal.  of thinking",
        },
        {
          duration: 4.7,
          start: 242.34,
          text: "about things but rather of enjoying the",
        },
        {
          duration: 5.94,
          start: 244.62,
          text: "moment singing with people",
        },
        {
          duration: 5.5,
          start: 247.04,
          text: "how am I going to deal with the pressure or you You",
        },
        {
          duration: 4.7,
          start: 250.56,
          text: "just do it I feel in",
        },
        {
          duration: 5.659,
          start: 252.54,
          text: "control I think that right now",
        },
        {
          duration: 7.12,
          start: 255.26,
          text: "every year",
        },
        {
          duration: 5.741,
          start: 258.199,
          text: "is that the hell I've been there too How many six",
        },
        {
          duration: 3.36,
          start: 262.38,
          text: "five years one  He is also gaining experience",
        },
        {
          duration: 4.38,
          start: 263.94,
          text: "and has overcome many things,",
        },
        {
          duration: 5.82,
          start: 265.74,
          text: "I have also healed many things in my",
        },
        {
          duration: 5.159,
          start: 268.32,
          text: "life, etc., things that perhaps that is the",
        },
        {
          duration: 5.1,
          start: 271.56,
          text: "turn that took, as I have always said,",
        },
        {
          duration: 6.241,
          start: 273.479,
          text: "the turn that my entire life took is very",
        },
        {
          duration: 5.46,
          start: 276.66,
          text: "fast, it is a process, so, well, I",
        },
        {
          duration: 4.759,
          start: 279.72,
          text: "would say that in  This point in my life and",
        },
        {
          duration: 5.28,
          start: 282.12,
          text: "career is where I feel most focused I",
        },
        {
          duration: 5.621,
          start: 284.479,
          text: "feel clearer about who I",
        },
        {
          duration: 5.94,
          start: 287.4,
          text: "am about who I am in question to the",
        },
        {
          duration: 6.379,
          start: 290.1,
          text: "music industry And who you are Benito",
        },
        {
          duration: 3.139,
          start: 293.34,
          text: "Mart\u00ednez son of a [ __ ]",
        },
        {
          duration: 10.95,
          start: 298.61,
          text: "[Music]",
        },
        {
          duration: 6.04,
          start: 306.8,
          text: "Maybe it does influence",
        },
        {
          duration: 6.12,
          start: 309.56,
          text: "the  The fact that I come from a",
        },
        {
          duration: 6.859,
          start: 312.84,
          text: "neighborhood in Puerto Rico from a",
        },
        {
          duration: 8.38,
          start: 315.68,
          text: "working family that was that I was born in a",
        },
        {
          duration: 6.101,
          start: 319.699,
          text: "rigid environment or nothing and that I",
        },
        {
          duration: 3.479,
          start: 324.06,
          text: "had my job you understand me. I had to",
        },
        {
          duration: 4.56,
          start: 325.8,
          text: "take my resume and my job to",
        },
        {
          duration: 4.861,
          start: 327.539,
          text: "work at the minimum wage and I know what",
        },
        {
          duration: 4.559,
          start: 330.36,
          text: "they have to do  get to work early and",
        },
        {
          duration: 4.46,
          start: 332.4,
          text: "if they don't vote for you you",
        },
        {
          duration: 4.081,
          start: 334.919,
          text: "understand me I have that discipline I",
        },
        {
          duration: 2.94,
          start: 336.86,
          text: "had My years what do I know at the",
        },
        {
          duration: 3.78,
          start: 339.0,
          text: "university",
        },
        {
          duration: 5.02,
          start: 339.8,
          text: "josing around throwing the peso for",
        },
        {
          duration: 4.919,
          start: 342.78,
          text: "gas for The toll you understand me Like I would",
        },
        {
          duration: 5.939,
          start: 344.82,
          text: "say yes sometimes there was",
        },
        {
          duration: 6.321,
          start: 347.699,
          text: "a shirt a  clothes were going to go out and I wanted",
        },
        {
          duration: 7.861,
          start: 350.759,
          text: "to buy a shirt and I didn't have it I didn't have",
        },
        {
          duration: 6.04,
          start: 354.02,
          text: "the money and it was something that wasn't even expensive it",
        },
        {
          duration: 4.82,
          start: 358.62,
          text: "was like I don't have it I have to",
        },
        {
          duration: 7.139,
          start: 360.06,
          text: "wear the same thing I wore yesterday and",
        },
        {
          duration: 5.68,
          start: 363.44,
          text: "yes possibly that contributed are you going to",
        },
        {
          duration: 5.581,
          start: 367.199,
          text: "take a break  about music or you still haven't",
        },
        {
          duration: 6.6,
          start: 369.12,
          text: "thought about that, 2023 is for me",
        },
        {
          duration: 5.94,
          start: 372.78,
          text: "2023 for me for my physical health",
        },
        {
          duration: 5.759,
          start: 375.72,
          text: "for my emotional health to breathe",
        },
        {
          duration: 4.5,
          start: 378.72,
          text: "to enjoy the achievements that I did",
        },
        {
          duration: 4.861,
          start: 381.479,
          text: "n't even remember doing this let's",
        },
        {
          duration: 5.16,
          start: 383.22,
          text: "celebrate whatever the hell let's go",
        },
        {
          duration: 4.32,
          start: 386.34,
          text: "here let's go there let's go to",
        },
        {
          duration: 5.099,
          start: 388.38,
          text: "the boat let's go to the water let's go 2023",
        },
        {
          duration: 4.92,
          start: 390.66,
          text: "is for me What do you want to do that you",
        },
        {
          duration: 5.541,
          start: 393.479,
          text: "haven't done right now Right now",
        },
        {
          duration: 3.44,
          start: 395.58,
          text: "I'm at a point where whatever",
        },
        {
          duration: 6.321,
          start: 401.699,
          text: "happens understands me Like",
        },
        {
          duration: 5.821,
          start: 404.699,
          text: "no I'm not looking for what happens  Something,",
        },
        {
          duration: 3.94,
          start: 408.02,
          text: "for example, that I know when that",
        },
        {
          duration: 3.799,
          start: 410.52,
          text: "collaboration with Drake took place, it wasn't like what",
        },
        {
          duration: 4.04,
          start: 411.96,
          text: "I was thinking, it was like everything was",
        },
        {
          duration: 6.581,
          start: 414.319,
          text: "spontaneous,",
        },
        {
          duration: 6.819,
          start: 416.0,
          text: "this is different now Now, now the",
        },
        {
          duration: 3.78,
          start: 420.9,
          text: "collaborations are like everyone,",
        },
        {
          duration: 4.38,
          start: 422.819,
          text: "everyone wants to collaborate, it doesn't",
        },
        {
          duration: 4.44,
          start: 424.68,
          text: "matter what the biggest artist is.  that you",
        },
        {
          duration: 4.921,
          start: 427.199,
          text: "imagine on earth",
        },
        {
          duration: 4.5,
          start: 429.12,
          text: "wants to collaborate So I believe that the",
        },
        {
          duration: 3.66,
          start: 432.12,
          text: "greatest artist that I imagined on",
        },
        {
          duration: 4.519,
          start: 433.62,
          text: "earth at this moment is you That's",
        },
        {
          duration: 5.039,
          start: 435.78,
          text: "why I always collaborate with myself",
        },
        {
          duration: 4.9,
          start: 438.139,
          text: "so I see collaborations as",
        },
        {
          duration: 4.1,
          start: 440.819,
          text: "very different from those of other people",
        },
        {
          duration: 5.041,
          start: 443.039,
          text: "I see it as something special,",
        },
        {
          duration: 6.28,
          start: 444.919,
          text: "true, for me a collaboration is almost I do",
        },
        {
          duration: 4.14,
          start: 448.08,
          text: "n't want to do it the most but for me",
        },
        {
          duration: 4.161,
          start: 451.199,
          text: "a collaboration Almost almost",
        },
        {
          duration: 5.699,
          start: 452.22,
          text: "like having sex with someone like",
        },
        {
          duration: 4.86,
          start: 455.36,
          text: "we are going to make a song and sometimes",
        },
        {
          duration: 2.301,
          start: 457.919,
          text: "I say",
        },
        {
          duration: 5.12,
          start: 460.38,
          text: "make a song something serious  I mean,",
        },
        {
          duration: 6.96,
          start: 463.139,
          text: "you're saying things",
        },
        {
          duration: 6.039,
          start: 465.5,
          text: "and you're with someone who's not going to",
        },
        {
          duration: 3.72,
          start: 470.099,
          text: "erase it, or that's going to be there",
        },
        {
          duration: 4.021,
          start: 471.539,
          text: "forever. I'm grateful that it was the",
        },
        {
          duration: 5.301,
          start: 473.819,
          text: "biggest thing you saw when you",
        },
        {
          duration: 6.6,
          start: 475.56,
          text: "started because the head in the mirror",
        },
        {
          duration: 6.94,
          start: 479.12,
          text: "isn't, but I'm saying  because clearly you have",
        },
        {
          duration: 7.2,
          start: 482.16,
          text: "goals and ambition No, I never dreamed in my",
        },
        {
          duration: 5.039,
          start: 486.06,
          text: "mind there was not this thing that I want to be",
        },
        {
          duration: 4.7,
          start: 489.36,
          text: "the greatest or I want to be number one I",
        },
        {
          duration: 2.961,
          start: 491.099,
          text: "want to get there",
        },
        {
          duration: 4.96,
          start: 494.78,
          text: "I simply wanted to get there and maybe they",
        },
        {
          duration: 3.06,
          start: 498.3,
          text: "can tell this bastard I",
        },
        {
          duration: 5.459,
          start: 499.74,
          text: "'m already talking  [ __ ] is not being",
        },
        {
          duration: 7.08,
          start: 501.36,
          text: "sincere I invested time of my life and",
        },
        {
          duration: 3.921,
          start: 505.199,
          text: "my youth since my [ __ ] since I was 13",
        },
        {
          duration: 3.959,
          start: 508.44,
          text: "years old",
        },
        {
          duration: 5.32,
          start: 509.12,
          text: "I spent most of the day making",
        },
        {
          duration: 6.801,
          start: 512.399,
          text: "rhythm",
        },
        {
          duration: 7.339,
          start: 514.44,
          text: "writing singing lyrics in my mind",
        },
        {
          duration: 4.74,
          start: 519.2,
          text: "enjoying myself I never",
        },
        {
          duration: 5.56,
          start: 521.779,
          text: "said",
        },
        {
          duration: 4.54,
          start: 523.94,
          text: "I want to be the greatest or I never said ah",
        },
        {
          duration: 3.12,
          start: 527.339,
          text: "with this  What am I doing? I'm going to",
        },
        {
          duration: 4.44,
          start: 528.48,
          text: "make money. I didn't do it because I",
        },
        {
          duration: 5.101,
          start: 530.459,
          text: "loved it and my only dream was when I",
        },
        {
          duration: 4.68,
          start: 532.92,
          text: "hope to be able to make a living. Doing",
        },
        {
          duration: 4.339,
          start: 535.56,
          text: "this like being successful doing",
        },
        {
          duration: 5.34,
          start: 537.6,
          text: "whatever we do the first time",
        },
        {
          duration: 4.541,
          start: 539.899,
          text: "I kind of saw how.  that people connected",
        },
        {
          duration: 3.48,
          start: 542.94,
          text: "with my songs and for me it sounds",
        },
        {
          duration: 4.1,
          start: 544.44,
          text: "great the first one that I sang in front",
        },
        {
          duration: 5.52,
          start: 546.42,
          text: "of 50 60",
        },
        {
          duration: 7.62,
          start: 548.54,
          text: "90 people I already felt great",
        },
        {
          duration: 7.2,
          start: 551.94,
          text: "understand I already felt happy So",
        },
        {
          duration: 4.54,
          start: 556.16,
          text: "I enjoyed this stadium in the",
        },
        {
          duration: 3.36,
          start: 559.14,
          text: "same way that I enjoyed having",
        },
        {
          duration: 5.52,
          start: 560.7,
          text: "sung  In Mayag\u00fcez there with 100",
        },
        {
          duration: 5.94,
          start: 562.5,
          text: "people and in Vega Baja with 70 people I",
        },
        {
          duration: 3.78,
          start: 566.22,
          text: "swear that in the same way that I",
        },
        {
          duration: 4.019,
          start: 568.44,
          text: "enjoyed that Show I enjoyed myself I",
        },
        {
          duration: 3.899,
          start: 570.0,
          text: "enjoyed this with 50,000 I would have had to",
        },
        {
          duration: 3.361,
          start: 572.459,
          text: "stay with 100 people",
        },
        {
          duration: 3.301,
          start: 573.899,
          text: "singing every weekend with",
        },
        {
          duration: 2.39,
          start: 575.82,
          text: "that I was  real happy",
        },
        {
          duration: 10.969,
          start: 578.21,
          text: "[Music]",
        },
      ],
      videoId: "fG2Byh85FSM",
    },
  ],
};

// Test URL: https://youtube.com/playlist?list=PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp&si=pVCsnjOVO-H1Rpk4
export const TEST_PLAYLIST_ID_RESPONSE_0 = {
  videos: [
    {
      channelId: "UCjjHivHJM_ShHMsMeHY5v2w",
      channelTitle: "Matt Thorne",
      description:
        "Looking to stay ahead of the curve when it comes to graphic design? \n\nIn this video, i explore the cutting-edge trends, along with the styles, techniques, and approaches that are dominating and will continue to dominate the world of design this year\n\nFrom bold and bright colour schemes of Neo brutalism, to the return of retro right through to unbelievable ai imagery. I'll break down each graphic design trend and the styles used within. \n\nSo whether you're a seasoned design pro or just getting started in the field, you should scroll back up and whack that Like button.\n\nSubscribe for more videos\n\u25ba https://bit.ly/3FEHvf1 \n\nWebsite / Portfolio \n\u25ba http://sketchy.media/\n\nNewsletter, guides + templates\n\u25ba Newsletter: http://sketchy.media/newsletter\n\nFollow Me\n\u25ba Instagram: https://www.instagram.com/sketchymedia/\nGet inspired by the future of graphic design!\n\n\u2014\u2014\u2014\u2014\u2014Contents of this video\u2014\u2014\u2014\u2014\u2014\n0:00 - Intro\n0:50 - First Trend + Styles\n2:23 - Trend 02\n3:10 - Trend 03\n4:37 - Trend 04\n5:45 - Trend 05\n7:24 - Trend 06\n8:00 - Trend 07\n9:23 - Trend 08\n10:12 - Trend 09\n11:29 - Trend 10\n12:23 - Trend 11\n13:09 - Trend 12\n13:40 - Trend 13\n14:17 - Trend 14\n15:25 - Trend 15\n16:07 - Trend 16\n16:54 - Trend 17\n17:35 - You should click this",
      itemCount: 3,
      playlistDescription: "",
      playlistId: "PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp",
      playlistOwnerChannelId: "UCj_s79IpT7usLrW8JQSgVFA",
      playlistOwnerChannelTitle: "Daniel Segarra",
      playlistThumbnailUrl:
        "https://i.ytimg.com/vi/-jRkI1nOwbc/maxresdefault.jpg",
      playlistTitle: "SummarizeTHIS",
      publishedAt: "2023-12-05T21:16:08Z",
      thumbnailUrl: "https://i.ytimg.com/vi/-jRkI1nOwbc/maxresdefault.jpg",
      title: "Graphic Design Trends 2024 [18 styles explained]",
      transcript_text_only:
        "in this video we'll be discussing the graphic design Trends and styles that you need to know this year we're talking web design posters branding and packaging so whether you're a seasoned designer or just starting out these Trends should give you some Sparks of inspiration for your next project first Trend slash Style on this list is neo-brutalism brutalism has been used in graphic design for a very long time it often disregards traditional layout Styles and principles using large blocks of text that may be difficult to read and high contrast in colors it was originally popular in poster and graphic design although some attempts were made in the late 90s to bring it to the web Neo brutalism combines traditional layout concepts with solid colors simple yet unique typography it's not afraid to use pure black with other colors yet we're talking hashtag zero zero zero zero zero zero so we're talking bold contrasty raw organic like materials I actually quite like the Resurgence it's had the push to the more kind of colorful and playful direction that we're seeing in the UI of this app here the not so great thing however is we've seen a whole bunch of Brands rushing towards Neo brutalism and rebranding themselves in a pretty much similar manner one that we all know is Gum Road don't really know why they rebranded to this to be honest I didn't feel like neo-brutalism was the right Road for them Road I feel like I've seen it too many times and then I like the other extreme which is the more refined minimalism look we're talking playful kind of modern type but against the utilitarian look of minimalist design we've also seen a lot of pixels and then the more traditional Neo brutalist dark with the one gradient style the next trend on the list is pop futurism the 1980s are back glows gradients textures and an illustrated look it's quite nice to see this as a Resurgence although I think we've not moved it on enough one of the things you notice a lot about this Hop futurism look is the use of glows and more textural feel of the illustration one of the things that we're seeing a lot of in this specific style is a retro throwback to elements such as game boys old school Tech things that actually bring the Nostalgia back the advancement on this trend and style that I really like is how it's been fused with the maximalism style where we've put in these retro illustrations and kind of overloading them to make pretty cool compositions a bit more digital Arty but I think these things look awesome the next Trend we will continue to see this year is the Y2K Evolution the Y2K Evolution refers back to the Y2K aesthetic which is essentially the design style of the late 90s and early 2000s as we came into what I call New Media or the internet this aesthetic is a nostalgic style that basically draws on the elements of what it looked like to be alive on the early web characterized by bright and bold colors pixelated imagery and cybernetic themes with the Y2K aesthetic you can expect to see plenty of holograms Nettles liquid Metals pixels and a general dose of futurism things like the early Bjork artwork a lot of throwback to the early internet windows we see a lot of distorted type and holographic themes one of my favorite uses of this in branding is the Lego and Levi's collaboration where they took the whole Y2K aesthetic made it pixely using the Lego blocks and I think they just nailed the colors the look and feel and the throwback Nostalgia a sub Trend in itself is the liquid Metals use we're seeing a lot of chrome liquid Metals Graphics the liquify tool is being heavily used in branded imagery and promo styles again looking at the block colors it was almost like it was early Japanese feel blended with the internet very pop Arty General feeling of this aesthetic the next style slash Trend that we're seeing is what I'm calling typo Fusion which is essentially just creative typography While most Trend lists that you've seen or I certainly have seen is either saying Sans serif fonts are making a comeback or serif fonts are making a comeback I think it's all rubbish typography in general is becoming a lot more experimental expressive and creative serif fonts which are characterized with the top and bottom lines at the letters have definitely had a Resurgence in the last few years that Trend in particular has been driven by the sense of security that the tradition of the serif itself evokes and this is particularly important in today's world where most brand consumerism is predicated on trust further to this we're seeing a lot of movement especially this kind of retro 3D aesthetic but the reality is not one font or the other font is taking a lead they are both being used in equal measure by different people for different purposes and again I carry out all points when it comes to trends that it is how you use Styles the way that you design should solve a problem and not follow a specific Trend the next style or Trend we are seeing is the return of retro vintage this trend in graphic design is typified by early 1980s advertising style this also pushes into the 90s a little bit more taking in the texture of the grain which is prominent in this visual style we see a lot of geometric shapes and minimalist layout a lot of refined simplification we tend to see a lot of stickers and also line art like here you can see the old school Nike ads which use the Big Font Futura along with just a simple image and their logo absolute took their own spin on this by using the simplified grainy and refined aesthetic with the high contrast product photography which is also a micro Trend in itself going wider into the Retro vintage aesthetic we're starting to see a lot more line art yes we're talking the return of sign painter and some more of these cool cartoony Graphics which were typified by 70s American design style stickers are a trend that we've been seeing emerge over the last couple years they're everywhere and we'll continue to see more of this as they have a very useful role to play in branding they are great for using as accents to a brand to extend the message or to bring something to life here's a really cool example of something more recent from Nike where they took some of those cues from earlier in the near brutalism where they had the simplified fonts interchanged with the imagery and then overlaid with some retro design the next style and Trend we're talking about is modern surrealism as we spend more time in the digital world and less in physical places the lines are are getting blurred surrealism is an enduringly popular design approach because of its novelty and endless original weirdness lots of airbrushing abstract shapes and textures some of the cool ways we're seeing modern surrealism at the moment is how brands are using this textured almost painty type feel and those work really well on the texture of cardboard when it's produced in a packaging and Physical Realm the next style is what I'm calling still tripping or trippy it's a little bit of an extension to Modern surrealism but really going more into psychedelic surrealism maybe because loads of people are doing micro dosing these days that this has become popular but again it's going back to that macro trend of escaping reality so what we're seeing is a lot of kind of acid visuals psychedelic illustrations warped imagery and a general depiction of a dystopian World some really cool uses I've seen on this is taking some of the Y2K aesthetic and bringing it into this kind of new dimension Brands like Sonos have taken their trippy psychedelic visuals and made them part and parcel of their core product photography which looks awesome and then we've got some more uses of the wacky illustrations in some of like the energy drinks and the beers and then we're just seeing some really cool like airbrushed trippy photos another cool application of the Psychedelic visuals are taking the old retro stickers and obviously bringing that kind of 60s hippie Nostalgia into the design and Brands such as meltdown are combining this really well on their packaging the next style of trend that we are seeing is new maximalism the last few years minimal trend has taken a bit of a U-turn designers are using this as an escape from uninspiring routine gains and restrictions so we're seeing bold and explosive colors Optical illustrations and Illusions lots of shapes it's just generally chaotic to be honest but some of these brands are doing it really really well why it's done a really cool front cover with what lies ahead and again it's just evoking that feeling of Chaos in true designer style there is now and then some organization in it which we can all appreciate it just looks beautiful to be honest just a general mishmash of shapes and feeling the next Trend and style that we're seeing this is a big one it is artificial morphism no we're not talking scuromorphism or neuromorphism we're actually talking some sort of weird hybrid baby of both of them artificial morphism is making a huge impact right now this incredible High Fidelity design power that is coming from the the likes of Dali are making huge waves by just creating this unbelievable surreal imagery which is both highly detailed highly textured and it can just literally be any style you want but what we're seeing is a mishmash of this van Gogh painting style being used in a modern form generally this generative way of creating art is actually really interesting and here's some really good examples of fonts that are being generated completely through Ai and I mean the level of detail from some of this stuff is absolutely insane even in web design we're seeing like super high fidelity nuo skewomorphic feeling interfaces because the texture and richness is more than what we were illustrating previously I really love this series of AI generated sneakers it's super super cool the next trend is photographic branding and I'm talking a little bit more macro here we're really seeing a reversal away from The High contrasty images that we've seen from a lot of product photography over the last year people are opting to engage more with realistic imagery and there's no surprise really the way video content has gone the mass takeover of tick tock has had us looking at playing people on their iPhone camera super flat not the best cinematic videos we've seen and we're starting to see this bleed into photography as well and the way that brands are using it is they're taking more realistic photos that are less stylized and they're using them full screen big front and center with typography and some refined illustrations around it the next Trend and or style that we are seeing this one's actually making a comeback it's what I'm calling new grunge and I might have lied earlier when I said brutalism was my favorite style this one is the style that I started my design career on and really it it has to be making a comeback the trend is all about rough rugged and slightly vintage aesthetic but we're talking distressed textures muted colors Splats sprays scraps with the modern day war and activism being a part of the current culture and certainly the way that the Gen Z culture has taken it on this graphic style has been seen a lot in Esports and what we're seeing is some of the biggest Sport and football clubs in like the Premier League adopting this Esports aesthetic and applying it to their own football teams design and branding language next up is a style that I am calling modern Mystic there's been a recent Trend towards incorporating Mystic and otherworldly themes such as spirituality astrology magic and Cosmic designs what we're seeing is more abstract Illustrated and simplified symbolism and other elements that evolve a sense of mystery this trend has been driven in part by advances in fields such as science philosophy and spiritual reality and really it's manifesting in a range of design assets and templates including event illustrations logos and branding like these matcha and coffee brands I think the packaging looks awesome the next trend is geominimalism this one's been around for a while and we're continuing to see it it's the use of geometric shapes simplified typography Vivid primary colors and blocked off Graphics I particularly like the way that it's being used as a trend against the kind of illustrations that we're seeing all over the Internet and making those illustrations more refined to work within a wider brand system the use of these geometric shapes with some more abstract shape creates this kind of modern futuristic of feel which I really like the next design style is utilitarian or what I'm calling minimal utilitarian overall this has been a design style around forever and I think we'll continue to see its use as people create more functional products that need to deliver the message of their functionality in a clear and concerned ice manner this design is often used in products and environments where practicality and communication are important such as Industrial Equipment medical devices and public transportation again this bold minimal graphic and uniform style has been applied to many things in cosmetics as they try to convey that kind of utilitarian use more interestingly we've seen it on some other products like water and in general this kind of approach is almost a bit like anti-branding it's the deconstruction of all this noise and other visual elements to communicate a product in its simplest form one of my favorite products is something that I still use today which I think is discontinued and it's unit Portables this Swedish design style was very utilitarian and it just was really a great functioning product the next graphic design style that we're going to continue to see big in the next year is neoclassical this trend is all about using elements of classical art and architecture in modern designs take an inspiration from this old school classic art and architecture of ancient Greece and Rome is characterized typically by the use of symmetry rectilinear forms and a restrained geometric ornamentation I really like these modern takes on the neoclassical design which fuses some of the modern geosimplicity in with these classical shapes and elements it's a Timeless and sophisticated style that conveys a sense of tradition and stability the next design style that we're seeing get a hell of a lot of traction is Art Deco it's a design that originated in the 1920s and when we talk about art deco most people think of cool Miami buildings hotels but it's recently gaining popularity again it's a design style that combines geometric bold shapes and a lavish and refined feel more recently the modern take on the art deco style Caesar's fusing some of those earlier retro elements and the texture and grain of these illustrations with a kind of more playful typographic tape on the art deco font we're seeing this used a lot in kind of makeup branding which is moving away from the utilitarian minimal aesthetic and here are some really cool examples that show a more minimal and geometric take on the art deco aesthetic the last trend is Art Nouveau and Art Nouveau in style type and Aesthetics this is a style that emerged in the late 19th century it's characterized by a focus on organic flowing lines and curves we see a lot of organic natural illustrations in this style and it's really a kind of refined retro feeling but it also looks really sophisticated Maya is a really cool tequila brand that I've implemented this style perfectly espresso Republic have taken this a step further by refining the Aesthetics of Art Nouveau and creating a utilitarian feel to the design and packaging a lot these Trends work really well if you're creating a new brand and if you want to see how I created a brand from start to finish using some of these Trends check out this video right here ",
      transcript_with_timestamps: [
        {
          duration: 4.2,
          start: 0.0,
          text: "in this video we'll be discussing the",
        },
        {
          duration: 4.02,
          start: 2.22,
          text: "graphic design Trends and styles that",
        },
        {
          duration: 4.38,
          start: 4.2,
          text: "you need to know this year we're talking",
        },
        {
          duration: 4.08,
          start: 6.24,
          text: "web design posters branding and",
        },
        {
          duration: 3.96,
          start: 8.58,
          text: "packaging so whether you're a seasoned",
        },
        {
          duration: 4.02,
          start: 10.32,
          text: "designer or just starting out these",
        },
        {
          duration: 4.319,
          start: 12.54,
          text: "Trends should give you some Sparks of",
        },
        {
          duration: 4.88,
          start: 14.34,
          text: "inspiration for your next project first",
        },
        {
          duration: 5.281,
          start: 16.859,
          text: "Trend slash Style on this list is",
        },
        {
          duration: 4.84,
          start: 19.22,
          text: "neo-brutalism brutalism has been used in",
        },
        {
          duration: 4.5,
          start: 22.14,
          text: "graphic design for a very long time it",
        },
        {
          duration: 5.7,
          start: 24.06,
          text: "often disregards traditional layout",
        },
        {
          duration: 5.219,
          start: 26.64,
          text: "Styles and principles using large blocks",
        },
        {
          duration: 4.86,
          start: 29.76,
          text: "of text that may be difficult to read",
        },
        {
          duration: 5.281,
          start: 31.859,
          text: "and high contrast in colors it was",
        },
        {
          duration: 4.8,
          start: 34.62,
          text: "originally popular in poster and graphic",
        },
        {
          duration: 4.5,
          start: 37.14,
          text: "design although some attempts were made",
        },
        {
          duration: 4.56,
          start: 39.42,
          text: "in the late 90s to bring it to the web",
        },
        {
          duration: 5.34,
          start: 41.64,
          text: "Neo brutalism combines traditional",
        },
        {
          duration: 5.88,
          start: 43.98,
          text: "layout concepts with solid colors simple",
        },
        {
          duration: 4.98,
          start: 46.98,
          text: "yet unique typography it's not afraid to",
        },
        {
          duration: 4.92,
          start: 49.86,
          text: "use pure black with other colors yet",
        },
        {
          duration: 5.779,
          start: 51.96,
          text: "we're talking hashtag zero zero zero",
        },
        {
          duration: 6.84,
          start: 54.78,
          text: "zero zero zero so we're talking bold",
        },
        {
          duration: 5.681,
          start: 57.739,
          text: "contrasty raw organic like materials I",
        },
        {
          duration: 3.719,
          start: 61.62,
          text: "actually quite like the Resurgence it's",
        },
        {
          duration: 3.66,
          start: 63.42,
          text: "had the push to the more kind of",
        },
        {
          duration: 4.981,
          start: 65.339,
          text: "colorful and playful direction that",
        },
        {
          duration: 5.399,
          start: 67.08,
          text: "we're seeing in the UI of this app here",
        },
        {
          duration: 4.2,
          start: 70.32,
          text: "the not so great thing however is we've",
        },
        {
          duration: 4.621,
          start: 72.479,
          text: "seen a whole bunch of Brands rushing",
        },
        {
          duration: 5.099,
          start: 74.52,
          text: "towards Neo brutalism and rebranding",
        },
        {
          duration: 4.5,
          start: 77.1,
          text: "themselves in a pretty much similar",
        },
        {
          duration: 4.261,
          start: 79.619,
          text: "manner one that we all know is Gum Road",
        },
        {
          duration: 4.04,
          start: 81.6,
          text: "don't really know why they rebranded to",
        },
        {
          duration: 4.26,
          start: 83.88,
          text: "this to be honest I didn't feel like",
        },
        {
          duration: 5.32,
          start: 85.64,
          text: "neo-brutalism was the right Road for",
        },
        {
          duration: 4.56,
          start: 88.14,
          text: "them Road I feel like I've seen it too",
        },
        {
          duration: 3.42,
          start: 90.96,
          text: "many times and then I like the other",
        },
        {
          duration: 4.62,
          start: 92.7,
          text: "extreme which is the more refined",
        },
        {
          duration: 5.76,
          start: 94.38,
          text: "minimalism look we're talking playful",
        },
        {
          duration: 5.46,
          start: 97.32,
          text: "kind of modern type but against the",
        },
        {
          duration: 5.46,
          start: 100.14,
          text: "utilitarian look of minimalist design",
        },
        {
          duration: 5.04,
          start: 102.78,
          text: "we've also seen a lot of pixels and then",
        },
        {
          duration: 4.44,
          start: 105.6,
          text: "the more traditional Neo brutalist dark",
        },
        {
          duration: 5.04,
          start: 107.82,
          text: "with the one gradient style the next",
        },
        {
          duration: 6.899,
          start: 110.04,
          text: "trend on the list is pop futurism the",
        },
        {
          duration: 6.6,
          start: 112.86,
          text: "1980s are back glows gradients textures",
        },
        {
          duration: 4.561,
          start: 116.939,
          text: "and an illustrated look it's quite nice",
        },
        {
          duration: 3.9,
          start: 119.46,
          text: "to see this as a Resurgence although I",
        },
        {
          duration: 3.06,
          start: 121.5,
          text: "think we've not moved it on enough one",
        },
        {
          duration: 4.079,
          start: 123.36,
          text: "of the things you notice a lot about",
        },
        {
          duration: 5.339,
          start: 124.56,
          text: "this Hop futurism look is the use of",
        },
        {
          duration: 4.081,
          start: 127.439,
          text: "glows and more textural feel of the",
        },
        {
          duration: 3.601,
          start: 129.899,
          text: "illustration one of the things that",
        },
        {
          duration: 5.4,
          start: 131.52,
          text: "we're seeing a lot of in this specific",
        },
        {
          duration: 6.12,
          start: 133.5,
          text: "style is a retro throwback to elements",
        },
        {
          duration: 4.8,
          start: 136.92,
          text: "such as game boys old school Tech things",
        },
        {
          duration: 4.38,
          start: 139.62,
          text: "that actually bring the Nostalgia back",
        },
        {
          duration: 3.96,
          start: 141.72,
          text: "the advancement on this trend and style",
        },
        {
          duration: 4.44,
          start: 144.0,
          text: "that I really like is how it's been",
        },
        {
          duration: 4.5,
          start: 145.68,
          text: "fused with the maximalism style where",
        },
        {
          duration: 3.48,
          start: 148.44,
          text: "we've put in these retro illustrations",
        },
        {
          duration: 3.9,
          start: 150.18,
          text: "and kind of overloading them to make",
        },
        {
          duration: 3.78,
          start: 151.92,
          text: "pretty cool compositions a bit more",
        },
        {
          duration: 3.72,
          start: 154.08,
          text: "digital Arty but I think these things",
        },
        {
          duration: 4.86,
          start: 155.7,
          text: "look awesome the next Trend we will",
        },
        {
          duration: 6.06,
          start: 157.8,
          text: "continue to see this year is the Y2K",
        },
        {
          duration: 5.16,
          start: 160.56,
          text: "Evolution the Y2K Evolution refers back",
        },
        {
          duration: 4.26,
          start: 163.86,
          text: "to the Y2K aesthetic which is",
        },
        {
          duration: 6.0,
          start: 165.72,
          text: "essentially the design style of the late",
        },
        {
          duration: 6.6,
          start: 168.12,
          text: "90s and early 2000s as we came into what",
        },
        {
          duration: 5.159,
          start: 171.72,
          text: "I call New Media or the internet this",
        },
        {
          duration: 4.739,
          start: 174.72,
          text: "aesthetic is a nostalgic style that",
        },
        {
          duration: 5.22,
          start: 176.879,
          text: "basically draws on the elements of what",
        },
        {
          duration: 4.56,
          start: 179.459,
          text: "it looked like to be alive on the early",
        },
        {
          duration: 5.22,
          start: 182.099,
          text: "web characterized by bright and bold",
        },
        {
          duration: 5.461,
          start: 184.019,
          text: "colors pixelated imagery and cybernetic",
        },
        {
          duration: 4.101,
          start: 187.319,
          text: "themes with the Y2K aesthetic you can",
        },
        {
          duration: 5.16,
          start: 189.48,
          text: "expect to see plenty of holograms",
        },
        {
          duration: 6.16,
          start: 191.42,
          text: "Nettles liquid Metals pixels and a",
        },
        {
          duration: 5.04,
          start: 194.64,
          text: "general dose of futurism things like the",
        },
        {
          duration: 4.86,
          start: 197.58,
          text: "early Bjork artwork a lot of throwback",
        },
        {
          duration: 4.559,
          start: 199.68,
          text: "to the early internet windows we see a",
        },
        {
          duration: 4.2,
          start: 202.44,
          text: "lot of distorted type and holographic",
        },
        {
          duration: 5.101,
          start: 204.239,
          text: "themes one of my favorite uses of this",
        },
        {
          duration: 4.26,
          start: 206.64,
          text: "in branding is the Lego and Levi's",
        },
        {
          duration: 4.92,
          start: 209.34,
          text: "collaboration where they took the whole",
        },
        {
          duration: 5.28,
          start: 210.9,
          text: "Y2K aesthetic made it pixely using the",
        },
        {
          duration: 3.839,
          start: 214.26,
          text: "Lego blocks and I think they just nailed",
        },
        {
          duration: 4.32,
          start: 216.18,
          text: "the colors the look and feel and the",
        },
        {
          duration: 5.161,
          start: 218.099,
          text: "throwback Nostalgia a sub Trend in",
        },
        {
          duration: 4.86,
          start: 220.5,
          text: "itself is the liquid Metals use we're",
        },
        {
          duration: 4.14,
          start: 223.26,
          text: "seeing a lot of chrome liquid Metals",
        },
        {
          duration: 4.739,
          start: 225.36,
          text: "Graphics the liquify tool is being",
        },
        {
          duration: 5.28,
          start: 227.4,
          text: "heavily used in branded imagery and",
        },
        {
          duration: 5.101,
          start: 230.099,
          text: "promo styles again looking at the block",
        },
        {
          duration: 4.979,
          start: 232.68,
          text: "colors it was almost like it was early",
        },
        {
          duration: 6.3,
          start: 235.2,
          text: "Japanese feel blended with the internet",
        },
        {
          duration: 6.181,
          start: 237.659,
          text: "very pop Arty General feeling of this",
        },
        {
          duration: 4.14,
          start: 241.5,
          text: "aesthetic the next style slash Trend",
        },
        {
          duration: 4.92,
          start: 243.84,
          text: "that we're seeing is what I'm calling",
        },
        {
          duration: 5.459,
          start: 245.64,
          text: "typo Fusion which is essentially just",
        },
        {
          duration: 4.14,
          start: 248.76,
          text: "creative typography While most Trend",
        },
        {
          duration: 3.601,
          start: 251.099,
          text: "lists that you've seen or I certainly",
        },
        {
          duration: 3.959,
          start: 252.9,
          text: "have seen is either saying Sans serif",
        },
        {
          duration: 3.659,
          start: 254.7,
          text: "fonts are making a comeback or serif",
        },
        {
          duration: 3.361,
          start: 256.859,
          text: "fonts are making a comeback I think it's",
        },
        {
          duration: 3.321,
          start: 258.359,
          text: "all rubbish typography in general is",
        },
        {
          duration: 4.259,
          start: 260.22,
          text: "becoming a lot more experimental",
        },
        {
          duration: 4.9,
          start: 261.68,
          text: "expressive and creative serif fonts",
        },
        {
          duration: 4.44,
          start: 264.479,
          text: "which are characterized with the top and",
        },
        {
          duration: 4.86,
          start: 266.58,
          text: "bottom lines at the letters have",
        },
        {
          duration: 4.621,
          start: 268.919,
          text: "definitely had a Resurgence in the last",
        },
        {
          duration: 4.44,
          start: 271.44,
          text: "few years that Trend in particular has",
        },
        {
          duration: 4.8,
          start: 273.54,
          text: "been driven by the sense of security",
        },
        {
          duration: 4.02,
          start: 275.88,
          text: "that the tradition of the serif itself",
        },
        {
          duration: 4.26,
          start: 278.34,
          text: "evokes and this is particularly",
        },
        {
          duration: 5.64,
          start: 279.9,
          text: "important in today's world where most",
        },
        {
          duration: 5.099,
          start: 282.6,
          text: "brand consumerism is predicated on trust",
        },
        {
          duration: 4.62,
          start: 285.54,
          text: "further to this we're seeing a lot of",
        },
        {
          duration: 5.761,
          start: 287.699,
          text: "movement especially this kind of retro",
        },
        {
          duration: 5.819,
          start: 290.16,
          text: "3D aesthetic but the reality is not one",
        },
        {
          duration: 4.5,
          start: 293.46,
          text: "font or the other font is taking a lead",
        },
        {
          duration: 3.78,
          start: 295.979,
          text: "they are both being used in equal",
        },
        {
          duration: 4.38,
          start: 297.96,
          text: "measure by different people for",
        },
        {
          duration: 4.5,
          start: 299.759,
          text: "different purposes and again I carry out",
        },
        {
          duration: 4.919,
          start: 302.34,
          text: "all points when it comes to trends that",
        },
        {
          duration: 5.341,
          start: 304.259,
          text: "it is how you use Styles the way that",
        },
        {
          duration: 5.101,
          start: 307.259,
          text: "you design should solve a problem and",
        },
        {
          duration: 5.58,
          start: 309.6,
          text: "not follow a specific Trend the next",
        },
        {
          duration: 6.24,
          start: 312.36,
          text: "style or Trend we are seeing is the",
        },
        {
          duration: 5.84,
          start: 315.18,
          text: "return of retro vintage this trend in",
        },
        {
          duration: 5.819,
          start: 318.6,
          text: "graphic design is typified by early",
        },
        {
          duration: 5.26,
          start: 321.02,
          text: "1980s advertising style this also pushes",
        },
        {
          duration: 3.84,
          start: 324.419,
          text: "into the 90s a little bit more taking in",
        },
        {
          duration: 4.199,
          start: 326.28,
          text: "the texture of the grain which is",
        },
        {
          duration: 5.16,
          start: 328.259,
          text: "prominent in this visual style we see a",
        },
        {
          duration: 5.521,
          start: 330.479,
          text: "lot of geometric shapes and minimalist",
        },
        {
          duration: 4.741,
          start: 333.419,
          text: "layout a lot of refined simplification",
        },
        {
          duration: 4.38,
          start: 336.0,
          text: "we tend to see a lot of stickers and",
        },
        {
          duration: 4.74,
          start: 338.16,
          text: "also line art like here you can see the",
        },
        {
          duration: 5.46,
          start: 340.38,
          text: "old school Nike ads which use the Big",
        },
        {
          duration: 5.88,
          start: 342.9,
          text: "Font Futura along with just a simple",
        },
        {
          duration: 5.46,
          start: 345.84,
          text: "image and their logo absolute took their",
        },
        {
          duration: 5.88,
          start: 348.78,
          text: "own spin on this by using the simplified",
        },
        {
          duration: 5.76,
          start: 351.3,
          text: "grainy and refined aesthetic with the",
        },
        {
          duration: 4.68,
          start: 354.66,
          text: "high contrast product photography which",
        },
        {
          duration: 6.06,
          start: 357.06,
          text: "is also a micro Trend in itself going",
        },
        {
          duration: 5.82,
          start: 359.34,
          text: "wider into the Retro vintage aesthetic",
        },
        {
          duration: 4.98,
          start: 363.12,
          text: "we're starting to see a lot more line",
        },
        {
          duration: 5.46,
          start: 365.16,
          text: "art yes we're talking the return of sign",
        },
        {
          duration: 5.28,
          start: 368.1,
          text: "painter and some more of these cool",
        },
        {
          duration: 6.54,
          start: 370.62,
          text: "cartoony Graphics which were typified by",
        },
        {
          duration: 5.58,
          start: 373.38,
          text: "70s American design style stickers are a",
        },
        {
          duration: 3.72,
          start: 377.16,
          text: "trend that we've been seeing emerge over",
        },
        {
          duration: 4.32,
          start: 378.96,
          text: "the last couple years they're everywhere",
        },
        {
          duration: 5.939,
          start: 380.88,
          text: "and we'll continue to see more of this",
        },
        {
          duration: 6.359,
          start: 383.28,
          text: "as they have a very useful role to play",
        },
        {
          duration: 5.041,
          start: 386.819,
          text: "in branding they are great for using as",
        },
        {
          duration: 5.4,
          start: 389.639,
          text: "accents to a brand to extend the message",
        },
        {
          duration: 5.459,
          start: 391.86,
          text: "or to bring something to life here's a",
        },
        {
          duration: 3.961,
          start: 395.039,
          text: "really cool example of something more",
        },
        {
          duration: 3.121,
          start: 397.319,
          text: "recent from Nike where they took some of",
        },
        {
          duration: 4.88,
          start: 399.0,
          text: "those cues from earlier in the near",
        },
        {
          duration: 6.96,
          start: 400.44,
          text: "brutalism where they had the simplified",
        },
        {
          duration: 6.7,
          start: 403.88,
          text: "fonts interchanged with the imagery and",
        },
        {
          duration: 4.44,
          start: 407.4,
          text: "then overlaid with some retro design the",
        },
        {
          duration: 4.38,
          start: 410.58,
          text: "next style and Trend we're talking about",
        },
        {
          duration: 5.88,
          start: 411.84,
          text: "is modern surrealism as we spend more",
        },
        {
          duration: 5.04,
          start: 414.96,
          text: "time in the digital world and less in",
        },
        {
          duration: 4.08,
          start: 417.72,
          text: "physical places the lines are are",
        },
        {
          duration: 3.479,
          start: 420.0,
          text: "getting blurred surrealism is an",
        },
        {
          duration: 3.6,
          start: 421.8,
          text: "enduringly popular design approach",
        },
        {
          duration: 5.041,
          start: 423.479,
          text: "because of its novelty and endless",
        },
        {
          duration: 6.72,
          start: 425.4,
          text: "original weirdness lots of airbrushing",
        },
        {
          duration: 5.64,
          start: 428.52,
          text: "abstract shapes and textures some of the",
        },
        {
          duration: 4.44,
          start: 432.12,
          text: "cool ways we're seeing modern surrealism",
        },
        {
          duration: 4.8,
          start: 434.16,
          text: "at the moment is how brands are using",
        },
        {
          duration: 5.16,
          start: 436.56,
          text: "this textured almost painty type feel",
        },
        {
          duration: 4.739,
          start: 438.96,
          text: "and those work really well on the",
        },
        {
          duration: 4.919,
          start: 441.72,
          text: "texture of cardboard when it's produced",
        },
        {
          duration: 4.861,
          start: 443.699,
          text: "in a packaging and Physical Realm the",
        },
        {
          duration: 4.861,
          start: 446.639,
          text: "next style is what I'm calling still",
        },
        {
          duration: 5.16,
          start: 448.56,
          text: "tripping or trippy it's a little bit of",
        },
        {
          duration: 4.62,
          start: 451.5,
          text: "an extension to Modern surrealism but",
        },
        {
          duration: 5.34,
          start: 453.72,
          text: "really going more into psychedelic",
        },
        {
          duration: 5.16,
          start: 456.12,
          text: "surrealism maybe because loads of people",
        },
        {
          duration: 4.74,
          start: 459.06,
          text: "are doing micro dosing these days that",
        },
        {
          duration: 4.38,
          start: 461.28,
          text: "this has become popular but again it's",
        },
        {
          duration: 4.38,
          start: 463.8,
          text: "going back to that macro trend of",
        },
        {
          duration: 4.58,
          start: 465.66,
          text: "escaping reality so what we're seeing is",
        },
        {
          duration: 6.06,
          start: 468.18,
          text: "a lot of kind of acid visuals",
        },
        {
          duration: 7.899,
          start: 470.24,
          text: "psychedelic illustrations warped imagery",
        },
        {
          duration: 6.54,
          start: 474.24,
          text: "and a general depiction of a dystopian",
        },
        {
          duration: 5.041,
          start: 478.139,
          text: "World some really cool uses I've seen on",
        },
        {
          duration: 4.8,
          start: 480.78,
          text: "this is taking some of the Y2K aesthetic",
        },
        {
          duration: 4.799,
          start: 483.18,
          text: "and bringing it into this kind of new",
        },
        {
          duration: 4.98,
          start: 485.58,
          text: "dimension Brands like Sonos have taken",
        },
        {
          duration: 4.681,
          start: 487.979,
          text: "their trippy psychedelic visuals and",
        },
        {
          duration: 4.259,
          start: 490.56,
          text: "made them part and parcel of their core",
        },
        {
          duration: 5.759,
          start: 492.66,
          text: "product photography which looks awesome",
        },
        {
          duration: 6.6,
          start: 494.819,
          text: "and then we've got some more uses of the",
        },
        {
          duration: 5.101,
          start: 498.419,
          text: "wacky illustrations in some of like the",
        },
        {
          duration: 4.741,
          start: 501.419,
          text: "energy drinks and the beers and then",
        },
        {
          duration: 6.42,
          start: 503.52,
          text: "we're just seeing some really cool like",
        },
        {
          duration: 7.02,
          start: 506.16,
          text: "airbrushed trippy photos another cool",
        },
        {
          duration: 6.42,
          start: 509.94,
          text: "application of the Psychedelic visuals",
        },
        {
          duration: 5.219,
          start: 513.18,
          text: "are taking the old retro stickers and",
        },
        {
          duration: 5.4,
          start: 516.36,
          text: "obviously bringing that kind of 60s",
        },
        {
          duration: 6.661,
          start: 518.399,
          text: "hippie Nostalgia into the design and",
        },
        {
          duration: 5.82,
          start: 521.76,
          text: "Brands such as meltdown are combining",
        },
        {
          duration: 4.44,
          start: 525.06,
          text: "this really well on their packaging the",
        },
        {
          duration: 4.92,
          start: 527.58,
          text: "next style of trend that we are seeing",
        },
        {
          duration: 5.459,
          start: 529.5,
          text: "is new maximalism the last few years",
        },
        {
          duration: 5.04,
          start: 532.5,
          text: "minimal trend has taken a bit of a",
        },
        {
          duration: 5.161,
          start: 534.959,
          text: "U-turn designers are using this as an",
        },
        {
          duration: 4.5,
          start: 537.54,
          text: "escape from uninspiring routine gains",
        },
        {
          duration: 4.02,
          start: 540.12,
          text: "and restrictions so we're seeing bold",
        },
        {
          duration: 4.859,
          start: 542.04,
          text: "and explosive colors Optical",
        },
        {
          duration: 5.699,
          start: 544.14,
          text: "illustrations and Illusions lots of",
        },
        {
          duration: 4.62,
          start: 546.899,
          text: "shapes it's just generally chaotic to be",
        },
        {
          duration: 4.021,
          start: 549.839,
          text: "honest but some of these brands are",
        },
        {
          duration: 5.281,
          start: 551.519,
          text: "doing it really really well why it's",
        },
        {
          duration: 6.0,
          start: 553.86,
          text: "done a really cool front cover with what",
        },
        {
          duration: 5.7,
          start: 556.8,
          text: "lies ahead and again it's just evoking",
        },
        {
          duration: 4.62,
          start: 559.86,
          text: "that feeling of Chaos in true designer",
        },
        {
          duration: 4.32,
          start: 562.5,
          text: "style there is now and then some",
        },
        {
          duration: 4.74,
          start: 564.48,
          text: "organization in it which we can all",
        },
        {
          duration: 5.82,
          start: 566.82,
          text: "appreciate it just looks beautiful to be",
        },
        {
          duration: 6.179,
          start: 569.22,
          text: "honest just a general mishmash of shapes",
        },
        {
          duration: 5.819,
          start: 572.64,
          text: "and feeling the next Trend and style",
        },
        {
          duration: 6.12,
          start: 575.399,
          text: "that we're seeing this is a big one it",
        },
        {
          duration: 6.0,
          start: 578.459,
          text: "is artificial morphism no we're not",
        },
        {
          duration: 4.861,
          start: 581.519,
          text: "talking scuromorphism or neuromorphism",
        },
        {
          duration: 4.801,
          start: 584.459,
          text: "we're actually talking some sort of",
        },
        {
          duration: 7.32,
          start: 586.38,
          text: "weird hybrid baby of both of them",
        },
        {
          duration: 7.8,
          start: 589.26,
          text: "artificial morphism is making a huge",
        },
        {
          duration: 5.579,
          start: 593.7,
          text: "impact right now this incredible High",
        },
        {
          duration: 5.219,
          start: 597.06,
          text: "Fidelity design power that is coming",
        },
        {
          duration: 6.06,
          start: 599.279,
          text: "from the the likes of Dali are making",
        },
        {
          duration: 5.941,
          start: 602.279,
          text: "huge waves by just creating this",
        },
        {
          duration: 6.421,
          start: 605.339,
          text: "unbelievable surreal imagery which is",
        },
        {
          duration: 6.059,
          start: 608.22,
          text: "both highly detailed highly textured and",
        },
        {
          duration: 4.74,
          start: 611.76,
          text: "it can just literally be any style you",
        },
        {
          duration: 4.801,
          start: 614.279,
          text: "want but what we're seeing is a mishmash",
        },
        {
          duration: 5.88,
          start: 616.5,
          text: "of this van Gogh painting style being",
        },
        {
          duration: 6.12,
          start: 619.08,
          text: "used in a modern form generally this",
        },
        {
          duration: 5.04,
          start: 622.38,
          text: "generative way of creating art is",
        },
        {
          duration: 4.68,
          start: 625.2,
          text: "actually really interesting and here's",
        },
        {
          duration: 4.02,
          start: 627.42,
          text: "some really good examples of fonts that",
        },
        {
          duration: 4.019,
          start: 629.88,
          text: "are being generated completely through",
        },
        {
          duration: 5.459,
          start: 631.44,
          text: "Ai and I mean the level of detail from",
        },
        {
          duration: 4.981,
          start: 633.899,
          text: "some of this stuff is absolutely insane",
        },
        {
          duration: 5.341,
          start: 636.899,
          text: "even in web design we're seeing like",
        },
        {
          duration: 6.0,
          start: 638.88,
          text: "super high fidelity nuo skewomorphic",
        },
        {
          duration: 5.52,
          start: 642.24,
          text: "feeling interfaces because the texture",
        },
        {
          duration: 5.16,
          start: 644.88,
          text: "and richness is more than what we were",
        },
        {
          duration: 5.519,
          start: 647.76,
          text: "illustrating previously I really love",
        },
        {
          duration: 6.18,
          start: 650.04,
          text: "this series of AI generated sneakers",
        },
        {
          duration: 5.581,
          start: 653.279,
          text: "it's super super cool the next trend is",
        },
        {
          duration: 4.679,
          start: 656.22,
          text: "photographic branding and I'm talking a",
        },
        {
          duration: 4.5,
          start: 658.86,
          text: "little bit more macro here we're really",
        },
        {
          duration: 5.221,
          start: 660.899,
          text: "seeing a reversal away from The High",
        },
        {
          duration: 4.32,
          start: 663.36,
          text: "contrasty images that we've seen from a",
        },
        {
          duration: 4.98,
          start: 666.12,
          text: "lot of product photography over the last",
        },
        {
          duration: 6.0,
          start: 667.68,
          text: "year people are opting to engage more",
        },
        {
          duration: 4.32,
          start: 671.1,
          text: "with realistic imagery and there's no",
        },
        {
          duration: 4.02,
          start: 673.68,
          text: "surprise really the way video content",
        },
        {
          duration: 4.979,
          start: 675.42,
          text: "has gone the mass takeover of tick tock",
        },
        {
          duration: 5.879,
          start: 677.7,
          text: "has had us looking at playing people on",
        },
        {
          duration: 6.0,
          start: 680.399,
          text: "their iPhone camera super flat not the",
        },
        {
          duration: 5.161,
          start: 683.579,
          text: "best cinematic videos we've seen and",
        },
        {
          duration: 4.44,
          start: 686.399,
          text: "we're starting to see this bleed into",
        },
        {
          duration: 3.539,
          start: 688.74,
          text: "photography as well and the way that",
        },
        {
          duration: 4.141,
          start: 690.839,
          text: "brands are using it is they're taking",
        },
        {
          duration: 4.861,
          start: 692.279,
          text: "more realistic photos that are less",
        },
        {
          duration: 5.4,
          start: 694.98,
          text: "stylized and they're using them full",
        },
        {
          duration: 5.58,
          start: 697.14,
          text: "screen big front and center with",
        },
        {
          duration: 4.56,
          start: 700.38,
          text: "typography and some refined",
        },
        {
          duration: 5.22,
          start: 702.72,
          text: "illustrations around it the next Trend",
        },
        {
          duration: 4.56,
          start: 704.94,
          text: "and or style that we are seeing this",
        },
        {
          duration: 4.26,
          start: 707.94,
          text: "one's actually making a comeback it's",
        },
        {
          duration: 4.62,
          start: 709.5,
          text: "what I'm calling new grunge and I might",
        },
        {
          duration: 4.86,
          start: 712.2,
          text: "have lied earlier when I said brutalism",
        },
        {
          duration: 5.279,
          start: 714.12,
          text: "was my favorite style this one is the",
        },
        {
          duration: 5.16,
          start: 717.06,
          text: "style that I started my design career on",
        },
        {
          duration: 4.38,
          start: 719.399,
          text: "and really it it has to be making a",
        },
        {
          duration: 3.54,
          start: 722.22,
          text: "comeback the trend is all about rough",
        },
        {
          duration: 3.901,
          start: 723.779,
          text: "rugged and slightly vintage aesthetic",
        },
        {
          duration: 5.88,
          start: 725.76,
          text: "but we're talking distressed textures",
        },
        {
          duration: 7.14,
          start: 727.68,
          text: "muted colors Splats sprays scraps with",
        },
        {
          duration: 5.04,
          start: 731.64,
          text: "the modern day war and activism being a",
        },
        {
          duration: 4.019,
          start: 734.82,
          text: "part of the current culture and",
        },
        {
          duration: 4.14,
          start: 736.68,
          text: "certainly the way that the Gen Z culture",
        },
        {
          duration: 4.981,
          start: 738.839,
          text: "has taken it on this graphic style has",
        },
        {
          duration: 4.5,
          start: 740.82,
          text: "been seen a lot in Esports and what",
        },
        {
          duration: 3.18,
          start: 743.82,
          text: "we're seeing is some of the biggest",
        },
        {
          duration: 4.139,
          start: 745.32,
          text: "Sport and football clubs in like the",
        },
        {
          duration: 4.32,
          start: 747.0,
          text: "Premier League adopting this Esports",
        },
        {
          duration: 3.961,
          start: 749.459,
          text: "aesthetic and applying it to their own",
        },
        {
          duration: 4.259,
          start: 751.32,
          text: "football teams design and branding",
        },
        {
          duration: 4.74,
          start: 753.42,
          text: "language next up is a style that I am",
        },
        {
          duration: 4.94,
          start: 755.579,
          text: "calling modern Mystic there's been a",
        },
        {
          duration: 5.4,
          start: 758.16,
          text: "recent Trend towards incorporating",
        },
        {
          duration: 6.221,
          start: 760.519,
          text: "Mystic and otherworldly themes such as",
        },
        {
          duration: 5.1,
          start: 763.56,
          text: "spirituality astrology magic and Cosmic",
        },
        {
          duration: 4.26,
          start: 766.74,
          text: "designs what we're seeing is more",
        },
        {
          duration: 5.04,
          start: 768.66,
          text: "abstract Illustrated and simplified",
        },
        {
          duration: 4.98,
          start: 771.0,
          text: "symbolism and other elements that evolve",
        },
        {
          duration: 4.079,
          start: 773.7,
          text: "a sense of mystery this trend has been",
        },
        {
          duration: 3.359,
          start: 775.98,
          text: "driven in part by advances in fields",
        },
        {
          duration: 3.901,
          start: 777.779,
          text: "such as science philosophy and spiritual",
        },
        {
          duration: 3.841,
          start: 779.339,
          text: "reality and really it's manifesting in a",
        },
        {
          duration: 4.38,
          start: 781.68,
          text: "range of design assets and templates",
        },
        {
          duration: 4.44,
          start: 783.18,
          text: "including event illustrations logos and",
        },
        {
          duration: 3.54,
          start: 786.06,
          text: "branding like these matcha and coffee",
        },
        {
          duration: 4.56,
          start: 787.62,
          text: "brands I think the packaging looks",
        },
        {
          duration: 4.38,
          start: 789.6,
          text: "awesome the next trend is geominimalism",
        },
        {
          duration: 4.56,
          start: 792.18,
          text: "this one's been around for a while and",
        },
        {
          duration: 5.28,
          start: 793.98,
          text: "we're continuing to see it it's the use",
        },
        {
          duration: 5.76,
          start: 796.74,
          text: "of geometric shapes simplified",
        },
        {
          duration: 5.639,
          start: 799.26,
          text: "typography Vivid primary colors and",
        },
        {
          duration: 3.959,
          start: 802.5,
          text: "blocked off Graphics I particularly like",
        },
        {
          duration: 3.18,
          start: 804.899,
          text: "the way that it's being used as a trend",
        },
        {
          duration: 3.421,
          start: 806.459,
          text: "against the kind of illustrations that",
        },
        {
          duration: 4.141,
          start: 808.079,
          text: "we're seeing all over the Internet and",
        },
        {
          duration: 4.74,
          start: 809.88,
          text: "making those illustrations more refined",
        },
        {
          duration: 5.1,
          start: 812.22,
          text: "to work within a wider brand system the",
        },
        {
          duration: 4.98,
          start: 814.62,
          text: "use of these geometric shapes with some",
        },
        {
          duration: 4.38,
          start: 817.32,
          text: "more abstract shape creates this kind of",
        },
        {
          duration: 4.32,
          start: 819.6,
          text: "modern futuristic of feel which I really",
        },
        {
          duration: 5.4,
          start: 821.7,
          text: "like the next design style is",
        },
        {
          duration: 5.28,
          start: 823.92,
          text: "utilitarian or what I'm calling minimal",
        },
        {
          duration: 3.84,
          start: 827.1,
          text: "utilitarian overall this has been a",
        },
        {
          duration: 4.379,
          start: 829.2,
          text: "design style around forever and I think",
        },
        {
          duration: 4.8,
          start: 830.94,
          text: "we'll continue to see its use as people",
        },
        {
          duration: 3.961,
          start: 833.579,
          text: "create more functional products that",
        },
        {
          duration: 3.539,
          start: 835.74,
          text: "need to deliver the message of their",
        },
        {
          duration: 4.26,
          start: 837.54,
          text: "functionality in a clear and concerned",
        },
        {
          duration: 4.021,
          start: 839.279,
          text: "ice manner this design is often used in",
        },
        {
          duration: 3.599,
          start: 841.8,
          text: "products and environments where",
        },
        {
          duration: 3.9,
          start: 843.3,
          text: "practicality and communication are",
        },
        {
          duration: 3.961,
          start: 845.399,
          text: "important such as Industrial Equipment",
        },
        {
          duration: 5.4,
          start: 847.2,
          text: "medical devices and public",
        },
        {
          duration: 5.64,
          start: 849.36,
          text: "transportation again this bold minimal",
        },
        {
          duration: 5.1,
          start: 852.6,
          text: "graphic and uniform style has been",
        },
        {
          duration: 4.44,
          start: 855.0,
          text: "applied to many things in cosmetics as",
        },
        {
          duration: 4.68,
          start: 857.7,
          text: "they try to convey that kind of",
        },
        {
          duration: 4.44,
          start: 859.44,
          text: "utilitarian use more interestingly we've",
        },
        {
          duration: 4.199,
          start: 862.38,
          text: "seen it on some other products like",
        },
        {
          duration: 4.259,
          start: 863.88,
          text: "water and in general this kind of",
        },
        {
          duration: 4.741,
          start: 866.579,
          text: "approach is almost a bit like",
        },
        {
          duration: 5.581,
          start: 868.139,
          text: "anti-branding it's the deconstruction of",
        },
        {
          duration: 5.459,
          start: 871.32,
          text: "all this noise and other visual elements",
        },
        {
          duration: 4.98,
          start: 873.72,
          text: "to communicate a product in its simplest",
        },
        {
          duration: 4.081,
          start: 876.779,
          text: "form one of my favorite products is",
        },
        {
          duration: 3.72,
          start: 878.7,
          text: "something that I still use today which I",
        },
        {
          duration: 3.839,
          start: 880.86,
          text: "think is discontinued and it's unit",
        },
        {
          duration: 5.219,
          start: 882.42,
          text: "Portables this Swedish design style was",
        },
        {
          duration: 5.281,
          start: 884.699,
          text: "very utilitarian and it just was really",
        },
        {
          duration: 3.961,
          start: 887.639,
          text: "a great functioning product the next",
        },
        {
          duration: 4.219,
          start: 889.98,
          text: "graphic design style that we're going to",
        },
        {
          duration: 4.979,
          start: 891.6,
          text: "continue to see big in the next year is",
        },
        {
          duration: 4.601,
          start: 894.199,
          text: "neoclassical this trend is all about",
        },
        {
          duration: 4.801,
          start: 896.579,
          text: "using elements of classical art and",
        },
        {
          duration: 5.219,
          start: 898.8,
          text: "architecture in modern designs take an",
        },
        {
          duration: 5.22,
          start: 901.38,
          text: "inspiration from this old school classic",
        },
        {
          duration: 4.56,
          start: 904.019,
          text: "art and architecture of ancient Greece",
        },
        {
          duration: 4.44,
          start: 906.6,
          text: "and Rome is characterized typically by",
        },
        {
          duration: 5.101,
          start: 908.579,
          text: "the use of symmetry rectilinear forms",
        },
        {
          duration: 5.46,
          start: 911.04,
          text: "and a restrained geometric ornamentation",
        },
        {
          duration: 5.099,
          start: 913.68,
          text: "I really like these modern takes on the",
        },
        {
          duration: 5.639,
          start: 916.5,
          text: "neoclassical design which fuses some of",
        },
        {
          duration: 6.0,
          start: 918.779,
          text: "the modern geosimplicity in with these",
        },
        {
          duration: 4.621,
          start: 922.139,
          text: "classical shapes and elements it's a",
        },
        {
          duration: 3.781,
          start: 924.779,
          text: "Timeless and sophisticated style that",
        },
        {
          duration: 4.139,
          start: 926.76,
          text: "conveys a sense of tradition and",
        },
        {
          duration: 4.139,
          start: 928.56,
          text: "stability the next design style that",
        },
        {
          duration: 5.101,
          start: 930.899,
          text: "we're seeing get a hell of a lot of",
        },
        {
          duration: 5.88,
          start: 932.699,
          text: "traction is Art Deco it's a design that",
        },
        {
          duration: 5.16,
          start: 936.0,
          text: "originated in the 1920s and when we talk",
        },
        {
          duration: 5.641,
          start: 938.579,
          text: "about art deco most people think of cool",
        },
        {
          duration: 5.52,
          start: 941.16,
          text: "Miami buildings hotels but it's recently",
        },
        {
          duration: 5.04,
          start: 944.22,
          text: "gaining popularity again it's a design",
        },
        {
          duration: 5.94,
          start: 946.68,
          text: "style that combines geometric bold",
        },
        {
          duration: 5.579,
          start: 949.26,
          text: "shapes and a lavish and refined feel",
        },
        {
          duration: 4.5,
          start: 952.62,
          text: "more recently the modern take on the art",
        },
        {
          duration: 4.141,
          start: 954.839,
          text: "deco style Caesar's fusing some of those",
        },
        {
          duration: 5.219,
          start: 957.12,
          text: "earlier retro elements and the texture",
        },
        {
          duration: 6.12,
          start: 958.98,
          text: "and grain of these illustrations with a",
        },
        {
          duration: 4.68,
          start: 962.339,
          text: "kind of more playful typographic tape on",
        },
        {
          duration: 4.08,
          start: 965.1,
          text: "the art deco font we're seeing this used",
        },
        {
          duration: 4.741,
          start: 967.019,
          text: "a lot in kind of makeup branding which",
        },
        {
          duration: 4.8,
          start: 969.18,
          text: "is moving away from the utilitarian",
        },
        {
          duration: 4.74,
          start: 971.76,
          text: "minimal aesthetic and here are some",
        },
        {
          duration: 5.28,
          start: 973.98,
          text: "really cool examples that show a more",
        },
        {
          duration: 5.399,
          start: 976.5,
          text: "minimal and geometric take on the art",
        },
        {
          duration: 5.4,
          start: 979.26,
          text: "deco aesthetic the last trend is Art",
        },
        {
          duration: 4.8,
          start: 981.899,
          text: "Nouveau and Art Nouveau in style type",
        },
        {
          duration: 4.56,
          start: 984.66,
          text: "and Aesthetics this is a style that",
        },
        {
          duration: 5.101,
          start: 986.699,
          text: "emerged in the late 19th century it's",
        },
        {
          duration: 5.76,
          start: 989.22,
          text: "characterized by a focus on organic",
        },
        {
          duration: 6.06,
          start: 991.8,
          text: "flowing lines and curves we see a lot of",
        },
        {
          duration: 5.4,
          start: 994.98,
          text: "organic natural illustrations in this",
        },
        {
          duration: 6.06,
          start: 997.86,
          text: "style and it's really a kind of refined",
        },
        {
          duration: 5.94,
          start: 1000.38,
          text: "retro feeling but it also looks really",
        },
        {
          duration: 4.26,
          start: 1003.92,
          text: "sophisticated Maya is a really cool",
        },
        {
          duration: 4.56,
          start: 1006.32,
          text: "tequila brand that I've implemented this",
        },
        {
          duration: 5.219,
          start: 1008.18,
          text: "style perfectly espresso Republic have",
        },
        {
          duration: 4.5,
          start: 1010.88,
          text: "taken this a step further by refining",
        },
        {
          duration: 4.44,
          start: 1013.399,
          text: "the Aesthetics of Art Nouveau and",
        },
        {
          duration: 4.62,
          start: 1015.38,
          text: "creating a utilitarian feel to the",
        },
        {
          duration: 4.321,
          start: 1017.839,
          text: "design and packaging a lot these Trends",
        },
        {
          duration: 3.839,
          start: 1020.0,
          text: "work really well if you're creating a",
        },
        {
          duration: 3.299,
          start: 1022.16,
          text: "new brand and if you want to see how I",
        },
        {
          duration: 4.141,
          start: 1023.839,
          text: "created a brand from start to finish",
        },
        {
          duration: 5.661,
          start: 1025.459,
          text: "using some of these Trends check out",
        },
        {
          duration: 3.14,
          start: 1027.98,
          text: "this video right here",
        },
      ],
      videoId: "-jRkI1nOwbc",
    },
    {
      channelId: "UC7c3Kb6jYCRj4JOHHZTxKsQ",
      channelTitle: "GitHub",
      description:
        "It\u2019s a new age for GitHub. Join our CEO Thomas Dohmke and special guests for a stirring, high velocity keynote as we fundamentally redefine what it means to be a software development platform in the age of AI.\n\n\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac WANT TO LEARN MORE? \ud83d\ude80  \u25ac\u25ac\u25ac\u25ac\u25ac\u25ac \nRead more about GitHub's latest announcements: https://github.blog/2023-11-08-universe-2023-copilot-transforms-github-into-the-ai-powered-developer-platform/. \nTry out our latest features and products: https://github.com/features/preview. \n\n\u25ac\u25ac\u25ac\u25ac\u25ac\u25ac  CHAPTERS \u231a  \u25ac\u25ac\u25ac\u25ac\u25ac\u25ac \n00:00 - GitHub CEO Thomas Dohmke intro on the promise of AI and software development\n06:40 - Overview of GitHub Copilot Chat with Allison Weins\n07:15 - Build an app with GitHub Copilot Chat\n14:34 - GitHub Copilot Chat in Visual Studio, Visual Studio Code, JetBrains IDEs\n14:55 - GitHub Copilot Chat in GitHub Mobile\n15:38 - GitHub Copilot Chat gets even more powerful\n16:54 - GitHub Copilot across the developer workflow with Kedasha Kerr\n18:23 - GitHub Copilot Chat and unit tests\n19:16 - GitHub Copilot Chat in GitHub.com (explain code, generate pull request descriptions)\n21:21 - GitHub Copilot Chat in GitHub Advanced Security (code scanning autofix, secret scanning for generic secrets)\n24:21 - GitHub Copilot personalized to an organization's codebase with Colin Merkel\n29:00 - Fostering an ecosystem built on Copilot with GitHub Copilot Partner Program \n30:00 - Accenture + GitHub Copilot\n31:33 - GitHub Copilot Enterprise\n34:26 - Microsoft CEO Satya Nadella + GitHub CEO Thomas Dohmke\n41:57 - Closing remarks\n43:39 - GitHub Workspace\n\nStay up-to-date on all things GitHub by connecting with us:\n\nYouTube: https://gh.io/subgithub\nBlog: https://github.blog\nX: https://twitter.com/github\nLinkedIn: https://linkedin.com/company/github\nInsider newsletter: https://resources.github.com/newsletter/\nInstagram: https://www.instagram.com/github\nTikTok: https://www.tiktok.com/@github\nFacebook: http://fb.com/github\n\nAbout GitHub\nIt\u2019s where over 100 million developers create, share, and ship the best code possible. It\u2019s a place for anyone, from anywhere, to build anything\u2014it\u2019s where the world builds software. https://github.com",
      itemCount: 3,
      playlistDescription: "",
      playlistId: "PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp",
      playlistOwnerChannelId: "UCj_s79IpT7usLrW8JQSgVFA",
      playlistOwnerChannelTitle: "Daniel Segarra",
      playlistThumbnailUrl:
        "https://i.ytimg.com/vi/-jRkI1nOwbc/maxresdefault.jpg",
      playlistTitle: "SummarizeTHIS",
      publishedAt: "2023-12-05T21:16:08Z",
      thumbnailUrl: "https://i.ytimg.com/vi/NrQkdDVupQE/maxresdefault.jpg",
      title: "GitHub Universe 2023 opening keynote- Copilot in the Age of AI",
      transcript_text_only:
        "[Music] [Music] e people of universe please welcome Thomas [Music] dkey good morning morning thank you for being here everyone it's so great to see all of you I'm Thomas and I'm a developer and today is the day I've been waiting for for the last 8 months today what we will do on this stage how we will build what we will launch it will redefine the essence of software development itself this is a moment long in the making now if you recall it was just a few weeks after gith up Universe last year when AI had its Big Bang moment Chad GPT exploded onto the scene it washed over the airwaves it was the most consequential disruption to techn ology since the Advent of the internet browser our Global Consciousness has not been the same since but forget up our generative AI story did not start there it dates back all the way to 2020 and it's documented in a white paper we internally call the coding Oracle paper back in 2020 a group of our wildly talented Engineers got their hands on a raw version of open ai's gpt3 model and with this model that sought to answer a single question was an automated pair programmer fact or fiction could this Transformer model this strange thoughtful machine actually help solve the tasks of an everyday developer our team knuckled down and pulled together a bunch of tasks you know like standard exercises developers often do in job interviews I remember hopping on a call and one by one we fed these exercises into the model and observed happened and in 2020 out of 203 handcrafted programming exercises then prompted the model solved 93% of them 3 years ago it already solved 93% this was the Genesis this was the moment this is what won me over and I tell you it takes a lot to win over a skeptical German developer and our Engineers put that feeling down and writing that AI I would and I quote change developer Tools in fundamental ways in particular an automated pair programmer can be built that puts the collective knowledge of the entire giup community at the fingertips of every individual big statement right early statement but we took a risk and we built the world's first at scale a pair programmer a novel tool with a large language model before the world was ready and today with more than 1 million paid users across 190 countries get up copot is now the most widely adopted AI developer tool in history and from this worldwide adoption we have seen the most stunning evidence of productivity gains since we got rid of Punch Cards in Assembly Language already copilot is making developers 55% faster in coding a 55% productivity gain the biggest ever experienced in the first year of a novel developer tool and people truly love using it open source maintainers students teachers developers and Fortune 500 companies from Shopify to Marcato libbre to Mercedes to BWC in just a short period of time get up copy has become the greatest competitive advantage in any software driven business in now over 37,000 organ G ation are using co-pilot to achieve more it's been adopted by organizations at all sizes and across all sectors and industries today the pair programmer we dreamed off in the coding Oracle paper has accelerated Beyond even our wildest aspirations but AI supported code completion was always just the starting point the change agent for the bigger picture you know many many professional developers actually only code like two hours a day so what use is it if developers will blazingly fasten the editor just to drown in mundane tasks when the initial coding is complete this was the conviction behind our copal X Vision announcement in March it was the first view of AI sailing beyond the editor and infusing the entire developer life cycle and we did not let that Vision Escape us and in the last eight months we created something even bigger in a world where developer shortages on wise in a world where billions of lines of code form the foundation of the global economy in a world where developers are still expected to keep up with Cobalt Legacy code dating back to the 1960s and yet still build for tomorrow we simply have to make it easier for developers to do it all and to do it all with a co-pilot just as GitHub was founded on git today we're ref found founded on co-pilot AI is now the electricity powering the home for the world's developers in just a short time the pair programmer that started it all has evolved expanded and transformed giab into the AI power developer platform from the idea to the issue to building and coding to reviewing securing deploying to get up.com itself up is now powered by co-pilot every step and this is real today and we're going to show it to you right [Music] [Applause] [Music] now now back in March we shared co-pilot chat our vision for conversational assistance with all of you for the very first time built right into your favorite editor we designed chat to help every developer build the big picture all in natural language we've made chat even more powerful since but seeing is believing right the contribution graph is cool but today I thought it'd be even cooler to build a new app called myir commit. comom to figure out when mine and every developer on github's first commit happened now we can see who in here is the real OG of GitHub my least favorite part about starting a new project is the starting part who likes a blank space after all thankfully co-pilot has me covered with chat I'll be able to explain what I need all in natural language and Skip all the boring project set up I'm going to open the chat panel in my Editor to give me a bit more space to read and then we're going to use a new slash command to generate an entire project in Visual Studio code if you haven't used slash commands before they're a powerful tool to help you execute your most common chat commands with just a single word saving you even more keystrokes I've got a list of requirements already in my head so I'll feed those into the new command and let co-pilot build the scaffolding I need we're going to use nextjs with react components and our design system primer and we'll call the app my first commit you'll notice how co-pilot gives me the structure for my new project so I could create it right here but I'm going to jump to a workspace co-pilot created for me earlier that I've already started tinkering with let's see what we're working with here by heading to simple browser and typing in Thomas's handle okay we've got basic page navigation and most of Thomas's info right honestly I think you look better here Thomas just kidding so let's go ahead and replace this hardcoded image with the actual picture from his user data I'll select the URL delete and co-pilot comes to the rescue I'll save that and it's generally a good idea to keep tabs on the boss so I'm going to add location here as well we'll see co-pilot is giving me exactly what I need it never fails to be magical and we also need to add this in the UI and look because we added location to our data co-pilot is smart enough to know that now we want to add it to the page tab save head back to the simple browser there's the Thomas we know and love okay it's time to grab that first commit now it's been a little while since I've used GitHub search API so I'm going to ask for a little bit of help from co-pilot and don't you love when you can type perfectly on stage Under Pressure all right we're going to ask co-pilot give it a second to think always likes to get my heart rate up just a little bit uh and but it always comes through it's giving me exactly what I need I'm going to review this really fast that looks great head back over here to my editor and we're going to insert this with just one click that'll bug me if I don't fix it now great we've got that started now I need to include the commit date here looks awesome and once again we have to update our UI all right co-pilot 99% there but we want our first commit so we'll save head back okay we're almost there but I'm pretty sure that data is wrong and it looks a little funky let's see what's happening all right ah I see what I've done here I don't have any ordering in so I'm going to go ahead and select this and we're going to use chat to help us figure out how to sort our commits here I'll head back and I'm going to say update to include uh to include or sorry to sort rather by committer date give it a second to think all right that's looking good but you know when I when I'm on stage I kind of get asscending and descending mixed up um and I need the oldest commits first so I'm going to ask co-pilot to revise this answer by simply asking for the oldest or to newest sort sort by oldest to newest this is great because I can ask co-pilot exactly what's in my mind and it can translate it into the code I need we'll take a look here all right that looks good we'll go ahead and replace the line select save oh we've got something going on here all right you know what I'm under time pressure here so I'm just going to replace this with my trusty demo save if anyone was second guessing if this was live or not you've uh just got your answer all right this is looking good but 2009 I was more worried about getting my driver's license that year uh rather than committing code um but I really don't need it down to the minute so let's go ahead and clean that up and rather than using the side panel like I've been doing I can actually get co-pilot to help me right in the editor right on the line of code that I'm working on by pressing command or control I so for this line let's ask to get rid of the time remove Time and Time Zone we'll give it a second to think and ah you know I really love this new diff view because I can inspect the change before I actually agree to take it and it's in a form that I'm so used to already we'll save head back there it is it's working exactly as we want but that's not all we've got one thing left my favorite part documentation so let's head back we're going to select the function we've been working in and we're going to bring up co-pilot using inline chat one last time and use our doc slash command all right that looks good we're going to accept I got to tell you I'm exhausted I must have pressed tab like 10 times uh and wow I need a break now co-pilot chat is coming to wherever you are whether that's Visual Studio code visual studio and now intellig webstorm pycharm and other jetbrain idees are available in preview today chats in your favorite editors but now it's also in your pocket we're breaking out of the editor and bringing co-pilot chat to your native IOS and Android app it's pretty cool with the power of natural language on your mobile device you can get answers to any programming question about your repositories files or docs that's co-pilot wherever you go whether you're waiting in line at a coffee shop or procrastinating in the morning when you can't quite get out of bed co-pilot chat is now in your IDE it's coming to GitHub mobile and it's getting way more powerful we've upgraded co-pilot chat with the power of GPT 4 and even more context from your editor slash commands and smart actions so I'm only ever a click away from solving my next development task and find finally inline chat to help you iterate on co- on code with co-pilot without ever having to move your mouse everything I just rattled off including the upgrades to co-pilot chat chat coming to mobile jet brains and even co-pilot in the CLI will be in your existing co-pilot subscription yes you definitely heard that right if you've got a co-pilot subscription today all of these features are coming to you but when you might ask next month co-pilot chat will be generally available in just a few short weeks all of this taken together will make natural language a new Universal programming language for every developer on the [Applause] [Music] planet up until now co-pilot was just about co-generation that's changing today GitHub is the AI powered developer platform from pull requests to security to security scanning to your repositories and more co-pilot is now integrated into every step of the developer workflow let me show you what I mean so I've been working on styling the my first commit app that Allison just started it's coming along very nicely take a look but I noticed that Thomas has been busy and he submitted not one but two PRS so let's take a look at the first one okay so it looks like there are a lot of file changes here but I'm not seeing any test Oh Thomas coding 55% fast F doesn't mean you get to write bad code 55% faster so I'm going to open up this in a code space real quick because even though Thomas wants to get this done quickly I don't feel comfortable merging this without at least one unit test and when I open up this in a code space I don't even have to touch my local files I can edit and make changes in an isolated Dev environment in the cloud all right so I have the user card JS component open if I highlight the entire component pop open CoPilot chat and type slash test co-pilot is going to automatically generate an entire test suite for this component here it is telling me exactly what it's going to do then it gives me the test and then it tells me how to run it wow how cool is that let me save this new test in a file I'm going to call it userc card. test.js awesome now let me commit my changes real quick because what I'm about to show you next is a game Cher now what I'm about to show you for the very first time is GitHub copilot chat integrated directly into github.com that's right co-pilot has now expended out of the editor let's take a look so if I go back to the pr and I go to let's say index.js and select lines 25 through 45 click on the co-pilot icon that pops up and type please explain this code I always like to say please to the AI because you just never know but take a look at this co-pilot chat is telling me exactly what this code is doing and it even went as far as breaking down the code into chunks so it's easy for me to read and understand this is the power of copilot chat in github.com now let's go back to the pr because I noticed that the description was a bit lacking by the way did you know that around 40% of pull requests don't have a description yeah let's fix that so we've added a new icon here for co-pilot actions if I click on this summary command that pops up co-pilot is going to help us generate a detailed PR description co-pilot is no longer just in your editor it is now integrated into PRS to help you with the mundane stuff like writing PR descriptions think about how long it takes you to come up with a meaningful summary of all your work let's just given a minute woof would you look at that co-pilot just generated an entire description very detailed of all the changes that we've made so far it even included little clicky links that I never would have bothered to add myself awesome now let's take a look at that second PR okay so it looks like there's a security issue around an unsanitized user input we know that with GI up Advanced security code scanning has always been able to find vulnerabilities in your code but now you don't just get a notification there's a complete fix suggested right here with the power of AI this is called code scanning autofix it suggests the changes you need to make to fix security vulnerabilities if I click here click commit changes and just like that we're secure this this is what we mean when we say that GitHub is the AI powered developer platform now I have some great news for you this AI powered code scanning autofix feature is available in preview today and we're going even further with our security offerings our AI powered security offerings GitHub Advanced security has been able to scan for known secret patterns for a while we have more great news for you we're introducing a new AI powered secret scanning tool available in preview today this will help you find secrets that don't have patterns like password stored and Source control control the cause of some of the most expensive exploits over recent years now as we all know the two hardest problems in computer science are naming things and regular Expressions So today we're making it easier for you to write your own custom patterns with our new AI powered regular expression assistant this will all be included in your company's GitHub Advanced security subscription we are truly bringing AI to every part of the GitHub platform and that means every part github.com is the homepage for software development where every project can begin where developers collaborate and where the open source Community builds and maintains the world's code now we're integrating co-pilot directly into github.com W this means you can dig into code generate pull requests and make the rest of your life so much easier all with [Applause] [Music] co-pilot as we've just seen code generation is an incredible tool but one of the most challenging tasks when building software is understanding the comp complex systems we all work on developers today work on large multi-service multiplatform multi language and often Legacy code bases to succeed we have to build off a complex Foundation understanding all that code that came before us with github's powerful code intelligence co-pilot can help us get the critical information we need so we can build more faster let me show you how it works now hold on I'm logged in here to my personal account let me jump to my work account so I can show you how co-pilot works for me as an employee here at GitHub I'll use this brand new feature on github.com where I can switch users with a single click that's better all right let's ask co-pilot a question about shortening urls how would I create a short link for my first commit large language models like the ones that the power co-pilot have strong generalist knowledge of programming languages open- Source libraries and popular Frameworks you can see here it's suggested we use bitly now we've heard from organizations and developers that you want co-pilot to know more about you your code your document mentation your poll requests and we built just that now co-pilot is an expert on your company's codebase to today what I'm about to show you for the very first time is co-pilot customized to your organization here let's Point co-pilot at our Internal Documentation site at GitHub we call our internal doc site The Hub and we have our own internal URL shortener GH IO I'll ask the same question again how would I create a short link for my first commit and now co-pilot is searching through our Internal Documentation and using it to answer our question so you can see here it not only knows the correct chatops command to be able to create a short link using our internal service it's inferring from my question what data to use in the command and it's even giving me an examp example of how I could use it let me show you another example this time using a project that I work on last year at Universe we announced github's allnew code search engine code named Blackbird and when we built it we invented a new data structure to make search super fast even at github's huge scale we call that data structure the geometric filter our last co-pilot what is the geometric filter now we haven't published any information about it publicly but now because I've given co-pilot access to this repo it can answer my questions about my code take a look at the answer it's giving us co-pilot is referencing specific files and giving us a breakdown of exactly how this data structure works this answer is about as good as you'd get from any member of the Blackbird team team think about what that means with co-pilot you now have an expert available anytime to answer questions about your code base right from your browser or ID and we're not done we're taking the next step we're now trialing fine-tuning the language model itself for several large customers including AMD by taking a model like gp4 and fine-tuning on your company's code base co-pilot quickly learns to adapt to your company's unique coding style and conventions we've seen that fine-tuning the model for customers with unique code bases can bring a massive performance Improvement to their engineering teams when combined with github's powerful code intelligence and advanced fine-tuning co-pilot will feel right at home in your organization and help your company build even better together but what about information that lives outside of GitHub as developers we all have a whole ecosystem of tools like deployment infrastructure monitoring feature flags and more with co-pilot we can now bring information from all of these surfaces together in one place imagine right from github.com or your IDE being able to check the performance of a database query in production by asking data Stacks how it's performing using our new apis for co-pilot developers can extend co-pilot for nearly any use case right within chat you could even check the status of a feature flag using launch Darkly or ask Postman if you're using an API correctly we're kicking off the early phases of this program with our debut Partners as part of our new GitHub co-pilot partner program including Red Hat hashy Corp data dog and more we can't wait to see what you'll build it's been a year since Chad GPD sparked the Gen Revolution and kicked off a new era of innovation in both business and software engineering take one since that moment Accenture and GitHub have been working together to make the promise of AI assisted software development real at Accenture we consider ourselves customer zero for GitHub we experiment scale and share our learnings from our own usage and client engagements to help GitHub innovate faster we were the first global company of our size to Pilot GitHub co-pilot and we quickly learned a few key things first the promise of efficiency gains are real across multiple phases of the software delivery life cycle the real value comes from Speed code quality and security and developer experience and where we see the biggest opportunity is integrating co-pilot into an an organization's end to-end automation framework now Accenture and GitHub are helping clients move Beyond experimentation to make AI assisted technology delivery pervasive we're doing this by one co-developing specific Solutions using co-pilot two integrating co-pilot into accenture's own automation platforms and three by expanding co-pilot to 50,000 Accenture developers Accenture is proud to be at the Forefront of Aid driven Innovation with [Music] GitHub pretty incredible right 50,000 developers at centa will fly at the speed of their own minds with co-pilot the original co-pilot was just code completions running inference on every keystroke with co-pilot ched being generally available in December in visual studio and visual studio code and coming with gp4 inline chat SL commands and Powerful smart actions Copa has expanded from code suggestions to a true pair programmer powered by AI one that answers questions explains code finds bugs and write tests and it's also coming to your mobile devices it's coming to the comment line it's coming to jetbrains idees and I'm happy to announce that all of this every feature I just said is included in your co-pilot subscription and it's the exact same price as before $19 per user per month per organiz for organizations $10 for individuals and of course it's still free for teachers students and maintainers of popular open source projects but on top of all of this we've consistently heard from many of our Enterprise customers that they would love to have the internal knowledge of their organization and co-pilot today we're bringing this customization together with every single co-pilot feature into a new product that we call get up co-pilot Enterprise from co-pilot in your pool requests to co-pilot in your documentation copilot chat integrated ind.com all customized to all of you and your organization in one single offering this personalized co-pilot available at every stage of the software development life cycle by placing the collective knowledge of your organization's Cates at your developers fingertips they will not only write code 55% faster they will keep the flow State and serve from idea to code to deployment by maintaining security compliance and quality and they will be happy doing it and I'm thrilled to share that we will start the preview of copil Enterprise today and it will be and it will be generally available in February 2024 for $39 copile Enterprise will give rise to a new wave of digital transformation as we know it and create a competitive Advantage for every organization in our world that is dependent on software but don't just take it for me today we have got a special guest who knows quite a lot about digitally transforming an organization please join me in welcoming for the very first time ever at giup Universe the CEO of Microsoft SAA [Applause] nadela great to see you s thank you so much SAA I introduced you as the CEO of Microsoft but you're really the biggest Super Fan of get co-pilot no I am I mean in fact I was just you know listening to all the announcements and reading up about it and I must say in the last what a year year and a half maybe since I've been using get up co-pilot my weekends have changed you know I I can code again I mean the joy of coding is back I'd say code spaces co-pilot and now I'm really looking forward to co-pilot on GI up.com because man it'll be so fun to just go to repo after repo and keep reading explain this explain this explain this I'll remember to say please yeah and it's it's been 5 years you know then since Microsoft acquired GitHub and our industry has changed so much since then how do you how has our work together you know led us to this moment with K yeah it's it's unbelievable it's five years uh since obviously uh we got to sort of Steward uh GitHub you know when I think about Microsoft Thomas to me I'm always grounding myself right we were a developer company first after all the company got started creating Dev tools I always remind myself of that and that's our core Heritage we're a platform company right so we build uh platforms so the developers can then build great IP on top of it and we are a partner company which is helped those developers be successful in the marketplace and that's at the core who we are and quite frankly GitHub has taken us to another level right our ability to one we did a lot of work before before we even decided to that we had the right to Steward GitHub we made sure that we were great members of the open source Community by really being part of the community contributing to the community and that's what led us to that so it's been a fantastic journey and here we are at this moment with co-pilot and Ai and ready for what is I think the next phase of our developer Journey yeah awesome and I you mentioned a lot of companies you meet with a lot of developers around the world you get to meet with a lot of CEOs that hire developers to drive their transformation what do we hear from them and how can co-pilot help them yeah it's it's fantastic I mean even just listening to the video you just played um and talked about I mean think about this this is an you know an at scale organization like Accenture making the decision to go deploy uh something like get up co-pilot uh Enterprise wide uh that's a big thing usually if you sort of look at the dev tools business and Dev stool diffusion it takes decades before those enterprise-wide things happen and this is just happening you know in you know in less than a year perhaps couple of things one at the end of the day to me I think all of us uh we want to make sure that the people we work with have the best tools to so that they feel empowered they feel that they can stay in flow they can do their very best work and then of course the organization benefits from that in terms of productivity gains so the unquestionable stuff uh is some of the productivity stats and the productivity stats by the way is not just stats it's about ultimately removing some of the drudgery bringing the joy back helping you stay in flow who doesn't appreciate that right every developer appreciates that and every de Dev manager appreciates that and so to me uh that's what we hear uh and really the other thing that I would say is I've always felt like when you introduce GitHub into an organization workflow changes right we' always said like when the salesperson is you know doing a pull request it's it's a different or it's moving at the speed of code so now think about it right with co-pilot and that speed of code fundamentally changing what it means to what is a digital economy right there's if you're in the Auto industry you're in the financial industry you're in the farma industry every pretty much everybody is a digital company and a software company and so I I'm very excited culturally how do the organizations change how does work and workflow change uh across all functions it's just not the professional software developer but everyone around them is collaborating and really making it a much more realtime digital organization so that's the most exciting thing that I think everyone in this room gets to participate in which is change their organization help their organization achieve next level of transformation and productivity yeah incredibly exciting and I I saw you I think it was a post on social media saying that natural language is becoming the new Universal programming language how do you think natural language will democratize access to software development yeah I mean look I think you know you look at all the demos um this morning and you feel like wow I can do that I mean all I need is co-pilot chat and here it is I just sort of click click click and I'm real tab tab tab and I'm done I mean this is like uh it is in some sense the most empowering thing is to be able to give right I mean we have what 100 plus million people already don't get up but my dream is like how do we Empower a billion people and then the other billions around these billion people who are all collaborating with the power of natural language because if I look at the Arc of computing our history of the last 70 years has been can humans in computers interact in the most natural way what's more powerful uh than natural language uh which by the way starts with language goes multimodal and so there's a lot uh to be said about sort of that thing that you just mentioned which is natural language as the program language um to me also the other comment that one of the people in the morning sort of said which is I thought struck the court with me which is to say wow co-pilot is the new IDE I mean think about the approachability right you know you you have a middle school girl first learning coding just the approachability uh to be able to say wow you can express some complex thought and start seeing code and you're going to get into coding that is gamechanging to me right because natural language is about accessibility it's about making the barrier to entry lower and it's going to be stunning to me the other thing that i' would also say um is what you're doing like some of the stuff that you're going to show and demonstrate around how about applying it at the repo scale right I think you call it workspace I think uh I am so excited about it right which is hey it's not just about like I go from an issue to code to task to deploy if we can really make that entire flow really magical with natural language and the product managers the marketing folks sales folks and developers are all communicating in this multi-agent framework that I think is going to be really Next Level maybe next year when we are back here we can start talking about some of that stuff incredible thank you so much for joining us than thank you so much thank you so much wow what incredible insights and what an incredible keynote it's been today we have shown you how developers can go above and beyond with the power of natural language and co-pilot and we truly think this AI power developer platform will change the world thank you for being part of all of this and thank you to everybody at GitHub that worked so hard in the last few weeks to get us to this moment and please give it up for our presenters Allison kadesha and Colin but wait wait wait don't don't switch off if you're online I I think I forgot something and if if you know me you know that even in my teenage days you know coding back in the 1990s I've always admired Steve Jobs and 13 years ago on the stage here in yba buana Steve launched the iPad and so I'm so excited to say this there is one more thing Steve talked a lot about the concept of machines accelerating human progress he described the home computer as the bicycle of the Mind a new partnership between human and machine that could take us far beyond our own inherit abilities and today I can't help but think that we have arrived at the next face of this partnership software developers Embrace of get up co-pilot has shown the world how humans can symbiotically partner with intelligent machines to make Big Ideas even easier to deliver today we are thrilled to announce an early glimpse of a revolutionary new future and we're calling it co-pilot workspace every day millions of developers start from a very familiar Place GitHub issues so we created an AI native workflow that dramatically simplifies the way you use natural language to turn these great ideas into code we call it the co-pilot workspace starting with any GitHub issue co-pilot workspace automatically proposes a solution based on its deep understanding of the code base issue replies link tasks everything co-pilot workspace then builds a step-by-step plan to implement the changes so that you know exactly what needs to be done and if isn't quite right the spec and plan are fully editable so you can easily steer co-pilot in the right direction once you're happy with the plan simply click Implement and let co-pilot chase down the necessary changes across your entire repository and Beyond simply synthesizing code co-pilot workspace builds and tests the changes and validates that they're successful it will even run your code so you can verify the fix visually this looks great since a workspace is designed for collaboration you can edit any of the suggested changes and if you accidentally introduce an error along the way co-pilot will automatically catch it repair it and rerun the code once the issue is fixed it's easy to create a pull request with a generated summary of your work this lets your team review merge and deploy faster than ever we're building co-pilot workspace so you can turn your creativity into reality every single day co-pirate workpace is just one of the Horizon Visions our team at get up next is developing when workspace is released in 2024 we will be consequential leap closer to an age where developers can use AI as a second brain to stream creativity into creation and minutes all with natural language and I think it's just the beginning this intersection of human artificial intelligence will continue to define the future generations of GitHub the AI power developer platform thank you so much for joining us today and have a great getup [Applause] [Music] universe ",
      transcript_with_timestamps: [
        {
          duration: 7.269,
          start: 0.29,
          text: "[Music]",
        },
        {
          duration: 6.33,
          start: 18.2,
          text: "[Music]",
        },
        {
          duration: 6.66,
          start: 28.96,
          text: "e",
        },
        {
          duration: 14.319,
          start: 30.72,
          text: "people of universe please welcome Thomas",
        },
        {
          duration: 11.099,
          start: 35.62,
          text: "[Music]",
        },
        {
          duration: 5.2,
          start: 45.039,
          text: "dkey good",
        },
        {
          duration: 6.401,
          start: 46.719,
          text: "morning morning thank you for being here",
        },
        {
          duration: 6.16,
          start: 50.239,
          text: "everyone it's so great to see all of you",
        },
        {
          duration: 5.8,
          start: 53.12,
          text: "I'm Thomas and I'm a developer and today",
        },
        {
          duration: 4.441,
          start: 56.399,
          text: "is the day I've been waiting for for the",
        },
        {
          duration: 4.439,
          start: 58.92,
          text: "last 8 months",
        },
        {
          duration: 4.959,
          start: 60.84,
          text: "today what we will do on this stage how",
        },
        {
          duration: 5.08,
          start: 63.359,
          text: "we will build what we will launch it",
        },
        {
          duration: 4.0,
          start: 65.799,
          text: "will redefine the essence of software",
        },
        {
          duration: 4.441,
          start: 68.439,
          text: "development",
        },
        {
          duration: 5.68,
          start: 69.799,
          text: "itself this is a moment long in the",
        },
        {
          duration: 4.559,
          start: 72.88,
          text: "making now if you recall it was just a",
        },
        {
          duration: 5.081,
          start: 75.479,
          text: "few weeks after gith up Universe last",
        },
        {
          duration: 6.881,
          start: 77.439,
          text: "year when AI had its Big Bang moment",
        },
        {
          duration: 7.04,
          start: 80.56,
          text: "Chad GPT exploded onto the scene it",
        },
        {
          duration: 6.0,
          start: 84.32,
          text: "washed over the airwaves it was the most",
        },
        {
          duration: 5.12,
          start: 87.6,
          text: "consequential disruption to techn ology",
        },
        {
          duration: 4.36,
          start: 90.32,
          text: "since the Advent of the internet browser",
        },
        {
          duration: 3.719,
          start: 92.72,
          text: "our Global Consciousness has not been",
        },
        {
          duration: 4.68,
          start: 94.68,
          text: "the same",
        },
        {
          duration: 5.761,
          start: 96.439,
          text: "since but forget up our generative AI",
        },
        {
          duration: 6.52,
          start: 99.36,
          text: "story did not start there it dates back",
        },
        {
          duration: 6.239,
          start: 102.2,
          text: "all the way to 2020 and it's documented",
        },
        {
          duration: 6.199,
          start: 105.88,
          text: "in a white paper we internally call the",
        },
        {
          duration: 5.801,
          start: 108.439,
          text: "coding Oracle paper back in 2020 a group",
        },
        {
          duration: 4.841,
          start: 112.079,
          text: "of our wildly talented Engineers got",
        },
        {
          duration: 6.44,
          start: 114.24,
          text: "their hands on a raw version of open",
        },
        {
          duration: 6.92,
          start: 116.92,
          text: "ai's gpt3 model and with this model that",
        },
        {
          duration: 6.32,
          start: 120.68,
          text: "sought to answer a single question was",
        },
        {
          duration: 5.52,
          start: 123.84,
          text: "an automated pair programmer fact or",
        },
        {
          duration: 6.16,
          start: 127.0,
          text: "fiction could this Transformer model",
        },
        {
          duration: 6.8,
          start: 129.36,
          text: "this strange thoughtful machine actually",
        },
        {
          duration: 5.92,
          start: 133.16,
          text: "help solve the tasks of an everyday",
        },
        {
          duration: 4.6,
          start: 136.16,
          text: "developer our team knuckled down and",
        },
        {
          duration: 3.64,
          start: 139.08,
          text: "pulled together a bunch of tasks you",
        },
        {
          duration: 4.4,
          start: 140.76,
          text: "know like standard exercises developers",
        },
        {
          duration: 4.48,
          start: 142.72,
          text: "often do in job interviews I remember",
        },
        {
          duration: 4.079,
          start: 145.16,
          text: "hopping on a call and one by one we fed",
        },
        {
          duration: 3.2,
          start: 147.2,
          text: "these exercises into the model and",
        },
        {
          duration: 5.241,
          start: 149.239,
          text: "observed",
        },
        {
          duration: 7.04,
          start: 150.4,
          text: "happened and in 2020 out of 203",
        },
        {
          duration: 7.72,
          start: 154.48,
          text: "handcrafted programming exercises then",
        },
        {
          duration: 7.24,
          start: 157.44,
          text: "prompted the model solved 93% of them 3",
        },
        {
          duration: 5.44,
          start: 162.2,
          text: "years ago it already solved",
        },
        {
          duration: 5.36,
          start: 164.68,
          text: "93% this was the Genesis this was the",
        },
        {
          duration: 4.92,
          start: 167.64,
          text: "moment this is what won me over and I",
        },
        {
          duration: 5.04,
          start: 170.04,
          text: "tell you it takes a lot to win over a",
        },
        {
          duration: 5.12,
          start: 172.56,
          text: "skeptical German",
        },
        {
          duration: 5.12,
          start: 175.08,
          text: "developer and our Engineers put that",
        },
        {
          duration: 5.919,
          start: 177.68,
          text: "feeling down and writing that AI I would",
        },
        {
          duration: 6.28,
          start: 180.2,
          text: "and I quote change developer Tools in",
        },
        {
          duration: 4.801,
          start: 183.599,
          text: "fundamental ways in particular an",
        },
        {
          duration: 4.119,
          start: 186.48,
          text: "automated pair programmer can be built",
        },
        {
          duration: 4.44,
          start: 188.4,
          text: "that puts the collective knowledge of",
        },
        {
          duration: 4.72,
          start: 190.599,
          text: "the entire giup community at the",
        },
        {
          duration: 5.0,
          start: 192.84,
          text: "fingertips of every individual big",
        },
        {
          duration: 5.041,
          start: 195.319,
          text: "statement right early statement but we",
        },
        {
          duration: 5.479,
          start: 197.84,
          text: "took a risk and we built the world's",
        },
        {
          duration: 5.439,
          start: 200.36,
          text: "first at scale a pair programmer a novel",
        },
        {
          duration: 5.401,
          start: 203.319,
          text: "tool with a large language model before",
        },
        {
          duration: 5.841,
          start: 205.799,
          text: "the world was ready and today with more",
        },
        {
          duration: 5.68,
          start: 208.72,
          text: "than 1 million paid users across 190",
        },
        {
          duration: 6.72,
          start: 211.64,
          text: "countries get up copot is now the most",
        },
        {
          duration: 3.96,
          start: 214.4,
          text: "widely adopted AI developer tool in",
        },
        {
          duration: 4.479,
          start: 222.48,
          text: "history and from this worldwide adoption",
        },
        {
          duration: 3.881,
          start: 225.159,
          text: "we have seen the most stunning evidence",
        },
        {
          duration: 5.081,
          start: 226.959,
          text: "of productivity gains since we got rid",
        },
        {
          duration: 6.8,
          start: 229.04,
          text: "of Punch Cards in Assembly Language",
        },
        {
          duration: 7.96,
          start: 232.04,
          text: "already copilot is making developers 55%",
        },
        {
          duration: 6.039,
          start: 235.84,
          text: "faster in coding a 55% productivity gain",
        },
        {
          duration: 5.36,
          start: 240.0,
          text: "the biggest ever experienced in the",
        },
        {
          duration: 6.72,
          start: 241.879,
          text: "first year of a novel developer tool and",
        },
        {
          duration: 6.439,
          start: 245.36,
          text: "people truly love using it open source",
        },
        {
          duration: 6.36,
          start: 248.599,
          text: "maintainers students teachers developers",
        },
        {
          duration: 6.84,
          start: 251.799,
          text: "and Fortune 500 companies from Shopify",
        },
        {
          duration: 6.52,
          start: 254.959,
          text: "to Marcato libbre to Mercedes to BWC in",
        },
        {
          duration: 4.881,
          start: 258.639,
          text: "just a short period of time get up copy",
        },
        {
          duration: 4.72,
          start: 261.479,
          text: "has become the greatest competitive",
        },
        {
          duration: 6.28,
          start: 263.52,
          text: "advantage in any software driven",
        },
        {
          duration: 7.28,
          start: 266.199,
          text: "business in now over 37,000 organ G",
        },
        {
          duration: 3.679,
          start: 269.8,
          text: "ation are using co-pilot to achieve",
        },
        {
          duration: 6.28,
          start: 275.72,
          text: "more it's been adopted by organizations",
        },
        {
          duration: 7.08,
          start: 278.32,
          text: "at all sizes and across all sectors and",
        },
        {
          duration: 5.16,
          start: 282.0,
          text: "industries today the pair programmer we",
        },
        {
          duration: 5.799,
          start: 285.4,
          text: "dreamed off in the coding Oracle paper",
        },
        {
          duration: 6.52,
          start: 287.16,
          text: "has accelerated Beyond even our wildest",
        },
        {
          duration: 4.44,
          start: 291.199,
          text: "aspirations but AI supported code",
        },
        {
          duration: 4.44,
          start: 293.68,
          text: "completion was always just the starting",
        },
        {
          duration: 4.761,
          start: 295.639,
          text: "point the change agent for the bigger",
        },
        {
          duration: 4.56,
          start: 298.12,
          text: "picture you know many many professional",
        },
        {
          duration: 4.799,
          start: 300.4,
          text: "developers actually only code like two",
        },
        {
          duration: 4.32,
          start: 302.68,
          text: "hours a day so what use is it if",
        },
        {
          duration: 4.641,
          start: 305.199,
          text: "developers will blazingly fasten the",
        },
        {
          duration: 4.639,
          start: 307.0,
          text: "editor just to drown in mundane tasks",
        },
        {
          duration: 4.079,
          start: 309.84,
          text: "when the initial coding is",
        },
        {
          duration: 4.721,
          start: 311.639,
          text: "complete this was the conviction behind",
        },
        {
          duration: 4.601,
          start: 313.919,
          text: "our copal X Vision announcement in March",
        },
        {
          duration: 4.16,
          start: 316.36,
          text: "it was the first view of AI sailing",
        },
        {
          duration: 4.679,
          start: 318.52,
          text: "beyond the editor and infusing the",
        },
        {
          duration: 4.6,
          start: 320.52,
          text: "entire developer life cycle and we did",
        },
        {
          duration: 4.241,
          start: 323.199,
          text: "not let that Vision Escape us and in the",
        },
        {
          duration: 3.359,
          start: 325.12,
          text: "last eight months we created something",
        },
        {
          duration: 3.52,
          start: 327.44,
          text: "even",
        },
        {
          duration: 5.0,
          start: 328.479,
          text: "bigger in a world where developer",
        },
        {
          duration: 4.88,
          start: 330.96,
          text: "shortages on wise in a world where",
        },
        {
          duration: 5.081,
          start: 333.479,
          text: "billions of lines of code form the",
        },
        {
          duration: 4.68,
          start: 335.84,
          text: "foundation of the global economy in a",
        },
        {
          duration: 4.759,
          start: 338.56,
          text: "world where developers are still",
        },
        {
          duration: 5.0,
          start: 340.52,
          text: "expected to keep up with Cobalt Legacy",
        },
        {
          duration: 5.401,
          start: 343.319,
          text: "code dating back to the",
        },
        {
          duration: 5.2,
          start: 345.52,
          text: "1960s and yet still build for tomorrow",
        },
        {
          duration: 4.84,
          start: 348.72,
          text: "we simply have to make it easier for",
        },
        {
          duration: 3.84,
          start: 350.72,
          text: "developers to do it all and to do it all",
        },
        {
          duration: 3.44,
          start: 353.56,
          text: "with a",
        },
        {
          duration: 7.4,
          start: 354.56,
          text: "co-pilot just as GitHub was founded on",
        },
        {
          duration: 4.96,
          start: 357.0,
          text: "git today we're ref found founded on",
        },
        {
          duration: 4.84,
          start: 365.479,
          text: "co-pilot AI is now the electricity",
        },
        {
          duration: 4.72,
          start: 368.28,
          text: "powering the home for the world's",
        },
        {
          duration: 4.521,
          start: 370.319,
          text: "developers in just a short time the pair",
        },
        {
          duration: 4.919,
          start: 373.0,
          text: "programmer that started it all has",
        },
        {
          duration: 6.199,
          start: 374.84,
          text: "evolved expanded and transformed giab",
        },
        {
          duration: 6.361,
          start: 377.919,
          text: "into the AI power developer",
        },
        {
          duration: 5.28,
          start: 381.039,
          text: "platform from the idea to the issue to",
        },
        {
          duration: 5.319,
          start: 384.28,
          text: "building and coding to reviewing",
        },
        {
          duration: 6.401,
          start: 386.319,
          text: "securing deploying to get up.com itself",
        },
        {
          duration: 5.641,
          start: 389.599,
          text: "up is now powered by co-pilot every step",
        },
        {
          duration: 5.14,
          start: 392.72,
          text: "and this is real today and we're going",
        },
        {
          duration: 2.96,
          start: 395.24,
          text: "to show it to you right",
        },
        {
          duration: 2.95,
          start: 397.86,
          text: "[Music]",
        },
        {
          duration: 7.6,
          start: 398.2,
          text: "[Applause]",
        },
        {
          duration: 9.109,
          start: 400.81,
          text: "[Music]",
        },
        {
          duration: 7.0,
          start: 405.8,
          text: "now now back in March we shared co-pilot",
        },
        {
          duration: 6.241,
          start: 409.919,
          text: "chat our vision for conversational",
        },
        {
          duration: 5.88,
          start: 412.8,
          text: "assistance with all of you for the very",
        },
        {
          duration: 3.879,
          start: 416.16,
          text: "first time built right into your",
        },
        {
          duration: 4.799,
          start: 418.68,
          text: "favorite editor",
        },
        {
          duration: 6.6,
          start: 420.039,
          text: "we designed chat to help every developer",
        },
        {
          duration: 6.241,
          start: 423.479,
          text: "build the big picture all in natural",
        },
        {
          duration: 6.801,
          start: 426.639,
          text: "language we've made chat even more",
        },
        {
          duration: 7.28,
          start: 429.72,
          text: "powerful since but seeing is believing",
        },
        {
          duration: 6.159,
          start: 433.44,
          text: "right the contribution graph is cool but",
        },
        {
          duration: 5.96,
          start: 437.0,
          text: "today I thought it'd be even cooler to",
        },
        {
          duration: 6.681,
          start: 439.599,
          text: "build a new app called myir commit.",
        },
        {
          duration: 5.679,
          start: 442.96,
          text: "comom to figure out when mine and every",
        },
        {
          duration: 3.84,
          start: 446.28,
          text: "developer on github's first commit",
        },
        {
          duration: 5.601,
          start: 448.639,
          text: "happened",
        },
        {
          duration: 6.0,
          start: 450.12,
          text: "now we can see who in here is the real",
        },
        {
          duration: 4.92,
          start: 454.24,
          text: "OG of",
        },
        {
          duration: 5.519,
          start: 456.12,
          text: "GitHub my least favorite part about",
        },
        {
          duration: 6.2,
          start: 459.16,
          text: "starting a new project is the starting",
        },
        {
          duration: 6.441,
          start: 461.639,
          text: "part who likes a blank space after all",
        },
        {
          duration: 6.44,
          start: 465.36,
          text: "thankfully co-pilot has me covered with",
        },
        {
          duration: 6.92,
          start: 468.08,
          text: "chat I'll be able to explain what I need",
        },
        {
          duration: 5.399,
          start: 471.8,
          text: "all in natural language and Skip all the",
        },
        {
          duration: 5.28,
          start: 475.0,
          text: "boring project set",
        },
        {
          duration: 5.96,
          start: 477.199,
          text: "up I'm going to open the chat panel in",
        },
        {
          duration: 6.08,
          start: 480.28,
          text: "my Editor to give me a bit more space to",
        },
        {
          duration: 6.201,
          start: 483.159,
          text: "read and then we're going to use a new",
        },
        {
          duration: 6.2,
          start: 486.36,
          text: "slash command to generate an entire",
        },
        {
          duration: 5.32,
          start: 489.36,
          text: "project in Visual Studio code if you",
        },
        {
          duration: 4.759,
          start: 492.56,
          text: "haven't used slash commands before",
        },
        {
          duration: 5.519,
          start: 494.68,
          text: "they're a powerful tool to help you",
        },
        {
          duration: 5.241,
          start: 497.319,
          text: "execute your most common chat commands",
        },
        {
          duration: 5.72,
          start: 500.199,
          text: "with just a single",
        },
        {
          duration: 5.24,
          start: 502.56,
          text: "word saving you even more",
        },
        {
          duration: 4.441,
          start: 505.919,
          text: "keystrokes I've got a list of",
        },
        {
          duration: 5.4,
          start: 507.8,
          text: "requirements already in my head so I'll",
        },
        {
          duration: 6.0,
          start: 510.36,
          text: "feed those into the new command and let",
        },
        {
          duration: 6.279,
          start: 513.2,
          text: "co-pilot build the scaffolding I need",
        },
        {
          duration: 6.0,
          start: 516.36,
          text: "we're going to use nextjs with react",
        },
        {
          duration: 5.961,
          start: 519.479,
          text: "components and our design system primer",
        },
        {
          duration: 5.12,
          start: 522.36,
          text: "and we'll call the app my first commit",
        },
        {
          duration: 4.28,
          start: 525.44,
          text: "you'll notice how co-pilot gives me the",
        },
        {
          duration: 4.919,
          start: 527.48,
          text: "structure for my new project so I could",
        },
        {
          duration: 4.679,
          start: 529.72,
          text: "create it right here but I'm going to",
        },
        {
          duration: 4.241,
          start: 532.399,
          text: "jump to a workspace co-pilot created for",
        },
        {
          duration: 3.801,
          start: 534.399,
          text: "me earlier that I've already started",
        },
        {
          duration: 3.92,
          start: 536.64,
          text: "tinkering",
        },
        {
          duration: 5.199,
          start: 538.2,
          text: "with let's see what we're working with",
        },
        {
          duration: 5.6,
          start: 540.56,
          text: "here by heading to simple browser and",
        },
        {
          duration: 5.12,
          start: 543.399,
          text: "typing in Thomas's",
        },
        {
          duration: 4.64,
          start: 546.16,
          text: "handle okay we've got basic page",
        },
        {
          duration: 4.44,
          start: 548.519,
          text: "navigation and most of Thomas's info",
        },
        {
          duration: 5.36,
          start: 550.8,
          text: "right honestly I think you look better",
        },
        {
          duration: 6.12,
          start: 552.959,
          text: "here Thomas just kidding so let's go",
        },
        {
          duration: 5.359,
          start: 556.16,
          text: "ahead and replace this hardcoded image",
        },
        {
          duration: 7.44,
          start: 559.079,
          text: "with the actual picture from his user",
        },
        {
          duration: 8.44,
          start: 561.519,
          text: "data I'll select the URL delete and",
        },
        {
          duration: 6.801,
          start: 566.519,
          text: "co-pilot comes to the rescue I'll save",
        },
        {
          duration: 6.201,
          start: 569.959,
          text: "that and it's generally a good idea to",
        },
        {
          duration: 5.759,
          start: 573.32,
          text: "keep tabs on the boss so I'm going to",
        },
        {
          duration: 5.2,
          start: 576.16,
          text: "add location here as well we'll see",
        },
        {
          duration: 5.76,
          start: 579.079,
          text: "co-pilot is giving me exactly what I",
        },
        {
          duration: 5.719,
          start: 581.36,
          text: "need it never fails to be magical and we",
        },
        {
          duration: 5.68,
          start: 584.839,
          text: "also need to add this in the",
        },
        {
          duration: 5.76,
          start: 587.079,
          text: "UI and look because we added location to",
        },
        {
          duration: 3.921,
          start: 590.519,
          text: "our data co-pilot is smart enough to",
        },
        {
          duration: 5.401,
          start: 592.839,
          text: "know that now we want to add it to the",
        },
        {
          duration: 7.92,
          start: 594.44,
          text: "page tab save head back to the simple",
        },
        {
          duration: 7.64,
          start: 598.24,
          text: "browser there's the Thomas we know and",
        },
        {
          duration: 6.52,
          start: 602.36,
          text: "love okay it's time to grab that first",
        },
        {
          duration: 5.72,
          start: 605.88,
          text: "commit now it's been a little while",
        },
        {
          duration: 5.04,
          start: 608.88,
          text: "since I've used GitHub search API so I'm",
        },
        {
          duration: 3.72,
          start: 611.6,
          text: "going to ask for a little bit of help",
        },
        {
          duration: 3.84,
          start: 613.92,
          text: "from",
        },
        {
          duration: 6.92,
          start: 615.32,
          text: "co-pilot and don't you love when you can",
        },
        {
          duration: 4.48,
          start: 617.76,
          text: "type perfectly on stage Under",
        },
        {
          duration: 5.56,
          start: 622.48,
          text: "Pressure all right we're going to ask",
        },
        {
          duration: 5.88,
          start: 624.72,
          text: "co-pilot give it a second to",
        },
        {
          duration: 5.359,
          start: 628.04,
          text: "think always likes to get my heart rate",
        },
        {
          duration: 4.799,
          start: 630.6,
          text: "up just a little bit uh and but it",
        },
        {
          duration: 5.641,
          start: 633.399,
          text: "always comes through it's giving me",
        },
        {
          duration: 7.361,
          start: 635.399,
          text: "exactly what I need I'm going to review",
        },
        {
          duration: 6.359,
          start: 639.04,
          text: "this really fast that looks great head",
        },
        {
          duration: 5.68,
          start: 642.76,
          text: "back over here to my editor and we're",
        },
        {
          duration: 5.921,
          start: 645.399,
          text: "going to insert this with just one",
        },
        {
          duration: 6.519,
          start: 648.44,
          text: "click that'll bug me if I don't fix it",
        },
        {
          duration: 6.72,
          start: 651.32,
          text: "now great we've got that started now I",
        },
        {
          duration: 5.32,
          start: 654.959,
          text: "need to include the commit date",
        },
        {
          duration: 5.56,
          start: 658.04,
          text: "here",
        },
        {
          duration: 5.201,
          start: 660.279,
          text: "looks awesome and once again we have to",
        },
        {
          duration: 6.08,
          start: 663.6,
          text: "update our",
        },
        {
          duration: 8.32,
          start: 665.48,
          text: "UI all right co-pilot 99% there but we",
        },
        {
          duration: 7.599,
          start: 669.68,
          text: "want our first commit so we'll save head",
        },
        {
          duration: 6.44,
          start: 673.8,
          text: "back okay we're almost there but I'm",
        },
        {
          duration: 6.201,
          start: 677.279,
          text: "pretty sure that data is wrong and it",
        },
        {
          duration: 5.2,
          start: 680.24,
          text: "looks a little funky let's see what's",
        },
        {
          duration: 4.88,
          start: 683.48,
          text: "happening all",
        },
        {
          duration: 6.04,
          start: 685.44,
          text: "right ah I see what I've done here I",
        },
        {
          duration: 5.88,
          start: 688.36,
          text: "don't have any ordering in so I'm going",
        },
        {
          duration: 4.599,
          start: 691.48,
          text: "to go ahead and select this and we're",
        },
        {
          duration: 4.92,
          start: 694.24,
          text: "going to use chat to help us figure out",
        },
        {
          duration: 7.681,
          start: 696.079,
          text: "how to sort our commits here I'll head",
        },
        {
          duration: 10.359,
          start: 699.16,
          text: "back and I'm going to say update to",
        },
        {
          duration: 9.44,
          start: 703.76,
          text: "include uh to include or sorry to sort",
        },
        {
          duration: 3.681,
          start: 709.519,
          text: "rather by committer",
        },
        {
          duration: 7.081,
          start: 713.399,
          text: "date give it a second to",
        },
        {
          duration: 8.64,
          start: 716.36,
          text: "think all right that's looking",
        },
        {
          duration: 7.08,
          start: 720.48,
          text: "good but you know when I when I'm on",
        },
        {
          duration: 5.2,
          start: 725.0,
          text: "stage I kind of get asscending and",
        },
        {
          duration: 5.16,
          start: 727.56,
          text: "descending mixed up um and I need the",
        },
        {
          duration: 6.439,
          start: 730.2,
          text: "oldest commits first so I'm going to ask",
        },
        {
          duration: 7.6,
          start: 732.72,
          text: "co-pilot to revise this answer by simply",
        },
        {
          duration: 6.921,
          start: 736.639,
          text: "asking for the oldest or to newest sort",
        },
        {
          duration: 6.84,
          start: 740.32,
          text: "sort by oldest to",
        },
        {
          duration: 6.8,
          start: 743.56,
          text: "newest this is great because I can ask",
        },
        {
          duration: 6.72,
          start: 747.16,
          text: "co-pilot exactly what's in my mind and",
        },
        {
          duration: 5.719,
          start: 750.36,
          text: "it can translate it into the code I need",
        },
        {
          duration: 4.959,
          start: 753.88,
          text: "we'll take a look",
        },
        {
          duration: 6.32,
          start: 756.079,
          text: "here all right that looks good we'll go",
        },
        {
          duration: 7.081,
          start: 758.839,
          text: "ahead and replace the line select save",
        },
        {
          duration: 5.961,
          start: 762.399,
          text: "oh we've got something going on here all",
        },
        {
          duration: 5.039,
          start: 765.92,
          text: "right you know what I'm under time",
        },
        {
          duration: 4.8,
          start: 768.36,
          text: "pressure here so I'm just going to",
        },
        {
          duration: 4.56,
          start: 770.959,
          text: "replace this with my",
        },
        {
          duration: 5.32,
          start: 773.16,
          text: "trusty demo",
        },
        {
          duration: 5.241,
          start: 775.519,
          text: "save if anyone was second guessing if",
        },
        {
          duration: 3.479,
          start: 778.48,
          text: "this was live or not you've uh just got",
        },
        {
          duration: 4.319,
          start: 780.76,
          text: "your",
        },
        {
          duration: 5.921,
          start: 781.959,
          text: "answer all right this is looking good",
        },
        {
          duration: 5.241,
          start: 785.079,
          text: "but 2009 I was more worried about",
        },
        {
          duration: 4.92,
          start: 787.88,
          text: "getting my driver's license that year uh",
        },
        {
          duration: 4.16,
          start: 790.32,
          text: "rather than committing code um but I",
        },
        {
          duration: 4.64,
          start: 792.8,
          text: "really don't need it down to the minute",
        },
        {
          duration: 5.32,
          start: 794.48,
          text: "so let's go ahead and clean that up and",
        },
        {
          duration: 4.92,
          start: 797.44,
          text: "rather than using the side panel like",
        },
        {
          duration: 5.599,
          start: 799.8,
          text: "I've been doing I can actually get",
        },
        {
          duration: 4.44,
          start: 802.36,
          text: "co-pilot to help me right in the editor",
        },
        {
          duration: 3.961,
          start: 805.399,
          text: "right on the line of code that I'm",
        },
        {
          duration: 5.52,
          start: 806.8,
          text: "working on by pressing command or",
        },
        {
          duration: 7.88,
          start: 809.36,
          text: "control I so for this line let's ask to",
        },
        {
          duration: 8.759,
          start: 812.32,
          text: "get rid of the time remove Time and Time",
        },
        {
          duration: 7.0,
          start: 817.24,
          text: "Zone we'll give it a second to think and",
        },
        {
          duration: 5.921,
          start: 821.079,
          text: "ah you know I really love this new diff",
        },
        {
          duration: 5.48,
          start: 824.24,
          text: "view because I can inspect the change",
        },
        {
          duration: 4.8,
          start: 827.0,
          text: "before I actually agree to take it and",
        },
        {
          duration: 6.679,
          start: 829.72,
          text: "it's in a form that I'm so used to",
        },
        {
          duration: 8.959,
          start: 831.8,
          text: "already we'll save head back there it is",
        },
        {
          duration: 4.36,
          start: 836.399,
          text: "it's working exactly as we want",
        },
        {
          duration: 5.8,
          start: 842.36,
          text: "but that's not all we've got one thing",
        },
        {
          duration: 5.36,
          start: 844.839,
          text: "left my favorite part documentation so",
        },
        {
          duration: 4.4,
          start: 848.16,
          text: "let's head back we're going to select",
        },
        {
          duration: 4.0,
          start: 850.199,
          text: "the function we've been working in and",
        },
        {
          duration: 5.04,
          start: 852.56,
          text: "we're going to bring up co-pilot using",
        },
        {
          duration: 6.64,
          start: 854.199,
          text: "inline chat one last time and use our",
        },
        {
          duration: 5.32,
          start: 857.6,
          text: "doc slash command all right that looks",
        },
        {
          duration: 6.0,
          start: 860.839,
          text: "good we're going to",
        },
        {
          duration: 6.8,
          start: 862.92,
          text: "accept I got to tell you I'm exhausted I",
        },
        {
          duration: 7.321,
          start: 866.839,
          text: "must have pressed tab like 10 times uh",
        },
        {
          duration: 7.28,
          start: 869.72,
          text: "and wow I need a break now co-pilot chat",
        },
        {
          duration: 6.359,
          start: 874.16,
          text: "is coming to wherever you are whether",
        },
        {
          duration: 8.399,
          start: 877.0,
          text: "that's Visual Studio code visual studio",
        },
        {
          duration: 7.841,
          start: 880.519,
          text: "and now intellig webstorm pycharm and",
        },
        {
          duration: 5.88,
          start: 885.399,
          text: "other jetbrain idees are available in",
        },
        {
          duration: 2.919,
          start: 888.36,
          text: "preview",
        },
        {
          duration: 6.279,
          start: 894.68,
          text: "today chats in your favorite editors but",
        },
        {
          duration: 4.92,
          start: 898.32,
          text: "now it's also in your pocket we're",
        },
        {
          duration: 5.761,
          start: 900.959,
          text: "breaking out of the editor and bringing",
        },
        {
          duration: 5.159,
          start: 903.24,
          text: "co-pilot chat to your native IOS and",
        },
        {
          duration: 4.32,
          start: 906.72,
          text: "Android",
        },
        {
          duration: 5.721,
          start: 908.399,
          text: "app it's pretty",
        },
        {
          duration: 5.32,
          start: 911.04,
          text: "cool with the power of natural language",
        },
        {
          duration: 5.079,
          start: 914.12,
          text: "on your mobile device you can get",
        },
        {
          duration: 7.24,
          start: 916.36,
          text: "answers to any programming question",
        },
        {
          duration: 7.64,
          start: 919.199,
          text: "about your repositories files or docs",
        },
        {
          duration: 5.88,
          start: 923.6,
          text: "that's co-pilot wherever you go whether",
        },
        {
          duration: 4.68,
          start: 926.839,
          text: "you're waiting in line at a coffee shop",
        },
        {
          duration: 3.919,
          start: 929.48,
          text: "or procrastinating in the morning when",
        },
        {
          duration: 5.8,
          start: 931.519,
          text: "you can't quite get out of",
        },
        {
          duration: 6.44,
          start: 933.399,
          text: "bed co-pilot chat is now in your IDE",
        },
        {
          duration: 4.241,
          start: 937.319,
          text: "it's coming to GitHub mobile and it's",
        },
        {
          duration: 4.8,
          start: 939.839,
          text: "getting way more",
        },
        {
          duration: 6.48,
          start: 941.56,
          text: "powerful we've upgraded co-pilot chat",
        },
        {
          duration: 6.64,
          start: 944.639,
          text: "with the power of GPT 4 and even more",
        },
        {
          duration: 6.039,
          start: 948.04,
          text: "context from your editor slash commands",
        },
        {
          duration: 4.721,
          start: 951.279,
          text: "and smart actions so I'm only ever a",
        },
        {
          duration: 5.88,
          start: 954.079,
          text: "click away from solving my next",
        },
        {
          duration: 7.079,
          start: 956.0,
          text: "development task and find finally inline",
        },
        {
          duration: 5.841,
          start: 959.959,
          text: "chat to help you iterate on co- on code",
        },
        {
          duration: 4.081,
          start: 963.079,
          text: "with co-pilot without ever having to",
        },
        {
          duration: 4.24,
          start: 965.8,
          text: "move your",
        },
        {
          duration: 5.76,
          start: 967.16,
          text: "mouse everything I just rattled off",
        },
        {
          duration: 5.4,
          start: 970.04,
          text: "including the upgrades to co-pilot chat",
        },
        {
          duration: 5.24,
          start: 972.92,
          text: "chat coming to mobile jet brains and",
        },
        {
          duration: 4.72,
          start: 975.44,
          text: "even co-pilot in the CLI will be in your",
        },
        {
          duration: 3.599,
          start: 978.16,
          text: "existing co-pilot",
        },
        {
          duration: 4.88,
          start: 980.16,
          text: "subscription",
        },
        {
          duration: 6.161,
          start: 981.759,
          text: "yes you definitely heard that right if",
        },
        {
          duration: 5.479,
          start: 985.04,
          text: "you've got a co-pilot subscription today",
        },
        {
          duration: 4.8,
          start: 987.92,
          text: "all of these features are coming to you",
        },
        {
          duration: 6.401,
          start: 990.519,
          text: "but when you might",
        },
        {
          duration: 8.16,
          start: 992.72,
          text: "ask next month co-pilot chat will be",
        },
        {
          duration: 7.599,
          start: 996.92,
          text: "generally available in just a few short",
        },
        {
          duration: 7.439,
          start: 1000.88,
          text: "weeks all of this taken together will",
        },
        {
          duration: 6.841,
          start: 1004.519,
          text: "make natural language a new Universal",
        },
        {
          duration: 5.401,
          start: 1008.319,
          text: "programming language for every developer",
        },
        {
          duration: 2.36,
          start: 1011.36,
          text: "on the",
        },
        {
          duration: 3.19,
          start: 1014.29,
          text: "[Applause]",
        },
        {
          duration: 4.99,
          start: 1015.49,
          text: "[Music]",
        },
        {
          duration: 3.0,
          start: 1017.48,
          text: "planet",
        },
        {
          duration: 6.719,
          start: 1022.36,
          text: "up until now co-pilot was just about",
        },
        {
          duration: 5.921,
          start: 1025.559,
          text: "co-generation that's changing today",
        },
        {
          duration: 5.161,
          start: 1029.079,
          text: "GitHub is the AI powered developer",
        },
        {
          duration: 4.64,
          start: 1031.48,
          text: "platform from pull requests to security",
        },
        {
          duration: 5.199,
          start: 1034.24,
          text: "to security scanning to your",
        },
        {
          duration: 5.439,
          start: 1036.12,
          text: "repositories and more co-pilot is now",
        },
        {
          duration: 4.6,
          start: 1039.439,
          text: "integrated into every step of the",
        },
        {
          duration: 5.721,
          start: 1041.559,
          text: "developer workflow let me show you what",
        },
        {
          duration: 5.081,
          start: 1044.039,
          text: "I mean so I've been working on styling",
        },
        {
          duration: 4.36,
          start: 1047.28,
          text: "the my first commit app that Allison",
        },
        {
          duration: 6.52,
          start: 1049.12,
          text: "just started it's coming along very",
        },
        {
          duration: 6.399,
          start: 1051.64,
          text: "nicely take a look but I noticed that",
        },
        {
          duration: 6.76,
          start: 1055.64,
          text: "Thomas has been busy and he submitted",
        },
        {
          duration: 7.0,
          start: 1058.039,
          text: "not one but two PRS so let's take a look",
        },
        {
          duration: 2.639,
          start: 1062.4,
          text: "at the first",
        },
        {
          duration: 5.521,
          start: 1067.799,
          text: "one okay so it looks like there are a",
        },
        {
          duration: 6.8,
          start: 1071.28,
          text: "lot of file changes here but I'm not",
        },
        {
          duration: 6.8,
          start: 1073.32,
          text: "seeing any test Oh Thomas coding 55%",
        },
        {
          duration: 6.32,
          start: 1078.08,
          text: "fast F doesn't mean you get to write bad",
        },
        {
          duration: 6.96,
          start: 1080.12,
          text: "code 55% faster so I'm going to open up",
        },
        {
          duration: 3.96,
          start: 1084.4,
          text: "this in a code space real quick because",
        },
        {
          duration: 3.24,
          start: 1087.08,
          text: "even though Thomas wants to get this",
        },
        {
          duration: 4.16,
          start: 1088.36,
          text: "done quickly I don't feel comfortable",
        },
        {
          duration: 5.12,
          start: 1090.32,
          text: "merging this without at least one unit",
        },
        {
          duration: 4.76,
          start: 1092.52,
          text: "test and when I open up this in a code",
        },
        {
          duration: 5.08,
          start: 1095.44,
          text: "space I don't even have to touch my",
        },
        {
          duration: 7.16,
          start: 1097.28,
          text: "local files I can edit and make changes",
        },
        {
          duration: 7.96,
          start: 1100.52,
          text: "in an isolated Dev environment in the",
        },
        {
          duration: 6.68,
          start: 1104.44,
          text: "cloud all right so I have the user card",
        },
        {
          duration: 4.48,
          start: 1108.48,
          text: "JS component open if I highlight the",
        },
        {
          duration: 4.84,
          start: 1111.12,
          text: "entire",
        },
        {
          duration: 5.599,
          start: 1112.96,
          text: "component pop open CoPilot chat and type",
        },
        {
          duration: 2.599,
          start: 1115.96,
          text: "slash",
        },
        {
          duration: 5.801,
          start: 1118.919,
          text: "test co-pilot is going to automatically",
        },
        {
          duration: 5.159,
          start: 1121.88,
          text: "generate an entire test suite for this",
        },
        {
          duration: 4.439,
          start: 1124.72,
          text: "component here it is telling me exactly",
        },
        {
          duration: 4.401,
          start: 1127.039,
          text: "what it's going to do then it gives me",
        },
        {
          duration: 6.481,
          start: 1129.159,
          text: "the test and then it tells me how to run",
        },
        {
          duration: 8.0,
          start: 1131.44,
          text: "it wow how cool is that let me save this",
        },
        {
          duration: 6.96,
          start: 1135.64,
          text: "new test in a file I'm going to call it",
        },
        {
          duration: 3.16,
          start: 1139.44,
          text: "userc card.",
        },
        {
          duration: 5.159,
          start: 1142.88,
          text: "test.js awesome now let me commit my",
        },
        {
          duration: 4.24,
          start: 1146.4,
          text: "changes real",
        },
        {
          duration: 6.52,
          start: 1148.039,
          text: "quick because what I'm about to show you",
        },
        {
          duration: 3.919,
          start: 1150.64,
          text: "next is a game",
        },
        {
          duration: 7.36,
          start: 1156.799,
          text: "Cher now what I'm about to show you for",
        },
        {
          duration: 6.24,
          start: 1161.0,
          text: "the very first time is GitHub copilot",
        },
        {
          duration: 6.841,
          start: 1164.159,
          text: "chat integrated directly into github.com",
        },
        {
          duration: 7.0,
          start: 1167.24,
          text: "that's right co-pilot has now expended",
        },
        {
          duration: 6.08,
          start: 1171.0,
          text: "out of the editor let's take a look so",
        },
        {
          duration: 7.679,
          start: 1174.24,
          text: "if I go back to the pr and I go to let's",
        },
        {
          duration: 7.839,
          start: 1177.08,
          text: "say index.js and select lines 25 through",
        },
        {
          duration: 7.041,
          start: 1181.919,
          text: "45 click on the co-pilot icon that pops",
        },
        {
          duration: 5.88,
          start: 1184.919,
          text: "up and type please explain this code I",
        },
        {
          duration: 4.88,
          start: 1188.96,
          text: "always like to say please to the AI",
        },
        {
          duration: 6.401,
          start: 1190.799,
          text: "because you just never",
        },
        {
          duration: 5.48,
          start: 1193.84,
          text: "know but take a look at this co-pilot",
        },
        {
          duration: 4.52,
          start: 1197.2,
          text: "chat is telling me exactly what this",
        },
        {
          duration: 4.8,
          start: 1199.32,
          text: "code is doing and it even went as far as",
        },
        {
          duration: 6.0,
          start: 1201.72,
          text: "breaking down the code into chunks so",
        },
        {
          duration: 5.799,
          start: 1204.12,
          text: "it's easy for me to read and understand",
        },
        {
          duration: 4.04,
          start: 1207.72,
          text: "this is the power of copilot chat in",
        },
        {
          duration: 4.401,
          start: 1209.919,
          text: "github.com",
        },
        {
          duration: 6.799,
          start: 1211.76,
          text: "now let's go back to the pr because I",
        },
        {
          duration: 7.599,
          start: 1214.32,
          text: "noticed that the description was a bit",
        },
        {
          duration: 6.561,
          start: 1218.559,
          text: "lacking by the way did you know that",
        },
        {
          duration: 7.801,
          start: 1221.919,
          text: "around 40% of pull requests don't have a",
        },
        {
          duration: 6.4,
          start: 1225.12,
          text: "description yeah let's fix that",
        },
        {
          duration: 4.28,
          start: 1229.72,
          text: "so we've added a new icon here for",
        },
        {
          duration: 5.12,
          start: 1231.52,
          text: "co-pilot actions if I click on this",
        },
        {
          duration: 5.96,
          start: 1234.0,
          text: "summary command that pops up co-pilot is",
        },
        {
          duration: 6.24,
          start: 1236.64,
          text: "going to help us generate a detailed PR",
        },
        {
          duration: 5.599,
          start: 1239.96,
          text: "description co-pilot is no longer just",
        },
        {
          duration: 5.039,
          start: 1242.88,
          text: "in your editor it is now integrated into",
        },
        {
          duration: 5.561,
          start: 1245.559,
          text: "PRS to help you with the mundane stuff",
        },
        {
          duration: 5.64,
          start: 1247.919,
          text: "like writing PR descriptions think about",
        },
        {
          duration: 6.0,
          start: 1251.12,
          text: "how long it takes you to come up with a",
        },
        {
          duration: 5.441,
          start: 1253.559,
          text: "meaningful summary of all your",
        },
        {
          duration: 4.64,
          start: 1257.12,
          text: "work",
        },
        {
          duration: 4.76,
          start: 1259.0,
          text: "let's just given a minute woof would you",
        },
        {
          duration: 5.399,
          start: 1261.76,
          text: "look at",
        },
        {
          duration: 6.159,
          start: 1263.76,
          text: "that co-pilot just generated an entire",
        },
        {
          duration: 5.161,
          start: 1267.159,
          text: "description very detailed of all the",
        },
        {
          duration: 4.201,
          start: 1269.919,
          text: "changes that we've made so far it even",
        },
        {
          duration: 4.04,
          start: 1272.32,
          text: "included little clicky links that I",
        },
        {
          duration: 5.4,
          start: 1274.12,
          text: "never would have bothered to add",
        },
        {
          duration: 5.64,
          start: 1276.36,
          text: "myself awesome now let's take a look at",
        },
        {
          duration: 2.48,
          start: 1279.52,
          text: "that second",
        },
        {
          duration: 5.601,
          start: 1285.159,
          text: "PR okay so it looks like there's a",
        },
        {
          duration: 4.959,
          start: 1288.32,
          text: "security issue around an unsanitized",
        },
        {
          duration: 4.72,
          start: 1290.76,
          text: "user input we know that with GI up",
        },
        {
          duration: 4.201,
          start: 1293.279,
          text: "Advanced security code scanning has",
        },
        {
          duration: 5.24,
          start: 1295.48,
          text: "always been able to find vulnerabilities",
        },
        {
          duration: 5.92,
          start: 1297.48,
          text: "in your code but now you don't just get",
        },
        {
          duration: 6.319,
          start: 1300.72,
          text: "a notification there's a complete fix",
        },
        {
          duration: 7.759,
          start: 1303.4,
          text: "suggested right here with the power of",
        },
        {
          duration: 6.0,
          start: 1307.039,
          text: "AI this is called code scanning autofix",
        },
        {
          duration: 3.721,
          start: 1311.159,
          text: "it suggests the changes you need to make",
        },
        {
          duration: 5.681,
          start: 1313.039,
          text: "to fix security",
        },
        {
          duration: 6.08,
          start: 1314.88,
          text: "vulnerabilities if I click here click",
        },
        {
          duration: 5.839,
          start: 1318.72,
          text: "commit",
        },
        {
          duration: 6.599,
          start: 1320.96,
          text: "changes and just like that we're",
        },
        {
          duration: 3.0,
          start: 1324.559,
          text: "secure",
        },
        {
          duration: 5.04,
          start: 1330.72,
          text: "this this is what we mean when we say",
        },
        {
          duration: 6.36,
          start: 1332.96,
          text: "that GitHub is the AI powered developer",
        },
        {
          duration: 6.72,
          start: 1335.76,
          text: "platform now I have some great news for",
        },
        {
          duration: 7.64,
          start: 1339.32,
          text: "you this AI powered code scanning",
        },
        {
          duration: 7.48,
          start: 1342.48,
          text: "autofix feature is available in preview",
        },
        {
          duration: 3.0,
          start: 1346.96,
          text: "today",
        },
        {
          duration: 4.079,
          start: 1350.72,
          text: "and we're going even further with our",
        },
        {
          duration: 4.4,
          start: 1352.6,
          text: "security offerings our AI powered",
        },
        {
          duration: 4.0,
          start: 1354.799,
          text: "security offerings GitHub Advanced",
        },
        {
          duration: 4.96,
          start: 1357.0,
          text: "security has been able to scan for known",
        },
        {
          duration: 6.12,
          start: 1358.799,
          text: "secret patterns for a while we have more",
        },
        {
          duration: 5.719,
          start: 1361.96,
          text: "great news for you we're introducing a",
        },
        {
          duration: 6.161,
          start: 1364.919,
          text: "new AI powered secret scanning tool",
        },
        {
          duration: 3.401,
          start: 1367.679,
          text: "available in preview",
        },
        {
          duration: 4.399,
          start: 1372.52,
          text: "today this will help you find secrets",
        },
        {
          duration: 3.959,
          start: 1374.96,
          text: "that don't have patterns like password",
        },
        {
          duration: 3.961,
          start: 1376.919,
          text: "stored and Source control control the",
        },
        {
          duration: 6.36,
          start: 1378.919,
          text: "cause of some of the most expensive",
        },
        {
          duration: 7.0,
          start: 1380.88,
          text: "exploits over recent years now as we all",
        },
        {
          duration: 5.441,
          start: 1385.279,
          text: "know the two hardest problems in",
        },
        {
          duration: 4.44,
          start: 1387.88,
          text: "computer science are naming things and",
        },
        {
          duration: 4.76,
          start: 1390.72,
          text: "regular",
        },
        {
          duration: 5.28,
          start: 1392.32,
          text: "Expressions So today we're making it",
        },
        {
          duration: 4.96,
          start: 1395.48,
          text: "easier for you to write your own custom",
        },
        {
          duration: 5.6,
          start: 1397.6,
          text: "patterns with our new AI powered regular",
        },
        {
          duration: 4.52,
          start: 1400.44,
          text: "expression assistant this will all be",
        },
        {
          duration: 3.68,
          start: 1403.2,
          text: "included in your company's GitHub",
        },
        {
          duration: 4.92,
          start: 1404.96,
          text: "Advanced security",
        },
        {
          duration: 3.0,
          start: 1406.88,
          text: "subscription",
        },
        {
          duration: 6.681,
          start: 1412.159,
          text: "we are truly bringing AI to every part",
        },
        {
          duration: 7.28,
          start: 1415.24,
          text: "of the GitHub platform and that means",
        },
        {
          duration: 5.92,
          start: 1418.84,
          text: "every part github.com is the homepage",
        },
        {
          duration: 4.44,
          start: 1422.52,
          text: "for software development where every",
        },
        {
          duration: 4.279,
          start: 1424.76,
          text: "project can begin where developers",
        },
        {
          duration: 3.92,
          start: 1426.96,
          text: "collaborate and where the open source",
        },
        {
          duration: 5.481,
          start: 1429.039,
          text: "Community builds and maintains the",
        },
        {
          duration: 8.32,
          start: 1430.88,
          text: "world's code now we're integrating",
        },
        {
          duration: 4.68,
          start: 1434.52,
          text: "co-pilot directly into github.com",
        },
        {
          duration: 5.88,
          start: 1440.279,
          text: "W this means you can dig into code",
        },
        {
          duration: 7.36,
          start: 1444.0,
          text: "generate pull requests and make the rest",
        },
        {
          duration: 5.201,
          start: 1446.159,
          text: "of your life so much easier all with",
        },
        {
          duration: 5.71,
          start: 1451.53,
          text: "[Applause]",
        },
        {
          duration: 5.61,
          start: 1454.51,
          text: "[Music]",
        },
        {
          duration: 6.039,
          start: 1457.24,
          text: "co-pilot as we've just seen code",
        },
        {
          duration: 4.84,
          start: 1460.12,
          text: "generation is an incredible tool but one",
        },
        {
          duration: 4.28,
          start: 1463.279,
          text: "of the most challenging tasks when",
        },
        {
          duration: 5.4,
          start: 1464.96,
          text: "building software is understanding the",
        },
        {
          duration: 5.201,
          start: 1467.559,
          text: "comp complex systems we all work on",
        },
        {
          duration: 5.24,
          start: 1470.36,
          text: "developers today work on large",
        },
        {
          duration: 6.159,
          start: 1472.76,
          text: "multi-service multiplatform multi",
        },
        {
          duration: 6.6,
          start: 1475.6,
          text: "language and often Legacy code bases to",
        },
        {
          duration: 5.921,
          start: 1478.919,
          text: "succeed we have to build off a complex",
        },
        {
          duration: 5.44,
          start: 1482.2,
          text: "Foundation understanding all that code",
        },
        {
          duration: 5.319,
          start: 1484.84,
          text: "that came before us with github's",
        },
        {
          duration: 4.519,
          start: 1487.64,
          text: "powerful code intelligence co-pilot can",
        },
        {
          duration: 5.561,
          start: 1490.159,
          text: "help us get the critical information we",
        },
        {
          duration: 7.601,
          start: 1492.159,
          text: "need so we can build more faster let me",
        },
        {
          duration: 4.04,
          start: 1495.72,
          text: "show you how it works",
        },
        {
          duration: 5.88,
          start: 1499.96,
          text: "now hold on I'm logged in here to my",
        },
        {
          duration: 5.081,
          start: 1503.039,
          text: "personal account let me jump to my work",
        },
        {
          duration: 5.12,
          start: 1505.84,
          text: "account so I can show you how co-pilot",
        },
        {
          duration: 5.439,
          start: 1508.12,
          text: "works for me as an employee here at",
        },
        {
          duration: 5.28,
          start: 1510.96,
          text: "GitHub I'll use this brand new feature",
        },
        {
          duration: 5.521,
          start: 1513.559,
          text: "on github.com where I can switch users",
        },
        {
          duration: 2.84,
          start: 1516.24,
          text: "with a single",
        },
        {
          duration: 5.481,
          start: 1520.399,
          text: "click that's",
        },
        {
          duration: 6.679,
          start: 1523.0,
          text: "better all right let's ask co-pilot a",
        },
        {
          duration: 3.799,
          start: 1525.88,
          text: "question about shortening urls",
        },
        {
          duration: 4.399,
          start: 1529.76,
          text: "how would I create a short link for my",
        },
        {
          duration: 2.24,
          start: 1531.919,
          text: "first",
        },
        {
          duration: 5.36,
          start: 1534.48,
          text: "commit large language models like the",
        },
        {
          duration: 4.439,
          start: 1537.24,
          text: "ones that the power co-pilot have strong",
        },
        {
          duration: 4.079,
          start: 1539.84,
          text: "generalist knowledge of programming",
        },
        {
          duration: 4.88,
          start: 1541.679,
          text: "languages open- Source libraries and",
        },
        {
          duration: 4.321,
          start: 1543.919,
          text: "popular Frameworks you can see here it's",
        },
        {
          duration: 4.681,
          start: 1546.559,
          text: "suggested we use",
        },
        {
          duration: 5.48,
          start: 1548.24,
          text: "bitly now we've heard from organizations",
        },
        {
          duration: 6.08,
          start: 1551.24,
          text: "and developers that you want co-pilot to",
        },
        {
          duration: 6.24,
          start: 1553.72,
          text: "know more about you your code your",
        },
        {
          duration: 5.959,
          start: 1557.32,
          text: "document mentation your poll requests",
        },
        {
          duration: 7.24,
          start: 1559.96,
          text: "and we built just that now co-pilot is",
        },
        {
          duration: 6.12,
          start: 1563.279,
          text: "an expert on your company's codebase to",
        },
        {
          duration: 5.599,
          start: 1567.2,
          text: "today what I'm about to show you for the",
        },
        {
          duration: 5.52,
          start: 1569.399,
          text: "very first time is co-pilot customized",
        },
        {
          duration: 5.641,
          start: 1572.799,
          text: "to your",
        },
        {
          duration: 5.961,
          start: 1574.919,
          text: "organization here let's Point co-pilot",
        },
        {
          duration: 4.959,
          start: 1578.44,
          text: "at our Internal Documentation site at",
        },
        {
          duration: 5.32,
          start: 1580.88,
          text: "GitHub we call our internal doc site The",
        },
        {
          duration: 4.961,
          start: 1583.399,
          text: "Hub and we have our own internal URL",
        },
        {
          duration: 5.199,
          start: 1586.2,
          text: "shortener GH",
        },
        {
          duration: 5.76,
          start: 1588.36,
          text: "IO I'll ask the same question",
        },
        {
          duration: 5.52,
          start: 1591.399,
          text: "again how would I create a short link",
        },
        {
          duration: 2.799,
          start: 1594.12,
          text: "for my first",
        },
        {
          duration: 5.24,
          start: 1597.12,
          text: "commit and now co-pilot is searching",
        },
        {
          duration: 5.12,
          start: 1599.96,
          text: "through our Internal Documentation and",
        },
        {
          duration: 5.28,
          start: 1602.36,
          text: "using it to answer our question so you",
        },
        {
          duration: 4.4,
          start: 1605.08,
          text: "can see here it not only knows the",
        },
        {
          duration: 4.2,
          start: 1607.64,
          text: "correct chatops command to be able to",
        },
        {
          duration: 5.0,
          start: 1609.48,
          text: "create a short link using our internal",
        },
        {
          duration: 4.88,
          start: 1611.84,
          text: "service it's inferring from my question",
        },
        {
          duration: 4.16,
          start: 1614.48,
          text: "what data to use in the command and it's",
        },
        {
          duration: 3.04,
          start: 1616.72,
          text: "even giving me an examp example of how I",
        },
        {
          duration: 4.399,
          start: 1618.64,
          text: "could use",
        },
        {
          duration: 6.84,
          start: 1619.76,
          text: "it let me show you another example this",
        },
        {
          duration: 3.561,
          start: 1623.039,
          text: "time using a project that I work",
        },
        {
          duration: 5.481,
          start: 1627.399,
          text: "on last year at Universe we announced",
        },
        {
          duration: 5.84,
          start: 1630.0,
          text: "github's allnew code search engine code",
        },
        {
          duration: 4.96,
          start: 1632.88,
          text: "named Blackbird and when we built it we",
        },
        {
          duration: 5.439,
          start: 1635.84,
          text: "invented a new data structure to make",
        },
        {
          duration: 6.079,
          start: 1637.84,
          text: "search super fast even at github's huge",
        },
        {
          duration: 3.961,
          start: 1641.279,
          text: "scale we call that data structure the",
        },
        {
          duration: 4.321,
          start: 1643.919,
          text: "geometric",
        },
        {
          duration: 4.439,
          start: 1645.24,
          text: "filter our last co-pilot what is the",
        },
        {
          duration: 4.76,
          start: 1648.24,
          text: "geometric",
        },
        {
          duration: 6.401,
          start: 1649.679,
          text: "filter now we haven't published any",
        },
        {
          duration: 5.2,
          start: 1653.0,
          text: "information about it publicly but now",
        },
        {
          duration: 5.319,
          start: 1656.08,
          text: "because I've given co-pilot access to",
        },
        {
          duration: 4.44,
          start: 1658.2,
          text: "this repo it can answer my questions",
        },
        {
          duration: 3.12,
          start: 1661.399,
          text: "about my",
        },
        {
          duration: 4.24,
          start: 1662.64,
          text: "code take a look at the answer it's",
        },
        {
          duration: 5.121,
          start: 1664.519,
          text: "giving us co-pilot is referencing",
        },
        {
          duration: 5.399,
          start: 1666.88,
          text: "specific files and giving us a breakdown",
        },
        {
          duration: 5.12,
          start: 1669.64,
          text: "of exactly how this data structure",
        },
        {
          duration: 4.64,
          start: 1672.279,
          text: "works this answer is about as good as",
        },
        {
          duration: 3.919,
          start: 1674.76,
          text: "you'd get from any member of the",
        },
        {
          duration: 4.921,
          start: 1676.919,
          text: "Blackbird team",
        },
        {
          duration: 5.36,
          start: 1678.679,
          text: "team think about what that means with",
        },
        {
          duration: 4.52,
          start: 1681.84,
          text: "co-pilot you now have an expert",
        },
        {
          duration: 4.64,
          start: 1684.039,
          text: "available anytime to answer questions",
        },
        {
          duration: 4.4,
          start: 1686.36,
          text: "about your code base right from your",
        },
        {
          duration: 5.48,
          start: 1688.679,
          text: "browser or",
        },
        {
          duration: 4.96,
          start: 1690.76,
          text: "ID and we're not done we're taking the",
        },
        {
          duration: 4.601,
          start: 1694.159,
          text: "next",
        },
        {
          duration: 5.4,
          start: 1695.72,
          text: "step we're now trialing fine-tuning the",
        },
        {
          duration: 4.44,
          start: 1698.76,
          text: "language model itself for several large",
        },
        {
          duration: 5.6,
          start: 1701.12,
          text: "customers including",
        },
        {
          duration: 6.079,
          start: 1703.2,
          text: "AMD by taking a model like gp4 and",
        },
        {
          duration: 4.959,
          start: 1706.72,
          text: "fine-tuning on your company's code base",
        },
        {
          duration: 4.921,
          start: 1709.279,
          text: "co-pilot quickly learns to adapt to your",
        },
        {
          duration: 4.84,
          start: 1711.679,
          text: "company's unique coding style and",
        },
        {
          duration: 4.319,
          start: 1714.2,
          text: "conventions we've seen that fine-tuning",
        },
        {
          duration: 4.241,
          start: 1716.519,
          text: "the model for customers with unique code",
        },
        {
          duration: 4.721,
          start: 1718.519,
          text: "bases can bring a massive performance",
        },
        {
          duration: 4.279,
          start: 1720.76,
          text: "Improvement to their engineering teams",
        },
        {
          duration: 3.679,
          start: 1723.24,
          text: "when combined with github's powerful",
        },
        {
          duration: 4.36,
          start: 1725.039,
          text: "code intelligence and advanced",
        },
        {
          duration: 4.64,
          start: 1726.919,
          text: "fine-tuning co-pilot will feel right at",
        },
        {
          duration: 6.4,
          start: 1729.399,
          text: "home in your organization and help your",
        },
        {
          duration: 4.24,
          start: 1731.559,
          text: "company build even better",
        },
        {
          duration: 3.0,
          start: 1736.399,
          text: "together",
        },
        {
          duration: 4.121,
          start: 1740.519,
          text: "but what about information that lives",
        },
        {
          duration: 5.24,
          start: 1741.84,
          text: "outside of GitHub as developers we all",
        },
        {
          duration: 4.84,
          start: 1744.64,
          text: "have a whole ecosystem of tools like",
        },
        {
          duration: 5.8,
          start: 1747.08,
          text: "deployment infrastructure monitoring",
        },
        {
          duration: 5.319,
          start: 1749.48,
          text: "feature flags and more with co-pilot we",
        },
        {
          duration: 5.12,
          start: 1752.88,
          text: "can now bring information from all of",
        },
        {
          duration: 6.48,
          start: 1754.799,
          text: "these surfaces together in one",
        },
        {
          duration: 5.24,
          start: 1758.0,
          text: "place imagine right from github.com or",
        },
        {
          duration: 3.601,
          start: 1761.279,
          text: "your IDE being able to check the",
        },
        {
          duration: 3.84,
          start: 1763.24,
          text: "performance of a database query in",
        },
        {
          duration: 5.279,
          start: 1764.88,
          text: "production by asking data Stacks how",
        },
        {
          duration: 5.839,
          start: 1767.08,
          text: "it's performing using our new apis for",
        },
        {
          duration: 5.601,
          start: 1770.159,
          text: "co-pilot developers can extend co-pilot",
        },
        {
          duration: 5.24,
          start: 1772.919,
          text: "for nearly any use case right within",
        },
        {
          duration: 5.12,
          start: 1775.76,
          text: "chat you could even check the status of",
        },
        {
          duration: 5.601,
          start: 1778.159,
          text: "a feature flag using launch Darkly or",
        },
        {
          duration: 5.12,
          start: 1780.88,
          text: "ask Postman if you're using an API",
        },
        {
          duration: 4.56,
          start: 1783.76,
          text: "correctly we're kicking off the early",
        },
        {
          duration: 4.679,
          start: 1786.0,
          text: "phases of this program with our debut",
        },
        {
          duration: 4.479,
          start: 1788.32,
          text: "Partners as part of our new GitHub",
        },
        {
          duration: 5.281,
          start: 1790.679,
          text: "co-pilot partner",
        },
        {
          duration: 5.681,
          start: 1792.799,
          text: "program including Red Hat hashy Corp",
        },
        {
          duration: 5.24,
          start: 1795.96,
          text: "data dog and more",
        },
        {
          duration: 5.679,
          start: 1798.48,
          text: "we can't wait to see what you'll",
        },
        {
          duration: 5.44,
          start: 1801.2,
          text: "build it's been a year since Chad GPD",
        },
        {
          duration: 4.961,
          start: 1804.159,
          text: "sparked the Gen Revolution and kicked",
        },
        {
          duration: 4.279,
          start: 1806.64,
          text: "off a new era of innovation in both",
        },
        {
          duration: 4.559,
          start: 1809.12,
          text: "business and software engineering take",
        },
        {
          duration: 4.841,
          start: 1810.919,
          text: "one since that moment Accenture and",
        },
        {
          duration: 4.041,
          start: 1813.679,
          text: "GitHub have been working together to",
        },
        {
          duration: 4.84,
          start: 1815.76,
          text: "make the promise of AI assisted software",
        },
        {
          duration: 5.16,
          start: 1817.72,
          text: "development real at Accenture we",
        },
        {
          duration: 5.319,
          start: 1820.6,
          text: "consider ourselves customer zero for",
        },
        {
          duration: 5.84,
          start: 1822.88,
          text: "GitHub we experiment scale and share our",
        },
        {
          duration: 4.801,
          start: 1825.919,
          text: "learnings from our own usage and client",
        },
        {
          duration: 5.079,
          start: 1828.72,
          text: "engagements to help GitHub innovate",
        },
        {
          duration: 6.319,
          start: 1830.72,
          text: "faster we were the first global company",
        },
        {
          duration: 6.201,
          start: 1833.799,
          text: "of our size to Pilot GitHub co-pilot and",
        },
        {
          duration: 5.64,
          start: 1837.039,
          text: "we quickly learned a few key things",
        },
        {
          duration: 5.64,
          start: 1840.0,
          text: "first the promise of efficiency gains",
        },
        {
          duration: 5.561,
          start: 1842.679,
          text: "are real across multiple phases of the",
        },
        {
          duration: 5.639,
          start: 1845.64,
          text: "software delivery life cycle the real",
        },
        {
          duration: 5.319,
          start: 1848.24,
          text: "value comes from Speed code quality and",
        },
        {
          duration: 4.4,
          start: 1851.279,
          text: "security and developer experience and",
        },
        {
          duration: 3.801,
          start: 1853.559,
          text: "where we see the biggest opportunity is",
        },
        {
          duration: 3.6,
          start: 1855.679,
          text: "integrating co-pilot into an an",
        },
        {
          duration: 5.199,
          start: 1857.36,
          text: "organization's end to-end automation",
        },
        {
          duration: 4.921,
          start: 1859.279,
          text: "framework now Accenture and GitHub are",
        },
        {
          duration: 4.12,
          start: 1862.559,
          text: "helping clients move Beyond",
        },
        {
          duration: 4.8,
          start: 1864.2,
          text: "experimentation to make AI assisted",
        },
        {
          duration: 6.321,
          start: 1866.679,
          text: "technology delivery pervasive we're",
        },
        {
          duration: 7.519,
          start: 1869.0,
          text: "doing this by one co-developing specific",
        },
        {
          duration: 6.36,
          start: 1873.0,
          text: "Solutions using co-pilot two integrating",
        },
        {
          duration: 5.76,
          start: 1876.519,
          text: "co-pilot into accenture's own automation",
        },
        {
          duration: 6.039,
          start: 1879.36,
          text: "platforms and three by expanding",
        },
        {
          duration: 5.201,
          start: 1882.279,
          text: "co-pilot to 50,000 Accenture developers",
        },
        {
          duration: 5.541,
          start: 1885.399,
          text: "Accenture is proud to be at the",
        },
        {
          duration: 6.529,
          start: 1887.48,
          text: "Forefront of Aid driven Innovation with",
        },
        {
          duration: 3.069,
          start: 1890.94,
          text: "[Music]",
        },
        {
          duration: 5.841,
          start: 1897.639,
          text: "GitHub pretty incredible right 50,000",
        },
        {
          duration: 5.041,
          start: 1901.279,
          text: "developers at centa will fly at the",
        },
        {
          duration: 5.76,
          start: 1903.48,
          text: "speed of their own minds with",
        },
        {
          duration: 5.64,
          start: 1906.32,
          text: "co-pilot the original co-pilot was just",
        },
        {
          duration: 5.84,
          start: 1909.24,
          text: "code completions running inference on",
        },
        {
          duration: 5.439,
          start: 1911.96,
          text: "every keystroke with co-pilot ched being",
        },
        {
          duration: 4.599,
          start: 1915.08,
          text: "generally available in December in",
        },
        {
          duration: 6.041,
          start: 1917.399,
          text: "visual studio and visual studio code and",
        },
        {
          duration: 6.441,
          start: 1919.679,
          text: "coming with gp4 inline chat SL commands",
        },
        {
          duration: 5.92,
          start: 1923.44,
          text: "and Powerful smart actions Copa has",
        },
        {
          duration: 6.039,
          start: 1926.12,
          text: "expanded from code suggestions to a true",
        },
        {
          duration: 6.319,
          start: 1929.36,
          text: "pair programmer powered by AI one that",
        },
        {
          duration: 6.681,
          start: 1932.159,
          text: "answers questions explains code finds",
        },
        {
          duration: 4.48,
          start: 1935.679,
          text: "bugs and write tests and it's also",
        },
        {
          duration: 3.199,
          start: 1938.84,
          text: "coming to your mobile devices it's",
        },
        {
          duration: 5.081,
          start: 1940.159,
          text: "coming to the comment line it's coming",
        },
        {
          duration: 5.6,
          start: 1942.039,
          text: "to jetbrains idees and I'm happy to",
        },
        {
          duration: 5.36,
          start: 1945.24,
          text: "announce that all of this every feature",
        },
        {
          duration: 5.28,
          start: 1947.639,
          text: "I just said is included in your co-pilot",
        },
        {
          duration: 4.88,
          start: 1950.6,
          text: "subscription and it's the exact same",
        },
        {
          duration: 2.561,
          start: 1952.919,
          text: "price as",
        },
        {
          duration: 5.48,
          start: 1958.679,
          text: "before $19 per user per month per",
        },
        {
          duration: 4.481,
          start: 1961.639,
          text: "organiz for organizations $10 for",
        },
        {
          duration: 4.081,
          start: 1964.159,
          text: "individuals and of course it's still",
        },
        {
          duration: 4.399,
          start: 1966.12,
          text: "free for teachers students and",
        },
        {
          duration: 5.12,
          start: 1968.24,
          text: "maintainers of popular open source",
        },
        {
          duration: 5.0,
          start: 1970.519,
          text: "projects but on top of all of this we've",
        },
        {
          duration: 4.36,
          start: 1973.36,
          text: "consistently heard from many of our",
        },
        {
          duration: 4.801,
          start: 1975.519,
          text: "Enterprise customers that they would",
        },
        {
          duration: 5.839,
          start: 1977.72,
          text: "love to have the internal knowledge of",
        },
        {
          duration: 4.959,
          start: 1980.32,
          text: "their organization and co-pilot today",
        },
        {
          duration: 3.561,
          start: 1983.559,
          text: "we're bringing this customization",
        },
        {
          duration: 5.28,
          start: 1985.279,
          text: "together with every single co-pilot",
        },
        {
          duration: 6.559,
          start: 1987.12,
          text: "feature into a new product that we call",
        },
        {
          duration: 3.12,
          start: 1990.559,
          text: "get up co-pilot",
        },
        {
          duration: 4.0,
          start: 1996.679,
          text: "Enterprise from co-pilot in your pool",
        },
        {
          duration: 4.079,
          start: 1998.96,
          text: "requests to co-pilot in your",
        },
        {
          duration: 5.921,
          start: 2000.679,
          text: "documentation copilot chat integrated",
        },
        {
          duration: 7.081,
          start: 2003.039,
          text: "ind.com all customized to all of you and",
        },
        {
          duration: 6.079,
          start: 2006.6,
          text: "your organization in one single offering",
        },
        {
          duration: 4.559,
          start: 2010.12,
          text: "this personalized co-pilot available at",
        },
        {
          duration: 4.561,
          start: 2012.679,
          text: "every stage of the software development",
        },
        {
          duration: 5.201,
          start: 2014.679,
          text: "life cycle by placing the collective",
        },
        {
          duration: 4.96,
          start: 2017.24,
          text: "knowledge of your organization's Cates",
        },
        {
          duration: 6.039,
          start: 2019.88,
          text: "at your developers fingertips they will",
        },
        {
          duration: 6.719,
          start: 2022.2,
          text: "not only write code 55% faster they will",
        },
        {
          duration: 5.081,
          start: 2025.919,
          text: "keep the flow State and serve from idea",
        },
        {
          duration: 5.161,
          start: 2028.919,
          text: "to code to deployment by maintaining",
        },
        {
          duration: 6.279,
          start: 2031.0,
          text: "security compliance and quality and they",
        },
        {
          duration: 5.319,
          start: 2034.08,
          text: "will be happy doing it and I'm thrilled",
        },
        {
          duration: 7.12,
          start: 2037.279,
          text: "to share that we will start the preview",
        },
        {
          duration: 5.0,
          start: 2039.399,
          text: "of copil Enterprise today and it will",
        },
        {
          duration: 6.999,
          start: 2044.88,
          text: "be and it will be generally available in",
        },
        {
          duration: 3.839,
          start: 2048.04,
          text: "February 2024 for",
        },
        {
          duration: 5.679,
          start: 2052.0,
          text: "$39 copile Enterprise will give rise to",
        },
        {
          duration: 5.08,
          start: 2054.96,
          text: "a new wave of digital transformation as",
        },
        {
          duration: 5.44,
          start: 2057.679,
          text: "we know it and create a competitive",
        },
        {
          duration: 6.44,
          start: 2060.04,
          text: "Advantage for every organization in our",
        },
        {
          duration: 5.841,
          start: 2063.119,
          text: "world that is dependent on software but",
        },
        {
          duration: 4.919,
          start: 2066.48,
          text: "don't just take it for me today we have",
        },
        {
          duration: 5.159,
          start: 2068.96,
          text: "got a special guest who knows quite a",
        },
        {
          duration: 5.52,
          start: 2071.399,
          text: "lot about digitally transforming an",
        },
        {
          duration: 4.72,
          start: 2074.119,
          text: "organization please join me in welcoming",
        },
        {
          duration: 5.901,
          start: 2076.919,
          text: "for the very first time ever at giup",
        },
        {
          duration: 9.721,
          start: 2078.839,
          text: "Universe the CEO of Microsoft SAA",
        },
        {
          duration: 8.099,
          start: 2082.82,
          text: "[Applause]",
        },
        {
          duration: 5.599,
          start: 2088.56,
          text: "nadela great to see you",
        },
        {
          duration: 4.641,
          start: 2090.919,
          text: "s thank you so much SAA I introduced you",
        },
        {
          duration: 3.2,
          start: 2094.159,
          text: "as the CEO of Microsoft but you're",
        },
        {
          duration: 4.36,
          start: 2095.56,
          text: "really the biggest Super Fan of get",
        },
        {
          duration: 4.041,
          start: 2097.359,
          text: "co-pilot no I am I mean in fact I was",
        },
        {
          duration: 3.28,
          start: 2099.92,
          text: "just you know listening to all the",
        },
        {
          duration: 4.84,
          start: 2101.4,
          text: "announcements and reading up about it",
        },
        {
          duration: 5.28,
          start: 2103.2,
          text: "and I must say in the last what a year",
        },
        {
          duration: 5.32,
          start: 2106.24,
          text: "year and a half maybe since I've been",
        },
        {
          duration: 6.44,
          start: 2108.48,
          text: "using get up co-pilot my weekends have",
        },
        {
          duration: 5.76,
          start: 2111.56,
          text: "changed you know I I can code again I",
        },
        {
          duration: 5.04,
          start: 2114.92,
          text: "mean the joy of coding is back I'd say",
        },
        {
          duration: 4.88,
          start: 2117.32,
          text: "code spaces co-pilot and now I'm really",
        },
        {
          duration: 4.6,
          start: 2119.96,
          text: "looking forward to co-pilot on GI up.com",
        },
        {
          duration: 4.84,
          start: 2122.2,
          text: "because man it'll be so fun to just go",
        },
        {
          duration: 5.12,
          start: 2124.56,
          text: "to repo after repo and keep reading",
        },
        {
          duration: 6.16,
          start: 2127.04,
          text: "explain this explain this explain this",
        },
        {
          duration: 6.2,
          start: 2129.68,
          text: "I'll remember to say please",
        },
        {
          duration: 4.76,
          start: 2133.2,
          text: "yeah and it's it's been 5 years you know",
        },
        {
          duration: 4.4,
          start: 2135.88,
          text: "then since Microsoft acquired GitHub and",
        },
        {
          duration: 4.6,
          start: 2137.96,
          text: "our industry has changed so much since",
        },
        {
          duration: 4.04,
          start: 2140.28,
          text: "then how do you how has our work",
        },
        {
          duration: 4.44,
          start: 2142.56,
          text: "together you know led us to this moment",
        },
        {
          duration: 6.56,
          start: 2144.32,
          text: "with K yeah it's it's unbelievable it's",
        },
        {
          duration: 6.92,
          start: 2147.0,
          text: "five years uh since obviously uh we got",
        },
        {
          duration: 5.08,
          start: 2150.88,
          text: "to sort of Steward uh GitHub you know",
        },
        {
          duration: 3.919,
          start: 2153.92,
          text: "when I think about Microsoft Thomas to",
        },
        {
          duration: 4.0,
          start: 2155.96,
          text: "me I'm always grounding myself right we",
        },
        {
          duration: 4.041,
          start: 2157.839,
          text: "were a developer company first after all",
        },
        {
          duration: 4.56,
          start: 2159.96,
          text: "the company got started creating Dev",
        },
        {
          duration: 4.439,
          start: 2161.88,
          text: "tools I always remind myself of that and",
        },
        {
          duration: 4.44,
          start: 2164.52,
          text: "that's our core Heritage we're a",
        },
        {
          duration: 4.441,
          start: 2166.319,
          text: "platform company right so we build uh",
        },
        {
          duration: 4.359,
          start: 2168.96,
          text: "platforms so the developers can then",
        },
        {
          duration: 4.359,
          start: 2170.76,
          text: "build great IP on top of it and we are a",
        },
        {
          duration: 3.28,
          start: 2173.319,
          text: "partner company which is helped those",
        },
        {
          duration: 4.2,
          start: 2175.119,
          text: "developers be successful in the",
        },
        {
          duration: 4.76,
          start: 2176.599,
          text: "marketplace and that's at the core who",
        },
        {
          duration: 4.601,
          start: 2179.319,
          text: "we are and quite frankly GitHub has",
        },
        {
          duration: 5.041,
          start: 2181.359,
          text: "taken us to another level right our",
        },
        {
          duration: 4.64,
          start: 2183.92,
          text: "ability to one we did a lot of work",
        },
        {
          duration: 5.04,
          start: 2186.4,
          text: "before before we even decided to that we",
        },
        {
          duration: 4.799,
          start: 2188.56,
          text: "had the right to Steward GitHub we made",
        },
        {
          duration: 3.8,
          start: 2191.44,
          text: "sure that we were great members of the",
        },
        {
          duration: 3.441,
          start: 2193.359,
          text: "open source Community by really being",
        },
        {
          duration: 3.359,
          start: 2195.24,
          text: "part of the community contributing to",
        },
        {
          duration: 4.799,
          start: 2196.8,
          text: "the community and that's what led us to",
        },
        {
          duration: 5.48,
          start: 2198.599,
          text: "that so it's been a fantastic journey",
        },
        {
          duration: 5.041,
          start: 2201.599,
          text: "and here we are at this moment with",
        },
        {
          duration: 4.201,
          start: 2204.079,
          text: "co-pilot and Ai and ready for what is I",
        },
        {
          duration: 3.76,
          start: 2206.64,
          text: "think the next phase of our developer",
        },
        {
          duration: 3.559,
          start: 2208.28,
          text: "Journey yeah awesome and I you mentioned",
        },
        {
          duration: 3.48,
          start: 2210.4,
          text: "a lot of companies you meet with a lot",
        },
        {
          duration: 3.801,
          start: 2211.839,
          text: "of developers around the world you get",
        },
        {
          duration: 4.12,
          start: 2213.88,
          text: "to meet with a lot of CEOs that hire",
        },
        {
          duration: 4.0,
          start: 2215.64,
          text: "developers to drive their transformation",
        },
        {
          duration: 3.4,
          start: 2218.0,
          text: "what do we hear from them and how can",
        },
        {
          duration: 3.959,
          start: 2219.64,
          text: "co-pilot help them yeah it's it's",
        },
        {
          duration: 4.8,
          start: 2221.4,
          text: "fantastic I mean even just listening to",
        },
        {
          duration: 4.201,
          start: 2223.599,
          text: "the video you just played um and talked",
        },
        {
          duration: 3.24,
          start: 2226.2,
          text: "about I mean think about this this is an",
        },
        {
          duration: 3.72,
          start: 2227.8,
          text: "you know an at scale organization like",
        },
        {
          duration: 4.56,
          start: 2229.44,
          text: "Accenture making the decision to go",
        },
        {
          duration: 5.52,
          start: 2231.52,
          text: "deploy uh something like get up co-pilot",
        },
        {
          duration: 4.92,
          start: 2234.0,
          text: "uh Enterprise wide uh that's a big thing",
        },
        {
          duration: 4.88,
          start: 2237.04,
          text: "usually if you sort of look at the dev",
        },
        {
          duration: 5.12,
          start: 2238.92,
          text: "tools business and Dev stool diffusion",
        },
        {
          duration: 3.88,
          start: 2241.92,
          text: "it takes decades before those",
        },
        {
          duration: 3.68,
          start: 2244.04,
          text: "enterprise-wide things happen and this",
        },
        {
          duration: 4.6,
          start: 2245.8,
          text: "is just happening you know in you know",
        },
        {
          duration: 5.32,
          start: 2247.72,
          text: "in less than a year perhaps couple of",
        },
        {
          duration: 5.4,
          start: 2250.4,
          text: "things one at the end of the day to me I",
        },
        {
          duration: 5.44,
          start: 2253.04,
          text: "think all of us uh we want to make sure",
        },
        {
          duration: 5.039,
          start: 2255.8,
          text: "that the people we work with have the",
        },
        {
          duration: 4.76,
          start: 2258.48,
          text: "best tools to so that they feel",
        },
        {
          duration: 5.321,
          start: 2260.839,
          text: "empowered they feel that they can stay",
        },
        {
          duration: 5.0,
          start: 2263.24,
          text: "in flow they can do their very best work",
        },
        {
          duration: 3.6,
          start: 2266.16,
          text: "and then of course the organization",
        },
        {
          duration: 3.56,
          start: 2268.24,
          text: "benefits from that in terms of",
        },
        {
          duration: 4.4,
          start: 2269.76,
          text: "productivity gains so the unquestionable",
        },
        {
          duration: 4.039,
          start: 2271.8,
          text: "stuff uh is some of the productivity",
        },
        {
          duration: 4.24,
          start: 2274.16,
          text: "stats and the productivity stats by the",
        },
        {
          duration: 5.0,
          start: 2275.839,
          text: "way is not just stats it's about",
        },
        {
          duration: 4.919,
          start: 2278.4,
          text: "ultimately removing some of the drudgery",
        },
        {
          duration: 4.961,
          start: 2280.839,
          text: "bringing the joy back helping you stay",
        },
        {
          duration: 4.081,
          start: 2283.319,
          text: "in flow who doesn't appreciate that",
        },
        {
          duration: 3.559,
          start: 2285.8,
          text: "right every developer appreciates that",
        },
        {
          duration: 5.0,
          start: 2287.4,
          text: "and every de Dev manager appreciates",
        },
        {
          duration: 4.681,
          start: 2289.359,
          text: "that and so to me uh that's what we hear",
        },
        {
          duration: 4.52,
          start: 2292.4,
          text: "uh and really the other thing that I",
        },
        {
          duration: 4.76,
          start: 2294.04,
          text: "would say is I've always felt like when",
        },
        {
          duration: 4.56,
          start: 2296.92,
          text: "you introduce GitHub into an",
        },
        {
          duration: 4.319,
          start: 2298.8,
          text: "organization workflow changes right we'",
        },
        {
          duration: 4.119,
          start: 2301.48,
          text: "always said like when the",
        },
        {
          duration: 4.72,
          start: 2303.119,
          text: "salesperson is you know doing a pull",
        },
        {
          duration: 5.48,
          start: 2305.599,
          text: "request it's it's a different or it's",
        },
        {
          duration: 6.24,
          start: 2307.839,
          text: "moving at the speed of code so now think",
        },
        {
          duration: 5.121,
          start: 2311.079,
          text: "about it right with co-pilot and that",
        },
        {
          duration: 4.361,
          start: 2314.079,
          text: "speed of code fundamentally changing",
        },
        {
          duration: 3.8,
          start: 2316.2,
          text: "what it means to what is a digital",
        },
        {
          duration: 3.04,
          start: 2318.44,
          text: "economy right there's if you're in the",
        },
        {
          duration: 3.56,
          start: 2320.0,
          text: "Auto industry you're in the financial",
        },
        {
          duration: 4.839,
          start: 2321.48,
          text: "industry you're in the farma industry",
        },
        {
          duration: 5.12,
          start: 2323.56,
          text: "every pretty much everybody is a digital",
        },
        {
          duration: 5.841,
          start: 2326.319,
          text: "company and a software company and so I",
        },
        {
          duration: 5.96,
          start: 2328.68,
          text: "I'm very excited culturally how do the",
        },
        {
          duration: 5.679,
          start: 2332.16,
          text: "organizations change how does work and",
        },
        {
          duration: 4.719,
          start: 2334.64,
          text: "workflow change uh across all functions",
        },
        {
          duration: 3.841,
          start: 2337.839,
          text: "it's just not the professional software",
        },
        {
          duration: 4.521,
          start: 2339.359,
          text: "developer but everyone around them is",
        },
        {
          duration: 4.12,
          start: 2341.68,
          text: "collaborating and really making it a",
        },
        {
          duration: 3.88,
          start: 2343.88,
          text: "much more realtime digital organization",
        },
        {
          duration: 3.36,
          start: 2345.8,
          text: "so that's the most exciting thing that I",
        },
        {
          duration: 3.359,
          start: 2347.76,
          text: "think everyone in this room gets to",
        },
        {
          duration: 3.959,
          start: 2349.16,
          text: "participate in which is change their",
        },
        {
          duration: 3.881,
          start: 2351.119,
          text: "organization help their organization",
        },
        {
          duration: 3.96,
          start: 2353.119,
          text: "achieve next level of transformation and",
        },
        {
          duration: 4.359,
          start: 2355.0,
          text: "productivity yeah incredibly exciting",
        },
        {
          duration: 4.361,
          start: 2357.079,
          text: "and I I saw you I think it was a post on",
        },
        {
          duration: 4.521,
          start: 2359.359,
          text: "social media saying that natural",
        },
        {
          duration: 4.24,
          start: 2361.44,
          text: "language is becoming the new Universal",
        },
        {
          duration: 3.88,
          start: 2363.88,
          text: "programming language how do you think",
        },
        {
          duration: 4.24,
          start: 2365.68,
          text: "natural language will democratize access",
        },
        {
          duration: 4.28,
          start: 2367.76,
          text: "to software development yeah I mean look",
        },
        {
          duration: 5.8,
          start: 2369.92,
          text: "I think you know you look at all the",
        },
        {
          duration: 6.0,
          start: 2372.04,
          text: "demos um this morning and you feel like",
        },
        {
          duration: 6.0,
          start: 2375.72,
          text: "wow I can do",
        },
        {
          duration: 5.84,
          start: 2378.04,
          text: "that I mean all I need is co-pilot chat",
        },
        {
          duration: 4.56,
          start: 2381.72,
          text: "and here it is I just sort of click",
        },
        {
          duration: 5.68,
          start: 2383.88,
          text: "click click and I'm real tab tab tab and",
        },
        {
          duration: 6.319,
          start: 2386.28,
          text: "I'm done I mean this is like uh it is in",
        },
        {
          duration: 5.0,
          start: 2389.56,
          text: "some sense the most empowering thing is",
        },
        {
          duration: 3.841,
          start: 2392.599,
          text: "to be able to give right I mean we have",
        },
        {
          duration: 3.84,
          start: 2394.56,
          text: "what 100 plus million people already",
        },
        {
          duration: 4.2,
          start: 2396.44,
          text: "don't get up but my dream is like how do",
        },
        {
          duration: 4.08,
          start: 2398.4,
          text: "we Empower a billion people and then the",
        },
        {
          duration: 3.8,
          start: 2400.64,
          text: "other billions around these billion",
        },
        {
          duration: 3.44,
          start: 2402.48,
          text: "people who are all collaborating with",
        },
        {
          duration: 3.919,
          start: 2404.44,
          text: "the power of natural language because if",
        },
        {
          duration: 4.56,
          start: 2405.92,
          text: "I look at the Arc of computing our",
        },
        {
          duration: 5.041,
          start: 2408.359,
          text: "history of the last 70 years has been",
        },
        {
          duration: 5.639,
          start: 2410.48,
          text: "can humans in computers interact in the",
        },
        {
          duration: 4.64,
          start: 2413.4,
          text: "most natural way what's more powerful uh",
        },
        {
          duration: 4.121,
          start: 2416.119,
          text: "than natural language uh which by the",
        },
        {
          duration: 4.559,
          start: 2418.04,
          text: "way starts with language goes multimodal",
        },
        {
          duration: 3.92,
          start: 2420.24,
          text: "and so there's a lot uh to be said about",
        },
        {
          duration: 3.281,
          start: 2422.599,
          text: "sort of that thing that you just",
        },
        {
          duration: 5.08,
          start: 2424.16,
          text: "mentioned which is natural language as",
        },
        {
          duration: 5.28,
          start: 2425.88,
          text: "the program language um to me also the",
        },
        {
          duration: 3.52,
          start: 2429.24,
          text: "other comment that one of the people in",
        },
        {
          duration: 3.56,
          start: 2431.16,
          text: "the morning sort of said which is I",
        },
        {
          duration: 4.88,
          start: 2432.76,
          text: "thought struck the court with me which",
        },
        {
          duration: 5.599,
          start: 2434.72,
          text: "is to say wow co-pilot is the new IDE I",
        },
        {
          duration: 4.52,
          start: 2437.64,
          text: "mean think about the approachability",
        },
        {
          duration: 5.28,
          start: 2440.319,
          text: "right you know you you have a middle",
        },
        {
          duration: 4.32,
          start: 2442.16,
          text: "school girl first learning coding just",
        },
        {
          duration: 3.201,
          start: 2445.599,
          text: "the",
        },
        {
          duration: 4.72,
          start: 2446.48,
          text: "approachability uh to be able to say wow",
        },
        {
          duration: 4.319,
          start: 2448.8,
          text: "you can express some complex thought and",
        },
        {
          duration: 5.36,
          start: 2451.2,
          text: "start seeing code and you're going to",
        },
        {
          duration: 4.841,
          start: 2453.119,
          text: "get into coding that is gamechanging to",
        },
        {
          duration: 4.24,
          start: 2456.56,
          text: "me right because natural language is",
        },
        {
          duration: 4.92,
          start: 2457.96,
          text: "about accessibility it's about making",
        },
        {
          duration: 3.92,
          start: 2460.8,
          text: "the barrier to entry lower and it's",
        },
        {
          duration: 4.959,
          start: 2462.88,
          text: "going to be stunning to me the other",
        },
        {
          duration: 4.879,
          start: 2464.72,
          text: "thing that i' would also say um is what",
        },
        {
          duration: 3.721,
          start: 2467.839,
          text: "you're doing like some of the stuff that",
        },
        {
          duration: 4.72,
          start: 2469.599,
          text: "you're going to show and demonstrate",
        },
        {
          duration: 4.039,
          start: 2471.56,
          text: "around how about applying it at the repo",
        },
        {
          duration: 4.361,
          start: 2474.319,
          text: "scale right I think you call it",
        },
        {
          duration: 4.441,
          start: 2475.599,
          text: "workspace I think uh I am so excited",
        },
        {
          duration: 4.439,
          start: 2478.68,
          text: "about it right which is hey it's not",
        },
        {
          duration: 7.24,
          start: 2480.04,
          text: "just about like I go from an issue to",
        },
        {
          duration: 7.681,
          start: 2483.119,
          text: "code to task to deploy if we can really",
        },
        {
          duration: 6.16,
          start: 2487.28,
          text: "make that entire flow really magical",
        },
        {
          duration: 5.92,
          start: 2490.8,
          text: "with natural language and the product",
        },
        {
          duration: 6.0,
          start: 2493.44,
          text: "managers the marketing folks sales folks",
        },
        {
          duration: 5.119,
          start: 2496.72,
          text: "and developers are all communicating in",
        },
        {
          duration: 4.72,
          start: 2499.44,
          text: "this multi-agent framework that I think",
        },
        {
          duration: 4.0,
          start: 2501.839,
          text: "is going to be really Next Level maybe",
        },
        {
          duration: 4.199,
          start: 2504.16,
          text: "next year when we are back here we can",
        },
        {
          duration: 4.0,
          start: 2505.839,
          text: "start talking about some of that stuff",
        },
        {
          duration: 5.881,
          start: 2508.359,
          text: "incredible thank you so much for joining",
        },
        {
          duration: 4.401,
          start: 2509.839,
          text: "us than thank you so much thank you so",
        },
        {
          duration: 3.0,
          start: 2515.24,
          text: "much",
        },
        {
          duration: 4.6,
          start: 2520.88,
          text: "wow what incredible insights and what an",
        },
        {
          duration: 5.119,
          start: 2522.72,
          text: "incredible keynote it's been today we",
        },
        {
          duration: 4.32,
          start: 2525.48,
          text: "have shown you how developers can go",
        },
        {
          duration: 5.0,
          start: 2527.839,
          text: "above and beyond with the power of",
        },
        {
          duration: 5.519,
          start: 2529.8,
          text: "natural language and co-pilot and we",
        },
        {
          duration: 5.881,
          start: 2532.839,
          text: "truly think this AI power developer",
        },
        {
          duration: 5.681,
          start: 2535.319,
          text: "platform will change the world thank you",
        },
        {
          duration: 4.839,
          start: 2538.72,
          text: "for being part of all of this and thank",
        },
        {
          duration: 5.24,
          start: 2541.0,
          text: "you to everybody at GitHub that worked",
        },
        {
          duration: 5.161,
          start: 2543.559,
          text: "so hard in the last few weeks to get us",
        },
        {
          duration: 7.0,
          start: 2546.24,
          text: "to this moment and please give it up for",
        },
        {
          duration: 4.52,
          start: 2548.72,
          text: "our presenters Allison kadesha and",
        },
        {
          duration: 4.721,
          start: 2554.319,
          text: "Colin",
        },
        {
          duration: 4.681,
          start: 2556.839,
          text: "but wait wait wait don't don't switch",
        },
        {
          duration: 5.2,
          start: 2559.04,
          text: "off if you're online I I think I forgot",
        },
        {
          duration: 4.76,
          start: 2561.52,
          text: "something and if if you know me you know",
        },
        {
          duration: 5.119,
          start: 2564.24,
          text: "that even in my teenage days you know",
        },
        {
          duration: 6.76,
          start: 2566.28,
          text: "coding back in the 1990s I've always",
        },
        {
          duration: 6.361,
          start: 2569.359,
          text: "admired Steve Jobs and 13 years ago on",
        },
        {
          duration: 5.6,
          start: 2573.04,
          text: "the stage here in yba buana Steve",
        },
        {
          duration: 8.119,
          start: 2575.72,
          text: "launched the iPad and so I'm so excited",
        },
        {
          duration: 5.199,
          start: 2578.64,
          text: "to say this there is one more",
        },
        {
          duration: 5.041,
          start: 2585.359,
          text: "thing Steve talked a lot about the",
        },
        {
          duration: 5.279,
          start: 2588.04,
          text: "concept of machines accelerating human",
        },
        {
          duration: 5.48,
          start: 2590.4,
          text: "progress he described the home computer",
        },
        {
          duration: 4.841,
          start: 2593.319,
          text: "as the bicycle of the Mind a new",
        },
        {
          duration: 4.6,
          start: 2595.88,
          text: "partnership between human and machine",
        },
        {
          duration: 5.56,
          start: 2598.16,
          text: "that could take us far beyond our own",
        },
        {
          duration: 5.2,
          start: 2600.48,
          text: "inherit abilities and today I can't help",
        },
        {
          duration: 5.08,
          start: 2603.72,
          text: "but think that we have arrived at the",
        },
        {
          duration: 5.48,
          start: 2605.68,
          text: "next face of this partnership software",
        },
        {
          duration: 4.4,
          start: 2608.8,
          text: "developers Embrace of get up co-pilot",
        },
        {
          duration: 4.52,
          start: 2611.16,
          text: "has shown the world how humans can",
        },
        {
          duration: 5.84,
          start: 2613.2,
          text: "symbiotically partner with intelligent",
        },
        {
          duration: 6.48,
          start: 2615.68,
          text: "machines to make Big Ideas even easier",
        },
        {
          duration: 5.48,
          start: 2619.04,
          text: "to deliver today we are thrilled to",
        },
        {
          duration: 4.72,
          start: 2622.16,
          text: "announce an early glimpse of a",
        },
        {
          duration: 5.839,
          start: 2624.52,
          text: "revolutionary new future and we're",
        },
        {
          duration: 5.64,
          start: 2626.88,
          text: "calling it co-pilot",
        },
        {
          duration: 4.0,
          start: 2630.359,
          text: "workspace every day millions of",
        },
        {
          duration: 5.039,
          start: 2632.52,
          text: "developers start from a very familiar",
        },
        {
          duration: 4.921,
          start: 2634.359,
          text: "Place GitHub issues so we created an AI",
        },
        {
          duration: 3.481,
          start: 2637.559,
          text: "native workflow that dramatically",
        },
        {
          duration: 4.279,
          start: 2639.28,
          text: "simplifies the way you use natural",
        },
        {
          duration: 5.4,
          start: 2641.04,
          text: "language to turn these great ideas into",
        },
        {
          duration: 5.841,
          start: 2643.559,
          text: "code we call it the co-pilot",
        },
        {
          duration: 4.76,
          start: 2646.44,
          text: "workspace starting with any GitHub issue",
        },
        {
          duration: 4.28,
          start: 2649.4,
          text: "co-pilot workspace automatically",
        },
        {
          duration: 4.08,
          start: 2651.2,
          text: "proposes a solution based on its deep",
        },
        {
          duration: 5.159,
          start: 2653.68,
          text: "understanding of the code base issue",
        },
        {
          duration: 5.68,
          start: 2655.28,
          text: "replies link tasks everything co-pilot",
        },
        {
          duration: 4.201,
          start: 2658.839,
          text: "workspace then builds a step-by-step",
        },
        {
          duration: 4.68,
          start: 2660.96,
          text: "plan to implement the changes so that",
        },
        {
          duration: 4.68,
          start: 2663.04,
          text: "you know exactly what needs to be done",
        },
        {
          duration: 3.959,
          start: 2665.64,
          text: "and if isn't quite right the spec and",
        },
        {
          duration: 4.32,
          start: 2667.72,
          text: "plan are fully editable so you can",
        },
        {
          duration: 4.401,
          start: 2669.599,
          text: "easily steer co-pilot in the right",
        },
        {
          duration: 4.279,
          start: 2672.04,
          text: "direction once you're happy with the",
        },
        {
          duration: 3.92,
          start: 2674.0,
          text: "plan simply click Implement and let",
        },
        {
          duration: 4.321,
          start: 2676.319,
          text: "co-pilot chase down the necessary",
        },
        {
          duration: 4.6,
          start: 2677.92,
          text: "changes across your entire repository",
        },
        {
          duration: 3.76,
          start: 2680.64,
          text: "and Beyond simply synthesizing code",
        },
        {
          duration: 5.28,
          start: 2682.52,
          text: "co-pilot workspace builds and tests the",
        },
        {
          duration: 3.4,
          start: 2684.4,
          text: "changes and validates that they're",
        },
        {
          duration: 4.76,
          start: 2690.359,
          text: "successful it will even run your code so",
        },
        {
          duration: 3.88,
          start: 2692.88,
          text: "you can verify the fix visually this",
        },
        {
          duration: 3.081,
          start: 2695.119,
          text: "looks great",
        },
        {
          duration: 3.4,
          start: 2696.76,
          text: "since a workspace is designed for",
        },
        {
          duration: 3.76,
          start: 2698.2,
          text: "collaboration you can edit any of the",
        },
        {
          duration: 3.159,
          start: 2700.16,
          text: "suggested changes and if you",
        },
        {
          duration: 3.879,
          start: 2701.96,
          text: "accidentally introduce an error along",
        },
        {
          duration: 5.24,
          start: 2703.319,
          text: "the way co-pilot will automatically",
        },
        {
          duration: 4.361,
          start: 2705.839,
          text: "catch it repair it and rerun the code",
        },
        {
          duration: 3.361,
          start: 2708.559,
          text: "once the issue is fixed it's easy to",
        },
        {
          duration: 3.96,
          start: 2710.2,
          text: "create a pull request with a generated",
        },
        {
          duration: 5.399,
          start: 2711.92,
          text: "summary of your work this lets your team",
        },
        {
          duration: 5.04,
          start: 2714.16,
          text: "review merge and deploy faster than ever",
        },
        {
          duration: 4.361,
          start: 2717.319,
          text: "we're building co-pilot workspace so you",
        },
        {
          duration: 5.6,
          start: 2719.2,
          text: "can turn your creativity into reality",
        },
        {
          duration: 3.12,
          start: 2721.68,
          text: "every single",
        },
        {
          duration: 3.0,
          start: 2724.88,
          text: "day",
        },
        {
          duration: 4.52,
          start: 2733.0,
          text: "co-pirate workpace is just one of the",
        },
        {
          duration: 5.159,
          start: 2735.16,
          text: "Horizon Visions our team at get up next",
        },
        {
          duration: 5.96,
          start: 2737.52,
          text: "is developing when workspace is released",
        },
        {
          duration: 5.441,
          start: 2740.319,
          text: "in 2024 we will be consequential leap",
        },
        {
          duration: 5.4,
          start: 2743.48,
          text: "closer to an age where developers can",
        },
        {
          duration: 6.079,
          start: 2745.76,
          text: "use AI as a second brain to stream",
        },
        {
          duration: 5.56,
          start: 2748.88,
          text: "creativity into creation and minutes all",
        },
        {
          duration: 5.121,
          start: 2751.839,
          text: "with natural language and I think it's",
        },
        {
          duration: 4.879,
          start: 2754.44,
          text: "just the beginning this intersection of",
        },
        {
          duration: 4.119,
          start: 2756.96,
          text: "human artificial intelligence will",
        },
        {
          duration: 5.0,
          start: 2759.319,
          text: "continue to define the future",
        },
        {
          duration: 5.641,
          start: 2761.079,
          text: "generations of GitHub the AI power",
        },
        {
          duration: 5.431,
          start: 2764.319,
          text: "developer platform thank you so much for",
        },
        {
          duration: 5.12,
          start: 2766.72,
          text: "joining us today and have a great getup",
        },
        {
          duration: 13.159,
          start: 2769.75,
          text: "[Applause]",
        },
        {
          duration: 11.069,
          start: 2771.84,
          text: "[Music]",
        },
        {
          duration: 3.0,
          start: 2783.48,
          text: "universe",
        },
      ],
      videoId: "NrQkdDVupQE",
    },
    {
      channelId: "UCoIXnB865l9Ex9zs4OIXTdQ",
      channelTitle: "Spawn Wave",
      description:
        "Tonight The Game Awards are scheduled to air with some big time game reveals already being teased. In a new report the relationship between Sony and Bungie appears to be strained with the potential for Sony to completely take over looking more and more likely.\n\nCheck out the Spawncast Network: http://spawncastnetwork.com\n\nTwitter: @SpawnWaveMedia\n\nThreads: https://www.threads.net/@spawnwaveyt\n\nSpawncast Jerseys: https://bit.ly/3sZKrgj \n\nSpawncast Spotify:  https://open.spotify.com/show/41qKKRu9Denw5Ag14vGxfG \n\nNews Wave edited by: @KimerexProjekt\n\nSecond Channel: https://www.youtube.com/channel/UCDTV8DckMvn7mlgtdxTyR-g\n\nSpawn Wave Merch: https://teespring.com/stores/spawnwavemediashop \n\nFollow Us On Twitch: https://www.twitch.tv/spawnwavemedia\n\nListen To Our Weekly Podcast: https://soundcloud.com/spawn-wave\n\nLike Comment and Subscribe!\n\nThanks for watching!\n\n==============================================\n\nSources:\n\nhttps://www.metacritic.com/game/avatar-frontiers-of-pandora/\nhttps://twitter.com/NintendoAmerica/status/1732567373536690275\nhttps://twitter.com/Pyoro_X/status/1732354949701407126\nhttps://twitter.com/shinobi602/status/1732446451404275984\nhttps://twitter.com/geoffkeighley/status/1732540442959622601\nhttps://twitter.com/billbil_kun/status/1732401470526337444?s=20\nhttps://www.resetera.com/threads/xbox-game-studios-bethesda-abk-otxxvii-acquisition-blizzard.774656/page-400#post-115898472\nhttps://twitter.com/DeadbyDaylight/status/1732460041758822411\nhttps://twitter.com/thegameawards/status/1732474992825081919 \n\n=============================================\n\n00:00 - Start\n\n00:55 - Avatar Reviews Are In\n\n2:15 - Sora Amiibo Dated\n\n3:04 - Another Code Recollection Demo Incoming\n\n4:04 - Game Awards Hype\n\n9:22 - New Bungie Details\n\n14:30 - GTA VI Backlash Begins\n\n17:24 - Poll\n\n18:21 - Comment Of The Day\n\n#Sony #Nintendo #Xbox",
      itemCount: 3,
      playlistDescription: "",
      playlistId: "PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp",
      playlistOwnerChannelId: "UCj_s79IpT7usLrW8JQSgVFA",
      playlistOwnerChannelTitle: "Daniel Segarra",
      playlistThumbnailUrl:
        "https://i.ytimg.com/vi/-jRkI1nOwbc/maxresdefault.jpg",
      playlistTitle: "SummarizeTHIS",
      publishedAt: "2023-12-05T21:16:08Z",
      thumbnailUrl: "https://i.ytimg.com/vi/e5sl2k2XJN4/maxresdefault.jpg",
      title:
        "Major Gaming Reveals Teased For The Game Awards & The Sony + Bungie Situation Gets Weird | News Wave",
      transcript_text_only:
        "what's up guys welcome back to news wve so there's a ton of excitement going around right now as the game awards of course are later on tonight where we'll see which game takes home the Ultimate Prize as the game of the year as well as I'm sure a bunch of video game announcements in fact some have already sort of been revealed others rumored right now and we even have people thinking Nintendo could make a massive announcement there we'll go over all of that though here today also we are going to be talking about the relationship between Sony and Bungie and how it seems to have taken a hard left turn and in fact looks like the independence for Bungie could actually be in Jeopardy and well also be continue the coverage for Grand Theft Auto 6 as now it appears people who are we'll say a bit out of their element are attempting to get the game banned and uh it feels like we've been here before guys if you enjoy these videos make H that like button helps out a ton and if new here to the spawn wave Channel make sure you subscribe down below and we're going to start today with Avatar frontiers of Pandora of of course it is out now and we also have reviews we can take a look at here this over on Metacritic currently sitting at a 703 this is on 65 critic reviews it appears the PC version is the one that pretty much got majority reviewed on so I I think there's like three or four PS5 reviews and that's kind of it outside of the 65 PC reviews but we can see the a more positive review for example from Gamespot who says Pandora is often magnificent and I stopped repeatedly just to look around and take it in as opposed to TRG who gave it a a 40 and says I've never seen a game that looks as brilliant as this but the game's art direction is let down by Soo combat allo Ai and weapons that just aren't satisfying I did see this brought up a lot in the sense that the game looks really good especially on PC if you have a high-end video card and you can crank a lot of those settings up it is genuinely impressive to see but it still sounds like it's that Ubisoft tried and true open world formula so at least kind of know what you're get into there but I guess if you're a fan of just the the movies and the world that's already kind of been built out there that lore you'll probably get a kick out of this game and again it's available right now to pick up if you're interested also we did get the release date for that Sora amiibo which this was posted up by Nintendo of America over on Twitter saying the Smash Bros amiibo of Sora will be released on February 16th 2024 okay so about 3 months way or so and I I understand I'm not really into amiibos at all I I mentioned that I think when they we had the first wave of amiibos I picked up like villager and something else I was like that's kind of it but I understand for something like the Sora amiibo that is going to represent a character that many people in the smash Community never thought would actually happen but somehow we get Disney square and Nintendo to come together and get it done so sure I understand people might just want to pick it up for Yes the collector's sake but also just it's a SORA amibo so sure but you can look towards that coming out in February oh and it does look like we have a trailer and demo lined up here for another code recollection which we can see this was posted up over on Twitter from Pio says trailer and demo incoming now they are quote tweeting their remakes of a DS game and a Wii game prior to another code recollection getting announced you line that up sure I guess there is a demo coming for this game which it is coming out January 19th so we are getting kind of close about a month and a half away and Nate I mean PR did a great job here with the remakes and now we're looking towards a demo I I never really played these games when they released it at all I wasn't even really that aware of them so I am curious I guess to try the demo out I've seen some of the gameplay I don't know if it's necessarily a game that I would get that into but hey it's pretty cool that they are remaking them and putting it on uh the the switch much more accessible that way so a if you've at least been interested just keep an eye out for I guess the trailer and the demo maybe dropping together here soon and guys with some of the quick news out of the way let's get into the bigger stuff let's start right away with the game awards as that is coming up later on tonight and there's a lot of expectations that seem to have built almost overnight definitely over the last 24 hours or so it seems like the hype has really been building up and we're doing such a good job getting close to the the award show without expectations being Skyhigh for announcements considering people will go in with some of the craziest expectations we get a decent enough show with some pretty good announcements but that just does not reach the level of those expectations going in in fact now we are to a point where some are thinking that Nintendo is going to announce the switch to and I got to say it there's a lot of stuff working together that I feel like it's going to set some people up for some major major disappointment you can queue up that mvg Meme now but let's go over a few things that we can expect to be here as some were just outright announced ahead of time now Microsoft has said time and time again to watch the show in fact if you look on your Xbox series X now you'll probably see on your dashboard that they are telling you to watch the game awards and well we know Nate has already gone on records saying that Arcane appears to be set up to make an announcement and it appears now that the leading I guess game that's being speculated as being an anoun there would be dishonor 3 I think that would be a big announcement if they did show up there and say hey look you remember redfall we're going to go ahead and just put dishonor 3 in front of you now don't forget about redfall right that would be a really exciting thing to see now to go along with that it appears that Brothers A Tale of Two Sons is getting a remake and this is from uh bill bill over on Twitter now they are kind of lying this up with okay they've spotted it I guess in like the marketplace database or something there uh whether it's on Playstation of course they come up with a lot of the PlayStation plus stuff early uh but they're kind of lining this up with maybe a game awards announcement that does sort of feel like kind of on the level of one of those announcements they would just sort of make quickly as they're going through so yeah I could see that happening there is going to be a new Dead by daylight game shown off here this is from super massive so I guess think of until dawn it is going to be more of a horror single player Style game so that I think in that Universe would be really really cool to see what they can come up with metaphor with Atlas West will also be there I guess showcasing a new trailer features maybe uh release date that would be I think that'd be good and then we get into some heavy speculation as we might have a new Marvel game announced here and that's going to catch some people by surprise but okay this is sort of funny the the thing that people are uh hinting at now and it it's hard to say how how realistic this is a new Blade game uh we'll see about that one that is definitely kind of out there I think and if Microsoft was going to show up with something along with like Bethesda probably Dishonored three but you know what a new Blade game that actually be kind of interesting I would like to see that but now this is the part where things start to take a turn into like tinfoil hat territory and it really started with Nvidia as you could see this from the game awards saying tune in tomorrow to find out what's powering your gaming and it just kind of trails off there with Nvidia we can kind of see the the background there with the Nvidia logo and some were thinking wait hold on nvidia's powering the Nintendo switch now and we know they're going to be doing the next Nintendo system is it possible that Nintendo would show up here with the switch 2 well then over on Nintendo of America's YouTube account their profile image changed and it's just the blue circle with an N so yeah that did it that pretty much just erupted speculation all over the internet at that point right people are are thinking wait a minute this is this is it but we're definitely seeing a switch to here and oh this is this is the setup I'm telling you because I wouldn't be shocked if Nvidia shows up here maybe to talk about uh I'll say their Five series cards maybe like a a four Super Series card uh they could actually show up and talk about AI or something like there are a lot of other things Nvidia could do outside of just like Hey we're going to tell you about the next chip that's powering Nintendo's next Generation device and I feel like with YouTube that might just be a glitch I've seen it happened before where profile images were messed up and it removed them and then it put them back later on in fact by the time you're seeing this maybe that's fixed and this was just a whole like just nothing but if anything at least Nvidia will be there I guess with something to show off so a lot of uh a lot of speculation heading into the game awards right now and of course it's an exciting time but I'm sure we'll see some cool stuff and then there'll still just be a whole bunch of disappointment afterwards so uh should be a lot of fun next up let's talk about Sony and Bungie as we know Bungie has really been going through it recently with the they did about layoffs or so it seemed like morale was just not great based on some sources that were putting information out there and that everything kind of hinges on this final shape expansion that's Now set to release outside of the current fiscal year uh Midway through 2024 and based on a new report it kind of sounds like Bungie's entire Independence could be riding on the success of that final shape expansion and this was actually a report that was posted up this is over on IGN where they say bunge devs say atmosphere is soul crushing amid layoffs cuts and fear of total Sony takeover wow that's that's quite the picture they're painting there but we can go over some of the information that was released with this report and I will have it linked down below as there's still quite a bit to this they say one month after a major round of layoffs impacted roughly 100 bunge employees of 1,200 those those remaining at the destiny developer say the cuts as well as other cost cutting measures came alongside an apparent scrambled by Studio leadership to avoid a total Sony takeover so the way it was described is on their board at Bungie they have like half Sony Representatives half Bungie representatives and then you have the CEO at Bungie as kind of like that that tie breaker that that fifth if you will who who will be able to make that final call if it's split but they they say if Bungie falls short of certain Financial thresholds by too great an amount Sony is allowed to dissolve the existing board and take full control of the company so think about what's happened recently they missed their expectations for Revenue by 45% and what happens well not too long after that they lay off a 100 people and apparently they have been making a ton of cost cutting measures think of things like travel or different events you'll do with in your company to boost morale and camaraderie uh they're kind of cutting a lot of that stuff out completely and they say along with the recent layoffs this has resulted in a massive decay in morale within the company according to IGN sources one of whom told us that the mood within the studio has been Soul crushing over the last month here get this this is a quote from one of the workers there says folks still here are very much feeling US versus versus them between leadership and workers that trust has been eroded that does not sound like like something you want to hear out of a studio that you hope would be productive down the line like this this seems like there's a lot of strife within Bungie and kind of looking over their shoulder at Sony right now and to me the M of money that Sony spent on Bungie because I I do believe they overpaid for them was probably with the idea in mind of hey we're going to buy Bungie and they're very much turn key as in we we bring them in we don't have to do a lot really we we just need their expert expertise for our own live service lineup a slate that we have that we would like to be good right out of the gate they've gone through it with Destiny and of course their whole history with with Halo and working with Microsoft I'm sure they gained a lot of experience when it comes to gameplay there but really the monetization stuff they worked out as they went went through with B with uh with Destiny and Destiny 2 so they should be able to come in and make all this work for us turns out their management isn't great specifically when it comes to uh well as you can see costs versus revenue and expenses if you're missing your goals by 45% yeah something's wrong there at the top anyway it basically comes back to that final shape expansion and if it doesn't go over well then I do believe that's kind of it for Bungie's Independence Sony will come in take over completely and while there will still of course be Bungie employees and developers there working it'll be Sony then steering the ship which is odd once again because we know Bungie apparently was making decisions based on reports out of Bloomberg as to which live service would stay and which one would have to go back into the oven if you will or just outright cancelled and uh now Sony is coming in to maybe take over Bungie so very weird awkward situation here but that's business if you can't make it work when it comes to your balance sheet eventually the parent company in this case Sony will just be taking over and figuring it out for you so we'll see how this final shape expansion goes as that's again halfway through 2024 if it struggles out of the gate I don't know how long Sony's going to wait to make that move something tells me if that is the case and we go down that path probably before the end of 2024 we'll hear how Sony has complete control over Bungie and who knows what's next for him and in our last bit of news let's talk about Grand Theft Auto 6 of course this has taken over the conversation the internet everything completely this week after that trailer dropped out of nowhere because well it leaked out early and wouldn't you know it people are calling for GTA 6 to get banned like there are tweets for example like this one that was sent out by Jackson hle actually even mentioning that it's a video video game for children in America huh now they tried to get ban GTA 6 trending which by the way it did I don't know if that's just because the Tweet got over 7 million views which I mean people were just basically making fun of this person for the tweet and I mean really it's this is one of the easiest dunks ever like this is an easier dunk than if you had a three-foot rim right in front of you so the way I see this is this is incredible I I am so happy to see this because that's how you know a real Grand Theft Auto game just got announced like this happens every single time and it's people are just so just out of their element with this entire thing right like they see the video game they go oh well that's for kids we got to ban this you might as well go to the movie theater and yell outside of an R-rated movie at this point because video games have just uh I would say really grown into thing something so much more than uh what it was back in the the mid even even late '90s we can we can say there so it's just a waste of time really but it's more publicity for Grand Theft Auto 6 and all this tells me is yeah Rockstar really really I think figured it out here with the game a 90 second trailer is enough to do that wait until the game comes out and people do all kinds of crazy stuff in in this one maybe we can get this thing in Congress but all joking aside there was actually a pretty good video that was being uh passed around and that was from you could see here uh York reacts who did work at Rockstar uh this was this was was a person who was an animator on GTA 5 they also mentioned they had worked on Red Dead Redemption 2 and they did a full breakdown of it it's very very interesting to see from their perspective which by the way they mentioned yeah everything you're seeing in this trailer that's that's what the game's going to look like so they're still arguing back and forth about if this game is CGI at times or if this is not necessarily a representation of what's going to show up on our screen when we turn it on the PS5 or the Xbox series that seems like this this is it that's that is probably one of the highest compliments that uh people who are working at Rockstar are getting right now when people think your work that is in real time being rendered on that system is CGI you must have really figured something out there so uh exciting stuff there all the way around whether it's people trying to ban the thing or people really praising the visuals it's it's Grand Theft Auto and it is good to be back and before we go to the comment of the day we're take a look at the poll that I posted up yester yesterday and yes that is Game of the Year Madness yeah this is a big one armored Core 6 versus Hogwarts Legacy W is it is close 52% armored Core 48% for Hogwarts Legacy actually a little surprised that Hogwarts is uh seemingly going to get taken out by armored Core we'll see how things turn out later on today when the when the pole wraps up but it's from soft this is the most successful armored Core they've ever had by a wide margins so it's also good to see that armored Core is I'd say on a on a good path forward because I would like to see them make more more of these going forward as from solt has just gotten better and better and better but I guess technically the next thing up for them would be well they' be doing Elden ring DLC only there's an event coming up maybe where they could announce that officially and show us some of it and we'll finish up with the comment of the day as you're seeing here this is from agent who says I have to applaud Sony lately they've been doing a great job at showcasing why an all digital media future isn't a good thing I guess that is the one silver lining here is well I mean people are getting their accounts banned and and that sort of thing it's it's something that people need to realize what could happen in the future when there is no disk-based media to turn to and it's all riant on the platform holder or the publisher having these games available things that you have purchased with with with real money and it's just oh it's just not available right now come back later it's well hold on that's those are my games right well technically not kind of read the terms of service next time you'll find out and ladies and gentlemen that's going to do it here for newwave if you enjoyed this video guys hit that like button if not hit the dislike leave comments down below of everything we talked about here today there's the game awards coming up later on tonight leave some of your predictions for what game you think is going to win game of the year and what game announcements you would like to see there and then also what about the situation between Sony and Bungie probably not what they were expecting to have to deal with after spending $3.7 billion and then Grand Auto 6 calls for it being banned won't somebody think of the children thanks guys for watching and I'll see you next time [Music] ",
      transcript_with_timestamps: [
        {
          duration: 3.799,
          start: 0.12,
          text: "what's up guys welcome back to news wve",
        },
        {
          duration: 3.72,
          start: 2.159,
          text: "so there's a ton of excitement going",
        },
        {
          duration: 4.081,
          start: 3.919,
          text: "around right now as the game awards of",
        },
        {
          duration: 3.64,
          start: 5.879,
          text: "course are later on tonight where we'll",
        },
        {
          duration: 3.96,
          start: 8.0,
          text: "see which game takes home the Ultimate",
        },
        {
          duration: 4.2,
          start: 9.519,
          text: "Prize as the game of the year as well as",
        },
        {
          duration: 3.679,
          start: 11.96,
          text: "I'm sure a bunch of video game",
        },
        {
          duration: 4.441,
          start: 13.719,
          text: "announcements in fact some have already",
        },
        {
          duration: 4.161,
          start: 15.639,
          text: "sort of been revealed others rumored",
        },
        {
          duration: 4.8,
          start: 18.16,
          text: "right now and we even have people",
        },
        {
          duration: 5.76,
          start: 19.8,
          text: "thinking Nintendo could make a massive",
        },
        {
          duration: 4.479,
          start: 22.96,
          text: "announcement there we'll go over all of",
        },
        {
          duration: 3.52,
          start: 25.56,
          text: "that though here today also we are going",
        },
        {
          duration: 3.561,
          start: 27.439,
          text: "to be talking about the relationship",
        },
        {
          duration: 4.08,
          start: 29.08,
          text: "between Sony and Bungie and how it seems",
        },
        {
          duration: 4.28,
          start: 31.0,
          text: "to have taken a hard left turn and in",
        },
        {
          duration: 4.64,
          start: 33.16,
          text: "fact looks like the independence for",
        },
        {
          duration: 4.24,
          start: 35.28,
          text: "Bungie could actually be in Jeopardy and",
        },
        {
          duration: 3.919,
          start: 37.8,
          text: "well also be continue the coverage for",
        },
        {
          duration: 3.719,
          start: 39.52,
          text: "Grand Theft Auto 6 as now it appears",
        },
        {
          duration: 3.601,
          start: 41.719,
          text: "people who are we'll say a bit out of",
        },
        {
          duration: 4.96,
          start: 43.239,
          text: "their element are attempting to get the",
        },
        {
          duration: 4.84,
          start: 45.32,
          text: "game banned and uh it feels like we've",
        },
        {
          duration: 3.761,
          start: 48.199,
          text: "been here before guys if you enjoy these",
        },
        {
          duration: 3.32,
          start: 50.16,
          text: "videos make H that like button helps out",
        },
        {
          duration: 3.759,
          start: 51.96,
          text: "a ton and if new here to the spawn wave",
        },
        {
          duration: 3.919,
          start: 53.48,
          text: "Channel make sure you subscribe down",
        },
        {
          duration: 4.281,
          start: 55.719,
          text: "below and we're going to start today",
        },
        {
          duration: 4.68,
          start: 57.399,
          text: "with Avatar frontiers of Pandora of of",
        },
        {
          duration: 4.0,
          start: 60.0,
          text: "course it is out now and we also have",
        },
        {
          duration: 4.961,
          start: 62.079,
          text: "reviews we can take a look at here this",
        },
        {
          duration: 6.68,
          start: 64.0,
          text: "over on Metacritic currently sitting at",
        },
        {
          duration: 5.92,
          start: 67.04,
          text: "a 703 this is on 65 critic reviews it",
        },
        {
          duration: 4.84,
          start: 70.68,
          text: "appears the PC version is the one that",
        },
        {
          duration: 4.92,
          start: 72.96,
          text: "pretty much got majority reviewed on so",
        },
        {
          duration: 3.959,
          start: 75.52,
          text: "I I think there's like three or four PS5",
        },
        {
          duration: 5.16,
          start: 77.88,
          text: "reviews and that's kind of it outside of",
        },
        {
          duration: 5.841,
          start: 79.479,
          text: "the 65 PC reviews but we can see the a",
        },
        {
          duration: 4.32,
          start: 83.04,
          text: "more positive review for example from",
        },
        {
          duration: 4.119,
          start: 85.32,
          text: "Gamespot who says Pandora is often",
        },
        {
          duration: 4.88,
          start: 87.36,
          text: "magnificent and I stopped repeatedly",
        },
        {
          duration: 6.04,
          start: 89.439,
          text: "just to look around and take it in as",
        },
        {
          duration: 4.68,
          start: 92.24,
          text: "opposed to TRG who gave it a a 40 and",
        },
        {
          duration: 3.161,
          start: 95.479,
          text: "says I've never seen a game that looks",
        },
        {
          duration: 4.559,
          start: 96.92,
          text: "as brilliant as this but the game's art",
        },
        {
          duration: 5.64,
          start: 98.64,
          text: "direction is let down by Soo combat allo",
        },
        {
          duration: 4.92,
          start: 101.479,
          text: "Ai and weapons that just aren't",
        },
        {
          duration: 4.68,
          start: 104.28,
          text: "satisfying I did see this brought up a",
        },
        {
          duration: 4.76,
          start: 106.399,
          text: "lot in the sense that the game looks",
        },
        {
          duration: 4.08,
          start: 108.96,
          text: "really good especially on PC if you have",
        },
        {
          duration: 3.761,
          start: 111.159,
          text: "a high-end video card and you can crank",
        },
        {
          duration: 4.8,
          start: 113.04,
          text: "a lot of those settings up it is",
        },
        {
          duration: 5.44,
          start: 114.92,
          text: "genuinely impressive to see but it still",
        },
        {
          duration: 5.599,
          start: 117.84,
          text: "sounds like it's that Ubisoft tried and",
        },
        {
          duration: 4.799,
          start: 120.36,
          text: "true open world formula so at least kind",
        },
        {
          duration: 3.8,
          start: 123.439,
          text: "of know what you're get into there but I",
        },
        {
          duration: 4.6,
          start: 125.159,
          text: "guess if you're a fan of just the the",
        },
        {
          duration: 4.36,
          start: 127.239,
          text: "movies and the world that's already kind",
        },
        {
          duration: 3.401,
          start: 129.759,
          text: "of been built out there that lore you'll",
        },
        {
          duration: 3.241,
          start: 131.599,
          text: "probably get a kick out of this game and",
        },
        {
          duration: 3.439,
          start: 133.16,
          text: "again it's available right now to pick",
        },
        {
          duration: 4.0,
          start: 134.84,
          text: "up if you're interested also we did get",
        },
        {
          duration: 4.36,
          start: 136.599,
          text: "the release date for that Sora amiibo",
        },
        {
          duration: 4.399,
          start: 138.84,
          text: "which this was posted up by Nintendo of",
        },
        {
          duration: 5.0,
          start: 140.959,
          text: "America over on Twitter saying the Smash",
        },
        {
          duration: 6.041,
          start: 143.239,
          text: "Bros amiibo of Sora will be released on",
        },
        {
          duration: 6.601,
          start: 145.959,
          text: "February 16th 2024 okay so about 3",
        },
        {
          duration: 5.319,
          start: 149.28,
          text: "months way or so and I I understand I'm",
        },
        {
          duration: 3.399,
          start: 152.56,
          text: "not really into amiibos at all I I",
        },
        {
          duration: 2.841,
          start: 154.599,
          text: "mentioned that I think when they we had",
        },
        {
          duration: 2.961,
          start: 155.959,
          text: "the first wave of amiibos I picked up",
        },
        {
          duration: 4.519,
          start: 157.44,
          text: "like villager and something else I was",
        },
        {
          duration: 5.88,
          start: 158.92,
          text: "like that's kind of it but I understand",
        },
        {
          duration: 4.92,
          start: 161.959,
          text: "for something like the Sora amiibo that",
        },
        {
          duration: 4.68,
          start: 164.8,
          text: "is going to represent a character that",
        },
        {
          duration: 4.321,
          start: 166.879,
          text: "many people in the smash Community never",
        },
        {
          duration: 3.08,
          start: 169.48,
          text: "thought would actually happen but",
        },
        {
          duration: 3.119,
          start: 171.2,
          text: "somehow we get Disney square and",
        },
        {
          duration: 4.24,
          start: 172.56,
          text: "Nintendo to come together and get it",
        },
        {
          duration: 3.681,
          start: 174.319,
          text: "done so sure I understand people might",
        },
        {
          duration: 3.32,
          start: 176.8,
          text: "just want to pick it up for Yes the",
        },
        {
          duration: 4.48,
          start: 178.0,
          text: "collector's sake but also just it's a",
        },
        {
          duration: 4.759,
          start: 180.12,
          text: "SORA amibo so sure but you can look",
        },
        {
          duration: 4.2,
          start: 182.48,
          text: "towards that coming out in February oh",
        },
        {
          duration: 5.761,
          start: 184.879,
          text: "and it does look like we have a trailer",
        },
        {
          duration: 6.199,
          start: 186.68,
          text: "and demo lined up here for another code",
        },
        {
          duration: 5.48,
          start: 190.64,
          text: "recollection which we can see this was",
        },
        {
          duration: 5.08,
          start: 192.879,
          text: "posted up over on Twitter from Pio says",
        },
        {
          duration: 3.72,
          start: 196.12,
          text: "trailer and demo incoming now they are",
        },
        {
          duration: 4.92,
          start: 197.959,
          text: "quote tweeting their remakes of a DS",
        },
        {
          duration: 5.72,
          start: 199.84,
          text: "game and a Wii game prior to another",
        },
        {
          duration: 4.201,
          start: 202.879,
          text: "code recollection getting announced you",
        },
        {
          duration: 3.84,
          start: 205.56,
          text: "line that up sure I guess there is a",
        },
        {
          duration: 4.76,
          start: 207.08,
          text: "demo coming for this game which it is",
        },
        {
          duration: 3.839,
          start: 209.4,
          text: "coming out January 19th so we are",
        },
        {
          duration: 3.759,
          start: 211.84,
          text: "getting kind of close about a month and",
        },
        {
          duration: 4.041,
          start: 213.239,
          text: "a half away and Nate I mean PR did a",
        },
        {
          duration: 3.961,
          start: 215.599,
          text: "great job here with the remakes and now",
        },
        {
          duration: 4.08,
          start: 217.28,
          text: "we're looking towards a demo I I never",
        },
        {
          duration: 3.399,
          start: 219.56,
          text: "really played these games when they",
        },
        {
          duration: 4.48,
          start: 221.36,
          text: "released it at all I wasn't even really",
        },
        {
          duration: 4.84,
          start: 222.959,
          text: "that aware of them so I am curious I",
        },
        {
          duration: 3.16,
          start: 225.84,
          text: "guess to try the demo out I've seen some",
        },
        {
          duration: 2.961,
          start: 227.799,
          text: "of the gameplay I don't know if it's",
        },
        {
          duration: 3.76,
          start: 229.0,
          text: "necessarily a game that I would get that",
        },
        {
          duration: 4.479,
          start: 230.76,
          text: "into but hey it's pretty cool that they",
        },
        {
          duration: 5.039,
          start: 232.76,
          text: "are remaking them and putting it on uh",
        },
        {
          duration: 4.56,
          start: 235.239,
          text: "the the switch much more accessible that",
        },
        {
          duration: 3.28,
          start: 237.799,
          text: "way so a if you've at least been",
        },
        {
          duration: 3.121,
          start: 239.799,
          text: "interested just keep an eye out for I",
        },
        {
          duration: 3.561,
          start: 241.079,
          text: "guess the trailer and the demo maybe",
        },
        {
          duration: 2.8,
          start: 242.92,
          text: "dropping together here soon and guys",
        },
        {
          duration: 2.56,
          start: 244.64,
          text: "with some of the quick news out of the",
        },
        {
          duration: 2.84,
          start: 245.72,
          text: "way let's get into the bigger stuff",
        },
        {
          duration: 3.16,
          start: 247.2,
          text: "let's start right away with the game",
        },
        {
          duration: 3.679,
          start: 248.56,
          text: "awards as that is coming up later on",
        },
        {
          duration: 4.079,
          start: 250.36,
          text: "tonight and there's a lot of",
        },
        {
          duration: 4.201,
          start: 252.239,
          text: "expectations that seem to have built",
        },
        {
          duration: 4.8,
          start: 254.439,
          text: "almost overnight definitely over the",
        },
        {
          duration: 5.56,
          start: 256.44,
          text: "last 24 hours or so it seems like the",
        },
        {
          duration: 4.601,
          start: 259.239,
          text: "hype has really been building up and",
        },
        {
          duration: 4.44,
          start: 262.0,
          text: "we're doing such a good job getting",
        },
        {
          duration: 4.96,
          start: 263.84,
          text: "close to the the award show without",
        },
        {
          duration: 4.08,
          start: 266.44,
          text: "expectations being Skyhigh for",
        },
        {
          duration: 3.28,
          start: 268.8,
          text: "announcements considering people will go",
        },
        {
          duration: 4.2,
          start: 270.52,
          text: "in with some of the craziest",
        },
        {
          duration: 3.88,
          start: 272.08,
          text: "expectations we get a decent enough show",
        },
        {
          duration: 3.4,
          start: 274.72,
          text: "with some pretty good announcements but",
        },
        {
          duration: 4.679,
          start: 275.96,
          text: "that just does not reach the level of",
        },
        {
          duration: 5.519,
          start: 278.12,
          text: "those expectations going in in fact now",
        },
        {
          duration: 4.521,
          start: 280.639,
          text: "we are to a point where some are",
        },
        {
          duration: 4.361,
          start: 283.639,
          text: "thinking that Nintendo is going to",
        },
        {
          duration: 5.319,
          start: 285.16,
          text: "announce the switch to and I got to say",
        },
        {
          duration: 4.36,
          start: 288.0,
          text: "it there's a lot of stuff working",
        },
        {
          duration: 3.841,
          start: 290.479,
          text: "together that I feel like it's going to",
        },
        {
          duration: 4.72,
          start: 292.36,
          text: "set some people up for some major major",
        },
        {
          duration: 5.84,
          start: 294.32,
          text: "disappointment you can queue up that mvg",
        },
        {
          duration: 5.16,
          start: 297.08,
          text: "Meme now but let's go over a few things",
        },
        {
          duration: 3.879,
          start: 300.16,
          text: "that we can expect to be here as some",
        },
        {
          duration: 4.84,
          start: 302.24,
          text: "were just outright announced ahead of",
        },
        {
          duration: 6.121,
          start: 304.039,
          text: "time now Microsoft has said time and",
        },
        {
          duration: 5.16,
          start: 307.08,
          text: "time again to watch the show in fact if",
        },
        {
          duration: 3.8,
          start: 310.16,
          text: "you look on your Xbox series X now",
        },
        {
          duration: 3.64,
          start: 312.24,
          text: "you'll probably see on your dashboard",
        },
        {
          duration: 4.359,
          start: 313.96,
          text: "that they are telling you to watch the",
        },
        {
          duration: 4.68,
          start: 315.88,
          text: "game awards and well we know Nate has",
        },
        {
          duration: 5.081,
          start: 318.319,
          text: "already gone on records saying that",
        },
        {
          duration: 5.8,
          start: 320.56,
          text: "Arcane appears to be set up to make an",
        },
        {
          duration: 5.079,
          start: 323.4,
          text: "announcement and it appears now that the",
        },
        {
          duration: 4.32,
          start: 326.36,
          text: "leading I guess game that's being",
        },
        {
          duration: 4.121,
          start: 328.479,
          text: "speculated as being an anoun there would",
        },
        {
          duration: 3.6,
          start: 330.68,
          text: "be dishonor 3 I think that would be a",
        },
        {
          duration: 4.08,
          start: 332.6,
          text: "big announcement if they did show up",
        },
        {
          duration: 4.08,
          start: 334.28,
          text: "there and say hey look you remember",
        },
        {
          duration: 3.32,
          start: 336.68,
          text: "redfall we're going to go ahead and just",
        },
        {
          duration: 3.6,
          start: 338.36,
          text: "put dishonor 3 in front of you now don't",
        },
        {
          duration: 4.039,
          start: 340.0,
          text: "forget about redfall right that would be",
        },
        {
          duration: 4.2,
          start: 341.96,
          text: "a really exciting thing to see now to go",
        },
        {
          duration: 5.44,
          start: 344.039,
          text: "along with that it appears that Brothers",
        },
        {
          duration: 5.68,
          start: 346.16,
          text: "A Tale of Two Sons is getting a remake",
        },
        {
          duration: 4.361,
          start: 349.479,
          text: "and this is from uh bill bill over on",
        },
        {
          duration: 4.6,
          start: 351.84,
          text: "Twitter now they are kind of lying this",
        },
        {
          duration: 4.76,
          start: 353.84,
          text: "up with okay they've spotted it I guess",
        },
        {
          duration: 3.84,
          start: 356.44,
          text: "in like the marketplace database or",
        },
        {
          duration: 2.84,
          start: 358.6,
          text: "something there uh whether it's on",
        },
        {
          duration: 2.68,
          start: 360.28,
          text: "Playstation of course they come up with",
        },
        {
          duration: 3.36,
          start: 361.44,
          text: "a lot of the PlayStation plus stuff",
        },
        {
          duration: 4.32,
          start: 362.96,
          text: "early uh but they're kind of lining this",
        },
        {
          duration: 5.04,
          start: 364.8,
          text: "up with maybe a game awards announcement",
        },
        {
          duration: 4.4,
          start: 367.28,
          text: "that does sort of feel like kind of on",
        },
        {
          duration: 3.72,
          start: 369.84,
          text: "the level of one of those announcements",
        },
        {
          duration: 4.16,
          start: 371.68,
          text: "they would just sort of make quickly as",
        },
        {
          duration: 3.96,
          start: 373.56,
          text: "they're going through so yeah I could",
        },
        {
          duration: 4.24,
          start: 375.84,
          text: "see that happening there is going to be",
        },
        {
          duration: 4.84,
          start: 377.52,
          text: "a new Dead by daylight game shown off",
        },
        {
          duration: 4.8,
          start: 380.08,
          text: "here this is from super massive so I",
        },
        {
          duration: 5.08,
          start: 382.36,
          text: "guess think of until dawn it is going to",
        },
        {
          duration: 4.96,
          start: 384.88,
          text: "be more of a horror single player Style",
        },
        {
          duration: 3.84,
          start: 387.44,
          text: "game so that I think in that Universe",
        },
        {
          duration: 4.28,
          start: 389.84,
          text: "would be really really cool to see what",
        },
        {
          duration: 5.24,
          start: 391.28,
          text: "they can come up with metaphor with",
        },
        {
          duration: 5.12,
          start: 394.12,
          text: "Atlas West will also be there I guess",
        },
        {
          duration: 4.799,
          start: 396.52,
          text: "showcasing a new trailer features maybe",
        },
        {
          duration: 3.64,
          start: 399.24,
          text: "uh release date that would be I think",
        },
        {
          duration: 4.681,
          start: 401.319,
          text: "that'd be good and then we get into some",
        },
        {
          duration: 5.24,
          start: 402.88,
          text: "heavy speculation as we might have a new",
        },
        {
          duration: 6.08,
          start: 406.0,
          text: "Marvel game announced here and that's",
        },
        {
          duration: 6.639,
          start: 408.12,
          text: "going to catch some people by surprise",
        },
        {
          duration: 5.76,
          start: 412.08,
          text: "but okay this is sort of funny the the",
        },
        {
          duration: 6.401,
          start: 414.759,
          text: "thing that people are uh hinting at now",
        },
        {
          duration: 7.039,
          start: 417.84,
          text: "and it it's hard to say how how",
        },
        {
          duration: 5.2,
          start: 421.16,
          text: "realistic this is a new Blade game uh",
        },
        {
          duration: 4.241,
          start: 424.879,
          text: "we'll see about that one that is",
        },
        {
          duration: 4.16,
          start: 426.36,
          text: "definitely kind of out there I think and",
        },
        {
          duration: 3.799,
          start: 429.12,
          text: "if Microsoft was going to show up with",
        },
        {
          duration: 4.56,
          start: 430.52,
          text: "something along with like Bethesda",
        },
        {
          duration: 4.481,
          start: 432.919,
          text: "probably Dishonored three but you know",
        },
        {
          duration: 3.64,
          start: 435.08,
          text: "what a new Blade game that actually be",
        },
        {
          duration: 3.28,
          start: 437.4,
          text: "kind of interesting I would like to see",
        },
        {
          duration: 4.8,
          start: 438.72,
          text: "that but now this is the part where",
        },
        {
          duration: 5.76,
          start: 440.68,
          text: "things start to take a turn into like",
        },
        {
          duration: 6.32,
          start: 443.52,
          text: "tinfoil hat territory and it really",
        },
        {
          duration: 6.36,
          start: 446.44,
          text: "started with Nvidia as you could see",
        },
        {
          duration: 4.56,
          start: 449.84,
          text: "this from the game awards saying tune in",
        },
        {
          duration: 4.839,
          start: 452.8,
          text: "tomorrow to find out what's powering",
        },
        {
          duration: 5.6,
          start: 454.4,
          text: "your gaming and it just kind of trails",
        },
        {
          duration: 4.84,
          start: 457.639,
          text: "off there with Nvidia we can kind of see",
        },
        {
          duration: 5.56,
          start: 460.0,
          text: "the the background there with the Nvidia",
        },
        {
          duration: 5.44,
          start: 462.479,
          text: "logo and some were thinking wait hold on",
        },
        {
          duration: 4.96,
          start: 465.56,
          text: "nvidia's powering the Nintendo switch",
        },
        {
          duration: 6.441,
          start: 467.919,
          text: "now and we know they're going to be",
        },
        {
          duration: 5.799,
          start: 470.52,
          text: "doing the next Nintendo system is it",
        },
        {
          duration: 3.6,
          start: 474.36,
          text: "possible that Nintendo would show up",
        },
        {
          duration: 4.6,
          start: 476.319,
          text: "here with the switch",
        },
        {
          duration: 5.4,
          start: 477.96,
          text: "2 well then over on Nintendo of",
        },
        {
          duration: 4.56,
          start: 480.919,
          text: "America's YouTube account their profile",
        },
        {
          duration: 5.559,
          start: 483.36,
          text: "image changed and it's just the blue",
        },
        {
          duration: 5.481,
          start: 485.479,
          text: "circle with an N so yeah that did it",
        },
        {
          duration: 4.201,
          start: 488.919,
          text: "that pretty much just erupted",
        },
        {
          duration: 3.88,
          start: 490.96,
          text: "speculation all over the internet at",
        },
        {
          duration: 4.0,
          start: 493.12,
          text: "that point right people are are thinking",
        },
        {
          duration: 3.84,
          start: 494.84,
          text: "wait a minute this is this is it but",
        },
        {
          duration: 4.56,
          start: 497.12,
          text: "we're definitely seeing a switch to here",
        },
        {
          duration: 4.6,
          start: 498.68,
          text: "and oh this is this is the setup I'm",
        },
        {
          duration: 4.919,
          start: 501.68,
          text: "telling you because I wouldn't be",
        },
        {
          duration: 6.0,
          start: 503.28,
          text: "shocked if Nvidia shows up here maybe to",
        },
        {
          duration: 5.56,
          start: 506.599,
          text: "talk about uh I'll say their Five series",
        },
        {
          duration: 5.92,
          start: 509.28,
          text: "cards maybe like a a four Super Series",
        },
        {
          duration: 5.481,
          start: 512.159,
          text: "card uh they could actually show up and",
        },
        {
          duration: 5.16,
          start: 515.2,
          text: "talk about AI or something like there",
        },
        {
          duration: 6.24,
          start: 517.64,
          text: "are a lot of other things Nvidia could",
        },
        {
          duration: 5.8,
          start: 520.36,
          text: "do outside of just like Hey we're going",
        },
        {
          duration: 5.12,
          start: 523.88,
          text: "to tell you about the next chip that's",
        },
        {
          duration: 5.32,
          start: 526.16,
          text: "powering Nintendo's next Generation",
        },
        {
          duration: 4.32,
          start: 529.0,
          text: "device and I feel like with YouTube that",
        },
        {
          duration: 3.24,
          start: 531.48,
          text: "might just be a glitch I've seen it",
        },
        {
          duration: 3.16,
          start: 533.32,
          text: "happened before where profile images",
        },
        {
          duration: 3.48,
          start: 534.72,
          text: "were messed up and it removed them and",
        },
        {
          duration: 3.24,
          start: 536.48,
          text: "then it put them back later on in fact",
        },
        {
          duration: 3.319,
          start: 538.2,
          text: "by the time you're seeing this",
        },
        {
          duration: 4.08,
          start: 539.72,
          text: "maybe that's fixed and this was just a",
        },
        {
          duration: 4.201,
          start: 541.519,
          text: "whole like just nothing but if anything",
        },
        {
          duration: 6.12,
          start: 543.8,
          text: "at least Nvidia will be there I guess",
        },
        {
          duration: 6.52,
          start: 545.72,
          text: "with something to show off so a lot of",
        },
        {
          duration: 4.159,
          start: 549.92,
          text: "uh a lot of speculation heading into the",
        },
        {
          duration: 4.279,
          start: 552.24,
          text: "game awards right now and of course it's",
        },
        {
          duration: 4.2,
          start: 554.079,
          text: "an exciting time but I'm sure we'll see",
        },
        {
          duration: 3.32,
          start: 556.519,
          text: "some cool stuff and then there'll still",
        },
        {
          duration: 3.68,
          start: 558.279,
          text: "just be a whole bunch of disappointment",
        },
        {
          duration: 4.481,
          start: 559.839,
          text: "afterwards so uh should be a lot of fun",
        },
        {
          duration: 4.88,
          start: 561.959,
          text: "next up let's talk about Sony and Bungie",
        },
        {
          duration: 4.4,
          start: 564.32,
          text: "as we know Bungie has really been going",
        },
        {
          duration: 4.081,
          start: 566.839,
          text: "through it recently with the they did",
        },
        {
          duration: 5.52,
          start: 568.72,
          text: "about layoffs or so it seemed like",
        },
        {
          duration: 4.84,
          start: 570.92,
          text: "morale was just not great based on some",
        },
        {
          duration: 3.12,
          start: 574.24,
          text: "sources that were putting information",
        },
        {
          duration: 4.639,
          start: 575.76,
          text: "out there and that everything kind of",
        },
        {
          duration: 5.4,
          start: 577.36,
          text: "hinges on this final shape expansion",
        },
        {
          duration: 6.0,
          start: 580.399,
          text: "that's Now set to release outside of the",
        },
        {
          duration: 7.079,
          start: 582.76,
          text: "current fiscal year uh Midway through",
        },
        {
          duration: 6.081,
          start: 586.399,
          text: "2024 and based on a new report it kind",
        },
        {
          duration: 5.401,
          start: 589.839,
          text: "of sounds like Bungie's entire",
        },
        {
          duration: 6.24,
          start: 592.48,
          text: "Independence could be riding on the",
        },
        {
          duration: 6.08,
          start: 595.24,
          text: "success of that final shape expansion",
        },
        {
          duration: 5.239,
          start: 598.72,
          text: "and this was actually a report that was",
        },
        {
          duration: 5.48,
          start: 601.32,
          text: "posted up this is over on IGN where they",
        },
        {
          duration: 7.481,
          start: 603.959,
          text: "say bunge devs say atmosphere is soul",
        },
        {
          duration: 8.2,
          start: 606.8,
          text: "crushing amid layoffs cuts and fear of",
        },
        {
          duration: 4.92,
          start: 611.44,
          text: "total Sony takeover wow that's that's",
        },
        {
          duration: 2.8,
          start: 615.0,
          text: "quite the picture they're painting there",
        },
        {
          duration: 3.56,
          start: 616.36,
          text: "but we can go over some of the",
        },
        {
          duration: 3.44,
          start: 617.8,
          text: "information that was released with this",
        },
        {
          duration: 3.0,
          start: 619.92,
          text: "report and I will have it linked down",
        },
        {
          duration: 3.52,
          start: 621.24,
          text: "below as there's still quite a bit to",
        },
        {
          duration: 3.52,
          start: 622.92,
          text: "this they say one month after a major",
        },
        {
          duration: 4.6,
          start: 624.76,
          text: "round of layoffs impacted roughly 100",
        },
        {
          duration: 4.24,
          start: 626.44,
          text: "bunge employees of 1,200 those those",
        },
        {
          duration: 4.08,
          start: 629.36,
          text: "remaining at the destiny developer say",
        },
        {
          duration: 5.159,
          start: 630.68,
          text: "the cuts as well as other cost cutting",
        },
        {
          duration: 4.48,
          start: 633.44,
          text: "measures came alongside an apparent",
        },
        {
          duration: 5.24,
          start: 635.839,
          text: "scrambled by Studio leadership to avoid",
        },
        {
          duration: 6.359,
          start: 637.92,
          text: "a total Sony takeover so the way it was",
        },
        {
          duration: 6.361,
          start: 641.079,
          text: "described is on their board at Bungie",
        },
        {
          duration: 4.68,
          start: 644.279,
          text: "they have like half Sony Representatives",
        },
        {
          duration: 3.24,
          start: 647.44,
          text: "half Bungie representatives and then you",
        },
        {
          duration: 3.961,
          start: 648.959,
          text: "have the CEO at Bungie as kind of like",
        },
        {
          duration: 4.48,
          start: 650.68,
          text: "that that tie breaker that that fifth if",
        },
        {
          duration: 6.12,
          start: 652.92,
          text: "you will who who will be able to make",
        },
        {
          duration: 5.88,
          start: 655.16,
          text: "that final call if it's split but they",
        },
        {
          duration: 4.359,
          start: 659.04,
          text: "they say if Bungie falls short of",
        },
        {
          duration: 4.4,
          start: 661.04,
          text: "certain Financial thresholds by too",
        },
        {
          duration: 4.401,
          start: 663.399,
          text: "great an amount Sony is allowed to",
        },
        {
          duration: 4.8,
          start: 665.44,
          text: "dissolve the existing board and take",
        },
        {
          duration: 4.12,
          start: 667.8,
          text: "full control of the company so think",
        },
        {
          duration: 5.159,
          start: 670.24,
          text: "about what's happened recently they",
        },
        {
          duration: 6.599,
          start: 671.92,
          text: "missed their expectations for Revenue by",
        },
        {
          duration: 5.56,
          start: 675.399,
          text: "45% and what happens well not too long",
        },
        {
          duration: 5.241,
          start: 678.519,
          text: "after that they lay off a 100 people and",
        },
        {
          duration: 4.801,
          start: 680.959,
          text: "apparently they have been making a ton",
        },
        {
          duration: 4.319,
          start: 683.76,
          text: "of cost cutting measures think of things",
        },
        {
          duration: 5.48,
          start: 685.76,
          text: "like travel or different events you'll",
        },
        {
          duration: 5.161,
          start: 688.079,
          text: "do with in your company to boost morale",
        },
        {
          duration: 3.8,
          start: 691.24,
          text: "and camaraderie uh they're kind of",
        },
        {
          duration: 3.76,
          start: 693.24,
          text: "cutting a lot of that stuff out",
        },
        {
          duration: 4.76,
          start: 695.04,
          text: "completely and they say along with the",
        },
        {
          duration: 5.399,
          start: 697.0,
          text: "recent layoffs this has resulted in a",
        },
        {
          duration: 5.92,
          start: 699.8,
          text: "massive decay in morale within the",
        },
        {
          duration: 5.081,
          start: 702.399,
          text: "company according to IGN sources one of",
        },
        {
          duration: 5.04,
          start: 705.72,
          text: "whom told us that the mood within the",
        },
        {
          duration: 5.84,
          start: 707.48,
          text: "studio has been Soul crushing over the",
        },
        {
          duration: 5.16,
          start: 710.76,
          text: "last month here get this this is a quote",
        },
        {
          duration: 5.319,
          start: 713.32,
          text: "from one of the workers there says folks",
        },
        {
          duration: 5.2,
          start: 715.92,
          text: "still here are very much feeling US",
        },
        {
          duration: 6.561,
          start: 718.639,
          text: "versus versus them between leadership",
        },
        {
          duration: 5.76,
          start: 721.12,
          text: "and workers that trust has been eroded",
        },
        {
          duration: 3.84,
          start: 725.2,
          text: "that does not",
        },
        {
          duration: 5.16,
          start: 726.88,
          text: "sound like like something you want to",
        },
        {
          duration: 6.0,
          start: 729.04,
          text: "hear out of a studio that you hope would",
        },
        {
          duration: 4.76,
          start: 732.04,
          text: "be productive down the line like this",
        },
        {
          duration: 4.0,
          start: 735.04,
          text: "this seems like there's a lot of strife",
        },
        {
          duration: 5.56,
          start: 736.8,
          text: "within Bungie and kind of looking over",
        },
        {
          duration: 5.44,
          start: 739.04,
          text: "their shoulder at Sony right now and to",
        },
        {
          duration: 3.8,
          start: 742.36,
          text: "me the M of money that Sony spent on",
        },
        {
          duration: 5.12,
          start: 744.48,
          text: "Bungie because I I do believe they",
        },
        {
          duration: 6.32,
          start: 746.16,
          text: "overpaid for them was probably with the",
        },
        {
          duration: 5.28,
          start: 749.6,
          text: "idea in mind of hey we're going to buy",
        },
        {
          duration: 4.64,
          start: 752.48,
          text: "Bungie and they're very much turn key as",
        },
        {
          duration: 4.079,
          start: 754.88,
          text: "in we we bring them in we don't have to",
        },
        {
          duration: 4.8,
          start: 757.12,
          text: "do a lot really we we just need their",
        },
        {
          duration: 5.521,
          start: 758.959,
          text: "expert expertise for our own live",
        },
        {
          duration: 4.4,
          start: 761.92,
          text: "service lineup a slate that we have that",
        },
        {
          duration: 4.24,
          start: 764.48,
          text: "we would like to be good right out of",
        },
        {
          duration: 3.84,
          start: 766.32,
          text: "the gate they've gone through it with",
        },
        {
          duration: 3.239,
          start: 768.72,
          text: "Destiny and of course their whole",
        },
        {
          duration: 3.76,
          start: 770.16,
          text: "history with with Halo and working with",
        },
        {
          duration: 3.361,
          start: 771.959,
          text: "Microsoft I'm sure they gained a lot of",
        },
        {
          duration: 3.4,
          start: 773.92,
          text: "experience when it comes to gameplay",
        },
        {
          duration: 3.639,
          start: 775.32,
          text: "there but really the monetization stuff",
        },
        {
          duration: 4.04,
          start: 777.32,
          text: "they worked out as they went went",
        },
        {
          duration: 4.481,
          start: 778.959,
          text: "through with B with uh with Destiny and",
        },
        {
          duration: 4.24,
          start: 781.36,
          text: "Destiny 2 so they should be able to come",
        },
        {
          duration: 4.44,
          start: 783.44,
          text: "in and make all this work for us turns",
        },
        {
          duration: 5.12,
          start: 785.6,
          text: "out their management isn't great",
        },
        {
          duration: 5.639,
          start: 787.88,
          text: "specifically when it comes to uh well as",
        },
        {
          duration: 6.16,
          start: 790.72,
          text: "you can see costs versus revenue and",
        },
        {
          duration: 5.68,
          start: 793.519,
          text: "expenses if you're missing your goals by",
        },
        {
          duration: 4.079,
          start: 796.88,
          text: "45% yeah something's wrong there at the",
        },
        {
          duration: 4.64,
          start: 799.199,
          text: "top anyway it basically comes back to",
        },
        {
          duration: 5.32,
          start: 800.959,
          text: "that final shape expansion and if it",
        },
        {
          duration: 3.56,
          start: 803.839,
          text: "doesn't go over well then I do believe",
        },
        {
          duration: 3.961,
          start: 806.279,
          text: "that's kind of it for Bungie's",
        },
        {
          duration: 4.921,
          start: 807.399,
          text: "Independence Sony will come in take over",
        },
        {
          duration: 4.12,
          start: 810.24,
          text: "completely and while there will still of",
        },
        {
          duration: 4.319,
          start: 812.32,
          text: "course be Bungie employees and",
        },
        {
          duration: 5.24,
          start: 814.36,
          text: "developers there working it'll be Sony",
        },
        {
          duration: 4.801,
          start: 816.639,
          text: "then steering the ship which is odd once",
        },
        {
          duration: 3.56,
          start: 819.6,
          text: "again because we know Bungie apparently",
        },
        {
          duration: 3.48,
          start: 821.44,
          text: "was making decisions based on reports",
        },
        {
          duration: 3.919,
          start: 823.16,
          text: "out of Bloomberg as to which live",
        },
        {
          duration: 4.0,
          start: 824.92,
          text: "service would stay and which one would",
        },
        {
          duration: 4.841,
          start: 827.079,
          text: "have to go back into the oven if you",
        },
        {
          duration: 5.719,
          start: 828.92,
          text: "will or just outright cancelled and uh",
        },
        {
          duration: 6.599,
          start: 831.92,
          text: "now Sony is coming in to maybe take over",
        },
        {
          duration: 5.681,
          start: 834.639,
          text: "Bungie so very weird awkward situation",
        },
        {
          duration: 3.24,
          start: 838.519,
          text: "here but that's business if you can't",
        },
        {
          duration: 3.879,
          start: 840.32,
          text: "make it work when it comes to your",
        },
        {
          duration: 5.161,
          start: 841.759,
          text: "balance sheet eventually the parent",
        },
        {
          duration: 5.32,
          start: 844.199,
          text: "company in this case Sony will just be",
        },
        {
          duration: 4.479,
          start: 846.92,
          text: "taking over and figuring it out for you",
        },
        {
          duration: 4.44,
          start: 849.519,
          text: "so we'll see how this final shape",
        },
        {
          duration: 5.36,
          start: 851.399,
          text: "expansion goes as that's again halfway",
        },
        {
          duration: 4.761,
          start: 853.959,
          text: "through 2024 if it struggles out of the",
        },
        {
          duration: 3.681,
          start: 856.759,
          text: "gate I don't know how long Sony's going",
        },
        {
          duration: 3.72,
          start: 858.72,
          text: "to wait to make that move something",
        },
        {
          duration: 4.319,
          start: 860.44,
          text: "tells me if that is the case and we go",
        },
        {
          duration: 5.079,
          start: 862.44,
          text: "down that path probably before the end",
        },
        {
          duration: 4.721,
          start: 864.759,
          text: "of 2024 we'll hear how Sony has complete",
        },
        {
          duration: 3.721,
          start: 867.519,
          text: "control over Bungie and",
        },
        {
          duration: 3.2,
          start: 869.48,
          text: "who knows what's next for him and in our",
        },
        {
          duration: 3.399,
          start: 871.24,
          text: "last bit of news let's talk about Grand",
        },
        {
          duration: 4.92,
          start: 872.68,
          text: "Theft Auto 6 of course this has taken",
        },
        {
          duration: 4.64,
          start: 874.639,
          text: "over the conversation the internet",
        },
        {
          duration: 3.44,
          start: 877.6,
          text: "everything completely this week after",
        },
        {
          duration: 4.161,
          start: 879.279,
          text: "that trailer dropped out of nowhere",
        },
        {
          duration: 4.4,
          start: 881.04,
          text: "because well it leaked out early and",
        },
        {
          duration: 4.44,
          start: 883.44,
          text: "wouldn't you know it people are calling",
        },
        {
          duration: 4.28,
          start: 885.44,
          text: "for GTA 6 to get banned like there are",
        },
        {
          duration: 6.199,
          start: 887.88,
          text: "tweets for example like this one that",
        },
        {
          duration: 5.96,
          start: 889.72,
          text: "was sent out by Jackson hle actually",
        },
        {
          duration: 4.76,
          start: 894.079,
          text: "even mentioning that it's a video video",
        },
        {
          duration: 5.92,
          start: 895.68,
          text: "game for children in America huh now",
        },
        {
          duration: 4.721,
          start: 898.839,
          text: "they tried to get ban GTA 6 trending",
        },
        {
          duration: 4.799,
          start: 901.6,
          text: "which by the way it did I don't know if",
        },
        {
          duration: 5.76,
          start: 903.56,
          text: "that's just because the Tweet got over 7",
        },
        {
          duration: 4.841,
          start: 906.399,
          text: "million views which I mean people were",
        },
        {
          duration: 4.519,
          start: 909.32,
          text: "just basically making fun of this person",
        },
        {
          duration: 4.44,
          start: 911.24,
          text: "for the tweet and I mean really it's",
        },
        {
          duration: 3.641,
          start: 913.839,
          text: "this is one of the easiest dunks ever",
        },
        {
          duration: 3.56,
          start: 915.68,
          text: "like this is an easier dunk than if you",
        },
        {
          duration: 6.159,
          start: 917.48,
          text: "had a three-foot rim right in front of",
        },
        {
          duration: 7.36,
          start: 919.24,
          text: "you so the way I see this is this is",
        },
        {
          duration: 5.721,
          start: 923.639,
          text: "incredible I I am so happy to see this",
        },
        {
          duration: 4.359,
          start: 926.6,
          text: "because that's how you know a real Grand",
        },
        {
          duration: 4.36,
          start: 929.36,
          text: "Theft Auto game just got announced like",
        },
        {
          duration: 4.601,
          start: 930.959,
          text: "this happens every single time and it's",
        },
        {
          duration: 3.599,
          start: 933.72,
          text: "people are just so just out of their",
        },
        {
          duration: 3.959,
          start: 935.56,
          text: "element with this entire thing right",
        },
        {
          duration: 5.44,
          start: 937.319,
          text: "like they see the video game they go oh",
        },
        {
          duration: 4.281,
          start: 939.519,
          text: "well that's for kids we got to ban this",
        },
        {
          duration: 2.681,
          start: 942.759,
          text: "you might as well go to the movie",
        },
        {
          duration: 3.279,
          start: 943.8,
          text: "theater and yell outside of an R-rated",
        },
        {
          duration: 4.16,
          start: 945.44,
          text: "movie at this point because video games",
        },
        {
          duration: 5.68,
          start: 947.079,
          text: "have just uh I would say really grown",
        },
        {
          duration: 5.56,
          start: 949.6,
          text: "into thing something so much more than",
        },
        {
          duration: 4.721,
          start: 952.759,
          text: "uh what it was back in the the mid even",
        },
        {
          duration: 4.56,
          start: 955.16,
          text: "even late '90s we can we can say there",
        },
        {
          duration: 4.44,
          start: 957.48,
          text: "so it's just a waste of time really but",
        },
        {
          duration: 5.52,
          start: 959.72,
          text: "it's more publicity for Grand Theft Auto",
        },
        {
          duration: 5.359,
          start: 961.92,
          text: "6 and all this tells me is yeah Rockstar",
        },
        {
          duration: 4.039,
          start: 965.24,
          text: "really really I think figured it out",
        },
        {
          duration: 3.881,
          start: 967.279,
          text: "here with the game a 90 second trailer",
        },
        {
          duration: 3.721,
          start: 969.279,
          text: "is enough to do that wait until the game",
        },
        {
          duration: 4.2,
          start: 971.16,
          text: "comes out and people do all kinds of",
        },
        {
          duration: 4.12,
          start: 973.0,
          text: "crazy stuff in in this one maybe we can",
        },
        {
          duration: 3.36,
          start: 975.36,
          text: "get this thing in Congress but all",
        },
        {
          duration: 3.959,
          start: 977.12,
          text: "joking aside there was actually a pretty",
        },
        {
          duration: 4.679,
          start: 978.72,
          text: "good video that was being uh passed",
        },
        {
          duration: 5.68,
          start: 981.079,
          text: "around and that was from you could see",
        },
        {
          duration: 5.36,
          start: 983.399,
          text: "here uh York reacts who did work at",
        },
        {
          duration: 4.401,
          start: 986.759,
          text: "Rockstar uh this was this was was a",
        },
        {
          duration: 4.32,
          start: 988.759,
          text: "person who was an animator on GTA 5 they",
        },
        {
          duration: 4.72,
          start: 991.16,
          text: "also mentioned they had worked on Red",
        },
        {
          duration: 4.161,
          start: 993.079,
          text: "Dead Redemption 2 and they did a full",
        },
        {
          duration: 2.399,
          start: 995.88,
          text: "breakdown of it it's very very",
        },
        {
          duration: 2.64,
          start: 997.24,
          text: "interesting to see from their",
        },
        {
          duration: 2.8,
          start: 998.279,
          text: "perspective which by the way they",
        },
        {
          duration: 3.84,
          start: 999.88,
          text: "mentioned yeah everything you're seeing",
        },
        {
          duration: 4.401,
          start: 1001.079,
          text: "in this trailer that's that's what the",
        },
        {
          duration: 3.84,
          start: 1003.72,
          text: "game's going to look like so they're",
        },
        {
          duration: 6.32,
          start: 1005.48,
          text: "still arguing back and forth about if",
        },
        {
          duration: 6.6,
          start: 1007.56,
          text: "this game is CGI at times or if this is",
        },
        {
          duration: 3.68,
          start: 1011.8,
          text: "not necessarily a representation of",
        },
        {
          duration: 3.64,
          start: 1014.16,
          text: "what's going to show up on our screen",
        },
        {
          duration: 5.039,
          start: 1015.48,
          text: "when we turn it on the PS5 or the Xbox",
        },
        {
          duration: 4.12,
          start: 1017.8,
          text: "series that seems like this this is it",
        },
        {
          duration: 3.601,
          start: 1020.519,
          text: "that's that is probably one of the",
        },
        {
          duration: 3.6,
          start: 1021.92,
          text: "highest compliments that uh people who",
        },
        {
          duration: 4.719,
          start: 1024.12,
          text: "are working at Rockstar are getting",
        },
        {
          duration: 5.279,
          start: 1025.52,
          text: "right now when people think your work",
        },
        {
          duration: 4.72,
          start: 1028.839,
          text: "that is in real time being rendered on",
        },
        {
          duration: 4.681,
          start: 1030.799,
          text: "that system is CGI you must have really",
        },
        {
          duration: 3.961,
          start: 1033.559,
          text: "figured something out there so uh",
        },
        {
          duration: 3.359,
          start: 1035.48,
          text: "exciting stuff there all the way around",
        },
        {
          duration: 3.24,
          start: 1037.52,
          text: "whether it's people trying to ban the",
        },
        {
          duration: 4.561,
          start: 1038.839,
          text: "thing or people really praising the",
        },
        {
          duration: 4.52,
          start: 1040.76,
          text: "visuals it's it's Grand Theft Auto and",
        },
        {
          duration: 3.32,
          start: 1043.4,
          text: "it is good to be back and before we go",
        },
        {
          duration: 3.159,
          start: 1045.28,
          text: "to the comment of the day we're take a",
        },
        {
          duration: 3.72,
          start: 1046.72,
          text: "look at the poll that I posted up yester",
        },
        {
          duration: 4.401,
          start: 1048.439,
          text: "yesterday and yes that is Game of the",
        },
        {
          duration: 6.68,
          start: 1050.44,
          text: "Year Madness yeah this is a big one",
        },
        {
          duration: 9.0,
          start: 1052.84,
          text: "armored Core 6 versus Hogwarts Legacy W",
        },
        {
          duration: 7.08,
          start: 1057.12,
          text: "is it is close 52% armored Core 48% for",
        },
        {
          duration: 5.48,
          start: 1061.84,
          text: "Hogwarts Legacy actually a little",
        },
        {
          duration: 4.56,
          start: 1064.2,
          text: "surprised that Hogwarts is uh seemingly",
        },
        {
          duration: 3.479,
          start: 1067.32,
          text: "going to get taken out by armored Core",
        },
        {
          duration: 4.2,
          start: 1068.76,
          text: "we'll see how things turn out later on",
        },
        {
          duration: 4.921,
          start: 1070.799,
          text: "today when the when the pole wraps up",
        },
        {
          duration: 4.68,
          start: 1072.96,
          text: "but it's from soft this is the most",
        },
        {
          duration: 4.56,
          start: 1075.72,
          text: "successful armored Core they've ever had",
        },
        {
          duration: 5.519,
          start: 1077.64,
          text: "by a wide margins so it's also good to",
        },
        {
          duration: 4.84,
          start: 1080.28,
          text: "see that armored Core is I'd say on a on",
        },
        {
          duration: 3.76,
          start: 1083.159,
          text: "a good path forward because I would like",
        },
        {
          duration: 4.08,
          start: 1085.12,
          text: "to see them make more more of these",
        },
        {
          duration: 3.76,
          start: 1086.919,
          text: "going forward as from solt has just",
        },
        {
          duration: 2.88,
          start: 1089.2,
          text: "gotten better and better and better but",
        },
        {
          duration: 4.12,
          start: 1090.679,
          text: "I guess technically the next thing up",
        },
        {
          duration: 5.599,
          start: 1092.08,
          text: "for them would be well they' be doing",
        },
        {
          duration: 3.921,
          start: 1094.799,
          text: "Elden ring DLC only there's an event",
        },
        {
          duration: 3.201,
          start: 1097.679,
          text: "coming up maybe where they could",
        },
        {
          duration: 3.64,
          start: 1098.72,
          text: "announce that officially and show us",
        },
        {
          duration: 2.919,
          start: 1100.88,
          text: "some of it and we'll finish up with the",
        },
        {
          duration: 3.28,
          start: 1102.36,
          text: "comment of the day as you're seeing here",
        },
        {
          duration: 3.521,
          start: 1103.799,
          text: "this is from agent who says I have to",
        },
        {
          duration: 3.72,
          start: 1105.64,
          text: "applaud Sony lately they've been doing a",
        },
        {
          duration: 5.12,
          start: 1107.32,
          text: "great job at showcasing why an all",
        },
        {
          duration: 4.64,
          start: 1109.36,
          text: "digital media future isn't a good thing",
        },
        {
          duration: 2.92,
          start: 1112.44,
          text: "I guess that is the one silver lining",
        },
        {
          duration: 3.64,
          start: 1114.0,
          text: "here is well I mean people are getting",
        },
        {
          duration: 4.96,
          start: 1115.36,
          text: "their accounts banned and and that sort",
        },
        {
          duration: 5.48,
          start: 1117.64,
          text: "of thing it's it's something that people",
        },
        {
          duration: 4.92,
          start: 1120.32,
          text: "need to realize what could happen in the",
        },
        {
          duration: 4.919,
          start: 1123.12,
          text: "future when there is no disk-based media",
        },
        {
          duration: 4.96,
          start: 1125.24,
          text: "to turn to and it's all riant on the",
        },
        {
          duration: 4.321,
          start: 1128.039,
          text: "platform holder or the publisher having",
        },
        {
          duration: 4.28,
          start: 1130.2,
          text: "these games available things that you",
        },
        {
          duration: 3.799,
          start: 1132.36,
          text: "have purchased with with with real money",
        },
        {
          duration: 3.52,
          start: 1134.48,
          text: "and it's just oh it's just not available",
        },
        {
          duration: 2.801,
          start: 1136.159,
          text: "right now come back later it's well hold",
        },
        {
          duration: 4.559,
          start: 1138.0,
          text: "on that's",
        },
        {
          duration: 6.719,
          start: 1138.96,
          text: "those are my games right well",
        },
        {
          duration: 4.881,
          start: 1142.559,
          text: "technically not kind of read the terms",
        },
        {
          duration: 2.841,
          start: 1145.679,
          text: "of service next time you'll find out and",
        },
        {
          duration: 3.16,
          start: 1147.44,
          text: "ladies and gentlemen that's going to do",
        },
        {
          duration: 3.76,
          start: 1148.52,
          text: "it here for newwave if you enjoyed this",
        },
        {
          duration: 2.92,
          start: 1150.6,
          text: "video guys hit that like button if not",
        },
        {
          duration: 2.68,
          start: 1152.28,
          text: "hit the dislike leave comments down",
        },
        {
          duration: 3.24,
          start: 1153.52,
          text: "below of everything we talked about here",
        },
        {
          duration: 3.48,
          start: 1154.96,
          text: "today there's the game awards coming up",
        },
        {
          duration: 3.399,
          start: 1156.76,
          text: "later on tonight leave some of your",
        },
        {
          duration: 3.76,
          start: 1158.44,
          text: "predictions for what game you think is",
        },
        {
          duration: 3.721,
          start: 1160.159,
          text: "going to win game of the year and what",
        },
        {
          duration: 3.04,
          start: 1162.2,
          text: "game announcements you would like to see",
        },
        {
          duration: 4.0,
          start: 1163.88,
          text: "there and then also what about the",
        },
        {
          duration: 4.559,
          start: 1165.24,
          text: "situation between Sony and Bungie",
        },
        {
          duration: 4.919,
          start: 1167.88,
          text: "probably not what they were expecting to",
        },
        {
          duration: 5.521,
          start: 1169.799,
          text: "have to deal with after spending $3.7",
        },
        {
          duration: 5.521,
          start: 1172.799,
          text: "billion and then Grand Auto 6 calls for",
        },
        {
          duration: 4.839,
          start: 1175.32,
          text: "it being banned won't somebody think of",
        },
        {
          duration: 4.599,
          start: 1178.32,
          text: "the children thanks guys for watching",
        },
        {
          duration: 2.76,
          start: 1180.159,
          text: "and I'll see you next",
        },
        {
          duration: 3.0,
          start: 1197.24,
          text: "time",
        },
        {
          duration: 4.029,
          start: 1202.89,
          text: "[Music]",
        },
      ],
      videoId: "e5sl2k2XJN4",
    },
  ],
};
// Test URL: https://youtube.com/playlist?list=PLqR0DrEFzD9sb43paVGmK-wV8W8ESxAjS&si=4NnaAGIKmB9g7cUl
export const TEST_PLAYLIST_ID_RESPONSE_1 = {
  videos: [
    {
      channelId: "UC0GzLtu-HV1tzQNOfNHwcEg",
      channelTitle: "Mason Dixon Acres",
      description:
        "We are a couple building a debt-free, high-performance home. This video is 365 days of work in 20 minutes, all while holding 9-5 engineering jobs. \n\nTo keep it debt-free, we have to do it in two stages: a garage apartment, then a main house addition. We have designed everything ourselves with building science in mind, focusing on water management, airtightness, insulation, and indoor air quality. We are doing the majority of work on this project ourselves to save money that goes towards high quality materials.\n\n* LINK TO ENTIRE HOUSE BUILD PLAYLIST: https://youtube.com/playlist?list=PLni94M13ZdKavtkntD4KbWkxPg4V6-P5m\n\n--------------------------------------------------------\n\ud83d\udcf8 Camera Gear \u2b07\ufe0f\n-Main Camera:  https://amzn.to/3WND8Ea\n-Drone:  https://amzn.to/3Dphkbf\n-Wireless Mic:  https://amzn.to/3wDwYvL\n-Voiceover Mic:  https://amzn.to/3kVu0A4\n-Main gimbal:  https://amzn.to/3HhH8Hj\n-iPhone gimbal:  https://amzn.to/3HfX1ya\n-Camera backpack:  https://amzn.to/3wB6DOS\n\n- Lots more on the storefront! https://www.amazon.com/shop/masondixonacres\n--------------------------------------------------------\n\nABOUT US: We are Alex and Elaina, a couple in our 20s who are currently living on the 3-acre farm in southern Pennsylvania where Alex grew up. We have a garden, backyard chickens, and build or fix anything that we need to. We still work corporate day jobs, but are working to eventually leave the 9-5 lifestyle in favor of a self-built, debt-free, homestead on 6 acres nearby.\n\nWe upload a YouTube video each week (usually Sunday morning), and post daily on Instagram!\n\nCOME SAY HI \ud83d\ude42\nInstagram: https://www.instagram.com/masondixonacres/\nFacebook: https://www.facebook.com/MasonDixonAcres/\n\nDISCLAIMER: Links included in this description may be affiliate links. If you purchase a product with these links, we may receive a small commission at no additional cost to you! Thank you for supporting our channel \u263a\ufe0f",
      itemCount: 2,
      playlistDescription: "",
      playlistId: "PLqR0DrEFzD9sb43paVGmK-wV8W8ESxAjS",
      playlistOwnerChannelId: "UCj_s79IpT7usLrW8JQSgVFA",
      playlistOwnerChannelTitle: "Daniel Segarra",
      playlistThumbnailUrl:
        "https://i.ytimg.com/vi/eTaB-wblBXc/maxresdefault.jpg",
      playlistTitle: "Home owning",
      publishedAt: "2023-12-11T06:55:35Z",
      thumbnailUrl: "https://i.ytimg.com/vi/eTaB-wblBXc/maxresdefault.jpg",
      title: "1 YEAR TIMELAPSE Building Our Own Home",
      transcript_text_only:
        "we're Alex and Elena and we bought six acres of wooded land in 2020. after over 18 months of cleanup site preparation designing our house and then splitting the project in half we broke ground on our garage apartment the goal build a debt-free high-performance Edition ready home here's the first 12 months working on nights and weekends outside of full-time jobs March 21st 2022 and today we are breaking ground [Music] yep that's not going anywhere [Music] [Music] foreign [Music] [Applause] [Music] [Music] [Music] [Music] [Music] [Music] foreign [Music] worth of fittings what happened I don't know what we should do with this now [Music] he's coming to our Center footing to take a bath [Music] carved out a ton of stone [Music] anchor Bolt the plate down [Music] [Music] foreign [Music] buying stuff we only have [Music] our manifold will be mounted somewhere right around here [Music] okay tarped over the entire slab and we came here and we watered it every day we had some issues and there's going to be some lessons learned from this inevitably it spiked again which it did in the beginning of 2022 [Music] July 2nd 2022 and I'm gonna call it the first day of framing your stuff is getting these things laid out square foreign [Music] I found this jib boom crane on Facebook Marketplace [Music] anyways thanks so much for watching and we will see you next time and before we really sign off I actually have one last message and I wrote this down because I probably was not going to remember it if I didn't so I actually have it in my pocket right now the past six years with you have truly been the best six of my life Elena will you marry me yes [Laughter] hey baby tether [Music] trust when you fall in every risk you take knowing redemptions always on its way [Music] unafraid unafraid unafraid I'm unafraid every second I'm raising up higher unafraid I'm unafraid don't count the mistakes look for better measures measures after dark loading lumber for the next morning it was this pretty little Lumber loader knowing redemptions always on its way unafraid unafraid all right okay the real boss is here now and by that I mean George [Music] [Music] [Music] thank you [Music] foreign [Music] [Music] [Music] and then also down to here we put our 90 degree Bend IN foreign [Music] sort of to mount the tracks to now that is a beautiful panel [Music] oh my gosh this really got grown up this was nothing but dirt at a scoot to Porta pot just a bit these machines are just amazing I think I have started to get this thing figured out [Music] and there's the final outcome [Music] for sure fire pole dance get it girl I went too so far three stop stop are you serious I know that's what I just said [Music] oh great [Music] thank you start off and you get to see your electric meter truly at zero wait for it [Music] we have power and here's our very temporary lighting setup with some Amazon lights is it okay to say I have no idea what I'm doing it is Alex's birthday 27th birthday I had to work all day today but I know he's here to work six inches below the foot here's the kind of crap I'm dealing with [Music] machine's been doing really well [Music] there's a whole host of dirty jokes that could be made about this but we won't go there oh shoot all right let's hope that's enough we're getting water today [Music] [Applause] [Music] we got water I'm stoked foreign this one we are getting ready to paint easy you just need two buckets a [Music] we can finally get rid of our 100 a month porta potty in favor of their twenty thousand dollar sand Mount so let's get started the key is not to disturb all the top soil and organic matter I got the solid core stuff [Music] [Applause] all right [Music] [Applause] [Music] [Applause] [Music] [Applause] [Music] this clean out here and this stub of pipe is for our future house connection these are the final pipes of the system that essentially squirt the poop water into the bed [Music] foreign [Applause] [Applause] [Music] [Applause] [Music] [Applause] [Applause] [Applause] [Music] [Applause] [Music] [Applause] [Music] thank you [Music] definitely have a micro Elite somewhere [Music] [Applause] calibrated two Bender right there I like it [Music] oh look what we got this morning I'm actually going to start with mounting these two things [Music] [Applause] this is how you build a home debt free gotta save all your plumbing fittings at every opportunity do you want a mic on are you gonna say something it's good to take five minutes and enjoy a fresh cup of coffee every now and then you gotta remember to enjoy the process because we only got One Life to Live and you know soak it up I'm gonna put it over top don't fall into the fire that's key whoa it's steaming I only singed a little bit of the hair off my hand give me more you're being kind of stingy [Music] [Applause] yeah well we got a week shoot you freaking kidding me all right this isn't tight enough oh my god oh it's not tight at all almost sounds like it's leaking oh shoot things fifth time to the time right [Music] [Applause] [Music] [Applause] [Music] [Applause] [Music] [Applause] [Music] [Applause] [Music] [Applause] [Music] [Music] [Applause] [Music] thank you foreign let's put this thing back together huh that was a lot easier than I thought it would be we've come a long way and still have a long way to go dream big and get to work because life is short and a year from now you may wish you had started today [Music] ",
      transcript_with_timestamps: [
        {
          duration: 4.68,
          start: 0.0,
          text: "we're Alex and Elena and we bought six",
        },
        {
          duration: 4.559,
          start: 2.28,
          text: "acres of wooded land in 2020. after over",
        },
        {
          duration: 4.08,
          start: 4.68,
          text: "18 months of cleanup site preparation",
        },
        {
          duration: 3.961,
          start: 6.839,
          text: "designing our house and then splitting",
        },
        {
          duration: 4.2,
          start: 8.76,
          text: "the project in half we broke ground on",
        },
        {
          duration: 4.259,
          start: 10.8,
          text: "our garage apartment the goal build a",
        },
        {
          duration: 4.14,
          start: 12.96,
          text: "debt-free high-performance Edition ready",
        },
        {
          duration: 3.661,
          start: 15.059,
          text: "home here's the first 12 months working",
        },
        {
          duration: 2.939,
          start: 17.1,
          text: "on nights and weekends outside of",
        },
        {
          duration: 5.7,
          start: 18.72,
          text: "full-time jobs",
        },
        {
          duration: 5.541,
          start: 20.039,
          text: "March 21st 2022 and today",
        },
        {
          duration: 44.789,
          start: 24.42,
          text: "we are breaking ground",
        },
        {
          duration: 43.629,
          start: 25.58,
          text: "[Music]",
        },
        {
          duration: 5.77,
          start: 69.74,
          text: "yep that's not going anywhere",
        },
        {
          duration: 3.18,
          start: 72.33,
          text: "[Music]",
        },
        {
          duration: 8.7,
          start: 77.75,
          text: "[Music]",
        },
        {
          duration: 3.0,
          start: 89.1,
          text: "foreign",
        },
        {
          duration: 10.629,
          start: 92.47,
          text: "[Music]",
        },
        {
          duration: 3.299,
          start: 99.8,
          text: "[Applause]",
        },
        {
          duration: 6.629,
          start: 103.43,
          text: "[Music]",
        },
        {
          duration: 3.129,
          start: 113.14,
          text: "[Music]",
        },
        {
          duration: 12.88,
          start: 127.14,
          text: "[Music]",
        },
        {
          duration: 5.6,
          start: 144.83,
          text: "[Music]",
        },
        {
          duration: 8.26,
          start: 153.04,
          text: "[Music]",
        },
        {
          duration: 4.34,
          start: 165.66,
          text: "[Music]",
        },
        {
          duration: 25.779,
          start: 170.28,
          text: "foreign",
        },
        {
          duration: 23.249,
          start: 172.81,
          text: "[Music]",
        },
        {
          duration: 3.939,
          start: 198.44,
          text: "worth of fittings",
        },
        {
          duration: 3.25,
          start: 200.58,
          text: "what happened I don't know what we",
        },
        {
          duration: 8.21,
          start: 202.379,
          text: "should do with this now",
        },
        {
          duration: 6.759,
          start: 203.83,
          text: "[Music]",
        },
        {
          duration: 4.559,
          start: 212.54,
          text: "he's coming to our Center footing to",
        },
        {
          duration: 2.36,
          start: 214.739,
          text: "take a bath",
        },
        {
          duration: 11.21,
          start: 217.41,
          text: "[Music]",
        },
        {
          duration: 17.79,
          start: 226.519,
          text: "carved out a ton of stone",
        },
        {
          duration: 15.689,
          start: 228.62,
          text: "[Music]",
        },
        {
          duration: 10.029,
          start: 244.76,
          text: "anchor Bolt the plate down",
        },
        {
          duration: 6.419,
          start: 248.37,
          text: "[Music]",
        },
        {
          duration: 9.081,
          start: 260.019,
          text: "[Music]",
        },
        {
          duration: 3.0,
          start: 266.1,
          text: "foreign",
        },
        {
          duration: 18.42,
          start: 270.02,
          text: "[Music]",
        },
        {
          duration: 7.481,
          start: 289.639,
          text: "buying stuff we only have",
        },
        {
          duration: 5.84,
          start: 293.02,
          text: "[Music]",
        },
        {
          duration: 4.34,
          start: 297.12,
          text: "our manifold will be mounted somewhere",
        },
        {
          duration: 2.6,
          start: 298.86,
          text: "right around here",
        },
        {
          duration: 11.969,
          start: 303.68,
          text: "[Music]",
        },
        {
          duration: 2.48,
          start: 326.1,
          text: "okay",
        },
        {
          duration: 5.38,
          start: 334.58,
          text: "tarped over the entire slab and we came",
        },
        {
          duration: 5.22,
          start: 337.56,
          text: "here and we watered it every day we had",
        },
        {
          duration: 4.86,
          start: 339.96,
          text: "some issues and there's going to be some",
        },
        {
          duration: 4.139,
          start: 342.78,
          text: "lessons learned from this inevitably it",
        },
        {
          duration: 5.3,
          start: 344.82,
          text: "spiked again which it did in the",
        },
        {
          duration: 3.201,
          start: 346.919,
          text: "beginning of 2022",
        },
        {
          duration: 8.049,
          start: 350.6,
          text: "[Music]",
        },
        {
          duration: 6.16,
          start: 359.0,
          text: "July 2nd 2022 and I'm gonna call it the",
        },
        {
          duration: 4.86,
          start: 362.94,
          text: "first day of framing your stuff is",
        },
        {
          duration: 5.61,
          start: 365.16,
          text: "getting these things laid out square",
        },
        {
          duration: 11.0,
          start: 367.8,
          text: "foreign",
        },
        {
          duration: 11.489,
          start: 370.77,
          text: "[Music]",
        },
        {
          duration: 6.119,
          start: 378.8,
          text: "I found this jib boom crane on Facebook",
        },
        {
          duration: 2.66,
          start: 382.259,
          text: "Marketplace",
        },
        {
          duration: 21.709,
          start: 386.43,
          text: "[Music]",
        },
        {
          duration: 4.541,
          start: 408.979,
          text: "anyways thanks so much for watching and",
        },
        {
          duration: 4.56,
          start: 411.6,
          text: "we will see you next time and before we",
        },
        {
          duration: 5.22,
          start: 413.52,
          text: "really sign off I actually have one last",
        },
        {
          duration: 4.74,
          start: 416.16,
          text: "message and I wrote this down because I",
        },
        {
          duration: 3.66,
          start: 418.74,
          text: "probably was not going to remember it if",
        },
        {
          duration: 3.6,
          start: 420.9,
          text: "I didn't so I actually have it in my",
        },
        {
          duration: 4.079,
          start: 422.4,
          text: "pocket right now the past six years with",
        },
        {
          duration: 6.18,
          start: 424.5,
          text: "you have truly been the best six of my",
        },
        {
          duration: 7.44,
          start: 426.479,
          text: "life Elena will you marry me yes",
        },
        {
          duration: 5.78,
          start: 430.68,
          text: "[Laughter]",
        },
        {
          duration: 2.541,
          start: 433.919,
          text: "hey",
        },
        {
          duration: 2.0,
          start: 439.68,
          text: "baby",
        },
        {
          duration: 4.64,
          start: 451.68,
          text: "tether",
        },
        {
          duration: 3.12,
          start: 453.2,
          text: "[Music]",
        },
        {
          duration: 4.54,
          start: 458.96,
          text: "trust when you fall in every risk you",
        },
        {
          duration: 5.16,
          start: 462.24,
          text: "take",
        },
        {
          duration: 6.96,
          start: 463.5,
          text: "knowing redemptions always on its way",
        },
        {
          duration: 3.06,
          start: 467.4,
          text: "[Music]",
        },
        {
          duration: 7.38,
          start: 474.259,
          text: "unafraid",
        },
        {
          duration: 4.44,
          start: 477.199,
          text: "unafraid unafraid",
        },
        {
          duration: 5.801,
          start: 481.819,
          text: "I'm",
        },
        {
          duration: 5.4,
          start: 483.62,
          text: "unafraid every second I'm raising up",
        },
        {
          duration: 5.6,
          start: 487.62,
          text: "higher",
        },
        {
          duration: 8.519,
          start: 489.02,
          text: "unafraid I'm unafraid",
        },
        {
          duration: 8.319,
          start: 493.22,
          text: "don't count the mistakes look for better",
        },
        {
          duration: 4.0,
          start: 497.539,
          text: "measures measures",
        },
        {
          duration: 5.019,
          start: 503.3,
          text: "after dark loading lumber for the next",
        },
        {
          duration: 4.641,
          start: 506.099,
          text: "morning it was this pretty little Lumber",
        },
        {
          duration: 2.421,
          start: 508.319,
          text: "loader",
        },
        {
          duration: 7.02,
          start: 514.56,
          text: "knowing redemptions always on its way",
        },
        {
          duration: 3.0,
          start: 518.58,
          text: "unafraid",
        },
        {
          duration: 4.32,
          start: 525.32,
          text: "unafraid",
        },
        {
          duration: 2.78,
          start: 526.86,
          text: "all right",
        },
        {
          duration: 6.679,
          start: 531.66,
          text: "okay the real boss is here now",
        },
        {
          duration: 3.839,
          start: 534.5,
          text: "and by that I mean George",
        },
        {
          duration: 8.68,
          start: 540.0,
          text: "[Music]",
        },
        {
          duration: 9.059,
          start: 556.5,
          text: "[Music]",
        },
        {
          duration: 5.749,
          start: 568.54,
          text: "[Music]",
        },
        {
          duration: 2.66,
          start: 576.42,
          text: "thank you",
        },
        {
          duration: 20.29,
          start: 580.04,
          text: "[Music]",
        },
        {
          duration: 2.3,
          start: 604.92,
          text: "foreign",
        },
        {
          duration: 8.069,
          start: 614.99,
          text: "[Music]",
        },
        {
          duration: 19.299,
          start: 629.0,
          text: "[Music]",
        },
        {
          duration: 3.179,
          start: 658.13,
          text: "[Music]",
        },
        {
          duration: 5.84,
          start: 665.88,
          text: "and then also down to here we put our 90",
        },
        {
          duration: 2.6,
          start: 669.12,
          text: "degree Bend IN",
        },
        {
          duration: 5.669,
          start: 672.18,
          text: "foreign",
        },
        {
          duration: 3.659,
          start: 674.19,
          text: "[Music]",
        },
        {
          duration: 4.56,
          start: 679.1,
          text: "sort of to mount the tracks to",
        },
        {
          duration: 30.66,
          start: 686.1,
          text: "now that is a beautiful panel",
        },
        {
          duration: 30.879,
          start: 688.46,
          text: "[Music]",
        },
        {
          duration: 5.16,
          start: 716.76,
          text: "oh my gosh this really got grown up this",
        },
        {
          duration: 5.301,
          start: 719.339,
          text: "was nothing but dirt at a scoot to Porta",
        },
        {
          duration: 2.72,
          start: 721.92,
          text: "pot just a bit",
        },
        {
          duration: 4.56,
          start: 726.38,
          text: "these machines are just amazing",
        },
        {
          duration: 3.17,
          start: 735.0,
          text: "I think I have started to get this thing",
        },
        {
          duration: 16.081,
          start: 737.339,
          text: "figured out",
        },
        {
          duration: 17.11,
          start: 738.17,
          text: "[Music]",
        },
        {
          duration: 5.04,
          start: 753.42,
          text: "and there's the final outcome",
        },
        {
          duration: 3.18,
          start: 755.28,
          text: "[Music]",
        },
        {
          duration: 2.479,
          start: 760.92,
          text: "for sure",
        },
        {
          duration: 4.079,
          start: 764.76,
          text: "fire pole dance",
        },
        {
          duration: 6.421,
          start: 766.639,
          text: "get it girl",
        },
        {
          duration: 4.221,
          start: 768.839,
          text: "I went too so far three",
        },
        {
          duration: 3.08,
          start: 774.48,
          text: "stop stop",
        },
        {
          duration: 4.741,
          start: 779.279,
          text: "are you serious",
        },
        {
          duration: 4.72,
          start: 781.04,
          text: "I know that's what I just said",
        },
        {
          duration: 2.41,
          start: 784.02,
          text: "[Music]",
        },
        {
          duration: 17.94,
          start: 785.76,
          text: "oh great",
        },
        {
          duration: 20.11,
          start: 786.43,
          text: "[Music]",
        },
        {
          duration: 2.84,
          start: 803.7,
          text: "thank you",
        },
        {
          duration: 4.72,
          start: 806.88,
          text: "start off and you get to see your",
        },
        {
          duration: 5.88,
          start: 808.38,
          text: "electric meter truly at zero wait for it",
        },
        {
          duration: 5.239,
          start: 811.6,
          text: "[Music]",
        },
        {
          duration: 4.68,
          start: 814.26,
          text: "we have power and here's our very",
        },
        {
          duration: 4.081,
          start: 816.839,
          text: "temporary lighting setup with some",
        },
        {
          duration: 4.079,
          start: 818.94,
          text: "Amazon lights is it okay to say I have",
        },
        {
          duration: 5.52,
          start: 820.92,
          text: "no idea what I'm doing it is Alex's",
        },
        {
          duration: 7.641,
          start: 823.019,
          text: "birthday 27th birthday I had to work all",
        },
        {
          duration: 7.62,
          start: 826.44,
          text: "day today but I know he's here to work",
        },
        {
          duration: 5.38,
          start: 830.66,
          text: "six inches below the foot",
        },
        {
          duration: 4.44,
          start: 834.06,
          text: "here's the kind of crap I'm dealing with",
        },
        {
          duration: 6.2,
          start: 836.04,
          text: "[Music]",
        },
        {
          duration: 3.74,
          start: 838.5,
          text: "machine's been doing really well",
        },
        {
          duration: 6.73,
          start: 844.25,
          text: "[Music]",
        },
        {
          duration: 3.78,
          start: 851.22,
          text: "there's a whole host of dirty jokes that",
        },
        {
          duration: 3.421,
          start: 853.019,
          text: "could be made about this but we won't go",
        },
        {
          duration: 4.7,
          start: 855.0,
          text: "there",
        },
        {
          duration: 3.26,
          start: 856.44,
          text: "oh shoot",
        },
        {
          duration: 3.66,
          start: 862.44,
          text: "all right let's hope that's enough we're",
        },
        {
          duration: 6.51,
          start: 864.42,
          text: "getting water today",
        },
        {
          duration: 7.97,
          start: 866.1,
          text: "[Music]",
        },
        {
          duration: 20.56,
          start: 870.93,
          text: "[Applause]",
        },
        {
          duration: 17.42,
          start: 874.07,
          text: "[Music]",
        },
        {
          duration: 6.461,
          start: 893.779,
          text: "we got water I'm stoked",
        },
        {
          duration: 3.0,
          start: 897.24,
          text: "foreign",
        },
        {
          duration: 7.581,
          start: 903.899,
          text: "this one we are getting ready to paint",
        },
        {
          duration: 4.44,
          start: 907.04,
          text: "easy you just need two buckets a",
        },
        {
          duration: 7.42,
          start: 911.9,
          text: "[Music]",
        },
        {
          duration: 4.14,
          start: 916.98,
          text: "we can finally get rid of our 100 a",
        },
        {
          duration: 3.6,
          start: 919.32,
          text: "month porta potty in favor of their",
        },
        {
          duration: 3.42,
          start: 921.12,
          text: "twenty thousand dollar sand Mount so",
        },
        {
          duration: 3.779,
          start: 922.92,
          text: "let's get started the key is not to",
        },
        {
          duration: 5.78,
          start: 924.54,
          text: "disturb all the top soil and organic",
        },
        {
          duration: 3.621,
          start: 926.699,
          text: "matter I got the solid core stuff",
        },
        {
          duration: 3.139,
          start: 931.44,
          text: "[Music]",
        },
        {
          duration: 3.82,
          start: 942.4,
          text: "[Applause]",
        },
        {
          duration: 2.66,
          start: 943.56,
          text: "all right",
        },
        {
          duration: 3.91,
          start: 947.05,
          text: "[Music]",
        },
        {
          duration: 2.42,
          start: 949.6,
          text: "[Applause]",
        },
        {
          duration: 1.36,
          start: 950.96,
          text: "[Music]",
        },
        {
          duration: 1.76,
          start: 952.02,
          text: "[Applause]",
        },
        {
          duration: 4.24,
          start: 952.32,
          text: "[Music]",
        },
        {
          duration: 17.26,
          start: 953.78,
          text: "[Applause]",
        },
        {
          duration: 16.399,
          start: 956.56,
          text: "[Music]",
        },
        {
          duration: 3.84,
          start: 971.04,
          text: "this clean out here and this stub of",
        },
        {
          duration: 3.721,
          start: 972.959,
          text: "pipe is for our future house connection",
        },
        {
          duration: 3.78,
          start: 974.88,
          text: "these are the final pipes of the system",
        },
        {
          duration: 4.88,
          start: 976.68,
          text: "that essentially squirt the poop water",
        },
        {
          duration: 2.9,
          start: 978.66,
          text: "into the bed",
        },
        {
          duration: 3.17,
          start: 981.67,
          text: "[Music]",
        },
        {
          duration: 7.669,
          start: 986.82,
          text: "foreign",
        },
        {
          duration: 5.989,
          start: 988.5,
          text: "[Applause]",
        },
        {
          duration: 4.34,
          start: 998.37,
          text: "[Applause]",
        },
        {
          duration: 3.939,
          start: 1006.71,
          text: "[Music]",
        },
        {
          duration: 2.76,
          start: 1013.19,
          text: "[Applause]",
        },
        {
          duration: 9.319,
          start: 1015.54,
          text: "[Music]",
        },
        {
          duration: 8.909,
          start: 1015.95,
          text: "[Applause]",
        },
        {
          duration: 4.299,
          start: 1030.14,
          text: "[Applause]",
        },
        {
          duration: 6.909,
          start: 1036.95,
          text: "[Applause]",
        },
        {
          duration: 6.71,
          start: 1038.609,
          text: "[Music]",
        },
        {
          duration: 1.71,
          start: 1043.859,
          text: "[Applause]",
        },
        {
          duration: 3.32,
          start: 1045.319,
          text: "[Music]",
        },
        {
          duration: 3.07,
          start: 1045.569,
          text: "[Applause]",
        },
        {
          duration: 6.93,
          start: 1050.64,
          text: "[Music]",
        },
        {
          duration: 4.32,
          start: 1056.38,
          text: "thank you",
        },
        {
          duration: 3.13,
          start: 1057.57,
          text: "[Music]",
        },
        {
          duration: 4.11,
          start: 1061.34,
          text: "definitely have a micro Elite somewhere",
        },
        {
          duration: 2.469,
          start: 1064.83,
          text: "[Music]",
        },
        {
          duration: 5.31,
          start: 1065.45,
          text: "[Applause]",
        },
        {
          duration: 4.221,
          start: 1067.299,
          text: "calibrated two Bender right there I like",
        },
        {
          duration: 4.98,
          start: 1070.76,
          text: "it",
        },
        {
          duration: 8.06,
          start: 1071.52,
          text: "[Music]",
        },
        {
          duration: 5.58,
          start: 1075.74,
          text: "oh look what we got this morning I'm",
        },
        {
          duration: 2.86,
          start: 1079.58,
          text: "actually going to start with mounting",
        },
        {
          duration: 4.259,
          start: 1081.32,
          text: "these two things",
        },
        {
          duration: 3.139,
          start: 1082.44,
          text: "[Music]",
        },
        {
          duration: 4.59,
          start: 1089.99,
          text: "[Applause]",
        },
        {
          duration: 3.42,
          start: 1093.02,
          text: "this is how you build a home debt free",
        },
        {
          duration: 4.58,
          start: 1094.58,
          text: "gotta save all your plumbing fittings at",
        },
        {
          duration: 2.72,
          start: 1096.44,
          text: "every opportunity",
        },
        {
          duration: 4.421,
          start: 1100.059,
          text: "do you want a mic on are you gonna say",
        },
        {
          duration: 4.68,
          start: 1102.2,
          text: "something it's good to take five minutes",
        },
        {
          duration: 4.199,
          start: 1104.48,
          text: "and enjoy a fresh cup of coffee every",
        },
        {
          duration: 4.2,
          start: 1106.88,
          text: "now and then you gotta remember to enjoy",
        },
        {
          duration: 5.941,
          start: 1108.679,
          text: "the process because we only got One Life",
        },
        {
          duration: 5.64,
          start: 1111.08,
          text: "to Live and you know soak it up I'm",
        },
        {
          duration: 7.04,
          start: 1114.62,
          text: "gonna put it over top don't fall into",
        },
        {
          duration: 4.94,
          start: 1116.72,
          text: "the fire that's key whoa it's steaming",
        },
        {
          duration: 3.719,
          start: 1122.96,
          text: "I only singed a little bit of the hair",
        },
        {
          duration: 4.63,
          start: 1124.7,
          text: "off my hand give me more you're being",
        },
        {
          duration: 4.041,
          start: 1126.679,
          text: "kind of stingy",
        },
        {
          duration: 4.31,
          start: 1129.33,
          text: "[Music]",
        },
        {
          duration: 6.1,
          start: 1130.72,
          text: "[Applause]",
        },
        {
          duration: 5.159,
          start: 1133.64,
          text: "yeah well we got a week shoot",
        },
        {
          duration: 3.54,
          start: 1136.82,
          text: "you freaking kidding me all right this",
        },
        {
          duration: 3.661,
          start: 1138.799,
          text: "isn't tight enough oh my god oh it's not",
        },
        {
          duration: 4.38,
          start: 1140.36,
          text: "tight at all almost sounds like it's",
        },
        {
          duration: 5.57,
          start: 1142.46,
          text: "leaking oh shoot",
        },
        {
          duration: 4.47,
          start: 1144.74,
          text: "things fifth time to the time right",
        },
        {
          duration: 6.28,
          start: 1148.03,
          text: "[Music]",
        },
        {
          duration: 7.48,
          start: 1149.21,
          text: "[Applause]",
        },
        {
          duration: 3.98,
          start: 1154.31,
          text: "[Music]",
        },
        {
          duration: 2.96,
          start: 1156.69,
          text: "[Applause]",
        },
        {
          duration: 4.32,
          start: 1158.29,
          text: "[Music]",
        },
        {
          duration: 3.91,
          start: 1159.65,
          text: "[Applause]",
        },
        {
          duration: 1.22,
          start: 1162.61,
          text: "[Music]",
        },
        {
          duration: 4.13,
          start: 1163.56,
          text: "[Applause]",
        },
        {
          duration: 5.17,
          start: 1163.83,
          text: "[Music]",
        },
        {
          duration: 8.88,
          start: 1167.69,
          text: "[Applause]",
        },
        {
          duration: 10.08,
          start: 1169.0,
          text: "[Music]",
        },
        {
          duration: 5.75,
          start: 1176.57,
          text: "[Applause]",
        },
        {
          duration: 3.24,
          start: 1179.08,
          text: "[Music]",
        },
        {
          duration: 1.7,
          start: 1184.65,
          text: "[Music]",
        },
        {
          duration: 13.19,
          start: 1185.93,
          text: "[Applause]",
        },
        {
          duration: 15.949,
          start: 1186.35,
          text: "[Music]",
        },
        {
          duration: 3.179,
          start: 1199.12,
          text: "thank you",
        },
        {
          duration: 2.24,
          start: 1203.36,
          text: "foreign",
        },
        {
          duration: 3.801,
          start: 1209.299,
          text: "let's put this thing back together",
        },
        {
          duration: 2.58,
          start: 1213.2,
          text: "huh",
        },
        {
          duration: 2.279,
          start: 1214.52,
          text: "that was a lot easier than I thought it",
        },
        {
          duration: 2.82,
          start: 1215.78,
          text: "would be",
        },
        {
          duration: 4.201,
          start: 1216.799,
          text: "we've come a long way and still have a",
        },
        {
          duration: 4.5,
          start: 1218.6,
          text: "long way to go dream big and get to work",
        },
        {
          duration: 4.16,
          start: 1221.0,
          text: "because life is short and a year from",
        },
        {
          duration: 4.489,
          start: 1223.1,
          text: "now you may wish you had started today",
        },
        {
          duration: 2.429,
          start: 1225.16,
          text: "[Music]",
        },
      ],
      videoId: "eTaB-wblBXc",
    },
    {
      channelId: "UCvAl0O8xLNeBfR6CbjanhSw",
      channelTitle: "Jules Terpak",
      description:
        "The new Google Bard update allows users to engage more deeply with YouTube videos. This could eventually affect the media landscape much more than we realize. I hopped on a call with Jack Krawczyk who is responsible for the development, experience, and growth of Bard globally to discuss its potential.  \n\nA huge thank you to Back Market for sponsoring this video. As I have, make them your go-to when buying tech: https://bit.ly/julesterpakxbackmarket\n\nChapters\n0:00 - Intro to the Bard and YT integration\n1:00 - Test run using my videos\n2:07 - A worry that came to mind\n2:34 - Intro to Jack Krawczyk \n3:06 - Intro to Gemini\n5:53 - Back Market partnership\n7:10 - Interview start, Bard basics\n8:34 - Bard vs ChatGPT\n11:51 - If Google will gatekeep access to YT\n15:24 - What Bard processes within YT videos\n16:57 - How to make Bard fair for YT creators\n21:32 - If text will make a comeback over video\n23:57 - Potential benefits for creators \n27:54 - Bard\u2019s effect on the \u201cYouTube Meta\u201d\n31:54 - Incorporating the Google ecosystem\n35:15 - The future of Google Bard and Assistant \n39:18 - Outro\n____________________\n\nIntro animation by Black Book Studio: https://www.blackbook.studio/\n\nJack\u2019s X/Twitter: https://twitter.com/JackK\n\nYou can also find me on\nX/Twitter: https://twitter.com/julesterpak\nTikTok: https://www.tiktok.com/@julesterpak\nInstagram: https://www.instagram.com/julesterpak\n\nText versions of my videos: https://www.growingdigital.net/\n\u200e \u200e \nJoin for dialogue and opportunities: https://discord.gg/8ueURBRvc7\n\u200e \u200e \nWatch or listen on Spotify: https://open.spotify.com/show/6LqoqQA5cborb7pJsZTftw\n\u200e \u200e \nMy production gear: https://amzn.to/3OFWWJv\n\u200e \u200e \nBusiness inquiries: julesterpak@gmail.com\n____________________\n\nFEATURED MEDIA\n\nMeet Bard: https://www.youtube.com/watch?v=63NfEkYCLz0\n\nIntro to Gemini: https://www.youtube.com/watch?v=jV1vkHv4zq8\n\nGemini finds connections: https://www.youtube.com/watch?v=Rn30RMhEBTs\n\nGemini being multimodal: https://www.youtube.com/watch?v=UIZAiXYceBI\n\nGemini for homework: https://www.youtube.com/watch?v=K4pX1VAxaAI\n\nGemini fit check: https://www.youtube.com/watch?v=HP2pNdCRT5M\n\nGemini guesses the movie: https://www.youtube.com/watch?v=aRyuMNwn02w\n\n@MarkRober takes Bard for a test flight: https://www.youtube.com/watch?v=mHZSrtl4zX0\n\nGemini does research: https://www.youtube.com/watch?v=sPiOP_CB54A\n\nGoogle I/O 2021: https://www.youtube.com/watch?v=L7c4wS7T_T8",
      itemCount: 2,
      playlistDescription: "",
      playlistId: "PLqR0DrEFzD9sb43paVGmK-wV8W8ESxAjS",
      playlistOwnerChannelId: "UCj_s79IpT7usLrW8JQSgVFA",
      playlistOwnerChannelTitle: "Daniel Segarra",
      playlistThumbnailUrl:
        "https://i.ytimg.com/vi/eTaB-wblBXc/maxresdefault.jpg",
      playlistTitle: "Home owning",
      publishedAt: "2023-12-11T06:55:35Z",
      thumbnailUrl: "https://i.ytimg.com/vi/hMyfy9Z_5vM/maxresdefault.jpg",
      title: "How Google Bard is changing our relationship with YouTube",
      transcript_text_only:
        "so I'm scrolling through Twitter the other day and I come across this tweet from Jack croch saying that Bard AKA Google's version of open AI chat upbt can now help with understanding YouTube videos for example let's say a video shows how someone makes their special olive oil cake but you're only curious about one ingredient which is how many eggs the recipe requires okay ask Bard like you would ask any good Baker in your life get your answer immediately and then be on your Merry way this update allows for deeper engagement with YouTube videos and has the potential to drastically change how we approach the platform so I ran to Twitter search bar and typed in B and YouTube to see if anyone else was talking about this because again it's wild and the conversation was minimal but I did come across these two examples this person asked Bard for a specific date mentioned within a set of videos he was curious about and Bard answered right away and this person asked Bard to create bullet points for the various python elements discussed in a video python is a coding language he then immediately exported those bullet points to Google Docs to get get to work this is a big deal not only has YouTube been a catalyst in my education unfortunately even more so than my college experience but recently conversational AI has really clicked for me in a way that FASTT trcks my daily thought process and the potential when it comes to exploration and education it's substantial so to see how good it really is I asked B about two videos of mine first I asked for an overview of media is changing dot dot dot big time and the output was actually pretty spot on I then had a lengthier conversation about my interview with Taylor Loren the summary was a bit off when I asked Bard about all the questions I asked Taylor the ones it gave were correct but it left out about like 60% of them I asked what some funny moments were from the interview and at this point it started spelling Taylor's last name wrong as well as getting who said what a bit wrong but still it came back with one to two valid moments and lastly when I asked Bart about the sentiment in the comment section as well as for the video's transcript it just made stuff up instead of of saying I don't know or I don't do that so there's work to be done but again the potential is definitely there though with that a worry immediately came to mind if someone utilizes B and eventually chat gbt Etc to FastTrack through the information provided in a YouTube video that's amazing but there still needs to be some type of Engagement awarded to the video within the YouTube algorithm maybe it's the same way does a like comment or ideally it varies depending on the amount of information extracted regardless this definitely needs to happen and as this person reiterated this needs to happen ASAP so I reached out to Jack whose tweet I originally saw to have a conversation about Bard he's a senior director of product management at Google who's responsible for the development experience and growth of Bard globally in today's video we talk about the trajectory of Bard whether that be related to YouTube creators or taking the broader G ecosystem to the next level because things like Gmail everything within Drive docs sheets slides and so many other Google products s have become such integral parts of our lives and in the coming years they're just likely to be more deeply integrated with Bart also want to provide the most upto-date information in the interview I mentioned that Bart is powered by Lambda similar to how chat GPT is powered by GPT 3.5 or gbt 4 depending on if you have a subscription or not but there's an update on that Bard was originally powered by Lambda when it was announced in February but in May that was updated to Palm 2 and as of literally yesterday December 6th 2023 B is now powered by Gemini I didn't get the scoop during the interview super proud and excited to announce the launch of the Gemini era a first step towards a truly Universal AI model each of the 50 different subject areas that we tested on um it's as good as the best expert humans in those areas I've started making my omelet does it look ready [Music] now it looks like it's almost ready you can flip B over to cook the other side why is it not ready it's not ready because the eggs are still running who wore it better the zebra oh I like this the zebra has been wearing its stripes for millions of years given the play on words in these images gets the name of the [Music] movie The Breakfast Club tell me what you see I see you placing a piece of paper on the table I see a squiggly line give me some ideas for what I could make with this I see pink and green yarn how about a dragon fruit or how about a green cake with a pink heart with Gemini you could upload a photo of handwritten answers on a worksheet not only can Gemini solve these problems but this is the amazing part it can read the answers and understand what was right and what was wrong here Gemini identifies that the formula was correct but there was a mistake in calculating height scientists need to search among thousands of scientific papers for key information and extract them by hand it's a very common workflow and very timeconsuming over a lunch break Gemini read 200,000 papers for us filtered it down to 250 and extracted their data I've worked on AI my whole life because I've always felt would be the most beneficial and consequential Technology For Humanity very rare that you can work on a techn ol at a foundational level and it simultaneously can impact all our products but yeah the model's capabilities surpass gp4 on basically every Benchmark it's all super interesting to think about and let's get into the [Music] conversation before we get into things I'm back in another turtleneck because it's just that time of year it's chilly we're hanging out we're GI and we're giving and for that reason I'm excited to be partnering with back Market on today's video whether it be the monitor I have right here or the camera lens I'm currently filming with back Market has helped me save money and reduce my contribution to the growing E-Waste issue what it is is a global Marketplace for high quality refurbished Tech so while there are a ton of shiny new toys coming out that are creating genuinely new Realms of Technology when it comes to buying the current Essentials consider taking the refurbished group like look here these graphs compare the environmental impact of new versus refurbished smartphones tablets laptops and desktops you could also consider providing your old devices to their tradein service it takes 2 minutes aside from sending the device of course and by the end of it your device isn't being wasted you're providing refurbished and more affordable technology to someone else and you get compensated for it like I said earlier it's the holiday season the back Market always has good deals by offering up to 70% off year round you can also receive $15 off your first order of $250 or more if you sign up for emails I'm thankful to be working with them and would love to hear about your future experience so check out back Market in the description now let's get into the conversation Jack thank you so much for the time I've been observing Bard ever since it was announced back in February and I have so many questions but especially around last week's updates and rollouts so I just want to get started how would you explain what B is to a fifth grader and where did the name board come from so imagine you've got a magic library that you go to that doesn't only help you find any book in the world that you would want to learn from but also helps you write a book it helps you write the story of whatever idea or curiosity that you have in your mind and in the same way that when we're taught in school you have to look in more than one place to write a story especially if you're going to talk about something that happened Bard gives you the tools to be be able to double check those things and find other sources and so uh it's a little bit like a magic library that helps you tell a story which is actually part of the second question which is why do we call it Bard bards over time have been storytellers and story is the first programming language it's the first way that we taught abstract Concepts to build complex uh realities in our world this notion that words create worlds um was the spirit behind why we named it Bard and this magic library that you have at your disposal okay that explanation sits well because to be honest I was very critical of the name Bard when I first heard it I just thought it was some weird word I didn't really know it had a meaning and then a few weeks or months went by and I came across something that talked about the meaning of the word Bard I was like all right I can maybe come around to it but I want to get into some important context for viewers in a way Bard is a reaction to chat GPT open ai's launch of this back in November of 2022 I assume created a lot of pressure and urgency internally to get something out to the world simultaneously Google has been working towards a system with Bart's capabilities for years at Google IO in 2021 you guys revealed Lambda your conversational large language model llm that actually Powers Bard so how are you looking at the competition between Bard and chat gbt today yeah I mean Google's been at solving one large problem for 25 years which is organizing the world's information and making it universally uh helpful and accessible and this is just another step in that direction when we look at where we are today versus where we were a year ago yeah a lot has changed and like I I do want to give credit and admiration for a lot of the creativity that chat GPT helped sparked in people's lives but the reality is the vast major majority of people in the world still haven't used this technology and we've been studying it for years and so when we bring Bard to people in the world what we're focused on is answering the question of what does it take to get you to get an idea that's in your mind and bring it to life and we've seen people doing that I mean Bard's been out now uh I think we're we're about to cross uh our eight-month Mark uh so it hasn't even been a year and we've seen people coming from all around the world and over 200 countries and territories around the world that are using it as a way to bring an idea to life like one of my favorite things was uh there was a local business entrepreneur in uh the middle of the US that was sharing their story with us which is they were trying to open a store in their town and they never applied for a business loan before and they started taking screenshots of their pitch that they're going to take to their local bank and they said what are some ways that I can increase my probability of getting alone and I like a year ago there was no technology in the world that could do that like you just had to like maybe call up a friend that had an uncle that had another friend at a bank that might give you a tip and now it's bringing this access to people and so when I think about where we were a year ago today where we are right now and where we're going to be moving forward the thing that's driving us and to your question how's Google thinking about it we're obsessing over like what happens when you have this magic at your fingertips the ability not just to get answers but to generate possibilities that trigger your creativity and your ideas to come to life it's uh the competition is really people's imagination coming to life and that's what I get personally most excited about when it comes to Bard I mean it's all been fascinating to observe and this tweet from Jason calicis last week embodied what I think is a massive deal moving forward he said Google bar is still clunky with a horrible UI but if Sundar P chai can keep pushing the heads of verticals like YouTube to have deep integration inard it's going to have a huge advantage over competitors and if Google blocks other language models from having access to YouTube it's game on it's like yeah YouTube is this Powerhouse and of course gatekeeping it would cause this insane Advantage it reminds me of a relationship that's been in the press a lot lately which is iMessage versus SMS versus RCS and for viewers context RCS is basically the improved version of SMS it allows for features like red receipts typing indicators and so on which would make the relationship between iMessage iPhones and Androids much more cohesive and enjoyable but Apple has refused to update SMS to RCS so basically it's helped create aside from the blue bubbles it's helped create that social ostracization over the past few years which has really worked in the US amongst the younger Generations so yeah again when I think about the relationship being able to gatekeep YouTube's data specifically to Bard and in a few years when Bard and you know other llm capabilities are maybe on the same playing field and then Bard has YouTube on top of that that's an insane Advantage first of all is it even possible to gatekeep YouTube transcripts and if so how are you currently think think about a decision like this from a competition perspective versus a Humanity access to information perspective I think it's tempting to try to prognosticate where we're going to be in in five years time and the reality is no one knows exactly where we're going to be in a year's time if you told me a year ago that we'd be where we are today with these models being able to bring ideas to life in the way that they are I I would have thought it would take three years to your question specifically around YouTube and and frankly other products that we um have worked on bringing in to uh Bard in the form of extensions the best answer I can give is we're approaching this as a step-by-step experiment to understand how can this be most helpful for people and everything we do at Google is rooted in three respects that we talk about respect the user respect the opportunity and respect each other and when it comes to respecting the user that's the experimentation piece how can we make this technology the most helpful for you as we're exploring its capabilities to do things with you but on the respect the opportunity part we have to acknowledge everything we do at Google is only possible because we have a healthy and open ecosystem of creators of people that make things and so when we think about solving the problems that could be forthcoming such as the ones that you mentioned we take it from an approach of hey well first let's understand how people are trying to use this technology how we can make it most helpful and how we can make it so that everyone in the ecosystem is able to see the benefits of these things and it doesn't create sort of a lopsided or or one-sided environment H okay doubling down on the potential of Bard and YouTube's relationship ship let's talk about the big updates that were announced last week regarding this initial integration users are now able to engage more deeply with YouTube videos whether that be prompting the extraction of information creating a summary and so on from a technical perspective how is Bart integrated with YouTube to understand these videos is it just processing the transcripts or is it also processing other audio and visual elements with within the videos yeah so B has the ability right now uh to take image inputs and text inputs uh we don't do we don't do video inputs though that's an exciting field of research that's taking place right now um so really uh as you're looking to understand the interaction with YouTube videos in Bard we're trying to understand moments in the video where um something may have happened uh that you want to gain deeper insight into let's say you're watching a lecture um from an MIT series and you wanted to get into that specific example where they talked about uh macroeconomics and like the price of apples we can help find uh we can help you find that and also help reason about some of those things how you might want to create a potential study guide as you go through that and so we're trying to find uh more of these ways to make new access into videos more helpful for people my visceral reaction is that this is amazing for consumers and I think for pretty obvious reasons but for creators I think there's more so this elephant in the room I'm someone who researches a lot for my work I'm watching a ton of videos and I remember when YouTube introduced the ability to access transcripts that was a big deal when YouTube introduced chapters on videos that was a big deal because time is money and sitting through a video can be a lot of time so anything that can help that but now thinking about this integration of Bard and YouTube it's like oh my gosh I'm going to be utilizing this all the time but it creates this entirely different form of Engagement with videos and that's a big deal for creators because right now how does YouTube know to algorithmically push a video more there are a lot of factors but watch time is the biggest so if I'm instead going to a video for a few seconds just to grab the link and then hop over to Bard again that's an entirely different form of Engagement even though arguably it's a more notable form of Engagement because I'm literally having a conversation with the content of their video I'm literally having a conversation with their research the information they curated like all the time that they put into this video recording editing so on I'm having a conversation with their finished work and depending on the questions I'm asking you know like if I'm asking for a general overview maybe that's weighted less than me asking them for an extensive summary that could be more like yeah sitting through the video in full um but yeah it's a extremely notable form of Engagement as you guys pitched it it's a deep form of Engagement so how are you making sure that this relationship between Bard and YouTube is fair for creators yeah so I think it's a fair question and I spend my time focus on Bard and uh of course I represent uh Google uh many colleagues at YouTube are focused on ensuring the way that we measure Eng engagement continues to strike that balance between those principles that we that I mentioned earlier respect the opportunity respect the user respect each other and so nothing changes in that regard and there have been many format changes over time that focus on engagement and so we have a track record of ensuring that as new ways to consume content come in we're appropriately understanding how that changes and shifts and a as an individual one thing I I would note of why I care deeply about this is I actually spent a large portion of my career working directly with creators I helped launch a company uh named United Masters uh that is a company that's dedicated to helping artists maximize their full potential it's effectively record label in your pocket and understanding how critical these platforms are to creating forms of art forms of Education forms of information is so critical and so when I look at the opportunities that we have with Bard this becomes potentially a new canvas now I say potentially because again we've been out for eight months there's so many things that we still have to learn but when I think about a tool that's a creative collabor op Ator it doesn't only help you consume information in new ways it helps you create information in new ways and I'm really excited to see even just a couple days in how people are already tuning to using Bard and YouTube to get deeper understanding on some complex topics and using that to apply uh apply their information in new ways yeah I have no doubt that your teams at Google and YouTube are going to figure it out and probably in really interesting ways I mean Google YouTube we're at the Forefront of the Creator economy in a lot of ways when it comes to AdSense and paying creators for posting on the platform you guys have had that for over a decade and still a lot of platforms have not been able to find a way to compensate creators like that um it's just all really interesting and I think this B and YouTube integration it's just such a useful use case that once it catches wind I think it's going to be this crazy Domino Snowball Effect so I just think it's a conversation that might need to be had sooner rather than later but something that's also interesting is like could this cause a Resurgence of text video has been at the Forefront of culture the past few years but I've always thought that like you text is just so useful in terms of yeah time efficiency being able to sift through information easier it's like could that happen I know llms and conversational AI are going to to your point integrate more image and video it's still like multimedia is the thing but I think text has kind of taken a backseat a bit the past few years but it's like could that happen that's part of the fun of all this too is we have access to new tools that we haven't had before it's like you know when the first wheel was created people didn't have cars but we got there over time and I think we're getting a new tool in our toolkit it's not here to replace things or that's an easy that's an easy thing to fall into when you see something new oh this is the X killer but the thing that we're starting to realize like I even go back eight months where people are saying oh this is the new search for Google this is the new this this is the new that and it's very clear especially seeing the way that people use Bard it's not a Bard or search it's a Bard and search like people are doing things that we've never seen search queries do like there's software developers that are out there that are using it to debug code and then you have creative people that are out there in the world of advertising agencies helping them think through headlines for uh for commercials that they're creating like this possibility generation is remarkable and so when we look at like what's ahead for us the thing that I think is the most critical for us to continue to anchor on is the opportunity is something that is is at the core of what we're we're trying to deliver and it's not just get billions of people to use bard of course we want to make it as helpful as possible it's continue to promote the ecosystem that we've been working so closely with for so many years that's a good point instead of my language of this possible shift from video back to text to some degree it's more so this added layer on top of the already existing media ecosystem it's very interesting um but I I want to get back to this conversation of consumers and creators in relation to the bar YouTube integration like I said earlier there are so many Pros that come to mind when it comes to the consumer but I was trying to brainstorm all the ones for creators and one that I immediately brainstormed I joke around with my friends all the time is I always wish I could delegate the need to keep up with the public sentiment so aka the comment sections because there's a lot of thoughtful and valuable feedback in there not even just feedback just little notes I propose a lot of questions in my videos I love to see people's ideas but as I sift through trying to see those I also come across the things that are just downright cruel things that are very ill intended people pointing out insecurities that I've literally never thought of before it's like just things I don't need to read right so I ran to Bard I was like oh our comment section is integrated I was messing around doesn't seem to be the case but yeah it would be so cool to be like what's the general sentiment in the comment sections if there's some brutal feedback can you give me the feedback in a more empathetic way you know things like that I think those use cases could be so good for creators and are such prominent problems that across the board you hear from people but having worked with creators yourself what are other possibilities when you think about the bar YouTube and create a relationship this is one of so many things that you're flagging and we need to experiment with we need to continue to try to find how we maximize this helpfulness and it's part of why well a we've shown every update that we do we have an updates page on Bard where you can see not just here's what we did here's why we did it and we're inviting that feedback and so just even a conversation like this of getting that hey here's something that we'd like to see here's something that would be really helpful um is a good step b in a broader context when we think about what's going to come next to Bard the thing that we're trying to do is balance between both what's the feedback that we're getting and also there are developments in the technology that are somewhat unexpected that you then try to figure out how to make it most helpful so like when we started bard eight months ago we weren't really focused on a language model doing math like language and math seem relatively incompatible from the beginning but we knew that these language models were good at writing code and so a couple of weeks into it talk about you know people sometimes not being the kindest that's fine uh but you know people started putting in like one plus one and Bard was responding with three and they were uh not most politely saying hahaha silly language model doesn't know what one plus one and of course like over the course of training language like how many things have you seen like 1 plus one equals three because it's the sum you know the sum is greater than Parts whatever but then we have these like enterprising members of our team that are like well what if you just ask write ask Bard to write the code to solve that problem and then execute the problem and then give you the answer and then like bam all of a sudden Bard can do math and like we figure that out in two to three weeks time and so we are balancing it between these things of like people are using it they're giving us their feedback but then there are these things like hey have we tried using this technology in a new and novel way and so we're just constantly building between those things and as we find those as we get the feedback and as we find these different discoveries we post them transparently on the updates page and sometimes we get a lot of positive feedback sometimes it's a little bit more muted and it's part of the learning process there's like so many possible Pathways it's I don't know too much to think about for me on X Twitter whatever you want to call it I've brought up some similar thoughts as I'm bringing up today and two replies really caught my eye they're very similar but they weren't in conversation with one another one person said how do you think this will change what creators make and the other person said in this case we should then see a trend back to sub 10-minute videos videos with condensed high quality information in least time should be most highly rewarded there's this ongoing conversation about a YouTube meta which basically refers to the general energy cultivated on the platform or the general way content is going I don't really like the term because I think it demeans the wide range of content on YouTube personally I'm not watching videos with like 10 million plus views really most of the videos I watch are definitely sub 1 million views even like yeah sub 50k sub 10K so I don't see the YouTube meta a lot in my personal consumption but I also can't argue that someone like Mr Beast hasn't had Rippling effects on the platform and people people often refer to him as the YouTube meta of recent years so when you think about Bard conversational AI llms playing a more prominent role in our lives in the years to come do you think the YouTube meta is going to mold to that and if so what type of content what type of media do you see emerging at the Forefront so as somebody that's worked with uh creators and uh in the music world for a long time one thing I was always fascinated by was how art adapts to the medium it's in and so when the first Short play records came out on vinyl they had a maximum length of roughly 3 minutes and 30 seconds and at the time most popular music that was stemming from a lot of Explorations in in jazz were 8 n 10 minute songs and the modern pop song that's three and a half minutes long that's still the rough average of a pop song goes back to used to be able to distribute music in new ways on these tiny Short play records and the and the medium adapted and then a couple of years ago you start getting into the world of playlists in Spotify and you know you had like the XXX andion uh tracks that were like a minute and 45 seconds and people started to realize like oh wait I get more listen counts whenever I make shorter music and so people like you had this massive flurry of people making songs that basically had two verses instead of three because they were able to they were able to uh get more uh get more streams at the time thankfully uh We've reverted back to having three verses because I think that makes a better song but this is kind of like a natural evolution of how creativity matches to the media like how how long did we have horizontal video then all of a sudden vertical video starts to come in and you start to see things like YouTube shorts and reals and and Tik Tok of course it doesn't mean that horizontal form video like the one that we're recording right now that's going to be on YouTube like it doesn't change the the format it just means that you adapt and however you might adapt this for some of those vertical forms is be different than what you do for horizontal so it's a long way of saying I think art has an amazing ability to adapt to to Transformations yeah I really got to think about that because something is undoubtedly going to come out of this interaction with media it could be something completely out of left field it could be something that's on the cusp right now we're seeing hints of and we won't really know until it really happens and then we're more so reflecting on it I don't know I can't think in this moment but you mentioned earlier how your team has a barred up updates web page it's really great I used it to research for this interview I prefer it to open ai's individual blog posts because it's just this yeah single page where you lay everything out it's really easily consumable in terms of incorporating Google's broader ecosystem these really stood out to me in May the ability to export B's outputs to docs and Gmail images from Google search brought into outputs when applicable in June the ability to export any tables that bar generates into sheets in July Google Lens integration into Bard so the ability for a user to use image in their inputs and not just text and aside from YouTube most recently in September and October bar being able to integrate even further with drive and Gmail and being able to summarize and answer questions across your personal content as well as retrieving information from Google Maps hotel and flights so your team is shipping at a pretty rapid rate what's the Northstar Vision to make it feel like Bard really has a grasp on user's entire Google ecosystem experience yeah there's there's a Northstar for Bard overall in the experiment phase that we're in which is understand how to help people bring their ideas their curiosity and their needs in the form of productivity to life and so that North Star is one that we're going to continue to move toward like bringing an idea to life is this amazing capability of the technology and sometimes that requires some controllability around hey I wanted to be much more refined and I want to make sure that I can double check anything that it shares with me because I need very accurate information and so we launched something like double check responses that we did a couple of weeks ago which you can go through a creative response and see what's content from around the internet that agrees with this and what's content that maybe disagrees with it and of course that's not the end state that we want to get to we want to get to a point where you can consistently uh control when you want that style of an experience and then sometimes making stuff up is the way to bring an idea to life when you're thinking about a new project that you want to do when you're thinking about uh know a a home project that you're trying to like bring to life that maybe you haven't done before like you're trying to create some sort of new creative uh art project with your kid like that controlability I think is going to be an interesting lever and what you'll hopefully see through these updates here is we're going to be trying a lot of things to help you bring your ideas to life they're not always going to work because uh the only way that you find it out is to give people the access but we do it within these parameters of keeping it responsible make sure that it doesn't do things like uh drive you toward illegal activity or or do harmful things that's the core parameters with which we're doing it but we want to be out there and we want to give people a reason to try new things and I'm just amazed at the sorts of ideas that that can come to life when you use this thing you shared this Tweet back in October saying B collaborates and does things with you assistant delegates and does things for you so to clarify for viewers as you know Google B is a product and then separately Google assistant is a product in case you've never utilized it before I feel like Google tends to have this issue because the company is so large and so many things are going on at once where products features of very similar nature get shipped there was this one tweet that cracked me up it was like Google Duo is being merged into Google meet formerly known as Hangouts meet which is not to be confused with Google Chat which is a separate app previously known as Hangouts chat which was replaced by Google talk go+ messenger and Google+ Hangouts I was like that that that sums it up a lot of the times I feel like um but there's already this collaboration between Bard and assistant and when I think of what I want my relationship with an llm to be like or maybe like instead the better way to put it is my singular AI sidekick across my digital experience when I think about what I want that to be it does seem to be the combination of those two products offerings so do you think in the future I know future speculation I'm sorry that they're going to combine and it be just B it be just assistant so one of the names is killed but again their use cases integrate I think in the way that you propose it it might be too narrow or limiting in terms of what a language model can do as as we look at where we are eight months into having language models in the hands of users the things that we're seeing pretty consistently are help me bring this idea to life and it happens in different places so to your point we've been exploring ways that uh bar that Bard can help understand your email through our Gmail extension and then there's also the help me write in the form of Gmail as we're going through this exploration process the part of it is speed of insight how quickly can you get something and understand it as we build this as we build a deeper understanding of how these interaction models work together it's starting to emerge how people are thinking of using the technology in a way that is conversational that they want uh they want elements of consistency in some parts they want dedicated isolated uh use in others and so again hard to speculate on exactly what'll happen in the future but uh it's coming from a point of we just need to keep listening and understanding how people are internalizing this because it's not just about getting technology in people's hands it's listening to how people talk about it and what like when I start hearing people say things like my Bard helped me do this it's this like really interesting trigger to hear like wait wait wait what your Bard like that like and starting to pull on um try like trying to understand what uh is meant by that is kind of a a fun experiment to continue to to run with yeah I like there being a streamline name for these things to your point everyone has a Bard they call it my Bard because I think it creates this shared collective experience and keeps it human in a way like we all have a Bard because the media landscape you know the world is so fragmented in so many ways today so that kind of collective glue I think is cool and when you get into the territory of naming these things whatever you want making their voices whatever you want making them look like whatever you want that's when the territory gets a little weird right but it's also interesting and I appreciate the Insight I'm sure everyone listening is going to find it all pretty fascinating as well so thank you so much for the time Jack I appreciate you taking the time Jules it was good to see you all right everyone as always thank you so much for watching I think something to keep in mind is just how Wild it is how much both the internet and the media landscape have evolved over the past 25 years and how something like this is just going to further impact that if you have any ideas how let me know cuz I'm going to be thinking about it um again thank you all so much for watching and I'll see you next time ",
      transcript_with_timestamps: [
        {
          duration: 3.12,
          start: 0.0,
          text: "so I'm scrolling through Twitter the",
        },
        {
          duration: 4.719,
          start: 1.12,
          text: "other day and I come across this tweet",
        },
        {
          duration: 5.519,
          start: 3.12,
          text: "from Jack croch saying that Bard AKA",
        },
        {
          duration: 4.88,
          start: 5.839,
          text: "Google's version of open AI chat upbt",
        },
        {
          duration: 4.16,
          start: 8.639,
          text: "can now help with understanding YouTube",
        },
        {
          duration: 3.601,
          start: 10.719,
          text: "videos for example let's say a video",
        },
        {
          duration: 3.4,
          start: 12.799,
          text: "shows how someone makes their special",
        },
        {
          duration: 3.68,
          start: 14.32,
          text: "olive oil cake but you're only curious",
        },
        {
          duration: 5.16,
          start: 16.199,
          text: "about one ingredient which is how many",
        },
        {
          duration: 4.76,
          start: 18.0,
          text: "eggs the recipe requires okay ask Bard",
        },
        {
          duration: 3.76,
          start: 21.359,
          text: "like you would ask any good Baker in",
        },
        {
          duration: 3.839,
          start: 22.76,
          text: "your life get your answer immediately",
        },
        {
          duration: 3.0,
          start: 25.119,
          text: "and then be on your Merry way this",
        },
        {
          duration: 3.76,
          start: 26.599,
          text: "update allows for deeper engagement with",
        },
        {
          duration: 3.801,
          start: 28.119,
          text: "YouTube videos and has the potential to",
        },
        {
          duration: 3.281,
          start: 30.359,
          text: "drastically change how we approach the",
        },
        {
          duration: 3.799,
          start: 31.92,
          text: "platform so I ran to Twitter search bar",
        },
        {
          duration: 3.64,
          start: 33.64,
          text: "and typed in B and YouTube to see if",
        },
        {
          duration: 4.401,
          start: 35.719,
          text: "anyone else was talking about this",
        },
        {
          duration: 4.72,
          start: 37.28,
          text: "because again it's wild and the",
        },
        {
          duration: 4.04,
          start: 40.12,
          text: "conversation was minimal but I did come",
        },
        {
          duration: 4.12,
          start: 42.0,
          text: "across these two examples this person",
        },
        {
          duration: 3.6,
          start: 44.16,
          text: "asked Bard for a specific date mentioned",
        },
        {
          duration: 4.16,
          start: 46.12,
          text: "within a set of videos he was curious",
        },
        {
          duration: 4.08,
          start: 47.76,
          text: "about and Bard answered right away and",
        },
        {
          duration: 3.32,
          start: 50.28,
          text: "this person asked Bard to create bullet",
        },
        {
          duration: 4.0,
          start: 51.84,
          text: "points for the various python elements",
        },
        {
          duration: 4.4,
          start: 53.6,
          text: "discussed in a video python is a coding",
        },
        {
          duration: 3.879,
          start: 55.84,
          text: "language he then immediately exported",
        },
        {
          duration: 3.92,
          start: 58.0,
          text: "those bullet points to Google Docs to",
        },
        {
          duration: 4.0,
          start: 59.719,
          text: "get get to work this is a big deal not",
        },
        {
          duration: 4.04,
          start: 61.92,
          text: "only has YouTube been a catalyst in my",
        },
        {
          duration: 4.241,
          start: 63.719,
          text: "education unfortunately even more so",
        },
        {
          duration: 3.92,
          start: 65.96,
          text: "than my college experience but recently",
        },
        {
          duration: 3.839,
          start: 67.96,
          text: "conversational AI has really clicked for",
        },
        {
          duration: 4.08,
          start: 69.88,
          text: "me in a way that FASTT trcks my daily",
        },
        {
          duration: 5.36,
          start: 71.799,
          text: "thought process and the potential when",
        },
        {
          duration: 5.36,
          start: 73.96,
          text: "it comes to exploration and education",
        },
        {
          duration: 4.761,
          start: 77.159,
          text: "it's substantial so to see how good it",
        },
        {
          duration: 4.56,
          start: 79.32,
          text: "really is I asked B about two videos of",
        },
        {
          duration: 4.96,
          start: 81.92,
          text: "mine first I asked for an overview of",
        },
        {
          duration: 5.8,
          start: 83.88,
          text: "media is changing dot dot dot big time",
        },
        {
          duration: 4.879,
          start: 86.88,
          text: "and the output was actually pretty spot",
        },
        {
          duration: 4.399,
          start: 89.68,
          text: "on I then had a lengthier conversation",
        },
        {
          duration: 4.68,
          start: 91.759,
          text: "about my interview with Taylor Loren the",
        },
        {
          duration: 4.241,
          start: 94.079,
          text: "summary was a bit off when I asked Bard",
        },
        {
          duration: 3.68,
          start: 96.439,
          text: "about all the questions I asked Taylor",
        },
        {
          duration: 4.159,
          start: 98.32,
          text: "the ones it gave were correct but it",
        },
        {
          duration: 3.721,
          start: 100.119,
          text: "left out about like 60% of them I asked",
        },
        {
          duration: 2.96,
          start: 102.479,
          text: "what some funny moments were from the",
        },
        {
          duration: 3.76,
          start: 103.84,
          text: "interview and at this point it started",
        },
        {
          duration: 3.96,
          start: 105.439,
          text: "spelling Taylor's last name wrong as",
        },
        {
          duration: 4.199,
          start: 107.6,
          text: "well as getting who said what a bit",
        },
        {
          duration: 4.68,
          start: 109.399,
          text: "wrong but still it came back with one to",
        },
        {
          duration: 3.64,
          start: 111.799,
          text: "two valid moments and lastly when I",
        },
        {
          duration: 3.0,
          start: 114.079,
          text: "asked Bart about the sentiment in the",
        },
        {
          duration: 4.04,
          start: 115.439,
          text: "comment section as well as for the",
        },
        {
          duration: 4.72,
          start: 117.079,
          text: "video's transcript it just made stuff up",
        },
        {
          duration: 4.28,
          start: 119.479,
          text: "instead of of saying I don't know or I",
        },
        {
          duration: 4.6,
          start: 121.799,
          text: "don't do that so there's work to be done",
        },
        {
          duration: 5.241,
          start: 123.759,
          text: "but again the potential is definitely",
        },
        {
          duration: 4.241,
          start: 126.399,
          text: "there though with that a worry",
        },
        {
          duration: 4.72,
          start: 129.0,
          text: "immediately came to mind if someone",
        },
        {
          duration: 4.679,
          start: 130.64,
          text: "utilizes B and eventually chat gbt Etc",
        },
        {
          duration: 3.799,
          start: 133.72,
          text: "to FastTrack through the information",
        },
        {
          duration: 3.961,
          start: 135.319,
          text: "provided in a YouTube video that's",
        },
        {
          duration: 3.601,
          start: 137.519,
          text: "amazing but there still needs to be some",
        },
        {
          duration: 3.56,
          start: 139.28,
          text: "type of Engagement awarded to the video",
        },
        {
          duration: 3.8,
          start: 141.12,
          text: "within the YouTube algorithm maybe it's",
        },
        {
          duration: 3.84,
          start: 142.84,
          text: "the same way does a like comment or",
        },
        {
          duration: 3.64,
          start: 144.92,
          text: "ideally it varies depending on the",
        },
        {
          duration: 3.8,
          start: 146.68,
          text: "amount of information extracted",
        },
        {
          duration: 4.24,
          start: 148.56,
          text: "regardless this definitely needs to",
        },
        {
          duration: 4.839,
          start: 150.48,
          text: "happen and as this person reiterated",
        },
        {
          duration: 5.0,
          start: 152.8,
          text: "this needs to happen ASAP so I reached",
        },
        {
          duration: 4.2,
          start: 155.319,
          text: "out to Jack whose tweet I originally saw",
        },
        {
          duration: 3.359,
          start: 157.8,
          text: "to have a conversation about Bard he's a",
        },
        {
          duration: 3.201,
          start: 159.519,
          text: "senior director of product management at",
        },
        {
          duration: 4.121,
          start: 161.159,
          text: "Google who's responsible for the",
        },
        {
          duration: 4.56,
          start: 162.72,
          text: "development experience and growth of",
        },
        {
          duration: 3.56,
          start: 165.28,
          text: "Bard globally in today's video we talk",
        },
        {
          duration: 3.56,
          start: 167.28,
          text: "about the trajectory of Bard whether",
        },
        {
          duration: 4.119,
          start: 168.84,
          text: "that be related to YouTube creators or",
        },
        {
          duration: 4.759,
          start: 170.84,
          text: "taking the broader G ecosystem to the",
        },
        {
          duration: 4.681,
          start: 172.959,
          text: "next level because things like Gmail",
        },
        {
          duration: 4.321,
          start: 175.599,
          text: "everything within Drive docs sheets",
        },
        {
          duration: 4.2,
          start: 177.64,
          text: "slides and so many other Google products",
        },
        {
          duration: 4.319,
          start: 179.92,
          text: "s have become such integral parts of our",
        },
        {
          duration: 4.52,
          start: 181.84,
          text: "lives and in the coming years they're",
        },
        {
          duration: 4.201,
          start: 184.239,
          text: "just likely to be more deeply integrated",
        },
        {
          duration: 4.36,
          start: 186.36,
          text: "with Bart also want to provide the most",
        },
        {
          duration: 4.359,
          start: 188.44,
          text: "upto-date information in the interview I",
        },
        {
          duration: 4.12,
          start: 190.72,
          text: "mentioned that Bart is powered by Lambda",
        },
        {
          duration: 5.041,
          start: 192.799,
          text: "similar to how chat GPT is powered by",
        },
        {
          duration: 5.2,
          start: 194.84,
          text: "GPT 3.5 or gbt 4 depending on if you",
        },
        {
          duration: 4.119,
          start: 197.84,
          text: "have a subscription or not but there's",
        },
        {
          duration: 3.4,
          start: 200.04,
          text: "an update on that Bard was originally",
        },
        {
          duration: 3.84,
          start: 201.959,
          text: "powered by Lambda when it was announced",
        },
        {
          duration: 5.519,
          start: 203.44,
          text: "in February but in May that was updated",
        },
        {
          duration: 6.481,
          start: 205.799,
          text: "to Palm 2 and as of literally yesterday",
        },
        {
          duration: 6.441,
          start: 208.959,
          text: "December 6th 2023 B is now powered by",
        },
        {
          duration: 5.8,
          start: 212.28,
          text: "Gemini I didn't get the scoop during the",
        },
        {
          duration: 4.839,
          start: 215.4,
          text: "interview super proud and excited to",
        },
        {
          duration: 4.799,
          start: 218.08,
          text: "announce the launch of the Gemini era a",
        },
        {
          duration: 5.08,
          start: 220.239,
          text: "first step towards a truly Universal AI",
        },
        {
          duration: 4.961,
          start: 222.879,
          text: "model each of the 50 different subject",
        },
        {
          duration: 5.441,
          start: 225.319,
          text: "areas that we tested on um it's as good",
        },
        {
          duration: 5.039,
          start: 227.84,
          text: "as the best expert humans in those areas",
        },
        {
          duration: 4.04,
          start: 230.76,
          text: "I've started making my omelet does it",
        },
        {
          duration: 3.801,
          start: 232.879,
          text: "look ready",
        },
        {
          duration: 4.48,
          start: 234.8,
          text: "[Music]",
        },
        {
          duration: 5.96,
          start: 236.68,
          text: "now it looks like it's almost ready you",
        },
        {
          duration: 6.959,
          start: 239.28,
          text: "can flip B over to cook the other",
        },
        {
          duration: 3.599,
          start: 242.64,
          text: "side why is it not",
        },
        {
          duration: 5.239,
          start: 246.92,
          text: "ready it's not ready because the eggs",
        },
        {
          duration: 6.039,
          start: 249.28,
          text: "are still running who wore it",
        },
        {
          duration: 4.721,
          start: 252.159,
          text: "better the zebra oh I like this the",
        },
        {
          duration: 4.04,
          start: 255.319,
          text: "zebra has been wearing its stripes for",
        },
        {
          duration: 4.52,
          start: 256.88,
          text: "millions of years given the play on",
        },
        {
          duration: 2.751,
          start: 259.359,
          text: "words in these images gets the name of",
        },
        {
          duration: 2.12,
          start: 261.4,
          text: "the",
        },
        {
          duration: 4.77,
          start: 262.11,
          text: "[Music]",
        },
        {
          duration: 5.8,
          start: 263.52,
          text: "movie The Breakfast Club tell me what",
        },
        {
          duration: 4.039,
          start: 266.88,
          text: "you see I see you placing a piece of",
        },
        {
          duration: 4.48,
          start: 269.32,
          text: "paper on the",
        },
        {
          duration: 5.12,
          start: 270.919,
          text: "table I see a squiggly line give me some",
        },
        {
          duration: 4.44,
          start: 273.8,
          text: "ideas for what I could make with this I",
        },
        {
          duration: 3.201,
          start: 276.039,
          text: "see pink and green yarn how about a",
        },
        {
          duration: 3.6,
          start: 278.24,
          text: "dragon",
        },
        {
          duration: 5.239,
          start: 279.24,
          text: "fruit or how about a green cake with a",
        },
        {
          duration: 4.68,
          start: 281.84,
          text: "pink heart with Gemini you could upload",
        },
        {
          duration: 4.601,
          start: 284.479,
          text: "a photo of handwritten answers on a",
        },
        {
          duration: 4.64,
          start: 286.52,
          text: "worksheet not only can Gemini solve",
        },
        {
          duration: 4.52,
          start: 289.08,
          text: "these problems but this is the amazing",
        },
        {
          duration: 4.2,
          start: 291.16,
          text: "part it can read the answers and",
        },
        {
          duration: 4.52,
          start: 293.6,
          text: "understand what was right and what was",
        },
        {
          duration: 4.839,
          start: 295.36,
          text: "wrong here Gemini identifies that the",
        },
        {
          duration: 4.16,
          start: 298.12,
          text: "formula was correct but there was a",
        },
        {
          duration: 3.521,
          start: 300.199,
          text: "mistake in calculating height scientists",
        },
        {
          duration: 3.28,
          start: 302.28,
          text: "need to search among thousands of",
        },
        {
          duration: 4.28,
          start: 303.72,
          text: "scientific papers for key information",
        },
        {
          duration: 4.079,
          start: 305.56,
          text: "and extract them by hand it's a very",
        },
        {
          duration: 4.52,
          start: 308.0,
          text: "common workflow and very timeconsuming",
        },
        {
          duration: 6.12,
          start: 309.639,
          text: "over a lunch break Gemini read 200,000",
        },
        {
          duration: 5.48,
          start: 312.52,
          text: "papers for us filtered it down to 250",
        },
        {
          duration: 5.041,
          start: 315.759,
          text: "and extracted their data I've worked on",
        },
        {
          duration: 5.96,
          start: 318.0,
          text: "AI my whole life because I've always",
        },
        {
          duration: 5.92,
          start: 320.8,
          text: "felt would be the most beneficial and",
        },
        {
          duration: 5.64,
          start: 323.96,
          text: "consequential Technology For Humanity",
        },
        {
          duration: 4.88,
          start: 326.72,
          text: "very rare that you can work on a techn",
        },
        {
          duration: 5.439,
          start: 329.6,
          text: "ol at a foundational level and it",
        },
        {
          duration: 5.36,
          start: 331.6,
          text: "simultaneously can impact all our",
        },
        {
          duration: 5.16,
          start: 335.039,
          text: "products but yeah the model's",
        },
        {
          duration: 5.2,
          start: 336.96,
          text: "capabilities surpass gp4 on basically",
        },
        {
          duration: 4.28,
          start: 340.199,
          text: "every Benchmark it's all super",
        },
        {
          duration: 4.16,
          start: 342.16,
          text: "interesting to think about and let's get",
        },
        {
          duration: 7.781,
          start: 344.479,
          text: "into the",
        },
        {
          duration: 5.94,
          start: 346.32,
          text: "[Music]",
        },
        {
          duration: 4.16,
          start: 352.319,
          text: "conversation before we get into things",
        },
        {
          duration: 3.72,
          start: 354.68,
          text: "I'm back in another turtleneck because",
        },
        {
          duration: 3.401,
          start: 356.479,
          text: "it's just that time of year it's chilly",
        },
        {
          duration: 3.359,
          start: 358.4,
          text: "we're hanging out we're GI and we're",
        },
        {
          duration: 3.68,
          start: 359.88,
          text: "giving and for that reason I'm excited",
        },
        {
          duration: 3.56,
          start: 361.759,
          text: "to be partnering with back Market on",
        },
        {
          duration: 3.639,
          start: 363.56,
          text: "today's video whether it be the monitor",
        },
        {
          duration: 3.72,
          start: 365.319,
          text: "I have right here or the camera lens I'm",
        },
        {
          duration: 3.601,
          start: 367.199,
          text: "currently filming with back Market has",
        },
        {
          duration: 3.481,
          start: 369.039,
          text: "helped me save money and reduce my",
        },
        {
          duration: 3.88,
          start: 370.8,
          text: "contribution to the growing E-Waste",
        },
        {
          duration: 3.88,
          start: 372.52,
          text: "issue what it is is a global Marketplace",
        },
        {
          duration: 3.4,
          start: 374.68,
          text: "for high quality refurbished Tech so",
        },
        {
          duration: 3.519,
          start: 376.4,
          text: "while there are a ton of shiny new toys",
        },
        {
          duration: 3.48,
          start: 378.08,
          text: "coming out that are creating genuinely",
        },
        {
          duration: 3.361,
          start: 379.919,
          text: "new Realms of Technology when it comes",
        },
        {
          duration: 3.6,
          start: 381.56,
          text: "to buying the current Essentials",
        },
        {
          duration: 3.52,
          start: 383.28,
          text: "consider taking the refurbished group",
        },
        {
          duration: 3.72,
          start: 385.16,
          text: "like look here these graphs compare the",
        },
        {
          duration: 5.44,
          start: 386.8,
          text: "environmental impact of new versus",
        },
        {
          duration: 5.439,
          start: 388.88,
          text: "refurbished smartphones tablets laptops",
        },
        {
          duration: 3.88,
          start: 392.24,
          text: "and desktops you could also consider",
        },
        {
          duration: 4.44,
          start: 394.319,
          text: "providing your old devices to their",
        },
        {
          duration: 4.479,
          start: 396.12,
          text: "tradein service it takes 2 minutes aside",
        },
        {
          duration: 3.241,
          start: 398.759,
          text: "from sending the device of course and by",
        },
        {
          duration: 3.32,
          start: 400.599,
          text: "the end of it your device isn't being",
        },
        {
          duration: 3.479,
          start: 402.0,
          text: "wasted you're providing refurbished and",
        },
        {
          duration: 3.84,
          start: 403.919,
          text: "more affordable technology to someone",
        },
        {
          duration: 4.401,
          start: 405.479,
          text: "else and you get compensated for it like",
        },
        {
          duration: 3.88,
          start: 407.759,
          text: "I said earlier it's the holiday season",
        },
        {
          duration: 4.159,
          start: 409.88,
          text: "the back Market always has good deals by",
        },
        {
          duration: 4.56,
          start: 411.639,
          text: "offering up to 70% off year round you",
        },
        {
          duration: 5.0,
          start: 414.039,
          text: "can also receive $15 off your first",
        },
        {
          duration: 4.56,
          start: 416.199,
          text: "order of $250 or more if you sign up for",
        },
        {
          duration: 2.961,
          start: 419.039,
          text: "emails I'm thankful to be working with",
        },
        {
          duration: 3.081,
          start: 420.759,
          text: "them and would love to hear about your",
        },
        {
          duration: 4.12,
          start: 422.0,
          text: "future experience so check out back",
        },
        {
          duration: 4.56,
          start: 423.84,
          text: "Market in the description now let's get",
        },
        {
          duration: 2.28,
          start: 426.12,
          text: "into the",
        },
        {
          duration: 4.201,
          start: 428.879,
          text: "conversation Jack thank you so much for",
        },
        {
          duration: 4.359,
          start: 430.84,
          text: "the time I've been observing Bard ever",
        },
        {
          duration: 3.92,
          start: 433.08,
          text: "since it was announced back in February",
        },
        {
          duration: 3.56,
          start: 435.199,
          text: "and I have so many questions but",
        },
        {
          duration: 3.72,
          start: 437.0,
          text: "especially around last week's updates",
        },
        {
          duration: 3.84,
          start: 438.759,
          text: "and rollouts so I just want to get",
        },
        {
          duration: 4.44,
          start: 440.72,
          text: "started how would you explain what B is",
        },
        {
          duration: 6.841,
          start: 442.599,
          text: "to a fifth grader and where did the name",
        },
        {
          duration: 6.92,
          start: 445.16,
          text: "board come from so imagine you've got a",
        },
        {
          duration: 5.199,
          start: 449.44,
          text: "magic library that you go to that",
        },
        {
          duration: 5.92,
          start: 452.08,
          text: "doesn't only help you",
        },
        {
          duration: 5.761,
          start: 454.639,
          text: "find any book in the world that you",
        },
        {
          duration: 5.12,
          start: 458.0,
          text: "would want to learn from but also helps",
        },
        {
          duration: 6.199,
          start: 460.4,
          text: "you write a book it helps you write the",
        },
        {
          duration: 6.079,
          start: 463.12,
          text: "story of whatever idea or curiosity that",
        },
        {
          duration: 5.04,
          start: 466.599,
          text: "you have in your mind and in the same",
        },
        {
          duration: 4.521,
          start: 469.199,
          text: "way that when we're taught in school you",
        },
        {
          duration: 3.56,
          start: 471.639,
          text: "have to look in more than one place to",
        },
        {
          duration: 4.199,
          start: 473.72,
          text: "write a story especially if you're going",
        },
        {
          duration: 4.4,
          start: 475.199,
          text: "to talk about something that happened",
        },
        {
          duration: 3.161,
          start: 477.919,
          text: "Bard gives you the tools to be be able",
        },
        {
          duration: 3.761,
          start: 479.599,
          text: "to double check those things and find",
        },
        {
          duration: 4.679,
          start: 481.08,
          text: "other sources and so uh it's a little",
        },
        {
          duration: 4.76,
          start: 483.36,
          text: "bit like a magic library that helps you",
        },
        {
          duration: 4.0,
          start: 485.759,
          text: "tell a story which is actually part of",
        },
        {
          duration: 4.68,
          start: 488.12,
          text: "the second question which is why do we",
        },
        {
          duration: 6.521,
          start: 489.759,
          text: "call it Bard bards over time have been",
        },
        {
          duration: 6.2,
          start: 492.8,
          text: "storytellers and story is the first",
        },
        {
          duration: 5.879,
          start: 496.28,
          text: "programming language it's the first way",
        },
        {
          duration: 6.68,
          start: 499.0,
          text: "that we taught abstract Concepts to",
        },
        {
          duration: 7.281,
          start: 502.159,
          text: "build complex uh realities in our world",
        },
        {
          duration: 5.519,
          start: 505.68,
          text: "this notion that words create worlds um",
        },
        {
          duration: 3.959,
          start: 509.44,
          text: "was the spirit behind why we named it",
        },
        {
          duration: 3.96,
          start: 511.199,
          text: "Bard and this magic library that you",
        },
        {
          duration: 3.481,
          start: 513.399,
          text: "have at your disposal okay that",
        },
        {
          duration: 3.721,
          start: 515.159,
          text: "explanation sits well because to be",
        },
        {
          duration: 3.599,
          start: 516.88,
          text: "honest I was very critical of the name",
        },
        {
          duration: 2.92,
          start: 518.88,
          text: "Bard when I first heard it I just",
        },
        {
          duration: 3.24,
          start: 520.479,
          text: "thought it was some weird word I didn't",
        },
        {
          duration: 3.8,
          start: 521.8,
          text: "really know it had a meaning and then a",
        },
        {
          duration: 3.441,
          start: 523.719,
          text: "few weeks or months went by and I came",
        },
        {
          duration: 4.16,
          start: 525.6,
          text: "across something that talked about the",
        },
        {
          duration: 4.56,
          start: 527.16,
          text: "meaning of the word Bard I was like all",
        },
        {
          duration: 3.24,
          start: 529.76,
          text: "right I can maybe come around to it but",
        },
        {
          duration: 4.4,
          start: 531.72,
          text: "I want to get into some important",
        },
        {
          duration: 6.32,
          start: 533.0,
          text: "context for viewers in a way Bard is a",
        },
        {
          duration: 5.92,
          start: 536.12,
          text: "reaction to chat GPT open ai's launch of",
        },
        {
          duration: 4.959,
          start: 539.32,
          text: "this back in November of 2022 I assume",
        },
        {
          duration: 3.799,
          start: 542.04,
          text: "created a lot of pressure and urgency",
        },
        {
          duration: 4.041,
          start: 544.279,
          text: "internally to get something out to the",
        },
        {
          duration: 4.081,
          start: 545.839,
          text: "world simultaneously Google has been",
        },
        {
          duration: 4.6,
          start: 548.32,
          text: "working towards a system with Bart's",
        },
        {
          duration: 5.52,
          start: 549.92,
          text: "capabilities for years at Google IO in",
        },
        {
          duration: 5.2,
          start: 552.92,
          text: "2021 you guys revealed Lambda your",
        },
        {
          duration: 5.72,
          start: 555.44,
          text: "conversational large language model llm",
        },
        {
          duration: 5.36,
          start: 558.12,
          text: "that actually Powers Bard so how are you",
        },
        {
          duration: 3.919,
          start: 561.16,
          text: "looking at the competition between Bard",
        },
        {
          duration: 5.08,
          start: 563.48,
          text: "and chat gbt",
        },
        {
          duration: 7.561,
          start: 565.079,
          text: "today yeah I mean Google's been at",
        },
        {
          duration: 5.68,
          start: 568.56,
          text: "solving one large problem for 25 years",
        },
        {
          duration: 3.24,
          start: 572.64,
          text: "which is organizing the world's",
        },
        {
          duration: 4.159,
          start: 574.24,
          text: "information and making it",
        },
        {
          duration: 5.16,
          start: 575.88,
          text: "universally uh helpful and",
        },
        {
          duration: 4.961,
          start: 578.399,
          text: "accessible and this is just another step",
        },
        {
          duration: 4.64,
          start: 581.04,
          text: "in that direction when we look at where",
        },
        {
          duration: 5.8,
          start: 583.36,
          text: "we are today versus where we were a year",
        },
        {
          duration: 5.599,
          start: 585.68,
          text: "ago yeah a lot has changed and like I I",
        },
        {
          duration: 4.4,
          start: 589.16,
          text: "do want to give credit and admiration",
        },
        {
          duration: 5.281,
          start: 591.279,
          text: "for a lot of the creativity that chat",
        },
        {
          duration: 5.92,
          start: 593.56,
          text: "GPT helped sparked in people's lives but",
        },
        {
          duration: 4.6,
          start: 596.56,
          text: "the reality is the vast major majority",
        },
        {
          duration: 3.84,
          start: 599.48,
          text: "of people in the world still haven't",
        },
        {
          duration: 3.84,
          start: 601.16,
          text: "used this technology and we've been",
        },
        {
          duration: 4.44,
          start: 603.32,
          text: "studying it for years and so when we",
        },
        {
          duration: 4.6,
          start: 605.0,
          text: "bring Bard to people in the world what",
        },
        {
          duration: 3.04,
          start: 607.76,
          text: "we're focused on is answering the",
        },
        {
          duration: 4.359,
          start: 609.6,
          text: "question",
        },
        {
          duration: 5.36,
          start: 610.8,
          text: "of what does it take to get you to get",
        },
        {
          duration: 4.921,
          start: 613.959,
          text: "an idea that's in your mind and bring it",
        },
        {
          duration: 5.32,
          start: 616.16,
          text: "to life and we've seen people doing that",
        },
        {
          duration: 4.92,
          start: 618.88,
          text: "I mean Bard's been out now uh I think",
        },
        {
          duration: 4.68,
          start: 621.48,
          text: "we're we're about to cross uh our",
        },
        {
          duration: 5.0,
          start: 623.8,
          text: "eight-month Mark uh so it hasn't even",
        },
        {
          duration: 4.88,
          start: 626.16,
          text: "been a year and we've seen people coming",
        },
        {
          duration: 3.599,
          start: 628.8,
          text: "from all around the world and over 200",
        },
        {
          duration: 4.799,
          start: 631.04,
          text: "countries and territories around the",
        },
        {
          duration: 4.961,
          start: 632.399,
          text: "world that are using it as a way to",
        },
        {
          duration: 3.8,
          start: 635.839,
          text: "bring an idea to life like one of my",
        },
        {
          duration: 4.76,
          start: 637.36,
          text: "favorite things was uh there was a local",
        },
        {
          duration: 4.801,
          start: 639.639,
          text: "business entrepreneur in uh the middle",
        },
        {
          duration: 4.44,
          start: 642.12,
          text: "of the US that was sharing their story",
        },
        {
          duration: 4.0,
          start: 644.44,
          text: "with us which is they were trying to",
        },
        {
          duration: 4.399,
          start: 646.56,
          text: "open a store in their town and they",
        },
        {
          duration: 4.199,
          start: 648.44,
          text: "never applied for a business loan before",
        },
        {
          duration: 2.961,
          start: 650.959,
          text: "and they started taking screenshots of",
        },
        {
          duration: 4.0,
          start: 652.639,
          text: "their pitch that they're going to take",
        },
        {
          duration: 5.24,
          start: 653.92,
          text: "to their local bank and they said what",
        },
        {
          duration: 4.721,
          start: 656.639,
          text: "are some ways that I can increase my",
        },
        {
          duration: 7.04,
          start: 659.16,
          text: "probability of getting",
        },
        {
          duration: 6.32,
          start: 661.36,
          text: "alone and I like a year ago there was no",
        },
        {
          duration: 3.079,
          start: 666.2,
          text: "technology in the world that could do",
        },
        {
          duration: 4.36,
          start: 667.68,
          text: "that like you just had to like maybe",
        },
        {
          duration: 4.68,
          start: 669.279,
          text: "call up a friend that had an uncle that",
        },
        {
          duration: 4.039,
          start: 672.04,
          text: "had another friend at a bank that might",
        },
        {
          duration: 3.841,
          start: 673.959,
          text: "give you a tip and now it's bringing",
        },
        {
          duration: 4.841,
          start: 676.079,
          text: "this access to people and so when I",
        },
        {
          duration: 6.0,
          start: 677.8,
          text: "think about where we were a year ago",
        },
        {
          duration: 5.359,
          start: 680.92,
          text: "today where we are right now and where",
        },
        {
          duration: 4.08,
          start: 683.8,
          text: "we're going to be moving forward the",
        },
        {
          duration: 3.481,
          start: 686.279,
          text: "thing that's driving us and to your",
        },
        {
          duration: 4.12,
          start: 687.88,
          text: "question how's Google thinking about it",
        },
        {
          duration: 3.68,
          start: 689.76,
          text: "we're obsessing over like what happens",
        },
        {
          duration: 3.72,
          start: 692.0,
          text: "when you have this magic at your",
        },
        {
          duration: 4.8,
          start: 693.44,
          text: "fingertips the ability not just to get",
        },
        {
          duration: 4.679,
          start: 695.72,
          text: "answers but to generate possibilities",
        },
        {
          duration: 5.68,
          start: 698.24,
          text: "that trigger your creativity and your",
        },
        {
          duration: 5.201,
          start: 700.399,
          text: "ideas to come to life it's uh the",
        },
        {
          duration: 4.599,
          start: 703.92,
          text: "competition is really people's",
        },
        {
          duration: 5.28,
          start: 705.6,
          text: "imagination coming to life and that's",
        },
        {
          duration: 4.081,
          start: 708.519,
          text: "what I get personally most excited about",
        },
        {
          duration: 4.12,
          start: 710.88,
          text: "when it comes to Bard I mean it's all",
        },
        {
          duration: 4.28,
          start: 712.6,
          text: "been fascinating to observe and this",
        },
        {
          duration: 4.04,
          start: 715.0,
          text: "tweet from Jason calicis last week",
        },
        {
          duration: 4.36,
          start: 716.88,
          text: "embodied what I think is a massive deal",
        },
        {
          duration: 4.16,
          start: 719.04,
          text: "moving forward he said Google bar is",
        },
        {
          duration: 3.64,
          start: 721.24,
          text: "still clunky with a horrible UI but if",
        },
        {
          duration: 3.6,
          start: 723.2,
          text: "Sundar P chai can keep pushing the heads",
        },
        {
          duration: 3.92,
          start: 724.88,
          text: "of verticals like YouTube to have deep",
        },
        {
          duration: 4.4,
          start: 726.8,
          text: "integration inard it's going to have a",
        },
        {
          duration: 4.32,
          start: 728.8,
          text: "huge advantage over competitors and if",
        },
        {
          duration: 4.759,
          start: 731.2,
          text: "Google blocks other language models from",
        },
        {
          duration: 4.519,
          start: 733.12,
          text: "having access to YouTube it's game on",
        },
        {
          duration: 3.601,
          start: 735.959,
          text: "it's like yeah YouTube is this",
        },
        {
          duration: 4.961,
          start: 737.639,
          text: "Powerhouse and of course gatekeeping it",
        },
        {
          duration: 4.76,
          start: 739.56,
          text: "would cause this insane Advantage it",
        },
        {
          duration: 4.0,
          start: 742.6,
          text: "reminds me of a relationship that's been",
        },
        {
          duration: 6.12,
          start: 744.32,
          text: "in the press a lot lately which is",
        },
        {
          duration: 6.799,
          start: 746.6,
          text: "iMessage versus SMS versus RCS and for",
        },
        {
          duration: 5.88,
          start: 750.44,
          text: "viewers context RCS is basically the",
        },
        {
          duration: 5.281,
          start: 753.399,
          text: "improved version of SMS it allows for",
        },
        {
          duration: 4.8,
          start: 756.32,
          text: "features like red receipts typing",
        },
        {
          duration: 4.56,
          start: 758.68,
          text: "indicators and so on which would make",
        },
        {
          duration: 5.44,
          start: 761.12,
          text: "the relationship between iMessage",
        },
        {
          duration: 6.8,
          start: 763.24,
          text: "iPhones and Androids much more cohesive",
        },
        {
          duration: 7.36,
          start: 766.56,
          text: "and enjoyable but Apple has refused to",
        },
        {
          duration: 5.84,
          start: 770.04,
          text: "update SMS to RCS so basically it's",
        },
        {
          duration: 4.159,
          start: 773.92,
          text: "helped create aside from the blue",
        },
        {
          duration: 4.68,
          start: 775.88,
          text: "bubbles it's helped create that social",
        },
        {
          duration: 4.281,
          start: 778.079,
          text: "ostracization over the past few years",
        },
        {
          duration: 3.92,
          start: 780.56,
          text: "which has really worked in the US",
        },
        {
          duration: 3.32,
          start: 782.36,
          text: "amongst the younger Generations so yeah",
        },
        {
          duration: 3.479,
          start: 784.48,
          text: "again when I think about the",
        },
        {
          duration: 5.2,
          start: 785.68,
          text: "relationship being able to gatekeep",
        },
        {
          duration: 5.521,
          start: 787.959,
          text: "YouTube's data specifically to Bard and",
        },
        {
          duration: 4.68,
          start: 790.88,
          text: "in a few years when Bard and you know",
        },
        {
          duration: 4.159,
          start: 793.48,
          text: "other llm capabilities are maybe on the",
        },
        {
          duration: 5.04,
          start: 795.56,
          text: "same playing field and then Bard has",
        },
        {
          duration: 5.521,
          start: 797.639,
          text: "YouTube on top of that that's an insane",
        },
        {
          duration: 5.72,
          start: 800.6,
          text: "Advantage first of all is it even",
        },
        {
          duration: 5.64,
          start: 803.16,
          text: "possible to gatekeep YouTube transcripts",
        },
        {
          duration: 5.4,
          start: 806.32,
          text: "and if so how are you currently think",
        },
        {
          duration: 5.599,
          start: 808.8,
          text: "think about a decision like this from a",
        },
        {
          duration: 5.0,
          start: 811.72,
          text: "competition perspective versus a",
        },
        {
          duration: 6.161,
          start: 814.399,
          text: "Humanity access to information",
        },
        {
          duration: 6.6,
          start: 816.72,
          text: "perspective I think it's tempting to try",
        },
        {
          duration: 6.0,
          start: 820.56,
          text: "to prognosticate where we're going to be",
        },
        {
          duration: 4.8,
          start: 823.32,
          text: "in in five years time and the reality is",
        },
        {
          duration: 3.36,
          start: 826.56,
          text: "no one knows exactly where we're going",
        },
        {
          duration: 4.92,
          start: 828.12,
          text: "to be in a year's time if you told me a",
        },
        {
          duration: 4.719,
          start: 829.92,
          text: "year ago that we'd be where we are today",
        },
        {
          duration: 3.44,
          start: 833.04,
          text: "with these models being able to bring",
        },
        {
          duration: 3.401,
          start: 834.639,
          text: "ideas to life in the way that they are I",
        },
        {
          duration: 4.56,
          start: 836.48,
          text: "I would have thought it would take three",
        },
        {
          duration: 5.0,
          start: 838.04,
          text: "years to your question specifically",
        },
        {
          duration: 4.919,
          start: 841.04,
          text: "around YouTube and and frankly other",
        },
        {
          duration: 7.84,
          start: 843.04,
          text: "products that we um have worked on",
        },
        {
          duration: 7.8,
          start: 845.959,
          text: "bringing in to uh Bard in the form of",
        },
        {
          duration: 5.68,
          start: 850.88,
          text: "extensions the best answer I can give is",
        },
        {
          duration: 5.961,
          start: 853.759,
          text: "we're approaching this as a step-by-step",
        },
        {
          duration: 4.92,
          start: 856.56,
          text: "experiment to understand how can this be",
        },
        {
          duration: 4.44,
          start: 859.72,
          text: "most helpful for",
        },
        {
          duration: 5.0,
          start: 861.48,
          text: "people and everything we do at Google is",
        },
        {
          duration: 4.84,
          start: 864.16,
          text: "rooted in three respects that we talk",
        },
        {
          duration: 5.44,
          start: 866.48,
          text: "about respect the user respect the",
        },
        {
          duration: 6.04,
          start: 869.0,
          text: "opportunity and respect each other and",
        },
        {
          duration: 5.0,
          start: 871.92,
          text: "when it comes to respecting the user",
        },
        {
          duration: 3.599,
          start: 875.04,
          text: "that's the experimentation piece how can",
        },
        {
          duration: 3.719,
          start: 876.92,
          text: "we make this technology the most helpful",
        },
        {
          duration: 4.041,
          start: 878.639,
          text: "for you as we're exploring its",
        },
        {
          duration: 4.681,
          start: 880.639,
          text: "capabilities to do things with you but",
        },
        {
          duration: 4.48,
          start: 882.68,
          text: "on the respect the opportunity part we",
        },
        {
          duration: 4.92,
          start: 885.32,
          text: "have to acknowledge everything we do at",
        },
        {
          duration: 6.799,
          start: 887.16,
          text: "Google is only possible because we have",
        },
        {
          duration: 6.56,
          start: 890.24,
          text: "a healthy and open ecosystem of creators",
        },
        {
          duration: 7.68,
          start: 893.959,
          text: "of people that make things and so when",
        },
        {
          duration: 6.88,
          start: 896.8,
          text: "we think about solving the problems that",
        },
        {
          duration: 4.601,
          start: 901.639,
          text: "could be forthcoming such as the ones",
        },
        {
          duration: 4.92,
          start: 903.68,
          text: "that you mentioned we take it from an",
        },
        {
          duration: 3.599,
          start: 906.24,
          text: "approach of hey well first let's",
        },
        {
          duration: 2.72,
          start: 908.6,
          text: "understand how people are trying to use",
        },
        {
          duration: 4.36,
          start: 909.839,
          text: "this technology how we can make it most",
        },
        {
          duration: 6.319,
          start: 911.32,
          text: "helpful and how we can make it so that",
        },
        {
          duration: 4.76,
          start: 914.199,
          text: "everyone in the ecosystem is able to see",
        },
        {
          duration: 5.0,
          start: 917.639,
          text: "the benefits of these things and it",
        },
        {
          duration: 6.841,
          start: 918.959,
          text: "doesn't create sort of a lopsided or or",
        },
        {
          duration: 5.12,
          start: 922.639,
          text: "one-sided environment H okay doubling",
        },
        {
          duration: 3.959,
          start: 925.8,
          text: "down on the potential of Bard and",
        },
        {
          duration: 4.08,
          start: 927.759,
          text: "YouTube's relationship ship let's talk",
        },
        {
          duration: 3.88,
          start: 929.759,
          text: "about the big updates that were",
        },
        {
          duration: 4.841,
          start: 931.839,
          text: "announced last week regarding this",
        },
        {
          duration: 4.601,
          start: 933.639,
          text: "initial integration users are now able",
        },
        {
          duration: 4.0,
          start: 936.68,
          text: "to engage more deeply with YouTube",
        },
        {
          duration: 4.839,
          start: 938.24,
          text: "videos whether that be prompting the",
        },
        {
          duration: 5.56,
          start: 940.68,
          text: "extraction of information creating a",
        },
        {
          duration: 5.44,
          start: 943.079,
          text: "summary and so on from a technical",
        },
        {
          duration: 5.12,
          start: 946.24,
          text: "perspective how is Bart integrated with",
        },
        {
          duration: 5.961,
          start: 948.519,
          text: "YouTube to understand these videos is it",
        },
        {
          duration: 6.599,
          start: 951.36,
          text: "just processing the transcripts or is it",
        },
        {
          duration: 5.96,
          start: 954.48,
          text: "also processing other audio and visual",
        },
        {
          duration: 5.041,
          start: 957.959,
          text: "elements with within the videos yeah so",
        },
        {
          duration: 5.56,
          start: 960.44,
          text: "B has the ability right now uh to take",
        },
        {
          duration: 4.72,
          start: 963.0,
          text: "image inputs and text inputs uh we don't",
        },
        {
          duration: 3.639,
          start: 966.0,
          text: "do we don't do video inputs though",
        },
        {
          duration: 4.039,
          start: 967.72,
          text: "that's an exciting field of research",
        },
        {
          duration: 5.0,
          start: 969.639,
          text: "that's taking place right now um so",
        },
        {
          duration: 5.401,
          start: 971.759,
          text: "really uh as you're looking to",
        },
        {
          duration: 4.64,
          start: 974.639,
          text: "understand the interaction with YouTube",
        },
        {
          duration: 5.08,
          start: 977.16,
          text: "videos in Bard we're trying to",
        },
        {
          duration: 5.0,
          start: 979.279,
          text: "understand moments in the video where um",
        },
        {
          duration: 4.719,
          start: 982.24,
          text: "something may have happened uh that you",
        },
        {
          duration: 6.161,
          start: 984.279,
          text: "want to gain deeper insight into let's",
        },
        {
          duration: 5.641,
          start: 986.959,
          text: "say you're watching a lecture um from an",
        },
        {
          duration: 4.12,
          start: 990.44,
          text: "MIT series and you wanted to get into",
        },
        {
          duration: 5.719,
          start: 992.6,
          text: "that specific example where they talked",
        },
        {
          duration: 7.12,
          start: 994.56,
          text: "about uh macroeconomics and like the",
        },
        {
          duration: 5.121,
          start: 998.319,
          text: "price of apples we can help find uh we",
        },
        {
          duration: 3.24,
          start: 1001.68,
          text: "can help you find that and also help",
        },
        {
          duration: 3.48,
          start: 1003.44,
          text: "reason about some of those things how",
        },
        {
          duration: 3.8,
          start: 1004.92,
          text: "you might want to create a potential",
        },
        {
          duration: 4.96,
          start: 1006.92,
          text: "study guide as you go through that and",
        },
        {
          duration: 7.119,
          start: 1008.72,
          text: "so we're trying to find uh more of these",
        },
        {
          duration: 6.72,
          start: 1011.88,
          text: "ways to make new access into videos more",
        },
        {
          duration: 4.961,
          start: 1015.839,
          text: "helpful for people my visceral reaction",
        },
        {
          duration: 4.76,
          start: 1018.6,
          text: "is that this is amazing for consumers",
        },
        {
          duration: 4.399,
          start: 1020.8,
          text: "and I think for pretty obvious reasons",
        },
        {
          duration: 4.0,
          start: 1023.36,
          text: "but for creators I think there's more so",
        },
        {
          duration: 4.36,
          start: 1025.199,
          text: "this elephant in the room I'm someone",
        },
        {
          duration: 4.559,
          start: 1027.36,
          text: "who researches a lot for my work I'm",
        },
        {
          duration: 4.601,
          start: 1029.559,
          text: "watching a ton of videos and I remember",
        },
        {
          duration: 5.561,
          start: 1031.919,
          text: "when YouTube introduced the ability to",
        },
        {
          duration: 5.399,
          start: 1034.16,
          text: "access transcripts that was a big deal",
        },
        {
          duration: 4.68,
          start: 1037.48,
          text: "when YouTube introduced chapters on",
        },
        {
          duration: 4.681,
          start: 1039.559,
          text: "videos that was a big deal because time",
        },
        {
          duration: 3.879,
          start: 1042.16,
          text: "is money and sitting through a video can",
        },
        {
          duration: 4.6,
          start: 1044.24,
          text: "be a lot of time so anything that can",
        },
        {
          duration: 4.52,
          start: 1046.039,
          text: "help that but now thinking about this",
        },
        {
          duration: 3.64,
          start: 1048.84,
          text: "integration of Bard and YouTube it's",
        },
        {
          duration: 4.161,
          start: 1050.559,
          text: "like oh my gosh I'm going to be",
        },
        {
          duration: 4.04,
          start: 1052.48,
          text: "utilizing this all the time but it",
        },
        {
          duration: 4.319,
          start: 1054.72,
          text: "creates this entirely different form of",
        },
        {
          duration: 4.88,
          start: 1056.52,
          text: "Engagement with videos and that's a big",
        },
        {
          duration: 4.441,
          start: 1059.039,
          text: "deal for creators because right now how",
        },
        {
          duration: 4.24,
          start: 1061.4,
          text: "does YouTube know to algorithmically",
        },
        {
          duration: 5.199,
          start: 1063.48,
          text: "push a video more there are a lot of",
        },
        {
          duration: 4.96,
          start: 1065.64,
          text: "factors but watch time is the biggest so",
        },
        {
          duration: 4.521,
          start: 1068.679,
          text: "if I'm instead going to a video for a",
        },
        {
          duration: 5.16,
          start: 1070.6,
          text: "few seconds just to grab the link and",
        },
        {
          duration: 4.8,
          start: 1073.2,
          text: "then hop over to Bard again that's an",
        },
        {
          duration: 3.48,
          start: 1075.76,
          text: "entirely different form of Engagement",
        },
        {
          duration: 3.559,
          start: 1078.0,
          text: "even though",
        },
        {
          duration: 4.64,
          start: 1079.24,
          text: "arguably it's a more notable form of",
        },
        {
          duration: 4.441,
          start: 1081.559,
          text: "Engagement because I'm literally having",
        },
        {
          duration: 4.279,
          start: 1083.88,
          text: "a conversation with the content of their",
        },
        {
          duration: 4.84,
          start: 1086.0,
          text: "video I'm literally having a",
        },
        {
          duration: 5.52,
          start: 1088.159,
          text: "conversation with their research the",
        },
        {
          duration: 4.44,
          start: 1090.84,
          text: "information they curated like all the",
        },
        {
          duration: 4.12,
          start: 1093.679,
          text: "time that they put into this video",
        },
        {
          duration: 4.759,
          start: 1095.28,
          text: "recording editing so on I'm having a",
        },
        {
          duration: 3.481,
          start: 1097.799,
          text: "conversation with their finished work",
        },
        {
          duration: 3.361,
          start: 1100.039,
          text: "and depending on the questions I'm",
        },
        {
          duration: 4.44,
          start: 1101.28,
          text: "asking you know like if I'm asking for a",
        },
        {
          duration: 5.8,
          start: 1103.4,
          text: "general overview maybe that's weighted",
        },
        {
          duration: 6.48,
          start: 1105.72,
          text: "less than me asking them for",
        },
        {
          duration: 4.92,
          start: 1109.2,
          text: "an extensive summary that could be more",
        },
        {
          duration: 3.68,
          start: 1112.2,
          text: "like yeah sitting through the video in",
        },
        {
          duration: 5.4,
          start: 1114.12,
          text: "full",
        },
        {
          duration: 5.44,
          start: 1115.88,
          text: "um but yeah it's a extremely notable",
        },
        {
          duration: 5.36,
          start: 1119.52,
          text: "form of Engagement as you guys pitched",
        },
        {
          duration: 5.12,
          start: 1121.32,
          text: "it it's a deep form of Engagement so how",
        },
        {
          duration: 4.039,
          start: 1124.88,
          text: "are you making sure that this",
        },
        {
          duration: 5.52,
          start: 1126.44,
          text: "relationship between Bard and YouTube is",
        },
        {
          duration: 5.361,
          start: 1128.919,
          text: "fair for creators yeah so I think it's a",
        },
        {
          duration: 5.52,
          start: 1131.96,
          text: "fair question and I spend my time focus",
        },
        {
          duration: 5.639,
          start: 1134.28,
          text: "on Bard and uh of course I represent uh",
        },
        {
          duration: 4.8,
          start: 1137.48,
          text: "Google uh many colleagues at YouTube are",
        },
        {
          duration: 5.081,
          start: 1139.919,
          text: "focused on ensuring the way that we",
        },
        {
          duration: 4.12,
          start: 1142.28,
          text: "measure Eng engagement continues to",
        },
        {
          duration: 3.919,
          start: 1145.0,
          text: "strike that balance between those",
        },
        {
          duration: 4.92,
          start: 1146.4,
          text: "principles that we that I mentioned",
        },
        {
          duration: 5.161,
          start: 1148.919,
          text: "earlier respect the opportunity respect",
        },
        {
          duration: 5.599,
          start: 1151.32,
          text: "the user respect each other and so",
        },
        {
          duration: 5.52,
          start: 1154.08,
          text: "nothing changes in that regard and there",
        },
        {
          duration: 5.081,
          start: 1156.919,
          text: "have been many format changes over time",
        },
        {
          duration: 7.199,
          start: 1159.6,
          text: "that focus on engagement and so we have",
        },
        {
          duration: 9.4,
          start: 1162.0,
          text: "a track record of ensuring that as new",
        },
        {
          duration: 6.0,
          start: 1166.799,
          text: "ways to consume content come in we're",
        },
        {
          duration: 5.399,
          start: 1171.4,
          text: "appropriately understanding how that",
        },
        {
          duration: 7.081,
          start: 1172.799,
          text: "changes and shifts and a as an",
        },
        {
          duration: 4.921,
          start: 1176.799,
          text: "individual one thing I I would note of",
        },
        {
          duration: 4.52,
          start: 1179.88,
          text: "why I care deeply about this is I",
        },
        {
          duration: 6.12,
          start: 1181.72,
          text: "actually spent a large portion of my",
        },
        {
          duration: 6.08,
          start: 1184.4,
          text: "career working directly with creators I",
        },
        {
          duration: 5.079,
          start: 1187.84,
          text: "helped launch a company uh named United",
        },
        {
          duration: 6.079,
          start: 1190.48,
          text: "Masters uh that is a company that's",
        },
        {
          duration: 5.321,
          start: 1192.919,
          text: "dedicated to helping artists maximize",
        },
        {
          duration: 3.921,
          start: 1196.559,
          text: "their full potential it's effectively",
        },
        {
          duration: 4.24,
          start: 1198.24,
          text: "record label in your pocket and",
        },
        {
          duration: 5.84,
          start: 1200.48,
          text: "understanding how critical these",
        },
        {
          duration: 7.319,
          start: 1202.48,
          text: "platforms are to creating forms of art",
        },
        {
          duration: 6.68,
          start: 1206.32,
          text: "forms of Education forms of information",
        },
        {
          duration: 5.12,
          start: 1209.799,
          text: "is so critical and so when I look at the",
        },
        {
          duration: 4.799,
          start: 1213.0,
          text: "opportunities that we have with",
        },
        {
          duration: 6.361,
          start: 1214.919,
          text: "Bard this becomes potentially a new",
        },
        {
          duration: 5.481,
          start: 1217.799,
          text: "canvas now I say potentially because",
        },
        {
          duration: 3.32,
          start: 1221.28,
          text: "again we've been out for eight months",
        },
        {
          duration: 3.639,
          start: 1223.28,
          text: "there's so many things that we still",
        },
        {
          duration: 4.559,
          start: 1224.6,
          text: "have to learn but when I think about a",
        },
        {
          duration: 4.281,
          start: 1226.919,
          text: "tool that's a creative collabor op Ator",
        },
        {
          duration: 3.481,
          start: 1229.159,
          text: "it doesn't only help you consume",
        },
        {
          duration: 3.8,
          start: 1231.2,
          text: "information in new ways it helps you",
        },
        {
          duration: 4.56,
          start: 1232.64,
          text: "create information in new ways and I'm",
        },
        {
          duration: 5.52,
          start: 1235.0,
          text: "really excited to see even just a couple",
        },
        {
          duration: 7.24,
          start: 1237.2,
          text: "days in how people are already tuning to",
        },
        {
          duration: 5.76,
          start: 1240.52,
          text: "using Bard and YouTube to get deeper",
        },
        {
          duration: 4.599,
          start: 1244.44,
          text: "understanding on some complex topics and",
        },
        {
          duration: 5.08,
          start: 1246.28,
          text: "using that to apply uh apply their",
        },
        {
          duration: 4.321,
          start: 1249.039,
          text: "information in new ways yeah I have no",
        },
        {
          duration: 3.92,
          start: 1251.36,
          text: "doubt that your teams at Google and",
        },
        {
          duration: 4.0,
          start: 1253.36,
          text: "YouTube are going to figure it out and",
        },
        {
          duration: 3.68,
          start: 1255.28,
          text: "probably in really interesting ways I",
        },
        {
          duration: 3.4,
          start: 1257.36,
          text: "mean Google YouTube we're at the",
        },
        {
          duration: 4.52,
          start: 1258.96,
          text: "Forefront of the Creator economy in a",
        },
        {
          duration: 4.039,
          start: 1260.76,
          text: "lot of ways when it comes to AdSense and",
        },
        {
          duration: 3.48,
          start: 1263.48,
          text: "paying creators for posting on the",
        },
        {
          duration: 4.201,
          start: 1264.799,
          text: "platform you guys have had that for over",
        },
        {
          duration: 4.24,
          start: 1266.96,
          text: "a decade and still a lot of platforms",
        },
        {
          duration: 5.6,
          start: 1269.0,
          text: "have not been able to find a way to",
        },
        {
          duration: 5.2,
          start: 1271.2,
          text: "compensate creators like that um it's",
        },
        {
          duration: 4.439,
          start: 1274.6,
          text: "just all really interesting and I",
        },
        {
          duration: 5.96,
          start: 1276.4,
          text: "think this B and YouTube integration",
        },
        {
          duration: 4.88,
          start: 1279.039,
          text: "it's just such a useful use case that",
        },
        {
          duration: 4.48,
          start: 1282.36,
          text: "once it catches wind I think it's going",
        },
        {
          duration: 5.081,
          start: 1283.919,
          text: "to be this crazy Domino Snowball Effect",
        },
        {
          duration: 4.6,
          start: 1286.84,
          text: "so I just think it's a conversation that",
        },
        {
          duration: 4.76,
          start: 1289.0,
          text: "might need to be had sooner rather than",
        },
        {
          duration: 4.32,
          start: 1291.44,
          text: "later but something that's also",
        },
        {
          duration: 4.96,
          start: 1293.76,
          text: "interesting is like could this cause a",
        },
        {
          duration: 4.84,
          start: 1295.76,
          text: "Resurgence of text video has been at the",
        },
        {
          duration: 4.839,
          start: 1298.72,
          text: "Forefront of culture the past few years",
        },
        {
          duration: 5.24,
          start: 1300.6,
          text: "but I've always thought that like you",
        },
        {
          duration: 4.72,
          start: 1303.559,
          text: "text is just so useful in terms of yeah",
        },
        {
          duration: 4.0,
          start: 1305.84,
          text: "time efficiency being able to sift",
        },
        {
          duration: 4.961,
          start: 1308.279,
          text: "through information",
        },
        {
          duration: 5.52,
          start: 1309.84,
          text: "easier it's like could that happen I",
        },
        {
          duration: 3.96,
          start: 1313.24,
          text: "know llms and conversational AI are",
        },
        {
          duration: 3.36,
          start: 1315.36,
          text: "going to to your point integrate more",
        },
        {
          duration: 4.719,
          start: 1317.2,
          text: "image and video",
        },
        {
          duration: 5.28,
          start: 1318.72,
          text: "it's still like multimedia is the thing",
        },
        {
          duration: 3.601,
          start: 1321.919,
          text: "but I think text has kind of taken a",
        },
        {
          duration: 3.72,
          start: 1324.0,
          text: "backseat a bit the past few years but",
        },
        {
          duration: 5.08,
          start: 1325.52,
          text: "it's like could that happen that's part",
        },
        {
          duration: 4.839,
          start: 1327.72,
          text: "of the fun of all this too is we have",
        },
        {
          duration: 4.48,
          start: 1330.6,
          text: "access to new tools that we haven't had",
        },
        {
          duration: 4.921,
          start: 1332.559,
          text: "before it's like you know when the first",
        },
        {
          duration: 6.0,
          start: 1335.08,
          text: "wheel was created people didn't have",
        },
        {
          duration: 6.28,
          start: 1337.48,
          text: "cars but we got there over time and I",
        },
        {
          duration: 7.68,
          start: 1341.08,
          text: "think we're getting a new tool in our",
        },
        {
          duration: 6.799,
          start: 1343.76,
          text: "toolkit it's not here to replace things",
        },
        {
          duration: 3.72,
          start: 1348.76,
          text: "or that's an easy that's an easy thing",
        },
        {
          duration: 5.201,
          start: 1350.559,
          text: "to fall into when you see something new",
        },
        {
          duration: 4.64,
          start: 1352.48,
          text: "oh this is the X killer but the thing",
        },
        {
          duration: 4.039,
          start: 1355.76,
          text: "that we're starting to realize like I",
        },
        {
          duration: 5.12,
          start: 1357.12,
          text: "even go back eight months where people",
        },
        {
          duration: 3.921,
          start: 1359.799,
          text: "are saying oh this is the new search for",
        },
        {
          duration: 4.2,
          start: 1362.24,
          text: "Google this is the new this this is the",
        },
        {
          duration: 5.76,
          start: 1363.72,
          text: "new that and it's very clear especially",
        },
        {
          duration: 6.0,
          start: 1366.44,
          text: "seeing the way that people use Bard it's",
        },
        {
          duration: 5.319,
          start: 1369.48,
          text: "not a Bard or search it's a Bard and",
        },
        {
          duration: 6.52,
          start: 1372.44,
          text: "search like people are doing things that",
        },
        {
          duration: 5.601,
          start: 1374.799,
          text: "we've never seen search queries do",
        },
        {
          duration: 3.44,
          start: 1378.96,
          text: "like there's software developers that",
        },
        {
          duration: 5.68,
          start: 1380.4,
          text: "are out there that are using it to debug",
        },
        {
          duration: 4.8,
          start: 1382.4,
          text: "code and then you have creative people",
        },
        {
          duration: 3.36,
          start: 1386.08,
          text: "that are out there in the world of",
        },
        {
          duration: 5.479,
          start: 1387.2,
          text: "advertising agencies helping them think",
        },
        {
          duration: 5.0,
          start: 1389.44,
          text: "through headlines for uh for commercials",
        },
        {
          duration: 5.48,
          start: 1392.679,
          text: "that they're creating like this",
        },
        {
          duration: 5.719,
          start: 1394.44,
          text: "possibility generation is remarkable and",
        },
        {
          duration: 4.161,
          start: 1398.159,
          text: "so when we look at like what's ahead for",
        },
        {
          duration: 4.361,
          start: 1400.159,
          text: "us the thing that I think is the most",
        },
        {
          duration: 6.12,
          start: 1402.32,
          text: "critical for us to continue to anchor on",
        },
        {
          duration: 6.92,
          start: 1404.52,
          text: "is the opportunity is something that is",
        },
        {
          duration: 6.56,
          start: 1408.44,
          text: "is at the core of what we're we're",
        },
        {
          duration: 5.96,
          start: 1411.44,
          text: "trying to deliver and it's not just get",
        },
        {
          duration: 3.72,
          start: 1415.0,
          text: "billions of people to use bard of course",
        },
        {
          duration: 4.0,
          start: 1417.4,
          text: "we want to make it as helpful as",
        },
        {
          duration: 4.8,
          start: 1418.72,
          text: "possible it's continue to promote the",
        },
        {
          duration: 4.36,
          start: 1421.4,
          text: "ecosystem that we've been working so",
        },
        {
          duration: 3.88,
          start: 1423.52,
          text: "closely with for so many years that's a",
        },
        {
          duration: 4.039,
          start: 1425.76,
          text: "good point instead of my language of",
        },
        {
          duration: 4.759,
          start: 1427.4,
          text: "this possible shift from video back to",
        },
        {
          duration: 3.961,
          start: 1429.799,
          text: "text to some degree it's more so this",
        },
        {
          duration: 4.201,
          start: 1432.159,
          text: "added layer on top of the already",
        },
        {
          duration: 4.64,
          start: 1433.76,
          text: "existing media ecosystem it's very",
        },
        {
          duration: 3.96,
          start: 1436.36,
          text: "interesting um but I I want to get back",
        },
        {
          duration: 4.6,
          start: 1438.4,
          text: "to this conversation of consumers and",
        },
        {
          duration: 4.959,
          start: 1440.32,
          text: "creators in relation to the bar YouTube",
        },
        {
          duration: 3.919,
          start: 1443.0,
          text: "integration like I said earlier there",
        },
        {
          duration: 3.361,
          start: 1445.279,
          text: "are so many Pros that come to mind when",
        },
        {
          duration: 4.36,
          start: 1446.919,
          text: "it comes to the consumer but I was",
        },
        {
          duration: 5.44,
          start: 1448.64,
          text: "trying to brainstorm all the ones for",
        },
        {
          duration: 4.64,
          start: 1451.279,
          text: "creators and one that I immediately",
        },
        {
          duration: 4.68,
          start: 1454.08,
          text: "brainstormed I joke around with my",
        },
        {
          duration: 5.201,
          start: 1455.919,
          text: "friends all the time is I always wish I",
        },
        {
          duration: 4.919,
          start: 1458.76,
          text: "could delegate the need to keep up with",
        },
        {
          duration: 5.08,
          start: 1461.12,
          text: "the public sentiment so aka the comment",
        },
        {
          duration: 4.24,
          start: 1463.679,
          text: "sections because there's a lot of",
        },
        {
          duration: 3.24,
          start: 1466.2,
          text: "thoughtful and valuable feedback in",
        },
        {
          duration: 3.601,
          start: 1467.919,
          text: "there not even just feedback just little",
        },
        {
          duration: 5.44,
          start: 1469.44,
          text: "notes I propose a lot of questions in my",
        },
        {
          duration: 6.759,
          start: 1471.52,
          text: "videos I love to see people's ideas but",
        },
        {
          duration: 4.919,
          start: 1474.88,
          text: "as I sift through trying to see those I",
        },
        {
          duration: 4.28,
          start: 1478.279,
          text: "also come across the things that are",
        },
        {
          duration: 5.0,
          start: 1479.799,
          text: "just downright cruel things that are",
        },
        {
          duration: 4.321,
          start: 1482.559,
          text: "very ill intended people pointing out",
        },
        {
          duration: 3.641,
          start: 1484.799,
          text: "insecurities that I've literally never",
        },
        {
          duration: 4.64,
          start: 1486.88,
          text: "thought of before it's like just things",
        },
        {
          duration: 5.52,
          start: 1488.44,
          text: "I don't need to read right so I ran to",
        },
        {
          duration: 4.72,
          start: 1491.52,
          text: "Bard I was like oh our comment section",
        },
        {
          duration: 4.16,
          start: 1493.96,
          text: "is integrated I was messing around",
        },
        {
          duration: 4.0,
          start: 1496.24,
          text: "doesn't seem to be the case but yeah it",
        },
        {
          duration: 3.679,
          start: 1498.12,
          text: "would be so cool to be like what's the",
        },
        {
          duration: 4.6,
          start: 1500.24,
          text: "general sentiment in the comment",
        },
        {
          duration: 4.88,
          start: 1501.799,
          text: "sections if there's some brutal feedback",
        },
        {
          duration: 3.959,
          start: 1504.84,
          text: "can you give me the feedback in a more",
        },
        {
          duration: 4.48,
          start: 1506.679,
          text: "empathetic way you know things like that",
        },
        {
          duration: 5.12,
          start: 1508.799,
          text: "I think those use cases could be so good",
        },
        {
          duration: 4.561,
          start: 1511.159,
          text: "for creators and are such prominent",
        },
        {
          duration: 4.521,
          start: 1513.919,
          text: "problems that across the board you hear",
        },
        {
          duration: 4.72,
          start: 1515.72,
          text: "from people but having worked with",
        },
        {
          duration: 3.68,
          start: 1518.44,
          text: "creators yourself what are other",
        },
        {
          duration: 4.959,
          start: 1520.44,
          text: "possibilities when you think about the",
        },
        {
          duration: 7.76,
          start: 1522.12,
          text: "bar YouTube and create a relationship",
        },
        {
          duration: 6.241,
          start: 1525.399,
          text: "this is one of so many things that",
        },
        {
          duration: 3.88,
          start: 1529.88,
          text: "you're flagging and we need to",
        },
        {
          duration: 3.68,
          start: 1531.64,
          text: "experiment with we need to continue to",
        },
        {
          duration: 6.279,
          start: 1533.76,
          text: "try to find how we maximize this",
        },
        {
          duration: 8.2,
          start: 1535.32,
          text: "helpfulness and it's part of why well a",
        },
        {
          duration: 5.12,
          start: 1540.039,
          text: "we've shown every update that we do we",
        },
        {
          duration: 3.879,
          start: 1543.52,
          text: "have an updates page on Bard where you",
        },
        {
          duration: 4.681,
          start: 1545.159,
          text: "can see not just here's what we did",
        },
        {
          duration: 4.0,
          start: 1547.399,
          text: "here's why we did it and we're inviting",
        },
        {
          duration: 4.959,
          start: 1549.84,
          text: "that feedback and so just even a",
        },
        {
          duration: 4.64,
          start: 1551.399,
          text: "conversation like this of getting that",
        },
        {
          duration: 2.24,
          start: 1554.799,
          text: "hey here's something that we'd like to",
        },
        {
          duration: 2.321,
          start: 1556.039,
          text: "see here's something that would be",
        },
        {
          duration: 3.841,
          start: 1557.039,
          text: "really helpful",
        },
        {
          duration: 5.24,
          start: 1558.36,
          text: "um is a good",
        },
        {
          duration: 5.519,
          start: 1560.88,
          text: "step b in a broader",
        },
        {
          duration: 5.76,
          start: 1563.6,
          text: "context when we think about what's going",
        },
        {
          duration: 5.081,
          start: 1566.399,
          text: "to come next to Bard the thing that",
        },
        {
          duration: 4.52,
          start: 1569.36,
          text: "we're trying to do is balance between",
        },
        {
          duration: 5.439,
          start: 1571.48,
          text: "both what's the feedback that we're",
        },
        {
          duration: 4.039,
          start: 1573.88,
          text: "getting and also there are developments",
        },
        {
          duration: 5.521,
          start: 1576.919,
          text: "in the",
        },
        {
          duration: 6.081,
          start: 1577.919,
          text: "technology that are somewhat unexpected",
        },
        {
          duration: 4.119,
          start: 1582.44,
          text: "that you then try to figure out how to",
        },
        {
          duration: 6.0,
          start: 1584.0,
          text: "make it most helpful so like when we",
        },
        {
          duration: 6.0,
          start: 1586.559,
          text: "started bard eight months ago we weren't",
        },
        {
          duration: 4.48,
          start: 1590.0,
          text: "really focused on a language model doing",
        },
        {
          duration: 4.321,
          start: 1592.559,
          text: "math like language and math seem",
        },
        {
          duration: 5.319,
          start: 1594.48,
          text: "relatively incompatible from the",
        },
        {
          duration: 4.6,
          start: 1596.88,
          text: "beginning but we knew that these",
        },
        {
          duration: 5.88,
          start: 1599.799,
          text: "language models were good at writing",
        },
        {
          duration: 6.88,
          start: 1601.48,
          text: "code and so a couple of weeks into it",
        },
        {
          duration: 5.761,
          start: 1605.679,
          text: "talk about you know people sometimes not",
        },
        {
          duration: 4.799,
          start: 1608.36,
          text: "being the kindest that's fine uh but you",
        },
        {
          duration: 3.52,
          start: 1611.44,
          text: "know people started putting in like one",
        },
        {
          duration: 5.361,
          start: 1613.159,
          text: "plus one and Bard was responding with",
        },
        {
          duration: 6.0,
          start: 1614.96,
          text: "three and they were uh",
        },
        {
          duration: 3.68,
          start: 1618.52,
          text: "not most politely saying hahaha silly",
        },
        {
          duration: 3.599,
          start: 1620.96,
          text: "language model doesn't know what one",
        },
        {
          duration: 4.359,
          start: 1622.2,
          text: "plus one and of course like over the",
        },
        {
          duration: 3.441,
          start: 1624.559,
          text: "course of training language like how",
        },
        {
          duration: 3.441,
          start: 1626.559,
          text: "many things have you seen like 1 plus",
        },
        {
          duration: 3.44,
          start: 1628.0,
          text: "one equals three because it's the sum",
        },
        {
          duration: 3.84,
          start: 1630.0,
          text: "you know the sum is greater than Parts",
        },
        {
          duration: 3.92,
          start: 1631.44,
          text: "whatever but then we have these like",
        },
        {
          duration: 4.0,
          start: 1633.84,
          text: "enterprising members of our team that",
        },
        {
          duration: 4.12,
          start: 1635.36,
          text: "are like well what if you just ask write",
        },
        {
          duration: 2.8,
          start: 1637.84,
          text: "ask Bard to write the code to solve that",
        },
        {
          duration: 2.319,
          start: 1639.48,
          text: "problem and then execute the problem and",
        },
        {
          duration: 2.88,
          start: 1640.64,
          text: "then give you the answer and then like",
        },
        {
          duration: 4.081,
          start: 1641.799,
          text: "bam all of a sudden Bard can do math and",
        },
        {
          duration: 5.72,
          start: 1643.52,
          text: "like we figure that out in two to three",
        },
        {
          duration: 4.799,
          start: 1645.88,
          text: "weeks time and so we are balancing it",
        },
        {
          duration: 2.88,
          start: 1649.24,
          text: "between these things of like people are",
        },
        {
          duration: 3.48,
          start: 1650.679,
          text: "using it they're giving us their",
        },
        {
          duration: 3.64,
          start: 1652.12,
          text: "feedback but then there are these things",
        },
        {
          duration: 3.841,
          start: 1654.159,
          text: "like hey have we tried using this",
        },
        {
          duration: 3.68,
          start: 1655.76,
          text: "technology in a new and novel way and so",
        },
        {
          duration: 3.799,
          start: 1658.0,
          text: "we're just constantly building between",
        },
        {
          duration: 4.359,
          start: 1659.44,
          text: "those things and as we find those as we",
        },
        {
          duration: 4.12,
          start: 1661.799,
          text: "get the feedback and as we find these",
        },
        {
          duration: 4.521,
          start: 1663.799,
          text: "different discoveries we post them",
        },
        {
          duration: 4.24,
          start: 1665.919,
          text: "transparently on the updates page and",
        },
        {
          duration: 3.479,
          start: 1668.32,
          text: "sometimes we get a lot of positive",
        },
        {
          duration: 3.801,
          start: 1670.159,
          text: "feedback sometimes it's a little bit",
        },
        {
          duration: 4.841,
          start: 1671.799,
          text: "more muted and it's part of the learning",
        },
        {
          duration: 4.199,
          start: 1673.96,
          text: "process there's like so many possible",
        },
        {
          duration: 3.32,
          start: 1676.64,
          text: "Pathways it's",
        },
        {
          duration: 4.161,
          start: 1678.159,
          text: "I don't know too much to think about for",
        },
        {
          duration: 4.4,
          start: 1679.96,
          text: "me on X Twitter whatever you want to",
        },
        {
          duration: 4.44,
          start: 1682.32,
          text: "call it I've brought up some similar",
        },
        {
          duration: 4.24,
          start: 1684.36,
          text: "thoughts as I'm bringing up today and",
        },
        {
          duration: 3.32,
          start: 1686.76,
          text: "two replies really caught my eye they're",
        },
        {
          duration: 3.36,
          start: 1688.6,
          text: "very similar but they weren't in",
        },
        {
          duration: 3.24,
          start: 1690.08,
          text: "conversation with one another one person",
        },
        {
          duration: 3.52,
          start: 1691.96,
          text: "said how do you think this will change",
        },
        {
          duration: 4.12,
          start: 1693.32,
          text: "what creators make and the other person",
        },
        {
          duration: 4.039,
          start: 1695.48,
          text: "said in this case we should then see a",
        },
        {
          duration: 3.64,
          start: 1697.44,
          text: "trend back to sub 10-minute videos",
        },
        {
          duration: 3.801,
          start: 1699.519,
          text: "videos with condensed high quality",
        },
        {
          duration: 4.12,
          start: 1701.08,
          text: "information in least time should be most",
        },
        {
          duration: 4.239,
          start: 1703.32,
          text: "highly rewarded there's this ongoing",
        },
        {
          duration: 4.4,
          start: 1705.2,
          text: "conversation about a YouTube meta which",
        },
        {
          duration: 3.84,
          start: 1707.559,
          text: "basically refers to the general energy",
        },
        {
          duration: 4.199,
          start: 1709.6,
          text: "cultivated on the platform or the",
        },
        {
          duration: 3.841,
          start: 1711.399,
          text: "general way content is going I don't",
        },
        {
          duration: 3.12,
          start: 1713.799,
          text: "really like the term because I think it",
        },
        {
          duration: 3.84,
          start: 1715.24,
          text: "demeans the wide range of content on",
        },
        {
          duration: 4.081,
          start: 1716.919,
          text: "YouTube personally I'm not watching",
        },
        {
          duration: 3.959,
          start: 1719.08,
          text: "videos with like 10 million plus views",
        },
        {
          duration: 4.559,
          start: 1721.0,
          text: "really most of the videos I watch are",
        },
        {
          duration: 5.721,
          start: 1723.039,
          text: "definitely sub 1 million views even like",
        },
        {
          duration: 5.0,
          start: 1725.559,
          text: "yeah sub 50k sub 10K so I don't see the",
        },
        {
          duration: 4.2,
          start: 1728.76,
          text: "YouTube meta a lot in my personal",
        },
        {
          duration: 4.12,
          start: 1730.559,
          text: "consumption but I also can't argue that",
        },
        {
          duration: 4.16,
          start: 1732.96,
          text: "someone like Mr Beast hasn't had",
        },
        {
          duration: 4.161,
          start: 1734.679,
          text: "Rippling effects on the platform and",
        },
        {
          duration: 4.76,
          start: 1737.12,
          text: "people people often refer to him as the",
        },
        {
          duration: 6.719,
          start: 1738.84,
          text: "YouTube meta of recent years so when you",
        },
        {
          duration: 5.2,
          start: 1741.88,
          text: "think about Bard conversational AI llms",
        },
        {
          duration: 3.72,
          start: 1745.559,
          text: "playing a more prominent role in our",
        },
        {
          duration: 3.92,
          start: 1747.08,
          text: "lives in the years to come do you think",
        },
        {
          duration: 4.961,
          start: 1749.279,
          text: "the YouTube meta is going to mold to",
        },
        {
          duration: 5.679,
          start: 1751.0,
          text: "that and if so what type of content what",
        },
        {
          duration: 5.039,
          start: 1754.24,
          text: "type of media do you see emerging at the",
        },
        {
          duration: 5.161,
          start: 1756.679,
          text: "Forefront so as somebody that's worked",
        },
        {
          duration: 5.201,
          start: 1759.279,
          text: "with uh creators and uh in the music",
        },
        {
          duration: 7.079,
          start: 1761.84,
          text: "world for a long time one thing I was",
        },
        {
          duration: 6.16,
          start: 1764.48,
          text: "always fascinated by was how",
        },
        {
          duration: 7.201,
          start: 1768.919,
          text: "art adapts",
        },
        {
          duration: 8.96,
          start: 1770.64,
          text: "to the medium it's in and so when the",
        },
        {
          duration: 7.72,
          start: 1776.12,
          text: "first Short play records came out on",
        },
        {
          duration: 7.439,
          start: 1779.6,
          text: "vinyl they had a maximum length of",
        },
        {
          duration: 5.64,
          start: 1783.84,
          text: "roughly 3 minutes and 30 seconds and at",
        },
        {
          duration: 5.601,
          start: 1787.039,
          text: "the time most popular music that was",
        },
        {
          duration: 7.4,
          start: 1789.48,
          text: "stemming from a lot of Explorations in",
        },
        {
          duration: 6.36,
          start: 1792.64,
          text: "in jazz were 8 n 10 minute songs and the",
        },
        {
          duration: 4.48,
          start: 1796.88,
          text: "modern pop song that's three and a half",
        },
        {
          duration: 6.279,
          start: 1799.0,
          text: "minutes long that's still the rough",
        },
        {
          duration: 5.6,
          start: 1801.36,
          text: "average of a pop song goes back to used",
        },
        {
          duration: 4.361,
          start: 1805.279,
          text: "to be able to distribute music in new",
        },
        {
          duration: 5.88,
          start: 1806.96,
          text: "ways on these tiny Short play",
        },
        {
          duration: 5.96,
          start: 1809.64,
          text: "records and the and the medium adapted",
        },
        {
          duration: 4.679,
          start: 1812.84,
          text: "and then a couple of years ago you start",
        },
        {
          duration: 4.799,
          start: 1815.6,
          text: "getting into the world of playlists in",
        },
        {
          duration: 4.121,
          start: 1817.519,
          text: "Spotify and you know you had like the",
        },
        {
          duration: 4.16,
          start: 1820.399,
          text: "XXX",
        },
        {
          duration: 5.0,
          start: 1821.64,
          text: "andion uh tracks that were like a minute",
        },
        {
          duration: 4.801,
          start: 1824.559,
          text: "and 45 seconds and people started to",
        },
        {
          duration: 5.36,
          start: 1826.64,
          text: "realize like oh wait I get more listen",
        },
        {
          duration: 4.52,
          start: 1829.36,
          text: "counts whenever I make shorter music and",
        },
        {
          duration: 4.96,
          start: 1832.0,
          text: "so people like you had this massive",
        },
        {
          duration: 4.919,
          start: 1833.88,
          text: "flurry of people making songs that",
        },
        {
          duration: 3.76,
          start: 1836.96,
          text: "basically had two verses instead of",
        },
        {
          duration: 4.921,
          start: 1838.799,
          text: "three because they were able to they",
        },
        {
          duration: 7.36,
          start: 1840.72,
          text: "were able to uh get more uh get more",
        },
        {
          duration: 6.28,
          start: 1843.72,
          text: "streams at the time thankfully uh We've",
        },
        {
          duration: 3.4,
          start: 1848.08,
          text: "reverted back to having three verses",
        },
        {
          duration: 2.96,
          start: 1850.0,
          text: "because I think that makes a better song",
        },
        {
          duration: 5.52,
          start: 1851.48,
          text: "but this is kind of like a natural",
        },
        {
          duration: 8.16,
          start: 1852.96,
          text: "evolution of how creativity matches to",
        },
        {
          duration: 6.08,
          start: 1857.0,
          text: "the media like how how long did we have",
        },
        {
          duration: 4.08,
          start: 1861.12,
          text: "horizontal video then all of a sudden",
        },
        {
          duration: 3.92,
          start: 1863.08,
          text: "vertical video starts to come in and you",
        },
        {
          duration: 5.319,
          start: 1865.2,
          text: "start to see things like YouTube shorts",
        },
        {
          duration: 6.08,
          start: 1867.0,
          text: "and reals and and Tik Tok of course it",
        },
        {
          duration: 3.921,
          start: 1870.519,
          text: "doesn't mean that horizontal form video",
        },
        {
          duration: 3.4,
          start: 1873.08,
          text: "like the one that we're recording right",
        },
        {
          duration: 4.359,
          start: 1874.44,
          text: "now that's going to be on",
        },
        {
          duration: 5.439,
          start: 1876.48,
          text: "YouTube like it",
        },
        {
          duration: 5.36,
          start: 1878.799,
          text: "doesn't change the the format it just",
        },
        {
          duration: 3.681,
          start: 1881.919,
          text: "means that you adapt and however you",
        },
        {
          duration: 3.721,
          start: 1884.159,
          text: "might adapt this for some of those",
        },
        {
          duration: 4.84,
          start: 1885.6,
          text: "vertical forms is be different than what",
        },
        {
          duration: 5.799,
          start: 1887.88,
          text: "you do for horizontal so it's a long way",
        },
        {
          duration: 6.28,
          start: 1890.44,
          text: "of saying I think art has an amazing",
        },
        {
          duration: 4.441,
          start: 1893.679,
          text: "ability to adapt to to Transformations",
        },
        {
          duration: 3.48,
          start: 1896.72,
          text: "yeah I really got to think about that",
        },
        {
          duration: 3.519,
          start: 1898.12,
          text: "because something is undoubtedly going",
        },
        {
          duration: 3.199,
          start: 1900.2,
          text: "to come out of this interaction with",
        },
        {
          duration: 3.601,
          start: 1901.639,
          text: "media it could be something completely",
        },
        {
          duration: 3.16,
          start: 1903.399,
          text: "out of left field it could be something",
        },
        {
          duration: 3.279,
          start: 1905.24,
          text: "that's on the cusp right now we're",
        },
        {
          duration: 3.72,
          start: 1906.559,
          text: "seeing hints of and we won't really know",
        },
        {
          duration: 4.16,
          start: 1908.519,
          text: "until it really happens and then we're",
        },
        {
          duration: 4.201,
          start: 1910.279,
          text: "more so reflecting on it I don't know I",
        },
        {
          duration: 3.921,
          start: 1912.679,
          text: "can't think in this moment but you",
        },
        {
          duration: 4.6,
          start: 1914.48,
          text: "mentioned earlier how your team has a",
        },
        {
          duration: 4.039,
          start: 1916.6,
          text: "barred up updates web page it's really",
        },
        {
          duration: 4.0,
          start: 1919.08,
          text: "great I used it to research for this",
        },
        {
          duration: 4.201,
          start: 1920.639,
          text: "interview I prefer it to open ai's",
        },
        {
          duration: 3.559,
          start: 1923.08,
          text: "individual blog posts because it's just",
        },
        {
          duration: 3.839,
          start: 1924.84,
          text: "this yeah single page where you lay",
        },
        {
          duration: 4.28,
          start: 1926.639,
          text: "everything out it's really easily",
        },
        {
          duration: 5.12,
          start: 1928.679,
          text: "consumable in terms of incorporating",
        },
        {
          duration: 5.72,
          start: 1930.919,
          text: "Google's broader ecosystem these really",
        },
        {
          duration: 5.6,
          start: 1933.799,
          text: "stood out to me in May the ability to",
        },
        {
          duration: 4.4,
          start: 1936.639,
          text: "export B's outputs to docs and Gmail",
        },
        {
          duration: 4.441,
          start: 1939.399,
          text: "images from Google search brought into",
        },
        {
          duration: 4.841,
          start: 1941.039,
          text: "outputs when applicable in June the",
        },
        {
          duration: 3.839,
          start: 1943.84,
          text: "ability to export any tables that bar",
        },
        {
          duration: 4.2,
          start: 1945.88,
          text: "generates into sheets",
        },
        {
          duration: 4.84,
          start: 1947.679,
          text: "in July Google Lens integration into",
        },
        {
          duration: 5.319,
          start: 1950.08,
          text: "Bard so the ability for a user to use",
        },
        {
          duration: 5.52,
          start: 1952.519,
          text: "image in their inputs and not just text",
        },
        {
          duration: 5.201,
          start: 1955.399,
          text: "and aside from YouTube most recently in",
        },
        {
          duration: 4.161,
          start: 1958.039,
          text: "September and October bar being able to",
        },
        {
          duration: 3.84,
          start: 1960.6,
          text: "integrate even further with drive and",
        },
        {
          duration: 4.319,
          start: 1962.2,
          text: "Gmail and being able to summarize and",
        },
        {
          duration: 4.239,
          start: 1964.44,
          text: "answer questions across your personal",
        },
        {
          duration: 5.321,
          start: 1966.519,
          text: "content as well as retrieving",
        },
        {
          duration: 5.36,
          start: 1968.679,
          text: "information from Google Maps hotel and",
        },
        {
          duration: 4.4,
          start: 1971.84,
          text: "flights so your team is shipping at a",
        },
        {
          duration: 4.321,
          start: 1974.039,
          text: "pretty rapid rate what's the Northstar",
        },
        {
          duration: 4.559,
          start: 1976.24,
          text: "Vision to make it feel like Bard really",
        },
        {
          duration: 3.96,
          start: 1978.36,
          text: "has a grasp on user's entire Google",
        },
        {
          duration: 3.281,
          start: 1980.799,
          text: "ecosystem",
        },
        {
          duration: 4.92,
          start: 1982.32,
          text: "experience yeah there's there's a",
        },
        {
          duration: 6.04,
          start: 1984.08,
          text: "Northstar for Bard overall in the",
        },
        {
          duration: 5.52,
          start: 1987.24,
          text: "experiment phase that we're in which is",
        },
        {
          duration: 6.0,
          start: 1990.12,
          text: "understand how to help people bring",
        },
        {
          duration: 5.879,
          start: 1992.76,
          text: "their ideas their curiosity and their",
        },
        {
          duration: 5.64,
          start: 1996.12,
          text: "needs in the form of productivity to",
        },
        {
          duration: 4.92,
          start: 1998.639,
          text: "life and so that North Star is one that",
        },
        {
          duration: 4.399,
          start: 2001.76,
          text: "we're going to continue to move toward",
        },
        {
          duration: 6.12,
          start: 2003.559,
          text: "like bringing an idea to life is this",
        },
        {
          duration: 5.48,
          start: 2006.159,
          text: "amazing capability of the technology and",
        },
        {
          duration: 4.88,
          start: 2009.679,
          text: "sometimes that requires some",
        },
        {
          duration: 6.441,
          start: 2011.639,
          text: "controllability around hey I wanted to",
        },
        {
          duration: 6.0,
          start: 2014.559,
          text: "be much more refined and I want to make",
        },
        {
          duration: 4.479,
          start: 2018.08,
          text: "sure that I can double check anything",
        },
        {
          duration: 4.96,
          start: 2020.559,
          text: "that it shares with me because I need",
        },
        {
          duration: 4.641,
          start: 2022.559,
          text: "very accurate information and so we",
        },
        {
          duration: 3.12,
          start: 2025.519,
          text: "launched something like double check",
        },
        {
          duration: 3.52,
          start: 2027.2,
          text: "responses that we did a couple of weeks",
        },
        {
          duration: 4.321,
          start: 2028.639,
          text: "ago which you can go through a creative",
        },
        {
          duration: 3.4,
          start: 2030.72,
          text: "response and see what's content from",
        },
        {
          duration: 2.48,
          start: 2032.96,
          text: "around the internet that agrees with",
        },
        {
          duration: 4.36,
          start: 2034.12,
          text: "this and what's content that maybe",
        },
        {
          duration: 4.599,
          start: 2035.44,
          text: "disagrees with it and of course that's",
        },
        {
          duration: 4.039,
          start: 2038.48,
          text: "not the end state that we want to get to",
        },
        {
          duration: 5.921,
          start: 2040.039,
          text: "we want to get to a point where you can",
        },
        {
          duration: 7.241,
          start: 2042.519,
          text: "consistently uh control when you want",
        },
        {
          duration: 6.32,
          start: 2045.96,
          text: "that style of an experience and then",
        },
        {
          duration: 4.639,
          start: 2049.76,
          text: "sometimes making stuff up is the way to",
        },
        {
          duration: 4.72,
          start: 2052.28,
          text: "bring an idea to life when you're",
        },
        {
          duration: 5.24,
          start: 2054.399,
          text: "thinking about a new project that you",
        },
        {
          duration: 4.56,
          start: 2057.0,
          text: "want to do when you're thinking about uh",
        },
        {
          duration: 3.561,
          start: 2059.639,
          text: "know a a home project that you're trying",
        },
        {
          duration: 2.799,
          start: 2061.56,
          text: "to like bring to life that maybe you",
        },
        {
          duration: 5.32,
          start: 2063.2,
          text: "haven't done before like you're trying",
        },
        {
          duration: 7.0,
          start: 2064.359,
          text: "to create some sort of new creative uh",
        },
        {
          duration: 6.04,
          start: 2068.52,
          text: "art project with your kid like that",
        },
        {
          duration: 5.28,
          start: 2071.359,
          text: "controlability I think is going to be an",
        },
        {
          duration: 4.039,
          start: 2074.56,
          text: "interesting lever and what you'll",
        },
        {
          duration: 3.841,
          start: 2076.639,
          text: "hopefully see through these updates here",
        },
        {
          duration: 3.961,
          start: 2078.599,
          text: "is we're going to be trying a lot of",
        },
        {
          duration: 4.96,
          start: 2080.48,
          text: "things to help you bring your ideas to",
        },
        {
          duration: 5.72,
          start: 2082.56,
          text: "life they're not always going to work",
        },
        {
          duration: 4.88,
          start: 2085.44,
          text: "because uh the only way that you find it",
        },
        {
          duration: 4.76,
          start: 2088.28,
          text: "out is to give people the access but we",
        },
        {
          duration: 6.24,
          start: 2090.32,
          text: "do it within these parameters of keeping",
        },
        {
          duration: 6.559,
          start: 2093.04,
          text: "it responsible make sure that it doesn't",
        },
        {
          duration: 6.0,
          start: 2096.56,
          text: "do things like uh drive you toward",
        },
        {
          duration: 4.681,
          start: 2099.599,
          text: "illegal activity or or do harmful things",
        },
        {
          duration: 3.68,
          start: 2102.56,
          text: "that's the core parameters with which",
        },
        {
          duration: 3.559,
          start: 2104.28,
          text: "we're doing it but we want to be out",
        },
        {
          duration: 4.08,
          start: 2106.24,
          text: "there and we want to give people a",
        },
        {
          duration: 4.561,
          start: 2107.839,
          text: "reason to try new things and I'm just",
        },
        {
          duration: 4.96,
          start: 2110.32,
          text: "amazed at the sorts of ideas that that",
        },
        {
          duration: 4.959,
          start: 2112.4,
          text: "can come to life when you use this thing",
        },
        {
          duration: 4.16,
          start: 2115.28,
          text: "you shared this Tweet back in October",
        },
        {
          duration: 4.361,
          start: 2117.359,
          text: "saying B collaborates and does things",
        },
        {
          duration: 5.12,
          start: 2119.44,
          text: "with you assistant delegates and does",
        },
        {
          duration: 5.2,
          start: 2121.72,
          text: "things for you so to clarify for viewers",
        },
        {
          duration: 4.64,
          start: 2124.56,
          text: "as you know Google B is a product and",
        },
        {
          duration: 3.88,
          start: 2126.92,
          text: "then separately Google assistant is a",
        },
        {
          duration: 3.68,
          start: 2129.2,
          text: "product in case you've never utilized it",
        },
        {
          duration: 4.44,
          start: 2130.8,
          text: "before I feel like Google tends to have",
        },
        {
          duration: 4.08,
          start: 2132.88,
          text: "this issue because the company is so",
        },
        {
          duration: 4.64,
          start: 2135.24,
          text: "large and so many things are going on at",
        },
        {
          duration: 5.24,
          start: 2136.96,
          text: "once where products features of very",
        },
        {
          duration: 4.0,
          start: 2139.88,
          text: "similar nature get shipped there was",
        },
        {
          duration: 3.96,
          start: 2142.2,
          text: "this one tweet that cracked me up it was",
        },
        {
          duration: 4.12,
          start: 2143.88,
          text: "like Google Duo is being merged into",
        },
        {
          duration: 3.32,
          start: 2146.16,
          text: "Google meet formerly known as Hangouts",
        },
        {
          duration: 3.359,
          start: 2148.0,
          text: "meet which is not to be confused with",
        },
        {
          duration: 3.4,
          start: 2149.48,
          text: "Google Chat which is a separate app",
        },
        {
          duration: 3.521,
          start: 2151.359,
          text: "previously known as Hangouts chat which",
        },
        {
          duration: 3.6,
          start: 2152.88,
          text: "was replaced by Google talk go+",
        },
        {
          duration: 3.36,
          start: 2154.88,
          text: "messenger and Google+ Hangouts I was",
        },
        {
          duration: 5.2,
          start: 2156.48,
          text: "like that that that sums it up a lot of",
        },
        {
          duration: 5.4,
          start: 2158.24,
          text: "the times I feel like um but there's",
        },
        {
          duration: 3.96,
          start: 2161.68,
          text: "already this collaboration between Bard",
        },
        {
          duration: 4.36,
          start: 2163.64,
          text: "and assistant and when I think of what I",
        },
        {
          duration: 5.0,
          start: 2165.64,
          text: "want my relationship with an llm to be",
        },
        {
          duration: 6.359,
          start: 2168.0,
          text: "like or maybe like instead the better",
        },
        {
          duration: 5.959,
          start: 2170.64,
          text: "way to put it is my singular AI sidekick",
        },
        {
          duration: 4.521,
          start: 2174.359,
          text: "across my digital experience when I",
        },
        {
          duration: 4.48,
          start: 2176.599,
          text: "think about what I want that to be it",
        },
        {
          duration: 3.52,
          start: 2178.88,
          text: "does seem to be the combination of those",
        },
        {
          duration: 4.28,
          start: 2181.079,
          text: "two products",
        },
        {
          duration: 6.32,
          start: 2182.4,
          text: "offerings so do you think in the future",
        },
        {
          duration: 6.641,
          start: 2185.359,
          text: "I know future speculation I'm sorry that",
        },
        {
          duration: 6.44,
          start: 2188.72,
          text: "they're going to combine and it be just",
        },
        {
          duration: 5.48,
          start: 2192.0,
          text: "B it be just assistant so one of the",
        },
        {
          duration: 5.72,
          start: 2195.16,
          text: "names is killed but again their use",
        },
        {
          duration: 5.48,
          start: 2197.48,
          text: "cases integrate I think in the way that",
        },
        {
          duration: 3.719,
          start: 2200.88,
          text: "you propose it it might be too narrow or",
        },
        {
          duration: 2.8,
          start: 2202.96,
          text: "limiting in terms of what a language",
        },
        {
          duration: 4.281,
          start: 2204.599,
          text: "model can",
        },
        {
          duration: 6.44,
          start: 2205.76,
          text: "do as as we look at where we are eight",
        },
        {
          duration: 5.239,
          start: 2208.88,
          text: "months into having language models in",
        },
        {
          duration: 4.76,
          start: 2212.2,
          text: "the hands of users the things that we're",
        },
        {
          duration: 5.561,
          start: 2214.119,
          text: "seeing pretty consistently are help me",
        },
        {
          duration: 6.08,
          start: 2216.96,
          text: "bring this idea to life and it happens",
        },
        {
          duration: 8.84,
          start: 2219.68,
          text: "in different places so to your",
        },
        {
          duration: 8.88,
          start: 2223.04,
          text: "point we've been exploring ways that uh",
        },
        {
          duration: 5.839,
          start: 2228.52,
          text: "bar that Bard can help understand your",
        },
        {
          duration: 5.08,
          start: 2231.92,
          text: "email through our Gmail extension and",
        },
        {
          duration: 3.72,
          start: 2234.359,
          text: "then there's also the help me write in",
        },
        {
          duration: 2.88,
          start: 2237.0,
          text: "the form of",
        },
        {
          duration: 4.441,
          start: 2238.079,
          text: "Gmail as we're going through this",
        },
        {
          duration: 4.6,
          start: 2239.88,
          text: "exploration process the part of it is",
        },
        {
          duration: 3.96,
          start: 2242.52,
          text: "speed of insight how quickly can you get",
        },
        {
          duration: 2.68,
          start: 2244.48,
          text: "something and understand it as we build",
        },
        {
          duration: 2.48,
          start: 2246.48,
          text: "this",
        },
        {
          duration: 4.159,
          start: 2247.16,
          text: "as we build a deeper understanding of",
        },
        {
          duration: 5.08,
          start: 2248.96,
          text: "how these interaction models work",
        },
        {
          duration: 6.401,
          start: 2251.319,
          text: "together it's starting to",
        },
        {
          duration: 5.84,
          start: 2254.04,
          text: "emerge how people are thinking of using",
        },
        {
          duration: 4.56,
          start: 2257.72,
          text: "the technology in a way that is",
        },
        {
          duration: 4.76,
          start: 2259.88,
          text: "conversational that they want uh they",
        },
        {
          duration: 3.88,
          start: 2262.28,
          text: "want elements of consistency in some",
        },
        {
          duration: 5.6,
          start: 2264.64,
          text: "parts they",
        },
        {
          duration: 7.199,
          start: 2266.16,
          text: "want dedicated isolated uh use in others",
        },
        {
          duration: 5.48,
          start: 2270.24,
          text: "and so again hard to speculate on",
        },
        {
          duration: 4.321,
          start: 2273.359,
          text: "exactly what'll happen in the future but",
        },
        {
          duration: 4.0,
          start: 2275.72,
          text: "uh it's coming from a point of we just",
        },
        {
          duration: 3.439,
          start: 2277.68,
          text: "need to keep listening and understanding",
        },
        {
          duration: 2.32,
          start: 2279.72,
          text: "how people are internalizing this",
        },
        {
          duration: 3.081,
          start: 2281.119,
          text: "because it's not just about getting",
        },
        {
          duration: 4.52,
          start: 2282.04,
          text: "technology in people's hands it's",
        },
        {
          duration: 3.919,
          start: 2284.2,
          text: "listening to how people talk about it",
        },
        {
          duration: 4.039,
          start: 2286.56,
          text: "and what like when I start hearing",
        },
        {
          duration: 4.681,
          start: 2288.119,
          text: "people say things like my Bard helped me",
        },
        {
          duration: 5.76,
          start: 2290.599,
          text: "do this it's this like really",
        },
        {
          duration: 7.2,
          start: 2292.8,
          text: "interesting trigger to hear like wait",
        },
        {
          duration: 6.641,
          start: 2296.359,
          text: "wait wait what your Bard like that like",
        },
        {
          duration: 5.359,
          start: 2300.0,
          text: "and starting to pull on um try like",
        },
        {
          duration: 5.76,
          start: 2303.0,
          text: "trying to understand what uh is meant by",
        },
        {
          duration: 6.041,
          start: 2305.359,
          text: "that is kind of a a fun experiment to",
        },
        {
          duration: 4.359,
          start: 2308.76,
          text: "continue to to run with yeah I like",
        },
        {
          duration: 4.08,
          start: 2311.4,
          text: "there being a streamline name for these",
        },
        {
          duration: 4.2,
          start: 2313.119,
          text: "things to your point everyone has a Bard",
        },
        {
          duration: 4.119,
          start: 2315.48,
          text: "they call it my Bard because I think it",
        },
        {
          duration: 4.961,
          start: 2317.319,
          text: "creates this shared collective",
        },
        {
          duration: 5.201,
          start: 2319.599,
          text: "experience and keeps it human in a way",
        },
        {
          duration: 4.559,
          start: 2322.28,
          text: "like we all have a Bard because the",
        },
        {
          duration: 5.0,
          start: 2324.8,
          text: "media landscape you know the world is so",
        },
        {
          duration: 5.361,
          start: 2326.839,
          text: "fragmented in so many ways today so that",
        },
        {
          duration: 5.24,
          start: 2329.8,
          text: "kind of collective glue I think is cool",
        },
        {
          duration: 5.8,
          start: 2332.2,
          text: "and when you get into the territory of",
        },
        {
          duration: 4.72,
          start: 2335.04,
          text: "naming these things whatever you want",
        },
        {
          duration: 3.8,
          start: 2338.0,
          text: "making their voices whatever you want",
        },
        {
          duration: 3.92,
          start: 2339.76,
          text: "making them look like whatever you want",
        },
        {
          duration: 5.039,
          start: 2341.8,
          text: "that's when the territory gets a little",
        },
        {
          duration: 5.8,
          start: 2343.68,
          text: "weird right but it's also interesting",
        },
        {
          duration: 4.601,
          start: 2346.839,
          text: "and I appreciate the Insight I'm sure",
        },
        {
          duration: 4.2,
          start: 2349.48,
          text: "everyone listening is going to find it",
        },
        {
          duration: 3.56,
          start: 2351.44,
          text: "all pretty fascinating as well so thank",
        },
        {
          duration: 2.6,
          start: 2353.68,
          text: "you so much for the time Jack I",
        },
        {
          duration: 2.64,
          start: 2355.0,
          text: "appreciate you taking the time Jules it",
        },
        {
          duration: 4.52,
          start: 2356.28,
          text: "was good to see",
        },
        {
          duration: 5.04,
          start: 2357.64,
          text: "you all right everyone as always thank",
        },
        {
          duration: 4.319,
          start: 2360.8,
          text: "you so much for watching I think",
        },
        {
          duration: 4.76,
          start: 2362.68,
          text: "something to keep in mind is just how",
        },
        {
          duration: 4.401,
          start: 2365.119,
          text: "Wild it is how much both the internet",
        },
        {
          duration: 4.8,
          start: 2367.44,
          text: "and the media landscape have evolved",
        },
        {
          duration: 4.64,
          start: 2369.52,
          text: "over the past 25 years and how something",
        },
        {
          duration: 4.839,
          start: 2372.24,
          text: "like this is just going to further",
        },
        {
          duration: 4.199,
          start: 2374.16,
          text: "impact that if you have any ideas how",
        },
        {
          duration: 4.121,
          start: 2377.079,
          text: "let me know cuz I'm going to be thinking",
        },
        {
          duration: 7.96,
          start: 2378.359,
          text: "about it um again thank you all so much",
        },
        {
          duration: 5.119,
          start: 2381.2,
          text: "for watching and I'll see you next time",
        },
      ],
      videoId: "hMyfy9Z_5vM",
    },
  ],
};

// Test URL: https://youtu.be/15KvrX4Xyrs?si=G7yzyCuw7GMWBr3b
export const TEST_SINGLE_VIDEO_ID_RESPONSE = {
  videos: [
    {
      channelId: "UCZ0GhKB8QydKH5xcMhmnGdw",
      channelTitle: "Urban Caffeine",
      description:
        "It's the ninth day of 12 Days of Transit Vlogmas for 2023. We're taking a look at the diverse ways people get around in New York City. For Day 9 we are going to look at the shuttle trains of the New York Subway. The NYC Subway has several shuttle trains (designated by the S sign). But have you ever ridden one? What are they all about? Are they any different? We are going to ride one today.\n\nRELATED LINKS:\n12 Days of Transit Vlogmas Full Playlist \u2192 https://www.youtube.com/playlist?list=PLlRaycSozDfY_4FrLj5oJrcuZW4fGcADC\nNYC's Silliest Subway (G Train) \u2192 https://youtu.be/gM1dDdAekSk\n\n\u2728 The BEST Merch EVER!!! \u2728\nEnjoy 10% OFF at the Urban Caffeine Shop \u2192 https://bit.ly/3QOnJUI\nUse code: VLOGMAS10\n\n\ud83c\udfac ABOUT THIS CHANNEL \ud83c\udfac\nHave you ever looked at New York City from a user experience standpoint?\ud83d\udc40 How do you learn to live comfortably in a city with a density of 27,000 souls per square mile?\ud83d\udc65 How come the best transit system in the country is actually not that good?\ud83d\ude87 These are the types of questions I prod on this channel. Make sure to sub and hit the bell so you won't miss future videos.\ud83c\udf7f\ud83d\udc4d\n\n\ud83c\udf1f New to this channel, you might like these videos. \ud83c\udf1f\nWhy are the streets of Queens so confusing \u2192 youtu.be/5WRVwNNoiQs\nWhat's with the New York subway map? \u2192 youtu.be/66AtWWSEvSo\nThe absurd story of the L train \u2192 youtu.be/g5ZeI9BQLms\n\n\ud83c\udf1f Access to perks \ud83c\udf1f \nhttps://www.youtube.com/channel/UCZ0GhKB8QydKH5xcMhmnGdw/join\nOR if you prefer Patreon \u2192 https://www.patreon.com/UrbanCaffeine \n\n\ud83c\udf1f Interested in supporting Urban Caffeine? \ud83c\udf1f\nPayPal \u2192 https://paypal.me/UrbanCaffeineStudio\nVenmo \u2192 https://venmo.com/u/UrbanCaffeine\nPatreon \u2192 https://patreon.com/UrbanCaffeine\n\n\u2709\ufe0f Contact \nInstagram / Xwitter @ urbancaffeineYT \nGeneral contact \u2192 info@urbancaffeine.com\nFor brand partnerships \u2192 urbancaffeine@thoughtleaders.io",
      publishedAt: "2023-12-10T15:00:02Z",
      thumbnailUrl: "https://i.ytimg.com/vi/15KvrX4Xyrs/maxresdefault.jpg",
      title:
        "NYC Subway Shuttles \u2192 Day 9 of 12 Days of Transit Vlogmas 2023",
      transcript_text_only:
        "welcome to day nine of 12 days of transit\u00a0\nin New York City for day nine we are going\u00a0\u00a0 to explore the shuttle trains if you've ever\u00a0\nlooked at train lines you'll see the different\u00a0\u00a0 colored circles with the name of the trains\u00a0\nthe ACE 456 but there's this s and have you\u00a0\u00a0 ever wondered where the S train is or what is\u00a0\nit all about is it the same as the other trains\u00a0\u00a0 New York has several shuttle trains there's\u00a0\none in Brooklyn there's one in the rockaways\u00a0\u00a0 it connects the Rockaway Beach to the A train\u00a0\nand there's one here in the middle of Midtown\u00a0\u00a0 Manhattan it's from 42nd Street all the way\u00a0\nto Grand Central I've probably only ridden\u00a0\u00a0 the shuttle once I've never taken it from Grand\u00a0\nCentral and that's where I am so I'm going to\u00a0\u00a0 look for it and see what it's all about I find\u00a0\nit interesting that there's a shuttle from 42nd\u00a0\u00a0 Street to Grand Central and back but there's also\u00a0\na train that Services these stations there's the\u00a0\u00a0 seven train the difference is the seven train\u00a0\nhas a stop in between that's Bryant Park and\u00a0\u00a0 depending on where you're getting off it could\u00a0\nbe easier for you to just get on the seven train\u00a0\u00a0 endure that extra stop than having to walk to\u00a0\nthe shuttle because the shuttle is kind of tucked away the thing about the stations in New\u00a0\nYork are there are no Maps the Subway\u00a0\u00a0 has been functioning for over 100 years and\u00a0\nthere are no Maps you just kind of have to\u00a0\u00a0 follow the signs understand what's Uptown\u00a0\nwhat's downtown where you're headed and go\u00a0\u00a0 from there you're just traveling in a maze\u00a0\nthat you can't see the bird's eye view of unfortunately I didn't have to walk very far\u00a0\ngoing down the stairs to catch the shuttle\u00a0\u00a0 and I find it interesting that the shuttle\u00a0\nis so long you would think a shuttle would\u00a0\u00a0 only be two cars maybe three I don't know it's\u00a0\nseveral cars long it even beats the G train the\u00a0\u00a0 G train is a very very short train and and\u00a0\nif you want I have a video all about the G\u00a0\u00a0 train and if you want to check that out link\u00a0\nis in the description below oh my gosh this\u00a0\u00a0 is a really long shuttle are there that many\u00a0\npeople shuffling between Time Square and Grand Central as you can see there\u00a0\nare no seats or hardly any seats\u00a0\u00a0 inside the shuttle it's okay it's only one stop and that was a super fast ride it was probably\u00a0\na minute maybe a minute and a half minute and\u00a0\u00a0 a quarter depending on where you're coming from\u00a0\nit is quite a walk to get to the shuttle but it\u00a0\u00a0 could be right there it depends and it's a fast\u00a0\nway to go in between those two stations so now\u00a0\u00a0 I'm at Time Square I'm just walking to Time Square\u00a0\nstation there's some cool art here that I want to see that's the shuttle for you at least the\u00a0\nshuttle between Time Square and Grand Central\u00a0\u00a0 my question to you is since there is a seven\u00a0\ntrain that services is these two stations do\u00a0\u00a0 you think the shuttle is useful the shuttle\u00a0\nthis Midtown shuttle is useful I myself don't\u00a0\u00a0 use it often so I don't know just how useful it\u00a0\nis but maybe there are some of you out there that\u00a0\u00a0 use it on a daily basis comment down below the\u00a0\nshuttle that I mostly use is in the summertime\u00a0\u00a0 the shuttle from the rockaway beaches to the\u00a0\nA train so that's a wrap for day nine of 12\u00a0\u00a0 days of transit in New York if you missed any\u00a0\nof the previous videos a link to the playlist\u00a0\u00a0 is in the description below make sure you're\u00a0\nsubscribed and you hit the notification bell\u00a0\u00a0 so you won't miss the future videos of this\u00a0\nseries and as I said before it's the holiday\u00a0\u00a0 season I have some great merch for gifts and\u00a0\nstocking stuffers there's a promo going on and\u00a0\u00a0 also patreon YouTube members get 15% off if you\u00a0\nwant to be a patreon or YouTube member check out patreon.com/urbancaffeine of the join\u00a0\nbutton of this channel with that thank\u00a0\u00a0 you all so much for watching and until the\u00a0\nnext video which is tomorrow happy new yorking ",
      transcript_with_timestamps: [
        {
          duration: 6.2,
          start: 2.84,
          text: "welcome to day nine of 12 days of transit\u00a0\nin New York City for day nine we are going\u00a0\u00a0",
        },
        {
          duration: 5.36,
          start: 9.04,
          text: "to explore the shuttle trains if you've ever\u00a0\nlooked at train lines you'll see the different\u00a0\u00a0",
        },
        {
          duration: 6.88,
          start: 14.4,
          text: "colored circles with the name of the trains\u00a0\nthe ACE 456 but there's this s and have you\u00a0\u00a0",
        },
        {
          duration: 7.16,
          start: 21.28,
          text: "ever wondered where the S train is or what is\u00a0\nit all about is it the same as the other trains\u00a0\u00a0",
        },
        {
          duration: 6.32,
          start: 28.44,
          text: "New York has several shuttle trains there's\u00a0\none in Brooklyn there's one in the rockaways\u00a0\u00a0",
        },
        {
          duration: 5.64,
          start: 34.76,
          text: "it connects the Rockaway Beach to the A train\u00a0\nand there's one here in the middle of Midtown\u00a0\u00a0",
        },
        {
          duration: 5.84,
          start: 40.4,
          text: "Manhattan it's from 42nd Street all the way\u00a0\nto Grand Central I've probably only ridden\u00a0\u00a0",
        },
        {
          duration: 5.76,
          start: 46.24,
          text: "the shuttle once I've never taken it from Grand\u00a0\nCentral and that's where I am so I'm going to\u00a0\u00a0",
        },
        {
          duration: 5.88,
          start: 52.0,
          text: "look for it and see what it's all about I find\u00a0\nit interesting that there's a shuttle from 42nd\u00a0\u00a0",
        },
        {
          duration: 7.36,
          start: 57.88,
          text: "Street to Grand Central and back but there's also\u00a0\na train that Services these stations there's the\u00a0\u00a0",
        },
        {
          duration: 6.16,
          start: 65.24,
          text: "seven train the difference is the seven train\u00a0\nhas a stop in between that's Bryant Park and\u00a0\u00a0",
        },
        {
          duration: 5.64,
          start: 71.4,
          text: "depending on where you're getting off it could\u00a0\nbe easier for you to just get on the seven train\u00a0\u00a0",
        },
        {
          duration: 6.48,
          start: 77.04,
          text: "endure that extra stop than having to walk to\u00a0\nthe shuttle because the shuttle is kind of tucked",
        },
        {
          duration: 6.32,
          start: 83.52,
          text: "away",
        },
        {
          duration: 6.12,
          start: 95.76,
          text: "the thing about the stations in New\u00a0\nYork are there are no Maps the Subway\u00a0\u00a0",
        },
        {
          duration: 6.0,
          start: 101.88,
          text: "has been functioning for over 100 years and\u00a0\nthere are no Maps you just kind of have to\u00a0\u00a0",
        },
        {
          duration: 6.24,
          start: 107.88,
          text: "follow the signs understand what's Uptown\u00a0\nwhat's downtown where you're headed and go\u00a0\u00a0",
        },
        {
          duration: 5.72,
          start: 114.12,
          text: "from there you're just traveling in a maze\u00a0\nthat you can't see the bird's eye view of",
        },
        {
          duration: 7.0,
          start: 123.8,
          text: "unfortunately I didn't have to walk very far\u00a0\ngoing down the stairs to catch the shuttle\u00a0\u00a0",
        },
        {
          duration: 6.12,
          start: 130.8,
          text: "and I find it interesting that the shuttle\u00a0\nis so long you would think a shuttle would\u00a0\u00a0",
        },
        {
          duration: 9.24,
          start: 136.92,
          text: "only be two cars maybe three I don't know it's\u00a0\nseveral cars long it even beats the G train the\u00a0\u00a0",
        },
        {
          duration: 6.76,
          start: 146.16,
          text: "G train is a very very short train and and\u00a0\nif you want I have a video all about the G\u00a0\u00a0",
        },
        {
          duration: 6.16,
          start: 152.92,
          text: "train and if you want to check that out link\u00a0\nis in the description below oh my gosh this\u00a0\u00a0",
        },
        {
          duration: 7.24,
          start: 159.08,
          text: "is a really long shuttle are there that many\u00a0\npeople shuffling between Time Square and Grand",
        },
        {
          duration: 8.32,
          start: 166.32,
          text: "Central as you can see there\u00a0\nare no seats or hardly any seats\u00a0\u00a0",
        },
        {
          duration: 5.12,
          start: 174.64,
          text: "inside the shuttle it's okay it's only one stop",
        },
        {
          duration: 7.24,
          start: 189.64,
          text: "and that was a super fast ride it was probably\u00a0\na minute maybe a minute and a half minute and\u00a0\u00a0",
        },
        {
          duration: 7.68,
          start: 196.88,
          text: "a quarter depending on where you're coming from\u00a0\nit is quite a walk to get to the shuttle but it\u00a0\u00a0",
        },
        {
          duration: 6.72,
          start: 204.56,
          text: "could be right there it depends and it's a fast\u00a0\nway to go in between those two stations so now\u00a0\u00a0",
        },
        {
          duration: 7.4,
          start: 211.28,
          text: "I'm at Time Square I'm just walking to Time Square\u00a0\nstation there's some cool art here that I want to",
        },
        {
          duration: 17.2,
          start: 218.68,
          text: "see that's the shuttle for you at least the\u00a0\nshuttle between Time Square and Grand Central\u00a0\u00a0",
        },
        {
          duration: 5.92,
          start: 235.88,
          text: "my question to you is since there is a seven\u00a0\ntrain that services is these two stations do\u00a0\u00a0",
        },
        {
          duration: 5.08,
          start: 241.8,
          text: "you think the shuttle is useful the shuttle\u00a0\nthis Midtown shuttle is useful I myself don't\u00a0\u00a0",
        },
        {
          duration: 4.88,
          start: 246.88,
          text: "use it often so I don't know just how useful it\u00a0\nis but maybe there are some of you out there that\u00a0\u00a0",
        },
        {
          duration: 6.56,
          start: 251.76,
          text: "use it on a daily basis comment down below the\u00a0\nshuttle that I mostly use is in the summertime\u00a0\u00a0",
        },
        {
          duration: 4.88,
          start: 258.32,
          text: "the shuttle from the rockaway beaches to the\u00a0\nA train so that's a wrap for day nine of 12\u00a0\u00a0",
        },
        {
          duration: 4.84,
          start: 263.2,
          text: "days of transit in New York if you missed any\u00a0\nof the previous videos a link to the playlist\u00a0\u00a0",
        },
        {
          duration: 4.4,
          start: 268.04,
          text: "is in the description below make sure you're\u00a0\nsubscribed and you hit the notification bell\u00a0\u00a0",
        },
        {
          duration: 5.56,
          start: 272.44,
          text: "so you won't miss the future videos of this\u00a0\nseries and as I said before it's the holiday\u00a0\u00a0",
        },
        {
          duration: 5.6,
          start: 278.0,
          text: "season I have some great merch for gifts and\u00a0\nstocking stuffers there's a promo going on and\u00a0\u00a0",
        },
        {
          duration: 5.52,
          start: 283.6,
          text: "also patreon YouTube members get 15% off if you\u00a0\nwant to be a patreon or YouTube member check out",
        },
        {
          duration: 10.472,
          start: 289.12,
          text: "patreon.com/urbancaffeine of the join\u00a0\nbutton of this channel with that thank\u00a0\u00a0",
        },
        {
          duration: 1.448,
          start: 299.592,
          text: "you all so much for watching and until the\u00a0\nnext video which is tomorrow happy new yorking",
        },
      ],
    },
  ],
};

// response with OpenAI Summary; Video: https://youtu.be/HErOulIrLCw?si=aPcKIWZJITHaH38J
export const TEST_WITH_OPENAI_RESPONSE = {
  videos: [
    {
      AI_summary:
        "The video is the last in a 12-day series about transit in New York City. The content creator celebrates the completion of the challenge and reflects on various facets of transit in the city covered during the series. The focus of this video is on walking in New York City, particularly along the High Line, a former elevated railway converted into a park.\n\nThe creator discusses the significance of walking as a form of transit, highlighting that on average, New Yorkers walk about 2 to 3 miles a day. They explain that walking is ingrained in New York's culture and discuss the High Line's transformation from a transportation route for goods to an elevated park. The High Line is described as a pedestrian-friendly pathway with no crosswalks or cross-traffic, allowing for a unique and relaxing walking experience.\n\nThe video showcases the High Line's features, including artwork, events, and seating areas, along with its direct connection to various districts and attractions in New York City, such as Hudson Yards, Chelsea, and the meat packing district. Additionally, the creator mentions the High Line's influence on other elevated parks, mentioning the planned Hudson Essex Greenway in New Jersey as an example of the repurposing of old rail infrastructure.\n\nThe content creator emphasizes the appeal of the High Line for urban dwellers and tourists, pointing out its scenic views, art galleries, and the potential for leisure activities. The video concludes with the creator encouraging viewers to share their thoughts on the High Line and the entire transit series. They also promote their merchandise and express gratitude to the audience.\n\nOverall, the video provides insight into the role of walking as a mode of transit in New York City, with a specific focus on the unique experience offered by the High Line and its cultural and recreational significance.",
      channelId: "UCZ0GhKB8QydKH5xcMhmnGdw",
      channelTitle: "Urban Caffeine",
      description:
        "It's the last day of 12 Days of Transit Vlogmas for 2023. We're taking a look at the diverse ways people get around in New York City. For Day 12 we are walking The High Line in New York City. The High Line is a former elevated rail that was converted into an elevated park. It runs from Hudson Yards to Chelsea's Meatpacking District. It's located near NYC's Little Island and Chelsea Market. And today, we're walking it! Walking is a huge part of New York culture, city life in general, and urbanism. And what better way to explore the joys of walking than on a former elevated rail. Happy final day of Vlogmas!\n\nRELATED LINKS:\n12 Days of Transit Vlogmas Full Playlist \u2192 https://www.youtube.com/playlist?list=PLlRaycSozDfY_4FrLj5oJrcuZW4fGcADC\n\n\n\u2728 The BEST Merch EVER!!! \u2728\nEnjoy 10% OFF at the Urban Caffeine Shop \u2192 https://bit.ly/3QOnJUI\nUse code: VLOGMAS10\n\n\ud83c\udfac ABOUT THIS CHANNEL \ud83c\udfac\nHave you ever looked at New York City from a user experience standpoint?\ud83d\udc40 How do you learn to live comfortably in a city with a density of 27,000 souls per square mile?\ud83d\udc65 How come the best transit system in the country is actually not that good?\ud83d\ude87 These are the types of questions I prod on this channel. Make sure to sub and hit the bell so you won't miss future videos.\ud83c\udf7f\ud83d\udc4d\n\n\ud83c\udf1f New to this channel, you might like these videos. \ud83c\udf1f\nWhy are the streets of Queens so confusing \u2192 youtu.be/5WRVwNNoiQs\nWhat's with the New York subway map? \u2192 youtu.be/66AtWWSEvSo\nThe absurd story of the L train \u2192 youtu.be/g5ZeI9BQLms\n\n\ud83c\udf1f Access to perks \ud83c\udf1f \nhttps://www.youtube.com/channel/UCZ0GhKB8QydKH5xcMhmnGdw/join\nOR if you prefer Patreon \u2192 https://www.patreon.com/UrbanCaffeine \n\n\ud83c\udf1f Interested in supporting Urban Caffeine? \ud83c\udf1f\nPayPal \u2192 https://paypal.me/UrbanCaffeineStudio\nVenmo \u2192 https://venmo.com/u/UrbanCaffeine\nPatreon \u2192 https://patreon.com/UrbanCaffeine\n\n\u2709\ufe0f Contact \nInstagram / Xwitter @ urbancaffeineYT \nGeneral contact \u2192 info@urbancaffeine.com\nFor brand partnerships \u2192 urbancaffeine@thoughtleaders.io",
      publishedAt: "2023-12-13T15:00:12Z",
      thumbnailUrl: "https://i.ytimg.com/vi/HErOulIrLCw/maxresdefault.jpg",
      title:
        "Walking New York's High Line \u2192 Day 12 of 12 Days of Transit Vlogmas 2023",
      transcript_text_only:
        "[Music] welcome to the last day of 12 days of\u00a0\ntransit in New York City and I can't believe\u00a0\u00a0 we've made it 12 consecutive days it's been an\u00a0\nexhausting few days for me but we've made it\u00a0\u00a0 yay we survived and honestly I thought I wasn't\u00a0\ngoing to make it but challenge completed we've\u00a0\u00a0 completed 12 days of transit in the last 12 days\u00a0\nwe talked about different facets of Transit is\u00a0\u00a0 it we covered some stations we've covered some\u00a0\nnon-mainstream options of how to get around New\u00a0\u00a0 York and we covered a bus that had this weirdly\u00a0\nshort rot and today we are going to cover a form\u00a0\u00a0 of Transit that has been around since the dawn\u00a0\nof man and that is walking right now I'm at the\u00a0\u00a0 Highline and I thought this would be the perfect\u00a0\nplace to just talk about walking in New York did\u00a0\u00a0 you know on average New Yorkers walk about 2 to\u00a0\n3 miles a day and that's just two and from work\u00a0\u00a0 maybe some light errands here and there that's a\u00a0\nlot of walking walking is a big part of New York\u00a0\u00a0 culture it's a big part of urbanism it's a big\u00a0\npart of city life and I thought the High Line\u00a0\u00a0 would be an interesting place for this video\u00a0\nbecause this is a former elevated Railway cuz\u00a0\u00a0 the High Line is situated in the manufacturing\u00a0\nDistrict of New York you have the meat packing\u00a0\u00a0 District the Garment District and all these other\u00a0\nplaces that do some sort of manufacturing and the\u00a0\u00a0 High Line was used to transport goods between\u00a0\nthese districts now we don't have it we don't\u00a0\u00a0 have a rail like that anymore so the railway\u00a0\nwas converted into this elevated Park and what's\u00a0\u00a0 great about that is when you walk the High Line\u00a0\nyou can walk it from 12th Avenue all the way to\u00a0\u00a0 Hudson yards and it's about a mile and A4 long\u00a0\nand you don't have to cross a walkway there's no\u00a0\u00a0 crosswalks because there's no cross traffic it's\u00a0\njust for pedestrians when you walk around you see\u00a0\u00a0 more detail of your environment it's because\u00a0\nyou're at a slower pace you're more aware of\u00a0\u00a0 what's happening on the ground and you can truly\u00a0\nappreciate it like this artwork behind me this\u00a0\u00a0 narly looking tree and that's the first thing\u00a0\nwe're going to look at the thing about artwork\u00a0\u00a0 at the High Line is it's rotating some of these\u00a0\nare not permanent and they're only here seasonally\u00a0\u00a0 I don't know if this is permanent I wouldn't be\u00a0\nsurprised if this will be gone by the spring but\u00a0\u00a0 it's a great thing because every time you visit\u00a0\nthere's potential for something new to see look\u00a0\u00a0 at that traffic behind me walking really is one\u00a0\nof the best forms of Transit I'm starting out\u00a0\u00a0 at Hudson yards and I'm going to walk the High\u00a0\nLine down to Chelsea the meat packing District\u00a0\u00a0 the High Line connects directly to Hudson yards\u00a0\nas you can see there's the vessel behind me and\u00a0\u00a0 this Museum and there's a new bridge that was\u00a0\nadded that connects the High Line to Moynihan\u00a0\u00a0 Train Hall if you've ever wondered what it's like\u00a0\nto have a throughway that's pedestrian only a good\u00a0\u00a0 example of that is the High Line [Music] I would\u00a0\nfeel so awkward living in one of these apartments\u00a0\u00a0 where you look out your door and there's people\u00a0\nwalking by in the High Line there are also a lot\u00a0\u00a0 of events that happen on the High Line there's a\u00a0\nwhole program of them can just go to the website\u00a0\u00a0 and see what's going on for example in the summer\u00a0\nthey would have an observation night where there\u00a0\u00a0 would be telescopes and some professionals that\u00a0\ntalk to you about night sky and constellations\u00a0\u00a0 and all that fun stuff sometimes the High Line\u00a0\ndoes get crowded especially in the summer time\u00a0\u00a0 a good time to go is like on a Tuesday evening\u00a0\nand there are spots here where you can City watch\u00a0\u00a0 there's like mini amphitheaters where it just\u00a0\nfaces the street and you can watch the street\u00a0\u00a0 and the city the High Line also goes to through\u00a0\nthe art gallery district and behind me you'll\u00a0\u00a0 see a lot of art galleries and a fun thing to\u00a0\ndo is go Gallery hopping especially on Sundays\u00a0\u00a0 and it's free unlike museums you have to pay\u00a0\nan entrance but galleries are free and on in\u00a0\u00a0 the summertime they have wine and cheese nights so\u00a0\nyou can go Gallery hopping and get free wine and cheese look at the size of\u00a0\nthis thing this is enough covering the Highlight has been an inspiration\u00a0\nfor other elevated Parks there's one in New\u00a0\u00a0 Jersey that's being planned out it's the Hudson\u00a0\nessex line Hudson essex pathway or Greenway the\u00a0\u00a0 Hudson essex Greenway really it's a great way\u00a0\nto repurpose an Old Railway especially if it's elevated [Music] There have been Summers where this lawn\u00a0\nbehind me has been open for people to picnic on\u00a0\u00a0 to sit on but right now it's cordoned off so\u00a0\nnobody can use it and they're probably just\u00a0\u00a0 giving the grass some rest this mural I'm looking\u00a0\nat is is supposed to be all things New York you\u00a0\u00a0 have representation of the train with the A6\u00a0\nNew York Sports with the NY pigeons pigeons\u00a0\u00a0 are a big part of New York got some diversity\u00a0\ngoing on of course Pizza I heart New York and\u00a0\u00a0 the Big Apple another thing about the High Line\u00a0\nis that there are plenty of seats so you could\u00a0\u00a0 easily rest along the way for [MUSIC] I'm at the\u00a0\nsouth end of the High Line at Chelsea Market I\u00a0\u00a0 think there's a connection I'm not sure from here\u00a0\nyou're really close to Little Island which is the\u00a0\u00a0 newest floating Park so you could really make a\u00a0\nday of walking from Hudson yards down to Chelsea\u00a0\u00a0 Market to the little island you can actually\u00a0\nsee little Island from here and that's the\u00a0\u00a0 last day of 12 days of transit in New York City\u00a0\nwhat do you think of the High Line do you like\u00a0\u00a0 the idea that there are no cross walks or that\u00a0\nit's elevated comment down below or do you not\u00a0\u00a0 like the High Line if you've missed any videos\u00a0\nfrom this series I have a link to the playlist\u00a0\u00a0 in the description and if you've watched all the\u00a0\nvideos comment below on what your favorite one\u00a0\u00a0 is it's been a long 12 days and I'm ready for\u00a0\na vacation so this might be the last video this\u00a0\u00a0 year and if so I'll see you all in January and\u00a0\nif you want the best merch ever check out shop.\u00a0\u00a0 Urban caffeine.com I have holiday promo going on\u00a0\nand if you're a Patreon or YouTube member you get\u00a0\u00a0 15% off with that I wish you all a happy holiday\u00a0\nseason and until the next video Happy New York ",
      transcript_with_timestamps: [
        {
          duration: 9.0,
          start: 0.0,
          text: "[Music] welcome to the last day of 12 days of\u00a0\ntransit in New York City and I can't believe\u00a0\u00a0",
        },
        {
          duration: 7.48,
          start: 9.0,
          text: "we've made it 12 consecutive days it's been an\u00a0\nexhausting few days for me but we've made it\u00a0\u00a0",
        },
        {
          duration: 7.32,
          start: 16.48,
          text: "yay we survived and honestly I thought I wasn't\u00a0\ngoing to make it but challenge completed we've\u00a0\u00a0",
        },
        {
          duration: 6.36,
          start: 23.8,
          text: "completed 12 days of transit in the last 12 days\u00a0\nwe talked about different facets of Transit is\u00a0\u00a0",
        },
        {
          duration: 5.96,
          start: 30.16,
          text: "it we covered some stations we've covered some\u00a0\nnon-mainstream options of how to get around New\u00a0\u00a0",
        },
        {
          duration: 6.24,
          start: 36.12,
          text: "York and we covered a bus that had this weirdly\u00a0\nshort rot and today we are going to cover a form\u00a0\u00a0",
        },
        {
          duration: 7.44,
          start: 42.36,
          text: "of Transit that has been around since the dawn\u00a0\nof man and that is walking right now I'm at the\u00a0\u00a0",
        },
        {
          duration: 6.04,
          start: 49.8,
          text: "Highline and I thought this would be the perfect\u00a0\nplace to just talk about walking in New York did\u00a0\u00a0",
        },
        {
          duration: 6.36,
          start: 55.84,
          text: "you know on average New Yorkers walk about 2 to\u00a0\n3 miles a day and that's just two and from work\u00a0\u00a0",
        },
        {
          duration: 5.68,
          start: 62.2,
          text: "maybe some light errands here and there that's a\u00a0\nlot of walking walking is a big part of New York\u00a0\u00a0",
        },
        {
          duration: 4.8,
          start: 67.88,
          text: "culture it's a big part of urbanism it's a big\u00a0\npart of city life and I thought the High Line\u00a0\u00a0",
        },
        {
          duration: 6.04,
          start: 72.68,
          text: "would be an interesting place for this video\u00a0\nbecause this is a former elevated Railway cuz\u00a0\u00a0",
        },
        {
          duration: 5.32,
          start: 78.72,
          text: "the High Line is situated in the manufacturing\u00a0\nDistrict of New York you have the meat packing\u00a0\u00a0",
        },
        {
          duration: 7.16,
          start: 84.04,
          text: "District the Garment District and all these other\u00a0\nplaces that do some sort of manufacturing and the\u00a0\u00a0",
        },
        {
          duration: 6.84,
          start: 91.2,
          text: "High Line was used to transport goods between\u00a0\nthese districts now we don't have it we don't\u00a0\u00a0",
        },
        {
          duration: 6.0,
          start: 98.04,
          text: "have a rail like that anymore so the railway\u00a0\nwas converted into this elevated Park and what's\u00a0\u00a0",
        },
        {
          duration: 6.12,
          start: 104.04,
          text: "great about that is when you walk the High Line\u00a0\nyou can walk it from 12th Avenue all the way to\u00a0\u00a0",
        },
        {
          duration: 8.0,
          start: 110.16,
          text: "Hudson yards and it's about a mile and A4 long\u00a0\nand you don't have to cross a walkway there's no\u00a0\u00a0",
        },
        {
          duration: 5.96,
          start: 118.16,
          text: "crosswalks because there's no cross traffic it's\u00a0\njust for pedestrians when you walk around you see\u00a0\u00a0",
        },
        {
          duration: 5.52,
          start: 124.12,
          text: "more detail of your environment it's because\u00a0\nyou're at a slower pace you're more aware of\u00a0\u00a0",
        },
        {
          duration: 5.88,
          start: 129.64,
          text: "what's happening on the ground and you can truly\u00a0\nappreciate it like this artwork behind me this\u00a0\u00a0",
        },
        {
          duration: 4.72,
          start: 135.52,
          text: "narly looking tree and that's the first thing\u00a0\nwe're going to look at the thing about artwork\u00a0\u00a0",
        },
        {
          duration: 6.8,
          start: 140.24,
          text: "at the High Line is it's rotating some of these\u00a0\nare not permanent and they're only here seasonally\u00a0\u00a0",
        },
        {
          duration: 4.44,
          start: 147.04,
          text: "I don't know if this is permanent I wouldn't be\u00a0\nsurprised if this will be gone by the spring but\u00a0\u00a0",
        },
        {
          duration: 5.88,
          start: 151.48,
          text: "it's a great thing because every time you visit\u00a0\nthere's potential for something new to see look\u00a0\u00a0",
        },
        {
          duration: 7.6,
          start: 157.36,
          text: "at that traffic behind me walking really is one\u00a0\nof the best forms of Transit I'm starting out\u00a0\u00a0",
        },
        {
          duration: 7.2,
          start: 164.96,
          text: "at Hudson yards and I'm going to walk the High\u00a0\nLine down to Chelsea the meat packing District\u00a0\u00a0",
        },
        {
          duration: 6.12,
          start: 172.16,
          text: "the High Line connects directly to Hudson yards\u00a0\nas you can see there's the vessel behind me and\u00a0\u00a0",
        },
        {
          duration: 7.0,
          start: 178.28,
          text: "this Museum and there's a new bridge that was\u00a0\nadded that connects the High Line to Moynihan\u00a0\u00a0",
        },
        {
          duration: 9.68,
          start: 185.28,
          text: "Train Hall if you've ever wondered what it's like\u00a0\nto have a throughway that's pedestrian only a good\u00a0\u00a0",
        },
        {
          duration: 23.88,
          start: 194.96,
          text: "example of that is the High Line [Music] I would\u00a0\nfeel so awkward living in one of these apartments\u00a0\u00a0",
        },
        {
          duration: 7.32,
          start: 218.84,
          text: "where you look out your door and there's people\u00a0\nwalking by in the High Line there are also a lot\u00a0\u00a0",
        },
        {
          duration: 5.8,
          start: 226.16,
          text: "of events that happen on the High Line there's a\u00a0\nwhole program of them can just go to the website\u00a0\u00a0",
        },
        {
          duration: 5.04,
          start: 231.96,
          text: "and see what's going on for example in the summer\u00a0\nthey would have an observation night where there\u00a0\u00a0",
        },
        {
          duration: 8.2,
          start: 237.0,
          text: "would be telescopes and some professionals that\u00a0\ntalk to you about night sky and constellations\u00a0\u00a0",
        },
        {
          duration: 6.6,
          start: 245.2,
          text: "and all that fun stuff sometimes the High Line\u00a0\ndoes get crowded especially in the summer time\u00a0\u00a0",
        },
        {
          duration: 7.92,
          start: 251.8,
          text: "a good time to go is like on a Tuesday evening\u00a0\nand there are spots here where you can City watch\u00a0\u00a0",
        },
        {
          duration: 7.04,
          start: 259.72,
          text: "there's like mini amphitheaters where it just\u00a0\nfaces the street and you can watch the street\u00a0\u00a0",
        },
        {
          duration: 5.84,
          start: 266.76,
          text: "and the city the High Line also goes to through\u00a0\nthe art gallery district and behind me you'll\u00a0\u00a0",
        },
        {
          duration: 7.44,
          start: 272.6,
          text: "see a lot of art galleries and a fun thing to\u00a0\ndo is go Gallery hopping especially on Sundays\u00a0\u00a0",
        },
        {
          duration: 5.68,
          start: 280.04,
          text: "and it's free unlike museums you have to pay\u00a0\nan entrance but galleries are free and on in\u00a0\u00a0",
        },
        {
          duration: 6.32,
          start: 285.72,
          text: "the summertime they have wine and cheese nights so\u00a0\nyou can go Gallery hopping and get free wine and",
        },
        {
          duration: 7.6,
          start: 292.04,
          text: "cheese look at the size of\u00a0\nthis thing this is enough",
        },
        {
          duration: 9.32,
          start: 299.64,
          text: "covering the Highlight has been an inspiration\u00a0\nfor other elevated Parks there's one in New\u00a0\u00a0",
        },
        {
          duration: 8.56,
          start: 308.96,
          text: "Jersey that's being planned out it's the Hudson\u00a0\nessex line Hudson essex pathway or Greenway the\u00a0\u00a0",
        },
        {
          duration: 6.76,
          start: 317.52,
          text: "Hudson essex Greenway really it's a great way\u00a0\nto repurpose an Old Railway especially if it's",
        },
        {
          duration: 5.2,
          start: 324.28,
          text: "elevated",
        },
        {
          duration: 18.44,
          start: 332.16,
          text: "[Music] There have been Summers where this lawn\u00a0\nbehind me has been open for people to picnic on\u00a0\u00a0",
        },
        {
          duration: 5.36,
          start: 350.6,
          text: "to sit on but right now it's cordoned off so\u00a0\nnobody can use it and they're probably just\u00a0\u00a0",
        },
        {
          duration: 6.28,
          start: 355.96,
          text: "giving the grass some rest this mural I'm looking\u00a0\nat is is supposed to be all things New York you\u00a0\u00a0",
        },
        {
          duration: 6.8,
          start: 362.24,
          text: "have representation of the train with the A6\u00a0\nNew York Sports with the NY pigeons pigeons\u00a0\u00a0",
        },
        {
          duration: 6.88,
          start: 369.04,
          text: "are a big part of New York got some diversity\u00a0\ngoing on of course Pizza I heart New York and\u00a0\u00a0",
        },
        {
          duration: 5.4,
          start: 375.92,
          text: "the Big Apple another thing about the High Line\u00a0\nis that there are plenty of seats so you could\u00a0\u00a0",
        },
        {
          duration: 40.36,
          start: 381.32,
          text: "easily rest along the way for [MUSIC] I'm at the\u00a0\nsouth end of the High Line at Chelsea Market I\u00a0\u00a0",
        },
        {
          duration: 6.2,
          start: 421.68,
          text: "think there's a connection I'm not sure from here\u00a0\nyou're really close to Little Island which is the\u00a0\u00a0",
        },
        {
          duration: 7.2,
          start: 427.88,
          text: "newest floating Park so you could really make a\u00a0\nday of walking from Hudson yards down to Chelsea\u00a0\u00a0",
        },
        {
          duration: 7.6,
          start: 435.08,
          text: "Market to the little island you can actually\u00a0\nsee little Island from here and that's the\u00a0\u00a0",
        },
        {
          duration: 5.32,
          start: 442.68,
          text: "last day of 12 days of transit in New York City\u00a0\nwhat do you think of the High Line do you like\u00a0\u00a0",
        },
        {
          duration: 5.76,
          start: 448.0,
          text: "the idea that there are no cross walks or that\u00a0\nit's elevated comment down below or do you not\u00a0\u00a0",
        },
        {
          duration: 4.8,
          start: 453.76,
          text: "like the High Line if you've missed any videos\u00a0\nfrom this series I have a link to the playlist\u00a0\u00a0",
        },
        {
          duration: 6.24,
          start: 458.56,
          text: "in the description and if you've watched all the\u00a0\nvideos comment below on what your favorite one\u00a0\u00a0",
        },
        {
          duration: 7.84,
          start: 464.8,
          text: "is it's been a long 12 days and I'm ready for\u00a0\na vacation so this might be the last video this\u00a0\u00a0",
        },
        {
          duration: 7.88,
          start: 472.64,
          text: "year and if so I'll see you all in January and\u00a0\nif you want the best merch ever check out shop.\u00a0\u00a0",
        },
        {
          duration: 6.88,
          start: 480.52,
          text: "Urban caffeine.com I have holiday promo going on\u00a0\nand if you're a Patreon or YouTube member you get\u00a0\u00a0",
        },
        {
          duration: 8.0,
          start: 487.4,
          text: "15% off with that I wish you all a happy holiday\u00a0\nseason and until the next video Happy New York",
        },
      ],
      videoId: "HErOulIrLCw",
    },
  ],
};

// Test URL: https://youtube.com/playlist?list=PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp
export const playlist_data_response = {
  kind: "youtube#playlistListResponse",
  etag: "mlZDNcmnlkWMMVH9ZO0Wf2ipJew",
  pageInfo: { totalResults: 1, resultsPerPage: 5 },
  items: [
    {
      kind: "youtube#playlist",
      etag: "35YTvsIfC_2G82OOhZpMxS3Bayg",
      id: "PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp",
      snippet: {
        publishedAt: "2023-12-05T21:16:08Z",
        channelId: "UCj_s79IpT7usLrW8JQSgVFA",
        title: "SummarizeTHIS",
        description: "",
        thumbnails: {
          default: {
            url: "https://i.ytimg.com/vi/-jRkI1nOwbc/default.jpg",
            width: 120,
            height: 90,
          },
          medium: {
            url: "https://i.ytimg.com/vi/-jRkI1nOwbc/mqdefault.jpg",
            width: 320,
            height: 180,
          },
          high: {
            url: "https://i.ytimg.com/vi/-jRkI1nOwbc/hqdefault.jpg",
            width: 480,
            height: 360,
          },
          standard: {
            url: "https://i.ytimg.com/vi/-jRkI1nOwbc/sddefault.jpg",
            width: 640,
            height: 480,
          },
          maxres: {
            url: "https://i.ytimg.com/vi/-jRkI1nOwbc/maxresdefault.jpg",
            width: 1280,
            height: 720,
          },
        },
        channelTitle: "Daniel Segarra",
        localized: { title: "SummarizeTHIS", description: "" },
      },
    },
  ],
};

// Test URLs
export const TEST_URLS = [
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
  "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "http://www.youtube.com/watch?v=u8nQa1cJyX8&a=GxdCwVVULXctT2lYDEPllDR0LRTutYfW",
  "http://www.youtube.com/watch?v=u8nQa1cJyX8",
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
  "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "https://www.youtube.com/watch?feature=feedrec_grec_index&v=0zM3nApSvMg",
  "https://www.youtube.com/watch?time_continue=4&v=0zM3nApSvMg",
  "https://www.youtube.com/embed/vE3nc7oU704",
  "https://youtube.com/shorts/dQw4w9WgXcQ?feature=share",
  "//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0",
  "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo",
  "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
  "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
  "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
  "http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY",
  "http://youtu.be/6dwqZw0j_jY",
  "http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be",
  "http://youtu.be/afa-5HQHiAs",
  "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0",
  "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
  "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
  "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
  "http://www.youtube.com/embed/nas1rJpm7wY?rel=0",
  "http://www.youtube.com/watch?v=peFZbP64dsU",
  "http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player",
  "http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player",
  "http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player",
  "http://youtube.googleapis.com/v/4e_kz79tjb8?version=3",
  "https://www.youtube.com/watch?feature=g-vrec&v=Y1xs_xPb46M",
  "http://www.youtube.com/watch?feature=player_embedded&v=Ab25nviakcw#",
  "http://youtu.be/Ab25nviakcw",
  "http://www.youtube.com/watch?v=Ab25nviakcw",
  '<iframe width="420" height="315" src="http://www.youtube.com/embed/Ab25nviakcw" frameborder="0" allowfullscreen></iframe>',
  '<object width="420" height="315"><param name="movie" value="http://www.youtube-nocookie.com/v/Ab25nviakcw?version=3&amp;hl=en_US"></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><embed src="http://www.youtube-nocookie.com/v/Ab25nviakcw?version=3&amp;hl=en_US" type="application/x-shockwave-flash" width="420" height="315" allowscriptaccess="always" allowfullscreen="true"></embed></object>',
  "http://i1.ytimg.com/vi/Ab25nviakcw/default.jpg",
  "https://www.youtube.com/watch?v=BGL22PTIOAM&feature=g-all-xit",
  "BGL22PTIOAM",
  "http://www.youtube.com/v/0zM3nApSvMg?fs=1&hl=en_US&rel=0",
  "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/KdwsulMb8EQ",
  "http://youtu.be/dQw4w9WgXcQ",
  "http://www.youtube.com/embed/dQw4w9WgXcQ",
  "http://www.youtube.com/v/dQw4w9WgXcQ",
  "http://www.youtube.com/e/dQw4w9WgXcQ",
  "http://www.youtube.com/watch?v=dQw4w9WgXcQ",
  "http://www.youtube.com/?v=dQw4w9WgXcQ",
  "http://www.youtube.com/watch?feature=player_embedded&v=dQw4w9WgXcQ",
  "http://www.youtube.com/?feature=player_embedded&v=dQw4w9WgXcQ",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/u/11/KdwsulMb8EQ",
  "http://www.youtube-nocookie.com/v/6L3ZvIMwZFM?version=3&hl=en_US&rel=0",
  "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
  "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
  "https://www.youtube.com/watch?v=l-gQLqv9f4o",
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
  "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "//www.youtube-nocookie.com/embed/up_lNV-yoK4?rel=0",
  "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo",
  "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
  "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
  "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
  "http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/6dwqZw0j_jY",
  "http://youtu.be/6dwqZw0j_jY",
  "http://www.youtube.com/watch?v=6dwqZw0j_jY&feature=youtu.be",
  "http://youtu.be/afa-5HQHiAs",
  "http://www.youtube.com/user/Scobleizer#p/u/1/1p3vcRhsYGo?rel=0",
  "http://www.youtube.com/watch?v=cKZDdG9FTKY&feature=channel",
  "http://www.youtube.com/watch?v=yZ-K7nCVnBI&playnext_from=TL&videos=osPknwzXEas&feature=sub",
  "http://www.youtube.com/ytscreeningroom?v=NRHVzbJVx8I",
  "http://www.youtube.com/embed/nas1rJpm7wY?rel=0",
  "http://www.youtube.com/watch?v=peFZbP64dsU",
  "http://youtube.com/v/dQw4w9WgXcQ?feature=youtube_gdata_player",
  "http://youtube.com/vi/dQw4w9WgXcQ?feature=youtube_gdata_player",
  "http://youtube.com/?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://www.youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtube.com/?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtube.com/watch?v=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtube.com/watch?vi=dQw4w9WgXcQ&feature=youtube_gdata_player",
  "http://youtu.be/dQw4w9WgXcQ?feature=youtube_gdata_player",
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
  "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "https://youtube.com/shorts/0dPkkQeRwTI?feature=share",
  "https://youtube.com/shorts/0dPkkQeRwTI",
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
  "http://youtube.googleapis.com/v/0zM3nApSvMg?fs=1&hl=en_US&rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  'http://www.youtube.com/embed/0zM3nApSvMg?rel=0"',
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "http://www.youtube.com/watch?v=0zM3nApSvMg/",
  "http://www.youtube.com/watch?feature=player_detailpage&v=8UVNT4wvIGY",
  "http://www.youtube.com/user/dreamtheater#p/u/1/oTJRivZTMLs",
  "https://youtu.be/oTJRivZTMLs?list=PLToa5JuFMsXTNkrLJbRlB--76IAOjRM9b",
  "http://www.youtube.com/watch?v=oTJRivZTMLs&feature=youtu.be",
  "https://youtu.be/oTJRivZTMLs",
  "http://youtu.be/oTJRivZTMLs&feature=channel",
  "http://www.youtube.com/ytscreeningroom?v=oTJRivZTMLs",
  "http://www.youtube.com/embed/oTJRivZTMLs?rel=0",
  "http://youtube.com/v/oTJRivZTMLs&feature=channel",
  "http://youtube.com/v/oTJRivZTMLs&feature=channel",
  "http://youtube.com/vi/oTJRivZTMLs&feature=channel",
  "http://youtube.com/?v=oTJRivZTMLs&feature=channel",
  "http://youtube.com/?feature=channel&v=oTJRivZTMLs",
  "http://youtube.com/?vi=oTJRivZTMLs&feature=channel",
  "http://youtube.com/watch?v=oTJRivZTMLs&feature=channel",
  "http://youtube.com/watch?vi=oTJRivZTMLs&feature=channel",
  "www.youtube-nocookie.com/embed/dQw4-9W_XcQ?rel=0",
  "http://www.youtube.com/user/Scobleizer#p/u/1/dQw4-9W_XcQ",
  "http://www.youtube.com/watch?v=dQw4-9W_XcQ&feature=channel",
  "http://www.youtube.com/watch?v=dQw4-9W_XcQ&playnext_from=TL&videos=osPknwzXEas&feature=sub",
  "http://www.youtube.com/ytscreeningroom?v=dQw4-9W_XcQ",
  "http://www.youtube.com/user/SilkRoadTheatre#p/a/u/2/dQw4-9W_XcQ",
  "http://youtu.be/dQw4-9W_XcQ",
  "http://www.youtube.com/watch?v=dQw4-9W_XcQ&feature=youtu.be",
  "http://youtu.be/dQw4-9W_XcQ",
  "http://www.youtube.com/user/Scobleizer#p/u/1/dQw4-9W_XcQ?rel=0",
  "http://www.youtube.com/watch?v=dQw4-9W_XcQ&playnext_from=TL&videos=dQw4-9W_XcQ&feature=sub",
  "http://www.youtube.com/ytscreeningroom?v=dQw4-9W_XcQ",
  "http://www.youtube.com/embed/dQw4-9W_XcQ?rel=0",
  "http://www.youtube.com/watch?v=dQw4-9W_XcQ",
  "http://youtube.com/v/dQw4-9W_XcQ?feature=youtube_gdata_player",
  "http://youtube.com/vi/dQw4-9W_XcQ?feature=youtube_gdata_player",
  "http://youtube.com/?v=dQw4-9W_XcQ&feature=youtube_gdata_player",
  "http://www.youtube.com/watch?v=dQw4-9W_XcQ&feature=youtube_gdata_player",
  "http://youtube.com/?vi=dQw4-9W_XcQ&feature=youtube_gdata_player",
  "http://youtube.com/watch?v=dQw4-9W_XcQ&feature=youtube_gdata_player",
  "http://youtube.com/watch?vi=dQw4-9W_XcQ&feature=youtube_gdata_player",
  "http://youtu.be/dQw4-9W_XcQ?feature=youtube_gdata_player",
  "https://www.youtube.com/shorts/FUVDVAtoRAQ",
  "https://www.youtube.com/watch?v=abcd123456 hello",
  "https://youtu.be/xyz987654 yo",
  "https://www.youtube.com/embed/ouM8z-4Uw4A hi",
  "https://www.youtube.com/watch?v=wxyz123456&t=30s 123",
  "https://www.youtube.com/watch?v=G_IQwt9ceN8&themeRefresh=1 hii",
  "https://www.youtube.com/watch?v=G_IQwt9ceN8&themeRefresh=1 uhhhu",
  "https://m.youtube.com/watch?v=6MFMju-rdUQ 23324",
  "youtube.com whatever",
  "http://www.youtube.com/watch?v=0zM3nApSvMg&feature=feedrec_grec_index",
  "http://www.youtube.com/user/IngridMichaelsonVEVO#p/a/u/1/QdK8U-VIH_o",
  "http://www.youtube.com/v/0zM3nApSvMg?fs=1&amp;hl=en_US&amp;rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg#t=0m10s",
  "http://www.youtube.com/embed/0zM3nApSvMg?rel=0",
  "http://www.youtube.com/watch?v=0zM3nApSvMg",
  "http://youtu.be/0zM3nApSvMg",
  "https://www.youtube.com/embed/vDoO_bNw7fc",
  "http://www.youtube.com/user/dreamtheater#p/u/1/oTJRivZTMLs",
  "https://youtu.be/oTJRivZTMLs?list=PLToa5JuFMsXTNkrLJbRlB--76IAOjRM9b",
  "http://www.youtube.com/watch?v=oTJRivZTMLs&feature=youtu.be",
  "https://youtu.be/oTJRivZTMLs",
  "http://youtu.be/oTJRivZTMLs&feature=channel",
  "http://www.youtube.com/ytscreeningroom?v=oTJRivZTMLs",
  "http://www.youtube.com/embed/oTJRivZTMLs?rel=0",
  "http://youtube.com/v/oTJRivZTMLs&feature=channel",
  "http://youtube.com/v/oTJRivZTMLs&feature=channel",
  "http://youtube.com/vi/oTJRivZTMLs&feature=channel",
  "http://youtube.com/?v=oTJRivZTMLs&feature=channel",
  "http://youtube.com/?feature=channel&v=oTJRivZTMLs",
  "http://youtube.com/?vi=oTJRivZTMLs&feature=channel",
  "http://youtube.com/watch?v=oTJRivZTMLs&feature=channel",
  "http://youtube.com/watch?vi=oTJRivZTMLs&feature=channel",
  "https://www.youtube.com/watch?v=UG-aKYWIcfE&pp=ygULMjQvNyBzdHJlYSw%3D",
  "https://youtube.com/playlist?list=PLqR0DrEFzD9ufgr22HZod71yFKMqekKwp&si=aVukoAKOIOR8Q8HY",
];
